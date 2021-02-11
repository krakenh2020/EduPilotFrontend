let e,t,a,s,i=e=>e;
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
 */import"./shared/i18next.f6eb636c.es.js";import{c as r}from"./i18n.js";import{S as o,D as n,I as c,c as d,g as l,h as p,d as h}from"./shared/dbp-lit-element.5f5e4beb.es.js";import"./shared/_commonjsHelpers.1d314e50.es.js";import{Q as u}from"./shared/qr-code.b8242cdc.es.js";const m=r();class b extends(o(n)){constructor(){super(),this.lang=m.language,this.authenticated=!1}static get scopedElements(){return{"dbp-icon":c,"dbp-qr-code":u}}static get properties(){return{lang:{type:String},authenticated:{type:Boolean,attribute:!1}}}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":m.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return d(e||(e=i`
            ${0}
            
            .success {
                font-size: 10rem;
                line-height: 10rem;
                color: green;
            }
        `),l())}async httpGetAsync(e,t){return await fetch(e,t).then((e=>{if(!e.ok)throw e;return e.json()}))}async checkAuthenticated(){const e={headers:{Authorization:"Bearer "+window.DBPAuthToken}},t=await this.httpGetAsync("http://127.0.0.1:8000/organizations?page=1",e);console.log(t)}tempNext(){this.authenticated=!0}render(){if(!window.DBPAuthToken)return p(t||(t=i`
                <p>${0}</p>
            `),m.t("please-login"));if(!this.authenticated){const e="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE2MTI0MjQ2MzUsImV4cCI6MTYxMjQyNTIzNSwicmVxdWVzdGVkIjpbXSwiY2FsbGJhY2siOiJodHRwOi8vNzQwNjc2NDIubmdyb2suaW8vIiwidHlwZSI6InNoYXJlUmVxIiwiaXNzIjoiZGlkOmV0aHI6YXJ0aXNfdDE6MHhjMjExN0EzMzFiMzE5NWI2NTQ1NzdCQjU1OTY1QzhlNjlGYzU5MTliIn0.M3bQmSGf0ZCQCX74LFPkr-a5eEp8yopuxWQx33RQTTGRMYu9nXAoJw_DmS00Jxx32aCGJ6fVflXprOgsAtVM5AE";return p(a||(a=i`
            <div>
                <label>${0}</label>
                <br />
                <select>
                    <option value="ethr-did">Ethr-DID (uport shareReq)</option>
                    <option value="did-comm" disabled>DidComm (todo)</option>
                </select>
            </div>
            
            <p>
                ${0}
            </p>
            
            <dbp-qr-code
                data="${0}"
                format="svg"
                modulesize="5"
                margin="1"
                @click="${0}"
            ></dbp-qr-code><br />
            
            <p>
                ${0}
            </p>
            <ul>
                <li><a href="http://minerva.digital/" target="_blank">Minerva Wallet</a></li>
                <li>Browser wallet</li>
            </ul>
        `),m.t("did-auth.select-method"),m.t("did-auth.scan"),e,(()=>this.tempNext()),m.t("wallets"))}return p(s||(s=i`
            <button @click="${0}">test</button>
            <span class="success">✔</span><br />
            
            <p>${0}</p>
            
            <p>
                Now you can export <a href="/dist/de/issue-diploma">diplomas</a>
                or <a href="/dist/de/issue-grades">grades</a>.
            </p>
        `),this.checkAuthenticated,m.t("did-auth.success"))}}h("did-auth",b);
//# sourceMappingURL=did-auth.js.map
