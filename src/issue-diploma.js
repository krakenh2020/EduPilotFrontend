import {createI18nInstance} from './i18n.js';
import {css, html} from 'lit-element';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';
import * as commonUtils from '@dbp-toolkit/common/utils';
import {Button, Icon} from '@dbp-toolkit/common';
import * as commonStyles from '@dbp-toolkit/common/styles';
import {AdapterLitElement} from '@dbp-toolkit/provider/src/adapter-lit-element';
import QRCode from 'webcomponent-qr-code/qr-code';

const i18n = createI18nInstance();


class IssueDiploma extends ScopedElementsMixin(AdapterLitElement) {
    constructor() {
        super();
        this.auth = {};
        this.entryPointUrl = '';
        this.lang = i18n.language;
        this.exporting = false;
    }

    static get scopedElements() {
        return {
            'dbp-icon': Icon,
            'dbp-button': Button,
            'dbp-qr-code': QRCode,
        };
    }

    static get properties() {
        return {
            ...super.properties,
            lang: { type: String },
            exporting: { type: Boolean, attribute: false },
            exportingId: { type: String },
            diplomas: { type: Array },
            auth: { type: Object },
            entryPointUrl: { type: String, attribute: 'entry-point-url' },
        };
    }

    connectedCallback() {
        super.connectedCallback();
    }

    update(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            switch (propName) {
                case "lang":
                    i18n.changeLanguage(this.lang);
                    break;
                case "entryPointUrl":
                    this.fetchDiplomas().then((diplomas) => {
                        this.diplomas = diplomas;
                    });
                    break;
            }
        });

        super.update(changedProperties);
    }

    static get styles() {
        // language=css
        return css`
            ${commonStyles.getThemeCSS()}
            
            .vc-list {
              list-style: none;
              padding: 0;
            }

            .vc-list li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 1rem;
            }

            .success {
                font-size: 10rem;
                line-height: 10rem;
                color: green;
            }
        `;
    }

    async triggerSendOffer(myDid, theirDid) {
        const options = {
            method: 'post',
            headers: {
                Authorization: "Bearer " + this.auth.token,
                'Content-Type': 'application/ld+json'
            },
            body: JSON.stringify({
                myDid,
                theirDid,
                status: 'requesting...'
            })
        };
        const url = this.entryPointUrl + '/credential/send_offer';
        const resp = await this.httpGetAsync(url, options);
        return resp;
    }

    async acceptRequest(piid, id) {
        // todo: don't send id via status field.
        const options = {
            method: 'post',
            headers: {
                Authorization: "Bearer " + this.auth.token,
                'Content-Type': 'application/ld+json'
            },
            body: JSON.stringify({
                myDid: piid,
                theirDid: 'none',
                status: id
            })
        };
        const url = this.entryPointUrl + '/credential/accept_request';
        const resp = await this.httpGetAsync(url, options);
        return resp;
    }

    async export(id) {
        console.log('export');

        const myDID = sessionStorage.getItem('did-comm-MyDID');
        const theirDID = sessionStorage.getItem('did-comm-TheirDID');

        if (!myDID || !theirDID) {
            alert('no connection :(');
            return;
        }

        const res = await this.triggerSendOffer(myDID, theirDID);
        console.log('triggerSendOffer', res);
        const piid = JSON.parse(res.myDid).piid;

        const invervalId = setInterval(async () => {
            const res2 = await this.acceptRequest(piid, id);
            if (res2.myDid !== '') {
                console.log('request accepted');

                clearInterval(invervalId);

                this.exporting = true;
                this.exportingId = id;
            }
        }, 1000);
    }

    async httpGetAsync(url, options) {
        let response = await fetch(url, options).then(result => {
            if (!result.ok) throw result;
            return result.json();
        });

        return response;
    }

    async fetchDiplomas() {
        const options = {
            headers: {
                Authorization: "Bearer " + this.auth.token
            }
        };
        const url = this.entryPointUrl + '/diplomas?page=1';
        const resp = await this.httpGetAsync(url, options);
        return resp['hydra:member'];
    }

    // todo: maybe derive diploma and grades from the same activity
    // todo: check for login
    // todo: check if did auth is done
    // todo: fetch list of diplomas
    // todo: modal with vc qr code
    // todo: select format, select schema
    render() {
        if (!this.auth.token) {
            return html`
                <p>${i18n.t('please-login')}</p>
            `;
        }

        if (!this.exporting) {

            const diplomaList = this.diplomas.map((d) => html`
                <li>
                    <div>
                        <strong>${d.name}</strong><br />
                        ${d.academicDegree}<br />
                        ${d.achievenmentDate}<br />
                    </div>
                    <dbp-button type="is-primary" value="Export" no-spinner-on-click="true" @click="${() => this.export(d['@id'])}" />
                </li>
            `);

            return html`
                <ul class="vc-list">
                    ${diplomaList}
                </ul>
            `;
        }

        return html`
            <p>
                ${i18n.t('issue-diploma.scan')}
            </p>

            <span class="success">✔</span><br />
            
            <pre>${JSON.stringify(this.diplomas.filter((d) => d['@id'] === this.exportingId)[0], null, 2)}</pre>
        `;
    }
}

commonUtils.defineCustomElement('issue-diploma', IssueDiploma);
