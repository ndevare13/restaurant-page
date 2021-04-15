(()=>{var n={402:(n,e,t)=>{"use strict";t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"body {\n    margin: 0;\n    padding: 0;\n    /* overflow: hidden; */\n    width: 100vw;\n    height: 100vh;\n    font-family: 'Cardo', serif;\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n}\n\n#nav-bar {\n    display: flex;\n    flex-direction: row;\n    margin: 0;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: black;\n}\n\n#nav-bar h1 {\n    padding-top: 15px;\n    margin: 0px 30px;\n    font-size: 3.5em;\n    color: white;\n    font-family: 'Cedarville Cursive', cursive;\n}\n\ndiv>ul {\n    display: flex;\n    flex-direction: row;\n    text-decoration: inherit;\n}\n\ndiv>ul>li {\n    list-style: none;\n}\n\ndiv>ul>li>a {\n    display: inline-block;\n    padding: 20px 30px 5px;\n    text-decoration: solid;\n    font-size: 1.5em;\n    color: white;\n}\n\n.push-right {\n    margin-left: auto;\n}\n\n.adjust-left {\n    margin-right: 8em !important;\n}\n\n.button-element {\n    border-style: solid;\n    border-color: white;\n    border-radius: 35px;\n}\n\n#button-nav-div a:hover {\n    background-color: white;\n    border-radius: 30px;\n    color: black;\n    transition: 0.1s;\n}\n\n#button-nav-div>ul>li {\n    margin: 0;\n}\n\n#button-nav-div ul {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    grid-gap: 2em;\n}\n\n#button-nav-div ul a {\n    display: inline-block;\n    padding: 20px 30px;\n    text-decoration: solid;\n    font-size: 1.5em;\n    color: white;\n}\n\n#main-img {\n    display: block;\n    width: 500px;\n    height: 709px;\n    position: absolute;\n    top: 14%;\n    left: 10%;\n}\n\n#background-image {\n    width: 100vw;\n    height: 50vh;\n    background-color: #36454f;\n}",""]);const i=o},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},962:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});var r=t(379),o=t.n(r),i=t(402);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(n,e,t)=>{"use strict";var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],o=0;o<n.length;o++){var l=n[o],c=e.base?l[0]+e.base:l[0],d=t[c]||0,s="".concat(c," ").concat(d);t[c]=d+1;var u=a(s),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:s,updater:h(f,e),references:1}),r.push(s)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,s=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,v=0;function h(n,e){var t,r,o;if(e.singleton){var i=v++;t=p||(p=c(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var c=l(n,e),d=0;d<t.length;d++){var s=a(t[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=c}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t(962),console.log("Hi!"),console.log("Hello!")})();