import {createI18nInstance} from './i18n.js';
import {css, html} from 'lit-element';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';
import * as commonUtils from '@dbp-toolkit/common/utils';
import {Button, Icon} from '@dbp-toolkit/common';
import * as commonStyles from '@dbp-toolkit/common/styles';
import {AdapterLitElement} from '@dbp-toolkit/provider/src/adapter-lit-element';
import QRCode from "webcomponent-qr-code/qr-code";

const i18n = createI18nInstance();


class IssueGrades extends ScopedElementsMixin(AdapterLitElement) {
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
            courseGrades: { type: Array },
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
                    this.fetchCourseGrades().then((grades) => {
                        this.courseGrades = grades;
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

    getAuthHeaders(withJson = false) {
        let headers =  {};
        if(withJson) {
            headers = { 'Content-Type': 'application/ld+json' };
        }
        if(this.auth.token) {
            headers.Authorization = "Bearer " + this.auth.token;
        } 
        return headers;
    }

    getAuthOptions(withJson = false) {
        let options = {};
        let headers =  this.getAuthHeaders(withJson);
        options = {
            headers: headers
        };
        return options;
    }

    async triggerSendOffer(myDid, theirDid, id) {
        const options = {
            method: 'post',
            headers: this.getAuthHeaders(true),
            body: JSON.stringify({
                myDid,
                theirDid,
                status: id
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
            headers: this.getAuthHeaders(true),
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
        console.log('export credential', id);

        const myDID = sessionStorage.getItem('did-comm-MyDID');
        const theirDID = sessionStorage.getItem('did-comm-TheirDID');

        if (!myDID || !theirDID) {
            alert('No wallet app connected. Please connect your wallet first.');
            return;
        }

        const res = await this.triggerSendOffer(myDID, theirDID, id);
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

    async exportBatch(id) {
        console.log('export credential to batch exporter', id);

        const options = {
            method: 'post',
            headers: this.getAuthHeaders(true),
            body: JSON.stringify({
                "",
                "",
                status: id
            })
        };
        const url = this.entryPointUrl + '/credential/export_cred';
        const resp = await this.httpGetAsync(url, options);
        return resp;
    }

    async httpGetAsync(url, options) {
        console.log('httpGetAsync', url);
        const result = await fetch(url, options);
        if (!result.ok)
            throw Error(url+' '+result.status+' '+result.statusText); 
        return result.json();
    }

    async fetchCourseGrades() {
        const options = this.getAuthOptions(false);
        const url = this.entryPointUrl + '/course-grades?page=1';
        const resp = await this.httpGetAsync(url, options);
        return resp['hydra:member'];
    }

    // todo: maybe derive diploma and grades from the same activity
    render() {
        if (!this.auth.token) {
            return html`
                <p>${i18n.t('please-login')}</p>
            `;
        }

        if (!this.exporting) {
            const coursesList = this.courseGrades.map((d) => html`
                <li>
                    <div>
                        <strong>${d.name}</strong><br />
                        ${d.credits} ECTS<br />
                        ${d.grade} Grade<br />
                        ${d.achievenmentDate}<br />
                    </div>
                    <dbp-button type="is-primary" value="Export to Wallet" no-spinner-on-click="true" @click="${() => this.export(d['@id'])}" />
                    <dbp-button type="is-primary" value="Provide to University" no-spinner-on-click="true" @click="${() => this.exportBatch(d['@id'])}" />
                </li>
            `);

            return html`
                <ul class="vc-list">
                    ${coursesList}
                </ul>
            `;
        }

        return html`
            <p>
                ${i18n.t('issue-grades.scan')}
            </p>

            <span class="success">✔</span><br />

            <pre>${JSON.stringify(this.courseGrades.filter((d) => d['@id'] === this.exportingId)[0], null, 2)}</pre>
        `;
    }
}

commonUtils.defineCustomElement('issue-grades', IssueGrades);
