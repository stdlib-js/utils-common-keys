// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=function(r){return Object.keys(Object(r))},e=t;var n=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,a=c;var f=function(r){return a.call(r)},l=Object.prototype.hasOwnProperty;var v=function(r,t){return null!=r&&l.call(r,t)},s="function"==typeof Symbol?Symbol.toStringTag:"",p=v,y=s,b=c;var g=f,m=function(r){var t,e,n;if(null==r)return b.call(r);e=r[y],t=p(r,y);try{r[y]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[y]=e:delete r[y],n},h=u()?m:g,d=h;var j=function(r){return"[object Arguments]"===d(r)},w=j;var _=function(){return w(arguments)}(),O="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return O({},"x",{}),!0}catch(r){return!1}},P=Object.defineProperty,E=Object.prototype,I=E.toString,T=E.__defineGetter__,A=E.__defineSetter__,k=E.__lookupGetter__,N=E.__lookupSetter__;var B=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(k.call(r,t)||N.call(r,t)?(n=r.__proto__,r.__proto__=E,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&T&&T.call(r,t,e.get),u&&A&&A.call(r,t,e.set),r},V=P,x=B,M=S()?V:x;var F=function(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},G=F;var L=function(r){return"string"==typeof r},X=String.prototype.valueOf;var Y=h,C=function(r){try{return X.call(r),!0}catch(r){return!1}},D=u();var H=function(r){return"object"==typeof r&&(r instanceof String||(D?C(r):"[object String]"===Y(r)))},R=L,W=H;var z=G,U=function(r){return R(r)||W(r)},q=H;z(U,"isPrimitive",L),z(U,"isObject",q);var J=U;var K=function(r){return"number"==typeof r},Q=Number,Z=Q.prototype.toString;var $=h,rr=Q,tr=function(r){try{return Z.call(r),!0}catch(r){return!1}},er=u();var nr=function(r){return"object"==typeof r&&(r instanceof rr||(er?tr(r):"[object Number]"===$(r)))},or=K,ir=nr;var ur=G,cr=function(r){return or(r)||ir(r)},ar=nr;ur(cr,"isPrimitive",K),ur(cr,"isObject",ar);var fr=cr;var lr=function(r){return r!=r},vr=fr.isPrimitive,sr=lr;var pr=function(r){return vr(r)&&sr(r)},yr=fr.isObject,br=lr;var gr=function(r){return yr(r)&&br(r.valueOf())},mr=pr,hr=gr;var dr=G,jr=function(r){return mr(r)||hr(r)},wr=gr;dr(jr,"isPrimitive",pr),dr(jr,"isObject",wr);var _r=jr,Or=Number.POSITIVE_INFINITY,Sr=Q.NEGATIVE_INFINITY,Pr=Math.floor;var Er=function(r){return Pr(r)===r},Ir=Or,Tr=Sr,Ar=Er;var kr=function(r){return r<Ir&&r>Tr&&Ar(r)},Nr=fr.isPrimitive,Br=kr;var Vr=function(r){return Nr(r)&&Br(r)},xr=fr.isObject,Mr=kr;var Fr=function(r){return xr(r)&&Mr(r.valueOf())},Gr=Vr,Lr=Fr;var Xr=G,Yr=function(r){return Gr(r)||Lr(r)},Cr=Fr;Xr(Yr,"isPrimitive",Vr),Xr(Yr,"isObject",Cr);var Dr,Hr=Yr,Rr=Object.prototype.propertyIsEnumerable;Dr=!Rr.call("beep","0");var Wr=J,zr=_r.isPrimitive,Ur=Hr.isPrimitive,qr=Rr,Jr=Dr;var Kr=function(r,t){var e;return null!=r&&(!(e=qr.call(r,t))&&Jr&&Wr(r)?!zr(t=+t)&&Ur(t)&&t>=0&&t<r.length:e)},Qr=Kr,Zr=h;var $r=Array.isArray?Array.isArray:function(r){return"[object Array]"===Zr(r)},rt=v,tt=Qr,et=$r,nt=Er;var ot=_?j:function(r){return null!==r&&"object"==typeof r&&!et(r)&&"number"==typeof r.length&&nt(r.length)&&r.length>=0&&r.length<=4294967295&&rt(r,"callee")&&!tt(r,"callee")},it=ot,ut=t,ct=Array.prototype.slice;var at=function(r){return it(r)?ut(ct.call(r)):ut(r)},ft=$r;var lt=function(r){return null!==r&&"object"==typeof r};G(lt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!ft(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lt));var vt=lt;var st=Qr((function(){}),"prototype"),pt=!Qr({toString:null},"toString"),yt=Er;var bt=_r,gt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&yt(r.length)&&r.length>=0&&r.length<=9007199254740991},mt=J.isPrimitive,ht=Hr.isPrimitive;var dt=function(r,t,e){var n,o;if(!gt(r)&&!mt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!ht(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(bt(t)){for(;o<n;o++)if(bt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},jt=/./;var wt=function(r){return"boolean"==typeof r},_t=Boolean.prototype.toString;var Ot=h,St=function(r){try{return _t.call(r),!0}catch(r){return!1}},Pt=u();var Et=function(r){return"object"==typeof r&&(r instanceof Boolean||(Pt?St(r):"[object Boolean]"===Ot(r)))},It=wt,Tt=Et;var At=G,kt=function(r){return It(r)||Tt(r)},Nt=Et;At(kt,"isPrimitive",wt),At(kt,"isObject",Nt);var Bt="object"==typeof self?self:null,Vt="object"==typeof window?window:null,xt=kt.isPrimitive,Mt=function(){return new Function("return this;")()},Ft=Bt,Gt=Vt,Lt=r(Object.freeze({__proto__:null}));var Xt=function(r){if(arguments.length){if(!xt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Mt()}if(Ft)return Ft;if(Gt)return Gt;if(Lt)return Lt;throw new Error("unexpected error. Unable to resolve global object.")},Yt=Xt(),Ct=Yt.document&&Yt.document.childNodes,Dt=Int8Array,Ht=jt,Rt=Ct,Wt=Dt;var zt=function(){return"function"==typeof Ht||"object"==typeof Wt||"function"==typeof Rt};var Ut=function(){return/^\s*function\s*([^(]*)/i},qt=Ut;G(qt,"REGEXP",Ut());var Jt=vt;var Kt=h,Qt=qt.REGEXP,Zt=function(r){return Jt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var $t=function(r){var t,e,n;if(("Object"===(e=Kt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Qt.exec(n.toString()))return t[1]}return Zt(r)?"Buffer":e},re=$t;var te=$t;var ee=function(r){var t;return null===r?"null":"object"===(t=typeof r)?re(r).toLowerCase():t},ne=function(r){return te(r).toLowerCase()},oe=zt()?ne:ee;var ie,ue=function(r){return r.constructor&&r.constructor.prototype===r},ce="undefined"==typeof window?void 0:window,ae=v,fe=dt,le=oe,ve=ue,se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe=ce;ie=function(){var r;if("undefined"===le(pe))return!1;for(r in pe)try{-1===fe(se,r)&&ae(pe,r)&&null!==pe[r]&&"object"===le(pe[r])&&ve(pe[r])}catch(r){return!0}return!1}();var ye="undefined"!=typeof window,be=ie,ge=ue,me=ye;var he=vt,de=v,je=ot,we=st,_e=pt,Oe=function(r){if(!1===me&&!be)return ge(r);try{return ge(r)}catch(r){return!1}},Se=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Pe=t,Ee=at,Ie=function(r){var t,e,n,o,i,u,c;if(o=[],je(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!de(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof r)&&!he(r))return o;e=we&&n}for(i in r)e&&"prototype"===i||!de(r,i)||o.push(String(i));if(_e)for(t=Oe(r),c=0;c<Se.length;c++)u=Se[c],t&&"constructor"===u||!de(r,u)||o.push(String(u));return o},Te=o?n()?Ee:Pe:Ie,Ae=v;var ke=function(){var r,t,e,n,o,i,u;if((r=arguments.length)<2)throw new Error("insufficient input arguments. Must provide at least two objects.");for(o=(t=Te(arguments[0])).length,i=1;i<r;i++){for(e=arguments[i],n=0,u=0;u<o;u++)Ae(e,t[u])&&(t[n]=t[u],n+=1);o=n}return t.length=o,t},Ne=ke;export{Ne as default};
//# sourceMappingURL=mod.js.map
