let e,t,n,a,i,s,r,o,c=e=>e;
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
 * @dbp-toolkit/app-shell: LGPL-2.1-or-later
 * @dbp-toolkit/language-select: LGPL-2.1-or-later
 * @dbp-toolkit/auth: LGPL-2.1-or-later
 * event-target-shim: MIT
 * @dbp-toolkit/notification: LGPL-2.1-or-later
 * path-to-regexp: MIT
 * universal-router: MIT
 * generateUrls: MIT
 * @dbp-toolkit/matomo: LGPL-2.1-or-later
 * @dbp-toolkit/qr-code-scanner: LGPL-2.1-or-later
 * tslib: 0BSD
 * async-mutex: MIT
 */import{c as d}from"./shared/i18next.f6eb636c.es.js";import{c as l}from"./i18n.js";import{S as u,D as h,I as p,M as g,h as m,c as v,g as b,b as _,k as f,l as w,m as y,n as k,o as S,d as x}from"./shared/dbp-lit-element.5f5e4beb.es.js";import{c as $}from"./shared/class-map.e9e2ba84.es.js";const E=d({en:{"no-camera-access":"Unable to access video stream.","check-access":"Please make sure that a webcam or camera is activated and check whether your browser has the necessary authorizations.","finished-scan":"Finished scanning.","loading-video":"⌛ Loading video...","no-qr-detected":"No QR code detected.","no-support":"Your browser does not support video recording.","no-ios-support":"Your browser does not support video recording. Please use Safari.",data:"Data",camera:"Camera ","front-camera":"Frontcamera","back-camera":"Backcamera","start-scan":"Start scan","stop-scan":"Stop scan"},de:{"no-camera-access":"Zugriff auf Kamera nicht möglich.","check-access":"Bitte stellen Sie sicher, dass eine Webcam oder Kamera aktiviert ist und überprüfen Sie ob Ihr Browser die notwendigen Berechtigungen besitzt.","finished-scan":"Scannen abgeschlossen.","loading-video":"Video laden ...","no-qr-detected":"Kein QR-Code erkannt.","no-support":"Ihr Browser unterstützt keine Videoaufnahmen.","no-ios-support":"Ihr Browser unterstützt keine Videoaufnahmen. Bitte verwenden Sie Safari.",data:"Inhalt",camera:"Kamera ","front-camera":"Vordere Kamera","back-camera":"Rückseitige Kamera","start-scan":"Scannen starten","stop-scan":"Scannen stoppen"}},"de","en");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function q(e,t,n,a){return new(n||(n=Promise))((function(i,s){function r(e){try{c(a.next(e))}catch(e){s(e)}}function o(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))}function P(e,t){var n,a,i,s,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(i=2&s[0]?a.return:s[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;switch(a=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,a=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){r=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(6===s[0]&&r.label<i[1]){r.label=i[1],i=s;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(s);break}i[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e],a=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}var C=function(){function e(e){if(this._maxConcurrency=e,this._queue=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}return e.prototype.acquire=function(){var e=this,t=this.isLocked(),n=new Promise((function(t){return e._queue.push(t)}));return t||this._dispatch(),n},e.prototype.runExclusive=function(e){return q(this,void 0,void 0,(function(){var t,n,a;return P(this,(function(i){switch(i.label){case 0:return[4,this.acquire()];case 1:t=i.sent(),n=t[0],a=t[1],i.label=2;case 2:return i.trys.push([2,,4,5]),[4,e(n)];case 3:return[2,i.sent()];case 4:return a(),[7];case 5:return[2]}}))}))},e.prototype.isLocked=function(){return this._value<=0},e.prototype.release=function(){if(this._maxConcurrency>1)throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");this._currentReleaser&&(this._currentReleaser(),this._currentReleaser=void 0)},e.prototype._dispatch=function(){var e=this,t=this._queue.shift();if(t){var n=!1;this._currentReleaser=function(){n||(n=!0,e._value++,e._dispatch())},t([this._value--,this._currentReleaser])}},e}(),D=function(){function e(){this._semaphore=new C(1)}return e.prototype.acquire=function(){return q(this,void 0,void 0,(function(){var e;return P(this,(function(t){switch(t.label){case 0:return[4,this._semaphore.acquire()];case 1:return e=t.sent(),[2,e[1]]}}))}))},e.prototype.runExclusive=function(e){return this._semaphore.runExclusive((function(){return e()}))},e.prototype.isLocked=function(){return this._semaphore.isLocked()},e.prototype.release=function(){this._semaphore.release()},e}();class M{constructor(){this._engine=null,this._canvas=document.createElement("canvas"),this._scanner=null}async scan(e,t,n,a,i){null===this._scanner&&(this._scanner=(await import("./shared/qr-scanner.493dcba2.es.js")).default,this._scanner.WORKER_PATH=S("@dbp-toolkit/qr-code-scanner","qr-scanner-worker.min.js")),null===this._engine&&(this._engine=await this._scanner.createQrEngine(this._scanner.WORKER_PATH));try{return{data:await this._scanner.scanImage(e,{x:t,y:n,width:a,height:i},this._engine,this._canvas)}}catch(e){return null}}}class R extends(u(h)){constructor(){super(),this.lang="de",this._askPermission=!1,this._loading=!1,this.showOutput=!1,this.stopScan=!1,this._activeCamera="",this._devices=new Map,this._requestID=null,this._loadingMessage="",this.matchRegex=".*",this._videoElement=null,this._outputData=null,this._videoRunning=!1,this._lock=new D}static get scopedElements(){return{"dbp-icon":p,"dbp-mini-spinner":g}}static get properties(){return{lang:{type:String},showOutput:{type:Boolean,attribute:"show-output"},stopScan:{type:Boolean,attribute:"stop-scan"},matchRegex:{type:String,attribute:"match-regex"},_activeCamera:{type:String,attribute:!1},_loading:{type:Boolean,attribute:!1},_devices:{type:Map,attribute:!1},_loadingMessage:{type:String,attribute:!1},_outputData:{type:String,attribute:!1},_askPermission:{type:Boolean,attribute:!1},_videoRunning:{type:Boolean,attribute:!1}}}async connectedCallback(){super.connectedCallback(),E.changeLanguage(this.lang);let e=await async function(){let e=new Map;if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&navigator.mediaDevices.getUserMedia){let t;try{t=await navigator.mediaDevices.enumerateDevices()}catch(t){return console.log(t.name+": "+t.message),e}for(let n of t)if("videoinput"===n.kind){let t=n.deviceId;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(e.set("environment",E.t("back-camera")),e.set("user",E.t("front-camera"))):e.set(t||!0,n.label||E.t("camera")+(e.size+1))}return e}return e}();this._activeCamera=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e.has("environment")?"environment":e.size?Array.from(e)[0][0]:null}(e)||"",this._devices=e,this.stopScan||await this.startScanning()}async disconnectedCallback(){await this.stopScanning(),super.disconnectedCallback()}updated(e){e.get("stopScan")&&!this.stopScan?this.startScanning():!e.get("stopScan")&&this.stopScan&&this.stopScanning()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":E.changeLanguage(this.lang)}})),super.update(e)}async startScanning(){await this.stopScanning();const e=await this._lock.acquire();try{await this._startScanning()}finally{e()}}async _startScanning(){console.assert(this._lock.isLocked()),await this.updateComplete;let t=this._("#canvas"),n=this._("#video"),a=document.createElement("canvas"),i=!1;this._askPermission=!0,this._loadingMessage=m(e||(e=c` ${0} <br> ${0}`),E.t("no-camera-access"),E.t("check-access"));let s=await async function(e){let t=e,n={video:{deviceId:t}};"environment"===t||""===t?(console.log("vid:",t),n={video:{facingMode:"environment"}}):"user"===t&&(console.log("vid2:",t),n={video:{facingMode:"user",mirrored:!0}});let a=null;try{a=await navigator.mediaDevices.getUserMedia(n)}catch(e){console.log(e)}if(null!==a){let e=document.createElement("video");return e.srcObject=a,e}return null}(this._activeCamera);null!==s&&n.appendChild(s),this._askPermission=!1;let r=null,o=null,d=new M,l=!1;const u=()=>{if(this._requestID=null,s.readyState===s.HAVE_ENOUGH_DATA){this._loading=!1,a.height=s.videoHeight,a.width=s.videoWidth;let e=a.getContext("2d");e.drawImage(s,0,0,a.width,a.height);let n=a.width,c=a.height,u=0,h=0,p=a.width>a.height?a.height/4*3:a.width/4*3;console.assert(p<=a.width&&p<=a.height),n=p,c=p,u=a.width/2-n/2,h=a.height/2-c/2;let g=s;l||(l=!0,d.scan(a,u,h,n,c).then((e=>{l=!1,g===this._videoElement&&(r=e,e?(o!==e.data&&(this._outputData=e.data,this.dispatchEvent(new CustomEvent("code-detected",{bubbles:!0,composed:!0,detail:{code:e.data}}))),o=e.data):(this._outputData=null,o=null))})));let m=!!r&&null!==r.data.match(this.matchRegex);if(e.beginPath(),e.fillStyle="#0000006e",e.moveTo(0,0),e.lineTo(0,a.height),e.lineTo(a.width,a.height),e.lineTo(a.width,0),e.rect(u,h,n,c),e.fill(),e.beginPath(),r){let t=getComputedStyle(this).getPropertyValue("--dbp-success-bg-color"),n=getComputedStyle(this).getPropertyValue("--dbp-danger-bg-color");e.fillStyle=m?t:n}else e.fillStyle="white";let v=Math.max(n,c)/50;e.moveTo(u,h),e.rect(u,h,n/3,v),e.rect(u,h,v,c/3),e.rect(u+n/3*2,h,n/3,v),e.rect(u+n-v,h,v,c/3),e.rect(u,h+c-v,n/3,v),e.rect(u,h+c/3*2,v,c/3),e.rect(u+n/3*2,h+c-v,n/3,v),e.rect(u+n-v,h+c/3*2,v,c/3),e.fill(),t.height=a.height,t.width=a.width,t.getContext("2d").drawImage(a,0,0),i||(this.dispatchEvent(new CustomEvent("scan-started",{bubbles:!0,composed:!0})),i=!0)}console.assert(null===this._requestID),this._requestID=requestAnimationFrame(u)};null!==s&&(s.setAttribute("playsinline",!0),s.play(),this._videoRunning=!0,console.assert(null===this._requestID),this._videoElement=s,this._loading=!0,this._loadingMessage=E.t("loading-video"),this._requestID=requestAnimationFrame(u))}async _onUpdateSource(e){this._activeCamera=e.srcElement.value,await this.stopScanning(),await this.startScanning(),console.log("Changed Media")}async stopScanning(){const e=await this._lock.acquire();try{if(null!==this._videoElement){this._videoElement.srcObject.getTracks().forEach((function(e){e.stop()})),this._videoElement=null}null!==this._requestID&&(cancelAnimationFrame(this._requestID),this._requestID=null),this._askPermission=!1,this._videoRunning=!1,this._loading=!1,this._loadingMessage=""}finally{e()}}static get styles(){return v(t||(t=c`
            ${0}
            ${0}
            ${0}
            ${0}
            
            #loadingMessage {
                text-align: center;
                padding: 40px;
            }
            
            .wrapper-msg {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: baseline;
            }
        
            #canvas {
                margin-top: 2rem;
                max-height: calc(100vh - 100px);
                max-width: 100%;
            }
        
            .output {
                  margin-top: 20px;
                  background: #eee;
                  padding: 10px;
                  padding-bottom: 0;
            }
        
            .output div {
                  padding-bottom: 10px;
                  word-wrap: break-word;
            }

            .spinner{
                margin-right: 10px;
                font-size: 0.7em;
            }
            
            #videoSource{
                padding-bottom: calc(0.375em - 2px);
                padding-left: 0.75em;
                padding-right: 1.75em;
                padding-top: calc(0.375em - 2px);
                background-position-x: calc(100% - 0.4rem);
                font-size: inherit;
            }
            
            #videoSource:hover {
                background: calc(100% - 0.2rem) center no-repeat url("${0}");
                color: black;
                background-position-x: calc(100% - 0.4rem);
                background-size: auto 45%;
            }
            
            select:not(.select)#videoSource{
                background-size: auto 45%;
            }
            
            .border{
                margin-top: 2rem;
                padding-top: 2rem;
                border-top: 1px solid black;
            }
            
            #video video, #video{
                height: 0px;
                width: 0px;
                opacity: 0;
            }
            
            @media only screen
            and (orientation: portrait)
            and (max-device-width: 765px) {   
                .button-wrapper{    
                    display: flex;
                   justify-content: space-between;
                }
            }
        `),b(),_(),f(),w(),y(k("chevron-down")))}render(){let e=this._devices.size>0,t=this._videoRunning&&!this._askPermission&&!this._loading,r=(this._devices,/(iPhone|iPad|iPod).*(CriOS|FxiOS|OPT|EdgiOS|YaBrowser|AlohaBrowser)/i.test(navigator.userAgent)?E.t("no-ios-support"):E.t("no-support"));return m(n||(n=c`
            <div class="columns">
                <div class="column">
                    
                    <div class="${0}">
                    
                        
                        <div class="button-wrapper">
                            <button class="start button is-primary ${0}" @click="${0}" title="${0}">${0}</button>
                            <button class="stop button is-primary ${0}" @click="${0}" title="${0}">${0}</button>
                            
                            <select id="videoSource" class="button" @change=${0}>
                                ${0}
                            </select>

                        </div>
                       
                        <div id="loadingMessage" class="${0}">
                            <div class="wrapper-msg">
                                <dbp-mini-spinner class="spinner ${0}"></dbp-mini-spinner>
                                <div class="loadingMsg">${0}</div>
                            </div>
                       </div>
                       <canvas id="canvas" class="${0}"></canvas>
                       <div id="video"></div>
                        <div class="output ${0}">
                          ${0}
                        </div>
                    </div>
                    <div class="${0}">
                        ${0}
                    </div>
                </div>
            </div>
        `),$({hidden:!e}),$({hidden:this._videoRunning}),(()=>this.startScanning()),E.t("start-scan"),E.t("start-scan"),$({hidden:!this._videoRunning}),(()=>this.stopScanning()),E.t("stop-scan"),E.t("stop-scan"),this._onUpdateSource,Array.from(this._devices).map((e=>m(a||(a=c`<option value="${0}">${0}</option>`),e[0],e[1]))),$({hidden:t}),$({hidden:!this._loading}),this._loadingMessage,$({hidden:!t}),$({hidden:!(this.showOutput&&t)}),null!==this._outputData?m(i||(i=c`
                            <div><b>${0}:</b> <span>${0}</span></div>
                          `),E.t("data"),this._outputData):m(s||(s=c`
                            <div>${0}</div>
                          `),E.t("no-qr-detected")),$({hidden:e}),r)}}const I=l();class B extends(u(h)){constructor(){super(),this.lang=I.language}static get scopedElements(){return{"dbp-icon":p,"dbp-code-scanner":R}}static get properties(){return{lang:{type:String}}}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":I.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return v(r||(r=c`
            ${0}

            
        `),b())}render(){return m(o||(o=c`
            <dbp-code-scanner
                lang="${0}"
                @scan-started="${0}"
                @code-detected="${0}"
            ></dbp-code-scanner>
        `),this.lang,(e=>console.log("scan-started",e)),(e=>console.log("code-detected",e)))}}x("verify-vc",B);
//# sourceMappingURL=verify-vc.js.map
