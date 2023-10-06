// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function r(e){return Object.keys(Object(e))}var t=void 0!==Object.keys,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function i(){return n&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,a=Object.prototype.hasOwnProperty;function c(e,r){return null!=e&&a.call(e,r)}var u,f="function"==typeof Symbol?Symbol:void 0,l="function"==typeof f?f.toStringTag:"",s=i()?function(e){var r,t,n;if(null==e)return o.call(e);t=e[l],r=c(e,l);try{e[l]=void 0}catch(r){return o.call(e)}return n=o.call(e),r?e[l]=t:delete e[l],n}:function(e){return o.call(e)};function p(e){return"[object Arguments]"===s(e)}u=function(){return p(arguments)}();var g=u,h="function"==typeof Object.defineProperty?Object.defineProperty:null,d=Object.defineProperty;function y(e){return"number"==typeof e}function b(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function v(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+b(i):b(i)+e,n&&(e="-"+e)),e}var w=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function j(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=v(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=v(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===m.call(e.specifier)?m.call(t):w.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function S(e){return"string"==typeof e}var E=Math.abs,_=String.prototype.toLowerCase,O=String.prototype.toUpperCase,k=String.prototype.replace,T=/e\+(\d)$/,x=/e-(\d)$/,I=/^(\d+)$/,A=/^(\d+)e/,V=/\.0$/,P=/\.0*e/,F=/(\..*[^0])0*e/;function N(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!y(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":E(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=k.call(t,F,"$1e"),t=k.call(t,P,"e"),t=k.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=k.call(t,T,"e+0$1"),t=k.call(t,x,"e-0$1"),e.alternate&&(t=k.call(t,I,"$1."),t=k.call(t,A,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===O.call(e.specifier)?O.call(t):_.call(t)}function C(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function $(e,r,t){var n=r-e.length;return n<0?e:e=t?e+C(n):C(n)+e}var B=String.fromCharCode,L=isNaN,R=Array.isArray;function G(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function W(e){var r,t,n,i,o,a,c,u,f;if(!R(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(S(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,L(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,L(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=j(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!L(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=L(o)?String(n.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Z(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function M(e){var r,t,n,i;for(t=[],i=0,n=X.exec(e);n;)(r=e.slice(i,X.lastIndex-n[0].length)).length&&t.push(r),t.push(Z(n)),i=X.lastIndex,n=X.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function U(e){return"string"==typeof e}function Y(e){var r,t,n;if(!U(e))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=M(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return W.apply(null,t)}var H,z=Object.prototype,D=z.toString,K=z.__defineGetter__,q=z.__defineSetter__,J=z.__lookupGetter__,Q=z.__lookupSetter__;H=function(){try{return h({},"x",{}),!0}catch(e){return!1}}()?d:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(e,r)||Q.call(e,r)?(n=e.__proto__,e.__proto__=z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&K&&K.call(e,r,t.get),a&&q&&q.call(e,r,t.set),e};var ee=H;function re(e,r,t){ee(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function te(e){return"string"==typeof e}var ne=String.prototype.valueOf,ie=i();function oe(e){return"object"==typeof e&&(e instanceof String||(ie?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object String]"===s(e)))}function ae(e){return te(e)||oe(e)}function ce(e){return"number"==typeof e}re(ae,"isPrimitive",te),re(ae,"isObject",oe);var ue=Number,fe=ue.prototype.toString,le=i();function se(e){return"object"==typeof e&&(e instanceof ue||(le?function(e){try{return fe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===s(e)))}function pe(e){return ce(e)||se(e)}function ge(e){return e!=e}function he(e){return ce(e)&&ge(e)}function de(e){return se(e)&&ge(e.valueOf())}function ye(e){return he(e)||de(e)}re(pe,"isPrimitive",ce),re(pe,"isObject",se),re(ye,"isPrimitive",he),re(ye,"isObject",de);var be=Number.POSITIVE_INFINITY,ve=ue.NEGATIVE_INFINITY,we=Math.floor;function me(e){return we(e)===e}function je(e){return e<be&&e>ve&&me(e)}function Se(e){return ce(e)&&je(e)}function Ee(e){return se(e)&&je(e.valueOf())}function _e(e){return Se(e)||Ee(e)}re(_e,"isPrimitive",Se),re(_e,"isObject",Ee);var Oe=Object.prototype.propertyIsEnumerable,ke=!Oe.call("beep","0");function Te(e,r){var t;return null!=e&&(!(t=Oe.call(e,r))&&ke&&ae(e)?!he(r=+r)&&Se(r)&&r>=0&&r<e.length:t)}var xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===s(e)},Ie=g?p:function(e){return null!==e&&"object"==typeof e&&!xe(e)&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=4294967295&&c(e,"callee")&&!Te(e,"callee")},Ae=Array.prototype.slice;function Ve(e){return null!==e&&"object"==typeof e}re(Ve,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!xe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ve));var Pe=Te((function(){}),"prototype"),Fe=!Te({toString:null},"toString");function Ne(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=9007199254740991}function Ce(e,r,t){var n,i;if(!Ne(e)&&!te(e))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Se(t))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(ye(r)){for(;i<n;i++)if(ye(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var $e=/./;function Be(e){return"boolean"==typeof e}var Le=Boolean,Re=Boolean.prototype.toString,Ge=i();function We(e){return"object"==typeof e&&(e instanceof Le||(Ge?function(e){try{return Re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===s(e)))}function Xe(e){return Be(e)||We(e)}function Ze(){return new Function("return this;")()}re(Xe,"isPrimitive",Be),re(Xe,"isObject",We);var Me="object"==typeof self?self:null,Ue="object"==typeof window?window:null,Ye="object"==typeof globalThis?globalThis:null,He=function(e){if(arguments.length){if(!Be(e))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ze()}if(Ye)return Ye;if(Me)return Me;if(Ue)return Ue;throw new Error("unexpected error. Unable to resolve global object.")}(),ze=He.document&&He.document.childNodes,De=Int8Array;function Ke(){return/^\s*function\s*([^(]*)/i}var qe=/^\s*function\s*([^(]*)/i;function Je(e){var r,t,n,i;if(("Object"===(t=s(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=qe.exec(n.toString()))return r[1]}return Ve(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}re(Ke,"REGEXP",qe);var Qe="function"==typeof $e||"object"==typeof De||"function"==typeof ze?function(e){return Je(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Je(e).toLowerCase():r};function er(e){return e.constructor&&e.constructor.prototype===e}var rr,tr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],nr="undefined"==typeof window?void 0:window,ir=function(){var e;if("undefined"===Qe(nr))return!1;for(e in nr)try{-1===Ce(tr,e)&&c(nr,e)&&null!==nr[e]&&"object"===Qe(nr[e])&&er(nr[e])}catch(e){return!0}return!1}(),or="undefined"!=typeof window,ar=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];rr=t?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return Ie(e)?r(Ae.call(e)):r(e)}:r:function(e){var r,t,n,i,o,a,u;if(i=[],Ie(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!c(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!Ve(e))return i;t=Pe&&n}for(o in e)t&&"prototype"===o||!c(e,o)||i.push(String(o));if(Fe)for(r=function(e){if(!1===or&&!ir)return er(e);try{return er(e)}catch(e){return!1}}(e),u=0;u<ar.length;u++)a=ar[u],r&&"constructor"===a||!c(e,a)||i.push(String(a));return i};var cr=rr;return function(){var r,t,n,i,o,a,u;if((r=arguments.length)<2)throw new Error(e("1S71b,Ep"));for(o=(t=cr(arguments[0])).length,a=1;a<r;a++){for(n=arguments[a],i=0,u=0;u<o;u++)c(n,t[u])&&(t[i]=t[u],i+=1);o=i}return t.length=o,t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).commonKeys=r();
//# sourceMappingURL=browser.js.map
