import {createI18nInstance} from './i18n.js';
import {css, html} from 'lit-element';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';
import * as commonUtils from '@dbp-toolkit/common/utils';
import {Icon} from '@dbp-toolkit/common';
import * as commonStyles from '@dbp-toolkit/common/styles';
import DBPLitElement from '@dbp-toolkit/common/dbp-lit-element';
import {QrCodeScanner} from "@dbp-toolkit/qr-code-scanner";

const i18n = createI18nInstance();


class VerifyVc extends ScopedElementsMixin(DBPLitElement) {
    constructor() {
        super();
        this.lang = i18n.language;
    }

    static get scopedElements() {
        return {
            'dbp-icon': Icon,
            'dbp-code-scanner': QrCodeScanner
        };
    }

    static get properties() {
        return {
            lang: { type: String },
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

    // todo: upload?
    // todo: confirmation screen
    render() {
        return html`
            <dbp-code-scanner
                lang="${this.lang}"
                @scan-started="${(e) => console.log('scan-started', e)}"
                @code-detected="${(e) => console.log('code-detected', e)}"
            ></dbp-code-scanner>
        `;
    }
}

commonUtils.defineCustomElement('verify-vc', VerifyVc);
