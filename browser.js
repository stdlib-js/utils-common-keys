// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return Object.keys(Object(e))}var r=void 0!==Object.keys;function t(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=t();function i(){return n&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,a=Object.prototype.hasOwnProperty;function c(e,r){return null!=e&&a.call(e,r)}var u,l="function"==typeof Symbol?Symbol:void 0,s="function"==typeof l?l.toStringTag:"",f=i()?function(e){var r,t,n;if(null==e)return o.call(e);t=e[s],r=c(e,s);try{e[s]=void 0}catch(r){return o.call(e)}return n=o.call(e),r?e[s]=t:delete e[s],n}:function(e){return o.call(e)};function p(e){return"[object Arguments]"===f(e)}u=function(){return p(arguments)}();var g=u,d="function"==typeof Object.defineProperty?Object.defineProperty:null,h=Object.defineProperty;function b(e){return"number"==typeof e}function y(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function v(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+y(i):y(i)+e,n&&(e="-"+e)),e}var w=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function j(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!b(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=v(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=v(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===m.call(e.specifier)?m.call(t):w.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _(e){return"string"==typeof e}var S=Math.abs,E=String.prototype.toLowerCase,O=String.prototype.toUpperCase,k=String.prototype.replace,x=/e\+(\d)$/,I=/e-(\d)$/,T=/^(\d+)$/,A=/^(\d+)e/,V=/\.0$/,P=/\.0*e/,F=/(\..*[^0])0*e/;function N(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!b(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":S(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=k.call(t,F,"$1e"),t=k.call(t,P,"e"),t=k.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=k.call(t,x,"e+0$1"),t=k.call(t,I,"e-0$1"),e.alternate&&(t=k.call(t,T,"$1."),t=k.call(t,A,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===O.call(e.specifier)?O.call(t):E.call(t)}function $(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function C(e,r,t){var n=r-e.length;return n<0?e:e=t?e+$(n):$(n)+e}var R=String.fromCharCode,G=isNaN,L=Array.isArray;function W(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Z(e){var r,t,n,i,o,a,c,u,l;if(!L(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(_(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=W(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,G(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,G(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=j(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!G(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=G(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=C(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function X(e){var r,t,n,i;for(t=[],i=0,n=B.exec(e);n;)(r=e.slice(i,B.lastIndex-n[0].length)).length&&t.push(r),t.push(M(n)),i=B.lastIndex,n=B.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Y(e){return"string"==typeof e}function U(e){var r,t;if(!Y(e))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[X(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Z.apply(null,r)}var z,H=Object.prototype,D=H.toString,K=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,Q=H.__lookupSetter__;z=function(){try{return d({},"x",{}),!0}catch(e){return!1}}()?h:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(e,r)||Q.call(e,r)?(n=e.__proto__,e.__proto__=H,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&K&&K.call(e,r,t.get),a&&q&&q.call(e,r,t.set),e};var ee=z;function re(e,r,t){ee(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function te(e){return"string"==typeof e}var ne=String.prototype.valueOf,ie=i();function oe(e){return"object"==typeof e&&(e instanceof String||(ie?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object String]"===f(e)))}function ae(e){return te(e)||oe(e)}function ce(e){return"number"==typeof e}re(ae,"isPrimitive",te),re(ae,"isObject",oe);var ue=Number,le=ue.prototype.toString,se=i();function fe(e){return"object"==typeof e&&(e instanceof ue||(se?function(e){try{return le.call(e),!0}catch(e){return!1}}(e):"[object Number]"===f(e)))}function pe(e){return ce(e)||fe(e)}function ge(e){return e!=e}function de(e){return ce(e)&&ge(e)}function he(e){return fe(e)&&ge(e.valueOf())}function be(e){return de(e)||he(e)}re(pe,"isPrimitive",ce),re(pe,"isObject",fe),re(be,"isPrimitive",de),re(be,"isObject",he);var ye=Number.POSITIVE_INFINITY,ve=ue.NEGATIVE_INFINITY,we=Math.floor;function me(e){return we(e)===e}function je(e){return e<ye&&e>ve&&me(e)}function _e(e){return ce(e)&&je(e)}function Se(e){return fe(e)&&je(e.valueOf())}function Ee(e){return _e(e)||Se(e)}re(Ee,"isPrimitive",_e),re(Ee,"isObject",Se);var Oe,ke=Object.prototype.propertyIsEnumerable,xe=!ke.call("beep","0"),Ie=Array.isArray?Array.isArray:function(e){return"[object Array]"===f(e)};Oe=g?p:function(e){return null!==e&&"object"==typeof e&&!Ie(e)&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=4294967295&&c(e,"callee")&&!function(e,r){var t;return null!=e&&(!(t=ke.call(e,r))&&xe&&ae(e)?!de(r=+r)&&_e(r)&&r>=0&&r<e.length:t)}(e,"callee")};var Te=Oe,Ae=Array.prototype.slice,Ve="function"==typeof Object.defineProperty?Object.defineProperty:null,Pe=Object.defineProperty;function Fe(e){return"number"==typeof e}function Ne(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function $e(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Ne(i):Ne(i)+e,n&&(e="-"+e)),e}var Ce=String.prototype.toLowerCase,Re=String.prototype.toUpperCase;function Ge(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Fe(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=$e(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=$e(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Re.call(e.specifier)?Re.call(t):Ce.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Le(e){return"string"==typeof e}var We=Math.abs,Ze=String.prototype.toLowerCase,Be=String.prototype.toUpperCase,Me=String.prototype.replace,Xe=/e\+(\d)$/,Ye=/e-(\d)$/,Ue=/^(\d+)$/,ze=/^(\d+)e/,He=/\.0$/,De=/\.0*e/,Ke=/(\..*[^0])0*e/;function qe(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Fe(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":We(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Me.call(t,Ke,"$1e"),t=Me.call(t,De,"e"),t=Me.call(t,He,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Me.call(t,Xe,"e+0$1"),t=Me.call(t,Ye,"e-0$1"),e.alternate&&(t=Me.call(t,Ue,"$1."),t=Me.call(t,ze,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Be.call(e.specifier)?Be.call(t):Ze.call(t)}function Je(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Qe(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Je(n):Je(n)+e}var er=String.fromCharCode,rr=isNaN,tr=Array.isArray;function nr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ir(e){var r,t,n,i,o,a,c,u,l;if(!tr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(Le(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=nr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,rr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,rr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Ge(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!rr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=rr(o)?String(n.arg):er(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=qe(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=$e(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Qe(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ar(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function cr(e){var r,t,n,i;for(t=[],i=0,n=or.exec(e);n;)(r=e.slice(i,or.lastIndex-n[0].length)).length&&t.push(r),t.push(ar(n)),i=or.lastIndex,n=or.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function ur(e){return"string"==typeof e}function lr(e){var r,t;if(!ur(e))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[cr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return ir.apply(null,r)}var sr,fr=Object.prototype,pr=fr.toString,gr=fr.__defineGetter__,dr=fr.__defineSetter__,hr=fr.__lookupGetter__,br=fr.__lookupSetter__;sr=function(){try{return Ve({},"x",{}),!0}catch(e){return!1}}()?Pe:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===pr.call(e))throw new TypeError(lr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===pr.call(t))throw new TypeError(lr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(hr.call(e,r)||br.call(e,r)?(n=e.__proto__,e.__proto__=fr,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&gr&&gr.call(e,r,t.get),a&&dr&&dr.call(e,r,t.set),e};var yr=sr;function vr(e,r,t){yr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var wr=t();function mr(){return wr&&"symbol"==typeof Symbol.toStringTag}var jr=Object.prototype.toString,_r="function"==typeof Symbol?Symbol:void 0,Sr="function"==typeof _r?_r.toStringTag:"",Er=mr()?function(e){var r,t,n;if(null==e)return jr.call(e);t=e[Sr],r=c(e,Sr);try{e[Sr]=void 0}catch(r){return jr.call(e)}return n=jr.call(e),r?e[Sr]=t:delete e[Sr],n}:function(e){return jr.call(e)},Or=Array.isArray?Array.isArray:function(e){return"[object Array]"===Er(e)};function kr(e){return null!==e&&"object"==typeof e}function xr(e){return"string"==typeof e}vr(kr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(lr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Or(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(kr));var Ir=String.prototype.valueOf,Tr=mr();function Ar(e){return"object"==typeof e&&(e instanceof String||(Tr?function(e){try{return Ir.call(e),!0}catch(e){return!1}}(e):"[object String]"===Er(e)))}function Vr(e){return xr(e)||Ar(e)}function Pr(e){return"number"==typeof e}vr(Vr,"isPrimitive",xr),vr(Vr,"isObject",Ar);var Fr=Number,Nr=Fr.prototype.toString,$r=mr();function Cr(e){return"object"==typeof e&&(e instanceof Fr||($r?function(e){try{return Nr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Er(e)))}function Rr(e){return Pr(e)||Cr(e)}function Gr(e){return e!=e}function Lr(e){return Pr(e)&&Gr(e)}function Wr(e){return Cr(e)&&Gr(e.valueOf())}function Zr(e){return Lr(e)||Wr(e)}vr(Rr,"isPrimitive",Pr),vr(Rr,"isObject",Cr),vr(Zr,"isPrimitive",Lr),vr(Zr,"isObject",Wr);var Br=Number.POSITIVE_INFINITY,Mr=Fr.NEGATIVE_INFINITY,Xr=Math.floor;function Yr(e){return Xr(e)===e}function Ur(e){return e<Br&&e>Mr&&Yr(e)}function zr(e){return Pr(e)&&Ur(e)}function Hr(e){return Cr(e)&&Ur(e.valueOf())}function Dr(e){return zr(e)||Hr(e)}vr(Dr,"isPrimitive",zr),vr(Dr,"isObject",Hr);var Kr=Object.prototype.propertyIsEnumerable,qr=!Kr.call("beep","0");function Jr(e,r){var t;return null!=e&&(!(t=Kr.call(e,r))&&qr&&Vr(e)?!Lr(r=+r)&&zr(r)&&r>=0&&r<e.length:t)}var Qr=Jr((function(){}),"prototype"),et=!Jr({toString:null},"toString");function rt(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Yr(e.length)&&e.length>=0&&e.length<=9007199254740991}function tt(e,r,t){var n,i;if(!rt(e)&&!xr(e))throw new TypeError(lr("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!zr(t))throw new TypeError(lr("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Zr(r)){for(;i<n;i++)if(Zr(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var nt=/./;function it(e){return"boolean"==typeof e}var ot=Boolean,at=Boolean.prototype.toString,ct=mr();function ut(e){return"object"==typeof e&&(e instanceof ot||(ct?function(e){try{return at.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Er(e)))}function lt(e){return it(e)||ut(e)}function st(){return new Function("return this;")()}vr(lt,"isPrimitive",it),vr(lt,"isObject",ut);var ft="object"==typeof self?self:null,pt="object"==typeof window?window:null,gt="object"==typeof globalThis?globalThis:null,dt=function(e){if(arguments.length){if(!it(e))throw new TypeError(lr("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return st()}if(gt)return gt;if(ft)return ft;if(pt)return pt;throw new Error("unexpected error. Unable to resolve global object.")}(),ht=dt.document&&dt.document.childNodes,bt=Int8Array;function yt(){return/^\s*function\s*([^(]*)/i}var vt=/^\s*function\s*([^(]*)/i;function wt(e){var r,t,n,i;if(("Object"===(t=Er(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=vt.exec(n.toString()))return r[1]}return kr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}vr(yt,"REGEXP",vt);var mt="function"==typeof nt||"object"==typeof bt||"function"==typeof ht?function(e){return wt(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?wt(e).toLowerCase():r};function jt(e){return e.constructor&&e.constructor.prototype===e}var _t,St=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Et="undefined"==typeof window?void 0:window,Ot=function(){var e;if("undefined"===mt(Et))return!1;for(e in Et)try{-1===tt(St,e)&&c(Et,e)&&null!==Et[e]&&"object"===mt(Et[e])&&jt(Et[e])}catch(e){return!0}return!1}(),kt="undefined"!=typeof window,xt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];_t=r?function(){return 2!==(e(arguments)||"").length}(1,2)?function(r){return Te(r)?e(Ae.call(r)):e(r)}:e:function(e){var r,t,n,i,o,a,u;if(i=[],Te(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!c(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!kr(e))return i;t=Qr&&n}for(o in e)t&&"prototype"===o||!c(e,o)||i.push(String(o));if(et)for(r=function(e){if(!1===kt&&!Ot)return jt(e);try{return jt(e)}catch(e){return!1}}(e),u=0;u<xt.length;u++)a=xt[u],r&&"constructor"===a||!c(e,a)||i.push(String(a));return i};var It=_t;return function(){var e,r,t,n,i,o,a;if((e=arguments.length)<2)throw new Error("insufficient arguments. Must provide at least two objects.");for(i=(r=It(arguments[0])).length,o=1;o<e;o++){for(t=arguments[o],n=0,a=0;a<i;a++)c(t,r[a])&&(r[n]=r[a],n+=1);i=n}return r.length=i,r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).commonKeys=r();
//# sourceMappingURL=browser.js.map
