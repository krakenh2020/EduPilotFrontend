let t,e,i,a,s=t=>t;function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}
/*!
 * License: LGPL-2.1-or-later
 * Dependencies:
 */import{c as r}from"./i18n.js";import{S as o,A as d,I as c,c as h,g as l,h as p,d as u}from"./shared/logger.da18e832.es.js";import{Q as m}from"./shared/qr-code.7c6f0a91.es.js";import"./shared/i18next.e2c56140.es.js";const g=r();class v extends(o(d)){constructor(){var t;super(),t=this,this.auth={},this.lang=g.language,this.authenticated=!1,this.methodSelected="ethr-did",this.intervalId=setInterval((async function(){if("did-comm"!==t.methodSelected)return;const e=JSON.parse(t.didCommInvite).invitation["@id"];console.log(e);try{const i=await t.fetchDidCommInviteStatus(e);console.log("Invite accepted! "+i),t.authenticated=!0,clearInterval(t.intervalId)}catch(t){console.log("Invite not accepted yet. :(")}}),1e3)}static get scopedElements(){return{"dbp-icon":c,"dbp-qr-code":m}}static get properties(){return n({},super.properties,{lang:{type:String},authenticated:{type:Boolean,attribute:!1},methodSelected:{type:String},didCommInvite:{type:String},intervalId:{type:Number},auth:{type:Object}})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}update(t){t.forEach(((t,e)=>{switch(e){case"lang":g.changeLanguage(this.lang)}})),super.update(t)}static get styles(){return h(t||(t=s`
            ${0}
            
            .success {
                font-size: 10rem;
                line-height: 10rem;
                color: green;
            }
        `),l())}async httpGetAsync(t,e){return await fetch(t,e).then((t=>{if(!t.ok)throw t;return t.json()}))}async fetchDidCommInvite(){const t={headers:{Authorization:"Bearer "+this.auth.token}};return(await this.httpGetAsync("http://127.0.0.1:8000/did_connections?page=1",t))["hydra:member"][0].invitation}async fetchDidCommInviteStatus(t){const e={headers:{Authorization:"Bearer "+this.auth.token}},i="http://127.0.0.1:8000/did_connections/"+t;return(await this.httpGetAsync(i,e)).invitation}async onMethodSelect(t){const e=t.currentTarget.value;"did-comm"!==e||this.didCommInvite||(this.didCommInvite=await this.fetchDidCommInvite()),this.methodSelected=e}render(){if(!this.auth.token)return p(e||(e=s`
                <p>${0}</p>
            `),g.t("please-login"));if(!this.authenticated){const t="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE2MTI0MjQ2MzUsImV4cCI6MTYxMjQyNTIzNSwicmVxdWVzdGVkIjpbXSwiY2FsbGJhY2siOiJodHRwOi8vNzQwNjc2NDIubmdyb2suaW8vIiwidHlwZSI6InNoYXJlUmVxIiwiaXNzIjoiZGlkOmV0aHI6YXJ0aXNfdDE6MHhjMjExN0EzMzFiMzE5NWI2NTQ1NzdCQjU1OTY1QzhlNjlGYzU5MTliIn0.M3bQmSGf0ZCQCX74LFPkr-a5eEp8yopuxWQx33RQTTGRMYu9nXAoJw_DmS00Jxx32aCGJ6fVflXprOgsAtVM5AE",e=btoa(this.didCommInvite),a="ethr-did"===this.methodSelected?t:e;return p(i||(i=s`
            <div>
                <label>${0}</label>
                <br />
                <select @change="${0}">
                    <option value="ethr-did">Ethr-DID (uport shareReq) (todo)</option>
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
            ></dbp-qr-code><br />
            
            <pre>${0}</pre>
            
            <p>
                ${0}
            </p>
            <ul>
                <li><a href="http://minerva.digital/" target="_blank">Minerva Wallet</a></li>
                <li>Browser wallet</li>
            </ul>
        `),g.t("did-auth.select-method"),(t=>this.onMethodSelect(t)),g.t("did-auth.scan"),a,a,g.t("wallets"))}return p(a||(a=s`
            <span class="success">✔</span><br />
            
            <p>${0}</p>
            
            <p>
                Now you can export <a href="/dist/de/issue-diploma">diplomas</a>
                or <a href="/dist/de/issue-grades">grades</a>.
            </p>
        `),g.t("did-auth.success"))}}u("did-auth",v);
//# sourceMappingURL=did-auth.js.map
