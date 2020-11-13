(function(){/*
 MIT  MIT
*/
'use strict';var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function p(a){if(!(a instanceof Array)){a=n(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var q=da(this);function t(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];if(!(h in c))break a;c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}var ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={D:!0},ia={};try{ia.__proto__=ha;fa=ia.D;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;
function u(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+d++,h)}function c(h,l){this.a=h;ca(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(aa(this))}})}return a});function ka(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
t("globalThis",function(a){return a||q});function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.a=(f+=Math.random()+1).toString();if(e){e=n(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function d(e){var g=typeof e;return"object"===g&&null!==e||"function"===g}function h(e){if(!v(e,r)){var g=new c;ca(e,r,{value:g})}}function l(e){var g=Object[e];g&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&h(m);return g(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),g=Object.seal({}),
m=new a([[e,2],[g,3]]);if(2!=m.get(e)||3!=m.get(g))return!1;m.delete(e);m.set(g,4);return!m.has(e)&&4==m.get(g)}catch(K){return!1}}())return a;var r="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(e,g){if(!d(e))throw Error("Invalid WeakMap key");h(e);if(!v(e,r))throw Error("WeakMap key fail: "+e);e[r][this.a]=g;return this};b.prototype.get=function(e){return d(e)&&v(e,r)?e[r][this.a]:void 0};b.prototype.has=function(e){return d(e)&&v(e,
r)&&v(e[r],this.a)};b.prototype.delete=function(e){return d(e)&&v(e,r)&&v(e[r],this.a)?delete e[r][this.a]:!1};return b});
t("Map",function(a){function b(){var f={};return f.i=f.next=f.head=f}function c(f,e){var g=f.a;return ka(function(){if(g){for(;g.head!=f.a;)g=g.i;for(;g.next!=g.head;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}function d(f,e){var g=e&&typeof e;"object"==g||"function"==g?l.has(e)?g=l.get(e):(g=""+ ++r,l.set(e,g)):g="p_"+e;var m=f.c[g];if(m&&v(f.c,g))for(f=0;f<m.length;f++){var K=m[f];if(e!==e&&K.key!==K.key||e===K.key)return{id:g,list:m,index:f,g:K}}return{id:g,list:m,
index:-1,g:void 0}}function h(f){this.c={};this.a=b();this.size=0;if(f){f=n(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(n([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),m=g.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=g.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!g.next().done?!1:!0}catch(K){return!1}}())return a;var l=new WeakMap;h.prototype.set=function(f,e){f=0===f?0:f;var g=d(this,f);g.list||(g.list=this.c[g.id]=[]);g.g?g.g.value=e:(g.g={next:this.a,i:this.a.i,head:this.a,key:f,value:e},g.list.push(g.g),this.a.i.next=g.g,this.a.i=g.g,this.size++);return this};h.prototype.delete=function(f){f=d(this,f);return f.g&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.c[f.id],f.g.i.next=f.g.next,f.g.next.i=f.g.i,f.g.head=null,this.size--,
!0):!1};h.prototype.clear=function(){this.c={};this.a=this.a.i=b();this.size=0};h.prototype.has=function(f){return!!d(this,f).g};h.prototype.get=function(f){return(f=d(this,f).g)&&f.value};h.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};h.prototype.keys=function(){return c(this,function(f){return f.key})};h.prototype.values=function(){return c(this,function(f){return f.value})};h.prototype.forEach=function(f,e){for(var g=this.entries(),m;!(m=g.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};h.prototype[Symbol.iterator]=h.prototype.entries;var r=0;return h});
t("Set",function(a){function b(c){this.a=new Map;if(c){c=n(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(n([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var h=d.entries(),l=h.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=h.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:h.next().done}catch(r){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var h=this;this.a.forEach(function(l){return c.call(d,l,l,h)})};return b});var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)v(d,h)&&(a[h]=d[h])}return a};t("Object.assign",function(a){return a||la});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var h=d.length;c=c||0;for(0>c&&(c=Math.max(c+h,0));c<h;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var h=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var r=0;!(l=b.next()).done;)h.push(c.call(d,l.value,r++))}else for(l=b.length,r=0;r<l;r++)h.push(c.call(d,b[r],r));return h}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)v(b,d)&&c.push([d,b[d]]);return c}});
"undefined"===typeof goog&&(globalThis.c={define:function(a,b){return b}});var ma=[],na=[];function oa(a,b){if(b.name)return b.name;for(var c in a)if(a[c]===b)return c;return null}function pa(a){return a.join(";").replace(/(\s{2,}|\n+)/g," ").trim()}function qa(){this.o=this.constructor.c;this.attributes=Object.assign({},this.constructor.attributes);this.m=p(this.constructor.m).concat()}
q.Object.defineProperties(qa,{attributes:{configurable:!0,enumerable:!0,get:function(){return{}}},c:{configurable:!0,enumerable:!0,get:function(){return""}},j:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).B||[]}},B:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(p(this.j)));a=p(a).concat().filter(function(b){return b!==qa});return p(a).concat()}},m:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.B.map(function(b){return b.name}));
return p(a).concat()}}});function w(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];qa.call(this);this.constructor.name in globalThis||(globalThis[this.constructor.name]=this.constructor);this.j=!1;this.C=[];this.a=null;this.s=b;this.o=this.constructor.c||"w";this.f=[]}u(w,qa);w.b=function(){var a=this.name,b=pa(this.f);na.includes(a)||(b&&(ma.push("."+a+" {"+b+"}"),na.push(a)),this.j.forEach(function(c){return c.b()}))};
w.a=function(a){var b=new this,c={},d=["class","style"];b.a=a;b.o=a.tagName.toLowerCase();b.m=Array.from(a.classList);a=n(Array.from(a.attributes));for(var h=a.next();!h.done;h=a.next()){var l=h.value;h=l.name;l=l.value;d.includes(h)||(c[h]=l)}x(b,c);return b};function ra(a,b){a.C.push(["click",b]);return a}k=w.prototype;k.set=function(a){a=void 0===a?{}:a;var b=a.attributes||{};return x(this.l.apply(this,p(a.f||[])),b)};k.A=function(){return this};
k.v=function(){this.a=document.createElement(this.o);return this};k.freeze=function(){this.j=!0;return this.h().a.outerHTML};k.u=function(){};function sa(a){a.constructor.b();a=a.v();if(a.attributes)for(var b=n(Object.entries(a.attributes)),c=b.next();!c.done;c=b.next()){var d=n(c.value);c=d.next().value;d=d.next().value;a.a.setAttribute(c,d)}b=a.m;b.length&&(a.a.className=b.join(" "));(b=pa(a.f))&&a.a.setAttribute("style",b);return a}
k.h=function(a){a=void 0===a?this.a:a;var b=this.A();ta(sa(b));a&&a.replaceWith(b.a);if(this.a=b.a){a=n(b.C);for(var c=a.next();!c.done;c=a.next()){var d=n(c.value);c=d.next().value;d=d.next().value;b.a.addEventListener(c,d)}}return b};function ta(a){a.s.length&&a.s.forEach(function(b){switch(typeof b){case "string":case "number":b=new y(b.toString());break;case "undefined":case "null":return a}a.j&&(b.j=!0);a.a.appendChild(b.h().a)})}
function x(a,b){b=void 0===b?{}:b;Object.assign(a.attributes||{},b);return a}k.l=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];this.f.push.apply(this.f,p(b));return this};q.Object.defineProperties(w,{f:{configurable:!0,enumerable:!0,get:function(){return["transition: all 1s ease-in-out","box-sizing: border-box"]}}});function z(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];w.apply(this,p(b).concat());this.c={};this.u()}u(z,w);z.a=w.a;z.b=w.b;
z.prototype.h=function(a){a=void 0===a?this.a:a;w.prototype.h.call(this,a);if(this.j){a=document.createElement("script");var b=this.constructor;b="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+oa(globalThis,b)+("."+oa(b,b.a)+"(el).")+(oa(b.prototype,b.prototype.h)+"();});})();");a.setAttribute("async",!0);a.appendChild(document.createTextNode(b));this.a.appendChild(a)}return this};z.prototype.u=function(){};
function ua(a,b){return function(){b(a.c);a.h()}}function y(a){w.call(this);this.text=a}u(y,w);y.a=w.a;y.b=w.b;y.prototype.h=function(){this.a=document.createTextNode(this.text);return this};function A(){w.apply(this,arguments)}u(A,w);A.a=w.a;A.b=w.b;function B(){A.apply(this,arguments)}u(B,A);B.a=A.a;B.b=A.b;q.Object.defineProperties(B,{c:{configurable:!0,enumerable:!0,get:function(){return"h1"}},f:{configurable:!0,enumerable:!0,get:function(){return["font-size: 2.5rem"]}}});
function C(){A.apply(this,arguments)}u(C,A);C.a=A.a;C.b=A.b;q.Object.defineProperties(C,{c:{configurable:!0,enumerable:!0,get:function(){return"h2"}},f:{configurable:!0,enumerable:!0,get:function(){return["font-size: 1.25rem"]}}});function D(){w.apply(this,arguments)}u(D,w);D.a=w.a;D.b=w.b;q.Object.defineProperties(D,{f:{configurable:!0,enumerable:!0,get:function(){return["\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n  "]}}});
function E(){D.apply(this,arguments)}u(E,D);E.a=D.a;E.b=D.b;q.Object.defineProperties(E,{f:{configurable:!0,enumerable:!0,get:function(){return["margin: auto","align-items: center","justify-content: center","text-align: center"]}}});function F(){D.apply(this,arguments)}u(F,D);F.a=D.a;F.b=D.b;q.Object.defineProperties(F,{f:{configurable:!0,enumerable:!0,get:function(){return"flex-basis: 0;flex-grow: 1;flex-shrink: 0;width: 100%;height: 100%;max-height: 100%;max-height: -moz-available;max-height: -webkit-fill-available;max-height: fill-available;margin: 0px;padding: 0px".split(";")}}});
function G(){w.apply(this,arguments)}u(G,w);G.a=w.a;G.b=w.b;G.prototype.h=function(a){this.m=[];return w.prototype.h.call(this,a)};function H(){G.apply(this,arguments)}u(H,G);H.a=G.a;H.b=G.b;q.Object.defineProperties(H,{c:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function I(){G.apply(this,arguments)}u(I,G);I.a=G.a;I.b=G.b;q.Object.defineProperties(I,{c:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function J(a){a=void 0===a?{}:a;G.call(this);x(this,a)}u(J,G);
J.a=G.a;J.b=G.b;q.Object.defineProperties(J,{c:{configurable:!0,enumerable:!0,get:function(){return"link"}},attributes:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function L(a){x((G.call(this),this),a)}u(L,G);L.a=G.a;L.b=G.b;q.Object.defineProperties(L,{c:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function M(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];w.apply(this,p(b).concat())}u(M,w);M.a=w.a;M.b=w.b;
M.prototype.freeze=function(){return"<!DOCTYPE html>"+w.prototype.freeze.call(this)};M.prototype.h=function(){w.prototype.h.call(this,document.documentElement);var a=document.createElement("style");a.setAttribute("defer",!0);a.appendChild(document.createTextNode(ma.join("\n")));this.a.querySelector("head").appendChild(a);return this};q.Object.defineProperties(M,{c:{configurable:!0,enumerable:!0,get:function(){return"html"}},f:{configurable:!0,enumerable:!0,get:function(){return["\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"]}}});
function N(){w.apply(this,arguments)}u(N,w);N.a=w.a;N.b=w.b;q.Object.defineProperties(N,{c:{configurable:!0,enumerable:!0,get:function(){return"body"}},f:{configurable:!0,enumerable:!0,get:function(){return["\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"]}}});function O(){w.apply(this,arguments)}u(O,w);O.a=w.a;O.b=w.b;
O.prototype.v=function(){this.a=document.createDocumentFragment();return this};O.prototype.h=function(){var a=this;sa(this);this.s.forEach(function(b){return a.a.appendChild(b.h().a)});return this};function P(a){a=void 0===a?{href:""}:a;O.call(this,new J(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},a)),new Q(new J(Object.assign({},a))))}u(P,O);P.a=O.a;P.b=O.b;
function R(a,b){b=void 0===b?[300,400,700]:b;P.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}u(R,P);R.a=P.a;R.b=P.b;function S(){w.apply(this,arguments)}u(S,w);S.a=w.a;S.b=w.b;q.Object.defineProperties(S,{c:{configurable:!0,enumerable:!0,get:function(){return"button"}},f:{configurable:!0,enumerable:!0,get:function(){return["-webkit-user-select: none","-moz-user-select: none","-ms-user-select: none","user-select: none"]}}});
function Q(){G.apply(this,arguments)}u(Q,G);Q.a=G.a;Q.b=G.b;q.Object.defineProperties(Q,{c:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});function T(){G.apply(this,arguments)}u(T,G);T.a=G.a;T.b=G.b;q.Object.defineProperties(T,{c:{configurable:!0,enumerable:!0,get:function(){return"script"}},attributes:{configurable:!0,enumerable:!0,get:function(){return{async:!0}}}});function U(){T.apply(this,arguments)}u(U,T);U.a=T.a;U.b=T.b;
q.Object.defineProperties(U,{attributes:{configurable:!0,enumerable:!0,get:function(){return{inline:!0}}}});function va(a,b){U.call(this);x(this,{src:b,async:!0})}u(va,U);va.a=U.a;va.b=U.b;
function wa(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];c=[new L({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new L({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new L({name:"viewport",content:"width=device-width, initial-scale=1.0"})];H.apply(this,p(c).concat([new va("exports/exe.namespace.js","dist/exe.namespace.js")],p(b)))}u(wa,H);wa.a=H.a;wa.b=H.b;function V(){E.apply(this,arguments)}u(V,E);V.a=E.a;V.b=E.b;
q.Object.defineProperties(V,{f:{configurable:!0,enumerable:!0,get:function(){return["height: 100%","max-width: 480px","margin: 0 auto"]}}});function W(){z.apply(this,arguments)}u(W,z);W.a=z.a;W.b=z.b;
W.prototype.h=function(a){var b=this;a=void 0===a?this.a:a;z.prototype.h.call(this,a);requestAnimationFrame(function(){var c=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),d=Math.max(document.body.clientHeight,document.documentElement.clientHeight),h=!1,l=0;document.addEventListener("scroll",function(){h||(l=100*window.pageYOffset/(c-d),h=!0,
requestAnimationFrame(function(){b.a.style.setProperty("--scroll",l+"%");h=!1}))},{passive:!0})});return this};q.Object.defineProperties(W,{f:{configurable:!0,enumerable:!0,get:function(){return"background: linear-gradient(to right,#bbdefb var(--scroll),transparent 0);position: fixed;height: 12px;width: 100%;top: 0;left: 0;will-change: transform;transform: translateZ(0);-webkit-transform-style: preserve-3d;-webkit-backface-visibility: hidden;-webkit-transform:translate3d(0,0,0);-webkit-transform-style: preserve-3d;-webkit-perspective: 1000;-webkit-transform: translateZ(0)".split(";")}}});
function X(){w.apply(this,arguments)}u(X,w);X.a=w.a;X.b=w.b;q.Object.defineProperties(X,{f:{configurable:!0,enumerable:!0,get:function(){return["font-family: 'Work Sans', sans-serif","font-size: 4rem"]}}});function Y(){S.apply(this,arguments)}u(Y,S);Y.a=S.a;Y.b=S.b;q.Object.defineProperties(Y,{f:{configurable:!0,enumerable:!0,get:function(){return"cursor: pointer;padding: 12px;margin: 48px;width: 100%;min-height: 48px;min-width: 88px;max-width: 240px;text-align: center;text-transform: uppercase;text-decoration: none;border: none;border-radius: 12px;outline: none;background: linear-gradient(-45deg, #003c8f, #1565c0);color: #fafafa;box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);font-size: 14px;font-size: 1.25rem;font-family: 'Lato', sans-serif;font-weight: bold".split(";")}}});
function Z(){z.apply(this,arguments)}u(Z,z);Z.a=z.a;Z.b=z.b;Z.prototype.u=function(){this.c.count=0};Z.prototype.A=function(){var a=this;return new E(new X(this.c.count),ra(new Y("PRESS ME"),ua(this,function(){return a.c.count++})))};
var xa=new M(new wa(new I("Web Widgets Demo"),new R("Work Sans",[800]),new R("Public Sans",[400])),new N(new W,(new F(new E(new V((new B("Welcome to Web Widgets")).l("color: white","font-family: 'Work Sans', sans-serif","font-weight: 800"),(new C("This stateful layout was shipped as 7kB of static, gzipped data from the edge with Google Cloud CDN.")).l("color: white","font-family: 'Public Sans', sans-serif","font-weight: 400"))))).l("background: linear-gradient(to top left, #003c8f, #bbdefb)","padding: 2rem"),
(new F(new V((new B("Thanks for checking it out!")).l("color: #003c8f","text-align: center","font-family: 'Work Sans', sans-serif","font-weight: 800"),new Z))).l("padding: 2rem")));globalThis.a=!0;globalThis.NO_RENDER=!0;requestAnimationFrame(function(){return console.log(xa.freeze())});}).call(this);
