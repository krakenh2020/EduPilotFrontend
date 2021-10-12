let t,e,r,s,n,i=t=>t;function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t}).apply(this,arguments)}
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
 */import{c as o}from"./i18n.js";import{S as c,A as p,I as d,B as l,c as h,g as u,h as g,d as y}from"./shared/logger.da18e832.es.js";import{Q as f}from"./shared/qr-code.7c6f0a91.es.js";import"./shared/i18next.e2c56140.es.js";const m=o();class b extends(c(p)){constructor(){super(),this.auth={},this.entryPointUrl="",this.lang=m.language,this.exporting=!1}static get scopedElements(){return{"dbp-icon":d,"dbp-button":l,"dbp-qr-code":f}}static get properties(){return a({},super.properties,{lang:{type:String},exporting:{type:Boolean,attribute:!1},exportingId:{type:String},courseGrades:{type:Array},auth:{type:Object},entryPointUrl:{type:String,attribute:"entry-point-url"}})}connectedCallback(){super.connectedCallback()}update(t){t.forEach(((t,e)=>{switch(e){case"lang":m.changeLanguage(this.lang);break;case"entryPointUrl":this.fetchCourseGrades().then((t=>{this.courseGrades=t}))}})),super.update(t)}static get styles(){return h(t||(t=i`
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

            .success {
                font-size: 10rem;
                line-height: 10rem;
                color: green;
            }
        `),u())}async triggerSendOffer(t,e){const r={method:"post",headers:{Authorization:"Bearer "+this.auth.token,"Content-Type":"application/ld+json"},body:JSON.stringify({myDid:t,theirDid:e,status:"requesting..."})},s=this.entryPointUrl+"/credential/send_offer";return await this.httpGetAsync(s,r)}async acceptRequest(t,e){const r={method:"post",headers:{Authorization:"Bearer "+this.auth.token,"Content-Type":"application/ld+json"},body:JSON.stringify({myDid:t,theirDid:"none",status:e})},s=this.entryPointUrl+"/credential/accept_request";return await this.httpGetAsync(s,r)}async export(t){var e=this;console.log("export");const r=sessionStorage.getItem("did-comm-MyDID"),s=sessionStorage.getItem("did-comm-TheirDID");if(!r||!s)return void alert("no connection :(");const n=await this.triggerSendOffer(r,s);console.log("triggerSendOffer",n);const i=JSON.parse(n.myDid).piid,a=setInterval((async function(){""!==(await e.acceptRequest(i,t)).myDid&&(console.log("request accepted"),clearInterval(a),e.exporting=!0,e.exportingId=t)}),1e3)}async httpGetAsync(t,e){return await fetch(t,e).then((t=>{if(!t.ok)throw t;return t.json()}))}async fetchCourseGrades(){const t={headers:{Authorization:"Bearer "+this.auth.token}},e=this.entryPointUrl+"/course-grades?page=1";return(await this.httpGetAsync(e,t))["hydra:member"]}render(){if(!this.auth.token)return g(e||(e=i`
                <p>${0}</p>
            `),m.t("please-login"));if(!this.exporting){const t=this.courseGrades.map((t=>g(r||(r=i`
                <li>
                    <div>
                        <strong>${0}</strong><br />
                        ${0} ECTS<br />
                        ${0} Grade<br />
                        ${0}<br />
                    </div>
                    <dbp-button type="is-primary" value="Export" no-spinner-on-click="true" @click="${0}" />
                </li>
            `),t.name,t.credits,t.grade,t.achievenmentDate,(()=>this.export(t["@id"])))));return g(s||(s=i`
                <ul class="vc-list">
                    ${0}
                </ul>
            `),t)}return g(n||(n=i`
            <p>
                ${0}
            </p>

            <span class="success">✔</span><br />

            <pre>${0}</pre>
        `),m.t("issue-grades.scan"),JSON.stringify(this.courseGrades.filter((t=>t["@id"]===this.exportingId))[0],null,2))}}y("issue-grades",b);
//# sourceMappingURL=issue-grades.js.map
