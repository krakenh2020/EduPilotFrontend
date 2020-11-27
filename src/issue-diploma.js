import {createI18nInstance} from './i18n.js';
import {css, html} from 'lit-element';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';
import * as commonUtils from '@dbp-toolkit/common/utils';
import {Button, Icon} from '@dbp-toolkit/common';
import * as commonStyles from '@dbp-toolkit/common/styles';
import DBPLitElement from '@dbp-toolkit/common/dbp-lit-element';

const i18n = createI18nInstance();


class IssueDiploma extends ScopedElementsMixin(DBPLitElement) {
    constructor() {
        super();
        this.lang = i18n.language;
    }

    static get scopedElements() {
        return {
            'dbp-icon': Icon,
            'dbp-button': Button,
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
            
            ul {
              list-style: none;
              padding: 0;
            }
            
            ul li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 1rem;
            }
        `;
    }

    export() {
        console.log('export');
    }

    // todo: maybe derive diploma and grades from the same activity
    // todo: check for login
    // todo: check if did auth is done
    // todo: fetch list of diplomas
    // todo: modal with vc qr code
    // todo: select format, select schema
    render() {
        const diplomas = [
          'Bachelor of Science in Engineering',
          'Bachelor of Arts'
        ];

        const diplomaList = diplomas.map((d) => html`
            <li>
                ${d}
                <dbp-button type="is-primary" value="Export" no-spinner-on-click="true" @click="${() => this.export()}" />
            </li>
        `);

        return html`
            <ul>
                ${diplomaList}
            </ul>
        `;
    }
}

commonUtils.defineCustomElement('issue-diploma', IssueDiploma);
