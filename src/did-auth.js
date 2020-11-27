import {createI18nInstance} from './i18n.js';
import {css, html} from 'lit-element';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';
import * as commonUtils from '@dbp-toolkit/common/utils';
import {Icon} from '@dbp-toolkit/common';
import * as commonStyles from '@dbp-toolkit/common/styles';
import DBPLitElement from '@dbp-toolkit/common/dbp-lit-element';
import QRCode from "webcomponent-qr-code/qr-code";

const i18n = createI18nInstance();


class DidAuth extends ScopedElementsMixin(DBPLitElement) {
    constructor() {
        super();
        this.lang = i18n.language;
        // todo: get authentication status from api server.
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
            lang: { type: String },
            authenticated: { type: Boolean, attribute: false }
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

            
        `;
    }

    // todo: remove this, it is only here for demo purposes
    tempNext() {
        this.authenticated = true;
    }

    // todo: confirmation screen
    // todo: i18n
    // todo: re-authenticate
    render() {
        if (!this.authenticated) {
            return html`
            <p>
              *select method?*
            </p>
            
            <dbp-qr-code
                data="hello world!"
                format="svg"
                modulesize="10"
                margin="1"
                @click="${() => this.tempNext()}"
            ></dbp-qr-code><br />
            
            Scan me...<br />
            
            with a SSI Wallet: *list of wallets*
        `;
        }

        return html`
            <img src="#" alt="success" /><br />
            
            <p>Authenticated!</p>
            
            Now you can export diplomas or grades!
        `;
    }
}

commonUtils.defineCustomElement('did-auth', DidAuth);
