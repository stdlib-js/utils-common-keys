// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).commonKeys=e()}(this,(function(){"use strict";function r(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function e(r){return Object.keys(Object(r))}var t=void 0!==Object.keys;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function i(){return n&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;function u(r,e){return null!=r&&a.call(r,e)}var c="function"==typeof Symbol?Symbol:void 0,f="function"==typeof c?c.toStringTag:"";var l,s=i()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[f],e=u(r,f);try{r[f]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[f]=t:delete r[f],n}:function(r){return o.call(r)};function p(r){return"[object Arguments]"===s(r)}l=function(){return p(arguments)}();var g=l,h="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=Object.defineProperty;function y(r){return"number"==typeof r}function b(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function v(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+b(i):b(i)+r,n&&(r="-"+r)),r}var w=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function j(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=v(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=v(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===m.call(r.specifier)?m.call(t):w.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function S(r){return"string"==typeof r}var E=Math.abs,_=String.prototype.toLowerCase,O=String.prototype.toUpperCase,k=String.prototype.replace,T=/e\+(\d)$/,x=/e-(\d)$/,I=/^(\d+)$/,A=/^(\d+)e/,V=/\.0$/,P=/\.0*e/,F=/(\..*[^0])0*e/;function N(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":E(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=k.call(t,F,"$1e"),t=k.call(t,P,"e"),t=k.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=k.call(t,T,"e+0$1"),t=k.call(t,x,"e-0$1"),r.alternate&&(t=k.call(t,I,"$1."),t=k.call(t,A,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===O.call(r.specifier)?O.call(t):_.call(t)}function C(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function $(r,e,t){var n=e-r.length;return n<0?r:r=t?r+C(n):C(n)+r}var B=String.fromCharCode,L=isNaN,R=Array.isArray;function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function W(r){var e,t,n,i,o,a,u,c,f;if(!R(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(S(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,L(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,L(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=j(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!L(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=L(o)?String(n.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Z(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function M(r){var e,t,n,i;for(t=[],i=0,n=X.exec(r);n;)(e=r.slice(i,X.lastIndex-n[0].length)).length&&t.push(e),t.push(Z(n)),i=X.lastIndex,n=X.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){return"string"==typeof r}function Y(r){var e,t,n;if(!U(r))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=M(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return W.apply(null,t)}var H,z=Object.prototype,D=z.toString,K=z.__defineGetter__,q=z.__defineSetter__,J=z.__lookupGetter__,Q=z.__lookupSetter__;H=function(){try{return h({},"x",{}),!0}catch(r){return!1}}()?d:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===D.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||Q.call(r,e)?(n=r.__proto__,r.__proto__=z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&K&&K.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var rr=H;function er(r,e,t){rr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function tr(r){return"string"==typeof r}var nr=String.prototype.valueOf;var ir=i();function or(r){return"object"==typeof r&&(r instanceof String||(ir?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object String]"===s(r)))}function ar(r){return tr(r)||or(r)}function ur(r){return"number"==typeof r}er(ar,"isPrimitive",tr),er(ar,"isObject",or);var cr=Number,fr=cr.prototype.toString;var lr=i();function sr(r){return"object"==typeof r&&(r instanceof cr||(lr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===s(r)))}function pr(r){return ur(r)||sr(r)}function gr(r){return r!=r}function hr(r){return ur(r)&&gr(r)}function dr(r){return sr(r)&&gr(r.valueOf())}function yr(r){return hr(r)||dr(r)}er(pr,"isPrimitive",ur),er(pr,"isObject",sr),er(yr,"isPrimitive",hr),er(yr,"isObject",dr);var br=Number.POSITIVE_INFINITY,vr=cr.NEGATIVE_INFINITY,wr=Math.floor;function mr(r){return wr(r)===r}function jr(r){return r<br&&r>vr&&mr(r)}function Sr(r){return ur(r)&&jr(r)}function Er(r){return sr(r)&&jr(r.valueOf())}function _r(r){return Sr(r)||Er(r)}er(_r,"isPrimitive",Sr),er(_r,"isObject",Er);var Or=Object.prototype.propertyIsEnumerable;var kr=!Or.call("beep","0");function Tr(r,e){var t;return null!=r&&(!(t=Or.call(r,e))&&kr&&ar(r)?!hr(e=+e)&&Sr(e)&&e>=0&&e<r.length:t)}var xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===s(r)};var Ir=g?p:function(r){return null!==r&&"object"==typeof r&&!xr(r)&&"number"==typeof r.length&&mr(r.length)&&r.length>=0&&r.length<=4294967295&&u(r,"callee")&&!Tr(r,"callee")},Ar=Array.prototype.slice;function Vr(r){return null!==r&&"object"==typeof r}er(Vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!xr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Vr));var Pr=Tr((function(){}),"prototype"),Fr=!Tr({toString:null},"toString");function Nr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&mr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Cr(r,e,t){var n,i;if(!Nr(r)&&!tr(r))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Sr(t))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(yr(e)){for(;i<n;i++)if(yr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var $r=/./;function Br(r){return"boolean"==typeof r}var Lr=Boolean,Rr=Boolean.prototype.toString;var Gr=i();function Wr(r){return"object"==typeof r&&(r instanceof Lr||(Gr?function(r){try{return Rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===s(r)))}function Xr(r){return Br(r)||Wr(r)}function Zr(){return new Function("return this;")()}er(Xr,"isPrimitive",Br),er(Xr,"isObject",Wr);var Mr="object"==typeof self?self:null,Ur="object"==typeof window?window:null,Yr="object"==typeof global?global:null,Hr="object"==typeof globalThis?globalThis:null;var zr=function(r){if(arguments.length){if(!Br(r))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Zr()}if(Hr)return Hr;if(Mr)return Mr;if(Ur)return Ur;if(Yr)return Yr;throw new Error("unexpected error. Unable to resolve global object.")}(),Dr=zr.document&&zr.document.childNodes,Kr=Int8Array;function qr(){return/^\s*function\s*([^(]*)/i}var Jr=/^\s*function\s*([^(]*)/i;function Qr(r){var e,t,n,i;if(("Object"===(t=s(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Jr.exec(n.toString()))return e[1]}return Vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}er(qr,"REGEXP",Jr);var re="function"==typeof $r||"object"==typeof Kr||"function"==typeof Dr?function(r){return Qr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Qr(r).toLowerCase():e};function ee(r){return r.constructor&&r.constructor.prototype===r}var te=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ne="undefined"==typeof window?void 0:window;var ie=function(){var r;if("undefined"===re(ne))return!1;for(r in ne)try{-1===Cr(te,r)&&u(ne,r)&&null!==ne[r]&&"object"===re(ne[r])&&ee(ne[r])}catch(r){return!0}return!1}(),oe="undefined"!=typeof window;var ae,ue=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ae=t?function(){return 2!==(e(arguments)||"").length}(1,2)?function(r){return Ir(r)?e(Ar.call(r)):e(r)}:e:function(r){var e,t,n,i,o,a,c;if(i=[],Ir(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!u(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Vr(r))return i;t=Pr&&n}for(o in r)t&&"prototype"===o||!u(r,o)||i.push(String(o));if(Fr)for(e=function(r){if(!1===oe&&!ie)return ee(r);try{return ee(r)}catch(r){return!1}}(r),c=0;c<ue.length;c++)a=ue[c],e&&"constructor"===a||!u(r,a)||i.push(String(a));return i};var ce=ae;return function(){var e,t,n,i,o,a,c;if((e=arguments.length)<2)throw new Error(r("1S71b,Ep"));for(o=(t=ce(arguments[0])).length,a=1;a<e;a++){for(n=arguments[a],i=0,c=0;c<o;c++)u(n,t[c])&&(t[i]=t[c],i+=1);o=i}return t.length=o,t}}));
//# sourceMappingURL=index.js.map
