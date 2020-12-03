let e,t,n,i,a,s,r,o=e=>e;
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
 */import{c}from"./shared/i18next.f6eb636c.es.js";import{c as d}from"./i18n.js";import{S as l,D as u,I as h,M as p,c as g,g as m,e as v,k as _,l as b,m as f,n as w,h as y,o as S,d as k}from"./shared/dbp-lit-element.0e6946f2.es.js";import{c as x}from"./shared/class-map.3c46d3ae.es.js";const E=c({en:{"no-camera-access":"Unable to access video stream (please make sure you have a webcam enabled)","finished-scan":"Finished scanning.","loading-video":"⌛ Loading video...","no-qr-detected":"No QR code detected.","no-support":"Your browser does not support video recording.","no-ios-support":"Your browser does not support video recording. Please use Safari.",data:"Data",camera:"Camera ","front-camera":"Frontcamera","back-camera":"Backcamera","start-scan":"Start scan","stop-scan":"Stop scan"},de:{"no-camera-access":"Zugriff auf Kamera nicht möglich (bitte stellen Sie sicher, dass eine Webcam aktiviert ist)","finished-scan":"Scannen abgeschlossen.","loading-video":"Video laden ...","no-qr-detected":"Kein QR-Code erkannt.","no-support":"Ihr Browser unterstützt keine Videoaufnahmen.","no-ios-support":"Ihr Browser unterstützt keine Videoaufnahmen. Bitte verwenden Sie Safari.",data:"Inhalt",camera:"Kamera ","front-camera":"Vordere Kamera","back-camera":"Rückseitige Kamera","start-scan":"Scannen starten","stop-scan":"Scannen stoppen"}},"de","en");
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
***************************************************************************** */function $(e,t,n,i){return new(n||(n=Promise))((function(a,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function o(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((i=i.apply(e,t||[])).next())}))}function q(e,t){var n,i,a,s,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=2&s[0]?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(a=r.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){r=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(6===s[0]&&r.label<a[1]){r.label=a[1],a=s;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(s);break}a[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e],i=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}var C=function(){function e(e){if(this._maxConcurrency=e,this._queue=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}return e.prototype.acquire=function(){var e=this,t=this.isLocked(),n=new Promise((function(t){return e._queue.push(t)}));return t||this._dispatch(),n},e.prototype.runExclusive=function(e){return $(this,void 0,void 0,(function(){var t,n,i;return q(this,(function(a){switch(a.label){case 0:return[4,this.acquire()];case 1:t=a.sent(),n=t[0],i=t[1],a.label=2;case 2:return a.trys.push([2,,4,5]),[4,e(n)];case 3:return[2,a.sent()];case 4:return i(),[7];case 5:return[2]}}))}))},e.prototype.isLocked=function(){return this._value<=0},e.prototype.release=function(){if(this._maxConcurrency>1)throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");this._currentReleaser&&(this._currentReleaser(),this._currentReleaser=void 0)},e.prototype._dispatch=function(){var e=this,t=this._queue.shift();if(t){var n=!1;this._currentReleaser=function(){n||(n=!0,e._value++,e._dispatch())},t([this._value--,this._currentReleaser])}},e}(),D=function(){function e(){this._semaphore=new C(1)}return e.prototype.acquire=function(){return $(this,void 0,void 0,(function(){var e;return q(this,(function(t){switch(t.label){case 0:return[4,this._semaphore.acquire()];case 1:return e=t.sent(),[2,e[1]]}}))}))},e.prototype.runExclusive=function(e){return this._semaphore.runExclusive((function(){return e()}))},e.prototype.isLocked=function(){return this._semaphore.isLocked()},e.prototype.release=function(){this._semaphore.release()},e}();class P{constructor(){this._engine=null,this._canvas=document.createElement("canvas"),this._scanner=null}async scan(e,t,n,i,a){null===this._scanner&&(this._scanner=(await import("./shared/qr-scanner.493dcba2.es.js")).default,this._scanner.WORKER_PATH=S("@dbp-toolkit/qr-code-scanner","qr-scanner-worker.min.js")),null===this._engine&&(this._engine=await this._scanner.createQrEngine(this._scanner.WORKER_PATH));try{return{data:await this._scanner.scanImage(e,{x:t,y:n,width:i,height:a},this._engine,this._canvas)}}catch(e){return null}}}class M extends(l(u)){constructor(){super(),this.lang="de",this._askPermission=!1,this._loading=!1,this.showOutput=!1,this.stopScan=!1,this._activeCamera="",this._devices=new Map,this._requestID=null,this._loadingMessage="",this.matchRegex=".*",this._videoElement=null,this._outputData=null,this._videoRunning=!1,this._lock=new D}static get scopedElements(){return{"dbp-icon":h,"dbp-mini-spinner":p}}static get properties(){return{lang:{type:String},showOutput:{type:Boolean,attribute:"show-output"},stopScan:{type:Boolean,attribute:"stop-scan"},matchRegex:{type:String,attribute:"match-regex"},_activeCamera:{type:String,attribute:!1},_loading:{type:Boolean,attribute:!1},_devices:{type:Map,attribute:!1},_loadingMessage:{type:String,attribute:!1},_outputData:{type:String,attribute:!1},_askPermission:{type:Boolean,attribute:!1},_videoRunning:{type:Boolean,attribute:!1}}}async connectedCallback(){super.connectedCallback(),E.changeLanguage(this.lang);let e=await async function(){let e=new Map;if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&navigator.mediaDevices.getUserMedia){let t;try{t=await navigator.mediaDevices.enumerateDevices()}catch(t){return console.log(t.name+": "+t.message),e}for(let n of t)if("videoinput"===n.kind){let t=n.deviceId;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(e.set("environment",E.t("back-camera")),e.set("user",E.t("front-camera"))):e.set(t||!0,n.label||E.t("camera")+(e.size+1))}return e}return e}();this._activeCamera=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e.has("environment")?"environment":e.size?Array.from(e)[0][0]:null}(e)||"",this._devices=e,this.stopScan||await this.startScanning()}async disconnectedCallback(){await this.stopScanning(),super.disconnectedCallback()}updated(e){e.get("stopScan")&&!this.stopScan?this.startScanning():!e.get("stopScan")&&this.stopScan&&this.stopScanning()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":E.changeLanguage(this.lang)}})),super.update(e)}async startScanning(){await this.stopScanning();const e=await this._lock.acquire();try{await this._startScanning()}finally{e()}}async _startScanning(){console.assert(this._lock.isLocked()),await this.updateComplete;let e=this._("#canvas"),t=this._("#video"),n=document.createElement("canvas"),i=!1;this._askPermission=!0,this._loadingMessage=E.t("no-camera-access");let a=await async function(e){let t=e,n={video:{deviceId:t}};"environment"===t||""===t?(console.log("vid:",t),n={video:{facingMode:"environment"}}):"user"===t&&(console.log("vid2:",t),n={video:{facingMode:"user",mirrored:!0}});let i=null;try{i=await navigator.mediaDevices.getUserMedia(n)}catch(e){console.log(e)}if(null!==i){let e=document.createElement("video");return e.srcObject=i,e}return null}(this._activeCamera);null!==a&&t.appendChild(a),this._askPermission=!1;let s=null,r=null,o=new P,c=!1;const d=()=>{if(this._requestID=null,a.readyState===a.HAVE_ENOUGH_DATA){this._loading=!1,n.height=a.videoHeight,n.width=a.videoWidth;let t=n.getContext("2d");t.drawImage(a,0,0,n.width,n.height);let d=n.width,l=n.height,u=0,h=0,p=n.width>n.height?n.height/4*3:n.width/4*3;console.assert(p<=n.width&&p<=n.height),d=p,l=p,u=n.width/2-d/2,h=n.height/2-l/2;let g=a;c||(c=!0,o.scan(n,u,h,d,l).then((e=>{c=!1,g===this._videoElement&&(s=e,e?(r!==e.data&&(this._outputData=e.data,this.dispatchEvent(new CustomEvent("code-detected",{bubbles:!0,composed:!0,detail:{code:e.data}}))),r=e.data):(this._outputData=null,r=null))})));let m=!!s&&null!==s.data.match(this.matchRegex);if(t.beginPath(),t.fillStyle="#0000006e",t.moveTo(0,0),t.lineTo(0,n.height),t.lineTo(n.width,n.height),t.lineTo(n.width,0),t.rect(u,h,d,l),t.fill(),t.beginPath(),s){let e=getComputedStyle(this).getPropertyValue("--dbp-success-bg-color"),n=getComputedStyle(this).getPropertyValue("--dbp-danger-bg-color");t.fillStyle=m?e:n}else t.fillStyle="white";let v=Math.max(d,l)/50;t.moveTo(u,h),t.rect(u,h,d/3,v),t.rect(u,h,v,l/3),t.rect(u+d/3*2,h,d/3,v),t.rect(u+d-v,h,v,l/3),t.rect(u,h+l-v,d/3,v),t.rect(u,h+l/3*2,v,l/3),t.rect(u+d/3*2,h+l-v,d/3,v),t.rect(u+d-v,h+l/3*2,v,l/3),t.fill(),e.height=n.height,e.width=n.width,e.getContext("2d").drawImage(n,0,0),i||(this.dispatchEvent(new CustomEvent("scan-started",{bubbles:!0,composed:!0})),i=!0)}console.assert(null===this._requestID),this._requestID=requestAnimationFrame(d)};null!==a&&(a.setAttribute("playsinline",!0),a.play(),this._videoRunning=!0,console.assert(null===this._requestID),this._videoElement=a,this._loading=!0,this._loadingMessage=E.t("loading-video"),this._requestID=requestAnimationFrame(d))}async _onUpdateSource(e){this._activeCamera=e.srcElement.value,await this.stopScanning(),await this.startScanning(),console.log("Changed Media")}async stopScanning(){const e=await this._lock.acquire();try{if(null!==this._videoElement){this._videoElement.srcObject.getTracks().forEach((function(e){e.stop()})),this._videoElement=null}null!==this._requestID&&(cancelAnimationFrame(this._requestID),this._requestID=null),this._askPermission=!1,this._videoRunning=!1,this._loading=!1,this._loadingMessage=""}finally{e()}}static get styles(){return g(e||(e=o`
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
                width: 100%;
                margin-top: 2rem;
                max-height: 100%;
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
        `),m(),v(),_(),b(),f(w("chevron-down")))}render(){let e=this._devices.size>0,s=this._videoRunning&&!this._askPermission&&!this._loading,r=(this._devices,/(iPhone|iPad|iPod).*(CriOS|FxiOS|OPT|EdgiOS|YaBrowser|AlohaBrowser)/i.test(navigator.userAgent)?E.t("no-ios-support"):E.t("no-support"));return y(t||(t=o`
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
        `),x({hidden:!e}),x({hidden:this._videoRunning}),(()=>this.startScanning()),E.t("start-scan"),E.t("start-scan"),x({hidden:!this._videoRunning}),(()=>this.stopScanning()),E.t("stop-scan"),E.t("stop-scan"),this._onUpdateSource,Array.from(this._devices).map((e=>y(n||(n=o`<option value="${0}">${0}</option>`),e[0],e[1]))),x({hidden:s}),x({hidden:!this._loading}),this._loadingMessage,x({hidden:!s}),x({hidden:!(this.showOutput&&s)}),null!==this._outputData?y(i||(i=o`
                            <div><b>${0}:</b> <span>${0}</span></div>
                          `),E.t("data"),this._outputData):y(a||(a=o`
                            <div>${0}</div>
                          `),E.t("no-qr-detected")),x({hidden:e}),r)}}const R=d();class I extends(l(u)){constructor(){super(),this.lang=R.language}static get scopedElements(){return{"dbp-icon":h,"dbp-code-scanner":M}}static get properties(){return{lang:{type:String}}}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":R.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return g(s||(s=o`
            ${0}

            
        `),m())}render(){return y(r||(r=o`
            <dbp-code-scanner
                lang="${0}"
                @scan-started="${0}"
                @code-detected="${0}"
            ></dbp-code-scanner>
        `),this.lang,(e=>console.log("scan-started",e)),(e=>console.log("code-detected",e)))}}k("verify-vc",I);
//# sourceMappingURL=verify-vc.js.map
