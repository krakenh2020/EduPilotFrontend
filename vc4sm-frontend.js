let t,e,n,i,o,a,r,s,l,c,d,h,u,p,g,m,f,v,b,w,y=t=>t;function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}
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
 */import{c as x}from"./shared/i18next.f6eb636c.es.js";import{L as _,g as E,c as C,h as L,p as S,a as T,b as P,S as A,u as I,I as D,D as $,e as O,f as U,i as N,d as R}from"./shared/dbp-lit-element.0e6946f2.es.js";import{c as j}from"./shared/class-map.3c46d3ae.es.js";function B(t,e=!1){if(!(0===t.length&&e||/^[a-z]+[a-z0-9-]*$/.test(t)))throw new Error("Only a-z0-9 and - allowed: "+JSON.stringify(t))}class M{constructor(t={}){const{name:e=""}=t;this._busName=e,this._retainedData={},this._retainedListeners={},this._listeners={}}_name(t,e){return function(t,e,n){B(t,!0),B(e);let i="dbp:"+t+":"+e;return void 0!==n&&(B(n),i+=":"+n),i}(this._busName,t,e)}subscribe(t,e){const n=this._listeners[t]||new Map;if(n.has(e))throw new Error("already subscribed to: "+JSON.stringify(t));const i=t=>{const n={},i=t.detail;void 0!==i.retain&&(n.retain=i.retain),e(i.data,n),t.preventDefault()};window.addEventListener(this._name(t),i),this._listeners[t]=n.set(e,i);const o=new CustomEvent(this._name(t,"fetch-retained"),{detail:{callback:i}});window.dispatchEvent(o)}unsubscribe(t,e){const n=this._listeners[t]||new Map,i=n.get(e);if(void 0===i)throw new Error("Not subscribed to: "+t);window.removeEventListener(this._name(t),i),n.delete(e)}publish(t,e,n={}){const{retain:i=!1}=n,o=this._name(t);if(i&&void 0===this._retainedListeners[t]){const e=e=>{const n=this._retainedData[t];if(void 0!==n){const t=e.detail.callback;e.stopImmediatePropagation();t(new CustomEvent(o,{detail:{data:n,retain:i}}))}};window.addEventListener(this._name(t,"fetch-retained"),e);const n=e=>{const n=e.detail;n.retain&&(this._retainedData[t]=n.data)};window.addEventListener(o,n),this._retainedListeners[t]=[e,n]}const a=new CustomEvent(o,{detail:{data:e,retain:i},cancelable:!0});return!window.dispatchEvent(a)}close(){for(const[t,e]of Object.entries(this._retainedListeners)){const[n,i]=e;window.removeEventListener(this._name(t,"fetch-retained"),n),window.removeEventListener(this._name(t),i),delete this._retainedListeners[t],delete this._retainedData[t]}for(const[t,e]of Object.entries(this._listeners))for(const n of e.keys())this.unsubscribe(t,n)}}const F=x({en:{logo:{word1:"Science",word2:"Passion",word3:"Technology"},"privacy-policy":"Privacy Policy",imprint:"Legal Notice",contact:"Contact","page-updated-needs-reload":"The application has been updated. Please reload the page.","activity-example":{"hello-world":"Hello World"},welcome:{headline:"Welcome to the '{{appname}}' application."},login:"Login",logout:"Logout"},de:{logo:{word1:"Wissen",word2:"Technik",word3:"Leidenschaft"},"privacy-policy":"Datenschutz",imprint:"Impressum",contact:"Kontakt","page-updated-needs-reload":"Die Applikation wurde aktualisiert. Bitte laden Sie die Seite neu.","activity-example":{"hello-world":"Hallo Welt"},welcome:{headline:"Willkommen bei der Applikation '{{appname}}'."},login:"Einloggen",logout:"Ausloggen"}},"de","en");function G(){return F.cloneInstance()}const z=x({en:{de:"German",en:"English","de-action":"Switch to German","en-action":"Switch to English"},de:{de:"Deutsch",en:"Englisch","de-action":"Auf Deutsch anzeigen","en-action":"Auf Englisch anzeigen"}},"de","en");class H extends _{constructor(){super(),this._lang="de",this.languages=["de","en"],this.onExternalChange=this.onExternalChange.bind(this),z.t("de"),z.t("de-action"),z.t("en"),z.t("en-action")}_getNextLanguage(t){var e=this.languages.indexOf(t),n=this.languages[e+1];return void 0===n&&(n=this.languages[0]),n}_getPreviousLanguage(t){var e=this.languages.indexOf(t),n=this.languages[e-1];return void 0===n&&(n=this.languages[this.languages.length-1]),n}static get properties(){return{lang:{type:String},next:{type:String},languages:{type:Array}}}set lang(t){const e=this.lang,n=this.next;if(this._lang=t,this.requestUpdate("lang",e),this.requestUpdate("next",n),e!==t){const e=new CustomEvent("dbp-language-changed",{bubbles:!0,composed:!0,detail:{lang:t}});this.dispatchEvent(e),z.changeLanguage(this.next)}}get lang(){return this._lang}set next(t){this.lang=this._getPreviousLanguage(t)}get next(){return this._getNextLanguage(this.lang)}static get styles(){return[E(),C(t||(t=y`
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
            `))]}onExternalChange(t){this.lang=t.detail.lang}connectedCallback(){super.connectedCallback(),window.addEventListener("dbp-language-changed",this.onExternalChange)}disconnectedCallback(){document.removeEventListener("dbp-language-changed",this.onExternalChange),super.disconnectedCallback()}onClick(t){t.preventDefault(),this.lang=this.next}render(){var t=z.t(this.next+"-action");return L(e||(e=y`
            <a href="#" title="${0}" @click=${0}>${0}</a>
        `),t,this.onClick,this.next.toUpperCase())}}const q=x({en:{login:"Login",logout:"Logout",profile:"Profile"},de:{login:"Einloggen",logout:"Ausloggen",profile:"Profil"}},"de","en");function W(t){const e=new CustomEvent("dbp-notification-send",{bubbles:!0,cancelable:!0,detail:t});window.dispatchEvent(e)&&(alert((void 0!==t.summary&&""!==t.summary?t.summary+": ":"")+t.body),console.log("Use the web component dbp-notification to show fancy notifications."))}const V=x({en:{error:{summary:"An error occurred","connection-to-server-refused":"Connection to server refused!"},jsonld:{"error-api-server":"Connection to api server {{apiUrl}} failed!","error-hydra-documentation-url-not-set":"Hydra apiDocumentation url was not set for server {{apiUrl}}!","api-documentation-server":"Connection to apiDocumentation server {{apiDocUrl}} failed!"}},de:{error:{summary:"Ein Fehler ist aufgetreten","connection-to-server-refused":"Verbindungs zum Server verweigert!"},jsonld:{"error-api-server":"Verbindung zum API Server {{apiUrl}} fehlgeschlagen!","error-hydra-documentation-url-not-set":"Hydra apiDocumentation URL wurden für server {{apiUrl}} nicht gesetzt!","api-documentation-server":"Verbindung zum apiDocumentation API Server {{apiDocUrl}} fehlgeschlagen!"}}},"de","en");let K={},Y={},J={},X={};class Q{constructor(t,e){this.entities=e,this.baseApiUrl=t;let n={};for(const t in e){n[e[t]["@id"]]=t}this.idToEntityNameMatchList=n}static initialize(t,e,n,i="de"){"de"!==i&&V.changeLanguage(i),void 0===K[t]?(void 0===Y[t]&&(Y[t]=[]),void 0===J[t]&&(J[t]=[]),"function"==typeof e&&Y[t].push(e),"function"==typeof n&&J[t].push(n),void 0===X[t]&&(X[t]=!0,void 0!==window.DBPAuthToken?Q.doInitialization(t):window.addEventListener("dbp-auth-init",(()=>Q.doInitialization(t))))):"function"==typeof e&&e(K[t])}static doInitialization(t){const e=new XMLHttpRequest;e.open("GET",t,!0),e.setRequestHeader("Authorization","Bearer "+window.DBPAuthToken),e.onreadystatechange=function(){if(4===e.readyState)if(200===e.status){const n=JSON.parse(e.responseText);let i={};for(let t in n)t.startsWith("@")||(i[t.toLowerCase()]=n[t]);const o=S(this.getResponseHeader("link"))["http://www.w3.org/ns/hydra/core#apiDocumentation"];if(void 0!==o){const e=new XMLHttpRequest;e.open("GET",o,!0),e.setRequestHeader("Content-Type","application/json"),e.onreadystatechange=function(){4===e.readyState&&(200===e.status?Q.gatherEntities(e,t,i):Q.executeFailureFunctions(t,V.t("jsonld.api-documentation-server",{apiUrl:o})))},e.send()}else Q.executeFailureFunctions(t,V.t("jsonld.error-hydra-documentation-url-not-set",{apiUrl:t}))}else Q.executeFailureFunctions(t,V.t("jsonld.error-api-server",{apiUrl:t}))},e.send()}static gatherEntities(t,e,n){const i=JSON.parse(t.responseText)["hydra:supportedClass"];let o={};const a=T(e);i.forEach((function(t){const e=t["hydra:title"];let i=n[e.toLowerCase()];void 0===i||i.startsWith("http")||(i=a+i),t["@entryPoint"]=i,o[e]=t}));const r=new Q(a,o);K[e]=r;for(const t of Y[e])"function"==typeof t&&t(r);Y[e]=[]}static executeFailureFunctions(t,e=""){for(const e of J[t])"function"==typeof e&&e();J[t]=[],""!==e&&W({summary:V.t("error.summary"),body:e,type:"danger"})}static getInstance(t){return K[t]}getEntityForIdentifier(t){let e=this.getEntityNameForIdentifier(t);return this.getEntityForEntityName(e)}getEntityForEntityName(t){return this.entities[t]}getApiUrlForIdentifier(t){const e=this.getEntityForIdentifier(t);if(void 0===e||void 0===e["@entryPoint"])throw new Error(`Entity with identifier "${t}" not found!`);return e["@entryPoint"]}getApiUrlForEntityName(t){const e=this.getEntityForEntityName(t);if(void 0===e||void 0===e["@entryPoint"])throw new Error(`Entity "${t}" not found!`);return e["@entryPoint"]}getEntityNameForIdentifier(t){return this.idToEntityNameMatchList[t]}getApiIdentifierList(){let t=[];for(const e in this.idToEntityNameMatchList)t.push(e);return t}expandMember(t,e){void 0===e&&(e=t["@context"]);let n={"@id":t["@id"]};for(const i of Object.keys(e)){const o=e[i];void 0!==t[i]&&(n[o]=t[i])}return n}compactMember(t,e){let n={};for(const i in e){const o=t[e[i]];void 0!==o&&(n[i]=o)}return n}transformMembers(t,e){const n=t["hydra:member"];if(void 0===n||0===n.length)return[];const i=t["@context"];let o=[],a=this;return n.forEach((function(t){o.push(a.compactMember(a.expandMember(t,i),e))})),o}}const Z=new WeakMap,tt=new WeakMap;function et(t){const e=Z.get(t);return console.assert(null!=e,"'this' is expected an Event object, but got",t),e}function nt(t){null==t.passiveListener?t.event.cancelable&&(t.canceled=!0,"function"==typeof t.event.preventDefault&&t.event.preventDefault()):"undefined"!=typeof console&&"function"==typeof console.error&&console.error("Unable to preventDefault inside passive event listener invocation.",t.passiveListener)}function it(t,e){Z.set(this,{eventTarget:t,event:e,eventPhase:2,currentTarget:t,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:e.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const n=Object.keys(e);for(let t=0;t<n.length;++t){const e=n[t];e in this||Object.defineProperty(this,e,ot(e))}}function ot(t){return{get(){return et(this).event[t]},set(e){et(this).event[t]=e},configurable:!0,enumerable:!0}}function at(t){return{value(){const e=et(this).event;return e[t].apply(e,arguments)},configurable:!0,enumerable:!0}}function rt(t){if(null==t||t===Object.prototype)return it;let e=tt.get(t);return null==e&&(e=function(t,e){const n=Object.keys(e);if(0===n.length)return t;function i(e,n){t.call(this,e,n)}i.prototype=Object.create(t.prototype,{constructor:{value:i,configurable:!0,writable:!0}});for(let o=0;o<n.length;++o){const a=n[o];if(!(a in t.prototype)){const t="function"==typeof Object.getOwnPropertyDescriptor(e,a).value;Object.defineProperty(i.prototype,a,t?at(a):ot(a))}}return i}(rt(Object.getPrototypeOf(t)),t),tt.set(t,e)),e}function st(t){return et(t).immediateStopped}function lt(t,e){et(t).passiveListener=e}it.prototype={get type(){return et(this).event.type},get target(){return et(this).eventTarget},get currentTarget(){return et(this).currentTarget},composedPath(){const t=et(this).currentTarget;return null==t?[]:[t]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return et(this).eventPhase},stopPropagation(){const t=et(this);t.stopped=!0,"function"==typeof t.event.stopPropagation&&t.event.stopPropagation()},stopImmediatePropagation(){const t=et(this);t.stopped=!0,t.immediateStopped=!0,"function"==typeof t.event.stopImmediatePropagation&&t.event.stopImmediatePropagation()},get bubbles(){return Boolean(et(this).event.bubbles)},get cancelable(){return Boolean(et(this).event.cancelable)},preventDefault(){nt(et(this))},get defaultPrevented(){return et(this).canceled},get composed(){return Boolean(et(this).event.composed)},get timeStamp(){return et(this).timeStamp},get srcElement(){return et(this).eventTarget},get cancelBubble(){return et(this).stopped},set cancelBubble(t){if(!t)return;const e=et(this);e.stopped=!0,"boolean"==typeof e.event.cancelBubble&&(e.event.cancelBubble=!0)},get returnValue(){return!et(this).canceled},set returnValue(t){t||nt(et(this))},initEvent(){}},Object.defineProperty(it.prototype,"constructor",{value:it,configurable:!0,writable:!0}),"undefined"!=typeof window&&void 0!==window.Event&&(Object.setPrototypeOf(it.prototype,window.Event.prototype),tt.set(window.Event.prototype,it));const ct=new WeakMap;function dt(t){return null!==t&&"object"==typeof t}function ht(t){const e=ct.get(t);if(null==e)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return e}function ut(t,e){Object.defineProperty(t,`on${e}`,function(t){return{get(){let e=ht(this).get(t);for(;null!=e;){if(3===e.listenerType)return e.listener;e=e.next}return null},set(e){"function"==typeof e||dt(e)||(e=null);const n=ht(this);let i=null,o=n.get(t);for(;null!=o;)3===o.listenerType?null!==i?i.next=o.next:null!==o.next?n.set(t,o.next):n.delete(t):i=o,o=o.next;if(null!==e){const o={listener:e,listenerType:3,passive:!1,once:!1,next:null};null===i?n.set(t,o):i.next=o}},configurable:!0,enumerable:!0}}(e))}function pt(t){function e(){gt.call(this)}e.prototype=Object.create(gt.prototype,{constructor:{value:e,configurable:!0,writable:!0}});for(let n=0;n<t.length;++n)ut(e.prototype,t[n]);return e}function gt(){if(!(this instanceof gt)){if(1===arguments.length&&Array.isArray(arguments[0]))return pt(arguments[0]);if(arguments.length>0){const t=new Array(arguments.length);for(let e=0;e<arguments.length;++e)t[e]=arguments[e];return pt(t)}throw new TypeError("Cannot call a class as a function")}ct.set(this,new Map)}async function mt(t){const e=t+"/js/keycloak.min.js";return await import(e),void 0!==mt._keycloakMod||(mt._keycloakMod=window.Keycloak,delete window.Keycloak),mt._keycloakMod}gt.prototype={addEventListener(t,e,n){if(null==e)return;if("function"!=typeof e&&!dt(e))throw new TypeError("'listener' should be a function or an object.");const i=ht(this),o=dt(n),a=(o?Boolean(n.capture):Boolean(n))?1:2,r={listener:e,listenerType:a,passive:o&&Boolean(n.passive),once:o&&Boolean(n.once),next:null};let s=i.get(t);if(void 0===s)return void i.set(t,r);let l=null;for(;null!=s;){if(s.listener===e&&s.listenerType===a)return;l=s,s=s.next}l.next=r},removeEventListener(t,e,n){if(null==e)return;const i=ht(this),o=(dt(n)?Boolean(n.capture):Boolean(n))?1:2;let a=null,r=i.get(t);for(;null!=r;){if(r.listener===e&&r.listenerType===o)return void(null!==a?a.next=r.next:null!==r.next?i.set(t,r.next):i.delete(t));a=r,r=r.next}},dispatchEvent(t){if(null==t||"string"!=typeof t.type)throw new TypeError('"event.type" should be a string.');const e=ht(this),n=t.type;let i=e.get(n);if(null==i)return!0;const o=function(t,e){return new(rt(Object.getPrototypeOf(e)))(t,e)}(this,t);let a=null;for(;null!=i;){if(i.once?null!==a?a.next=i.next:null!==i.next?e.set(n,i.next):e.delete(n):a=i,lt(o,i.passive?i.listener:null),"function"==typeof i.listener)try{i.listener.call(this,o)}catch(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t)}else 3!==i.listenerType&&"function"==typeof i.listener.handleEvent&&i.listener.handleEvent(o);if(st(o))break;i=i.next}return lt(o,null),function(t,e){et(t).eventPhase=e}(o,0),function(t,e){et(t).currentTarget=e}(o,null),!o.defaultPrevented}},Object.defineProperty(gt.prototype,"constructor",{value:gt,configurable:!0,writable:!0}),"undefined"!=typeof window&&void 0!==window.EventTarget&&Object.setPrototypeOf(gt.prototype,window.EventTarget.prototype);class ft extends gt{constructor(t,e,n,i,o){super(),this._baseURL=t,this._realm=e,this._clientId=n,this._keycloak=null,this._initDone=!1,this._silentCheckSsoUri=i,this._idpHint=o,this._checkId=null,this.MIN_VALIDITY=20,this.CHECK_INTERVAL=10,this.DEBUG=!1,this._onVisibilityChanged=this._onVisibilityChanged.bind(this),document.addEventListener("visibilitychange",this._onVisibilityChanged)}close(){document.removeEventListener("visibilitychange",this._onVisibilityChanged)}_onVisibilityChanged(){"visible"===document.visibilityState&&this._keycloak.authenticated&&this._checkTokeHasExpired()}_onChanged(){const t=new CustomEvent("changed",{detail:this._keycloak,bubbles:!0,composed:!0});this.dispatchEvent(t)}_onReady(t){t&&this._onChanged()}async _onTokenExpired(){console.log("Token has expired");let t=!1;try{t=await this._keycloak.updateToken(-1)}catch(t){return void console.log("Failed to refresh the token",t)}console.assert(t,"token should have been refreshed")}async _checkTokeHasExpired(){let t,e=this.MIN_VALIDITY+this.CHECK_INTERVAL;this.DEBUG&&console.log(`Updating token if not valid for at least ${e}s`);try{t=await this._keycloak.updateToken(e)}catch(t){console.log("Failed to refresh the token",t)}this.DEBUG&&t&&console.log("token has been refreshed")}async _onAuthSuccess(){null!==this._checkId&&(clearInterval(this._checkId),this._checkId=null),this._checkId=setInterval(this._checkTokeHasExpired.bind(this),1e3*this.CHECK_INTERVAL),this._onChanged()}async _onAuthLogout(){null!==this._checkId&&(clearInterval(this._checkId),this._checkId=null),this._onChanged()}async _ensureInstance(){if(null!==this._keycloak)return;const t=await mt(this._baseURL);this._keycloak=t({url:this._baseURL,realm:this._realm,clientId:this._clientId}),this._keycloak.onTokenExpired=this._onTokenExpired.bind(this),this._keycloak.onAuthRefreshSuccess=this._onChanged.bind(this),this._keycloak.onAuthRefreshError=this._onChanged.bind(this),this._keycloak.onAuthLogout=this._onAuthLogout.bind(this),this._keycloak.onAuthSuccess=this._onAuthSuccess.bind(this),this._keycloak.onAuthError=this._onChanged.bind(this),this._keycloak.onReady=this._onReady.bind(this)}async _keycloakInit(t){try{return await this._keycloak.init(t)}catch(e){return await this._keycloak.init(t)}}async _ensureInit(){if(await this._ensureInstance(),this._initDone)return;this._initDone=!0;const t={promiseType:"native",pkceMethod:"S256"};this.DEBUG&&(t.enableLogging=!0),this._silentCheckSsoUri?(t.onLoad="check-sso",t.silentCheckSsoRedirectUri=function(t){try{return new URL(t).href}catch(e){return new URL(t,window.location.href).href}}(this._silentCheckSsoUri),await function(t,e){let n=new Promise(((e,n)=>{let i=setTimeout((()=>{clearTimeout(i),n("Timed out in "+t+"ms.")}),t)}));return Promise.race([e,n])}(5e3,this._keycloakInit(t)).catch((()=>{console.log("Login timed out"),this._onChanged()}))):await this._keycloakInit(t)}isLoggingIn(){const t=window.location.href;return t.search("[&#]state=")>=0&&t.search("[&#]session_state=")>=0}async login(t){await this._ensureInit();const e=(t=t||{}).lang||"en",n=t.scope||"";this._keycloak.authenticated||await this._keycloak.login({kcLocale:e,locale:e,scope:n,idpHint:this._idpHint})}async tryLogin(){await this._ensureInit()}async localLogout(){this._keycloak.clearToken()}async logout(){await this._ensureInit(),this._keycloak.logout()}}const vt=Object.freeze({UNKNOWN:"unknown",LOGGING_IN:"logging-in",LOGGED_IN:"logged-in",LOGGING_OUT:"logging-out",LOGGED_OUT:"logged-out"});class bt extends _{constructor(){super(),this.lang="de",this.forceLogin=!1,this.loadPerson=!1,this.token="",this.tokenParsed=null,this.subject="",this.name="",this.personId="",this.tryLogin=!1,this.person=null,this.entryPointUrl=P(),this._loginStatus=vt.UNKNOWN,this.keycloakUrl=null,this.realm=null,this.clientId=null,this.silentCheckSsoRedirectUri=null,this.scope=null,this.idpHint="",this.initEvent=new CustomEvent("dbp-auth-init",{detail:"KeyCloak init event",bubbles:!0,composed:!0}),this.personInitEvent=new CustomEvent("dbp-auth-person-init",{detail:"KeyCloak person init event",bubbles:!0,composed:!0}),this.keycloakDataUpdateEvent=new CustomEvent("dbp-auth-keycloak-data-update",{detail:"KeyCloak data was updated",bubbles:!0,composed:!0}),this._onKCChanged=this._onKCChanged.bind(this)}update(t){t.forEach(((t,e)=>{"lang"===e&&q.changeLanguage(this.lang)})),super.update(t)}_onKCChanged(t){const e=t.detail;let n=!1;if(e.authenticated){let t=this.token!==e.token;this.tokenParsed=e.tokenParsed,this.name=e.idTokenParsed.name,this.token=e.token,this.subject=e.subject;const i=e.idTokenParsed.preferred_username;i!==this.personId&&(this.person=null,n=!0),this.personId=i,window.DBPAuthSubject=this.subject,window.DBPAuthToken=this.token,window.DBPAuthTokenParsed=this.tokenParsed,window.DBPUserFullName=this.name,window.DBPPersonId=this.personId,window.DBPPerson=this.person,this._setLoginStatus(vt.LOGGED_IN,t||n)}else this._loginStatus===vt.LOGGED_IN&&this._setLoginStatus(vt.LOGGING_OUT),this.name="",this.token="",this.tokenParsed=null,this.subject="",this.personId="",this.person=null,window.DBPAuthSubject=this.subject,window.DBPAuthToken=this.token,window.DBPAuthTokenParsed=this.tokenParsed,window.DBPUserFullName=this.name,window.DBPPersonId=this.personId,window.DBPPerson=this.person,this._setLoginStatus(vt.LOGGED_OUT);const i=this;n&&this.dispatchEvent(this.initEvent),n&&this.loadPerson&&Q.initialize(this.entryPointUrl,(t=>{const e=t.getApiUrlForEntityName("Person")+"/"+i.personId;fetch(e,{headers:{"Content-Type":"application/ld+json",Authorization:"Bearer "+i.token}}).then((t=>t.json())).then((t=>{i.person=t,window.DBPPerson=t,i.dispatchEvent(i.personInitEvent),this._setLoginStatus(this._loginStatus,!0)}))}),{},i.lang),this.dispatchEvent(this.keycloakDataUpdateEvent)}_setLoginStatus(t,e){(this._loginStatus!==t||e)&&(this._loginStatus=t,this._bus.publish("auth-update",{status:this._loginStatus,token:this.token,name:this.name,person:this.person},{retain:!0}))}static get properties(){return{lang:{type:String},forceLogin:{type:Boolean,attribute:"force-login"},tryLogin:{type:Boolean,attribute:"try-login"},loadPerson:{type:Boolean,attribute:"load-person"},entryPointUrl:{type:String,attribute:"entry-point-url"},name:{type:String,attribute:!1},token:{type:String,attribute:!1},subject:{type:String,attribute:!1},personId:{type:String,attribute:!1},person:{type:Object,attribute:!1},_loginStatus:{type:String,attribute:!1},keycloakUrl:{type:String,attribute:"url"},realm:{type:String},clientId:{type:String,attribute:"client-id"},silentCheckSsoRedirectUri:{type:String,attribute:"silent-check-sso-redirect-uri"},scope:{type:String},idpHint:{type:String,attribute:"idp-hint"}}}connectedCallback(){var t=this;if(super.connectedCallback(),!this.keycloakUrl)throw Error("url not set");if(!this.realm)throw Error("realm not set");if(!this.clientId)throw Error("client-id not set");this._bus=new M,this._kcwrapper=new ft(this.keycloakUrl,this.realm,this.clientId,this.silentCheckSsoRedirectUri,this.idpHint),this._kcwrapper.addEventListener("changed",this._onKCChanged),this._bus.subscribe("auth-login",(()=>{this._kcwrapper.login({lang:this.lang,scope:this.scope||""})})),this._bus.subscribe("auth-logout",(()=>{this._loginStatus===vt.LOGGED_IN&&this._setLoginStatus(vt.LOGGING_OUT),this._kcwrapper.logout(),this._loginStatus===vt.LOGGING_OUT&&this._setLoginStatus(vt.LOGGED_IN)}));!async function(){t.forceLogin||t._kcwrapper.isLoggingIn()?(t._setLoginStatus(vt.LOGGING_IN),await t._kcwrapper.login({lang:t.lang,scope:t.scope||""})):t.tryLogin?(t._setLoginStatus(vt.LOGGING_IN),await t._kcwrapper.tryLogin(),t._loginStatus===vt.LOGGING_IN&&t._setLoginStatus(vt.LOGGED_OUT)):t._setLoginStatus(vt.LOGGED_OUT)}()}disconnectedCallback(){this._kcwrapper.close(),this._kcwrapper.removeEventListener("changed",this._onKCChanged),this._bus.close(),super.disconnectedCallback()}}A(_);const wt=G();class yt extends(A(_)){constructor(){super(),this.lang="de",this.showImage=!1,this._loginData={},this.closeDropdown=this.closeDropdown.bind(this),this.onWindowResize=this.onWindowResize.bind(this)}static get scopedElements(){return{"dbp-icon":D}}static get properties(){return{lang:{type:String},showImage:{type:Boolean,attribute:"show-image"},_loginData:{type:Object,attribute:!1}}}onWindowResize(){this.updateDropdownWidth()}connectedCallback(){super.connectedCallback(),this._bus=new M,this._bus.subscribe("auth-update",(t=>{this._loginData=t})),window.addEventListener("resize",this.onWindowResize),document.addEventListener("click",this.closeDropdown)}disconnectedCallback(){window.removeEventListener("resize",this.onWindowResize),this._bus.close(),document.removeEventListener("click",this.closeDropdown),super.disconnectedCallback()}updateDropdownWidth(){const t=this.shadowRoot.querySelector("div.dropdown-menu");if(!t)return;let e=this.getBoundingClientRect(),n=window.innerWidth-e.left;t.setAttribute("style",`width: ${n-20}px`)}onLoginClicked(t){this._bus.publish("auth-login"),t.preventDefault()}onLogoutClicked(t){this._bus.publish("auth-logout")}update(t){t.forEach(((t,e)=>{"lang"===e&&wt.changeLanguage(this.lang)})),super.update(t)}static get styles(){return C(n||(n=y`
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
        `),E())}setChevron(t){const e=this.shadowRoot.querySelector("#menu-chevron-icon");null!==e&&(e.name=t)}onDropdownClick(t){t.stopPropagation(),t.currentTarget.classList.toggle("is-active"),this.setChevron(t.currentTarget.classList.contains("is-active")?"chevron-up":"chevron-down"),this.updateDropdownWidth()}closeDropdown(){this.shadowRoot.querySelectorAll(".dropdown").forEach((function(t){t.classList.remove("is-active")})),this.setChevron("chevron-down")}renderLoggedIn(){const t=this._loginData.person,e=this.showImage&&t&&t.image?t.image:null;return L(i||(i=y`
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
        `),this.onDropdownClick,this._loginData.name,this.closeDropdown,e?L(o||(o=y`<div class="dropdown-item"><img alt="" src="${0}"></div>`),e):"",this.onLogoutClicked,wt.t("logout"))}renderLoggedOut(){return L(a||(a=y`
            <a href="#" @click="${0}">
                <div class="login-box login-button">
                    <div class="icon">${0}</div>
                    <div class="label">${0}</div>
                </div>
            </a>
        `),this.onLoginClicked,I('\n        <svg\n           viewBox="0 0 100 100"\n           y="0px"\n           x="0px"\n           id="icon"\n           role="img"\n           version="1.1">\n        <g\n           id="g6">\n            <path\n           style="stroke-width:1.33417916"\n           id="path2"\n           d="m 42.943908,38.894934 5.885859,6.967885 H 5.4215537 c -1.8393311,0 -3.4334181,1.741972 -3.4334181,4.064599 0,2.322628 1.4714649,4.064599 3.4334181,4.064599 H 48.829767 L 42.943908,60.9599 c -1.348843,1.596808 -1.348843,4.064599 0,5.661406 1.348843,1.596808 3.433418,1.596808 4.782261,0 L 61.705085,49.927418 47.726169,33.378693 c -1.348843,-1.596806 -3.433418,-1.596806 -4.782261,0 -1.348843,1.596807 -1.348843,4.064599 0,5.516241 z" />\n            <path\n           id="path4"\n           d="m 50,2.3007812 c -18.777325,0 -35.049449,10.9124408 -42.8261719,26.7246098 H 13.390625 C 20.672112,16.348362 34.336876,7.8007812 50,7.8007812 73.3,7.8007812 92.300781,26.7 92.300781,50 92.300781,73.3 73.3,92.300781 50,92.300781 c -15.673389,0 -29.345175,-8.60579 -36.623047,-21.326172 H 7.1640625 C 14.942553,86.8272 31.242598,97.800781 50.099609,97.800781 76.399609,97.800781 97.900391,76.4 97.900391,50 97.800391,23.7 76.3,2.3007812 50,2.3007812 Z" />\n        </g>\n        </svg>\n        '),wt.t("login"))}render(){const t="logged-in"===this._loginData.status;return L(r||(r=y`
            <div class="authbox">
                ${0}
            </div>
        `),t?this.renderLoggedIn():this.renderLoggedOut())}}const kt=x({en:{send:"send"},de:{send:"senden"}},"de","en");class xt extends ${constructor(){super(),this.lang="de"}static get properties(){return{lang:{type:String}}}connectedCallback(){super.connectedCallback(),kt.changeLanguage(this.lang);const t=this;window.addEventListener("dbp-notification-send",(e=>{if(void 0===e.detail)return;t.notificationBlock=t._("#notification");const n=`notification-${(()=>{let t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?n:3&n|8).toString(16)}))})()}`,i=void 0!==e.detail.type?e.detail.type:"info",o=void 0!==e.detail.body?e.detail.body:"",a=void 0!==e.detail.summary?e.detail.summary:"",r=void 0!==e.detail.timeout?e.detail.timeout:0,s=void 0!==e.detail.icon?e.detail.icon:"",l=""!==s?`<dbp-icon name="${s}"></dbp-icon>`:"",c=""!==a?`<h3>${a}</h3>`:"";t.notificationBlock.innerHTML=`\n                <div id="${n}" class="notification is-${i}">\n                    <button id="${n}-button" onclick="parentNode.parentNode.removeChild(parentNode)" class="delete"></button>\n                    ${c}\n                    ${l} ${o}\n                </div>\n            `+t.notificationBlock.innerHTML;const d=`#${n}`;r>0&&setTimeout((()=>{t.removeMessageId(d)}),1e3*r),e.preventDefault()}));this.updateComplete.then((()=>{}))}removeMessageId(t){const e=this._(t);e&&this.notificationBlock.removeChild(e)}static get styles(){return C(s||(s=y`
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
        `),E(),O(),U())}render(){return L(l||(l=y`
            <div class="columns">
                <div class="column" id="notification">
                </div>
            </div>
        `))}}var _t="82ba001",Et="https://github.com/krakenh2020/EduPilotPrototype/commit/82ba001",Ct="2020-12-03T16:41:14.025Z",Lt="kraken";function St(t,e){void 0===e&&(e={});for(var n=function(t){for(var e=[],n=0;n<t.length;){var i=t[n];if("*"!==i&&"+"!==i&&"?"!==i)if("\\"!==i)if("{"!==i)if("}"!==i)if(":"!==i)if("("!==i)e.push({type:"CHAR",index:n,value:t[n++]});else{var o=1,a="";if("?"===t[s=n+1])throw new TypeError('Pattern cannot start with "?" at '+s);for(;s<t.length;)if("\\"!==t[s]){if(")"===t[s]){if(0==--o){s++;break}}else if("("===t[s]&&(o++,"?"!==t[s+1]))throw new TypeError("Capturing groups are not allowed at "+s);a+=t[s++]}else a+=t[s++]+t[s++];if(o)throw new TypeError("Unbalanced pattern at "+n);if(!a)throw new TypeError("Missing pattern at "+n);e.push({type:"PATTERN",index:n,value:a}),n=s}else{for(var r="",s=n+1;s<t.length;){var l=t.charCodeAt(s);if(!(l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||95===l))break;r+=t[s++]}if(!r)throw new TypeError("Missing parameter name at "+n);e.push({type:"NAME",index:n,value:r}),n=s}else e.push({type:"CLOSE",index:n,value:t[n++]});else e.push({type:"OPEN",index:n,value:t[n++]});else e.push({type:"ESCAPED_CHAR",index:n++,value:t[n++]});else e.push({type:"MODIFIER",index:n,value:t[n++]})}return e.push({type:"END",index:n,value:""}),e}(t),i=e.prefixes,o=void 0===i?"./":i,a="[^"+Pt(e.delimiter||"/#?")+"]+?",r=[],s=0,l=0,c="",d=function(t){if(l<n.length&&n[l].type===t)return n[l++].value},h=function(t){var e=d(t);if(void 0!==e)return e;var i=n[l],o=i.type,a=i.index;throw new TypeError("Unexpected "+o+" at "+a+", expected "+t)},u=function(){for(var t,e="";t=d("CHAR")||d("ESCAPED_CHAR");)e+=t;return e};l<n.length;){var p=d("CHAR"),g=d("NAME"),m=d("PATTERN");if(g||m){var f=p||"";-1===o.indexOf(f)&&(c+=f,f=""),c&&(r.push(c),c=""),r.push({name:g||s++,prefix:f,suffix:"",pattern:m||a,modifier:d("MODIFIER")||""})}else{var v=p||d("ESCAPED_CHAR");if(v)c+=v;else if(c&&(r.push(c),c=""),d("OPEN")){f=u();var b=d("NAME")||"",w=d("PATTERN")||"",y=u();h("CLOSE"),r.push({name:b||(w?s++:""),pattern:b&&!w?a:w,prefix:f,suffix:y,modifier:d("MODIFIER")||""})}else h("END")}}return r}function Tt(t,e){var n=[];return function(t,e,n){void 0===n&&(n={});var i=n.decode,o=void 0===i?function(t){return t}:i;return function(n){var i=t.exec(n);if(!i)return!1;for(var a=i[0],r=i.index,s=Object.create(null),l=function(t){if(void 0===i[t])return"continue";var n=e[t-1];"*"===n.modifier||"+"===n.modifier?s[n.name]=i[t].split(n.prefix+n.suffix).map((function(t){return o(t,n)})):s[n.name]=o(i[t],n)},c=1;c<i.length;c++)l(c);return{path:a,index:r,params:s}}}(Dt(t,n,e),n,e)}function Pt(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function At(t){return t&&t.sensitive?"":"i"}function It(t,e,n){return function(t,e,n){void 0===n&&(n={});for(var i=n.strict,o=void 0!==i&&i,a=n.start,r=void 0===a||a,s=n.end,l=void 0===s||s,c=n.encode,d=void 0===c?function(t){return t}:c,h="["+Pt(n.endsWith||"")+"]|$",u="["+Pt(n.delimiter||"/#?")+"]",p=r?"^":"",g=0,m=t;g<m.length;g++){var f=m[g];if("string"==typeof f)p+=Pt(d(f));else{var v=Pt(d(f.prefix)),b=Pt(d(f.suffix));if(f.pattern)if(e&&e.push(f),v||b)if("+"===f.modifier||"*"===f.modifier){var w="*"===f.modifier?"?":"";p+="(?:"+v+"((?:"+f.pattern+")(?:"+b+v+"(?:"+f.pattern+"))*)"+b+")"+w}else p+="(?:"+v+"("+f.pattern+")"+b+")"+f.modifier;else p+="("+f.pattern+")"+f.modifier;else p+="(?:"+v+b+")"+f.modifier}}if(l)o||(p+=u+"?"),p+=n.endsWith?"(?="+h+")":"$";else{var y=t[t.length-1],k="string"==typeof y?u.indexOf(y[y.length-1])>-1:void 0===y;o||(p+="(?:"+u+"(?="+h+"))?"),k||(p+="(?="+u+"|"+h+")")}return new RegExp(p,At(n))}(St(t,n),e,n)}function Dt(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,o=n.exec(t.source);o;)e.push({name:o[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),o=n.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,n){var i=t.map((function(t){return Dt(t,e,n).source}));return new RegExp("(?:"+i.join("|")+")",At(n))}(t,e,n):It(t,e,n)}
/*! Universal Router | MIT License | https://www.kriasoft.com/universal-router/ */function $t(t){try{return decodeURIComponent(t)}catch(e){return t}}function Ot(t,e,n,i,o){var a,r,s=0;return{next:function(l){if(t===l)return{done:!0,value:!1};if(!a){var c=t,d=!c.children;if(c.match||(c.match=Tt(c.path||"",Object.assign({end:d},n))),a=c.match(i)){var h=a.path;return a.path=d||"/"!==h.charAt(h.length-1)?h:h.substr(1),a.params=Object.assign({},o,{},a.params),{done:!1,value:{route:t,baseUrl:e,path:a.path,params:a.params}}}}if(a&&t.children)for(;s<t.children.length;){if(!r){var u=t.children[s];u.parent=t,r=Ot(u,e+a.path,n,i.substr(a.path.length),a.params)}var p=r.next(l);if(!p.done)return{done:!1,value:p.value};r=null,s++}return{done:!0,value:!1}}}}function Ut(t,e){if("function"==typeof t.route.action)return t.route.action(t,e)}var Nt=function(){function t(t,e){if(!t||"object"!=typeof t)throw new TypeError("Invalid routes");this.options=Object.assign({decode:$t},e),this.baseUrl=this.options.baseUrl||"",this.root=Array.isArray(t)?{path:"",children:t,parent:null}:t,this.root.parent=null}return t.prototype.resolve=function(t){var e,n,i=this,o=Object.assign({router:this},this.options.context,{},"string"==typeof t?{pathname:t}:t),a=Ot(this.root,this.baseUrl,this.options,o.pathname.substr(this.baseUrl.length)),r=this.options.resolveRoute||Ut,s=o;function l(t,i,c){void 0===i&&(i=!e.done&&e.value.route);var d=null===c&&!e.done&&e.value.route;if(e=n||a.next(d),n=null,!t&&(e.done||!function(t,e){for(var n=e;n;)if((n=n.parent)===t)return!0;return!1}(i,e.value.route)))return n=e,Promise.resolve(null);if(e.done){var h=new Error("Route not found");return h.status=404,Promise.reject(h)}return s=Object.assign({},o,{},e.value),Promise.resolve(r(s,e.value.params)).then((function(e){return null!=e?e:l(t,i,e)}))}return o.next=l,Promise.resolve().then((function(){return l(!0,i.root)})).catch((function(t){if(i.options.errorHandler)return i.options.errorHandler(t,s);throw t}))},t}();
/*! Universal Router | MIT License | https://www.kriasoft.com/universal-router/ */function Rt(t,e,n){if(e.name&&t.has(e.name))throw new Error('Route "'+e.name+'" already exists');if(e.name&&t.set(e.name,e),n)for(var i=0;i<n.length;i++){var o=n[i];o.parent=e,Rt(t,o,o.children)}}function jt(t,e){if(!t)throw new ReferenceError("Router is not defined");var n=new Map,i=new Map,o=Object.assign({encode:encodeURIComponent},e);return function(e,a){var r=n.get(e);if(!(r||(n.clear(),i.clear(),Rt(n,t.root,t.root.children),r=n.get(e))))throw new Error('Route "'+e+'" not found');var s=i.get(r);if(!s){for(var l="",c=r;c;){var d=Array.isArray(c.path)?c.path[0]:c.path;d&&(l=d+l),c=c.parent}for(var h=St(l,o),u=function(t,e){void 0===e&&(e={});var n=At(e),i=e.encode,o=void 0===i?function(t){return t}:i,a=e.validate,r=void 0===a||a,s=t.map((function(t){if("object"==typeof t)return new RegExp("^(?:"+t.pattern+")$",n)}));return function(e){for(var n="",i=0;i<t.length;i++){var a=t[i];if("string"!=typeof a){var l=e?e[a.name]:void 0,c="?"===a.modifier||"*"===a.modifier,d="*"===a.modifier||"+"===a.modifier;if(Array.isArray(l)){if(!d)throw new TypeError('Expected "'+a.name+'" to not repeat, but got an array');if(0===l.length){if(c)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<l.length;h++){var u=o(l[h],a);if(r&&!s[i].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');n+=a.prefix+u+a.suffix}}else if("string"!=typeof l&&"number"!=typeof l){if(!c){var p=d?"an array":"a string";throw new TypeError('Expected "'+a.name+'" to be '+p)}}else{if(u=o(String(l),a),r&&!s[i].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');n+=a.prefix+u+a.suffix}}else n+=a}return n}}(h,o),p=Object.create(null),g=0;g<h.length;g++){var m=h[g];"string"!=typeof m&&(p[m.name]=!0)}s={toPath:u,keys:p},i.set(r,s)}var f=t.baseUrl+s.toPath(a)||"/";if(o.stringifyQueryParams&&a){for(var v={},b=Object.keys(a),w=0;w<b.length;w++){var y=b[w];s.keys[y]||(v[y]=a[y])}var k=o.stringifyQueryParams(v);k&&(f+="?"===k.charAt(0)?k:"?"+k)}return f}}class Bt{constructor(t,e,n){this.getState=e.getState,this.setState=e.setState,this.routeName=e.routeName,console.assert(this.getState),console.assert(this.setState),console.assert(this.routeName),this.router=new Nt(t,n),window.addEventListener("popstate",(t=>{this.setStateFromCurrentLocation(),this.dispatchLocationChanged()}))}setStateFromCurrentLocation(){const t=location.pathname;this.router.resolve({pathname:t}).then((e=>{const n=this.getPathname(e);if(n!==t){const t=location.href;window.history.replaceState({},"",n),this.dispatchLocationChanged(t)}this.setState(e)})).catch((t=>{}))}update(){setTimeout((()=>{const t=this.getPathname();if(t===location.pathname)return;const e=location.href;window.history.pushState({},"",t),this.dispatchLocationChanged(e)}))}updateFromPathname(t){this.router.resolve({pathname:t}).then((e=>{if(location.pathname===t)return;const n=location.href;window.history.pushState({},"",t),this.setState(e),this.dispatchLocationChanged(n)})).catch((e=>{throw new Error(`Route not found: ${t}: ${e}`)}))}getPathname(t){void 0===t&&(t={});let e=k({},this.getState(),t);return jt(this.router)(this.routeName,e)}dispatchLocationChanged(t=""){window.dispatchEvent(new CustomEvent("locationchanged",{detail:{referrerUrl:t},bubbles:!0}))}}class Mt extends _{constructor(){super()}static get styles(){return C(c||(c=y`
            ${0}
            ${0}
            ${0}

            :host {
                display: inline-block;
            }
        `),E(),O(),N())}render(){const t=new Date(Ct);return L(d||(d=y`
            <a href="${0}" style="float: right">
                <div class="tags has-addons" title="Build Time: ${0}">
                    <span class="tag is-light">build</span>
                    <span class="tag is-dark">${0} (${0})</span>
                </div>
            </a>
        `),Et,t.toString(),_t,Lt)}}const Ft=G();class Gt extends _{constructor(){super(),this.lang=Ft.language}static get properties(){return{lang:{type:String}}}update(t){t.forEach(((t,e)=>{"lang"===e&&Ft.changeLanguage(this.lang)})),super.update(t)}static get styles(){return C(h||(h=y`
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
        `),E(),O())}render(){return L(u||(u=y`
            <a href="https://www.tugraz.at" title="TU Graz Home" target="_blank" rel="noopener">
                <div id="claim">
                    <div class="int-header-logo-claim-single">${0}</div>
                    <div class="int-header-logo-claim-single">${0}</div>
                    <div class="int-header-logo-claim-single">${0}</div>
                </div>
                <svg id="img" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" height="51.862" width="141.1" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 141.10001 51.862499"><g transform="matrix(1.25 0 0 -1.25 0 51.862)"><g transform="scale(.1)"><path style="fill:#e4154b" d="m0 103.73h207.45v207.46l-207.45 0.01v-207.47z"></path><path style="fill:#e4154b" d="m228.19 103.73h207.46v207.46h-207.46v-207.46z"></path><path style="fill:#e4154b" d="m456.41 103.73h207.44v207.46h-207.44v-207.46z"></path><path style="fill:#e4154b" d="m103.72 0h207.47v207.46h-207.47v-207.46z"></path><path style="fill:#e4154b" d="m352.68 207.46h207.44v207.46h-207.44v-207.46z"></path><path style="fill:#231f20" d="m751.04 277.91h-66.426v33.195h171.19v-33.195h-66.407v-173.73h-38.359v173.73"></path><path style="fill:#231f20" d="m1048.3 180.22c0-12.461-2.25-23.711-6.72-33.75-4.5-10.039-10.61-18.555-18.36-25.567-7.76-7.031-16.9-12.421-27.503-16.21-10.605-3.809-22.109-5.7036-34.551-5.7036-12.422 0-23.945 1.8946-34.551 5.7036-10.605 3.789-19.824 9.179-27.656 16.21-7.851 7.012-13.984 15.528-18.34 25.567-4.394 10.039-6.582 21.289-6.582 33.75v130.89h38.379v-129.59c0-5.039 0.801-10.351 2.442-15.898 1.64-5.547 4.336-10.664 8.125-15.332s8.789-8.516 15.039-11.523c6.211-3.008 13.926-4.512 23.144-4.512 9.199 0 16.914 1.504 23.145 4.512 6.23 3.007 11.25 6.855 15.039 11.523 3.77 4.668 6.48 9.785 8.12 15.332 1.63 5.547 2.45 10.859 2.45 15.898v129.59h38.38v-130.89"></path><path style="fill:#231f20" d="m832.56 75.664c-7.597 3.2812-17.46 4.8632-25.332 4.8632-22.929 0-35.605-14.434-35.605-33.184 0-18.613 12.383-32.637 33.34-32.637 5.351 0 9.59 0.5274 12.969 1.3086v23.867h-20.84v14.414h39.687v-49.297c-10.41-2.6172-21.25-4.707-31.816-4.707-31.797 0-53.906 14.805-53.906 45.742 0 31.348 20.566 48.906 53.906 48.906 11.406 0 20.41-1.4453 28.867-3.8086l-1.27-15.469"></path><path style="fill:#231f20" d="m856.2 69.375h16.758v-15.332h0.293c0.84 6.289 8.574 16.914 19.824 16.914 1.836 0 3.828 0 5.782-0.5273v-17.715c-1.68 0.918-5.059 1.4454-8.457 1.4454-15.333 0-15.333-17.832-15.333-27.52v-24.785h-18.867v67.52"></path><path style="fill:#231f20" d="m913.75 65.84c7.324 3.1446 17.187 5.1172 25.215 5.1172 22.09 0 31.23-8.5351 31.23-28.457v-8.6523c0-6.8165 0.156-11.934 0.293-16.914 0.137-5.1172 0.41-9.8242 0.84-15.078h-16.602c-0.703 3.5352-0.703 8.0078-0.839 10.098h-0.293c-4.36-7.4618-13.81-11.661-22.38-11.661-12.793 0-25.332 7.207-25.332 20.059 0 10.078 5.195 15.976 12.383 19.258 7.187 3.2812 16.464 3.9453 24.355 3.9453h10.41c0 10.879-5.195 14.551-16.328 14.551-8.008 0-16.035-2.8907-22.363-7.3438l-0.586 15.078zm22.11-52.715c5.782 0 10.274 2.3633 13.223 6.0352 3.105 3.8086 3.945 8.6523 3.945 13.906h-8.164c-8.437 0-20.957-1.3086-20.957-11.68 0-5.7617 5.195-8.2617 11.953-8.2617"></path><path style="fill:#231f20" d="m985.69 69.375h57.422v-14.414l-36.04-39.473h37.31v-13.633h-60.235v14.297l36.715 39.59h-35.172v13.633"></path><path style="fill:#e4154b" d="m1059.6 0h69.102v69.121h-69.102v-69.121z"></path></g></g></svg>
            </a>
        `),Ft.t("logo.word1"),Ft.t("logo.word2"),Ft.t("logo.word3"))}}const zt=G();class Ht extends(A(_)){constructor(){super(),this.lang=zt.language}static get properties(){return{lang:{type:String}}}static set app(t){this._app=t}update(t){t.forEach(((t,e)=>{"lang"===e&&zt.changeLanguage(this.lang)})),super.update(t)}static get styles(){return C(p||(p=y`
            ${0}
            ${0}

            p { line-height: 1.8em }
            .item {padding-top: 0.5em;}
            .description {padding-left: 2em;}

            h2 a:hover {
                color: #E4154B;
            }
        `),E(),O())}render(){const t=Ht._app;let e=t.metadata,n=[];const i=(e,n)=>{e.preventDefault(),t.switchComponent(n.routing_name)};for(let[t,o]of Object.entries(e))o.visible&&"welcome"!==t&&n.push(L(g||(g=y`
                    <div class="item">
                        <h2><a href="#" @click=${0}>${0}</a></h2>
                        <p class="description">${0}</p>
                    </div>`),(t=>{i(t,o)}),o.name[this.lang],o.description[this.lang]));return L(m||(m=y`
            <p>${0}
            ${0}</p>
            <br>
            ${0}
        `),zt.t("welcome.headline",{appname:t.topic.name[this.lang]}),t.topic.description[this.lang],n)}}const qt={element:"dbp-app-shell-welcome",module_src:"",routing_name:"welcome",name:{de:"Willkommen",en:"Welcome"},short_name:{de:"Willkommen",en:"Welcome"},description:{de:"",en:""},visible:!0};R("dbp-app-shell-welcome",Ht);x({en:{matomo:{}},de:{matomo:{}}},"de","en");class Wt extends ${constructor(){super(),this.endpoint="",this.siteId=-1,this.isRunning=!1,this.lastEvent=[]}static get properties(){return{endpoint:{type:String},siteId:{type:Number,attribute:"site-id"}}}connectedCallback(){super.connectedCallback(),this._bus=new M,this._bus.subscribe("auth-update",(t=>{this.setupMatomo("logged-in"===t.status)}))}disconnectedCallback(){this._bus.close(),super.disconnectedCallback()}render(){return""}setupMatomo(t){if(t&&!this.isRunning)return-1===this.siteId?void console.log("site id missing, skipping matomo..."):""===this.endpoint?void console.log("endpoint missing, skipping matomo..."):(console.log("add matomo..."),window._paq=window._paq||[],_paq.push(["setCustomVariable",1,"GitCommit",_t,"visit"]),_paq.push(["enableHeartBeatTimer"]),_paq.push(["disableCookies"]),_paq.push(["trackPageView"]),_paq.push(["enableLinkTracking"]),function(t,e){_paq.push(["setTrackerUrl",t+"matomo.php"]),_paq.push(["setSiteId",e]);var n=document.createElement("script"),i=document.getElementsByTagName("script")[0];n.type="text/javascript",n.async=!0,n.defer=!0,n.src=t+"matomo.js",i.parentNode.insertBefore(n,i)}(this.endpoint,this.siteId),window.addEventListener("locationchanged",(function(t){_paq.push(["setReferrerUrl",t.detail.referrerUrl]),_paq.push(["setCustomUrl",location.href]),_paq.push(["trackPageView"]);var e=document.getElementById("content");_paq.push(["MediaAnalytics::scanForMedia",e]),_paq.push(["FormAnalytics::scanForForms",e]),_paq.push(["trackContentImpressionsWithinNode",e])})),window.addEventListener("error",(function(t){_paq.push(["trackEvent","Error",t.error.message+"\n"+t.error.stack])})),this.isRunning=!0,void(this.lastEvent.length>0&&(console.log("MatomoElement* ("+this.isRunning+"): "+this.lastEvent[1]+", "+this.lastEvent[2]),_paq.push(this.lastEvent),this.lastEvent=[])));!t&&this.isRunning&&(console.log("remove matomo..."),this.isRunning=!1)}track(t,e){console.log("MatomoElement  ("+this.isRunning+"): "+t+", "+e);const n=["trackEvent",t,e];this.isRunning?_paq.push(n):this.lastEvent=n}}const Vt=G();class Kt extends(A(_)){constructor(){super(),this.lang=Vt.language,this.activeView="",this.entryPointUrl=P(),this.subtitle="",this.description="",this.routes=[],this.metadata={},this.topic={},this.basePath="/",this.keycloakConfig=null,this.noWelcomePage=!1,this._updateAuth=this._updateAuth.bind(this),this._loginStatus="unknown",this.matomoUrl="",this.matomoSiteId=-1,this.matomo=null,this._attrObserver=new MutationObserver(this.onAttributeObserved),this.shellName="TU Graz",this.shellSubname="Graz University of Technology",this.noBrand=!1}static get scopedElements(){return{"dbp-language-select":H,"dbp-tugraz-logo":Gt,"dbp-build-info":Mt,"dbp-auth-keycloak":bt,"dbp-auth-menu-button":yt,"dbp-notification":xt,"dbp-icon":D,"dbp-matomo":Wt}}onAttributeObserved(t,e){for(let e of t)if("attributes"===e.type){const t=e.attributeName,n=e.target.getAttribute(t);sessionStorage.setItem("dbp-attr-"+t,n)}}async fetchMetadata(t){let e={},n=[];const i=await(await fetch(t,{headers:{"Content-Type":"application/json"}})).json();this.topic=i;const o=async function(t){const e=await fetch(t,{headers:{"Content-Type":"application/json"}});if(!e.ok)throw e;const n=await e.json();if(void 0===n.element)throw new Error("no element defined in metadata");return n};let a=[];for(const e of i.activities){const n=new URL(e.path,new URL(t,window.location).href).href;a.push([void 0===e.visible||e.visible,n,o(n)])}for(const[t,i,o]of a)try{const a=await o;a.visible=t,a.module_src=new URL(a.module_src,i).href,e[a.routing_name]=a,n.push(a.routing_name)}catch(t){console.log(t)}this.noWelcomePage||(n.unshift("welcome"),e=Object.assign(e,{welcome:qt}),customElements.get("dbp-app-shell-welcome").app=this),this.metadata=e,this.routes=n,this.activeView?this.switchComponent(this.activeView):this.switchComponent(n[0])}initRouter(){const t=[{path:"",action:t=>({lang:this.lang,component:""})},{path:"/:lang",children:[{path:"",action:(t,e)=>({lang:e.lang,component:""})},{name:"mainRoute",path:"/:component",action:(t,e)=>{let n=e.component.toLowerCase().replace(/&.+/,"");return{lang:e.lang,component:n}}}]}];this.router=new Bt(t,{routeName:"mainRoute",getState:()=>({component:this.activeView,lang:this.lang}),setState:t=>{this.updateLangIfChanged(t.lang),this.switchComponent(t.component)}},{baseUrl:new URL(this.basePath,window.location).pathname.replace(/\/$/,"")}),this.router.setStateFromCurrentLocation()}static get properties(){return{lang:{type:String,reflect:!0},src:{type:String},basePath:{type:String,attribute:"base-path"},activeView:{type:String,attribute:!1},entryPointUrl:{type:String,attribute:"entry-point-url"},keycloakConfig:{type:Object,attribute:"keycloak-config"},metadata:{type:Object,attribute:!1},topic:{type:Object,attribute:!1},subtitle:{type:String,attribute:!1},description:{type:String,attribute:!1},_loginStatus:{type:Boolean,attribute:!1},matomoUrl:{type:String,attribute:"matomo-url"},matomoSiteId:{type:Number,attribute:"matomo-site-id"},noWelcomePage:{type:Boolean,attribute:"no-welcome-page"},shellName:{type:String,attribute:"shell-name"},shellSubname:{type:String,attribute:"shell-subname"},noBrand:{type:Boolean,attribute:"no-brand"}}}_updateAuth(t){t.status!=this._loginStatus&&console.log("Login status: "+t.status),this._loginStatus=t.status,"logging-out"===this._loginStatus&&sessionStorage.clear()}connectedCallback(){super.connectedCallback(),this._bus=new M,this.src&&this.fetchMetadata(this.src),this.initRouter(),this._bus.subscribe("auth-update",this._updateAuth),this.updateComplete.then((()=>{this.matomo=this.shadowRoot.querySelector(this.constructor.getScopedTagName("dbp-matomo"))}))}disconnectedCallback(){this._bus.close(),super.disconnectedCallback()}updateLangIfChanged(t){if(this.lang!==t){this.lang=t,this.router.update();const e=new CustomEvent("dbp-language-changed",{bubbles:!0,detail:{lang:t}});this.dispatchEvent(e)}}update(t){t.forEach(((t,e)=>{"lang"===e&&(document.documentElement.setAttribute("lang",this.lang),Vt.changeLanguage(this.lang))})),super.update(t)}onMenuItemClick(t){if(t.preventDefault(),!t.currentTarget.className.includes("selected")){const t=new CustomEvent("beforeunload",{bubbles:!0,cancelable:!0});if(!window.dispatchEvent(t))return}const e=t.composedPath()[0].getAttribute("href");this.router.updateFromPathname(e),this.hideMenu()}onLanguageChanged(t){const e=t.detail.lang,n=this.lang!==e;this.lang=e,n&&(this.router.update(),this.subtitle=this.activeMetaDataText("short_name"),this.description=this.activeMetaDataText("description"))}switchComponent(t){const e=t!==this.activeView;this.activeView=t,e&&this.router.update();const n=this.metadata[t];if(void 0===n)return;let i=()=>{0!==window.pageYOffset&&window.scrollTo(0,96),this.updatePageTitle(),this.subtitle=this.activeMetaDataText("short_name"),this.description=this.activeMetaDataText("description")};n.module_src?(async t=>{try{return await t}catch(t){throw console.log(t),W({body:Vt.t("page-updated-needs-reload"),type:"info",icon:"warning"}),t}})(import(n.module_src)).then((()=>{i()})).catch((t=>{throw console.error(`Error loading ${n.element}`),t})):i()}metaDataText(t,e){const n=this.metadata[t];return void 0!==n&&void 0!==n[e]?n[e][this.lang]:""}topicMetaDataText(t){return void 0!==this.topic[t]?this.topic[t][this.lang]:""}activeMetaDataText(t){return this.metaDataText(this.activeView,t)}updatePageTitle(){document.title=`${this.topicMetaDataText("name")} - ${this.activeMetaDataText("short_name")}`}toggleMenu(){const t=this.shadowRoot.querySelector("ul.menu");if(null===t)return;t.classList.toggle("hidden");const e=this.shadowRoot.querySelector("#menu-chevron-icon");null!==e&&(e.name=t.classList.contains("hidden")?"chevron-down":"chevron-up")}hideMenu(){const t=this.shadowRoot.querySelector("ul.menu");t&&!t.classList.contains("hidden")&&this.toggleMenu()}static get styles(){return C(f||(f=y`
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

            /* We don't allown inline-svg */
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
                    overflow-y: scroll;
                    white-space: nowrap;
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
        `),E(),O())}_createActivityElement(t){if(void 0!==this._lastElm){if(this._lastElm.tagName.toLowerCase()==t.element.toLowerCase())return this._lastElm;this._onActivityRemoved(this._lastElm),this._lastElm=void 0}this.track("renderActivity",t.element);const e=document.createElement(t.element);return this._onActivityAdded(e),this._lastElm=e,e}_onActivityAdded(t){for(const e of this.topic.attributes||[]){let n=sessionStorage.getItem("dbp-attr-"+e);null!==n&&t.setAttribute(e,n)}this._attrObserver.observe(t,{attributes:!0,attributeFilter:this.topic.attributes})}_onActivityRemoved(t){this._attrObserver.disconnect()}track(t,e){null!==this.matomo&&this.matomo.track(t,e)}_renderActivity(){const t=this.metadata[this.activeView];if(void 0===t)return L(v||(v=y``));const e=this._createActivityElement(t);return e.setAttribute("entry-point-url",this.entryPointUrl),e.setAttribute("lang",this.lang),e}render(){const t=t=>j({selected:this.activeView===t}),e="unknown"==this._loginStatus||"logging-in"==this._loginStatus,n=j({hidden:e}),i=j({hidden:!e});e||this.updateComplete.then((()=>{const t=this.shadowRoot.querySelector("slot");t&&t.remove()}));const o=j({hidden:"demo"===Lt});this.updatePageTitle();let a=[];for(let e of this.routes){this.metadata[e].visible&&a.push(L(b||(b=y`<li><a @click="${0}" href="${0}" data-nav class="${0}" title="${0}">${0}</a></li>`),(t=>this.onMenuItemClick(t)),this.router.getPathname({component:e}),t(e),this.metaDataText(e,"description"),this.metaDataText(e,"short_name")))}const r="en"===this.lang?"https://www.tugraz.at/en/about-this-page/legal-notice/":"https://www.tugraz.at/ueber-diese-seite/impressum/",s=this.keycloakConfig;return L(w||(w=y`
            <slot class="${0}"></slot>
            <dbp-auth-keycloak lang="${0}" url="${0}" realm="${0}" client-id="${0}" silent-check-sso-redirect-uri="${0}" scope="${0}"  idp-hint="${0}" load-person ?force-login="${0}" ?try-login="${0}"></dbp-auth-keycloak>
            <dbp-matomo endpoint="${0}" site-id="${0}"></dbp-matomo>
            <div class="${0}">
            <div id="main">
                <dbp-notification lang="${0}"></dbp-notification>
                <header>
                    <div class="hd1-left">
                        <dbp-language-select @dbp-language-changed=${0}></dbp-language-select>
                    </div>
                    <div class="hd1-middle">
                    </div>
                    <div class="hd1-right">
                        <dbp-auth-menu-button class="auth-button" lang="${0}"></dbp-auth-menu-button>
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
                    <p class="description">${0}</p>
                    ${0}
                </main>

                <footer>
                    <a target="_blank" rel="noopener" class="int-link-external" href="https://datenschutz.tugraz.at/erklaerung/">${0}</a>
                    <a target="_blank" rel="noopener" class="int-link-external" href="${0}">${0}</a>
                    <a rel="noopener" class="int-link-external" href="mailto:it-support@tugraz.at">${0}</a>
                    <dbp-build-info class="${0}"></dbp-build-info>
                </footer>
            </div>
            </div>
        `),i,this.lang,s.url,s.realm,s.clientId,s.silentCheckSsoRedirectUri||"",s.scope||"",s.idpHint||"",s.forceLogin,!s.forceLogin,this.matomoUrl,this.matomoSiteId,n,this.lang,this.onLanguageChanged.bind(this),this.lang,this.shellName,this.shellSubname,this.lang,j({hidden:this.noBrand}),this.topicMetaDataText("name"),this.toggleMenu,this.subtitle,a,this.hideMenu,this.description,this._renderActivity(),Vt.t("privacy-policy"),r,Vt.t("imprint"),Vt.t("contact"),o)}}R("vc4sm-frontend",Kt);
//# sourceMappingURL=vc4sm-frontend.js.map
