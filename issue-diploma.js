let e,t,i,s,a,r=e=>e;
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
 */import"./shared/i18next.f6eb636c.es.js";import{c as l}from"./i18n.js";import{S as n,D as o,I as p,B as d,c,g as h,h as m,d as u}from"./shared/dbp-lit-element.5f5e4beb.es.js";import"./shared/_commonjsHelpers.1d314e50.es.js";import{Q as y}from"./shared/qr-code.b8242cdc.es.js";const g=l();class b extends(n(o)){constructor(){super(),this.lang=g.language,this.exporting=!1,this.fetchDiplomas().then((e=>{this.diplomas=e}))}static get scopedElements(){return{"dbp-icon":p,"dbp-button":d,"dbp-qr-code":y}}static get properties(){return{lang:{type:String},exporting:{type:Boolean,attribute:!1},exportingId:{type:String},diplomas:{type:Array}}}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":g.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return c(e||(e=r`
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
        `),h())}export(e){console.log("export"),this.exporting=!0,this.exportingId=e}async httpGetAsync(e,t){return await fetch(e,t).then((e=>{if(!e.ok)throw e;return e.json()}))}async fetchDiplomas(){const e={headers:{Authorization:"Bearer "+window.DBPAuthToken}};return(await this.httpGetAsync("http://127.0.0.1:8000/diplomas?page=1",e))["hydra:member"]}render(){if(!window.DBPAuthToken)return m(t||(t=r`
                <p>${0}</p>
            `),g.t("please-login"));if(!this.exporting){const e=this.diplomas.map((e=>m(i||(i=r`
                <li>
                    <div>
                        <strong>${0}</strong><br />
                        ${0}<br />
                        ${0}<br />
                    </div>
                    <dbp-button type="is-primary" value="Export" no-spinner-on-click="true" @click="${0}" />
                </li>
            `),e.name,e.academicDegree,e.achievenmentDate,(()=>this.export(e["@id"])))));return m(s||(s=r`
                <ul class="vc-list">
                    ${0}
                </ul>
            `),e)}return m(a||(a=r`
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
        `),g.t("issue-diploma.scan"),JSON.stringify(this.diplomas.filter((e=>e["@id"]===this.exportingId))[0],null,2),"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJkZWdyZWUiOnsidHlwZSI6IkJhY2hlbG9yRGVncmVlIiwibmFtZSI6IkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifX0sIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl19LCJzdWIiOiIiLCJuYmYiOjE2MTI0MjY5OTYsImlzcyI6ImRpZDpldGhyOmFydGlzX3QxOjB4MWViOWEwZDk5YjE4Yjc4YjJmNjdhNDBmYTA5ZmRhODQ2MzVlZjk2NyJ9.7upzlCL3FJieO35TQa4_y9PlmEotXKphtRd9cstWt4Db2LICBl9RT3_aRl0aBRlHs29JJKQWEMSLwnWJOXsYAw",g.t("wallets"))}}u("issue-diploma",b);
//# sourceMappingURL=issue-diploma.js.map
