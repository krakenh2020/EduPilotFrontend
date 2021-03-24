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
 */
import{A as t,j as e,k as s,P as a}from"./logger.da18e832.es.js";class o extends t{_(t){return null===this.shadowRoot?this.querySelector(t):this.shadowRoot.querySelector(t)}}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class c{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach((e=>t+=e+" ")),this.element.setAttribute("class",t)}}}const i=new WeakMap,n=e((t=>e=>{if(!(e instanceof s)||e instanceof a||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:o}=e,{element:n}=o;let r=i.get(e);void 0===r&&(n.setAttribute("class",o.strings.join(" ")),i.set(e,r=new Set));const l=n.classList||new c(n);r.forEach((e=>{e in t||(l.remove(e),r.delete(e))}));for(const e in t){const s=t[e];s!=r.has(e)&&(s?(l.add(e),r.add(e)):(l.remove(e),r.delete(e)))}"function"==typeof l.commit&&l.commit()}));export{o as D,n as c};
//# sourceMappingURL=class-map.2d9141b5.es.js.map
