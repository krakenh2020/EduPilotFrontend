let e,t,i,s,l,a=e=>e;
/*!
 * License: LGPL-2.1-or-later
 * Dependencies:
 * 
 * lit-html: BSD-3-Clause
 * lit-element: BSD-3-Clause
 * @open-wc/dedupe-mixin: MIT
 * @open-wc/scoped-elements: MIT
 * @dbp-toolkit/common: LGPL-2.1-or-later
 * @dbp-toolkit/provider: LGPL-2.1-or-later
 * @babel/runtime: MIT
 * i18next: MIT
 * qrjs: MIT
 * webcomponent-qr-code: MIT
 */import"./shared/i18next.f6eb636c.es.js";import{c as n}from"./i18n.js";import{S as r,D as o,I as c,B as p,c as d,g as m,h as u,d as h}from"./shared/dbp-lit-element.5f5e4beb.es.js";import"./shared/_commonjsHelpers.1d314e50.es.js";import{Q as b}from"./shared/qr-code.b8242cdc.es.js";const g=n();class y extends(r(o)){constructor(){super(),this.lang=g.language,this.exporting=!1}static get scopedElements(){return{"dbp-icon":c,"dbp-button":p,"dbp-qr-code":b}}static get properties(){return{lang:{type:String},exporting:{type:Boolean,attribute:!1}}}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":g.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return d(e||(e=a`
            ${0}
            
            .vc-list {
              list-style: none;
              padding: 0;
            }

            .vc-list li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 1rem;
            }
        `),m())}export(){console.log("export"),this.exporting=!0}render(){if(!window.DBPAuthToken)return u(t||(t=a`
                <p>${0}</p>
            `),g.t("please-login"));if(!this.exporting){const e=["Bachelor of Science in Engineering","Bachelor of Arts"].map((e=>u(i||(i=a`
                <li>
                    ${0}
                    <dbp-button type="is-primary" value="Export" no-spinner-on-click="true" @click="${0}" />
                </li>
            `),e,(()=>this.export()))));return u(s||(s=a`
                <ul class="vc-list">
                    ${0}
                </ul>
            `),e)}return u(l||(l=a`
            <p>
                ${0}
            </p>

            <dbp-qr-code
              data="${0}"
              format="svg"
              modulesize="5"
              margin="1"
            ></dbp-qr-code><br />

            <p>
                ${0}
            </p>
            <ul>
                <li><a href="http://minerva.digital/" target="_blank">Minerva Wallet</a></li>
                <li>Browser wallet</li>
            </ul>
        `),g.t("issue-diploma.scan"),"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJkZWdyZWUiOnsidHlwZSI6IkJhY2hlbG9yRGVncmVlIiwibmFtZSI6IkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifX0sIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl19LCJzdWIiOiIiLCJuYmYiOjE2MTI0MjY5OTYsImlzcyI6ImRpZDpldGhyOmFydGlzX3QxOjB4MWViOWEwZDk5YjE4Yjc4YjJmNjdhNDBmYTA5ZmRhODQ2MzVlZjk2NyJ9.7upzlCL3FJieO35TQa4_y9PlmEotXKphtRd9cstWt4Db2LICBl9RT3_aRl0aBRlHs29JJKQWEMSLwnWJOXsYAw",g.t("wallets"))}}h("issue-diploma",y);
//# sourceMappingURL=issue-diploma.js.map
