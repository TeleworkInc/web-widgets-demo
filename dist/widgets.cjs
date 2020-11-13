var c=c||{};c.scope={};c.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};c.arrayIterator=function(a){return{next:c.arrayIteratorImpl(a)}};c.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):c.arrayIterator(a)};
c.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};c.global=c.getGlobal(this);c.ASSUME_ES5=!1;c.ASSUME_NO_NATIVE_MAP=!1;c.ASSUME_NO_NATIVE_SET=!1;c.SIMPLE_FROUND_POLYFILL=!1;c.ISOLATE_POLYFILLS=!1;
c.defineProperty=c.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};c.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");c.TRUST_ES6_POLYFILLS=!c.ISOLATE_POLYFILLS||c.IS_SYMBOL_NATIVE;c.polyfills={};c.propertyToPolyfillSymbol={};c.POLYFILL_PREFIX="$jscp$";
c.polyfill=function(a,b,d,e){b&&(c.ISOLATE_POLYFILLS?c.polyfillIsolated(a,b,d,e):c.polyfillUnisolated(a,b,d,e))};c.polyfillUnisolated=function(a,b){var d=c.global;a=a.split(".");for(var e=0;e<a.length-1;e++){var f=a[e];f in d||(d[f]={});d=d[f]}a=a[a.length-1];e=d[a];b=b(e);b!=e&&null!=b&&c.defineProperty(d,a,{configurable:!0,writable:!0,value:b})};
c.polyfillIsolated=function(a,b,d){var e=a.split(".");a=1===e.length;var f=e[0];f=!a&&f in c.polyfills?c.polyfills:c.global;for(var h=0;h<e.length-1;h++){var z=e[h];z in f||(f[z]={});f=f[z]}e=e[e.length-1];d=c.IS_SYMBOL_NATIVE&&"es6"===d?f[e]:null;b=b(d);null!=b&&(a?c.defineProperty(c.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==d&&(c.propertyToPolyfillSymbol[e]=c.IS_SYMBOL_NATIVE?c.global.Symbol(e):c.POLYFILL_PREFIX+e,e=c.propertyToPolyfillSymbol[e],c.defineProperty(f,e,{configurable:!0,
writable:!0,value:b})))};c.FORCE_POLYFILL_PROMISE=!1;c.initSymbol=function(){};c.initSymbolIterator=function(){};c.initSymbolAsyncIterator=function(){};c.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};c.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(d){}return!1};
c.setPrototypeOf=c.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:c.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;c.generator={};c.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};
c.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};c.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};c.generator.Context.prototype.stop_=function(){this.isRunning_=!1};
c.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};c.generator.Context.prototype.next_=function(a){this.yieldResult=a};c.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};c.generator.Context.prototype.return=function(a){this.abruptCompletion_={return:a};this.nextAddress=this.finallyAddress_};
c.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};c.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};c.generator.Context.prototype.yieldAll=function(a,b){a=c.makeIterator(a);var d=a.next();c.generator.ensureIteratorResultIsObject_(d);if(d.done)this.yieldResult=d.value,this.nextAddress=b;else return this.yieldAllIterator_=a,this.yield(d.value,b)};
c.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};c.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};c.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};c.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};c.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
c.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};c.generator.Context.prototype.enterFinallyBlock=function(a,b,d){d?this.finallyContexts_[d]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
c.generator.Context.prototype.leaveFinallyBlock=function(a,b){b=this.finallyContexts_.splice(b||0)[0];if(b=this.abruptCompletion_=this.abruptCompletion_||b){if(b.isException)return this.jumpToErrorHandler_();void 0!=b.jumpTo&&this.finallyAddress_<b.jumpTo?(this.nextAddress=b.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};c.generator.Context.prototype.forIn=function(a){return new c.generator.Context.PropertyIterator(a)};
c.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};c.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};c.generator.Engine_=function(a){this.context_=new c.generator.Context;this.program_=a};
c.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};c.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(a){return{value:a,done:!0}},a,this.context_.return);this.context_.return(a);return this.nextStep_()};
c.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
c.generator.Engine_.prototype.yieldAllStep_=function(a,b,d){try{var e=a.call(this.context_.yieldAllIterator_,b);c.generator.ensureIteratorResultIsObject_(e);if(!e.done)return this.context_.stop_(),e;var f=e.value}catch(h){return this.context_.yieldAllIterator_=null,this.context_.throw_(h),this.nextStep_()}this.context_.yieldAllIterator_=null;d.call(this.context_,f);return this.nextStep_()};
c.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a.return,done:!0}}return{value:void 0,done:!0}};
c.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this.throw=function(b){return a.throw_(b)};this.return=function(b){return a.return_(b)};this[Symbol.iterator]=function(){return this}};c.generator.createGenerator=function(a,b){b=new c.generator.Generator_(new c.generator.Engine_(b));c.setPrototypeOf&&c.setPrototypeOf(b,a.prototype);return b};
c.asyncExecutePromiseGenerator=function(a){function b(b){return a.next(b)}function d(b){return a.throw(b)}return new Promise(function(e,f){function h(a){a.done?e(a.value):Promise.resolve(a.value).then(b,d).then(h,f)}h(a.next())})};c.asyncExecutePromiseGeneratorFunction=function(a){return c.asyncExecutePromiseGenerator(a())};c.asyncExecutePromiseGeneratorProgram=function(a){return c.asyncExecutePromiseGenerator(new c.generator.Generator_(new c.generator.Engine_(a)))};
c.polyfill("globalThis",function(a){return a||c.global},"es_2020","es3");c.polyfill("Array.prototype.flat",function(a){return a?a:function(a){a=void 0===a?1:a;for(var b=[],e=0;e<this.length;e++){var f=this[e];Array.isArray(f)&&0<a?(f=Array.prototype.flat.call(f,a-1),b.push.apply(b,f)):b.push(f)}return b}},"es9","es5");
c.polyfill("Array.prototype.includes",function(a){return a?a:function(a,d){var b=this;b instanceof String&&(b=String(b));var f=b.length;d=d||0;for(0>d&&(d=Math.max(d+f,0));d<f;d++){var h=b[d];if(h===a||Object.is(h,a))return!0}return!1}},"es7","es3");c.owns=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};c.polyfill("Object.entries",function(a){return a?a:function(a){var b=[],e;for(e in a)c.owns(a,e)&&b.push([e,a[e]]);return b}},"es8","es3");
Object.defineProperty(exports,"__esModule",{value:!0});"undefined"===typeof goog&&(globalThis.goog={define:(a,b)=>b});let g=[],k=[],l=(a,b)=>{if(b.name)return b.name;for(let d in a)if(a[d]===b)return d;return null};function m(...a){return class extends n{static get classes(){return[...new Set([...a.map(a=>a.classes).flat(),...super.classes])]}static get styleString(){return a.map(a=>a.styles).join("\n")}static get attributes(){let b={};for(let d of a)Object.assign(b,d.attributes);return b}}}
class p{constructor(){this.tag=this.constructor.tag;this.attributes=Object.assign({},this.constructor.attributes);this.classNames=[...this.constructor.classNames]}static get attributes(){return{}}static get tag(){return""}static get inheritedClasses(){return Object.getPrototypeOf(this).classes||[]}static get classes(){return[...[...new Set([this,...this.inheritedClasses])].filter(a=>a!==p)]}static get classNames(){return[...new Set(this.classes.map(a=>a.name))]}}
class n extends p{constructor(...a){super();this.constructor.name in globalThis||(globalThis[this.constructor.name]=this.constructor);this.frozen=!1;this.listeners=[];this.element=null;this.children=a;this.tag=this.constructor.tag||"w";this.styles=[]}static get styles(){return["transition: all 1s ease-in-out","box-sizing: border-box"]}static exportStyles(){let a=this.name,b=this.styles.join(";").replace(/(\s{2,}|\n+)/g," ").trim();k.includes(a)||(b&&(g.push(`.${a} {${b}}`),k.push(a)),this.inheritedClasses.forEach(a=>
a.exportStyles()))}static from(a){let b=new this,d={},e=["class","style"];b.element=a;b.tag=a.tagName.toLowerCase();b.classNames=Array.from(a.classList);for(let b of Array.from(a.attributes)){a=b.name;let f=b.value;e.includes(a)||(d[a]=f)}b.setAttributes(d);return b}bindListeners(){if(this.element)for(let a of this.listeners){let [b,d]=a;this.element.addEventListener(b,d)}return this}on(a,b){this.listeners.push([a,b]);return this}set(a){a=void 0===a?{}:a;let b=a.attributes||{};return this.setStyles(...a.styles||
[]).setAttributes(b)}animate(a,b,d){d=void 0===d?"0.2s ease-in":d;const e=this;return c.asyncExecutePromiseGeneratorFunction(function*(){yield new Promise(f=>{requestAnimationFrame(()=>{e.element.style.setProperty("transform",`${a} ${d}`);e.element.style.setProperty(a,b);f()})});return e})}applyAttributes(){if(this.attributes)for(let a of Object.entries(this.attributes)){let [b,d]=a;this.element.setAttribute(b,d)}return this}applyClasses(){let a=this.classNames;a.length&&(this.element.className=a.join(" "));
return this}applyStyles(){let a=this.styles.join(";").replace(/(\s{2,}|\n+)/g," ").trim();a&&this.element.setAttribute("style",a);return this}build(){return this}createElement(){this.element=document.createElement(this.tag);return this}freeze(){return this.freezeMode().render().element.outerHTML}freezeMode(){this.frozen=!0;return this}initState(){}constructElement(){this.constructor.exportStyles();return this.createElement().applyAttributes().applyClasses().applyStyles()}render(a){a=void 0===a?this.element:
a;let b=this.build();b.constructElement().renderChildren();a&&a.replaceWith(b.element);this.element=b.element;return b.bindListeners()}renderChildren(){this.children.length&&this.children.forEach(a=>{switch(typeof a){case "string":case "number":a=new q(a.toString());break;case "undefined":case "null":return this}this.frozen&&(a=a.freezeMode());this.element.appendChild(a.render().element)});return this}replaceElement(a){this.element?this.element.replaceWith(a):this.element=a;return this}replaceText(a){a=
document.createTextNode(a);return this.replaceElement(a)}setAttributes(a){a=void 0===a?{}:a;Object.assign(this.attributes||{},a);return this}setClasses(...a){this.classNames.push(...a);return this}setStyles(...a){this.styles.push(...a);return this}}
class r extends n{constructor(...a){super(...a);this.state={};this.initState()}embedStateLogicIfFrozen(){if(this.frozen){let b=document.createElement("script");var a=this.constructor;a="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+`${l(globalThis,a)}`+`.${l(a,a.from)}(el)`+`.${l(a.prototype,a.prototype.render)}();});})();`;b.setAttribute("async",!0);b.appendChild(document.createTextNode(a));this.element.appendChild(b)}return this}render(a){a=void 0===a?this.element:
a;super.render(a);return this.embedStateLogicIfFrozen()}initState(){}setState(a){return()=>{a(this.state);this.render()}}}class aa extends n{constructor(a){super();this.text=a}build(){return this.replaceText(this.text)}}class q extends n{constructor(a){super();this.text=a}render(){this.element=document.createTextNode(this.text);return this}}
class ba extends n{static get styles(){return["box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"]}}class t extends n{static get styles(){return["box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.12),0 1px 5px 0 rgba(0, 0, 0, 0.20);"]}}class ca extends n{static get styles(){return["display: block;"]}}class da extends n{static get styles(){return["padding: 16px;"]}}
class ea extends n{static get styles(){return["position: relative;"]}}class fa extends n{static get styles(){return["position: absolute;"]}}class ha extends n{static get styles(){return["position: fixed;"]}}class u extends n{static get styles(){return["width: 100%;"]}}class ia extends n{static get styles(){return["height: 100%;"]}}class v extends n{}class w extends v{static get tag(){return"h1"}static get styles(){return["font-size: 2.5rem"]}}
class x extends v{static get tag(){return"h2"}static get styles(){return["font-size: 1.25rem"]}}class y extends n{static get styles(){return["\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n  "]}setFlex(a){return this.setStyles(`flex-grow: ${void 0===a?1:a};`)}}class A extends y{static get styles(){return["margin: auto","align-items: center","justify-content: center","text-align: center"]}}
class B extends y{static get styles(){return"flex-basis: 0;flex-grow: 1;flex-shrink: 0;width: 100%;height: 100%;max-height: 100%;max-height: -moz-available;max-height: -webkit-fill-available;max-height: fill-available;margin: 0px;padding: 0px".split(";")}}class ja extends B{static get styles(){return["flex-direction: column !important;"]}}class ka extends B{static get styles(){return["flex-direction: row !important;"]}}class la extends B{}
class ma extends y{static get styles(){return["\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "]}}class C extends v{static get styles(){return["color: black;"]}}class na extends v{static get styles(){return["font-weight: bold;"]}}class oa extends n{static get tag(){return"img"}constructor(a){super();this.setAttributes({src:a})}}class pa extends B{constructor(a){super();this.setStyles(`background-image: url(${a});`)}}
class qa extends n{static get styles(){return["height: 80px;"]}}class ra extends C{static get styles(){return["opacity: 0.5;"]}}class sa extends r{static get styles(){return["opacity: 0","transition: opacity 0.1s ease-in"]}render(a){super.render(a);requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.element.style.opacity=1})});return this}}
class ta extends n{static get tag(){return"i"}static get styles(){return["\n            font-size: 36px;\n            user-select: none;\n        "]}constructor(a){super(a);this.setClasses("material-icons")}}class ua extends u{static get styles(){return["\n            display: table;\n            overflow: scroll;\n        "]}}class D extends n{render(a){this.classNames=[];return super.render(a)}}class E extends D{static get tag(){return"head"}}class F extends D{static get tag(){return"title"}}
class G extends D{static get tag(){return"link"}static get attributes(){return{rel:"stylesheet"}}constructor(a){a=void 0===a?{}:a;super();this.setAttributes(a)}}class H extends D{static get tag(){return"meta"}constructor(a){super().setAttributes(a)}}
class I extends n{static get tag(){return"html"}static get styles(){return["\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"]}constructor(...a){super(...a)}exportStylesheet(){let a=document.createElement("style");a.setAttribute("defer",!0);a.appendChild(document.createTextNode(g.join("\n")));this.element.querySelector("head").appendChild(a);return this}freeze(){return`<!DOCTYPE html>${super.freeze()}`}render(){super.render(document.documentElement);
return this.exportStylesheet()}}class J extends n{static get tag(){return"body"}static get styles(){return["\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"]}}class K extends n{createElement(){this.element=document.createDocumentFragment();return this}render(){this.constructElement();this.children.forEach(a=>this.element.appendChild(a.render().element));return this}}
class L extends K{constructor(a){a=void 0===a?{href:""}:a;super(new G(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},a)),new M(new G(Object.assign({},a))))}}class N extends L{constructor(a,b){b=void 0===b?[300,400,700]:b;super({href:`https://fonts.googleapis.com/css2?family=${(void 0===a?"Lato":a).replace(" ","+")}:wght@${b.join(";")}&display=swap`})}}class O extends n{static get tag(){return"input"}}
class va extends O{static get attributes(){return{type:"email"}}}class P extends n{static get tag(){return"button"}static get styles(){return["-webkit-user-select: none","-moz-user-select: none","-ms-user-select: none","user-select: none"]}}class wa extends O{static get attributes(){return{type:"submit"}}}class xa extends B{static get styles(){return["justify-content: space-evenly;"]}}class M extends D{static get tag(){return"NoScript"}}
class Q extends D{static get tag(){return"script"}static get attributes(){return{async:!0}}}class R extends Q{static get attributes(){return{inline:!0}}}class S extends R{constructor(a,b){super();this.setAttributes({src:b,async:!0})}}
class T extends E{constructor(...a){super(...[new H({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new H({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new H({name:"viewport",content:"width=device-width, initial-scale=1.0"})],new S("exports/exe.namespace.js","dist/exe.namespace.js"),...a)}}class U extends A{static get styles(){return["height: 100%","max-width: 480px","margin: 0 auto"]}}
class V extends n{static get styles(){return["margin: 12px","padding: 0 1em"]}}class ya extends V{static get tag(){return"p"}static get styles(){return["font-family: 'Roboto', sans-serif","font-size: 18px"]}}class za extends n{static get tag(){return"label"}}class Aa extends A{static get tag(){return"form"}}class W extends t{static get styles(){return["border-radius: 24px","margin: 12px"]}}class Ba extends W{static get styles(){return["background: #222","color: white"]}}
class X extends n{static get tag(){return"path"}static get attributes(){return{d:"M-1.09,7.41 C111.15,151.47 350.85,-49.98 500.00,49.98 L500.00,150.00 L-1.09,143.58 Z"}}}class Ca extends n{constructor(...a){super(new X(...a))}static get tag(){return"svg"}static get attributes(){return{viewBox:"0 0 500 150",preserveAspectRatio:"none"}}static get styles(){return["height: 100%","width: 100%"]}}
class Y extends r{static get styles(){return"background: linear-gradient(to right,#bbdefb var(--scroll),transparent 0);position: fixed;height: 12px;width: 100%;top: 0;left: 0;will-change: transform;transform: translateZ(0);-webkit-transform-style: preserve-3d;-webkit-backface-visibility: hidden;-webkit-transform:translate3d(0,0,0);-webkit-transform-style: preserve-3d;-webkit-perspective: 1000;-webkit-transform: translateZ(0)".split(";")}render(a){a=void 0===a?this.element:a;super.render(a);requestAnimationFrame(()=>
{let a=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),d=Math.max(document.body.clientHeight,document.documentElement.clientHeight),e=!1,f=0;document.addEventListener("scroll",()=>{e||(f=100*window.pageYOffset/(a-d),e=!0,requestAnimationFrame(()=>{this.element.style.setProperty("--scroll",`${f}%`);e=!1}))},{passive:!0})});return this}}
class Da extends n{static get styles(){return["font-family: 'Work Sans', sans-serif","font-size: 4rem"]}}
class Ea extends P{static get styles(){return"cursor: pointer;padding: 12px;margin: 48px;width: 100%;min-height: 48px;min-width: 88px;max-width: 240px;text-align: center;text-transform: uppercase;text-decoration: none;border: none;border-radius: 12px;outline: none;background: linear-gradient(-45deg, #003c8f, #1565c0);color: #fafafa;box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);font-size: 14px;font-size: 1.25rem;font-family: 'Lato', sans-serif;font-weight: bold".split(";")}}
class Z extends r{initState(){this.state.count=0}build(){return new A(new Da(this.state.count),(new Ea("PRESS ME")).on("click",this.setState(()=>this.state.count++)))}}
new I(new T(new F("Web Widgets Demo"),new N("Work Sans",[800]),new N("Public Sans",[400])),new J(new Y,(new B(new A(new U((new w("Welcome to Web Widgets")).setStyles("color: white","font-family: 'Work Sans', sans-serif","font-weight: 800"),(new x("This stateful layout was shipped as 7kB of static, gzipped data from the edge with Google Cloud CDN.")).setStyles("color: white","font-family: 'Public Sans', sans-serif","font-weight: 400"))))).setStyles("background: linear-gradient(to top left, #003c8f, #bbdefb)",
"padding: 2rem"),(new B(new U((new w("Thanks for checking it out!")).setStyles("color: #003c8f","text-align: center","font-family: 'Work Sans', sans-serif","font-weight: 800"),new Z))).setStyles("padding: 2rem")));
var Fa={Absolute:fa,AsyncStylesheet:L,Block:ca,BodyWidget:J,BoldText:na,BottomBar:qa,Button:P,Card:ma,Center:A,Column:ja,CounterView:Z,DarkMaterial:Ba,DarkText:C,DebugScript:S,DocumentFragmentWidget:K,Elevation1:ba,Elevation2:t,EmailInput:va,Expanded:B,FadeIn:sa,Fixed:ha,Flex:y,FlexImg:pa,FormWidget:Aa,FullHeight:ia,FullWidth:u,GoogleFont:N,GreyText:ra,HTMLWidget:I,Head:E,Heading1:w,Heading2:x,Img:oa,Inheritable:p,InlineScript:R,InputWidget:O,LabelWidget:za,List:ua,MarginText:V,Material:W,MaterialIcon:ta,
Meta:H,Mix:m,NoScript:M,Padding:da,PageView:U,ParagraphWidget:ya,Relative:ea,Row:ka,Script:Q,ScrollIndicator:Y,Slide:la,SpaceEvenly:xa,StandardHeadWidget:T,StatefulWidget:r,Stylesheet:G,SubmitButton:wa,TextNode:aa,TextNodeTest:q,TextWidget:v,Title:F,UnstyledWidget:D,WavesPath:X,WavesSVG:Ca,Widget:n,WidgetLike:void 0};exports.Absolute=fa;exports.AsyncStylesheet=L;exports.Block=ca;exports.BodyWidget=J;exports.BoldText=na;exports.BottomBar=qa;exports.Button=P;exports.Card=ma;exports.Center=A;
exports.Column=ja;exports.CounterView=Z;exports.DarkMaterial=Ba;exports.DarkText=C;exports.DebugScript=S;exports.DocumentFragmentWidget=K;exports.Elevation1=ba;exports.Elevation2=t;exports.EmailInput=va;exports.Expanded=B;exports.FadeIn=sa;exports.Fixed=ha;exports.Flex=y;exports.FlexImg=pa;exports.FormWidget=Aa;exports.FullHeight=ia;exports.FullWidth=u;exports.GoogleFont=N;exports.GreyText=ra;exports.HTMLWidget=I;exports.Head=E;exports.Heading1=w;exports.Heading2=x;exports.Img=oa;
exports.Inheritable=p;exports.InlineScript=R;exports.InputWidget=O;exports.LabelWidget=za;exports.List=ua;exports.MarginText=V;exports.Material=W;exports.MaterialIcon=ta;exports.Meta=H;exports.Mix=m;exports.NoScript=M;exports.Padding=da;exports.PageView=U;exports.ParagraphWidget=ya;exports.Relative=ea;exports.Row=ka;exports.Script=Q;exports.ScrollIndicator=Y;exports.Slide=la;exports.SpaceEvenly=xa;exports.StandardHeadWidget=T;exports.StatefulWidget=r;exports.Stylesheet=G;exports.SubmitButton=wa;
exports.TextNode=aa;exports.TextNodeTest=q;exports.TextWidget=v;exports.Title=F;exports.UnstyledWidget=D;exports.WavesPath=X;exports.WavesSVG=Ca;exports.Widget=n;exports.WidgetLike=void 0;exports.default=Fa
