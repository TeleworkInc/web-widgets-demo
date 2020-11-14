#!/usr/bin/env node
import require$$0 from'events';import require$$1 from'child_process';import path from'path';import fs from'fs';import require$$2 from'util';var f=f||{};f.scope={};f.createTemplateTagFirstArg=function(a){return a.raw=a};f.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};f.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};f.arrayIterator=function(a){return{next:f.arrayIteratorImpl(a)}};f.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):f.arrayIterator(a)};
f.arrayFromIterator=function(a){for(var b,d=[];!(b=a.next()).done;)d.push(b.value);return d};f.arrayFromIterable=function(a){return a instanceof Array?a:f.arrayFromIterator(f.makeIterator(a))};f.ASSUME_ES5=!1;f.ASSUME_NO_NATIVE_MAP=!1;f.ASSUME_NO_NATIVE_SET=!1;f.SIMPLE_FROUND_POLYFILL=!1;f.ISOLATE_POLYFILLS=!1;f.objectCreate=f.ASSUME_ES5||"function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};
f.defineProperty=f.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};f.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};f.global=f.getGlobal(void 0);
f.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");f.TRUST_ES6_POLYFILLS=!f.ISOLATE_POLYFILLS||f.IS_SYMBOL_NATIVE;f.polyfills={};f.propertyToPolyfillSymbol={};f.POLYFILL_PREFIX="$jscp$";f.polyfill=function(a,b,d,e){b&&(f.ISOLATE_POLYFILLS?f.polyfillIsolated(a,b,d,e):f.polyfillUnisolated(a,b,d,e))};
f.polyfillUnisolated=function(a,b){var d=f.global;a=a.split(".");for(var e=0;e<a.length-1;e++){var c=a[e];c in d||(d[c]={});d=d[c]}a=a[a.length-1];e=d[a];b=b(e);b!=e&&null!=b&&f.defineProperty(d,a,{configurable:!0,writable:!0,value:b})};
f.polyfillIsolated=function(a,b,d){var e=a.split(".");a=1===e.length;var c=e[0];c=!a&&c in f.polyfills?f.polyfills:f.global;for(var m=0;m<e.length-1;m++){var h=e[m];h in c||(c[h]={});c=c[h]}e=e[e.length-1];d=f.IS_SYMBOL_NATIVE&&"es6"===d?c[e]:null;b=b(d);null!=b&&(a?f.defineProperty(f.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==d&&(f.propertyToPolyfillSymbol[e]=f.IS_SYMBOL_NATIVE?f.global.Symbol(e):f.POLYFILL_PREFIX+e,e=f.propertyToPolyfillSymbol[e],f.defineProperty(c,e,{configurable:!0,
writable:!0,value:b})))};f.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(d){}return!1};f.setPrototypeOf=f.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:f.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;
f.inherits=function(a,b){a.prototype=f.objectCreate(b.prototype);a.prototype.constructor=a;if(f.setPrototypeOf){var d=f.setPrototypeOf;d(a,b)}else for(d in b)if("prototype"!=d)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d];a.superClass_=b.prototype};f.checkEs6ConformanceViaProxy=function(){try{var a={},b=Object.create(new f.global.Proxy(a,{get:function(d,e,c){return d==a&&"q"==e&&c==b}}));return!0===b.q}catch(d){return!1}};
f.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS=!1;f.ES6_CONFORMANCE=f.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS&&f.checkEs6ConformanceViaProxy();f.initSymbol=function(){};
f.polyfill("Symbol",function(a){function b(a){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new d("jscomp_symbol_"+(a||"")+"_"+e++,a)}function d(a,b){this.$jscomp$symbol$id_=a;f.defineProperty(this,"description",{configurable:!0,writable:!0,value:b})}if(a)return a;d.prototype.toString=function(){return this.$jscomp$symbol$id_};var e=0;return b},"es6","es3");f.initSymbolIterator=function(){};
f.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<b.length;d++){var e=f.global[b[d]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&f.defineProperty(e.prototype,a,{configurable:!0,writable:!0,value:function(){return f.iteratorPrototype(f.arrayIteratorImpl(this))}})}return a},"es6","es3");
f.initSymbolAsyncIterator=function(){};f.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};f.owns=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
f.polyfill("WeakMap",function(a){function b(a){this.id_=(k+=Math.random()+1).toString();if(a){a=f.makeIterator(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function d(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),k=new a([[b,2],[c,3]]);if(2!=k.get(b)||3!=k.get(c))return!1;k.delete(b);k.set(c,4);return!k.has(b)&&4==k.get(c)}catch(t){return!1}}function e(){}function c(a){var b=typeof a;return"object"===b&&null!==a||"function"===b}function m(a){if(!f.owns(a,
n)){var b=new e;f.defineProperty(a,n,{value:b})}}function h(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof e)return a;m(a);return b(a)})}if(f.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(a&&f.ES6_CONFORMANCE)return a}else if(d())return a;var n="$jscomp_hidden_"+Math.random();h("freeze");h("preventExtensions");h("seal");var k=0;b.prototype.set=function(a,b){if(!c(a))throw Error("Invalid WeakMap key");m(a);if(!f.owns(a,n))throw Error("WeakMap key fail: "+a);a[n][this.id_]=b;return this};b.prototype.get=
function(a){return c(a)&&f.owns(a,n)?a[n][this.id_]:void 0};b.prototype.has=function(a){return c(a)&&f.owns(a,n)&&f.owns(a[n],this.id_)};b.prototype.delete=function(a){return c(a)&&f.owns(a,n)&&f.owns(a[n],this.id_)?delete a[n][this.id_]:!1};return b},"es6","es3");f.MapEntry=function(){};
f.polyfill("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}function d(a,b){var c=a.head_;return f.iteratorPrototype(function(){if(c){for(;c.head!=a.head_;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function e(a,b){var c=b&&typeof b;"object"==c||"function"==c?h.has(b)?c=h.get(b):(c=""+ ++n,h.set(b,c)):c="p_"+b;var e=a.data_[c];if(e&&f.owns(a.data_,c))for(a=0;a<e.length;a++){var k=e[a];if(b!==b&&k.key!==k.key||
b===k.key)return{id:c,list:e,index:a,entry:k}}return{id:c,list:e,index:-1,entry:void 0}}function c(a){this.data_={};this.head_=b();this.size=0;if(a){a=f.makeIterator(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}function m(){if(f.ASSUME_NO_NATIVE_MAP||!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(f.makeIterator([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;
var e=c.entries(),h=e.next();if(h.done||h.value[0]!=b||"s"!=h.value[1])return!1;h=e.next();return h.done||4!=h.value[0].x||"t"!=h.value[1]||!e.next().done?!1:!0}catch(t){return!1}}if(f.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(a&&f.ES6_CONFORMANCE)return a}else if(m())return a;var h=new WeakMap;c.prototype.set=function(a,b){a=0===a?0:a;var c=e(this,a);c.list||(c.list=this.data_[c.id]=[]);c.entry?c.entry.value=b:(c.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:b},c.list.push(c.entry),
this.head_.previous.next=c.entry,this.head_.previous=c.entry,this.size++);return this};c.prototype.delete=function(a){a=e(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};c.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=b();this.size=0};c.prototype.has=function(a){return!!e(this,a).entry};c.prototype.get=function(a){return(a=
e(this,a).entry)&&a.value};c.prototype.entries=function(){return d(this,function(a){return[a.key,a.value]})};c.prototype.keys=function(){return d(this,function(a){return a.key})};c.prototype.values=function(){return d(this,function(a){return a.value})};c.prototype.forEach=function(a,b){for(var c=this.entries(),h;!(h=c.next()).done;)h=h.value,a.call(b,h[1],h[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var n=0;return c},"es6","es3");
f.polyfill("Set",function(a){function b(a){this.map_=new Map;if(a){a=f.makeIterator(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.map_.size}function d(){if(f.ASSUME_NO_NATIVE_SET||!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(f.makeIterator([b]));if(!c.has(b)||1!=c.size||c.add(b)!=c||1!=c.size||c.add({x:4})!=c||2!=c.size)return!1;var d=c.entries(),h=d.next();if(h.done||h.value[0]!=b||h.value[1]!=b)return!1;
h=d.next();return h.done||h.value[0]==b||4!=h.value[0].x||h.value[1]!=h.value[0]?!1:d.next().done}catch(n){return!1}}if(f.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(a&&f.ES6_CONFORMANCE)return a}else if(d())return a;b.prototype.add=function(a){a=0===a?0:a;this.map_.set(a,a);this.size=this.map_.size;return this};b.prototype.delete=function(a){a=this.map_.delete(a);this.size=this.map_.size;return a};b.prototype.clear=function(){this.map_.clear();this.size=0};b.prototype.has=function(a){return this.map_.has(a)};
b.prototype.entries=function(){return this.map_.entries()};b.prototype.values=function(){return this.map_.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.map_.forEach(function(h){return a.call(b,h,h,c)})};return b},"es6","es3");f.findInternal=function(a,b,d){a instanceof String&&(a=String(a));for(var e=a.length,c=0;c<e;c++){var m=a[c];if(b.call(d,m,c,a))return{i:c,v:m}}return{i:-1,v:void 0}};
f.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return f.findInternal(this,a,d).v}},"es6","es3");f.FORCE_POLYFILL_PROMISE=!1;
f.polyfill("Promise",function(a){function b(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{a(b.resolve,b.reject)}catch(k){b.reject(k)}}function d(){this.batch_=null}function e(a){return a instanceof b?a:new b(function(b){b(a)})}if(a&&!f.FORCE_POLYFILL_PROMISE)return a;d.prototype.asyncExecute=function(a){if(null==this.batch_){this.batch_=[];var b=this;this.asyncExecuteFunction(function(){b.executeBatch_()})}this.batch_.push(a)};var c=f.global.setTimeout;
d.prototype.asyncExecuteFunction=function(a){c(a,0)};d.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=this.batch_;this.batch_=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(q){this.asyncThrow_(q)}}}this.batch_=null};d.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};b.prototype.createResolveAndReject_=function(){function a(a){return function(h){c||(c=!0,a.call(b,h))}}var b=this,c=!1;return{resolve:a(this.resolveTo_),
reject:a(this.reject_)}};b.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.settleSameAsPromise_(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};b.prototype.resolveToNonPromiseObj_=function(a){var b=void 0;try{b=a.then}catch(k){this.reject_(k);return}"function"==typeof b?this.settleSameAsThenable_(b,
a):this.fulfill_(a)};b.prototype.reject_=function(a){this.settle_(2,a)};b.prototype.fulfill_=function(a){this.settle_(1,a)};b.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};b.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=0;a<this.onSettledCallbacks_.length;++a)m.asyncExecute(this.onSettledCallbacks_[a]);
this.onSettledCallbacks_=null}};var m=new d;b.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};b.prototype.settleSameAsThenable_=function(a,b){var c=this.createResolveAndReject_();try{a.call(b,c.resolve,c.reject)}catch(q){c.reject(q)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(u){h(u)}}:b}var e,h,n=new b(function(a,b){e=a;h=b});this.callWhenSettled_(d(a,e),d(c,h));return n};
b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.callWhenSettled_=function(a,b){function c(){switch(d.state_){case 1:a(d.result_);break;case 2:b(d.result_);break;default:throw Error("Unexpected state: "+d.state_);}}var d=this;null==this.onSettledCallbacks_?m.asyncExecute(c):this.onSettledCallbacks_.push(c)};b.resolve=e;b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(b,c){for(var d=f.makeIterator(a),h=d.next();!h.done;h=d.next())e(h.value).callWhenSettled_(b,
c)})};b.all=function(a){var c=f.makeIterator(a),d=c.next();return d.done?e([]):new b(function(a,b){function h(b){return function(c){k[b]=c;n--;0==n&&a(k)}}var k=[],n=0;do k.push(void 0),n++,e(d.value).callWhenSettled_(h(k.length-1),b),d=c.next();while(!d.done)})};return b},"es6","es3");f.polyfill("String.prototype.trimRight",function(a){function b(){return this.replace(/[\s\xa0]+$/,"")}return a||b},"es_2019","es3");
var w=function(a,b,d){return d={path:b,exports:{},require:function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}},a(d,d.exports),d.exports}(function(a,b){function d(a,b,c){c=Error.call(this,c);this.message=c.message;"stack"in c&&(this.stack=c.stack);Error.captureStackTrace(this,this.constructor);this.name=this.constructor.name;this.code=b;this.exitCode=a}function e(a,b){this.flags=a;this.required=0<=a.indexOf("<");this.optional=0<=a.indexOf("[");this.mandatory=
!1;this.negate=-1!==a.indexOf("-no-");a=a.split(/[ ,|]+/);1<a.length&&!/^[[<]/.test(a[1])&&(this.short=a.shift());this.long=a.shift();this.description=b||""}function c(a){this.commands=[];this.options=[];this._execs=new Set;this._allowUnknownOption=!1;this._args=[];this._name=a||"";this._optionValues={};this._passCommandToAction=this._storeOptionsAsProperties=!0;this._actionResults=[];this._helpFlags="-h, --help";this._helpDescription="output usage information";this._helpShortFlag="-h";this._helpLongFlag=
"--help"}function m(a){return a.split("-").reduce(function(a,b){return a+b[0].toUpperCase()+b.slice(1)})}function h(a,b){return a+Array(Math.max(0,b-a.length)+1).join(" ")}function n(a,b,c){return(a.match(new RegExp(".{1,"+(b-1)+"}([\\s\u200b]|$)|[^\\s\u200b]+?([\\s\u200b]|$)","g"))||[]).map(function(a,b){"\n"===a.slice(-1)&&(a=a.slice(0,a.length-1));return(0<b&&c?Array(c+1).join(" "):"")+a.trimRight()}).join("\n")}function k(a,b,c){return a.match(/[\n]\s+/)||40>b?a:n(a,b,c)}function q(a,b){b=b||
[];for(var c=0;c<b.length;c++)if(b[c]===a._helpLongFlag||b[c]===a._helpShortFlag)a.outputHelp(),a._exit(0,"commander.helpDisplayed","(outputHelp)")}function x(a){var b=a.name+(!0===a.variadic?"...":"");return a.required?"<"+b+">":"["+b+"]"}function r(a){try{if(fs.statSync(a).isFile())return!0}catch(l){return!1}}function t(a){return a.map(function(a){var b=a;if(0===a.indexOf("--inspect")){var c="127.0.0.1",g="9229",l;if(null!==(l=a.match(/^(--inspect(-brk)?)$/)))var d=l[1];else null!==(l=a.match(/^(--inspect(-brk|-port)?)=([^:]+)$/))?
(d=l[1],/^\d+$/.test(l[3])?g=l[3]:c=l[3]):null!==(l=a.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/))&&(d=l[1],c=l[3],g=l[4]);d&&"0"!==g&&(b=d+"="+c+":"+(parseInt(g)+1))}return b})}var v=require$$1.spawn,y=path.dirname,u=path.basename;require$$2.inherits(c,require$$0.EventEmitter);b=a.exports=new c;b.Command=c;b.Option=e;e.prototype.name=function(){return this.long.replace(/^--/,"")};e.prototype.attributeName=function(){return m(this.name().replace(/^no-/,""))};e.prototype.is=function(a){return this.short===
a||this.long===a};f.inherits(d,Error);b.CommanderError=d;c.prototype.command=function(a,b,p){"object"===typeof b&&null!==b&&(p=b,b=null);p=p||{};a=a.split(/ +/);var g=new c(a.shift());b&&(g.description(b),this.executables=!0,this._execs.add(g._name),p.isDefault&&(this.defaultExecutable=g._name));g._noHelp=!!p.noHelp;g._helpFlags=this._helpFlags;g._helpDescription=this._helpDescription;g._helpShortFlag=this._helpShortFlag;g._helpLongFlag=this._helpLongFlag;g._exitCallback=this._exitCallback;g._storeOptionsAsProperties=
this._storeOptionsAsProperties;g._passCommandToAction=this._passCommandToAction;g._executableFile=p.executableFile;this.commands.push(g);g.parseExpectedArgs(a);g.parent=this;return b?this:g};c.prototype.arguments=function(a){return this.parseExpectedArgs(a.split(/ +/))};c.prototype.addImplicitHelpCommand=function(){this.command("help [cmd]","display help for [cmd]")};c.prototype.parseExpectedArgs=function(a){if(a.length){var b=this;a.forEach(function(a){var c={required:!1,name:"",variadic:!1};switch(a[0]){case "<":c.required=
!0;c.name=a.slice(1,-1);break;case "[":c.name=a.slice(1,-1)}3<c.name.length&&"..."===c.name.slice(-3)&&(c.variadic=!0,c.name=c.name.slice(0,-3));c.name&&b._args.push(c)});return this}};c.prototype.exitOverride=function(a){this._exitCallback=a?a:function(a){if("commander.executeSubCommandAsync"!==a.code)throw a;};return this};c.prototype._exit=function(a,b,c){this._exitCallback&&this._exitCallback(new d(a,b,c));process.exit(a)};c.prototype.action=function(a){function b(b,g){b=b||[];g=g||[];g=c.parseOptions(g);
q(c,g.unknown);c._checkForMissingMandatoryOptions();0<g.unknown.length&&c.unknownOption(g.unknown[0]);g.args.length&&(b=g.args.concat(b));c._args.forEach(function(a,g){a.required&&null==b[g]?c.missingArgument(a.name):a.variadic&&(g!==c._args.length-1&&c.variadicArgNotLast(a.name),b[g]=b.splice(g))});g=c._args.length;var l=b.slice(0,g);l[g]=c._passCommandToAction?c:c.opts();b.length>g&&l.push(b.slice(g));g=a.apply(c,l);for(l=c;l.parent;)l=l.parent;l._actionResults.push(g)}var c=this,g=this.parent||
this;g.on("command:"+(g===this?"*":this._name),b);if(this._alias)g.on("command:"+this._alias,b);return this};c.prototype._optionEx=function(a,b,c,d,h){var g=this,l=new e(b,c);b=l.name();var p=l.attributeName();l.mandatory=!!a.mandatory;if("function"!==typeof d)if(d instanceof RegExp){var z=d;d=function(a,b){return(a=z.exec(a))?a[0]:b}}else h=d,d=null;if(l.negate||l.optional||l.required||"boolean"===typeof h)l.negate&&(a=l.long.replace(/^--no-/,"--"),h=g.optionFor(a)?g._getOptionValue(p):!0),void 0!==
h&&(g._setOptionValue(p,h),l.defaultValue=h);this.options.push(l);this.on("option:"+b,function(a){null!==a&&d&&(a=d(a,void 0===g._getOptionValue(p)?h:g._getOptionValue(p)));"boolean"===typeof g._getOptionValue(p)||"undefined"===typeof g._getOptionValue(p)?null==a?g._setOptionValue(p,l.negate?!1:h||!0):g._setOptionValue(p,a):null!==a&&g._setOptionValue(p,l.negate?!1:a)});return this};c.prototype.option=function(a,b,c,d){return this._optionEx({},a,b,c,d)};c.prototype.requiredOption=function(a,b,c,d){return this._optionEx({mandatory:!0},
a,b,c,d)};c.prototype.allowUnknownOption=function(a){this._allowUnknownOption=0===arguments.length||a;return this};c.prototype.storeOptionsAsProperties=function(a){this._storeOptionsAsProperties=void 0===a||a;this.options.length&&console.error("Commander usage error: call storeOptionsAsProperties before adding options");return this};c.prototype.passCommandToAction=function(a){this._passCommandToAction=void 0===a||a;return this};c.prototype._setOptionValue=function(a,b){this._storeOptionsAsProperties?
this[a]=b:this._optionValues[a]=b};c.prototype._getOptionValue=function(a){return this._storeOptionsAsProperties?this[a]:this._optionValues[a]};c.prototype.parse=function(a){this.executables&&this.addImplicitHelpCommand();this.rawArgs=a;this._name=this._name||u(a[1],".js");this.executables&&3>a.length&&!this.defaultExecutable&&a.push(this._helpLongFlag);var b=this.normalize(a.slice(2));b=this.parseOptions(b);var c=this.args=b.args,g=this.parseArgs(this.args,b.unknown);"help"===c[0]&&1===c.length&&
this.help();"help"===c[0]?(c[0]=c[1],c[1]=this._helpLongFlag):this._checkForMissingMandatoryOptions();var d=g.args[0],e=null;d&&(e=this.commands.find(function(a){return a._name===d}));!e&&d&&(e=this.commands.find(function(a){return a.alias()===d}))&&(d=e._name,c[0]=d);!e&&this.defaultExecutable&&(d=this.defaultExecutable,c.unshift(d),e=this.commands.find(function(a){return a._name===d}));return this._execs.has(d)?this.executeSubCommand(a,c,b.unknown,e?e._executableFile:void 0):g};c.prototype.parseAsync=
function(a){this.parse(a);return Promise.all(this._actionResults)};c.prototype.executeSubCommand=function(a,b,c,e){b=b.concat(c);b.length||this.help();c=!1;a=a[1];var g=u(a,path.extname(a))+"-"+b[0];null!=e&&(g=e,c=path.extname(e),c=".js"===c||".ts"===c||".mjs"===c);e=fs.realpathSync(a);e=y(e);e=path.join(e,g);r(e+".js")?(g=e+".js",c=!0):r(e+".ts")?(g=e+".ts",c=!0):r(e+".mjs")?(g=e+".mjs",c=!0):r(e)&&(g=e);b=b.slice(1);if("win32"!==process.platform)if(c){b.unshift(g);b=t(process.execArgv).concat(b);
var l=v(process.argv[0],b,{stdio:"inherit"})}else l=v(g,b,{stdio:"inherit"});else b.unshift(g),b=t(process.execArgv).concat(b),l=v(process.execPath,b,{stdio:"inherit"});["SIGUSR1","SIGUSR2","SIGTERM","SIGINT","SIGHUP"].forEach(function(a){process.on(a,function(){!1===l.killed&&null===l.exitCode&&l.kill(a)})});var h=this._exitCallback;if(h)l.on("close",function(){h(new d(process.exitCode||0,"commander.executeSubCommandAsync","(close)"))});else l.on("close",process.exit.bind(process));l.on("error",
function(a){"ENOENT"===a.code?console.error("error: %s(1) does not exist, try --help",g):"EACCES"===a.code&&console.error("error: %s(1) not executable. try chmod or run with root",g);if(h){var b=new d(1,"commander.executeSubCommandAsync","(error)");b.nestedError=a;h(b)}else process.exit(1)});this.runningCommand=l};c.prototype.normalize=function(a){for(var b=[],c,g,d,e,h,k=0,n=a.length;k<n;++k)if(c=a[k],0<k&&(g=this.optionFor(a[k-1])),"--"===c){b=b.concat(a.slice(k));break}else g&&g.required?b.push(c):
2<c.length&&"-"===c[0]&&"-"!==c[1]?(e=c.slice(0,2),(h=this.optionFor(e))&&(h.required||h.optional)?(b.push(e),b.push(c.slice(2))):c.slice(1).split("").forEach(function(a){b.push("-"+a)})):/^--/.test(c)&&~(d=c.indexOf("="))?b.push(c.slice(0,d),c.slice(d+1)):b.push(c);return b};c.prototype.parseArgs=function(a,b){a.length?this.listeners("command:"+a[0]).length?this.emit("command:"+a.shift(),a,b):this.emit("command:*",a,b):(q(this,b),0<b.length&&!this.defaultExecutable&&this.unknownOption(b[0]),0===
this.commands.length&&0===this._args.filter(function(a){return a.required}).length&&this.emit("command:*"));return this};c.prototype.optionFor=function(a){for(var b=0,c=this.options.length;b<c;++b)if(this.options[b].is(a))return this.options[b]};c.prototype._checkForMissingMandatoryOptions=function(){for(var a=this;a;a=a.parent)a.options.forEach(function(b){b.mandatory&&void 0===a._getOptionValue(b.attributeName())&&a.missingMandatoryOptionValue(b)})};c.prototype.parseOptions=function(a){for(var b=
[],c=a.length,g,d,e,h=[],k=0;k<c;++k)if(e=a[k],g)b.push(e);else if("--"===e)g=!0;else if(d=this.optionFor(e))if(d.required){e=a[++k];if(null==e)return this.optionMissingArgument(d);this.emit("option:"+d.name(),e)}else d.optional?(e=a[k+1],null==e||"-"===e[0]&&"-"!==e?e=null:++k,this.emit("option:"+d.name(),e)):this.emit("option:"+d.name());else 1<e.length&&"-"===e[0]?(h.push(e),k+1<a.length&&("-"!==a[k+1][0]||"-"===a[k+1])&&h.push(a[++k])):b.push(e);return{args:b,unknown:h}};c.prototype.opts=function(){if(this._storeOptionsAsProperties){for(var a=
{},b=this.options.length,c=0;c<b;c++){var d=this.options[c].attributeName();a[d]=d===this._versionOptionName?this._version:this[d]}return a}return this._optionValues};c.prototype.missingArgument=function(a){a="error: missing required argument '"+a+"'";console.error(a);this._exit(1,"commander.missingArgument",a)};c.prototype.optionMissingArgument=function(a,b){a=b?"error: option '"+a.flags+"' argument missing, got '"+b+"'":"error: option '"+a.flags+"' argument missing";console.error(a);this._exit(1,
"commander.optionMissingArgument",a)};c.prototype.missingMandatoryOptionValue=function(a){a="error: required option '"+a.flags+"' not specified";console.error(a);this._exit(1,"commander.missingMandatoryOptionValue",a)};c.prototype.unknownOption=function(a){this._allowUnknownOption||(a="error: unknown option '"+a+"'",console.error(a),this._exit(1,"commander.unknownOption",a))};c.prototype.variadicArgNotLast=function(a){a="error: variadic arguments must be last '"+a+"'";console.error(a);this._exit(1,
"commander.variadicArgNotLast",a)};c.prototype.version=function(a,b,c){if(0===arguments.length)return this._version;this._version=a;var g=new e(b||"-V, --version",c||"output the version number");this._versionOptionName=g.long.substr(2)||"version";this.options.push(g);var d=this;this.on("option:"+this._versionOptionName,function(){process.stdout.write(a+"\n");d._exit(0,"commander.version",a)});return this};c.prototype.description=function(a,b){if(0===arguments.length)return this._description;this._description=
a;this._argsDescription=b;return this};c.prototype.alias=function(a){var b=this;0!==this.commands.length&&(b=this.commands[this.commands.length-1]);if(0===arguments.length)return b._alias;if(a===b._name)throw Error("Command alias can't be the same as its name");b._alias=a;return this};c.prototype.usage=function(a){var b=this._args.map(function(a){return x(a)});b="[options]"+(this.commands.length?" [command]":"")+(this._args.length?" "+b.join(" "):"");if(0===arguments.length)return this._usage||b;
this._usage=a;return this};c.prototype.name=function(a){if(0===arguments.length)return this._name;this._name=a;return this};c.prototype.prepareCommands=function(){return this.commands.filter(function(a){return!a._noHelp}).map(function(a){var b=a._args.map(function(a){return x(a)}).join(" ");return[a._name+(a._alias?"|"+a._alias:"")+(a.options.length?" [options]":"")+(b?" "+b:""),a._description]})};c.prototype.largestCommandLength=function(){return this.prepareCommands().reduce(function(a,b){return Math.max(a,
b[0].length)},0)};c.prototype.largestOptionLength=function(){var a=[].slice.call(this.options);a.push({flags:this._helpFlags});return a.reduce(function(a,b){return Math.max(a,b.flags.length)},0)};c.prototype.largestArgLength=function(){return this._args.reduce(function(a,b){return Math.max(a,b.name.length)},0)};c.prototype.padWidth=function(){var a=this.largestOptionLength();this._argsDescription&&this._args.length&&this.largestArgLength()>a&&(a=this.largestArgLength());this.commands&&this.commands.length&&
this.largestCommandLength()>a&&(a=this.largestCommandLength());return a};c.prototype.optionHelp=function(){var a=this.padWidth(),b=(process.stdout.columns||80)-a-4;return this.options.map(function(c){var d=c.description+(c.negate||void 0===c.defaultValue?"":" (default: "+JSON.stringify(c.defaultValue)+")");return h(c.flags,a)+"  "+k(d,b,a+2)}).concat([h(this._helpFlags,a)+"  "+k(this._helpDescription,b,a+2)]).join("\n")};c.prototype.commandHelp=function(){if(!this.commands.length)return"";var a=this.prepareCommands(),
b=this.padWidth(),c=(process.stdout.columns||80)-b-4;return["Commands:",a.map(function(a){var d=a[1]?"  "+a[1]:"";return(d?h(a[0],b):a[0])+k(d,c,b+2)}).join("\n").replace(/^/gm,"  "),""].join("\n")};c.prototype.helpInformation=function(){var a=[];if(this._description){a=[this._description,""];var b=this._argsDescription;if(b&&this._args.length){var c=this.padWidth(),d=(process.stdout.columns||80)-c-5;a.push("Arguments:");a.push("");this._args.forEach(function(e){a.push("  "+h(e.name,c)+"  "+n(b[e.name],
d,c+4))});a.push("")}}var e=this._name;this._alias&&(e=e+"|"+this._alias);for(var k="",m=this.parent;m;m=m.parent)k=m.name()+" "+k;e=["Usage: "+k+e+" "+this.usage(),""];k=[];(m=this.commandHelp())&&(k=[m]);m=["Options:",""+this.optionHelp().replace(/^/gm,"  "),""];return e.concat(a).concat(m).concat(k).join("\n")};c.prototype.outputHelp=function(a){a||(a=function(a){return a});a=a(this.helpInformation());if("string"!==typeof a&&!Buffer.isBuffer(a))throw Error("outputHelp callback must return a string or a Buffer");
process.stdout.write(a);this.emit(this._helpLongFlag)};c.prototype.helpOption=function(a,b){this._helpFlags=a||this._helpFlags;this._helpDescription=b||this._helpDescription;a=this._helpFlags.split(/[ ,|]+/);1<a.length&&(this._helpShortFlag=a.shift());this._helpLongFlag=a.shift();return this};c.prototype.help=function(a){this.outputHelp(a);this._exit(process.exitCode||0,"commander.help","(outputHelp)")}});
w.command("say-hello [msg]").description("Say hello, or provide a special message instead.").action(function(a){return console.log(void 0===a?"Hello world!":a)});try{w.exitOverride(),w.parse(process.argv)}catch(a){console.log("\n")}export default {}
