let e,t,s,r,i,a=e=>e;
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
 */import{c as n}from"./i18n.js";import{S as l,D as d,I as o,B as c,c as p,g as h,h as u,d as g}from"./shared/dbp-lit-element.21be1086.es.js";import{Q as m}from"./shared/qr-code.06ebce81.es.js";import"./shared/i18next.4eb888a0.es.js";const y=n();class b extends(l(d)){constructor(){super(),this.lang=y.language,this.exporting=!1,this.fetchCourseGrades().then((e=>{this.courseGrades=e}))}static get scopedElements(){return{"dbp-icon":o,"dbp-button":c,"dbp-qr-code":m}}static get properties(){return{lang:{type:String},exporting:{type:Boolean,attribute:!1},exportingId:{type:String},courseGrades:{type:Array}}}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":y.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return p(e||(e=a`
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
        `),h())}export(e){console.log("export"),this.exporting=!0,this.exportingId=e}async httpGetAsync(e,t){return await fetch(e,t).then((e=>{if(!e.ok)throw e;return e.json()}))}async fetchCourseGrades(){const e={headers:{Authorization:"Bearer "+window.DBPAuthToken}};return(await this.httpGetAsync("http://127.0.0.1:8000/course_grades?page=1",e))["hydra:member"]}render(){if(!window.DBPAuthToken)return u(t||(t=a`
                <p>${0}</p>
            `),y.t("please-login"));if(!this.exporting){const e=this.courseGrades.map((e=>u(s||(s=a`
                <li>
                    <div>
                        <strong>${0}</strong><br />
                        ${0} ECTS<br />
                        ${0} Grade<br />
                        ${0}<br />
                    </div>
                    <dbp-button type="is-primary" value="Export" no-spinner-on-click="true" @click="${0}" />
                </li>
            `),e.name,e.credits,e.grade,e.achievenmentDate,(()=>this.export(e["@id"])))));return u(r||(r=a`
                <ul class="vc-list">
                    ${0}
                </ul>
            `),e)}return u(i||(i=a`
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
        `),y.t("issue-grades.scan"),JSON.stringify(this.courseGrades.filter((e=>e["@id"]===this.exportingId))[0],null,2),"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJkZWdyZWUiOnsidHlwZSI6IkJhY2hlbG9yRGVncmVlIiwibmFtZSI6IkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifX0sIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl19LCJzdWIiOiIiLCJuYmYiOjE2MTI0MjY5OTYsImlzcyI6ImRpZDpldGhyOmFydGlzX3QxOjB4MWViOWEwZDk5YjE4Yjc4YjJmNjdhNDBmYTA5ZmRhODQ2MzVlZjk2NyJ9.7upzlCL3FJieO35TQa4_y9PlmEotXKphtRd9cstWt4Db2LICBl9RT3_aRl0aBRlHs29JJKQWEMSLwnWJOXsYAw",y.t("wallets"))}}g("issue-grades",b);
//# sourceMappingURL=issue-grades.js.map
