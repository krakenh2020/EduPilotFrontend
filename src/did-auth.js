import {createI18nInstance} from './i18n.js';
import {css, html} from 'lit-element';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';
import * as commonUtils from '@dbp-toolkit/common/utils';
import {Icon} from '@dbp-toolkit/common';
import * as commonStyles from '@dbp-toolkit/common/styles';
import {AdapterLitElement} from '@dbp-toolkit/provider/src/adapter-lit-element';
import QRCode from 'webcomponent-qr-code/qr-code';

const i18n = createI18nInstance();

export class DidAuth extends ScopedElementsMixin(AdapterLitElement) {
    constructor() {
        super();
        this.auth = {};
        this.entryPointUrl = '';
        this.lang = i18n.language;
        this.authenticated = false;
    }

    static get scopedElements() {
        return {
            'dbp-icon': Icon,
            'dbp-qr-code': QRCode
        };
    }

    static get properties() {
        return {
            ...super.properties,
            lang: { type: String },
            auth: { type: Object },
            entryPointUrl: { type: String, attribute: 'entry-point-url' },
            authenticated: { type: Boolean, attribute: false },
            didCommInvite: { type: String },
            intervalId: { type: Number },
        };
    }

    async connectedCallback() {
        super.connectedCallback();

        this.didCommInvite = await this.fetchDidCommInvite();

        this.intervalId = setInterval(async () => {
            if (this.didCommInvite === null) {
                return;
            }
            console.log('Waiting for invite to get accepted by student ...');

            const didCommInviteDecoded = JSON.parse(this.didCommInvite);
            const inviteId = didCommInviteDecoded.invitation['@id'];
            console.log(inviteId);
            try {
                const res = await this.fetchDidCommInviteStatus(inviteId);
                const resJson = JSON.parse(res);
                console.log('Invite accepted! ', resJson);
                this.authenticated = true;
                clearInterval(this.intervalId);

                localStorage.setItem('did-comm-MyDID', resJson.MyDID);
                localStorage.setItem('did-comm-TheirDID', resJson.TheirDID);

            } catch (error) {
                console.log('Invite not accepted yet. :(');
            }

        }, 1000);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    update(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            switch (propName) {
                case "lang":
                    i18n.changeLanguage(this.lang);
                    break;
            }
        });

        super.update(changedProperties);
    }

    static get styles() {
        // language=css
        return css`
            ${commonStyles.getThemeCSS()}
            
            .success {
                font-size: 10rem;
                line-height: 10rem;
                color: green;
            }

            .qr-wrap {
                width: fit-content;
                text-align: center;
            }
            
            #copyText {
                position: absolute;
                left: 10000rem;
                opacity: 0;
            }
        `;
    }

    async httpGetAsync(url, options) {
        console.log('httpGetAsync', url);
        const result = await fetch(url, options);
        if (!result.ok)
            throw Error(url+' '+result.status+' '+result.statusText); 
        return result.json();
    }

    getAuthOptions() {
        let options = {};
        if(this.auth.token) {
            options = {
                headers: {
                    Authorization: "Bearer " + this.auth.token
                }
            };
        } 
        return options;
    }

    async fetchDidCommInvite() {
        console.log('fetchDidCommInvite');
        let options = this.getAuthOptions();
        
        const url = this.entryPointUrl + '/did-connections?page=1';
        const resp = await this.httpGetAsync(url, options);
        let data = resp['hydra:member'][0];
        if(!('invitation' in data)) {
            console.log('received invite: ', data);
            throw Error('Requested invite, received JSON object without "invitation" ...');
        }
        return data.invitation;
    }

    async fetchDidCommInviteStatus(inviteId) {
        let options = this.getAuthOptions();
        const url = this.entryPointUrl + '/did-connections/' + inviteId;
        const resp = await this.httpGetAsync(url, options);
        return resp.invitation;
    }

    async onCopy(event) {
        event.preventDefault();
        const copyText = event.currentTarget.previousElementSibling;
        copyText.select();
        copyText.setSelectionRange(0, 1000000);
        document.execCommand('copy');
    }

    // todo: check if already verified.. (polling)
    // todo: re-authenticate
    // todo: fix link to other pages.. (use router, without page reload.)
    render() {
        if (!this.auth.token) {
            return html`
                <p>${i18n.t('please-login')}</p>
            `;
        }

        if (!this.authenticated) {
            //const qrData = btoa(this.didCommInvite);
            // BUG 2021-10-18: Our QR Code contains the base64 encoded JSON structure, but Atos' wallet assumes it contains the plain JSON (without b64) ...
            const qrData = this.didCommInvite;

            if (!this.didCommInvite) {
                return html`
                  loading...
                `;
            }

            return html`
            <p>
                ${i18n.t('did-auth.scan')}
            </p>

            <p>
                ${i18n.t('did-auth.download1')} <a href="https://kraken-edu.iaik.tugraz.at/kraken.apk">${i18n.t('did-auth.download2')}</a>.
            </p>
            
            <div class="qr-wrap">
                <dbp-qr-code
                    data="${qrData}"
                    format="svg"
                    modulesize="5"
                    margin="1"
                ></dbp-qr-code>
                <div>
                    <input id="copyText" type="text" value="${this.didCommInvite}" />
                    <a href="#" @click="${(e) => this.onCopy(e)}">Copy to clipboard.</a>
                </div>
            </div>
        `;
        }

        // todo: localize
        return html`
            <span class="success">✔</span><br />
            
            <p>${i18n.t('did-auth.success')}</p>
            
            <p>
                Now you can export diplomas
                and grades.
            </p>
        `;
    }
}

commonUtils.defineCustomElement('did-auth', DidAuth);
