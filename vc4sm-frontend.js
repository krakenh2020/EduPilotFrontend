let t,e,n,i,o,r,a,s,l,c,d,h,u,p,g,m,f,b,v,y,w=t=>t;function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}
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
 */import{c as E}from"./shared/i18next.e2c56140.es.js";import{A as _,g as x,c as S,h as L,p as I,a as C,S as P,u as T,I as R,b as A,e as D,f as O,L as F,d as N,i as U}from"./shared/logger.da18e832.es.js";import{D as $,c as j}from"./shared/class-map.2d9141b5.es.js";const B=E({en:{logo:{word1:"Science",word2:"Passion",word3:"Technology"},"privacy-policy":"Privacy Policy",imprint:"Legal Notice",contact:"Contact","page-updated-needs-reload":"The application has been updated. Please reload the page.","activity-example":{"hello-world":"Hello World"},welcome:{headline:"Welcome to the '{{appname}}' application."},login:"Login",logout:"Logout","page-not-found":"Requested Page Not Found","choose-from-menu":"Please choose an activity from the menu."},de:{logo:{word1:"Wissen",word2:"Technik",word3:"Leidenschaft"},"privacy-policy":"Datenschutz",imprint:"Impressum",contact:"Kontakt","page-updated-needs-reload":"Die Applikation wurde aktualisiert. Bitte laden Sie die Seite neu.","activity-example":{"hello-world":"Hallo Welt"},welcome:{headline:"Willkommen bei der Applikation '{{appname}}'."},login:"Einloggen",logout:"Ausloggen","page-not-found":"Die gewünschte Seite wurde nicht gefunden","choose-from-menu":"Bitte wählen Sie eine Aktivität aus dem Menu."}},"de","en");function M(){return B.cloneInstance()}const G=E({en:{de:"German",en:"English","de-action":"Switch to German","en-action":"Switch to English"},de:{de:"Deutsch",en:"Englisch","de-action":"Auf Deutsch anzeigen","en-action":"Auf Englisch anzeigen"}},"de","en");class H extends _{constructor(){super(),this._lang="de",this.languages=["de","en"],G.t("de"),G.t("de-action"),G.t("en"),G.t("en-action")}_getNextLanguage(t){var e=this.languages.indexOf(t),n=this.languages[e+1];return void 0===n&&(n=this.languages[0]),n}_getPreviousLanguage(t){var e=this.languages.indexOf(t),n=this.languages[e-1];return void 0===n&&(n=this.languages[this.languages.length-1]),n}static get properties(){return{lang:{type:String},next:{type:String},languages:{type:Array}}}set lang(t){const e=this.lang,n=this.next;this._lang=t,this.requestUpdate("lang",e),this.requestUpdate("next",n),e!==t&&(this.sendSetPropertyEvent("lang",t),G.changeLanguage(this.next))}get lang(){return this._lang}set next(t){this.lang=this._getPreviousLanguage(t)}get next(){return this._getNextLanguage(this.lang)}static get styles(){return[x(),S(t||(t=w`
            :host {
                display: inline-block;
            }

            a:hover {
                background-color: var(--dbp-dark);
                color: var(--dbp-light);
                transition: none;
            }

            a {
                padding: 0.3em;
                display: inline-block;
                text-decoration: none;
                transition: background-color 0.15s, color 0.15s;
                color: var(--dbp-dark);
                border-radius: var(--dbp-border-radius);
            }
            `))]}onClick(t){t.preventDefault(),this.lang=this.next}render(){var t=G.t(this.next+"-action");return L(e||(e=w`
            <a href="#" title="${0}" @click=${0}>${0}</a>
        `),t,this.onClick,this.next.toUpperCase())}}const z=E({en:{login:"Login",logout:"Logout",profile:"Profile"},de:{login:"Einloggen",logout:"Ausloggen",profile:"Profil"}},"de","en");function V(t){const e=new CustomEvent("dbp-notification-send",{bubbles:!0,cancelable:!0,detail:t});window.dispatchEvent(e)&&(alert((void 0!==t.summary&&""!==t.summary?t.summary+": ":"")+t.body),console.log("Use the web component dbp-notification to show fancy notifications."))}const W=E({en:{error:{summary:"An error occurred","connection-to-server-refused":"Connection to server refused!"},jsonld:{"error-api-server":"Connection to api server {{apiUrl}} failed!","error-hydra-documentation-url-not-set":"Hydra apiDocumentation url was not set for server {{apiUrl}}!","api-documentation-server":"Connection to apiDocumentation server {{apiDocUrl}} failed!"}},de:{error:{summary:"Ein Fehler ist aufgetreten","connection-to-server-refused":"Verbindungs zum Server verweigert!"},jsonld:{"error-api-server":"Verbindung zum API Server {{apiUrl}} fehlgeschlagen!","error-hydra-documentation-url-not-set":"Hydra apiDocumentation URL wurden für server {{apiUrl}} nicht gesetzt!","api-documentation-server":"Verbindung zum apiDocumentation API Server {{apiDocUrl}} fehlgeschlagen!"}}},"de","en");class q{constructor(t,e){this.entities=e,this.baseApiUrl=t;let n={};for(const t in e){n[e[t]["@id"]]=t}this.idToEntityNameMatchList=n}static async getInstance(t,e="de"){let n=q.promises[t];return void 0===n&&(n=new Promise(((n,i)=>{q._initialize(t,(t=>n(t)),(t=>i(t)),e)})),q.promises[t]=n),n}static initialize(t,e,n,i="de"){console.warn("DEPRECATED: JSONLD.initialize(), use JSONLD.getInstance() instead"),q._initialize(t,e,n,i)}static doInitializationOnce(t){console.warn("DEPRECATED: JSONLD.doInitializationOnce() calls can be removed")}static _initialize(t,e,n,i="de"){"de"!==i&&W.changeLanguage(i),void 0===q.instances[t]?(void 0===q.successFunctions[t]&&(q.successFunctions[t]=[]),void 0===q.failureFunctions[t]&&(q.failureFunctions[t]=[]),"function"==typeof e&&q.successFunctions[t].push(e),"function"==typeof n&&q.failureFunctions[t].push(n),t&&void 0===q.initStarted[t]&&(q.initStarted[t]=!0,q._doInitialization(t))):"function"==typeof e&&e(q.instances[t])}static _doInitialization(t){const e=new XMLHttpRequest;e.open("GET",t,!0),e.onreadystatechange=function(){if(4===e.readyState)if(200===e.status){const n=JSON.parse(e.responseText);let i={};for(let t in n)t.startsWith("@")||(i[t.toLowerCase()]=n[t]);const o=I(this.getResponseHeader("link"))["http://www.w3.org/ns/hydra/core#apiDocumentation"];if(void 0!==o){const e=new XMLHttpRequest;e.open("GET",o,!0),e.setRequestHeader("Content-Type","application/json"),e.onreadystatechange=function(){4===e.readyState&&(200===e.status?q._gatherEntities(e,t,i):q._executeFailureFunctions(t,W.t("jsonld.api-documentation-server",{apiUrl:o})))},e.send()}else q._executeFailureFunctions(t,W.t("jsonld.error-hydra-documentation-url-not-set",{apiUrl:t}))}else q._executeFailureFunctions(t,W.t("jsonld.error-api-server",{apiUrl:t}))},e.send()}static _gatherEntities(t,e,n){const i=JSON.parse(t.responseText)["hydra:supportedClass"];let o={};const r=C(e);i.forEach((function(t){const e=t["hydra:title"];let i=n[e.toLowerCase()];void 0===i||i.startsWith("http")||(i=r+i),t["@entryPoint"]=i,o[e]=t}));const a=new q(r,o);if(q.instances[e]=a,void 0!==q.successFunctions[e])for(const t of q.successFunctions[e])"function"==typeof t&&t(a);q.successFunctions[e]=[]}static _executeFailureFunctions(t,e=""){if(void 0!==q.failureFunctions[t])for(const n of q.failureFunctions[t])"function"==typeof n&&n(new Error(e));q.failureFunctions[t]=[],""!==e&&V({summary:W.t("error.summary"),body:e,type:"danger"})}getEntityForIdentifier(t){let e=this.getEntityNameForIdentifier(t);return this.getEntityForEntityName(e)}getEntityForEntityName(t){return this.entities[t]}getApiUrlForIdentifier(t){const e=this.getEntityForIdentifier(t);if(void 0===e||void 0===e["@entryPoint"])throw new Error(`Entity with identifier "${t}" not found!`);return e["@entryPoint"]}getApiUrlForEntityName(t){const e=this.getEntityForEntityName(t);if(void 0===e||void 0===e["@entryPoint"])throw new Error(`Entity "${t}" not found!`);return e["@entryPoint"]}getEntityNameForIdentifier(t){return this.idToEntityNameMatchList[t]}getApiIdentifierList(){let t=[];for(const e in this.idToEntityNameMatchList)t.push(e);return t}expandMember(t,e){void 0===e&&(e=t["@context"]);let n={"@id":t["@id"]};for(const i of Object.keys(e)){const o=e[i];void 0!==t[i]&&(n[o]=t[i])}return n}compactMember(t,e){let n={};for(const i in e){const o=t[e[i]];void 0!==o&&(n[i]=o)}return n}transformMembers(t,e){const n=t["hydra:member"];if(void 0===n||0===n.length)return[];const i=t["@context"];let o=[],r=this;return n.forEach((function(t){o.push(r.compactMember(r.expandMember(t,i),e))})),o}}function K(t,e,...n){if(!t)throw new TypeError(Y(e,n))}function Y(t,e){let n=0;return t.replace(/%[os]/g,(()=>X(e[n++])))}function X(t){return"object"!=typeof t||null===t?String(t):Object.prototype.toString.call(t)}q.instances={},q.successFunctions={},q.failureFunctions={},q.initStarted={},q.promises={};const J="undefined"!=typeof window?window:"undefined"!=typeof self?self:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:void 0;class Q{constructor(t,e){this.code=t,this.message=e}warn(...t){var e;try{undefined;const n=(null!==(e=(new Error).stack)&&void 0!==e?e:"").replace(/^(?:(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+?\n){2}/g,"\n");console.warn(this.message,...t,n)}catch(t){}}}const Z=new Q("W01","Unable to initialize event under dispatching."),tt=new Q("W02","Assigning any falsy value to 'cancelBubble' property has no effect."),et=new Q("W03","Assigning any truthy value to 'returnValue' property has no effect."),nt=new Q("W04","Unable to preventDefault on non-cancelable events."),it=new Q("W05","Unable to preventDefault inside passive event listener invocation."),ot=new Q("W06","An event listener wasn't added because it has been added already: %o, %o"),rt=new Q("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."),at=new Q("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o");class st{static get NONE(){return lt}static get CAPTURING_PHASE(){return ct}static get AT_TARGET(){return dt}static get BUBBLING_PHASE(){return ht}constructor(t,e){Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const n=null!=e?e:{};ut.set(this,{type:String(t),bubbles:Boolean(n.bubbles),cancelable:Boolean(n.cancelable),composed:Boolean(n.composed),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1,inPassiveListenerFlag:!1,dispatchFlag:!1,timeStamp:Date.now()})}get type(){return pt(this).type}get target(){return pt(this).target}get srcElement(){return pt(this).target}get currentTarget(){return pt(this).currentTarget}composedPath(){const t=pt(this).currentTarget;return t?[t]:[]}get NONE(){return lt}get CAPTURING_PHASE(){return ct}get AT_TARGET(){return dt}get BUBBLING_PHASE(){return ht}get eventPhase(){return pt(this).dispatchFlag?2:0}stopPropagation(){pt(this).stopPropagationFlag=!0}get cancelBubble(){return pt(this).stopPropagationFlag}set cancelBubble(t){t?pt(this).stopPropagationFlag=!0:tt.warn()}stopImmediatePropagation(){const t=pt(this);t.stopPropagationFlag=t.stopImmediatePropagationFlag=!0}get bubbles(){return pt(this).bubbles}get cancelable(){return pt(this).cancelable}get returnValue(){return!pt(this).canceledFlag}set returnValue(t){t?et.warn():gt(pt(this))}preventDefault(){gt(pt(this))}get defaultPrevented(){return pt(this).canceledFlag}get composed(){return pt(this).composed}get isTrusted(){return!1}get timeStamp(){return pt(this).timeStamp}initEvent(t,e=!1,n=!1){const i=pt(this);i.dispatchFlag?Z.warn():ut.set(this,k({},i,{type:String(t),bubbles:Boolean(e),cancelable:Boolean(n),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1}))}}const lt=0,ct=1,dt=2,ht=3,ut=new WeakMap;function pt(t,e="this"){const n=ut.get(t);return K(null!=n,"'%s' must be an object that Event constructor created, but got another one: %o",e,t),n}function gt(t){t.inPassiveListenerFlag?it.warn():t.cancelable?t.canceledFlag=!0:nt.warn()}Object.defineProperty(st,"NONE",{enumerable:!0}),Object.defineProperty(st,"CAPTURING_PHASE",{enumerable:!0}),Object.defineProperty(st,"AT_TARGET",{enumerable:!0}),Object.defineProperty(st,"BUBBLING_PHASE",{enumerable:!0});const mt=Object.getOwnPropertyNames(st.prototype);for(let t=0;t<mt.length;++t)"constructor"!==mt[t]&&Object.defineProperty(st.prototype,mt[t],{enumerable:!0});let ft;void 0!==J&&void 0!==J.Event&&Object.setPrototypeOf(st.prototype,J.Event.prototype);const bt={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};function vt(t){const e=Object.keys(bt);for(let n=0;n<e.length;++n){const i=e[n],o=bt[i];Object.defineProperty(t,i,{get:()=>o,configurable:!0,enumerable:!0})}}class yt extends st{static wrap(t){return new(_t(t))(t)}constructor(t){super(t.type,{bubbles:t.bubbles,cancelable:t.cancelable,composed:t.composed}),t.cancelBubble&&super.stopPropagation(),t.defaultPrevented&&super.preventDefault(),wt.set(this,{original:t});const e=Object.keys(t);for(let n=0;n<e.length;++n){const i=e[n];i in this||Object.defineProperty(this,i,xt(t,i))}}stopPropagation(){super.stopPropagation();const{original:t}=kt(this);"stopPropagation"in t&&t.stopPropagation()}get cancelBubble(){return super.cancelBubble}set cancelBubble(t){super.cancelBubble=t;const{original:e}=kt(this);"cancelBubble"in e&&(e.cancelBubble=t)}stopImmediatePropagation(){super.stopImmediatePropagation();const{original:t}=kt(this);"stopImmediatePropagation"in t&&t.stopImmediatePropagation()}get returnValue(){return super.returnValue}set returnValue(t){super.returnValue=t;const{original:e}=kt(this);"returnValue"in e&&(e.returnValue=t)}preventDefault(){super.preventDefault();const{original:t}=kt(this);"preventDefault"in t&&t.preventDefault()}get timeStamp(){const{original:t}=kt(this);return"timeStamp"in t?t.timeStamp:super.timeStamp}}const wt=new WeakMap;function kt(t){const e=wt.get(t);return K(null!=e,"'this' is expected an Event object, but got",t),e}const Et=new WeakMap;function _t(t){const e=Object.getPrototypeOf(t);if(null==e)return yt;let n=Et.get(e);return null==n&&(n=function(t,e){class n extends t{}const i=Object.keys(e);for(let t=0;t<i.length;++t)Object.defineProperty(n.prototype,i[t],xt(e,i[t]));return n}(_t(e),e),Et.set(e,n)),n}function xt(t,e){const n=Object.getOwnPropertyDescriptor(t,e);return{get(){const t=kt(this).original,n=t[e];return"function"==typeof n?n.bind(t):n},set(t){kt(this).original[e]=t},configurable:n.configurable,enumerable:n.enumerable}}function St(t){return 1==(1&t.flags)}function Lt(t){return 2==(2&t.flags)}function It(t){return 4==(4&t.flags)}function Ct(t){return 8==(8&t.flags)}function Pt({callback:t},e,n){try{"function"==typeof t?t.call(e,n):"function"==typeof t.handleEvent&&t.handleEvent(n)}catch(t){!function(t){try{const e=t instanceof Error?t:new Error(X(t));if("function"==typeof dispatchEvent&&"function"==typeof ErrorEvent)dispatchEvent(new ErrorEvent("error",{error:e,message:e.message}));else if("undefined"!=typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)}catch(t){}}(t)}}function Tt({listeners:t},e,n){for(let i=0;i<t.length;++i)if(t[i].callback===e&&St(t[i])===n)return i;return-1}function Rt(t,e,n){const i=Tt(t,e,n);return-1!==i&&At(t,i)}function At(t,e,n=!1){const i=t.listeners[e];return function(t){t.flags|=8}(i),i.signal&&i.signal.removeEventListener("abort",i.signalListener),t.cow&&!n?(t.cow=!1,t.listeners=t.listeners.filter(((t,n)=>n!==e)),!1):(t.listeners.splice(e,1),!0)}Et.set(Object.prototype,yt),void 0!==J&&void 0!==J.Event&&Et.set(J.Event.prototype,yt);class Dt{constructor(){Ot.set(this,Object.create(null))}addEventListener(t,e,n){const i=Ft(this),{callback:o,capture:r,once:a,passive:s,signal:l,type:c}=function(t,e,n){var i;if(Nt(e),"object"==typeof n&&null!==n)return{type:String(t),callback:null!=e?e:void 0,capture:Boolean(n.capture),passive:Boolean(n.passive),once:Boolean(n.once),signal:null!==(i=n.signal)&&void 0!==i?i:void 0};return{type:String(t),callback:null!=e?e:void 0,capture:Boolean(n),passive:!1,once:!1,signal:void 0}}(t,e,n);if(null==o||(null==l?void 0:l.aborted))return;const d=function(t,e){var n;return null!==(n=t[e])&&void 0!==n?n:t[e]={attrCallback:void 0,attrListener:void 0,cow:!1,listeners:[]}}(i,c),h=Tt(d,o,r);-1===h?function(t,e,n,i,o,r){let a;r&&(a=Rt.bind(null,t,e,n),r.addEventListener("abort",a));const s=function(t,e,n,i,o,r){return{callback:t,flags:(e?1:0)|(n?2:0)|(i?4:0),signal:o,signalListener:r}}(e,n,i,o,r,a);t.cow?(t.cow=!1,t.listeners=[...t.listeners,s]):t.listeners.push(s)}(d,o,r,s,a,l):function(t,e,n,i){ot.warn(St(t)?"capture":"bubble",t.callback),Lt(t)!==e&&rt.warn("passive");It(t)!==n&&rt.warn("once");t.signal!==i&&rt.warn("signal")}(d.listeners[h],s,a,l)}removeEventListener(t,e,n){const i=Ft(this),{callback:o,capture:r,type:a}=function(t,e,n){if(Nt(e),"object"==typeof n&&null!==n)return{type:String(t),callback:null!=e?e:void 0,capture:Boolean(n.capture)};return{type:String(t),callback:null!=e?e:void 0,capture:Boolean(n)}}(t,e,n),s=i[a];null!=o&&s&&Rt(s,o,r)}dispatchEvent(t){const e=Ft(this)[String(t.type)];if(null==e)return!0;const n=t instanceof st?t:yt.wrap(t),i=pt(n,"event");if(i.dispatchFlag)throw o="This event has been in dispatching.",J.DOMException?new J.DOMException(o,"InvalidStateError"):(null==ft&&(ft=class t extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,t)}get code(){return 11}get name(){return"InvalidStateError"}},Object.defineProperties(ft.prototype,{code:{enumerable:!0},name:{enumerable:!0}}),vt(ft),vt(ft.prototype)),new ft(o));var o;if(i.dispatchFlag=!0,i.target=i.currentTarget=this,!i.stopPropagationFlag){const{cow:t,listeners:o}=e;e.cow=!0;for(let r=0;r<o.length;++r){const a=o[r];if(!Ct(a)&&(It(a)&&At(e,r,!t)&&(r-=1),i.inPassiveListenerFlag=Lt(a),Pt(a,this,n),i.inPassiveListenerFlag=!1,i.stopImmediatePropagationFlag))break}t||(e.cow=!1)}return i.target=null,i.currentTarget=null,i.stopImmediatePropagationFlag=!1,i.stopPropagationFlag=!1,i.dispatchFlag=!1,!i.canceledFlag}}const Ot=new WeakMap;function Ft(t,e="this"){const n=Ot.get(t);return K(null!=n,"'%s' must be an object that EventTarget constructor created, but got another one: %o",e,t),n}function Nt(t){if("function"!=typeof t&&("object"!=typeof t||null===t||"function"!=typeof t.handleEvent)){if(null!=t&&"object"!=typeof t)throw new TypeError(Y(at.message,[t]));at.warn(t)}}const Ut=Object.getOwnPropertyNames(Dt.prototype);for(let t=0;t<Ut.length;++t)"constructor"!==Ut[t]&&Object.defineProperty(Dt.prototype,Ut[t],{enumerable:!0});async function $t(t){const e=t+"/js/keycloak.min.js";return await import(e),void 0!==$t._keycloakMod||($t._keycloakMod=window.Keycloak,delete window.Keycloak),$t._keycloakMod}void 0!==J&&void 0!==J.EventTarget&&Object.setPrototypeOf(Dt.prototype,J.EventTarget.prototype);class jt extends Dt{constructor(t,e,n,i,o){super(),this._baseURL=t,this._realm=e,this._clientId=n,this._keycloak=null,this._initDone=!1,this._silentCheckSsoUri=i,this._idpHint=o,this._checkId=null,this.MIN_VALIDITY=20,this.CHECK_INTERVAL=10,this.DEBUG=!1,this._onVisibilityChanged=this._onVisibilityChanged.bind(this),document.addEventListener("visibilitychange",this._onVisibilityChanged)}close(){document.removeEventListener("visibilitychange",this._onVisibilityChanged)}_onVisibilityChanged(){"visible"===document.visibilityState&&this._keycloak.authenticated&&this._checkTokeHasExpired()}_onChanged(){const t=new CustomEvent("changed",{detail:this._keycloak,bubbles:!0,composed:!0});this.dispatchEvent(t)}_onReady(t){t&&this._onChanged()}async _onTokenExpired(){console.log("Token has expired");let t=!1;try{t=await this._keycloak.updateToken(-1)}catch(t){return void console.log("Failed to refresh the token",t)}console.assert(t,"token should have been refreshed")}async _checkTokeHasExpired(){let t,e=this.MIN_VALIDITY+this.CHECK_INTERVAL;this.DEBUG&&console.log(`Updating token if not valid for at least ${e}s`);try{t=await this._keycloak.updateToken(e)}catch(t){console.log("Failed to refresh the token",t)}this.DEBUG&&t&&console.log("token has been refreshed")}async _onAuthSuccess(){null!==this._checkId&&(clearInterval(this._checkId),this._checkId=null),this._checkId=setInterval(this._checkTokeHasExpired.bind(this),1e3*this.CHECK_INTERVAL),this._onChanged()}async _onAuthLogout(){null!==this._checkId&&(clearInterval(this._checkId),this._checkId=null),this._onChanged()}async _ensureInstance(){if(null!==this._keycloak)return;const t=await $t(this._baseURL);this._keycloak=t({url:this._baseURL,realm:this._realm,clientId:this._clientId}),this._keycloak.onTokenExpired=this._onTokenExpired.bind(this),this._keycloak.onAuthRefreshSuccess=this._onChanged.bind(this),this._keycloak.onAuthRefreshError=this._onChanged.bind(this),this._keycloak.onAuthLogout=this._onAuthLogout.bind(this),this._keycloak.onAuthSuccess=this._onAuthSuccess.bind(this),this._keycloak.onAuthError=this._onChanged.bind(this),this._keycloak.onReady=this._onReady.bind(this)}async _keycloakInit(t){try{return await this._keycloak.init(t)}catch(e){return await this._keycloak.init(t)}}async _ensureInit(){if(await this._ensureInstance(),this._initDone)return;this._initDone=!0;const t={promiseType:"native",pkceMethod:"S256"};this.DEBUG&&(t.enableLogging=!0),this._silentCheckSsoUri?(t.onLoad="check-sso",t.silentCheckSsoRedirectUri=function(t){try{return new URL(t).href}catch(e){return new URL(t,window.location.href).href}}(this._silentCheckSsoUri),await function(t,e){let n=new Promise(((e,n)=>{let i=setTimeout((()=>{clearTimeout(i),n("Timed out in "+t+"ms.")}),t)}));return Promise.race([e,n])}(5e3,this._keycloakInit(t)).catch((()=>{console.log("Login timed out"),this._onChanged()}))):await this._keycloakInit(t)}isLoggingIn(){const t=window.location.href;return t.search("[&#]state=")>=0&&t.search("[&#]session_state=")>=0}async login(t){await this._ensureInit();const e=(t=t||{}).lang||"en",n=t.scope||"";this._keycloak.authenticated||await this._keycloak.login({kcLocale:e,locale:e,scope:n,idpHint:this._idpHint})}async tryLogin(){await this._ensureInit()}async localLogout(){this._keycloak.clearToken()}async logout(){await this._ensureInit(),this._keycloak.logout()}}const Bt=Object.freeze({UNKNOWN:"unknown",LOGGING_IN:"logging-in",LOGGED_IN:"logged-in",LOGGING_OUT:"logging-out",LOGGED_OUT:"logged-out"});class Mt extends _{constructor(){super(),this.lang="de",this.forceLogin=!1,this.loadPerson=!1,this.token="",this.subject="",this.name="",this.personId="",this.tryLogin=!1,this.person=null,this.entryPointUrl="",this._loginStatus=Bt.UNKNOWN,this.requestedLoginStatus=Bt.UNKNOWN,this.keycloakUrl=null,this.realm=null,this.clientId=null,this.silentCheckSsoRedirectUri=null,this.scope=null,this.idpHint="",this._onKCChanged=this._onKCChanged.bind(this)}update(t){t.forEach(((t,e)=>{switch(e){case"lang":z.changeLanguage(this.lang);break;case"entryPointUrl":q.getInstance(this.entryPointUrl,this.lang);case"requestedLoginStatus":switch(console.log("requested-login-status changed",this.requestedLoginStatus),this.requestedLoginStatus){case Bt.LOGGED_IN:this._kcwrapper.login({lang:this.lang,scope:this.scope||""});break;case Bt.LOGGED_OUT:this._loginStatus===Bt.LOGGED_IN&&this._setLoginStatus(Bt.LOGGING_OUT),this._kcwrapper.logout(),this._loginStatus===Bt.LOGGING_OUT&&this._setLoginStatus(Bt.LOGGED_IN)}}})),super.update(t)}_onKCChanged(t){const e=t.detail;let n=!1;if(e.authenticated){let t=this.token!==e.token;this.name=e.idTokenParsed.name,this.token=e.token,this.subject=e.subject;const i=e.idTokenParsed.preferred_username;i!==this.personId&&(this.person=null,n=!0),this.personId=i,this.sendSetPropertyEvents(),this._setLoginStatus(Bt.LOGGED_IN,t||n)}else this._loginStatus===Bt.LOGGED_IN&&this._setLoginStatus(Bt.LOGGING_OUT),this.name="",this.token="",this.subject="",this.personId="",this.person=null,this.sendSetPropertyEvents(),this._setLoginStatus(Bt.LOGGED_OUT);const i=this;n&&this.loadPerson&&q.getInstance(this.entryPointUrl).then((t=>{const e=t.getApiUrlForEntityName("Person")+"/"+i.personId;fetch(e,{headers:{"Content-Type":"application/ld+json",Authorization:"Bearer "+i.token}}).then((t=>t.json())).then((t=>{i.person=t,this.sendSetPropertyEvents(),this._setLoginStatus(this._loginStatus,!0)}))}),{},i.lang)}sendSetPropertyEvents(){const t={"login-status":this._loginStatus,subject:this.subject,token:this.token,"user-full-name":this.name,"person-id":this.personId,person:this.person};window.Cypress&&(window.DBPAuth=t),this.sendSetPropertyEvent("auth",t)}_setLoginStatus(t,e){(this._loginStatus!==t||e)&&(this._loginStatus=t,this.sendSetPropertyEvents())}static get properties(){return k({},super.properties,{lang:{type:String},forceLogin:{type:Boolean,attribute:"force-login"},tryLogin:{type:Boolean,attribute:"try-login"},loadPerson:{type:Boolean,attribute:"load-person"},entryPointUrl:{type:String,attribute:"entry-point-url"},name:{type:String,attribute:!1},token:{type:String,attribute:!1},subject:{type:String,attribute:!1},personId:{type:String,attribute:!1},person:{type:Object,attribute:!1},_loginStatus:{type:String,attribute:!1},keycloakUrl:{type:String,attribute:"url"},realm:{type:String},clientId:{type:String,attribute:"client-id"},silentCheckSsoRedirectUri:{type:String,attribute:"silent-check-sso-redirect-uri"},scope:{type:String},idpHint:{type:String,attribute:"idp-hint"},requestedLoginStatus:{type:String,attribute:"requested-login-status"}})}connectedCallback(){var t=this;if(super.connectedCallback(),!this.keycloakUrl)throw Error("url not set");if(!this.realm)throw Error("realm not set");if(!this.clientId)throw Error("client-id not set");this._kcwrapper=new jt(this.keycloakUrl,this.realm,this.clientId,this.silentCheckSsoRedirectUri,this.idpHint),this._kcwrapper.addEventListener("changed",this._onKCChanged);!async function(){t.forceLogin||t._kcwrapper.isLoggingIn()?(t._setLoginStatus(Bt.LOGGING_IN),await t._kcwrapper.login({lang:t.lang,scope:t.scope||""})):t.tryLogin?(t._setLoginStatus(Bt.LOGGING_IN),await t._kcwrapper.tryLogin(),t._loginStatus===Bt.LOGGING_IN&&t._setLoginStatus(Bt.LOGGED_OUT)):t._setLoginStatus(Bt.LOGGED_OUT)}()}disconnectedCallback(){this._kcwrapper.close(),this._kcwrapper.removeEventListener("changed",this._onKCChanged),super.disconnectedCallback()}}P(_);const Gt=M();class Ht extends(P(_)){constructor(){super(),this.lang="de",this.showImage=!1,this.auth={},this.closeDropdown=this.closeDropdown.bind(this),this.onWindowResize=this.onWindowResize.bind(this)}static get scopedElements(){return{"dbp-icon":R}}static get properties(){return k({},super.properties,{lang:{type:String},showImage:{type:Boolean,attribute:"show-image"},auth:{type:Object}})}onWindowResize(){this.updateDropdownWidth()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onWindowResize),document.addEventListener("click",this.closeDropdown)}disconnectedCallback(){window.removeEventListener("resize",this.onWindowResize),document.removeEventListener("click",this.closeDropdown),super.disconnectedCallback()}updateDropdownWidth(){const t=this.shadowRoot.querySelector("div.dropdown-menu");if(!t)return;let e=this.getBoundingClientRect(),n=window.innerWidth-e.left;t.setAttribute("style",`width: ${n-20}px`)}onLoginClicked(t){this.sendSetPropertyEvent("requested-login-status",Bt.LOGGED_IN),t.preventDefault()}onLogoutClicked(t){this.sendSetPropertyEvent("requested-login-status",Bt.LOGGED_OUT)}update(t){t.forEach(((t,e)=>{"lang"===e&&Gt.changeLanguage(this.lang)})),super.update(t)}static get styles(){return S(n||(n=w`
            ${0}

            :host {
                display: inline-block;
            }

            a {
                color: currentColor;
                cursor: pointer;
                text-decoration: none;
            }

            img {
                border-width: var(--dbp-border-width);
                border-color: var(--dbp-dark);
                border-style: solid;
            }

            .dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {
                display: block;
            }

            .dropdown-menu {
                display: none;
                min-width: 5em;
                max-width: 25em;
                position: absolute;
                z-index: 20;
                border: solid 1px black;
                border-radius: var(--dbp-border-radius);
                overflow: hidden;
                background-color: white;
            }

            .dropdown-content {
                background-color: white;
                padding-bottom: 0.5rem;
                padding-top: 0.5rem;
            }

            .dropdown-content img {
                max-width: 120px;
            }

            .menu a {
                /*padding: 0.3em;*/
                font-weight: 400;
                color: #000;
                display: block;
                text-decoration: none;
            }

            .menu a:hover {
                color: #E4154B;
            }

            .menu a.selected { color: white; background-color: black; }

            .dropdown-item {
                color: #4a4a4a;
                display: block;
                font-size: 0.875rem;
                line-height: 1.5;
                padding: 0.375rem 1rem;
                position: relative;
            }

              .dropdown, img.login {
                cursor: pointer;
            }

            a.dropdown-item {
                width: initial !important;
            }

            .main-button {
                min-width: 150px;
            }

            .menu-icon {
                height: 1em;
                width: 1em;
                vertical-align: -0.1rem;
            }

            .login-box svg {
                width: 1.1em;
                height: 1.1em;
                display: flex;
            }

            .login-button {
                padding: 0.3em 0.4em;
                transition: background-color 0.15s, color 0.15s;
            }

            .login-button:hover {
                background-color: var(--dbp-dark);
                color: var(--dbp-light);
                cursor: pointer;
                transition: none;
            }

            .login-box {
                display: flex;
                align-items: center;
            }

            .login-box:hover svg path {
                fill: var(--dbp-light);
            }

            .login-box .label {
                padding-left: 0.2em;
            }

            .dropdown-trigger {
                display: flex;
                align-items: center;
            }

            .dropdown-trigger .name {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                min-width: 0;
                margin-right: 0.5em
            }
        `),x())}setChevron(t){const e=this.shadowRoot.querySelector("#menu-chevron-icon");null!==e&&(e.name=t)}onDropdownClick(t){t.stopPropagation(),t.currentTarget.classList.toggle("is-active"),this.setChevron(t.currentTarget.classList.contains("is-active")?"chevron-up":"chevron-down"),this.updateDropdownWidth()}closeDropdown(){this.shadowRoot.querySelectorAll(".dropdown").forEach((function(t){t.classList.remove("is-active")})),this.setChevron("chevron-down")}renderLoggedIn(){const t=this.auth.person,e=this.showImage&&t&&t.image?t.image:null;return L(i||(i=w`
            <div class="dropdown" @click="${0}">
                <a href="#">
                    <div class="dropdown-trigger login-button">
                        <div class="name">${0}</div>
                        <dbp-icon class="menu-icon" name="chevron-down" id="menu-chevron-icon"></dbp-icon>
                    </div>
                </a>
                <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                    <div class="dropdown-content" @blur="${0}">
                        ${0}
                        <div class="menu">
                            <a href="#" @click="${0}" class="dropdown-item">${0}</a>
                        </div>
                    </div>
                </div>
            </div>
        `),this.onDropdownClick,this.auth["user-full-name"],this.closeDropdown,e?L(o||(o=w`<div class="dropdown-item"><img alt="" src="${0}"></div>`),e):"",this.onLogoutClicked,Gt.t("logout"))}renderLoggedOut(){return L(r||(r=w`
            <a href="#" @click="${0}">
                <div class="login-box login-button">
                    <div class="icon">${0}</div>
                    <div class="label">${0}</div>
                </div>
            </a>
        `),this.onLoginClicked,T('\n        <svg\n           viewBox="0 0 100 100"\n           y="0px"\n           x="0px"\n           id="icon"\n           role="img"\n           version="1.1">\n        <g\n           id="g6">\n            <path\n           style="stroke-width:1.33417916"\n           id="path2"\n           d="m 42.943908,38.894934 5.885859,6.967885 H 5.4215537 c -1.8393311,0 -3.4334181,1.741972 -3.4334181,4.064599 0,2.322628 1.4714649,4.064599 3.4334181,4.064599 H 48.829767 L 42.943908,60.9599 c -1.348843,1.596808 -1.348843,4.064599 0,5.661406 1.348843,1.596808 3.433418,1.596808 4.782261,0 L 61.705085,49.927418 47.726169,33.378693 c -1.348843,-1.596806 -3.433418,-1.596806 -4.782261,0 -1.348843,1.596807 -1.348843,4.064599 0,5.516241 z" />\n            <path\n           id="path4"\n           d="m 50,2.3007812 c -18.777325,0 -35.049449,10.9124408 -42.8261719,26.7246098 H 13.390625 C 20.672112,16.348362 34.336876,7.8007812 50,7.8007812 73.3,7.8007812 92.300781,26.7 92.300781,50 92.300781,73.3 73.3,92.300781 50,92.300781 c -15.673389,0 -29.345175,-8.60579 -36.623047,-21.326172 H 7.1640625 C 14.942553,86.8272 31.242598,97.800781 50.099609,97.800781 76.399609,97.800781 97.900391,76.4 97.900391,50 97.800391,23.7 76.3,2.3007812 50,2.3007812 Z" />\n        </g>\n        </svg>\n        '),Gt.t("login"))}render(){const t="logged-in"===this.auth["login-status"];return L(a||(a=w`
            <div class="authbox">
                ${0}
            </div>
        `),t?this.renderLoggedIn():this.renderLoggedOut())}}const zt=E({en:{send:"send"},de:{send:"senden"}},"de","en");class Vt extends ${constructor(){super(),this.lang="de"}static get properties(){return k({},super.properties,{lang:{type:String}})}connectedCallback(){super.connectedCallback(),zt.changeLanguage(this.lang);const t=this;window.addEventListener("dbp-notification-send",(e=>{if(void 0===e.detail)return;t.notificationBlock=t._("#notification");const n=`notification-${(()=>{let t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?n:3&n|8).toString(16)}))})()}`,i=void 0!==e.detail.type?e.detail.type:"info",o=void 0!==e.detail.body?e.detail.body:"",r=void 0!==e.detail.summary?e.detail.summary:"",a=void 0!==e.detail.timeout?e.detail.timeout:0,s=void 0!==e.detail.icon?e.detail.icon:"",l=""!==s?`<dbp-icon name="${s}"></dbp-icon>`:"",c=""!==r?`<h3>${r}</h3>`:"";t.notificationBlock.innerHTML=`\n                <div id="${n}" class="notification is-${i}">\n                    <button id="${n}-button" onclick="parentNode.parentNode.removeChild(parentNode)" class="delete"></button>\n                    ${c}\n                    ${l} ${o}\n                </div>\n            `+t.notificationBlock.innerHTML;const d=`#${n}`;a>0&&setTimeout((()=>{t.removeMessageId(d)}),1e3*a),e.preventDefault()})),this.updateComplete.then((()=>{}))}removeMessageId(t){const e=this._(t);e&&this.notificationBlock.removeChild(e)}static get styles(){return S(s||(s=w`
            ${0}
            ${0}
            ${0}

            .notification:not(:last-child) {
                margin-bottom: 1.5rem;
            }

            .notification h3 {
                font-weight: bold;
                margin-bottom: 3px;
            }

            .delete, .modal-close {
                -moz-appearance: none;
                -webkit-appearance: none;
                background-color: rgba(10,10,10,.2);
                border: none;
                border-radius: 290486px;
                cursor: pointer;
                pointer-events: auto;
                display: inline-block;
                flex-grow: 0;
                flex-shrink: 0;
                font-size: 0;
                height: 20px;
                max-height: 20px;
                max-width: 20px;
                min-height: 20px;
                min-width: 20px;
                outline: 0;
                position: relative;
                vertical-align: top;
                width: 20px;
            }

            .delete::before, .modal-close::before, .delete::after, .modal-close::after {
                background-color: white;
                content: "";
                display: block;
                left: 50%;
                position: absolute;
                top: 50%;
                -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
                        transform: translateX(-50%) translateY(-50%) rotate(45deg);
                -webkit-transform-origin: center center;
                        transform-origin: center center;
            }

            .delete::before, .modal-close::before {
                height: 2px;
                width: 50%;
            }

            .delete::after, .modal-close::after {
                height: 50%;
                width: 2px;
            }

            .delete:hover, .modal-close:hover, .delete:focus, .modal-close:focus {
                background-color: rgba(10, 10, 10, 0.3);
            }

            .delete:active, .modal-close:active {
                background-color: rgba(10, 10, 10, 0.4);
            }

            #notification {
                position: fixed; top: 0; max-width: 500px; margin: 0.75em auto; left: 0; right: 0; z-index: 1000; padding: 0;
            }

            .notification h3 {
                margin: 0 0 3px 0;
                font: inherit;
                font-weight: bold; 
            }
        `),x(),A(),D())}render(){return L(l||(l=w`
            <div class="columns">
                <div class="column" id="notification">
                </div>
            </div>
        `))}}function Wt(t,e){void 0===e&&(e={});for(var n=function(t){for(var e=[],n=0;n<t.length;){var i=t[n];if("*"!==i&&"+"!==i&&"?"!==i)if("\\"!==i)if("{"!==i)if("}"!==i)if(":"!==i)if("("!==i)e.push({type:"CHAR",index:n,value:t[n++]});else{var o=1,r="";if("?"===t[s=n+1])throw new TypeError('Pattern cannot start with "?" at '+s);for(;s<t.length;)if("\\"!==t[s]){if(")"===t[s]){if(0==--o){s++;break}}else if("("===t[s]&&(o++,"?"!==t[s+1]))throw new TypeError("Capturing groups are not allowed at "+s);r+=t[s++]}else r+=t[s++]+t[s++];if(o)throw new TypeError("Unbalanced pattern at "+n);if(!r)throw new TypeError("Missing pattern at "+n);e.push({type:"PATTERN",index:n,value:r}),n=s}else{for(var a="",s=n+1;s<t.length;){var l=t.charCodeAt(s);if(!(l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||95===l))break;a+=t[s++]}if(!a)throw new TypeError("Missing parameter name at "+n);e.push({type:"NAME",index:n,value:a}),n=s}else e.push({type:"CLOSE",index:n,value:t[n++]});else e.push({type:"OPEN",index:n,value:t[n++]});else e.push({type:"ESCAPED_CHAR",index:n++,value:t[n++]});else e.push({type:"MODIFIER",index:n,value:t[n++]})}return e.push({type:"END",index:n,value:""}),e}(t),i=e.prefixes,o=void 0===i?"./":i,r="[^"+Kt(e.delimiter||"/#?")+"]+?",a=[],s=0,l=0,c="",d=function(t){if(l<n.length&&n[l].type===t)return n[l++].value},h=function(t){var e=d(t);if(void 0!==e)return e;var i=n[l],o=i.type,r=i.index;throw new TypeError("Unexpected "+o+" at "+r+", expected "+t)},u=function(){for(var t,e="";t=d("CHAR")||d("ESCAPED_CHAR");)e+=t;return e};l<n.length;){var p=d("CHAR"),g=d("NAME"),m=d("PATTERN");if(g||m){var f=p||"";-1===o.indexOf(f)&&(c+=f,f=""),c&&(a.push(c),c=""),a.push({name:g||s++,prefix:f,suffix:"",pattern:m||r,modifier:d("MODIFIER")||""})}else{var b=p||d("ESCAPED_CHAR");if(b)c+=b;else if(c&&(a.push(c),c=""),d("OPEN")){f=u();var v=d("NAME")||"",y=d("PATTERN")||"",w=u();h("CLOSE"),a.push({name:v||(y?s++:""),pattern:v&&!y?r:y,prefix:f,suffix:w,modifier:d("MODIFIER")||""})}else h("END")}}return a}function qt(t,e){var n=[];return function(t,e,n){void 0===n&&(n={});var i=n.decode,o=void 0===i?function(t){return t}:i;return function(n){var i=t.exec(n);if(!i)return!1;for(var r=i[0],a=i.index,s=Object.create(null),l=function(t){if(void 0===i[t])return"continue";var n=e[t-1];"*"===n.modifier||"+"===n.modifier?s[n.name]=i[t].split(n.prefix+n.suffix).map((function(t){return o(t,n)})):s[n.name]=o(i[t],n)},c=1;c<i.length;c++)l(c);return{path:r,index:a,params:s}}}(Jt(t,n,e),n,e)}function Kt(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Yt(t){return t&&t.sensitive?"":"i"}function Xt(t,e,n){return function(t,e,n){void 0===n&&(n={});for(var i=n.strict,o=void 0!==i&&i,r=n.start,a=void 0===r||r,s=n.end,l=void 0===s||s,c=n.encode,d=void 0===c?function(t){return t}:c,h="["+Kt(n.endsWith||"")+"]|$",u="["+Kt(n.delimiter||"/#?")+"]",p=a?"^":"",g=0,m=t;g<m.length;g++){var f=m[g];if("string"==typeof f)p+=Kt(d(f));else{var b=Kt(d(f.prefix)),v=Kt(d(f.suffix));if(f.pattern)if(e&&e.push(f),b||v)if("+"===f.modifier||"*"===f.modifier){var y="*"===f.modifier?"?":"";p+="(?:"+b+"((?:"+f.pattern+")(?:"+v+b+"(?:"+f.pattern+"))*)"+v+")"+y}else p+="(?:"+b+"("+f.pattern+")"+v+")"+f.modifier;else p+="("+f.pattern+")"+f.modifier;else p+="(?:"+b+v+")"+f.modifier}}if(l)o||(p+=u+"?"),p+=n.endsWith?"(?="+h+")":"$";else{var w=t[t.length-1],k="string"==typeof w?u.indexOf(w[w.length-1])>-1:void 0===w;o||(p+="(?:"+u+"(?="+h+"))?"),k||(p+="(?="+u+"|"+h+")")}return new RegExp(p,Yt(n))}(Wt(t,n),e,n)}function Jt(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,o=n.exec(t.source);o;)e.push({name:o[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),o=n.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,n){var i=t.map((function(t){return Jt(t,e,n).source}));return new RegExp("(?:"+i.join("|")+")",Yt(n))}(t,e,n):Xt(t,e,n)}
/*! Universal Router | MIT License | https://www.kriasoft.com/universal-router/ */function Qt(t){try{return decodeURIComponent(t)}catch(e){return t}}function Zt(t,e,n,i,o){var r,a,s=0;return{next:function(l){if(t===l)return{done:!0,value:!1};if(!r){var c=t,d=!c.children;if(c.match||(c.match=qt(c.path||"",Object.assign({end:d},n))),r=c.match(i)){var h=r.path;return r.path=d||"/"!==h.charAt(h.length-1)?h:h.substr(1),r.params=Object.assign({},o,{},r.params),{done:!1,value:{route:t,baseUrl:e,path:r.path,params:r.params}}}}if(r&&t.children)for(;s<t.children.length;){if(!a){var u=t.children[s];u.parent=t,a=Zt(u,e+r.path,n,i.substr(r.path.length),r.params)}var p=a.next(l);if(!p.done)return{done:!1,value:p.value};a=null,s++}return{done:!0,value:!1}}}}function te(t,e){if("function"==typeof t.route.action)return t.route.action(t,e)}var ee=function(){function t(t,e){if(!t||"object"!=typeof t)throw new TypeError("Invalid routes");this.options=Object.assign({decode:Qt},e),this.baseUrl=this.options.baseUrl||"",this.root=Array.isArray(t)?{path:"",children:t,parent:null}:t,this.root.parent=null}return t.prototype.resolve=function(t){var e,n,i=this,o=Object.assign({router:this},this.options.context,{},"string"==typeof t?{pathname:t}:t),r=Zt(this.root,this.baseUrl,this.options,o.pathname.substr(this.baseUrl.length)),a=this.options.resolveRoute||te,s=o;function l(t,i,c){void 0===i&&(i=!e.done&&e.value.route);var d=null===c&&!e.done&&e.value.route;if(e=n||r.next(d),n=null,!t&&(e.done||!function(t,e){for(var n=e;n;)if((n=n.parent)===t)return!0;return!1}(i,e.value.route)))return n=e,Promise.resolve(null);if(e.done){var h=new Error("Route not found");return h.status=404,Promise.reject(h)}return s=Object.assign({},o,{},e.value),Promise.resolve(a(s,e.value.params)).then((function(e){return null!=e?e:l(t,i,e)}))}return o.next=l,Promise.resolve().then((function(){return l(!0,i.root)})).catch((function(t){if(i.options.errorHandler)return i.options.errorHandler(t,s);throw t}))},t}();
/*! Universal Router | MIT License | https://www.kriasoft.com/universal-router/ */function ne(t,e,n){if(e.name&&t.has(e.name))throw new Error('Route "'+e.name+'" already exists');if(e.name&&t.set(e.name,e),n)for(var i=0;i<n.length;i++){var o=n[i];o.parent=e,ne(t,o,o.children)}}function ie(t,e){if(!t)throw new ReferenceError("Router is not defined");var n=new Map,i=new Map,o=Object.assign({encode:encodeURIComponent},e);return function(e,r){var a=n.get(e);if(!(a||(n.clear(),i.clear(),ne(n,t.root,t.root.children),a=n.get(e))))throw new Error('Route "'+e+'" not found');var s=i.get(a);if(!s){for(var l="",c=a;c;){var d=Array.isArray(c.path)?c.path[0]:c.path;d&&(l=d+l),c=c.parent}for(var h=Wt(l,o),u=function(t,e){void 0===e&&(e={});var n=Yt(e),i=e.encode,o=void 0===i?function(t){return t}:i,r=e.validate,a=void 0===r||r,s=t.map((function(t){if("object"==typeof t)return new RegExp("^(?:"+t.pattern+")$",n)}));return function(e){for(var n="",i=0;i<t.length;i++){var r=t[i];if("string"!=typeof r){var l=e?e[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,d="*"===r.modifier||"+"===r.modifier;if(Array.isArray(l)){if(!d)throw new TypeError('Expected "'+r.name+'" to not repeat, but got an array');if(0===l.length){if(c)continue;throw new TypeError('Expected "'+r.name+'" to not be empty')}for(var h=0;h<l.length;h++){var u=o(l[h],r);if(a&&!s[i].test(u))throw new TypeError('Expected all "'+r.name+'" to match "'+r.pattern+'", but got "'+u+'"');n+=r.prefix+u+r.suffix}}else if("string"!=typeof l&&"number"!=typeof l){if(!c){var p=d?"an array":"a string";throw new TypeError('Expected "'+r.name+'" to be '+p)}}else{if(u=o(String(l),r),a&&!s[i].test(u))throw new TypeError('Expected "'+r.name+'" to match "'+r.pattern+'", but got "'+u+'"');n+=r.prefix+u+r.suffix}}else n+=r}return n}}(h,o),p=Object.create(null),g=0;g<h.length;g++){var m=h[g];"string"!=typeof m&&(p[m.name]=!0)}s={toPath:u,keys:p},i.set(a,s)}var f=t.baseUrl+s.toPath(r)||"/";if(o.stringifyQueryParams&&r){for(var b={},v=Object.keys(r),y=0;y<v.length;y++){var w=v[y];s.keys[w]||(b[w]=r[w])}var k=o.stringifyQueryParams(b);k&&(f+="?"===k.charAt(0)?k:"?"+k)}return f}}class oe{constructor(t,e,n){this.getState=e.getState,this.setState=e.setState,this.routeName=e.routeName,console.assert(this.getState),console.assert(this.setState),console.assert(this.routeName),this.router=new ee(t,n),window.addEventListener("popstate",(t=>{this.setStateFromCurrentLocation(),this.dispatchLocationChanged()}))}setStateFromCurrentLocation(){const t=location.pathname;this.router.resolve({pathname:t}).then((e=>{const n=this.getPathname(e);if(n!==t){const t=location.href;window.history.replaceState({},"",n),this.dispatchLocationChanged(t)}this.setState(e)})).catch((t=>{}))}update(){setTimeout((()=>{const t=this.getPathname();if(t===location.pathname)return;const e=location.href;window.history.pushState({},"",t),this.dispatchLocationChanged(e)}))}updateFromPathname(t){this.router.resolve({pathname:t}).then((e=>{if(location.pathname===t)return;const n=location.href;window.history.pushState({},"",t),this.setState(e),this.dispatchLocationChanged(n)})).catch((e=>{throw new Error(`Route not found: ${t}: ${e}`)}))}getPathname(t){void 0===t&&(t={});let e=k({},this.getState(),t);return ie(this.router)(this.routeName,e)}dispatchLocationChanged(t=""){window.dispatchEvent(new CustomEvent("locationchanged",{detail:{referrerUrl:t},bubbles:!0}))}}class re extends _{constructor(){super(),this.env="",this.gitInfo="",this.buildUrl="",this.buildTime=""}static get properties(){return k({},super.properties,{env:{type:String},buildUrl:{type:String,attribute:"build-url"},buildTime:{type:String,attribute:"build-time"},gitInfo:{type:String,attribute:"git-info"}})}static get styles(){return S(c||(c=w`
            ${0}
            ${0}
            ${0}

            :host {
                display: inline-block;
            }
        `),x(),A(),O())}render(){const t=new Date(this.buildTime);return L(d||(d=w`
            <a href="${0}" style="float: right">
                <div class="tags has-addons" title="Build Time: ${0}">
                    <span class="tag is-light">build</span>
                    <span class="tag is-dark">${0} (${0})</span>
                </div>
            </a>
        `),this.buildUrl,t.toString(),this.gitInfo,this.env)}}const ae=M();class se extends _{constructor(){super(),this.lang=ae.language}static get properties(){return k({},super.properties,{lang:{type:String}})}update(t){t.forEach(((t,e)=>{"lang"===e&&ae.changeLanguage(this.lang)})),super.update(t)}static get styles(){return S(h||(h=w`
            ${0}
            ${0}

            :host {
                display: inline-block;
            }

            #claim
            {
                font-size: 12px;
                text-align: right;
                padding: 0 17px 0 0;
                line-height: 17px;
                letter-spacing: 2px;
                vertical-align: top;
                text-transform: uppercase;
                display: inline-block;
                white-space: nowrap;
            }

            #img {
                overflow: visible;
            }

            a:hover path, a:focus path {
                fill:#000 !important;
                transition:none;
            }

             * {
                transition:fill 0.15s, stroke 0.15s;
            }
        `),x(),A())}render(){return L(u||(u=w`
            <a href="https://www.tugraz.at" title="TU Graz Home" target="_blank" rel="noopener">
                <div id="claim">
                    <div class="int-header-logo-claim-single">${0}</div>
                    <div class="int-header-logo-claim-single">${0}</div>
                    <div class="int-header-logo-claim-single">${0}</div>
                </div>
                <svg id="img" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" height="51.862" width="141.1" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 141.10001 51.862499"><g transform="matrix(1.25 0 0 -1.25 0 51.862)"><g transform="scale(.1)"><path style="fill:#e4154b" d="m0 103.73h207.45v207.46l-207.45 0.01v-207.47z"></path><path style="fill:#e4154b" d="m228.19 103.73h207.46v207.46h-207.46v-207.46z"></path><path style="fill:#e4154b" d="m456.41 103.73h207.44v207.46h-207.44v-207.46z"></path><path style="fill:#e4154b" d="m103.72 0h207.47v207.46h-207.47v-207.46z"></path><path style="fill:#e4154b" d="m352.68 207.46h207.44v207.46h-207.44v-207.46z"></path><path style="fill:#231f20" d="m751.04 277.91h-66.426v33.195h171.19v-33.195h-66.407v-173.73h-38.359v173.73"></path><path style="fill:#231f20" d="m1048.3 180.22c0-12.461-2.25-23.711-6.72-33.75-4.5-10.039-10.61-18.555-18.36-25.567-7.76-7.031-16.9-12.421-27.503-16.21-10.605-3.809-22.109-5.7036-34.551-5.7036-12.422 0-23.945 1.8946-34.551 5.7036-10.605 3.789-19.824 9.179-27.656 16.21-7.851 7.012-13.984 15.528-18.34 25.567-4.394 10.039-6.582 21.289-6.582 33.75v130.89h38.379v-129.59c0-5.039 0.801-10.351 2.442-15.898 1.64-5.547 4.336-10.664 8.125-15.332s8.789-8.516 15.039-11.523c6.211-3.008 13.926-4.512 23.144-4.512 9.199 0 16.914 1.504 23.145 4.512 6.23 3.007 11.25 6.855 15.039 11.523 3.77 4.668 6.48 9.785 8.12 15.332 1.63 5.547 2.45 10.859 2.45 15.898v129.59h38.38v-130.89"></path><path style="fill:#231f20" d="m832.56 75.664c-7.597 3.2812-17.46 4.8632-25.332 4.8632-22.929 0-35.605-14.434-35.605-33.184 0-18.613 12.383-32.637 33.34-32.637 5.351 0 9.59 0.5274 12.969 1.3086v23.867h-20.84v14.414h39.687v-49.297c-10.41-2.6172-21.25-4.707-31.816-4.707-31.797 0-53.906 14.805-53.906 45.742 0 31.348 20.566 48.906 53.906 48.906 11.406 0 20.41-1.4453 28.867-3.8086l-1.27-15.469"></path><path style="fill:#231f20" d="m856.2 69.375h16.758v-15.332h0.293c0.84 6.289 8.574 16.914 19.824 16.914 1.836 0 3.828 0 5.782-0.5273v-17.715c-1.68 0.918-5.059 1.4454-8.457 1.4454-15.333 0-15.333-17.832-15.333-27.52v-24.785h-18.867v67.52"></path><path style="fill:#231f20" d="m913.75 65.84c7.324 3.1446 17.187 5.1172 25.215 5.1172 22.09 0 31.23-8.5351 31.23-28.457v-8.6523c0-6.8165 0.156-11.934 0.293-16.914 0.137-5.1172 0.41-9.8242 0.84-15.078h-16.602c-0.703 3.5352-0.703 8.0078-0.839 10.098h-0.293c-4.36-7.4618-13.81-11.661-22.38-11.661-12.793 0-25.332 7.207-25.332 20.059 0 10.078 5.195 15.976 12.383 19.258 7.187 3.2812 16.464 3.9453 24.355 3.9453h10.41c0 10.879-5.195 14.551-16.328 14.551-8.008 0-16.035-2.8907-22.363-7.3438l-0.586 15.078zm22.11-52.715c5.782 0 10.274 2.3633 13.223 6.0352 3.105 3.8086 3.945 8.6523 3.945 13.906h-8.164c-8.437 0-20.957-1.3086-20.957-11.68 0-5.7617 5.195-8.2617 11.953-8.2617"></path><path style="fill:#231f20" d="m985.69 69.375h57.422v-14.414l-36.04-39.473h37.31v-13.633h-60.235v14.297l36.715 39.59h-35.172v13.633"></path><path style="fill:#e4154b" d="m1059.6 0h69.102v69.121h-69.102v-69.121z"></path></g></g></svg>
            </a>
        `),ae.t("logo.word1"),ae.t("logo.word2"),ae.t("logo.word3"))}}const le=M();class ce extends(P(F)){constructor(){super(),this.lang=le.language,this._onVisibilityChanged=this._onVisibilityChanged.bind(this)}static get properties(){return{lang:{type:String}}}static set app(t){this._app=t}update(t){t.forEach(((t,e)=>{"lang"===e&&le.changeLanguage(this.lang)})),super.update(t)}static get styles(){return S(p||(p=w`
            ${0}
            ${0}

            p { line-height: 1.8em }
            .item {padding-top: 0.5em;}
            .description {
                padding-left: 2em;
                font-style: italic;
                margin-top: -1px;
                line-height: initial;
            }

            h2 a:hover {
                color: #E4154B;
            }
        `),x(),A())}_onVisibilityChanged(){this.requestUpdate()}connectedCallback(){super.connectedCallback();ce._app.addEventListener("visibility-changed",this._onVisibilityChanged)}disconnectedCallback(){ce._app.removeEventListener("visibility-changed",this._onVisibilityChanged),super.disconnectedCallback()}render(){const t=ce._app;let e=[];const n=(e,n)=>{e.preventDefault(),t.switchComponent(n.routing_name)};for(let i of t.visibleRoutes){let o=t.metadata[i];"welcome"!==i&&e.push(L(g||(g=w`
                    <div class="item">
                        <h2><a href="#" @click=${0}>${0}</a></h2>
                        <p class="description">${0}</p>
                    </div>`),(t=>{n(t,o)}),o.name[this.lang],o.description[this.lang]))}return L(m||(m=w`
            <p>${0}
            ${0}</p>
            <br>
            ${0}
        `),le.t("welcome.headline",{appname:t.topic.name[this.lang]}),t.topic.description[this.lang],e)}}const de={element:"dbp-app-shell-welcome",module_src:"",routing_name:"welcome",name:{de:"Willkommen",en:"Welcome"},short_name:{de:"Willkommen",en:"Welcome"},description:{de:"",en:""},visible:!0,required_roles:[]};function he(t){window._paq=window._paq||[],window._paq.push(t)}N("dbp-app-shell-welcome",ce);class ue extends ${constructor(){super(),this.endpoint="",this.siteId=-1,this.isRunning=!1,this.lastEvent=[],this.gitInfo="",this.auth={},this.analyticsEvent={},this.loginStatus=""}static get properties(){return k({},super.properties,{endpoint:{type:String},siteId:{type:Number,attribute:"site-id"},gitInfo:{type:Number,attribute:"git-info"},auth:{type:Object},analyticsEvent:{type:Object,attribute:"analytics-event"}})}update(t){t.forEach(((t,e)=>{switch(e){case"auth":{const t=this.auth["login-status"];this.loginStatus!==t&&(this.setupMatomo(t===Bt.LOGGED_IN),this.loginStatus=t)}break;case"analyticsEvent":{console.log("MatomoElement("+this.isRunning+") analyticsEvent: "+this.analyticsEvent.action+", "+this.analyticsEvent.message);const t=["trackEvent",this.analyticsEvent.category,this.analyticsEvent.action,this.analyticsEvent.name,this.analyticsEvent.value];this.isRunning?he(t):this.lastEvent=t}}})),super.update(t)}render(){return""}setupMatomo(t){if(t&&!this.isRunning)return-1===this.siteId?void console.log("site id missing, skipping matomo..."):""===this.endpoint?void console.log("endpoint missing, skipping matomo..."):(console.log("add matomo..."),he(["setCustomVariable",1,"GitCommit",this.gitInfo,"visit"]),he(["enableHeartBeatTimer"]),he(["disableCookies"]),he(["trackPageView"]),he(["enableLinkTracking"]),function(t,e){he(["setTrackerUrl",t+"matomo.php"]),he(["setSiteId",e]);var n=document.createElement("script"),i=document.getElementsByTagName("script")[0];n.type="text/javascript",n.async=!0,n.defer=!0,n.src=t+"matomo.js",i.parentNode.insertBefore(n,i)}(this.endpoint,this.siteId),window.addEventListener("locationchanged",(function(t){he(["setReferrerUrl",t.detail.referrerUrl]),he(["setCustomUrl",location.href]),he(["trackPageView"]);var e=document.getElementById("content");he(["MediaAnalytics::scanForMedia",e]),he(["FormAnalytics::scanForForms",e]),he(["trackContentImpressionsWithinNode",e])})),window.addEventListener("error",(function(t){he(["trackEvent","Error",t.error.message+"\n"+t.error.stack])})),window.addEventListener("unhandledrejection",(function(t){he(["trackEvent","UnhandledRejection",t.reason])})),this.isRunning=!0,void(this.lastEvent.length>0&&(console.log("MatomoElement* ("+this.isRunning+"): "+this.lastEvent[1]+", "+this.lastEvent[2]),he(this.lastEvent),this.lastEvent=[])));!t&&this.isRunning&&(console.log("remove matomo..."),this.isRunning=!1)}}const pe=M();class ge extends(P(_)){constructor(){super(),this.lang=pe.language,this.activeView="",this.entryPointUrl="",this.subtitle="",this.description="",this.routes=[],this.visibleRoutes=[],this.metadata={},this.topic={},this.basePath="/",this.keycloakConfig=null,this.noWelcomePage=!1,this.menuHeight=-1,this.gitInfo="",this.env="",this.buildUrl="",this.buildTime="",this._loginStatus="unknown",this._roles=[],this.matomoUrl="",this.matomoSiteId=-1,this._attrObserver=new MutationObserver(this.onAttributeObserved),this.shellName="TU Graz",this.shellSubname="Graz University of Technology",this.noBrand=!1,this.auth={}}static get scopedElements(){return{"dbp-language-select":H,"dbp-tugraz-logo":se,"dbp-build-info":re,"dbp-auth-keycloak":Mt,"dbp-auth-menu-button":Ht,"dbp-notification":Vt,"dbp-icon":R,"dbp-matomo":ue}}onAttributeObserved(t,e){for(let e of t)if("attributes"===e.type){const t=e.attributeName,n=e.target.getAttribute(t);sessionStorage.setItem("dbp-attr-"+t,n)}}async fetchMetadata(t){let e={},n=[];const i=await(await fetch(t,{headers:{"Content-Type":"application/json"}})).json();this.topic=i;const o=async function(t){const e=await fetch(t,{headers:{"Content-Type":"application/json"}});if(!e.ok)throw e;const n=await e.json();if(void 0===n.element)throw new Error("no element defined in metadata");return n};let r=[];for(const e of i.activities){const n=new URL(e.path,new URL(t,window.location).href).href;r.push([void 0===e.visible||e.visible,n,o(n)])}for(const[t,i,o]of r)try{const r=await o;r.visible=t,r.module_src=new URL(r.module_src,i).href,r.required_roles=r.required_roles||[],e[r.routing_name]=r,n.push(r.routing_name)}catch(t){console.log(t)}this.noWelcomePage||(n.unshift("welcome"),e=Object.assign(e,{welcome:de}),customElements.get("dbp-app-shell-welcome").app=this),this.metadata=e,this.routes=n,this.activeView?this.switchComponent(this.activeView):this.switchComponent(n[0])}initRouter(){const t=[{path:"",action:t=>({lang:this.lang,component:""})},{path:"/:lang",children:[{path:"",action:(t,e)=>({lang:e.lang,component:""})},{name:"mainRoute",path:"/:component",action:(t,e)=>{let n=e.component.toLowerCase().replace(/&.+/,"");return{lang:e.lang,component:n}}}]}];this.router=new oe(t,{routeName:"mainRoute",getState:()=>({component:this.activeView,lang:this.lang}),setState:t=>{this.updateLangIfChanged(t.lang),this.switchComponent(t.component)}},{baseUrl:new URL(this.basePath,window.location).pathname.replace(/\/$/,"")}),this.router.setStateFromCurrentLocation()}static get properties(){return k({},super.properties,{lang:{type:String,reflect:!0},src:{type:String},basePath:{type:String,attribute:"base-path"},activeView:{type:String,attribute:!1},entryPointUrl:{type:String,attribute:"entry-point-url"},keycloakConfig:{type:Object,attribute:"keycloak-config"},metadata:{type:Object,attribute:!1},visibleRoutes:{type:Array,attribute:!1},topic:{type:Object,attribute:!1},subtitle:{type:String,attribute:!1},description:{type:String,attribute:!1},_loginStatus:{type:Boolean,attribute:!1},_roles:{type:Array,attribute:!1},matomoUrl:{type:String,attribute:"matomo-url"},matomoSiteId:{type:Number,attribute:"matomo-site-id"},noWelcomePage:{type:Boolean,attribute:"no-welcome-page"},shellName:{type:String,attribute:"shell-name"},shellSubname:{type:String,attribute:"shell-subname"},noBrand:{type:Boolean,attribute:"no-brand"},gitInfo:{type:String,attribute:"git-info"},buildUrl:{type:String,attribute:"build-url"},buildTime:{type:String,attribute:"build-time"},env:{type:String},auth:{type:Object}})}connectedCallback(){super.connectedCallback(),this.src&&this.fetchMetadata(this.src),this.initRouter()}updateLangIfChanged(t){this.lang!==t&&(this.lang=t,this.router.update(),this.sendSetPropertyEvent("lang",t))}update(t){t.forEach(((t,e)=>{switch(e){case"lang":pe.changeLanguage(this.lang),document.documentElement.setAttribute("lang",this.lang),pe.changeLanguage(this.lang),this.router.update(),this.subtitle=this.activeMetaDataText("short_name"),this.description=this.activeMetaDataText("description");break;case"metadata":this._updateVisibleRoutes();break;case"auth":{this.auth.person?this._roles=this.auth.person.roles:this._roles=[],this._updateVisibleRoutes();const t=this.auth["login-status"];t!==this._loginStatus&&console.log("Login status: "+t),this._loginStatus=t,"logging-out"===this._loginStatus&&sessionStorage.clear()}}})),super.update(t)}onMenuItemClick(t){if(t.preventDefault(),!t.currentTarget.className.includes("selected")){const t=new CustomEvent("beforeunload",{bubbles:!0,cancelable:!0});if(!window.dispatchEvent(t))return}const e=t.composedPath()[0].getAttribute("href");this.router.updateFromPathname(e),this.hideMenu()}onLanguageChanged(t){const e=t.detail.lang,n=this.lang!==e;this.lang=e,n&&(this.router.update(),this.subtitle=this.activeMetaDataText("short_name"),this.description=this.activeMetaDataText("description"))}switchComponent(t){let e=window.pageYOffset;const n=t!==this.activeView;this.activeView=t,n&&this.router.update();const i=this.metadata[t];if(void 0===i)return;let o=()=>{if(e>0){const t=this.shadowRoot.querySelector("header"),n=this.shadowRoot.querySelector("#headline");if(null===t||null===n)return;let i=getComputedStyle(n),o=isNaN(parseInt(i.marginTop,10))?0:parseInt(i.marginTop,10),r=isNaN(parseInt(i.marginBottom,10))?0:parseInt(i.marginBottom,10),a=t.getBoundingClientRect().height+n.getBoundingClientRect().height+o+r;e<a?window.scrollTo(0,e):window.scrollTo(0,a)}this.updatePageTitle(),this.subtitle=this.activeMetaDataText("short_name"),this.description=this.activeMetaDataText("description")};i.module_src?(async t=>{try{return await t}catch(t){throw console.log(t),V({body:pe.t("page-updated-needs-reload"),type:"info",icon:"warning"}),t}})(import(i.module_src)).then((()=>{o()})).catch((t=>{throw console.error(`Error loading ${i.element}`),t})):o()}metaDataText(t,e){const n=this.metadata[t];return void 0!==n&&void 0!==n[e]?n[e][this.lang]:""}topicMetaDataText(t){return void 0!==this.topic[t]?this.topic[t][this.lang]:""}activeMetaDataText(t){return this.metaDataText(this.activeView,t)}updatePageTitle(){document.title=`${this.topicMetaDataText("name")} - ${this.activeMetaDataText("short_name")}`}toggleMenu(){const t=this.shadowRoot.querySelector("ul.menu"),e=this.shadowRoot.querySelector("h2.subtitle");if(null===t||null===e)return;t.classList.toggle("hidden"),-1===this.menuHeight&&(this.menuHeight=t.clientHeight);let n=e.getBoundingClientRect().bottom,i=this.menuHeight+n>=window.innerHeight;i&&!t.classList.contains("hidden")?(t.setAttribute("style","position: fixed;top: "+n+"px;bottom: 0;border-bottom: 0;overflow-y: auto;"),t.scrollTop=0,document.body.setAttribute("style","overflow:hidden;")):i&&t.classList.contains("hidden")&&(document.body.removeAttribute("style","overflow:hidden;"),t.removeAttribute("style"));const o=this.shadowRoot.querySelector("#menu-chevron-icon");null!==o&&(o.name=t.classList.contains("hidden")?"chevron-down":"chevron-up")}hideMenu(){const t=this.shadowRoot.querySelector("ul.menu");t&&!t.classList.contains("hidden")&&this.toggleMenu()}static get styles(){return S(f||(f=w`
            ${0}
            ${0}

            .hidden {display: none}

            h1.title {
                margin-bottom: 0;
                font-weight: 300;
            }

            #main {
                display: grid;
                grid-template-columns: minmax(180px, 17%) minmax(0, auto);
                grid-template-rows: min-content min-content 1fr min-content;
                grid-template-areas: "header header" "headline headline" "sidebar main" "footer footer";
                max-width: 1400px;
                margin: auto;
                min-height: 100vh;
            }

            #main-logo {
                padding: 0 50px 0 0;
            }

            header {
                grid-area: header;
                display: grid;
                grid-template-columns: 50% 1px auto;
                grid-template-rows: 60px 60px;
                grid-template-areas: "hd1-left hd1-middle hd1-right" "hd2-left . hd2-right";
                width: 100%;
                max-width: 1060px;
                margin: 0 auto;
            }

            aside { grid-area: sidebar; margin: 15px 15px; }
            #headline { grid-area: headline; margin: 10px; text-align: center; }
            main { grid-area: main; margin: 15px 15px; }
            footer { grid-area: footer; margin: 15px; text-align: right; }

            header .hd1-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                grid-area: hd1-left;
                text-align: right;
                padding-right: 20px;
            }

            header .hd1-middle {
                grid-area: hd1-middle;
                background-color: #000;
                background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 90%);
            }

            header .hd1-right {
                grid-area: hd1-right;
                display: flex;
                justify-content: flex-start;
                padding: 0 20px;
                min-width: 0;
                align-items: center;
            }

            header .hd1-right .auth-button {
                min-width: 0;
            }

            header .hd2-left {
                grid-area: hd2-left;
                display: flex;
                flex-direction: column;
                white-space: nowrap;
            }

            header .hd2-left .header {
                margin-left: 50px;
            }

            header .hd2-left a:hover {
                color: #fff;
                background-color: #000;
            }

            header .hd2-right {
                grid-area: hd2-right;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: right;
            }

            header a {
                color: black;
                display: inline;
            }

            aside ul.menu, footer ul.menu {
                list-style: none;
            }

            ul.menu li.close {
                display: none;
            }

            footer {
                display: flex;
                justify-content: flex-end;
                flex-wrap: wrap;
            }

            footer > * {
                margin: 0.5em 0 0 1em;
            }

            footer a {
                border-bottom: 1px solid rgba(0,0,0,0.3);
                padding: 0;
            }

            footer a:hover {
                color: #fff;
                background-color: #000;
            }

            /* We don't allow inline-svg */
            /*
            footer .int-link-external::after {
                content: "\\00a0\\00a0\\00a0\\00a0";
                background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%225.6842mm%22%20width%3D%225.6873mm%22%20version%3D%221.1%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20viewBox%3D%220%200%2020.151879%2020.141083%22%3E%3Cg%20transform%3D%22translate(-258.5%20-425.15)%22%3E%3Cpath%20style%3D%22stroke-linejoin%3Around%3Bstroke%3A%23000%3Bstroke-linecap%3Around%3Bstroke-width%3A1.2%3Bfill%3Anone%22%20d%3D%22m266.7%20429.59h-7.5029v15.002h15.002v-7.4634%22%2F%3E%3Cpath%20style%3D%22stroke-linejoin%3Around%3Bstroke%3A%23000%3Bstroke-linecap%3Around%3Bstroke-width%3A1.2%3Bfill%3Anone%22%20d%3D%22m262.94%20440.86%2015.002-15.002%22%2F%3E%3Cpath%20style%3D%22stroke-linejoin%3Around%3Bstroke%3A%23000%3Bstroke-linecap%3Around%3Bstroke-width%3A1.2%3Bfill%3Anone%22%20d%3D%22m270.44%20425.86h7.499v7.499%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                background-size:contain;
                background-repeat: no-repeat;
                background-position:center center;
                margin: 0 0.5% 0 1.5%;
                font-size:94%;
            } 
            */

            .menu a {
                padding: 0.3em;
                font-weight: 300;
                color: #000;
                display: block;
            }

            .menu a:hover {
                color: #E4154B;
            }

            .menu a.selected {
                color: var(--dbp-light);
                background-color: var(--dbp-dark);
            }

            aside .subtitle {
                display: none;
                color: #4a4a4a;
                font-size: 1.25rem;
                font-weight: 300;
                line-height: 1.25;
                cursor: pointer;
                text-align: center;
            }

            ul.menu.hidden {
                display: block;
            }

            a { transition: background-color 0.15s ease 0s, color 0.15s ease 0s; }

            .description {
                text-align: left;
                margin-bottom: 1rem;
                display: none;
            }

            @media (max-width: 680px) {
                #main {
                    grid-template-columns: minmax(0, auto);
                    grid-template-rows: min-content min-content min-content 1fr min-content;
                    grid-template-areas: "header" "headline" "sidebar" "main" "footer";
                }

                header {
                    grid-template-rows: 40px;
                    grid-template-areas: "hd1-left hd1-middle hd1-right";
                }

                header .hd2-left, header .hd2-right {
                    display: none;
                }

                aside {
                    margin: 0;
                    position: sticky;
                    top: 0;
                    width: 100%;
                    background-color: white;
                    z-index: 10;
                }

                aside h2.subtitle {
                    display: block;
                    border-bottom: 1px solid black;
                    padding: 0.5em 0.5em;
                }

                aside .menu {
                    border-bottom: black 1px solid;
                    border-top-width: 0;
                    width: 100%;
                    position: absolute;
                    background-color: white;
                    z-index: 10;
                }

                .menu li {
                    padding: 7px;
                }

                .menu a {
                    padding: 8px;
                }

                ul.menu li.close {
                    display: block;
                    padding: 0 15px 15px 15px;
                    text-align: right;
                    cursor: pointer;
                }

                ul.menu.hidden {
                    display: none;
                }
            }
        `),x(),A())}_createActivityElement(t){if(void 0!==this._lastElm){if(this._lastElm.tagName.toLowerCase()==t.element.toLowerCase())return this._lastElm;this._onActivityRemoved(this._lastElm),this._lastElm=void 0}this.track("renderActivity",t.element);const e=document.createElement(t.element);return this._onActivityAdded(e),this._lastElm=e,e}_onActivityAdded(t){for(const e of this.topic.attributes||[]){let n=sessionStorage.getItem("dbp-attr-"+e);null!==n&&t.setAttribute(e,n)}this._attrObserver.observe(t,{attributes:!0,attributeFilter:this.topic.attributes})}_onActivityRemoved(t){this._attrObserver.disconnect()}track(t,e){this.sendSetPropertyEvent("analytics-event",{category:t,action:e})}_renderActivity(){const t=this.metadata[this.activeView];if(void 0===t)return L(b||(b=w``));const e=this._createActivityElement(t);return void 0!==t.subscribe&&e.setAttribute("subscribe",t.subscribe),void 0!==t.subscribe&&t.subscribe.includes("entry-point-url:")||e.setAttribute("entry-point-url",this.entryPointUrl),void 0!==t.subscribe&&t.subscribe.includes("lang:")||e.setAttribute("lang",this.lang),e}_updateVisibleRoutes(){let t=[];for(let e of this.routes){const n=this.metadata[e],i=n.required_roles;let o=n.visible;for(let t of i)if(!this._roles.includes(t)){o=!1;break}o&&t.push(e)}this.visibleRoutes=t;const e=new CustomEvent("visibility-changed",{bubbles:!1,cancelable:!0});this.dispatchEvent(e)}render(){const t=t=>j({selected:this.activeView===t}),e="unknown"===this._loginStatus||"logging-in"===this._loginStatus,n=j({hidden:e}),i=j({hidden:!e});e||this.updateComplete.then((()=>{const t=this.shadowRoot.querySelector("slot");t&&t.remove()}));const o=j({hidden:"production"===this.env||"demo"===this.env||""===this.env});this.updatePageTitle();let r=[];for(let e of this.visibleRoutes)r.push(L(v||(v=w`<li><a @click="${0}" href="${0}" data-nav class="${0}" title="${0}">${0}</a></li>`),(t=>this.onMenuItemClick(t)),this.router.getPathname({component:e}),t(e),this.metaDataText(e,"description"),this.metaDataText(e,"short_name")));const a=(this.lang,"https://krakenh2020.eu/legal-notice"),s=this.keycloakConfig;return L(y||(y=w`
            <slot class="${0}"></slot>
            <dbp-auth-keycloak subscribe="requested-login-status" lang="${0}" entry-point-url="${0}" url="${0}" realm="${0}" client-id="${0}" silent-check-sso-redirect-uri="${0}" scope="${0}"  idp-hint="${0}" load-person ?force-login="${0}" ?try-login="${0}"></dbp-auth-keycloak>
            <dbp-matomo subscribe="auth,analytics-event" endpoint="${0}" site-id="${0}" git-info="${0}"></dbp-matomo>
            <div class="${0}">
            <div id="main">
                <dbp-notification lang="${0}"></dbp-notification>
                <header>
                    <div class="hd1-left">
                        <dbp-language-select lang="${0}"></dbp-language-select>
                    </div>
                    <div class="hd1-middle">
                    </div>
                    <div class="hd1-right">
                        <dbp-auth-menu-button subscribe="auth" class="auth-button" lang="${0}"></dbp-auth-menu-button>
                    </div>
                    <div class="hd2-left">
                        <div class="header">
                            ${0}<br>${0}
                        </div>
                    </div>
                    <div class="hd2-right">
                        <dbp-tugraz-logo id="main-logo" lang="${0}" class="${0}"></dbp-tugraz-logo>
                    </div>
                </header>
                <div id="headline">
                    <h1 class="title">${0}</h1>
                </div>
                <aside>
                    <h2 class="subtitle" @click="${0}">
                        ${0}
                        <dbp-icon name="chevron-down" style="color: red" id="menu-chevron-icon"></dbp-icon>
                    </h2>
                    <ul class="menu hidden">
                        ${0}
                        <li class="close" @click="${0}"><dbp-icon name="close" style="color: red"></dbp-icon></li>
                    </ul>
                </aside>

                <main>
                    <div style="display: ${0};">
                        <h2>${0}</h2>
                        <p>${0}</p>
                    </div>
                    <p class="description">${0}</p>
                    ${0}
                </main>

                <footer>
                    <a target="_blank" rel="noopener" class="int-link-external" href="https://github.com/site/privacy/">${0}</a>
                    <a target="_blank" rel="noopener" class="int-link-external" href="${0}">${0}</a>
                    <a rel="noopener" class="int-link-external" href="mailto:smore@tugraz.at">${0}</a>
                    <dbp-build-info class="${0}" git-info="${0}" env="${0}" build-url="${0}" build-time="${0}"></dbp-build-info>
                </footer>
            </div>
            </div>
        `),i,this.lang,this.entryPointUrl,s.url,s.realm,s.clientId,s.silentCheckSsoRedirectUri||"",s.scope||"",s.idpHint||"",s.forceLogin,!s.forceLogin,this.matomoUrl,this.matomoSiteId,this.gitInfo,n,this.lang,this.lang,this.lang,this.shellName,this.shellSubname,this.lang,j({hidden:this.noBrand}),this.topicMetaDataText("name"),this.toggleMenu,this.subtitle,r,this.hideMenu,null===this.description?"none":"block",pe.t("page-not-found"),pe.t("choose-from-menu"),this.description,this._renderActivity(),pe.t("privacy-policy"),a,pe.t("imprint"),pe.t("contact"),o,this.gitInfo,this.env,this.buildUrl,this.buildTime)}}class me extends HTMLElement{constructor(){super(),this.callbackStore=[],this.root=!1,this.properties={},this.lastProperties={},U.debug("Provider constructor()")}getProperty(t){return this.properties[t]}setProperty(t,e){this.lastProperties[t]=e,this.properties[t]=e}hasPropertyChanged(t,e){return this.lastProperties[t]!==e}hasProperty(t){return Object.hasOwnProperty.call(this.properties,t)}connectedCallback(){U.debug("Provider("+this.id+") connectedCallback()");const t=this;this.addEventListener("dbp-subscribe",(function(e){const n=e.detail.name;(t.hasProperty(n)||t.root)&&(U.debug("Provider("+t.id+') eventListener("dbp-subscribe",..) name "'+n+'" found.'),t.callbackStore.push({name:n,callback:e.detail.callback,sender:e.detail.sender}),e.detail.callback(t.getProperty(n)),e.stopPropagation())}),!1),this.addEventListener("dbp-unsubscribe",(function(e){const n=e.detail.name,i=e.detail.sender;(t.hasProperty(n)||t.root)&&(U.debug("Provider("+t.id+') eventListener("dbp-unsubscribe",..) name "'+n+'" found.'),t.callbackStore.forEach((e=>{if(e.sender===i&&e.name===n){const i=t.callbackStore.indexOf(e);t.callbackStore.splice(i,1),U.debug("Provider("+t.id+') eventListener for name "'+n+'" removed.')}})),e.stopPropagation())}),!1),this.addEventListener("dbp-set-property",(function(e){const n=e.detail.name,i=e.detail.value;(t.hasProperty(n)||t.root)&&(U.debug("Provider("+t.id+') eventListener("dbp-set-property",..) name "'+n+'" found.'),t.setProperty(n,i),t.callbackStore.forEach((t=>{t.name===n&&t.callback(i)})),e.stopPropagation())}),!1);if(new MutationObserver((function(e,n){for(const n of e)if("attributes"===n.type){const e=n.attributeName,i=t.getAttribute(e);t.hasPropertyChanged(e,i)&&(U.debug("Provider ("+t.id+') observed attribute "'+e+'" changed'),t.setProperty(e,i),t.callbackStore.forEach((t=>{t.name===e&&t.callback(i)})))}})).observe(this,{attributes:!0,childList:!1,subtree:!1}),this.hasAttributes()){const e=this.attributes;for(let n=e.length-1;n>=0;n--)["id","class","style","data-tag-name"].includes(e[n].name)||(this.setProperty(e[n].name,e[n].value),U.debug("Provider ("+t.id+') found attribute "'+e[n].name+'" = "'+e[n].value+'"'))}}get id(){return this.getAttribute("id")}}N("dbp-provider",me),N("vc4sm-frontend",ge);
//# sourceMappingURL=vc4sm-frontend.js.map
