let e,s,t=e=>e;
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
 */import"./shared/i18next.f6eb636c.es.js";import{c as a}from"./i18n.js";import{S as r,D as n,I as c,c as i,g,h as l,d}from"./shared/dbp-lit-element.5f5e4beb.es.js";const o=a();class p extends(r(n)){constructor(){super(),this.lang=o.language}static get scopedElements(){return{"dbp-icon":c}}static get properties(){return{lang:{type:String}}}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,s)=>{switch(s){case"lang":o.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return i(e||(e=t`
            ${0}

            
        `),g())}render(){return l(s||(s=t`
            *same as diploma just with grades*
        `))}}d("issue-grades",p);
//# sourceMappingURL=issue-grades.js.map
