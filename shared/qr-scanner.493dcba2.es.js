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
 * qr-scanner: MIT
 */
class e{static hasCamera(){return navigator.mediaDevices?navigator.mediaDevices.enumerateDevices().then((e=>e.some((e=>"videoinput"===e.kind)))).catch((()=>!1)):Promise.resolve(!1)}constructor(t,i,s=this._onDecodeError.bind(this),r=e.DEFAULT_CANVAS_SIZE,a="environment"){this.$video=t,this.$canvas=document.createElement("canvas"),this._onDecode=i,this._preferredFacingMode=a,this._active=!1,this._paused=!1,this._flashOn=!1,"number"==typeof s?(r=s,console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future")):this._onDecodeError=s,this.$canvas.width=r,this.$canvas.height=r,this._sourceRect={x:0,y:0,width:r,height:r},this._updateSourceRect=this._updateSourceRect.bind(this),this._onPlay=this._onPlay.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this.$video.playsInline=!0,this.$video.muted=!0,this.$video.disablePictureInPicture=!0,this.$video.addEventListener("loadedmetadata",this._updateSourceRect),this.$video.addEventListener("play",this._onPlay),document.addEventListener("visibilitychange",this._onVisibilityChange),this._qrEnginePromise=e.createQrEngine()}hasFlash(){if(!("ImageCapture"in window))return Promise.resolve(!1);const e=this.$video.srcObject?this.$video.srcObject.getVideoTracks()[0]:null;if(!e)return Promise.reject("Camera not started or not available");return new ImageCapture(e).getPhotoCapabilities().then((e=>e.fillLightMode.includes("flash"))).catch((e=>(console.warn(e),!1)))}isFlashOn(){return this._flashOn}toggleFlash(){return this._setFlash(!this._flashOn)}turnFlashOff(){return this._setFlash(!1)}turnFlashOn(){return this._setFlash(!0)}destroy(){this.$video.removeEventListener("loadedmetadata",this._updateSourceRect),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.stop(),e._postWorkerMessage(this._qrEnginePromise,"close")}start(){if(this._active&&!this._paused)return Promise.resolve();if("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,this._paused=!1,document.hidden)return Promise.resolve();if(clearTimeout(this._offTimeout),this._offTimeout=null,this.$video.srcObject)return this.$video.play(),Promise.resolve();let e=this._preferredFacingMode;return this._getCameraStream(e,!0).catch((()=>(e="environment"===e?"user":"environment",this._getCameraStream()))).then((t=>{e=this._getFacingMode(t)||e,this.$video.srcObject=t,this.$video.play(),this._setVideoMirror(e)})).catch((e=>{throw this._active=!1,e}))}stop(){this.pause(),this._active=!1}pause(){this._paused=!0,this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout((()=>{const e=this.$video.srcObject?this.$video.srcObject.getTracks():[];for(const t of e)t.stop();this.$video.srcObject=null,this._offTimeout=null}),300)))}static scanImage(t,i=null,s=null,r=null,a=!1,n=!1){const o=s instanceof Worker;let h=Promise.all([s||e.createQrEngine(),e._loadImage(t)]).then((([t,n])=>{let h;return s=t,[r,h]=this._drawToCanvas(n,i,r,a),s instanceof Worker?(o||s.postMessage({type:"inversionMode",data:"both"}),new Promise(((t,i)=>{let a,n,o;n=r=>{"qrResult"===r.data.type&&(s.removeEventListener("message",n),s.removeEventListener("error",o),clearTimeout(a),null!==r.data.data?t(r.data.data):i(e.NO_QR_CODE_FOUND))},o=e=>{s.removeEventListener("message",n),s.removeEventListener("error",o),clearTimeout(a);const t=e?e.message||e:"Unknown Error";i("Scanner error: "+t)},s.addEventListener("message",n),s.addEventListener("error",o),a=setTimeout((()=>o("timeout")),1e4);const c=h.getImageData(0,0,r.width,r.height);s.postMessage({type:"decode",data:c},[c.data.buffer])}))):new Promise(((t,i)=>{const a=setTimeout((()=>i("Scanner error: timeout")),1e4);s.detect(r).then((s=>{s.length?t(s[0].rawValue):i(e.NO_QR_CODE_FOUND)})).catch((e=>i("Scanner error: "+(e.message||e)))).finally((()=>clearTimeout(a)))}))}));return i&&n&&(h=h.catch((()=>e.scanImage(t,null,s,r,a)))),h=h.finally((()=>{o||e._postWorkerMessage(s,"close")})),h}setGrayscaleWeights(t,i,s,r=!0){e._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:t,green:i,blue:s,useIntegerApproximation:r})}setInversionMode(t){e._postWorkerMessage(this._qrEnginePromise,"inversionMode",t)}static createQrEngine(t=e.WORKER_PATH){return("BarcodeDetector"in window?BarcodeDetector.getSupportedFormats():Promise.resolve([])).then((e=>-1!==e.indexOf("qr_code")?new BarcodeDetector({formats:["qr_code"]}):new Worker(t)))}_onPlay(){this._updateSourceRect(),this._scanFrame()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_updateSourceRect(){const e=Math.min(this.$video.videoWidth,this.$video.videoHeight),t=Math.round(2/3*e);this._sourceRect.width=this._sourceRect.height=t,this._sourceRect.x=(this.$video.videoWidth-t)/2,this._sourceRect.y=(this.$video.videoHeight-t)/2}_scanFrame(){if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame((()=>{this.$video.readyState<=1?this._scanFrame():this._qrEnginePromise.then((t=>e.scanImage(this.$video,this._sourceRect,t,this.$canvas,!0))).then(this._onDecode,(t=>{if(!this._active)return;-1!==(t.message||t).indexOf("service unavailable")&&(this._qrEnginePromise=e.createQrEngine()),this._onDecodeError(t)})).then((()=>this._scanFrame()))}))}_onDecodeError(t){t!==e.NO_QR_CODE_FOUND&&console.log(t)}_getCameraStream(e,t=!1){const i=[{width:{min:1024}},{width:{min:768}},{}];return e&&(t&&(e={exact:e}),i.forEach((t=>t.facingMode=e))),this._getMatchingCameraStream(i)}_getMatchingCameraStream(e){return navigator.mediaDevices&&0!==e.length?navigator.mediaDevices.getUserMedia({video:e.shift()}).catch((()=>this._getMatchingCameraStream(e))):Promise.reject("Camera not found.")}_setFlash(e){return this.hasFlash().then((t=>t?this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:e}]}):Promise.reject("No flash available"))).then((()=>this._flashOn=e))}_setVideoMirror(e){const t="user"===e?-1:1;this.$video.style.transform="scaleX("+t+")"}_getFacingMode(e){const t=e.getVideoTracks()[0];return t?/rear|back|environment/i.test(t.label)?"environment":/front|user|face/i.test(t.label)?"user":null:null}static _drawToCanvas(e,t=null,i=null,s=!1){i=i||document.createElement("canvas");const r=t&&t.x?t.x:0,a=t&&t.y?t.y:0,n=t&&t.width?t.width:e.width||e.videoWidth,o=t&&t.height?t.height:e.height||e.videoHeight;s||i.width===n&&i.height===o||(i.width=n,i.height=o);const h=i.getContext("2d",{alpha:!1});return h.imageSmoothingEnabled=!1,h.drawImage(e,r,a,n,o,0,0,i.width,i.height),[i,h]}static _loadImage(t){if(t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement||window.ImageBitmap&&t instanceof window.ImageBitmap||window.OffscreenCanvas&&t instanceof window.OffscreenCanvas)return Promise.resolve(t);if(t instanceof Image)return e._awaitImageLoad(t).then((()=>t));if(t instanceof File||t instanceof Blob||t instanceof URL||"string"==typeof t){const i=new Image;return t instanceof File||t instanceof Blob?i.src=URL.createObjectURL(t):i.src=t,e._awaitImageLoad(i).then((()=>((t instanceof File||t instanceof Blob)&&URL.revokeObjectURL(i.src),i)))}return Promise.reject("Unsupported image type.")}static _awaitImageLoad(e){return new Promise(((t,i)=>{if(e.complete&&0!==e.naturalWidth)t();else{let s,r;s=()=>{e.removeEventListener("load",s),e.removeEventListener("error",r),t()},r=()=>{e.removeEventListener("load",s),e.removeEventListener("error",r),i("Image load error")},e.addEventListener("load",s),e.addEventListener("error",r)}}))}static _postWorkerMessage(e,t,i){return Promise.resolve(e).then((e=>{e instanceof Worker&&e.postMessage({type:t,data:i})}))}}e.DEFAULT_CANVAS_SIZE=400,e.NO_QR_CODE_FOUND="No QR code found",e.WORKER_PATH="qr-scanner-worker.min.js";export default e;
//# sourceMappingURL=qr-scanner.493dcba2.es.js.map