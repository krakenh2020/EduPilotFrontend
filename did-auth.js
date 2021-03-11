let e,t,i,a,s=e=>e;
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
 */import{c as d}from"./i18n.js";import{S as r,D as n,I as o,c,g as h,h as l,d as p}from"./shared/dbp-lit-element.798cce61.es.js";import{Q as m}from"./shared/qr-code.06ebce81.es.js";import"./shared/i18next.4eb888a0.es.js";const u=d();class g extends(r(n)){constructor(){super(),this.lang=u.language,this.authenticated=!1,this.methodSelected="ethr-did"}static get scopedElements(){return{"dbp-icon":o,"dbp-qr-code":m}}static get properties(){return{lang:{type:String},authenticated:{type:Boolean,attribute:!1},methodSelected:{type:String},didCommInvite:{type:String}}}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":u.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return c(e||(e=s`
            ${0}
            
            .success {
                font-size: 10rem;
                line-height: 10rem;
                color: green;
            }
        `),h())}tempNext(){this.authenticated=!0}async httpGetAsync(e,t){return await fetch(e,t).then((e=>{if(!e.ok)throw e;return e.json()}))}async fetchDidCommInvite(){const e={headers:{Authorization:"Bearer "+window.DBPAuthToken}};return(await this.httpGetAsync("http://127.0.0.1:8000/did_connections?page=1",e))["hydra:member"][0].invitation}async onMethodSelect(e){const t=e.currentTarget.value;"did-comm"!==t||this.didCommInvite||(this.didCommInvite=await this.fetchDidCommInvite()),this.methodSelected=t}render(){if(!window.DBPAuthToken)return l(t||(t=s`
                <p>${0}</p>
            `),u.t("please-login"));if(!this.authenticated){const e="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE2MTI0MjQ2MzUsImV4cCI6MTYxMjQyNTIzNSwicmVxdWVzdGVkIjpbXSwiY2FsbGJhY2siOiJodHRwOi8vNzQwNjc2NDIubmdyb2suaW8vIiwidHlwZSI6InNoYXJlUmVxIiwiaXNzIjoiZGlkOmV0aHI6YXJ0aXNfdDE6MHhjMjExN0EzMzFiMzE5NWI2NTQ1NzdCQjU1OTY1QzhlNjlGYzU5MTliIn0.M3bQmSGf0ZCQCX74LFPkr-a5eEp8yopuxWQx33RQTTGRMYu9nXAoJw_DmS00Jxx32aCGJ6fVflXprOgsAtVM5AE",t=btoa(this.didCommInvite),a="ethr-did"===this.methodSelected?e:t;return l(i||(i=s`
            <div>
                <label>${0}</label>
                <br />
                <select @change="${0}">
                    <option value="ethr-did">Ethr-DID (uport shareReq)</option>
                    <option value="did-comm">DidComm (aries-framework-go)</option>
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
            
            <pre>${0}</pre>
            
            <p>
                ${0}
            </p>
            <ul>
                <li><a href="http://minerva.digital/" target="_blank">Minerva Wallet</a></li>
                <li>Browser wallet</li>
            </ul>
        `),u.t("did-auth.select-method"),(e=>this.onMethodSelect(e)),u.t("did-auth.scan"),a,(()=>this.tempNext()),a,u.t("wallets"))}return l(a||(a=s`
            <span class="success">✔</span><br />
            
            <p>${0}</p>
            
            <p>
                Now you can export <a href="/dist/de/issue-diploma">diplomas</a>
                or <a href="/dist/de/issue-grades">grades</a>.
            </p>
        `),u.t("did-auth.success"))}}p("did-auth",g);
//# sourceMappingURL=did-auth.js.map
