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
            waitingForAccept: { type: Boolean, attribute: false },
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

    getAuthHeaders(withJson = false, ignoreAuth = false) {
        let headers =  {};
        if(withJson) {
            headers = { 'Content-Type': 'application/ld+json' };
        }
        if(this.auth.token && !ignoreAuth) {
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

        const myDID = localStorage.getItem('did-comm-MyDID');
        const theirDID = localStorage.getItem('did-comm-TheirDID');

        if (!myDID || !theirDID) {
            alert('No wallet app connected. Please connect your wallet first.');
            return;
        }

        const res = await this.triggerSendOffer(myDID, theirDID, id);
        console.log('triggerSendOffer', res);
        const piid = JSON.parse(res.myDid).piid;

        // notify user to accept credential offer on the phone
        this.waitingForAccept = true;

        const invervalId = setInterval(async () => {
            const res2 = await this.acceptRequest(piid, id);
            if (res2.myDid !== '') {
                console.log('request accepted');

                clearInterval(invervalId);

                this.waitingForAccept = false;
                this.exporting = true;
                this.exportingId = id;

                setTimeout(function(){ this.exporting = false; }, 2000);
            }
        }, 1000);
    }

    async exportBatch(id, button) {
        console.log('export credential to batch exporter', id);

        const options = {
            method: 'post',
            headers: this.getAuthHeaders(true, true),
            body: JSON.stringify({
                myDid: 'none',
                theirDid: 'none',
                status: id
            })
        };

        const url = this.entryPointUrl + '/credential/export_cred';

        try {
            const resp = await this.httpGetAsync(url, options);

            console.log('export credential to batch exporter done', resp);
            button.stop();
            button.disabled = true;
            button.type = "is-success";
            localStorage.setItem('batch' + id, 'is-success');

            return resp;
        } catch(e) {
            console.error("export credential error:", e);
            button.stop();
            button.disabled = true;
            button.type = "is-danger";
            localStorage.setItem('batch' + id, 'is-danger');
            localStorage.setItem('batch-disabled-' + id, "true");
            return;
        }
    }

    getExportButtonType(id) {
        return localStorage.getItem('batch' + id) || 'is-info';
    }
    getExportButtonDisabled(id) {
        return localStorage.getItem('batch-disabled-' + id) || "false";
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

        if (!localStorage.getItem('did-comm-MyDID') || !localStorage.getItem('did-comm-TheirDID')) {
            return html`
            <p>
            No wallet app connected. Please connect your wallet first.
            </p>
            `;
        }

        if(this.waitingForAccept) {
            return html`
            <p>
            <dbp-mini-spinner class="spinner" style="font-size: 3em"></dbp-mini-spinner>
            Credential offer sens! 
            </p>
            <ol>
                <li>Please open the SSI wallet app (e.g. ledger uSelf) on your phone.</li>
                <li>Go to the "Credentials" tab and accept the credential offer.</li>
            </ol>
            `;
        }

        if (this.exporting) {
            return html`
            <p>
                ${i18n.t('issue-grades.scan')}
            </p>

            <span class="success">✔</span><br />
            `;
        }

        if(!this.courseGrades) {
            return html`
                  loading...
                `;
        }
        
        const coursesList = this.courseGrades.map((d) => html`
            <li>
                <div>
                    <strong>${d.name}</strong><br />
                    ${d.credits} ECTS<br />
                    ${d.grade} Grade<br />
                    ${d.achievenmentDate}<br />
                </div>
                <div>
                    <dbp-button type="is-primary" value="Export to SSI Wallet" @click="${() => this.export(d['@id'])}"></dbp-button> </br>
                    <dbp-button type="${this.getExportButtonType(d['@id'])}" disabled="${this.getExportButtonDisabled(d['@id'])}" value="Allow     Computation" @click="${(e) => this.exportBatch(d['@id'], e.target)}"></dbp-button>
                </div>
            </li>
            `);

        return html`
            <ul class="vc-list">
                ${coursesList}
            </ul>
        `;
       
    }
}

commonUtils.defineCustomElement('issue-grades', IssueGrades);
