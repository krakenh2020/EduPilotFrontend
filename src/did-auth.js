import {createI18nInstance} from './i18n.js';
import {css, html} from 'lit-element';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';
import * as commonUtils from '@dbp-toolkit/common/utils';
import {Icon} from '@dbp-toolkit/common';
import * as commonStyles from '@dbp-toolkit/common/styles';
import {AdapterLitElement} from '@dbp-toolkit/provider/src/adapter-lit-element';
import QRCode from 'webcomponent-qr-code/qr-code';

// todo: this should anyway happen in the backend..
/*
import { Credentials, SimpleSigner } from 'uport-credentials';
import { Resolver } from 'did-resolver';
import { getResolver } from 'ethr-did-resolver';

// todo: use env vars for this.
const chainRpc = '';
const regiAddr = '';
const regiNet = '';
const appDid = '';
const privKey = '';
const discloseRqExpires = 600;

const providerConfig = {
    rpcUrl: chainRpc,
    registry: regiAddr,
    networks: [
        { name: regiNet, rpcUrl: chainRpc },
    ],
};

const resolver = new Resolver(getResolver(providerConfig));

const signer = SimpleSigner(privKey.toStr());

const credential = new Credentials({
    did: appDid,
    signer,
    resolver,
});
 */

const i18n = createI18nInstance();


class DidAuth extends ScopedElementsMixin(AdapterLitElement) {
    constructor() {
        super();
        this.auth = {};
        this.entryPointUrl = '';
        this.lang = i18n.language;
        // todo: get authentication status from api server.
        this.authenticated = false;
        this.methodSelected = 'ethr-did';


        this.intervalId = setInterval(async () => {
            if (this.methodSelected !== 'did-comm') {
                return;
            }

            const didCommInviteDecoded = JSON.parse(this.didCommInvite);
            const inviteId = didCommInviteDecoded.invitation['@id'];
            console.log(inviteId);
            try {
                const res = await this.fetchDidCommInviteStatus(inviteId);
                const resJson = JSON.parse(res);
                console.log('Invite accepted! ', resJson);
                this.authenticated = true;
                clearInterval(this.intervalId);

                sessionStorage.setItem('did-comm-MyDID', resJson.MyDID);
                sessionStorage.setItem('did-comm-TheirDID', resJson.TheirDID);

            } catch (error) {
                console.log('Invite not accepted yet. :(');
            }

        }, 1000);
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
            authenticated: { type: Boolean, attribute: false },
            methodSelected: { type: String },
            didCommInvite: { type: String },
            intervalId: { type: Number },
            auth: { type: Object },
            entryPointUrl: { type: String, attribute: 'entry-point-url' },
        };
    }

    connectedCallback() {
        super.connectedCallback();
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
        `;
    }

    async httpGetAsync(url, options) {
        let response = await fetch(url, options).then(result => {
            if (!result.ok) throw result;
            return result.json();
        });

        return response;
    }

    async fetchDidCommInvite() {
        const options = {
            headers: {
                Authorization: "Bearer " + this.auth.token
            }
        };
        const url = this.entryPointUrl + '/did_connections?page=1';
        const resp = await this.httpGetAsync(url, options);
        return resp['hydra:member'][0].invitation;
    }

    async fetchDidCommInviteStatus(inviteId) {
        const options = {
            headers: {
                Authorization: "Bearer " + this.auth.token
            }
        };
        const url = this.entryPointUrl + '/did_connections/' + inviteId;
        const resp = await this.httpGetAsync(url, options);
        return resp.invitation;
    }

    async onMethodSelect(e) {
        const newMethod = e.currentTarget.value;
        if (newMethod === 'did-comm' && !this.didCommInvite) {
            this.didCommInvite = await this.fetchDidCommInvite();
        }
        this.methodSelected = newMethod;
    }

    // todo: check if already verified.. (polling)
    // uport:
    // todo: use uport-credentials to generate qr code...
    // todo: (is the uport wallet supported?)
    // todo: re-authenticate
    // todo: fix link to other pages.. (use router, without page reload.)
    render() {
        if (!this.auth.token) {
            return html`
                <p>${i18n.t('please-login')}</p>
            `;
        }

        if (!this.authenticated) {
            const qrDataUport = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE2MTI0MjQ2MzUsImV4cCI6MTYxMjQyNTIzNSwicmVxdWVzdGVkIjpbXSwiY2FsbGJhY2siOiJodHRwOi8vNzQwNjc2NDIubmdyb2suaW8vIiwidHlwZSI6InNoYXJlUmVxIiwiaXNzIjoiZGlkOmV0aHI6YXJ0aXNfdDE6MHhjMjExN0EzMzFiMzE5NWI2NTQ1NzdCQjU1OTY1QzhlNjlGYzU5MTliIn0.M3bQmSGf0ZCQCX74LFPkr-a5eEp8yopuxWQx33RQTTGRMYu9nXAoJw_DmS00Jxx32aCGJ6fVflXprOgsAtVM5AE';
            const qrDataDidComm = btoa(this.didCommInvite);
            const qrData = this.methodSelected === 'ethr-did' ? qrDataUport : qrDataDidComm;

            return html`
            <div>
                <label>${i18n.t('did-auth.select-method')}</label>
                <br />
                <select @change="${(e) => this.onMethodSelect(e)}">
                    <option value="ethr-did">Ethr-DID (uport shareReq) (todo)</option>
                    <option value="did-comm">DidComm (aries-framework-go)</option>
                </select>
            </div>
            
            <p>
                ${i18n.t('did-auth.scan')}
            </p>
            
            <dbp-qr-code
                data="${qrData}"
                format="svg"
                modulesize="5"
                margin="1"
            ></dbp-qr-code><br />
            
            <pre>${qrData}</pre>
            
            <p>
                ${i18n.t('wallets')}
            </p>
            <ul>
                <li><a href="http://minerva.digital/" target="_blank">Minerva Wallet</a></li>
                <li>Browser wallet</li>
            </ul>
        `;
        }

        // todo: localize
        return html`
            <span class="success">✔</span><br />
            
            <p>${i18n.t('did-auth.success')}</p>
            
            <p>
                Now you can export <a href="/dist/de/issue-diploma">diplomas</a>
                or <a href="/dist/de/issue-grades">grades</a>.
            </p>
        `;
    }
}

commonUtils.defineCustomElement('did-auth', DidAuth);
