let e,t,r,n,o,s,i,a,l,d,c,p,h,u,g,m,b=e=>e;function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}
/*!
 * License: LGPL-2.1-or-later
 * Dependencies:
 * 
 * lit-html: BSD-3-Clause
 * lit-element: BSD-3-Clause
 * @open-wc/dedupe-mixin: MIT
 * @open-wc/scoped-elements: MIT
 * @dbp-toolkit/common: LGPL-2.1-or-later
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,y=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},w=`{{lit-${String(Math.random()).slice(2)}}}`,_=`\x3c!--${w}--\x3e`,x=new RegExp(`${w}|${_}`);class S{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,i=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=o.nextNode();if(null!==e){if(i++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)k(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=l[a],r=E.exec(t)[2],n=r.toLowerCase()+"$lit$",o=e.getAttribute(n);e.removeAttribute(n);const s=o.split(x);this.parts.push({type:"attribute",index:i,name:r,strings:s}),a+=s.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(w)>=0){const n=e.parentNode,o=t.split(x),s=o.length-1;for(let t=0;t<s;t++){let r,s=o[t];if(""===s)r=P();else{const e=E.exec(s);null!==e&&k(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),r=document.createTextNode(s)}n.insertBefore(r,e),this.parts.push({type:"node",index:++i})}""===o[s]?(n.insertBefore(P(),e),r.push(e)):e.data=o[s],a+=s}}else if(8===e.nodeType)if(e.data===w){const t=e.parentNode;null!==e.previousSibling&&i!==s||(i++,t.insertBefore(P(),e)),s=i,this.parts.push({type:"node",index:i}),null===e.nextSibling?e.data="":(r.push(e),i--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(w,t+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=n.pop()}for(const e of r)e.parentNode.removeChild(e)}}const k=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},C=e=>-1!==e.index,P=()=>document.createComment(""),E=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function N(e,t){const{element:{content:r},parts:n}=e,o=document.createTreeWalker(r,133,null,!1);let s=T(n),i=n[s],a=-1,l=0;const d=[];let c=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==i&&i.index===a;)i.index=null!==c?-1:i.index-l,s=T(n,s),i=n[s]}d.forEach((e=>e.parentNode.removeChild(e)))}const A=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},T=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(C(t))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const z=new WeakMap,V=e=>(...t)=>{const r=e(...t);return z.set(r,!0),r},M=e=>"function"==typeof e&&z.has(e),O={},$={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class R{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=v?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,s=0,i=0,a=n.nextNode();for(;s<r.length;)if(o=r[s],C(o)){for(;i<o.index;)i++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return v&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),F=` ${w} `;class j{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],o=e.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===e.indexOf("--\x3e",o+1);const s=E.exec(e);t+=null===s?e+(r?F:_):e.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+w}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==U&&(t=U.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const B=e=>null===e||!("object"==typeof e||"function"==typeof e),L=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class D{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new I(this)}_getValue(){const e=this.strings,t=e.length-1,r=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=r[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!L(e))return e}let n="";for(let o=0;o<t;o++){n+=e[o];const t=r[o];if(void 0!==t){const e=t.value;if(B(e)||!L(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class I{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===O||B(e)&&e===this.value||(this.value=e,M(e)||(this.committer.dirty=!0))}commit(){for(;M(this.value);){const e=this.value;this.value=O,e(this)}this.value!==O&&this.committer.commit()}}class q{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(P()),this.endNode=e.appendChild(P())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=P()),e.__insert(this.endNode=P())}insertAfterPart(e){e.__insert(this.startNode=P()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;M(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=O,e(this)}const e=this.__pendingValue;e!==O&&(B(e)?e!==this.value&&this.__commitText(e):e instanceof j?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):L(e)?this.__commitIterable(e):e===$?(this.value=$,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof R&&this.value.template===t)this.value.update(e.values);else{const r=new R(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const o of e)r=t[n],void 0===r&&(r=new q(this.options),t.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(o),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){y(this.startNode.parentNode,e.nextSibling,this.endNode)}}class H{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;M(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=O,e(this)}if(this.__pendingValue===O)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=O}}class W extends D{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new J(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class J extends I{}let Y=!1;(()=>{try{const e={get capture(){return Y=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class X{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;M(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=O,e(this)}if(this.__pendingValue===O)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=G(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=O}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const G=e=>e&&(Y?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function K(e){let t=Q.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Q.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(w);return r=t.keyString.get(n),void 0===r&&(r=new S(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const Q=new Map,Z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ee=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,r,n){const o=t[0];if("."===o){return new W(e,t.slice(1),r).parts}if("@"===o)return[new X(e,t.slice(1),n.eventContext)];if("?"===o)return[new H(e,t.slice(1),r)];return new D(e,t,r).parts}handleTextExpression(e){return new q(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const te=(e,...t)=>new j(e,t,"html",ee)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,re=(e,t)=>`${e}--${t}`;let ne=!0;void 0===window.ShadyCSS?ne=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ne=!1);const oe=e=>t=>{const r=re(t.type,e);let n=Q.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},Q.set(r,n));let o=n.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(w);if(o=n.keyString.get(s),void 0===o){const r=t.getTemplateElement();ne&&window.ShadyCSS.prepareTemplateDom(r,e),o=new S(t,r),n.keyString.set(s,o)}return n.stringsArray.set(t.strings,o),o},se=["html","svg"],ie=new Set,ae=(e,t,r)=>{ie.add(e);const n=r?r.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:s}=o;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,e);const i=document.createElement("style");for(let e=0;e<s;e++){const t=o[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}(e=>{se.forEach((t=>{const r=Q.get(re(t,e));void 0!==r&&r.keyString.forEach((e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{r.add(e)})),N(e,r)}))}))})(e);const a=n.content;r?function(e,t,r=null){const{element:{content:n},parts:o}=e;if(null==r)return void n.appendChild(t);const s=document.createTreeWalker(n,133,null,!1);let i=T(o),a=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===r&&(a=A(t),r.parentNode.insertBefore(t,r));-1!==i&&o[i].index===l;){if(a>0){for(;-1!==i;)o[i].index+=a,i=T(o,i);return}i=T(o,i)}}(r,i,a.firstChild):a.insertBefore(i,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(i,a.firstChild);const e=new Set;e.add(i),N(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const le={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},de=(e,t)=>t!==e&&(t==t||e==e),ce={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:de};class pe extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=ce){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdateInternal(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ce}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=de){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||le,o="function"==typeof n?n:n.fromAttribute;return o?o(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter;return(n&&n.toAttribute||le.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=ce){const n=this.constructor,o=n._attributeNameForProperty(e,r);if(void 0!==o){const e=n._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){const e=r.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,r){let n=!0;if(void 0!==e){const o=this.constructor;r=r||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}pe.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const he=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ue=Symbol();class ge{constructor(e,t){if(t!==ue)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(he?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const me=e=>new ge(String(e),ue),be=(e,...t)=>{const r=t.reduce(((t,r,n)=>t+(e=>{if(e instanceof ge)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[n+1]),e[0]);return new ge(r,ue)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const fe={};class ve extends pe{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,r)=>e.reduceRight(((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e)),r),r=t(e,new Set),n=[];r.forEach((e=>n.unshift(e))),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!he){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return me(t)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?he?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==fe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return fe}}ve.finalized=!0,ve.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,o=Z.has(t),s=ne&&11===t.nodeType&&!!t.host,i=s&&!ie.has(n),a=i?document.createDocumentFragment():t;if(((e,t,r)=>{let n=Z.get(t);void 0===n&&(y(t,t.firstChild),Z.set(t,n=new q(Object.assign({templateFactory:K},r))),n.appendInto(t)),n.setValue(e),n.commit()})(e,a,Object.assign({templateFactory:oe(n)},r)),i){const e=Z.get(a);Z.delete(a);const r=e.value instanceof R?e.value.template:void 0;ae(n,a,r),y(t,t.firstChild),t.appendChild(a),Z.set(t,e)}!o&&s&&window.ShadyCSS.styleElement(t.host)};const ye=new WeakMap;class we{constructor(e){this._parent=e,this._cache=new Map}has(e){return!!(this._cache.has(e)||this._parent&&this._parent._cache.has(e))}set(e,t){return this._cache.set(e,t),this}get(e){return this._cache.get(e)||this._parent&&this._parent._cache.get(e)}}let _e=Math.round(1e5*Math.random());const xe="-|\\.|[0-9]|[a-z]",Se=new RegExp(`[a-z](${xe})*-(${xe})*`),ke=(e,t)=>{const r=`${e}-${_e+=1}`;return((e,t)=>!!t.get(e))(r,t)?ke(e,t):r};function Ce(e,t=customElements){if(r=e,null===Se.exec(r))throw new Error("tagName is invalid");var r;return ke(e,t)}const Pe=new WeakMap,Ee=(e,t)=>Pe.set(t,e),Ne=(e,t,r=customElements)=>{Ee(e,t),r.define(e,class extends t{})},Ae=(e,t,r)=>{const n=customElements;if(!(e=>Object.prototype.isPrototypeOf.call(HTMLElement,e))(t))return((e,t,r)=>{const n=Ce(e,t);if(!r)throw new Error("Lazy scoped elements requires the use of tags cache");return r.set(e,n),n})(e,n,r);if(t===customElements.get(e))return Ee(e,t),e;const o=Ce(e,n);return Ne(o,t,n),o};function Te(e,t,r){return(e=>Pe.get(e))(t)||r&&r.get(e)||Ae(e,t,r)}const ze=new RegExp("<\\/?([a-z](-|\\.|[0-9]|[a-z])*-(-|\\.|[0-9]|[a-z])*)","g"),Ve=new we,Me=(e,t,r,n)=>{const o=e.map((e=>{let r=e;const o=(e=>{const t=[];let r;for(;null!==(r=ze.exec(e));)t.push(r);return t})(e);for(let e=o.length-1;e>=0;e-=1){const s=o[e],[i,a]=s,l=Te(a,t[a],n),d=s.index+i.length-a.length,c=d+a.length,p=0===i.indexOf("</");r=r.slice(0,d)+(p?l:`${l} data-tag-name="${a}"`)+r.slice(c)}return r}));return r.set(e,o),o};let Oe=!0;const{ShadyCSS:$e}=window;(void 0===$e||void 0===$e.prepareTemplateDom)&&(Oe=!1);const Re=new WeakMap,Ue=new WeakMap,Fe=e=>(Ue.has(e)||Ue.set(e,new we(Ue.get(e.constructor))),Ue.get(e)),je=(e,t,r,n)=>e.map((e=>e instanceof j?Be(e,t,r,n):Array.isArray(e)?je(e,t,r,n):e)),Be=(e,t,r,n)=>new j(function(e,t,r=Ve,n){return r.get(e)||Me(e,t,r,n)}(e.strings,t,r,n),je(e.values,t,r,n),e.type,e.processor),Le=(e,t,r,n)=>o=>{const s=Be(o,t,r,n);return(e=>t=>{const r=((e,t)=>`${e}--${t}`)(t.type,e);let n=Q.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},Q.set(r,n));let o=n.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(w);if(o=n.keyString.get(s),void 0===o){const r=t.getTemplateElement();Oe&&$e.prepareTemplateDom(r,e),o=new S(t,r),n.keyString.set(s,o)}return n.stringsArray.set(t.strings,o),o})(e)(s)},De=(Ie=e=>class extends e{static get scopedElements(){return{}}static render(e,t,r){if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const{scopeName:n,eventContext:o}=r,s=(i=o,Re.has(i)||Re.set(i,new we(Re.get(i.constructor))),Re.get(i));var i;const a=Fe(o),{scopedElements:l}=this;return super.render(e,t,f({},r,{templateFactory:Le(n,l,s,a)}))}defineScopedElement(e,t){return function(e,t,r){const n=r.get(e);n?void 0===customElements.get(n)&&Ne(n,t,customElements):r.set(e,Te(e,t,r))}(e,t,Fe(this))}static getScopedTagName(e){const t=this.scopedElements[e];return t?Te(e,t,Fe(this)):Fe(this).get(e)}getScopedTagName(e){const t=this.constructor.scopedElements[e];return t?Te(e,t,Fe(this)):Fe(this).get(e)}},e=>{if(function(e,t){let r=t;for(;r;){if(ye.get(r)===e)return!0;r=Object.getPrototypeOf(r)}return!1}(Ie,e))return e;const t=Ie(e);return ye.set(t,Ie),t});var Ie;const qe=e=>{if(0===e.length)throw new Error("input must not be of zero length");const t=e.split(","),r={};for(let e=0;e<t.length;e++){const n=t[e].split(";");if(2!==n.length)throw new Error("section could not be split on ';'");const o=n[0].replace(/<(.*)>/,"$1").trim();r[n[1].replace(/rel="(.*)"/,"$1").trim()]=o}return r},He=(e="")=>{let t="";return t="http://127.0.0.1:8000",t+e},We=e=>{const t=e.split("/");return t[0]+"//"+t[2]},Je=(e,t,r)=>{if(customElements.get(e)===t)return!0;if(!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype&&window.customElements)){for(var n=document.getElementsByTagName(e),o=0;o<n.length;o++)n[o].innerHTML="<span style='border: 1px solid red; font-size: 0.8em; opacity: 0.5; padding: 0.2em;'>☹ Your browser is not supported ☹</span>";return!1}return customElements.define(e,t,r),!0},Ye=(e,t)=>{let r="";return r=void 0===t?e:"local/"+e+"/"+t,new URL(r,new URL("..",import.meta.url).href).href},Xe=new WeakMap,Ge=V((e=>t=>{if(!(t instanceof q))throw new Error("unsafeHTML can only be used in text bindings");const r=Xe.get(t);if(void 0!==r&&B(e)&&e===r.value&&t.value===r.fragment)return;const n=document.createElement("template");n.innerHTML=e;const o=document.importNode(n.content,!0);t.setValue(o),Xe.set(t,{value:e,fragment:o})})),Ke=new WeakMap,Qe=V(((...e)=>t=>{let r=Ke.get(t);void 0===r&&(r={lastRenderedIndex:2147483647,values:[]},Ke.set(t,r));const n=r.values;let o=n.length;r.values=e;for(let s=0;s<e.length&&!(s>r.lastRenderedIndex);s++){const i=e[s];if(B(i)||"function"!=typeof i.then){t.setValue(i),r.lastRenderedIndex=s;break}s<o&&i===n[s]||(r.lastRenderedIndex=2147483647,o=0,Promise.resolve(i).then((e=>{const n=r.values.indexOf(i);n>-1&&n<r.lastRenderedIndex&&(r.lastRenderedIndex=n,t.setValue(e),t.commit())})))}}));const Ze='\n<svg version="1.1" id="Layer_2_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\n<g>\n\t<path d="M38.2,98.7c-1.1,0-2.2-0.6-2.8-1.6c-0.5-0.8-0.6-1.8-0.3-2.6l8.9-37.8H24.5c-1.2,0-2.2-0.6-2.8-1.5c-0.6-1-0.7-2.2-0.1-3.2\n\t\tl0.2-0.3L54.9,3.1c0.9-1.6,2.3-1.8,2.8-1.8c1.1,0,2.2,0.6,2.8,1.6c0.5,0.8,0.6,1.7,0.3,2.6l-6.9,30.4L75.6,36\n\t\tc1.1,0,2.2,0.6,2.8,1.5c0.6,1,0.7,2.2,0.1,3.2l-0.2,0.3L40.8,97.4l-0.2,0.2C40.3,97.9,39.5,98.7,38.2,98.7z M28.6,51.2h18.1\n\t\tc1.8,0,3.2,1.5,3.2,3.4v0.3l-6.8,29l28.2-42.4l-20.3-0.1c-1.8,0-3.2-1.5-3.2-3.4v-0.3l5-21.9L28.6,51.2z M75.5,41.5\n\t\tC75.5,41.5,75.5,41.5,75.5,41.5L75.5,41.5z M51.1,35.9L51.1,35.9C51.2,35.9,51.1,35.9,51.1,35.9z"/>\n</g>\n</svg>\n';function et(e){return Ye("@dbp-toolkit/common","icons/"+encodeURI(e)+".svg")}const tt={};async function rt(e){if(void 0===tt[e]){let t=async function(e){const t=et(e),r=await fetch(t);if(!r.ok)return Ge(Ze);let n=await r.text();return-1===n.indexOf("<svg")?Ge(Ze):(n=n.slice(n.indexOf("<svg")),Ge(n))}(e);return tt[e]=t,t}return tt[e]}class nt extends ve{constructor(){super(),this.name="bolt"}static get properties(){return{name:{type:String}}}static get styles(){return be(e||(e=b`
            :host {
                display: inline-block;
                height: 1em;
                top: .125em;
                position: relative;
            }

            svg {
                height: 100%;
            }

            svg * {
                fill: currentColor;
            }
        `))}render(){let e=rt(this.name);return te(t||(t=b`
            ${0}
        `),Qe(e))}}class ot extends ve{constructor(){super(),this.text=""}static get properties(){return{text:{type:String}}}static get styles(){return be(r||(r=b`
        .outer {
            display: inline-block;
            vertical-align: sub;
        }
        .inner {
            display: flex;
        }
        .ring {
          display: inline-block;
          position: relative;
          width: 1em;
          height: 1em;
        }
        .ring div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          border: 0.2em solid currentColor;
          border-radius: 50%;
          animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: currentColor transparent transparent transparent;
        }
        .ring div:nth-child(1) {
          animation-delay: -0.45s;
        }
        .ring div:nth-child(2) {
          animation-delay: -0.3s;
        }
        .ring div:nth-child(3) {
          animation-delay: -0.15s;
        }
        @keyframes ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .text {
            display: inline-block;
            margin-left: 0.5em;
            font-size: 0.7em;
        }`))}render(){const e=""!==this.text?te(n||(n=b`<div class="text">${0}</div>`),this.text):te(o||(o=b``));return te(s||(s=b`<div class="outer"><div class="inner"><div class="ring"><div></div><div></div><div></div><div></div></div>${0}</div></div>`),e)}}function st(){return be(i||(i=b`
        :host {
            --dbp-primary-bg-color: var(--dbp-override-primary-bg-color, #007bff);
            --dbp-primary-text-color: var(--dbp-override-primary-text-color, #fff);
            --dbp-primary-button-border: var(--dbp-override-primary-button-border, #007bff);
            --dbp-secondary-bg-color: var(--dbp-override-secondary-bg-color, #6c757d);
            --dbp-secondary-text-color: var(--dbp-override-secondary-text-color, #fff);
            --dbp-info-bg-color: var(--dbp-override-info-bg-color, #17a2b8);
            --dbp-info-text-color: var(--dbp-override-info-text-color, #fff);
            --dbp-success-bg-color: var(--dbp-override-success-bg-color, #28a745);
            --dbp-success-text-color: var(--dbp-override-success-text-color, #fff);
            --dbp-warning-bg-color: var(--dbp-override-warning-bg-color, #ffc107);
            --dbp-warning-text-color: var(--dbp-override-warning-text-color, #343a40);
            --dbp-danger-bg-color: var(--dbp-override-danger-bg-color, #dc3545);
            --dbp-danger-text-color: var(--dbp-override-danger-text-color, #fff);
            --dbp-light: var(--dbp-override-light, #f8f9fa);
            --dbp-dark: var(--dbp-override-dark, #343a40);
            --dbp-muted-text: var(--dbp-override-muted-text, #6c757d);
            --dbp-border-radius: var(--dbp-override-border-radius, 0px);
            --dbp-border-width: var(--dbp-override-border-width, 1px);
            --dbp-border-color: var(--dbp-override-border-color, #000);
            --dbp-placeholder-color: #777; 
        }
    `))}function it(e=!0){const t=be(e?a||(a=b`
        blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
            margin: 0;
            padding: 0;
        }
    `):l||(l=b``));return be(d||(d=b`
        h2 {
            font-weight: 300;
        }

        code {
            background-color: var(--dbp-light);
            color: var(--dbp-danger-bg-color);
            font-size: 1em;
            line-height: 1.5em;
            font-weight: normal;
            padding: 0.25em 0.5em 0.25em;
        }

        .field:not(:last-child) {
            margin-bottom: 0.75rem;
        }

        .field.has-addons {
            display: flex;
            justify-content: flex-start;
        }

        .input, .textarea, .select select {
            border: solid 1px #aaa;
            border-radius: var(--dbp-border-radius);
            padding-bottom: calc(.375em - 1px);
            padding-left: calc(.625em - 1px);
            padding-right: calc(.625em - 1px);
            padding-top: calc(.375em - 1px);
        }

        .input::placeholder, .textarea::placeholder, .select select::placeholder {
            color: var(--dbp-placeholder-color);
        }

        input, ::placeholder, textarea, select, .select select {
            font-size: inherit;
            font-family: inherit;
        }

        .control {
            box-sizing: border-box;
            clear: both;
            font-size: 1rem;
            position: relative;
            text-align: left;
        }

        .label {
            margin-bottom: .5em;
            display: block;
            font-weight: 600;
        }

        .hidden { display: none; }

        a {
            color: var(--dbp-override-muted-text);
            cursor: pointer;
            text-decoration: none;
        }

        a.is-download {
            border-bottom: 1px solid rgba(0,0,0,0.4);
            transition: background-color 0.15s, color 0.15s;
        }

        a.is-download:hover {
            color: #fff;
            background-color: #000;
        }

        /* Inline SVG don't work in our web-components */
        /*
        a.is-download:after, a.is-download:hover:after {
            content: "\\00a0\\00a0\\00a0\\00a0";
            background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%228.3021mm%22%20width%3D%228.2977mm%22%20version%3D%221.1%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20viewBox%3D%220%200%2029.401607%2029.41681%22%3E%3Cg%20style%3D%22stroke-width%3A2.1%22%20transform%3D%22translate(-271.68%20-367.92)%22%3E%3Cpath%20style%3D%22stroke-linejoin%3Around%3Bstroke%3A%23000%3Bstroke-linecap%3Around%3Bstroke-width%3A2.1%3Bfill%3Anone%22%20d%3D%22m300.13%20390.41v2.3918c0%201.9813-1.6064%203.5877-3.5877%203.5877h-20.326c-1.9813%200-3.5877-1.6064-3.5877-3.5877v-2.3918%22%2F%3E%3Cpath%20style%3D%22stroke-linejoin%3Around%3Bstroke%3A%23000%3Bstroke-linecap%3Around%3Bstroke-width%3A2.1%3Bfill%3Anone%22%20d%3D%22m286.38%20390.27v-21.384%22%2F%3E%3Cpath%20style%3D%22stroke-linejoin%3Around%3Bstroke%3A%23000%3Bstroke-linecap%3Around%3Bstroke-width%3A2.1%3Bfill%3Anone%22%20d%3D%22m295.13%20381.52-8.7501%208.7462-8.7501-8.7462%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            margin: 0 0.25% 0 1.5%;
            font-size: 94%;
        }
        */

        .title {
            color: #363636;
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.125;
        }

        ${0}

        .button[disabled], .file-cta[disabled], .file-name[disabled], .input[disabled], .pagination-ellipsis[disabled],
        .pagination-link[disabled], .pagination-next[disabled], .pagination-previous[disabled], .select fieldset[disabled] select,
        .select select[disabled], .textarea[disabled], fieldset[disabled] .button, fieldset[disabled] .file-cta,
        fieldset[disabled] .file-name, fieldset[disabled] .input, fieldset[disabled] .pagination-ellipsis,
        fieldset[disabled] .pagination-link, fieldset[disabled] .pagination-next, fieldset[disabled] .pagination-previous,
        fieldset[disabled] .select select, fieldset[disabled] .textarea {
            cursor: not-allowed;
        }

        .input, .select select, .textarea {
            background-color: #fff;
            border-color: var(--dbp-muted);
            border-radius: var(--dbp-border-radius);
            color: var(--dbp-muted);
        }

        *, ::after, ::before {
            box-sizing: inherit;
        }

        select:not(.select) {
            -moz-appearance: none;
            -webkit-appearance: none;
            background: calc(100% - 0.2rem) center no-repeat url("${0}");
            background-size: 25%;
            border-color: black;
            border-width: 1px;
            border-radius: var(--dbp-border-radius);
            color: black;
            padding: 0.14rem 1.0rem 0.14rem 0.14rem;
            border-style: solid;
        }
    `),t,me(et("chevron-down")))}function at(){return be(c||(c=b`
        .notification {
            background-color: var(--dbp-light);
            padding: 1.25rem 2.5rem 1.25rem 1.5rem;
            position: relative;
            border-radius: var(--dbp-border-radius);
        }

        .notification a:not(.button):not(.dropdown-item) {
            color: currentColor;
            text-decoration: underline;
        }

        .notification strong {
            color: currentColor;
        }

        .notification code,
        .notification pre {
            color: var(--dbp-light);
            background: var(--dbp-muted-text);
        }

        .notification pre code {
            background: transparent;
        }

        .notification dbp-icon {
            font-size: 1.4em;
            margin-right: 0.4em;
        }

        .notification > .delete {
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
        }

        .notification .title,
        .notification .subtitle,
        .notification .content {
            color: currentColor;
        }

        .notification.is-primary {
            background-color: var(--dbp-primary-bg-color);
            color: var(--dbp-primary-text-color);
        }

        .notification.is-info {
            background-color: var(--dbp-info-bg-color);
            color: var(--dbp-info-text-color);
        }

        .notification.is-success {
            background-color: var(--dbp-success-bg-color);
            color: var(--dbp-success-text-color);
        }

        .notification.is-warning {
            background-color: var(--dbp-warning-bg-color);
            color: var(--dbp-warning-text-color);
        }

        .notification.is-danger {
            background-color: var(--dbp-danger-bg-color);
            color: var(--dbp-danger-text-color);
        }
    `))}function lt(){return be(p||(p=b`
        button.button, .button, button.dt-button {
            border-style: solid;
            border-color: black;
            border-width: 1px;
            border-radius: var(--dbp-border-radius);
            color: black;
            cursor: pointer;
            justify-content: center;
            padding-bottom: calc(0.375em - 1px);
            padding-left: 0.75em;
            padding-right: 0.75em;
            padding-top: calc(0.375em - 1px);
            text-align: center;
            white-space: nowrap;
            font-size: inherit;
            font-family: inherit;
            transition: background-color 0.15s ease 0s, color 0.15s ease 0s;
            background: none;
        }

        button.button:hover, .button:hover, button.dt-button:hover, button.dt-button:hover:not(.disabled) {
            color: white;
            background: none;
            background-color: black;
        }

        button.button.is-small, .button.is-small {
            border-radius: calc(var(--dbp-border-radius) / 2);
            font-size: .75rem;
        }

        button.button.is-primary, .button.is-primary {
            background-color: var(--dbp-primary-bg-color);
            border: var(--dbp-primary-button-border);
            color: var(--dbp-primary-text-color);
        }

        button.button.is-info, .button.is-info {
            background-color: var(--dbp-info-bg-color);
            color: var(--dbp-info-text-color);
        }

        button.button.is-success, .button.is-success {
            background-color: var(--dbp-success-bg-color);
            color: var(--dbp-success-text-color);
        }

        button.button.is-warning, .button.is-warning {
            background-color: var(--dbp-warning-bg-color);
            color: var(--dbp-warning-text-color);
        }

        .button.button.is-danger, .button.is-danger {
            background-color: var(--dbp-danger-bg-color);
            color: var(--dbp-danger-text-color);
        }

        button.button[disabled], .button[disabled], fieldset[disabled] .button {
            opacity: .5;
            cursor: not-allowed;
        }
    `))}function dt(){return be(h||(h=b`
        .tags {
            align-items: center;
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
        }

        .tags .tag {
            margin-bottom: 0.5rem;
        }

        .tags .tag:not(:last-child) {
            margin-right: 0.5rem;
        }

        .tags:last-child {
            margin-bottom: -0.5rem;
        }

        .tags:not(:last-child) {
            margin-bottom: 1rem;
        }

        .tags.are-medium .tag:not(.is-normal):not(.is-large) {
            font-size: 1rem;
        }

        .tags.are-large .tag:not(.is-normal):not(.is-medium) {
            font-size: 1.25rem;
        }

        .tags.is-centered {
            justify-content: center;
        }

        .tags.is-centered .tag {
            margin-right: 0.25rem;
            margin-left: 0.25rem;
        }

        .tags.is-right {
            justify-content: flex-end;
        }

        .tags.is-right .tag:not(:first-child) {
            margin-left: 0.5rem;
        }

        .tags.is-right .tag:not(:last-child) {
            margin-right: 0;
        }

        .tags.has-addons .tag {
            margin-right: 0;
        }

        .tags.has-addons .tag:not(:first-child) {
            margin-left: 0;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
        }

        .tags.has-addons .tag:not(:last-child) {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
        }

        .tag:not(body) {
            align-items: center;
            background-color: whitesmoke;
            border-radius: var(--dbp-border-radius);
            color: #4a4a4a;
            display: inline-flex;
            font-size: 0.75rem;
            height: 2em;
            justify-content: center;
            line-height: 1.5;
            padding-left: 0.75em;
            padding-right: 0.75em;
            white-space: nowrap;
        }

        .tag:not(body) .delete {
            margin-left: 0.25rem;
            margin-right: -0.375rem;
        }

        .tag:not(body).is-dark {
            background-color: var(--dbp-dark);
            color: whitesmoke;
        }

        .tag:not(body).is-light {
            background-color: var(--dbp-light);
            color: #363636;
        }

        .tag:not(body).is-normal {
            font-size: 0.75rem;
        }

        .tag:not(body).is-medium {
            font-size: 1rem;
        }

        .tag:not(body).is-large {
            font-size: 1.25rem;
        }

        .tag:not(body) .icon:first-child:not(:last-child) {
            margin-left: -0.375em;
            margin-right: 0.1875em;
        }

        .tag:not(body) .icon:last-child:not(:first-child) {
            margin-left: 0.1875em;
            margin-right: -0.375em;
        }

        .tag:not(body) .icon:first-child:last-child {
            margin-left: -0.375em;
            margin-right: -0.375em;
        }

        .tag:not(body).is-delete {
            margin-left: 1px;
            padding: 0;
            position: relative;
            width: 2em;
        }

        .tag:not(body).is-delete::before, .tag:not(body).is-delete::after {
            background-color: currentColor;
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

        .tag:not(body).is-delete::before {
            height: 1px;
            width: 50%;
        }

        .tag:not(body).is-delete::after {
            height: 50%;
            width: 1px;
        }

        .tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {
            background-color: #e8e8e8;
        }

        .tag:not(body).is-delete:active {
            background-color: #dbdbdb;
        }

        .tag:not(body).is-rounded {
            border-radius: 290486px;
        }

        a.tag:hover {
            text-decoration: underline;
        }
    `))}function ct(){return be(u||(u=b`
        .select2-dropdown {
            border-radius: var(--dbp-border-radius);
        }

        .select2-container--default .select2-selection--single {
            border-radius: var(--dbp-border-radius);
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
            color: inherit;
        }

        .select2-container--default .select2-selection--single .select2-selection__clear {
            font-size: 1.5em;
            font-weight: 300;
            /* color: red; */
        }

        .select2-container--default .select2-selection--single .select2-selection__placeholder {
            color: var(--dbp-placeholder-color);
        }

        /* Work around single selections not wrapping and breaking responsivness */
        .select2-container--default .select2-selection--single {
            height: 100% !important;
        }
        .select2-container--default .select2-selection__rendered{
            word-wrap: break-word !important;
            text-overflow: inherit !important;
            white-space: normal !important;
        }
    `))}class pt extends(De(ve)){constructor(){super(),this.value="",this.type="",this.spinner=!1,this.noSpinnerOnClick=!1,this.disabled=!1}static get scopedElements(){return{"dbp-mini-spinner":ot}}connectedCallback(){super.connectedCallback()}static get properties(){return{value:{type:String},type:{type:String},spinner:{type:Boolean},noSpinnerOnClick:{type:Boolean,attribute:"no-spinner-on-click"},disabled:{type:Boolean,reflect:!0}}}clickHandler(){this.noSpinnerOnClick||this.start()}start(){this.spinner=!0,this.disabled=!0}stop(){this.spinner=!1,this.disabled=!1}isDisabled(){return this.disabled}static get styles(){return be(g||(g=b`
            ${0}
            ${0}

            .spinner { margin-left: 0.5em; }
        `),st(),lt())}render(){return te(m||(m=b`
            <button @click="${0}" class="button ${0}" ?disabled="${0}">
                ${0} <dbp-mini-spinner class="spinner" style="display: ${0}"></dbp-mini-spinner>
            </button>
        `),this.clickHandler,this.type,this.disabled,this.value,this.spinner?"inline":"none")}}De(ve);class ht extends ve{_(e){return null===this.shadowRoot?this.querySelector(e):this.shadowRoot.querySelector(e)}}export{I as A,pt as B,ht as D,nt as I,ve as L,ot as M,J as P,De as S,We as a,He as b,be as c,Je as d,it as e,at as f,st as g,te as h,dt as i,V as j,ct as k,lt as l,me as m,et as n,Ye as o,qe as p,Ge as u};
//# sourceMappingURL=dbp-lit-element.0e6946f2.es.js.map
