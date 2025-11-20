"use strict";(self["webpackChunkhomefilmtv"]=self["webpackChunkhomefilmtv"]||[]).push([[504],{34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},81:function(t,e,n){var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw new c(o(t)+" is not iterable")}},116:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("find",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{find:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,function(e,r){if(t(e,n++))return r(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},144:function(t,e,n){n.d(e,{C4:function(){return C},EW:function(){return Kt},Gc:function(){return bt},IG:function(){return kt},IJ:function(){return xt},KR:function(){return Dt},Kh:function(){return wt},Pr:function(){return Ut},QW:function(){return Vt},R1:function(){return Lt},Tm:function(){return It},X2:function(){return h},a1:function(){return Ot},bl:function(){return A},fE:function(){return St},g8:function(){return Tt},hV:function(){return Qt},hZ:function(){return U},i9:function(){return Nt},jr:function(){return u},ju:function(){return Ct},lJ:function(){return Rt},o5:function(){return c},qA:function(){return B},u4:function(){return F},uY:function(){return a},ux:function(){return At},wB:function(){return Wt},yC:function(){return o}});n(1454),n(8992),n(3949),n(4520),n(7550);var r=n(4232);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){1===++this._on&&(this.prevScope=i,i=this)}off(){this._on>0&&0===--this._on&&(i=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(t){return new o(t)}function c(){return i}function u(t,e=!1){i&&i.cleanups.push(t)}const l=new WeakSet;class h{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,l.has(this)&&(l.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||g(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,k(this),v(this);const t=s,e=I;s=this,I=!0;try{return this.fn()}finally{0,w(this),s=t,I=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)E(t);this.deps=this.depsTail=void 0,k(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){b(this)&&this.run()}get dirty(){return b(this)}}let f,d,p=0;function g(t,e=!1){if(t.flags|=8,e)return t.next=d,void(d=t);t.next=f,f=t}function m(){p++}function y(){if(--p>0)return;if(d){let t=d;d=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(f){let n=f;f=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function v(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function w(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),E(r),T(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function b(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===R)return;if(t.globalVersion=R,!t.isSSR&&128&t.flags&&(!t.deps&&!t._dirty||!b(t)))return;t.flags|=2;const e=t.dep,n=s,i=I;s=t,I=!0;try{v(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,I=i,w(t),t.flags&=-3}}function E(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)E(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function T(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let I=!0;const S=[];function C(){S.push(I),I=!1}function A(){const t=S.pop();I=void 0===t||t}function k(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let R=0;class O{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class N{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!s||!I||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new O(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,D(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,R++,this.notify(t)}notify(t){m();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{y()}}}function D(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)D(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const x=new WeakMap,P=Symbol(""),M=Symbol(""),L=Symbol("");function F(t,e,n){if(I&&s){let e=x.get(t);e||x.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new N),r.map=e,r.key=n),r.track()}}function U(t,e,n,i,s,o){const a=x.get(t);if(!a)return void R++;const c=t=>{t&&t.trigger()};if(m(),"clear"===e)a.forEach(c);else{const s=(0,r.cy)(t),o=s&&(0,r.yI)(n);if(s&&"length"===n){const t=Number(i);a.forEach((e,n)=>{("length"===n||n===L||!(0,r.Bm)(n)&&n>=t)&&c(e)})}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(L)),e){case"add":s?o&&c(a.get("length")):(c(a.get(P)),(0,r.CE)(t)&&c(a.get(M)));break;case"delete":s||(c(a.get(P)),(0,r.CE)(t)&&c(a.get(M)));break;case"set":(0,r.CE)(t)&&c(a.get(P));break}}y()}function V(t,e){const n=x.get(t);return n&&n.get(e)}function j(t){const e=At(t);return e===t?e:(F(e,"iterate",L),St(t)?e:e.map(Rt))}function B(t){return F(t=At(t),"iterate",L),t}const $={__proto__:null,[Symbol.iterator](){return K(this,Symbol.iterator,Rt)},concat(...t){return j(this).concat(...t.map(t=>(0,r.cy)(t)?j(t):t))},entries(){return K(this,"entries",t=>(t[1]=Rt(t[1]),t))},every(t,e){return G(this,"every",t,e,void 0,arguments)},filter(t,e){return G(this,"filter",t,e,t=>t.map(Rt),arguments)},find(t,e){return G(this,"find",t,e,Rt,arguments)},findIndex(t,e){return G(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return G(this,"findLast",t,e,Rt,arguments)},findLastIndex(t,e){return G(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return G(this,"forEach",t,e,void 0,arguments)},includes(...t){return H(this,"includes",t)},indexOf(...t){return H(this,"indexOf",t)},join(t){return j(this).join(t)},lastIndexOf(...t){return H(this,"lastIndexOf",t)},map(t,e){return G(this,"map",t,e,void 0,arguments)},pop(){return W(this,"pop")},push(...t){return W(this,"push",t)},reduce(t,...e){return q(this,"reduce",t,e)},reduceRight(t,...e){return q(this,"reduceRight",t,e)},shift(){return W(this,"shift")},some(t,e){return G(this,"some",t,e,void 0,arguments)},splice(...t){return W(this,"splice",t)},toReversed(){return j(this).toReversed()},toSorted(t){return j(this).toSorted(t)},toSpliced(...t){return j(this).toSpliced(...t)},unshift(...t){return W(this,"unshift",t)},values(){return K(this,"values",Rt)}};function K(t,e,n){const r=B(t),i=r[e]();return r===t||St(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.done||(t.value=n(t.value)),t}),i}const z=Array.prototype;function G(t,e,n,r,i,s){const o=B(t),a=o!==t&&!St(t),c=o[e];if(c!==z[e]){const e=c.apply(t,s);return a?Rt(e):e}let u=n;o!==t&&(a?u=function(e,r){return n.call(this,Rt(e),r,t)}:n.length>2&&(u=function(e,r){return n.call(this,e,r,t)}));const l=c.call(o,u,r);return a&&i?i(l):l}function q(t,e,n,r){const i=B(t);let s=n;return i!==t&&(St(t)?n.length>3&&(s=function(e,r,i){return n.call(this,e,r,i,t)}):s=function(e,r,i){return n.call(this,e,Rt(r),i,t)}),i[e](s,...r)}function H(t,e,n){const r=At(t);F(r,"iterate",L);const i=r[e](...n);return-1!==i&&!1!==i||!Ct(n[0])?i:(n[0]=At(n[0]),r[e](...n))}function W(t,e,n=[]){C(),m();const r=At(t)[e].apply(t,n);return y(),A(),r}const Q=(0,r.pD)("__proto__,__v_isRef,__isVue"),X=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>"arguments"!==t&&"caller"!==t).map(t=>Symbol[t]).filter(r.Bm));function Y(t){(0,r.Bm)(t)||(t=String(t));const e=At(this);return F(e,"has",t),e.hasOwnProperty(t)}class J{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?mt:gt:s?pt:dt).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){let t;if(o&&(t=$[e]))return t;if("hasOwnProperty"===e)return Y}const a=Reflect.get(t,e,Nt(t)?t:n);if((0,r.Bm)(e)?X.has(e):Q(e))return a;if(i||F(t,"get",e),s)return a;if(Nt(a)){const t=o&&(0,r.yI)(e)?a:a.value;return i&&(0,r.Gv)(t)?_t(t):t}return(0,r.Gv)(a)?i?_t(a):wt(a):a}}class Z extends J{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._isShallow){const e=It(s);if(St(n)||It(n)||(s=At(s),n=At(n)),!(0,r.cy)(t)&&Nt(s)&&!Nt(n))return e||(s.value=n),!0}const o=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,Nt(t)?t:i);return t===At(i)&&(o?(0,r.$H)(n,s)&&U(t,"set",e,n,s):U(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&U(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&X.has(e)||F(t,"has",e),n}ownKeys(t){return F(t,"iterate",(0,r.cy)(t)?"length":P),Reflect.ownKeys(t)}}class tt extends J{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const et=new Z,nt=new tt,rt=new Z(!0),it=t=>t,st=t=>Reflect.getPrototypeOf(t);function ot(t,e,n){return function(...i){const s=this["__v_raw"],o=At(s),a=(0,r.CE)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?it:e?Ot:Rt;return!e&&F(o,"iterate",u?M:P),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function ct(t,e){const n={get(n){const i=this["__v_raw"],s=At(i),o=At(n);t||((0,r.$H)(n,o)&&F(s,"get",n),F(s,"get",o));const{has:a}=st(s),c=e?it:t?Ot:Rt;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&F(At(e),"iterate",P),e.size},has(e){const n=this["__v_raw"],i=At(n),s=At(e);return t||((0,r.$H)(e,s)&&F(i,"has",e),F(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=At(s),a=e?it:t?Ot:Rt;return!t&&F(o,"iterate",P),s.forEach((t,e)=>n.call(r,a(t),a(e),i))}};(0,r.X$)(n,t?{add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear")}:{add(t){e||St(t)||It(t)||(t=At(t));const n=At(this),r=st(n),i=r.has.call(n,t);return i||(n.add(t),U(n,"add",t,t)),this},set(t,n){e||St(n)||It(n)||(n=At(n));const i=At(this),{has:s,get:o}=st(i);let a=s.call(i,t);a||(t=At(t),a=s.call(i,t));const c=o.call(i,t);return i.set(t,n),a?(0,r.$H)(n,c)&&U(i,"set",t,n,c):U(i,"add",t,n),this},delete(t){const e=At(this),{has:n,get:r}=st(e);let i=n.call(e,t);i||(t=At(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&U(e,"delete",t,void 0,s),o},clear(){const t=At(this),e=0!==t.size,n=void 0,r=t.clear();return e&&U(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach(r=>{n[r]=ot(r,t,e)}),n}function ut(t,e){const n=ct(t,e);return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const lt={get:ut(!1,!1)},ht={get:ut(!1,!0)},ft={get:ut(!0,!1)};const dt=new WeakMap,pt=new WeakMap,gt=new WeakMap,mt=new WeakMap;function yt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:yt((0,r.Zf)(t))}function wt(t){return It(t)?t:Et(t,!1,et,lt,dt)}function bt(t){return Et(t,!1,rt,ht,pt)}function _t(t){return Et(t,!0,nt,ft,gt)}function Et(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=vt(t);if(0===o)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,2===o?i:n);return s.set(t,c),c}function Tt(t){return It(t)?Tt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function It(t){return!(!t||!t["__v_isReadonly"])}function St(t){return!(!t||!t["__v_isShallow"])}function Ct(t){return!!t&&!!t["__v_raw"]}function At(t){const e=t&&t["__v_raw"];return e?At(e):t}function kt(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const Rt=t=>(0,r.Gv)(t)?wt(t):t,Ot=t=>(0,r.Gv)(t)?_t(t):t;function Nt(t){return!!t&&!0===t["__v_isRef"]}function Dt(t){return Pt(t,!1)}function xt(t){return Pt(t,!0)}function Pt(t,e){return Nt(t)?t:new Mt(t,e)}class Mt{constructor(t,e){this.dep=new N,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:At(t),this._value=e?t:Rt(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||St(t)||It(t);t=n?t:At(t),(0,r.$H)(t,e)&&(this._rawValue=t,this._value=n?t:Rt(t),this.dep.trigger())}}function Lt(t){return Nt(t)?t.value:t}const Ft={get:(t,e,n)=>"__v_raw"===e?t:Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Nt(i)&&!Nt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ut(t){return Tt(t)?t:new Proxy(t,Ft)}function Vt(t){const e=(0,r.cy)(t)?new Array(t.length):{};for(const n in t)e[n]=Bt(t,n);return e}class jt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this["__v_isRef"]=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return V(At(this._object),this._key)}}function Bt(t,e,n){const r=t[e];return Nt(r)?r:new jt(t,e,n)}class $t{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new N(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=R-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return g(this,!0),!0}get value(){const t=this.dep.track();return _(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Kt(t,e,n=!1){let i,s;(0,r.Tn)(t)?i=t:(i=t.get,s=t.set);const o=new $t(i,s,n);return o}const zt={},Gt=new WeakMap;let qt;function Ht(t,e=!1,n=qt){if(n){let e=Gt.get(n);e||Gt.set(n,e=[]),e.push(t)}else 0}function Wt(t,e,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:u,call:l}=n,f=t=>s?t:St(t)||!1===s||0===s?Qt(t,1):Qt(t);let d,p,g,m,y=!1,v=!1;if(Nt(t)?(p=()=>t.value,y=St(t)):Tt(t)?(p=()=>f(t),y=!0):(0,r.cy)(t)?(v=!0,y=t.some(t=>Tt(t)||St(t)),p=()=>t.map(t=>Nt(t)?t.value:Tt(t)?f(t):(0,r.Tn)(t)?l?l(t,2):t():void 0)):p=(0,r.Tn)(t)?e?l?()=>l(t,2):t:()=>{if(g){C();try{g()}finally{A()}}const e=qt;qt=d;try{return l?l(t,3,[m]):t(m)}finally{qt=e}}:r.tE,e&&s){const t=p,e=!0===s?1/0:s;p=()=>Qt(t(),e)}const w=c(),b=()=>{d.stop(),w&&w.active&&(0,r.TF)(w.effects,d)};if(o&&e){const t=e;e=(...e)=>{t(...e),b()}}let _=v?new Array(t.length).fill(zt):zt;const E=t=>{if(1&d.flags&&(d.dirty||t))if(e){const t=d.run();if(s||y||(v?t.some((t,e)=>(0,r.$H)(t,_[e])):(0,r.$H)(t,_))){g&&g();const n=qt;qt=d;try{const n=[t,_===zt?void 0:v&&_[0]===zt?[]:_,m];_=t,l?l(e,3,n):e(...n)}finally{qt=n}}}else d.run()};return u&&u(E),d=new h(p),d.scheduler=a?()=>a(E,!1):E,m=t=>Ht(t,!1,d),g=d.onStop=()=>{const t=Gt.get(d);if(t){if(l)l(t,4);else for(const e of t)e();Gt.delete(d)}},e?i?E(!0):_=d.run():a?a(E.bind(null,!0),!0):d.run(),b.pause=d.pause.bind(d),b.resume=d.resume.bind(d),b.stop=b,b}function Qt(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Map,(n.get(t)||0)>=e)return t;if(n.set(t,e),e--,Nt(t))Qt(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)Qt(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach(t=>{Qt(t,e,n)});else if((0,r.Qd)(t)){for(const r in t)Qt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qt(t[r],e,n)}return t}},283:function(t,e,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i(function(){return 8!==p(function(){},"length",{value:8}).length}),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=y(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b(function(){return s(this)&&f(this).source||u(this)},"toString")},350:function(t,e,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},393:function(t,e,n){n.d(e,{eJ:function(){return Se},xI:function(){return Ur},hg:function(){return Re},x9:function(){return Ce},CI:function(){return Oe}});n(8992),n(4520),n(7550),n(1454),n(2577),n(3949),n(8872);var r=n(4046),i=n(1776);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var o=n(1363),a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function f(t,...e){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${i.MF}): ${t}`,...e)}function d(t,...e){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${i.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw y(t,...e)}function g(t,...e){return y(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.FA("auth","Firebase",i);return s.create(e,{appName:t.name})}function y(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw y(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},O=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,s={}){return x(t,s,async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),k.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function x(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),e);try{const e=new L(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw F(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(s){if(s instanceof r.g)throw s;p(t,"network-request-failed",{message:String(s)})}}async function P(t,e,n,r,i={}){const s=await D(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?A(t.config,i):`${t.config.apiScheme}://${i}`}class L{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(g(this.auth,"network-request-failed")),O.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function V(t,e){return D(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e=!1){const n=(0,r.Ku)(t),i=await n.getIdToken(e),s=K(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:j($(s.auth_time)),issuedAtTime:j($(s.iat)),expirationTime:j($(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function $(t){return 1e3*Number(t)}function K(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.u)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function z(t){const e=K(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.g&&q(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function q({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await G(t,V(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?J(s.providerUserInfo):[],a=Y(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function X(t){const e=(0,r.Ku)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function J(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e){const n=await x(t,{},async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=M(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):z(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new tt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class nt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await G(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return B(this,t)}reload(){return X(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await G(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:T}=e;v(w&&T,t,"internal-error");const I=tt.fromJSON(this.name,T);v("string"===typeof w,t,"internal-error"),et(l,t.name),et(h,t.name),v("boolean"===typeof b,t,"internal-error"),v("boolean"===typeof _,t,"internal-error"),et(f,t.name),et(d,t.name),et(p,t.name),et(g,t.name),et(m,t.name),et(y,t.name);const S=new nt({uid:w,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map(t=>Object.assign({},t))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new tt;r.updateFromServerResponse(e);const i=new nt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Map;function it(t){b(t instanceof Function,"Expected a class definition");let e=rt.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rt.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const ot=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=at(this.userKey,r.apiKey,i),this.fullPersistenceKey=at("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(it(ot),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||it(ot);const s=at(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=nt._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(s)}catch(c){}})),new ct(i,t,n)):new ct(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(mt(e))return"Webos";if(ht(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(pt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function lt(t=(0,r.ZQ)()){return/firefox\//i.test(t)}function ht(t=(0,r.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.ZQ)()){return/crios\//i.test(t)}function dt(t=(0,r.ZQ)()){return/iemobile/i.test(t)}function pt(t=(0,r.ZQ)()){return/android/i.test(t)}function gt(t=(0,r.ZQ)()){return/blackberry/i.test(t)}function mt(t=(0,r.ZQ)()){return/webos/i.test(t)}function yt(t=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vt(t=(0,r.ZQ)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return(0,r.lT)()&&10===document.documentMode}function bt(t=(0,r.ZQ)()){return yt(t)||pt(t)||mt(t)||gt(t)||/windows phone/i.test(t)||dt(t)}function _t(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e=[]){let n;switch(t){case"Browser":n=ut((0,r.ZQ)());break;case"Worker":n=`${ut((0,r.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return D(t,"GET","/v2/recaptchaConfig",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return void 0!==t&&void 0!==t.enterprise}class St{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function At(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Ct().appendChild(r)})}function kt(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Rt="https://www.google.com/recaptcha/enterprise.js?render=",Ot="recaptcha-enterprise",Nt="NO_RECAPTCHA";class Dt{constructor(t){this.type=Ot,this.auth=Lt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise(async(e,n)=>{Tt(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new St(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(t=>{n(t)})})}function r(e,n,r){const i=window.grecaptcha;It(i)?i.enterprise.ready(()=>{i.enterprise.execute(e,{action:t}).then(t=>{n(t)}).catch(()=>{n(Nt)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((t,i)=>{n(this.auth).then(n=>{if(!e&&It(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));At(Rt+n).then(()=>{r(n,t,i)}).catch(t=>{i(t)})}}).catch(t=>{i(t)})})}}async function xt(t,e,n,r=!1){const i=new Dt(t);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}});n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ft(this),this.idTokenSubscription=new Ft(this),this.beforeStateQueue=new Pt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=it(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.Ku)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(t))})}async initializeRecaptchaConfig(){const t=await Tt(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new St(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){const t=new Dt(this);t.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&it(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[it(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Et(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&f(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Lt(t){return(0,r.Ku)(t)}class Ft{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.tD)(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){const n=(0,i.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function Vt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function jt(t,e,n){const r=Lt(t);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Bt(e),{host:o,port:a}=$t(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zt()}function Bt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $t(t){const e=Bt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Kt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Kt(e)}}}function Kt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ht(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}async function Qt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Gt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Xt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Xt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await xt(t,n,"signInWithPassword");return Ht(t,e)}return Ht(t,n).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await xt(t,n,"signInWithPassword");return Ht(t,e)}return Promise.reject(e)});case"emailLink":return Wt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return qt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="http://localhost";class Zt extends Gt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Zt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Yt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Yt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Yt(t,e)}buildRequest(){const t={requestUri:Jt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}async function ee(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}async function ne(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const re={["USER_NOT_FOUND"]:"user-not-found"};async function ie(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,n),re)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Gt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new se({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new se({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ee(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ne(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ie(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new se({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ae(t){const e=(0,r.I9)((0,r.hp)(t))["link"],n=e?(0,r.I9)((0,r.hp)(e))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(t))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||e||t}class ce{constructor(t){var e,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=oe(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ae(t);try{return new ce(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return Xt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ce.parseLink(e);return v(n,"argument-error"),Xt._fromEmailAndCode(t,n.code,n.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends le{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe extends he{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return fe.credential(t.oauthAccessToken)}catch(e){return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com",fe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de extends he{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Zt._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return de.credentialFromTaggedObject(t)}static credentialFromError(t){return de.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return de.credential(e,n)}catch(r){return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com",de.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends he{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pe.credential(t.oauthAccessToken)}catch(e){return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com",pe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends he{constructor(){super("twitter.com")}static credential(t,e){return Zt._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ge.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function me(t,e){return P(t,"POST","/v1/accounts:signUp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge.TWITTER_SIGN_IN_METHOD="twitter.com",ge.PROVIDER_ID="twitter.com";class ye{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await nt._fromIdTokenResponse(t,n,r),s=ve(n),o=new ye({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ve(n);return new ye({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ve(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends r.g{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,we.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new we(t,e,n,r)}}function be(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw we._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(t,e,n=!1){const r=await G(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ye._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ee(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await G(t,be(r,i,e,t),n);v(s.idToken,r,"internal-error");const o=K(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),ye._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(t,e,n=!1){const r="signIn",i=await be(t,r,e),s=await ye._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ie(t,e){return Te(Lt(t),e)}async function Se(t,e,n){var r;const i=Lt(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const t=await xt(i,s,"signUpPassword");o=me(i,t)}else o=me(i,s).catch(async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await xt(i,s,"signUpPassword");return me(i,t)}return Promise.reject(t)});const a=await o.catch(t=>Promise.reject(t)),c=await ye._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Ce(t,e,n){return Ie((0,r.Ku)(t),ue.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e,n,i){return(0,r.Ku)(t).onIdTokenChanged(e,n,i)}function ke(t,e,n){return(0,r.Ku)(t).beforeAuthStateChanged(e,n)}function Re(t,e,n,i){return(0,r.Ku)(t).onAuthStateChanged(e,n,i)}function Oe(t){return(0,r.Ku)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ne(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function De(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}function xe(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function Pe(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}new WeakMap;const Me="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Me,"1"),this.storage.removeItem(Me),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){const t=(0,r.ZQ)();return ht(t)||yt(t)}const Ue=1e3,Ve=10;class je extends Le{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fe()&&_t(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);wt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Ve):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},Ue)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}je.type="LOCAL";const Be=je;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Le{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}$e.type="SESSION";const Ke=$e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Ge(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async t=>t(e.origin,i)),a=await ze(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge.receivers=[];class He{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=qe("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return window}function Qe(t){We().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return"undefined"!==typeof We()["WorkerGlobalScope"]&&"function"===typeof We()["importScripts"]}async function Ye(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Je(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ze(){return Xe()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="firebaseLocalStorageDb",en=1,nn="firebaseLocalStorage",rn="fbase_key";class sn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function on(t,e){return t.transaction([nn],e?"readwrite":"readonly").objectStore(nn)}function an(){const t=indexedDB.deleteDatabase(tn);return new sn(t).toPromise()}function cn(){const t=indexedDB.open(tn,en);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(nn,{keyPath:rn})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(nn)?e(n):(n.close(),await an(),e(await cn()))})})}async function un(t,e,n){const r=on(t,!0).put({[rn]:e,value:n});return new sn(r).toPromise()}async function ln(t,e){const n=on(t,!1).get(e),r=await new sn(n).toPromise();return void 0===r?null:r.value}function hn(t,e){const n=on(t,!0).delete(e);return new sn(n).toPromise()}const fn=800,dn=3;class pn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await cn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>dn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ge._getInstance(Ze()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ye(),!this.activeServiceWorker)return;this.sender=new He(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Je()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await cn();return await un(t,Me,"1"),await hn(t,Me),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>un(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>ln(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>hn(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=on(t,!1).getAll();return new sn(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}pn.type="LOCAL";const gn=pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}function yn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}function vn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
kt("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn="recaptcha";async function bn(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===wn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await Ne(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await mn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await te(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n{constructor(t){this.providerId=_n.PROVIDER_ID,this.auth=Lt(t)}verifyPhoneNumber(t,e){return bn(this.auth,t,(0,r.Ku)(e))}static credential(t,e){return se._fromVerification(t,e)}static credentialFromResult(t){const e=t;return _n.credentialFromTaggedObject(e)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?se._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(t,e){return e?it(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.PROVIDER_ID="phone",_n.PHONE_SIGN_IN_METHOD="phone";class Tn extends Gt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Yt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Yt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Yt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function In(t){return Te(t.auth,new Tn(t),t.bypassAuthState)}function Sn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Ee(n,new Tn(t),t.bypassAuthState)}async function Cn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),_e(n,new Tn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return In;case"linkViaPopup":case"linkViaRedirect":return Cn;case"reauthViaPopup":case"reauthViaRedirect":return Sn;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new C(2e3,1e4);class Rn extends An{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=qe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(t,kn.get())};t()}}Rn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const On="pendingRedirect",Nn=new Map;class Dn extends An{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Nn.get(this.auth._key());if(!t){try{const e=await xn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Nn.set(this.auth._key(),t)}return this.bypassAuthState||Nn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function xn(t,e){const n=Ln(e),r=Mn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Pn(t,e){Nn.set(t._key(),e)}function Mn(t){return it(t._redirectPersistence)}function Ln(t){return at(On,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e,n=!1){const r=Lt(t),i=En(r,e),s=new Dn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un=6e5;class Vn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!$n(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Bn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Un&&this.cachedEventUids.clear(),this.cachedEventUids.has(jn(t))}saveEventToCache(t){this.cachedEventUids.add(jn(t)),this.lastProcessedEventTime=Date.now()}}function jn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function Bn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function $n(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t,e={}){return D(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gn=/^https?/;async function qn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kn(t);for(const r of e)try{if(Hn(r))return}catch(n){}p(t,"unauthorized-domain")}function Hn(t){const e=_(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Gn.test(n))return!1;if(zn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new C(3e4,6e4);function Qn(){const t=We().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Xn(t){return new Promise((e,n)=>{var r,i,s;function o(){Qn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qn(),n(g(t,"network-request-failed"))},timeout:Wn.get()})}if(null===(i=null===(r=We().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=We().gapi)||void 0===s?void 0:s.load)){const e=kt("iframefcb");return We()[e]=()=>{gapi.load?o():n(g(t,"network-request-failed"))},At(`https://apis.google.com/js/api.js?onload=${e}`).catch(t=>n(t))}o()}}).catch(t=>{throw Yn=null,t})}let Yn=null;function Jn(t){return Yn=Yn||Xn(t),Yn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new C(5e3,15e3),tr="__/auth/iframe",er="emulator/auth/iframe",nr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ir(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?A(e,er):`https://${t.config.authDomain}/${tr}`,s={apiKey:e.apiKey,appName:t.name,v:i.MF},o=rr.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function sr(t){const e=await Jn(t),n=We().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:ir(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nr,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),s=We().setTimeout(()=>{r(i)},Zn.get());function o(){We().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ar=500,cr=600,ur="_blank",lr="http://localhost";class hr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function fr(t,e,n,i=ar,s=cr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},or),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.ZQ)().toLowerCase();n&&(c=ft(l)?ur:n),lt(l)&&(e=e||lr,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(vt(l)&&"_self"!==c)return dr(e||"",c),new hr(null);const f=window.open(e||"",c,h);v(f,t,"popup-blocked");try{f.focus()}catch(d){}return new hr(f)}function dr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="__/auth/handler",gr="emulator/auth/handler",mr=encodeURIComponent("fac");async function yr(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(e instanceof le){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof he){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${mr}=${encodeURIComponent(l)}`:"";return`${vr(t)}?${(0,r.Am)(u).slice(1)}${h}`}function vr({config:t}){return t.emulator?A(t,gr):`https://${t.authDomain}/${pr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="webStorageSupport";class br{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ke,this._completeRedirectFn=Fn,this._overrideRedirectResult=Pn}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await yr(t,e,n,_(),r);return fr(t,s,qe())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await yr(t,e,n,_(),r);return Qe(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await sr(t),n=new Vn(t);return e.register("authEvent",e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(wr,{type:wr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[wr];void 0!==i&&e(!!i),p(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=qn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bt()||ht()||yt()}}const _r=br;class Er{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class Tr extends Er{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Tr(t)}_finalizeEnroll(t,e,n){return De(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return yn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ir{constructor(){}static assertion(t){return Tr._fromCredential(t)}}Ir.FACTOR_ID="phone";class Sr{static assertionForEnrollment(t,e){return Cr._fromSecret(t,e)}static assertionForSignIn(t,e){return Cr._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;v("undefined"!==typeof e.auth,"internal-error");const n=await xe(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return Ar._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}Sr.FACTOR_ID="totp";class Cr extends Er{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Cr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Cr(e,t)}async _finalizeEnroll(t,e,n){return v("undefined"!==typeof this.secret,t,"argument-error"),Pe(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){v(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return vn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ar{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Ar(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(kr(t)||kr(e))&&(r=!0),r&&(kr(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),kr(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function kr(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Rr="@firebase/auth",Or="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xr(t){(0,i.om)(new a.uA("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Et(t)},u=new Mt(r,i,s,c);return Vt(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),(0,i.om)(new a.uA("auth-internal",t=>{const e=Lt(t.getProvider("auth").getImmediate());return(t=>new Nr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(Rr,Or,Dr(t)),(0,i.KO)(Rr,Or,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=300,Mr=(0,r.XA)("authIdTokenMaxAge")||Pr;let Lr=null;const Fr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mr)return;const i=null===n||void 0===n?void 0:n.token;Lr!==i&&(Lr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ur(t=(0,i.Sx)()){const e=(0,i.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ut(t,{popupRedirectResolver:_r,persistence:[gn,Be,Ke]}),s=(0,r.XA)("authTokenSyncURL");if(s){const t=Fr(s);ke(n,t,()=>t(n.currentUser)),Ae(n,e=>t(e))}const o=(0,r.Tj)("auth");return o&&jt(n,`http://${o}`),n}xr("Browser")},397:function(t,e,n){var r=n(7751);t.exports=r("document","documentElement")},421:function(t){t.exports={}},595:function(t,e,n){n.d(e,{A:function(){return r}});n(1454);function r(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map(function(t){t(n)}),(r=t.get("*"))&&r.slice().map(function(t){t(e,n)})}}}},616:function(t,e,n){var r=n(9039);t.exports=!r(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},655:function(t,e,n){var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},679:function(t,e,n){var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},684:function(t){t.exports=function(t,e){var n="function"==typeof Iterator&&Iterator.prototype[t];if(n)try{n.call({next:null},e).next()}catch(r){return!0}}},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},757:function(t,e,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},851:function(t,e,n){var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!s(t))return i(t,c)||i(t,"@@iterator")||o[r(t)]}},852:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return i}});n(1454),n(8992),n(4520);var r=n(4046);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1072:function(t,e,n){var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},1108:function(t,e,n){var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},1148:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("every",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{every:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return!s(e,function(e,r){if(!t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1181:function(t,e,n){var r,i,s,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},s=function(t){return l(t,b)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},1241:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},1363:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return u}});n(8992),n(3949),n(4520),n(1454);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},1385:function(t,e,n){var r=n(9539);t.exports=function(t,e,n){for(var i=t.length-1;i>=0;i--)if(void 0!==t[i])try{n=r(t[i].iterator,e,n)}catch(s){e="throw",n=s}if("throw"===e)throw n;return n}},1454:function(t,e,n){n(1701)},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1701:function(t,e,n){var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(9539),h=n(684),f=n(4549),d=n(6395),p=!d&&!h("map",function(){}),g=!d&&!p&&f("map",TypeError),m=d||p||g,y=c(function(){var t=this.iterator,e=o(i(this.next,t)),n=this.done=!!e.done;if(!n)return u(t,this.mapper,[e.value,this.counter++],!0)});r({target:"Iterator",proto:!0,real:!0,forced:m},{map:function(t){o(this);try{s(t)}catch(e){l(this,"throw",e)}return g?i(g,this,t):new y(a(this),{mapper:t})}})},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},1776:function(t,e,n){n.d(e,{MF:function(){return gt},j6:function(){return ht},om:function(){return lt},Sx:function(){return yt},Wp:function(){return mt},KO:function(){return vt}});n(8992),n(4520),n(1454),n(7550),n(2577);var r=n(852),i=n(1363),s=n(4046);n(4979);const o=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}w(t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",D="0.9.13",x=new i.Vy("@firebase/app"),P="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",K="@firebase/functions",z="@firebase/functions-compat",G="@firebase/installations",q="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.23.0",st="[DEFAULT]",ot={[N]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[K]:"fire-fn",[z]:"fire-fn-compat",[G]:"fire-iid",[q]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){x.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return x.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new s.FA("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw dt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw dt.create("no-options");const a=at.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw dt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(o,u),u}function yt(t=st){const e=at.get(t);if(!e&&t===st&&(0,s.T9)())return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void x.warn(t.join(" "))}lt(new r.uA(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",bt=1,_t="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=I(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch(t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})})),Et}async function It(t){try{const e=await Tt(),n=await e.transaction(_t).objectStore(_t).get(Ct(t));return n}catch(e){if(e instanceof s.g)x.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});x.warn(t.message)}}}async function St(t,e){try{const n=await Tt(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);await i.put(e,Ct(t)),await r.done}catch(n){if(n instanceof s.g)x.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(t.message)}}}function Ct(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,kt=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ot(),{heartbeatsToSend:e,unsentEntries:n}=Nt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=At){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),xt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function xt(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){lt(new r.uA("platform-logger",t=>new R(t),"PRIVATE")),lt(new r.uA("heartbeat",t=>new Rt(t),"PRIVATE")),vt(N,D,t),vt(N,D,"esm2017"),vt("fire-js","")}Pt("")},1795:function(t,e,n){n(1806)},1806:function(t,e,n){var r=n(6518),i=n(8551),s=n(2652),o=n(1767),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return s(o(i(this)),a,{that:t,IS_RECORD:!0}),t}})},1828:function(t,e,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},2106:function(t,e,n){var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},2140:function(t,e,n){var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},2195:function(t,e,n){var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},2211:function(t,e,n){var r=n(9039);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},2261:function(t,e,n){n.d(e,{Ey:function(){return T},nY:function(){return F}});n(1454),n(8992),n(4520),n(8872),n(3949);var r=n(6768),i=n(144);
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const s="undefined"!==typeof window;let o;const a=t=>o=t,c=Symbol();function u(t){return t&&"object"===typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!==typeof t.toJSON}var l;(function(t){t["direct"]="direct",t["patchObject"]="patch object",t["patchFunction"]="patch function"})(l||(l={}));const h=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function f(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function d(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){v(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function p(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(n){}return e.status>=200&&e.status<=299}function g(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});t.dispatchEvent(n)}}const m="object"===typeof navigator?navigator:{userAgent:""},y=(()=>/Macintosh/.test(m.userAgent)&&/AppleWebKit/.test(m.userAgent)&&!/Safari/.test(m.userAgent))(),v=s?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!y?w:"msSaveOrOpenBlob"in m?b:_:()=>{};function w(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener","string"===typeof t?(r.href=t,r.origin!==location.origin?p(r.href)?d(t,e,n):(r.target="_blank",g(r)):g(r)):(r.href=URL.createObjectURL(t),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){g(r)},0))}function b(t,e="download",n){if("string"===typeof t)if(p(t))d(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout(function(){g(e)})}else navigator.msSaveOrOpenBlob(f(t,n),e)}function _(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof t)return d(t,e,n);const i="application/octet-stream"===t.type,s=/constructor/i.test(String(h.HTMLElement))||"safari"in h,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s||y)&&"undefined"!==typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!==typeof t)throw r=null,new Error("Wrong reader.result type");t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location.assign(t),r=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);r?r.location.assign(e):location.href=e,r=null,setTimeout(function(){URL.revokeObjectURL(e)},4e4)}}const{assign:E}=Object;function T(){const t=(0,i.uY)(!0),e=t.run(()=>(0,i.KR)({}));let n=[],r=[];const s=(0,i.IG)({install(t){a(s),s._a=t,t.provide(c,s),t.config.globalProperties.$pinia=s,r.forEach(t=>n.push(t)),r=[]},use(t){return this._a?n.push(t):r.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const I=()=>{};function S(t,e,n,r=I){t.add(e);const s=()=>{const n=t.delete(e);n&&r()};return!n&&(0,i.o5)()&&(0,i.jr)(s),s}function C(t,...e){t.forEach(t=>{t(...e)})}const A=t=>t(),k=Symbol(),R=Symbol();function O(t,e){t instanceof Map&&e instanceof Map?e.forEach((e,n)=>t.set(n,e)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];u(s)&&u(r)&&t.hasOwnProperty(n)&&!(0,i.i9)(r)&&!(0,i.g8)(r)?t[n]=O(s,r):t[n]=r}return t}const N=Symbol();function D(t){return!u(t)||!Object.prototype.hasOwnProperty.call(t,N)}const{assign:x}=Object;function P(t){return!(!(0,i.i9)(t)||!t.effect)}function M(t,e,n,s){const{state:o,actions:c,getters:u}=e,l=n.state.value[t];let h;function f(){l||(n.state.value[t]=o?o():{});const e=(0,i.QW)(n.state.value[t]);return x(e,c,Object.keys(u||{}).reduce((e,s)=>(e[s]=(0,i.IG)((0,r.EW)(()=>{a(n);const e=n._s.get(t);return u[s].call(e,e)})),e),{}))}return h=L(t,f,e,n,s,!0),h}function L(t,e,n={},s,o,c){let u;const h=x({actions:{}},n);const f={deep:!0};let d,p;let g,m=new Set,y=new Set;const v=s.state.value[t];c||v||(s.state.value[t]={});(0,i.KR)({});let w;function b(e){let n;d=p=!1,"function"===typeof e?(e(s.state.value[t]),n={type:l.patchFunction,storeId:t,events:g}):(O(s.state.value[t],e),n={type:l.patchObject,payload:e,storeId:t,events:g});const i=w=Symbol();(0,r.dY)().then(()=>{w===i&&(d=!0)}),p=!0,C(m,n,s.state.value[t])}const _=c?function(){const{state:t}=n,e=t?t():{};this.$patch(t=>{x(t,e)})}:I;function E(){u.stop(),m.clear(),y.clear(),s._s.delete(t)}const T=(e,n="")=>{if(k in e)return e[R]=n,e;const r=function(){a(s);const n=Array.from(arguments),i=new Set,o=new Set;function c(t){i.add(t)}function u(t){o.add(t)}let l;C(y,{args:n,name:r[R],store:M,after:c,onError:u});try{l=e.apply(this&&this.$id===t?this:M,n)}catch(h){throw C(o,h),h}return l instanceof Promise?l.then(t=>(C(i,t),t)).catch(t=>(C(o,t),Promise.reject(t))):(C(i,l),l)};return r[k]=!0,r[R]=n,r},N={_p:s,$id:t,$onAction:S.bind(null,y),$patch:b,$reset:_,$subscribe(e,n={}){const i=S(m,e,n.detached,()=>o()),o=u.run(()=>(0,r.wB)(()=>s.state.value[t],r=>{("sync"===n.flush?p:d)&&e({storeId:t,type:l.direct,events:g},r)},x({},f,n)));return i},$dispose:E},M=(0,i.Kh)(N);s._s.set(t,M);const L=s._a&&s._a.runWithContext||A,F=L(()=>s._e.run(()=>(u=(0,i.uY)()).run(()=>e({action:T}))));for(const r in F){const e=F[r];if((0,i.i9)(e)&&!P(e)||(0,i.g8)(e))c||(v&&D(e)&&((0,i.i9)(e)?e.value=v[r]:O(e,v[r])),s.state.value[t][r]=e);else if("function"===typeof e){const t=T(e,r);F[r]=t,h.actions[r]=e}else 0}return x(M,F),x((0,i.ux)(M),F),Object.defineProperty(M,"$state",{get:()=>s.state.value[t],set:t=>{b(e=>{x(e,t)})}}),s._p.forEach(t=>{x(M,u.run(()=>t({store:M,app:s._a,pinia:s,options:h})))}),v&&c&&n.hydrate&&n.hydrate(M.$state,v),d=!0,p=!0,M}
/*! #__NO_SIDE_EFFECTS__ */function F(t,e,n){let i;const s="function"===typeof e;function u(n,u){const l=(0,r.PS)();n=n||(l?(0,r.WQ)(c,null):null),n&&a(n),n=o,n._s.has(t)||(s?L(t,e,i,n):M(t,i,n));const h=n._s.get(t);return h}return i=s?n:e,u.$id=t,u}},2360:function(t,e,n){var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=o.length;while(t--)delete b[d][o[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=b(),void 0===e?n:s.f(n,e)}},2489:function(t,e,n){var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=n(9539),f=n(684),d=n(4549),p=!l&&!f("filter",function(){}),g=!l&&!p&&d("filter",TypeError),m=l||p||g,y=c(function(){var t,e,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(t=o(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,s,[n,this.counter++],!0))return n}});r({target:"Iterator",proto:!0,real:!0,forced:m},{filter:function(t){o(this);try{s(t)}catch(e){h(this,"throw",e)}return g?i(g,this,t):new y(a(this),{predicate:t})}})},2529:function(t){t.exports=function(t,e){return{value:t,done:e}}},2577:function(t,e,n){n(116)},2603:function(t,e,n){var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2652:function(t,e,n){var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,y,v,w,b,_,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),C=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),k=r(e,T),R=function(t){return m&&f(m,"normal"),new p(!0,t)},O=function(t){return I?(s(t),A?k(t[0],t[1],R):k(t[0],t[1])):A?k(t,R):k(t)};if(S)m=t.iterator;else if(C)m=t;else{if(y=h(t),!y)throw new d(o(t)+" is not iterable");if(a(y)){for(v=0,w=c(t);w>v;v++)if(b=O(t[v]),b&&u(g,b))return b;return new p(!1)}m=l(t,y)}_=S?t.next:m.next;while(!(E=i(_,m)).done){try{b=O(E.value)}catch(N){f(m,"throw",N)}if("object"==typeof b&&b&&u(g,b))return b}return new p(!1)}},2777:function(t,e,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},2787:function(t,e,n){var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},2796:function(t,e,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},2839:function(t,e,n){var r=n(4576),i=r.navigator,s=i&&i.userAgent;t.exports=s?String(s):""},2967:function(t,e,n){var r=n(6706),i=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},3167:function(t,e,n){var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3215:function(t,e,n){n(1148)},3392:function(t,e,n){var r=n(9504),i=0,s=Math.random(),o=r(1.1.toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3506:function(t,e,n){var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},3579:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("some",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{some:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,function(e,r){if(t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},3706:function(t,e,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},3717:function(t,e){e.f=Object.getOwnPropertySymbols},3724:function(t,e,n){var r=n(9039);t.exports=!r(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})},3925:function(t,e,n){var r=n(34);t.exports=function(t){return r(t)||null===t}},3949:function(t,e,n){n(7588)},4046:function(t,e,n){n.d(e,{Am:function(){return U},FA:function(){return D},Fy:function(){return b},I9:function(){return V},Im:function(){return M},Ku:function(){return G},T9:function(){return y},Tj:function(){return g},Uj:function(){return c},XA:function(){return v},ZQ:function(){return _},bD:function(){return L},cY:function(){return w},eX:function(){return R},g:function(){return N},hp:function(){return j},jZ:function(){return E},lT:function(){return C},lV:function(){return S},nr:function(){return A},sr:function(){return I},tD:function(){return B},u:function(){return u},yU:function(){return m},zW:function(){return k}});n(4979),n(8992),n(3949);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/hometv/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},v=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function T(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function I(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const t=_();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function A(){return!T()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){try{return"object"===typeof indexedDB}catch(t){return!1}}function R(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class N extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=O,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new N(r,o,n);return a}}function x(t,e){return t.replace(P,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function L(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(F(n)&&F(s)){if(!L(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function V(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function j(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){const n=new $(t,e);return n.subscribe.bind(n)}class ${constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=K(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t){return t&&t._delegate?t._delegate:t}},4055:function(t,e,n){var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},4082:function(t,e,n){n(9577)},4117:function(t){t.exports=function(t){return null===t||void 0===t}},4209:function(t,e,n){var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},4232:function(t,e,n){n.d(e,{$3:function(){return d},$H:function(){return F},BH:function(){return G},BX:function(){return nt},Bm:function(){return _},C4:function(){return Y},CE:function(){return g},CP:function(){return u},DY:function(){return U},Gv:function(){return E},J$:function(){return Z},Kg:function(){return b},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return D},Qd:function(){return A},Ro:function(){return B},SU:function(){return R},TF:function(){return h},Tg:function(){return P},Tn:function(){return w},Tr:function(){return q},We:function(){return K},X$:function(){return l},Y2:function(){return tt},ZH:function(){return M},Zf:function(){return C},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return L},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return st},yI:function(){return k},yL:function(){return T},yQ:function(){return V}});n(8992),n(4520),n(3949),n(8872),n(1454);
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),y=t=>"[object Date]"===S(t),v=t=>"[object RegExp]"===S(t),w=t=>"function"===typeof t,b=t=>"string"===typeof t,_=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||w(t))&&w(t.then)&&w(t.catch),I=Object.prototype.toString,S=t=>I.call(t),C=t=>S(t).slice(8,-1),A=t=>"[object Object]"===S(t),k=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-\w/g,D=O(t=>t.replace(N,t=>t.slice(1).toUpperCase())),x=/\B([A-Z])/g,P=O(t=>t.replace(x,"-$1").toLowerCase()),M=O(t=>t.charAt(0).toUpperCase()+t.slice(1)),L=O(t=>{const e=t?`on${M(t)}`:"";return e}),F=(t,e)=>!Object.is(t,e),U=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},V=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const K=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",G=r(z);function q(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=b(r)?X(r):q(r);if(i)for(const t in i)e[t]=i[t]}return e}if(b(t)||E(t))return t}const H=/;(?![^(]*\))/g,W=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(H).forEach(t=>{if(t){const n=t.split(W);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Y(t){let e="";if(b(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=_(t),r=_(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex(t=>nt(t,e))}const it=t=>!(!t||!0!==t["__v_isRef"]),st=t=>b(t)?t:null==t?"":p(t)||E(t)&&(t.toString===I||!w(t.toString))?it(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>it(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>at(t))}:_(e)?at(e):!E(e)||p(e)||A(e)?e:String(e),at=(t,e="")=>{var n;return _(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},4270:function(t,e,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},4458:function(t,e,n){n.d(e,{k:function(){return s}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var s=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then(function(){i()?(c(t,s,n),navigator.serviceWorker.ready.then(function(t){s("ready",t)}).catch(function(t){return o(s,t)})):(a(t,s,n),navigator.serviceWorker.ready.then(function(t){s("ready",t)}).catch(function(t){return o(s,t)}))})}function o(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then(function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}}).catch(function(t){return o(e,t)})}function c(t,e,n){fetch(t).then(function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(t,e,n)}).catch(function(t){return o(e,t)})}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return o(emit,t)})}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise(function(t){return window.addEventListener("load",t)}):{then:function(t){return window.addEventListener("load",t)}})},4495:function(t,e,n){var r=n(9519),i=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},4520:function(t,e,n){n(2489)},4549:function(t,e,n){var r=n(4576);t.exports=function(t,e){var n=r.Iterator,i=n&&n.prototype,s=i&&i[t],o=!1;if(s)try{s.call({next:function(){return{done:!0}},return:function(){o=!0}},-1)}catch(a){a instanceof e||(o=!1)}if(!o)return s}},4576:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},4644:function(t,e,n){var r,i,s,o=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),y=n(1625),v=n(2787),w=n(2967),b=n(8227),_=n(3392),E=n(1181),T=E.enforce,I=E.get,S=c.Int8Array,C=S&&S.prototype,A=c.Uint8ClampedArray,k=A&&A.prototype,R=S&&v(S),O=C&&v(C),N=Object.prototype,D=c.TypeError,x=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",L=o&&!!w&&"Opera"!==f(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(U,e)||h(V,e)},B=function(t){var e=v(t);if(l(e)){var n=I(e);return n&&h(n,M)?n[M]:B(e)}},$=function(t){if(!l(t))return!1;var e=f(t);return h(U,e)||h(V,e)},K=function(t){if($(t))return t;throw new D("Target is not a typed array")},z=function(t){if(u(t)&&(!w||y(R,t)))return t;throw new D(d(t)+" is not a typed array constructor")},G=function(t,e,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}O[t]&&!n||g(O,t,n?e:L&&C[t]||e,r)}},q=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in U)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(R[t]&&!n)return;try{return g(R,t,n?e:L&&R[t]||e)}catch(s){}}for(r in U)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in U)i=c[r],s=i&&i.prototype,s?T(s)[M]=i:L=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(T(s)[M]=i);if((!L||!u(R)||R===Function.prototype)&&(R=function(){throw new D("Incorrect invocation")},L))for(r in U)c[r]&&w(c[r],R);if((!L||!O||O===N)&&(O=R.prototype,L))for(r in U)c[r]&&w(c[r].prototype,O);if(L&&v(k)!==O&&w(k,O),a&&!h(O,x))for(r in F=!0,m(O,x,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),U)c[r]&&p(c[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&P,aTypedArray:K,aTypedArrayConstructor:z,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:B,isView:j,isTypedArray:$,TypedArray:R,TypedArrayPrototype:O}},4659:function(t,e,n){var r=n(3724),i=n(4913),s=n(6980);t.exports=function(t,e,n){r?i.f(t,e,s(0,n)):t[e]=n}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},4913:function(t,e,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},4979:function(t,e,n){var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(6193),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=new y(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,_="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=_&&!I&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:v});var C=s(m),A=C.prototype;if(A.constructor!==C)for(var k in g||a(A,"constructor",o(1,C)),f)if(c(f,k)){var R=f[k],O=R.s;c(C,O)||a(C,O,o(6,R.c))}},5002:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5031:function(t,e,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},5130:function(t,e,n){n.d(e,{D$:function(){return Z},Ef:function(){return st},Jo:function(){return X},aG:function(){return v},jR:function(){return et}});n(8992),n(3949),n(7550),n(1454),n(4520);var r=n(6768),i=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:t=>t})}catch(ct){}const a=s?t=>s.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?l.createElementNS(c,t):"mathml"===e?l.createElementNS(u,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=h.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),y=Symbol("_vsh"),v={name:"show",beforeMount(t,{value:e},{transition:n}){t[m]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):w(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),w(t,!0),r.enter(t)):r.leave(t,()=>{w(t,!1)}):w(t,e))},beforeUnmount(t,{value:e}){w(t,e)}};function w(t,e){t.style.display=e?t[m]:"none",t[y]=!e}const b=Symbol("");const _=/(?:^|;)\s*display\s*:/;function E(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&I(r,e,"")}else for(const t in e)null==n[t]&&I(r,t,"");for(const t in n)"display"===t&&(o=!0),I(r,t,n[t])}else if(s){if(e!==n){const t=r[b];t&&(n+=";"+t),r.cssText=n,o=_.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?r.display:"",t[y]&&(r.display="none"))}const T=/\s*!important$/;function I(t,e,n){if((0,i.cy)(n))n.forEach(n=>I(t,e,n));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=A(t,e);T.test(n)?t.setProperty((0,i.Tg)(r),n.replace(T,""),"important"):t[r]=n}}const S=["Webkit","Moz","ms"],C={};function A(t,e){const n=C[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return C[e]=r;r=(0,i.ZH)(r);for(let i=0;i<S.length;i++){const n=S[i]+r;if(n in t)return C[e]=n}return e}const k="http://www.w3.org/1999/xlink";function R(t,e,n,r,s,o=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(k,e.slice(6,e.length)):t.setAttributeNS(k,e,n):null==n||o&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.Bm)(n)?String(n):n)}function O(t,e,n,r,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(ct){0}c&&t.removeAttribute(s||e)}function N(t,e,n,r){t.addEventListener(e,n,r)}function D(t,e,n,r){t.removeEventListener(e,n,r)}const x=Symbol("_vei");function P(t,e,n,r,i=null){const s=t[x]||(t[x]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=L(e);if(r){const o=s[e]=j(r,i);N(t,n,o,a)}else o&&(D(t,n,o,a),s[e]=void 0)}}const M=/(?:Once|Passive|Capture)$/;function L(t){let e;if(M.test(t)){let n;e={};while(n=t.match(M))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let F=0;const U=Promise.resolve(),V=()=>F||(U.then(()=>F=0),F=Date.now());function j(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(B(t,n.value),e,5,[t])};return n.value=t,n.attached=V(),n}function B(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const $=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,K=(t,e,n,r,s,o)=>{const a="svg"===s;"class"===e?g(t,r,a):"style"===e?E(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||P(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):z(t,e,r,a))?(O(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||R(t,e,r,a,o,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,i.Kg)(r)?("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),R(t,e,r,a)):O(t,(0,i.PT)(e),r,o,e)};function z(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&$(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"autocorrect"===e)return!1;if("sandbox"===e&&"IFRAME"===t.tagName)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!$(e)||!(0,i.Kg)(n))&&e in t}"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const G=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function q(t){t.target.composing=!0}function H(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const W=Symbol("_assign");function Q(t,e,n){return e&&(t=t.trim()),n&&(t=(0,i.bB)(t)),t}const X={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[W]=G(i);const s=r||i.props&&"number"===i.props.type;N(t,e?"change":"input",e=>{e.target.composing||t[W](Q(t.value,n,s))}),(n||s)&&N(t,"change",()=>{t.value=Q(t.value,n,s)}),e||(N(t,"compositionstart",q),N(t,"compositionend",H),N(t,"change",H))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[W]=G(a),t.composing)return;const c=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),u=null==e?"":e;if(c!==u){if(document.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(s&&t.value.trim()===u)return}t.value=u}}};const Y=["ctrl","shift","alt","meta"],J={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Y.some(n=>t[`${n}Key`]&&!e.includes(n))},Z=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=J[e[t]];if(r&&r(n,e))return}return t(n,...r)})},tt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},et=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return e.some(t=>t===r||tt[t]===r)?t(n):void 0})},nt=(0,i.X$)({patchProp:K},f);let rt;function it(){return rt||(rt=(0,r.K9)(nt))}const st=(...t)=>{const e=it().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=at(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,ot(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ot(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function at(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},5397:function(t,e,n){var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},5610:function(t,e,n){var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},5854:function(t,e,n){var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},5917:function(t,e,n){var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i(function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})},5966:function(t,e,n){var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},6080:function(t,e,n){var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},6119:function(t,e,n){var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},6193:function(t,e,n){var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},6269:function(t){t.exports={}},6279:function(t,e,n){var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},6319:function(t,e,n){var r=n(8551),i=n(9539);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},6395:function(t){t.exports=!1},6400:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(1776),i="firebase",s="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},6518:function(t,e,n){var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},6699:function(t,e,n){var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6706:function(t,e,n){var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},6768:function(t,e,n){n.d(e,{$u:function(){return ut},$y:function(){return bt},CE:function(){return on},Df:function(){return B},EW:function(){return qn},FK:function(){return We},Gt:function(){return Yt},Gy:function(){return M},K9:function(){return be},Lk:function(){return fn},MZ:function(){return j},OW:function(){return V},PR:function(){return X},PS:function(){return Zt},Q3:function(){return vn},QP:function(){return F},RG:function(){return St},WQ:function(){return Jt},Wv:function(){return an},bF:function(){return dn},bo:function(){return R},dY:function(){return m},eW:function(){return yn},g2:function(){return vt},gN:function(){return _t},h:function(){return Hn},k6:function(){return k},nI:function(){return kn},pI:function(){return It},pM:function(){return $},qL:function(){return o},sV:function(){return at},uX:function(){return tn},wB:function(){return Ne},xo:function(){return lt}});n(1454),n(8992),n(3949),n(3215),n(7550),n(8872),n(4520);var r=n(144),i=n(4232);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch(t=>{a(t,e,n)}),o}if((0,i.cy)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||i.MZ;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}if(u)return(0,r.C4)(),s(u,null,10,[t,o,a]),void(0,r.bl)()}c(t,n,a,o,l)}function c(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const u=[];let l=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=l+1,n=u.length;while(e<n){const r=e+n>>>1,i=u[r],s=T(i);s<t||s===t&&2&i.flags?e=r+1:n=r}return e}function v(t){if(!(1&t.flags)){const e=T(t),n=u[u.length-1];!n||!(2&t.flags)&&e>=T(n)?u.push(t):u.splice(y(e),0,t),t.flags|=1,w()}}function w(){g||(g=p.then(I))}function b(t){(0,i.cy)(t)?h.push(...t):f&&-1===t.id?f.splice(d+1,0,t):1&t.flags||(h.push(t),t.flags|=1),w()}function _(t,e,n=l+1){for(0;n<u.length;n++){const e=u[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,u.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function E(t){if(h.length){const t=[...new Set(h)].sort((t,e)=>T(t)-T(e));if(h.length=0,f)return void f.push(...t);for(f=t,d=0;d<f.length;d++){const t=f[d];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}f=null,d=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function I(t){i.tE;try{for(l=0;l<u.length;l++){const t=u[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<u.length;l++){const t=u[l];t&&(t.flags&=-2)}l=-1,u.length=0,E(t),g=null,(u.length||h.length)&&I(t)}}let S=null,C=null;function A(t){const e=S;return S=t,C=t&&t.type.__scopeId||null,e}function k(t,e=S,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&rn(-1);const i=A(e);let s;try{s=t(...n)}finally{A(i),r._d&&rn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function R(t,e){if(null===S)return t;const n=Kn(S),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,c,u=i.MZ]=e[o];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,r.hV)(a),s.push({dir:t,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function O(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}const N=Symbol("_vte"),D=t=>t.__isTeleport;const x=Symbol("_leaveCb"),P=Symbol("_enterCb");function M(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return at(()=>{t.isMounted=!0}),lt(()=>{t.isUnmounting=!0}),t}const L=[Function,Array],F={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:L,onEnter:L,onAfterEnter:L,onEnterCancelled:L,onBeforeLeave:L,onLeave:L,onAfterLeave:L,onLeaveCancelled:L,onBeforeAppear:L,onAppear:L,onAfterAppear:L,onAppearCancelled:L};function U(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function V(t,e,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:b,onAppearCancelled:_}=e,E=String(t.key),T=U(n,t),I=(t,e)=>{t&&o(t,r,9,e)},S=(t,e)=>{const n=e[1];I(t,e),(0,i.cy)(t)?t.every(t=>t.length<=1)&&n():t.length<=1&&n()},C={mode:c,persisted:u,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=v||l}e[x]&&e[x](!0);const i=T[E];i&&un(t,i)&&i.el[x]&&i.el[x](),I(r,[e])},enter(t){let e=h,r=f,i=d;if(!n.isMounted){if(!a)return;e=w||h,r=b||f,i=_||d}let s=!1;const o=t[P]=e=>{s||(s=!0,I(e?i:r,[t]),C.delayedLeave&&C.delayedLeave(),t[P]=void 0)};e?S(e,[t,o]):o()},leave(e,r){const i=String(t.key);if(e[P]&&e[P](!0),n.isUnmounting)return r();I(p,[e]);let s=!1;const o=e[x]=n=>{s||(s=!0,r(),I(n?y:m,[e]),e[x]=void 0,T[i]===t&&delete T[i])};T[i]=t,g?S(g,[e,o]):o()},clone(t){const i=V(t,e,n,r,s);return s&&s(i),i}};return C}function j(t,e){6&t.shapeFlag&&t.component?(t.transition=e,j(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function B(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===We?(128&o.patchFlag&&i++,r=r.concat(B(o.children,e,a))):(e||o.type!==Xe)&&r.push(null!=a?mn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function $(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}function K(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const z=new WeakMap;function G(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach((t,r)=>G(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a));if(H(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&G(t,e,n,o.component.subTree));const c=4&o.shapeFlag?Kn(o.component):o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?i.NO:t=>(0,i.$3)(g,t),y=t=>!0;if(null!=f&&f!==h)if(q(e),(0,i.Kg)(f))d[f]=null,m(f)&&(p[f]=null);else if((0,r.i9)(f)){y(f)&&(f.value=null);const t=e;t.k&&(d[t.k]=null)}if((0,i.Tn)(h))s(h,l,12,[u,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?m(h)?p[h]:d[h]:y(h)||!t.k?h.value:d[t.k];if(a)(0,i.cy)(n)&&(0,i.TF)(n,c);else if((0,i.cy)(n))n.includes(c)||n.push(c);else if(e)d[h]=[c],m(h)&&(p[h]=d[h]);else{const e=[c];y(h)&&(h.value=e),t.k&&(d[t.k]=e)}}else e?(d[h]=u,m(h)&&(p[h]=u)):s&&(y(h)&&(h.value=u),t.k&&(d[t.k]=u))};if(u){const e=()=>{r(),z.delete(t)};e.id=-1,z.set(t,e),we(e,n)}else q(t),r()}else 0}}function q(t){const e=z.get(t);e&&(e.flags|=8,z.delete(t))}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const H=t=>!!t.type.__asyncLoader;const W=t=>t.type.__isKeepAlive,Q={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=kn(),r=n.ctx;if(!r.renderer)return()=>{const t=e.default&&e.default();return t&&1===t.length?t[0]:t};const s=new Map,o=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:h,o:{createElement:f}}}=r,d=f("div");function p(t){nt(t),h(t,n,c,!0)}function g(t){s.forEach((e,n)=>{const r=zn(e.type);r&&!t(r)&&m(n)})}function m(t){const e=s.get(t);!e||a&&un(e,a)?a&&nt(a):p(e),s.delete(t),o.delete(t)}r.activate=(t,e,n,r,s)=>{const o=t.component;l(t,e,n,0,c),u(o.vnode,t,e,n,o,c,r,t.slotScopeIds,s),we(()=>{o.isDeactivated=!1,o.a&&(0,i.DY)(o.a);const e=t.props&&t.props.onVnodeMounted;e&&Tn(e,o.parent,t)},c)},r.deactivate=t=>{const e=t.component;ke(e.m),ke(e.a),l(t,d,null,1,c),we(()=>{e.da&&(0,i.DY)(e.da);const n=t.props&&t.props.onVnodeUnmounted;n&&Tn(n,e.parent,t),e.isDeactivated=!0},c)},Ne(()=>[t.include,t.exclude],([t,e])=>{t&&g(e=>Y(t,e)),e&&g(t=>!Y(e,t))},{flush:"post",deep:!0});let y=null;const v=()=>{null!=y&&(qe(n.subTree.type)?we(()=>{s.set(y,rt(n.subTree))},n.subTree.suspense):s.set(y,rt(n.subTree)))};return at(v),ut(v),lt(()=>{s.forEach(t=>{const{subTree:e,suspense:r}=n,i=rt(e);if(t.type===i.type&&t.key===i.key){nt(i);const t=i.component.da;return void(t&&we(t,r))}p(t)})}),()=>{if(y=null,!e.default)return a=null;const n=e.default(),r=n[0];if(n.length>1)return a=null,n;if(!cn(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=rt(r);if(i.type===Xe)return a=null,i;const c=i.type,u=zn(H(i)?i.type.__asyncResolved||{}:c),{include:l,exclude:h,max:f}=t;if(l&&(!u||!Y(l,u))||h&&u&&Y(h,u))return i.shapeFlag&=-257,a=i,r;const d=null==i.key?c:i.key,p=s.get(d);return i.el&&(i=mn(i),128&r.shapeFlag&&(r.ssContent=i)),y=d,p?(i.el=p.el,i.component=p.component,i.transition&&j(i,i.transition),i.shapeFlag|=512,o.delete(d),o.add(d)):(o.add(d),f&&o.size>parseInt(f,10)&&m(o.values().next().value)),i.shapeFlag|=256,a=i,qe(r.type)?r:i}}},X=Q;function Y(t,e){return(0,i.cy)(t)?t.some(t=>Y(t,e)):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&(t.lastIndex=0,t.test(e))}function J(t,e){tt(t,"a",e)}function Z(t,e){tt(t,"da",e)}function tt(t,e,n=An){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(it(e,r,n),n){let t=n.parent;while(t&&t.parent)W(t.parent.vnode)&&et(r,e,n,t),t=t.parent}}function et(t,e,n,r){const s=it(e,t,r,!0);ht(()=>{(0,i.TF)(r[e],s)},n)}function nt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function rt(t){return 128&t.shapeFlag?t.ssContent:t}function it(t,e,n=An,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const s=Nn(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const st=t=>(e,n=An)=>{Ln&&"sp"!==t||it(t,(...t)=>e(...t),n)},ot=st("bm"),at=st("m"),ct=st("bu"),ut=st("u"),lt=st("bum"),ht=st("um"),ft=st("sp"),dt=st("rtg"),pt=st("rtc");function gt(t,e=An){it("ec",t,e)}const mt="components",yt="directives";function vt(t,e){return Et(mt,t,!0,e)||t}const wt=Symbol.for("v-ndc");function bt(t){return(0,i.Kg)(t)?Et(mt,t,!1)||t:t||wt}function _t(t){return Et(yt,t)}function Et(t,e,n=!0,r=!1){const s=S||An;if(s){const n=s.type;if(t===mt){const t=zn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=Tt(s[t]||n[t],e)||Tt(s.appContext[t],e);return!o&&r?n:o}}function Tt(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}function It(t,e,n,s){let o;const a=n&&n[s],c=(0,i.cy)(t);if(c||(0,i.Kg)(t)){const n=c&&(0,r.g8)(t);let i=!1,s=!1;n&&(i=!(0,r.fE)(t),s=(0,r.Tm)(t),t=(0,r.qA)(t)),o=new Array(t.length);for(let c=0,u=t.length;c<u;c++)o[c]=e(i?s?(0,r.a1)((0,r.lJ)(t[c])):(0,r.lJ)(t[c]):t[c],c,void 0,a&&a[c])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,(t,n)=>e(t,n,void 0,a&&a[n]));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}function St(t,e,n={},r,s){if(S.ce||S.parent&&H(S.parent)&&S.parent.ce){const t=Object.keys(n).length>0;return"default"!==e&&(n.name=e),tn(),an(We,null,[dn("slot",n,r&&r())],t?-2:64)}let o=t[e];o&&o._c&&(o._d=!1),tn();const a=o&&Ct(o(n)),c=n.key||a&&a.key,u=an(We,{key:(c&&!(0,i.Bm)(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&1===t._?64:-2);return!s&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),o&&o._c&&(o._d=!0),u}function Ct(t){return t.some(t=>!cn(t)||t.type!==Xe&&!(t.type===We&&!Ct(t.children)))?t:null}const At=t=>t?xn(t)?Kn(t):At(t.parent):null,kt=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>At(t.parent),$root:t=>At(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ft(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>xe.bind(t)}),Rt=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),Ot={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Rt(s,e))return c[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];Dt&&(c[e]=0)}}const f=kt[e];let d,p;return f?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Rt(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o,type:a}},c){let u,l;return!!(n[c]||t!==i.MZ&&"$"!==c[0]&&(0,i.$3)(t,c)||Rt(e,c)||(u=o[0])&&(0,i.$3)(u,c)||(0,i.$3)(r,c)||(0,i.$3)(kt,c)||(0,i.$3)(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nt(t){return(0,i.cy)(t)?t.reduce((t,e)=>(t[e]=null,t),{}):t}let Dt=!0;function xt(t){const e=Ft(t),n=t.proxy,s=t.ctx;Dt=!1,e.beforeCreate&&Mt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:A,expose:k,inheritAttrs:R,components:O,directives:N,filters:D}=e,x=null;if(h&&Pt(h,s,x),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(Dt=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=qn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Lt(u[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach(e=>{Yt(e,t[e])})}function P(t,e){(0,i.cy)(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(f&&Mt(f,t,"c"),P(ot,d),P(at,p),P(ct,g),P(ut,m),P(J,y),P(Z,v),P(gt,C),P(pt,I),P(dt,S),P(lt,b),P(ht,E),P(ft,A),(0,i.cy)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e,enumerable:!0})})}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=R&&(t.inheritAttrs=R),O&&(t.components=O),N&&(t.directives=N),A&&K(t)}function Pt(t,e,n=i.tE){(0,i.cy)(t)&&(t=$t(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?Jt(n.from||s,n.default,!0):Jt(n.from||s):Jt(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Mt(t,e,n){o((0,i.cy)(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lt(t,e,n,r){let s=r.includes(".")?Pe(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&Ne(s,n)}else if((0,i.Tn)(t))Ne(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach(t=>Lt(t,e,n,r));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&Ne(s,r,t)}else 0}function Ft(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach(t=>Ut(u,t,a,!0)),Ut(u,e,a)):u=e,(0,i.Gv)(e)&&o.set(e,u),u}function Ut(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ut(t,s,n,!0),i&&i.forEach(e=>Ut(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Vt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Vt={data:jt,props:Gt,emits:Gt,methods:zt,computed:zt,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:zt,directives:zt,watch:qt,provide:jt,inject:Bt};function jt(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Bt(t,e){return zt($t(t),$t(e))}function $t(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function zt(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function Gt(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),Nt(t),Nt(null!=e?e:{})):e}function qt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=Kt(t[r],e[r]);return n}function Ht(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wt=0;function Qt(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=Ht(),a=new WeakSet,c=[];let u=!1;const l=s.app={_uid:Wt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Wn,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,i.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,i.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,e){return e?(s.components[t]=e,l):s.components[t]},directive(t,e){return e?(s.directives[t]=e,l):s.directives[t]},mount(i,o,a){if(!u){0;const c=l._ceVNode||dn(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,i):t(c,i,a),u=!0,l._container=i,i.__vue_app__=l,Kn(c.component)}},onUnmount(t){c.push(t)},unmount(){u&&(o(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return s.provides[t]=e,l},runWithContext(t){const e=Xt;Xt=l;try{return t()}finally{Xt=e}}};return l}}let Xt=null;function Yt(t,e){if(An){let n=An.provides;const r=An.parent&&An.parent.provides;r===n&&(n=An.provides=Object.create(r)),n[t]=e}else 0}function Jt(t,e,n=!1){const r=kn();if(r||Xt){let s=Xt?Xt._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}function Zt(){return!(!kn()&&!Xt)}const te={},ee=()=>Object.create(te),ne=t=>Object.getPrototypeOf(t)===te;function re(t,e,n,i=!1){const s={},o=ee();t.propsDefaults=Object.create(null),se(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function ie(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;se(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=oe(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Ve(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i.PT)(s);o[e]=oe(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function se(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:Ve(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=oe(o,e,c,s[c],t,!(0,i.$3)(s,c))}}return u}function oe(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Nn(s);r=i[n]=t.call(null,e),o()}}else r=t;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const ae=new WeakMap;function ce(t,e,n=!1){const r=n?ae:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=ce(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);ue(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(ue(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let u=!1,l=!0;if((0,i.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(e)}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function ue(t){return"$"!==t[0]&&!(0,i.SU)(t)}const le=t=>"_"===t||"_ctx"===t||"$stable"===t,he=t=>(0,i.cy)(t)?t.map(wn):[wn(t)],fe=(t,e,n)=>{if(e._n)return e;const r=k((...t)=>he(e(...t)),n);return r._c=!1,r},de=(t,e,n)=>{const r=t._ctx;for(const s in t){if(le(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=fe(s,n,r);else if(null!=n){0;const t=he(n);e[s]=()=>t}}},pe=(t,e)=>{const n=he(e);t.slots.default=()=>n},ge=(t,e,n)=>{for(const r in e)!n&&le(r)||(t[r]=e[r])},me=(t,e,n)=>{const r=t.slots=ee();if(32&t.vnode.shapeFlag){const t=e._;t?(ge(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):de(e,r)}else e&&pe(t,e)},ye=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:ge(s,e,n):(o=!e.$stable,de(e,s)),a=e}else e&&(pe(t,e),a={default:1});if(o)for(const i in s)le(i)||null!=a[i]||delete s[i]};function ve(){}const we=He;function be(t){return _e(t)}function _e(t,e){ve();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!un(t,e)&&(r=tt(t),Q(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Qe:w(t,e,n,r);break;case Xe:b(t,e,n,r);break;case Ye:null==t&&T(e,n,r,o);break;case We:L(t,e,n,r,i,s,o,a,c);break;default:1&h?C(t,e,n,r,i,s,o,a,c):6&h?F(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,rt)}null!=l&&i?G(l,t&&t.ref,s,e||t,!e):null==l&&t&&null!=t.ref&&G(t.ref,null,s,t,!0)},w=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},I=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},C=(t,e,n,r,i,s,o,a,c)=>{if("svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t)A(e,n,r,i,s,o,a,c);else{const n=t.el&&t.el._isVueCE?t.el:null;try{n&&n._beginPatch(),D(t,e,i,s,o,a,c)}finally{n&&n._endPatch()}}},A=(t,e,n,r,o,u,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&m?f(d,t.children):16&m&&R(t.children,d,null,r,o,Ee(t,u),l,h),v&&O(t,null,r,"created"),k(d,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(d,t,null,g[t],u,r);"value"in g&&a(d,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&Tn(p,r,t)}v&&O(t,null,r,"beforeMount");const w=Ie(o,y);w&&y.beforeEnter(d),s(d,e,n),((p=g&&g.onVnodeMounted)||w||v)&&we(()=>{p&&Tn(p,r,t),w&&y.enter(d),v&&O(t,null,r,"mounted")},o)},k=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n||qe(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;k(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?bn(t[u]):wn(t[u]);y(null,c,e,n,r,i,s,o,a)}},D=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&Te(n,!1),(m=g.onVnodeBeforeUpdate)&&Tn(m,n,e,t),d&&O(e,t,n,"beforeUpdate"),n&&Te(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(u,""),h?P(t.dynamicChildren,h,u,n,r,Ee(e,s),o):c||$(t,e,u,null,n,r,Ee(e,s),o,!1),l>0){if(16&l)M(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||M(u,p,g,n,s);((m=g.onVnodeUpdated)||d)&&we(()=>{m&&Tn(m,n,e,t),d&&O(e,t,n,"updated")},r)},P=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===We||!un(c,u)||198&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},M=(t,e,n,r,s)=>{if(e!==n){if(e!==i.MZ)for(const o in e)(0,i.SU)(o)||o in n||a(t,o,e[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=e[o];c!==u&&"value"!==o&&a(t,o,u,c,s,r)}"value"in n&&a(t,"value",e.value,n.value,s)}},L=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),R(e.children||[],n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(P(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Se(t,e,!0)):$(t,e,n,f,i,o,a,c,l)},F=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):U(e,n,r,i,s,o,c):V(t,e,c)},U=(t,e,n,r,i,s,o)=>{const a=t.component=Cn(t,r,i);if(W(t)&&(a.ctx.renderer=rt),Fn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,j,o),!t.el){const r=a.subTree=dn(Xe);b(null,r,e,n),t.placeholder=r.el}}else j(a,t,e,n,i,s,o)},V=(t,e,n)=>{const r=e.component=t.component;if(Ke(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},j=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:l}=t;{const n=Ae(t);if(n)return e&&(e.el=l.el,B(t,e,c)),void n.asyncDep.then(()=>{t.isUnmounted||u()})}let h,f=e;0,Te(t,!1),e?(e.el=l.el,B(t,e,c)):e=l,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&Tn(h,s,e,l),Te(t,!0);const p=je(t);0;const g=t.subTree;t.subTree=p,y(g,p,d(g.el),tt(g),t,o,a),e.el=p.el,null===f&&Ge(t,p.el),r&&we(r,o),(h=e.props&&e.props.onVnodeUpdated)&&we(()=>Tn(h,s,e,l),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f,root:d,type:p}=t,g=H(e);if(Te(t,!1),l&&(0,i.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&Tn(r,f,e),Te(t,!0),c&&st){const e=()=>{t.subTree=je(t),st(c,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{d.ce&&!1!==d.ce._def.shadowRoot&&d.ce._injectChildStyle(p);const r=t.subTree=je(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&we(h,o),!g&&(r=u&&u.onVnodeMounted)){const t=e;we(()=>Tn(r,f,t),o)}(256&e.shapeFlag||f&&H(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&we(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const l=t.effect=new r.X2(u);t.scope.off();const h=t.update=l.run.bind(l),f=t.job=l.runIfDirty.bind(l);f.i=t,f.id=t.uid,l.scheduler=()=>v(f),Te(t,!0),h()},B=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ie(t,e.props,i,n),ye(t,e.children,n),(0,r.C4)(),_(t),(0,r.bl)()},$=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(u,h,n,r,i,s,o,a,c);if(256&d)return void K(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Z(u,i,s),h!==u&&f(n,h)):16&l?16&p?z(u,h,n,r,i,s,o,a,c):Z(u,i,s,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,s,o,a,c))},K=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?bn(e[d]):wn(e[d]);y(t[d],r,n,null,s,o,a,c,u)}l>h?Z(t,s,o,!0,!1,f):R(e,n,r,s,o,a,c,u,f)},z=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?bn(e[l]):wn(e[l]);if(!un(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?bn(e[d]):wn(e[d]);if(!un(r,i))break;y(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?bn(e[l]):wn(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)Q(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?bn(e[l]):wn(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const b=d-g+1;let _=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){Q(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&un(r,e[v])){i=v;break}void 0===i?Q(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:_=!0,y(r,e[i],n,null,s,o,a,c,u),w++)}const I=_?Ce(T):i.Oj;for(v=I.length-1,l=b-1;l>=0;l--){const t=g+l,i=e[t],f=e[t+1],d=t+1<h?f.el||f.placeholder:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):_&&(v<0||l!==I[v]?q(i,n,d,2):v--)}}},q=(t,e,n,r,i=null)=>{const{el:a,type:c,transition:u,children:l,shapeFlag:h}=t;if(6&h)return void q(t.component.subTree,e,n,r);if(128&h)return void t.suspense.move(e,n,r);if(64&h)return void c.move(t,e,n,rt);if(c===We){s(a,e,n);for(let t=0;t<l.length;t++)q(l[t],e,n,r);return void s(t.anchor,e,n)}if(c===Ye)return void I(t,e,n);const f=2!==r&&1&h&&u;if(f)if(0===r)u.beforeEnter(a),s(a,e,n),we(()=>u.enter(a),i);else{const{leave:r,delayLeave:i,afterLeave:c}=u,l=()=>{t.ctx.isUnmounted?o(a):s(a,e,n)},h=()=>{a._isLeaving&&a[x](!0),r(a,()=>{l(),c&&c()})};i?i(a,l,h):h()}else s(a,e,n)},Q=(t,e,n,i=!1,s=!1)=>{const{type:o,props:a,ref:c,children:u,dynamicChildren:l,shapeFlag:h,patchFlag:f,dirs:d,cacheIndex:p}=t;if(-2===f&&(s=!1),null!=c&&((0,r.C4)(),G(c,null,n,t,!0),(0,r.bl)()),null!=p&&(e.renderCache[p]=void 0),256&h)return void e.ctx.deactivate(t);const g=1&h&&d,m=!H(t);let y;if(m&&(y=a&&a.onVnodeBeforeUnmount)&&Tn(y,e,t),6&h)J(t.component,n,i);else{if(128&h)return void t.suspense.unmount(n,i);g&&O(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,rt,i):l&&!l.hasOnce&&(o!==We||f>0&&64&f)?Z(l,e,n,!1,!0):(o===We&&384&f||!s&&16&h)&&Z(u,e,n),i&&X(t)}(m&&(y=a&&a.onVnodeUnmounted)||g)&&we(()=>{y&&Tn(y,e,t),g&&O(t,null,e,"unmounted")},n)},X=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===We)return void Y(n,r);if(e===Ye)return void S(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},Y=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},J=(t,e,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:u,a:l}=t;ke(u),ke(l),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,Q(a,t,e,n)),c&&we(c,e),we(()=>{t.isUnmounted=!0},e)},Z=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)Q(t[o],e,n,r,i)},tt=t=>{if(6&t.shapeFlag)return tt(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[N];return n?p(n):e};let et=!1;const nt=(t,e,n)=>{null==t?e._vnode&&Q(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,et||(et=!0,_(),E(),et=!1)},rt={p:y,um:Q,m:q,r:X,mt:U,mc:R,pc:$,pbc:P,n:tt,o:t};let it,st;return e&&([it,st]=e(rt)),{render:nt,hydrate:it,createApp:Qt(nt,it)}}function Ee({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Te({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ie(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Se(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=bn(s[i]),e.el=t.el),n||-2===e.patchFlag||Se(t,e)),e.type===Qe&&-1!==e.patchFlag&&(e.el=t.el),e.type!==Xe||e.el||(e.el=t.el)}}function Ce(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function Ae(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ae(e)}function ke(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Re=Symbol.for("v-scx"),Oe=()=>{{const t=Jt(Re);return t}};function Ne(t,e,n){return De(t,e,n)}function De(t,e,n=i.MZ){const{immediate:s,deep:a,flush:c,once:u}=n;const l=(0,i.X$)({},n);const h=e&&s||!e&&"post"!==c;let f;if(Ln)if("sync"===c){const t=Oe();f=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=i.tE,t.resume=i.tE,t.pause=i.tE,t}const d=An;l.call=(t,e,n)=>o(t,d,e,n);let p=!1;"post"===c?l.scheduler=t=>{we(t,d&&d.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(t,e)=>{e?t():v(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const g=(0,r.wB)(t,e,l);return Ln&&(f?f.push(g):h&&g()),g}function xe(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?Pe(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=Nn(this),c=De(s,o.bind(r),n);return a(),c}function Pe(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const Me=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function Le(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),c=a&&Me(r,e.slice(7));let u;c&&(c.trim&&(s=n.map(t=>(0,i.Kg)(t)?t.trim():t)),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}const Fe=new WeakMap;function Ue(t,e,n=!1){const r=n?Fe:e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=Ue(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach(t=>a[t]=null):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function Ve(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function je(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=A(t);let w,b;try{if(4&n.shapeFlag){const t=s||r,e=t;w=wn(h.call(e,t,f,d,g,p,m)),b=u}else{const t=e;0,w=wn(t.length>1?t(d,{attrs:u,slots:c,emit:l}):t(d,null)),b=e.props?u:Be(u)}}catch(E){Je.length=0,a(E,t,1),w=dn(Xe)}let _=w;if(b&&!1!==y){const t=Object.keys(b),{shapeFlag:e}=_;t.length&&7&e&&(o&&t.some(i.CP)&&(b=$e(b,o)),_=mn(_,b,!1,!0))}return n.dirs&&(_=mn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&j(_,n.transition),w=_,A(v),w}const Be=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},$e=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function Ke(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||ze(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?ze(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Ve(u,n))return!0}}return!1}function ze(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Ve(n,s))return!0}return!1}function Ge({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const qe=t=>t.__isSuspense;function He(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):b(t)}const We=Symbol.for("v-fgt"),Qe=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Ye=Symbol.for("v-stc"),Je=[];let Ze=null;function tn(t=!1){Je.push(Ze=t?null:[])}function en(){Je.pop(),Ze=Je[Je.length-1]||null}let nn=1;function rn(t,e=!1){nn+=t,t<0&&Ze&&e&&(Ze.hasOnce=!0)}function sn(t){return t.dynamicChildren=nn>0?Ze||i.Oj:null,en(),nn>0&&Ze&&Ze.push(t),t}function on(t,e,n,r,i,s){return sn(fn(t,e,n,r,i,s,!0))}function an(t,e,n,r,i){return sn(dn(t,e,n,r,i,!0))}function cn(t){return!!t&&!0===t.__v_isVNode}function un(t,e){return t.type===e.type&&t.key===e.key}const ln=({key:t})=>null!=t?t:null,hn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:S,r:t,k:e,f:!!n}:t:null);function fn(t,e=null,n=null,r=0,s=null,o=(t===We?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ln(e),ref:e&&hn(e),scopeId:C,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S};return c?(_n(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),nn>0&&!a&&Ze&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Ze.push(u),u}const dn=pn;function pn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==wt||(t=Xe),cn(t)){const r=mn(t,e,!0);return n&&_n(r,n),nn>0&&!a&&Ze&&(6&r.shapeFlag?Ze[Ze.indexOf(t)]=r:Ze.push(r)),r.patchFlag=-2,r}if(Gn(t)&&(t=t.__vccOpts),e){e=gn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:qe(t)?128:D(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return fn(t,e,n,s,o,c,a,!0)}function gn(t){return t?(0,r.ju)(t)||ne(t)?(0,i.X$)({},t):t:null}function mn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,l=e?En(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ln(l),ref:e&&e.ref?n&&o?(0,i.cy)(o)?o.concat(hn(e)):[o,hn(e)]:hn(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mn(t.ssContent),ssFallback:t.ssFallback&&mn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&j(h,u.clone(h)),h}function yn(t=" ",e=0){return dn(Qe,null,t,e)}function vn(t="",e=!1){return e?(tn(),an(Xe,null,t)):dn(Xe,null,t)}function wn(t){return null==t||"boolean"===typeof t?dn(Xe):(0,i.cy)(t)?dn(We,null,t.slice()):cn(t)?bn(t):dn(Qe,null,String(t))}function bn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:mn(t)}function _n(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),_n(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||ne(e)?3===r&&S&&(1===S.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=S}}else(0,i.Tn)(e)?(e={default:e,_ctx:S},n=32):(e=String(e),64&r?(n=16,e=[yn(e)]):n=8);t.children=e,t.shapeFlag|=n}function En(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function Tn(t,e,n,r=null){o(t,e,7,[n,r])}const In=Ht();let Sn=0;function Cn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||In,a={uid:Sn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ce(s,o),emitsOptions:Ue(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Le.bind(null,a),t.ce&&t.ce(a),a}let An=null;const kn=()=>An||S;let Rn,On;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach(e=>e(t)):r[0](t)}};Rn=e("__VUE_INSTANCE_SETTERS__",t=>An=t),On=e("__VUE_SSR_SETTERS__",t=>Ln=t)}const Nn=t=>{const e=An;return Rn(t),t.scope.on(),()=>{t.scope.off(),Rn(e)}},Dn=()=>{An&&An.scope.off(),Rn(null)};function xn(t){return 4&t.vnode.shapeFlag}let Pn,Mn,Ln=!1;function Fn(t,e=!1,n=!1){e&&On(e);const{props:r,children:i}=t.vnode,s=xn(t);re(t,r,s,e),me(t,i,n||e);const o=s?Un(t,e):void 0;return e&&On(!1),o}function Un(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ot);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?$n(t):null,c=Nn(t),u=s(o,t,0,[t.props,n]),l=(0,i.yL)(u);if((0,r.bl)(),c(),!l&&!t.sp||H(t)||K(t),l){if(u.then(Dn,Dn),e)return u.then(n=>{Vn(t,n,e)}).catch(e=>{a(e,t,0)});t.asyncDep=u}else Vn(t,u,e)}else jn(t,e)}function Vn(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),jn(t,n)}function jn(t,e,n){const s=t.type;if(!t.render){if(!e&&Pn&&!s.render){const e=s.template||Ft(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Pn(e,c)}}t.render=s.render||i.tE,Mn&&Mn(t)}{const e=Nn(t);(0,r.C4)();try{xt(t)}finally{(0,r.bl)(),e()}}}const Bn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function $n(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Bn),slots:t.slots,emit:t.emit,expose:e}}function Kn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in kt?kt[n](t):void 0},has(t,e){return e in t||e in kt}})):t.proxy}function zn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Gn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const qn=(t,e)=>{const n=(0,r.EW)(t,e,Ln);return n};function Hn(t,e,n){try{rn(-1);const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?cn(e)?dn(t,null,[e]):dn(t,e):dn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&cn(n)&&(n=[n]),dn(t,e,n))}finally{rn(1)}}const Wn="3.5.24"},6801:function(t,e,n){var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),c=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},6840:function(t,e,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6955:function(t,e,n){var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},6969:function(t,e,n){var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7055:function(t,e,n){var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);t.exports=i(function(){return!o("z").propertyIsEnumerable(0)})?function(t){return"String"===s(t)?a(t,""):o(t)}:o},7347:function(t,e,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},7476:function(t,e,n){var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},7550:function(t,e,n){n(3579)},7588:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("forEach",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{forEach:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;s(e,function(e){t(e,n++)},{IS_RECORD:!0})}})},7629:function(t,e,n){var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.47.0",mode:r?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",license:"https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7657:function(t,e,n){var r,i,s,o=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||o(function(){var t={};return r[p].call(t)!==t});m?r={}:d&&(r=u(r)),a(r[p])||h(r,p,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},7740:function(t,e,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},7750:function(t,e,n){var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},7751:function(t,e,n){var r=n(4576),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},7811:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},8014:function(t,e,n){var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8111:function(t,e,n){var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),y="constructor",v="Iterator",w=d("toStringTag"),b=TypeError,_=i[v],E=m||!a(_)||_.prototype!==p||!h(function(){_({})}),T=function(){if(s(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},I=function(t,e){g?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new b("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,w)||I(w,v),!E&&f(p,y)&&p[y]!==Object||I(y,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},8227:function(t,e,n){var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},8237:function(t,e,n){var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),c=n(9539),u=n(4549),l=n(8745),h=n(9039),f=TypeError,d=h(function(){[].keys().reduce(function(){},void 0)}),p=!d&&u("reduce",f);r({target:"Iterator",proto:!0,real:!0,forced:d||p},{reduce:function(t){o(this);try{s(t)}catch(h){c(this,"throw",h)}var e=arguments.length<2,n=e?void 0:arguments[1];if(p)return l(p,this,e?[t]:[t,n]);var r=a(this),u=0;if(i(r,function(r){e?(e=!1,n=r):n=t(n,r,u),u++},{IS_RECORD:!0}),e)throw new f("Reduce of empty iterator with no initial value");return n}})},8480:function(t,e,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},8512:function(t,e,n){n.d(e,{aE:function(){return he},LA:function(){return Rt},lq:function(){return de},rd:function(){return fe}});n(8992),n(3949),n(4520),n(2577),n(1454),n(8872),n(7550),n(3215);
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const r="undefined"!==typeof document;function i(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function s(t){return t.__esModule||"Module"===t[Symbol.toStringTag]||t.default&&i(t.default)}const o=Object.assign;function a(t,e){const n={};for(const r in e){const i=e[r];n[r]=u(i)?i.map(t):t(i)}return n}const c=()=>{},u=Array.isArray;function l(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const h=/#/g,f=/&/g,d=/\//g,p=/=/g,g=/\?/g,m=/\+/g,y=/%5B/g,v=/%5D/g,w=/%5E/g,b=/%60/g,_=/%7B/g,E=/%7C/g,T=/%7D/g,I=/%20/g;function S(t){return null==t?"":encodeURI(""+t).replace(E,"|").replace(y,"[").replace(v,"]")}function C(t){return S(t).replace(_,"{").replace(T,"}").replace(w,"^")}function A(t){return S(t).replace(m,"%2B").replace(I,"+").replace(h,"%23").replace(f,"%26").replace(b,"`").replace(_,"{").replace(T,"}").replace(w,"^")}function k(t){return A(t).replace(p,"%3D")}function R(t){return S(t).replace(h,"%23").replace(g,"%3F")}function O(t){return R(t).replace(d,"%2F")}function N(t){if(null==t)return null;try{return decodeURIComponent(""+t)}catch(e){}return""+t}const D=/\/$/,x=t=>t.replace(D,"");function P(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=e.slice(0,c),s=e.slice(c,a>0?a:e.length),i=t(s.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$(null!=r?r:e,n),{fullPath:r+s+o,path:r,query:i,hash:N(o)}}function M(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function L(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function F(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&U(e.matched[r],n.matched[i])&&V(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function U(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function V(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!j(t[n],e[n]))return!1;return!0}function j(t,e){return u(t)?B(t,e):u(e)?B(e,t):t===e}function B(t,e){return u(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function $(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let z=function(t){return t["pop"]="pop",t["push"]="push",t}({}),G=function(t){return t["back"]="back",t["forward"]="forward",t["unknown"]="",t}({});function q(t){if(!t)if(r){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),x(t)}const H=/^[^#]+#/;function W(t,e){return t.replace(H,"#")+e}function Q(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function Y(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Q(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function J(t,e){return(history.state?history.state.position-e:-1)+t}const Z=new Map;function tt(t,e){Z.set(t,e)}function et(t){const e=Z.get(t);return Z.delete(t),e}function nt(t){return"string"===typeof t||t&&"object"===typeof t}function rt(t){return"string"===typeof t||"symbol"===typeof t}let it=function(t){return t[t["MATCHER_NOT_FOUND"]=1]="MATCHER_NOT_FOUND",t[t["NAVIGATION_GUARD_REDIRECT"]=2]="NAVIGATION_GUARD_REDIRECT",t[t["NAVIGATION_ABORTED"]=4]="NAVIGATION_ABORTED",t[t["NAVIGATION_CANCELLED"]=8]="NAVIGATION_CANCELLED",t[t["NAVIGATION_DUPLICATED"]=16]="NAVIGATION_DUPLICATED",t}({});const st=Symbol("");it.MATCHER_NOT_FOUND,it.NAVIGATION_GUARD_REDIRECT,it.NAVIGATION_ABORTED,it.NAVIGATION_CANCELLED,it.NAVIGATION_DUPLICATED;function ot(t,e){return o(new Error,{type:t,[st]:!0},e)}function at(t,e){return t instanceof Error&&st in t&&(null==e||!!(t.type&e))}const ct=["params","query","hash"];function ut(t){if("string"===typeof t)return t;if(null!=t.path)return t.path;const e={};for(const n of ct)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function lt(t){const e={};if(""===t||"?"===t)return e;const n=("?"===t[0]?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const t=n[r].replace(m," "),i=t.indexOf("="),s=N(i<0?t:t.slice(0,i)),o=i<0?null:N(t.slice(i+1));if(s in e){let t=e[s];u(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function ht(t){let e="";for(let n in t){const r=t[n];n=k(n),null!=r?(u(r)?r.map(t=>t&&A(t)):[r&&A(r)]).forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}):void 0!==r&&(e+=(e.length?"&":"")+n)}return e}function ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=u(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}const dt=Symbol(""),pt=Symbol(""),gt=Symbol(""),mt=Symbol(""),yt=Symbol("");function vt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wt(t,e,n,r,i,s=t=>t()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=t=>{!1===t?c(ot(it.NAVIGATION_ABORTED,{from:n,to:e})):t instanceof Error?c(t):nt(t)?c(ot(it.NAVIGATION_GUARD_REDIRECT,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),a())},l=s(()=>t.call(r&&r.instances[i],e,n,u));let h=Promise.resolve(l);t.length<3&&(h=h.then(u)),h.catch(t=>c(t))})}function bt(t,e,n,r,o=t=>t()){const a=[];for(const c of t){0;for(const t in c.components){let u=c.components[t];if("beforeRouteEnter"===e||c.instances[t])if(i(u)){const i=(u.__vccOpts||u)[e];i&&a.push(wt(i,n,r,c,t,o))}else{let i=u();0,a.push(()=>i.then(i=>{if(!i)throw new Error(`Couldn't resolve component "${t}" at "${c.path}"`);const a=s(i)?i.default:i;c.mods[t]=i,c.components[t]=a;const u=(a.__vccOpts||a)[e];return u&&wt(u,n,r,c,t,o)()}))}}}return a}function _t(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find(t=>U(t,s))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find(t=>U(t,a))||i.push(a))}return[n,r,i]}var Et=n(6768),Tt=n(144);
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let It=()=>location.protocol+"//"+location.host;function St(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),L(n,"")}return L(n,t)+r+i}function Ct(t,e,n,r){let i=[],s=[],a=null;const c=({state:s})=>{const o=St(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=o,e.value=s,a&&a===c)return void(a=null);l=u?s.position-u.position:0}else r(o);i.forEach(t=>{t(n.value,c,{delta:l,type:z.pop,direction:l?l>0?G.forward:G.back:G.unknown})})};function u(){a=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){if("hidden"===document.visibilityState){const{history:t}=window;if(!t.state)return;t.replaceState(o({},t.state,{scroll:X()}),"")}}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:u,listen:l,destroy:f}}function At(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?X():null}}function kt(t){const{history:e,location:n}=window,r={value:St(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:It()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function a(t,n){s(t,o({},e.state,At(i.value.back,t,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=t}function c(t,n){const a=o({},i.value,e.state,{forward:t,scroll:X()});s(a.current,a,!0),s(t,o({},At(r.value,t,null),{position:a.position+1},n),!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:a}}function Rt(t){t=q(t);const e=kt(t),n=Ct(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=o({location:"",base:t,go:r,createHref:W.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}let Ot=function(t){return t[t["Static"]=0]="Static",t[t["Param"]=1]="Param",t[t["Group"]=2]="Group",t}({});var Nt=function(t){return t[t["Static"]=0]="Static",t[t["Param"]=1]="Param",t[t["ParamRegExp"]=2]="ParamRegExp",t[t["ParamRegExpEnd"]=3]="ParamRegExpEnd",t[t["EscapeNext"]=4]="EscapeNext",t}(Nt||{});const Dt={type:Ot.Static,value:""},xt=/[a-zA-Z0-9_]/;function Pt(t){if(!t)return[[]];if("/"===t)return[[Dt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=Nt.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(n===Nt.Static?s.push({type:Ot.Static,value:u}):n===Nt.Param||n===Nt.ParamRegExp||n===Nt.ParamRegExpEnd?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Ot.Param,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||n===Nt.ParamRegExp)switch(n){case Nt.Static:"/"===a?(u&&h(),o()):":"===a?(h(),n=Nt.Param):f();break;case Nt.EscapeNext:f(),n=r;break;case Nt.Param:"("===a?n=Nt.ParamRegExp:xt.test(a)?f():(h(),n=Nt.Static,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case Nt.ParamRegExp:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=Nt.ParamRegExpEnd:l+=a;break;case Nt.ParamRegExpEnd:h(),n=Nt.Static,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=Nt.EscapeNext;return n===Nt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}const Mt="[^/]+?",Lt={sensitive:!1,strict:!1,start:!0,end:!0};var Ft=function(t){return t[t["_multiplier"]=10]="_multiplier",t[t["Root"]=90]="Root",t[t["Segment"]=40]="Segment",t[t["SubSegment"]=30]="SubSegment",t[t["Static"]=40]="Static",t[t["Dynamic"]=20]="Dynamic",t[t["BonusCustomRegExp"]=10]="BonusCustomRegExp",t[t["BonusWildcard"]=-50]="BonusWildcard",t[t["BonusRepeatable"]=-20]="BonusRepeatable",t[t["BonusOptional"]=-8]="BonusOptional",t[t["BonusStrict"]=.7000000000000001]="BonusStrict",t[t["BonusCaseSensitive"]=.25]="BonusCaseSensitive",t}(Ft||{});const Ut=/[.+*?^${}()[\]/\\]/g;function Vt(t,e){const n=o({},Lt,e),r=[];let i=n.start?"^":"";const s=[];for(const o of t){const t=o.length?[]:[Ft.Root];n.strict&&!o.length&&(i+="/");for(let e=0;e<o.length;e++){const r=o[e];let a=Ft.Segment+(n.sensitive?Ft.BonusCaseSensitive:0);if(r.type===Ot.Static)e||(i+="/"),i+=r.value.replace(Ut,"\\$&"),a+=Ft.Static;else if(r.type===Ot.Param){const{value:t,repeatable:n,optional:c,regexp:u}=r;s.push({name:t,repeatable:n,optional:c});const l=u||Mt;l!==Mt&&(a+=Ft.BonusCustomRegExp);let h=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(h=c&&o.length<2?`(?:/${h})`:"/"+h),c&&(h+="?"),i+=h,a+=Ft.Dynamic,c&&(a+=Ft.BonusOptional),n&&(a+=Ft.BonusRepeatable),".*"===l&&(a+=Ft.BonusWildcard)}t.push(a)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=Ft.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(a),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function l(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(t.type===Ot.Static)n+=t.value;else if(t.type===Ot.Param){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:a,score:r,keys:s,parse:c,stringify:l}}function jt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&t[0]===Ft.Static+Ft.Segment?-1:1:t.length>e.length?1===e.length&&e[0]===Ft.Static+Ft.Segment?1:-1:0}function Bt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=jt(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if($t(r))return 1;if($t(i))return-1}return i.length-r.length}function $t(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kt={strict:!1,end:!0,sensitive:!1};function zt(t,e,n){const r=Vt(Pt(t.path),n);const i=o(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function Gt(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,u=Ht(t);u.aliasOf=r&&r.record;const f=l(e,t),d=[u];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(Ht(o({},u,{components:r?r.record.components:u.components,path:t,aliasOf:r?r.record:u})))}let p,g;for(const e of d){const{path:o}=e;if(n&&"/"!==o[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(o&&r+o)}if(p=zt(e,n,f),r?r.alias.push(p):(g=g||p,g!==p&&g.alias.push(p),i&&t.name&&!Qt(p)&&a(t.name)),Zt(p)&&h(p),u.children){const t=u.children;for(let e=0;e<t.length;e++)s(t[e],p,r&&r.children[e])}r=r||p}return g?()=>{a(g)}:c}function a(t){if(rt(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(a),e.alias.forEach(a))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(a),t.alias.forEach(a))}}function u(){return n}function h(t){const e=Yt(t,n);n.splice(e,0,t),t.record.name&&!Qt(t)&&r.set(t.record.name,t)}function f(t,e){let i,s,a,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw ot(it.MATCHER_NOT_FOUND,{location:t});0,a=i.record.name,c=o(qt(e.params,i.keys.filter(t=>!t.optional).concat(i.parent?i.parent.keys.filter(t=>t.optional):[]).map(t=>t.name)),t.params&&qt(t.params,i.keys.map(t=>t.name))),s=i.stringify(c)}else if(null!=t.path)s=t.path,i=n.find(t=>t.re.test(s)),i&&(c=i.parse(s),a=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw ot(it.MATCHER_NOT_FOUND,{location:t,currentLocation:e});a=i.record.name,c=o({},e.params,t.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:a,path:s,params:c,matched:u,meta:Xt(u)}}function d(){n.length=0,r.clear()}return e=l(Kt,e),t.forEach(t=>s(t)),{addRoute:s,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:u,getRecordMatcher:i}}function qt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ht(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Wt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Wt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function Qt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xt(t){return t.reduce((t,e)=>o(t,e.meta),{})}function Yt(t,e){let n=0,r=e.length;while(n!==r){const i=n+r>>1;Bt(t,e[i])<0?r=i:n=i+1}const i=Jt(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function Jt(t){let e=t;while(e=e.parent)if(Zt(e)&&0===Bt(t,e))return e}function Zt({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function te(t){const e=(0,Et.WQ)(gt),n=(0,Et.WQ)(mt);const r=(0,Et.EW)(()=>{const n=(0,Tt.R1)(t.to);return e.resolve(n)}),i=(0,Et.EW)(()=>{const{matched:t}=r.value,{length:e}=t,i=t[e-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(U.bind(null,i));if(o>-1)return o;const a=oe(t[e-2]);return e>1&&oe(i)===a&&s[s.length-1].path!==a?s.findIndex(U.bind(null,t[e-2])):o}),s=(0,Et.EW)(()=>i.value>-1&&se(n.params,r.value.params)),o=(0,Et.EW)(()=>i.value>-1&&i.value===n.matched.length-1&&V(n.params,r.value.params));function a(n={}){if(ie(n)){const n=e[(0,Tt.R1)(t.replace)?"replace":"push"]((0,Tt.R1)(t.to)).catch(c);return t.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:(0,Et.EW)(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function ee(t){return 1===t.length?t[0]:t}const ne=(0,Et.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:te,setup(t,{slots:e}){const n=(0,Tt.Kh)(te(t)),{options:r}=(0,Et.WQ)(gt),i=(0,Et.EW)(()=>({[ae(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ae(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&ee(e.default(n));return t.custom?r:(0,Et.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),re=ne;function ie(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function se(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function oe(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ae=(t,e,n)=>null!=t?t:null!=e?e:n,ce=(0,Et.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=(0,Et.WQ)(yt),i=(0,Et.EW)(()=>t.route||r.value),s=(0,Et.WQ)(pt,0),a=(0,Et.EW)(()=>{let t=(0,Tt.R1)(s);const{matched:e}=i.value;let n;while((n=e[t])&&!n.components)t++;return t}),c=(0,Et.EW)(()=>i.value.matched[a.value]);(0,Et.Gt)(pt,(0,Et.EW)(()=>a.value+1)),(0,Et.Gt)(dt,c),(0,Et.Gt)(yt,i);const u=(0,Tt.KR)();return(0,Et.wB)(()=>[u.value,c.value,t.name],([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&U(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const r=i.value,s=t.name,a=c.value,l=a&&a.components[s];if(!l)return ue(n.default,{Component:l,route:r});const h=a.props[s],f=h?!0===h?r.params:"function"===typeof h?h(r):h:null,d=t=>{t.component.isUnmounted&&(a.instances[s]=null)},p=(0,Et.h)(l,o({},f,e,{onVnodeUnmounted:d,ref:u}));return ue(n.default,{Component:p,route:r})||p}}});function ue(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const le=ce;function he(t){const e=Gt(t.routes,t),n=t.parseQuery||lt,i=t.stringifyQuery||ht,s=t.history;const l=vt(),h=vt(),f=vt(),d=(0,Tt.IJ)(K);let p=K;r&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=a.bind(null,t=>""+t),m=a.bind(null,O),y=a.bind(null,N);function v(t,n){let r,i;return rt(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function w(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function b(){return e.getRoutes().map(t=>t.record)}function _(t){return!!e.getRecordMatcher(t)}function E(t,r){if(r=o({},r||d.value),"string"===typeof t){const i=P(n,t,r.path),a=e.resolve({path:i.path},r),c=s.createHref(i.fullPath);return o(i,a,{params:y(a.params),hash:N(i.hash),redirectedFrom:void 0,href:c})}let a;if(null!=t.path)a=o({},t,{path:P(n,t.path,r.path).path});else{const e=o({},t.params);for(const t in e)null==e[t]&&delete e[t];a=o({},t,{params:m(e)}),r.params=m(r.params)}const c=e.resolve(a,r),u=t.hash||"";c.params=g(y(c.params));const l=M(i,o({},t,{hash:C(u),path:c.path})),h=s.createHref(l);return o({fullPath:l,hash:u,query:i===ht?ft(t.query):t.query||{}},c,{redirectedFrom:void 0,href:h})}function T(t){return"string"===typeof t?P(n,t,d.value.path):o({},t)}function I(t,e){if(p!==t)return ot(it.NAVIGATION_CANCELLED,{from:e,to:t})}function S(t){return R(t)}function A(t){return S(o(T(t),{replace:!0}))}function k(t,e){const n=t.matched[t.matched.length-1];if(n&&n.redirect){const{redirect:r}=n;let i="function"===typeof r?r(t,e):r;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=T(i):{path:i},i.params={}),o({query:t.query,hash:t.hash,params:null!=i.path?{}:t.params},i)}}function R(t,e){const n=p=E(t),r=d.value,s=t.state,a=t.force,c=!0===t.replace,u=k(n,r);if(u)return R(o(T(u),{state:"object"===typeof u?o({},s,u.state):s,force:a,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!a&&F(i,r,n)&&(h=ot(it.NAVIGATION_DUPLICATED,{to:l,from:r}),Z(r,r,!0,!1)),(h?Promise.resolve(h):L(l,r)).catch(t=>at(t)?at(t,it.NAVIGATION_GUARD_REDIRECT)?t:Q(t):H(t,l,r)).then(t=>{if(t){if(at(t,it.NAVIGATION_GUARD_REDIRECT))return R(o({replace:c},T(t.to),{state:"object"===typeof t.to?o({},s,t.to.state):s,force:a}),e||l)}else t=V(l,r,!0,c,s);return U(l,r,t),t})}function D(t,e){const n=I(t,e);return n?Promise.reject(n):Promise.resolve()}function x(t){const e=ct.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function L(t,e){let n;const[r,i,s]=_t(t,e);n=bt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach(r=>{n.push(wt(r,t,e))});const o=D.bind(null,t,e);return n.push(o),dt(n).then(()=>{n=[];for(const r of l.list())n.push(wt(r,t,e));return n.push(o),dt(n)}).then(()=>{n=bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(wt(r,t,e))});return n.push(o),dt(n)}).then(()=>{n=[];for(const r of s)if(r.beforeEnter)if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push(wt(i,t,e));else n.push(wt(r.beforeEnter,t,e));return n.push(o),dt(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=bt(s,"beforeRouteEnter",t,e,x),n.push(o),dt(n))).then(()=>{n=[];for(const r of h.list())n.push(wt(r,t,e));return n.push(o),dt(n)}).catch(t=>at(t,it.NAVIGATION_CANCELLED)?t:Promise.reject(t))}function U(t,e,n){f.list().forEach(r=>x(()=>r(t,e,n)))}function V(t,e,n,i,a){const c=I(t,e);if(c)return c;const u=e===K,l=r?history.state:{};n&&(i||u?s.replace(t.fullPath,o({scroll:u&&l&&l.scroll},a)):s.push(t.fullPath,a)),d.value=t,Z(t,e,n,u),Q()}let j;function B(){j||(j=s.listen((t,e,n)=>{if(!ut.listening)return;const i=E(t),a=k(i,ut.currentRoute.value);if(a)return void R(o(a,{replace:!0,force:!0}),i).catch(c);p=i;const u=d.value;r&&tt(J(u.fullPath,n.delta),X()),L(i,u).catch(t=>at(t,it.NAVIGATION_ABORTED|it.NAVIGATION_CANCELLED)?t:at(t,it.NAVIGATION_GUARD_REDIRECT)?(R(o(T(t.to),{force:!0}),i).then(t=>{at(t,it.NAVIGATION_ABORTED|it.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===z.pop&&s.go(-1,!1)}).catch(c),Promise.reject()):(n.delta&&s.go(-n.delta,!1),H(t,i,u))).then(t=>{t=t||V(i,u,!1),t&&(n.delta&&!at(t,it.NAVIGATION_CANCELLED)?s.go(-n.delta,!1):n.type===z.pop&&at(t,it.NAVIGATION_ABORTED|it.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),U(i,u,t)}).catch(c)}))}let $,G=vt(),q=vt();function H(t,e,n){Q(t);const r=q.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function W(){return $&&d.value!==K?Promise.resolve():new Promise((t,e)=>{G.add([t,e])})}function Q(t){return $||($=!t,B(),G.list().forEach(([e,n])=>t?n(t):e()),G.reset()),t}function Z(e,n,i,s){const{scrollBehavior:o}=t;if(!r||!o)return Promise.resolve();const a=!i&&et(J(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,Et.dY)().then(()=>o(e,n,a)).then(t=>t&&Y(t)).catch(t=>H(t,e,n))}const nt=t=>s.go(t);let st;const ct=new Set,ut={currentRoute:d,listening:!0,addRoute:v,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:b,resolve:E,options:t,push:S,replace:A,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:l.add,beforeResolve:h.add,afterEach:f.add,onError:q.add,isReady:W,install(t){t.component("RouterLink",re),t.component("RouterView",le),t.config.globalProperties.$router=ut,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,Tt.R1)(d)}),r&&!st&&d.value===K&&(st=!0,S(s.location).catch(t=>{0}));const e={};for(const r in K)Object.defineProperty(e,r,{get:()=>d.value[r],enumerable:!0});t.provide(gt,ut),t.provide(mt,(0,Tt.Gc)(e)),t.provide(yt,d);const n=t.unmount;ct.add(t),t.unmount=function(){ct.delete(t),ct.size<1&&(p=K,j&&j(),j=null,d.value=K,st=!1,$=!1),n()}}};function dt(t){return t.reduce((t,e)=>t.then(()=>x(e)),Promise.resolve())}return ut}function fe(){return(0,Et.WQ)(gt)}function de(t){return(0,Et.WQ)(mt)}},8551:function(t,e,n){var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},8622:function(t,e,n){var r=n(4576),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},8686:function(t,e,n){var r=n(3724),i=n(9039);t.exports=r&&i(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8745:function(t,e,n){var r=n(616),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},8872:function(t,e,n){n(8237)},8981:function(t,e,n){var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},8992:function(t,e,n){n(8111)},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},9297:function(t,e,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},9306:function(t,e,n){var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},9433:function(t,e,n){var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9462:function(t,e,n){var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=n(1385),p=a("toStringTag"),g="IteratorHelper",m="WrapForValidIterator",y="normal",v="throw",w=c.set,b=function(t){var e=c.getterFor(t?m:g);return o(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,t){var s=u(i,"return");return s?r(s,i):h(void 0,!0)}if(n.inner)try{f(n.inner.iterator,y)}catch(o){return f(i,v,o)}if(n.openIters)try{d(n.openIters,y)}catch(o){return f(i,v,o)}return i&&f(i,y),h(void 0,!0)}})},_=b(!0),E=b(!1);s(E,p,"Iterator Helper"),t.exports=function(t,e,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=e?m:g,i.returnHandlerResult=!!n,i.nextHandler=t,i.counter=0,i.done=!1,w(this,i)};return r.prototype=e?_:E,r}},9504:function(t,e,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},9519:function(t,e,n){var r,i,s=n(4576),o=n(2839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},9539:function(t,e,n){var r=n(9565),i=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},9565:function(t,e,n){var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},9577:function(t,e,n){var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),f=h&&function(){try{new Int8Array(1)["with"](-.5,1)}catch(t){return!0}}();l("with",{with:function(t,e){var n=c(this),i=o(t),l=s(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h||f)},9617:function(t,e,n){var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),c=s(a);if(0===c)return!t&&-1;var u,l=i(o,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},9675:function(t,e,n){n.d(e,{H9:function(){return rh},x7:function(){return Bh},aU:function(){return oh},BN:function(){return Kh},mZ:function(){return zh}});n(1454),n(4082),n(8992),n(3215),n(3949),n(1795),n(4520),n(2577),n(4979),n(8872),n(7550);var r,i=n(1776),s=n(852),o=n(1363),a=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,w.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",()=>{},e),h.removeEventListener("test",()=>{},e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}function O(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function N(t){return-1!=O().indexOf(t)}function D(t){return D[" "](t),t}function x(t,e){var n=br;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}D[" "]=function(){};var P,M,L=N("Opera"),F=N("Trident")||N("MSIE"),U=N("Edge"),V=U||F,j=N("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),B=-1!=O().toLowerCase().indexOf("webkit")&&!N("Edge");function $(){var t=h.document;return t?t.documentMode:void 0}t:{var K="",z=function(){var t=O();return j?/rv:([^\);]+)(\)|;)/.exec(t):U?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):B?/WebKit\/(\S+)/.exec(t):L?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(z&&(K=z?z[1]:""),F){var G=$();if(null!=G&&G>parseFloat(K)){P=String(G);break t}}P=K}if(h.document&&F){var q=$();M=q||(parseInt(P,10)||void 0)}else M=void 0;var H=M;function W(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(j){t:{try{D(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.$.h.call(this)}}_(W,A);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Y,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=I(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new J(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=bt(n),t&&t[X]?t.O(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=d(i)?!!i.capture:!!i,a=vt(t);if(a||(t[ct]=a=new st(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)k||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=bt(n),t&&t[X]?t.P(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);else r=d(r)?!!r.capture:!!r,n=bt(n),t&&t[X]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[X])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):Z(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function yt(t,e){if(t.fa)t=!0;else{e=new W(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gt(t),t=n.call(r,e)}return t}function vt(t){return t=t[ct],t instanceof st?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function _t(){E.call(this),this.i=new st(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;e=new A(r,t),it(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tt(o,r,!0,e)&&i}if(o=e.g=t,i=Tt(o,r,!0,e)&&i,i=Tt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tt(o,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ot(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(_t,E),_t.prototype[X]=!0,_t.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var It=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ct(){var t=Pt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class At{constructor(){this.h=this.g=null}add(t,e){const n=kt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var kt=new St(()=>new Rt,t=>t.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Nt(t){h.setTimeout(()=>{throw t},0)}let Dt,xt=!1,Pt=new At,Mt=()=>{const t=h.Promise.resolve(void 0);Dt=()=>{t.then(Lt)}};var Lt=()=>{for(var t;t=Ct();){try{t.h.call(t.g)}catch(n){Nt(n)}var e=kt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xt=!1};function Ft(t,e){_t.call(this),this.h=t||1,this.g=e||h,this.j=w(this.qb,this),this.l=Date.now()}function Ut(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Vt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function jt(t){t.g=Vt(()=>{t.g=null,t.i&&(t.i=!1,jt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Ft,_t),r=Ft.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Ut(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ft.$.N.call(this),Ut(this),delete this.g};class Bt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){E.call(this),this.h=t,this.g={}}_($t,E);var Kt=[];function zt(t,e,n,r){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var i=0;i<n.length;i++){var s=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Gt(t){tt(t.g,function(t,e){this.g.hasOwnProperty(e)&&gt(t)},t),t.g={}}function qt(){this.g=!0}function Ht(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o})}function Wt(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o})}function Qt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(r?" "+r:"")})}function Xt(t,e){t.info(function(){return"TIMEOUT: "+e})}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return It(n)}catch(a){return e}}$t.prototype.N=function(){$t.$.N.call(this),Gt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},qt.prototype.Ea=function(){this.g=!1},qt.prototype.info=function(){};var Jt={},Zt=null;function te(){return Zt=Zt||new _t}function ee(t){A.call(this,Jt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){A.call(this,Jt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();Et(e,new re(e,t))}function se(t,e){A.call(this,Jt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){t()},e)}Jt.Ta="serverreachability",_(ee,A),Jt.STAT_EVENT="statevent",_(re,A),Jt.Ua="timingevent",_(se,A);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ue(){}function le(t){return t.h||(t.h=t.i())}function he(){}ue.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){A.call(this,"d")}function ge(){A.call(this,"c")}function me(){}function ye(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new $t(this),this.P=we,t=V?125:void 0,this.V=new Ft(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}_(pe,A),_(ge,A),_(me,ue),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},fe=new me;var we=45e3,be={},_e={};function Ee(t,e,n){t.L=1,t.v=ze(Ve(e)),t.s=n,t.S=!0,Te(t,null)}function Te(t,e){t.G=Date.now(),Ae(t),t.A=Ve(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ve,t.g=ur(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Bt(w(t.Pa,t,t.g),t.O)),zt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Ht(t.j,t.u,t.A,t.m,t.W,t.s)}function Ie(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Ce(t,n),r==_e){4==e&&(t.o=4,ie(14),i=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==be){t.o=4,ie(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Qt(t.j,t.m,r,null),De(t,r)}Ie(t)&&r!=_e&&r!=be&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,ie(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),Ne(t),Oe(t))}function Ce(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?_e:(n=Number(e.substring(n,r)),isNaN(n)?be:(r+=1,r+n>e.length?_e:(e=e.slice(r,r+n),t.C=r+n,e)))}function Ae(t){t.Y=Date.now()+t.P,ke(t,t.P)}function ke(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(w(t.lb,t),e)}function Re(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Oe(t){0==t.l.H||t.J||ir(t.l,t)}function Ne(t){Re(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ut(t.V),Gt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function De(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),qn(n)}tr(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(w(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&rr(n),!R(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(dn(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,Ke(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Re(a),Ae(a)),r.g=o}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):Gn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ne(4)}catch(u){}}function xe(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Pe(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Me(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Pe(t),r=xe(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=ye.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Un(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Un(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||V||this.g&&(this.h.h||this.g.ja()||Vn(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),Re(this);var n=this.g.da();this.ca=n;e:if(Ie(this)){var r=Vn(this.g);t="";var i=r.length,s=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ne(this),Oe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Wt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ie(12),Ne(this),Oe(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,De(this,n)}this.S?(Se(this,l,o),V&&this.i&&3==l&&(zt(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),De(this,o)),4==l&&Ne(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,Ae(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),Ne(this),Oe(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Un(this.g),e=this.g.ja();this.C<e.length&&(Re(this),Se(this,t,e),this.i&&4!=t&&Ae(this))}},r.cancel=function(){this.J=!0,Ne(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Xt(this.j,this.A),2!=this.L&&(ne(),ie(17)),Ne(this),this.o=2,Oe(this)):ke(this,this.Y-t)};var Le=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ue(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ue){this.h=t.h,je(this,t.j),this.s=t.s,this.g=t.g,Be(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$e(this,n),this.o=t.o}else t&&(e=String(t).match(Le))?(this.h=!1,je(this,e[1]||"",!0),this.s=Ge(e[2]||""),this.g=Ge(e[3]||"",!0),Be(this,e[4]),this.l=Ge(e[5]||"",!0),$e(this,e[6]||"",!0),this.o=Ge(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function Ve(t){return new Ue(t)}function je(t,e,n){t.j=n?Ge(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $e(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=qe(e,Ye)),t.i=new Ze(e,t.h))}function Ke(t,e,n){t.i.set(e,n)}function ze(t){return Ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ge(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,He),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function He(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ue.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qe(e,We,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(qe(e,We,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(qe(n,"/"==n.charAt(0)?Xe:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qe(n,Je)),t.join("")};var We=/[#\/\?@]/g,Qe=/[#\?:]/g,Xe=/[#\?]/g,Ye=/[#\?@]/g,Je=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Fe(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),S(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))},t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||un,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function yn(){this.g=new mn}function vn(t,e,n){const r=n||"";try{Me(t,function(t,n){let i=t;d(t)&&(i=It(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wn(t,e){const n=new qt;if(h.Image){const r=new Image;r.onload=b(bn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(bn,n,r,"TestLoadImage: error",!1,e),r.onabort=b(bn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(bn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function bn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function _n(t){this.l=t.fc||null,this.j=t.ob||!1}function En(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_(_n,ue),_n.prototype.g=function(){return new En(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),_(En,_t);var Tn=0;function In(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cn(t)}function Cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=Tn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):Cn(this),3==this.readyState&&In(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},r.Ya=function(t){this.g&&(this.response=t,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var An=h.JSON.parse;function kn(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rn,this.L=this.M=!1}_(kn,_t);var Rn="",On=/^https?$/i,Nn=["POST","PUT"];function Dn(t){return F&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function xn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pn(t),Ln(t)}function Pn(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Mn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Un(t)||2!=t.da()))if(t.v&&4==Un(t))Vt(t.La,0,t);else if(Et(t,"readystatechange"),4==Un(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Le)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!On.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Un(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Pn(t)}}finally{Ln(t)}}}function Ln(t,e){if(t.g){Fn(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}function Vn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Wr){return null}}function jn(t){const e={};t=(t.g&&2<=Un(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(R(t[r]))continue;var n=Ot(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}et(e,function(t){return t.join(", ")})}function Bn(t){let e="";return tt(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function $n(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Bn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ke(t,e,n))}function Kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zn(t){this.Ga=0,this.j=[],this.l=new qt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kn("baseRetryDelayMs",5e3,t),this.hb=Kn("retryDelaySeedMs",1e4,t),this.eb=Kn("forwardChannelMaxRetries",2,t),this.xa=Kn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new yn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Gn(t){if(Hn(t),3==t.H){var e=t.W++,n=Ve(t.I);if(Ke(n,"SID",t.K),Ke(n,"RID",e),Ke(n,"TYPE","terminate"),Yn(t,n),e=new ye(t,t.l,e),e.L=2,e.v=ze(Ve(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=ur(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ae(e)}ar(t)}function qn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Hn(t){qn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Wn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;Dt||Mt(),xt||(Dt(),xt=!0),Pt.add(e,t),t.C=0}}function Qn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(w(t.Na,t,e),sr(t,t.C)),t.C++,!0))}function Xn(t,e){var n;n=e?e.m:t.W++;const r=Ve(t.I);Ke(r,"SID",t.K),Ke(r,"RID",n),Ke(r,"AID",t.V),Yn(t,r),t.o&&t.s&&$n(r,t.o,t.s),n=new ye(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Jn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Yn(t,e){t.na&&tt(t.na,function(t,n){Ke(e,n,t)}),t.h&&Me({},function(t,n){Ke(e,n,t)})}function Jn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?w(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),s=!1;else try{vn(a,t,"req"+n+"_")}catch(si){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Dt||Mt(),xt||(Dt(),xt=!0),Pt.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(w(t.Ma,t),sr(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new ye(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ve(t.wa);Ke(e,"RID","rpc"),Ke(e,"SID",t.K),Ke(e,"AID",t.V),Ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ke(e,"TO",t.qa),Ke(e,"TYPE","xmlhttp"),Yn(t,e),t.o&&t.s&&$n(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ze(Ve(e)),n.s=null,n.S=!0,Te(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ir(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=te(),Et(r,new se(r,n)),Wn(t)}else Zn(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&Qn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}function sr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=w(t.pb,t);n||(n=new Ue("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||je(n,"https"),ze(n)),wn(n.toString(),r)}else ie(2);t.H=0,t.h&&t.h.za(e),ar(t),Hn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(C(t.ma,e),C(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function cr(t,e,n){var r=n instanceof Ue?Ve(n):new Ue(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Be(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ue(null);r&&je(s,r),e&&(s.g=e),i&&Be(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ke(r,n,e),Ke(r,"VER",t.ra),Yn(t,r),r}function ur(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new kn(new _n({ob:!0})):new kn(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(F&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function fr(t,e){_t.call(this),this.g=new zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){ge.call(this),this.status=1}function gr(t){this.g=t}function mr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function wr(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=kn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void xn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=h.FormData&&t instanceof h.FormData,!(0<=I(Nn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Dn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=Vt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){xn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Ln(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),kn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Mn(this):this.kb())},r.kb=function(){Mn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),An(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ye(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nt(s),it(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Jn(this,i,e),n=Ve(this.I),Ke(n,"RID",t),Ke(n,"CVER",22),this.F&&Ke(n,"X-HTTP-Session-Id",this.F),Yn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Bn(s)))+"&"+e:this.o&&$n(n,this.o,s)),dn(this.i,i),this.bb&&Ke(n,"TYPE","init"),this.P?(Ke(n,"$req",e),Ke(n,"SID","null"),i.aa=!0,Ee(i,n,null)):Ee(i,n,e),this.H=2}}else 3==this.H&&(t?Xn(this,t):0==this.j.length||ln(this.i)||Xn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(w(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),qn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,qn(this),tr(this),ie(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},_(fr,_t),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cr(t,null,t.Y),Wn(t)},fr.prototype.close=function(){Gn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=It(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Wn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,Gn(this.g),delete this.g,fr.$.N.call(this)},_(dr,pe),_(pr,ge),_(gr,lr),gr.prototype.Ba=function(){Et(this.g,"a")},gr.prototype.Aa=function(t){Et(this.g,new dr(t))},gr.prototype.za=function(t){Et(this.g,new pr)},gr.prototype.ya=function(){Et(this.g,"b")},_(yr,mr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)vr(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){vr(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){vr(this,r),i=0;break}}this.h=i,this.i+=e},yr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var br={};function _r(t){return-128<=t&&128>t?x(t,function(t){return new wr([0|t],0>t?-1:0)}):new wr([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return Or(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ir;return new wr(e,0)}function Tr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Or(Tr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Sr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Er(Math.pow(e,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Ir=4294967296,Sr=_r(0),Cr=_r(1),Ar=_r(16777216);function kr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Rr(t){return-1==t.h}function Or(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new wr(n,~t.h).add(Cr)}function Nr(t,e){return t.add(Or(e))}function Dr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function xr(t,e){this.g=t,this.h=e}function Pr(t,e){if(kr(e))throw Error("division by zero");if(kr(t))return new xr(Sr,Sr);if(Rr(t))return e=Pr(Or(t),e),new xr(Or(e.g),Or(e.h));if(Rr(e))return e=Pr(t,Or(e)),new xr(Or(e.g),e.h);if(30<t.g.length){if(Rr(t)||Rr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=e;0>=r.X(t);)n=Mr(n),r=Mr(r);var i=Lr(n,1),s=Lr(r,1);for(r=Lr(r,2),n=Lr(n,2);!kr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Lr(r,1),n=Lr(n,1)}return e=Nr(t,i.R(e)),new xr(i,e)}for(i=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(e);Rr(o)||0<o.X(t);)n-=r,s=Er(n),o=s.R(e);kr(s)&&(s=Cr),i=i.add(s),t=Nr(t,o)}return new xr(i,t)}function Mr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new wr(n,t.h)}function Lr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new wr(i,t.h)}r=wr.prototype,r.ea=function(){if(Rr(this))return-Or(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ir+r)*e,e*=Ir}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kr(this))return"0";if(Rr(this))return"-"+Or(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var i=Pr(n,e).g;n=Nr(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=Nr(this,t),Rr(t)?-1:kr(t)?0:1},r.abs=function(){return Rr(this)?Or(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(kr(this)||kr(t))return Sr;if(Rr(this))return Rr(t)?Or(this).R(Or(t)):Or(Or(this).R(t));if(Rr(t))return Or(this.R(Or(t)));if(0>this.X(Ar)&&0>t.X(Ar))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Dr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Dr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Dr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Dr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new wr(n,0)},r.gb=function(t){return Pr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new wr(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new wr(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new wr(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",_t.prototype.listen=_t.prototype.O,kn.prototype.listenOnce=kn.prototype.P,kn.prototype.getLastError=kn.prototype.Sa,kn.prototype.getLastErrorCode=kn.prototype.Ia,kn.prototype.getStatus=kn.prototype.da,kn.prototype.getResponseJson=kn.prototype.Wa,kn.prototype.getResponseText=kn.prototype.ja,kn.prototype.send=kn.prototype.ha,kn.prototype.setWithCredentials=kn.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=Er,wr.fromString=Tr;var Fr=u.createWebChannelTransport=function(){return new hr},Ur=u.getStatEventTarget=function(){return te()},Vr=u.ErrorCode=ae,jr=u.EventType=ce,Br=u.Event=Jt,$r=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Kr=u.FetchXmlHttpFactory=_n,zr=u.WebChannel=he,Gr=u.XhrIo=kn,qr=u.Md5=yr,Hr=u.Integer=wr;const Wr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qr.UNAUTHENTICATED=new Qr(null),Qr.GOOGLE_CREDENTIALS=new Qr("google-credentials-uid"),Qr.FIRST_PARTY=new Qr("first-party-uid"),Qr.MOCK_USER=new Qr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xr="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new o.Vy("@firebase/firestore");function Jr(){return Yr.logLevel}function Zr(t,...e){if(Yr.logLevel<=o.$b.DEBUG){const n=e.map(ni);Yr.debug(`Firestore (${Xr}): ${t}`,...n)}}function ti(t,...e){if(Yr.logLevel<=o.$b.ERROR){const n=e.map(ni);Yr.error(`Firestore (${Xr}): ${t}`,...n)}}function ei(t,...e){if(Yr.logLevel<=o.$b.WARN){const n=e.map(ni);Yr.warn(`Firestore (${Xr}): ${t}`,...n)}}function ni(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t="Unexpected state"){const e=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function ii(t,e){t||ri()}function si(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Qr.UNAUTHENTICATED))}shutdown(){}}class hi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class fi{constructor(t){this.t=t,this.currentUser=Qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ii("string"==typeof e.accessToken),new ui(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ii(null===t||"string"==typeof t),new Qr(t)}}class di{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Qr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new di(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(Qr.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mi{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(ii("string"==typeof t.token),this.T=t.token,new gi(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=yi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function wi(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return _i.fromMillis(Date.now())}static fromDate(t){return _i.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new _i(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?wi(this.nanoseconds,t.nanoseconds):wi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ei(t)}static min(){return new Ei(new _i(0,0))}static max(){return new Ei(new _i(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e,n){void 0===e?e=0:e>t.length&&ri(),void 0===n?n=t.length-e:n>t.length-e&&ri(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ti.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ti?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ii extends Ti{construct(t,e,n){return new Ii(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ai(oi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new Ii(e)}static emptyPath(){return new Ii([])}}const Si=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ci extends Ti{construct(t,e,n){return new Ci(t,e,n)}static isValidIdentifier(t){return Si.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ci.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ci(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ai(oi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ai(oi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ai(oi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ci(e)}static emptyPath(){return new Ci([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t){this.path=t}static fromPath(t){return new Ai(Ii.fromString(t))}static fromName(t){return new Ai(Ii.fromString(t).popFirst(5))}static empty(){return new Ai(Ii.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ii.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ii.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ai(new Ii(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ki.UNKNOWN_ID=-1;function Ri(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ei.fromTimestamp(1e9===r?new _i(n+1,0):new _i(n,r));return new Ni(i,Ai.empty(),e)}function Oi(t){return new Ni(t.readTime,t.key,-1)}class Ni{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ni(Ei.min(),Ai.empty(),-1)}static max(){return new Ni(Ei.max(),Ai.empty(),-1)}}function Di(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ai.comparator(t.documentKey,e.documentKey),0!==n?n:wi(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const xi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t){if(t.code!==oi.FAILED_PRECONDITION||t.message!==xi)throw t;Zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Li((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Li?e:Li.resolve(e)}catch(t){return Li.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Li.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Li.reject(e)}static resolve(t){return new Li((e,n)=>{e(t)})}static reject(t){return new Li((e,n)=>{n(t)})}static waitFor(t){return new Li((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Li.resolve(!1);for(const n of t)e=e.next(t=>t?Li.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new Li((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{s[c]=t,++o,o===i&&n(s)},t=>r(t))}})}static doWhile(t,e){return new Li((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Vi(t){return null==t}function ji(t){return 0===t&&1/t==-1/0}function Bi(t){return"number"==typeof t&&Number.isInteger(t)&&!ji(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui.ct=-1;const $i=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ki=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zi=Ki;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e){this.comparator=t,this.root=e||Xi.EMPTY}insert(t,e){return new Wi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xi.BLACK,null,null))}remove(t){return new Wi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qi(this.root,t,this.comparator,!0)}}class Qi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xi{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Xi.RED,this.left=null!=r?r:Xi.EMPTY,this.right=null!=i?i:Xi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Xi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Xi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const t=this.left.check();if(t!==this.right.check())throw ri();return t+(this.isRed()?0:1)}}Xi.EMPTY=null,Xi.RED=!0,Xi.BLACK=!1,Xi.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Xi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t){this.comparator=t,this.data=new Wi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ji(this.data.getIterator())}getIteratorFrom(t){return new Ji(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Yi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Yi(this.comparator);return e.data=t,e}}class Ji{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(t){this.fields=t,t.sort(Ci.comparator)}static empty(){return new Zi([])}unionWith(t){let e=new Yi(Ci.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Zi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return bi(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ts("Invalid base64 string: "+t):t}}(t);return new es(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new es(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}es.EMPTY_BYTE_STRING=new es("");const ns=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(t){if(ii(!!t),"string"==typeof t){let e=0;const n=ns.exec(t);if(ii(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:is(t.seconds),nanos:is(t.nanos)}}function is(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ss(t){return"string"==typeof t?es.fromBase64String(t):es.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function as(t){const e=t.mapValue.fields.__previous_value__;return os(e)?as(e):e}function cs(t){const e=rs(t.mapValue.fields.__local_write_time__.timestampValue);return new _i(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class ls{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ls("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ls&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?os(t)?4:Ss(t)?9007199254740991:10:ri()}function ds(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cs(t).isEqual(cs(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=rs(t.timestampValue),r=rs(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ss(t.bytesValue).isEqual(ss(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return is(t.geoPointValue.latitude)===is(e.geoPointValue.latitude)&&is(t.geoPointValue.longitude)===is(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return is(t.integerValue)===is(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=is(t.doubleValue),r=is(e.doubleValue);return n===r?ji(n)===ji(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],ds);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Gi(n)!==Gi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ds(n[i],r[i])))return!1;return!0}(t,e);default:return ri()}}function ps(t,e){return void 0!==(t.values||[]).find(t=>ds(t,e))}function gs(t,e){if(t===e)return 0;const n=fs(t),r=fs(e);if(n!==r)return wi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return wi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=is(t.integerValue||t.doubleValue),r=is(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ms(t.timestampValue,e.timestampValue);case 4:return ms(cs(t),cs(e));case 5:return wi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ss(t),r=ss(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=wi(n[i],r[i]);if(0!==t)return t}return wi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=wi(is(t.latitude),is(e.latitude));return 0!==n?n:wi(is(t.longitude),is(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=gs(n[i],r[i]);if(t)return t}return wi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===hs.mapValue&&e===hs.mapValue)return 0;if(t===hs.mapValue)return 1;if(e===hs.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=wi(r[o],s[o]);if(0!==t)return t;const e=gs(n[r[o]],i[s[o]]);if(0!==e)return e}return wi(r.length,s.length)}(t.mapValue,e.mapValue);default:throw ri()}}function ms(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return wi(t,e);const n=rs(t),r=rs(e),i=wi(n.seconds,r.seconds);return 0!==i?i:wi(n.nanos,r.nanos)}function ys(t){return vs(t)}function vs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=rs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ss(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ai.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=vs(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${vs(t.fields[i])}`;return n+"}"}(t.mapValue):ri();var e,n}function ws(t){return!!t&&"integerValue"in t}function bs(t){return!!t&&"arrayValue"in t}function _s(t){return!!t&&"nullValue"in t}function Es(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ts(t){return!!t&&"mapValue"in t}function Is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qi(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Is(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ss(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(t){this.value=t}static empty(){return new Cs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ts(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Is(e)}setAll(t){let e=Ci.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Is(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ts(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ds(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){qi(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new Cs(Is(this.value))}}function As(t){const e=[];return qi(t.fields,(t,n)=>{const r=new Ci([t]);if(Ts(n)){const t=As(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new Zi(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ks{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new ks(t,0,Ei.min(),Ei.min(),Ei.min(),Cs.empty(),0)}static newFoundDocument(t,e,n,r){return new ks(t,1,e,Ei.min(),n,r,0)}static newNoDocument(t,e){return new ks(t,2,e,Ei.min(),Ei.min(),Cs.empty(),0)}static newUnknownDocument(t,e){return new ks(t,3,e,Ei.min(),Ei.min(),Cs.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Cs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Cs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ks&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ks(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e){this.position=t,this.inclusive=e}}function Os(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ai.comparator(Ai.fromName(o.referenceValue),n.key):gs(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ns(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ds(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e="asc"){this.field=t,this.dir=e}}function xs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{}class Ms extends Ps{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ks(t,e,n):"array-contains"===e?new Hs(t,n):"in"===e?new Ws(t,n):"not-in"===e?new Qs(t,n):"array-contains-any"===e?new Xs(t,n):new Ms(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new zs(t,n):new Gs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(gs(e,this.value)):null!==e&&fs(this.value)===fs(e)&&this.matchesComparison(gs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ls extends Ps{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new Ls(t,e)}matches(t){return Fs(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(t=>t.isInequality());return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Fs(t){return"and"===t.op}function Us(t){return Vs(t)&&Fs(t)}function Vs(t){for(const e of t.filters)if(e instanceof Ls)return!1;return!0}function js(t){if(t instanceof Ms)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(Us(t))return t.filters.map(t=>js(t)).join(",");{const e=t.filters.map(t=>js(t)).join(",");return`${t.op}(${e})`}}function Bs(t,e){return t instanceof Ms?function(t,e){return e instanceof Ms&&t.op===e.op&&t.field.isEqual(e.field)&&ds(t.value,e.value)}(t,e):t instanceof Ls?function(t,e){return e instanceof Ls&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&Bs(n,e.filters[r]),!0)}(t,e):void ri()}function $s(t){return t instanceof Ms?function(t){return`${t.field.canonicalString()} ${t.op} ${ys(t.value)}`}(t):t instanceof Ls?function(t){return t.op.toString()+" {"+t.getFilters().map($s).join(" ,")+"}"}(t):"Filter"}class Ks extends Ms{constructor(t,e,n){super(t,e,n),this.key=Ai.fromName(n.referenceValue)}matches(t){const e=Ai.comparator(t.key,this.key);return this.matchesComparison(e)}}class zs extends Ms{constructor(t,e){super(t,"in",e),this.keys=qs("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Gs extends Ms{constructor(t,e){super(t,"not-in",e),this.keys=qs("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function qs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>Ai.fromName(t.referenceValue))}class Hs extends Ms{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bs(e)&&ps(e.arrayValue,this.value)}}class Ws extends Ms{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ps(this.value.arrayValue,e)}}class Qs extends Ms{constructor(t,e){super(t,"not-in",e)}matches(t){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ps(this.value.arrayValue,e)}}class Xs extends Ms{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ps(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function Js(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ys(t,e,n,r,i,s,o)}function Zs(t){const e=si(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>js(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Vi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>ys(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>ys(t)).join(",")),e.dt=t}return e.dt}function to(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xs(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bs(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ns(t.startAt,e.startAt)&&Ns(t.endAt,e.endAt)}function eo(t){return Ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function ro(t,e,n,r,i,s,o,a){return new no(t,e,n,r,i,s,o,a)}function io(t){return new no(t)}function so(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function oo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ao(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function co(t){return null!==t.collectionGroup}function uo(t){const e=si(t);if(null===e.wt){e.wt=[];const t=ao(e),n=oo(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Ds(t)),e.wt.push(new Ds(Ci.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ds(Ci.keyField(),t))}}}return e.wt}function lo(t){const e=si(t);if(!e._t)if("F"===e.limitType)e._t=Js(e.path,e.collectionGroup,uo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of uo(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Ds(i.field,e))}const n=e.endAt?new Rs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Rs(e.startAt.position,e.startAt.inclusive):null;e._t=Js(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function ho(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fo(t,e){return to(lo(t),lo(e))&&t.limitType===e.limitType}function po(t){return`${Zs(lo(t))}|lt:${t.limitType}`}function go(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>$s(t)).join(", ")}]`),Vi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>ys(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>ys(t)).join(",")),`Target(${e})`}(lo(t))}; limitType=${t.limitType})`}function mo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ai.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of uo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Os(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,uo(t),e))&&!(t.endAt&&!function(t,e,n){const r=Os(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,uo(t),e))}(t,e)}function yo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vo(t){return(e,n)=>{let r=!1;for(const i of uo(t)){const t=wo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function wo(t,e,n){const r=t.field.isKeyField()?Ai.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?gs(r,i):ri()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){qi(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return Hi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Wi(Ai.comparator);function Eo(){return _o}const To=new Wi(Ai.comparator);function Io(...t){let e=To;for(const n of t)e=e.insert(n.key,n);return e}function So(t){let e=To;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Co(){return ko()}function Ao(){return ko()}function ko(){return new bo(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ro=new Wi(Ai.comparator),Oo=new Yi(Ai.comparator);function No(...t){let e=Oo;for(const n of t)e=e.add(n);return e}const Do=new Yi(wi);function xo(){return Do}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(e)?"-0":e}}function Mo(t){return{integerValue:""+t}}function Lo(t,e){return Bi(e)?Mo(e):Po(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this._=void 0}}function Uo(t,e,n){return t instanceof Bo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&os(e)&&(e=as(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof $o?Ko(t,e):t instanceof zo?Go(t,e):function(t,e){const n=jo(t,e),r=Ho(n)+Ho(t.gt);return ws(n)&&ws(t.gt)?Mo(r):Po(t.serializer,r)}(t,e)}function Vo(t,e,n){return t instanceof $o?Ko(t,e):t instanceof zo?Go(t,e):n}function jo(t,e){return t instanceof qo?ws(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Bo extends Fo{}class $o extends Fo{constructor(t){super(),this.elements=t}}function Ko(t,e){const n=Wo(e);for(const r of t.elements)n.some(t=>ds(t,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends Fo{constructor(t){super(),this.elements=t}}function Go(t,e){let n=Wo(e);for(const r of t.elements)n=n.filter(t=>!ds(t,r));return{arrayValue:{values:n}}}class qo extends Fo{constructor(t,e){super(),this.serializer=t,this.gt=e}}function Ho(t){return is(t.integerValue||t.doubleValue)}function Wo(t){return bs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof $o&&e instanceof $o||t instanceof zo&&e instanceof zo?bi(t.elements,e.elements,ds):t instanceof qo&&e instanceof qo?ds(t.gt,e.gt):t instanceof Bo&&e instanceof Bo}(t.transform,e.transform)}class Xo{constructor(t,e){this.version=t,this.transformResults=e}}class Yo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Yo}static exists(t){return new Yo(void 0,t)}static updateTime(t){return new Yo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Zo{}function ta(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new la(t.key,Yo.none()):new sa(t.key,t.data,Yo.none());{const n=t.data,r=Cs.empty();let i=new Yi(Ci.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new oa(t.key,r,new Zi(i.toArray()),Yo.none())}}function ea(t,e,n){t instanceof sa?function(t,e,n){const r=t.value.clone(),i=ca(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof oa?function(t,e,n){if(!Jo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ca(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(aa(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function na(t,e,n,r){return t instanceof sa?function(t,e,n,r){if(!Jo(t.precondition,e))return n;const i=t.value.clone(),s=ua(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof oa?function(t,e,n,r){if(!Jo(t.precondition,e))return n;const i=ua(t.fieldTransforms,r,e),s=e.data;return s.setAll(aa(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return Jo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ra(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=jo(r.transform,t||null);null!=i&&(null===n&&(n=Cs.empty()),n.set(r.field,i))}return n||null}function ia(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&bi(t,e,(t,e)=>Qo(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends Zo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class oa extends Zo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aa(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ca(t,e,n){const r=new Map;ii(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Vo(o,a,n[i]))}return r}function ua(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Uo(t,s,e))}return r}class la extends Zo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ha extends Zo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ea(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=na(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=na(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ao();return this.mutations.forEach(r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=ta(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ei.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),No())}isEqual(t){return this.batchId===t.batchId&&bi(this.mutations,t.mutations,(t,e)=>ia(t,e))&&bi(this.baseMutations,t.baseMutations,(t,e)=>ia(t,e))}}class da{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ii(t.mutations.length===n.length);let r=Ro;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new da(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ga{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ma,ya;function va(t){switch(t){default:return ri();case oi.CANCELLED:case oi.UNKNOWN:case oi.DEADLINE_EXCEEDED:case oi.RESOURCE_EXHAUSTED:case oi.INTERNAL:case oi.UNAVAILABLE:case oi.UNAUTHENTICATED:return!1;case oi.INVALID_ARGUMENT:case oi.NOT_FOUND:case oi.ALREADY_EXISTS:case oi.PERMISSION_DENIED:case oi.FAILED_PRECONDITION:case oi.ABORTED:case oi.OUT_OF_RANGE:case oi.UNIMPLEMENTED:case oi.DATA_LOSS:return!0}}function wa(t){if(void 0===t)return ti("GRPC error has no .code"),oi.UNKNOWN;switch(t){case ma.OK:return oi.OK;case ma.CANCELLED:return oi.CANCELLED;case ma.UNKNOWN:return oi.UNKNOWN;case ma.DEADLINE_EXCEEDED:return oi.DEADLINE_EXCEEDED;case ma.RESOURCE_EXHAUSTED:return oi.RESOURCE_EXHAUSTED;case ma.INTERNAL:return oi.INTERNAL;case ma.UNAVAILABLE:return oi.UNAVAILABLE;case ma.UNAUTHENTICATED:return oi.UNAUTHENTICATED;case ma.INVALID_ARGUMENT:return oi.INVALID_ARGUMENT;case ma.NOT_FOUND:return oi.NOT_FOUND;case ma.ALREADY_EXISTS:return oi.ALREADY_EXISTS;case ma.PERMISSION_DENIED:return oi.PERMISSION_DENIED;case ma.FAILED_PRECONDITION:return oi.FAILED_PRECONDITION;case ma.ABORTED:return oi.ABORTED;case ma.OUT_OF_RANGE:return oi.OUT_OF_RANGE;case ma.UNIMPLEMENTED:return oi.UNIMPLEMENTED;case ma.DATA_LOSS:return oi.DATA_LOSS;default:return ri()}}(ya=ma||(ma={}))[ya.OK=0]="OK",ya[ya.CANCELLED=1]="CANCELLED",ya[ya.UNKNOWN=2]="UNKNOWN",ya[ya.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ya[ya.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ya[ya.NOT_FOUND=5]="NOT_FOUND",ya[ya.ALREADY_EXISTS=6]="ALREADY_EXISTS",ya[ya.PERMISSION_DENIED=7]="PERMISSION_DENIED",ya[ya.UNAUTHENTICATED=16]="UNAUTHENTICATED",ya[ya.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ya[ya.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ya[ya.ABORTED=10]="ABORTED",ya[ya.OUT_OF_RANGE=11]="OUT_OF_RANGE",ya[ya.UNIMPLEMENTED=12]="UNIMPLEMENTED",ya[ya.INTERNAL=13]="INTERNAL",ya[ya.UNAVAILABLE=14]="UNAVAILABLE",ya[ya.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return _a}static getOrCreateInstance(){return null===_a&&(_a=new ba),_a}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let _a=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Hr([4294967295,4294967295],0);function Ia(t){const e=Ea().encode(t),n=new qr;return n.update(e),new Uint8Array(n.digest())}function Sa(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class Ca{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Aa(`Invalid padding: ${e}`);if(n<0)throw new Aa(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Aa(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Aa(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=Hr.fromNumber(this.It)}Et(t,e,n){let r=t.add(e.multiply(Hr.fromNumber(n)));return 1===r.compare(Ta)&&(r=new Hr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=Ia(t),[n,r]=Sa(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);if(!this.At(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Ca(i,r,e);return n.forEach(t=>s.insert(t)),s}insert(t){if(0===this.It)return;const e=Ia(t),[n,r]=Sa(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);this.Rt(t)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Ra.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ka(Ei.min(),r,new Wi(wi),Eo(),No())}}class Ra{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ra(n,e,No(),No(),No())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,n,r){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=r}}class Na{constructor(t,e){this.targetId=t,this.Vt=e}}class Da{constructor(t,e,n=es.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class xa{constructor(){this.St=0,this.Dt=La(),this.Ct=es.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=No(),e=No(),n=No();return this.Dt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ri()}}),new Ra(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=La()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Pa{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Eo(),this.zt=Ma(),this.Wt=new Wi(wi)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:ri()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach((t,n)=>{this.te(n)&&e(n)})}ne(t){var e;const n=t.targetId,r=t.Vt.count,i=this.se(n);if(i){const s=i.target;if(eo(s))if(0===r){const t=new Ai(s.path);this.Yt(n,t,ks.newNoDocument(t,Ei.min()))}else ii(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(t,i);if(0!==r){this.ee(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=ba.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,s,o,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:r}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=ss(i).toUint8Array()}catch(t){if(t instanceof ts)return ei("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new Ca(a,s,o)}catch(t){return ei(t instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:r!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(s)||(this.Yt(t,n,null),r++)}),r}ce(t){const e=new Map;this.Qt.forEach((n,r)=>{const i=this.se(r);if(i){if(n.current&&eo(i.target)){const e=new Ai(i.target.path);null!==this.jt.get(e)||this.ae(r,e)||this.Yt(r,e,ks.newNoDocument(e,t))}n.Mt&&(e.set(r,n.Ot()),n.Ft())}});let n=No();this.zt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.jt.forEach((e,n)=>n.setReadTime(t));const r=new ka(t,e,this.Wt,this.jt,n);return this.jt=Eo(),this.zt=Ma(),this.Wt=new Wi(wi),r}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,e)?r.Bt(e,1):r.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new xa,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new Yi(wi),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||Zr("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new xa),this.Gt.getRemoteKeysForTarget(t).forEach(e=>{this.Yt(t,e,null)})}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function Ma(){return new Wi(Ai.comparator)}function La(){return new Wi(Ai.comparator)}const Fa=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ua=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Va=(()=>{const t={and:"AND",or:"OR"};return t})();class ja{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ba(t,e){return t.useProto3Json||Vi(e)?e:{value:e}}function $a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ka(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function za(t,e){return $a(t,e.toTimestamp())}function Ga(t){return ii(!!t),Ei.fromTimestamp(function(t){const e=rs(t);return new _i(e.seconds,e.nanos)}(t))}function qa(t,e){return function(t){return new Ii(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ha(t){const e=Ii.fromString(t);return ii(mc(e)),e}function Wa(t,e){return qa(t.databaseId,e.path)}function Qa(t,e){const n=Ha(e);if(n.get(1)!==t.databaseId.projectId)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ai(Za(n))}function Xa(t,e){return qa(t.databaseId,e)}function Ya(t){const e=Ha(t);return 4===e.length?Ii.emptyPath():Za(e)}function Ja(t){return new Ii(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Za(t){return ii(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function tc(t,e,n){return{name:Wa(t,e),fields:n.value.mapValue.fields}}function ec(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ri()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(ii(void 0===e||"string"==typeof e),es.fromBase64String(e||"")):(ii(void 0===e||e instanceof Uint8Array),es.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?oi.UNKNOWN:wa(t.code);return new ai(e,t.message||"")}(o);n=new Da(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qa(t,r.document.name),s=Ga(r.document.updateTime),o=r.document.createTime?Ga(r.document.createTime):Ei.min(),a=new Cs({mapValue:{fields:r.document.fields}}),c=ks.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Oa(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qa(t,r.document),s=r.readTime?Ga(r.readTime):Ei.min(),o=ks.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Oa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qa(t,r.document),s=r.removedTargetIds||[];n=new Oa([],s,i,null)}else{if(!("filter"in e))return ri();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new ga(r,i),o=t.targetId;n=new Na(o,s)}}return n}function nc(t,e){let n;if(e instanceof sa)n={update:tc(t,e.key,e.value)};else if(e instanceof la)n={delete:Wa(t,e.key)};else if(e instanceof oa)n={update:tc(t,e.key,e.data),updateMask:gc(e.fieldMask)};else{if(!(e instanceof ha))return ri();n={verify:Wa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof Bo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof $o)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof qo)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw ri()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:za(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ri()}(t,e.precondition)),n}function rc(t,e){return t&&t.length>0?(ii(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Ga(t.updateTime):Ga(e);return n.isEqual(Ei.min())&&(n=Ga(e)),new Xo(n,t.transformResults||[])}(t,e))):[]}function ic(t,e){return{documents:[Xa(t,e.path)]}}function sc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Xa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return pc(Ls.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:fc(t.field),direction:uc(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ba(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function oc(t){let e=Ya(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=cc(t);return e instanceof Ls&&Us(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Ds(dc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Vi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Rs(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Rs(n,e)}(n.endAt)),ro(e,i,o,s,a,"F",c,u)}function ac(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function cc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=dc(t.unaryFilter.field);return Ms.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=dc(t.unaryFilter.field);return Ms.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=dc(t.unaryFilter.field);return Ms.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=dc(t.unaryFilter.field);return Ms.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(t):void 0!==t.fieldFilter?function(t){return Ms.create(dc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ls.create(t.compositeFilter.filters.map(t=>cc(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ri()}}(t.compositeFilter.op))}(t):ri()}function uc(t){return Fa[t]}function lc(t){return Ua[t]}function hc(t){return Va[t]}function fc(t){return{fieldPath:t.canonicalString()}}function dc(t){return Ci.fromServerFormat(t.fieldPath)}function pc(t){return t instanceof Ms?function(t){if("=="===t.op){if(Es(t.value))return{unaryFilter:{field:fc(t.field),op:"IS_NAN"}};if(_s(t.value))return{unaryFilter:{field:fc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Es(t.value))return{unaryFilter:{field:fc(t.field),op:"IS_NOT_NAN"}};if(_s(t.value))return{unaryFilter:{field:fc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fc(t.field),op:lc(t.op),value:t.value}}}(t):t instanceof Ls?function(t){const e=t.getFilters().map(t=>pc(t));return 1===e.length?e[0]:{compositeFilter:{op:hc(t.op),filters:e}}}(t):ri()}function gc(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function mc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e,n,r,i=Ei.min(),s=Ei.min(),o=es.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new yc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.fe=t}}function wc(t){const e=oc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ho(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(is(t.integerValue));else if("doubleValue"in t){const n=is(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),ji(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(ss(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?Ss(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):ri()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const r of Object.keys(n))this.Te(r,e),this.me(n[r],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const r of n)this.me(r,e)}ve(t,e){this.ye(e,37),Ai.fromName(t).path.forEach(t=>{this.ye(e,60),this.be(t,e)})}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}bc.Ve=new bc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _c{constructor(){this.rn=new Ec}addToCollectionParentIndex(t,e){return this.rn.add(e),Li.resolve()}getCollectionParents(t,e){return Li.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return Li.resolve()}deleteFieldIndex(t,e){return Li.resolve()}getDocumentsMatchingTarget(t,e){return Li.resolve(null)}getIndexType(t,e){return Li.resolve(0)}getFieldIndexes(t,e){return Li.resolve([])}getNextCollectionGroupToUpdate(t){return Li.resolve(null)}getMinOffset(t,e){return Li.resolve(Ni.min())}getMinOffsetFromCollectionGroup(t,e){return Li.resolve(Ni.min())}updateCollectionGroup(t,e,n){return Li.resolve()}updateIndexEntries(t,e){return Li.resolve()}}class Ec{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Yi(Ii.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Yi(Ii.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Tc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Tc(t,Tc.DEFAULT_COLLECTION_PERCENTILE,Tc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tc.DEFAULT_COLLECTION_PERCENTILE=10,Tc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tc.DEFAULT=new Tc(41943040,Tc.DEFAULT_COLLECTION_PERCENTILE,Tc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tc.DISABLED=new Tc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Ic(0)}static Mn(){return new Ic(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(){this.changes=new bo(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ks.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Li.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&na(n.mutation,t,Zi.empty(),_i.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,No()).next(()=>e))}getLocalViewOfDocuments(t,e,n=No()){const r=Co();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=Io();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=Co();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,No()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=Eo();const s=ko(),o=ko();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof oa)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),na(o.mutation,e,o.mutation.getFieldMask(),_i.now())):s.set(e.key,Zi.empty())}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new Cc(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=ko();let r=new Wi((t,e)=>t-e),i=No();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Zi.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||No()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Ao();c.forEach(t=>{if(!i.has(t)){const r=ta(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Li.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):co(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Li.resolve(Co());let o=-1,a=i;return s.next(e=>Li.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Li.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,No())).next(t=>({batchId:o,changes:So(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ai(e)).next(t=>{let e=Io();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Io();return this.indexManager.getCollectionParents(t,r).next(s=>Li.forEach(s,s=>{const o=function(t,e){return new no(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r))).next(t=>{r.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,ks.newInvalidDocument(r)))});let n=Io();return t.forEach((t,i)=>{const s=r.get(t);void 0!==s&&na(s.mutation,i,Zi.empty(),_i.now()),mo(e,i)&&(n=n.insert(t,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return Li.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:Ga(n.createTime)}),Li.resolve()}getNamedQuery(t,e){return Li.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:wc(t.bundledQuery),readTime:Ga(t.readTime)}}(e)),Li.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.overlays=new Wi(Ai.comparator),this.ls=new Map}getOverlay(t,e){return Li.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Co();return Li.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.we(t,e,r)}),Li.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.ls.delete(n)),Li.resolve()}getOverlaysForCollection(t,e,n){const r=Co(),i=e.length+1,s=new Ai(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Li.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Wi((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Co(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Co(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=r)break;return Li.resolve(o)}we(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new pa(e,n));let i=this.ls.get(e);void 0===i&&(i=No(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.fs=new Yi(Nc.ds),this.ws=new Yi(Nc._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new Nc(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.ys(new Nc(t,e))}ps(t,e){t.forEach(t=>this.removeReference(t,e))}Is(t){const e=new Ai(new Ii([])),n=new Nc(e,t),r=new Nc(e,t+1),i=[];return this.ws.forEachInRange([n,r],t=>{this.ys(t),i.push(t.key)}),i}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new Ai(new Ii([])),n=new Nc(e,t),r=new Nc(e,t+1);let i=No();return this.ws.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Nc(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Nc{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return Ai.comparator(t.key,e.key)||wi(t.As,e.As)}static _s(t,e){return wi(t.As,e.As)||Ai.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new Yi(Nc.ds)}checkEmpty(t){return Li.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new fa(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new Nc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Li.resolve(s)}lookupMutationBatch(t,e){return Li.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.bs(n),i=r<0?0:r;return Li.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Li.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return Li.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Nc(e,0),r=new Nc(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],t=>{const e=this.Ps(t.As);i.push(e)}),Li.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Yi(wi);return e.forEach(t=>{const e=new Nc(t,0),r=new Nc(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],t=>{n=n.add(t.As)})}),Li.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ai.isDocumentKey(i)||(i=i.child(""));const s=new Nc(new Ai(i),0);let o=new Yi(wi);return this.Rs.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.As)),!0)},s),Li.resolve(this.Vs(o))}Vs(t){const e=[];return t.forEach(t=>{const n=this.Ps(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){ii(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Li.forEach(e.mutations,r=>{const i=new Nc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=n})}Cn(t){}containsKey(t,e){const n=new Nc(e,0),r=this.Rs.firstAfterOrEqual(n);return Li.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Li.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.Ds=t,this.docs=new Wi(Ai.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Li.resolve(n?n.document.mutableCopy():ks.newInvalidDocument(e))}getEntries(t,e){let n=Eo();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ks.newInvalidDocument(t))}),Li.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Eo();const s=e.path,o=new Ai(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Di(Oi(o),n)<=0||(r.has(o.key)||mo(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Li.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ri()}Cs(t,e){return Li.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Pc(this)}getSize(t){return Li.resolve(this.size)}}class Pc extends Sc{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.os.addEntry(t,r)):this.os.removeEntry(n)}),Li.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.persistence=t,this.xs=new bo(t=>Zs(t),to),this.lastRemoteSnapshotVersion=Ei.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Oc,this.targetCount=0,this.Ms=Ic.kn()}forEachTarget(t,e){return this.xs.forEach((t,n)=>e(n)),Li.resolve()}getLastRemoteSnapshotVersion(t){return Li.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Li.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),Li.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),Li.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Ic(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,Li.resolve()}updateTargetData(t,e){return this.Fn(e),Li.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,Li.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.xs.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Li.waitFor(i).next(()=>r)}getTargetCount(t){return Li.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return Li.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),Li.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Li.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),Li.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return Li.resolve(n)}containsKey(t,e){return Li.resolve(this.ks.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,e){this.$s={},this.overlays={},this.Os=new Ui(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Mc(this),this.indexManager=new _c,this.remoteDocumentCache=function(t){return new xc(t)}(t=>this.referenceDelegate.Ls(t)),this.serializer=new vc(e),this.qs=new kc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Rc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new Dc(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){Zr("MemoryPersistence","Starting transaction:",t);const r=new Fc(this.Os.next());return this.referenceDelegate.Us(),n(r).next(t=>this.referenceDelegate.Ks(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Gs(t,e){return Li.or(Object.values(this.$s).map(n=>()=>n.containsKey(t,e)))}}class Fc extends Pi{constructor(t){super(),this.currentSequenceNumber=t}}class Uc{constructor(t){this.persistence=t,this.Qs=new Oc,this.js=null}static zs(t){return new Uc(t)}get Ws(){if(this.js)return this.js;throw ri()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),Li.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),Li.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),Li.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach(t=>this.Ws.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ws.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Li.forEach(this.Ws,n=>{const r=Ai.fromPath(n);return this.Hs(t,r).next(t=>{t||e.removeEntry(r,Ei.min())})}).next(()=>(this.js=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hs(t,e).next(t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())})}Ls(t){return 0}Hs(t,e){return Li.or([()=>Li.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=r}static Li(t,e){let n=No(),r=No();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Vc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ki(t,e).next(i=>i||this.Gi(t,e,r,n)).next(n=>n||this.Qi(t,e))}Ki(t,e){if(so(e))return Li.resolve(null);let n=lo(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=ho(e,null,"F"),n=lo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=No(...r);return this.Ui.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.ji(e,r);return this.zi(e,s,i,n.readTime)?this.Ki(t,ho(e,null,"F")):this.Wi(t,s,e,n)}))})))}Gi(t,e,n,r){return so(e)||r.isEqual(Ei.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next(i=>{const s=this.ji(e,i);return this.zi(e,s,n,r)?this.Qi(t,e):(Jr()<=o.$b.DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),go(e)),this.Wi(t,s,e,Ri(r,-1)))})}ji(t,e){let n=new Yi(vo(t));return e.forEach((e,r)=>{mo(t,r)&&(n=n.add(r))}),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,e){return Jr()<=o.$b.DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",go(e)),this.Ui.getDocumentsMatchingQuery(t,e,Ni.min())}Wi(t,e,n,r){return this.Ui.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new Wi(wi),this.Yi=new bo(t=>Zs(t),to),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ac(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function $c(t,e,n,r){return new Bc(t,e,n,r)}async function Kc(t,e){const n=si(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=No();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({er:t,removedBatchIds:i,addedBatchIds:s}))})})}function zc(t,e){const n=si(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Li.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);ii(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=No();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}function Gc(t){const e=si(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function qc(t,e){const n=si(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.Bs.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(es.EMPTY_BYTE_STRING,Ei.min()).withLastLimboFreeSnapshotVersion(Ei.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(t,u))});let a=Eo(),c=No();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Hc(t,s,e.documentUpdates).next(t=>{a=t.nr,c=t.sr})),!r.isEqual(Ei.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next(e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Li.waitFor(o).next(()=>s.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.Ji=i,t))}function Hc(t,e,n){let r=No(),i=No();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Eo();return n.forEach((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ei.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{nr:r,sr:i}})}function Wc(t,e){const n=si(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function Qc(t,e){const n=si(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Bs.getTargetData(t,e).next(i=>i?(r=i,Li.resolve(r)):n.Bs.allocateTargetId(t).next(i=>(r=new yc(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Ji.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t})}async function Xc(t,e,n){const r=si(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Fi(t))throw t;Zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Yc(t,e,n){const r=si(t);let i=Ei.min(),s=No();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=si(t),i=r.Yi.get(n);return void 0!==i?Li.resolve(r.Ji.get(i)):r.Bs.getTargetData(e,n)}(r,t,lo(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Hi.getDocumentsMatchingQuery(t,e,n?i:Ei.min(),n?s:No())).next(t=>(Jc(r,yo(e),t),{documents:t,ir:s})))}function Jc(t,e,n){let r=t.Xi.get(e)||Ei.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Xi.set(e,r)}class Zc{constructor(){this.activeTargetIds=xo()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tu{constructor(){this.Hr=new Zc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Zc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{Yr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru=null;function iu(){return null===ru?ru=268435456+Math.round(2147483648*Math.random()):ru++,"0x"+ru.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const su={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="WebChannelConnection";class cu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,r,i){const s=iu(),o=this.To(t,e);Zr("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(t,o,a,n).then(e=>(Zr("RestConnection",`Received RPC '${t}' ${s}: `,e),e),e=>{throw ei("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e})}vo(t,e,n,r,i,s){return this.Io(t,e,n,r,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Xr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}To(t,e){const n=su[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,r){const i=iu();return new Promise((s,o)=>{const a=new Gr;a.setWithCredentials(!0),a.listenOnce(jr.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const e=a.getResponseJson();Zr(au,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case Vr.TIMEOUT:Zr(au,`RPC '${t}' ${i} timed out`),o(new ai(oi.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const n=a.getStatus();if(Zr(au,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(oi).indexOf(e)>=0?e:oi.UNKNOWN}(e.status);o(new ai(t,e.message))}else o(new ai(oi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ai(oi.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Zr(au,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);Zr(au,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)})}Ro(t,e,n){const r=iu(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Fr(),o=Ur(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Kr({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Zr(au,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,f=!1;const d=new ou({ro:e=>{f?Zr(au,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Zr(au,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Zr(au,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},oo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(l,zr.EventType.OPEN,()=>{f||Zr(au,`RPC '${t}' stream ${r} transport opened.`)}),p(l,zr.EventType.CLOSE,()=>{f||(f=!0,Zr(au,`RPC '${t}' stream ${r} transport closed`),d.wo())}),p(l,zr.EventType.ERROR,e=>{f||(f=!0,ei(au,`RPC '${t}' stream ${r} transport errored:`,e),d.wo(new ai(oi.UNAVAILABLE,"The operation could not be completed")))}),p(l,zr.EventType.MESSAGE,e=>{var n;if(!f){const i=e.data[0];ii(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zr(au,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=ma[t];if(void 0!==e)return wa(e)}(e),i=o.message;void 0===n&&(n=oi.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,d.wo(new ai(n,i)),l.close()}else Zr(au,`RPC '${t}' stream ${r} received:`,i),d._o(i)}}),p(o,Br.STAT_EVENT,e=>{e.stat===$r.PROXY?Zr(au,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===$r.NOPROXY&&Zr(au,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.fo()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t){return new ja(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,e-n);r>0&&Zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e,n,r,i,s,o,a){this.ii=t,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new hu(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===oi.RESOURCE_EXHAUSTED?(ti(e.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===oi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Fo===e&&this.Zo(t,n)},e=>{t(()=>{const t=new ai(oi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)})})}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(t=>{n(()=>this.tu(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return Zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.Fo===t?e():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class du extends fu{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=ec(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ei.min():e.readTime?Ga(e.readTime):Ei.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=Ja(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=eo(r)?{documents:ic(t,r)}:{query:sc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ka(t,e.resumeToken);const r=Ba(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ei.min())>0){n.readTime=$a(t,e.snapshotVersion.toTimestamp());const r=Ba(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=ac(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=Ja(this.serializer),e.removeTarget=t,this.Wo(e)}}class pu extends fu{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(ii(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const e=rc(t.writeResults,t.commitTime),n=Ga(t.commitTime);return this.listener.cu(n,e)}return ii(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=Ja(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>nc(this.serializer,t))};this.Wo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())})}vo(t,e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.vo(t,e,n,i,s,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())})}terminate(){this.lu=!0}}class mu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ti(e),this.mu=!1):Zr("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(t=>{n.enqueueAndForget(async()=>{Cu(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=si(t);e.vu.add(4),await wu(e),e.bu.set("Unknown"),e.vu.delete(4),await vu(e)}(this))})}),this.bu=new mu(n,r)}}async function vu(t){if(Cu(t))for(const e of t.Ru)await e(!0)}async function wu(t){for(const e of t.Ru)await e(!1)}function bu(t,e){const n=si(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Su(n)?Iu(n):zu(n).Ko()&&Eu(n,e))}function _u(t,e){const n=si(t),r=zu(n);n.Au.delete(e),r.Ko()&&Tu(n,e),0===n.Au.size&&(r.Ko()?r.jo():Cu(n)&&n.bu.set("Unknown"))}function Eu(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ei.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zu(t).su(e)}function Tu(t,e){t.Vu.qt(e),zu(t).iu(e)}function Iu(t){t.Vu=new Pa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),zu(t).start(),t.bu.gu()}function Su(t){return Cu(t)&&!zu(t).Uo()&&t.Au.size>0}function Cu(t){return 0===si(t).vu.size}function Au(t){t.Vu=void 0}async function ku(t){t.Au.forEach((e,n)=>{Eu(t,e)})}async function Ru(t,e){Au(t),Su(t)?(t.bu.Iu(e),Iu(t)):t.bu.set("Unknown")}async function Ou(t,e,n){if(t.bu.set("Online"),e instanceof Da&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Au.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Au.delete(r),t.Vu.removeTarget(r))}(t,e)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Nu(t,n)}else if(e instanceof Oa?t.Vu.Ht(e):e instanceof Na?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Ei.min()))try{const e=await Gc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(r);i&&t.Au.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Au.get(e);if(!r)return;t.Au.set(e,r.withResumeToken(es.EMPTY_BYTE_STRING,r.snapshotVersion)),Tu(t,e);const i=new yc(r.target,e,n,r.sequenceNumber);Eu(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zr("RemoteStore","Failed to raise snapshot:",e),await Nu(t,e)}}async function Nu(t,e,n){if(!Fi(e))throw e;t.vu.add(1),await wu(t),t.bu.set("Offline"),n||(n=()=>Gc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await vu(t)})}function Du(t,e){return e().catch(n=>Nu(t,n,e))}async function xu(t){const e=si(t),n=Gu(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Pu(e);)try{const t=await Wc(e.localStore,r);if(null===t){0===e.Eu.length&&n.jo();break}r=t.batchId,Mu(e,t)}catch(t){await Nu(e,t)}Lu(e)&&Fu(e)}function Pu(t){return Cu(t)&&t.Eu.length<10}function Mu(t,e){t.Eu.push(e);const n=Gu(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Lu(t){return Cu(t)&&!Gu(t).Uo()&&t.Eu.length>0}function Fu(t){Gu(t).start()}async function Uu(t){Gu(t).hu()}async function Vu(t){const e=Gu(t);for(const n of t.Eu)e.uu(n.mutations)}async function ju(t,e,n){const r=t.Eu.shift(),i=da.from(r,e,n);await Du(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xu(t)}async function Bu(t,e){e&&Gu(t).ou&&await async function(t,e){if(n=e.code,va(n)&&n!==oi.ABORTED){const n=t.Eu.shift();Gu(t).Qo(),await Du(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await xu(t)}var n}(t,e),Lu(t)&&Fu(t)}async function $u(t,e){const n=si(t);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const r=Cu(n);n.vu.add(3),await wu(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await vu(n)}async function Ku(t,e){const n=si(t);e?(n.vu.delete(2),await vu(n)):e||(n.vu.add(2),await wu(n),n.bu.set("Unknown"))}function zu(t){return t.Su||(t.Su=function(t,e,n){const r=si(t);return r.fu(),new du(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{uo:ku.bind(null,t),ao:Ru.bind(null,t),nu:Ou.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Su(t)?Iu(t):t.bu.set("Unknown")):(await t.Su.stop(),Au(t))})),t.Su}function Gu(t){return t.Du||(t.Du=function(t,e,n){const r=si(t);return r.fu(),new pu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{uo:Uu.bind(null,t),ao:Bu.bind(null,t),au:Vu.bind(null,t),cu:ju.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await xu(t)):(await t.Du.stop(),t.Eu.length>0&&(Zr("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class qu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new qu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(oi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(t,e){if(ti("AsyncQueue",`${e}: ${t}`),Fi(t))return new ai(oi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ai.comparator(e.key,n.key):(t,e)=>Ai.comparator(t.key,e.key),this.keyedMap=Io(),this.sortedSet=new Wi(this.comparator)}static emptySet(t){return new Wu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Wu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Wu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.Cu=new Wi(Ai.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):ri():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Xu{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new Xu(t,e,Wu.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.Nu=void 0,this.listeners=[]}}class Ju{constructor(){this.queries=new bo(t=>po(t),fo),this.onlineState="Unknown",this.ku=new Set}}async function Zu(t,e){const n=si(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Yu),i)try{s.Nu=await n.onListen(r)}catch(t){const n=Hu(t,`Initialization of query '${go(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&rl(n)}async function tl(t,e){const n=si(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function el(t,e){const n=si(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.$u(i)&&(r=!0);e.Nu=i}}r&&rl(n)}function nl(t,e,n){const r=si(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function rl(t){t.ku.forEach(t=>{t.next()})}class il{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Xu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=Xu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(t){this.key=t}}class ol{constructor(t){this.key=t}}class al{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=No(),this.mutatedKeys=No(),this.tc=vo(t),this.ec=new Wu(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new Qu,r=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=mo(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.rc(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.tc(t.doc,e.doc)),this.oc(n);const s=e?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Xu(this.query,t.ec,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Qu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=No(),this.ec.forEach(t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))});const e=[];return t.forEach(t=>{this.Zu.has(t)||e.push(new ol(t))}),this.Zu.forEach(n=>{t.has(n)||e.push(new sl(n))}),e}hc(t){this.Yu=t.ir,this.Zu=No();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return Xu.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class cl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ul{constructor(t){this.key=t,this.fc=!1}}class ll{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new bo(t=>po(t),fo),this._c=new Map,this.mc=new Set,this.gc=new Wi(Ai.comparator),this.yc=new Map,this.Ic=new Oc,this.Tc={},this.Ec=new Map,this.Ac=Ic.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function hl(t,e){const n=Ol(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const t=await Qc(n.localStore,lo(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await fl(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&bu(n.remoteStore,t)}return i}async function fl(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.sc(n);i.zi&&(i=await Yc(t.localStore,e.query,!1).then(({documents:t})=>e.view.sc(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Il(t,e.targetId,o.cc),o.snapshot}(t,e,n,r);const s=await Yc(t.localStore,e,!0),o=new al(e,s.ir),a=o.sc(s.documents),c=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Il(t,n,u.cc);const l=new cl(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function dl(t,e){const n=si(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(t=>!fo(t,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_u(n.remoteStore,r.targetId),El(n,r.targetId)}).catch(Mi)):(El(n,r.targetId),await Xc(n.localStore,r.targetId,!0))}async function pl(t,e,n){const r=Nl(t);try{const t=await function(t,e){const n=si(t),r=_i.now(),i=e.reduce((t,e)=>t.add(e.key),No());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Eo(),c=No();return n.Zi.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{s=i;const o=[];for(const t of e){const e=ra(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new oa(t.key,e,As(e.value.mapValue),Yo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:So(s)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Tc[t.currentUser.toKey()];r||(r=new Wi(wi)),r=r.insert(e,n),t.Tc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Al(r,t.changes),await xu(r.remoteStore)}catch(t){const e=Hu(t,"Failed to persist write");n.reject(e)}}async function gl(t,e){const n=si(t);try{const t=await qc(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.yc.get(e);r&&(ii(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.fc=!0:t.modifiedDocuments.size>0?ii(r.fc):t.removedDocuments.size>0&&(ii(r.fc),r.fc=!1))}),await Al(n,t,e)}catch(t){await Mi(t)}}function ml(t,e,n){const r=si(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.wc.forEach((n,r)=>{const i=r.view.Mu(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=si(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.Mu(e)&&(r=!0)}),r&&rl(n)}(r.eventManager,e),t.length&&r.dc.nu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yl(t,e,n){const r=si(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let t=new Wi(Ai.comparator);t=t.insert(s,ks.newNoDocument(s,Ei.min()));const n=No().add(s),i=new ka(Ei.min(),new Map,new Wi(wi),t,n);await gl(r,i),r.gc=r.gc.remove(s),r.yc.delete(e),Cl(r)}else await Xc(r.localStore,e,!1).then(()=>El(r,e,n)).catch(Mi)}async function vl(t,e){const n=si(t),r=e.batch.batchId;try{const t=await zc(n.localStore,e);_l(n,r,null),bl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Al(n,t)}catch(t){await Mi(t)}}async function wl(t,e,n){const r=si(t);try{const t=await function(t,e){const n=si(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(ii(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);_l(r,e,n),bl(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Al(r,t)}catch(n){await Mi(n)}}function bl(t,e){(t.Ec.get(e)||[]).forEach(t=>{t.resolve()}),t.Ec.delete(e)}function _l(t,e,n){const r=si(t);let i=r.Tc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function El(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(e=>{t.Ic.containsKey(e)||Tl(t,e)})}function Tl(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(_u(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Cl(t))}function Il(t,e,n){for(const r of n)r instanceof sl?(t.Ic.addReference(r.key,e),Sl(t,r)):r instanceof ol?(Zr("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Tl(t,r.key)):ri()}function Sl(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(Zr("SyncEngine","New document in limbo: "+n),t.mc.add(r),Cl(t))}function Cl(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Ai(Ii.fromString(e)),r=t.Ac.next();t.yc.set(r,new ul(n)),t.gc=t.gc.insert(n,r),bu(t.remoteStore,new yc(lo(io(n.path)),r,"TargetPurposeLimboResolution",Ui.ct))}}async function Al(t,e,n){const r=si(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((t,a)=>{o.push(r.Rc(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Vc.Li(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.dc.nu(i),await async function(t,e){const n=si(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Li.forEach(e,e=>Li.forEach(e.Fi,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Li.forEach(e.Bi,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Fi(t))throw t;Zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,s))}async function kl(t,e){const n=si(t);if(!n.currentUser.isEqual(e)){Zr("SyncEngine","User change. New user:",e.toKey());const t=await Kc(n.localStore,e);n.currentUser=e,function(t,e){t.Ec.forEach(t=>{t.forEach(t=>{t.reject(new ai(oi.CANCELLED,e))})}),t.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Al(n,t.er)}}function Rl(t,e){const n=si(t),r=n.yc.get(e);if(r&&r.fc)return No().add(r.key);{let t=No();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.wc.get(e);t=t.unionWith(r.view.nc)}return t}}function Ol(t){const e=si(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yl.bind(null,e),e.dc.nu=el.bind(null,e.eventManager),e.dc.Pc=nl.bind(null,e.eventManager),e}function Nl(t){const e=si(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wl.bind(null,e),e}class Dl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=lu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return $c(this.persistence,new jc,t.initialUser,this.serializer)}createPersistence(t){return new Lc(Uc.zs,this.serializer)}createSharedClientState(t){return new tu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ml(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=kl.bind(null,this.syncEngine),await Ku(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ju}createDatastore(t){const e=lu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new cu(r));var r;return function(t,e,n,r){return new gu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>ml(this.syncEngine,t,0),s=nu.D()?new nu:new eu,new yu(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ll(t,e,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=si(t);Zr("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await wu(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):ti("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Qr.UNAUTHENTICATED,this.clientId=vi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{Zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(Zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Hu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ll(t,e){t.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Kc(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Vl(t);Zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>$u(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>$u(e.remoteStore,n)),t._onlineComponents=e}function Ul(t){return"FirebaseError"===t.name?t.code===oi.FAILED_PRECONDITION||t.code===oi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Vl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Zr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ul(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await Ll(t,new Dl)}}else Zr("FirestoreClient","Using default OfflineComponentProvider"),await Ll(t,new Dl);return t._offlineComponents}async function jl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Zr("FirestoreClient","Using user provided OnlineComponentProvider"),await Fl(t,t._uninitializedComponentsProvider._online)):(Zr("FirestoreClient","Using default OnlineComponentProvider"),await Fl(t,new xl))),t._onlineComponents}function Bl(t){return jl(t).then(t=>t.syncEngine)}async function $l(t){const e=await jl(t),n=e.eventManager;return n.onListen=hl.bind(null,e.syncEngine),n.onUnlisten=dl.bind(null,e.syncEngine),n}function Kl(t,e,n={}){const r=new ci;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Pl({next:s=>{e.enqueueAndForget(()=>tl(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ai(oi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ai(oi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new il(io(n.path),s,{includeMetadataChanges:!0,Ku:!0});return Zu(t,o)}(await $l(t),t.asyncQueue,e,n,r)),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Gl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t,e,n){if(!n)throw new ai(oi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hl(t,e,n,r){if(!0===e&&!0===r)throw new ai(oi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wl(t){if(!Ai.isDocumentKey(t))throw new ai(oi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ql(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ri()}function Xl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ai(oi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ql(t);throw new ai(oi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ai(oi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ai(oi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class Jl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(oi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ai(oi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new li;switch(t.type){case"firstParty":return new pi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ai(oi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Gl.get(t);e&&(Zr("ComponentProvider","Removing Datastore"),Gl.delete(t),e.terminate())}(this),Promise.resolve()}}function Zl(t,e,n,r={}){var i;const s=(t=Xl(t,Jl))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Qr.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ai(oi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qr(s)}t._authCredentials=new hi(new ui(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new th(this.firestore,t,this._key)}}class eh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new eh(this.firestore,t,this._query)}}class nh extends eh{constructor(t,e,n){super(t,e,io(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new th(this.firestore,null,new Ai(t))}withConverter(t){return new nh(this.firestore,t,this._path)}}function rh(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=vi.A()),ql("doc","path",e),t instanceof Jl){const r=Ii.fromString(e,...n);return Wl(r),new th(t,null,new Ai(r))}{if(!(t instanceof th||t instanceof nh))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ii.fromString(e,...n));return Wl(r),new th(t.firestore,t instanceof nh?t.converter:null,new Ai(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ih{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new hu(this,"async_queue_retry"),this.Xc=()=>{const t=uu();t&&Zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=uu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=uu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const e=new ci;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Fi(t))throw t;Zr("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const e=this.Gc.then(()=>(this.Hc=!0,t().catch(t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw ti("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Hc=!1,t))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const r=qu.createAndSchedule(this,t,e,n,t=>this.na(t));return this.zc.push(r),r}Zc(){this.Wc&&ri()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}class sh extends Jl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new ih,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ch(this),this._firestoreClient.terminate()}}function oh(t,e){const n="object"==typeof t?t:(0,i.Sx)(),r="string"==typeof t?t:e||"(default)",s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.yU)("firestore");t&&Zl(s,...t)}return s}function ah(t){return t._firestoreClient||ch(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ch(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new us(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,zl(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Ml(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new uh(es.fromBase64String(t))}catch(t){throw new ai(oi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new uh(es.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ai(oi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ci(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ai(oi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ai(oi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wi(this._lat,t._lat)||wi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=/^__.*__$/;class ph{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new oa(t,this.data,this.fieldMask,e,this.fieldTransforms):new sa(t,this.data,e,this.fieldTransforms)}}class gh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new oa(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function mh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ri()}}class yh{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new yh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.fa(t),r}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Nh(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(mh(this.ca)&&dh.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class vh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||lu(t)}ya(t,e,n,r=!1){return new yh({ca:t,methodName:e,ga:n,path:Ci.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wh(t){const e=t._freezeSettings(),n=lu(t._databaseId);return new vh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bh(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Ah("Data must be an object, but it was:",o,r);const a=Sh(r,o);let c,u;if(s.merge)c=new Zi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=kh(e,r,n);if(!o.contains(i))throw new ai(oi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Dh(t,i)||t.push(i)}c=new Zi(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new ph(new Cs(a),c,u)}class _h extends hh{_toFieldTransform(t){if(2!==t.ca)throw 1===t.ca?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof _h}}function Eh(t,e,n,r){const i=t.ya(1,e,n);Ah("Data must be an object, but it was:",i,r);const s=[],o=Cs.empty();qi(r,(t,r)=>{const c=Oh(e,t,n);r=(0,a.Ku)(r);const u=i.da(c);if(r instanceof _h)s.push(c);else{const t=Ih(r,u);null!=t&&(s.push(c),o.set(c,t))}});const c=new Zi(s);return new gh(o,c,i.fieldTransforms)}function Th(t,e,n,r,i,s){const o=t.ya(1,e,n),c=[kh(e,r,n)],u=[i];if(s.length%2!=0)throw new ai(oi.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(kh(e,s[a])),u.push(s[a+1]);const l=[],h=Cs.empty();for(let d=c.length-1;d>=0;--d)if(!Dh(l,c[d])){const t=c[d];let e=u[d];e=(0,a.Ku)(e);const n=o.da(t);if(e instanceof _h)l.push(t);else{const r=Ih(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new Zi(l);return new gh(h,f,o.fieldTransforms)}function Ih(t,e){if(Ch(t=(0,a.Ku)(t)))return Ah("Unsupported field value:",e,t),Sh(t,e);if(t instanceof hh)return function(t,e){if(!mh(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Ih(i,e.wa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Lo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=_i.fromDate(t);return{timestampValue:$a(e.serializer,n)}}if(t instanceof _i){const n=new _i(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:$a(e.serializer,n)}}if(t instanceof fh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof uh)return{bytesValue:Ka(e.serializer,t._byteString)};if(t instanceof th){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:qa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${Ql(t)}`)}(t,e)}function Sh(t,e){const n={};return Hi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(t,(t,r)=>{const i=Ih(r,e.ha(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Ch(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof _i||t instanceof fh||t instanceof uh||t instanceof th||t instanceof hh)}function Ah(t,e,n){if(!Ch(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ql(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}}function kh(t,e,n){if((e=(0,a.Ku)(e))instanceof lh)return e._internalPath;if("string"==typeof e)return Oh(t,e);throw Nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Rh=new RegExp("[~\\*/\\[\\]]");function Oh(t,e,n){if(e.search(Rh)>=0)throw Nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lh(...e.split("."))._internalPath}catch(r){throw Nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ai(oi.INVALID_ARGUMENT,a+t+c)}function Dh(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new th(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ph(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ph extends xh{data(){return super.data()}}function Mh(t,e){return"string"==typeof e?Oh(t,e):e instanceof lh?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{convertValue(t,e="none"){switch(fs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return is(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ss(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ri()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return qi(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new fh(is(t.latitude),is(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=as(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(cs(t));default:return null}}convertTimestamp(t){const e=rs(t);return new _i(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ii.fromString(t);ii(mc(n));const r=new ls(n.get(1),n.get(3)),i=new Ai(n.popFirst(5));return r.isEqual(e)||ti(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vh extends xh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new jh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Mh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class jh extends Vh{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bh(t){t=Xl(t,th);const e=Xl(t.firestore,sh);return Kl(ah(e),t._key).then(n=>qh(e,t,n))}class $h extends Lh{constructor(t){super(),this.firestore=t}convertBytes(t){return new uh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new th(this.firestore,null,e)}}function Kh(t,e,n){t=Xl(t,th);const r=Xl(t.firestore,sh),i=Fh(t.converter,e,n);return Gh(r,[bh(wh(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Yo.none())])}function zh(t,e,n,...r){t=Xl(t,th);const i=Xl(t.firestore,sh),s=wh(i);let o;return o="string"==typeof(e=(0,a.Ku)(e))||e instanceof lh?Th(s,"updateDoc",t._key,e,n,r):Eh(s,"updateDoc",t._key,e),Gh(i,[o.toMutation(t._key,Yo.exists(!0))])}function Gh(t,e){return function(t,e){const n=new ci;return t.asyncQueue.enqueueAndForget(async()=>pl(await Bl(t),e,n)),n.promise}(ah(t),e)}function qh(t,e,n){const r=n.docs.get(e._key),i=new $h(t);return new Vh(t,i,e._key,r,new Uh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Xr=t}(i.MF),(0,i.om)(new s.uA("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new sh(new fi(t.getProvider("auth-internal")),new mi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ai(oi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Wr,"3.13.0",t),(0,i.KO)(Wr,"3.13.0","esm2017")}()},9928:function(t,e,n){var r=n(6198),i=n(1291),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?o:t[h];return l}}}]);
//# sourceMappingURL=chunk-vendors.3d3386ae.js.map