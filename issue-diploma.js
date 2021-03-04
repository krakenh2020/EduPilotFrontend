let t,e,i,s,a,r=t=>t;
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
 */import{c as l}from"./i18n.js";import{S as n,D as p,I as o,B as d,c,g as h,h as m,d as u}from"./shared/dbp-lit-element.798cce61.es.js";import{Q as y}from"./shared/qr-code.06ebce81.es.js";import"./shared/i18next.4eb888a0.es.js";const g=l();class b extends(n(p)){constructor(){super(),this.lang=g.language,this.exporting=!1,this.fetchDiplomas().then((t=>{this.diplomas=t}))}static get scopedElements(){return{"dbp-icon":o,"dbp-button":d,"dbp-qr-code":y}}static get properties(){return{lang:{type:String},exporting:{type:Boolean,attribute:!1},exportingId:{type:String},diplomas:{type:Array}}}connectedCallback(){super.connectedCallback()}update(t){t.forEach(((t,e)=>{switch(e){case"lang":g.changeLanguage(this.lang)}})),super.update(t)}static get styles(){return c(t||(t=r`
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
        `),h())}export(t){console.log("export"),this.exporting=!0,this.exportingId=t}async httpGetAsync(t,e){return await fetch(t,e).then((t=>{if(!t.ok)throw t;return t.json()}))}async fetchDiplomas(){const t={headers:{Authorization:"Bearer "+window.DBPAuthToken}};return(await this.httpGetAsync("http://127.0.0.1:8000/diplomas?page=1",t))["hydra:member"]}render(){if(!window.DBPAuthToken)return m(e||(e=r`
                <p>${0}</p>
            `),g.t("please-login"));if(!this.exporting){const t=this.diplomas.map((t=>m(i||(i=r`
                <li>
                    <div>
                        <strong>${0}</strong><br />
                        ${0}<br />
                        ${0}<br />
                    </div>
                    <dbp-button type="is-primary" value="Export" no-spinner-on-click="true" @click="${0}" />
                </li>
            `),t.name,t.academicDegree,t.achievenmentDate,(()=>this.export(t["@id"])))));return m(s||(s=r`
                <ul class="vc-list">
                    ${0}
                </ul>
            `),t)}return m(a||(a=r`
            <p>
                ${0}
            </p>
            
            <pre>${0}</pre>

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
        `),g.t("issue-diploma.scan"),JSON.stringify(this.diplomas.filter((t=>t["@id"]===this.exportingId))[0],null,2),"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJkZWdyZWUiOnsidHlwZSI6IkJhY2hlbG9yRGVncmVlIiwibmFtZSI6IkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifX0sIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl19LCJzdWIiOiIiLCJuYmYiOjE2MTI0MjY5OTYsImlzcyI6ImRpZDpldGhyOmFydGlzX3QxOjB4MWViOWEwZDk5YjE4Yjc4YjJmNjdhNDBmYTA5ZmRhODQ2MzVlZjk2NyJ9.7upzlCL3FJieO35TQa4_y9PlmEotXKphtRd9cstWt4Db2LICBl9RT3_aRl0aBRlHs29JJKQWEMSLwnWJOXsYAw",g.t("wallets"))}}u("issue-diploma",b);
//# sourceMappingURL=issue-diploma.js.map
