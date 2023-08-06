"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[179],{426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: rgb(237, 237, 237);\r\n}\r\n\r\nh1 {\r\n  color: brown;\r\n  font-size: 2rem;\r\n  margin-top: 5%;\r\n  margin-left: 5%;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.scoresList li {\r\n  padding: 3px;\r\n  font-weight: 500;\r\n}\r\n\r\n.scoresList li:nth-child(even) {\r\n  background-color: white;\r\n}\r\n\r\n.form h2 {\r\n  margin-bottom: 5%;\r\n}\r\n\r\ninput[type=text] {\r\n  border-color: brown;\r\n}\r\n\r\n.scores {\r\n  display: flex;\r\n  margin-left: 5%;\r\n}\r\n\r\n.scores h2 {\r\n  width: 200px;\r\n}\r\n\r\n.data {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.left {\r\n  width: 45%;\r\n  margin-left: 5%;\r\n}\r\n\r\n.right {\r\n  width: 40%;\r\n  margin-left: 5%;\r\n}\r\n\r\n.button {\r\n  width: 90px;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  font-size: 0.9rem;\r\n  height: 35px;\r\n}\r\n\r\n.button:hover {\r\n  background-color: rgb(249, 143, 13);\r\n  border-radius: 5px;\r\n}\r\n\r\n.scoresList {\r\n  border: 2px solid brown;\r\n  margin-top: 3%;\r\n  height: 50%;\r\n  overflow: auto;\r\n  list-style: none;\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=t.base?c[0]+t.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),u=0;u<a.length;u++){var d=e(a[u]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},987:(n,r,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),s=e(569),c=e.n(s),u=e(565),d=e.n(u),l=e(216),p=e.n(l),f=e(589),m=e.n(f),h=e(426),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const g="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/",y=document.querySelector(".refresh"),b=document.querySelector("#name"),w=document.querySelector("#score"),x=document.querySelector("form");x.addEventListener("submit",(n=>{n.preventDefault();const r=b.value,e=w.value;(r||e)&&((async(n,r)=>{const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n,score:r})},t=await fetch(g,e);await t.json()})(r,e),x.reset())}));const S=async()=>{let n=await L(),r="";n.result.forEach((n=>{r+=`<li>${n.user} : ${n.score}</li>`})),document.querySelector(".scoresList").innerHTML=r},L=async()=>{const n=await fetch(g),r=await n.json();return S(),r};y.addEventListener("click",(n=>{n.preventDefault(),S()})),S()}},n=>{n(n.s=987)}]);