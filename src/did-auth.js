import {createI18nInstance} from './i18n.js';
import {css, html} from 'lit-element';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';
import * as commonUtils from '@dbp-toolkit/common/utils';
import {Icon} from '@dbp-toolkit/common';
import * as commonStyles from '@dbp-toolkit/common/styles';
import DBPLitElement from '@dbp-toolkit/common/dbp-lit-element';
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


class DidAuth extends ScopedElementsMixin(DBPLitElement) {
    constructor() {
        super();
        this.lang = i18n.language;
        // todo: get authentication status from api server.
        this.authenticated = false;
        //this.auth = {};
    }

    static get scopedElements() {
        return {
            'dbp-icon': Icon,
            'dbp-qr-code': QRCode
        };
    }

    static get properties() {
        return {
            lang: { type: String },
            authenticated: { type: Boolean, attribute: false },
            //auth: { type: Object },
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

    // todo: remove this, it is only here for demo purposes
    tempNext() {
        this.authenticated = true;
    }

    // todo: check if already verified..
    // todo: use uport-credentials to generate qr code...
    // todo: (is the uport wallet supported?)
    // todo: confirmation screen
    // todo: i18n
    // todo: re-authenticate
    // todo: fix link to other pages.. (use router, without page reload.)
    render() {
        if (!window.DBPAuthToken) {
            return html`
                <p>${i18n.t('please-login')}</p>
            `;
        }

        if (!this.authenticated) {
            const qrData = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE2MTI0MjQ2MzUsImV4cCI6MTYxMjQyNTIzNSwicmVxdWVzdGVkIjpbXSwiY2FsbGJhY2siOiJodHRwOi8vNzQwNjc2NDIubmdyb2suaW8vIiwidHlwZSI6InNoYXJlUmVxIiwiaXNzIjoiZGlkOmV0aHI6YXJ0aXNfdDE6MHhjMjExN0EzMzFiMzE5NWI2NTQ1NzdCQjU1OTY1QzhlNjlGYzU5MTliIn0.M3bQmSGf0ZCQCX74LFPkr-a5eEp8yopuxWQx33RQTTGRMYu9nXAoJw_DmS00Jxx32aCGJ6fVflXprOgsAtVM5AE';
            return html`
            <div>
                <label>${i18n.t('did-auth.select-method')}</label>
                <br />
                <select>
                    <option value="ethr-did">Ethr-DID (uport shareReq)</option>
                    <option value="did-comm" disabled>DidComm (todo)</option>
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
                @click="${() => this.tempNext()}"
            ></dbp-qr-code><br />
            
            <p>
                ${i18n.t('wallets')}
            </p>
            <ul>
                <li><a href="http://minerva.digital/" target="_blank">Minerva Wallet</a></li>
                <li>Browser wallet</li>
            </ul>
        `;
        }

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
