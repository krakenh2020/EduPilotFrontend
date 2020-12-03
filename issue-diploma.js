let e,t,s,n=e=>e;
/*!
 * License: LGPL-2.1-or-later
 * Dependencies:
 * 
 * lit-html: BSD-3-Clause
 * lit-element: BSD-3-Clause
 * @open-wc/dedupe-mixin: MIT
 * @open-wc/scoped-elements: MIT
 * @dbp-toolkit/common: LGPL-2.1-or-later
 * @babel/runtime: MIT
 * i18next: MIT
 * qrjs: MIT
 * webcomponent-qr-code: MIT
 */import"./shared/i18next.f6eb636c.es.js";import{c as a}from"./i18n.js";import{S as r,D as i,I as o,B as c,c as l,g as p,h as u,d as g}from"./shared/dbp-lit-element.0e6946f2.es.js";const d=a();class m extends(r(i)){constructor(){super(),this.lang=d.language}static get scopedElements(){return{"dbp-icon":o,"dbp-button":c}}static get properties(){return{lang:{type:String}}}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":d.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return l(e||(e=n`
            ${0}
            
            ul {
              list-style: none;
              padding: 0;
            }
            
            ul li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 1rem;
            }
        `),p())}export(){console.log("export")}render(){const e=["Bachelor of Science in Engineering","Bachelor of Arts"].map((e=>u(t||(t=n`
            <li>
                ${0}
                <dbp-button type="is-primary" value="Export" no-spinner-on-click="true" @click="${0}" />
            </li>
        `),e,(()=>this.export()))));return u(s||(s=n`
            <ul>
                ${0}
            </ul>
        `),e)}}g("issue-diploma",m);
//# sourceMappingURL=issue-diploma.js.map
