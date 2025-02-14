function Lc(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(o,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dc={exports:{}},Fa={},Ic={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),Km=Symbol.for("react.portal"),Zm=Symbol.for("react.fragment"),Jm=Symbol.for("react.strict_mode"),Qm=Symbol.for("react.profiler"),Gm=Symbol.for("react.provider"),Xm=Symbol.for("react.context"),Ym=Symbol.for("react.forward_ref"),qm=Symbol.for("react.suspense"),ev=Symbol.for("react.memo"),nv=Symbol.for("react.lazy"),qs=Symbol.iterator;function tv(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var Ac={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fc=Object.assign,Uc={};function ho(e,n,t){this.props=e,this.context=n,this.refs=Uc,this.updater=t||Ac}ho.prototype.isReactComponent={};ho.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ho.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $c(){}$c.prototype=ho.prototype;function Il(e,n,t){this.props=e,this.context=n,this.refs=Uc,this.updater=t||Ac}var Al=Il.prototype=new $c;Al.constructor=Il;Fc(Al,ho.prototype);Al.isPureReactComponent=!0;var eu=Array.isArray,Vc=Object.prototype.hasOwnProperty,Fl={current:null},Bc={key:!0,ref:!0,__self:!0,__source:!0};function Hc(e,n,t){var o,r={},a=null,i=null;if(n!=null)for(o in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(a=""+n.key),n)Vc.call(n,o)&&!Bc.hasOwnProperty(o)&&(r[o]=n[o]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)r[o]===void 0&&(r[o]=l[o]);return{$$typeof:Sr,type:e,key:a,ref:i,props:r,_owner:Fl.current}}function ov(e,n){return{$$typeof:Sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function rv(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var nu=/\/+/g;function li(e,n){return typeof e=="object"&&e!==null&&e.key!=null?rv(""+e.key):n.toString(36)}function na(e,n,t,o,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Sr:case Km:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+li(i,0):o,eu(r)?(t="",e!=null&&(t=e.replace(nu,"$&/")+"/"),na(r,n,t,"",function(u){return u})):r!=null&&(Ul(r)&&(r=ov(r,t+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(nu,"$&/")+"/")+e)),n.push(r)),1;if(i=0,o=o===""?".":o+":",eu(e))for(var l=0;l<e.length;l++){a=e[l];var s=o+li(a,l);i+=na(a,n,t,s,r)}else if(s=tv(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=o+li(a,l++),i+=na(a,n,t,s,r);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Dr(e,n,t){if(e==null)return e;var o=[],r=0;return na(e,o,"","",function(a){return n.call(t,a,r++)}),o}function av(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},ta={transition:null},iv={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:ta,ReactCurrentOwner:Fl};function Wc(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Dr,forEach:function(e,n,t){Dr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Dr(e,function(){n++}),n},toArray:function(e){return Dr(e,function(n){return n})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=ho;Q.Fragment=Zm;Q.Profiler=Qm;Q.PureComponent=Il;Q.StrictMode=Jm;Q.Suspense=qm;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iv;Q.act=Wc;Q.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Fc({},e.props),r=e.key,a=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,i=Fl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Vc.call(n,s)&&!Bc.hasOwnProperty(s)&&(o[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:Sr,type:e.type,key:r,ref:a,props:o,_owner:i}};Q.createContext=function(e){return e={$$typeof:Xm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gm,_context:e},e.Consumer=e};Q.createElement=Hc;Q.createFactory=function(e){var n=Hc.bind(null,e);return n.type=e,n};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Ym,render:e}};Q.isValidElement=Ul;Q.lazy=function(e){return{$$typeof:nv,_payload:{_status:-1,_result:e},_init:av}};Q.memo=function(e,n){return{$$typeof:ev,type:e,compare:n===void 0?null:n}};Q.startTransition=function(e){var n=ta.transition;ta.transition={};try{e()}finally{ta.transition=n}};Q.unstable_act=Wc;Q.useCallback=function(e,n){return Ie.current.useCallback(e,n)};Q.useContext=function(e){return Ie.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};Q.useEffect=function(e,n){return Ie.current.useEffect(e,n)};Q.useId=function(){return Ie.current.useId()};Q.useImperativeHandle=function(e,n,t){return Ie.current.useImperativeHandle(e,n,t)};Q.useInsertionEffect=function(e,n){return Ie.current.useInsertionEffect(e,n)};Q.useLayoutEffect=function(e,n){return Ie.current.useLayoutEffect(e,n)};Q.useMemo=function(e,n){return Ie.current.useMemo(e,n)};Q.useReducer=function(e,n,t){return Ie.current.useReducer(e,n,t)};Q.useRef=function(e){return Ie.current.useRef(e)};Q.useState=function(e){return Ie.current.useState(e)};Q.useSyncExternalStore=function(e,n,t){return Ie.current.useSyncExternalStore(e,n,t)};Q.useTransition=function(){return Ie.current.useTransition()};Q.version="18.3.1";Ic.exports=Q;var h=Ic.exports;const Kc=Oc(h),lv=Lc({__proto__:null,default:Kc},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv=h,uv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),dv=Object.prototype.hasOwnProperty,pv=sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mv={key:!0,ref:!0,__self:!0,__source:!0};function Zc(e,n,t){var o,r={},a=null,i=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(i=n.ref);for(o in n)dv.call(n,o)&&!mv.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)r[o]===void 0&&(r[o]=n[o]);return{$$typeof:uv,type:e,key:a,ref:i,props:r,_owner:pv.current}}Fa.Fragment=cv;Fa.jsx=Zc;Fa.jsxs=Zc;Dc.exports=Fa;var T=Dc.exports,Di={},Jc={exports:{}},qe={},Qc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,A){var U=E.length;E.push(A);e:for(;0<U;){var G=U-1>>>1,Y=E[G];if(0<r(Y,A))E[G]=A,E[U]=Y,U=G;else break e}}function t(E){return E.length===0?null:E[0]}function o(E){if(E.length===0)return null;var A=E[0],U=E.pop();if(U!==A){E[0]=U;e:for(var G=0,Y=E.length,mn=Y>>>1;G<mn;){var Ke=2*(G+1)-1,Ze=E[Ke],Me=Ke+1,nn=E[Me];if(0>r(Ze,U))Me<Y&&0>r(nn,Ze)?(E[G]=nn,E[Me]=U,G=Me):(E[G]=Ze,E[Ke]=U,G=Ke);else if(Me<Y&&0>r(nn,U))E[G]=nn,E[Me]=U,G=Me;else break e}}return A}function r(E,A){var U=E.sortIndex-A.sortIndex;return U!==0?U:E.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var s=[],u=[],c=1,d=null,p=3,b=!1,j=!1,z=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(E){for(var A=t(u);A!==null;){if(A.callback===null)o(u);else if(A.startTime<=E)o(u),A.sortIndex=A.expirationTime,n(s,A);else break;A=t(u)}}function w(E){if(z=!1,k(E),!j)if(t(s)!==null)j=!0,We(R);else{var A=t(u);A!==null&&pn(w,A.startTime-E)}}function R(E,A){j=!1,z&&(z=!1,v(_),_=-1),b=!0;var U=p;try{for(k(A),d=t(s);d!==null&&(!(d.expirationTime>A)||E&&!Z());){var G=d.callback;if(typeof G=="function"){d.callback=null,p=d.priorityLevel;var Y=G(d.expirationTime<=A);A=e.unstable_now(),typeof Y=="function"?d.callback=Y:d===t(s)&&o(s),k(A)}else o(s);d=t(s)}if(d!==null)var mn=!0;else{var Ke=t(u);Ke!==null&&pn(w,Ke.startTime-A),mn=!1}return mn}finally{d=null,p=U,b=!1}}var N=!1,f=null,_=-1,I=5,M=-1;function Z(){return!(e.unstable_now()-M<I)}function $(){if(f!==null){var E=e.unstable_now();M=E;var A=!0;try{A=f(!0,E)}finally{A?ne():(N=!1,f=null)}}else N=!1}var ne;if(typeof m=="function")ne=function(){m($)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Fe=me.port2;me.port1.onmessage=$,ne=function(){Fe.postMessage(null)}}else ne=function(){S($,0)};function We(E){f=E,N||(N=!0,ne())}function pn(E,A){_=S(function(){E(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){j||b||(j=!0,We(R))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var U=p;p=A;try{return E()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,A){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var U=p;p=E;try{return A()}finally{p=U}},e.unstable_scheduleCallback=function(E,A,U){var G=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?G+U:G):U=G,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=U+Y,E={id:c++,callback:A,priorityLevel:E,startTime:U,expirationTime:Y,sortIndex:-1},U>G?(E.sortIndex=U,n(u,E),t(s)===null&&E===t(u)&&(z?(v(_),_=-1):z=!0,pn(w,U-G))):(E.sortIndex=Y,n(s,E),j||b||(j=!0,We(R))),E},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(E){var A=p;return function(){var U=p;p=A;try{return E.apply(this,arguments)}finally{p=U}}}})(Gc);Qc.exports=Gc;var vv=Qc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=h,Ye=vv;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xc=new Set,rr={};function Dt(e,n){uo(e,n),uo(e+"Capture",n)}function uo(e,n){for(rr[e]=n,e=0;e<n.length;e++)Xc.add(n[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ii=Object.prototype.hasOwnProperty,fv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},ou={};function hv(e){return Ii.call(ou,e)?!0:Ii.call(tu,e)?!1:fv.test(e)?ou[e]=!0:(tu[e]=!0,!1)}function yv(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zv(e,n,t,o){if(n===null||typeof n>"u"||yv(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ae(e,n,t,o,r,a,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=i}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new Ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var $l=/[\-:]([a-z])/g;function Vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($l,Vl);Ce[n]=new Ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($l,Vl);Ce[n]=new Ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($l,Vl);Ce[n]=new Ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bl(e,n,t,o){var r=Ce.hasOwnProperty(n)?Ce[n]:null;(r!==null?r.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(zv(n,t,r,o)&&(t=null),o||r===null?hv(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,o=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var Fn=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ir=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),Hl=Symbol.for("react.strict_mode"),Ai=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),Wl=Symbol.for("react.forward_ref"),Fi=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),ed=Symbol.for("react.offscreen"),ru=Symbol.iterator;function Ro(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,si;function Vo(e){if(si===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);si=n&&n[1]||""}return`
`+si+e}var ui=!1;function ci(e,n){if(!e||ui)return"";ui=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var o=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){o=u}e.call(n.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=o.stack.split(`
`),i=r.length-1,l=a.length-1;1<=i&&0<=l&&r[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(r[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||r[i]!==a[l]){var s=`
`+r[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{ui=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vo(e):""}function jv(e){switch(e.tag){case 5:return Vo(e.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return e=ci(e.type,!1),e;case 11:return e=ci(e.type.render,!1),e;case 1:return e=ci(e.type,!0),e;default:return""}}function $i(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ht:return"Portal";case Ai:return"Profiler";case Hl:return"StrictMode";case Fi:return"Suspense";case Ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qc:return(e.displayName||"Context")+".Consumer";case Yc:return(e._context.displayName||"Context")+".Provider";case Wl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kl:return n=e.displayName||null,n!==null?n:$i(e.type)||"Memo";case Qn:n=e._payload,e=e._init;try{return $i(e(n))}catch{}}return null}function gv(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $i(n);case 8:return n===Hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bv(e){var n=nd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,a.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ar(e){e._valueTracker||(e._valueTracker=bv(e))}function td(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=nd(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vi(e,n){var t=n.checked;return pe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function au(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=dt(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function od(e,n){n=n.checked,n!=null&&Bl(e,"checked",n,!1)}function Bi(e,n){od(e,n);var t=dt(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Hi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Hi(e,n.type,dt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function iu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Hi(e,n,t){(n!=="number"||ma(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Bo=Array.isArray;function oo(e,n,t,o){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&o&&(e[t].defaultSelected=!0)}else{for(t=""+dt(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Wi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return pe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Bo(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dt(t)}}function rd(e,n){var t=dt(n.value),o=dt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function su(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ki(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ad(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wv=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(e){wv.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Zo[n]=Zo[e]})});function ld(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Zo.hasOwnProperty(e)&&Zo[e]?(""+n).trim():n+"px"}function sd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,r=ld(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,r):e[t]=r}}var xv=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zi(e,n){if(n){if(xv[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Ji(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=null;function Zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gi=null,ro=null,ao=null;function uu(e){if(e=Cr(e)){if(typeof Gi!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Ha(n),Gi(e.stateNode,e.type,n))}}function ud(e){ro?ao?ao.push(e):ao=[e]:ro=e}function cd(){if(ro){var e=ro,n=ao;if(ao=ro=null,uu(e),n)for(e=0;e<n.length;e++)uu(n[e])}}function dd(e,n){return e(n)}function pd(){}var di=!1;function md(e,n,t){if(di)return e(n,t);di=!0;try{return dd(e,n,t)}finally{di=!1,(ro!==null||ao!==null)&&(pd(),cd())}}function ir(e,n){var t=e.stateNode;if(t===null)return null;var o=Ha(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Xi=!1;if(On)try{var To={};Object.defineProperty(To,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Xi=!1}function Sv(e,n,t,o,r,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var Jo=!1,va=null,ka=!1,Yi=null,Pv={onError:function(e){Jo=!0,va=e}};function Ev(e,n,t,o,r,a,i,l,s){Jo=!1,va=null,Sv.apply(Pv,arguments)}function Cv(e,n,t,o,r,a,i,l,s){if(Ev.apply(this,arguments),Jo){if(Jo){var u=va;Jo=!1,va=null}else throw Error(P(198));ka||(ka=!0,Yi=u)}}function It(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function vd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function cu(e){if(It(e)!==e)throw Error(P(188))}function Rv(e){var n=e.alternate;if(!n){if(n=It(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,o=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(o=r.return,o!==null){t=o;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return cu(r),e;if(a===o)return cu(r),n;a=a.sibling}throw Error(P(188))}if(t.return!==o.return)t=r,o=a;else{for(var i=!1,l=r.child;l;){if(l===t){i=!0,t=r,o=a;break}if(l===o){i=!0,o=r,t=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===t){i=!0,t=a,o=r;break}if(l===o){i=!0,o=a,t=r;break}l=l.sibling}if(!i)throw Error(P(189))}}if(t.alternate!==o)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function kd(e){return e=Rv(e),e!==null?fd(e):null}function fd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=fd(e);if(n!==null)return n;e=e.sibling}return null}var hd=Ye.unstable_scheduleCallback,du=Ye.unstable_cancelCallback,Tv=Ye.unstable_shouldYield,_v=Ye.unstable_requestPaint,ke=Ye.unstable_now,Nv=Ye.unstable_getCurrentPriorityLevel,Jl=Ye.unstable_ImmediatePriority,yd=Ye.unstable_UserBlockingPriority,fa=Ye.unstable_NormalPriority,Mv=Ye.unstable_LowPriority,zd=Ye.unstable_IdlePriority,Ua=null,Pn=null;function Lv(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:Iv,Ov=Math.log,Dv=Math.LN2;function Iv(e){return e>>>=0,e===0?32:31-(Ov(e)/Dv|0)|0}var Ur=64,$r=4194304;function Ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ha(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,r=e.suspendedLanes,a=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~r;l!==0?o=Ho(l):(a&=i,a!==0&&(o=Ho(a)))}else i=t&~r,i!==0?o=Ho(i):a!==0&&(o=Ho(a));if(o===0)return 0;if(n!==0&&n!==o&&!(n&r)&&(r=o&-o,a=n&-n,r>=a||r===16&&(a&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-zn(n),r=1<<t,o|=e[t],n&=~r;return o}function Av(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fv(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-zn(a),l=1<<i,s=r[i];s===-1?(!(l&t)||l&o)&&(r[i]=Av(l,n)):s<=n&&(e.expiredLanes|=l),a&=~l}}function qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jd(){var e=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),e}function pi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Pr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-zn(n),e[n]=t}function Uv(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-zn(t),a=1<<r;n[r]=0,o[r]=-1,e[r]=-1,t&=~a}}function Ql(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-zn(t),r=1<<o;r&n|e[o]&n&&(e[o]|=n),t&=~r}}var ee=0;function gd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bd,Gl,wd,xd,Sd,el=!1,Vr=[],ot=null,rt=null,at=null,lr=new Map,sr=new Map,Xn=[],$v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pu(e,n){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":lr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(n.pointerId)}}function _o(e,n,t,o,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:a,targetContainers:[r]},n!==null&&(n=Cr(n),n!==null&&Gl(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Vv(e,n,t,o,r){switch(n){case"focusin":return ot=_o(ot,e,n,t,o,r),!0;case"dragenter":return rt=_o(rt,e,n,t,o,r),!0;case"mouseover":return at=_o(at,e,n,t,o,r),!0;case"pointerover":var a=r.pointerId;return lr.set(a,_o(lr.get(a)||null,e,n,t,o,r)),!0;case"gotpointercapture":return a=r.pointerId,sr.set(a,_o(sr.get(a)||null,e,n,t,o,r)),!0}return!1}function Pd(e){var n=jt(e.target);if(n!==null){var t=It(n);if(t!==null){if(n=t.tag,n===13){if(n=vd(t),n!==null){e.blockedOn=n,Sd(e.priority,function(){wd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=nl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Qi=o,t.target.dispatchEvent(o),Qi=null}else return n=Cr(t),n!==null&&Gl(n),e.blockedOn=t,!1;n.shift()}return!0}function mu(e,n,t){oa(e)&&t.delete(n)}function Bv(){el=!1,ot!==null&&oa(ot)&&(ot=null),rt!==null&&oa(rt)&&(rt=null),at!==null&&oa(at)&&(at=null),lr.forEach(mu),sr.forEach(mu)}function No(e,n){e.blockedOn===n&&(e.blockedOn=null,el||(el=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Bv)))}function ur(e){function n(r){return No(r,e)}if(0<Vr.length){No(Vr[0],e);for(var t=1;t<Vr.length;t++){var o=Vr[t];o.blockedOn===e&&(o.blockedOn=null)}}for(ot!==null&&No(ot,e),rt!==null&&No(rt,e),at!==null&&No(at,e),lr.forEach(n),sr.forEach(n),t=0;t<Xn.length;t++)o=Xn[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<Xn.length&&(t=Xn[0],t.blockedOn===null);)Pd(t),t.blockedOn===null&&Xn.shift()}var io=Fn.ReactCurrentBatchConfig,ya=!0;function Hv(e,n,t,o){var r=ee,a=io.transition;io.transition=null;try{ee=1,Xl(e,n,t,o)}finally{ee=r,io.transition=a}}function Wv(e,n,t,o){var r=ee,a=io.transition;io.transition=null;try{ee=4,Xl(e,n,t,o)}finally{ee=r,io.transition=a}}function Xl(e,n,t,o){if(ya){var r=nl(e,n,t,o);if(r===null)bi(e,n,o,za,t),pu(e,o);else if(Vv(r,e,n,t,o))o.stopPropagation();else if(pu(e,o),n&4&&-1<$v.indexOf(e)){for(;r!==null;){var a=Cr(r);if(a!==null&&bd(a),a=nl(e,n,t,o),a===null&&bi(e,n,o,za,t),a===r)break;r=a}r!==null&&o.stopPropagation()}else bi(e,n,o,null,t)}}var za=null;function nl(e,n,t,o){if(za=null,e=Zl(o),e=jt(e),e!==null)if(n=It(e),n===null)e=null;else if(t=n.tag,t===13){if(e=vd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return za=e,null}function Ed(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nv()){case Jl:return 1;case yd:return 4;case fa:case Mv:return 16;case zd:return 536870912;default:return 16}default:return 16}}var qn=null,Yl=null,ra=null;function Cd(){if(ra)return ra;var e,n=Yl,t=n.length,o,r="value"in qn?qn.value:qn.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var i=t-e;for(o=1;o<=i&&n[t-o]===r[a-o];o++);return ra=r.slice(e,1<o?1-o:void 0)}function aa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function vu(){return!1}function en(e){function n(t,o,r,a,i){this._reactName=t,this._targetInst=r,this.type=o,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Br:vu,this.isPropagationStopped=vu,this}return pe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),n}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=en(yo),Er=pe({},yo,{view:0,detail:0}),Kv=en(Er),mi,vi,Mo,$a=pe({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(mi=e.screenX-Mo.screenX,vi=e.screenY-Mo.screenY):vi=mi=0,Mo=e),mi)},movementY:function(e){return"movementY"in e?e.movementY:vi}}),ku=en($a),Zv=pe({},$a,{dataTransfer:0}),Jv=en(Zv),Qv=pe({},Er,{relatedTarget:0}),ki=en(Qv),Gv=pe({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=en(Gv),Yv=pe({},yo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qv=en(Yv),ek=pe({},yo,{data:0}),fu=en(ek),nk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ok={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rk(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ok[e])?!!n[e]:!1}function es(){return rk}var ak=pe({},Er,{key:function(e){if(e.key){var n=nk[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=aa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?aa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?aa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ik=en(ak),lk=pe({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=en(lk),sk=pe({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),uk=en(sk),ck=pe({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),dk=en(ck),pk=pe({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mk=en(pk),vk=[9,13,27,32],ns=On&&"CompositionEvent"in window,Qo=null;On&&"documentMode"in document&&(Qo=document.documentMode);var kk=On&&"TextEvent"in window&&!Qo,Rd=On&&(!ns||Qo&&8<Qo&&11>=Qo),yu=" ",zu=!1;function Td(e,n){switch(e){case"keyup":return vk.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function fk(e,n){switch(e){case"compositionend":return _d(n);case"keypress":return n.which!==32?null:(zu=!0,yu);case"textInput":return e=n.data,e===yu&&zu?null:e;default:return null}}function hk(e,n){if(Kt)return e==="compositionend"||!ns&&Td(e,n)?(e=Cd(),ra=Yl=qn=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rd&&n.locale!=="ko"?null:n.data;default:return null}}var yk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yk[e.type]:n==="textarea"}function Nd(e,n,t,o){ud(o),n=ja(n,"onChange"),0<n.length&&(t=new ql("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var Go=null,cr=null;function zk(e){Bd(e,0)}function Va(e){var n=Qt(e);if(td(n))return e}function jk(e,n){if(e==="change")return n}var Md=!1;if(On){var fi;if(On){var hi="oninput"in document;if(!hi){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),hi=typeof gu.oninput=="function"}fi=hi}else fi=!1;Md=fi&&(!document.documentMode||9<document.documentMode)}function bu(){Go&&(Go.detachEvent("onpropertychange",Ld),cr=Go=null)}function Ld(e){if(e.propertyName==="value"&&Va(cr)){var n=[];Nd(n,cr,e,Zl(e)),md(zk,n)}}function gk(e,n,t){e==="focusin"?(bu(),Go=n,cr=t,Go.attachEvent("onpropertychange",Ld)):e==="focusout"&&bu()}function bk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Va(cr)}function wk(e,n){if(e==="click")return Va(n)}function xk(e,n){if(e==="input"||e==="change")return Va(n)}function Sk(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var gn=typeof Object.is=="function"?Object.is:Sk;function dr(e,n){if(gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var r=t[o];if(!Ii.call(n,r)||!gn(e[r],n[r]))return!1}return!0}function wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xu(e,n){var t=wu(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=wu(t)}}function Od(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Od(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Dd(){for(var e=window,n=ma();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ma(e.document)}return n}function ts(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Pk(e){var n=Dd(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Od(t.ownerDocument.documentElement,t)){if(o!==null&&ts(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,a=Math.min(o.start,r);o=o.end===void 0?a:Math.min(o.end,r),!e.extend&&a>o&&(r=o,o=a,a=r),r=xu(t,a);var i=xu(t,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),a>o?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ek=On&&"documentMode"in document&&11>=document.documentMode,Zt=null,tl=null,Xo=null,ol=!1;function Su(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ol||Zt==null||Zt!==ma(o)||(o=Zt,"selectionStart"in o&&ts(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xo&&dr(Xo,o)||(Xo=o,o=ja(tl,"onSelect"),0<o.length&&(n=new ql("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=Zt)))}function Hr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Jt={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},yi={},Id={};On&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Ba(e){if(yi[e])return yi[e];if(!Jt[e])return e;var n=Jt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Id)return yi[e]=n[t];return e}var Ad=Ba("animationend"),Fd=Ba("animationiteration"),Ud=Ba("animationstart"),$d=Ba("transitionend"),Vd=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,n){Vd.set(e,n),Dt(n,[e])}for(var zi=0;zi<Pu.length;zi++){var ji=Pu[zi],Ck=ji.toLowerCase(),Rk=ji[0].toUpperCase()+ji.slice(1);vt(Ck,"on"+Rk)}vt(Ad,"onAnimationEnd");vt(Fd,"onAnimationIteration");vt(Ud,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt($d,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Eu(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,Cv(o,n,void 0,e),e.currentTarget=null}function Bd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],r=o.event;o=o.listeners;e:{var a=void 0;if(n)for(var i=o.length-1;0<=i;i--){var l=o[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&r.isPropagationStopped())break e;Eu(r,l,u),a=s}else for(i=0;i<o.length;i++){if(l=o[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&r.isPropagationStopped())break e;Eu(r,l,u),a=s}}}if(ka)throw e=Yi,ka=!1,Yi=null,e}function re(e,n){var t=n[sl];t===void 0&&(t=n[sl]=new Set);var o=e+"__bubble";t.has(o)||(Hd(n,e,2,!1),t.add(o))}function gi(e,n,t){var o=0;n&&(o|=4),Hd(t,e,o,n)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[Wr]){e[Wr]=!0,Xc.forEach(function(t){t!=="selectionchange"&&(Tk.has(t)||gi(t,!1,e),gi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wr]||(n[Wr]=!0,gi("selectionchange",!1,n))}}function Hd(e,n,t,o){switch(Ed(n)){case 1:var r=Hv;break;case 4:r=Wv;break;default:r=Xl}t=r.bind(null,n,t,e),r=void 0,!Xi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function bi(e,n,t,o,r){var a=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;i=i.return}for(;l!==null;){if(i=jt(l),i===null)return;if(s=i.tag,s===5||s===6){o=a=i;continue e}l=l.parentNode}}o=o.return}md(function(){var u=a,c=Zl(t),d=[];e:{var p=Vd.get(e);if(p!==void 0){var b=ql,j=e;switch(e){case"keypress":if(aa(t)===0)break e;case"keydown":case"keyup":b=ik;break;case"focusin":j="focus",b=ki;break;case"focusout":j="blur",b=ki;break;case"beforeblur":case"afterblur":b=ki;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=uk;break;case Ad:case Fd:case Ud:b=Xv;break;case $d:b=dk;break;case"scroll":b=Kv;break;case"wheel":b=mk;break;case"copy":case"cut":case"paste":b=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=hu}var z=(n&4)!==0,S=!z&&e==="scroll",v=z?p!==null?p+"Capture":null:p;z=[];for(var m=u,k;m!==null;){k=m;var w=k.stateNode;if(k.tag===5&&w!==null&&(k=w,v!==null&&(w=ir(m,v),w!=null&&z.push(mr(m,w,k)))),S)break;m=m.return}0<z.length&&(p=new b(p,j,null,t,c),d.push({event:p,listeners:z}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",p&&t!==Qi&&(j=t.relatedTarget||t.fromElement)&&(jt(j)||j[Dn]))break e;if((b||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,b?(j=t.relatedTarget||t.toElement,b=u,j=j?jt(j):null,j!==null&&(S=It(j),j!==S||j.tag!==5&&j.tag!==6)&&(j=null)):(b=null,j=u),b!==j)){if(z=ku,w="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(z=hu,w="onPointerLeave",v="onPointerEnter",m="pointer"),S=b==null?p:Qt(b),k=j==null?p:Qt(j),p=new z(w,m+"leave",b,t,c),p.target=S,p.relatedTarget=k,w=null,jt(c)===u&&(z=new z(v,m+"enter",j,t,c),z.target=k,z.relatedTarget=S,w=z),S=w,b&&j)n:{for(z=b,v=j,m=0,k=z;k;k=Vt(k))m++;for(k=0,w=v;w;w=Vt(w))k++;for(;0<m-k;)z=Vt(z),m--;for(;0<k-m;)v=Vt(v),k--;for(;m--;){if(z===v||v!==null&&z===v.alternate)break n;z=Vt(z),v=Vt(v)}z=null}else z=null;b!==null&&Cu(d,p,b,z,!1),j!==null&&S!==null&&Cu(d,S,j,z,!0)}}e:{if(p=u?Qt(u):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var R=jk;else if(ju(p))if(Md)R=xk;else{R=bk;var N=gk}else(b=p.nodeName)&&b.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=wk);if(R&&(R=R(e,u))){Nd(d,R,t,c);break e}N&&N(e,p,u),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&Hi(p,"number",p.value)}switch(N=u?Qt(u):window,e){case"focusin":(ju(N)||N.contentEditable==="true")&&(Zt=N,tl=u,Xo=null);break;case"focusout":Xo=tl=Zt=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,Su(d,t,c);break;case"selectionchange":if(Ek)break;case"keydown":case"keyup":Su(d,t,c)}var f;if(ns)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Kt?Td(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Rd&&t.locale!=="ko"&&(Kt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Kt&&(f=Cd()):(qn=c,Yl="value"in qn?qn.value:qn.textContent,Kt=!0)),N=ja(u,_),0<N.length&&(_=new fu(_,e,null,t,c),d.push({event:_,listeners:N}),f?_.data=f:(f=_d(t),f!==null&&(_.data=f)))),(f=kk?fk(e,t):hk(e,t))&&(u=ja(u,"onBeforeInput"),0<u.length&&(c=new fu("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=f))}Bd(d,n)})}function mr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ja(e,n){for(var t=n+"Capture",o=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=ir(e,t),a!=null&&o.unshift(mr(e,a,r)),a=ir(e,n),a!=null&&o.push(mr(e,a,r))),e=e.return}return o}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,n,t,o,r){for(var a=n._reactName,i=[];t!==null&&t!==o;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===o)break;l.tag===5&&u!==null&&(l=u,r?(s=ir(t,a),s!=null&&i.unshift(mr(t,s,l))):r||(s=ir(t,a),s!=null&&i.push(mr(t,s,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var _k=/\r\n?/g,Nk=/\u0000|\uFFFD/g;function Ru(e){return(typeof e=="string"?e:""+e).replace(_k,`
`).replace(Nk,"")}function Kr(e,n,t){if(n=Ru(n),Ru(e)!==n&&t)throw Error(P(425))}function ga(){}var rl=null,al=null;function il(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ll=typeof setTimeout=="function"?setTimeout:void 0,Mk=typeof clearTimeout=="function"?clearTimeout:void 0,Tu=typeof Promise=="function"?Promise:void 0,Lk=typeof queueMicrotask=="function"?queueMicrotask:typeof Tu<"u"?function(e){return Tu.resolve(null).then(e).catch(Ok)}:ll;function Ok(e){setTimeout(function(){throw e})}function wi(e,n){var t=n,o=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(o===0){e.removeChild(r),ur(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=r}while(t);ur(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _u(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Sn="__reactFiber$"+zo,vr="__reactProps$"+zo,Dn="__reactContainer$"+zo,sl="__reactEvents$"+zo,Dk="__reactListeners$"+zo,Ik="__reactHandles$"+zo;function jt(e){var n=e[Sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Dn]||t[Sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=_u(e);e!==null;){if(t=e[Sn])return t;e=_u(e)}return n}e=t,t=e.parentNode}return null}function Cr(e){return e=e[Sn]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ha(e){return e[vr]||null}var ul=[],Gt=-1;function kt(e){return{current:e}}function ae(e){0>Gt||(e.current=ul[Gt],ul[Gt]=null,Gt--)}function te(e,n){Gt++,ul[Gt]=e.current,e.current=n}var pt={},Ne=kt(pt),Ve=kt(!1),Rt=pt;function co(e,n){var t=e.type.contextTypes;if(!t)return pt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in t)r[a]=n[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Be(e){return e=e.childContextTypes,e!=null}function ba(){ae(Ve),ae(Ne)}function Nu(e,n,t){if(Ne.current!==pt)throw Error(P(168));te(Ne,n),te(Ve,t)}function Wd(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var r in o)if(!(r in n))throw Error(P(108,gv(e)||"Unknown",r));return pe({},t,o)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Rt=Ne.current,te(Ne,e),te(Ve,Ve.current),!0}function Mu(e,n,t){var o=e.stateNode;if(!o)throw Error(P(169));t?(e=Wd(e,n,Rt),o.__reactInternalMemoizedMergedChildContext=e,ae(Ve),ae(Ne),te(Ne,e)):ae(Ve),te(Ve,t)}var Tn=null,Wa=!1,xi=!1;function Kd(e){Tn===null?Tn=[e]:Tn.push(e)}function Ak(e){Wa=!0,Kd(e)}function ft(){if(!xi&&Tn!==null){xi=!0;var e=0,n=ee;try{var t=Tn;for(ee=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Tn=null,Wa=!1}catch(r){throw Tn!==null&&(Tn=Tn.slice(e+1)),hd(Jl,ft),r}finally{ee=n,xi=!1}}return null}var Xt=[],Yt=0,xa=null,Sa=0,rn=[],an=0,Tt=null,_n=1,Nn="";function yt(e,n){Xt[Yt++]=Sa,Xt[Yt++]=xa,xa=e,Sa=n}function Zd(e,n,t){rn[an++]=_n,rn[an++]=Nn,rn[an++]=Tt,Tt=e;var o=_n;e=Nn;var r=32-zn(o)-1;o&=~(1<<r),t+=1;var a=32-zn(n)+r;if(30<a){var i=r-r%5;a=(o&(1<<i)-1).toString(32),o>>=i,r-=i,_n=1<<32-zn(n)+r|t<<r|o,Nn=a+e}else _n=1<<a|t<<r|o,Nn=e}function os(e){e.return!==null&&(yt(e,1),Zd(e,1,0))}function rs(e){for(;e===xa;)xa=Xt[--Yt],Xt[Yt]=null,Sa=Xt[--Yt],Xt[Yt]=null;for(;e===Tt;)Tt=rn[--an],rn[an]=null,Nn=rn[--an],rn[an]=null,_n=rn[--an],rn[an]=null}var Xe=null,Ge=null,ue=!1,yn=null;function Jd(e,n){var t=sn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Lu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Xe=e,Ge=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Xe=e,Ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Tt!==null?{id:_n,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=sn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Xe=e,Ge=null,!0):!1;default:return!1}}function cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dl(e){if(ue){var n=Ge;if(n){var t=n;if(!Lu(e,n)){if(cl(e))throw Error(P(418));n=it(t.nextSibling);var o=Xe;n&&Lu(e,n)?Jd(o,t):(e.flags=e.flags&-4097|2,ue=!1,Xe=e)}}else{if(cl(e))throw Error(P(418));e.flags=e.flags&-4097|2,ue=!1,Xe=e}}}function Ou(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Zr(e){if(e!==Xe)return!1;if(!ue)return Ou(e),ue=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!il(e.type,e.memoizedProps)),n&&(n=Ge)){if(cl(e))throw Qd(),Error(P(418));for(;n;)Jd(e,n),n=it(n.nextSibling)}if(Ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ge=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ge=null}}else Ge=Xe?it(e.stateNode.nextSibling):null;return!0}function Qd(){for(var e=Ge;e;)e=it(e.nextSibling)}function po(){Ge=Xe=null,ue=!1}function as(e){yn===null?yn=[e]:yn.push(e)}var Fk=Fn.ReactCurrentBatchConfig;function Lo(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var o=t.stateNode}if(!o)throw Error(P(147,e));var r=o,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(i){var l=r.refs;i===null?delete l[a]:l[a]=i},n._stringRef=a,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function Jr(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Du(e){var n=e._init;return n(e._payload)}function Gd(e){function n(v,m){if(e){var k=v.deletions;k===null?(v.deletions=[m],v.flags|=16):k.push(m)}}function t(v,m){if(!e)return null;for(;m!==null;)n(v,m),m=m.sibling;return null}function o(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function r(v,m){return v=ct(v,m),v.index=0,v.sibling=null,v}function a(v,m,k){return v.index=k,e?(k=v.alternate,k!==null?(k=k.index,k<m?(v.flags|=2,m):k):(v.flags|=2,m)):(v.flags|=1048576,m)}function i(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,m,k,w){return m===null||m.tag!==6?(m=_i(k,v.mode,w),m.return=v,m):(m=r(m,k),m.return=v,m)}function s(v,m,k,w){var R=k.type;return R===Wt?c(v,m,k.props.children,w,k.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qn&&Du(R)===m.type)?(w=r(m,k.props),w.ref=Lo(v,m,k),w.return=v,w):(w=pa(k.type,k.key,k.props,null,v.mode,w),w.ref=Lo(v,m,k),w.return=v,w)}function u(v,m,k,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==k.containerInfo||m.stateNode.implementation!==k.implementation?(m=Ni(k,v.mode,w),m.return=v,m):(m=r(m,k.children||[]),m.return=v,m)}function c(v,m,k,w,R){return m===null||m.tag!==7?(m=Et(k,v.mode,w,R),m.return=v,m):(m=r(m,k),m.return=v,m)}function d(v,m,k){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_i(""+m,v.mode,k),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ir:return k=pa(m.type,m.key,m.props,null,v.mode,k),k.ref=Lo(v,null,m),k.return=v,k;case Ht:return m=Ni(m,v.mode,k),m.return=v,m;case Qn:var w=m._init;return d(v,w(m._payload),k)}if(Bo(m)||Ro(m))return m=Et(m,v.mode,k,null),m.return=v,m;Jr(v,m)}return null}function p(v,m,k,w){var R=m!==null?m.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return R!==null?null:l(v,m,""+k,w);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ir:return k.key===R?s(v,m,k,w):null;case Ht:return k.key===R?u(v,m,k,w):null;case Qn:return R=k._init,p(v,m,R(k._payload),w)}if(Bo(k)||Ro(k))return R!==null?null:c(v,m,k,w,null);Jr(v,k)}return null}function b(v,m,k,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(k)||null,l(m,v,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ir:return v=v.get(w.key===null?k:w.key)||null,s(m,v,w,R);case Ht:return v=v.get(w.key===null?k:w.key)||null,u(m,v,w,R);case Qn:var N=w._init;return b(v,m,k,N(w._payload),R)}if(Bo(w)||Ro(w))return v=v.get(k)||null,c(m,v,w,R,null);Jr(m,w)}return null}function j(v,m,k,w){for(var R=null,N=null,f=m,_=m=0,I=null;f!==null&&_<k.length;_++){f.index>_?(I=f,f=null):I=f.sibling;var M=p(v,f,k[_],w);if(M===null){f===null&&(f=I);break}e&&f&&M.alternate===null&&n(v,f),m=a(M,m,_),N===null?R=M:N.sibling=M,N=M,f=I}if(_===k.length)return t(v,f),ue&&yt(v,_),R;if(f===null){for(;_<k.length;_++)f=d(v,k[_],w),f!==null&&(m=a(f,m,_),N===null?R=f:N.sibling=f,N=f);return ue&&yt(v,_),R}for(f=o(v,f);_<k.length;_++)I=b(f,v,_,k[_],w),I!==null&&(e&&I.alternate!==null&&f.delete(I.key===null?_:I.key),m=a(I,m,_),N===null?R=I:N.sibling=I,N=I);return e&&f.forEach(function(Z){return n(v,Z)}),ue&&yt(v,_),R}function z(v,m,k,w){var R=Ro(k);if(typeof R!="function")throw Error(P(150));if(k=R.call(k),k==null)throw Error(P(151));for(var N=R=null,f=m,_=m=0,I=null,M=k.next();f!==null&&!M.done;_++,M=k.next()){f.index>_?(I=f,f=null):I=f.sibling;var Z=p(v,f,M.value,w);if(Z===null){f===null&&(f=I);break}e&&f&&Z.alternate===null&&n(v,f),m=a(Z,m,_),N===null?R=Z:N.sibling=Z,N=Z,f=I}if(M.done)return t(v,f),ue&&yt(v,_),R;if(f===null){for(;!M.done;_++,M=k.next())M=d(v,M.value,w),M!==null&&(m=a(M,m,_),N===null?R=M:N.sibling=M,N=M);return ue&&yt(v,_),R}for(f=o(v,f);!M.done;_++,M=k.next())M=b(f,v,_,M.value,w),M!==null&&(e&&M.alternate!==null&&f.delete(M.key===null?_:M.key),m=a(M,m,_),N===null?R=M:N.sibling=M,N=M);return e&&f.forEach(function($){return n(v,$)}),ue&&yt(v,_),R}function S(v,m,k,w){if(typeof k=="object"&&k!==null&&k.type===Wt&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Ir:e:{for(var R=k.key,N=m;N!==null;){if(N.key===R){if(R=k.type,R===Wt){if(N.tag===7){t(v,N.sibling),m=r(N,k.props.children),m.return=v,v=m;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qn&&Du(R)===N.type){t(v,N.sibling),m=r(N,k.props),m.ref=Lo(v,N,k),m.return=v,v=m;break e}t(v,N);break}else n(v,N);N=N.sibling}k.type===Wt?(m=Et(k.props.children,v.mode,w,k.key),m.return=v,v=m):(w=pa(k.type,k.key,k.props,null,v.mode,w),w.ref=Lo(v,m,k),w.return=v,v=w)}return i(v);case Ht:e:{for(N=k.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===k.containerInfo&&m.stateNode.implementation===k.implementation){t(v,m.sibling),m=r(m,k.children||[]),m.return=v,v=m;break e}else{t(v,m);break}else n(v,m);m=m.sibling}m=Ni(k,v.mode,w),m.return=v,v=m}return i(v);case Qn:return N=k._init,S(v,m,N(k._payload),w)}if(Bo(k))return j(v,m,k,w);if(Ro(k))return z(v,m,k,w);Jr(v,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,m!==null&&m.tag===6?(t(v,m.sibling),m=r(m,k),m.return=v,v=m):(t(v,m),m=_i(k,v.mode,w),m.return=v,v=m),i(v)):t(v,m)}return S}var mo=Gd(!0),Xd=Gd(!1),Pa=kt(null),Ea=null,qt=null,is=null;function ls(){is=qt=Ea=null}function ss(e){var n=Pa.current;ae(Pa),e._currentValue=n}function pl(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function lo(e,n){Ea=e,is=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&($e=!0),e.firstContext=null)}function cn(e){var n=e._currentValue;if(is!==e)if(e={context:e,memoizedValue:n,next:null},qt===null){if(Ea===null)throw Error(P(308));qt=e,Ea.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return n}var gt=null;function us(e){gt===null?gt=[e]:gt.push(e)}function Yd(e,n,t,o){var r=n.interleaved;return r===null?(t.next=t,us(n)):(t.next=r.next,r.next=t),n.interleaved=t,In(e,o)}function In(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Gn=!1;function cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function lt(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,q&2){var r=o.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),o.pending=n,In(e,t)}return r=o.interleaved,r===null?(n.next=n,us(o)):(n.next=r.next,r.next=n),o.interleaved=n,In(e,t)}function ia(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Ql(e,t)}}function Iu(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?r=a=i:a=a.next=i,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ca(e,n,t,o){var r=e.updateQueue;Gn=!1;var a=r.firstBaseUpdate,i=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==i&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var d=r.baseState;i=0,c=u=s=null,l=a;do{var p=l.lane,b=l.eventTime;if((o&p)===p){c!==null&&(c=c.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var j=e,z=l;switch(p=n,b=t,z.tag){case 1:if(j=z.payload,typeof j=="function"){d=j.call(b,d,p);break e}d=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=z.payload,p=typeof j=="function"?j.call(b,d,p):j,p==null)break e;d=pe({},d,p);break e;case 2:Gn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[l]:p.push(l))}else b={eventTime:b,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=b,s=d):c=c.next=b,i|=p;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;p=l,l=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(c===null&&(s=d),r.baseState=s,r.firstBaseUpdate=u,r.lastBaseUpdate=c,n=r.shared.interleaved,n!==null){r=n;do i|=r.lane,r=r.next;while(r!==n)}else a===null&&(r.shared.lanes=0);Nt|=i,e.lanes=i,e.memoizedState=d}}function Au(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],r=o.callback;if(r!==null){if(o.callback=null,o=t,typeof r!="function")throw Error(P(191,r));r.call(o)}}}var Rr={},En=kt(Rr),kr=kt(Rr),fr=kt(Rr);function bt(e){if(e===Rr)throw Error(P(174));return e}function ds(e,n){switch(te(fr,n),te(kr,e),te(En,Rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ki(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ki(n,e)}ae(En),te(En,n)}function vo(){ae(En),ae(kr),ae(fr)}function ep(e){bt(fr.current);var n=bt(En.current),t=Ki(n,e.type);n!==t&&(te(kr,e),te(En,t))}function ps(e){kr.current===e&&(ae(En),ae(kr))}var ce=kt(0);function Ra(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Si=[];function ms(){for(var e=0;e<Si.length;e++)Si[e]._workInProgressVersionPrimary=null;Si.length=0}var la=Fn.ReactCurrentDispatcher,Pi=Fn.ReactCurrentBatchConfig,_t=0,de=null,ye=null,ge=null,Ta=!1,Yo=!1,hr=0,Uk=0;function Re(){throw Error(P(321))}function vs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!gn(e[t],n[t]))return!1;return!0}function ks(e,n,t,o,r,a){if(_t=a,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,la.current=e===null||e.memoizedState===null?Hk:Wk,e=t(o,r),Yo){a=0;do{if(Yo=!1,hr=0,25<=a)throw Error(P(301));a+=1,ge=ye=null,n.updateQueue=null,la.current=Kk,e=t(o,r)}while(Yo)}if(la.current=_a,n=ye!==null&&ye.next!==null,_t=0,ge=ye=de=null,Ta=!1,n)throw Error(P(300));return e}function fs(){var e=hr!==0;return hr=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?de.memoizedState=ge=e:ge=ge.next=e,ge}function dn(){if(ye===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var n=ge===null?de.memoizedState:ge.next;if(n!==null)ge=n,ye=e;else{if(e===null)throw Error(P(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},ge===null?de.memoizedState=ge=e:ge=ge.next=e}return ge}function yr(e,n){return typeof n=="function"?n(e):n}function Ei(e){var n=dn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var o=ye,r=o.baseQueue,a=t.pending;if(a!==null){if(r!==null){var i=r.next;r.next=a.next,a.next=i}o.baseQueue=r=a,t.pending=null}if(r!==null){a=r.next,o=o.baseState;var l=i=null,s=null,u=a;do{var c=u.lane;if((_t&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,i=o):s=s.next=d,de.lanes|=c,Nt|=c}u=u.next}while(u!==null&&u!==a);s===null?i=o:s.next=l,gn(o,n.memoizedState)||($e=!0),n.memoizedState=o,n.baseState=i,n.baseQueue=s,t.lastRenderedState=o}if(e=t.interleaved,e!==null){r=e;do a=r.lane,de.lanes|=a,Nt|=a,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ci(e){var n=dn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var o=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do a=e(a,i.action),i=i.next;while(i!==r);gn(a,n.memoizedState)||($e=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,o]}function np(){}function tp(e,n){var t=de,o=dn(),r=n(),a=!gn(o.memoizedState,r);if(a&&(o.memoizedState=r,$e=!0),o=o.queue,hs(ap.bind(null,t,o,e),[e]),o.getSnapshot!==n||a||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,zr(9,rp.bind(null,t,o,r,n),void 0,null),be===null)throw Error(P(349));_t&30||op(t,n,r)}return r}function op(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=de.updateQueue,n===null?(n={lastEffect:null,stores:null},de.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function rp(e,n,t,o){n.value=t,n.getSnapshot=o,ip(n)&&lp(e)}function ap(e,n,t){return t(function(){ip(n)&&lp(e)})}function ip(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!gn(e,t)}catch{return!0}}function lp(e){var n=In(e,1);n!==null&&jn(n,e,1,-1)}function Fu(e){var n=xn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:e},n.queue=e,e=e.dispatch=Bk.bind(null,de,e),[n.memoizedState,e]}function zr(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=de.updateQueue,n===null?(n={lastEffect:null,stores:null},de.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function sp(){return dn().memoizedState}function sa(e,n,t,o){var r=xn();de.flags|=e,r.memoizedState=zr(1|n,t,void 0,o===void 0?null:o)}function Ka(e,n,t,o){var r=dn();o=o===void 0?null:o;var a=void 0;if(ye!==null){var i=ye.memoizedState;if(a=i.destroy,o!==null&&vs(o,i.deps)){r.memoizedState=zr(n,t,a,o);return}}de.flags|=e,r.memoizedState=zr(1|n,t,a,o)}function Uu(e,n){return sa(8390656,8,e,n)}function hs(e,n){return Ka(2048,8,e,n)}function up(e,n){return Ka(4,2,e,n)}function cp(e,n){return Ka(4,4,e,n)}function dp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pp(e,n,t){return t=t!=null?t.concat([e]):null,Ka(4,4,dp.bind(null,n,e),t)}function ys(){}function mp(e,n){var t=dn();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&vs(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function vp(e,n){var t=dn();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&vs(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function kp(e,n,t){return _t&21?(gn(t,n)||(t=jd(),de.lanes|=t,Nt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=t)}function $k(e,n){var t=ee;ee=t!==0&&4>t?t:4,e(!0);var o=Pi.transition;Pi.transition={};try{e(!1),n()}finally{ee=t,Pi.transition=o}}function fp(){return dn().memoizedState}function Vk(e,n,t){var o=ut(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},hp(e))yp(n,t);else if(t=Yd(e,n,t,o),t!==null){var r=De();jn(t,e,o,r),zp(t,n,o)}}function Bk(e,n,t){var o=ut(e),r={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(hp(e))yp(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var i=n.lastRenderedState,l=a(i,t);if(r.hasEagerState=!0,r.eagerState=l,gn(l,i)){var s=n.interleaved;s===null?(r.next=r,us(n)):(r.next=s.next,s.next=r),n.interleaved=r;return}}catch{}finally{}t=Yd(e,n,r,o),t!==null&&(r=De(),jn(t,e,o,r),zp(t,n,o))}}function hp(e){var n=e.alternate;return e===de||n!==null&&n===de}function yp(e,n){Yo=Ta=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function zp(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Ql(e,t)}}var _a={readContext:cn,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Hk={readContext:cn,useCallback:function(e,n){return xn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:Uu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,sa(4194308,4,dp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return sa(4194308,4,e,n)},useInsertionEffect:function(e,n){return sa(4,2,e,n)},useMemo:function(e,n){var t=xn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=xn();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Vk.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=xn();return e={current:e},n.memoizedState=e},useState:Fu,useDebugValue:ys,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=Fu(!1),n=e[0];return e=$k.bind(null,e[1]),xn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=de,r=xn();if(ue){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),be===null)throw Error(P(349));_t&30||op(o,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,Uu(ap.bind(null,o,a,e),[e]),o.flags|=2048,zr(9,rp.bind(null,o,a,t,n),void 0,null),t},useId:function(){var e=xn(),n=be.identifierPrefix;if(ue){var t=Nn,o=_n;t=(o&~(1<<32-zn(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=hr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Uk++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Wk={readContext:cn,useCallback:mp,useContext:cn,useEffect:hs,useImperativeHandle:pp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:vp,useReducer:Ei,useRef:sp,useState:function(){return Ei(yr)},useDebugValue:ys,useDeferredValue:function(e){var n=dn();return kp(n,ye.memoizedState,e)},useTransition:function(){var e=Ei(yr)[0],n=dn().memoizedState;return[e,n]},useMutableSource:np,useSyncExternalStore:tp,useId:fp,unstable_isNewReconciler:!1},Kk={readContext:cn,useCallback:mp,useContext:cn,useEffect:hs,useImperativeHandle:pp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:vp,useReducer:Ci,useRef:sp,useState:function(){return Ci(yr)},useDebugValue:ys,useDeferredValue:function(e){var n=dn();return ye===null?n.memoizedState=e:kp(n,ye.memoizedState,e)},useTransition:function(){var e=Ci(yr)[0],n=dn().memoizedState;return[e,n]},useMutableSource:np,useSyncExternalStore:tp,useId:fp,unstable_isNewReconciler:!1};function kn(e,n){if(e&&e.defaultProps){n=pe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ml(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:pe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Za={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=De(),r=ut(e),a=Mn(o,r);a.payload=n,t!=null&&(a.callback=t),n=lt(e,a,r),n!==null&&(jn(n,e,r,o),ia(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=De(),r=ut(e),a=Mn(o,r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=lt(e,a,r),n!==null&&(jn(n,e,r,o),ia(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=De(),o=ut(e),r=Mn(t,o);r.tag=2,n!=null&&(r.callback=n),n=lt(e,r,o),n!==null&&(jn(n,e,o,t),ia(n,e,o))}};function $u(e,n,t,o,r,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,i):n.prototype&&n.prototype.isPureReactComponent?!dr(t,o)||!dr(r,a):!0}function jp(e,n,t){var o=!1,r=pt,a=n.contextType;return typeof a=="object"&&a!==null?a=cn(a):(r=Be(n)?Rt:Ne.current,o=n.contextTypes,a=(o=o!=null)?co(e,r):pt),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Za,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),n}function Vu(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&Za.enqueueReplaceState(n,n.state,null)}function vl(e,n,t,o){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},cs(e);var a=n.contextType;typeof a=="object"&&a!==null?r.context=cn(a):(a=Be(n)?Rt:Ne.current,r.context=co(e,a)),r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(ml(e,n,a,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Za.enqueueReplaceState(r,r.state,null),Ca(e,t,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ko(e,n){try{var t="",o=n;do t+=jv(o),o=o.return;while(o);var r=t}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:r,digest:null}}function Ri(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function kl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Zk=typeof WeakMap=="function"?WeakMap:Map;function gp(e,n,t){t=Mn(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){Ma||(Ma=!0,Sl=o),kl(e,n)},t}function bp(e,n,t){t=Mn(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=n.value;t.payload=function(){return o(r)},t.callback=function(){kl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){kl(e,n),typeof o!="function"&&(st===null?st=new Set([this]):st.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Bu(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Zk;var r=new Set;o.set(n,r)}else r=o.get(n),r===void 0&&(r=new Set,o.set(n,r));r.has(t)||(r.add(t),e=sf.bind(null,e,n,t),n.then(e,e))}function Hu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Wu(e,n,t,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Mn(-1,1),n.tag=2,lt(t,n,1))),t.lanes|=1),e)}var Jk=Fn.ReactCurrentOwner,$e=!1;function Oe(e,n,t,o){n.child=e===null?Xd(n,null,t,o):mo(n,e.child,t,o)}function Ku(e,n,t,o,r){t=t.render;var a=n.ref;return lo(n,r),o=ks(e,n,t,o,a,r),t=fs(),e!==null&&!$e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,An(e,n,r)):(ue&&t&&os(n),n.flags|=1,Oe(e,n,o,r),n.child)}function Zu(e,n,t,o,r){if(e===null){var a=t.type;return typeof a=="function"&&!Ps(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,wp(e,n,a,o,r)):(e=pa(t.type,null,o,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&r)){var i=a.memoizedProps;if(t=t.compare,t=t!==null?t:dr,t(i,o)&&e.ref===n.ref)return An(e,n,r)}return n.flags|=1,e=ct(a,o),e.ref=n.ref,e.return=n,n.child=e}function wp(e,n,t,o,r){if(e!==null){var a=e.memoizedProps;if(dr(a,o)&&e.ref===n.ref)if($e=!1,n.pendingProps=o=a,(e.lanes&r)!==0)e.flags&131072&&($e=!0);else return n.lanes=e.lanes,An(e,n,r)}return fl(e,n,t,o,r)}function xp(e,n,t){var o=n.pendingProps,r=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(no,Qe),Qe|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,te(no,Qe),Qe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:t,te(no,Qe),Qe|=o}else a!==null?(o=a.baseLanes|t,n.memoizedState=null):o=t,te(no,Qe),Qe|=o;return Oe(e,n,r,t),n.child}function Sp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function fl(e,n,t,o,r){var a=Be(t)?Rt:Ne.current;return a=co(n,a),lo(n,r),t=ks(e,n,t,o,a,r),o=fs(),e!==null&&!$e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,An(e,n,r)):(ue&&o&&os(n),n.flags|=1,Oe(e,n,t,r),n.child)}function Ju(e,n,t,o,r){if(Be(t)){var a=!0;wa(n)}else a=!1;if(lo(n,r),n.stateNode===null)ua(e,n),jp(n,t,o),vl(n,t,o,r),o=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var s=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=Be(t)?Rt:Ne.current,u=co(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==o||s!==u)&&Vu(n,i,o,u),Gn=!1;var p=n.memoizedState;i.state=p,Ca(n,o,i,r),s=n.memoizedState,l!==o||p!==s||Ve.current||Gn?(typeof c=="function"&&(ml(n,t,c,o),s=n.memoizedState),(l=Gn||$u(n,t,l,o,p,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=s),i.props=o,i.state=s,i.context=u,o=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{i=n.stateNode,qd(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:kn(n.type,l),i.props=u,d=n.pendingProps,p=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=cn(s):(s=Be(t)?Rt:Ne.current,s=co(n,s));var b=t.getDerivedStateFromProps;(c=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||p!==s)&&Vu(n,i,o,s),Gn=!1,p=n.memoizedState,i.state=p,Ca(n,o,i,r);var j=n.memoizedState;l!==d||p!==j||Ve.current||Gn?(typeof b=="function"&&(ml(n,t,b,o),j=n.memoizedState),(u=Gn||$u(n,t,u,o,p,j,s)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,j,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,j,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=j),i.props=o,i.state=j,i.context=s,o=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),o=!1)}return hl(e,n,t,o,a,r)}function hl(e,n,t,o,r,a){Sp(e,n);var i=(n.flags&128)!==0;if(!o&&!i)return r&&Mu(n,t,!1),An(e,n,a);o=n.stateNode,Jk.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&i?(n.child=mo(n,e.child,null,a),n.child=mo(n,null,l,a)):Oe(e,n,l,a),n.memoizedState=o.state,r&&Mu(n,t,!0),n.child}function Pp(e){var n=e.stateNode;n.pendingContext?Nu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Nu(e,n.context,!1),ds(e,n.containerInfo)}function Qu(e,n,t,o,r){return po(),as(r),n.flags|=256,Oe(e,n,t,o),n.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ep(e,n,t){var o=n.pendingProps,r=ce.current,a=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),te(ce,r&1),e===null)return dl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=o.children,e=o.fallback,a?(o=n.mode,a=n.child,i={mode:"hidden",children:i},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Ga(i,o,0,null),e=Et(e,o,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=zl(t),n.memoizedState=yl,e):zs(n,i));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Qk(e,n,i,o,l,r,t);if(a){a=o.fallback,i=n.mode,r=e.child,l=r.sibling;var s={mode:"hidden",children:o.children};return!(i&1)&&n.child!==r?(o=n.child,o.childLanes=0,o.pendingProps=s,n.deletions=null):(o=ct(r,s),o.subtreeFlags=r.subtreeFlags&14680064),l!==null?a=ct(l,a):(a=Et(a,i,t,null),a.flags|=2),a.return=n,o.return=n,o.sibling=a,n.child=o,o=a,a=n.child,i=e.child.memoizedState,i=i===null?zl(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~t,n.memoizedState=yl,o}return a=e.child,e=a.sibling,o=ct(a,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function zs(e,n){return n=Ga({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Qr(e,n,t,o){return o!==null&&as(o),mo(n,e.child,null,t),e=zs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qk(e,n,t,o,r,a,i){if(t)return n.flags&256?(n.flags&=-257,o=Ri(Error(P(422))),Qr(e,n,i,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=o.fallback,r=n.mode,o=Ga({mode:"visible",children:o.children},r,0,null),a=Et(a,r,i,null),a.flags|=2,o.return=n,a.return=n,o.sibling=a,n.child=o,n.mode&1&&mo(n,e.child,null,i),n.child.memoizedState=zl(i),n.memoizedState=yl,a);if(!(n.mode&1))return Qr(e,n,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,a=Error(P(419)),o=Ri(a,o,void 0),Qr(e,n,i,o)}if(l=(i&e.childLanes)!==0,$e||l){if(o=be,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,In(e,r),jn(o,e,r,-1))}return Ss(),o=Ri(Error(P(421))),Qr(e,n,i,o)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=uf.bind(null,e),r._reactRetry=n,null):(e=a.treeContext,Ge=it(r.nextSibling),Xe=n,ue=!0,yn=null,e!==null&&(rn[an++]=_n,rn[an++]=Nn,rn[an++]=Tt,_n=e.id,Nn=e.overflow,Tt=n),n=zs(n,o.children),n.flags|=4096,n)}function Gu(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),pl(e.return,n,t)}function Ti(e,n,t,o,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=t,a.tailMode=r)}function Cp(e,n,t){var o=n.pendingProps,r=o.revealOrder,a=o.tail;if(Oe(e,n,o.children,t),o=ce.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,t,n);else if(e.tag===19)Gu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(te(ce,o),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Ra(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Ti(n,!1,r,t,a);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ra(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Ti(n,!0,t,null,a);break;case"together":Ti(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ua(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function An(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=ct(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ct(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Gk(e,n,t){switch(n.tag){case 3:Pp(n),po();break;case 5:ep(n);break;case 1:Be(n.type)&&wa(n);break;case 4:ds(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,r=n.memoizedProps.value;te(Pa,o._currentValue),o._currentValue=r;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(te(ce,ce.current&1),n.flags|=128,null):t&n.child.childLanes?Ep(e,n,t):(te(ce,ce.current&1),e=An(e,n,t),e!==null?e.sibling:null);te(ce,ce.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return Cp(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),te(ce,ce.current),o)break;return null;case 22:case 23:return n.lanes=0,xp(e,n,t)}return An(e,n,t)}var Rp,jl,Tp,_p;Rp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};jl=function(){};Tp=function(e,n,t,o){var r=e.memoizedProps;if(r!==o){e=n.stateNode,bt(En.current);var a=null;switch(t){case"input":r=Vi(e,r),o=Vi(e,o),a=[];break;case"select":r=pe({},r,{value:void 0}),o=pe({},o,{value:void 0}),a=[];break;case"textarea":r=Wi(e,r),o=Wi(e,o),a=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ga)}Zi(t,o);var i;t=null;for(u in r)if(!o.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(rr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in o){var s=o[u];if(l=r!=null?r[u]:void 0,o.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(a||(a=[]),a.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(rr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}t&&(a=a||[]).push("style",t);var u=a;(n.updateQueue=u)&&(n.flags|=4)}};_p=function(e,n,t,o){t!==o&&(n.flags|=4)};function Oo(e,n){if(!ue)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function Xk(e,n,t){var o=n.pendingProps;switch(rs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(n),null;case 1:return Be(n.type)&&ba(),Te(n),null;case 3:return o=n.stateNode,vo(),ae(Ve),ae(Ne),ms(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,yn!==null&&(Cl(yn),yn=null))),jl(e,n),Te(n),null;case 5:ps(n);var r=bt(fr.current);if(t=n.type,e!==null&&n.stateNode!=null)Tp(e,n,t,o,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(P(166));return Te(n),null}if(e=bt(En.current),Zr(n)){o=n.stateNode,t=n.type;var a=n.memoizedProps;switch(o[Sn]=n,o[vr]=a,e=(n.mode&1)!==0,t){case"dialog":re("cancel",o),re("close",o);break;case"iframe":case"object":case"embed":re("load",o);break;case"video":case"audio":for(r=0;r<Wo.length;r++)re(Wo[r],o);break;case"source":re("error",o);break;case"img":case"image":case"link":re("error",o),re("load",o);break;case"details":re("toggle",o);break;case"input":au(o,a),re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},re("invalid",o);break;case"textarea":lu(o,a),re("invalid",o)}Zi(t,a),r=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?o.textContent!==l&&(a.suppressHydrationWarning!==!0&&Kr(o.textContent,l,e),r=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Kr(o.textContent,l,e),r=["children",""+l]):rr.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&re("scroll",o)}switch(t){case"input":Ar(o),iu(o,a,!0);break;case"textarea":Ar(o),su(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=ga)}o=r,n.updateQueue=o,o!==null&&(n.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ad(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(t,{is:o.is}):(e=i.createElement(t),t==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,t),e[Sn]=n,e[vr]=o,Rp(e,n,!1,!1),n.stateNode=e;e:{switch(i=Ji(t,o),t){case"dialog":re("cancel",e),re("close",e),r=o;break;case"iframe":case"object":case"embed":re("load",e),r=o;break;case"video":case"audio":for(r=0;r<Wo.length;r++)re(Wo[r],e);r=o;break;case"source":re("error",e),r=o;break;case"img":case"image":case"link":re("error",e),re("load",e),r=o;break;case"details":re("toggle",e),r=o;break;case"input":au(e,o),r=Vi(e,o),re("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=pe({},o,{value:void 0}),re("invalid",e);break;case"textarea":lu(e,o),r=Wi(e,o),re("invalid",e);break;default:r=o}Zi(t,r),l=r;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?sd(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&id(e,s)):a==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&ar(e,s):typeof s=="number"&&ar(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(rr.hasOwnProperty(a)?s!=null&&a==="onScroll"&&re("scroll",e):s!=null&&Bl(e,a,s,i))}switch(t){case"input":Ar(e),iu(e,o,!1);break;case"textarea":Ar(e),su(e);break;case"option":o.value!=null&&e.setAttribute("value",""+dt(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?oo(e,!!o.multiple,a,!1):o.defaultValue!=null&&oo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=ga)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Te(n),null;case 6:if(e&&n.stateNode!=null)_p(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(P(166));if(t=bt(fr.current),bt(En.current),Zr(n)){if(o=n.stateNode,t=n.memoizedProps,o[Sn]=n,(a=o.nodeValue!==t)&&(e=Xe,e!==null))switch(e.tag){case 3:Kr(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kr(o.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Sn]=n,n.stateNode=o}return Te(n),null;case 13:if(ae(ce),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Ge!==null&&n.mode&1&&!(n.flags&128))Qd(),po(),n.flags|=98560,a=!1;else if(a=Zr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[Sn]=n}else po(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Te(n),a=!1}else yn!==null&&(Cl(yn),yn=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||ce.current&1?ze===0&&(ze=3):Ss())),n.updateQueue!==null&&(n.flags|=4),Te(n),null);case 4:return vo(),jl(e,n),e===null&&pr(n.stateNode.containerInfo),Te(n),null;case 10:return ss(n.type._context),Te(n),null;case 17:return Be(n.type)&&ba(),Te(n),null;case 19:if(ae(ce),a=n.memoizedState,a===null)return Te(n),null;if(o=(n.flags&128)!==0,i=a.rendering,i===null)if(o)Oo(a,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Ra(e),i!==null){for(n.flags|=128,Oo(a,!1),o=i.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)a=t,e=o,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return te(ce,ce.current&1|2),n.child}e=e.sibling}a.tail!==null&&ke()>fo&&(n.flags|=128,o=!0,Oo(a,!1),n.lanes=4194304)}else{if(!o)if(e=Ra(i),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Oo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ue)return Te(n),null}else 2*ke()-a.renderingStartTime>fo&&t!==1073741824&&(n.flags|=128,o=!0,Oo(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(t=a.last,t!==null?t.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=ke(),n.sibling=null,t=ce.current,te(ce,o?t&1|2:t&1),n):(Te(n),null);case 22:case 23:return xs(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?Qe&1073741824&&(Te(n),n.subtreeFlags&6&&(n.flags|=8192)):Te(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function Yk(e,n){switch(rs(n),n.tag){case 1:return Be(n.type)&&ba(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return vo(),ae(Ve),ae(Ne),ms(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ps(n),null;case 13:if(ae(ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));po()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(ce),null;case 4:return vo(),null;case 10:return ss(n.type._context),null;case 22:case 23:return xs(),null;case 24:return null;default:return null}}var Gr=!1,_e=!1,qk=typeof WeakSet=="function"?WeakSet:Set,L=null;function eo(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){ve(e,n,o)}else t.current=null}function gl(e,n,t){try{t()}catch(o){ve(e,n,o)}}var Xu=!1;function ef(e,n){if(rl=ya,e=Dd(),ts(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var r=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var i=0,l=-1,s=-1,u=0,c=0,d=e,p=null;n:for(;;){for(var b;d!==t||r!==0&&d.nodeType!==3||(l=i+r),d!==a||o!==0&&d.nodeType!==3||(s=i+o),d.nodeType===3&&(i+=d.nodeValue.length),(b=d.firstChild)!==null;)p=d,d=b;for(;;){if(d===e)break n;if(p===t&&++u===r&&(l=i),p===a&&++c===o&&(s=i),(b=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=b}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(al={focusedElem:e,selectionRange:t},ya=!1,L=n;L!==null;)if(n=L,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,L=e;else for(;L!==null;){n=L;try{var j=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var z=j.memoizedProps,S=j.memoizedState,v=n.stateNode,m=v.getSnapshotBeforeUpdate(n.elementType===n.type?z:kn(n.type,z),S);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var k=n.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){ve(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,L=e;break}L=n.return}return j=Xu,Xu=!1,j}function qo(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&gl(n,t,a)}r=r.next}while(r!==o)}}function Ja(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function bl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Np(e){var n=e.alternate;n!==null&&(e.alternate=null,Np(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Sn],delete n[vr],delete n[sl],delete n[Dk],delete n[Ik])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mp(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ga));else if(o!==4&&(e=e.child,e!==null))for(wl(e,n,t),e=e.sibling;e!==null;)wl(e,n,t),e=e.sibling}function xl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(xl(e,n,t),e=e.sibling;e!==null;)xl(e,n,t),e=e.sibling}var Pe=null,fn=!1;function Wn(e,n,t){for(t=t.child;t!==null;)Lp(e,n,t),t=t.sibling}function Lp(e,n,t){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Ua,t)}catch{}switch(t.tag){case 5:_e||eo(t,n);case 6:var o=Pe,r=fn;Pe=null,Wn(e,n,t),Pe=o,fn=r,Pe!==null&&(fn?(e=Pe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Pe.removeChild(t.stateNode));break;case 18:Pe!==null&&(fn?(e=Pe,t=t.stateNode,e.nodeType===8?wi(e.parentNode,t):e.nodeType===1&&wi(e,t),ur(e)):wi(Pe,t.stateNode));break;case 4:o=Pe,r=fn,Pe=t.stateNode.containerInfo,fn=!0,Wn(e,n,t),Pe=o,fn=r;break;case 0:case 11:case 14:case 15:if(!_e&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var a=r,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&gl(t,n,i),r=r.next}while(r!==o)}Wn(e,n,t);break;case 1:if(!_e&&(eo(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(l){ve(t,n,l)}Wn(e,n,t);break;case 21:Wn(e,n,t);break;case 22:t.mode&1?(_e=(o=_e)||t.memoizedState!==null,Wn(e,n,t),_e=o):Wn(e,n,t);break;default:Wn(e,n,t)}}function qu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new qk),n.forEach(function(o){var r=cf.bind(null,e,o);t.has(o)||(t.add(o),o.then(r,r))})}}function vn(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var r=t[o];try{var a=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,fn=!1;break e;case 3:Pe=l.stateNode.containerInfo,fn=!0;break e;case 4:Pe=l.stateNode.containerInfo,fn=!0;break e}l=l.return}if(Pe===null)throw Error(P(160));Lp(a,i,r),Pe=null,fn=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(u){ve(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Op(n,e),n=n.sibling}function Op(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),wn(e),o&4){try{qo(3,e,e.return),Ja(3,e)}catch(z){ve(e,e.return,z)}try{qo(5,e,e.return)}catch(z){ve(e,e.return,z)}}break;case 1:vn(n,e),wn(e),o&512&&t!==null&&eo(t,t.return);break;case 5:if(vn(n,e),wn(e),o&512&&t!==null&&eo(t,t.return),e.flags&32){var r=e.stateNode;try{ar(r,"")}catch(z){ve(e,e.return,z)}}if(o&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,i=t!==null?t.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&od(r,a),Ji(l,i);var u=Ji(l,a);for(i=0;i<s.length;i+=2){var c=s[i],d=s[i+1];c==="style"?sd(r,d):c==="dangerouslySetInnerHTML"?id(r,d):c==="children"?ar(r,d):Bl(r,c,d,u)}switch(l){case"input":Bi(r,a);break;case"textarea":rd(r,a);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?oo(r,!!a.multiple,b,!1):p!==!!a.multiple&&(a.defaultValue!=null?oo(r,!!a.multiple,a.defaultValue,!0):oo(r,!!a.multiple,a.multiple?[]:"",!1))}r[vr]=a}catch(z){ve(e,e.return,z)}}break;case 6:if(vn(n,e),wn(e),o&4){if(e.stateNode===null)throw Error(P(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(z){ve(e,e.return,z)}}break;case 3:if(vn(n,e),wn(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{ur(n.containerInfo)}catch(z){ve(e,e.return,z)}break;case 4:vn(n,e),wn(e);break;case 13:vn(n,e),wn(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(bs=ke())),o&4&&qu(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(_e=(u=_e)||c,vn(n,e),_e=u):vn(n,e),wn(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(L=e,c=e.child;c!==null;){for(d=L=c;L!==null;){switch(p=L,b=p.child,p.tag){case 0:case 11:case 14:case 15:qo(4,p,p.return);break;case 1:eo(p,p.return);var j=p.stateNode;if(typeof j.componentWillUnmount=="function"){o=p,t=p.return;try{n=o,j.props=n.memoizedProps,j.state=n.memoizedState,j.componentWillUnmount()}catch(z){ve(o,t,z)}}break;case 5:eo(p,p.return);break;case 22:if(p.memoizedState!==null){nc(d);continue}}b!==null?(b.return=p,L=b):nc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ld("display",i))}catch(z){ve(e,e.return,z)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(z){ve(e,e.return,z)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vn(n,e),wn(e),o&4&&qu(e);break;case 21:break;default:vn(n,e),wn(e)}}function wn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Mp(t)){var o=t;break e}t=t.return}throw Error(P(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(ar(r,""),o.flags&=-33);var a=Yu(e);xl(e,a,r);break;case 3:case 4:var i=o.stateNode.containerInfo,l=Yu(e);wl(e,l,i);break;default:throw Error(P(161))}}catch(s){ve(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function nf(e,n,t){L=e,Dp(e)}function Dp(e,n,t){for(var o=(e.mode&1)!==0;L!==null;){var r=L,a=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||Gr;if(!i){var l=r.alternate,s=l!==null&&l.memoizedState!==null||_e;l=Gr;var u=_e;if(Gr=i,(_e=s)&&!u)for(L=r;L!==null;)i=L,s=i.child,i.tag===22&&i.memoizedState!==null?tc(r):s!==null?(s.return=i,L=s):tc(r);for(;a!==null;)L=a,Dp(a),a=a.sibling;L=r,Gr=l,_e=u}ec(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,L=a):ec(e)}}function ec(e){for(;L!==null;){var n=L;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:_e||Ja(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!_e)if(t===null)o.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:kn(n.type,t.memoizedProps);o.componentDidUpdate(r,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Au(n,a,o);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Au(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ur(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}_e||n.flags&512&&bl(n)}catch(p){ve(n,n.return,p)}}if(n===e){L=null;break}if(t=n.sibling,t!==null){t.return=n.return,L=t;break}L=n.return}}function nc(e){for(;L!==null;){var n=L;if(n===e){L=null;break}var t=n.sibling;if(t!==null){t.return=n.return,L=t;break}L=n.return}}function tc(e){for(;L!==null;){var n=L;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ja(4,n)}catch(s){ve(n,t,s)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var r=n.return;try{o.componentDidMount()}catch(s){ve(n,r,s)}}var a=n.return;try{bl(n)}catch(s){ve(n,a,s)}break;case 5:var i=n.return;try{bl(n)}catch(s){ve(n,i,s)}}}catch(s){ve(n,n.return,s)}if(n===e){L=null;break}var l=n.sibling;if(l!==null){l.return=n.return,L=l;break}L=n.return}}var tf=Math.ceil,Na=Fn.ReactCurrentDispatcher,js=Fn.ReactCurrentOwner,un=Fn.ReactCurrentBatchConfig,q=0,be=null,he=null,Ee=0,Qe=0,no=kt(0),ze=0,jr=null,Nt=0,Qa=0,gs=0,er=null,Ue=null,bs=0,fo=1/0,Rn=null,Ma=!1,Sl=null,st=null,Xr=!1,et=null,La=0,nr=0,Pl=null,ca=-1,da=0;function De(){return q&6?ke():ca!==-1?ca:ca=ke()}function ut(e){return e.mode&1?q&2&&Ee!==0?Ee&-Ee:Fk.transition!==null?(da===0&&(da=jd()),da):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Ed(e.type)),e):1}function jn(e,n,t,o){if(50<nr)throw nr=0,Pl=null,Error(P(185));Pr(e,t,o),(!(q&2)||e!==be)&&(e===be&&(!(q&2)&&(Qa|=t),ze===4&&Yn(e,Ee)),He(e,o),t===1&&q===0&&!(n.mode&1)&&(fo=ke()+500,Wa&&ft()))}function He(e,n){var t=e.callbackNode;Fv(e,n);var o=ha(e,e===be?Ee:0);if(o===0)t!==null&&du(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&du(t),n===1)e.tag===0?Ak(oc.bind(null,e)):Kd(oc.bind(null,e)),Lk(function(){!(q&6)&&ft()}),t=null;else{switch(gd(o)){case 1:t=Jl;break;case 4:t=yd;break;case 16:t=fa;break;case 536870912:t=zd;break;default:t=fa}t=Hp(t,Ip.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ip(e,n){if(ca=-1,da=0,q&6)throw Error(P(327));var t=e.callbackNode;if(so()&&e.callbackNode!==t)return null;var o=ha(e,e===be?Ee:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=Oa(e,o);else{n=o;var r=q;q|=2;var a=Fp();(be!==e||Ee!==n)&&(Rn=null,fo=ke()+500,Pt(e,n));do try{af();break}catch(l){Ap(e,l)}while(!0);ls(),Na.current=a,q=r,he!==null?n=0:(be=null,Ee=0,n=ze)}if(n!==0){if(n===2&&(r=qi(e),r!==0&&(o=r,n=El(e,r))),n===1)throw t=jr,Pt(e,0),Yn(e,o),He(e,ke()),t;if(n===6)Yn(e,o);else{if(r=e.current.alternate,!(o&30)&&!of(r)&&(n=Oa(e,o),n===2&&(a=qi(e),a!==0&&(o=a,n=El(e,a))),n===1))throw t=jr,Pt(e,0),Yn(e,o),He(e,ke()),t;switch(e.finishedWork=r,e.finishedLanes=o,n){case 0:case 1:throw Error(P(345));case 2:zt(e,Ue,Rn);break;case 3:if(Yn(e,o),(o&130023424)===o&&(n=bs+500-ke(),10<n)){if(ha(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){De(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ll(zt.bind(null,e,Ue,Rn),n);break}zt(e,Ue,Rn);break;case 4:if(Yn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,r=-1;0<o;){var i=31-zn(o);a=1<<i,i=n[i],i>r&&(r=i),o&=~a}if(o=r,o=ke()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*tf(o/1960))-o,10<o){e.timeoutHandle=ll(zt.bind(null,e,Ue,Rn),o);break}zt(e,Ue,Rn);break;case 5:zt(e,Ue,Rn);break;default:throw Error(P(329))}}}return He(e,ke()),e.callbackNode===t?Ip.bind(null,e):null}function El(e,n){var t=er;return e.current.memoizedState.isDehydrated&&(Pt(e,n).flags|=256),e=Oa(e,n),e!==2&&(n=Ue,Ue=t,n!==null&&Cl(n)),e}function Cl(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function of(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var r=t[o],a=r.getSnapshot;r=r.value;try{if(!gn(a(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yn(e,n){for(n&=~gs,n&=~Qa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-zn(n),o=1<<t;e[t]=-1,n&=~o}}function oc(e){if(q&6)throw Error(P(327));so();var n=ha(e,0);if(!(n&1))return He(e,ke()),null;var t=Oa(e,n);if(e.tag!==0&&t===2){var o=qi(e);o!==0&&(n=o,t=El(e,o))}if(t===1)throw t=jr,Pt(e,0),Yn(e,n),He(e,ke()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zt(e,Ue,Rn),He(e,ke()),null}function ws(e,n){var t=q;q|=1;try{return e(n)}finally{q=t,q===0&&(fo=ke()+500,Wa&&ft())}}function Mt(e){et!==null&&et.tag===0&&!(q&6)&&so();var n=q;q|=1;var t=un.transition,o=ee;try{if(un.transition=null,ee=1,e)return e()}finally{ee=o,un.transition=t,q=n,!(q&6)&&ft()}}function xs(){Qe=no.current,ae(no)}function Pt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Mk(t)),he!==null)for(t=he.return;t!==null;){var o=t;switch(rs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ba();break;case 3:vo(),ae(Ve),ae(Ne),ms();break;case 5:ps(o);break;case 4:vo();break;case 13:ae(ce);break;case 19:ae(ce);break;case 10:ss(o.type._context);break;case 22:case 23:xs()}t=t.return}if(be=e,he=e=ct(e.current,null),Ee=Qe=n,ze=0,jr=null,gs=Qa=Nt=0,Ue=er=null,gt!==null){for(n=0;n<gt.length;n++)if(t=gt[n],o=t.interleaved,o!==null){t.interleaved=null;var r=o.next,a=t.pending;if(a!==null){var i=a.next;a.next=r,o.next=i}t.pending=o}gt=null}return e}function Ap(e,n){do{var t=he;try{if(ls(),la.current=_a,Ta){for(var o=de.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Ta=!1}if(_t=0,ge=ye=de=null,Yo=!1,hr=0,js.current=null,t===null||t.return===null){ze=1,jr=n,he=null;break}e:{var a=e,i=t.return,l=t,s=n;if(n=Ee,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var b=Hu(i);if(b!==null){b.flags&=-257,Wu(b,i,l,a,n),b.mode&1&&Bu(a,u,n),n=b,s=u;var j=n.updateQueue;if(j===null){var z=new Set;z.add(s),n.updateQueue=z}else j.add(s);break e}else{if(!(n&1)){Bu(a,u,n),Ss();break e}s=Error(P(426))}}else if(ue&&l.mode&1){var S=Hu(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Wu(S,i,l,a,n),as(ko(s,l));break e}}a=s=ko(s,l),ze!==4&&(ze=2),er===null?er=[a]:er.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var v=gp(a,s,n);Iu(a,v);break e;case 1:l=s;var m=a.type,k=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(st===null||!st.has(k)))){a.flags|=65536,n&=-n,a.lanes|=n;var w=bp(a,l,n);Iu(a,w);break e}}a=a.return}while(a!==null)}$p(t)}catch(R){n=R,he===t&&t!==null&&(he=t=t.return);continue}break}while(!0)}function Fp(){var e=Na.current;return Na.current=_a,e===null?_a:e}function Ss(){(ze===0||ze===3||ze===2)&&(ze=4),be===null||!(Nt&268435455)&&!(Qa&268435455)||Yn(be,Ee)}function Oa(e,n){var t=q;q|=2;var o=Fp();(be!==e||Ee!==n)&&(Rn=null,Pt(e,n));do try{rf();break}catch(r){Ap(e,r)}while(!0);if(ls(),q=t,Na.current=o,he!==null)throw Error(P(261));return be=null,Ee=0,ze}function rf(){for(;he!==null;)Up(he)}function af(){for(;he!==null&&!Tv();)Up(he)}function Up(e){var n=Bp(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,n===null?$p(e):he=n,js.current=null}function $p(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Yk(t,n),t!==null){t.flags&=32767,he=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,he=null;return}}else if(t=Xk(t,n,Qe),t!==null){he=t;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);ze===0&&(ze=5)}function zt(e,n,t){var o=ee,r=un.transition;try{un.transition=null,ee=1,lf(e,n,t,o)}finally{un.transition=r,ee=o}return null}function lf(e,n,t,o){do so();while(et!==null);if(q&6)throw Error(P(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Uv(e,a),e===be&&(he=be=null,Ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xr||(Xr=!0,Hp(fa,function(){return so(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=un.transition,un.transition=null;var i=ee;ee=1;var l=q;q|=4,js.current=null,ef(e,t),Op(t,e),Pk(al),ya=!!rl,al=rl=null,e.current=t,nf(t),_v(),q=l,ee=i,un.transition=a}else e.current=t;if(Xr&&(Xr=!1,et=e,La=r),a=e.pendingLanes,a===0&&(st=null),Lv(t.stateNode),He(e,ke()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],o(r.value,{componentStack:r.stack,digest:r.digest});if(Ma)throw Ma=!1,e=Sl,Sl=null,e;return La&1&&e.tag!==0&&so(),a=e.pendingLanes,a&1?e===Pl?nr++:(nr=0,Pl=e):nr=0,ft(),null}function so(){if(et!==null){var e=gd(La),n=un.transition,t=ee;try{if(un.transition=null,ee=16>e?16:e,et===null)var o=!1;else{if(e=et,et=null,La=0,q&6)throw Error(P(331));var r=q;for(q|=4,L=e.current;L!==null;){var a=L,i=a.child;if(L.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:qo(8,c,a)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var p=c.sibling,b=c.return;if(Np(c),c===u){L=null;break}if(p!==null){p.return=b,L=p;break}L=b}}}var j=a.alternate;if(j!==null){var z=j.child;if(z!==null){j.child=null;do{var S=z.sibling;z.sibling=null,z=S}while(z!==null)}}L=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,L=i;else e:for(;L!==null;){if(a=L,a.flags&2048)switch(a.tag){case 0:case 11:case 15:qo(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,L=v;break e}L=a.return}}var m=e.current;for(L=m;L!==null;){i=L;var k=i.child;if(i.subtreeFlags&2064&&k!==null)k.return=i,L=k;else e:for(i=m;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ja(9,l)}}catch(R){ve(l,l.return,R)}if(l===i){L=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,L=w;break e}L=l.return}}if(q=r,ft(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Ua,e)}catch{}o=!0}return o}finally{ee=t,un.transition=n}}return!1}function rc(e,n,t){n=ko(t,n),n=gp(e,n,1),e=lt(e,n,1),n=De(),e!==null&&(Pr(e,1,n),He(e,n))}function ve(e,n,t){if(e.tag===3)rc(e,e,t);else for(;n!==null;){if(n.tag===3){rc(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(st===null||!st.has(o))){e=ko(t,e),e=bp(n,e,1),n=lt(n,e,1),e=De(),n!==null&&(Pr(n,1,e),He(n,e));break}}n=n.return}}function sf(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=De(),e.pingedLanes|=e.suspendedLanes&t,be===e&&(Ee&t)===t&&(ze===4||ze===3&&(Ee&130023424)===Ee&&500>ke()-bs?Pt(e,0):gs|=t),He(e,n)}function Vp(e,n){n===0&&(e.mode&1?(n=$r,$r<<=1,!($r&130023424)&&($r=4194304)):n=1);var t=De();e=In(e,n),e!==null&&(Pr(e,n,t),He(e,t))}function uf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Vp(e,t)}function cf(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(P(314))}o!==null&&o.delete(n),Vp(e,t)}var Bp;Bp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ve.current)$e=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return $e=!1,Gk(e,n,t);$e=!!(e.flags&131072)}else $e=!1,ue&&n.flags&1048576&&Zd(n,Sa,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;ua(e,n),e=n.pendingProps;var r=co(n,Ne.current);lo(n,t),r=ks(null,n,o,e,r,t);var a=fs();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Be(o)?(a=!0,wa(n)):a=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cs(n),r.updater=Za,n.stateNode=r,r._reactInternals=n,vl(n,o,e,t),n=hl(null,n,o,!0,a,t)):(n.tag=0,ue&&a&&os(n),Oe(null,n,r,t),n=n.child),n;case 16:o=n.elementType;e:{switch(ua(e,n),e=n.pendingProps,r=o._init,o=r(o._payload),n.type=o,r=n.tag=pf(o),e=kn(o,e),r){case 0:n=fl(null,n,o,e,t);break e;case 1:n=Ju(null,n,o,e,t);break e;case 11:n=Ku(null,n,o,e,t);break e;case 14:n=Zu(null,n,o,kn(o.type,e),t);break e}throw Error(P(306,o,""))}return n;case 0:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:kn(o,r),fl(e,n,o,r,t);case 1:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:kn(o,r),Ju(e,n,o,r,t);case 3:e:{if(Pp(n),e===null)throw Error(P(387));o=n.pendingProps,a=n.memoizedState,r=a.element,qd(e,n),Ca(n,o,null,t);var i=n.memoizedState;if(o=i.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){r=ko(Error(P(423)),n),n=Qu(e,n,o,t,r);break e}else if(o!==r){r=ko(Error(P(424)),n),n=Qu(e,n,o,t,r);break e}else for(Ge=it(n.stateNode.containerInfo.firstChild),Xe=n,ue=!0,yn=null,t=Xd(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(po(),o===r){n=An(e,n,t);break e}Oe(e,n,o,t)}n=n.child}return n;case 5:return ep(n),e===null&&dl(n),o=n.type,r=n.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,il(o,r)?i=null:a!==null&&il(o,a)&&(n.flags|=32),Sp(e,n),Oe(e,n,i,t),n.child;case 6:return e===null&&dl(n),null;case 13:return Ep(e,n,t);case 4:return ds(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=mo(n,null,o,t):Oe(e,n,o,t),n.child;case 11:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:kn(o,r),Ku(e,n,o,r,t);case 7:return Oe(e,n,n.pendingProps,t),n.child;case 8:return Oe(e,n,n.pendingProps.children,t),n.child;case 12:return Oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,r=n.pendingProps,a=n.memoizedProps,i=r.value,te(Pa,o._currentValue),o._currentValue=i,a!==null)if(gn(a.value,i)){if(a.children===r.children&&!Ve.current){n=An(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===o){if(a.tag===1){s=Mn(-1,t&-t),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),pl(a.return,t,n),l.lanes|=t;break}s=s.next}}else if(a.tag===10)i=a.type===n.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(P(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),pl(i,t,n),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Oe(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,o=n.pendingProps.children,lo(n,t),r=cn(r),o=o(r),n.flags|=1,Oe(e,n,o,t),n.child;case 14:return o=n.type,r=kn(o,n.pendingProps),r=kn(o.type,r),Zu(e,n,o,r,t);case 15:return wp(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:kn(o,r),ua(e,n),n.tag=1,Be(o)?(e=!0,wa(n)):e=!1,lo(n,t),jp(n,o,r),vl(n,o,r,t),hl(null,n,o,!0,e,t);case 19:return Cp(e,n,t);case 22:return xp(e,n,t)}throw Error(P(156,n.tag))};function Hp(e,n){return hd(e,n)}function df(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,n,t,o){return new df(e,n,t,o)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pf(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wl)return 11;if(e===Kl)return 14}return 2}function ct(e,n){var t=e.alternate;return t===null?(t=sn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function pa(e,n,t,o,r,a){var i=2;if(o=e,typeof e=="function")Ps(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Wt:return Et(t.children,r,a,n);case Hl:i=8,r|=8;break;case Ai:return e=sn(12,t,n,r|2),e.elementType=Ai,e.lanes=a,e;case Fi:return e=sn(13,t,n,r),e.elementType=Fi,e.lanes=a,e;case Ui:return e=sn(19,t,n,r),e.elementType=Ui,e.lanes=a,e;case ed:return Ga(t,r,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yc:i=10;break e;case qc:i=9;break e;case Wl:i=11;break e;case Kl:i=14;break e;case Qn:i=16,o=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=sn(i,t,n,r),n.elementType=e,n.type=o,n.lanes=a,n}function Et(e,n,t,o){return e=sn(7,e,o,n),e.lanes=t,e}function Ga(e,n,t,o){return e=sn(22,e,o,n),e.elementType=ed,e.lanes=t,e.stateNode={isHidden:!1},e}function _i(e,n,t){return e=sn(6,e,null,n),e.lanes=t,e}function Ni(e,n,t){return n=sn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function mf(e,n,t,o,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Es(e,n,t,o,r,a,i,l,s){return e=new mf(e,n,t,l,s),n===1?(n=1,a===!0&&(n|=8)):n=0,a=sn(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},cs(a),e}function vf(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function Wp(e){if(!e)return pt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Be(t))return Wd(e,t,n)}return n}function Kp(e,n,t,o,r,a,i,l,s){return e=Es(t,o,!0,e,r,a,i,l,s),e.context=Wp(null),t=e.current,o=De(),r=ut(t),a=Mn(o,r),a.callback=n??null,lt(t,a,r),e.current.lanes=r,Pr(e,r,o),He(e,o),e}function Xa(e,n,t,o){var r=n.current,a=De(),i=ut(r);return t=Wp(t),n.context===null?n.context=t:n.pendingContext=t,n=Mn(a,i),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=lt(r,n,i),e!==null&&(jn(e,r,i,a),ia(e,r,i)),i}function Da(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Cs(e,n){ac(e,n),(e=e.alternate)&&ac(e,n)}function kf(){return null}var Zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rs(e){this._internalRoot=e}Ya.prototype.render=Rs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Xa(e,n,null,null)};Ya.prototype.unmount=Rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Mt(function(){Xa(null,e,null,null)}),n[Dn]=null}};function Ya(e){this._internalRoot=e}Ya.prototype.unstable_scheduleHydration=function(e){if(e){var n=xd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Xn.length&&n!==0&&n<Xn[t].priority;t++);Xn.splice(t,0,e),t===0&&Pd(e)}};function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function ff(e,n,t,o,r){if(r){if(typeof o=="function"){var a=o;o=function(){var u=Da(i);a.call(u)}}var i=Kp(n,o,e,0,null,!1,!1,"",ic);return e._reactRootContainer=i,e[Dn]=i.current,pr(e.nodeType===8?e.parentNode:e),Mt(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var l=o;o=function(){var u=Da(s);l.call(u)}}var s=Es(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=s,e[Dn]=s.current,pr(e.nodeType===8?e.parentNode:e),Mt(function(){Xa(n,s,t,o)}),s}function ei(e,n,t,o,r){var a=t._reactRootContainer;if(a){var i=a;if(typeof r=="function"){var l=r;r=function(){var s=Da(i);l.call(s)}}Xa(n,i,e,r)}else i=ff(t,n,e,r,o);return Da(i)}bd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ho(n.pendingLanes);t!==0&&(Ql(n,t|1),He(n,ke()),!(q&6)&&(fo=ke()+500,ft()))}break;case 13:Mt(function(){var o=In(e,1);if(o!==null){var r=De();jn(o,e,1,r)}}),Cs(e,1)}};Gl=function(e){if(e.tag===13){var n=In(e,134217728);if(n!==null){var t=De();jn(n,e,134217728,t)}Cs(e,134217728)}};wd=function(e){if(e.tag===13){var n=ut(e),t=In(e,n);if(t!==null){var o=De();jn(t,e,n,o)}Cs(e,n)}};xd=function(){return ee};Sd=function(e,n){var t=ee;try{return ee=e,n()}finally{ee=t}};Gi=function(e,n,t){switch(n){case"input":if(Bi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var r=Ha(o);if(!r)throw Error(P(90));td(o),Bi(o,r)}}}break;case"textarea":rd(e,t);break;case"select":n=t.value,n!=null&&oo(e,!!t.multiple,n,!1)}};dd=ws;pd=Mt;var hf={usingClientEntryPoint:!1,Events:[Cr,Qt,Ha,ud,cd,ws]},Do={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yf={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Ua=Yr.inject(yf),Pn=Yr}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hf;qe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ts(n))throw Error(P(200));return vf(e,n,null,t)};qe.createRoot=function(e,n){if(!Ts(e))throw Error(P(299));var t=!1,o="",r=Zp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Es(e,1,!1,null,null,t,!1,o,r),e[Dn]=n.current,pr(e.nodeType===8?e.parentNode:e),new Rs(n)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=kd(n),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Mt(e)};qe.hydrate=function(e,n,t){if(!qa(n))throw Error(P(200));return ei(null,e,n,!0,t)};qe.hydrateRoot=function(e,n,t){if(!Ts(e))throw Error(P(405));var o=t!=null&&t.hydratedSources||null,r=!1,a="",i=Zp;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Kp(n,null,e,1,t??null,r,!1,a,i),e[Dn]=n.current,pr(e),o)for(e=0;e<o.length;e++)t=o[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Ya(n)};qe.render=function(e,n,t){if(!qa(n))throw Error(P(200));return ei(null,e,n,!1,t)};qe.unmountComponentAtNode=function(e){if(!qa(e))throw Error(P(40));return e._reactRootContainer?(Mt(function(){ei(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1};qe.unstable_batchedUpdates=ws;qe.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!qa(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ei(e,n,t,!1,o)};qe.version="18.3.1-next-f1338f8080-20240426";function Jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)}catch(e){console.error(e)}}Jp(),Jc.exports=qe;var ni=Jc.exports;const zf=Oc(ni),jf=Lc({__proto__:null,default:zf},[ni]);var lc=ni;Di.createRoot=lc.createRoot,Di.hydrateRoot=lc.hydrateRoot;function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},mt.apply(null,arguments)}function gf(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function Qp(...e){return n=>e.forEach(t=>gf(t,n))}function Gp(...e){return h.useCallback(Qp(...e),e)}const _s=h.forwardRef((e,n)=>{const{children:t,...o}=e,r=h.Children.toArray(t),a=r.find(wf);if(a){const i=a.props.children,l=r.map(s=>s===a?h.Children.count(i)>1?h.Children.only(null):h.isValidElement(i)?i.props.children:null:s);return h.createElement(Rl,mt({},o,{ref:n}),h.isValidElement(i)?h.cloneElement(i,void 0,l):null)}return h.createElement(Rl,mt({},o,{ref:n}),t)});_s.displayName="Slot";const Rl=h.forwardRef((e,n)=>{const{children:t,...o}=e;return h.isValidElement(t)?h.cloneElement(t,{...xf(o,t.props),ref:n?Qp(n,t.ref):t.ref}):h.Children.count(t)>1?h.Children.only(null):null});Rl.displayName="SlotClone";const bf=({children:e})=>h.createElement(h.Fragment,null,e);function wf(e){return h.isValidElement(e)&&e.type===bf}function xf(e,n){const t={...n};for(const o in n){const r=e[o],a=n[o];/^on[A-Z]/.test(o)?r&&a?t[o]=(...l)=>{a(...l),r(...l)}:r&&(t[o]=r):o==="style"?t[o]={...r,...a}:o==="className"&&(t[o]=[r,a].filter(Boolean).join(" "))}return{...e,...t}}function Xp(e){var n,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=Xp(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function Sf(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=Xp(e))&&(o&&(o+=" "),o+=n);return o}const sc=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,uc=Sf,Pf=(e,n)=>t=>{var o;if((n==null?void 0:n.variants)==null)return uc(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:r,defaultVariants:a}=n,i=Object.keys(r).map(u=>{const c=t==null?void 0:t[u],d=a==null?void 0:a[u];if(c===null)return null;const p=sc(c)||sc(d);return r[u][p]}),l=t&&Object.entries(t).reduce((u,c)=>{let[d,p]=c;return p===void 0||(u[d]=p),u},{}),s=n==null||(o=n.compoundVariants)===null||o===void 0?void 0:o.reduce((u,c)=>{let{class:d,className:p,...b}=c;return Object.entries(b).every(j=>{let[z,S]=j;return Array.isArray(S)?S.includes({...a,...l}[z]):{...a,...l}[z]===S})?[...u,d,p]:u},[]);return uc(e,i,s,t==null?void 0:t.class,t==null?void 0:t.className)};function Yp(e){var n,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(t=Yp(e[n]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Ef(){for(var e,n,t=0,o="",r=arguments.length;t<r;t++)(e=arguments[t])&&(n=Yp(e))&&(o&&(o+=" "),o+=n);return o}const Ns="-";function Cf(e){const n=Tf(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function r(i){const l=i.split(Ns);return l[0]===""&&l.length!==1&&l.shift(),qp(l,n)||Rf(i)}function a(i,l){const s=t[i]||[];return l&&o[i]?[...s,...o[i]]:s}return{getClassGroupId:r,getConflictingClassGroupIds:a}}function qp(e,n){var i;if(e.length===0)return n.classGroupId;const t=e[0],o=n.nextPart.get(t),r=o?qp(e.slice(1),o):void 0;if(r)return r;if(n.validators.length===0)return;const a=e.join(Ns);return(i=n.validators.find(({validator:l})=>l(a)))==null?void 0:i.classGroupId}const cc=/^\[(.+)\]$/;function Rf(e){if(cc.test(e)){const n=cc.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}}function Tf(e){const{theme:n,prefix:t}=e,o={nextPart:new Map,validators:[]};return Nf(Object.entries(e.classGroups),t).forEach(([a,i])=>{Tl(i,o,a,n)}),o}function Tl(e,n,t,o){e.forEach(r=>{if(typeof r=="string"){const a=r===""?n:dc(n,r);a.classGroupId=t;return}if(typeof r=="function"){if(_f(r)){Tl(r(o),n,t,o);return}n.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([a,i])=>{Tl(i,dc(n,a),t,o)})})}function dc(e,n){let t=e;return n.split(Ns).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function _f(e){return e.isThemeGetter}function Nf(e,n){return n?e.map(([t,o])=>{const r=o.map(a=>typeof a=="string"?n+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([i,l])=>[n+i,l])):a);return[t,r]}):e}function Mf(e){if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,o=new Map;function r(a,i){t.set(a,i),n++,n>e&&(n=0,o=t,t=new Map)}return{get(a){let i=t.get(a);if(i!==void 0)return i;if((i=o.get(a))!==void 0)return r(a,i),i},set(a,i){t.has(a)?t.set(a,i):r(a,i)}}}const em="!";function Lf(e){const n=e.separator,t=n.length===1,o=n[0],r=n.length;return function(i){const l=[];let s=0,u=0,c;for(let z=0;z<i.length;z++){let S=i[z];if(s===0){if(S===o&&(t||i.slice(z,z+r)===n)){l.push(i.slice(u,z)),u=z+r;continue}if(S==="/"){c=z;continue}}S==="["?s++:S==="]"&&s--}const d=l.length===0?i:i.substring(u),p=d.startsWith(em),b=p?d.substring(1):d,j=c&&c>u?c-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:b,maybePostfixModifierPosition:j}}}function Of(e){if(e.length<=1)return e;const n=[];let t=[];return e.forEach(o=>{o[0]==="["?(n.push(...t.sort(),o),t=[]):t.push(o)}),n.push(...t.sort()),n}function Df(e){return{cache:Mf(e.cacheSize),splitModifiers:Lf(e),...Cf(e)}}const If=/\s+/;function Af(e,n){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:r}=n,a=new Set;return e.trim().split(If).map(i=>{const{modifiers:l,hasImportantModifier:s,baseClassName:u,maybePostfixModifierPosition:c}=t(i);let d=o(c?u.substring(0,c):u),p=!!c;if(!d){if(!c)return{isTailwindClass:!1,originalClassName:i};if(d=o(u),!d)return{isTailwindClass:!1,originalClassName:i};p=!1}const b=Of(l).join(":");return{isTailwindClass:!0,modifierId:s?b+em:b,classGroupId:d,originalClassName:i,hasPostfixModifier:p}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:l,classGroupId:s,hasPostfixModifier:u}=i,c=l+s;return a.has(c)?!1:(a.add(c),r(s,u).forEach(d=>a.add(l+d)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function Ff(){let e=0,n,t,o="";for(;e<arguments.length;)(n=arguments[e++])&&(t=nm(n))&&(o&&(o+=" "),o+=t);return o}function nm(e){if(typeof e=="string")return e;let n,t="";for(let o=0;o<e.length;o++)e[o]&&(n=nm(e[o]))&&(t&&(t+=" "),t+=n);return t}function Uf(e,...n){let t,o,r,a=i;function i(s){const u=n.reduce((c,d)=>d(c),e());return t=Df(u),o=t.cache.get,r=t.cache.set,a=l,l(s)}function l(s){const u=o(s);if(u)return u;const c=Af(s,t);return r(s,c),c}return function(){return a(Ff.apply(null,arguments))}}function oe(e){const n=t=>t[e]||[];return n.isThemeGetter=!0,n}const tm=/^\[(?:([a-z-]+):)?(.+)\]$/i,$f=/^\d+\/\d+$/,Vf=new Set(["px","full","screen"]),Bf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Hf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Wf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Kf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Zf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Cn(e){return wt(e)||Vf.has(e)||$f.test(e)}function Kn(e){return jo(e,"length",nh)}function wt(e){return!!e&&!Number.isNaN(Number(e))}function qr(e){return jo(e,"number",wt)}function Io(e){return!!e&&Number.isInteger(Number(e))}function Jf(e){return e.endsWith("%")&&wt(e.slice(0,-1))}function K(e){return tm.test(e)}function Zn(e){return Bf.test(e)}const Qf=new Set(["length","size","percentage"]);function Gf(e){return jo(e,Qf,om)}function Xf(e){return jo(e,"position",om)}const Yf=new Set(["image","url"]);function qf(e){return jo(e,Yf,oh)}function eh(e){return jo(e,"",th)}function Ao(){return!0}function jo(e,n,t){const o=tm.exec(e);return o?o[1]?typeof n=="string"?o[1]===n:n.has(o[1]):t(o[2]):!1}function nh(e){return Hf.test(e)&&!Wf.test(e)}function om(){return!1}function th(e){return Kf.test(e)}function oh(e){return Zf.test(e)}function rh(){const e=oe("colors"),n=oe("spacing"),t=oe("blur"),o=oe("brightness"),r=oe("borderColor"),a=oe("borderRadius"),i=oe("borderSpacing"),l=oe("borderWidth"),s=oe("contrast"),u=oe("grayscale"),c=oe("hueRotate"),d=oe("invert"),p=oe("gap"),b=oe("gradientColorStops"),j=oe("gradientColorStopPositions"),z=oe("inset"),S=oe("margin"),v=oe("opacity"),m=oe("padding"),k=oe("saturate"),w=oe("scale"),R=oe("sepia"),N=oe("skew"),f=oe("space"),_=oe("translate"),I=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],Z=()=>["auto",K,n],$=()=>[K,n],ne=()=>["",Cn,Kn],me=()=>["auto",wt,K],Fe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],We=()=>["solid","dashed","dotted","double","none"],pn=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],E=()=>["start","end","center","between","around","evenly","stretch"],A=()=>["","0",K],U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>[wt,qr],Y=()=>[wt,K];return{cacheSize:500,separator:":",theme:{colors:[Ao],spacing:[Cn,Kn],blur:["none","",Zn,K],brightness:G(),borderColor:[e],borderRadius:["none","","full",Zn,K],borderSpacing:$(),borderWidth:ne(),contrast:G(),grayscale:A(),hueRotate:Y(),invert:A(),gap:$(),gradientColorStops:[e],gradientColorStopPositions:[Jf,Kn],inset:Z(),margin:Z(),opacity:G(),padding:$(),saturate:G(),scale:G(),sepia:A(),skew:Y(),space:$(),translate:$()},classGroups:{aspect:[{aspect:["auto","square","video",K]}],container:["container"],columns:[{columns:[Zn]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Fe(),K]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[z]}],"inset-x":[{"inset-x":[z]}],"inset-y":[{"inset-y":[z]}],start:[{start:[z]}],end:[{end:[z]}],top:[{top:[z]}],right:[{right:[z]}],bottom:[{bottom:[z]}],left:[{left:[z]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Io,K]}],basis:[{basis:Z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",K]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",Io,K]}],"grid-cols":[{"grid-cols":[Ao]}],"col-start-end":[{col:["auto",{span:["full",Io,K]},K]}],"col-start":[{"col-start":me()}],"col-end":[{"col-end":me()}],"grid-rows":[{"grid-rows":[Ao]}],"row-start-end":[{row:["auto",{span:[Io,K]},K]}],"row-start":[{"row-start":me()}],"row-end":[{"row-end":me()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",K]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",K]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...E()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...E(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...E(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[S]}],mx:[{mx:[S]}],my:[{my:[S]}],ms:[{ms:[S]}],me:[{me:[S]}],mt:[{mt:[S]}],mr:[{mr:[S]}],mb:[{mb:[S]}],ml:[{ml:[S]}],"space-x":[{"space-x":[f]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[f]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",K,n]}],"min-w":[{"min-w":[K,n,"min","max","fit"]}],"max-w":[{"max-w":[K,n,"none","full","min","max","fit","prose",{screen:[Zn]},Zn]}],h:[{h:[K,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[K,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[K,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[K,n,"auto","min","max","fit"]}],"font-size":[{text:["base",Zn,Kn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",qr]}],"font-family":[{font:[Ao]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",K]}],"line-clamp":[{"line-clamp":["none",wt,qr]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Cn,K]}],"list-image":[{"list-image":["none",K]}],"list-style-type":[{list:["none","disc","decimal",K]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...We(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Cn,Kn]}],"underline-offset":[{"underline-offset":["auto",Cn,K]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Fe(),Xf]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Gf]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qf]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[j]}],"gradient-via-pos":[{via:[j]}],"gradient-to-pos":[{to:[j]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...We(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:We()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...We()]}],"outline-offset":[{"outline-offset":[Cn,K]}],"outline-w":[{outline:[Cn,Kn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ne()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[Cn,Kn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Zn,eh]}],"shadow-color":[{shadow:[Ao]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...pn(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":pn()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",Zn,K]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[d]}],saturate:[{saturate:[k]}],sepia:[{sepia:[R]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[k]}],"backdrop-sepia":[{"backdrop-sepia":[R]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",K]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",K]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",K]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[Io,K]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",K]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Cn,Kn,qr]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const ah=Uf(rh);function gr(...e){return ah(Ef(e))}function ih(e){const n=[...e];for(let t=n.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1)),r=n[t];n[t]=n[o],n[o]=r}return n}function lh(e){return`${e}_${new Date().getTime()}`}const sh=Pf("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),nt=h.forwardRef(({className:e,variant:n,size:t,asChild:o=!1,...r},a)=>{const i=o?_s:"button";return T.jsx(i,{className:gr(sh({variant:n,size:t,className:e})),ref:a,...r})});nt.displayName="Button";/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function le(){return le=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},le.apply(this,arguments)}var fe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fe||(fe={}));const pc="popstate";function uh(e){e===void 0&&(e={});function n(r,a){let{pathname:i="/",search:l="",hash:s=""}=Un(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),br("",{pathname:i,search:l,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){let i=r.document.querySelector("base"),l="";if(i&&i.getAttribute("href")){let s=r.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof a=="string"?a:Ot(a))}function o(r,a){Lt(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return dh(n,t,o,e)}function J(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Lt(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ch(){return Math.random().toString(36).substr(2,8)}function mc(e,n){return{usr:e.state,key:e.key,idx:n}}function br(e,n,t,o){return t===void 0&&(t=null),le({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Un(n):n,{state:t,key:n&&n.key||o||ch()})}function Ot(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Un(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function dh(e,n,t,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:a=!1}=o,i=r.history,l=fe.Pop,s=null,u=c();u==null&&(u=0,i.replaceState(le({},i.state,{idx:u}),""));function c(){return(i.state||{idx:null}).idx}function d(){l=fe.Pop;let S=c(),v=S==null?null:S-u;u=S,s&&s({action:l,location:z.location,delta:v})}function p(S,v){l=fe.Push;let m=br(z.location,S,v);t&&t(m,S),u=c()+1;let k=mc(m,u),w=z.createHref(m);try{i.pushState(k,"",w)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(w)}a&&s&&s({action:l,location:z.location,delta:1})}function b(S,v){l=fe.Replace;let m=br(z.location,S,v);t&&t(m,S),u=c();let k=mc(m,u),w=z.createHref(m);i.replaceState(k,"",w),a&&s&&s({action:l,location:z.location,delta:0})}function j(S){let v=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof S=="string"?S:Ot(S);return m=m.replace(/ $/,"%20"),J(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let z={get action(){return l},get location(){return e(r,i)},listen(S){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(pc,d),s=S,()=>{r.removeEventListener(pc,d),s=null}},createHref(S){return n(r,S)},createURL:j,encodeLocation(S){let v=j(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:b,go(S){return i.go(S)}};return z}var se;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(se||(se={}));const ph=new Set(["lazy","caseSensitive","path","id","index","children"]);function mh(e){return e.index===!0}function _l(e,n,t,o){return t===void 0&&(t=[]),o===void 0&&(o={}),e.map((r,a)=>{let i=[...t,a],l=typeof r.id=="string"?r.id:i.join("-");if(J(r.index!==!0||!r.children,"Cannot specify children on an index route"),J(!o[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),mh(r)){let s=le({},r,n(r),{id:l});return o[l]=s,s}else{let s=le({},r,n(r),{id:l,children:void 0});return o[l]=s,r.children&&(s.children=_l(r.children,n,i,o)),s}})}function to(e,n,t){t===void 0&&(t="/");let o=typeof n=="string"?Un(n):n,r=go(o.pathname||"/",t);if(r==null)return null;let a=rm(e);kh(a);let i=null;for(let l=0;i==null&&l<a.length;++l){let s=Eh(r);i=xh(a[l],s)}return i}function vh(e,n){let{route:t,pathname:o,params:r}=e;return{id:t.id,pathname:o,params:r,data:n[t.id],handle:t.handle}}function rm(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let r=(a,i,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};s.relativePath.startsWith("/")&&(J(s.relativePath.startsWith(o),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(o.length));let u=Ln([o,s.relativePath]),c=t.concat(s);a.children&&a.children.length>0&&(J(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rm(a.children,n,c,u)),!(a.path==null&&!a.index)&&n.push({path:u,score:bh(u,a.index),routesMeta:c})};return e.forEach((a,i)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))r(a,i);else for(let s of am(a.path))r(a,i,s)}),n}function am(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,r=t.endsWith("?"),a=t.replace(/\?$/,"");if(o.length===0)return r?[a,""]:[a];let i=am(o.join("/")),l=[];return l.push(...i.map(s=>s===""?a:[a,s].join("/"))),r&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function kh(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:wh(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const fh=/^:[\w-]+$/,hh=3,yh=2,zh=1,jh=10,gh=-2,vc=e=>e==="*";function bh(e,n){let t=e.split("/"),o=t.length;return t.some(vc)&&(o+=gh),n&&(o+=yh),t.filter(r=>!vc(r)).reduce((r,a)=>r+(fh.test(a)?hh:a===""?zh:jh),o)}function wh(e,n){return e.length===n.length&&e.slice(0,-1).every((o,r)=>o===n[r])?e[e.length-1]-n[n.length-1]:0}function xh(e,n){let{routesMeta:t}=e,o={},r="/",a=[];for(let i=0;i<t.length;++i){let l=t[i],s=i===t.length-1,u=r==="/"?n:n.slice(r.length)||"/",c=Sh({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(o,c.params);let d=l.route;a.push({params:o,pathname:Ln([r,c.pathname]),pathnameBase:Th(Ln([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=Ln([r,c.pathnameBase]))}return a}function Sh(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=Ph(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let a=r[0],i=a.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:o.reduce((u,c,d)=>{let{paramName:p,isOptional:b}=c;if(p==="*"){let z=l[d]||"";i=a.slice(0,a.length-z.length).replace(/(.)\/+$/,"$1")}const j=l[d];return b&&!j?u[p]=void 0:u[p]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function Ph(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Lt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s)=>(o.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),o]}function Eh(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Lt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function go(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}function Ch(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:r=""}=typeof e=="string"?Un(e):e;return{pathname:t?t.startsWith("/")?t:Rh(t,n):n,search:_h(o),hash:Nh(r)}}function Rh(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Mi(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function im(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Ms(e,n){let t=im(e);return n?t.map((o,r)=>r===e.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function Ls(e,n,t,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=Un(e):(r=le({},e),J(!r.pathname||!r.pathname.includes("?"),Mi("?","pathname","search",r)),J(!r.pathname||!r.pathname.includes("#"),Mi("#","pathname","hash",r)),J(!r.search||!r.search.includes("#"),Mi("#","search","hash",r)));let a=e===""||r.pathname==="",i=a?"/":r.pathname,l;if(i==null)l=t;else{let d=n.length-1;if(!o&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),d-=1;r.pathname=p.join("/")}l=d>=0?n[d]:"/"}let s=Ch(r,l),u=i&&i!=="/"&&i.endsWith("/"),c=(a||i===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),Th=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_h=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Nh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,tt=function(n,t){t===void 0&&(t=302);let o=t;typeof o=="number"?o={status:o}:typeof o.status>"u"&&(o.status=302);let r=new Headers(o.headers);return r.set("Location",n),new Response(null,le({},o,{headers:r}))};class Os{constructor(n,t,o,r){r===void 0&&(r=!1),this.status=n,this.statusText=t||"",this.internal=r,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function Ds(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lm=["post","put","patch","delete"],Mh=new Set(lm),Lh=["get",...lm],Oh=new Set(Lh),Dh=new Set([301,302,303,307,308]),Ih=new Set([307,308]),Li={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ah={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Fo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Is=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fh=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),sm="remix-router-transitions";function Uh(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",o=!t;J(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(e.mapRouteProperties)r=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;r=g=>({hasErrorBoundary:y(g)})}else r=Fh;let a={},i=_l(e.routes,r,void 0,a),l,s=e.basename||"/",u=e.unstable_dataStrategy||Hh,c=le({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),d=null,p=new Set,b=null,j=null,z=null,S=e.hydrationData!=null,v=to(i,e.history.location,s),m=null;if(v==null){let y=on(404,{pathname:e.history.location.pathname}),{matches:g,route:x}=xc(i);v=g,m={[x.id]:y}}let k,w=v.some(y=>y.route.lazy),R=v.some(y=>y.route.loader);if(w)k=!1;else if(!R)k=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,g=e.hydrationData?e.hydrationData.errors:null,x=C=>C.route.loader?typeof C.route.loader=="function"&&C.route.loader.hydrate===!0?!1:y&&y[C.route.id]!==void 0||g&&g[C.route.id]!==void 0:!0;if(g){let C=v.findIndex(O=>g[O.route.id]!==void 0);k=v.slice(0,C+1).every(x)}else k=v.every(x)}else k=e.hydrationData!=null;let N,f={historyAction:e.history.action,location:e.history.location,matches:v,initialized:k,navigation:Li,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map,blockers:new Map},_=fe.Pop,I=!1,M,Z=!1,$=new Map,ne=null,me=!1,Fe=!1,We=[],pn=[],E=new Map,A=0,U=-1,G=new Map,Y=new Set,mn=new Map,Ke=new Map,Ze=new Set,Me=new Map,nn=new Map,ri=!1;function _m(){if(d=e.history.listen(y=>{let{action:g,location:x,delta:C}=y;if(ri){ri=!1;return}Lt(nn.size===0||C!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let O=Qs({currentLocation:f.location,nextLocation:x,historyAction:g});if(O&&C!=null){ri=!0,e.history.go(C*-1),Nr(O,{state:"blocked",location:x,proceed(){Nr(O,{state:"proceeding",proceed:void 0,reset:void 0,location:x}),e.history.go(C)},reset(){let H=new Map(f.blockers);H.set(O,Fo),Je({blockers:H})}});return}return ht(g,x)}),t){ty(n,$);let y=()=>oy(n,$);n.addEventListener("pagehide",y),ne=()=>n.removeEventListener("pagehide",y)}return f.initialized||ht(fe.Pop,f.location,{initialHydration:!0}),N}function Nm(){d&&d(),ne&&ne(),p.clear(),M&&M.abort(),f.fetchers.forEach((y,g)=>_r(g)),f.blockers.forEach((y,g)=>Js(g))}function Mm(y){return p.add(y),()=>p.delete(y)}function Je(y,g){g===void 0&&(g={}),f=le({},f,y);let x=[],C=[];c.v7_fetcherPersist&&f.fetchers.forEach((O,H)=>{O.state==="idle"&&(Ze.has(H)?C.push(H):x.push(H))}),[...p].forEach(O=>O(f,{deletedFetchers:C,unstable_viewTransitionOpts:g.viewTransitionOpts,unstable_flushSync:g.flushSync===!0})),c.v7_fetcherPersist&&(x.forEach(O=>f.fetchers.delete(O)),C.forEach(O=>_r(O)))}function wo(y,g,x){var C,O;let{flushSync:H}=x===void 0?{}:x,F=f.actionData!=null&&f.navigation.formMethod!=null&&hn(f.navigation.formMethod)&&f.navigation.state==="loading"&&((C=y.state)==null?void 0:C._isRedirect)!==!0,D;g.actionData?Object.keys(g.actionData).length>0?D=g.actionData:D=null:F?D=f.actionData:D=null;let W=g.loaderData?bc(f.loaderData,g.loaderData,g.matches||[],g.errors):f.loaderData,B=f.blockers;B.size>0&&(B=new Map(B),B.forEach((V,ie)=>B.set(ie,Fo)));let we=I===!0||f.navigation.formMethod!=null&&hn(f.navigation.formMethod)&&((O=y.state)==null?void 0:O._isRedirect)!==!0;l&&(i=l,l=void 0),me||_===fe.Pop||(_===fe.Push?e.history.push(y,y.state):_===fe.Replace&&e.history.replace(y,y.state));let xe;if(_===fe.Pop){let V=$.get(f.location.pathname);V&&V.has(y.pathname)?xe={currentLocation:f.location,nextLocation:y}:$.has(y.pathname)&&(xe={currentLocation:y,nextLocation:f.location})}else if(Z){let V=$.get(f.location.pathname);V?V.add(y.pathname):(V=new Set([y.pathname]),$.set(f.location.pathname,V)),xe={currentLocation:f.location,nextLocation:y}}Je(le({},g,{actionData:D,loaderData:W,historyAction:_,location:y,initialized:!0,navigation:Li,revalidation:"idle",restoreScrollPosition:Xs(y,g.matches||f.matches),preventScrollReset:we,blockers:B}),{viewTransitionOpts:xe,flushSync:H===!0}),_=fe.Pop,I=!1,Z=!1,me=!1,Fe=!1,We=[],pn=[]}async function Vs(y,g){if(typeof y=="number"){e.history.go(y);return}let x=Nl(f.location,f.matches,s,c.v7_prependBasename,y,c.v7_relativeSplatPath,g==null?void 0:g.fromRouteId,g==null?void 0:g.relative),{path:C,submission:O,error:H}=kc(c.v7_normalizeFormMethod,!1,x,g),F=f.location,D=br(f.location,C,g&&g.state);D=le({},D,e.history.encodeLocation(D));let W=g&&g.replace!=null?g.replace:void 0,B=fe.Push;W===!0?B=fe.Replace:W===!1||O!=null&&hn(O.formMethod)&&O.formAction===f.location.pathname+f.location.search&&(B=fe.Replace);let we=g&&"preventScrollReset"in g?g.preventScrollReset===!0:void 0,xe=(g&&g.unstable_flushSync)===!0,V=Qs({currentLocation:F,nextLocation:D,historyAction:B});if(V){Nr(V,{state:"blocked",location:D,proceed(){Nr(V,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),Vs(y,g)},reset(){let ie=new Map(f.blockers);ie.set(V,Fo),Je({blockers:ie})}});return}return await ht(B,D,{submission:O,pendingError:H,preventScrollReset:we,replace:g&&g.replace,enableViewTransition:g&&g.unstable_viewTransition,flushSync:xe})}function Lm(){if(ai(),Je({revalidation:"loading"}),f.navigation.state!=="submitting"){if(f.navigation.state==="idle"){ht(f.historyAction,f.location,{startUninterruptedRevalidation:!0});return}ht(_||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation})}}async function ht(y,g,x){M&&M.abort(),M=null,_=y,me=(x&&x.startUninterruptedRevalidation)===!0,Bm(f.location,f.matches),I=(x&&x.preventScrollReset)===!0,Z=(x&&x.enableViewTransition)===!0;let C=l||i,O=x&&x.overrideNavigation,H=to(C,g,s),F=(x&&x.flushSync)===!0;if(!H){let V=on(404,{pathname:g.pathname}),{matches:ie,route:je}=xc(C);ii(),wo(g,{matches:ie,loaderData:{},errors:{[je.id]:V}},{flushSync:F});return}if(f.initialized&&!Fe&&Gh(f.location,g)&&!(x&&x.submission&&hn(x.submission.formMethod))){wo(g,{matches:H},{flushSync:F});return}M=new AbortController;let D=Bt(e.history,g,M.signal,x&&x.submission),W;if(x&&x.pendingError)W=[tr(H).route.id,{type:se.error,error:x.pendingError}];else if(x&&x.submission&&hn(x.submission.formMethod)){let V=await Om(D,g,x.submission,H,{replace:x.replace,flushSync:F});if(V.shortCircuited)return;W=V.pendingActionResult,O=Oi(g,x.submission),F=!1,D=Bt(e.history,D.url,D.signal)}let{shortCircuited:B,loaderData:we,errors:xe}=await Dm(D,g,H,O,x&&x.submission,x&&x.fetcherSubmission,x&&x.replace,x&&x.initialHydration===!0,F,W);B||(M=null,wo(g,le({matches:H},wc(W),{loaderData:we,errors:xe})))}async function Om(y,g,x,C,O){O===void 0&&(O={}),ai();let H=ey(g,x);Je({navigation:H},{flushSync:O.flushSync===!0});let F,D=Ll(C,g);if(!D.route.action&&!D.route.lazy)F={type:se.error,error:on(405,{method:y.method,pathname:g.pathname,routeId:D.route.id})};else if(F=(await So("action",y,[D],C))[0],y.signal.aborted)return{shortCircuited:!0};if(St(F)){let W;return O&&O.replace!=null?W=O.replace:W=zc(F.response.headers.get("Location"),new URL(y.url),s)===f.location.pathname+f.location.search,await xo(y,F,{submission:x,replace:W}),{shortCircuited:!0}}if(xt(F))throw on(400,{type:"defer-action"});if(ln(F)){let W=tr(C,D.route.id);return(O&&O.replace)!==!0&&(_=fe.Push),{pendingActionResult:[W.route.id,F]}}return{pendingActionResult:[D.route.id,F]}}async function Dm(y,g,x,C,O,H,F,D,W,B){let we=C||Oi(g,O),xe=O||H||Ec(we),V=l||i,[ie,je]=fc(e.history,f,x,xe,g,c.v7_partialHydration&&D===!0,c.unstable_skipActionErrorRevalidation,Fe,We,pn,Ze,mn,Y,V,s,B);if(ii(X=>!(x&&x.some(Le=>Le.route.id===X))||ie&&ie.some(Le=>Le.route.id===X)),U=++A,ie.length===0&&je.length===0){let X=Ks();return wo(g,le({matches:x,loaderData:{},errors:B&&ln(B[1])?{[B[0]]:B[1].error}:null},wc(B),X?{fetchers:new Map(f.fetchers)}:{}),{flushSync:W}),{shortCircuited:!0}}if(!me&&(!c.v7_partialHydration||!D)){je.forEach(Le=>{let tn=f.fetchers.get(Le.key),Se=Uo(void 0,tn?tn.data:void 0);f.fetchers.set(Le.key,Se)});let X;B&&!ln(B[1])?X={[B[0]]:B[1].data}:f.actionData&&(Object.keys(f.actionData).length===0?X=null:X=f.actionData),Je(le({navigation:we},X!==void 0?{actionData:X}:{},je.length>0?{fetchers:new Map(f.fetchers)}:{}),{flushSync:W})}je.forEach(X=>{E.has(X.key)&&Bn(X.key),X.controller&&E.set(X.key,X.controller)});let Eo=()=>je.forEach(X=>Bn(X.key));M&&M.signal.addEventListener("abort",Eo);let{loaderResults:Hn,fetcherResults:Ft}=await Bs(f.matches,x,ie,je,y);if(y.signal.aborted)return{shortCircuited:!0};M&&M.signal.removeEventListener("abort",Eo),je.forEach(X=>E.delete(X.key));let Ut=Sc([...Hn,...Ft]);if(Ut){if(Ut.idx>=ie.length){let X=je[Ut.idx-ie.length].key;Y.add(X)}return await xo(y,Ut.result,{replace:F}),{shortCircuited:!0}}let{loaderData:$t,errors:bn}=gc(f,x,ie,Hn,B,je,Ft,Me);Me.forEach((X,Le)=>{X.subscribe(tn=>{(tn||X.done)&&Me.delete(Le)})}),c.v7_partialHydration&&D&&f.errors&&Object.entries(f.errors).filter(X=>{let[Le]=X;return!ie.some(tn=>tn.route.id===Le)}).forEach(X=>{let[Le,tn]=X;bn=Object.assign(bn||{},{[Le]:tn})});let Mr=Ks(),Lr=Zs(U),Or=Mr||Lr||je.length>0;return le({loaderData:$t,errors:bn},Or?{fetchers:new Map(f.fetchers)}:{})}function Im(y,g,x,C){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");E.has(y)&&Bn(y);let O=(C&&C.unstable_flushSync)===!0,H=l||i,F=Nl(f.location,f.matches,s,c.v7_prependBasename,x,c.v7_relativeSplatPath,g,C==null?void 0:C.relative),D=to(H,F,s);if(!D){Po(y,g,on(404,{pathname:F}),{flushSync:O});return}let{path:W,submission:B,error:we}=kc(c.v7_normalizeFormMethod,!0,F,C);if(we){Po(y,g,we,{flushSync:O});return}let xe=Ll(D,W);if(I=(C&&C.preventScrollReset)===!0,B&&hn(B.formMethod)){Am(y,g,W,xe,D,O,B);return}mn.set(y,{routeId:g,path:W}),Fm(y,g,W,xe,D,O,B)}async function Am(y,g,x,C,O,H,F){if(ai(),mn.delete(y),!C.route.action&&!C.route.lazy){let Se=on(405,{method:F.formMethod,pathname:x,routeId:g});Po(y,g,Se,{flushSync:H});return}let D=f.fetchers.get(y);Vn(y,ny(F,D),{flushSync:H});let W=new AbortController,B=Bt(e.history,x,W.signal,F);E.set(y,W);let we=A,V=(await So("action",B,[C],O))[0];if(B.signal.aborted){E.get(y)===W&&E.delete(y);return}if(c.v7_fetcherPersist&&Ze.has(y)){if(St(V)||ln(V)){Vn(y,Jn(void 0));return}}else{if(St(V))if(E.delete(y),U>we){Vn(y,Jn(void 0));return}else return Y.add(y),Vn(y,Uo(F)),xo(B,V,{fetcherSubmission:F});if(ln(V)){Po(y,g,V.error);return}}if(xt(V))throw on(400,{type:"defer-action"});let ie=f.navigation.location||f.location,je=Bt(e.history,ie,W.signal),Eo=l||i,Hn=f.navigation.state!=="idle"?to(Eo,f.navigation.location,s):f.matches;J(Hn,"Didn't find any matches after fetcher action");let Ft=++A;G.set(y,Ft);let Ut=Uo(F,V.data);f.fetchers.set(y,Ut);let[$t,bn]=fc(e.history,f,Hn,F,ie,!1,c.unstable_skipActionErrorRevalidation,Fe,We,pn,Ze,mn,Y,Eo,s,[C.route.id,V]);bn.filter(Se=>Se.key!==y).forEach(Se=>{let Co=Se.key,Ys=f.fetchers.get(Co),Wm=Uo(void 0,Ys?Ys.data:void 0);f.fetchers.set(Co,Wm),E.has(Co)&&Bn(Co),Se.controller&&E.set(Co,Se.controller)}),Je({fetchers:new Map(f.fetchers)});let Mr=()=>bn.forEach(Se=>Bn(Se.key));W.signal.addEventListener("abort",Mr);let{loaderResults:Lr,fetcherResults:Or}=await Bs(f.matches,Hn,$t,bn,je);if(W.signal.aborted)return;W.signal.removeEventListener("abort",Mr),G.delete(y),E.delete(y),bn.forEach(Se=>E.delete(Se.key));let X=Sc([...Lr,...Or]);if(X){if(X.idx>=$t.length){let Se=bn[X.idx-$t.length].key;Y.add(Se)}return xo(je,X.result)}let{loaderData:Le,errors:tn}=gc(f,f.matches,$t,Lr,void 0,bn,Or,Me);if(f.fetchers.has(y)){let Se=Jn(V.data);f.fetchers.set(y,Se)}Zs(Ft),f.navigation.state==="loading"&&Ft>U?(J(_,"Expected pending action"),M&&M.abort(),wo(f.navigation.location,{matches:Hn,loaderData:Le,errors:tn,fetchers:new Map(f.fetchers)})):(Je({errors:tn,loaderData:bc(f.loaderData,Le,Hn,tn),fetchers:new Map(f.fetchers)}),Fe=!1)}async function Fm(y,g,x,C,O,H,F){let D=f.fetchers.get(y);Vn(y,Uo(F,D?D.data:void 0),{flushSync:H});let W=new AbortController,B=Bt(e.history,x,W.signal);E.set(y,W);let we=A,V=(await So("loader",B,[C],O))[0];if(xt(V)&&(V=await pm(V,B.signal,!0)||V),E.get(y)===W&&E.delete(y),!B.signal.aborted){if(Ze.has(y)){Vn(y,Jn(void 0));return}if(St(V))if(U>we){Vn(y,Jn(void 0));return}else{Y.add(y),await xo(B,V);return}if(ln(V)){Po(y,g,V.error);return}J(!xt(V),"Unhandled fetcher deferred data"),Vn(y,Jn(V.data))}}async function xo(y,g,x){let{submission:C,fetcherSubmission:O,replace:H}=x===void 0?{}:x;g.response.headers.has("X-Remix-Revalidate")&&(Fe=!0);let F=g.response.headers.get("Location");J(F,"Expected a Location header on the redirect Response"),F=zc(F,new URL(y.url),s);let D=br(f.location,F,{_isRedirect:!0});if(t){let ie=!1;if(g.response.headers.has("X-Remix-Reload-Document"))ie=!0;else if(Is.test(F)){const je=e.history.createURL(F);ie=je.origin!==n.location.origin||go(je.pathname,s)==null}if(ie){H?n.location.replace(F):n.location.assign(F);return}}M=null;let W=H===!0?fe.Replace:fe.Push,{formMethod:B,formAction:we,formEncType:xe}=f.navigation;!C&&!O&&B&&we&&xe&&(C=Ec(f.navigation));let V=C||O;if(Ih.has(g.response.status)&&V&&hn(V.formMethod))await ht(W,D,{submission:le({},V,{formAction:F}),preventScrollReset:I});else{let ie=Oi(D,C);await ht(W,D,{overrideNavigation:ie,fetcherSubmission:O,preventScrollReset:I})}}async function So(y,g,x,C){try{let O=await Wh(u,y,g,x,C,a,r);return await Promise.all(O.map((H,F)=>{if(Xh(H)){let D=H.result;return{type:se.redirect,response:Jh(D,g,x[F].route.id,C,s,c.v7_relativeSplatPath)}}return Zh(H)}))}catch(O){return x.map(()=>({type:se.error,error:O}))}}async function Bs(y,g,x,C,O){let[H,...F]=await Promise.all([x.length?So("loader",O,x,g):[],...C.map(D=>{if(D.matches&&D.match&&D.controller){let W=Bt(e.history,D.path,D.controller.signal);return So("loader",W,[D.match],D.matches).then(B=>B[0])}else return Promise.resolve({type:se.error,error:on(404,{pathname:D.path})})})]);return await Promise.all([Pc(y,x,H,H.map(()=>O.signal),!1,f.loaderData),Pc(y,C.map(D=>D.match),F,C.map(D=>D.controller?D.controller.signal:null),!0)]),{loaderResults:H,fetcherResults:F}}function ai(){Fe=!0,We.push(...ii()),mn.forEach((y,g)=>{E.has(g)&&(pn.push(g),Bn(g))})}function Vn(y,g,x){x===void 0&&(x={}),f.fetchers.set(y,g),Je({fetchers:new Map(f.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function Po(y,g,x,C){C===void 0&&(C={});let O=tr(f.matches,g);_r(y),Je({errors:{[O.route.id]:x},fetchers:new Map(f.fetchers)},{flushSync:(C&&C.flushSync)===!0})}function Hs(y){return c.v7_fetcherPersist&&(Ke.set(y,(Ke.get(y)||0)+1),Ze.has(y)&&Ze.delete(y)),f.fetchers.get(y)||Ah}function _r(y){let g=f.fetchers.get(y);E.has(y)&&!(g&&g.state==="loading"&&G.has(y))&&Bn(y),mn.delete(y),G.delete(y),Y.delete(y),Ze.delete(y),f.fetchers.delete(y)}function Um(y){if(c.v7_fetcherPersist){let g=(Ke.get(y)||0)-1;g<=0?(Ke.delete(y),Ze.add(y)):Ke.set(y,g)}else _r(y);Je({fetchers:new Map(f.fetchers)})}function Bn(y){let g=E.get(y);J(g,"Expected fetch controller: "+y),g.abort(),E.delete(y)}function Ws(y){for(let g of y){let x=Hs(g),C=Jn(x.data);f.fetchers.set(g,C)}}function Ks(){let y=[],g=!1;for(let x of Y){let C=f.fetchers.get(x);J(C,"Expected fetcher: "+x),C.state==="loading"&&(Y.delete(x),y.push(x),g=!0)}return Ws(y),g}function Zs(y){let g=[];for(let[x,C]of G)if(C<y){let O=f.fetchers.get(x);J(O,"Expected fetcher: "+x),O.state==="loading"&&(Bn(x),G.delete(x),g.push(x))}return Ws(g),g.length>0}function $m(y,g){let x=f.blockers.get(y)||Fo;return nn.get(y)!==g&&nn.set(y,g),x}function Js(y){f.blockers.delete(y),nn.delete(y)}function Nr(y,g){let x=f.blockers.get(y)||Fo;J(x.state==="unblocked"&&g.state==="blocked"||x.state==="blocked"&&g.state==="blocked"||x.state==="blocked"&&g.state==="proceeding"||x.state==="blocked"&&g.state==="unblocked"||x.state==="proceeding"&&g.state==="unblocked","Invalid blocker state transition: "+x.state+" -> "+g.state);let C=new Map(f.blockers);C.set(y,g),Je({blockers:C})}function Qs(y){let{currentLocation:g,nextLocation:x,historyAction:C}=y;if(nn.size===0)return;nn.size>1&&Lt(!1,"A router only supports one blocker at a time");let O=Array.from(nn.entries()),[H,F]=O[O.length-1],D=f.blockers.get(H);if(!(D&&D.state==="proceeding")&&F({currentLocation:g,nextLocation:x,historyAction:C}))return H}function ii(y){let g=[];return Me.forEach((x,C)=>{(!y||y(C))&&(x.cancel(),g.push(C),Me.delete(C))}),g}function Vm(y,g,x){if(b=y,z=g,j=x||null,!S&&f.navigation===Li){S=!0;let C=Xs(f.location,f.matches);C!=null&&Je({restoreScrollPosition:C})}return()=>{b=null,z=null,j=null}}function Gs(y,g){return j&&j(y,g.map(C=>vh(C,f.loaderData)))||y.key}function Bm(y,g){if(b&&z){let x=Gs(y,g);b[x]=z()}}function Xs(y,g){if(b){let x=Gs(y,g),C=b[x];if(typeof C=="number")return C}return null}function Hm(y){a={},l=_l(y,r,void 0,a)}return N={get basename(){return s},get future(){return c},get state(){return f},get routes(){return i},get window(){return n},initialize:_m,subscribe:Mm,enableScrollRestoration:Vm,navigate:Vs,fetch:Im,revalidate:Lm,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Hs,deleteFetcher:Um,dispose:Nm,getBlocker:$m,deleteBlocker:Js,_internalFetchControllers:E,_internalActiveDeferreds:Me,_internalSetRoutes:Hm},N}function $h(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Nl(e,n,t,o,r,a,i,l){let s,u;if(i){s=[];for(let d of n)if(s.push(d),d.route.id===i){u=d;break}}else s=n,u=n[n.length-1];let c=Ls(r||".",Ms(s,a),go(e.pathname,t)||e.pathname,l==="path");return r==null&&(c.search=e.search,c.hash=e.hash),(r==null||r===""||r===".")&&u&&u.route.index&&!As(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),o&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Ln([t,c.pathname])),Ot(c)}function kc(e,n,t,o){if(!o||!$h(o))return{path:t};if(o.formMethod&&!qh(o.formMethod))return{path:t,error:on(405,{method:o.formMethod})};let r=()=>({path:t,error:on(400,{type:"invalid-body"})}),a=o.formMethod||"get",i=e?a.toUpperCase():a.toLowerCase(),l=cm(t);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!hn(i))return r();let p=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((b,j)=>{let[z,S]=j;return""+b+z+"="+S+`
`},""):String(o.body);return{path:t,submission:{formMethod:i,formAction:l,formEncType:o.formEncType,formData:void 0,json:void 0,text:p}}}else if(o.formEncType==="application/json"){if(!hn(i))return r();try{let p=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:t,submission:{formMethod:i,formAction:l,formEncType:o.formEncType,formData:void 0,json:p,text:void 0}}}catch{return r()}}}J(typeof FormData=="function","FormData is not available in this environment");let s,u;if(o.formData)s=Ml(o.formData),u=o.formData;else if(o.body instanceof FormData)s=Ml(o.body),u=o.body;else if(o.body instanceof URLSearchParams)s=o.body,u=jc(s);else if(o.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(o.body),u=jc(s)}catch{return r()}let c={formMethod:i,formAction:l,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(hn(c.formMethod))return{path:t,submission:c};let d=Un(t);return n&&d.search&&As(d.search)&&s.append("index",""),d.search="?"+s,{path:Ot(d),submission:c}}function Vh(e,n){let t=e;if(n){let o=e.findIndex(r=>r.route.id===n);o>=0&&(t=e.slice(0,o))}return t}function fc(e,n,t,o,r,a,i,l,s,u,c,d,p,b,j,z){let S=z?ln(z[1])?z[1].error:z[1].data:void 0,v=e.createURL(n.location),m=e.createURL(r),k=z&&ln(z[1])?z[0]:void 0,w=k?Vh(t,k):t,R=z?z[1].statusCode:void 0,N=i&&R&&R>=400,f=w.filter((I,M)=>{let{route:Z}=I;if(Z.lazy)return!0;if(Z.loader==null)return!1;if(a)return typeof Z.loader!="function"||Z.loader.hydrate?!0:n.loaderData[Z.id]===void 0&&(!n.errors||n.errors[Z.id]===void 0);if(Bh(n.loaderData,n.matches[M],I)||s.some(me=>me===I.route.id))return!0;let $=n.matches[M],ne=I;return hc(I,le({currentUrl:v,currentParams:$.params,nextUrl:m,nextParams:ne.params},o,{actionResult:S,unstable_actionStatus:R,defaultShouldRevalidate:N?!1:l||v.pathname+v.search===m.pathname+m.search||v.search!==m.search||um($,ne)}))}),_=[];return d.forEach((I,M)=>{if(a||!t.some(Fe=>Fe.route.id===I.routeId)||c.has(M))return;let Z=to(b,I.path,j);if(!Z){_.push({key:M,routeId:I.routeId,path:I.path,matches:null,match:null,controller:null});return}let $=n.fetchers.get(M),ne=Ll(Z,I.path),me=!1;p.has(M)?me=!1:u.includes(M)?me=!0:$&&$.state!=="idle"&&$.data===void 0?me=l:me=hc(ne,le({currentUrl:v,currentParams:n.matches[n.matches.length-1].params,nextUrl:m,nextParams:t[t.length-1].params},o,{actionResult:S,unstable_actionStatus:R,defaultShouldRevalidate:N?!1:l})),me&&_.push({key:M,routeId:I.routeId,path:I.path,matches:Z,match:ne,controller:new AbortController})}),[f,_]}function Bh(e,n,t){let o=!n||t.route.id!==n.route.id,r=e[t.route.id]===void 0;return o||r}function um(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function hc(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function yc(e,n,t){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let r=t[e.id];J(r,"No route found in manifest");let a={};for(let i in o){let s=r[i]!==void 0&&i!=="hasErrorBoundary";Lt(!s,'Route "'+r.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!s&&!ph.has(i)&&(a[i]=o[i])}Object.assign(r,a),Object.assign(r,le({},n(r),{lazy:void 0}))}function Hh(e){return Promise.all(e.matches.map(n=>n.resolve()))}async function Wh(e,n,t,o,r,a,i,l){let s=o.reduce((d,p)=>d.add(p.route.id),new Set),u=new Set,c=await e({matches:r.map(d=>{let p=s.has(d.route.id);return le({},d,{shouldLoad:p,resolve:j=>(u.add(d.route.id),p?Kh(n,t,d,a,i,j,l):Promise.resolve({type:se.data,result:void 0}))})}),request:t,params:r[0].params,context:l});return r.forEach(d=>J(u.has(d.route.id),'`match.resolve()` was not called for route id "'+d.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),c.filter((d,p)=>s.has(r[p].route.id))}async function Kh(e,n,t,o,r,a,i){let l,s,u=c=>{let d,p=new Promise((z,S)=>d=S);s=()=>d(),n.signal.addEventListener("abort",s);let b=z=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+t.route.id+"]"))):c({request:n,params:t.params,context:i},...z!==void 0?[z]:[]),j;return a?j=a(z=>b(z)):j=(async()=>{try{return{type:"data",result:await b()}}catch(z){return{type:"error",result:z}}})(),Promise.race([j,p])};try{let c=t.route[e];if(t.route.lazy)if(c){let d,[p]=await Promise.all([u(c).catch(b=>{d=b}),yc(t.route,r,o)]);if(d!==void 0)throw d;l=p}else if(await yc(t.route,r,o),c=t.route[e],c)l=await u(c);else if(e==="action"){let d=new URL(n.url),p=d.pathname+d.search;throw on(405,{method:n.method,pathname:p,routeId:t.route.id})}else return{type:se.data,result:void 0};else if(c)l=await u(c);else{let d=new URL(n.url),p=d.pathname+d.search;throw on(404,{pathname:p})}J(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:se.error,result:c}}finally{s&&n.signal.removeEventListener("abort",s)}return l}async function Zh(e){let{result:n,type:t,status:o}=e;if(dm(n)){let i;try{let l=n.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?n.body==null?i=null:i=await n.json():i=await n.text()}catch(l){return{type:se.error,error:l}}return t===se.error?{type:se.error,error:new Os(n.status,n.statusText,i),statusCode:n.status,headers:n.headers}:{type:se.data,data:i,statusCode:n.status,headers:n.headers}}if(t===se.error)return{type:se.error,error:n,statusCode:Ds(n)?n.status:o};if(Yh(n)){var r,a;return{type:se.deferred,deferredData:n,statusCode:(r=n.init)==null?void 0:r.status,headers:((a=n.init)==null?void 0:a.headers)&&new Headers(n.init.headers)}}return{type:se.data,data:n,statusCode:o}}function Jh(e,n,t,o,r,a){let i=e.headers.get("Location");if(J(i,"Redirects returned/thrown from loaders/actions must have a Location header"),!Is.test(i)){let l=o.slice(0,o.findIndex(s=>s.route.id===t)+1);i=Nl(new URL(n.url),l,r,!0,i,a),e.headers.set("Location",i)}return e}function zc(e,n,t){if(Is.test(e)){let o=e,r=o.startsWith("//")?new URL(n.protocol+o):new URL(o),a=go(r.pathname,t)!=null;if(r.origin===n.origin&&a)return r.pathname+r.search+r.hash}return e}function Bt(e,n,t,o){let r=e.createURL(cm(n)).toString(),a={signal:t};if(o&&hn(o.formMethod)){let{formMethod:i,formEncType:l}=o;a.method=i.toUpperCase(),l==="application/json"?(a.headers=new Headers({"Content-Type":l}),a.body=JSON.stringify(o.json)):l==="text/plain"?a.body=o.text:l==="application/x-www-form-urlencoded"&&o.formData?a.body=Ml(o.formData):a.body=o.formData}return new Request(r,a)}function Ml(e){let n=new URLSearchParams;for(let[t,o]of e.entries())n.append(t,typeof o=="string"?o:o.name);return n}function jc(e){let n=new FormData;for(let[t,o]of e.entries())n.append(t,o);return n}function Qh(e,n,t,o,r,a){let i={},l=null,s,u=!1,c={},d=o&&ln(o[1])?o[1].error:void 0;return t.forEach((p,b)=>{let j=n[b].route.id;if(J(!St(p),"Cannot handle redirect results in processLoaderData"),ln(p)){let z=p.error;d!==void 0&&(z=d,d=void 0),l=l||{};{let S=tr(e,j);l[S.route.id]==null&&(l[S.route.id]=z)}i[j]=void 0,u||(u=!0,s=Ds(p.error)?p.error.status:500),p.headers&&(c[j]=p.headers)}else xt(p)?(r.set(j,p.deferredData),i[j]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!u&&(s=p.statusCode),p.headers&&(c[j]=p.headers)):(i[j]=p.data,p.statusCode&&p.statusCode!==200&&!u&&(s=p.statusCode),p.headers&&(c[j]=p.headers))}),d!==void 0&&o&&(l={[o[0]]:d},i[o[0]]=void 0),{loaderData:i,errors:l,statusCode:s||200,loaderHeaders:c}}function gc(e,n,t,o,r,a,i,l){let{loaderData:s,errors:u}=Qh(n,t,o,r,l);for(let c=0;c<a.length;c++){let{key:d,match:p,controller:b}=a[c];J(i!==void 0&&i[c]!==void 0,"Did not find corresponding fetcher result");let j=i[c];if(!(b&&b.signal.aborted))if(ln(j)){let z=tr(e.matches,p==null?void 0:p.route.id);u&&u[z.route.id]||(u=le({},u,{[z.route.id]:j.error})),e.fetchers.delete(d)}else if(St(j))J(!1,"Unhandled fetcher revalidation redirect");else if(xt(j))J(!1,"Unhandled fetcher deferred data");else{let z=Jn(j.data);e.fetchers.set(d,z)}}return{loaderData:s,errors:u}}function bc(e,n,t,o){let r=le({},n);for(let a of t){let i=a.route.id;if(n.hasOwnProperty(i)?n[i]!==void 0&&(r[i]=n[i]):e[i]!==void 0&&a.route.loader&&(r[i]=e[i]),o&&o.hasOwnProperty(i))break}return r}function wc(e){return e?ln(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function tr(e,n){return(n?e.slice(0,e.findIndex(o=>o.route.id===n)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function xc(e){let n=e.length===1?e[0]:e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function on(e,n){let{pathname:t,routeId:o,method:r,type:a}=n===void 0?{}:n,i="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(i="Bad Request",r&&t&&o?l="You made a "+r+' request to "'+t+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":a==="defer-action"?l="defer() is not supported in actions":a==="invalid-body"&&(l="Unable to encode submission body")):e===403?(i="Forbidden",l='Route "'+o+'" does not match URL "'+t+'"'):e===404?(i="Not Found",l='No route matches URL "'+t+'"'):e===405&&(i="Method Not Allowed",r&&t&&o?l="You made a "+r.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":r&&(l='Invalid request method "'+r.toUpperCase()+'"')),new Os(e||500,i,new Error(l),!0)}function Sc(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(St(t))return{result:t,idx:n}}}function cm(e){let n=typeof e=="string"?Un(e):e;return Ot(le({},n,{hash:""}))}function Gh(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function Xh(e){return dm(e.result)&&Dh.has(e.result.status)}function xt(e){return e.type===se.deferred}function ln(e){return e.type===se.error}function St(e){return(e&&e.type)===se.redirect}function Yh(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function dm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function qh(e){return Oh.has(e.toLowerCase())}function hn(e){return Mh.has(e.toLowerCase())}async function Pc(e,n,t,o,r,a){for(let i=0;i<t.length;i++){let l=t[i],s=n[i];if(!s)continue;let u=e.find(d=>d.route.id===s.route.id),c=u!=null&&!um(u,s)&&(a&&a[s.route.id])!==void 0;if(xt(l)&&(r||c)){let d=o[i];J(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await pm(l,d,r).then(p=>{p&&(t[i]=p||t[i])})}}}async function pm(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:se.data,data:e.deferredData.unwrappedData}}catch(r){return{type:se.error,error:r}}return{type:se.data,data:e.deferredData.data}}}function As(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function Ll(e,n){let t=typeof n=="string"?Un(n).search:n.search;if(e[e.length-1].route.index&&As(t||""))return e[e.length-1];let o=im(e);return o[o.length-1]}function Ec(e){let{formMethod:n,formAction:t,formEncType:o,text:r,formData:a,json:i}=e;if(!(!n||!t||!o)){if(r!=null)return{formMethod:n,formAction:t,formEncType:o,formData:void 0,json:void 0,text:r};if(a!=null)return{formMethod:n,formAction:t,formEncType:o,formData:a,json:void 0,text:void 0};if(i!==void 0)return{formMethod:n,formAction:t,formEncType:o,formData:void 0,json:i,text:void 0}}}function Oi(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ey(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Uo(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function ny(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function Jn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ty(e,n){try{let t=e.sessionStorage.getItem(sm);if(t){let o=JSON.parse(t);for(let[r,a]of Object.entries(o||{}))a&&Array.isArray(a)&&n.set(r,new Set(a||[]))}}catch{}}function oy(e,n){if(n.size>0){let t={};for(let[o,r]of n)t[o]=[...r];try{e.sessionStorage.setItem(sm,JSON.stringify(t))}catch(o){Lt(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ia.apply(this,arguments)}const ti=h.createContext(null),mm=h.createContext(null),At=h.createContext(null),Fs=h.createContext(null),$n=h.createContext({outlet:null,matches:[],isDataRoute:!1}),vm=h.createContext(null);function ry(e,n){let{relative:t}=n===void 0?{}:n;Tr()||J(!1);let{basename:o,navigator:r}=h.useContext(At),{hash:a,pathname:i,search:l}=hm(e,{relative:t}),s=i;return o!=="/"&&(s=i==="/"?o:Ln([o,i])),r.createHref({pathname:s,search:l,hash:a})}function Tr(){return h.useContext(Fs)!=null}function oi(){return Tr()||J(!1),h.useContext(Fs).location}function km(e){h.useContext(At).static||h.useLayoutEffect(e)}function ay(){let{isDataRoute:e}=h.useContext($n);return e?zy():iy()}function iy(){Tr()||J(!1);let e=h.useContext(ti),{basename:n,future:t,navigator:o}=h.useContext(At),{matches:r}=h.useContext($n),{pathname:a}=oi(),i=JSON.stringify(Ms(r,t.v7_relativeSplatPath)),l=h.useRef(!1);return km(()=>{l.current=!0}),h.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){o.go(u);return}let d=Ls(u,JSON.parse(i),a,c.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Ln([n,d.pathname])),(c.replace?o.replace:o.push)(d,c.state,c)},[n,o,i,a,e])}const ly=h.createContext(null);function sy(e){let n=h.useContext($n).outlet;return n&&h.createElement(ly.Provider,{value:e},n)}function fm(){let{matches:e}=h.useContext($n),n=e[e.length-1];return n?n.params:{}}function hm(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=h.useContext(At),{matches:r}=h.useContext($n),{pathname:a}=oi(),i=JSON.stringify(Ms(r,o.v7_relativeSplatPath));return h.useMemo(()=>Ls(e,JSON.parse(i),a,t==="path"),[e,i,a,t])}function uy(e,n,t,o){Tr()||J(!1);let{navigator:r}=h.useContext(At),{matches:a}=h.useContext($n),i=a[a.length-1],l=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=oi(),c;c=u;let d=c.pathname||"/",p=d;if(s!=="/"){let z=s.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(z.length).join("/")}let b=to(e,{pathname:p});return vy(b&&b.map(z=>Object.assign({},z,{params:Object.assign({},l,z.params),pathname:Ln([s,r.encodeLocation?r.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?s:Ln([s,r.encodeLocation?r.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),a,t,o)}function cy(){let e=yy(),n=Ds(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},n),t?h.createElement("pre",{style:r},t):null,null)}const dy=h.createElement(cy,null);class py extends h.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?h.createElement($n.Provider,{value:this.props.routeContext},h.createElement(vm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function my(e){let{routeContext:n,match:t,children:o}=e,r=h.useContext(ti);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),h.createElement($n.Provider,{value:n},o)}function vy(e,n,t,o){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var a;if((a=t)!=null&&a.errors)e=t.matches;else return null}let i=e,l=(r=t)==null?void 0:r.errors;if(l!=null){let c=i.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||J(!1),i=i.slice(0,Math.min(i.length,c+1))}let s=!1,u=-1;if(t&&o&&o.v7_partialHydration)for(let c=0;c<i.length;c++){let d=i[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:b}=t,j=d.route.loader&&p[d.route.id]===void 0&&(!b||b[d.route.id]===void 0);if(d.route.lazy||j){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((c,d,p)=>{let b,j=!1,z=null,S=null;t&&(b=l&&d.route.id?l[d.route.id]:void 0,z=d.route.errorElement||dy,s&&(u<0&&p===0?(jy("route-fallback"),j=!0,S=null):u===p&&(j=!0,S=d.route.hydrateFallbackElement||null)));let v=n.concat(i.slice(0,p+1)),m=()=>{let k;return b?k=z:j?k=S:d.route.Component?k=h.createElement(d.route.Component,null):d.route.element?k=d.route.element:k=c,h.createElement(my,{match:d,routeContext:{outlet:c,matches:v,isDataRoute:t!=null},children:k})};return t&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?h.createElement(py,{location:t.location,revalidation:t.revalidation,component:z,error:b,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var ym=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ym||{}),Aa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Aa||{});function ky(e){let n=h.useContext(ti);return n||J(!1),n}function fy(e){let n=h.useContext(mm);return n||J(!1),n}function hy(e){let n=h.useContext($n);return n||J(!1),n}function zm(e){let n=hy(),t=n.matches[n.matches.length-1];return t.route.id||J(!1),t.route.id}function yy(){var e;let n=h.useContext(vm),t=fy(Aa.UseRouteError),o=zm(Aa.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function zy(){let{router:e}=ky(ym.UseNavigateStable),n=zm(Aa.UseNavigateStable),t=h.useRef(!1);return km(()=>{t.current=!0}),h.useCallback(function(r,a){a===void 0&&(a={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Ia({fromRouteId:n},a)))},[e,n])}const Cc={};function jy(e,n,t){Cc[e]||(Cc[e]=!0)}function gy(e){return sy(e.context)}function by(e){let{basename:n="/",children:t=null,location:o,navigationType:r=fe.Pop,navigator:a,static:i=!1,future:l}=e;Tr()&&J(!1);let s=n.replace(/^\/*/,"/"),u=h.useMemo(()=>({basename:s,navigator:a,static:i,future:Ia({v7_relativeSplatPath:!1},l)}),[s,l,a,i]);typeof o=="string"&&(o=Un(o));let{pathname:c="/",search:d="",hash:p="",state:b=null,key:j="default"}=o,z=h.useMemo(()=>{let S=go(c,s);return S==null?null:{location:{pathname:S,search:d,hash:p,state:b,key:j},navigationType:r}},[s,c,d,p,b,j,r]);return z==null?null:h.createElement(At.Provider,{value:u},h.createElement(Fs.Provider,{children:t,value:z}))}new Promise(()=>{});function wy(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:h.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(n,{hydrateFallbackElement:h.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:h.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},wr.apply(this,arguments)}function xy(e,n){if(e==null)return{};var t={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function Sy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Py(e,n){return e.button===0&&(!n||n==="_self")&&!Sy(e)}const Ey=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Cy="6";try{window.__reactRouterVersion=Cy}catch{}function Ry(e,n){return Uh({basename:n==null?void 0:n.basename,future:wr({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:uh({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||Ty(),routes:e,mapRouteProperties:wy,unstable_dataStrategy:n==null?void 0:n.unstable_dataStrategy,window:n==null?void 0:n.window}).initialize()}function Ty(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=wr({},n,{errors:_y(n.errors)})),n}function _y(e){if(!e)return null;let n=Object.entries(e),t={};for(let[o,r]of n)if(r&&r.__type==="RouteErrorResponse")t[o]=new Os(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let a=window[r.__subType];if(typeof a=="function")try{let i=new a(r.message);i.stack="",t[o]=i}catch{}}if(t[o]==null){let a=new Error(r.message);a.stack="",t[o]=a}}else t[o]=r;return t}const Ny=h.createContext({isTransitioning:!1}),My=h.createContext(new Map),Ly="startTransition",Rc=lv[Ly],Oy="flushSync",Tc=jf[Oy];function Dy(e){Rc?Rc(e):e()}function $o(e){Tc?Tc(e):e()}class Iy{constructor(){this.status="pending",this.promise=new Promise((n,t)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",n(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",t(o))}})}}function Ay(e){let{fallbackElement:n,router:t,future:o}=e,[r,a]=h.useState(t.state),[i,l]=h.useState(),[s,u]=h.useState({isTransitioning:!1}),[c,d]=h.useState(),[p,b]=h.useState(),[j,z]=h.useState(),S=h.useRef(new Map),{v7_startTransition:v}=o||{},m=h.useCallback(f=>{v?Dy(f):f()},[v]),k=h.useCallback((f,_)=>{let{deletedFetchers:I,unstable_flushSync:M,unstable_viewTransitionOpts:Z}=_;I.forEach(ne=>S.current.delete(ne)),f.fetchers.forEach((ne,me)=>{ne.data!==void 0&&S.current.set(me,ne.data)});let $=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!Z||$){M?$o(()=>a(f)):m(()=>a(f));return}if(M){$o(()=>{p&&(c&&c.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})});let ne=t.window.document.startViewTransition(()=>{$o(()=>a(f))});ne.finished.finally(()=>{$o(()=>{d(void 0),b(void 0),l(void 0),u({isTransitioning:!1})})}),$o(()=>b(ne));return}p?(c&&c.resolve(),p.skipTransition(),z({state:f,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})):(l(f),u({isTransitioning:!0,flushSync:!1,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation}))},[t.window,p,c,S,m]);h.useLayoutEffect(()=>t.subscribe(k),[t,k]),h.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new Iy)},[s]),h.useEffect(()=>{if(c&&i&&t.window){let f=i,_=c.promise,I=t.window.document.startViewTransition(async()=>{m(()=>a(f)),await _});I.finished.finally(()=>{d(void 0),b(void 0),l(void 0),u({isTransitioning:!1})}),b(I)}},[m,i,c,t.window]),h.useEffect(()=>{c&&i&&r.location.key===i.location.key&&c.resolve()},[c,p,r.location,i]),h.useEffect(()=>{!s.isTransitioning&&j&&(l(j.state),u({isTransitioning:!0,flushSync:!1,currentLocation:j.currentLocation,nextLocation:j.nextLocation}),z(void 0))},[s.isTransitioning,j]),h.useEffect(()=>{},[]);let w=h.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:f=>t.navigate(f),push:(f,_,I)=>t.navigate(f,{state:_,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(f,_,I)=>t.navigate(f,{replace:!0,state:_,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[t]),R=t.basename||"/",N=h.useMemo(()=>({router:t,navigator:w,static:!1,basename:R}),[t,w,R]);return h.createElement(h.Fragment,null,h.createElement(ti.Provider,{value:N},h.createElement(mm.Provider,{value:r},h.createElement(My.Provider,{value:S.current},h.createElement(Ny.Provider,{value:s},h.createElement(by,{basename:R,location:r.location,navigationType:r.historyAction,navigator:w,future:{v7_relativeSplatPath:t.future.v7_relativeSplatPath}},r.initialized||t.future.v7_partialHydration?h.createElement(Fy,{routes:t.routes,future:t.future,state:r}):n))))),null)}function Fy(e){let{routes:n,future:t,state:o}=e;return uy(n,void 0,o,t)}const Uy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ko=h.forwardRef(function(n,t){let{onClick:o,relative:r,reloadDocument:a,replace:i,state:l,target:s,to:u,preventScrollReset:c,unstable_viewTransition:d}=n,p=xy(n,Ey),{basename:b}=h.useContext(At),j,z=!1;if(typeof u=="string"&&$y.test(u)&&(j=u,Uy))try{let k=new URL(window.location.href),w=u.startsWith("//")?new URL(k.protocol+u):new URL(u),R=go(w.pathname,b);w.origin===k.origin&&R!=null?u=R+w.search+w.hash:z=!0}catch{}let S=ry(u,{relative:r}),v=Vy(u,{replace:i,state:l,target:s,preventScrollReset:c,relative:r,unstable_viewTransition:d});function m(k){o&&o(k),k.defaultPrevented||v(k)}return h.createElement("a",wr({},p,{href:j||S,onClick:z||a?o:m,ref:t,target:s}))});var _c;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_c||(_c={}));var Nc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nc||(Nc={}));function Vy(e,n){let{target:t,replace:o,state:r,preventScrollReset:a,relative:i,unstable_viewTransition:l}=n===void 0?{}:n,s=ay(),u=oi(),c=hm(e,{relative:i});return h.useCallback(d=>{if(Py(d,t)){d.preventDefault();let p=o!==void 0?o:Ot(u)===Ot(c);s(e,{replace:p,state:r,preventScrollReset:a,relative:i,unstable_viewTransition:l})}},[u,s,c,o,r,t,e,a,i,l])}function By(){return T.jsxs(T.Fragment,{children:[T.jsxs("header",{className:"p-4 flex justify-between items-center",children:[T.jsx(Ko,{to:"/",children:T.jsx("h1",{className:"text-3xl font-semibold",children:"PB152 procvičení"})}),T.jsx("a",{href:"https://github.com/tomz197/os-drill",target:"_blank",rel:"noreferrer",children:T.jsx(nt,{variant:"outline",children:"Více info"})})]}),T.jsx("main",{className:"p-4 border-y flex flex-col gap-2",children:T.jsx(gy,{})}),T.jsx("footer",{className:"p-4 text-center",children:T.jsx("a",{href:"https://github.com/tomz197/os-drill",target:"_blank",className:"text-grey-400 hover:text-blue-500",rel:"noreferrer",children:"Github"})})]})}const xr=[{section:1,name:"Virtualizate paměti",correct:[`instrukce tvaru ld reg_addr → reg_out načte hodnotu z paměti a uloží ji do registru; reg_addr je
registr, ve kterém je uložena adresa, kterou program požaduje

instrukce tvaru st reg_in → reg_addr naopak hodnotu do paměti uloží, a to opět na adresu zadanou registrem reg_addr.`,`Každá adresa je číslo, ale ne každé číslo je platná adresa. Adresním prostorem
tedy budeme nazývat zejména množinu platných adres, ale můžeme v tomto pojmu zahrnout i případnou další
zajímavou strukturu paměti (např. to, že nějaká část adres má jiné vlastnosti než ty ostatní).
Adresní prostor se obvykle skládá ze souvislých bloků, kde jednotlivé bloky obsahují mnoho po sobě
jdoucích adres (řádově miliony).`,`Program má při svém běhu k dispozici nějaký adresní prostor, který může používat
k ukládání dat. Krom pracovní paměti (do které si program ukládá libovolná data jak uzná za vhodné) je
součástí adresního prostoru programu také kód – adresy, na kterých jsou uloženy instrukce, ze kterých
program samotný sestává, a obvykle také hardwarový zásobník, který se používá k realizaci podprogramů
(volání funkcí).`,`Fyzická paměť
Fyzické adresy (tedy adresy, které patří fyzickému adresnímu prostoru) přímo
pojmenovávají fyzické paměťové buňky hardwarových zařízení, zejména paměti RAM. Přestože se jedná
o jeden adresní prostor, podobně jako v případě paměti programu může mít další strukturu.
Největší a nejdůležitější blok (případně několik bloků) fyzických adres zpravidla patří operační paměti
(paměti s přímým přístupem, random access memory, RAM). Toto je paměť v klasickém smyslu tohoto slova,
a slouží především k ukládáni pracovních dat programů`,`Virtualizace
V principu nic nebrání tomu, aby program používal k práci s pamětí přímo fyzické adresy.
V takovém případě bychom program přizpůsobili tomu, které fyzické adresy jsou na našem počítači platné
a odpovídají operační paměti.
Jakmile bychom ale chtěli na jednom počítači spustit několik programů najednou, začneme narážet na
problémy. Programy by mezi sebou musely použití adres koordinovat: používá-li program A adresu 0x1005
pro svoji proměnnou, nemůže ji zároveň používat program B.`,`Virtuální a fyzické adresy
Bylo by tedy lepší, aby adresní prostor programu byl od toho fyzického
nezávislý. Proto procesory určené pro běžné počítače poskytují oddělený virtuální adresní prostor,
který je viditelný pro programy, a který je od toho fyzického důsledně oddělen. Fyzický adresní prostor
je uživatelským programům zcela nepřístupný.`,`Překlad adres
Virtuální adresy budeme překládat na adresy fyzické, které již určí, kde budou příslušná data skutečně uložena.
O fyzické buňce pak můžeme říct, že má právě jednu fyzickou adresu (a ta je této buňce přidělena
pevně) a nějaké virtuální adresy (to jsou ty, které se přeloží na její fyzickou adresu). Buňka může mít
virtuálních adres hned několik, ale také třeba žádnou`,`Jednotka správy paměti
Přístup do paměti (čtení, zápis) je časově kritickou operací – procesor
jich provádí miliony za vteřinu. Přitom adresní operand instrukce, která takový přístup realizuje,
představuje vždy virtuální adresu, která musí být ještě před samotným přístupem přeložena na adresu
fyzickou.`,`Jednotka správy paměti
Překlad adres proto musí být velmi rychlý, a není nijak překvapivé, že je realizován specializovaným
hardwarem, který je přímo součástí procesoru. Zároveň ale potřebujeme zabezpečit, aby o konkrétní
podobě překladu mohl rozhodovat operační systém. Proto musí být tato tzv. jednotka správy paměti
programovatelná – pomocí vhodně sestavených tabulek může operační systém (konkrétně jeho jádro)
řídit mapování virtuálních adres na fyzické, a tedy i to, jak budou vypadat jednotlivé virtuální adresní
prostory.`,`Stránky
Stránka je pak základní jednotkou překladu. Tím se jednak zmenší potřebné tabulky, jednak se tím
zjednoduší proces překladu. Budeme-li totiž požadovat, aby:

1. stránka obsahovala 2**n
adres (tj. měla velikost 2**n bajtů),
2. stránka začínala adresou, která je beze zbytku dělitelná 2**n
3. byla mapována na fyzickou adresu, která je také beze zbytku dělitelná 2**n,

můžeme spodních n bitů virtuální adresy přímo použít jako spodních n bitů adresy fyzické. Zbytek fyzické adresy již dopočítáme podle překladové tabulky.
To má mimo jiné za důsledek, že stránky se nemohou překrývat.`,`Stránkové tabulky
Stránkové tabulky jsou uloženy v operační paměti, ale jejich přesná struktura
je opět vlastností konkrétního hardwaru. Protože moderní počítače mají velké adresní prostory (2**32 nebo 2**64 virtuálních adres), 
používají obvykle řídké, víceúrovňové překladové tabulky.`,`Proces
Pojem běžící program je poněkud vágní, proto si pro něj zavedeme formálnější alternativu
– proces. Tímto pojmem budeme označovat entitu, která:
• je spojena s virtuálním adresním prostorem, který
     ∘ obsahuje kód – instrukce – nějakého programu,
     ∘ veškerá data, která tento program potřebuje pro svůj běh,
• operační systém o ni vede záznam,
• může vlastnit krom paměti i další zdroje`,`Ochrana paměti
• Kód programu (a případná data, která jsou určena výhradně ke čtení) může být ve fyzické paměti uložen
pouze jednou i v případě, kdy tento kód využívá více procesů. Jedná se o užitečnou a zároveň bezpečnou
optimalizaci, protože odpovídající virtuální adresy jsou v obou procesech označeny příznakem pouze
pro čtení, a procesy se tak nemohou skrze tyto adresy vzájemně ovlivňovat.
• Na žádost programu může být dvěma procesům do jejich virtuálních adresních prostorů namapován
stejný blok fyzické paměti i v režimu umožňujícím zápis. Smyslem takto namapované paměti je umožnit
komunikaci mezi dotčenými procesy: mohou si tímto způsobem totiž jednoduše předávat data. Pozor:
virtuální adresy takto namapované paměti nebudou obecně v obou procesech stejné.`,`Přepnutí procesu
Zatím jsme nezmínili, jak procesor (resp. jednotka správy paměti) najde
stránkovou tabulku první úrovně. Odpověď na tuto otázku je klíčem k přepínání procesů:
1. fyzická adresa stránkové tabulky 1. úrovně je uložena ve speciálním registru procesoru,
2. tuto adresu je možné nastavit privilegovanou instrukcí (privilegovanou v tomto případě znamená, že
ji může provést pouze jádro),
3. změnou hodnoty v tomto registru se aktivuje překlad adres podle nově zavedené stránkové tabulky`,`Vytvoření procesu
Asi nejjednodušší způsob, jak vytvořit nový proces, je duplikace nějakého
existujícího (POSIX této operaci říká fork). V mnoha operačních systémech je to dokonce způsob jediný.19
Mohlo by se zdát, že je to způsob dost neefektivní: procesy mohou mít virtuální adresní prostor
o velikosti mnoha GiB a duplikace takového množství paměti vyžaduje vynaložení značných prostředků.
Operační systémy proto používají trik, který zde vede k výrazné úspoře, a se kterým se setkáme ještě
v několika kontextech.
Tento trik nese název „copy on write“ a jeho myšlenka je poměrně jednoduchá:
1. vytvoříme kopii adresního prostoru (tedy relevantních stránkových tabulek, nikoliv samotných dat),
2. v obou kopiích označíme všechny stránky příznakem jen pro čtení a poznačíme si také, že se jedná o
„copy on write“ stránky.`,`Externí stránkování 
Má-li OS nedostatek použitelných fyzických adres (například proto, že běží hodně programů, které využívají hodně
paměti), může některou stránku odstěhovat z operační paměti někam jinam – např. na externí (pevné)
úložiště, které je sice obvykle mnohem pomalejší, ale také má obvykle mnohem větší kapacitu. Nebude-li
se stávat příliš často, že program potřebuje k takto „odklizené“ stránce přistoupit, nemusí se jednat
o zásadní problém.`,`Rámce a stránky
• stránkou budeme i nadále označovat rozsah virtuálních adres,
   ∘ také stále platí, že stránky mají pevnou velikost (počet virtuálních adres, které obsahuje), a že
   ∘ nejnižší adresa stránky musí být beze zbytku dělitelná velikostí stránky,
• rámcem budeme označovat rozsah fyzických adres,
   ∘ které splňují stejné požadavky na velikost a zarovnání jako stránky,
   ∘ a na jeden rámec mapovat právě jednu stránku.
Lze pak mluvit o tom, že daná stránka je uložena v nějakém rámci, případně že daný rámec je volný.`,`Líné načítání
Líné načítání lze také výhodně kombinovat s klasickým externím stránkováním – vybereme-li jako oběť
stránku s kódem (nebo konstantními daty) programu, není potřeba ji nikam ukládat – lze ji přímo odkázat
zpátky na spustitelný soubor.`,`Mapování souborů
Posledním, jednoznačně nejdůležitějším, využitím externího stránkování je
mapování datových souborů do paměti (na žádost aplikace). V tomto režimu jsou externí stránky uloženy
v jinak běžném souboru. Místo komplikovaných vstupně-výstupních operací tak může program s obsahem
souboru pracovat stejně, jako by byl uložen v operační paměti. Využijeme-li tohoto mechanismu také
k zápisu změněných stránek zpátky do souboru, může program soubor i zcela transparentně upravovat.`],incorrect:[`instrukce tvaru ld reg_addr → reg_out načte hodnotu z paměti a uloží ji do registru; reg_addr je
registr, ve kterém je uložena nějaká hodnota

instrukce tvaru st reg_in → reg_addr naopak hodnotu do paměti uloží, a to opět na adresu zadanou registrem reg_addr.`,`Každá adresa je číslo, ale ne každé číslo je platná adresa. Adresním prostorem
tedy budeme nazývat zejména množinu platných adres, ale můžeme v tomto pojmu zahrnout i případnou dalš
 zajímavou strukturu paměti (např. to, že nějaká část adres má jiné vlastnosti než ty ostatní).
Adresní prostor se obvykle skládá bloků, kde jednotlivé bloky obsahují libovolné adresy.`,`Program má při svém běhu k dispozici nějaký adresní prostor, který může používat
k ukládání dat. Krom pracovní paměti (do které si program ukládá libovolná data jak uzná za vhodné) je
součástí adresního prostoru programu také kód – adresy, na kterých jsou uloženy instrukce, ze kterých
program samotný sestává, ovšem zásobník se zde obvykle nenachází.`,`Fyzická paměť
Fyzické adresy (tedy adresy, které patří fyzickému adresnímu prostoru) přímo
pojmenovávají fyzické paměťové buňky procesoru. Přestože se jedná o jeden adresní prostor
 podobně jako v případě paměti programu může mít další strukturu.
`,`Virtualizace
V principu nic nebrání tomu, aby program používal k práci s pamětí přímo fyzické adresy.
V takovém případě bychom program přizpůsobili tomu, které fyzické adresy jsou na našem počítači platné
a odpovídají operační paměti.
Takto nemůžou vzniknout žádné problémy a tedy je virtualizace procesoru zbytečná.
`,`Virtuální a fyzické adresy
Bylo by tedy lepší, aby adresní prostor programu na tom fyzickém závislý.
Proto procesory určené pro běžné počítače poskytují spojení virtuálních adresních prostorů s těmi fyzickými. Fyzický adresní prostor
je tedy uživatelským programům libovolně přístupný.`,`Překlad adres
Virtuální adresy budeme překládat na adresy fyzické, které již určí, kde budou příslušná data skutečně uložena.
O fyzické buňce pak můžeme říct, že má právě jednu fyzickou adresu (a ta je této buňce přidělena
pevně) a právě jednu virtuální adresu (a ta není této buňce přidělena pevně).`,`Jednotka správy paměti
Přístup do paměti (čtení, zápis) je časově kritickou operací – procesor
jich provádí miliony za vteřinu. Přitom adresní operand instrukce, která takový přístup realizuje,
představuje vždy fyzickou adresu, která musí být ještě před samotným přístupem přeložena na adresu
virtuální.`,`Jednotka správy paměti
Překlad adres proto musí být velmi rychlý, a není nijak překvapivé, že je realizován specializovaným
hardwarem, který je přímo součástí procesoru. Zároveň ale nesmíme dovolit aby operační systém jakkoli, jinak by došlo k porušení abstrakce.`,`Stránky
Stránka je pak základní jednotkou překladu. Tím se jednak zmenší potřebné tabulky, jednak se tím
zjednoduší proces překladu. Budeme-li totiž požadovat, aby:

1. stránka obsahovala 2**n
adres (tj. měla velikost 2**n bajtů),
2. stránka začínala adresou, která je beze zbytku dělitelná 2
3. byla mapována na fyzickou adresu, která je také beze zbytku dělitelná 2,

můžeme spodních n bitů virtuální adresy přímo použít jako spodních n bitů adresy fyzické. Zbytek fyzické adresy již dopočítáme podle překladové tabulky. 
To má mimo jiné za důsledek, že stránky se nemohou překrývat.`,`Stránkové tabulky
Stránkové tabulky jsou uloženy v operační paměti, ale jejich přesná struktura
je opět vlastností konkrétního hardwaru. Protože moderní počítače mají velké adresní prostory (2**32 nebo 2**64 virtuálních adres), 
používají obvykle husté, jednoúrovňové překladové tabulky.`,`Proces
Pojem běžící program je poněkud vágní, proto si pro něj zavedeme formálnější alternativu
– proces. Tímto pojmem budeme označovat entitu, která:
• je spojena s fyzickým adresním prostorem, který
     ∘ obsahuje kód – instrukce – nějakého programu,
     ∘ veškerá data, která tento program potřebuje pro svůj běh,
• operační systém o ni vede záznam,
• může vlastnit krom paměti i další zdroje`,`Ochrana paměti
• Kód programu (a případná data, která jsou určena výhradně ke čtení) může být ve fyzické paměti uložen
pouze jednou i v případě, kdy tento kód využívá více procesů. Jedná se o užitečnou a zároveň bezpečnou
optimalizaci, protože odpovídající virtuální adresy jsou v obou procesech označeny příznakem pouze
pro čtení, a procesy se tak nemohou skrze tyto adresy vzájemně ovlivňovat.
• Na žádost programu může být dvěma procesům do jejich virtuálních adresních prostorů namapován
stejný blok fyzické paměti i v režimu umožňujícím zápis. Smyslem takto namapované paměti je umožnit
komunikaci mezi dotčenými procesy: mohou si tímto způsobem totiž jednoduše předávat data. Pozor:
virtuální adresy takto namapované paměti musí být v obou procesech stejné.`,`Přepnutí procesu
Zatím jsme nezmínili, jak procesor (resp. jednotka správy paměti) najde
stránkovou tabulku první úrovně. Odpověď na tuto otázku je klíčem k přepínání procesů:
1. fyzická adresa stránkové tabulky 1. úrovně je uložena ve speciálním registru procesoru,
2. tuto adresu může nastavit libovolný uživatelský program ve speciálním režimu
3. změnou hodnoty v tomto registru se aktivuje překlad adres podle nově zavedené stránkové tabulky.`,`Vytvoření procesu
Asi nejjednodušší způsob, jak vytvořit nový proces, je duplikace nějakého
existujícího (POSIX této operaci říká fork). V mnoha operačních systémech je to dokonce způsob jediný.19
Mohlo by se zdát, že je to způsob dost neefektivní: procesy mohou mít virtuální adresní prostor
o velikosti mnoha GiB a duplikace takového množství paměti vyžaduje vynaložení značných prostředků.
Operační systémy proto používají trik, který zde vede k výrazné úspoře, a se kterým se setkáme ještě
v několika kontextech.
Tento trik nese název „copy on write“ a jeho myšlenka je poměrně jednoduchá:
1. vytvoříme kopii fyzických adres (tedy relevantních fyzických buněk, nikoliv samotných dat),
2. v obou kopiích označíme všechny stránky příznakem jen pro čtení a poznačíme si také, že se jedná o
„copy on write“ stránky.`,`Externí stránkování 
Má-li OS nedostatek použitelných fyzických adres (například proto, že běží hodně programů, které využívají hodně
paměti), může některou stránku odstěhovat z operační paměti někam jinam – např. na externí (pevné)
úložiště, které je sice obvykle mnohem pomalejší, ale také má obvykle mnohem větší kapacitu. Nebude-li
se stávat příliš často, že program k dané stránce dlouhodobě nepřistupuje, nemusí se jednat
o zásadní problém.`,`Rámce a stránky
• stránkou budeme i nadále označovat rozsah fyzických adres,
   ∘ také stále platí, že stránky mají pevnou velikost (počet virtuálních adres, které obsahuje), a že
   ∘ nejnižší adresa stránky musí být beze zbytku dělitelná velikostí stránky,
• rámcem budeme označovat rozsah virtuálních adres,
   ∘ které splňují stejné požadavky na velikost a zarovnání jako stránky,
   ∘ a na jeden rámec mapovat právě jednu stránku.
Lze pak mluvit o tom, že daná stránka je uložena v nějakém rámci, případně že daný rámec je volný.`,`Líné načítání
Líné načítání lze také výhodně kombinovat s klasickým externím stránkováním – vybereme-li jako oběť
stránku s kódem (nebo konstantními daty) programu, stačí stránku uložit do operační paměti`,`Mapování souborů
Posledním, jednoznačně nejdůležitějším, využitím externího stránkování je
mapování datových souborů do paměti (na žádost aplikace). V tomto režimu jsou externí stránky uloženy
v jinak běžném souboru. Místo komplikovaných vstupně-výstupních operací tak může program s obsahem
souboru pracovat stejně, jako by byl uložen v operační paměti. Toto ovšem zabraňujeprogramu soubor transparentně upravovat.`]},{section:2,name:"Virtualizate procesoru",correct:[`Výpočet
Procesor vykonává instrukce, čím realizuje výpočet. Nejjednodušší třídou instrukcí jsou
tzv. aritmetické a logické instrukce (tedy ty, které provádí ALU – aritmeticko-logická jednotka). Tím se
myslí zejména:
• aritmetika: sčítání, odečítání, násobení a dělení,
• bitové operace: and, or, xor po bitech, bitové posuvy,
• srovnání dvou hodnot (rovnost, nerovnost) – výsledek se uloží do běžného registru nebo do stavového
příznaku procesoru.`,`Registry
Podobně jako paměť, registry slouží k ukládáni čísel – existují dva klíčové rozdíly mezi
registry a pamětí:
1. pojmenování registru je pevnou součástí instrukce, kdežto paměťovou adresu lze vypočítat (paměť
lze indexovat, registry nikoliv),
2. reprezentace čísla v registru je monolitická – registry nejsou složené z bajtů, daný registr obsahuje
celé slovo (částečně důsledek předchozího bodu: registr lze pojmenovat pouze jako celek).`,`Programový čítač
Vyhrazený registr (programový čítač, angl. program counter, někdy také instruction pointer, budeme
jej označovat pc) pak obsahuje virtuální adresu právě vykonávané instrukce. Tento registr rozhoduje
o tom, která instrukce se má vykonat, není do něj ale obvykle možné zapisovat běžnými (aritmetickými,
atp.) instrukcemi. K tomu jsou určeny instrukce řízení toku, kterých hlavním efektem je právě změna
hodnoty programového čítače.`,`Instrukce
Instrukce je elementární příkaz strojového kódu; to znamená:
• elementární – je to nejmenší jednotka činnosti, kterou lze procesoru zadat,
• příkaz – instrukce řídí činnost procesoru, „přikazují“ mu provedení nějaké akce.
Instrukcí budeme nazývat pouze celek, který obsahuje veškeré informace potřebné k provedení konkrétních
akcí (zejména udává operaci, která se má provést, a konkrétní registry, se kterými se bude pracovat a
také konkrétní přímé operandy.
Instrukcí je pouze konečně mnoho, je tedy zejména možné je očíslovat (nebo jinak konečně kódovat,
např. do sekvencí bajtů). Každé takové číslo (kódování) popisuje konkrétní akci, kterou může procesor
provést.
`,`Efekt instrukce
Každá instrukce má nějaký efekt na stav procesoru, a případně (podle konkrétní instrukce) na další připojená zařízení (zejména paměť). 
Tento efekt je zároveň definující charakteristikou dané instrukce.
Program totiž nedělá nic jiného, než že vhodnou manipulací stavu (procesoru, paměti, periferií) postupuje
od vstupů k požadovaným výstupům. Této posloupnosti změn stavu říkáme výpočet.
`,`Efekt instrukce
Jak vstupy tak výstupy programu jsou součástí stavu – vstupy na začátku, výstupy na konci výpočtu.
Vstup může být například hodnota zapsaná v nějaké buňce paměti; výstup může být třeba stav obrazovky,
kdy rozsvícené pixely vytváří obrazec, který přečteme jako slova hello world.
Efekt instrukce tedy není nic jiného, než elementární změna stavu, nebo jinak řečeno elementární výpočet.
Instrukci samotnou tak můžeme chápat jako pokyn k provedení takového elementárního výpočtu.`,`Program
Co bude program počítat (resp. co bude počítat procesor řízený daným programem)
je určeno textem programu: instrukcemi uloženými v paměti. Instrukce, které nejsou skoky, obvykle
posouvají programový čítač za svůj vlastní konec, tedy na instrukci na nejbližší vyšší adrese. Většina
programu je tedy prováděna v pořadí od nižších k vyšším (virtuálním) adresám.
Výjimku samozřejmě tvoří instrukce skoku, které mohou některé adresy přeskočit (typicky podmíněné
příkazy – if), nebo se naopak vrátit k některé dřívější, už vykonané instrukci (typicky cykly – while)`,`Zásobník
Za účelem aktivace podprogramu by se nám hodila jakási odlehčená verze virtualizace procesoru:
1. podprogram je dostatečně uzavřený celek na to, aby mělo smysl jej alespoň částečně oddělit od
ostatních výpočtů – často např. používá nějaká data, která mimo tento podprogram nemají žádný
význam (ve vyšším programovacím jazyce lokální proměnné),
2. protože takový podprogram je navíc často potřeba spouštět z různých míst programu, je žádoucí mít
nějaký mechanismus, který po ukončení výpočtu podprogramu vrátí řízení na místo, ze kterého byl
původně aktivován.
Obě tyto funkce zastává zásobník (hardwarový zásobník, zásobník volání, angl. call stack, atp.). Jedná
se o spojitou oblast virtuálního adresního prostoru, které rozsah je dán hodnotou ukazatele vrcholu
zásobníku (jedná se o druhý „speciální“ registr, vedle programového čítače) a pevným dnem.`,`Aktivační záznam
Zásobník typického programu je složen z aktivačních záznamů, známých též
jako rámců (angl. call frame). Každý takový záznam odpovídá jedné aktivaci podprogramu, která
dosud neskončila. Jak jistě víte, podprogramy se mohou aktivovat (volat) vzájemně, nebo může dokonce
podprogram opakovaně aktivovat sám sebe – jev, který pravděpodobně znáte jako rekurzi.
Je také relativně logické, že má-li nějaký podprogram skončit (a tedy má být jeho aktivační záznam
odstraněn), musí nejprve skončit všechny podprogramy, které sám aktivoval (přímo či nepřímo). Tato
skutečnost je odpovědná za to, že aktivační rámce tvoří právě zásobník (a ne třeba frontu, strom,
graf, nebo jinou strukturu).`,`Stav procesoru
Stav procesoru tedy sestává z:
1. hodnot uložených v aritmetických registrech,
2. hodnoty programového čítače,
3. hodnoty ukazatele zásobníku.
V případě, že:
• program neobsahuje instrukce přístupu do paměti,
• nebo celý virtuální adresní prostor je přístupný pouze aktivnímu programu,
je celý výpočet jednoznačně určen programem samotným a počátečním stavem procesoru (a případně
paměti).`,`Vlákno
Nyní jsme konečně připraveni definovat pojem vlákno: je to
• výpočet (posloupnost změn stavu), který vznikne
• nepřerušenou činností jednoho procesoru, který je
• po celou dobu řízen jedním programem.
Všimněte si, že neklademe žádné požadavky na adresní prostor. Takový výpočet tedy není jednoznačně
určen, protože není izolován – součástí takového výpočtu může být synchronizace, a tedy průběh výpočtu
krom samotného programu a počátečního stavu bude záviset také na vnějších událostech, které může
vlákno skrze svůj adresní prostor pozorovat.
Za povšimnutí také stojí, že definice nepovoluje, aby se stav procesoru měnil jakkoliv jinak, než
řízením programu. Bude také výhodné předpokládat, že zásobník je pro externí entity nepřístupný a že
jej tedy chápat jako součást stavu vlákna (který je jinak shodný se stavem procesoru).`,`Logický procesor
Definice vlákna se odvolává na nepřerušenou činnost procesoru. Pro účely této
definice si ale vystačíme s velmi abstraktním chápáním procesoru:
1. procesor má stav, který sestává právě z hodnot registrů,
2. procesor svůj stav mění vykonáváním instrukcí (a nijak jinak).
Takto popsaný procesor budeme nazývat logickým procesorem. Má několik zajímavých vlastností:
1. je zřejmé, že výpočet logického procesoru lze přímočaře realizovat na fyzickém procesoru,
2. stav logického procesoru je velmi jednoduchý a tedy není těžké si představit, že bychom ho mohli
například uložit do paměti (to se nakonec částečně děje i při aktivaci podprogramu),
3. lze si také představit, že bychom mohli fyzický procesor do takto uloženého stavu zase vrátit.
Předpokládejme, že operace z bodů 2 a 3 skutečně existují, a že je může operační systém provést bez
součinnosti aktuálně prováděného vlákna. Pak už je jednoduše vidět, jak realizovat několik logických
procesorů pomocí jednoho fyzického, a tím dosáhnout virtualizace procesoru
`,`Přepnutí vlákna
Protože můžeme uložit, a později obnovit, stav logického procesoru, můžeme na
jednom fyzickém procesoru provádět střídavě několik různých vláken, a zároveň zabezpečit, že každé
vlákno má, ze svého vlastního pohledu, pomyslný vlastní procesor.
Co obnáší uložení a obnova registru závisí na jejich typu:
1. aritmetické registry – teoreticky nepředstavují problém, ale protože bez aritmetických registrů
nelze nic počítat, nelze bez asistence procesoru uložit ani obnovit všechny,
2. ukazatel zásobníku v principu jednoduché jak uložit tak obnovit, problém ale nastane, používáme-li
zásobníkové instrukce k manipulaci s ostatními registry,
3. programový čítač představuje největší problém: nelze přímo ani uložit (vyžadovalo by součinnost
prováděného programu), ani obnovit (obnovou automaticky ztrácíme kontrolu nad procesorem, musí
tedy být provedena v posledním kroku, kdy už ale nemáme k dispozici žádné aritmetické registry).
`,`Plánovač
Části jádra operačního systému, která je odpovědná za přidělování procesorů vláknům
říkáme plánovač vláken, často také z historických důvodů plánovač procesů. Plánovač je na každém
procesoru aktivován v pravidelných intervalech a je mu tedy umožněno odebrat procesor aktivnímu
vláknu i bez součinnosti tohoto vlákna.
Základním rozhodnutím plánovače při každé aktivaci je: „Má aktivní vlákno (logický procesor) pokračovat
ve výpočtu, nebo má být přerušeno (preempted). Které vlákno má být na procesoru spuštěno jako další?
`,`Cíle plánovače
Na plánovací algoritmus (a plánovač jako celek) máme několik základních požadavků:
1. maximalizovat propustnost
2. minimalizovat latenci (prodlevu)
3. udržovat férovost
Je na první pohled vidět, že některé požadavky jsou protichůdné: zejména latence a propustnost často
stojí proti sobě, a zlepšení jednoho parametru vede ke zhoršení toho druhého.`,`Stav vlákna
Vlákno (které ještě neskončilo) může být, z pohledu plánovače, ve třech základních
stavech:
1. právě běží – má aktuálně přidělený procesor,
2. připraveno ke běhu, ale čeká na procesor – vlákno bylo přerušeno plánovačem (nebo nebylo dosud nikdy
spuštěno), ale jinak mu nic nebrání pokračovat ve výpočtu,
3. čeká na událost – vlákno je „zaseknuté“ v synchronizační smyčce a nemůže pokračovat ve výpočtu,
dokud nenastane nějaká externí událost (plánovači musí být tento stav explicitně oznámen, jinak jej
nemá jak rozeznat od běžného výpočtu).

nemůže se stát, že by vlákno, které čekalo na procesor, přešlo do stavu čekání na událost
– tento přechod totiž vyžaduje nějakou akci, kterou musí provést samotné vlákno.
`,`Fronta úloh
Základním pracovním nástrojem plánovače jsou běhové fronty úloh (angl. run queue),
do kterých plánovač řadí vlákna, která čekají na procesor. Konkrétní plánovací algoritmy se pak liší
zejména v tom, jak se tyto fronty chovají.
`,`Afinita
Protože migrace vlákna na jiný fyzický procesor není zadarmo, je žádoucí zbytečným
migracím vláken zamezit. Mluvíme v takovém případě o afinitě vlákna ke konkrétnímu fyzickému procesoru:
plánovač má snahu vlákno opakovaně plánovat na stejný fyzický procesor.
Mezní situace jsou:
1. plánovač zcela bez afinity: např. proto, že má globální frontu a tedy je prvnímu čekajícímu vláknu
vždy přidělen první uvolněný procesor,
2. plánovač bez možnosti migrace: např. proto, že má lokální fronty, a neumožňuje přesun vláken mezi
nimi.`,`Prioritní fronty
Interaktivní plánovače používají téměř výhradně nějakou formu prioritního
plánování – vlákna mají přidělenu prioritu (staticky nebo dynamicky), která ovlivňuje jejich schopnost
získat procesor – a to jak latenci (jak dlouho musí vlákno čekat ve frontě) tak celkový přidělený
výpočetní čas (jaký díl procesorového času je vláknu přidělen).
`,`Prioritní fronty
výhody:
• používá pouze jednoduché datové struktury,
• všechny operace jsou asymptoticky konstantní (vzhledem k počtu čekajících vláken – počet prioritních
tříd je pevný).
A také jednu důležitou nevýhodu:
• dlouho běžící výpočetní vlákno s vysokou prioritou zablokuje procesor pro všechna ostatní vlákna.
Tuto nevýhodu lze vyřešit dynamickou úpravou priority: za každou přidělenou jednotku výpočetního času
je vlákno „potrestáno“ snížením priority. Existují-li jiná čekající vlákna, dříve nebo později se tak
dostanou ke slovu.`,`Férové plánování
Cílem férového plánovače je, aby každé vlákno dostalo přiděleno podle možnosti
stejné množství výpočetního času (případně váženo prioritou). V tomto se podobá na systém s dynamickou
úpravou priority z předchozí sekce, ale místo pevného systému prioritních tříd má priority v libovolném
rozsahu. Realizuje se proto klasickou (monolitickou) prioritní frontou – např. binární haldou nebo
binárním vyhledávacím stromem.`,`Odebrání procesoru
Rozhodnutí o odebrání procesoru (tzn. přesunu vlákna ze stavu „běží“ do
stavu „čeká na procesor“) má dva základní vstupy:
1. jak dlouho již běží právě aktivní vlákno,
2. srovnání aktivního vlákna a následujícího vlákna ve frontě.
Konkrétní rozhodnutí opět závisí na konkrétním plánovacím algoritmu. Je ale obvyklé nechat aktivní
vlákno běžet nějaký minimální čas, i v případě, že další naplánované vlákno má vyšší prioritu (tímto se
brání příliš častému přepínání vláken) – tento minimální čas je plánovací kvantum. Delší kvantum má
pozitivní vliv na propustnost, ale negativní vliv na latenci (reakční dobu).`,`Čekající vlákna
Vlákno je označeno jako čekající na událost (říkáme o něm také, že je uspané)
buď na vlastní žádost (umožňuje-li to operační systém a povaha události), nebo na popud některé jiné
části operačního systému:
• vyžádá-li například vlákno čtení ze souboru, a operační systém nemá aktuálně data k dispozici, zařádí
požadavek na data do fronty a vlákno uspí,
• pokusí-li se vstoupit do kritické sekce, která je aktuálně zamčená jiným vláknem,
• vyžádá vstup z klávesnice (a zrovna není žádný k dispozici),
`,`Čekající vlákna
Události čekání jsou v zásadě dvou typů:
• čekání na vyřízení „soukromého“ požadavku: takto uspané vlákno je poznačeno u příslušného požadavku,
a jakmile je tento vyřízen, odpovědná komponenta vlákno probudí (aktivuje plánovač, který vlákno
přesune do běhové fronty, nebo mu ihned přidělí procesor),
• soutěž o nějaký zdroj (např. zmiňovaná kritická sekce), který může vlastnit v danou chvíli nejvýše
jedno vlákno, ale na který jich může zároveň čekat několik: takové zdroje mají čekací frontu (angl.
wait queue) a příslušná událost probudí (přesune do běhové fronty) pouze první vlákno z čekací fronty:
nemá smysl probouzet všechna, protože by okamžitě všechna krom jednoho musela být zase uspána
(vyhrát soutěž může nejvýše jedno).
`],incorrect:[`Výpočet
Operační paměť vykonává instrukce, čím realizuje výpočet. Nejjednodušší třídou instrukcí jsou
tzv. aritmetické a logické instrukce (tedy ty, které provádí ALU – aritmeticko-logická jednotka). Tím se
myslí zejména:
• aritmetika: sčítání, odečítání, násobení a dělení,
• bitové operace: and, or, xor po bitech, bitové posuvy,
• srovnání dvou hodnot (rovnost, nerovnost) – výsledek se uloží do běžného registru nebo do stavového
příznaku procesoru.`,`Registry
Podobně jako paměť, registry slouží k ukládáni čísel – existují dva klíčové rozdíly mezi
registry a pamětí:
1. pojmenování registru je pevnou součástí instrukce, kdežto paměťovou adresu lze vypočítat (paměť
lze indexovat, registry nikoliv),
2. reprezentace čísla v registru – registry jsou složené z bajtů, daný registr obsahuje
bajty jako každá jíná část paměti`,`Programový čítač
Vyhrazený registr (programový čítač, angl. program counter, někdy také instruction pointer, budeme
jej označovat pc) pak obsahuje fyzickou adresu právě vykonávané instrukce. Tento registr rozhoduje
o tom, která instrukce se má vykonat, není do něj ale obvykle možné zapisovat běžnými (aritmetickými,
atp.) instrukcemi. K tomu jsou určeny instrukce řízení toku, kterých hlavním efektem je právě změna
hodnoty programového čítače.`,`Instrukce
Instrukce je elementární příkaz strojového kódu; to znamená:
• elementární – je to nejmenší jednotka činnosti, kterou lze procesoru zadat,
• příkaz – instrukce řídí činnost procesoru, „přikazují“ mu provedení nějaké akce.
Instrukcí budeme nazývat pouze celek, který obsahuje veškeré informace potřebné k provedení konkrétních
akcí (zejména udává operaci, která se má provést, a konkrétní registry, se kterými se bude pracovat a
také konkrétní přímé operandy.
Instrukcí je nekonečně mnoho, je tedy nepraktické je číslovat
`,`Efekt instrukce
Každá instrukce má nějaký efekt na stav procesoru, a případně (podle konkrétní instrukce) na další připojená zařízení (zejména paměť). 
Tento efekt není definující charakteristikou dané instrukce.
Program totiž nedělá nic jiného, než že vhodnou manipulací stavu (procesoru, paměti, periferií) postupuje
od vstupů k požadovaným výstupům. Této posloupnosti změn stavu říkáme výpočet.
`,`Efekt instrukce
Jak vstupy tak výstupy programu jsou součástí stavu – vstupy na začátku, výstupy na konci výpočtu.
Vstup musí být hodnota zapsaná v nějaké buňce paměti; výstup může být třeba stav obrazovky,
kdy rozsvícené pixely vytváří obrazec, který přečteme jako slova hello world.
Efekt instrukce tedy není nic jiného, než elementární změna stavu, nebo jinak řečeno elementární výpočet.
Instrukci samotnou tak můžeme chápat jako pokyn k provedení takového elementárního výpočtu.`,`Program
Co bude program počítat (resp. co bude počítat procesor řízený daným programem)
je určeno textem programu: instrukcemi uloženými v paměti. Instrukce, které nejsou skoky, obvykle
posouvají programový čítač za svůj vlastní konec, tedy na instrukci na nejbližší nižší adrese. Většina
programu je tedy prováděna v pořadí od vyšších k nižším (virtuálním) adresám.
Výjimku samozřejmě tvoří instrukce skoku, které mohou některé adresy přeskočit (typicky podmíněné
příkazy – if), nebo se naopak vrátit k některé dřívější, už vykonané instrukci (typicky cykly – while)`,`Zásobník
Za účelem aktivace podprogramu by se nám hodila jakási odlehčená verze virtualizace procesoru:
1. podprogram není dostatečně uzavřený celek na to, aby mělo smysl jej  oddělit od ostatních výpočtů, proto ho neoddělujeme
2. protože takový podprogram je navíc často potřeba spouštět z různých míst programu, je žádoucí mít
nějaký mechanismus, který po ukončení výpočtu podprogramu vrátí řízení na místo, ze kterého byl
původně aktivován.
Obě tyto funkce zastává zásobník (hardwarový zásobník, zásobník volání, angl. call stack, atp.). Jedná
se o spojitou oblast virtuálního adresního prostoru, které rozsah je dán hodnotou ukazatele vrcholu
zásobníku (jedná se o druhý „speciální“ registr, vedle programového čítače) a pevným dnem.`,`Aktivační záznam
Zásobník typického programu je složen z aktivačních záznamů, známých též
jako rámců (angl. call frame). Každý takový záznam odpovídá jedné aktivaci podprogramu, který již skončil.
Jak jistě víte, podprogramy se mohou aktivovat (volat) vzájemně, nebo může dokonce
podprogram opakovaně aktivovat sám sebe – jev, který pravděpodobně znáte jako rekurzi.
Je také relativně logické, že má-li nějaký podprogram skončit (a tedy má být jeho aktivační záznam
odstraněn), musí nejprve skončit všechny podprogramy, které sám aktivoval (přímo či nepřímo). Tato
skutečnost je odpovědná za to, že aktivační rámce tvoří právě zásobník (a ne třeba frontu, strom,
graf, nebo jinou strukturu).`,`Stav procesoru
Stav procesoru tedy sestává z:
1. hodnot uložených v aritmetických registrech,
2. hodnoty programového čítače,
3. hodnoty ukazatele zásobníku.
V případě, že:
• program neobsahuje instrukce přístupu do paměti,
• a celý virtuální adresní prostor je přístupný pouze aktivnímu programu
je celý výpočet jednoznačně určen programem samotným a počátečním stavem procesoru (a případně
paměti).`,`Vlákno
Nyní jsme konečně připraveni definovat pojem vlákno: je to
• výpočet (posloupnost změn stavu), který vznikne
• nepřerušenou činností jednoho procesoru, který je
• po celou dobu řízen jedním programem.
Všimněte si, že neklademe žádné požadavky na adresní prostor. Takový výpočet tedy je jednoznačně určen.
Za povšimnutí také stojí, že definice nepovoluje, aby se stav procesoru měnil jakkoliv jinak, než
řízením programu. Bude také výhodné předpokládat, že zásobník je pro externí entity nepřístupný a že
jej tedy chápat jako součást stavu vlákna (který je jinak shodný se stavem procesoru).`,`Logický procesor
Definice vlákna se odvolává na nepřerušenou činnost procesoru. Pro účely této
definice si ale vystačíme s velmi abstraktním chápáním procesoru:
1. procesor má stav, který sestává právě z hodnot registrů,
2. procesor svůj stav mění vykonáváním instrukcí (a nijak jinak).
Takto popsaný procesor budeme nazývat logickým procesorem. Má několik zajímavých vlastností:
1. je zřejmé, že výpočet logického procesoru lze přímočaře realizovat na fyzickém procesoru,
2. stav logického procesoru je velmi složitý a tedy není možné ho uložit do paměti 
`,`Přepnutí vlákna
Protože můžeme uložit, a později obnovit, stav logického procesoru, můžeme na
jednom fyzickém procesoru provádět střídavě několik různých vláken, a zároveň zabezpečit, že každé
vlákno má, ze svého vlastního pohledu, pomyslný vlastní procesor.
Co obnáší uložení a obnova registru závisí na jejich typu:
1. aritmetické registry – teoreticky nepředstavují problém, protože je lze obnovit všechny,
2. ukazatel zásobníku v principu jednoduché jak uložit tak obnovit, problém ale nastane, používáme-li
zásobníkové instrukce k manipulaci s ostatními registry,
3. programový čítač představuje největší problém: nelze přímo ani uložit (vyžadovalo by součinnost
prováděného programu), ani obnovit (obnovou automaticky ztrácíme kontrolu nad procesorem, musí
tedy být provedena v posledním kroku, kdy už ale nemáme k dispozici žádné aritmetické registry).
`,`Plánovač
Části jádra operačního systému, která je odpovědná za přidělování procesorů vláknům
říkáme plánovač vláken, často také z historických důvodů plánovač procesů. Plánovač je jen na hlavním
procesoru aktivován v pravidelných intervalech a je mu tedy umožněno odebrat procesor aktivnímu
vláknu i bez součinnosti tohoto vlákna.
Základním rozhodnutím plánovače při každé aktivaci je: „Má aktivní vlákno (logický procesor) pokračovat
ve výpočtu, nebo má být přerušeno (preempted). Které vlákno má být na procesoru spuštěno jako další?
`,`Cíle plánovače
Na plánovací algoritmus (a plánovač jako celek) máme několik základních požadavků:
1. minimalizovat propustnost
2. maximalizovat latenci (prodlevu)
3. udržovat férovost
Je na první pohled vidět, že některé požadavky jsou protichůdné: zejména latence a propustnost často
stojí proti sobě, a zlepšení jednoho parametru vede ke zhoršení toho druhého.`,`Stav vlákna
Vlákno (které ještě neskončilo) může být, z pohledu plánovače, ve třech základních
stavech:
1. právě běží – má aktuálně přidělený procesor,
2. připraveno ke běhu, ale čeká na procesor – vlákno bylo přerušeno plánovačem (nebo nebylo dosud nikdy
spuštěno), ale jinak mu nic nebrání pokračovat ve výpočtu,
3. čeká na událost – vlákno je „zaseknuté“ v synchronizační smyčce a nemůže pokračovat ve výpočtu,
dokud nenastane nějaká externí událost (plánovači musí být tento stav explicitně oznámen, jinak jej
nemá jak rozeznat od běžného výpočtu).

Vlákno může libovolně přecházet mezi všemi stavy, tyto přechody jsou řízeny procesorem`,`Fronta úloh
Základním pracovním nástrojem plánovače jsou běhové fronty úloh (angl. run queue),
do kterých plánovač řadí vlákna, která čekají na událost. Konkrétní plánovací algoritmy se pak liší
zejména v tom, jak se tyto fronty chovají.
`,`Afinita
Protože migrace vlákna na jiný fyzický procesor není zadarmo, je žádoucí zbytečným
migracím vláken zamezit. Mluvíme v takovém případě o afinitě vlákna ke konkrétnímu fyzickému procesoru:
plánovač má snahu vlákno opakovaně plánovat na stejný fyzický procesor.
Mezní situace jsou:
1. plánovač zcela bez afinity: např. proto, že má lokální fronty, a neumožňuje přesun vláken mezi
nim,
2. plánovač bez možnosti migrace: např. proto,že má globální frontu a tedy je prvnímu čekajícímu vláknu
vždy přidělen první uvolněný procesor.`,`Prioritní fronty
Interaktivní plánovače používají téměř výhradně nějakou formu prioritního
plánování – vlákna mají přidělenu prioritu (staticky nebo dynamicky), která ovlivňuje jejich schopnost
získat procesor – a to jen latenci (jak dlouho musí vlákno čekat ve frontě), celkový přidělený
výpočetní čas ovlivňovat nemůže
`,`Prioritní fronty
výhody:
• používá pouze jednoduché datové struktury,
• všechny operace jsou asymptoticky konstantní (vzhledem k počtu čekajících vláken – počet prioritních
tříd je pevný).
A také jednu důležitou nevýhodu:
• dlouho běžící výpočetní vlákno s vysokou prioritou zablokuje procesor pro všechna ostatní vlákna.
Tuto nevýhodu nelze vyřešit dynamickou úpravou priority, docházelo by k takzvanému hladovění vláken.`,`Férové plánování
Cílem férového plánovače je, aby každé vlákno dostalo přiděleno podle možnosti
stejné množství výpočetního času (případně váženo prioritou). V tomto se podobá na systém s dynamickou
úpravou priority z předchozí sekce, ale místo pevného systému prioritních tříd má priority v libovolném
rozsahu. Realizuje se proto zásobníkem.`,`Odebrání procesoru
Rozhodnutí o odebrání procesoru (tzn. přesunu vlákna ze stavu „běží“ do
stavu „čeká na procesor“) má dva základní vstupy:
1. jak dlouho již běží právě aktivní vlákno,
2. srovnání aktivního vlákna a následujícího vlákna ve frontě.
Konkrétní rozhodnutí opět závisí na konkrétním plánovacím algoritmu. Je ale obvyklé nechat aktivní
vlákno běžet nějaký minimální čas, i v případě, že další naplánované vlákno má vyšší prioritu (tímto se
brání příliš častému přepínání vláken) – tento minimální čas je plánovací kvantum. Delší kvantum má
negativní vliv na propustnost, ale pozitivní vliv na latenci (reakční dobu).`,`Čekající vlákna
Vlákno je označeno jako čekající na událost (říkáme o něm také, že je uspané) na žádost pouze operačního systému, příklad:
• vyžádá-li například vlákno čtení ze souboru, a operační systém nemá aktuálně data k dispozici, zařádí
požadavek na data do fronty a vlákno uspí,
• pokusí-li se vstoupit do kritické sekce, která je aktuálně zamčená jiným vláknem,
• vyžádá vstup z klávesnice (a zrovna není žádný k dispozici),
`,`Čekající vlákna
Události čekání jsou v zásadě dvou typů:
• čekání na vyřízení „soukromého“ požadavku: takto uspané vlákno je poznačeno u příslušného požadavku,
a jakmile je tento vyřízen, odpovědná komponenta vlákno přesune na jiný procesor.
• soutěž o nějaký zdroj (např. zmiňovaná kritická sekce), který může vlastnit v danou chvíli nejvýše
jedno vlákno, ale na který jich může zároveň čekat několik: takové zdroje mají čekací frontu (angl.
wait queue) a příslušná událost probudí (přesune do běhové fronty) pouze první vlákno z čekací fronty:
nemá smysl probouzet všechna, protože by okamžitě všechna krom jednoho musela být zase uspána
(vyhrát soutěž může nejvýše jedno).
`]},{section:3,name:"Souborové systémy",correct:[` Bloková zařízení
Tento typ zařízení představuje abstrakci perzistentních úložišť. Operace (abstraktního) blokového
zařízení jsou přizpůsobené běžným schopnostem odpovídajících reálných zařízení:
• zápis a čtení je prováděno po blocích pevné velikosti,
• v libovolném pořadí, ale
• s velkou latencí a malou propustností (relativně k operační paměti).`,`Trvalé úložiště
je fyzické zařízení, které se podobá na operační paměť (pamatuje si data),
s několika klíčovými rozdíly:
1. data zde uložená přetrvávají „dlouhodobě“, tedy zejména i po vypnutí počítače (nebo restartu
operačního systému),
2. přístup k datům je pomalejší – zejména má mnohem vyšší latenci (prodlevu) mezi vystavením požadavku
a odpovědí zařízení; je proto nepraktické adresovat takové zařízení po jednotlivých bajtech (jako
tomu je u operační paměti),
3. proto je obvyklé, že poskytují operace, které pracují s celými bloky dat najednou (velikost 512 bajtů
a víc, často 4 KiB) – základní operací je pak přesun takového bloku mezi zařízením a operační pamětí.`,`Latence
doba mezi požadavkem a odpovědí; příliš velká, než aby bylo lze ignorovat; rozdíl proti
operační paměti: nelze skrýt hardwarově, musí řešit OS; problém zejména pro spolehlivé uložení dat –
durability v ACID – nutné čekat na potvrzení zápisu`,` Mezipaměť
Hlavní problém, který mezipaměť řeší, je opakovaný přístup ke stejným adresám daného
datového úložiště. Přístup k datům obvykle není rovnoměrný – některá data jsou potřebná často (např.
aktivně využívaná databáze), zatímco jiná (archiv dat z minulého roku) jen velmi zřídka. Proto je výhodné
si nedávno čtená data pamatovat v rychlejší paměti: může se totiž lehce stát, že je bude potřeba přečíst
v blízké budoucnosti znovu.
Podobně má smysl některá data načíst do mezipaměti s předstihem (existuje-li volná přenosová kapacita;
této technice se angl. říká prefetch)`,`Vyrovnávací paměť
Existují dvě základní možnosti, jak vyrovnávací paměti realizovat:
1. oddělené od mezipaměti: vyrovnávací paměť obsahuje jak samotné požadavky, tak veškerá data s nimi
spojená; jsou-li některé dotčené bloky uložené v mezipaměti, tyto jsou buď zneplatněny, nebo (častěji)
upraveny na místě,
2. propojená s mezipamětí: vyrovnávací paměť obsahuje pouze frontu požadavků na zápis – samotné
datové bloky se ukládají vždy do mezipaměti, fronta nevyřízených zápisů do ní pouze odkazuje; takto
koncipovaný systém se, jako celek, chová jako mezipaměť s opožděným zápisem (angl. write-back
cache).`,` Plánování operací
U většiny úložišť platí, že sekvenční přístup (čtení po sobě následujících
adres) je mnohem rychlejší, než nahodilý přístup (postupné čtení adres, které spolu nijak nesouvisí).
Různé technologie navíc kladou další omezení na rychlost reakce – klasickým příkladem jsou rotační disky,
kde prodleva další operace závisí na vzdálenosti hlavy od místa, kde se potřebná data fyzicky nachází.
Naopak polovodičové paměti jsou často složené z nezávislých celků, které mohou pracovat souběžně, ale
požadavky do stejné části paměti musí vyčkat na dokončení těch předchozích.
Bez ohledu na technologii ukládání dat ale platí, že operace s trvalým úložištěm vykazují vysokou míru
souběžnosti: do systému přichází mnoho nezávislých požadavků na diskové operace a existuje tedy jistá
volnost odpovídat na tyto požadavky v různém pořadí. Je to způsobeno zejména tím, že je často spuštěno
několik (souběžných) vláken a každé z nich provádí vstupně-výstupní operace nezávisle na ostatních.`,`Přeuspořádání operací má určitá úskalí, zejména v případech, kdy jsou prohozeny zápisy, které náleží
stejné aplikaci, nebo se jedná o operace související s údržbou metadat souborového systému. Vzniká tak
napětí mezi výkonem (více přeuspořádání → vyšší propustnost) a spolehlivostí (více přeuspořádání →
větší šance nekonzistence v případě výpadku).
Pokud jde o operace čtení, zde je prostor pro přeuspořádání obvykle menší, protože aplikace, která čtení
vyžádala, obvykle nemůže pokračovat ve své činnosti dříve, než jsou data k dispozici (a tedy zejména
nemůže vyžádat další operace čtení).`,`Problémy virtualizace
Náš dosavadní přístup k virtualizaci nebude v případě trvalých úložišť
příliš dobře fungovat. Vzpomeňte si, že v případě paměti a procesoru řešení spočívalo ve vytvoření
soukromých (virtuálních) instancí příslušného zařízení. Taková instance je pak vždy ve výlučném užívání
jednoho programu.
Zde ale narážíme na to, že trvalé úložiště slouží především k ukládání uživatelsky zajímavých dat. Je
tedy potřebné, aby mohl uživatel s těmito daty nějak interagovat, a zejména tedy nemůžou být skryta
v soukromém prostoru jednoho programu.`,`Problémy virtualizace
dvě možnosti řešení:
1. můžeme zcela změnit přístup k virtualizaci: místo toho, abychom virtualizací vytvořili věrný obraz
skutečného zařízení, může operační systém poskytovat nějaký jiný druh abstrakce, a trvalé úložiště
nebude aplikacím vůbec přístupné,
2. vyčleníme nějakou aplikaci, která bude odpovědná za správu uživatelských dat v trvalém úložišti, a
ostatní aplikace budou své požadavky na interakci s těmito daty řešit skrze tuto speciální aplikaci.

Obě řešení jsou ve skutečnosti (s trochou nadsázky) vlastně totéž řešení. V obou případech je přímý
přístup k úložišti omezen na jeden nebo několik málo programů (v prvním případě je tento program
součástí operačního systému), tento program rozhoduje o tom, jak budou data „fyzicky“ organizovaná,
jaké operace lze nad daty provádět, které další programy k nim budou mít přístup, atp.`,`Metody virtualizace
1. souborový systém, nebo obecněji abstrakce na vyšší úrovni poskytovaná jako služba operačního systému,
která umožňuje řízený přístup k datům mnoha aplikacím současně, a zároveň umožňuje uživateli data
organizovat a spravovat,
2. virtualizace na aplikační úrovni, kdy je přímý přístup k úložišti poskytnut některé aplikaci, která
spravuje data a ostatním aplikacím poskytuje přístup pomocí vhodného aplikačního protokolu (typickým
příkladem jsou databázové systémy),`,`RAID
Zatímco standardním řešením problému s nízkou propustností a/nebo velkou prodlevou paměťových operací jsou mezipaměti,
standardním řešením problémů se spolehlivostí paměti je redundance.
Nejjednodušší formou redundance je pořízení kopie (zálohy) – v případě ztráty primárních dat obnovíme
data ze záložní kopie. S tím jsou spojeny dva problémy:
1. aby byla užitečná, musíme takovou kopii udržovat aktuální a zároveň konzistentní,
2. při poruše musíme vyměnit dotčené zařízení a data překopírovat ze zálohy, přitom obě operace mohou
být poměrně zdlouhavé.`,`Operace nad soubory
Základními operacemi pro práci se souborem je čtení (v POSIX-u voláním read) a zápis
(v POSIX-u write) souvislé posloupnosti bajtů (libovolné velikosti – abstrakce souboru skrývá blokový
charakter zařízení, na kterém je soubor uložen). Podobně může být libovolná velikost souboru (samozřejmě
ale musí soubor obsahovat celočíselný počet bajtů) – tuto velikost je navíc možné dynamicky měnit. Zápis
„za konec“ souboru jej automaticky prodlouží, zkrácení je nutné explicitně vyžádat (v POSIX-u voláním
ftruncate).`,`soubory jsou obvykle perzistentní
– existují dlouhodobě, nezávisle na běžících procesech, nebo dokonce na tom, je-li vůbec aktivní operační
systém (nebo samotný hardware). Abychom mohli s perzistentními soubory rozumně pracovat, musí být
navíc tyto opatřeny identitou.
Abychom mohli se souborem pracovat, ve většině systémů je nutné jej otevřít – v systémech POSIX
k tomu slouží volání open, kterého výsledkem je popisovač otevřeného souboru (angl. file descriptor)`,`Obyčejný soubor
je právě oním „motivačním případem“ – obyčejný soubor reprezentuje paměť, tzn.
jeho smyslem je uchovávat data (obyčejný soubor si tedy pamatuje posloupnost bajtů). Jaké konkrétní
bajty to jsou je irelevantní – souborový systém obsah obyčejných souborů nijak neinterpretuje.
Krom abstrakce (perzistentní – trvalé) paměti je obyčejný soubor také abstrakcí nad pevným úložištěm
v tom smyslu, že skrývá detaily přístupu k tomuto zařízení. Operace nad pevným úložištěm pracují po
jednotlivých blocích, přičemž bloky mají pevnou velikost a jejich počáteční adresa musí být dělitelná
touto velikostí – pro soubory žádné takové omezení neplatí. Zároveň je aplikace odstíněna od fyzického
umístění dat na pevném úložišti (funguje zde opět analogie s virtuálním adresním prostorem a překladem
virtuálních adres na fyzické). Analogie překladu adres je v tomto případě ale zcela v režii operačního
systému`,`Mapováni do paměti
Operace read a write nejsou vždy efektivní, protože musí mimo jiné kopírovat
data mezi mezipamětí a pamětí, která náleží žádajícímu procesu.
Efektivita aplikací, které data
především čtou, může být výrazně zlepšena mapováním souborů do paměti za pomoci líného načítání.
V tomto režimu jsou externí stránky uloženy v jinak běžném souboru, ale místo komplikovaných vstupněvýstupních
operací může program s obsahem souboru pracovat stejně, jako by byl uložen v operační paměti.
Využijeme-li tohoto mechanismu také k zápisu změněných stránek zpátky do souboru, může program soubor
i zcela transparentně upravovat.`,`Souběžný přístup
Jmenný prostor souborového systému (blíže jej popíšeme v další sekci) je
sdílený mezi všemi procesy, může se tedy lehce stát, že více procesů bude pracovat s jedním souborem.
Tato situace je analogická tomu, že stejná oblast operační paměti může být namapovaná ve více virtuálních
adresních prostorech. Jde-li o souběžný přístup pouze pro čtení, nevznikají žádné významnější problémy.
Vstoupí-li ale do hry zápisy, jak čtení tak jiné zápisy mohou způsobovat problémy – zejména různé
instance hazardu souběhu.
Aby se těmto problémům předešlo, operační systémy umožňují soubory zamykat čím je umožněno programům
k souboru přistupovat bezpečně – tzn. bez rizika poškození dat`,`Spustitelný soubor
Spustitelné soubory představují programy v klidu (tzn. ve stavu, kdy nejsou spuštěné) a obsahují veškeré
informace, které jsou potřeba k tomu, aby bylo možné v nich obsažený program spustit. Hlavní část
spustitelného souboru je tvořena počátečním obrazem paměti, podle kterého se při spuštění programu
(v POSIX-u voláním exec v již existujícím procesu) inicializuje virtuální adresní prostor`,`Roura
Roury se podobají na obyčejné soubory v tom, že je možné do nich zapisovat a číst z nich
data (bajty). Ve většině případů data jeden program (proces) zapisuje a jiný je čte – na rozdíl od
obyčejného souboru nejsou tato data nikde trvale uložena – z roury zmizí jakmile jsou přečtena.
S rourou je samozřejmě svázán buffer, ale je uložen pouze v operační paměti. Díky tomu lze do roury data
zapisovat i ve chvíli, kdy je právě druhá strana nečte – operační systém zapsaná data dočasně uchová.
Za normálních okolností je roura anonymní a přístupná pouze skrze popisovače otevřených souborů.`,`Tvrdé odkazy
Jasným důsledkem výše popsané organizace složek je existence tzv. tvrdých odkazů
– situace, kdy několik adresářových položek (v jedné nebo několika složkách) odkazuje tutéž entitu
(i-uzel). Všechny odkazy na tentýž soubor jsou zcela rovnocenné a z pohledu uživatele se pouze tentýž
soubor objevuje na různých místech adresářové struktury.
I-uzly si navíc udržují počítadlo odkazů – samotný soubor (i-uzel) je zničen pouze v případě, kdy toto
počítadlo dojde na nulu. To mimo jiné znamená, že odstraněním adresářové položky (angl. unlinking) může,
ale nemusí způsobit smazání souboru.`,`Měkké odkazy
Občas je užitečné odkazovat soubor nikoliv přímo, ale skrze nějakou cestu která
k němu vede. Toho lze dosáhnout tzv. měkkým odkazem: tento je (na rozdíl od tvrdého odkazu) skutečným
objektem v souborovém systému, který je reprezentován samostatným i-uzlem. Narazí-li při procházení
adresářové struktury (zejména při hledání i-uzlů podle cesty) operační systém přečte cestu obsaženou
v tomto měkkém odkazu a ve vyhledávání pokračuje touto cestou.`,`Bitmapa 
V souborových systémech se využívá několik velmi jednoduchých datových struktur, které
jsou díky své jednoduchosti zároveň relativně robustní. Asi nejjednodušší strukturou tohoto typu je
bitmapa, která se používá k mapování využitých resp. volných bloků nebo řádků v tabulkách (přiblížíme
si za chvíli).
Bitmapa udržuje informaci o lineárním sledu bloků a informace o jednotlivém bloku se omezuje na jediný
bit (obvykle právě ona využitost).`,`Tabulka
Bitmapa je sice jednoduchá a rychlá, neumí ale uchovat příliš mnoho zajímavých informací.
O něco málo složitější datovou strukturou je tabulka, která v podstatě odpovídá klasickému poli:
1. je to souvislá oblast fixně velkých struktur (řádků, položek), zvolených tak, aby se jich do jednoho
bloku vešel celočíselný počet (vyhovuje například velikost jednoho řádku 128 nebo 256 bajtů),
2. alokace položek se provede např. bitmapou (určuje které řádky jsou resp. nejsou použité, aby bylo
v případě potřeby možné rychle najít řádek, do kterého můžeme zapsat novou položku),
3. chceme-li se do takové tabulky odkázat (např. proto, že se jedná o tabulku záznamů o souborech),
stačí nám znát číslo řádku (index).`,`Konzistence
Důležitým problémem souborového systému je udržení konzistence metadat (jak
různých typů nebo složek metadat mezi sebou, tak se samotnými daty). Porušení konzistence může být
trojího typu:
1. narušení jednotlivé datové struktury, např.
∘ B-strom obsahuje uzel, který ve skutečnosti není platným uzlem, např. proto, že nový odkaz byl
zapsán dříve, než odkazovaný uzel,
2. konfliktní informace v různých datových strukturách, např.:
∘ bitmapa označuje řádek tabulky za volný, ale tento je zároveň vyplněn smysluplnými metadaty, nebo
∘ datový blok je označený jako volný (v bitmapě nebo B-stromě), ale zároveň je odkazován jako
součást nějakého souboru,
3. nesoulad mezi metadaty a datovými bloky – např.
∘ podle metadat je vlastníkem souboru uživatel B, ale odkazované datové bloky obsahují data uživatele
A`,`Existují dva hlavní důvody, proč by mohlo dojít  k porušení konzistence u datových struktur:
1. přerušením kritické operace, která provádí více souvisejících změn, např. výpadkem napájení, nebo
kritickou chybou („pádem“) celého systému,
2. i v případě, kdy je souborový systém vůči takovému přerušení robustní, tato jeho vlastnost může být
narušena přeuspořádáním zápisů (plánovačem nebo samotným zařízením).
Existuje několik metod, jak se s problémem vypořádat. Jednou je detekce problému (např. příznakem,
který se zapíše při korektním ukončení operačního systému) a následná křížová kontrola všech metadat
v situaci, kdy mohlo k poškození teoreticky dojít. Tato kontrola může a nemusí být schopna souborový
systém vrátit do konzistentního stavu (v závislosti na rozsahu resp. povaze poškození).`,`Žurnál
Oproti klasickým metadatům souborového systému má žurnál jednoduchou strukturu – záznamy jsou na
disku uloženy sekvenčně (obvykle „do kruhu“ – nový záznam přepíše nejstarší, už neplatný, záznam). Tato
struktura je velmi robustní, jak vůči nahodilému přerušení, tak proti typickým vzorům přeuspořádání.
Záznamy v žurnálu jsou obvykle seskupeny do transakcí (podobných těm, které znáte z relačních databázových systémů),
které mohou sestávat z několika provázaných operací. Změny v metadatech se začnou na
pevné úložiště posílat až ve chvíli, kdy je transakce ukončena a je potvrzen zápis příslušných položek
v žurnálu. Transakce, která není ukončená, se při obnově přeskočí, čím je zabezpečeno, že se ve výsledku
provede buď celá, nebo vůbec.`,`Žurnál
Přerušená operace na datové struktuře může vést k nejednoznačnému stavu, kdy lze datovou strukturu
opravit více než jedním způsobem. Žurnál tento problém řeší tím, že existuje záznam o tom, jaká operace
probíhala a tedy je možné ji na základě této informace dokončit. Zároveň není potřeba kontrolovat resp.
opravovat konzistenci všech datových struktur (to může ve velkém souborovém systému trvat dlouhou
dobu), ale pouze těch (resp. těch jejich částí), kterých se dotýkají operace zanesené v žurnálu.`,`Funkcionální metadata
inou možností jak předejít nekonzistenci je uspořádat metadata tak, že
použité datové struktury nebudeme na místě upravovat vůbec. Podobně jako ve funkcionálním programování
můžeme místo úpravy existující struktury vytvořit její novou verzi. Přitom využijeme toho, že nezměněné
části můžeme z nové verze odkázat – nemusíme tedy kopírovat celou datovou strukturu.
Takovému přístupu musí být ale příslušná datová struktura uzpůsobena – vhodné jsou zejména stromové
struktury (v souborových systémech tedy především B-stromy), kde změna v libovolném uzlu znamená
vytvoření nové verze tohoto uzlu a jeho předků (v předcích totiž nemůžeme upravit ukazatel na potomka
– to by narušilo princip neměnnosti staré verze), přitom ve vyváženém stromě je takových nejvýše
logaritmický počet. Všechny ostatní uzly ale zůstávají nezměněné.
`,`Prázdné místo
Jsme tedy konečně vyzbrojeni datovými strukturami vhodnými pro použití v souborovém systému a můžeme se blíže podívat na jejich konkrétní využití.
Prvním úkolem bude organizace volných bloků, do kterých lze uložit nově příchozí data (např. proto, že
uživatel vytvořil nový soubor, přidal data do existujícího, ale třeba i proto, že vytvořil novou složku).
Vyhledání vhodného datového bloku je častá operace, musí být proto efektivní – jak samotné nalezení,
tak poznačení informace o tom, že vybraný blok (resp. bloky) již nejsou volné.
`,`Externí a datová fragmentace
Ukládání strukturovaných dat do nestrukturovaného pole bajtů
vyžaduje vždy určité kompromisy. Jedním z nich je efektivita využití kapacity – ukládání dat více natěsno
většinou vede k pomalejším operacím a složitějším metadatům.
V případě souborů se musíme vypořádat jednak se situací, kdy se postupným vytvářením a mazáním souborů
prázdné místo rozptýlí mezi alokované bloky. Při vytváření nových souborů to znamená pracnější hledání
volných bloků, protože je nutné potřebné místo „slepit“ z několika nesouvislých oblastí (fragmentů).
Tím se jednak zvětšují potřebná metadata (průměrná délka spojitého rozsahu klesá) a zároveň dochází
k roztroušení – fragmentaci – samotných dat, která jsou do takto alokovaného souboru uložena. Přístup
k takovým souborům je pak méně efektivní, protože s každým skokem z jedné spojité oblasti do jiné je
spojena prodleva (daná povahou blokových zařízení).
`,`Obyčejné soubory 
Tradiční reprezentace obyčejného souboru na disku odkazuje každý datový
blok samostatně, pomocí krátké tabulky uvnitř i-uzlu (u větších souborů rozšířené pomocnými tabulkami
v tzv. nepřímých blocích). Běžným zlepšením je místo odkazu na jeden blok odkazovat celý spojitý rozsah
datových bloků (angl. extent). Hlavní nevýhodou tohoto přístupu je, že vyhledání bloku podle adresy
bajtu (offsetu) je v takto organizovaných metadatech lineární vzhledem k délce takové tabulky.`,`Vnitřní fragmentace
Vnitřní fragmentace je způsobena zarovnáním – některé operace jsou
mnohem efektivnější, když každý soubor začíná na hranici bloku, a tedy je pro něj alokován bloků
celočíselný počet. Protože mají ale soubory libovolnou velikost, často je na konci souboru nějaké
nevyužité místo. Toto nevyužité místo představuje režii – neobsahuje žádná užitečná data. Jinými slovy
je na většiny souborů malý fragment paměti který nelze využít (protože je menší než nejmenší možná
velikost souboru – jeden blok).`,`Adresáře
Existují tři základní možnosti, jak v souborovém systému reprezentovat složky:
1. Klasické → hledání podle jména a odstranění položky jsou lineární operace, vkládání je naopak
konstantní – takový přístup funguje dobře pro malé složky, ale protože souborový systém nemůže
obecně předvídat, kolik položek bude mít daný adresář, tato organizace se spíše nepoužívá.
2. Hašované → položky jsou uloženy v hašovací tabulce a jsou tedy „pravděpodobně“ konstantní – přesné
chování záleží na hašovací funkci a výběru jmen. Iterace vrací položky ve zdánlivě náhodném pořadí.
3. Stromové → položky jsou uloženy jako B-strom, jména položek jsou klíče – všechny operace jsou
zaručeně logaritmické a iterace vrací položky seřazené podle jména.
`],incorrect:[` Bloková zařízení
Tento typ zařízení představuje abstrakci perzistentních úložišť. Operace (abstraktního) blokového
zařízení jsou přizpůsobené běžným schopnostem odpovídajících reálných zařízení:
• zápis a čtení je prováděno po bajtech,
• v libovolném pořadí, ale
• s velkou latencí a malou propustností (relativně k operační paměti).`,`Trvalé úložiště
je fyzické zařízení, které se podobá na operační paměť (pamatuje si data),
s několika klíčovými rozdíly:
1. data zde uložená přetrvávají „krátkodobě“, tedy zejména po vypnutí počítače jsou odstraněna,
2. přístup k datům je pomalejší – zejména má mnohem vyšší latenci (prodlevu) mezi vystavením požadavku
a odpovědí zařízení; je proto nepraktické adresovat takové zařízení po jednotlivých bajtech (jako
tomu je u operační paměti),
3. proto je obvyklé, že poskytují operace, které pracují s celými bloky dat najednou (velikost 512 bajtů
a víc, často 4 KiB) – základní operací je pak přesun takového bloku mezi zařízením a operační pamětí.`,`Latence
doba mezi požadavkem a odpovědí; příliš velká, než aby bylo lze ignorovat; rozdíl proti
operační paměti: nelze skrýt softwarově, musí řešit HW`,` Mezipaměť
Hlavní problém, který mezipaměť řeší, je opakovaný přístup ke stejným adresám daného
datového úložiště. Přístup k datům obvykle není rovnoměrný – některá data jsou potřebná často (např.
aktivně využívaná databáze), zatímco jiná (archiv dat z minulého roku) jen velmi zřídka. Proto je výhodné
si nedávno čtená data úkládat v procesoru: může se totiž lehce stát, že je bude potřeba přečíst
v blízké budoucnosti znovu.
Podobně má smysl některá data načíst do mezipaměti s předstihem (existuje-li volná přenosová kapacita;
této technice se angl. říká prefetch)`,`Vyrovnávací paměť
Existují dvě základní možnosti, jak vyrovnávací paměti realizovat:
1. oddělené od mezipaměti: vyrovnávací paměť obsahuje jak samotné požadavky, tak veškerá data s nimi
spojená; jsou-li některé dotčené bloky uložené v mezipaměti, tyto jsou buď zneplatněny, nebo (častěji)
upraveny na místě,
2. propojená s mezipamětí: vyrovnávací paměť obsahuje pouze počítadlo požadavků na zápis – samotné
datové bloky se ukládají vždy do operační paměti.`,` Plánování operací
U většiny úložišť platí, že sekvenční přístup (čtení po sobě následujících
adres) je mnohem rychlejší, než nahodilý přístup (postupné čtení adres, které spolu nijak nesouvisí).
Různé technologie navíc kladou další omezení na rychlost reakce – klasickým příkladem jsoupolovodičové paměti,
kde prodleva další operace závisí na vzdálenosti hlavy od místa, kde se potřebná data fyzicky nachází.
Naopak rotační disky jsou často složené z nezávislých celků, které mohou pracovat souběžně, ale
požadavky do stejné části paměti musí vyčkat na dokončení těch předchozích.
Bez ohledu na technologii ukládání dat ale platí, že operace s trvalým úložištěm vykazují vysokou míru
souběžnosti: do systému přichází mnoho nezávislých požadavků na diskové operace a existuje tedy jistá
volnost odpovídat na tyto požadavky v různém pořadí. Je to způsobeno zejména tím, že je často spuštěno
několik (souběžných) vláken a každé z nich provádí vstupně-výstupní operace nezávisle na ostatních.`,`Přeuspořádání operací má určitá úskalí, zejména v případech, kdy jsou prohozeny zápisy, které náleží
stejné aplikaci, nebo se jedná o operace související s údržbou metadat souborového systému. Vzniká tak
napětí mezi výkonem (více přeuspořádání → vyšší propustnost) a spolehlivostí (více přeuspořádání →
větší šance nekonzistence v případě výpadku).
Pokud jde o operace čtení, zde je prostor pro přeuspořádání obvykle větší, protože aplikace, která čtení
vyžádala, obvykle může pokračovat ve své činnosti i když nejsou data k dispozici.`,`Problémy virtualizace
Náš dosavadní přístup k virtualizaci bude v případě trvalých úložišť fungovat.
Vzpomeňte si, že v případě paměti a procesoru řešení spočívalo ve vytvoření
soukromých (virtuálních) instancí příslušného zařízení. Taková instance je pak vždy ve výlučném užívání
jednoho programu.
Trvalé úložiště slouží především k ukládání uživatelsky zajímavých dat. Je
tedy nežádoučí, aby mohl uživatel s těmito daty nějak interagovat, a zejména tedy musí být skryta
v soukromém prostoru jednoho programu.`,`Problémy virtualizace
dvě možnosti řešení:
1. můžeme zcela změnit přístup k virtualizaci: místo toho, abychom virtualizací vytvořili věrný obraz
skutečného zařízení, může operační systém poskytovat nějaký jiný druh abstrakce, a trvalé úložiště
nebude aplikacím vůbec přístupné,
2. vyčleníme nějakou aplikaci, která bude odpovědná za správu uživatelských dat v trvalém úložišti, a
ostatní aplikace budou své požadavky na interakci s těmito daty řešit skrze tuto speciální aplikaci.

Obě řešení jsou ve skutečnosti (s trochou nadsázky) vlastně totéž řešení. V obou případech je přímý
přístup k úložišti omezen na procesorové jádro, to rozhoduje o tom, jak budou data „fyzicky“ organizovaná a
jaké další operace lze nad daty provádět.`,`Metody virtualizace
1. souborový systém, nebo obecněji abstrakce na vyšší úrovni poskytovaná jako služba operačního systému,
která umožňuje řízený přístup k datům mnoha aplikacím současně, a zároveň umožňuje uživateli data
organizovat a spravovat,
2. virtualizace na aplikační úrovni, kdy je přímý přístup k úložišti řízen procesorem, který
spravuje data a ostatním částem OS poskytuje přístup pomocí vhodného mapování adres.`,`RAID
Zatímco standardním řešením problému s nízkou propustností a/nebo velkou prodlevou paměťových operací jsou vyrovnávací paměti,
standardním řešením problémů se spolehlivostí paměti je redundance.
Nejjednodušší formou redundance je pořízení kopie (zálohy) – v případě ztráty primárních dat obnovíme
data ze záložní kopie. S tím jsou spojeny dva problémy:
1. aby byla užitečná, musíme takovou kopii udržovat aktuální ale nemusí být konzistentní,
2. při poruše musíme vyměnit dotčené zařízení a data překopírovat ze zálohy, přitom obě operace mohou
být poměrně zdlouhavé.`,`Operace nad soubory
Základními operacemi pro práci se souborem je čtení (v POSIX-u voláním read) a zápis
(v POSIX-u write) souvislé posloupnosti bajtů (libovolné velikosti – abstrakce souboru skrývá blokový
charakter zařízení, na kterém je soubor uložen). Velikost souboru je ale pevně daná a to velikostí bitmapy.`,`soubory jsou obvykle perzistentní
– existují dlouhodobě, jsou závislé na běžících procesech, ale nezávisí na tom, je-li vůbec aktivní operační
systém (nebo samotný hardware). Abychom mohli s perzistentními soubory rozumně pracovat, musí být
navíc tyto opatřeny identitou.
Abychom mohli se souborem pracovat, ve většině systémů je nutné jej otevřít – v systémech POSIX
k tomu slouží volání open, kterého výsledkem je popisovač otevřeného souboru (angl. file descriptor)`,`Obyčejný soubor
je právě oním „motivačním případem“ – obyčejný soubor reprezentuje paměť, tzn.
jeho smyslem je uchovávat data (obyčejný soubor si tedy pamatuje posloupnost bajtů). Jaké konkrétní
bajty to jsou je irelevantní – souborový systém obsah obyčejných souborů nijak neinterpretuje.
Krom abstrakce (perzistentní – trvalé) paměti je obyčejný soubor také abstrakcí nad pevným úložištěm
v tom smyslu, že skrývá detaily přístupu k tomuto zařízení. Operace nad pevným úložištěm pracují po
jednotlivých blocích, přičemž bloky mají pevnou velikost a jejich počáteční adresa musí být dělitelná
touto velikostí – pro soubory platí stejná omezení. Zároveň je aplikace odstíněna od fyzického
umístění dat na pevném úložišti (funguje zde opět analogie s virtuálním adresním prostorem a překladem
virtuálních adres na fyzické). Analogie překladu adres je v tomto případě ale zcela v režii operačního
systému`,`Mapováni do paměti
Operace read a write jsou vždy efektivní, protože nemusí kopírovat
data mezi mezipamětí a pamětí, která náleží žádajícímu procesu.
Efektivita aplikací, které data
především čtou, může být výrazně zlepšena mapováním souborů do paměti za pomoci líného načítání.
V tomto režimu jsou externí stránky uloženy v jinak běžném souboru, ale místo komplikovaných vstupněvýstupních
operací může program s obsahem souboru pracovat stejně, jako by byl uložen v operační paměti.
Využijeme-li tohoto mechanismu také k zápisu změněných stránek zpátky do souboru, může program soubor
i zcela transparentně upravovat.`,`Souběžný přístup
Jmenný prostor souborového systému (blíže jej popíšeme v další sekci) je
sdílený mezi všemi procesy, může se tedy lehce stát, že více procesů bude pracovat s jedním souborem.
Tato situace je analogická tomu, že stejná oblast operační paměti může být namapovaná ve více virtuálních
adresních prostorech. Jde-li o souběžný přístup pouze pro čtení, nevznikají žádné významnější problémy.
Vstoupí-li ale do hry zápisy, jak čtení tak jiné zápisy mohou způsobovat problémy – zejména různé
instance hazardu souběhu.
Operační systémy neumožňují soubory zamykat proto musí být tento problém řešen jinak`,`Spustitelný soubor
Spustitelné soubory představují jak programy v klidu tak i ty spuštěné a obsahují veškeré
informace, které jsou potřeba k tomu, aby bylo možné v nich obsažený program probíhat. Hlavní část
spustitelného souboru je tvořena počátečním obrazem paměti, podle kterého se při spuštění programu
(v POSIX-u voláním exec v již existujícím procesu) inicializuje virtuální adresní prostor`,`Roura
Roury se podobají na obyčejné soubory v tom, že je možné do nich zapisovat a číst z nich
data (bajty). Ve většině případů data jeden program (proces) zapisuje a jiný je čte – na rozdíl od
obyčejného souboru nejsou tato data nikde trvale uložena – z roury zmizí po čase určeném speciálním registrem.
S rourou je samozřejmě svázán buffer, ale je uložen pouze v operační paměti. Díky tomu lze do roury data
zapisovat i ve chvíli, kdy je právě druhá strana nečte – operační systém zapsaná data dočasně uchová.
Za normálních okolností je roura anonymní a přístupná pouze skrze popisovače otevřených souborů.`,`Tvrdé odkazy
Jasným důsledkem výše popsané organizace složek je existence tzv. tvrdých odkazů
– situace, kdy několik adresářových položek (v jedné nebo několika složkách) odkazuje tutéž entitu
(i-uzel). Existuje jeden hlavní a poté libovolný počet jiných odkazu, ale z pohledu uživatele se pouze tentýž
soubor objevuje na různých místech adresářové struktury.
I-uzly si navíc udržují počítadlo odkazů – samotný soubor (i-uzel) je zničen pouze v případě, kdy toto
počítadlo dojde na nulu. To mimo jiné znamená, že odstraněním adresářové položky (angl. unlinking) může,
ale nemusí způsobit smazání souboru.`,`Měkké odkazy
Občas je užitečné odkazovat soubor nikoliv přímo, ale skrze nějakou cestu která
k němu vede. Toho lze dosáhnout tzv. měkkým odkazem: tento je (na rozdíl od tvrdého odkazu) skutečným
objektem v souborovém systému, který ale není reprezentován i-uzlem. Narazí-li při procházení
adresářové struktury (zejména při hledání souborů podle cesty) operační systém přečte cestu obsaženou
v tomto měkkém odkazu a ve vyhledávání pokračuje touto cestou.`,`Bitmapa 
V souborových systémech se využívá několik velmi jednoduchých datových struktur, které
jsou díky své jednoduchosti zároveň relativně robustní. Asi nejjednodušší strukturou tohoto typu je
bitmapa, která se používá k mapování využitých resp. volných bloků nebo řádků v tabulkách (přiblížíme
si za chvíli).
Bitmapa udržuje informaci o lineárním sledu bloků a informace o jednotlivém bloku se omezuje na jediný
bajt.`,`Tabulka
Bitmapa je sice jednoduchá a rychlá, neumí ale uchovat příliš mnoho zajímavých informací.
O něco málo složitější datovou strukturou je tabulka, která v podstatě odpovídá klasickému poli:
1. je to souvislá oblast fixně velkých struktur (řádků, položek), libovolné velikosti.
2. alokace položek se provede např. bitmapou (určuje které řádky jsou resp. nejsou použité, aby bylo
v případě potřeby možné rychle najít řádek, do kterého můžeme zapsat novou položku),
3. chceme-li se do takové tabulky odkázat (např. proto, že se jedná o tabulku záznamů o souborech),
stačí nám znát číslo řádku (index).`,`Konzistence
Důležitým problémem souborového systému je udržení konzistence metadat (jak
různých typů nebo složek metadat mezi sebou, tak se samotnými daty). K porušení konzistence nemůže dojít.`,`Existují dva hlavní důvody, proč by mohlo dojít  k porušení konzistence u datových struktur:
1. přerušením kritické operace, která provádí více souvisejících změn, např. výpadkem napájení, nebo
kritickou chybou („pádem“) celého systému,
2. i v případě, kdy je souborový systém vůči takovému přerušení robustní, tato jeho vlastnost může být
narušena přeuspořádáním zápisů (plánovačem nebo samotným zařízením).
Existuje několik metod, jak se s problémem vypořádat. Jednou je detekce problému (např. příznakem,
který se zapíše při korektním ukončení operačního systému) a následná křížová kontrola všech metadat
v situaci, kdy mohlo k poškození teoreticky dojít. Tato kontrola je vždy schopna souborový
systém vrátit do konzistentního stavu.`,`Žurnál
Oproti klasickým metadatům souborového systému má žurnál jednoduchou strukturu – záznamy jsou na
disku uloženy sekvenčně (obvykle „do kruhu“ – nový záznam přepíše nejstarší, už neplatný, záznam). Tato
struktura je velmi robustní, jak vůči nahodilému přerušení, tak proti typickým vzorům přeuspořádání.
Záznamy v žurnálu jsou obvykle seskupeny do transakcí (podobných těm, které znáte z relačních databázových systémů),
které mohou sestávat z několika provázaných operací. Změny v metadatech se začnou na
pevné úložiště posílat hned jak je transakce zahájena. Transakce, která není ukončená,
se při obnově přeskočí, čím je zabezpečeno, že se ve výsledku provede buď celá, nebo vůbec.`,`Žurnál
Přerušená operace na datové struktuře může vést k nejednoznačnému stavu, kdy lze datovou strukturu
opravit více než jedním způsobem. Žurnál tento problém řeší tím, že existuje záznam o tom, jaká operace
probíhala a tedy je možné ji na základě této informace dokončit. Je ale nutné kontrolovat resp.
opravovat konzistenci všech datových struktur (to může ve velkém souborovém systému trvat dlouhou
dobu), toto není nutné pouze u těch (resp. těch jejich částí), kterých se dotýkají operace zanesené v žurnálu.`,`Funkcionální metadata
inou možností jak předejít nekonzistenci je uspořádat metadata tak, že
použité datové struktury nebudeme na místě upravovat vůbec. Podobně jako ve funkcionálním programování
můžeme místo úpravy existující struktury vytvořit její novou verzi. Přitom využijeme toho, že nezměněné
části můžeme z nové verze odkázat – nemusíme tedy kopírovat celou datovou strukturu.
Takovému přístupu musí být ale příslušná datová struktura uzpůsobena – vhodné jsou zejména tabulky nikoliv stromové struktury, kde změna v libovolném uzlu znamená
vytvoření nové verze tohoto uzlu a jeho předků.
`,`Prázdné místo
Jsme tedy konečně vyzbrojeni datovými strukturami vhodnými pro použití v souborovém systému a můžeme se blíže podívat na jejich konkrétní využití.
Prvním úkolem bude organizace volných bloků, do kterých lze uložit nově příchozí data (např. proto, že
uživatel vytvořil nový soubor, přidal data do existujícího, ale třeba i proto, že vytvořil novou složku).
Vyhledání vhodného datového bloku je častá operace, musí být proto efektivní platí hlavně pro nalezení takového bloku.
Poznačení informace o tom, že vybraný blok (resp. bloky) již nejsou volné nejsou prováděny často, tedy efektivní být nemusí.
`,`Externí a datová fragmentace
Ukládání strukturovaných dat do nestrukturovaného pole bajtů
vyžaduje vždy určité kompromisy. Jedním z nich je efektivita využití kapacity – ukládání dat více natěsno
většinou vede k pomalejším operacím a složitějším metadatům.
V případě souborů se musíme vypořádat jednak se situací, kdy se postupným vytvářením a mazáním souborů
prázdné místo rozptýlí mezi alokované bloky. Při vytváření nových souborů to znamená pracnější hledání
volných bloků, protože je nutné potřebné místo „slepit“ z několika nesouvislých oblastí (fragmentů).
Tím se jednak zvětšují potřebná metadata (průměrná délka spojitého rozsahu klesá) a zároveň dochází
k roztroušení – fragmentaci – samotných dat, která jsou do takto alokovaného souboru uložena. Přístup
k takovým souborům je asymptoticky stejně efektivní, protože takovýto přístup je realizovaný přes tvrdé odkazy.
`,`Obyčejné soubory 
Tradiční reprezentace obyčejného souboru na disku odkazuje každý datový
blok samostatně, pomocí krátké tabulky uvnitř i-uzlu (u větších souborů rozšířené pomocnými tabulkami
v tzv. nepřímých blocích). Běžným zlepšením je místo odkazu na jeden blok odkazovat celý spojitý rozsah
datových bloků (angl. extent). Tímto zajistíme že vyhledání bloku podle adresy
bajtu (offsetu) je v takto organizovaných metadatech konstantí.`,`Vnitřní fragmentace
Vnitřní fragmentace je způsobena zarovnáním – některé operace jsou
mnohem efektivnější, když každý soubor začíná na hranici bloku, a tedy je pro něj alokován bloků
celočíselný počet. Protože mají ale soubory libovolnou velikost, často je na konci souboru nějaké
nevyužité místo. Toto nevyužité místo lze spojit pomocí vnější fragmentace v blok, který již využitelný bude.`,`Adresáře
Existují tři základní možnosti, jak v souborovém systému reprezentovat složky:
1. Klasické → hledání podle jména a odstranění položky jsou lineární operace, vkládání je naopak
konstantní – takový přístup funguje dobře pro malé složky, a proto je i nejčastěji používaný.
2. Hašované → položky jsou uloženy v hašovací tabulce a jsou tedy „pravděpodobně“ konstantní – přesné
chování záleží na hašovací funkci a výběru jmen. Iterace vrací položky ve zdánlivě náhodném pořadí.
3. Stromové → položky jsou uloženy jako B-strom, jména položek jsou klíče – všechny operace jsou
zaručeně logaritmické, ale nelze je vracet jako seřazené.
`]},{section:4,name:"Virtualizate periférií",correct:[`Periferie
Zařízení, které produkuje a konzumuje data, případně události. Komunikace
v malém objemu se obvykle realizuje mapováním registrů zařízení na fyzické adresy. Pozor, je zde
důležitý rozdíl proti operační paměti: hodnoty se „samovolně“ (bez účasti hlavního procesoru, a tedy i
operačního systému) mění v čase – takovou změnu lze považovat za událost.`,`Programovaný vstup/výstup (PIO)
Nejjednodušší metodou komunikace se zařízením je přenos dat
postupným čtením z paměti (registrů) zařízení (již zmiňovaným mapováním paměti zařízení na fyzické
adresy procesoru). Je-li tato činnost prováděna hlavním procesorem, mluvíme o tzv. „programovaném“
vstupu resp. výstupu (angl. programmed IO, PIO).
Tento způsob komunikace tedy vyžaduje aktivní účast procesoru v stanovených časových intervalech
(podle přenosové rychlosti, velikosti vyrovnávací paměti, atp.). Tato metoda je použitelná pro občasné
přenosy a/nebo přenosy s velmi malou šířkou pásma (počtem bajtů přenesených za sekundu). Při větších
objemech dat vede tento způsob komunikace k příliš vysoké režii.`,` Přímý přístup do paměti (DMA)
Zdaleka nejčastějším cílem přenosu dat z periferie je jejich uložení do operační paměti – další
zpracování zpravidla musí vyčkat do doby, než je v operační paměti nějaký kompletní celek (blok, rámec,
atp.).
Asynchronní přenos dat (bez účasti procesoru, resp. bez účasti softwaru) může být realizován dvěma
základními metodami:
1. dedikovaným pomocným procesorem, který od hlavního procesoru přijímá pokyny na provedení přenosu
(z jaké periferie, na jakou adresu v operační paměti, kolik bajtů, případně opačně, z jaké adresy
v operační paměti a jaké periferii), a který je de-facto součástí sběrnice,
2. přenos je řízen přímo periferií (na základě podobného pokynu od hlavního procesoru).
Výhodou první metody je, že periferie nemusí nijak rozlišovat DMA a PIO režimy přenosu dat a může být
tedy jednodušší. Druhá metoda je obvykle efektivnější a v moderních systémech mnohem běžnější.
`,` Je důležité rozlišovat přímý přístup do paměti (komunikuje periferie a operační paměť, bez účasti
procesoru) a mapování paměti zařízení do fyzického adresního prostoru (komunikuje procesor s periferií,
bez účasti operační paměti).`,`IO-MMU
Přestože pro zařízení, které přenáší velké objemy dat (pevná úložiště, síťová rozhraní,
atp.), je DMA nepostradatelné, jsou s ním spojeny určitá bezpečnostní rizika. V klasické implementaci
DMA má totiž každá periferie neomezený přístup do fyzické paměti – operační systém sice dává periferii
pokyn, které fyzické adresy má použít, ale nemá jak vynutit, aby periferie takový pokyn dodržela.
V takovém systému tedy periferiím tedy nic tedy nebrání v tom libovolně upravovat obsah paměti –
například i přepsat kód jádra a získat tak plnou kontrolu nad systémem. Toto se týká nejen případných
podvratných periferií, ale i ovladačů, které mohou jinak nevinnou periferii naprogramovat tak, aby
narušila bezpečnost systému.
Toto je jistě nežádoucí, zejména chceme-li izolovat ovladače od zbytku jádra, nebo v případech, kdy
samotná periferie není nutně důvěryhodná. IO-MMU je zařízení, které tento problém řeší, a to tím, že
realizuje překlad adres pro periferie (podobně jako MMU realizuje překlad adres pro software). IO-MMU
je programovatelná operačním systémem (a pouze operačním systémem) a umožňuje tedy izolovat periferie
jak vzájemně, tak od operačního systému a softwaru obecně. Je-li IO-MMU správně naprogramovaná, je
DMA bezpečné.`,`Sběrnice 
Má dvě základní vrstvy:
1. fyzickou, která odpovídá za signalizaci a časování a
2. logickou (protokolovou), která popisuje chování zařízení na sběrnici na vyšší úrovni – adresaci,
konfiguraci zařízení, přenosy dat atp.
Sběrnic existuje v počítači celá řada a jsou vzájemně propojené. Ta strana sběrnice, která je blíže
hlavnímu procesoru, se obvykle nazývá hostitelská.`,`Sběrnice
Hlavním úkolem sběrnice je přenos dat (a s tím související adresace) a signalizace událostí, vedlejším
pak konfigurace a enumerace připojených periferií. Má-li řadič sběrnice přidělen rozsah fyzických adres,
je také jeho úkolem tento dále rozdělit mezi připojené periferie (včetně podružných řadičů dalších
sběrnic).`,`Ovladač
Jakmile je známý konkrétní typ zařízení, komunikaci s ním převezme ovladač – program,
který poskytuje softwarovou abstrakci dané třídy zařízení zbytku operačního systému (a nepřímo i
aplikacím).
Na jedné straně komunikuje ovladač se zbytkem operačního systému (pomocí vhodného rozhraní, které je
ale obvykle specifické pro daný operační systém), na straně druhé komunikuje s konkrétním fyzickým
zařízením (které je zase často specifické pro daný model, nebo alespoň modelovou řadu).
Připomínáme zde, že komunikace probíhá čtením a zápisem dat, a zpracování takových dat není nic jiného
než výpočet`,`Ovladač
Hlavním úkolem ovladače je:
1. zpracování příchozích dat do formy, která je přijatelná pro zbytek systému (tzn. do formy nezávislé
na konkrétním modelu zařízení),
2. převod dat příchozích ze systému (které jsou ve formě nezávislé na konkrétním zařízení) do formy,
kterou umí daná periferie zpracovat,
3. to vše v reakci na události – buď požadavky ze systému na periferii, nebo naopak.
Data v tomto případě nemusí být pouze užitná data (bloky uložené na disku, rámce přijímané nebo odesílané
síťovým rozhraním, atp.), ale také řídící data, která ovlivňují jak se bude zařízení chovat, nebo přímo
aktivují další funkce zařízení (jiné, než je samotný přenos užitných dat).`,`Tiskárny
1. virtualizace – jak tiskárnu sdílet mezi programy – tento problém je analogický k problému plánováni
úloh v dávkových systémech, a má i analogické řešení: frontu úloh ke zpracování,
2. abstrakce – jak zahladit rozdíly mezi jednotlivými tiskárnami tak, aby byly z pohledu programu podle
možnosti záměnné.
Řešení druhého bodu je trochu složitější, a některé aspekty tiskáren nelze úplně v aplikacích ignorovat
(černobílý vs barevný tisk, jednostranný vs oboustranný, atp.). Částečným řešením je použití společného
formátu pro popis dokumentů k tisku, přičemž operační systém již zařídí konverzi do formátu, který
tiskárna akceptuje. Starším standardem tohoto typu je PostScript, novějším PDF. Některé tiskárny
podporují tisk dokumentů v těchto formátech přímo, bez potřeby dalšího zpracování v operačním systému.
Z pohledu aplikace může mít tedy virtuální tiskárna jako svou hlavní operaci vložení dokumentu ve formátu
PDF do tiskové fronty`,`Síťové vrstvy
1. fyzická – záležitost hardwaru, má ale dopad na vyšší vrstvy,
2. linková – tvoří faktické rozhraní mezi hardwarem a softwarem (operačním systémem),
3. síťová – na koncových stanicích řeší převážně software (operační systém), jejím úkolem je zabezpečit
komunikaci mezi koncovými uzly (resp. mezi operačními systémy na nich provozovanými),
4. transportní doručuje data mezi aplikacemi: tvoří rozhraní mezi operačním systémem a aplikací, a je
tak přirozeným místem pro virtualizaci,
5. a vyšší: záležitost aplikací, staví na virtualizaci poskytované 4. vrstvou.`,`Odchozí fronta
Potřebuje-li operační systém odeslat paket (rámec) do sítě, přidá je na konec
tzv. odchozí fronty (angl. transmit queue, Tx queue). Z této fronty je vyzvedne hardware a jakmile je
to možné, provede fyzický přenos. Odchozí fronta funguje přibližně takto:
1. každá odchozí fronta (může jich existovat několik) má přiřazenu dvojici registrů mapovaných do
fyzického adresního prostoru: jeden reprezentuje hlavový ukazatel a ten druhý koncový (angl. head a
tail),
2. tyto ukazatele popisují kruhovou frontu pevné velikosti, uloženu v operační paměti, ke které síťové
rozhraní přistupuje za pomoci DMA; každá položka (buňka) této kruhové fronty reprezentuje jeden
rámec,
3. ukazatele dělí frontu na dvě části – jedna patří rozhraní a jedna operačnímu systému,
4. operační systém (resp. ovladač síťového rozhraní) upravuje koncový ukazatel:
a. pro odeslání rámce pro něj operační systém nejprve vyhradí paměť a uloží do ni obsah rámce (data),
b. zapíše příslušnou adresu a velikost do své části kruhové fronty,
c. posune koncový ukazatel, čím předá odpovědnost za nově vyplněné buňky síťovému rozhraní,
5. síťové rozhraní ovládá hlavový ukazatel: kdykoliv zpracuje odchozí rámec, posune hlavový ukazatel
tak, že paměť asociovaná s odeslaným rámcem se přesune do části fronty, která patří operačnímu
systému.
Události, které se zpracováním kruhové fronty souvisí, signalizuje síťové rozhraní pomocí přerušení`,`Příjmová fronta
Síťové rozhraní popřidání prvků tuto změnu signalizuje přerušením. Alokace paměti pro rámce je v kompetenci operačního
systému – přesune-li operační systém nějakou položku (buňku) do části kruhové fronty, která náleží
síťovému rozhraní, dává tím najevo, že paměť touto položkou odkázaná může být přepsána novými daty.
Jakmile tak síťové rozhraní učiní, příslušnou buňku příjmové fronty přesune do části patřící operačnímu
systému.
Je obvyklé, že každý blok paměti, který operační systém rozhraní předá, má velikost největšího možného
rámce (MTU z angl. maximal transfer unit, obvykle 1500 bajtů), i když některá rozhraní umí příchozí
rámce rozdělit do více buněk, je-li to potřeba.`],incorrect:[`Periferie
Zařízení, které produkuje a konzumuje data, případně události. Komunikace
v malém objemu se obvykle realizuje mapováním registrů zařízení na fyzické adresy. Pozor, je zde
důležitý rozdíl proti operační paměti: hodnoty se s vzájemnou účastí procesoru a
operačního systém mění v čase – takovou změnu lze považovat za událost.`,`Programovaný vstup/výstup (PIO)
Nejjednodušší metodou komunikace se zařízením je přenos dat
postupným čtením z paměti (registrů) zařízení (již zmiňovaným mapováním paměti zařízení na fyzické
adresy procesoru). Je-li tato činnost prováděna hlavním procesorem, mluvíme o tzv. „programovaném“
vstupu resp. výstupu (angl. programmed IO, PIO).
Tento způsob komunikace tedy nevyžaduje aktivní účast procesoru. Tato metoda je použitelná pro občasné
přenosy a/nebo přenosy s velmi malou šířkou pásma (počtem bajtů přenesených za sekundu). Při větších
objemech dat vede tento způsob komunikace k příliš vysoké režii.`,` Přímý přístup do paměti (DMA)
Zdaleka nejčastějším cílem přenosu dat z periferie je jejich uložení do operační paměti – další
zpracování zpravidla musí vyčkat do doby, než je v operační paměti nějaký kompletní celek (blok, rámec,
atp.).
Asynchronní přenos dat (bez účasti procesoru, resp. bez účasti softwaru) může být realizován dvěma
základními metodami:
1.  přenos je řízen přímo periferií (na základě podobného pokynu od hlavního procesoru).
2. dedikovaným pomocným procesorem, který od hlavního procesoru přijímá pokyny na provedení přenosu
(z jaké periferie, na jakou adresu v operační paměti, kolik bajtů, případně opačně, z jaké adresy
v operační paměti a jaké periferii), a který je de-facto součástí sběrnice
Výhodou první metody je, že periferie nemusí nijak rozlišovat DMA a PIO režimy přenosu dat a může být
tedy jednodušší. Druhá metoda je obvykle efektivnější a v moderních systémech mnohem běžnější.
`,` Je důležité rozlišovat přímý přístup do paměti (komunikuje periferie a operační paměť, bez účasti
procesoru) a mapování paměti zařízení do fyzického adresního prostoru (komunikuje procesor s periferií za pomocí operační paměti).`,`IO-MMU
Přestože pro zařízení, které přenáší velké objemy dat (pevná úložiště, síťová rozhraní,
atp.), je DMA nepostradatelné, jsou s ním spojeny určitá bezpečnostní rizika. V klasické implementaci
DMA má totiž každá periferie neomezený přístup do fyzické paměti – operační systém sice dává periferii
pokyn, které fyzické adresy má použít, ale nemá jak vynutit, aby periferie takový pokyn dodržela.
V takovém systému tedy periferiím tedy nic tedy nebrání v tom libovolně upravovat obsah paměti –
například i přepsat kód jádra a získat tak plnou kontrolu nad systémem. Toto se týká nejen případných
podvratných periferií, ale i ovladačů, které mohou jinak nevinnou periferii naprogramovat tak, aby
narušila bezpečnost systému.
Toto je jistě nežádoucí, zejména chceme-li izolovat ovladače od zbytku jádra, nebo v případech, kdy
samotná periferie není nutně důvěryhodná. IO-MMU je zařízení, které tento problém řeší, a to tím, že
realizuje překlad adres pro periferie (podobně jako MMU realizuje překlad adres pro software). IO-MMU
není programovatelná za normálních podmínek, pouze při konstrukci zařízení`,`Sběrnice 
Má dvě základní vrstvy:
1. fyzickou, která odpovídá za enumeraci
2. logickou (protokolovou), která popisuje chování zařízení na sběrnici na vyšší úrovni – adresaci,
konfiguraci zařízení, přenosy dat atp.
Sběrnic existuje v počítači celá řada a jsou vzájemně propojené. Ta strana sběrnice, která je blíže
hlavnímu procesoru, se obvykle nazývá hostitelská.`,`Sběrnice
Hlavním úkolem sběrnice je přenos dat (a s tím související adresace) a signalizace událostí, vedlejším
pak konfigurace a enumerace připojených periferií. Má-li řadič sběrnice přidělen rozsah fyzických adres,
je také jeho úkolem tuto informaci sdělit procesoru.`,`Ovladač
Jakmile je známý konkrétní typ zařízení, komunikaci s ním převezme ovladač – program,
který převezme kontrolu nad jádrem a následně spustí komunikaci s operačním systémem
Na jedné straně komunikuje ovladač se zbytkem operačního systému (pomocí vhodného rozhraní, které je
ale obvykle specifické pro daný operační systém), na straně druhé komunikuje s konkrétním fyzickým
zařízením (které je zase často specifické pro daný model, nebo alespoň modelovou řadu).
Připomínáme zde, že komunikace probíhá čtením a zápisem dat, a zpracování takových dat není nic jiného
než výpočet`,`Ovladač
Hlavním úkolem ovladače je:
1. zpracování příchozích dat do formy, kterou může předat sběrnici a ta data přeložit.
kterou umí daná periferie zpracovat.
2. převod dat příchozích ze systému (které jsou ve formě nezávislé na konkrétním zařízení) do formy,
kterou umí daná periferie zpracovat,
3. to vše v reakci na události – buď požadavky ze systému na periferii, nebo naopak.
Data v tomto případě nemusí být pouze užitná data (bloky uložené na disku, rámce přijímané nebo odesílané
síťovým rozhraním, atp.), ale také řídící data, která ovlivňují jak se bude zařízení chovat, nebo přímo
aktivují další funkce zařízení (jiné, než je samotný přenos užitných dat).`,`Tiskárny
1. virtualizace – jak tiskárnu sdílet mezi programy – tento problém je analogický k problému plánováni
úloh v dávkových systémech, a má i analogické řešení: frontu úloh ke zpracování,
2. abstrakce – jak zahladit rozdíly mezi jednotlivými tiskárnami tak, aby byly z pohledu programu podle
možnosti záměnné.
Řešení druhého bodu je trochu složitější, a některé aspekty tiskáren nelze úplně v aplikacích ignorovat
(černobílý vs barevný tisk, jednostranný vs oboustranný, atp.). Částečným řešením je použití společného
formátu pro popis dokumentů k tisku, přičemž operační systém již zařídí konverzi do formátu, který
tiskárna akceptuje. Starším standardem tohoto typu je PostScript, novějším NewScript. Některé tiskárny
podporují tisk dokumentů v těchto formátech přímo, bez potřeby dalšího zpracování v operačním systému.
Z pohledu aplikace může mít tedy virtuální tiskárna jako svou hlavní operaci vložení dokumentu ve formátu
NewScript do tiskové fronty`,`Síťové vrstvy
1. fyzická – záležitost hardwaru, má ale dopad na vyšší vrstvy
2. síťová – na koncových stanicích řeší převážně software (operační systém), jejím úkolem je zabezpečit
komunikaci mezi koncovými uzly (resp. mezi operačními systémy na nich provozovanými)
3. , linková – tvoří faktické rozhraní mezi hardwarem a softwarem (operačním systémem)
4. transportní doručuje data mezi aplikacemi: tvoří rozhraní mezi operačním systémem a aplikací, a je
tak přirozeným místem pro virtualizaci
5. a vyšší: záležitost aplikací, staví na virtualizaci poskytované 4. vrstvou.`,`Odchozí fronta
Potřebuje-li operační systém odeslat paket (rámec) do sítě, přidá je na konec
tzv. odchozí fronty (angl. transmit queue, Tx queue). Z této fronty je vyzvedne hardware a jakmile je
to možné, provede fyzický přenos. Odchozí fronta funguje přibližně takto:
1. každá odchozí fronta (může jich existovat několik) má přiřazenu dvojici registrů mapovaných do
fyzického adresního prostoru: jeden reprezentuje hlavový ukazatel a ten druhý koncový (angl. head a
tail),
2. tyto ukazatele popisují kruhovou frontu dynamické velikosti, uloženu v operační paměti, ke které síťové
rozhraní přistupuje za pomoci DMA; každá položka (buňka) této kruhové fronty reprezentuje jeden
rámec,
3. ukazatele dělí frontu na dvě části – jedna patří rozhraní a jedna operačnímu systému,
4. operační systém (resp. ovladač síťového rozhraní) upravuje koncový ukazatel:
a. pro odeslání rámce pro něj operační systém nejprve vyhradí paměť a uloží do ni obsah rámce (data),
b. zapíše příslušnou adresu a velikost do své části kruhové fronty,
c. posune koncový ukazatel, čím předá odpovědnost za nově vyplněné buňky síťovému rozhraní,
5. síťové rozhraní ovládá hlavový ukazatel: kdykoliv zpracuje odchozí rámec, posune hlavový ukazatel
tak, že paměť asociovaná s odeslaným rámcem se přesune do části fronty, která patří rozhraní
Události, které se zpracováním kruhové fronty souvisí, signalizuje síťové rozhraní pomocí přerušení`,`Příjmová fronta
Síťové rozhraní po přidání prvků tuto změnu signalizuje přerušením. Alokace paměti pro rámce je v kompetenci operačního
systému – přesune-li operační systém nějakou položku (buňku) do části kruhové fronty, která náleží
síťovému rozhraní, dává tím najevo, že paměť touto položkou odkázaná může být přepsána novými daty.
Jakmile tak síťové rozhraní učiní, příslušnou buňku příjmové fronty přesune do části patřící operačnímu
systému.
Je obvyklé, že každý blok paměti, který operační systém rozhraní předá, má velikost 2 na n (kde n je velikost registrů procesoru).`]},{section:5,name:"Souběžnost a synchronizace",correct:[`Relace předcházení
Událost je jev, který nastane v čase (ne nutně pevně určeném nebo známém), který můžeme
pozorovat, a o kterém můžeme říct, že nastal před nebo po nějaké jiné události, případně že s ní
nastal souběžně. Relaci uspořádání, která tuto chronologii popisuje, budeme říkat předcházení (anglicky
„happens before“).
Takto definovaná relace určuje vztah „muselo se stát před“ neboli kauzální návaznost. Grafem předcházení
nazveme tranzitivní redukci této relace. Protože grafem uspořádání je acyklický orientovaný graf (angl.
DAG = directed acyclic graph), jeho tranzitivní redukce je určena jednoznačně (znáte nejspíš jako
Hasseův diagram).`,`Relace předcházení
Vrcholy grafu předcházení jsou události (něco se stalo), jeho hrany budeme nazývat akce (něco se děje).
Akce tedy vedou od jedné události k nějaké další, ale nemohou je „přeskakovat“ (formálněji: existuje-li
mezi událostmi A a B cesta délky alespoň 2, neexistuje hrana/akce která vede z A do B přímo).`,`Časový sled
 Je-li nějaká relace předcházení lineární, mluvíme o časovém sledu.
Připomenutí: Časovým sledem událostí rozumíme lineární uspořádání událostí, tedy takové, že pro každou
dvojici A, B událostí platí buď:
• A předchází B nebo
• B předchází A.
Časový sled si můžeme představit i jako přiřazení časového razítka každé události takové, že žádné dvě
události nenastanou ve stejné chvíli.`,`Hazard souběhu
Předcházení je abstrakce, která skrývá vnitřní detaily procesů (dějů odehrávajících se v
čase), které se mohou stát v různém pořadí díky náhodným vlivům, a snažíme se jejich vnější chování
popsat pomocí této relace. Vnější chování nějakého systému závisí pouze na jeho relaci předcházení,
nikoliv už na tom, jak přesně budou v čase rozloženy konkrétní události.
Je-li takto zavedená abstrakce porušena, mluvíme o hazardu souběhu. Jinými slovy, hazard souběhu nastává
kdykoliv vedou dva různé časové sledy, které jsou oba konzistentní s relací předcházení pro daný systém,
k různému vnějšímu chování.`,`Hybatel
Akce (které reprezentujeme hranami v grafu předcházení) jsou prováděny vždy nějakým
hybatelem (v našem kontextu obvykle vláknem nebo periferií). Hrany (akce) tedy můžeme tomuto hybateli
přisoudit (např. můžeme říct, že vlákno T má modré hrany a periferie P má žluté hrany). Zároveň hybatele
můžeme považovat za „peška“ který se v grafu předcházení pohybuje po hranách své vlastní barvy.`,`Synchronizace
Akce jsou souběžné právě tehdy, když jsou souběžné libovolné dvě události, kterých
se tyto akce týkají. Událost zejména nemůže být souběžná sama se sebou, a nemohou být souběžné ani
události spojené nějakou akcí.`,`Stavový prostor je orientovaný graf kde vrcholy jsou stavy a hrany jsou akce (ve stejném smyslu jako
v grafu předcházení). Pojem „stav“ je v tomto kontextu velmi abstraktní, nicméně můžeme si bez velké
újmy nadále představovat stav jako:
• hodnoty procesorových registrů,
• buněk paměti (jak operační, tak paměti a registrů periferií).`,`Běh
Orientovanou cestu ve stavovém prostoru označíme za běh. Je zde jasná korespondence mezi
během (posloupnost stavů propojených akcemi) a časovým sledem (posloupnost událostí propojených
akcemi). Sekvenci akcí můžeme chápat i jako běh i jako sled – v obou případech stačí určit počáteční
stav (událost) a zbytek běhu (sledu) je již určen akcemi jednoznačně.`,`Kritická sekce Uvažme běh R ≡ (r1, r2, ..., rn) nějakého vlákna (nebo jiného hybatele) T1asouběžný běh S ≡ (s1, ..., sn).
Říkáme, že R je kritickou sekcí vůči S, vede-li (r1, ..., S, ..., rn) k události „chyba“, a to přesto, že samotné běhy R ani S k chybě nevedou.
Proto se tomuto typu problému také říká chyba atomicity.`,`Čtenáři a písaři
Představme si situaci, kdy máme běhy R1, R2, … Rn a běhy W1, W2, …, Wm,
pro které platí:
1. ∀.i, j platí Ri není kritickou sekcí vůči Rj
2. ∀.i, j platí Ri je kritickou sekcí vůči Wj,
3. ∀.i, j platí Wi je kritickou sekcí vůči Wj
Takovou situaci nazýváme „čtenáři a písaři“ – máme tedy n čtenářů Ri a m písařů Wi.
Čtenáři si vzájemně nepřekáží – mohou číst zároveň v libovolném pořadí. 
Písaři se chovají jinak: sdílená data nejen čtou, ale i modifikují – proto čtenář,
který by byl přerušen písařem, by mohl přečíst nekonzistentní data.
Podobně si překáží dva různí písaři – protože data jak čtou tak modifikují, může být výsledek opět nekonzistentní.`,`Souběžná datová závislost 
je vztah mezi akcemi, který je nejlépe vidět ve stavovém prostoru:
je-li vstupem nějaké akce Z paměťová buňka nebo registr, do které naposled zapisovala akce X, říkáme,
že Z má datovou závislost na X.
Uvažme zároveň situaci, kdy máme dva běhy, A ≡ (a1, ..., X, ...an), B ≡ (b1, ..., Z, ..., bm), které jsou
zcela souběžné. To se v programu může lehce stát, a často je těžké takovou chybu odhalit, zejména je-li
výpočet (a1, ..., X) krátký, zatímco (b1, ..., Z) dlouhý (časově náročný)`,`Producenti a konzumenti
Uvažme situaci, kdy účelem několika vláken je vytvářet mezivýsledky
určené k dalšímu zpracování (tato vlákna – producenty – označíme P1...Pn), a několik dalších vláken
tyto mezivýsledky dále zpracovává (tato nazveme konzumenty a označíme K1...Km).
Všechna vlákna Pi jsou souběžná jak vzájemně tak s vlákny Ki.
Tato souběžnost je důležitá a užitečná:
umožňuje nám práci distribuovat na různá procesorová jádra a tím celý proces značně urychlit. Protože
jsou ale všechna vlákna souběžná, můžou lehce nastat dvě problémové situace:
1. producenti mohou generovat výsledky rychleji, než je konzumenti dokáží zpracovávat – mezivýsledky
se budou hromadit a postupně zaberou veškerou vyhrazenou paměť, nebo se začnou ztrácet (protože je
producenti začnou přepisovat dříve, než jsou zpracovány),
2. konzumenti mohou zpracovávat výsledky rychleji, než je producenti dokáží vytvářet – bez synchronizace
by taková situace vedla k opakovanému zpracování stejného mezivýsledku, případně k pokusu o zpracování
nějaké nesmyslné informace (je-li mezivýsledek očekáván na adrese, kam ještě nebyl producentem
zapsán).

V těchto dvou situacích se tedy musí konzumenti a producenti synchronizovat – je-li mezivýsledků
nedostatek, upřednostníme práci producentů, naopak je-li jich přebytek, upřednostníme práci konzumentů.
V ideálním případě tak, aby existovala nějaká pevná mez na počet nezpracovaných mezivýsledků (a tedy i
na množství paměti potřebné pro jejich uložení).`,`Rozvětvení a setkán
Akce, které nejsou souběžné, nelze provádět paralelně. Máme-li tedy více výpočetních jader, než máme
vláken, nevyužíváme hardwarové zdroje efektivně. Relativně častým jevem je, že výpočet má dva (nebo
několik) bloků, které lze provést v libovolném pořadí, aniž by se změnil výsledek. V takovém případě
bychom chtěli výpočet rozvětvit tak, aby byl každý takový blok (běh) souběžný s těmi ostatními. Máme-li
procesorů málo, vykonají se v libovolném pořadí (to nám nevadí), ale máme-ji jich dostatek (nebo
přebytek), mohou se tyto běhy provést najednou (každý na jiném procesoru).
Tím ale vzniká nový problém – výpočet nemůže pokračovat, než skončí všechny takto vyčleněné bloky
– jinak bychom se dostali do situace „výpočetní závislost“ (a tím do známého terénu „příliš mnoho
souběžnosti“). Proto je potřeba, aby se běhy i setkaly.`],incorrect:[`Relace předcházení
Událost je jev, který nastane v čase (ne nutně pevně určeném nebo známém), který můžeme
pozorovat, a o kterém můžeme říct, že nastal před nebo po nějaké jiné události, případně že s ní
nastal souběžně. Relaci uspořádání, která tuto chronologii popisuje, budeme říkat předcházení (anglicky
„happens before“).
Takto definovaná relace určuje vztah „muselo se stát před“ neboli kauzální návaznost. Grafem předcházení
nazveme tranzitivní redukci této relace. Protože grafem uspořádání je cyklický orientovaný graf (angl.
DCG = directed cyclic graph), jeho tranzitivní redukce je určena jednoznačně (znáte nejspíš jako
Hasseův diagram).`,`Relace předcházení
Vrcholy grafu předcházení jsou události (něco se stalo), jeho hrany budeme nazývat akce (něco se děje).
Akce tedy vedou od jedné události k nějaké další, ale mohou je „přeskakovat“ (formálněji: existuje-li
mezi událostmi A a B cesta délky alespoň 2, může existovat hrana/akce která vede z A do B přímo).`,`Časový sled
Je-li nějaká relace předcházení souběžná, mluvíme o časovém sledu.
Připomenutí: Časovým sledem událostí rozumíme souběžná uspořádání událostí, tedy takové, že pro každou
dvojici A, B událostí platí:
A a B nastanou libovoně, tedy nezávisle na sobě
Časový sled si můžeme představit i jako přiřazení časového razítka každé události takové, že žádné dvě
události nenastanou ve stejné chvíli.`,`Předcházení je abstrakce, která skrývá vnitřní detaily procesů (dějů odehrávajících se v
čase), které se mohou stát v různém pořadí díky náhodným vlivům, a snažíme se jejich vnější chování
popsat pomocí této relace. Vnější chování nějakého systému závisí pouze na jeho relaci předcházení,
nikoliv už na tom, jak přesně budou v čase rozloženy konkrétní události.
Je-li takto zavedená abstrakce porušena, mluvíme o chybě atomicity. Jinými slovy, chyba atomicity nastává
kdykoliv vedou dva různé časové sledy, které jsou oba konzistentní s relací předcházení pro daný systém,
k různému vnějšímu chování.`,`Hybatel
Akce (které reprezentujeme hranami v grafu předcházení) jsou prováděny vždy nějakým
hybatelem (v našem kontextu obvykle vláknem nebo periferií). Hrany (akce) tedy můžeme tomuto hybateli
přisoudit (např. můžeme říct, že vlákno T má modré hrany a periferie P má žluté hrany). Zároveň hybatele
můžeme považovat za „peška“ který se v grafu předcházení pohybuje po hranách libovoné barvy.`,`Synchronizace
Akce jsou souběžné právě tehdy, když jsou souběžné libovolné dvě události, kterých
se tyto akce týkají. Událost můžou být souběžná sama se sebou, a také mohou být souběžné události spojené nějakou akcí.`,`Stavový prostor je orientovaný graf kde vrcholy jsou akce a hrany jsou stavy (ve stejném smyslu jako
v grafu předcházení). Pojem „stav“ je v tomto kontextu velmi abstraktní, nicméně můžeme si bez velké
újmy nadále představovat stav jako:
• hodnoty procesorových registrů,
• buněk paměti (jak operační, tak paměti a registrů periferií).`,`Běh
Orientovanou cestu ve stavovém prostoru označíme za běh. Je zde jasná korespondence mezi
během (posloupnost stavů propojených akcemi) a časovým sledem (posloupnost událostí propojených
akcemi). Sekvenci akcí můžeme chápat i jako běh ale nikoliv jako sled – v případě běhu stačí určit počáteční
stav (událost) a zbytek běhu je již určen akcemi jednoznačně.`,`Kritická sekce Uvažme běh R ≡ (r1, r2, ..., rn) nějakého vlákna (nebo jiného hybatele) T1asouběžný běh S ≡ (s1, ..., sn).
Říkáme, že S je kritickou sekcí vůči R, vede-li (r1, ..., S, ..., rn) k události „chyba“, a to přesto, že samotné běhy R ani S k chybě nevedou.
Proto se tomuto typu problému také říká chyba atomicity.`,`Čtenáři a písaři
Představme si situaci, kdy máme běhy R1, R2, … Rn a běhy W1, W2, …, Wm,
pro které platí:
1. ∀.i, j platí Wi není kritickou sekcí vůči Wj
2. ∀.i, j platí Ri je kritickou sekcí vůči Wj,
3. ∀.i, j platí Ri je kritickou sekcí vůči Rj
Takovou situaci nazýváme „čtenáři a písaři“ – máme tedy n čtenářů Ri a m písařů Wi.
Čtenáři si vzájemně nepřekáží – mohou číst zároveň v libovolném pořadí.
Písaři se chovají jinak: sdílená data nejen čtou, ale i modifikují – proto čtenář
 který by byl přerušen písařem, by mohl přečíst nekonzistentní data.
Podobně si překáží dva různí písaři – protože data jak čtou tak modifikují, může být výsledek opět nekonzistentní.`,`Souběžná datová závislost
je vztah mezi akcemi, který je nejlépe vidět ve stavovém prostoru:
je-li vstupem nějaké akce Z paměťová buňka nebo registr, do které naposled zapisovala akce X, říkáme,
že X má datovou závislost na Z.
Uvažme zároveň situaci, kdy máme dva běhy, A ≡ (a1, ..., X, ...an), B ≡ (b1, ..., Z, ..., bm), které jsou
zcela souběžné. To se v programu může lehce stát, a často je těžké takovou chybu odhalit, zejména je-li
výpočet (a1, ..., X) krátký, zatímco (b1, ..., Z) dlouhý (časově náročný)`,`Producenti a konzumenti
Uvažme situaci, kdy účelem několika vláken je vytvářet mezivýsledky
určené k dalšímu zpracování (tato vlákna – producenty – označíme P1...Pn), a několik dalších vláken
tyto mezivýsledky dále zpracovává (tato nazveme konzumenty a označíme K1...Km).
Všechna vlákna Pi jsou souběžná jak vzájemně tak s vlákny Ki.
Tato souběžnost je důležitá a užitečná:
umožňuje nám práci distribuovat na různá procesorová jádra a tím celý proces značně urychlit. Protože
jsou ale všechna vlákna souběžná, můžou lehce nastat dvě problémové situace:
1. producenti mohou generovat výsledky rychleji, než je konzumenti dokáží zpracovávat – mezivýsledky
se budou hromadit a postupně zaberou veškerou vyhrazenou paměť, nebo se začnou ztrácet (protože je
producenti začnou přepisovat dříve, než jsou zpracovány),
2. konzumenti mohou zpracovávat výsledky rychleji, než je producenti dokáží vytvářet – bez synchronizace
by taková situace vedla k opakovanému zpracování stejného mezivýsledku, případně k pokusu o zpracování
nějaké nesmyslné informace (je-li mezivýsledek očekáván na adrese, kam ještě nebyl producentem
zapsán).

V těchto dvou situacích se tedy musí konzumenti a producenti synchronizovat – je-li mezivýsledků
nedostatek, upřednostníme práci producentů, naopak je-li jich přebytek, upřednostníme práci konzumentů.
V ideálním případě tak, aby existovala nějaká dynamická mez, která se podle potřeb systému mění.`,`Rozvětvení a setkán
Akce, které nejsou souběžné, nelze provádět paralelně. Máme-li tedy více výpočetních jader, než máme
vláken, nevyužíváme hardwarové zdroje efektivně. Relativně častým jevem je, že výpočet má dva (nebo
několik) bloků, které lze provést v libovolném pořadí, aniž by se změnil výsledek. V takovém případě
bychom chtěli výpočet rozvětvit tak, aby byl každý takový blok (běh) souběžný s těmi ostatními. Máme-li
procesorů málo, vykonají se v libovolném pořadí (to nám nevadí), ale máme-ji jich dostatek (nebo
přebytek), mohou se tyto běhy provést najednou (každý na jiném procesoru).
Tím ale vzniká nový problém – výpočet nemůže pokračovat, než skončí alespoň některé takto vyčleněné bloky
– jinak bychom se dostali do situace „výpočetní závislost“ (a tím do známého terénu „příliš mnoho
souběžnosti“).`]},{section:6,name:"Synchronizace",correct:[`Synchronizační zařízení
synchronizační zařízení je (de facto) datová struktura – v programu může existovat v mnoha
nezávislých instancích. Mezi různými instancemi se žádná synchronizace neděje. Každé synchronizační
zařízení má nějaký stav, který musí být někde uložen: instanci synchronizačního zařízení tedy ztotožníme
s adresou, na které je uložen jeho stav`,`Vzájemné vyloučení (mutex) 
Zřejmě úplně nejjednodušším synchronizačním zařízením je mutex,
určený k ochraně kritické sekce. Aby byla kritická sekce ochráněna, musí být chráněná jak kritická sekce
samotná, tak i všechny běhy, vůči kterým je kritická, a to tím stejným mutexem.`,`Spinlock
je synchronizační smyčka bez interakce s plánovačem (komunikace s plánovačem je
potenciálně drahá operace – neplánujeme-li čekat dlouho, může být nevýhodné ji provést).
V moderních systémech se spinlock implementuje pomocí atomické instrukce, která umožní provést
operaci ld, úpravu hodnoty a st jako jediný krok, který je pro všechny procesory v systému pozorovatelný
pouze jako celek. Atomických operací existuje celá řada, my použijeme operaci cmpxchg (z angl. „compare
and exchange“), která má 3 operandy: adresu, očekávanou hodnotu a požadovanou hodnotu.`,`Spinlock (resp. aktivní čekání obecně) má ale jednu důležitou nevýhodu: soutěží-li o stejný zámek dvě
vlákna, která sdílí procesorové jádro, čekajícímu vláknu se nemůže podařit zámek získat, dokud nebude
vlastník zámku probuzen. Proto je použití spinlocku v uživatelských programech obvykle chybou (nelze
zaručit, že vlákna budou naplánována na různá procesorová jádra).`,`Uspávající mutex 
Operace lock je realizována jako služba operačního systému (systémové volání); jádro nejprve ověří, je-li zámek odemčen:
1. pokud ano, poznačí ho jako zamčený a vrátí kontrolu vláknu, které zámek vyžádalo,
2. v opačném případě zařadí vlákno do fronty, která danému mutexu náleží, a nechá plánovač probudit
nějaké jiné vlákno.
Odemčení zámku pak ověří, je-li nějaké další vlákno ve frontě, a pokud ano, mutex ihned zase zamkne a
předá ho prvnímu vláknu z této fronty`,`Rychlý mutex
rozdělení odpovědnosti za dvě části stavu
mezi uživatelské vlákno a operační systém. Rozhodnutí o tom, je-li zámek zamčený nebo nikoliv, vyřeší
vlákno ve vlastní režii (stejně, jako by se jednalo o spinlock – pomocí atomické instrukce). Systémové
volání se provede pouze v případě, kdy pokus o zamčení selže.
Systémová část stavu se jmenuje futex (z angl. „fast mutex“), a sestává pouze z fronty uspaných
vláken. Fronty jsou s jednotlivými uživatelskými mutexy svázány adresou (tzn. operační systém má
pomyslný slovník front, kde klíčem je adresa příslušného mutexu)`,` Read-Copy-Update
Princip fungování je jednoduchý: místo aby písař měnil datovou strukturu na místě, vytvoří její kopii
(skutečnou nebo pomyslnou resp. částečnou) a tuto kopii upraví – obě operace jsou bezpečné, protože
kopírování je vzhledem k původní datové struktuře forma čtení, a nová kopie je prozatím ve výlučném
vlastnictví písaře (jiná vlákna k ní nemají vůbec přístup). Jakmile je úprava hotová, přesměruje všechny
budoucí čtenáře na tuto novou verzi, obvykle tím, že upraví sdílený ukazatel. 
Starší kopie je možné uvolnit až ve chvíli, kdy je jisté, že k nim nepřistupuje žádný čtenář – protože
čtenáři jsou se zapisujícím písařem souběžní, potřebujeme další synchronizační mechanismus – častou
volbou je počítadlo odkazů, které čtenáři udržují; poslední čtenář pak již nepotřebnou starší verzi dat
uvolní.`,`Monitor
Monitor je jednoduchou, ale velmi užitečnou abstrakcí – uvažme datovou strukturu, která sestává z nějaké
datové reprezentace a operací nad ní. Realizace jednotlivé operace je často kritickou sekcí vůči ostatním
operacím (to platí zejména pro ty operace, které strukturu mění).
Organizujeme-li program tak, že jediný přístup přímo k datům takové struktury je skrze operace
definované v podprogramech, lze datové struktuře jako celku přidružit jeden mutex, který se na začátku
každé operace zamkne a na konci odemkne. Lze si zde představit dvě implementační strategie:
1. v ideálním případě zamykáni a odemykání v operacích řeší překladač (týká se některých OOP jazyků);
pak lze navíc v situaci, kdy jedna operace volá jinou operaci jako podprogram, zamykání přeskočit
(„staticky“ víme, že mutex je již zamčený),
2. v méně ideálním případě, kdy je „monitor“ pouze ručně udržovaný invariant, můžeme využít rekurzivního
mutexu (vnořené zamykání se tak vyřeší „dynamicky“ – za běhu).`,`Monitor nemůže zaručit, že program jako celek nebude obsahovat chyby synchronizace – není
těžké představit si invariant, který přesahuje hranice jedné datové struktury, a kterého dočasné
porušení je kritickou sekcí.
`,`Podmínková proměnná
Pro řešení problému souběžné datové závislosti lze použít synchronizační
zařízení, kterému se říká podmínková proměnná (angl. condition variable). Operace jsou jednoduché:
• wait – čekej – zablokuje volající vlákno až do chvíle, kdy nějaké jiné vlákno provede operaci signal,
• signal odblokuje vlákno (tzn. umožní mu pokračovat ve výpočtu) zablokované operací wait.`,`Semafor
Klasický semafor přímo neřeší žádný zajímavý problém (který by mutex nebo některá
jeho varianta neřešila lépe), nicméně ze dvou semaforů lze sestavit řešení problému producentů a
konzumentů.
Semafor lze také mírně upravit tak, aby problém producentů a konzumentů řešil přímo – stačí změnit
operaci post tak, aby při pokusu o překročení hodnoty n blokovala. Takovému semaforu bychom mohli říkat
třeba symetrický (díky nově získané symetrii operací wait a post). Klasické řešení problému producentů
a konzumentů pak není nic jiného, než kombinace dvou klasických, asymetrických semaforů do jednoho
symetrického.
Význam semaforu E je počet volných míst ve frontě mezivýsledků, zatímco význam semaforu F je počet
zabraných míst ve frontě mezivýsledků. Operace udržují invariant E + F = n.`,` Bariéra
Inverzní semafor – umožňuje pokračovat ve výpočtu, až když na bariéru čeká dostatek
vláken. Smyslem bariéry je řešit problém rozvětvení a setkání (zejména jeho druhou část – setkání
většího počtu vláken, které řeší nezávislé podproblémy nějakého většího výpočetního celku).
Bariéru lze implementovat například jako počítadlo + podmínkovou proměnnou.`],incorrect:[`Synchronizační zařízení
synchronizační zařízení je (de facto) datová struktura – v programu může existovat v mnoha
nezávislých instancích. Mezi různými instancemi  může probíhat synchronizace. Každé synchronizační
zařízení má nějaký stav, který musí být někde uložen: instanci synchronizačního zařízení tedy ztotožníme
s adresou, na které je uložen jeho stav`,`Vzájemné vyloučení (mutex) 
Zřejmě úplně nejjednodušším synchronizačním zařízením je mutex,
určený k ochraně kritické sekce. Aby byla kritická sekce ochráněna,stačí když  bude chráněná samotná kritická sekce,
 nic ostatního není potřeba, vychází z relace předcházení.`,`Spinlock
je synchronizační smyčka, která interaguje s plánovačem (komunikace s plánovačem je
potenciálně drahá operace – neplánujeme-li čekat dlouho, může být nevýhodné ji provést).
V moderních systémech se spinlock implementuje pomocí atomické instrukce, která umožní provést
operaci ld, úpravu hodnoty a st jako jediný krok, který je pro všechny procesory v systému pozorovatelný
pouze jako celek. Atomických operací existuje celá řada, my použijeme operaci cmpxchg (z angl. „compare
and exchange“), která má 3 operandy: adresu, očekávanou hodnotu a požadovanou hodnotu.`,`Spinlock (resp. aktivní čekání obecně) má ale jednu důležitou nevýhodu: soutěží-li o stejný zámek dvě
vlákna, která sdílí procesorové jádro, čekajícímu vláknu se nemůže podařit zámek získat, dokud nebude
vlastník zámku probuzen. Proto je použití spinlocku v uživatelských programech obvykle chybou (vlákna budou vždy naplánována na různá procesorová jádra).`,`Uspávající mutex 
Operace lock je realizována bez interakce s plánovačem; jádro nejprve ověří, je-li zámek odemčen:
1. pokud ano, poznačí ho jako zamčený a vrátí kontrolu vláknu, které zámek vyžádalo,
2. v opačném případě zařadí vlákno do fronty, která danému mutexu náleží, a nechá plánovač probudit
nějaké jiné vlákno.
Odemčení zámku pak ověří, je-li nějaké další vlákno ve frontě, a pokud ano, mutex ihned zase zamkne a
předá ho prvnímu vláknu z této fronty`,`Rychlý mutex
rozdělení odpovědnosti za dvě části stavu
mezi uživatelské vlákno a operační systém. Rozhodnutí o tom, je-li zámek zamčený nebo nikoliv, vyřeší
vlákno ve vlastní režii (stejně, jako by se jednalo o spinlock – pomocí atomické instrukce). Systémové
volání se provede pouze v případě, kdy pokus o zamčení selže.
Systémová část stavu se jmenuje futex (z angl. „fast mutex“), a sestává pouze z fronty uspaných
vláken. Fronty jsou mezi jednotlivými uživatelskými mutexy sdílené napříč celým systémem.`,`Read-Copy-Update
Princip fungování je jednoduchý: místo aby písař měnil datovou strukturu na místě, vytvoří její kopii
(skutečnou nebo pomyslnou resp. částečnou) a tuto kopii upraví – obě operace jsou bezpečné, protože
kopírování je vzhledem k původní datové struktuře forma čtení, a nová kopie je prozatím ve výlučném
vlastnictví písaře (jiná vlákna k ní nemají vůbec přístup). Jakmile je úprava hotová, přesměřujeme všechny aktuální i budoucí čtenáře na aktuální verzi.`,`Monitor
Monitor je jednoduchou, ale velmi užitečnou abstrakcí – uvažme datovou strukturu, která sestává z nějaké
datové reprezentace a operací nad ní. Realizace jednotlivé operace je často kritickou sekcí vůči ostatním
operacím (to platí zejména pro ty operace, které strukturu mění).
Organizujeme-li program tak, že jediný přístup přímo k datům takové struktury je skrze operace
definované v podprogramech, lze datové struktuře jako celku přidružit několik mutexů, které vybere podle potřeby na začátku
každé operace a daný mutex zamkne a na konc zasei odemkne. Lze si zde představit dvě implementační strategie:
1. v ideálním případě zamykáni a odemykání v operacích řeší překladač (týká se některých OOP jazyků);
pak lze navíc v situaci, kdy jedna operace volá jinou operaci jako podprogram, zamykání přeskočit
(„staticky“ víme, že mutex je již zamčený),
2. v méně ideálním případě, kdy je „monitor“ pouze ručně udržovaný invariant, můžeme využít rekurzivního
mutexu (vnořené zamykání se tak vyřeší „dynamicky“ – za běhu).`,"Monitor pomáhá zaručit, že program jako celek nebude obsahovat chyby synchronizace a chrání tak celou datovou strukturu a operace nad ní.",`Podmínková proměnná
Pro řešení problému čtenářů a písařů lze použít synchronizační
zařízení, kterému se říká podmínková proměnná (angl. condition variable). Operace jsou jednoduché:
• wait – čekej – zablokuje volající vlákno až do chvíle, kdy nějaké jiné vlákno provede operaci signal,
• signal odblokuje vlákno (tzn. umožní mu pokračovat ve výpočtu) zablokované operací wait.`,`Semafor
Klasický semafor přímo neřeší žádný zajímavý problém (který by mutex nebo některá
jeho varianta neřešila lépe), nicméně ze dvou semaforů lze sestavit řešení problému producentů a
konzumentů.
Semafor lze také mírně upravit tak, aby problém producentů a konzumentů řešil přímo – stačí změnit
operaci post tak, aby při pokusu o překročení hodnoty n blokovala. Takovému semaforu bychom mohli říkat
třeba symetrický (díky nově získané symetrii operací wait a post). Klasické řešení problému producentů
a konzumentů pak není nic jiného, než kombinace dvou klasických, asymetrických semaforů do jednoho
symetrického.
Význam semaforu E je počet volných míst ve frontě mezivýsledků, zatímco význam semaforu F je počet
zabraných míst ve frontě mezivýsledků. Operace udržují invariant E * F = n.`,` Bariéra
Inverzní semafor – umožňuje pokračovat ve výpočtu, až když na bariéru čeká dostatek
vláken. Smyslem bariéry je řešit problém rozvětvení většího 
počtu vláken, které řeší nezávislé podproblémy nějakého většího výpočetního celku).
Bariéru lze implementovat například jako počítadlo + spinlock.`]},{section:7,name:"Komunikace, uváznutí",correct:[`Komunikace a Synchronizace
Každá komunikace je zároveň formou synchronizace: každé čtení
nějaké informace musí být předcházeno odpovídajícím zápisem. Nelze dost dobře obdržet zprávu, která
dosud nebyla odeslána. Proto je každé komunikační zařízení také zařízením synchronizačním. Opačný vztah
ale neplatí: komunikace přidává možnost předat nějakou informaci.`,`Datové struktury pro komunikaci
Ke komunikaci lze použít celkem libovolnou datovou strukturu, je-li chráněna
mutexem nebo jiným vhodným synchronizačním zařízením (např. je realizována jako monitor).
Problém, který zde vzniká, je soutěž (angl. contention) o příslušný zámek. Takové kombinované
komunikační zařízení si lze představit jako klasickou poštovní schránku – vkládá-li právě pošťák psaní
do schránky, nemůžete si z ní dost dobře ve stejnou chvíli vyzvedávat nějaké jiné – jak přesně datová
struktura funguje vnitřně z tohoto pohledu není důležité.`,`Roura
Specializace fronty, která pracuje s bajty. Vyznačuje se zejména efektivními dávkovými
operacemi – zápisem resp. čtením většího počtu položek (bajtů) najednou. Často je poskytována operačním
systémem. Prakticky vždy implementovaná jako omezená – existuje nějaký maximální objem dat, který lze
do roury zapsat, než musí další zápis vyčkat na čtení. Stejně jako omezená fronta má tedy synchronizační
chování stejné jako symetrický semafor.`,`Alternativou ke sdílené paměti je předávání zpráv – má dvě výhody:
1. je bezpečnější na použití – méně problémů s hazardy souběhu,
2. lze použít i mezi různými počítači (po síti),
a dvě nevýhody:
1. méně pohodlné, protože nelze odkazovat do jiných datových struktur – všechna relevantní data je
potřeba „přibalit“ do samotné zprávy,
2. méně efektivní, jednak kvůli samotné konstrukci zpráv, jednak kvůli režii s kopírováním a předáváním
zprávy.`,`Zpráva 
Z pohledu systému pro předávání zpráv je obvykle obsah zprávy neprůhledný (jsou to pouze
bajty), důležitá jsou připojená metadata: zejména adresát. Způsob adresace je zároveň hlavní rozdíl 
mezi předáváním zpráv a frontami – mezi pevnou dvojicí komunikujících vláken je jinak předávání zpráv
ekvivalentní dvojici komunikačních front`,`Základní opreace
Je-li maximální počet nedoručených zpráv, které je systém ochoten uložit, nulový, mluvíme o tzv.
„setkání“ (rendezvous) – odesílající a přijímající vlákno se musí „sejít“ aby si mohly zprávu předat.
Synchronizační aspekt komunikace je zde obzvláště výrazný – dokonce mnohem výraznější, než je obvyklé
u synchronizačních zařízení.`,`Zprostředkovatel
Úkolem zprostředkovatele je zprávu od odesílatele přebrat a doručit ji adresátovi. Předáni zprávy může
probíhat ve 3 režimech:
• Je-li operace odeslání synchronní a systém doručení spolehlivý, za zprávu je již dále odpovědný
zprostředkovatel – klient může věc považovat za vyřízenou.
• Je-li operace asynchronní, klient musí paměť se zprávou zachovat až do doby, než zprostředkovatel
potvrdí, že ji převzal.
• Je-li doručení zpráv nespolehlivé, a klient potřebuje zajištěné doručení, musí zprávu zachovat až do
doby, než mu ji příjemce potvrdí (opět odesláním zprávy).
Příjem zprávy obvykle funguje v jednom ze dvou režimů:
1. Synchronní, kdy se příjemce dotáže na další zprávu (případně na ni vyčká, není-li právě žádná
k dispozici), tuto zpracuje a poté se zeptá na další.
2. Asynchronní – klient zpracovává větší počet zpráv souběžně, a zpracováni příchozí zprávy začne na
výzvu zprostředkovatele. Lze realizovat buď pomocí klasických vláken, nebo tzv. fibrů.`,`Existuje typ operačních systémů, kde je předávání zpráv základním mechanismem meziprocesové komunikace.
Tento návrh silně koreluje s mikrojádrovou architekturou. V takovém systému
jsou služby operačního systému z velké části realizovány „běžnými“ procesy, a proto je komunikace mezi
procesy v takových systémech velmi důležitá. Zprostředkovatelem je v takových systémech často samotné
mikrojádro.`,`Hardwarové zdroje nejpřirozenějším typem zdroje je hardware: jak výpočetní (procesor, paměť)
tak periferie. V první části kurzu jsme se zabývali virtualizací, která nám umožňuje předstírat, že
zdroje vlastníme ve více instancích, než jich fyzicky existuje. To je sice velmi užitečná a úspěšná
taktika, ale není bez limitů.
Virtualizaci zdroje lze uplatnit jen v situacích, kdy každý uživatel daného zdroje využívá jen část jeho
skutečné kapacity – část obrazovky (okno), část procesorového jádra (vlákno), část operační paměti
(proces), část šířky přenosového pásma (síťové spojení) atp.`,`Rezervace
 Alternativou je rezervace, kterou využijeme v situacích, kdy virtualizaci použít nelze:
• neumožňuje to povaha zdroje (např. pásková jednotka nebo optická zapisovací mechanika) nebo
• nečekané selhání zdroje je nepřípustné (např. by došlo k ohrožení zdraví, života nebo majetku).
Rezervace a virtualizace není vzájemně výlučná – daný zdroj může být virtualizován, ale zároveň může
systém poskytovat možnost rezervovat zaručenou kapacitu – v takovém případě je rezervovaný zdroj
(dočasně) nepřístupný pro systém virtualizace. Operační systémy například běžně poskytují možnost
rezervovat pro daný proces nějaké množství fyzické paměti. Takto rezervovanou fyzickou paměť pak
systém nebude používat pro stránky jiných procesů, ani nebude stránky vlastníka z takto rezervované
paměti přesouvat do trvalého úložiště.`,`Rezervace sestává ze dvou operací:
1. samotná rezervace, která od systému vyžádá nějaký zdroj (resp. nějaký počet jednotek zdroje), pro
výlučné použití daným programem (procesem, vláknem, atp.), – po úspěšném provedení rezervace je
zdroj ve vlastnictví příslušného programu,
2. uvolnění zdroje kdy vlastník zdroje oznámí systému, že již zdroj nebude využívat, a tento může být
vrácen „do oběhu“ (může být předán jinému programu, procesu, vláknu, …).`,`Komunikace
Protože komunikace je zároveň synchronizací, jedná se (možná ne zcela intuitivně)
také o abstraktní zdroj. Novým aspektem je zde skutečnost, že rezervaci a uvolnění neprovádí nutně
tentýž aktér – předání zprávy (resp. obecně informace) může zároveň předat vlastnictví tohoto typu
„zdroje“.
Tento jev je vázán k problému producentů a konzumentů (který, jak jsme zmiňovali výše, s komunikací úzce
souvisí): vytvoření a (zejména) uložení mezivýsledku je formou rezervace – počet mezivýsledků, které
jsme si ochotni pamatovat, je omezené, a jedná se tedy o konečný zdroj, který musí být producentovi
přidělen. Takto zablokovaná instance se ale uvolní tím, že konzument mezivýsledek použije.`,`Odnímatelné zdroje
Implicitně považujeme zdroje za neodnímatelné, ve smyslu, že jediný způsob,
jak může dojít k uvolnění zdroje, je dobrovolné vrácení vlastníkem. U řady zdrojů by mělo odebrání
pravděpodobně fatální následky minimálně pro dotčený program, a někdy také pro dotčený zdroj (3D
tiskárna, optická zapisovací mechanika, fotografická tiskárna, atp.). Uvážíme-li abstraktní zdroje,
násilné odebrání např. zmiňovaného mutex-u jistě nemůže mít pozitivní dopad na další fungování vlákna,
resp. programu jako celku.
Jiná je situace u zdrojů virtualizovaných, kde odebrání fyzického prostředku obvykle nepředstavuje
zásadní problém – plánovač vláken zcela běžně odebírá procesor běžícímu vláknu bez jeho souhlasu,
správce virtuální paměti může stránku přestěhovat z operační paměti do externí, atp. Na dotčený proces
(vlákno) to má jistě dopad, ale důsledky obvykle nejsou zdaleka tak závažné, jako v případě zdrojů
neodnímatelných.`,`Podmínky uváznutí - Uváznutí může nastat, jsou-li splněny všechny 4 následující podmínky – přitom
požadovat umožnění každé z nich je samo o sobě přirozené a smysluplné
1. Vzájemné vyloučení
2. čekající vlastník
3. neodnímatelnost
4. kruhové čekání
Tyto podmínky nejsou postačující na to aby systém mohl uváznout.`,`Podmínky uváznutí - Uváznutí může nastat, jsou-li splněny všechny 4 následující podmínky – přitom
požadovat umožnění každé z nich je samo o sobě přirozené a smysluplné
1. Vzájemné vyloučení
2. čekající vlastník
3. neodnímatelnost
4. kruhové čekání
Tyto podmínky nejsou postačující na to aby systém mohl uváznout.`,`Detekce uváznutí
Jednou možností jak uváznutí detekovat je použít dynamickou variantu grafu
závislostí zdrojů, který jsme použili k definici kruhového čekání. V tomto případě obsahuje graf dva
různé typy uzlů: vlákna, nebo jiné potenciální vlastníky a zdroje`,`Zotavení z uváznutí 
Účastní-li se cyklického čekání alespoň jeden odnímatelný zdroj, může
k uváznutí sice dojít, ale na rozdíl od standardní situace se lze z tohoto typu uváznutí relativně lehce 
zotavit (zejména se lze zotavit bez násilného ukončování vláken). Dočasným odebráním odnímatelného
zdroje se totiž cyklus čekajících vláken přeruší, a systém může pokračovat.`,`Vyhýbání uváznutí
Jinou možností jak se s uváznutím vypořádat je technika vyhýbání (angl.
avoidance). Klíčovým prvkem je zamítnout některé požadavky na rezervaci, i když je příslušný zdroj
dostupný, může-li taková rezervace vést k pozdějšímu uváznutí. Stavy, ze kterých může vždy alespoň
jedno vlákno vyváznout a úspěšně skončit (resp. uvolnit zdroje) označíme jako bezpečné.
Asi nejznámějším algoritmem pro vyhýbání uváznutí je tzv. bankéřův algoritmus, navržený E. Dijkstrou.`,`Zamezení předrezervací Myšlenka předrezervace je jednoduchá – nesmíme připustit, aby vlákno,
které nějaký zdroj již vlastní, čekalo na nějaký zdroj (je lehce vidět, že systém pak nemůže uváznout).
Rezervace proto připustíme pouze v situaci, kdy žádající vlákno žádné zdroje nevlastní – aby byl systém
prakticky použitelný, musíme ovšem povolit rezervaci několika zdrojů najednou (dávkově).
Potřebuje-li tedy vlákno využít více zdrojů, musí je vyžádat všechny jedinou atomickou akcí (uvolňovat
je ovšem může postupně). Je-li potřeba rezervovat nějaký zdroj v situaci, kdy už dané vlákno nějaký
jiný zdroj vlastní, musí nejprve všechny zdroje uvolnit a opět je rezervovat společně s tím novým.`,`Zamezení virtualizací 
Virtualizací jsme se podrobně zabývali v prvních 4 kapitolách – zdroje,
které jsou virtualizované, vůbec nepoužívají systém výlučné rezervace, nesplňují tedy podmínku vzá-
jemného vyloučení a nemohou přímo způsobit uváznutí. Mezi zdroje, které lze virtualizovat, patří
samozřejmě paměť, procesor a pevné úložiště (kapitoly 1–3) a některé periferie – terminál (obrazovka,
tiskárna, atp.) nebo síťová rozhraní (kapitola 4).`,`Zamezení uspořádáním
Zbývá nám podmínka kruhového čekání – tomu lze zamezit například tím,
že se na zdrojích ustaví globální lineární uspořádání, které musí každé vlákno při rezervacích dodržet:
rezervovat lze pouze zdroj, který je v uspořádání větší než dosud největší zdroj vláknu přisouzený.
V takovém systému je statický graf závislostí zdrojů acyklický, k uváznutí tak nemůže dojít.
Podobně jako v případě předrezervace lze řešit i situace, kdy potřebujeme globální pořadí porušit –
vlákno se musí nejprve vzdát některých zdrojů a pak je znovu rezervovat ve správném pořadí.
Tento přístup je poměrně praktický na úrovni jednotlivého programu, nebo jiného uzavřeného systému,
nicméně pro operační systém jako celek se nehodí`],incorrect:[`Komunikace a Synchronizace
Každá synchronizace je zároveň formou komunikace: každé čtení
nějaké informace musí být předcházeno odpovídajícím zápisem. Nelze dost dobře obdržet zprávu, která
dosud nebyla odeslána. Proto je každé synchronizační zařízení také zařízením komunikačním. Opačný vztah
ale neplatí.`,`Datové struktury pro komunikaci
Ke komunikaci lze použít celkem libovolnou datovou strukturu,nesmí být ale chráněna žádným synchronizačním zařízením.
Problém, který zde vzniká, je soutěž (angl. contention) o příslušný zámek. Takové kombinované
komunikační zařízení si lze představit jako klasickou poštovní schránku – vkládá-li právě pošťák psaní
do schránky, nemůžete si z ní dost dobře ve stejnou chvíli vyzvedávat nějaké jiné – jak přesně datová
struktura funguje vnitřně z tohoto pohledu není důležité.`,`Roura
Specializace fronty, která pracuje s bajty. Vyznačuje se zejména efektivními dávkovými
operacemi – zápisem resp. čtením většího počtu položek (bajtů) najednou. Často je poskytována operačním
systémem. Prakticky neomezená –  neexistuje maximální objem dat, který je roura schopna pojmout.`,`Alternativou ke sdílené paměti je předávání zpráv – má dvě výhody:
1. efektivnější
2. lze použít i mezi různými počítači (po síti),
a dvě nevýhody:
1. méně pohodlné, protože nelze odkazovat do jiných datových struktur – všechna relevantní data je
potřeba „přibalit“ do samotné zprávy,
2. je méně bezpečné na použití – více problémů s hazardy souběhu,`,`Zpráva 
Z pohledu systému pro předávání zpráv je obvykle obsah zprávy neprůhledný (jsou to pouze
bajty), důležitá jsou připojená metadata: zejména adresát. Způsob adresace je zároveň hlavní rozdíl 
mezi předáváním zpráv a frontami – mezi pevnou dvojicí komunikujících vláken je jinak předávání zpráv
ekvivalentní bitmapě.`,`Základní opreace
Je-li maximální počet nedoručených zpráv, v daný moment roven nule, mluvíme o tzv.
„setkání“ (rendezvous) – odesílající a přijímající vlákno se setkaly aby si mohly zprávu předat.
Synchronizační aspekt komunikace je zde obzvláště výrazný – dokonce mnohem výraznější, než je obvyklé
u komunikační zařízení.`,`Zprostředkovatel
Úkolem zprostředkovatele je zprávu od odesílatele přebrat a doručit ji adresátovi. Předáni zprávy může
probíhat ve 3 režimech:
• Je-li operace odeslání synchronní a systém doručení spolehlivý, za zprávu je již dále odpovědný
zprostředkovatel – klient může věc považovat za vyřízenou.
• Je-li operace asynchronní, klient musí paměť se zprávou zachovat až do doby, než zprostředkovatel
potvrdí, že ji převzal.
• Je-li doručení zpráv nespolehlivé, a klient potřebuje zajištěné doručení, musí zprávu zachovat až do
doby, než mu ji příjemce potvrdí (opět odesláním zprávy).
Příjem zprávy obvykle funguje v jednom ze dvou režimů:
1. Synchronní, kdy se příjemce dotáže na další zprávu (případně na ni vyčká, není-li právě žádná
k dispozici), tuto zpracuje a poté se zeptá na další.
2. Asynchronní – klient zpracovává větší počet zpráv souběžně, a zpracováni příchozí zprávy začne na
výzvu zprostředkovatele. Lze realizovat buď pomocí klasických vláken, nebo tzv. fibrů.`,`Existuje typ operačních systémů, kde je předávání zpráv základním mechanismem meziprocesové komunikace.
Tento návrh silně koreluje s makrojádrovou architekturou. V takovém systému
jsou služby operačního systému z velké části realizovány „běžnými“ procesy, a proto je komunikace mezi
procesy v takových systémech velmi důležitá. Zprostředkovatelem je v takových systémech často samotné
makrojádro.`,`Hardwarové zdroje nejpřirozenějším typem zdroje je hardware: jak výpočetní (procesor, paměť)
tak periferie. V první části kurzu jsme se zabývali virtualizací, která nám umožňuje předstírat, že
zdroje vlastníme ve více instancích, než jich fyzicky existuje. To je sice velmi užitečná a úspěšná
taktika, ale není bez limitů.
Virtualizaci zdroje lze uplatnit jen v situacích, kdy uživatel využívá zdroje jako celek.`,`Rezervace
 Alternativou je rezervace, kterou využijeme v situacích, kdy virtualizaci použít nelze:
• neumožňuje to povaha zdroje (např. pásková jednotka nebo optická zapisovací mechanika) nebo
• nečekané selhání zdroje je nepřípustné (např. by došlo k ohrožení zdraví, života nebo majetku).
Rezervace a virtualizace je vzájemně výlučná – daný zdroj může být virtualizován, ale zároveň nemůže
systém poskytovat možnost rezervovat zaručenou kapacitu – v takovém případě by byl rezervovaný zdroj
(dočasně) nepřístupný pro celý systém. Operační systémy například běžně poskytují možnost
rezervovat pro daný proces nějaké množství fyzické paměti. Takto rezervovanou fyzickou paměť pak
systém nebude používat pro stránky jiných procesů, ani nebude stránky vlastníka z takto rezervované
paměti přesouvat do trvalého úložiště.`,`Rezervace sestává ze dvou operací:
1. samotná rezervace, která od systému vyžádá nějaký zdroj (resp. nějaký počet jednotek zdroje), pro
výlučné použití daným programem (procesem, vláknem, atp.), – po úspěšném provedení rezervace je
zdroj ve vlastnictví příslušného programu,
2.odebrání zdroje, kdy systém odebere zdroj vlastníkovy, aby tento mohl být
vrácen „do oběhu“ (může být předán jinému programu, procesu, vláknu, …).`,`Komunikace
Protože komunikace je zároveň synchronizací, jedná se (možná ne zcela intuitivně)
také o abstraktní zdroj. Novým aspektem je zde skutečnost, že rezervaci a uvolnění musí provést stejný aktér – předání zprávy (resp. obecně informace) může zároveň předat vlastnictví tohoto typu
„zdroje“.
Tento jev je vázán k problému producentů a konzumentů (který, jak jsme zmiňovali výše, s komunikací úzce
souvisí): vytvoření a (zejména) uložení mezivýsledku je formou rezervace – počet mezivýsledků, které
jsme si ochotni pamatovat, je omezené, a jedná se tedy o konečný zdroj, který musí být producentovi
přidělen. Takto zablokovaná instance se ale uvolní tím, že konzument mezivýsledek použije.`,`Odnímatelné zdroje
Implicitně považujeme zdroje za neodnímatelné, ve smyslu, že jediný způsob,
jak může dojít k uvolnění zdroje, je dobrovolné vrácení vlastníkem. U řady zdrojů by mělo odebrání
pravděpodobně fatální následky minimálně pro dotčený program, a někdy také pro dotčený zdroj (3D
tiskárna, optická zapisovací mechanika, fotografická tiskárna, atp.). Uvážíme-li abstraktní zdroje,
násilné odebrání např. zmiňovaného mutex-u jistě nemůže mít pozitivní dopad na další fungování vlákna,
resp. programu jako celku.
Situace u zdrojů virtualizovaných, je obdobná.`,`Podmínky uváznutí - Uváznutí může nastat, jsou-li splněny všechny 4 následující podmínky – přitom
požadovat umožnění každé z nich je samo o sobě přirozené a smysluplné
1. Vzájemné vyloučení
2. čekající vlastník
3. neodnímatelnost
4. kruhové čekání
Tyto podmínky jsou postačující na to aby systém mohl uváznout.`,`Podmínky uváznutí - Uváznutí může nastat, je li splněna alespoň jedna z následující podmínek
1. Vzájemné vyloučení
2. čekající vlastník
3. neodnímatelnost
4. kruhové čekání
Jakákoliv z těchto podmínek je postačující aby systém mohl uváznout.`,`Detekce uváznutí
Jednou možností jak uváznutí detekovat je použít statickou variantu grafu
závislostí zdrojů, který jsme použili k definici globálního uspořádání. V tomto případě obsahuje graf dva
různé typy uzlů: vlákna, nebo jiné potenciální vlastníky a zdroje`,`Zotavení z uváznutí 
Účastní-li se cyklického čekání alespoň jeden odnímatelný zdroj, může
k uváznutí sice dojít, ale na rozdíl od standardní situace se lze z tohoto typu uváznutí relativně lehce 
zotavit a to násilným ukončením vlákna.`,`Vyhýbání uváznutí
Jinou možností jak se s uváznutím vypořádat je technika vyhýbání (angl.
avoidance). Klíčovým prvkem je zamítnout některé požadavky na rezervaci, i když je příslušný zdroj
dostupný, může-li taková rezervace vést k pozdějšímu uváznutí. Stavy, ze kterých může vždy alespoň
jedno vlákno vyváznout a úspěšně skončit (resp. uvolnit zdroje) označíme jako bezpečné.
Asi nejznámějším algoritmem pro vyhýbání uváznutí je tzv. makleřův algoritmus, navržený E. Dijkstrou.`,`Zamezení předrezervací Myšlenka předrezervace je jednoduchá – nesmíme připustit, aby vlákno,
které nějaký zdroj již vlastní, čekalo na nějaký zdroj (je lehce vidět, že systém pak nemůže uváznout).
Rezervace proto připustíme pouze v situaci, kdy žádající vlákno vlastní nějaké zdroje – aby byl systém
prakticky použitelný, musíme ovšem povolit rezervaci několika zdrojů najednou (dávkově).
Potřebuje-li tedy vlákno využít více zdrojů, musí je vyžádat všechny jedinou atomickou akcí (uvolňovat
je ovšem může postupně). Je-li potřeba rezervovat nějaký zdroj v situaci, kdy už dané vlákno nějaký
jiný zdroj vlastní, musí nejprve všechny zdroje uvolnit a opět je rezervovat společně s tím novým.`,`Zamezení virtualizací 
Virtualizací jsme se podrobně zabývali v prvních 4 kapitolách – zdroje,
které jsou virtualizované, používají systém výlučné rezervace, splňují tedy podmínku vzá-
jemného vyloučení a nemohou přímo způsobit uváznutí. Mezi zdroje, které lze virtualizovat, patří
samozřejmě paměť, procesor a pevné úložiště (kapitoly 1–3) a některé periferie – terminál (obrazovka,
tiskárna, atp.) nebo síťová rozhraní (kapitola 4).`,`Zamezení uspořádáním
Zbývá nám podmínka kruhového čekání – tomu lze zamezit například tím,
že se na zdrojích ustaví globální lineární uspořádání, které musí každé vlákno při rezervacích dodržet:
rezervovat lze pouze zdroj, který je v uspořádání menší než dosud největší zdroj vláknu přisouzený.
V takovém systému je statický graf závislostí zdrojů acyklický, k uváznutí tak nemůže dojít.
Podobně jako v případě předrezervace lze řešit i situace, kdy potřebujeme globální pořadí porušit –
vlákno se musí nejprve vzdát některých zdrojů a pak je znovu rezervovat ve správném pořadí.
Tento přístup je poměrně praktický na úrovni jednotlivého programu, nebo jiného uzavřeného systému,
nicméně pro operační systém jako celek se nehodí`]},{section:8,name:"Přerušení a periferie",correct:[`Přerušení je mechanismus, který umožňuje synchronizovat periferii a software –
v abstraktní rovině lze tedy o přerušení uvažovat jako o synchronizačním zařízení.
– přerušení je asymetrické v tom smyslu, že ho může vyvolat pouze periferie, nikoliv operační systém
nebo software obecně. Máme tedy zařízení, které je vždy aktivováno periferií – operační systém je
vždy pasivním účastníkem. Až na tyto rozdíly se přerušení podobá na podmínkovou proměnnou – slouží
k signalizaci nějaké události.`,`Operační systém je samozřejmě program, který musí být vykonáván procesorem – proto
krom periferie a operačního systému musí do hry vstoupit i procesor.
Zejména se může stát, že ve chvíli, kdy přerušení nastane (je periferií vyvoláno), procesor nějaký
program právě vykonává. Navíc je často důležité, aby byla reakce na přerušení dostatečně rychlá – velká
prodleva obsluhy může mít řadu důsledků, od uživatelského nepohodlí až ke ztrátě dat.
Aby se prodleva minimalizovala, přerušení je realizováno preemptivně – cokoliv procesor v danou chvíli
prováděl je pozastaveno, aktuální stav vlákna (hodnoty registrů) je uložen do paměti a je spuštěna
obsluha přerušení.`,`Instance přerušení
Obsluha přerušení je realizována podprogramem, kterého adresa je uvedena ve speciální
tabulce obsluhy přerušení. Chápeme-li přerušení jako synchronizační zařízení (podobné podmínkové
proměnné), je přirozené, že může existovat ve vícero instancích. Protože je ale realizováno hardwarově
na relativně nízké úrovni, těchto instancí je pevný počet (často do 256). Tabulka obsluhy přerušení
má pak pro každou instanci jednu položku, která určí který podprogram je daným přerušením aktivován.
Různé periferie pak typicky používají různé instance přerušení (instance jsou identifikovány číslem).`,`Obslužný podprogram přerušení je (až na speciální prolog a epilog) stejný jako
libovolný jiný – může být třeba zapsaný v jazyce C, a zejména může volat další podprogramy. Proto musí
mít k dispozici jak registry (zabezpečeno uložením stavu procesoru před jeho aktivací), tak zásobník.
Protože na zásobníku, který byl ve chvíli kdy k přerušení došlo, nemusí být volné místo, je obvyklé, že
dojde také k přepnutí zásobníku. Konečně procesor se přepne do režimu jádra (privilegovaného režimu)
– obsluha přerušení má tedy stejný privilegovaný přístup k výpočetním zdrojům jako jakákoliv jiná
součást jádra.`,`Obsluha přerušení
se nápadně podobá na aktivaci vlákna. Zároveň má ale vlastnosti aktivace podprogramu,
protože na rozdíl od vlákna se při ukončení obsluhy stav procesoru neukládá, a v obsluze tedy po jejím
ukončení nelze pokračovat. Můžeme tak obsluhu přerušení chápat jako vlákno s velmi krátkým životem.`,`Obsluha přerušení musí řešit 3 synchronizační scénáře:
1. synchronizace se zbytkem systému, který běží paralelně na jiných procesorových jádrech (včetně
případné obsluhy přerušení tam probíhající) – zde je v nějakém smyslu největší volnost, obvykle lze
použít spinlocky, případně některé nezamykající komunikační zařízení,
2. synchronizace se zbytkem systému, který běžel na stejném procesorovém jádře a byl obsluhou přerušen
– zde spinlock nepřichází v úvahu, protože přerušený podprogram nemůže být spuštěn před ukončením
obsluhy,
3. synchronizace s obsluhou souběžného přerušení vyvolané na stejném procesorovém jádře – spinlock
opět nepřichází v úvahu (ze stejného důvodu), pomůže zde ale speciální jednoúčelové synchronizační
zařízení – zákaz přerušení.
Je-li v platnosti zákaz daného přerušení, obsluha případného příchozího přerušení je odložena až do
chvíle, kdy je přerušení opět povoleno. Jedná se tak o formu vzájemného vyloučení specifickou pro
obslužné podprogramy.`,`Vzpomeňme, že aktivace procesu je relativně drahá operace: musí se změnit mapování paměti.
Proto se při aktivaci obsluhy přerušení proces nepřepíná: běží v adresním prostoru, který byl zrovna
aktivní. To mimo jiné znamená, že struktury, které obsluha využívá, musí být dostupné ve všech virtuálních
adresních prostorech, a navíc musí být dostupné na stejných adresách. Obsluha přerušení tak vytvoří
pomyslné vlákno v procesu, který je právě aktivní.`,`Struktura obsluhy
1. při vstupu do obsluhy přerušení se zakážou další přerušení (může vykonat přímo procesor jako součást
aktivace obsluhy) –
∘ minimálně toho typu, které bylo právě aktivováno, mají-li přerušení priority tak také všechna
přerušení nižších priorit, a v některých systémech úplně všechna přerušení,
∘ tím jsou ochráněny libovolné kritické sekce obsluhy přerušení vůči sobě samé, a také je tím
omezen počet aktivačních záznamů na zásobníku (jinak by hrozilo, že příliš mnoho rychle příchozích
přerušení zásobník vyčerpá),
2. obsluha vykoná minimální nutnou akci, která uvede systém do provozuschopného stavu:
∘ např. vyprázdní mezipaměti, které by jinak přetekly, a provede další akce, které nelze odložit,
∘ minimálně část plánovače je tohoto charakteru (je aktivován obsluhou přerušení časovače – více
později),
∘ libovolné datové struktury, které zde využívá, a které využívá i jiná část jádra, musí být buď
použitelné zcela bez zamykání (např. některé komunikační zařízení probrané v předchozí kapitole,
které nepoužívá zámky), nebo musí být na straně zbytku jádra chráněny zákazem přerušení,
3. naplánuje zbývající akce (obsluha druhé úrovně) na pozdější vykonání – tento krok vyžaduje komunikaci
se zbytkem jádra (někde musí informaci o potřebné návazné akci převzít jiná část jádra, která je
s obsluhou přerušení jinak souběžná).`,`Notifikace
Nejzákladnější formou přerušení je notifikace – upozornění na nějakou obecnou událost.
Tento typ přerušení je obvykle relativně nezávazný v tom smyslu, že zdržení nebo i úplný výpadek obsluhy
systém ani zpracovávaná data nijak neohrozí. `,`DMA
Zařízení s větší šířkou pásma obvykle pro přenos dat používají DMA, tzn. režim, kdy periferie
přesouvá data do operační paměti souběžně s běžným provozem zbytku systému. Tyto přenosy je ale
nutné synchronizovat s operačním systémem (resp. s ovladačem zařízení, který je součástí operačního
systému).
Směrem k periferii je synchronizace realizována zápisem do registru, opačným směrem ale podobný
mechanismus použít nelze – periferie místo toho signalizuje dokončení přenosu přerušením.
`,`Časovač - mainupalce s frontami vláken
Tyto operace musí být:
1. chráněny proti zásahům jiných procesorových jader (obvykle spinlockem, alternativně by mohl být
celý plánovač postaven na komunikačních zařízeních bez zámků; uspání zde nepřichází v úvahu),
2. chráněny proti přerušení (zákazem) a tedy musí být zároveň
3. efektivní (konstantní nebo nejvýše logaritmické v počtu vláken),
4. synchronizace v bodech 1 a 2 musí být velmi důsledně koordinovaná: plánovač nesmí zamknout spinlock,
aniž by byla zároveň zakázána přerušení (jinak by mohlo dojít k uváznutí), ale zároveň nesmí na
spinlock příliš dlouho čekat (protože musí být při čekání zakázaná přerušení, tzn. jedná se o časově
kritickou operaci).
`],incorrect:[`Přerušení je mechanismus, který umožňuje synchronizovat periferii a software –
v abstraktní rovině lze tedy o přerušení uvažovat jako o synchronizačním zařízení.
– přerušení je symetrické v tom smyslu, že ho může vyvolat jak periferie tak i operační systém.
 Máme tedy zařízení, které je vždy aktivováno periferií nebo operačním systémem a ten druhý je
vždy pasivním účastníkem. Až na tyto rozdíly se přerušení podobá na podmínkovou proměnnou – slouží
k signalizaci nějaké události.`,`Operační systém je samozřejmě program, který musí být vykonáván procesorem – proto
krom periferie a operačního systému musí do hry vstoupit i procesor.
Zejména se může stát, že ve chvíli, kdy přerušení nastane (je periferií vyvoláno), procesor nějaký
program právě vykonává. Navíc je často důležité, aby operační systém daný program nepřerušil násilím,
proto je přerušení realizováno postemptivně – cokoliv procesor v danou chvíli prováděl je dokončeno a
až poté se spustí obsluha přerušení.`,`Instance přerušení
Obsluha přerušení je realizována podprogramem, kterého adresa je uvedena ve speciální
registru. Chápeme-li přerušení jako synchronizační zařízení (podobné podmínkové
proměnné), je přirozené, že může existovat ve vícero instancích. Protože je ale realizováno hardwarově
na relativně nízké úrovni, těchto instancí je pevný počet (často do 256).
Podprogram má pak pro každou instanci speciální funkci, tzv. řadič přerušení,
který určí který podprogram je daným přerušením aktivován.
Různé periferie pak typicky používají různé instance přerušení (instance jsou identifikovány číslem).`,`Obslužný podprogram přerušení je (až na speciální prolog a epilog) stejný jako
libovolný jiný až na jednu vyjímku – může být třeba zapsaný v jazyce C, ale nemůže volat další podprogramy, protože jádro je jen jedno.
Proto musí mít k dispozici jak registry (zabezpečeno uložením stavu procesoru před jeho aktivací), tak zásobník.
Protože na zásobníku, který byl ve chvíli kdy k přerušení došlo, nemusí být volné místo, je obvyklé, že
dojde také k přepnutí zásobníku. Konečně procesor se přepne do režimu jádra (privilegovaného režimu)
– obsluha přerušení má tedy stejný privilegovaný přístup k výpočetním zdrojům jako jakákoliv jiná
součást jádra.`,`Obsluha přerušení
se nápadně podobá na aktivaci vlákna. Zároveň má ale vlastnosti aktivace podprogramu,
protože může být aktivována, uložena a případně obnovena v budoucnu. Můžeme tak obsluhu přerušení chápat jako speciální typ vlákna.`,`Obsluha přerušení musí řešit 3 synchronizační scénáře:
1. synchronizace s obsluhou souběžného přerušení vyvolané na stejném procesorovém jádře – zde je v nějakém smyslu největší volnost, obvykle lze
použít spinlocky, případně některé nezamykající komunikační zařízení,
2. synchronizace se zbytkem systému, který běžel na stejném procesorovém jádře a byl obsluhou přerušen
– zde spinlock nepřichází v úvahu, protože přerušený podprogram nemůže být spuštěn před ukončením
obsluhy,
3.  synchronizace se zbytkem systému, který běží paralelně na jiných procesorových jádrech (včetně
případné obsluhy přerušení tam probíhající) – spinlock
opět nepřichází v úvahu (ze stejného důvodu), pomůže zde ale speciální jednoúčelové synchronizační
zařízení – zákaz přerušení.
Je-li v platnosti zákaz daného přerušení, obsluha případného příchozího přerušení je odložena až do
chvíle, kdy je přerušení opět povoleno. Jedná se tak o formu vzájemného vyloučení specifickou pro
obslužné podprogramy.`,`Vzpomeňme, že aktivace procesu je relativně drahá operace: musí se změnit mapování paměti.
Proto se při aktivaci obsluhy přerušení proces nepřepíná: běží v adresním prostoru, který byl zrovna
aktivní. To mimo jiné znamená, že struktury, které obsluha využívá, musí být nějakým způsobem dostupné pro všechny procesory.
Obsluha přerušení tak využívá speciální procesor přímo určený na tuto činnost.`,`Struktura obsluhy
1. při vstupu do obsluhy přerušení se zakážou další přerušení (může vykonat přímo procesor jako součást
aktivace obsluhy) –
∘ minimálně toho typu, které bylo právě aktivováno, mají-li přerušení priority tak také všechna
přerušení nižších priorit, a v některých systémech úplně všechna přerušení,
∘ tím jsou ochráněny libovolné kritické sekce obsluhy přerušení vůči sobě samé, a také je tím
omezen počet aktivačních záznamů na zásobníku (jinak by hrozilo, že příliš mnoho rychle příchozích
přerušení zásobník vyčerpá),
2. obsluha vykoná minimální nutnou akci, která uvede systém do provozuschopného stavu:
∘ např. vyprázdní mezipaměti, které by jinak přetekly, a provede další akce, které nelze odložit,
∘ minimálně část plánovače je tohoto charakteru (je aktivován obsluhou přerušení časovače – více
později),
∘ libovolné datové struktury, které zde využívá, a které využívá i jiná část jádra, musí být 
zamykatelné (spinlockem nebo jiným synchronizačním zařízením) nebo musí být v části jádra, která není chráněny zákazem přerušení,
3. naplánuje zbývající akce (obsluha druhé úrovně) na pozdější vykonání – tento krok vyžaduje komunikaci
se zbytkem jádra (někde musí informaci o potřebné návazné akci převzít jiná část jádra, která je
s obsluhou přerušení jinak souběžná).`,`Notifikace
Nejzákladnější formou přerušení je notifikace – upozornění na nějakou obecnou událost.
Tento typ přerušení je extrémně spolehlivý a nedovoluje chyby, protože zdržení nebo i úplný výpadek obsluhy může
systém nebo data ohrozit. `,`DMA
Zařízení s větší šířkou pásma obvykle pro přenos dat používají DMA, tzn. režim, kdy periferie
přesouvá data do operační paměti souběžně s běžným provozem zbytku systému. Tyto přenosy je ale
nutné synchronizovat s operačním systémem (resp. s ovladačem zařízení, který je součástí operačního
systému).
Směrem k periferii je synchronizace realizována přerušením, opačným směrem ale podobný
mechanismus použít nelze – periferie místo toho zapisuje přímo do registrů procesoru.
`,`Časovač - mainupalce s frontami vláken
Tyto operace musí být:
1. chráněny proti zásahům jiných procesorových jader (obvykle spinlockem, alternativně by mohl být
celý plánovač postaven na komunikačních zařízeních bez zámků; uspání zde nepřichází v úvahu),
2. chráněny proti přerušení (zákazem) a tedy musí být zároveň
3. efektivní (konstantní nebo nejvýše logaritmické v počtu vláken),
4. synchronizace v bodech 1 a 2 musí být velmi důsledně koordinovaná: plánovač musí zamknout spinlock,
a zároveň musí být platný zakáz přerušení (jinak by mohlo dojít k uváznutí), ale zároveň nesmí na
spinlock příliš dlouho čekat (protože musí být při čekání zakázaná přerušení, tzn. jedná se o časově
kritickou operaci).
`]}],bo=[{uuid:"e42328b0-abcd-4859-b969-112b81be8d32",title:"Část 1: Virtualizace paměti",statements:[{correct:"Virtuální adresní prostor umožňuje izolaci procesů a ochranu paměti.",incorrect:"Virtuální adresní prostor vždy odpovídá fyzickému adresnímu prostoru.",uuid:"e42328b0-abcd-4859-b969-112b81be8d31"},{correct:"Překlad adres mezi virtuálním a fyzickým prostorem je řízen jednotkou správy paměti (MMU).",incorrect:"Překlad adres mezi virtuálním a fyzickým prostorem je realizován operačním systémem pomocí softwarových tabulek.",uuid:"9d678bdb-54a0-4e02-bc05-5806c2864e67"},{correct:"Stránkování umožňuje přidělit více paměti, než kolik je fyzicky dostupné.",incorrect:"Stránkování zajišťuje, že proces nikdy nepřekročí svou přidělenou fyzickou paměť.",uuid:"c3328f73-5eaf-4d64-a641-bc7374c5e9c3"},{correct:"Při překladu virtuální adresy se využívají stránkové tabulky uložené v operační paměti.",incorrect:"Virtuální adresy jsou přímo interpretovány jako fyzické adresy, takže stránkové tabulky nejsou nutné.",uuid:"cfae8517-f6c6-4017-9866-436fb313b857"},{correct:"Každý proces má obvykle svůj vlastní virtuální adresní prostor.",incorrect:"Všechny procesy v operačním systému sdílejí stejný virtuální adresní prostor.",uuid:"2643f5be-3231-4572-ac40-75bdd96cd38b"},{correct:"Výpadek stránky nastane, pokud proces přistupuje k neplatné nebo odložené stránce.",incorrect:"Výpadek stránky nastane pouze při pokusu o přístup k chráněné oblasti operačního systému.",uuid:"6e1a2e33-d950-4679-aa84-51ccd692eb1a"},{correct:"Při přepnutí procesu se změní aktivní stránková tabulka uložená v procesoru.",incorrect:"Při přepnutí procesu zůstává stránková tabulka stejná a sdílená mezi procesy.",uuid:"e1561d3b-90cb-474a-bad4-74d945cd615e"},{correct:"Externí stránkování umožňuje odkládání neaktivních stránek na disk.",incorrect:"Externí stránkování omezuje procesy na používání pouze fyzické paměti RAM.",uuid:"ec0dd4c9-4765-4eff-8665-e4fc6f78eded"},{correct:"Copy-on-write umožňuje sdílení stránek mezi procesy, dokud nedojde k zápisu.",incorrect:"Copy-on-write znamená, že každý proces vždy obdrží svou unikátní kopii paměti.",uuid:"4fe52475-7933-4e82-831b-879234ccf059"},{correct:"Virtuální adresní prostor může obsahovat stránky, které nejsou namapovány na fyzickou paměť.",incorrect:"Každá virtuální adresa musí mít odpovídající fyzickou paměťovou buňku.",uuid:"a0d3074e-7bb1-4ffa-afe6-dcda74ea49db"},{correct:"Stránkové tabulky mohou být vícestupňové pro efektivní správu velkých adresních prostorů.",incorrect:"Stránkové tabulky jsou vždy jednorozměrné a obsahují záznamy pro každou virtuální adresu.",uuid:"aae03174-bb16-4e1f-8dc1-19bb280b7f52"},{correct:"Virtuální paměť umožňuje bezpečné sdílení kódu mezi procesy.",incorrect:"Virtuální paměť vždy izoluje kód mezi procesy, takže sdílení není možné.",uuid:"dc45aa1f-ee46-4a59-8159-18bd525e2855"},{correct:"Procesor používá TLB (Translation Lookaside Buffer) k urychlení překladu adres.",incorrect:"Procesor vždy provádí úplný překlad adres pomocí stránkových tabulek v paměti.",uuid:"66bb670c-cfe0-4bcc-9d85-70bc313d2dd9"},{correct:"Při mapování souborů do paměti se jejich obsah zpřístupní jako běžná paměť.",incorrect:"Mapování souborů do paměti znamená jejich kopírování do vyhrazené paměti RAM.",uuid:"d2c70d50-8282-4340-8e6c-13b617076ba0"},{correct:"Líné načítání umožňuje načítat části programu až v okamžiku potřeby.",incorrect:"Líné načítání znamená, že celý program je okamžitě nahrán do paměti RAM.",uuid:"bd28cfda-f2b6-4e23-a435-dfdc0b9f755d"},{correct:"Každý proces má omezený přístup k fyzické paměti, definovaný stránkovými tabulkami.",incorrect:"Každý proces může přistupovat k libovolné části fyzické paměti bez omezení.",uuid:"8106c5a9-e088-4a80-81a4-340e3d8e0233"},{correct:"Výpadek stránky může být vyřešen buď načtením stránky z disku, nebo ukončením procesu.",incorrect:"Výpadek stránky vždy způsobí okamžité ukončení procesu.",uuid:"3b13884f-51da-4bc5-81fb-df5b234eae19"},{correct:"Moderní operační systémy umožňují sdílení paměti mezi procesy pomocí mapovaných souborů.",incorrect:"Moderní operační systémy nepodporují sdílení paměti mezi procesy kvůli bezpečnostním rizikům.",uuid:"e1136c05-a361-4a25-8d43-4e29f707bfa6"},{correct:"Stránka může být namapována na více virtuálních adres v různých procesech.",incorrect:"Každá stránka paměti může být přiřazena pouze jedné virtuální adrese.",uuid:"e90f22d4-0b4c-4ad8-827b-8e93097cc61a"},{correct:"Změna stránkové tabulky může způsobit zneplatnění TLB, což zpomaluje výkon.",incorrect:"Změna stránkové tabulky nemá žádný vliv na výkon systému.",uuid:"de41fb95-921b-4371-8ad9-c79a5733e6e5"}]}];function Hy(){return T.jsxs(T.Fragment,{children:[T.jsx("h2",{className:"text-xl",children:"Zkouška"}),T.jsx(Ko,{to:"/exam",children:T.jsx(nt,{className:"w-full",children:"Všechny části"})}),xr.map((e,n)=>T.jsx(Ko,{to:`/exam/${e.section}`,children:T.jsxs(nt,{variant:"outline",className:"w-full",children:["Část ",e.section,": ",e.name]},n)},n)),T.jsx("h2",{className:"text-xl",children:"Zápočet"}),T.jsx(Ko,{to:"/credit",children:T.jsx(nt,{className:"w-full",children:"Všechny části"})}),bo.map((e,n)=>T.jsx(Ko,{to:`/credit/${e.uuid}`,children:T.jsx(nt,{variant:"outline",className:"w-full",children:e.title},n)},n))]})}function Wy({uuid:e}){const n=bo.find(t=>t.uuid===e);return n?[n,null]:[null,new Error("Section not found")]}function Ky(){return[bo,null]}function Zy({uuid:e}){const n=bo.map(t=>t.statements).flat().find(t=>t.uuid===e);return n?[n,null]:[null,new Error("Statement not found")]}function Jy(){return[bo.map(n=>n.statements).flat(),null]}function Qy({count:e=5,sections:n}){const o=bo.filter(a=>n?n.includes(a.uuid):!0).map(a=>a.statements).flat();return o.length<e?[null,new Error("Not enough statements")]:[o.sort(()=>Math.random()-.5).slice(0,e),null]}const Ol={getSingleSection:Wy,getAllSections:Ky,getSingleStatement:Zy,getAllStatements:Jy,getRandomStatements:Qy};function Gy(e,n=[]){let t=[];function o(a,i){const l=h.createContext(i),s=t.length;t=[...t,i];function u(d){const{scope:p,children:b,...j}=d,z=(p==null?void 0:p[e][s])||l,S=h.useMemo(()=>j,Object.values(j));return h.createElement(z.Provider,{value:S},b)}function c(d,p){const b=(p==null?void 0:p[e][s])||l,j=h.useContext(b);if(j)return j;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${a}\``)}return u.displayName=a+"Provider",[u,c]}const r=()=>{const a=t.map(i=>h.createContext(i));return function(l){const s=(l==null?void 0:l[e])||a;return h.useMemo(()=>({[`__scope${e}`]:{...l,[e]:s}}),[l,s])}};return r.scopeName=e,[o,Xy(r,...n)]}function Xy(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const i=o.reduce((l,{useScope:s,scopeName:u})=>{const d=s(a)[`__scope${u}`];return{...l,...d}},{});return h.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return t.scopeName=n.scopeName,t}function Mc(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e==null||e(r),t===!1||!r.defaultPrevented)return n==null?void 0:n(r)}}function jm(e){const n=h.useRef(e);return h.useEffect(()=>{n.current=e}),h.useMemo(()=>(...t)=>{var o;return(o=n.current)===null||o===void 0?void 0:o.call(n,...t)},[])}function Yy({prop:e,defaultProp:n,onChange:t=()=>{}}){const[o,r]=qy({defaultProp:n,onChange:t}),a=e!==void 0,i=a?e:o,l=jm(t),s=h.useCallback(u=>{if(a){const d=typeof u=="function"?u(e):u;d!==e&&l(d)}else r(u)},[a,e,r,l]);return[i,s]}function qy({defaultProp:e,onChange:n}){const t=h.useState(e),[o]=t,r=h.useRef(o),a=jm(n);return h.useEffect(()=>{r.current!==o&&(a(o),r.current=o)},[o,r,a]),t}function ez(e){const n=h.useRef({value:e,previous:e});return h.useMemo(()=>(n.current.value!==e&&(n.current.previous=n.current.value,n.current.value=e),n.current.previous),[e])}const Dl=globalThis!=null&&globalThis.document?h.useLayoutEffect:()=>{};function nz(e){const[n,t]=h.useState(void 0);return Dl(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const a=r[0];let i,l;if("borderBoxSize"in a){const s=a.borderBoxSize,u=Array.isArray(s)?s[0]:s;i=u.inlineSize,l=u.blockSize}else i=e.offsetWidth,l=e.offsetHeight;t({width:i,height:l})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else t(void 0)},[e]),n}function tz(e,n){return h.useReducer((t,o)=>{const r=n[t][o];return r??t},e)}const gm=e=>{const{present:n,children:t}=e,o=oz(n),r=typeof t=="function"?t({present:o.isPresent}):h.Children.only(t),a=Gp(o.ref,r.ref);return typeof t=="function"||o.isPresent?h.cloneElement(r,{ref:a}):null};gm.displayName="Presence";function oz(e){const[n,t]=h.useState(),o=h.useRef({}),r=h.useRef(e),a=h.useRef("none"),i=e?"mounted":"unmounted",[l,s]=tz(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return h.useEffect(()=>{const u=ea(o.current);a.current=l==="mounted"?u:"none"},[l]),Dl(()=>{const u=o.current,c=r.current;if(c!==e){const p=a.current,b=ea(u);e?s("MOUNT"):b==="none"||(u==null?void 0:u.display)==="none"?s("UNMOUNT"):s(c&&p!==b?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,s]),Dl(()=>{if(n){const u=d=>{const b=ea(o.current).includes(d.animationName);d.target===n&&b&&ni.flushSync(()=>s("ANIMATION_END"))},c=d=>{d.target===n&&(a.current=ea(o.current))};return n.addEventListener("animationstart",c),n.addEventListener("animationcancel",u),n.addEventListener("animationend",u),()=>{n.removeEventListener("animationstart",c),n.removeEventListener("animationcancel",u),n.removeEventListener("animationend",u)}}else s("ANIMATION_END")},[n,s]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:h.useCallback(u=>{u&&(o.current=getComputedStyle(u)),t(u)},[])}}function ea(e){return(e==null?void 0:e.animationName)||"none"}const rz=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],bm=rz.reduce((e,n)=>{const t=h.forwardRef((o,r)=>{const{asChild:a,...i}=o,l=a?_s:n;return h.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),h.createElement(l,mt({},i,{ref:r}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{}),wm="Checkbox",[az,Pz]=Gy(wm),[iz,lz]=az(wm),sz=h.forwardRef((e,n)=>{const{__scopeCheckbox:t,name:o,checked:r,defaultChecked:a,required:i,disabled:l,value:s="on",onCheckedChange:u,...c}=e,[d,p]=h.useState(null),b=Gp(n,k=>p(k)),j=h.useRef(!1),z=d?!!d.closest("form"):!0,[S=!1,v]=Yy({prop:r,defaultProp:a,onChange:u}),m=h.useRef(S);return h.useEffect(()=>{const k=d==null?void 0:d.form;if(k){const w=()=>v(m.current);return k.addEventListener("reset",w),()=>k.removeEventListener("reset",w)}},[d,v]),h.createElement(iz,{scope:t,state:S,disabled:l},h.createElement(bm.button,mt({type:"button",role:"checkbox","aria-checked":Ct(S)?"mixed":S,"aria-required":i,"data-state":xm(S),"data-disabled":l?"":void 0,disabled:l,value:s},c,{ref:b,onKeyDown:Mc(e.onKeyDown,k=>{k.key==="Enter"&&k.preventDefault()}),onClick:Mc(e.onClick,k=>{v(w=>Ct(w)?!0:!w),z&&(j.current=k.isPropagationStopped(),j.current||k.stopPropagation())})})),z&&h.createElement(dz,{control:d,bubbles:!j.current,name:o,value:s,checked:S,required:i,disabled:l,style:{transform:"translateX(-100%)"}}))}),uz="CheckboxIndicator",cz=h.forwardRef((e,n)=>{const{__scopeCheckbox:t,forceMount:o,...r}=e,a=lz(uz,t);return h.createElement(gm,{present:o||Ct(a.state)||a.state===!0},h.createElement(bm.span,mt({"data-state":xm(a.state),"data-disabled":a.disabled?"":void 0},r,{ref:n,style:{pointerEvents:"none",...e.style}})))}),dz=e=>{const{control:n,checked:t,bubbles:o=!0,...r}=e,a=h.useRef(null),i=ez(t),l=nz(n);return h.useEffect(()=>{const s=a.current,u=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(u,"checked").set;if(i!==t&&d){const p=new Event("click",{bubbles:o});s.indeterminate=Ct(t),d.call(s,Ct(t)?!1:t),s.dispatchEvent(p)}},[i,t,o]),h.createElement("input",mt({type:"checkbox","aria-hidden":!0,defaultChecked:Ct(t)?!1:t},r,{tabIndex:-1,ref:a,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function Ct(e){return e==="indeterminate"}function xm(e){return Ct(e)?"indeterminate":e?"checked":"unchecked"}const Sm=sz,pz=cz;/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mz=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pm=(...e)=>e.filter((n,t,o)=>!!n&&o.indexOf(n)===t).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vz={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kz=h.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:r="",children:a,iconNode:i,...l},s)=>h.createElement("svg",{ref:s,...vz,width:n,height:n,stroke:e,strokeWidth:o?Number(t)*24/Number(n):t,className:Pm("lucide",r),...l},[...i.map(([u,c])=>h.createElement(u,c)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=(e,n)=>{const t=h.forwardRef(({className:o,...r},a)=>h.createElement(kz,{ref:a,iconNode:n,className:Pm(`lucide-${mz(e)}`,o),...r}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=Em("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=Em("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$s=h.forwardRef(({className:e,...n},t)=>T.jsx(Sm,{ref:t,className:gr("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...n,children:T.jsx(pz,{className:gr("flex items-center justify-center text-current"),children:T.jsx(Us,{className:"h-4 w-4"})})}));$s.displayName=Sm.displayName;function Rm({title:e,correct:n,incorrect:t,refresh:o}){const[r,a]=h.useState(!1),[i,l]=h.useState(new Array(n.length+t.length).fill(!1)),s=h.useMemo(()=>(l(new Array(n.length+t.length).fill(!1)),ih([...n,...t])),[n,t]);return T.jsxs("div",{className:"flex flex-col gap-4",children:[T.jsx("h2",{className:"text-2xl",children:e}),T.jsx("div",{children:s.map((u,c)=>T.jsx(fz,{statement:u,type:n.find(d=>d.uuid==u.uuid)?"correct":"incorrect",submited:r,checked:i[c],onChange:d=>{const p=[...i];p[c]=d,l(p)}},lh(u.uuid)))}),T.jsx(nt,{className:"w-full",onClick:()=>{r?(a(!1),o()):a(!0)},children:r?"Další otázka":"Odeslat"})]})}function fz({statement:e,type:n,submited:t,checked:o,onChange:r}){const[a,i]=h.useState(n=="correct");return T.jsxs("div",{className:gr(["p-2 flex gap-2 items-center",t&&(n=="correct"?"bg-green-200":"bg-red-200"),t?"cursor-default":"cursor-pointer",t?n=="correct"?"hover:bg-green-300":"hover:bg-red-300":"hover:bg-gray-200"]),onClick:()=>{t||r(!o)},children:[T.jsx($s,{id:e.uuid,name:n,disabled:t,checked:o}),T.jsxs("div",{className:"flex-1",children:[T.jsx("p",{children:a?e.correct:e.incorrect}),t&&n=="incorrect"&&T.jsxs("div",{className:"flex items-center pt-2 gap-2 select-none",children:[T.jsx("p",{onMouseDown:()=>i(l=>!l),className:"font-bold underline italic cursor-pointer",children:a?"zobrazit nesprávnou":"zobrazit správnou"}),T.jsx("p",{className:"text-gray-600",children:a?"(Zobrazuje se správna odpověď)":"(Zobrazuje se nesprávna odpověď)"})]})]}),t&&o&&(n=="correct"?T.jsx("span",{children:T.jsx(Us,{className:"w-10 h-10"})}):T.jsx("span",{children:T.jsx(Cm,{className:"w-10 h-10"})}))]})}function hz(){const{sectionUUID:e}=fm(),[n,t]=h.useState(null),[o,r]=h.useState([]),[a,i]=h.useState([]);h.useEffect(()=>{if(!e){console.error("Section not found"),tt("/");return}const[s,u]=Ol.getSingleSection({uuid:e});if(u){console.error("Section not found"),tt("/");return}t(s)},[e]);const l=h.useCallback(()=>{if(!e){console.error("Section or name not found"),tt("/");return}const[s,u]=Ol.getRandomStatements({count:5,sections:[e]});if(u){console.error("Statements not found"),tt("/");return}r(s.slice(0,2)),i(s.slice(2,5))},[n]);return h.useEffect(()=>{l()},[l]),!o||!a||!n?null:T.jsx(Rm,{title:n==null?void 0:n.title,correct:o,incorrect:a,refresh:l})}function yz(){const[e,n]=h.useState([]),[t,o]=h.useState([]),r=h.useCallback(()=>{const[a,i]=Ol.getRandomStatements({count:5});if(i){console.error("Statements not found"),tt("/");return}n(a.slice(0,2)),o(a.slice(2,5))},[]);return h.useEffect(()=>{r()},[r]),!e||!t?null:T.jsx(Rm,{title:"Všechny části",correct:e,incorrect:t,refresh:r})}function Tm({facts:e,resetQuestion:n}){const[t,o]=h.useState([]),[r,a]=h.useState(!1);function i(){o([]),a(!1),n()}return T.jsxs(T.Fragment,{children:[e.map((l,s)=>T.jsxs("div",{className:gr(["p-2 flex gap-2 items-center",s!==0&&" border-t ",r&&(l.isCorrect?"bg-green-200":"bg-red-200"),r?"cursor-default":"cursor-pointer",r?l.isCorrect?"hover:bg-green-300":"hover:bg-red-300":"hover:bg-gray-200"]),onClick:()=>{r||(t.includes(l)?o(u=>u.filter(c=>c.fact!==l.fact)):o(u=>[...u,l]))},children:[T.jsx($s,{id:s+"-formCheckbox",name:"checkbox",className:"pointer-events-none",checked:t.includes(l),disabled:r}),T.jsx("div",{className:"flex-1",children:T.jsx(zz,{fact:l.fact,correct:l.correct,isSubmitted:r})}),r&&t.includes(l)&&(l.isCorrect?T.jsx("span",{className:"text-green-500",children:T.jsx(Us,{className:"w-10 h-10"})}):T.jsx("span",{className:"text-red-500",children:T.jsx(Cm,{className:"w-10 h-10"})}))]},s)),T.jsx(nt,{className:"w-full mt-4",onClick:()=>{if(r){i();return}a(!0)},children:r?"Další otázka":"Odeslat"})]})}function zz({fact:e,correct:n,isSubmitted:t}){const[o,r]=h.useState(!1);return T.jsxs(T.Fragment,{children:[T.jsx("p",{children:o?n:e}),t&&n&&T.jsxs("div",{className:"flex items-center pt-2 gap-2 select-none",children:[T.jsx("p",{onMouseDown:()=>r(!o),className:"font-bold underline italic cursor-pointer",children:o?"zobrazit nesprávnou":"zobrazit správnou"}),T.jsx("p",{className:"text-gray-600",children:o?"(Zobrazuje se správna odpověď)":"(Zobrazuje se nesprávna odpověď)"})]})]})}function jz({section:e,name:n}){switch(!0){case!e:return xr.find(t=>t.name===n)??null;case!n:return xr.find(t=>t.section===e)??null;default:return null}}function gz(){return{section:-1,name:"All parts",correct:xr.flatMap(e=>e.correct),incorrect:xr.flatMap(e=>e.incorrect)}}function bz(e){if(e.correct.length!==e.incorrect.length)throw new Error("Correct and incorrect arrays must have the same length");const n=e.correct.length,t=new Array(5).fill(()=>Math.floor(Math.random()*n)),o=2,r=3,a=[];for(let i=0;i<o;i++){const l=t[i]();a.push({fact:e.correct[l],isCorrect:!0,correct:null})}for(let i=0;i<r;i++){const l=t[i+o]();a.push({fact:e.incorrect[l],isCorrect:!1,correct:e.correct[l]})}for(let i=a.length-1;i>0;i--){const l=Math.floor(Math.random()*(i+1)),s=a[i];a[i]=a[l],a[l]=s}return a}const or={getDrillSingle:jz,getDrillMany:gz,getCorrectIncorrect:bz};function wz(){var r;const{section:e}=fm(),[n,t]=h.useState(null),o=h.useCallback(()=>{if(!e){console.error("Section or name not found"),tt("/");return}const a=or.getDrillSingle({section:parseInt(e)});if(!a){console.error("Drill not found"),tt("/");return}t(or.getCorrectIncorrect(a))},[e]);return h.useEffect(()=>{o()},[o]),n?T.jsxs(T.Fragment,{children:[T.jsxs("h2",{className:"text-xl",children:["Část: ",e,":"," ",e?((r=or.getDrillSingle({section:parseInt(e)}))==null?void 0:r.name)??"":""]}),T.jsx("div",{children:T.jsx(Tm,{facts:n,resetQuestion:o})})]}):null}function xz(){const[e,n]=h.useState(null),t=h.useCallback(()=>{const o=or.getDrillMany();if(!o)return console.error("Drill not found"),tt("/"),null;n(or.getCorrectIncorrect(o))},[]);return h.useEffect(()=>{t()},[t]),e?T.jsxs(T.Fragment,{children:[T.jsx("h2",{className:"text-xl",children:"Všechny části"}),T.jsx("div",{children:T.jsx(Tm,{facts:e,resetQuestion:t})})]}):null}const Sz=Ry([{path:"/",element:T.jsx(By,{}),children:[{path:"",element:T.jsx(Hy,{})},{path:"exam/:section",element:T.jsx(wz,{})},{path:"exam",element:T.jsx(xz,{})},{path:"credit",element:T.jsx(yz,{})},{path:"credit/:sectionUUID",element:T.jsx(hz,{})}]}],{basename:"/"});Di.createRoot(document.getElementById("root")).render(T.jsx(Kc.StrictMode,{children:T.jsx(Ay,{router:Sz})}));
