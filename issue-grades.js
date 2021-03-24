let t,e,r,s,i,a=t=>t;function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t}).apply(this,arguments)}
/*!
 * License: LGPL-2.1-or-later
 * Dependencies:
 * 
 * lit-html: BSD-3-Clause
 * lit-element: BSD-3-Clause
 * @open-wc/dedupe-mixin: MIT
 * @open-wc/scoped-elements: MIT
 * @dbp-toolkit/common: LGPL-2.1-or-later
 * qrjs: MIT
 * webcomponent-qr-code: MIT
 * @babel/runtime: MIT
 * i18next: MIT
 */import{c as l}from"./i18n.js";import{S as o,A as c,I as p,B as d,c as h,g as u,h as y,d as g}from"./shared/logger.da18e832.es.js";import{Q as m}from"./shared/qr-code.7c6f0a91.es.js";import"./shared/i18next.e2c56140.es.js";const b=l();class I extends(o(c)){constructor(){super(),this.auth={},this.entryPointUrl="",this.lang=b.language,this.exporting=!1}static get scopedElements(){return{"dbp-icon":p,"dbp-button":d,"dbp-qr-code":m}}static get properties(){return n({},super.properties,{lang:{type:String},exporting:{type:Boolean,attribute:!1},exportingId:{type:String},courseGrades:{type:Array},auth:{type:Object},entryPointUrl:{type:String,attribute:"entry-point-url"}})}connectedCallback(){super.connectedCallback()}update(t){t.forEach(((t,e)=>{switch(e){case"lang":b.changeLanguage(this.lang);break;case"entryPointUrl":this.fetchCourseGrades().then((t=>{this.courseGrades=t}))}})),super.update(t)}static get styles(){return h(t||(t=a`
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
        `),u())}export(t){console.log("export"),this.exporting=!0,this.exportingId=t}async httpGetAsync(t,e){return await fetch(t,e).then((t=>{if(!t.ok)throw t;return t.json()}))}async fetchCourseGrades(){const t={headers:{Authorization:"Bearer "+this.auth.token}},e=this.entryPointUrl+"/course_grades?page=1";return(await this.httpGetAsync(e,t))["hydra:member"]}render(){if(!this.auth.token)return y(e||(e=a`
                <p>${0}</p>
            `),b.t("please-login"));if(!this.exporting){const t=this.courseGrades.map((t=>y(r||(r=a`
                <li>
                    <div>
                        <strong>${0}</strong><br />
                        ${0} ECTS<br />
                        ${0} Grade<br />
                        ${0}<br />
                    </div>
                    <dbp-button type="is-primary" value="Export" no-spinner-on-click="true" @click="${0}" />
                </li>
            `),t.name,t.credits,t.grade,t.achievenmentDate,(()=>this.export(t["@id"])))));return y(s||(s=a`
                <ul class="vc-list">
                    ${0}
                </ul>
            `),t)}return y(i||(i=a`
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
        `),b.t("issue-grades.scan"),JSON.stringify(this.courseGrades.filter((t=>t["@id"]===this.exportingId))[0],null,2),"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJkZWdyZWUiOnsidHlwZSI6IkJhY2hlbG9yRGVncmVlIiwibmFtZSI6IkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifX0sIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl19LCJzdWIiOiIiLCJuYmYiOjE2MTI0MjY5OTYsImlzcyI6ImRpZDpldGhyOmFydGlzX3QxOjB4MWViOWEwZDk5YjE4Yjc4YjJmNjdhNDBmYTA5ZmRhODQ2MzVlZjk2NyJ9.7upzlCL3FJieO35TQa4_y9PlmEotXKphtRd9cstWt4Db2LICBl9RT3_aRl0aBRlHs29JJKQWEMSLwnWJOXsYAw",b.t("wallets"))}}g("issue-grades",I);
//# sourceMappingURL=issue-grades.js.map
