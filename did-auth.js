let t,e,i,n,a,s=t=>t;function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}
/*!
 * License: LGPL-2.1-or-later
 * Dependencies:
 */import{c as o}from"./i18n.js";import{S as c,A as d,I as h,c as p,g as l,h as u,d as m}from"./shared/logger.da18e832.es.js";import{Q as g}from"./shared/qr-code.7c6f0a91.es.js";import"./shared/i18next.e2c56140.es.js";const y=o();class v extends(c(d)){constructor(){super(),this.auth={},this.entryPointUrl="",this.lang=y.language,this.authenticated=!1}static get scopedElements(){return{"dbp-icon":h,"dbp-qr-code":g}}static get properties(){return r({},super.properties,{lang:{type:String},auth:{type:Object},entryPointUrl:{type:String,attribute:"entry-point-url"},authenticated:{type:Boolean,attribute:!1},didCommInvite:{type:String},intervalId:{type:Number}})}async connectedCallback(){var t=this;super.connectedCallback(),this.didCommInvite=await this.fetchDidCommInvite(),this.intervalId=setInterval((async function(){if(null===t.didCommInvite)return;const e=JSON.parse(t.didCommInvite).invitation["@id"];console.log(e);try{const i=await t.fetchDidCommInviteStatus(e),n=JSON.parse(i);console.log("Invite accepted! ",n),t.authenticated=!0,clearInterval(t.intervalId),sessionStorage.setItem("did-comm-MyDID",n.MyDID),sessionStorage.setItem("did-comm-TheirDID",n.TheirDID)}catch(t){console.log("Invite not accepted yet. :(")}}),1e3)}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}update(t){t.forEach(((t,e)=>{switch(e){case"lang":y.changeLanguage(this.lang)}})),super.update(t)}static get styles(){return p(t||(t=s`
            ${0}
            
            .success {
                font-size: 10rem;
                line-height: 10rem;
                color: green;
            }

            .qr-wrap {
                width: fit-content;
                text-align: center;
            }
            
            #copyText {
                position: absolute;
                left: 10000rem;
                opacity: 0;
            }
        `),l())}async httpGetAsync(t,e){return await fetch(t,e).then((t=>{if(!t.ok)throw t;return t.json()}))}async fetchDidCommInvite(){const t={headers:{Authorization:"Bearer "+this.auth.token}},e=this.entryPointUrl+"/did_connections?page=1";return(await this.httpGetAsync(e,t))["hydra:member"][0].invitation}async fetchDidCommInviteStatus(t){const e={headers:{Authorization:"Bearer "+this.auth.token}},i=this.entryPointUrl+"/did_connections/"+t;return(await this.httpGetAsync(i,e)).invitation}async onCopy(t){t.preventDefault();const e=t.currentTarget.previousElementSibling;e.select(),e.setSelectionRange(0,1e6),document.execCommand("copy")}render(){if(!this.auth.token)return u(e||(e=s`
                <p>${0}</p>
            `),y.t("please-login"));if(!this.authenticated){const t=btoa(this.didCommInvite);return this.didCommInvite?u(n||(n=s`
            <p>
                ${0}
            </p>
            
            <div class="qr-wrap">
                <dbp-qr-code
                    data="${0}"
                    format="svg"
                    modulesize="5"
                    margin="1"
                ></dbp-qr-code>
                <div>
                    <input id="copyText" type="text" value="${0}" />
                    <a href="#" @click="${0}">Copy to clipboard.</a>
                </div>
            </div>
        `),y.t("did-auth.scan"),t,this.didCommInvite,(t=>this.onCopy(t))):u(i||(i=s`
                  loading...
                `))}return u(a||(a=s`
            <span class="success">✔</span><br />
            
            <p>${0}</p>
            
            <p>
                Now you can export <a href="/dist/de/issue-diploma">diplomas</a>
                or <a href="/dist/de/issue-grades">grades</a>.
            </p>
        `),y.t("did-auth.success"))}}m("did-auth",v);
//# sourceMappingURL=did-auth.js.map
