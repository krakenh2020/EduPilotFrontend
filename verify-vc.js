let e,t,a,i,n,s,r,o,c=e=>e;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}
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
 * @dbp-toolkit/app-shell: LGPL-2.1-or-later
 * @dbp-toolkit/language-select: LGPL-2.1-or-later
 * @dbp-toolkit/auth: LGPL-2.1-or-later
 * event-target-shim: MIT
 * @dbp-toolkit/notification: LGPL-2.1-or-later
 * path-to-regexp: MIT
 * universal-router: MIT
 * generateUrls: MIT
 * @dbp-toolkit/matomo: LGPL-2.1-or-later
 * @dbp-toolkit/provider: LGPL-2.1-or-later
 * @dbp-toolkit/qr-code-scanner: LGPL-2.1-or-later
 * async-mutex: MIT
 */import{c as l}from"./i18n.js";import{S as h,I as u,M as p,h as g,c as m,g as v,b as _,l as b,m as w,n as f,o as y,q as S,A as k,d as x}from"./shared/logger.da18e832.es.js";import{c as E}from"./shared/i18next.e2c56140.es.js";import{D as $,c as q}from"./shared/class-map.2d9141b5.es.js";const P=E({en:{"no-camera-access":"Unable to access video stream.","check-access":"Please make sure that a webcam or camera is activated and check whether your browser has the necessary authorizations.","finished-scan":"Finished scanning.","loading-video":"⌛ Loading video...","no-qr-detected":"No QR code detected.","no-support":"Your browser does not support video recording.","no-ios-support":"Your browser does not support video recording. Please use Safari.",data:"Data",camera:"Camera ","front-camera":"Frontcamera","back-camera":"Backcamera","start-scan":"Start scan","stop-scan":"Stop scan"},de:{"no-camera-access":"Zugriff auf Kamera nicht möglich.","check-access":"Bitte stellen Sie sicher, dass eine Webcam oder Kamera aktiviert ist und überprüfen Sie ob Ihr Browser die notwendigen Berechtigungen besitzt.","finished-scan":"Scannen abgeschlossen.","loading-video":"Video laden ...","no-qr-detected":"Kein QR-Code erkannt.","no-support":"Ihr Browser unterstützt keine Videoaufnahmen.","no-ios-support":"Ihr Browser unterstützt keine Videoaufnahmen. Bitte verwenden Sie Safari.",data:"Inhalt",camera:"Kamera ","front-camera":"Vordere Kamera","back-camera":"Rückseitige Kamera","start-scan":"Scannen starten","stop-scan":"Scannen stoppen"}},"de","en"),C=new Error("request for lock canceled");var D=function(e,t,a,i){return new(a||(a=Promise))((function(n,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function o(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,o)}c((i=i.apply(e,t||[])).next())}))};class M{constructor(e,t=C){if(this._maxConcurrency=e,this._cancelError=t,this._queue=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}acquire(){const e=this.isLocked(),t=new Promise(((e,t)=>this._queue.push({resolve:e,reject:t})));return e||this._dispatch(),t}runExclusive(e){return D(this,void 0,void 0,(function*(){const[t,a]=yield this.acquire();try{return yield e(t)}finally{a()}}))}isLocked(){return this._value<=0}release(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){const e=this._currentReleaser;this._currentReleaser=void 0,e()}}cancel(){this._queue.forEach((e=>e.reject(this._cancelError))),this._queue=[]}_dispatch(){const e=this._queue.shift();if(!e)return;let t=!1;this._currentReleaser=()=>{t||(t=!0,this._value++,this._dispatch())},e.resolve([this._value--,this._currentReleaser])}}var R=function(e,t,a,i){return new(a||(a=Promise))((function(n,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function o(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,o)}c((i=i.apply(e,t||[])).next())}))};class I{constructor(e){this._semaphore=new M(1,e)}acquire(){return R(this,void 0,void 0,(function*(){const[,e]=yield this._semaphore.acquire();return e}))}runExclusive(e){return this._semaphore.runExclusive((()=>e()))}isLocked(){return this._semaphore.isLocked()}release(){this._semaphore.release()}cancel(){return this._semaphore.cancel()}}class O{constructor(){this._engine=null,this._canvas=document.createElement("canvas"),this._scanner=null}async scan(e,t,a,i,n){null===this._scanner&&(this._scanner=(await import("./shared/qr-scanner.493dcba2.es.js")).default,this._scanner.WORKER_PATH=S("@dbp-toolkit/qr-code-scanner","qr-scanner-worker.min.js")),null===this._engine&&(this._engine=await this._scanner.createQrEngine(this._scanner.WORKER_PATH));try{return{data:await this._scanner.scanImage(e,{x:t,y:a,width:i,height:n},this._engine,this._canvas)}}catch(e){return null}}}class A extends(h($)){constructor(){super(),this.lang="de",this._askPermission=!1,this._loading=!1,this.showOutput=!1,this.stopScan=!1,this._activeCamera="",this._devices=new Map,this._requestID=null,this._loadingMessage="",this.matchRegex=".*",this._videoElement=null,this._outputData=null,this._videoRunning=!1,this._lock=new I}static get scopedElements(){return{"dbp-icon":u,"dbp-mini-spinner":p}}static get properties(){return{lang:{type:String},showOutput:{type:Boolean,attribute:"show-output"},stopScan:{type:Boolean,attribute:"stop-scan"},matchRegex:{type:String,attribute:"match-regex"},_activeCamera:{type:String,attribute:!1},_loading:{type:Boolean,attribute:!1},_devices:{type:Map,attribute:!1},_loadingMessage:{type:String,attribute:!1},_outputData:{type:String,attribute:!1},_askPermission:{type:Boolean,attribute:!1},_videoRunning:{type:Boolean,attribute:!1}}}async connectedCallback(){super.connectedCallback(),P.changeLanguage(this.lang);let e=await async function(){let e=new Map;if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&navigator.mediaDevices.getUserMedia){let t;try{t=await navigator.mediaDevices.enumerateDevices()}catch(t){return console.log(t.name+": "+t.message),e}for(let a of t)if("videoinput"===a.kind){let t=a.deviceId;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(e.set("environment",P.t("back-camera")),e.set("user",P.t("front-camera"))):e.set(t||!0,a.label||P.t("camera")+(e.size+1))}return e}return e}();this._activeCamera=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e.has("environment")?"environment":e.size?Array.from(e)[0][0]:null}(e)||"",this._devices=e,this.stopScan||await this.startScanning()}async disconnectedCallback(){await this.stopScanning(),super.disconnectedCallback()}updated(e){e.get("stopScan")&&!this.stopScan?this.startScanning():!e.get("stopScan")&&this.stopScan&&this.stopScanning()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":P.changeLanguage(this.lang)}})),super.update(e)}async startScanning(){await this.stopScanning();const e=await this._lock.acquire();try{await this._startScanning()}finally{e()}}async _startScanning(){console.assert(this._lock.isLocked()),await this.updateComplete;let t=this._("#canvas"),a=this._("#video"),i=document.createElement("canvas"),n=!1;this._askPermission=!0,this._loadingMessage=g(e||(e=c` ${0} <br> ${0}`),P.t("no-camera-access"),P.t("check-access"));let s=await async function(e){let t=e,a={video:{deviceId:t}};"environment"===t||""===t?(console.log("vid:",t),a={video:{facingMode:"environment"}}):"user"===t&&(console.log("vid2:",t),a={video:{facingMode:"user",mirrored:!0}});let i=null;try{i=await navigator.mediaDevices.getUserMedia(a)}catch(e){console.log(e)}if(null!==i){let e=document.createElement("video");return e.srcObject=i,e}return null}(this._activeCamera);null!==s&&a.appendChild(s),this._askPermission=!1;let r=null,o=null,d=new O,l=!1;const h=()=>{if(this._requestID=null,s.readyState===s.HAVE_ENOUGH_DATA){this._loading=!1,i.height=s.videoHeight,i.width=s.videoWidth;let e=i.getContext("2d");e.drawImage(s,0,0,i.width,i.height);let a=i.width,c=i.height,h=0,u=0,p=i.width>i.height?i.height/4*3:i.width/4*3;console.assert(p<=i.width&&p<=i.height),a=p,c=p,h=i.width/2-a/2,u=i.height/2-c/2;let g=s;l||(l=!0,d.scan(i,h,u,a,c).then((e=>{l=!1,g===this._videoElement&&(r=e,e?(o!==e.data&&(this._outputData=e.data,this.dispatchEvent(new CustomEvent("code-detected",{bubbles:!0,composed:!0,detail:{code:e.data}}))),o=e.data):(this._outputData=null,o=null))})));let m=!!r&&null!==r.data.match(this.matchRegex);if(e.beginPath(),e.fillStyle="#0000006e",e.moveTo(0,0),e.lineTo(0,i.height),e.lineTo(i.width,i.height),e.lineTo(i.width,0),e.rect(h,u,a,c),e.fill(),e.beginPath(),r){let t=getComputedStyle(this).getPropertyValue("--dbp-success-bg-color"),a=getComputedStyle(this).getPropertyValue("--dbp-danger-bg-color");e.fillStyle=m?t:a}else e.fillStyle="white";let v=Math.max(a,c)/50;e.moveTo(h,u),e.rect(h,u,a/3,v),e.rect(h,u,v,c/3),e.rect(h+a/3*2,u,a/3,v),e.rect(h+a-v,u,v,c/3),e.rect(h,u+c-v,a/3,v),e.rect(h,u+c/3*2,v,c/3),e.rect(h+a/3*2,u+c-v,a/3,v),e.rect(h+a-v,u+c/3*2,v,c/3),e.fill(),t.height=i.height,t.width=i.width,t.getContext("2d").drawImage(i,0,0),n||(this.dispatchEvent(new CustomEvent("scan-started",{bubbles:!0,composed:!0})),n=!0)}console.assert(null===this._requestID),this._requestID=requestAnimationFrame(h)};null!==s&&(s.setAttribute("playsinline",!0),s.play(),this._videoRunning=!0,console.assert(null===this._requestID),this._videoElement=s,this._loading=!0,this._loadingMessage=P.t("loading-video"),this._requestID=requestAnimationFrame(h))}async _onUpdateSource(e){this._activeCamera=e.srcElement.value,await this.stopScanning(),await this.startScanning(),console.log("Changed Media")}async stopScanning(){const e=await this._lock.acquire();try{if(null!==this._videoElement){this._videoElement.srcObject.getTracks().forEach((function(e){e.stop()})),this._videoElement=null}null!==this._requestID&&(cancelAnimationFrame(this._requestID),this._requestID=null),this._askPermission=!1,this._videoRunning=!1,this._loading=!1,this._loadingMessage=""}finally{e()}}static get styles(){return m(t||(t=c`
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
        `),v(),_(),b(),w(),f(y("chevron-down")))}render(){let e=this._devices.size>0,t=this._videoRunning&&!this._askPermission&&!this._loading,r=(this._devices,/(iPhone|iPad|iPod).*(CriOS|FxiOS|OPT|EdgiOS|YaBrowser|AlohaBrowser)/i.test(navigator.userAgent)?P.t("no-ios-support"):P.t("no-support"));return g(a||(a=c`
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
        `),q({hidden:!e}),q({hidden:this._videoRunning}),(()=>this.startScanning()),P.t("start-scan"),P.t("start-scan"),q({hidden:!this._videoRunning}),(()=>this.stopScanning()),P.t("stop-scan"),P.t("stop-scan"),this._onUpdateSource,Array.from(this._devices).map((e=>g(i||(i=c`<option value="${0}">${0}</option>`),e[0],e[1]))),q({hidden:t}),q({hidden:!this._loading}),this._loadingMessage,q({hidden:!t}),q({hidden:!(this.showOutput&&t)}),null!==this._outputData?g(n||(n=c`
                            <div><b>${0}:</b> <span>${0}</span></div>
                          `),P.t("data"),this._outputData):g(s||(s=c`
                            <div>${0}</div>
                          `),P.t("no-qr-detected")),q({hidden:e}),r)}}const B=l();class j extends(h(k)){constructor(){super(),this.auth={},this.lang=B.language}static get scopedElements(){return{"dbp-icon":u,"dbp-code-scanner":A}}static get properties(){return d({},super.properties,{lang:{type:String},auth:{type:Object}})}connectedCallback(){super.connectedCallback()}update(e){e.forEach(((e,t)=>{switch(t){case"lang":B.changeLanguage(this.lang)}})),super.update(e)}static get styles(){return m(r||(r=c`
            ${0}

            
        `),v())}render(){return g(o||(o=c`
            <dbp-code-scanner
                lang="${0}"
                @scan-started="${0}"
                @code-detected="${0}"
            ></dbp-code-scanner>
        `),this.lang,(e=>console.log("scan-started",e)),(e=>console.log("code-detected",e)))}}x("verify-vc",j);
//# sourceMappingURL=verify-vc.js.map
