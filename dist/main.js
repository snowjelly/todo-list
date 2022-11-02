(()=>{"use strict";var e={661:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),d=t.n(c),s=new URL(t(810),t.b),l=new URL(t(734),t.b),p=new URL(t(513),t.b),u=a()(o()),m=d()(s),h=d()(l),f=d()(p);u.push([e.id,'html, body, #content{\n  height: 100%;\n}\n\nul, li{\n  list-style: none;\n}\n\nbody, ul, li, p{\n  padding: 0;\n  margin: 0;\n}\n\n#content{\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: min-content;\n  grid-template-areas:\n  "header header"\n  "sidebar view"\n  ;\n}\n\n#view-container{\n  display: flex;\n  justify-content: center;\n  grid-area: view;\n}\n\n#view-content{\n  display: flex;\n  flex-direction: column;\n}\n\n#sidebar-content{\n  padding-top: 2rem;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n#sidebar-container{\n  grid-area: sidebar;\n}\n\n#filter-inbox{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 5px;\n  background-color: #e11d48;\n}\n\n#header{\n  background-color: #be123c;\n  grid-area: header;\n}\n\n.todo-list-item{\n  display: flex;\n}\n\n.checkbox{\n  background-image: url('+m+");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}\n\n.checkbox:hover{\n  background-image: url("+h+");\n}\n\n.inbox-image{\n  background-image: url("+f+");\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n}",""]);const v=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},513:(e,n,t)=>{e.exports=t.p+"6ccb025cc6c2b4c6e041.png"},734:(e,n,t)=>{e.exports=t.p+"f876ebc1956ac4f6a367.png"},810:(e,n,t)=>{e.exports=t.p+"6c105356c3c5d9dc4b69.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(661),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"6ff58c74bd8563f7e59a.png";(()=>{const e=document.querySelector("#content"),n=(()=>{const e=document.createElement("div");e.id="header";const n=document.createElement("img");return n.src=f,n.id="sidebar-hamburger-menu",e.appendChild(n),e})(),t=(()=>{const e=document.createElement("div");e.id="sidebar-container";const n=document.createElement("div");return n.id="sidebar-content",(()=>{const e=document.createElement("ul");e.id="top-menu";const t=document.createElement("li");t.id="filter-inbox";const r=document.createElement("div");r.classList.value="inbox-image",t.appendChild(r);const o=document.createElement("p");o.textContent="Inbox",t.appendChild(o),e.appendChild(t),n.appendChild(e)})(),e.appendChild(n),e})();e.appendChild(n),e.appendChild(t),(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.id="view-container";const t=document.createElement("div");t.id="view-content",n.appendChild(t),(()=>{const e=document.createElement("div");e.id="view-header-container",t.appendChild(e);const n=document.createElement("div");n.id="view-header-content",n.innerHTML="\n    <h1>viewHeader</h1>\n    ",e.appendChild(n)})(),(()=>{const e=document.createElement("div");e.id="view-list-container",t.appendChild(e);const n=document.createElement("div");n.id="view-list-content";const r=document.createElement("ul");r.id="view-list",(()=>{const e=document.createElement("li");e.classList.value="todo-list-item";const n=document.createElement("div");n.classList.value="checkbox",e.appendChild(n);const t=document.createElement("p");t.textContent="\n      Lorem ipsum dolor sit amet.",e.appendChild(t),r.appendChild(e)})(),n.appendChild(r),e.appendChild(n)})(),e.appendChild(n)})()})()})()})();