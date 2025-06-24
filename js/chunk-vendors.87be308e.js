(self["webpackChunkhomefilmtv"]=self["webpackChunkhomefilmtv"]||[]).push([[998],{9662:function(t,e,n){var r=n(7854),i=n(614),s=n(6330),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a function")}},6077:function(t,e,n){var r=n(7854),i=n(614),s=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7854),i=n(7976),s=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw s("Incorrect invocation")}},9670:function(t,e,n){var r=n(7854),i=n(111),s=r.String,o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,s,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),m=n(1320),g=n(3070).f,y=n(7976),v=n(9518),w=n(7674),b=n(5112),E=n(9711),_=c.Int8Array,T=_&&_.prototype,I=c.Uint8ClampedArray,S=I&&I.prototype,k=_&&v(_),C=T&&v(T),A=Object.prototype,R=c.TypeError,O=b("toStringTag"),N=E("TYPED_ARRAY_TAG"),D=E("TYPED_ARRAY_CONSTRUCTOR"),x=o&&!!w&&"Opera"!==f(c.opera),P=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(L,e)||h(M,e)},F=function(t){if(!l(t))return!1;var e=f(t);return h(L,e)||h(M,e)},V=function(t){if(F(t))return t;throw R("Target is not a typed array")},j=function(t){if(u(t)&&(!w||y(k,t)))return t;throw R(d(t)+" is not a typed array constructor")},B=function(t,e,n,r){if(a){if(n)for(var i in L){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}C[t]&&!n||m(C,t,n?e:x&&T[t]||e,r)}},$=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in L)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(k[t]&&!n)return;try{return m(k,t,n?e:x&&k[t]||e)}catch(s){}}for(r in L)i=c[r],!i||i[t]&&!n||m(i,t,e)}};for(r in L)i=c[r],s=i&&i.prototype,s?p(s,D,i):x=!1;for(r in M)i=c[r],s=i&&i.prototype,s&&p(s,D,i);if((!x||!u(k)||k===Function.prototype)&&(k=function(){throw R("Incorrect invocation")},x))for(r in L)c[r]&&w(c[r],k);if((!x||!C||C===A)&&(C=k.prototype,x))for(r in L)c[r]&&w(c[r].prototype,C);if(x&&v(S)!==C&&w(S,C),a&&!h(C,O))for(r in P=!0,g(C,O,{get:function(){return l(this)?this[N]:void 0}}),L)c[r]&&p(c[r],N,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:x,TYPED_ARRAY_CONSTRUCTOR:D,TYPED_ARRAY_TAG:P&&N,aTypedArray:V,aTypedArrayConstructor:j,exportTypedArrayMethod:B,exportTypedArrayStaticMethod:$,isView:U,isTypedArray:F,TypedArray:k,TypedArrayPrototype:C}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(7854),i=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&s(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),i=r("".replace),s=function(t){return String(Error(t).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=i(t,o,"");return t}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),i=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(1320),a=n(3505),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,m=t.target,g=t.global,y=t.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(g?h:m+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),i=n(1702),s=n(7293),o=n(4326),a=r.Object,c=i("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},8340:function(t,e,n){var r=n(111),i=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var r,i,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),f=n(5465),d=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,y=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},w=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||f.state){var b=f.state||(f.state=new y),E=c(b.get),_=c(b.has),T=c(b.set);r=function(t,e){if(_(b,t))throw new g(m);return e.facade=t,T(b,t,e),e},i=function(t){return E(b,t)||{}},s=function(t){return _(b,t)}}else{var I=d("state");p[I]=!0,r=function(t,e){if(h(t,I))throw new g(m);return e.facade=t,l(t,I,e),e},i=function(t){return h(t,I)?t[I]:{}},s=function(t){return h(t,I)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:w}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(7854),i=n(5005),s=n(614),o=n(7976),a=n(3307),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&o(e.prototype,c(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},133:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(7854),i=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";e.f=i?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=h(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),s)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(7854),i=n(2597),s=n(614),o=n(7908),a=n(6200),c=n(8544),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(i(e,u))return e[u];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(7854),i=n(6916),s=n(614),o=n(111),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!o(r=i(n,t)))return r;if(s(n=t.valueOf)&&!o(r=i(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!o(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},1320:function(t,e,n){var r=n(7854),i=n(614),s=n(2597),o=n(8880),a=n(3505),c=n(2788),u=n(9909),l=n(6530).CONFIGURABLE,h=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=f(n),u.source||(u.source=d.join("string"==typeof g?g:""))),t!==r?(h?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},4488:function(t,e,n){var r=n(7854),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3505),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!==r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),i=n(4488),s=r.Object;t.exports=function(t){return s(i(t))}},4590:function(t,e,n){var r=n(7854),i=n(3002),s=r.RangeError;t.exports=function(t,e){var n=i(t);if(n%e)throw s("Wrong offset");return n}},3002:function(t,e,n){var r=n(7854),i=n(9303),s=r.RangeError;t.exports=function(t){var e=i(t);if(e<0)throw s("The argument can't be less than 0");return e}},7593:function(t,e,n){var r=n(7854),i=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(7854),i=n(648),s=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},6330:function(t,e,n){var r=n(7854),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},9191:function(t,e,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(9587),l=n(6277),h=n(8340),f=n(7741),d=n(2914),p=n(1913);t.exports=function(t,e,n,m){var g=m?2:1,y=t.split("."),v=y[y.length-1],w=r.apply(null,y);if(w){var b=w.prototype;if(!p&&i(b,"cause")&&delete b.cause,!n)return w;var E=r("Error"),_=e((function(t,e){var n=l(m?e:t,void 0),r=m?new w(t):new w;return void 0!==n&&s(r,"message",n),d&&s(r,"stack",f(r.stack,2)),this&&o(b,this)&&u(r,this,_),arguments.length>g&&h(r,arguments[g]),r}));if(_.prototype=b,"Error"!==v&&(a?a(_,E):c(_,E,{name:!0})),c(_,w),!p)try{b.name!==v&&s(b,"name",v),b.constructor=_}catch(T){}return _}}},1703:function(t,e,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=o(t,e,u),r({global:!0,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(t){return function(e){return s(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),l("URIError",(function(t){return function(e){return s(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},3462:function(t,e,n){"use strict";var r=n(7854),i=n(6916),s=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,f=h&&h.prototype,d=f&&f.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,g=!u((function(){var t=new Uint8ClampedArray(2);return i(d,t,{length:1,0:3},1),3!==t[1]})),y=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));m("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(g)return i(d,this,n,e);var r=this.length,s=o(n),u=0;if(s+e>r)throw l("Wrong length");while(u<s)this[e+u]=n[u++]}),!g||y)},2801:function(t,e,n){"use strict";var r=n(2109),i=n(5005),s=n(9114),o=n(3070).f,a=n(2597),c=n(5787),u=n(9587),l=n(6277),h=n(3678),f=n(7741),d=n(1913),p="DOMException",m=i("Error"),g=i(p),y=function(){c(this,v);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new g(e,n),i=m(e);return i.name=p,o(r,"stack",s(1,f(i.stack,1))),u(r,this,y),r},v=y.prototype=g.prototype,w="stack"in m(p),b="stack"in new g(1,2),E=w&&!b;r({global:!0,forced:d||E},{DOMException:E?y:g});var _=i(p),T=_.prototype;if(T.constructor!==_)for(var I in d||o(T,"constructor",s(1,_)),h)if(a(h,I)){var S=h[I],k=S.s;a(_,k)||o(_,k,s(6,S.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return u},L:function(){return a},LL:function(){return E},Mn:function(){return g},ZR:function(){return b},b$:function(){return d},d:function(){return p},eu:function(){return v},hl:function(){return y},m9:function(){return P},ne:function(){return O},pd:function(){return R},ru:function(){return f},tV:function(){return c},uI:function(){return h},vZ:function(){return S},w1:function(){return m},xO:function(){return C},xb:function(){return I},z$:function(){return l},zd:function(){return A}});n(1703),n(2801);
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return l().indexOf("Electron/")>=0}function m(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return l().indexOf("MSAppHost/")>=0}function y(){return"object"===typeof indexedDB}function v(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const w="FirebaseError";class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?_(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new b(r,o,n);return a}}function _(t,e){return t.replace(T,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
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
 */function I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function S(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(k(n)&&k(s)){if(!S(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k(t){return null!==t&&"object"===typeof t}
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
 */function C(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function A(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function R(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function O(t,e){const n=new N(t,e);return n.subscribe.bind(n)}class N{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=D(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=x),void 0===r.error&&(r.error=x),void 0===r.complete&&(r.complete=x);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function D(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function x(){}
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
function P(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{B:function(){return o},BK:function(){return $t},Bj:function(){return s},Fl:function(){return Kt},IU:function(){return At},Jd:function(){return I},PG:function(){return It},SU:function(){return Vt},Um:function(){return Et},WL:function(){return Bt},X$:function(){return A},X3:function(){return Ct},XI:function(){return Mt},Xl:function(){return Rt},dq:function(){return Pt},iH:function(){return Lt},j:function(){return k},lk:function(){return S},qj:function(){return bt},qq:function(){return b},yT:function(){return kt}});var r=n(7139);let i;class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t){return new s(t)}function a(t,e=i){e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&m)>0,l=t=>(t.n&m)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=m},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~m,i.n&=~m}e.length=n}},d=new WeakMap;let p=0,m=1;const g=30;let y;const v=Symbol(""),w=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=y,e=_;while(t){if(t===this)return;t=t.parent}try{return this.parent=y,y=this,_=!0,m=1<<++p,p<=g?h(this):E(this),this.fn()}finally{p<=g&&f(this),m=1<<--p,y=this.parent,_=e,this.parent=void 0}}stop(){this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _=!0;const T=[];function I(){T.push(_),_=!1}function S(){const t=T.pop();_=void 0===t||t}function k(t,e,n){if(_&&y){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=c());const i=void 0;C(r,i)}}function C(t,e){let n=!1;p<=g?l(t)||(t.n|=m,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function A(t,e,n,i,s,o){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&(0,r.kJ)(t))a.forEach(((t,e)=>{("length"===e||e>=i)&&u.push(t)}));else switch(void 0!==n&&u.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(v)),(0,r._N)(t)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(t)||(u.push(a.get(v)),(0,r._N)(t)&&u.push(a.get(w)));break;case"set":(0,r._N)(t)&&u.push(a.get(v));break}if(1===u.length)u[0]&&R(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);R(c(t))}}function R(t,e){for(const n of(0,r.kJ)(t)?t:[...t])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const O=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(r.yk)),D=U(),x=U(!1,!0),P=U(!0),L=M();function M(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=At(this);for(let e=0,i=this.length;e<i;e++)k(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(At)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){I();const n=At(this)[e].apply(this,t);return S(),n}})),t}function U(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?yt:gt:e?mt:pt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(L,i))return Reflect.get(L,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?N.has(i):O(i))return a;if(t||k(n,"get",i),e)return a;if(Pt(a)){const t=!o||!(0,r.S0)(i);return t?a.value:a}return(0,r.Kn)(a)?t?_t(a):bt(a):a}}const F=j(),V=j(!0);function j(t=!1){return function(e,n,i,s){let o=e[n];if(St(o)&&Pt(o)&&!Pt(i))return!1;if(!t&&!St(i)&&(kt(i)||(i=At(i),o=At(o)),!(0,r.kJ)(e)&&Pt(o)&&!Pt(i)))return o.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,s);return e===At(s)&&(a?(0,r.aU)(i,o)&&A(e,"set",n,i,o):A(e,"add",n,i)),c}}function B(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&A(t,"delete",e,void 0,i),s}function $(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&N.has(e)||k(t,"has",e),n}function q(t){return k(t,"iterate",(0,r.kJ)(t)?"length":v),Reflect.ownKeys(t)}const z={get:D,set:F,deleteProperty:B,has:$,ownKeys:q},H={get:P,set(t,e){return!0},deleteProperty(t,e){return!0}},K=(0,r.l7)({},z,{get:x,set:V}),G=t=>t,W=t=>Reflect.getPrototypeOf(t);function J(t,e,n=!1,r=!1){t=t["__v_raw"];const i=At(t),s=At(e);e!==s&&!n&&k(i,"get",e),!n&&k(i,"get",s);const{has:o}=W(i),a=r?G:n?Nt:Ot;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],r=At(n),i=At(t);return t!==i&&!e&&k(r,"has",t),!e&&k(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Q(t,e=!1){return t=t["__v_raw"],!e&&k(At(t),"iterate",v),Reflect.get(t,"size",t)}function Y(t){t=At(t);const e=At(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),A(e,"add",t,t)),this}function Z(t,e){e=At(e);const n=At(this),{has:i,get:s}=W(n);let o=i.call(n,t);o||(t=At(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&A(n,"set",t,e,a):A(n,"add",t,e),this}function tt(t){const e=At(this),{has:n,get:r}=W(e);let i=n.call(e,t);i||(t=At(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&A(e,"delete",t,void 0,s),o}function et(){const t=At(this),e=0!==t.size,n=void 0,r=t.clear();return e&&A(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=At(s),a=e?G:t?Nt:Ot;return!t&&k(o,"iterate",v),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function rt(t,e,n){return function(...i){const s=this["__v_raw"],o=At(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?G:e?Nt:Ot;return!e&&k(o,"iterate",u?w:v),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&this}}function st(){const t={get(t){return J(this,t)},get size(){return Q(this)},has:X,add:Y,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return J(this,t,!1,!0)},get size(){return Q(this)},has:X,add:Y,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return J(this,t,!0)},get size(){return Q(this,!0)},has(t){return X.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!1)},r={get(t){return J(this,t,!0,!0)},get size(){return Q(this,!0)},has(t){return X.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=rt(i,!1,!1),n[i]=rt(i,!0,!1),e[i]=rt(i,!1,!0),r[i]=rt(i,!0,!0)})),[t,n,e,r]}const[ot,at,ct,ut]=st();function lt(t,e){const n=e?t?ut:ct:t?at:ot;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const ht={get:lt(!1,!1)},ft={get:lt(!1,!0)},dt={get:lt(!0,!1)};const pt=new WeakMap,mt=new WeakMap,gt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function bt(t){return St(t)?t:Tt(t,!1,z,ht,pt)}function Et(t){return Tt(t,!1,K,ft,mt)}function _t(t){return Tt(t,!0,H,dt,gt)}function Tt(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function It(t){return St(t)?It(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function kt(t){return!(!t||!t["__v_isShallow"])}function Ct(t){return It(t)||St(t)}function At(t){const e=t&&t["__v_raw"];return e?At(e):t}function Rt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Ot=t=>(0,r.Kn)(t)?bt(t):t,Nt=t=>(0,r.Kn)(t)?_t(t):t;function Dt(t){_&&y&&(t=At(t),C(t.dep||(t.dep=c())))}function xt(t,e){t=At(t),t.dep&&R(t.dep)}function Pt(t){return!(!t||!0!==t.__v_isRef)}function Lt(t){return Ut(t,!1)}function Mt(t){return Ut(t,!0)}function Ut(t,e){return Pt(t)?t:new Ft(t,e)}class Ft{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:At(t),this._value=e?t:Ot(t)}get value(){return Dt(this),this._value}set value(t){t=this.__v_isShallow?t:At(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ot(t),xt(this,t))}}function Vt(t){return Pt(t)?t.value:t}const jt={get:(t,e,n)=>Vt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Pt(i)&&!Pt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Bt(t){return It(t)?t:new Proxy(t,jt)}function $t(t){const e=(0,r.kJ)(t)?new Array(t.length):{};for(const n in t)e[n]=zt(t,n);return e}class qt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}}function zt(t,e,n){const r=t[e];return Pt(r)?r:new qt(t,e,n)}class Ht{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(t,(()=>{this._dirty||(this._dirty=!0,xt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=At(this);return Dt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Kt(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new Ht(i,s,o||!s,n);return a}Promise.resolve()},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Ah:function(){return Pt},Cn:function(){return B},FN:function(){return _n},Fl:function(){return Fn},HY:function(){return Ue},JJ:function(){return Q},Jd:function(){return xt},Ko:function(){return pn},LL:function(){return xe},Ob:function(){return wt},P$:function(){return ct},Q2:function(){return Pe},Q6:function(){return pt},U2:function(){return lt},Uk:function(){return an},Us:function(){return Te},Wm:function(){return nn},Y3:function(){return _},Y8:function(){return st},YP:function(){return tt},_:function(){return en},aZ:function(){return mt},bv:function(){return Ot},dD:function(){return j},f3:function(){return Y},h:function(){return Vn},iD:function(){return We},ic:function(){return Dt},j4:function(){return Je},kq:function(){return cn},nK:function(){return dt},up:function(){return Ne},w5:function(){return $},wg:function(){return qe},wy:function(){return me}});n(1703);var r=n(4870),i=n(7139);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,m=0;const g=[];let y=null,v=0;const w=Promise.resolve();let b=null,E=null;function _(t){const e=b||w;return t?e.then(this?t.bind(this):t):e}function T(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=D(h[r]);i<t?e=r+1:n=r}return e}function I(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||t===E||(null==t.id?h.push(t):h.splice(T(t.id),0,t),S())}function S(){u||l||(l=!0,b=w.then(x))}function k(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function C(t,e,n,r){(0,i.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),S()}function A(t){C(t,p,d,m)}function R(t){C(t,y,g,v)}function O(t,e=null){if(d.length){for(E=e,p=[...new Set(d)],d.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,E=null,O(t,e)}}function N(t){if(g.length){const t=[...new Set(g)];if(g.length=0,y)return void y.push(...t);for(y=t,y.sort(((t,e)=>D(t)-D(e))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const D=t=>null==t.id?1/0:t.id;function x(t){l=!1,u=!0,O(t),h.sort(((t,e)=>D(t)-D(e)));i.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,null,14)}}finally{f=0,h.length=0,N(t),u=!1,b=null,(h.length||d.length||g.length)&&x(t)}}new Set;new Map;function P(t,e,...n){const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o?s=n.map((t=>t.trim())):e&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(e)]||r[u=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function L(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=L(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),r.set(t,a),a):(r.set(t,null),null)}function M(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let U=null,F=null;function V(t){const e=U;return U=t,F=t&&t.type.__scopeId||null,e}function j(t){F=t}function B(){F=null}function $(t,e=U,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ke(-1);const i=V(e),s=t(...n);return V(i),r._d&&Ke(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function q(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:m,ctx:g,inheritAttrs:y}=t;let v,w;const b=V(t);try{if(4&n.shapeFlag){const t=s||r;v=un(f.call(t,t,d,o,m,p,g)),w=l}else{const t=e;0,v=un(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:z(l)}}catch(_){Be.length=0,a(_,t,1),v=nn(Ve)}let E=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=E;t.length&&7&e&&(c&&t.some(i.tR)&&(w=H(w,c)),E=on(E,w))}return n.dirs&&(E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,V(b),v}const z=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},H=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function K(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||G(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?G(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function G(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!M(n,s))return!0}return!1}function W({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const J=t=>t.__isSuspense;function X(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):R(t)}function Q(t,e){if(En){let n=En.provides;const r=En.parent&&En.parent.provides;r===n&&(n=En.provides=Object.create(r)),n[t]=e}else 0}function Y(t,e,n=!1){const r=En||U;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r.proxy):e}else 0}const Z={};function tt(t,e,n){return et(t,e,n)}function et(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=En;let f,d,p=!1,m=!1;if((0,r.dq)(t)?(f=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(f=()=>t,a=!0):(0,i.kJ)(t)?(m=!0,p=t.some(r.PG),f=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?it(t):(0,i.mf)(t)?s(t,h,2):void 0))):f=(0,i.mf)(t)?e?()=>s(t,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),o(t,h,3,[g])}:i.dG,e&&a){const t=f;f=()=>it(t())}let g=t=>{d=b.onStop=()=>{s(t,h,4)}};if(An)return g=i.dG,e?n&&o(e,h,3,[f(),m?[]:void 0,g]):f(),i.dG;let y=m?[]:Z;const v=()=>{if(b.active)if(e){const t=b.run();(a||p||(m?t.some(((t,e)=>(0,i.aU)(t,y[e]))):(0,i.aU)(t,y)))&&(d&&d(),o(e,h,3,[t,y===Z?void 0:y,g]),y=t)}else b.run()};let w;v.allowRecurse=!!e,w="sync"===c?v:"post"===c?()=>_e(v,h&&h.suspense):()=>{!h||h.isMounted?A(v):v()};const b=new r.qq(f,w);return e?n?v():y=b.run():"post"===c?_e(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function nt(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?rt(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=En;Tn(this);const c=et(s,o.bind(r),n);return a?Tn(a):In(),c}function rt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function it(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))it(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)it(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{it(t,e)}));else if((0,i.PO)(t))for(const n in t)it(t[n],e);return t}function st(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ot((()=>{t.isMounted=!0})),xt((()=>{t.isUnmounting=!0})),t}const ot=[Function,Array],at={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},setup(t,{slots:e}){const n=_n(),i=st();let s;return()=>{const o=e.default&&pt(e.default(),!0);if(!o||!o.length)return;const a=(0,r.IU)(t),{mode:c}=a;const u=o[0];if(i.isLeaving)return ht(u);const l=ft(u);if(!l)return ht(u);const h=lt(l,a,i,n);dt(l,h);const f=n.subTree,d=f&&ft(f);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(d&&d.type!==Ve&&(!Qe(l,d)||p)){const t=lt(d,a,i,n);if(dt(d,t),"out-in"===c)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},ht(u);"in-out"===c&&l.type!==Ve&&(t.delayLeave=(t,e,n)=>{const r=ut(i,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return u}}},ct=at;function ut(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function lt(t,e,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:v,onAppearCancelled:w}=e,b=String(t.key),E=ut(n,t),_=(t,e)=>{t&&o(t,r,9,e)},T={mode:s,persisted:a,beforeEnter(e){let r=c;if(!n.isMounted){if(!i)return;r=g||c}e._leaveCb&&e._leaveCb(!0);const s=E[b];s&&Qe(t,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[e])},enter(t){let e=u,r=l,s=h;if(!n.isMounted){if(!i)return;e=y||u,r=v||l,s=w||h}let o=!1;const a=t._enterCb=e=>{o||(o=!0,_(e?s:r,[t]),T.delayedLeave&&T.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();_(f,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),_(n?m:p,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,d?(d(e,o),d.length<=1&&o()):o()},clone(t){return lt(t,e,n,r)}};return T}function ht(t){if(yt(t))return t=on(t),t.children=null,t}function ft(t){return yt(t)?t.children?t.children[0]:void 0:t}function dt(t,e){6&t.shapeFlag&&t.component?dt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ue?(128&o.patchFlag&&i++,r=r.concat(pt(o.children,e,a))):(e||o.type!==Ve)&&r.push(null!=a?on(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function mt(t){return(0,i.mf)(t)?{setup:t,name:t.name}:t}const gt=t=>!!t.type.__asyncLoader;const yt=t=>t.type.__isKeepAlive,vt={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=_n(),r=n.ctx;if(!r.renderer)return e.default;const s=new Map,o=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:h,o:{createElement:f}}}=r,d=f("div");function p(t){St(t),h(t,n,c,!0)}function m(t){s.forEach(((e,n)=>{const r=Mn(e.type);!r||t&&t(r)||g(n)}))}function g(t){const e=s.get(t);a&&e.type===a.type?a&&St(a):p(e),s.delete(t),o.delete(t)}r.activate=(t,e,n,r,s)=>{const o=t.component;l(t,e,n,0,c),u(o.vnode,t,e,n,o,c,r,t.slotScopeIds,s),_e((()=>{o.isDeactivated=!1,o.a&&(0,i.ir)(o.a);const e=t.props&&t.props.onVnodeMounted;e&&dn(e,o.parent,t)}),c)},r.deactivate=t=>{const e=t.component;l(t,d,null,1,c),_e((()=>{e.da&&(0,i.ir)(e.da);const n=t.props&&t.props.onVnodeUnmounted;n&&dn(n,e.parent,t),e.isDeactivated=!0}),c)},tt((()=>[t.include,t.exclude]),(([t,e])=>{t&&m((e=>bt(t,e))),e&&m((t=>!bt(e,t)))}),{flush:"post",deep:!0});let y=null;const v=()=>{null!=y&&s.set(y,kt(n.subTree))};return Ot(v),Dt(v),xt((()=>{s.forEach((t=>{const{subTree:e,suspense:r}=n,i=kt(e);if(t.type!==i.type)p(t);else{St(i);const t=i.component.da;t&&_e(t,r)}}))})),()=>{if(y=null,!e.default)return null;const n=e.default(),r=n[0];if(n.length>1)return a=null,n;if(!Xe(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=kt(r);const c=i.type,u=Mn(gt(i)?i.type.__asyncResolved||{}:c),{include:l,exclude:h,max:f}=t;if(l&&(!u||!bt(l,u))||h&&u&&bt(h,u))return a=i,r;const d=null==i.key?c:i.key,p=s.get(d);return i.el&&(i=on(i),128&r.shapeFlag&&(r.ssContent=i)),y=d,p?(i.el=p.el,i.component=p.component,i.transition&&dt(i,i.transition),i.shapeFlag|=512,o.delete(d),o.add(d)):(o.add(d),f&&o.size>parseInt(f,10)&&g(o.values().next().value)),i.shapeFlag|=256,a=i,r}}},wt=vt;function bt(t,e){return(0,i.kJ)(t)?t.some((t=>bt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function Et(t,e){Tt(t,"a",e)}function _t(t,e){Tt(t,"da",e)}function Tt(t,e,n=En){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Ct(e,r,n),n){let t=n.parent;while(t&&t.parent)yt(t.parent.vnode)&&It(r,e,n,t),t=t.parent}}function It(t,e,n,r){const s=Ct(e,t,r,!0);Pt((()=>{(0,i.Od)(r[e],s)}),n)}function St(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function kt(t){return 128&t.shapeFlag?t.ssContent:t}function Ct(t,e,n=En,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Tn(n);const s=o(e,n,t,i);return In(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const At=t=>(e,n=En)=>(!An||"sp"===t)&&Ct(t,e,n),Rt=At("bm"),Ot=At("m"),Nt=At("bu"),Dt=At("u"),xt=At("bum"),Pt=At("um"),Lt=At("sp"),Mt=At("rtg"),Ut=At("rtc");function Ft(t,e=En){Ct("ec",t,e)}let Vt=!0;function jt(t){const e=zt(t),n=t.proxy,s=t.ctx;Vt=!1,e.beforeCreate&&$t(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:_,render:T,renderTracked:I,renderTriggered:S,errorCaptured:k,serverPrefetch:C,expose:A,inheritAttrs:R,components:O,directives:N,filters:D}=e,x=null;if(h&&Bt(h,s,x,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Vt=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=Fn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)qt(u[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{Q(e,t[e])}))}function P(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&$t(f,t,"c"),P(Rt,d),P(Ot,p),P(Nt,m),P(Dt,g),P(Et,y),P(_t,v),P(Ft,k),P(Ut,I),P(Mt,S),P(xt,b),P(Pt,_),P(Lt,C),(0,i.kJ)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=R&&(t.inheritAttrs=R),O&&(t.components=O),N&&(t.directives=N)}function Bt(t,e,n=i.dG,s=!1){(0,i.kJ)(t)&&(t=Jt(t));for(const o in t){const n=t[o];let a;a=(0,i.Kn)(n)?"default"in n?Y(n.from||o,n.default,!0):Y(n.from||o):Y(n),(0,r.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function $t(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function qt(t,e,n,r){const s=r.includes(".")?rt(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&tt(s,n)}else if((0,i.mf)(t))tt(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>qt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&tt(s,r,t)}else 0}function zt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((t=>Ht(c,t,o,!0))),Ht(c,e,o)):c=e,s.set(e,c),c}function Ht(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ht(t,s,n,!0),i&&i.forEach((e=>Ht(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Kt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Kt={data:Gt,props:Qt,emits:Qt,methods:Qt,computed:Qt,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Qt,directives:Qt,watch:Yt,provide:Gt,inject:Wt};function Gt(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function Wt(t,e){return Qt(Jt(t),Jt(e))}function Jt(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function Qt(t,e){return t?(0,i.l7)((0,i.l7)(Object.create(null),t),e):e}function Yt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=Xt(t[r],e[r]);return n}function Zt(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,Ye,1),t.propsDefaults=Object.create(null),ee(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function te(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ee(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ne(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(M(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=ne(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ee(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ne(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return u}function ne(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(Tn(s),r=i[n]=t.call(null,e),In())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function re(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=re(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);ie(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(ie(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const t=ae(Boolean,r.type),n=ae(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return r.set(t,l),l}function ie(t){return"$"!==t[0]}function se(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function oe(t,e){return se(t)===se(e)}function ae(t,e){return(0,i.kJ)(e)?e.findIndex((e=>oe(e,t))):(0,i.mf)(e)&&oe(e,t)?0:-1}const ce=t=>"_"===t[0]||"$stable"===t,ue=t=>(0,i.kJ)(t)?t.map(un):[un(t)],le=(t,e,n)=>{const r=$(((...t)=>ue(e(...t))),n);return r._c=!1,r},he=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ce(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=le(s,n,r);else if(null!=n){0;const t=ue(n);e[s]=()=>t}}},fe=(t,e)=>{const n=ue(e);t.slots.default=()=>n},de=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):he(e,t.slots={})}else t.slots={},e&&fe(t,e);(0,i.Nj)(t.slots,Ye,1)},pe=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,he(e,s)),a=e}else e&&(fe(t,e),a={default:1});if(o)for(const i in s)ce(i)||i in a||delete s[i]};function me(t,e){const n=U;if(null===n)return t;const r=Ln(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];(0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&it(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function ge(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}function ye(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ve=0;function we(t,e){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=ye(),o=new Set;let a=!1;const c=s.app={_uid:ve++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:jn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){const l=nn(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Ln(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function be(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>be(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(gt(o)&&!a)return;const c=4&o.shapeFlag?Ln(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.HD)(f)?(d[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(h))s(h,l,12,[u,d]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const s=()=>{if(t.f){const n=e?d[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,i.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):(0,r.dq)(h)&&(h.value=u,t.k&&(d[t.k]=u))};u?(s.id=-1,_e(s,n)):s()}else 0}}function Ee(){}const _e=X;function Te(t){return Ie(t)}function Ie(t,e){Ee();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:m=i.dG,cloneNode:g,insertStaticContent:y}=t,v=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Qe(t,e)&&(r=Z(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Fe:w(t,e,n,r);break;case Ve:b(t,e,n,r);break;case je:null==t&&E(e,n,r,o);break;case Ue:L(t,e,n,r,i,s,o,a,c);break;default:1&h?S(t,e,n,r,i,s,o,a,c):6&h?M(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,et)}null!=l&&i&&be(l,t&&t.ref,s,e||t,!e)},w=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},E=(t,e,n,r)=>{[t.el,t.anchor]=y(t.children,e,n,r,t.el,t.anchor)},_=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},S=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?C(e,n,r,i,s,o,a,c):D(t,e,i,s,o,a,c)},C=(t,e,n,r,o,u,l,h)=>{let d,p;const{type:m,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:E}=t;if(t.el&&void 0!==g&&-1===b)d=t.el=g(t.el);else{if(d=t.el=c(t.type,u,y&&y.is,y),8&v?f(d,t.children):16&v&&R(t.children,d,null,r,o,u&&"foreignObject"!==m,l,h),E&&ge(t,null,r,"created"),y){for(const e in y)"value"===e||(0,i.Gg)(e)||a(d,e,null,y[e],u,t.children,r,o,Y);"value"in y&&a(d,"value",null,y.value),(p=y.onVnodeBeforeMount)&&dn(p,r,t)}A(d,t,t.scopeId,l,r)}E&&ge(t,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;_&&w.beforeEnter(d),s(d,e,n),((p=y&&y.onVnodeMounted)||_||E)&&_e((()=>{p&&dn(p,r,t),_&&w.enter(d),E&&ge(t,null,r,"mounted")}),o)},A=(t,e,n,r,i)=>{if(n&&m(t,n),r)for(let s=0;s<r.length;s++)m(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;A(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?ln(t[u]):un(t[u]);v(null,c,e,n,r,i,s,o,a)}},D=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.kT,m=e.props||i.kT;let g;n&&Se(n,!1),(g=m.onVnodeBeforeUpdate)&&dn(g,n,e,t),d&&ge(e,t,n,"beforeUpdate"),n&&Se(n,!0);const y=s&&"foreignObject"!==e.type;if(h?x(t.dynamicChildren,h,u,n,r,y,o):c||B(t,e,u,null,n,r,y,o,!1),l>0){if(16&l)P(u,e,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,Y)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||P(u,e,p,m,n,r,s);((g=m.onVnodeUpdated)||d)&&_e((()=>{g&&dn(g,n,e,t),d&&ge(e,t,n,"updated")}),r)},x=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Ue||!Qe(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},P=(t,e,n,r,s,o,c)=>{if(n!==r){for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,Y)}if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,Y);"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(s(h,n,r),s(f,n,r),R(e.children,n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(x(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&ke(t,e,!0)):B(t,e,n,f,i,o,a,c,l)},M=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):U(e,n,r,i,s,o,c):F(t,e,c)},U=(t,e,n,r,i,s,o)=>{const a=t.component=bn(t,r,i);if(yt(t)&&(a.ctx.renderer=et),Rn(a),a.asyncDep){if(i&&i.registerDep(a,V),!t.el){const t=a.subTree=nn(Ve);b(null,t,e,n)}}else V(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(K(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,k(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:l}=t,h=n;0,Se(t,!1),n?(n.el=l.el,j(t,n,c)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&dn(e,u,n,l),Se(t,!0);const f=q(t);0;const p=t.subTree;t.subTree=f,v(p,f,d(p.el),Z(p),t,o,a),n.el=f.el,null===h&&W(t,f.el),s&&_e(s,o),(e=n.props&&n.props.onVnodeUpdated)&&_e((()=>dn(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=gt(e);if(Se(t,!1),l&&(0,i.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&dn(r,f,e),Se(t,!0),c&&rt){const n=()=>{t.subTree=q(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=q(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&_e(h,o),!d&&(r=u&&u.onVnodeMounted)){const t=e;_e((()=>dn(r,f,t)),o)}256&e.shapeFlag&&t.a&&_e(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(u,(()=>I(t.update)),t.scope),h=t.update=l.run.bind(l);h.id=t.uid,Se(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,te(t,e.props,i,n),pe(t,e.children,n),(0,r.Jd)(),O(void 0,t.update),(0,r.lk)()},B=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(u,h,n,r,i,s,o,a,c);if(256&d)return void $(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Y(u,i,s),h!==u&&f(n,h)):16&l?16&p?z(u,h,n,r,i,s,o,a,c):Y(u,i,s,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,s,o,a,c))},$=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?ln(e[d]):un(e[d]);v(t[d],r,n,null,s,o,a,c,u)}l>h?Y(t,s,o,!0,!1,f):R(e,n,r,s,o,a,c,u,f)},z=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?ln(e[l]):un(e[l]);if(!Qe(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?ln(e[d]):un(e[d]);if(!Qe(r,i))break;v(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)v(null,e[l]=u?ln(e[l]):un(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)G(t[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=d;l++){const t=e[l]=u?ln(e[l]):un(e[l]);null!=t.key&&g.set(t.key,l)}let y,w=0;const b=d-m+1;let E=!1,_=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){G(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=d;y++)if(0===T[y-m]&&Qe(r,e[y])){i=y;break}void 0===i?G(r,s,o,!0):(T[i-m]=l+1,i>=_?_=i:E=!0,v(r,e[i],n,null,s,o,a,c,u),w++)}const I=E?Ce(T):i.Z6;for(y=I.length-1,l=b-1;l>=0;l--){const t=m+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?v(null,i,n,f,s,o,a,c,u):E&&(y<0||l!==I[y]?H(i,n,f,2):y--)}}},H=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void H(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Ue){s(o,e,n);for(let t=0;t<u.length;t++)H(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===je)return void _(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),_e((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&be(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!gt(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&dn(m,e,t),6&l)Q(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&ge(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,et,r):u&&(s!==Ue||h>0&&64&h)?Y(u,e,n,!1,!0):(s===Ue&&384&h||!i&&16&l)&&Y(c,e,n),r&&J(t)}(p&&(m=o&&o.onVnodeUnmounted)||d)&&_e((()=>{m&&dn(m,e,t),d&&ge(t,null,e,"unmounted")}),n)},J=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Ue)return void X(n,r);if(e===je)return void T(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},X=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,G(a,t,e,n)),c&&_e(c,e),_e((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),N(),e._vnode=t},et={p:v,um:G,m:H,r:J,mt:U,mc:R,pc:B,pbc:x,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:we(tt,nt)}}function Se({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ke(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=ln(s[i]),e.el=t.el),n||ke(t,e))}}function Ce(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Ae=t=>t.__isTeleport;const Re="components",Oe="directives";function Ne(t,e){return Le(Re,t,!0,e)||t}const De=Symbol();function xe(t){return(0,i.HD)(t)?Le(Re,t,!1)||t:t||De}function Pe(t){return Le(Oe,t)}function Le(t,e,n=!0,r=!1){const s=U||En;if(s){const n=s.type;if(t===Re){const t=Mn(n);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=Me(s[t]||n[t],e)||Me(s.appContext[t],e);return!o&&r?n:o}}function Me(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}const Ue=Symbol(void 0),Fe=Symbol(void 0),Ve=Symbol(void 0),je=Symbol(void 0),Be=[];let $e=null;function qe(t=!1){Be.push($e=t?null:[])}function ze(){Be.pop(),$e=Be[Be.length-1]||null}let He=1;function Ke(t){He+=t}function Ge(t){return t.dynamicChildren=He>0?$e||i.Z6:null,ze(),He>0&&$e&&$e.push(t),t}function We(t,e,n,r,i,s){return Ge(en(t,e,n,r,i,s,!0))}function Je(t,e,n,r,i){return Ge(nn(t,e,n,r,i,!0))}function Xe(t){return!!t&&!0===t.__v_isVNode}function Qe(t,e){return t.type===e.type&&t.key===e.key}const Ye="__vInternal",Ze=({key:t})=>null!=t?t:null,tn=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:U,r:t,k:e,f:!!n}:t:null;function en(t,e=null,n=null,r=0,s=null,o=(t===Ue?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ze(e),ref:e&&tn(e),scopeId:F,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(hn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),He>0&&!a&&$e&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&$e.push(u),u}const nn=rn;function rn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==De||(t=Ve),Xe(t)){const r=on(t,e,!0);return n&&hn(r,n),r}if(Un(t)&&(t=t.__vccOpts),e){e=sn(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:J(t)?128:Ae(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return en(t,e,n,s,o,c,a,!0)}function sn(t){return t?(0,r.X3)(t)||Ye in t?(0,i.l7)({},t):t:null}function on(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?fn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ze(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(tn(e)):[s,tn(e)]:tn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),el:t.el,anchor:t.anchor};return u}function an(t=" ",e=0){return nn(Fe,null,t,e)}function cn(t="",e=!1){return e?(qe(),Je(Ve,null,t)):nn(Ve,null,t)}function un(t){return null==t||"boolean"===typeof t?nn(Ve):(0,i.kJ)(t)?nn(Ue,null,t.slice()):"object"===typeof t?ln(t):nn(Fe,null,String(t))}function ln(t){return null===t.el||t.memo?t:on(t)}function hn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),hn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Ye in e?3===r&&U&&(1===U.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=U}}else(0,i.mf)(e)?(e={default:e,_ctx:U},n=32):(e=String(e),64&r?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function fn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function dn(t,e,n,r=null){o(t,e,7,[n,r])}function pn(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const mn=t=>t?Sn(t)?Ln(t)||t.proxy:mn(t.parent):null,gn=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mn(t.parent),$root:t=>mn(t.root),$emit:t=>t.emit,$options:t=>zt(t),$forceUpdate:t=>()=>I(t.update),$nextTick:t=>_.bind(t.proxy),$watch:t=>nt.bind(t)}),yn={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(s!==i.kT&&(0,i.RI)(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];Vt&&(c[e]=0)}}const f=gn[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return s!==i.kT&&(0,i.RI)(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||e!==i.kT&&(0,i.RI)(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(gn,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t.$.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const vn=ye();let wn=0;function bn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||vn,a={uid:wn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:re(s,o),emitsOptions:L(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=P.bind(null,a),t.ce&&t.ce(a),a}let En=null;const _n=()=>En||U,Tn=t=>{En=t,t.scope.on()},In=()=>{En&&En.scope.off(),En=null};function Sn(t){return 4&t.vnode.shapeFlag}let kn,Cn,An=!1;function Rn(t,e=!1){An=e;const{props:n,children:r}=t.vnode,i=Sn(t);Zt(t,n,i,e),de(t,r);const s=i?On(t,e):void 0;return An=!1,s}function On(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,yn));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Pn(t):null;Tn(t),(0,r.Jd)();const c=s(o,t,0,[t.props,n]);if((0,r.lk)(),In(),(0,i.tI)(c)){if(c.then(In,In),e)return c.then((n=>{Nn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Nn(t,c,e)}else Dn(t,e)}function Nn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Dn(t,n)}function Dn(t,e,n){const s=t.type;if(!t.render){if(!e&&kn&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=kn(e,c)}}t.render=s.render||i.dG,Cn&&Cn(t)}Tn(t),(0,r.Jd)(),jt(t),(0,r.lk)(),In()}function xn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function Pn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=xn(t))},slots:t.slots,emit:t.emit,expose:e}}function Ln(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in gn?gn[n](t):void 0}}))}function Mn(t){return(0,i.mf)(t)&&t.displayName||t.name}function Un(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Fn=(t,e)=>(0,r.Fl)(t,e,An);function Vn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?Xe(e)?nn(t,null,[e]):nn(t,e):nn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Xe(n)&&(n=[n]),nn(t,e,n))}Symbol("");const jn="3.2.32"},9242:function(t,e,n){"use strict";n.d(e,{D2:function(){return ct},F8:function(){return ut},iM:function(){return ot},nr:function(){return rt},ri:function(){return pt}});var r=n(7139),i=n(3396);n(4870);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?o.createElementNS(s,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const i=a.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const i=t.style,s=(0,r.HD)(n);if(n&&!s){for(const t in n)f(i,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&f(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const h=/\s*!important$/;function f(t,e,n){if((0,r.kJ)(n))n.forEach((n=>f(t,e,n)));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=m(t,e);h.test(n)?t.setProperty((0,r.rs)(i),n.replace(h,""),"important"):t[i]=n}}const d=["Webkit","Moz","ms"],p={};function m(t,e){const n=p[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return p[e]=i;i=(0,r.kC)(i);for(let r=0;r<d.length;r++){const n=d[r]+i;if(n in t)return p[e]=n}return e}const g="http://www.w3.org/1999/xlink";function y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(g,e.slice(6,e.length)):t.setAttributeNS(g,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function v(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=(0,r.yA)(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let w=Date.now,b=!1;if("undefined"!==typeof window){w()>document.createEvent("Event").timeStamp&&(w=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);b=!!(t&&Number(t[1])<=53)}let E=0;const _=Promise.resolve(),T=()=>{E=0},I=()=>E||(_.then(T),E=w());function S(t,e,n,r){t.addEventListener(e,n,r)}function k(t,e,n,r){t.removeEventListener(e,n,r)}function C(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=R(e);if(r){const o=s[e]=O(r,i);S(t,n,o,a)}else o&&(k(t,n,o,a),s[e]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function R(t){let e;if(A.test(t)){let n;e={};while(n=t.match(A))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.rs)(t.slice(2)),e]}function O(t,e){const n=t=>{const r=t.timeStamp||w();(b||r>=n.attached-1)&&(0,i.$d)(N(t,n.value),e,5,[t])};return n.value=t,n.attached=I(),n}function N(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const D=/^on[a-z]/,x=(t,e,n,i,s=!1,o,a,c,h)=>{"class"===e?u(t,i,s):"style"===e?l(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||C(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):P(t,e,i,s))?v(t,e,i,o,a,c,h):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),y(t,e,i,s))};function P(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&D.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!D.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const L="transition",M="animation",U=(t,{slots:e})=>(0,i.h)(i.P$,B(t),e);U.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=(U.props=(0,r.l7)({},i.P$.props,F),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),j=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function B(t){const e={};for(const r in t)r in F||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=$(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:_,onBeforeAppear:T=v,onAppear:I=w,onAppearCancelled:S=b}=e,k=(t,e,n)=>{H(t,e?h:c),H(t,e?l:a),n&&n()},C=(t,e)=>{H(t,p),H(t,d),e&&e()},A=t=>(e,n)=>{const r=t?I:w,s=()=>k(e,t,n);V(r,[e,s]),K((()=>{H(e,t?u:o),z(e,t?h:c),j(r)||W(e,i,g,s)}))};return(0,r.l7)(e,{onBeforeEnter(t){V(v,[t]),z(t,o),z(t,a)},onBeforeAppear(t){V(T,[t]),z(t,u),z(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){const n=()=>C(t,e);z(t,f),Y(),z(t,d),K((()=>{H(t,f),z(t,p),j(E)||W(t,i,y,n)})),V(E,[t,n])},onEnterCancelled(t){k(t,!1),V(b,[t])},onAppearCancelled(t){k(t,!0),V(S,[t])},onLeaveCancelled(t){C(t),V(_,[t])}})}function $(t){if(null==t)return null;if((0,r.Kn)(t))return[q(t.enter),q(t.leave)];{const e=q(t);return[e,e]}}function q(t){const e=(0,r.He)(t);return e}function z(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function K(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let G=0;function W(t,e,n,r){const i=t._endId=++G,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=J(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function J(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(L+"Delay"),s=r(L+"Duration"),o=X(i,s),a=r(M+"Delay"),c=r(M+"Duration"),u=X(a,c);let l=null,h=0,f=0;e===L?o>0&&(l=L,h=o,f=s.length):e===M?u>0&&(l=M,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?L:M:null,f=l?l===L?s.length:c.length:0);const d=l===L&&/\b(transform|all)(,|$)/.test(n[L+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function X(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Q(e)+Q(t[n]))))}function Q(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"];return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,nt(e,"input"))}function nt(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const rt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=Z(s);const o=i||s.props&&"number"===s.props.type;S(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():o&&(i=(0,r.He)(i)),t._assign(i)})),n&&S(t,"change",(()=>{t.value=t.value.trim()})),e||(S(t,"compositionstart",tt),S(t,"compositionend",et),S(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=Z(o),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const it=["ctrl","shift","alt","meta"],st={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>it.some((n=>t[`${n}Key`]&&!e.includes(n)))},ot=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=st[e[t]];if(r&&r(n,e))return}return t(n,...r)},at={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ct=(t,e)=>n=>{if(!("key"in n))return;const i=(0,r.rs)(n.key);return e.some((t=>t===i||at[t]===i))?t(n):void 0},ut={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):lt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),lt(t,!0),r.enter(t)):r.leave(t,(()=>{lt(t,!1)})):lt(t,e))},beforeUnmount(t,{value:e}){lt(t,e)}};function lt(t,e){t.style.display=e?t._vod:"none"}const ht=(0,r.l7)({patchProp:x},c);let ft;function dt(){return ft||(ft=(0,i.Us)(ht))}const pt=(...t)=>{const e=dt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=mt(t);if(!i)return;const s=e._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function mt(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return d},DM:function(){return D},E9:function(){return rt},F7:function(){return I},Gg:function(){return z},HD:function(){return L},He:function(){return et},Kn:function(){return U},NO:function(){return _},Nj:function(){return tt},Od:function(){return C},PO:function(){return $},Pq:function(){return a},RI:function(){return R},S0:function(){return q},W7:function(){return B},WV:function(){return m},Z6:function(){return b},_A:function(){return G},_N:function(){return N},aU:function(){return Y},dG:function(){return E},e1:function(){return s},fY:function(){return r},hR:function(){return Q},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return X},kJ:function(){return O},kT:function(){return w},l7:function(){return k},mf:function(){return P},rs:function(){return J},tI:function(){return F},tR:function(){return S},yA:function(){return c},yk:function(){return M},zw:function(){return y}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=L(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return L(t)||U(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function d(t){let e="";if(L(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(U(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=m(t[r],e[r]);return n}function m(t,e){if(t===e)return!0;let n=x(t),r=x(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=O(t),r=O(e),n||r)return!(!n||!r)&&p(t,e);if(n=U(t),r=U(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!m(t[n],e[n]))return!1}}return String(t)===String(e)}function g(t,e){return t.findIndex((t=>m(t,e)))}const y=t=>L(t)?t:null==t?"":O(t)||U(t)&&(t.toString===V||!P(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):N(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:D(e)?{[`Set(${e.size})`]:[...e.values()]}:!U(e)||O(e)||$(e)?e:String(e),w={},b=[],E=()=>{},_=()=>!1,T=/^on[^a-z]/,I=t=>T.test(t),S=t=>t.startsWith("onUpdate:"),k=Object.assign,C=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A=Object.prototype.hasOwnProperty,R=(t,e)=>A.call(t,e),O=Array.isArray,N=t=>"[object Map]"===j(t),D=t=>"[object Set]"===j(t),x=t=>t instanceof Date,P=t=>"function"===typeof t,L=t=>"string"===typeof t,M=t=>"symbol"===typeof t,U=t=>null!==t&&"object"===typeof t,F=t=>U(t)&&P(t.then)&&P(t.catch),V=Object.prototype.toString,j=t=>V.call(t),B=t=>j(t).slice(8,-1),$=t=>"[object Object]"===j(t),q=t=>L(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,z=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},K=/-(\w)/g,G=H((t=>t.replace(K,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,J=H((t=>t.replace(W,"-$1").toLowerCase())),X=H((t=>t.charAt(0).toUpperCase()+t.slice(1))),Q=H((t=>t?`on${X(t)}`:"")),Y=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},6265:function(t,e,n){t.exports=n(9435)},4951:function(t,e,n){"use strict";n(2801);var r=n(6642),i=n(6806),s=n(3833),o=n(4360),a=n(5047),c=n(5976),u=n(9896),l=n(4393),h=n(8507),f=n(692);t.exports=function(t){return new Promise((function(e,n){var d,p=t.data,m=t.headers,g=t.responseType;function y(){t.cancelToken&&t.cancelToken.unsubscribe(d),t.signal&&t.signal.removeEventListener("abort",d)}r.isFormData(p)&&delete m["Content-Type"];var v=new XMLHttpRequest;if(t.auth){var w=t.auth.username||"",b=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+b)}var E=a(t.baseURL,t.url);function _(){if(v){var r="getAllResponseHeaders"in v?c(v.getAllResponseHeaders()):null,s=g&&"text"!==g&&"json"!==g?v.response:v.responseText,o={data:s,status:v.status,statusText:v.statusText,headers:r,config:t,request:v};i((function(t){e(t),y()}),(function(t){n(t),y()}),o),v=null}}if(v.open(t.method.toUpperCase(),o(E,t.params,t.paramsSerializer),!0),v.timeout=t.timeout,"onloadend"in v?v.onloadend=_:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(_)},v.onabort=function(){v&&(n(l("Request aborted",t,"ECONNABORTED",v)),v=null)},v.onerror=function(){n(l("Network Error",t,null,v)),v=null},v.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||h;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(l(e,t,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},r.isStandardBrowserEnv()){var T=(t.withCredentials||u(E))&&t.xsrfCookieName?s.read(t.xsrfCookieName):void 0;T&&(m[t.xsrfHeaderName]=T)}"setRequestHeader"in v&&r.forEach(m,(function(t,e){"undefined"===typeof p&&"content-type"===e.toLowerCase()?delete m[e]:v.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(v.withCredentials=!!t.withCredentials),g&&"json"!==g&&(v.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&v.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(d=function(t){v&&(n(!t||t&&t.type?new f("canceled"):t),v.abort(),v=null)},t.cancelToken&&t.cancelToken.subscribe(d),t.signal&&(t.signal.aborted?d():t.signal.addEventListener("abort",d))),p||(p=null),v.send(p)}))}},9435:function(t,e,n){"use strict";var r=n(6642),i=n(5955),s=n(7104),o=n(8186),a=n(7);function c(t){var e=new s(t),n=i(s.prototype.request,e);return r.extend(n,s.prototype,e),r.extend(n,e),n.create=function(e){return c(o(t,e))},n}var u=c(a);u.Axios=s,u.Cancel=n(692),u.CancelToken=n(6016),u.isCancel=n(5936),u.VERSION=n(4679).version,u.all=function(t){return Promise.all(t)},u.spread=n(5431),u.isAxiosError=n(786),t.exports=u,t.exports["default"]=u},692:function(t){"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},6016:function(t,e,n){"use strict";n(1703);var r=n(692);function i(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},i.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},i.source=function(){var t,e=new i((function(e){t=e}));return{token:e,cancel:t}},t.exports=i},5936:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},7104:function(t,e,n){"use strict";var r=n(6642),i=n(4360),s=n(999),o=n(6559),a=n(8186),c=n(6298),u=c.validators;function l(t){this.defaults=t,this.interceptors={request:new s,response:new s}}l.prototype.request=function(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(i=i&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var s,l=[];if(this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)})),!i){var h=[o,void 0];Array.prototype.unshift.apply(h,r),h=h.concat(l),s=Promise.resolve(e);while(h.length)s=s.then(h.shift(),h.shift());return s}var f=e;while(r.length){var d=r.shift(),p=r.shift();try{f=d(f)}catch(m){p(m);break}}try{s=o(f)}catch(m){return Promise.reject(m)}while(l.length)s=s.then(l.shift(),l.shift());return s},l.prototype.getUri=function(t){return t=a(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){l.prototype[t]=function(e,n,r){return this.request(a(r||{},{method:t,url:e,data:n}))}})),t.exports=l},999:function(t,e,n){"use strict";var r=n(6642);function i(){this.handlers=[]}i.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=i},5047:function(t,e,n){"use strict";var r=n(4777),i=n(2381);t.exports=function(t,e){return t&&!r(e)?i(t,e):e}},4393:function(t,e,n){"use strict";n(1703);var r=n(5891);t.exports=function(t,e,n,i,s){var o=new Error(t);return r(o,e,n,i,s)}},6559:function(t,e,n){"use strict";var r=n(6642),i=n(3756),s=n(5936),o=n(7),a=n(692);function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a("canceled")}t.exports=function(t){c(t),t.headers=t.headers||{},t.data=i.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||o.adapter;return e(t).then((function(e){return c(t),e.data=i.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return s(e)||(c(t),e&&e.response&&(e.response.data=i.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},5891:function(t){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},8186:function(t,e,n){"use strict";var r=n(6642);t.exports=function(t,e){e=e||{};var n={};function i(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function s(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:i(void 0,t[n]):i(t[n],e[n])}function o(t){if(!r.isUndefined(e[t]))return i(void 0,e[t])}function a(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:i(void 0,t[n]):i(void 0,e[n])}function c(n){return n in e?i(t[n],e[n]):n in t?i(void 0,t[n]):void 0}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||s,i=e(t);r.isUndefined(i)&&e!==c||(n[t]=i)})),n}},6806:function(t,e,n){"use strict";var r=n(4393);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},3756:function(t,e,n){"use strict";var r=n(6642),i=n(7);t.exports=function(t,e,n){var s=this||i;return r.forEach(n,(function(n){t=n.call(s,t,e)})),t}},7:function(t,e,n){"use strict";var r=n(6642),i=n(1446),s=n(5891),o=n(8507),a={"Content-Type":"application/x-www-form-urlencoded"};function c(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function u(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=n(4951)),t}function l(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(t)}var h={transitional:o,adapter:u(),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(c(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)||e&&"application/json"===e["Content-Type"]?(c(e,"application/json"),l(t)):t}],transformResponse:[function(t){var e=this.transitional||h.transitional,n=e&&e.silentJSONParsing,i=e&&e.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(o){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){h.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){h.headers[t]=r.merge(a)})),t.exports=h},8507:function(t){"use strict";t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4679:function(t){t.exports={version:"0.26.1"}},5955:function(t){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},4360:function(t,e,n){"use strict";var r=n(6642);function i(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(r.isURLSearchParams(e))s=e.toString();else{var o=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),o.push(i(e)+"="+i(t))})))})),s=o.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},2381:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},3833:function(t,e,n){"use strict";var r=n(6642);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,s,o){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},4777:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},786:function(t,e,n){"use strict";var r=n(6642);t.exports=function(t){return r.isObject(t)&&!0===t.isAxiosError}},9896:function(t,e,n){"use strict";var r=n(6642);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},1446:function(t,e,n){"use strict";var r=n(6642);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},5976:function(t,e,n){"use strict";var r=n(6642),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,o={};return t?(r.forEach(t.split("\n"),(function(t){if(s=t.indexOf(":"),e=r.trim(t.substr(0,s)).toLowerCase(),n=r.trim(t.substr(s+1)),e){if(o[e]&&i.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}})),o):o}},5431:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},6298:function(t,e,n){"use strict";n(1703);var r=n(4679).version,i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var s={};function o(t,e,n){if("object"!==typeof t)throw new TypeError("options must be an object");var r=Object.keys(t),i=r.length;while(i-- >0){var s=r[i],o=e[s];if(o){var a=t[s],c=void 0===a||o(a,s,t);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}}i.transitional=function(t,e,n){function i(t,e){return"[Axios v"+r+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,o){if(!1===t)throw new Error(i(r," has been removed"+(e?" in "+e:"")));return e&&!s[r]&&(s[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,o)}},t.exports={assertOptions:o,validators:i}},6642:function(t,e,n){"use strict";var r=n(5955),i=Object.prototype.toString;function s(t){return Array.isArray(t)}function o(t){return"undefined"===typeof t}function a(t){return null!==t&&!o(t)&&null!==t.constructor&&!o(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function c(t){return"[object ArrayBuffer]"===i.call(t)}function u(t){return"[object FormData]"===i.call(t)}function l(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&c(t.buffer),e}function h(t){return"string"===typeof t}function f(t){return"number"===typeof t}function d(t){return null!==t&&"object"===typeof t}function p(t){if("[object Object]"!==i.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Date]"===i.call(t)}function g(t){return"[object File]"===i.call(t)}function y(t){return"[object Blob]"===i.call(t)}function v(t){return"[object Function]"===i.call(t)}function w(t){return d(t)&&v(t.pipe)}function b(t){return"[object URLSearchParams]"===i.call(t)}function E(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function _(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function T(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function I(){var t={};function e(e,n){p(t[n])&&p(e)?t[n]=I(t[n],e):p(e)?t[n]=I({},e):s(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)T(arguments[n],e);return t}function S(t,e,n){return T(e,(function(e,i){t[i]=n&&"function"===typeof e?r(e,n):e})),t}function k(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:s,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:l,isString:h,isNumber:f,isObject:d,isPlainObject:p,isUndefined:o,isDate:m,isFile:g,isBlob:y,isFunction:v,isStream:w,isURLSearchParams:b,isStandardBrowserEnv:_,forEach:T,merge:I,extend:S,trim:E,stripBOM:k}},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(1804),i="firebase",s="9.8.3";
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
(0,r.KN)(i,s,"app")},8176:function(t,e,n){"use strict";n.d(e,{Xb:function(){return ce},v0:function(){return lr},Aj:function(){return le},e5:function(){return ue},w7:function(){return he}});n(1703);var r=n(223),i=n(1804);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function f(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
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
 */function d(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function y(t,e,...n){if(!t)throw g(e,...n)}function v(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function w(t,e){t||v(e)}
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
 */const b=new Map;function E(t){w(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
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
 */function _(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;d(t,"already-initialized")}const s=n.initialize({options:e});return s}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(E);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
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
 */function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===k()||"https:"===k()}function k(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class R{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function O(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class N{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},x=new R(3e4,6e4);
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
 */function P(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function L(t,e,n,i,s={}){return M(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),N.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),e);try{const e=new V(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);d(t,a)}}catch(s){if(s instanceof r.ZR)throw s;d(t,"network-request-failed")}}async function U(t,e,n,r,i={}){const s=await L(t,e,n,r,i);return"mfaPendingCredential"in s&&d(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O(t.config,i):`${t.config.apiScheme}://${i}`}class V{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
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
 */async function B(t,e){return L(t,"POST","/v1/accounts:delete",e)}async function $(t,e){return L(t,"POST","/v1/accounts:lookup",e)}
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
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
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
 */async function z(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=K(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(H(s.auth_time)),issuedAtTime:q(H(s.iat)),expirationTime:q(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(t){return 1e3*Number(t)}function K(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",s),null}}function G(t){const e=K(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&J(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
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
 */class Q{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Y(t){var e;const n=t.auth,r=await t.getIdToken(),i=await W(t,$(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=(0,r.m9)(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(y("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return v("not implemented")}}
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
 */function it(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return z(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:E,providerData:_,stsTokenManager:T}=e;y(w&&T,t,"internal-error");const I=rt.fromJSON(this.name,T);y("string"===typeof w,t,"internal-error"),it(l,t.name),it(h,t.name),y("boolean"===typeof b,t,"internal-error"),y("boolean"===typeof E,t,"internal-error"),it(f,t.name),it(d,t.name),it(p,t.name),it(m,t.name),it(g,t.name),it(v,t.name);const S=new st({uid:w,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:E,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
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
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
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
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(E(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||E(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new ut(i,t,n)):new ut(i,t,n)}}
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
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(yt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function ft(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function mt(t=(0,r.z$)()){return/android/i.test(t)}function gt(t=(0,r.z$)()){return/blackberry/i.test(t)}function yt(t=(0,r.z$)()){return/webos/i.test(t)}function vt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)}function wt(t=(0,r.z$)()){var e;return vt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,r.w1)()&&10===document.documentMode}function Et(t=(0,r.z$)()){return vt(t)||mt(t)||yt(t)||gt(t)||/windows phone/i.test(t)||pt(t)}function _t(){try{return!(!window||window===window.top)}catch(t){return!1}}
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
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.z$)());break;case"Worker":n=`${lt((0,r.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
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
 */class It{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(r){n.reverse();for(const t of n)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=r)||void 0===e?void 0:e.message})}}}
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
 */class St{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ct(this),this.idTokenSubscription=new Ct(this),this.beforeStateQueue=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Y(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(E(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function kt(t){return(0,r.m9)(t)}class Ct{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class At{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return v("not implemented")}_getIdTokenResponse(t){return v("not implemented")}_linkToIdToken(t,e){return v("not implemented")}_getReauthenticationResolver(t){return v("not implemented")}}
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
 */async function Rt(t,e){return L(t,"POST","/v1/accounts:update",e)}
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
async function Ot(t,e){return U(t,"POST","/v1/accounts:signInWithPassword",P(t,e))}
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
async function Nt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}async function Dt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}
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
 */class xt extends At{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new xt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new xt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Ot(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{email:this._email,oobCode:this._password});default:d(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Rt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dt(t,{idToken:e,email:this._email,oobCode:this._password});default:d(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function Pt(t,e){return U(t,"POST","/v1/accounts:signInWithIdp",P(t,e))}
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
 */const Lt="http://localhost";class Mt extends At{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Mt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):d("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Mt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Pt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Pt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Pt(t,e)}buildRequest(){const t={requestUri:Lt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
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
 */async function Ut(t,e){return L(t,"POST","/v1/accounts:sendVerificationCode",P(t,e))}async function Ft(t,e){return U(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e))}async function Vt(t,e){const n=await U(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const jt={["USER_NOT_FOUND"]:"user-not-found"};async function Bt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return U(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,n),jt)}
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
 */class $t extends At{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new $t({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new $t({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Ft(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Vt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Bt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new $t({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function qt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zt(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class Ht{constructor(t){var e,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=qt(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=zt(t);try{return new Ht(e)}catch(n){return null}}}
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
class Kt{constructor(){this.providerId=Kt.PROVIDER_ID}static credential(t,e){return xt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ht.parseLink(e);return y(n,"argument-error"),xt._fromEmailAndCode(t,n.code,n.tenantId)}}Kt.PROVIDER_ID="password",Kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Gt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class Wt extends Gt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class Jt extends Wt{constructor(){super("facebook.com")}static credential(t){return Mt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch(e){return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Jt.PROVIDER_ID="facebook.com";
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
class Xt extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Mt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Xt.credential(e,n)}catch(r){return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com",Xt.PROVIDER_ID="google.com";
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
class Qt extends Wt{constructor(){super("github.com")}static credential(t){return Mt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch(e){return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com",Qt.PROVIDER_ID="github.com";
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
class Yt extends Wt{constructor(){super("twitter.com")}static credential(t,e){return Mt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Yt.credential(e,n)}catch(r){return null}}}
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
async function Zt(t,e){return U(t,"POST","/v1/accounts:signUp",P(t,e))}
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
 */Yt.TWITTER_SIGN_IN_METHOD="twitter.com",Yt.PROVIDER_ID="twitter.com";class te{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=ee(n),o=new te({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ee(n);return new te({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ee(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class ne extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ne.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ne(t,e,n,r)}}function re(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ne._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function ie(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return te._forOperation(t,"link",r)}
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
async function se(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await W(t,re(r,i,e,t),n);y(s.idToken,r,"internal-error");const o=K(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(t.uid===a,r,"user-mismatch"),te._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&d(r,"user-mismatch"),s}}
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
 */async function oe(t,e,n=!1){const r="signIn",i=await re(t,r,e),s=await te._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ae(t,e){return oe(kt(t),e)}async function ce(t,e,n){const r=kt(t),i=await Zt(r,{returnSecureToken:!0,email:e,password:n}),s=await te._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ue(t,e,n){return ae((0,r.m9)(t),Kt.credential(e,n))}
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
 */function le(t,e,n,i){return(0,r.m9)(t).onAuthStateChanged(e,n,i)}function he(t){return(0,r.m9)(t).signOut()}
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
function fe(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",P(t,e))}function de(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",P(t,e))}new WeakMap;const pe="__sak";
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
 */class me{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(pe,"1"),this.storage.removeItem(pe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function ge(){const t=(0,r.z$)();return ft(t)||vt(t)}const ye=1e3,ve=10;class we extends me{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ge()&&_t(),this.fallbackToPolling=Et(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);bt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ve):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),ye)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}we.type="LOCAL";const be=we;
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
 */class Ee extends me{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ee.type="SESSION";const _e=Ee;
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
 */function Te(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class Ie{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ie(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Te(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Se(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */Ie.receivers=[];class ke{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Se("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Ce(){return window}function Ae(t){Ce().location.href=t}
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
 */function Re(){return"undefined"!==typeof Ce()["WorkerGlobalScope"]&&"function"===typeof Ce()["importScripts"]}async function Oe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ne(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function De(){return Re()?self:null}
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
 */const xe="firebaseLocalStorageDb",Pe=1,Le="firebaseLocalStorage",Me="fbase_key";class Ue{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Fe(t,e){return t.transaction([Le],e?"readwrite":"readonly").objectStore(Le)}function Ve(){const t=indexedDB.deleteDatabase(xe);return new Ue(t).toPromise()}function je(){const t=indexedDB.open(xe,Pe);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Le,{keyPath:Me})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Le)?e(n):(n.close(),await Ve(),e(await je()))}))}))}async function Be(t,e,n){const r=Fe(t,!0).put({[Me]:e,value:n});return new Ue(r).toPromise()}async function $e(t,e){const n=Fe(t,!1).get(e),r=await new Ue(n).toPromise();return void 0===r?null:r.value}function qe(t,e){const n=Fe(t,!0).delete(e);return new Ue(n).toPromise()}const ze=800,He=3;class Ke{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await je()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>He)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Re()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ie._getInstance(De()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Oe(),!this.activeServiceWorker)return;this.sender=new ke(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ne()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await je();return await Be(t,pe,"1"),await qe(t,pe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Be(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>$e(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>qe(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Fe(t,!1).getAll();return new Ue(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),ze)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ke.type="LOCAL";const Ge=Ke;
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
 */function We(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:start",P(t,e))}function Je(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",P(t,e))}
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
function Xe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Qe(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Xe().appendChild(r)}))}function Ye(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
Ye("rcb"),new R(3e4,6e4);
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
const Ze="recaptcha";async function tn(t,e,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,t,"argument-error"),y(n.type===Ze,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){y("enroll"===e.type,t,"internal-error");const n=await fe(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,t,"missing-multi-factor-info");const o=await We(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Ut(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
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
class en{constructor(t){this.providerId=en.PROVIDER_ID,this.auth=kt(t)}verifyPhoneNumber(t,e){return tn(this.auth,t,(0,r.m9)(e))}static credential(t,e){return $t._fromVerification(t,e)}static credentialFromResult(t){const e=t;return en.credentialFromTaggedObject(e)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?$t._fromTokenResponse(e,n):null}}
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
function nn(t,e){return e?E(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class rn extends At{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Pt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Pt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Pt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function sn(t){return oe(t.auth,new rn(t),t.bypassAuthState)}function on(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),se(n,new rn(t),t.bypassAuthState)}async function an(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),ie(n,new rn(t),t.bypassAuthState)}
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
 */class cn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sn;case"linkViaPopup":case"linkViaRedirect":return an;case"reauthViaPopup":case"reauthViaRedirect":return on;default:d(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const un=new R(2e3,1e4);class ln extends cn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Se();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,un.get())};t()}}ln.currentPopupAction=null;
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
const hn="pendingRedirect",fn=new Map;class dn extends cn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=fn.get(this.auth._key());if(!t){try{const e=await pn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}fn.set(this.auth._key(),t)}return this.bypassAuthState||fn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(t,e){const n=yn(e),r=gn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function mn(t,e){fn.set(t._key(),e)}function gn(t){return E(t._redirectPersistence)}function yn(t){return ct(hn,t.config.apiKey,t.name)}
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
 */async function vn(t,e,n=!1){const r=kt(t),i=nn(r,e),s=new dn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
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
const wn=6e5;class bn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Tn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!_n(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(t))}saveEventToCache(t){this.cachedEventUids.add(En(t)),this.lastProcessedEventTime=Date.now()}}function En(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function _n({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Tn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _n(t);default:return!1}}
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
 */async function In(t,e={}){return L(t,"GET","/v1/projects",e)}
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
 */const Sn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kn=/^https?/;async function Cn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await In(t);for(const r of e)try{if(An(r))return}catch(n){}d(t,"unauthorized-domain")}function An(t){const e=I(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!kn.test(n))return!1;if(Sn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const Rn=new R(3e4,6e4);function On(){const t=Ce().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Nn(t){return new Promise(((e,n)=>{var r,i,s;function o(){On(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{On(),n(p(t,"network-request-failed"))},timeout:Rn.get()})}if(null===(i=null===(r=Ce().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ce().gapi)||void 0===s?void 0:s.load)){const e=Ye("iframefcb");return Ce()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Qe(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Dn=null,t}))}let Dn=null;function xn(t){return Dn=Dn||Nn(t),Dn}
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
 */const Pn=new R(5e3,15e3),Ln="__/auth/iframe",Mn="emulator/auth/iframe",Un={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vn(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,Mn):`https://${t.config.authDomain}/${Ln}`,s={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=Fn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function jn(t){const e=await xn(t),n=Ce().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Vn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Un,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Ce().setTimeout((()=>{r(i)}),Pn.get());function o(){Ce().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const Bn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$n=500,qn=600,zn="_blank",Hn="http://localhost";class Kn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Gn(t,e,n,i=$n,s=qn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Bn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=dt(l)?zn:n),ht(l)&&(e=e||Hn,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(wt(l)&&"_self"!==c)return Wn(e||"",c),new Kn(null);const f=window.open(e||"",c,h);y(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Kn(f)}function Wn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Jn="__/auth/handler",Xn="emulator/auth/handler";function Qn(t,e,n,s,o,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(e instanceof Gt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Wt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Yn(t)}?${(0,r.xO)(u).slice(1)}`}function Yn({config:t}){return t.emulator?O(t,Xn):`https://${t.authDomain}/${Jn}`}
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
 */const Zn="webStorageSupport";class tr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_e,this._completeRedirectFn=vn,this._overrideRedirectResult=mn}async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Qn(t,e,n,I(),r);return Gn(t,s,Se())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Ae(Qn(t,e,n,I(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await jn(t),n=new bn(t);return e.register("authEvent",(e=>{y(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Zn,{type:Zn},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Zn];void 0!==i&&e(!!i),d(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Cn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Et()||ft()||vt()}}const er=tr;class nr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return v("unexpected MultiFactorSessionType")}}}class rr extends nr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new rr(t)}_finalizeEnroll(t,e,n){return de(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Je(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ir{constructor(){}static assertion(t){return rr._fromCredential(t)}}ir.FACTOR_ID="phone";var sr="@firebase/auth",or="0.20.3";
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
class ar{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function cr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ur(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((e,r)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new St(e,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=kt(t.getProvider("auth").getImmediate());return(t=>new ar(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(sr,or,cr(t)),(0,i.KN)(sr,or,"esm2017")}
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
 */function lr(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");return e.isInitialized()?e.getImmediate():_(t,{popupRedirectResolver:er,persistence:[Ge,be,_e]})}ur("Browser")},6035:function(t,e,n){"use strict";n.d(e,{JU:function(){return Tl},QT:function(){return ah},ad:function(){return kl},pl:function(){return uh},r7:function(){return lh}});n(1703),n(3462),n(2801);var r,i=n(1804),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var I=0,S={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=I)){var t=m(this);delete S[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},C=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function A(t){t:{var e=Kn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function R(t){return Array.prototype.concat.apply([],arguments)}function O(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function N(t){return/^[\s\xa0]*$/.test(t)}var D,x=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function P(t,e){return-1!=t.indexOf(e)}function L(t,e){return t<e?-1:t>e?1:0}t:{var M=h.navigator;if(M){var U=M.userAgent;if(U){D=U;break t}}D=""}function F(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function V(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $(t){return $[" "](t),t}function q(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}$[" "]=f;var z,H=P(D,"Opera"),K=P(D,"Trident")||P(D,"MSIE"),G=P(D,"Edge"),W=G||K,J=P(D,"Gecko")&&!(P(D.toLowerCase(),"webkit")&&!P(D,"Edge"))&&!(P(D,"Trident")||P(D,"MSIE"))&&!P(D,"Edge"),X=P(D.toLowerCase(),"webkit")&&!P(D,"Edge");function Q(){var t=h.document;return t?t.documentMode:void 0}t:{var Y="",Z=function(){var t=D;return J?/rv:([^\);]+)(\)|;)/.exec(t):G?/Edge\/([\d\.]+)/.exec(t):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):X?/WebKit\/(\S+)/.exec(t):H?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(Y=Z?Z[1]:""),K){var tt=Q();if(null!=tt&&tt>parseFloat(Y)){z=String(tt);break t}}z=Y}var et,nt={};function rt(){return q((function(){let t=0;const e=x(String(z)).split("."),n=x("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=L(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||L(0==i[2].length,0==s[2].length)||L(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&K){var it=Q();et=it||(parseInt(z,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(J){t:{try{$(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ut[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},_(ct,at);var ut={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),ht=0;function ft(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ht,this.ca=this.fa=!1}function dt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function mt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=k(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(dt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ft(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var yt="closure_lm_"+(1e6*Math.random()|0),vt={};function wt(t,e,n,r,i){if(r&&r.once)return _t(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wt(t,e[s],n,r,i);return null}return n=Rt(n),t&&t[lt]?t.N(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!1,r,i)}function bt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ct(t);if(a||(t[yt]=a=new pt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Et(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(St(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Et(){function t(n){return e.call(t.src,t.listener,n)}var e=kt;return t}function _t(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_t(t,e[s],n,r,i);return null}return n=Rt(n),t&&t[lt]?t.O(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!0,r,i)}function Tt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Rt(n),t&&t[lt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gt(s,n,r,i),-1<n&&(dt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ct(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,r,i)),(n=-1<t?e[t]:null)&&It(n))}function It(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[lt])mt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(St(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ct(e))?(mt(n,t),0==n.h&&(n.src=null,e[yt]=null)):dt(t)}}}function St(t){return t in vt?vt[t]:vt[t]="on"+t}function kt(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&It(t),t=n.call(r,e)}return t}function Ct(t){return t=t[yt],t instanceof pt?t:null}var At="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rt(t){return"function"===typeof t?t:(t[At]||(t[At]=function(e){return t.handleEvent(e)}),t[At])}function Ot(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function Nt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),B(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Dt(o,r,!0,e)&&i}if(o=e.g=t,i=Dt(o,r,!0,e)&&i,i=Dt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Dt(o,r,!1,e)&&i}function Dt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&mt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(Ot,T),Ot.prototype[lt]=!0,Ot.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Ot.prototype.M=function(){if(Ot.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)dt(n[r]);delete e.g[t],e.h--}}this.I=null},Ot.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var xt=h.JSON.stringify;function Pt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Lt{constructor(){this.h=this.g=null}add(t,e){const n=Ut.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,Ut=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ft),(t=>t.reset()));class Ft{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Vt(t){h.setTimeout((()=>{throw t}),0)}function jt(t,e){Mt||Bt(),$t||(Mt(),$t=!0),qt.add(t,e)}function Bt(){var t=h.Promise.resolve(void 0);Mt=function(){t.then(zt)}}var $t=!1,qt=new Lt;function zt(){for(var t;t=Pt();){try{t.h.call(t.g)}catch(n){Vt(n)}var e=Ut;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$t=!1}function Ht(t,e){Ot.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function Kt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Gt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Wt(t){t.g=Gt((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Ht,Ot),r=Ht.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Nt(this,"tick"),this.da&&(Kt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ht.Z.M.call(this),Kt(this),delete this.g};class Jt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(t){T.call(this),this.h=t,this.g={}}_(Xt,T);var Qt=[];function Yt(t,e,n,r){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var i=0;i<n.length;i++){var s=wt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zt(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&It(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xt(n)}catch(a){return e}}Xt.prototype.M=function(){Xt.Z.M.call(this),Zt(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Ot}function ue(t){at.call(this,oe.Ma,t)}function le(t){const e=ce();Nt(e,new ue(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function fe(t){const e=ce();Nt(e,new he(e,t))}function de(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",_(ue,at),oe.STAT_EVENT="statevent",_(he,at),oe.Na="timingevent",_(de,at);var me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ye(){}function ve(t){return t.h||(t.h=t.i())}function we(){}ye.prototype.h=null;var be,Ee={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _e(){at.call(this,"d")}function Te(){at.call(this,"c")}function Ie(){}function Se(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Xt(this),this.P=Ce,t=W?125:void 0,this.W=new Ht(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ke}function ke(){this.i=null,this.g="",this.h=!1}_(_e,at),_(Te,at),_(Ie,ye),Ie.prototype.g=function(){return new XMLHttpRequest},Ie.prototype.i=function(){return{}},be=new Ie;var Ce=45e3,Ae={},Re={};function Oe(t,e,n){t.K=1,t.v=en(Je(e)),t.s=n,t.U=!0,Ne(t,null)}function Ne(t,e){t.F=Date.now(),Le(t),t.A=Je(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new ke,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Jt(b(t.Ia,t,t.g),t.O)),Yt(t.V,t.g,"readystatechange",t.gb),e=t.H?V(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),le(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function xe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Pe(t,n),r==Re){4==e&&(t.o=4,fe(14),i=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ae){t.o=4,fe(15),re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}re(t.j,t.m,r,null),je(t,r)}De(t)&&r!=Re&&r!=Ae&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mr(e),e.L=!0,fe(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),Ve(t),Fe(t))}function Pe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Re:(n=Number(e.substring(n,r)),isNaN(n)?Ae:(r+=1,r+n>e.length?Re:(e=e.substr(r,n),t.C=r+n,e)))}function Le(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function Ue(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||vr(t.l,t)}function Ve(t){Ue(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Kt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Sn(n.i,t)))if(n.I=t.N,!t.J&&Sn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;yr(n),sr(n)}pr(n),fe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=In(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&yr(n),!N(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(P(t,"spdy")||P(t,"quic")||P(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kn(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=_r(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ue(a),Le(a)),r.g=o}else dr(r);0<n.l.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||br(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?br(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}le(4)}catch(u){}}function Be(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)C(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(d(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Be(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function ze(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];He(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],He(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function He(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Se.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Yn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Yn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>l)&&(3!=l||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=l||7==e||le(8==e||0>=f?3:2),Ue(this);var n=this.g.ba();this.N=n;e:if(De(this)){var r=Zn(this.g);t="";var i=r.length,s=4==Yn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ve(this),Fe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,fe(12),Ve(this),Fe(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(xe(this,l,o),W&&this.i&&3==l&&(Yt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,o,null),je(this,o)),4==l&&Ve(this),this.i&&!this.I&&(4==l?vr(this.l,this):(this.i=!1,Le(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),Ve(this),Fe(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Yn(this.g),e=this.g.ga();this.C<e.length&&(Ue(this),xe(this,t,e),this.i&&4!=t&&Le(this))}},r.cancel=function(){this.I=!0,Ve(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(le(3),fe(17)),Ve(this),this.o=2,Fe(this)):Me(this,this.Y-t)},r=qe.prototype,r.R=function(){ze(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return ze(this),this.g.concat()},r.get=function(t,e){return He(this.h,t)?this.h[t]:e},r.set=function(t,e){He(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Ke=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Xe(this,t.j),this.s=t.s,Qe(this,t.i),Ye(this,t.m),this.l=t.l,e=t.h;var n=new dn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(Ke))?(this.g=!!e,Xe(this,n[1]||"",!0),this.s=sn(n[2]||""),Qe(this,n[3]||"",!0),Ye(this,n[4]),this.l=sn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new dn(null,this.g))}function Je(t){return new We(t)}function Xe(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qe(t,e,n){t.i=n?sn(e,!0):e}function Ye(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof dn?(t.h=e,wn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new dn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Je(t):new We(t,void 0)}function rn(t,e,n,r){var i=new We(null,void 0);return t&&Xe(i,t),e&&Qe(i,e),n&&Ye(i,n),r&&(i.l=r),i}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?ln:un,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,fn)),t.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,fn=/#/g;function dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new qe,t.h=0,t.i&&Ge(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mn(t,e){pn(t),e=vn(t,e),He(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,He(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ze(t)))}function gn(t,e){return pn(t),e=vn(t,e),He(t.g.h,e)}function yn(t,e,n){mn(t,e),0<n.length&&(t.i=null,t.g.set(vn(t,e),O(n)),t.h+=n.length)}function vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mn(this,e),yn(this,n,t))}),t)),t.j=e}r=dn.prototype,r.add=function(t,e){pn(this),this.i=null,t=vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){C(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=R(e,this.g.get(vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=R(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=vn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function En(t){this.l=t||_n,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _n=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function In(t){return t.h?1:t.g?t.g.size:0}function Sn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function kn(t,e){t.g?t.g.add(e):t.h=e}function Cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function An(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return O(t.i)}function Rn(){}function On(){this.g=new Rn}function Nn(t,e,n){const r=n||"";try{$e(t,(function(t,n){let i=t;p(t)&&(i=xt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Dn(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=E(xn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=E(xn,n,r,"TestLoadImage: error",!1,e),r.onabort=E(xn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=E(xn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function xn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Pn(t){this.l=t.$b||null,this.j=t.ib||!1}function Ln(t,e){Ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}En.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Rn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},Rn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},_(Pn,ye),Pn.prototype.g=function(){return new Ln(this.l,this.j)},Pn.prototype.i=function(t){return function(){return t}}({}),_(Ln,Ot);var Mn=0;function Un(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vn(t)}function Vn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Ln.prototype,r.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=Mn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Un(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):Vn(this),3==this.readyState&&Un(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},r.Ta=function(t){this.g&&(this.response=t,Fn(this))},r.ha=function(){this.g&&Fn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=h.JSON.parse;function Bn(t){Ot.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}_(Bn,Ot);var $n="",qn=/^https?$/i,zn=["POST","PUT"];function Hn(t){return K&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Kn(t){return"content-type"==t.toLowerCase()}function Gn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Xn(t)}function Wn(t){t.D||(t.D=!0,Nt(t,"complete"),Nt(t,"error"))}function Jn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Yn(t)||2!=t.ba()))if(t.v&&4==Yn(t))Gt(t.Fa,0,t);else if(Nt(t,"readystatechange"),4==Yn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Ke)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!qn.test(i?i.toLowerCase():"")}n=r}if(n)Nt(t,"complete"),Nt(t,"success");else{t.m=6;try{var o=2<Yn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Wn(t)}}finally{Xn(t)}}}function Xn(t,e){if(t.g){Qn(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||Nt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new En(t&&t.concurrentRequestLimit),this.Ca=new On,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(or(t),3==t.G){var e=t.V++,n=Je(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Se(t,t.h,e,void 0),e.K=2,e.v=en(Je(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Le(e)}Er(t)}function sr(t){t.g&&(mr(t),t.g.cancel(),t.g=null)}function or(t){sr(t),t.u&&(h.clearTimeout(t.u),t.u=null),yr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&cr(t)}function cr(t){Tn(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function ur(t,e){return!(In(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),wr(t,t.C)),t.C++,!0))}function lr(t,e){var n;n=e?e.m:t.V++;const r=Je(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Se(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),kn(t.i,n),Oe(n,r,e)}function hr(t,e){t.j&&$e({},(function(t,n){tn(e,n,t)}))}function fr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{Nn(a,t,"req"+n+"_")}catch(Qr){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function dr(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),wr(t,t.A)),t.A++,!0)}function mr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function gr(t){t.g=new Se(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Je(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Je(e)),n.s=null,n.U=!0,Ne(n,t)}function yr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function vr(t,e){var n=null;if(t.g==e){yr(t),mr(t),t.g=null;var r=2}else{if(!Sn(t.i,e))return;n=e.D,Cn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ce(),Nt(r,new de(r,n,e,i)),cr(t)}else dr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ur(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function wr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Xe(n,"https"),en(n)),Dn(n.toString(),r)}else fe(2);t.G=0,t.j&&t.j.va(e),Er(t),or(t)}function Er(t){t.G=0,t.I=-1,t.j&&(0==An(t.i).length&&0==t.l.length||(t.i.i.length=0,O(t.l),t.l.length=0),t.j.ua())}function _r(t,e,n){let r=nn(n);if(""!=r.i)e&&Qe(r,e+"."+r.i),Ye(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&F(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Bn(new Pn({ib:!0})):new Bn(t.qa),e.L=t.H,e}function Ir(){}function Sr(){if(K&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function kr(t,e){Ot.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rr(this)}function Cr(t){_e.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ar(){Te.call(this),this.status=1}function Rr(t){this.g=t}r=Bn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ve(this.u):ve(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Gn(this,s)}t=n||"";const i=new qe(this.headers);r&&$e(r,(function(t,e){i.set(e,t)})),r=A(i.T()),n=h.FormData&&t instanceof h.FormData,!(0<=k(zn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=Hn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Gt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Gn(this,s)}},r.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Nt(this,"complete"),Nt(this,"abort"),Xn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),Bn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Jn(this):this.cb())},r.cb=function(){Jn(this)},r.ba=function(){try{return 2<Yn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Se(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=V(s),B(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fr(this,i,e),n=Je(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&er(n,this.o,s),kn(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,Oe(i,n,null)):Oe(i,n,e),this.G=2}}else 3==this.G&&(t?lr(this,t):0==this.l.length||Tn(this.i)||lr(this))},r.Ga=function(){if(this.u=null,gr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),sr(this),gr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),fe(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},r=Ir.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Sr.prototype.g=function(t,e){return new kr(t,e)},_(kr,Ot),kr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(b(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_r(t,null,t.W),cr(t)},kr.prototype.close=function(){ir(this.g)},kr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=xt(t),ar(this.g,e)):ar(this.g,t)},kr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,kr.Z.M.call(this)},_(Cr,_e),_(Ar,Te),_(Rr,Ir),Rr.prototype.xa=function(){Nt(this.g,"a")},Rr.prototype.wa=function(t){Nt(this.g,new Cr(t))},Rr.prototype.va=function(t){Nt(this.g,new Ar(t))},Rr.prototype.ua=function(){Nt(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,kr.prototype.send=kr.prototype.u,kr.prototype.open=kr.prototype.m,kr.prototype.close=kr.prototype.close,me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,ge.COMPLETE="complete",we.EventType=Ee,Ee.OPEN="a",Ee.CLOSE="b",Ee.ERROR="c",Ee.MESSAGE="d",Ot.prototype.listen=Ot.prototype.N,Bn.prototype.listenOnce=Bn.prototype.O,Bn.prototype.getLastError=Bn.prototype.La,Bn.prototype.getLastErrorCode=Bn.prototype.Da,Bn.prototype.getStatus=Bn.prototype.ba,Bn.prototype.getResponseJson=Bn.prototype.Qa,Bn.prototype.getResponseText=Bn.prototype.ga,Bn.prototype.send=Bn.prototype.ea;var Or=u.createWebChannelTransport=function(){return new Sr},Nr=u.getStatEventTarget=function(){return ce()},Dr=u.ErrorCode=me,xr=u.EventType=ge,Pr=u.Event=oe,Lr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mr=u.FetchXmlHttpFactory=Pn,Ur=u.WebChannel=we,Fr=u.XhrIo=Bn;const Vr="@firebase/firestore";
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
 */class jr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
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
let Br="9.8.3";
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
 */const $r=new o.Yd("@firebase/firestore");function qr(){return $r.logLevel}function zr(t,...e){if($r.logLevel<=o["in"].DEBUG){const n=e.map(Gr);$r.debug(`Firestore (${Br}): ${t}`,...n)}}function Hr(t,...e){if($r.logLevel<=o["in"].ERROR){const n=e.map(Gr);$r.error(`Firestore (${Br}): ${t}`,...n)}}function Kr(t,...e){if($r.logLevel<=o["in"].WARN){const n=e.map(Gr);$r.warn(`Firestore (${Br}): ${t}`,...n)}}function Gr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Wr(t="Unexpected state"){const e=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+t;throw Hr(e),new Error(e)}function Jr(t,e){t||Wr()}function Xr(t,e){return t}
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
 */const Qr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Yr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Zr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class ti{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(jr.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(t){this.t=t,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Jr("string"==typeof e.accessToken),new ti(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Jr(null===t||"string"==typeof t),new jr(t)}}class ri{constructor(t,e,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class si{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Jr("string"==typeof t.token),this.p=t.token,new si(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function ai(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class ci{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ai(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function ui(t,e){return t<e?-1:t>e?1:0}function li(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class hi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hi.fromMillis(Date.now())}static fromDate(t){return hi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ui(this.nanoseconds,t.nanoseconds):ui(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class fi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new fi(t)}static min(){return new fi(new hi(0,0))}static max(){return new fi(new hi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class di{constructor(t,e,n){void 0===e?e=0:e>t.length&&Wr(),void 0===n?n=t.length-e:n>t.length-e&&Wr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===di.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof di?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pi extends di{construct(t,e,n){return new pi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Yr(Qr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new pi(e)}static emptyPath(){return new pi([])}}const mi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gi extends di{construct(t,e,n){return new gi(t,e,n)}static isValidIdentifier(t){return mi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new gi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Yr(Qr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Yr(Qr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Yr(Qr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Yr(Qr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gi(e)}static emptyPath(){return new gi([])}}
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
 */class yi{constructor(t){this.path=t}static fromPath(t){return new yi(pi.fromString(t))}static fromName(t){return new yi(pi.fromString(t).popFirst(5))}static empty(){return new yi(pi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===pi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return pi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new yi(new pi(t.slice()))}}
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
 */class vi{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}vi.UNKNOWN_ID=-1;function wi(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fi.fromTimestamp(1e9===r?new hi(n+1,0):new hi(n,r));return new Ei(i,yi.empty(),e)}function bi(t){return new Ei(t.readTime,t.key,-1)}class Ei{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ei(fi.min(),yi.empty(),-1)}static max(){return new Ei(fi.max(),yi.empty(),-1)}}function _i(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=yi.comparator(t.documentKey,e.documentKey),0!==n?n:ui(t.largestBatchId,e.largestBatchId))}
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
 */const Ti="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ii{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function Si(t){if(t.code!==Qr.FAILED_PRECONDITION||t.message!==Ti)throw t;zr("LocalStore","Unexpectedly lost primary lease")}
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
 */class ki{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Wr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ki(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ki?e:ki.resolve(e)}catch(t){return ki.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ki.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ki.reject(e)}static resolve(t){return new ki(((e,n)=>{e(t)}))}static reject(t){return new ki(((e,n)=>{n(t)}))}static waitFor(t){return new ki(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=ki.resolve(!1);for(const n of t)e=e.next((t=>t?ki.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ki(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new ki(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function Ci(t){return"IndexedDbTransactionError"===t.name}
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
class Ai{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
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
 */function Ri(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ni(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */Ai.ot=-1;class Di{constructor(t,e){this.comparator=t,this.root=e||Pi.EMPTY}insert(t,e){return new Di(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Pi.BLACK,null,null))}remove(t){return new Di(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Pi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xi(this.root,t,this.comparator,!1)}getReverseIterator(){return new xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xi(this.root,t,this.comparator,!0)}}class xi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Pi{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Pi.RED,this.left=null!=r?r:Pi.EMPTY,this.right=null!=i?i:Pi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Pi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Pi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Pi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Pi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Pi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wr();if(this.right.isRed())throw Wr();const t=this.left.check();if(t!==this.right.check())throw Wr();return t+(this.isRed()?0:1)}}Pi.EMPTY=null,Pi.RED=!0,Pi.BLACK=!1,Pi.EMPTY=new class{constructor(){this.size=0}get key(){throw Wr()}get value(){throw Wr()}get color(){throw Wr()}get left(){throw Wr()}get right(){throw Wr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Pi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Li{constructor(t){this.comparator=t,this.data=new Di(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mi(this.data.getIterator())}getIteratorFrom(t){return new Mi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Li))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Li(this.comparator);return e.data=t,e}}class Mi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Ui{constructor(t){this.fields=t,t.sort(gi.comparator)}static empty(){return new Ui([])}unionWith(t){let e=new Li(gi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ui(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return li(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
class Fi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Fi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Fi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ui(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fi.EMPTY_BYTE_STRING=new Fi("");const Vi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(t){if(Jr(!!t),"string"==typeof t){let e=0;const n=Vi.exec(t);if(Jr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Bi(t.seconds),nanos:Bi(t.nanos)}}function Bi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function $i(t){return"string"==typeof t?Fi.fromBase64String(t):Fi.fromUint8Array(t)}
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
 */function qi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function zi(t){const e=t.mapValue.fields.__previous_value__;return qi(e)?zi(e):e}function Hi(t){const e=ji(t.mapValue.fields.__local_write_time__.timestampValue);return new hi(e.seconds,e.nanos)}
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
 */class Ki{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Gi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Gi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Gi&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function Wi(t){return null==t}function Ji(t){return 0===t&&1/t==-1/0}function Xi(t){return"number"==typeof t&&Number.isInteger(t)&&!Ji(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const Qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qi(t)?4:hs(t)?9007199254740991:10:Wr()}function Zi(t,e){if(t===e)return!0;const n=Yi(t);if(n!==Yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hi(t).isEqual(Hi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ji(t.timestampValue),r=ji(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return $i(t.bytesValue).isEqual($i(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Bi(t.geoPointValue.latitude)===Bi(e.geoPointValue.latitude)&&Bi(t.geoPointValue.longitude)===Bi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Bi(t.integerValue)===Bi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Bi(t.doubleValue),r=Bi(e.doubleValue);return n===r?Ji(n)===Ji(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],Zi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ri(n)!==Ri(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Zi(n[i],r[i])))return!1;return!0}(t,e);default:return Wr()}}function ts(t,e){return void 0!==(t.values||[]).find((t=>Zi(t,e)))}function es(t,e){if(t===e)return 0;const n=Yi(t),r=Yi(e);if(n!==r)return ui(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ui(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Bi(t.integerValue||t.doubleValue),r=Bi(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ns(t.timestampValue,e.timestampValue);case 4:return ns(Hi(t),Hi(e));case 5:return ui(t.stringValue,e.stringValue);case 6:return function(t,e){const n=$i(t),r=$i(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=ui(n[i],r[i]);if(0!==t)return t}return ui(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ui(Bi(t.latitude),Bi(e.latitude));return 0!==n?n:ui(Bi(t.longitude),Bi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=es(n[i],r[i]);if(t)return t}return ui(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Qi.mapValue&&e===Qi.mapValue)return 0;if(t===Qi.mapValue)return 1;if(e===Qi.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=ui(r[o],s[o]);if(0!==t)return t;const e=es(n[r[o]],i[s[o]]);if(0!==e)return e}return ui(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Wr()}}function ns(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ui(t,e);const n=ji(t),r=ji(e),i=ui(n.seconds,r.seconds);return 0!==i?i:ui(n.nanos,r.nanos)}function rs(t){return is(t)}function is(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ji(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,yi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=is(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${is(t.fields[i])}`;return n+"}"}(t.mapValue):Wr();var e,n}function ss(t){return!!t&&"integerValue"in t}function os(t){return!!t&&"arrayValue"in t}function as(t){return!!t&&"nullValue"in t}function cs(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function us(t){return!!t&&"mapValue"in t}function ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ls(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hs(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class fs{constructor(t){this.value=t}static empty(){return new fs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!us(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ls(e)}setAll(t){let e=gi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ls(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());us(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];us(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Oi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new fs(ls(this.value))}}function ds(t){const e=[];return Oi(t.fields,((t,n)=>{const r=new gi([t]);if(us(n)){const t=ds(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ui(e)
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
 */}class ps{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new ps(t,0,fi.min(),fi.min(),fs.empty(),0)}static newFoundDocument(t,e,n){return new ps(t,1,e,fi.min(),n,0)}static newNoDocument(t,e){return new ps(t,2,e,fi.min(),fs.empty(),0)}static newUnknownDocument(t,e){return new ps(t,3,e,fi.min(),fs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ps&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ps(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class ms{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function gs(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ms(t,e,n,r,i,s,o)}function ys(t){const e=Xr(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+rs(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Wi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>rs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>rs(t))).join(",")),e.ut=t}return e.ut}function vs(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${rs(e.value)}`;var e})).join(", ")}]`),Wi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>rs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>rs(t))).join(",")),`Target(${e})`}function ws(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Ds(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Zi(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ps(t.startAt,e.startAt)&&Ps(t.endAt,e.endAt)}function bs(t){return yi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Es extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new _s(t,e,n):"array-contains"===e?new ks(t,n):"in"===e?new Cs(t,n):"not-in"===e?new As(t,n):"array-contains-any"===e?new Rs(t,n):new Es(t,e,n)}static ct(t,e,n){return"in"===e?new Ts(t,n):new Is(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(es(e,this.value)):null!==e&&Yi(this.value)===Yi(e)&&this.at(es(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Wr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class _s extends Es{constructor(t,e,n){super(t,e,n),this.key=yi.fromName(n.referenceValue)}matches(t){const e=yi.comparator(t.key,this.key);return this.at(e)}}class Ts extends Es{constructor(t,e){super(t,"in",e),this.keys=Ss("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Is extends Es{constructor(t,e){super(t,"not-in",e),this.keys=Ss("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ss(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>yi.fromName(t.referenceValue)))}class ks extends Es{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return os(e)&&ts(e.arrayValue,this.value)}}class Cs extends Es{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ts(this.value.arrayValue,e)}}class As extends Es{constructor(t,e){super(t,"not-in",e)}matches(t){if(ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ts(this.value.arrayValue,e)}}class Rs extends Es{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!os(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ts(this.value.arrayValue,t)))}}class Os{constructor(t,e){this.position=t,this.inclusive=e}}class Ns{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ds(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function xs(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?yi.comparator(yi.fromName(o.referenceValue),n.key):es(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ps(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zi(t.position[n],e.position[n]))return!1;return!0}
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
 */class Ls{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Ms(t,e,n,r,i,s,o,a){return new Ls(t,e,n,r,i,s,o,a)}function Us(t){return new Ls(t)}function Fs(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Vs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function js(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Bs(t){return null!==t.collectionGroup}function $s(t){const e=Xr(t);if(null===e.lt){e.lt=[];const t=js(e),n=Vs(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Ns(t)),e.lt.push(new Ns(gi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ns(gi.keyField(),t))}}}return e.lt}function qs(t){const e=Xr(t);if(!e.ft)if("F"===e.limitType)e.ft=gs(e.path,e.collectionGroup,$s(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of $s(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Ns(i.field,e))}const n=e.endAt?new Os(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Os(e.startAt.position,e.startAt.inclusive):null;e.ft=gs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function zs(t,e,n){return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hs(t,e){return ws(qs(t),qs(e))&&t.limitType===e.limitType}function Ks(t){return`${ys(qs(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${vs(qs(t))}; limitType=${t.limitType})`}function Ws(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):yi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=xs(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,$s(t),e))&&!(t.endAt&&!function(t,e,n){const r=xs(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,$s(t),e))}(t,e)}function Js(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xs(t){return(e,n)=>{let r=!1;for(const i of $s(t)){const t=Qs(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Qs(t,e,n){const r=t.field.isKeyField()?yi.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?es(r,i):Wr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Wr()}}
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
 */function Ys(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ji(e)?"-0":e}}function Zs(t){return{integerValue:""+t}}function to(t,e){return Xi(e)?Zs(e):Ys(t,e)}
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
 */class eo{constructor(){this._=void 0}}function no(t,e,n){return t instanceof so?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof oo?ao(t,e):t instanceof co?uo(t,e):function(t,e){const n=io(t,e),r=ho(n)+ho(t._t);return ss(n)&&ss(t._t)?Zs(r):Ys(t.wt,r)}(t,e)}function ro(t,e,n){return t instanceof oo?ao(t,e):t instanceof co?uo(t,e):n}function io(t,e){return t instanceof lo?ss(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class so extends eo{}class oo extends eo{constructor(t){super(),this.elements=t}}function ao(t,e){const n=fo(e);for(const r of t.elements)n.some((t=>Zi(t,r)))||n.push(r);return{arrayValue:{values:n}}}class co extends eo{constructor(t){super(),this.elements=t}}function uo(t,e){let n=fo(e);for(const r of t.elements)n=n.filter((t=>!Zi(t,r)));return{arrayValue:{values:n}}}class lo extends eo{constructor(t,e){super(),this.wt=t,this._t=e}}function ho(t){return Bi(t.integerValue||t.doubleValue)}function fo(t){return os(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function po(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof oo&&e instanceof oo||t instanceof co&&e instanceof co?li(t.elements,e.elements,Zi):t instanceof lo&&e instanceof lo?Zi(t._t,e._t):t instanceof so&&e instanceof so}(t.transform,e.transform)}class mo{constructor(t,e){this.version=t,this.transformResults=e}}class go{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new go}static exists(t){return new go(void 0,t)}static updateTime(t){return new go(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class vo{}function wo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ro(t.key,go.none()):new Io(t.key,t.data,go.none());{const n=t.data,r=fs.empty();let i=new Li(gi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new So(t.key,r,new Ui(i.toArray()),go.none())}}function bo(t,e,n){t instanceof Io?function(t,e,n){const r=t.value.clone(),i=Co(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof So?function(t,e,n){if(!yo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Co(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ko(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof Io?function(t,e,n,r){if(!yo(t.precondition,e))return n;const i=t.value.clone(),s=Ao(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof So?function(t,e,n,r){if(!yo(t.precondition,e))return n;const i=Ao(t.fieldTransforms,r,e),s=e.data;return s.setAll(ko(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return yo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function _o(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=io(r.transform,t||null);null!=i&&(null===n&&(n=fs.empty()),n.set(r.field,i))}return n||null}function To(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&li(t,e,((t,e)=>po(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends vo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class So extends vo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ko(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Co(t,e,n){const r=new Map;Jr(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ro(o,a,n[i]))}return r}function Ao(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,no(t,s,e))}return r}class Ro extends vo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Oo extends vo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class No{constructor(t){this.count=t}}
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
 */var Do,xo;function Po(t){switch(t){default:return Wr();case Qr.CANCELLED:case Qr.UNKNOWN:case Qr.DEADLINE_EXCEEDED:case Qr.RESOURCE_EXHAUSTED:case Qr.INTERNAL:case Qr.UNAVAILABLE:case Qr.UNAUTHENTICATED:return!1;case Qr.INVALID_ARGUMENT:case Qr.NOT_FOUND:case Qr.ALREADY_EXISTS:case Qr.PERMISSION_DENIED:case Qr.FAILED_PRECONDITION:case Qr.ABORTED:case Qr.OUT_OF_RANGE:case Qr.UNIMPLEMENTED:case Qr.DATA_LOSS:return!0}}function Lo(t){if(void 0===t)return Hr("GRPC error has no .code"),Qr.UNKNOWN;switch(t){case Do.OK:return Qr.OK;case Do.CANCELLED:return Qr.CANCELLED;case Do.UNKNOWN:return Qr.UNKNOWN;case Do.DEADLINE_EXCEEDED:return Qr.DEADLINE_EXCEEDED;case Do.RESOURCE_EXHAUSTED:return Qr.RESOURCE_EXHAUSTED;case Do.INTERNAL:return Qr.INTERNAL;case Do.UNAVAILABLE:return Qr.UNAVAILABLE;case Do.UNAUTHENTICATED:return Qr.UNAUTHENTICATED;case Do.INVALID_ARGUMENT:return Qr.INVALID_ARGUMENT;case Do.NOT_FOUND:return Qr.NOT_FOUND;case Do.ALREADY_EXISTS:return Qr.ALREADY_EXISTS;case Do.PERMISSION_DENIED:return Qr.PERMISSION_DENIED;case Do.FAILED_PRECONDITION:return Qr.FAILED_PRECONDITION;case Do.ABORTED:return Qr.ABORTED;case Do.OUT_OF_RANGE:return Qr.OUT_OF_RANGE;case Do.UNIMPLEMENTED:return Qr.UNIMPLEMENTED;case Do.DATA_LOSS:return Qr.DATA_LOSS;default:return Wr()}}(xo=Do||(Do={}))[xo.OK=0]="OK",xo[xo.CANCELLED=1]="CANCELLED",xo[xo.UNKNOWN=2]="UNKNOWN",xo[xo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xo[xo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xo[xo.NOT_FOUND=5]="NOT_FOUND",xo[xo.ALREADY_EXISTS=6]="ALREADY_EXISTS",xo[xo.PERMISSION_DENIED=7]="PERMISSION_DENIED",xo[xo.UNAUTHENTICATED=16]="UNAUTHENTICATED",xo[xo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xo[xo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xo[xo.ABORTED=10]="ABORTED",xo[xo.OUT_OF_RANGE=11]="OUT_OF_RANGE",xo[xo.UNIMPLEMENTED=12]="UNIMPLEMENTED",xo[xo.INTERNAL=13]="INTERNAL",xo[xo.UNAVAILABLE=14]="UNAVAILABLE",xo[xo.DATA_LOSS=15]="DATA_LOSS";
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
class Mo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Oi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Ni(this.inner)}size(){return this.innerSize}}
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
 */const Uo=new Di(yi.comparator);function Fo(){return Uo}const Vo=new Di(yi.comparator);function jo(...t){let e=Vo;for(const n of t)e=e.insert(n.key,n);return e}function Bo(t){let e=Vo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function $o(){return zo()}function qo(){return zo()}function zo(){return new Mo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ho=new Di(yi.comparator),Ko=new Li(yi.comparator);function Go(...t){let e=Ko;for(const n of t)e=e.add(n);return e}const Wo=new Li(ui);function Jo(){return Wo}
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
 */class Xo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Qo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Xo(fi.min(),n,Jo(),Fo(),Go())}}class Qo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Qo(Fi.EMPTY_BYTE_STRING,e,Go(),Go(),Go())}}
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
 */class Yo{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class Zo{constructor(t,e){this.targetId=t,this.It=e}}class ta{constructor(t,e,n=Fi.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ea{constructor(){this.Tt=0,this.Et=ia(),this.At=Fi.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=Go(),e=Go(),n=Go();return this.Et.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Wr()}})),new Qo(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=ia()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class na{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=Fo(),this.Bt=ra(),this.Lt=new Li(ui)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Wr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(bs(t))if(0===n){const n=new yi(t.path);this.Kt(e,n,ps.newNoDocument(n,fi.min()))}else Jr(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&bs(i.target)){const e=new yi(i.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,ps.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=Go();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new Xo(t,e,this.Lt,this.$t,n);return this.$t=Fo(),this.Bt=ra(),this.Lt=new Li(ui),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new ea,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Li(ui),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||zr("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new ea),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function ra(){return new Di(yi.comparator)}function ia(){return new Di(yi.comparator)}
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
 */const sa=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),oa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class aa{constructor(t,e){this.databaseId=t,this.dt=e}}function ca(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ua(t,e){return t.dt?e.toBase64():e.toUint8Array()}function la(t,e){return ca(t,e.toTimestamp())}function ha(t){return Jr(!!t),fi.fromTimestamp(function(t){const e=ji(t);return new hi(e.seconds,e.nanos)}(t))}function fa(t,e){return function(t){return new pi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function da(t){const e=pi.fromString(t);return Jr(Ma(e)),e}function pa(t,e){return fa(t.databaseId,e.path)}function ma(t,e){const n=da(e);if(n.get(1)!==t.databaseId.projectId)throw new Yr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Yr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new yi(wa(n))}function ga(t,e){return fa(t.databaseId,e)}function ya(t){const e=da(t);return 4===e.length?pi.emptyPath():wa(e)}function va(t){return new pi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wa(t){return Jr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ba(t,e,n){return{name:pa(t,e),fields:n.value.mapValue.fields}}function Ea(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Wr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.dt?(Jr(void 0===e||"string"==typeof e),Fi.fromBase64String(e||"")):(Jr(void 0===e||e instanceof Uint8Array),Fi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Qr.UNKNOWN:Lo(t.code);return new Yr(e,t.message||"")}(o);n=new ta(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ma(t,r.document.name),s=ha(r.document.updateTime),o=new fs({mapValue:{fields:r.document.fields}}),a=ps.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Yo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ma(t,r.document),s=r.readTime?ha(r.readTime):fi.min(),o=ps.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Yo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ma(t,r.document),s=r.removedTargetIds||[];n=new Yo([],s,i,null)}else{if(!("filter"in e))return Wr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new No(r),s=t.targetId;n=new Zo(s,i)}}return n}function _a(t,e){let n;if(e instanceof Io)n={update:ba(t,e.key,e.value)};else if(e instanceof Ro)n={delete:pa(t,e.key)};else if(e instanceof So)n={update:ba(t,e.key,e.data),updateMask:La(e.fieldMask)};else{if(!(e instanceof Oo))return Wr();n={verify:pa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof so)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof oo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof co)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof lo)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Wr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:la(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Wr()}(t,e.precondition)),n}function Ta(t,e){return t&&t.length>0?(Jr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ha(t.updateTime):ha(e);return n.isEqual(fi.min())&&(n=ha(e)),new mo(n,t.transformResults||[])}(t,e)))):[]}function Ia(t,e){return{documents:[ga(t,e.path)]}}function Sa(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ga(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ga(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(cs(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NAN"}};if(as(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(cs(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NAN"}};if(as(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Na(t.field),op:Oa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Na(t.field),direction:Ra(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.dt||Wi(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ka(t){let e=ya(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Jr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Aa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Ns(Da(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Wi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Os(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Os(n,e)}(n.endAt)),Ms(e,i,o,s,a,"F",c,u)}function Ca(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Wr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Aa(t){return t?void 0!==t.unaryFilter?[Pa(t)]:void 0!==t.fieldFilter?[xa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Aa(t))).reduce(((t,e)=>t.concat(e))):Wr():[]}function Ra(t){return sa[t]}function Oa(t){return oa[t]}function Na(t){return{fieldPath:t.canonicalString()}}function Da(t){return gi.fromServerFormat(t.fieldPath)}function xa(t){return Es.create(Da(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Wr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Pa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Da(t.unaryFilter.field);return Es.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Da(t.unaryFilter.field);return Es.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Da(t.unaryFilter.field);return Es.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Da(t.unaryFilter.field);return Es.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Wr()}}function La(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ma(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const Ua=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Fa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Va=Fa;
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
class ja{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&bo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Eo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Eo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=qo();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=wo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(fi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Go())}isEqual(t){return this.batchId===t.batchId&&li(this.mutations,t.mutations,((t,e)=>To(t,e)))&&li(this.baseMutations,t.baseMutations,((t,e)=>To(t,e)))}}class Ba{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Jr(t.mutations.length===n.length);let r=Ho;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ba(t,e,n,r)}}
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
 */class $a{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class qa{constructor(t,e,n,r,i=fi.min(),s=fi.min(),o=Fi.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new qa(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new qa(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new qa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class za{constructor(t){this.ne=t}}function Ha(t){const e=ka({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?zs(e,e.limit,"L"):e}
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
 */class Ka{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Bi(t.integerValue));else if("doubleValue"in t){const n=Bi(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Ji(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de($i(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?hs(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Wr()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),yi.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}Ka.ye=new Ka;
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
class Ga{constructor(){this.ze=new Wa}addToCollectionParentIndex(t,e){return this.ze.add(e),ki.resolve()}getCollectionParents(t,e){return ki.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return ki.resolve()}deleteFieldIndex(t,e){return ki.resolve()}getDocumentsMatchingTarget(t,e){return ki.resolve(null)}getIndexType(t,e){return ki.resolve(0)}getFieldIndexes(t,e){return ki.resolve([])}getNextCollectionGroupToUpdate(t){return ki.resolve(null)}getMinOffset(t,e){return ki.resolve(Ei.min())}getMinOffsetFromCollectionGroup(t,e){return ki.resolve(Ei.min())}updateCollectionGroup(t,e,n){return ki.resolve()}updateIndexEntries(t,e){return ki.resolve()}}class Wa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Li(pi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Li(pi.comparator)).toArray()}}
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
 */new Uint8Array(0);class Ja{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ja(t,Ja.DEFAULT_COLLECTION_PERCENTILE,Ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Ja.DEFAULT_COLLECTION_PERCENTILE=10,Ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ja.DEFAULT=new Ja(41943040,Ja.DEFAULT_COLLECTION_PERCENTILE,Ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ja.DISABLED=new Ja(-1,0,0);
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
class Xa{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Xa(0)}static Rn(){return new Xa(-1)}}
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
class Qa{constructor(){this.changes=new Mo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ps.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ki.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class Ya{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Za{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Eo(n.mutation,t,Ui.empty(),hi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Go()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Go()){const r=$o();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=jo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=$o();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Go())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Fo();const s=zo(),o=zo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof So)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),Eo(o.mutation,e,o.mutation.getFieldMask(),hi.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ya(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=zo();let r=new Di(((t,e)=>t-e)),i=Go();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ui.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Go()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=qo();c.forEach((t=>{if(!i.has(t)){const r=wo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ki.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return yi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Bs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):ki.resolve($o());let o=-1,a=i;return s.next((e=>ki.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?ki.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Go()))).next((t=>({batchId:o,changes:Bo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new yi(e)).next((t=>{let e=jo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=jo();return this.indexManager.getCollectionParents(t,r).next((s=>ki.forEach(s,(s=>{const o=function(t,e){return new Ls(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ps.newInvalidDocument(n)))}));let n=jo();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&Eo(s.mutation,i,Ui.empty(),hi.now()),Ws(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):ki.resolve(ps.newInvalidDocument(e))}}
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
 */class tc{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return ki.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:ha(n.createTime)}),ki.resolve()}getNamedQuery(t,e){return ki.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:Ha(t.bundledQuery),readTime:ha(t.readTime)}}(e)),ki.resolve()}}
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
 */class ec{constructor(){this.overlays=new Di(yi.comparator),this.Xn=new Map}getOverlay(t,e){return ki.resolve(this.overlays.get(e))}getOverlays(t,e){const n=$o();return ki.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),ki.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),ki.resolve()}getOverlaysForCollection(t,e,n){const r=$o(),i=e.length+1,s=new yi(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ki.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Di(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=$o(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=$o(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return ki.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new $a(e,n));let i=this.Xn.get(e);void 0===i&&(i=Go(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}}
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
 */class nc{constructor(){this.Zn=new Li(rc.ts),this.es=new Li(rc.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new rc(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new rc(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new yi(new pi([])),n=new rc(e,t),r=new rc(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new yi(new pi([])),n=new rc(e,t),r=new rc(e,t+1);let i=Go();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new rc(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class rc{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return yi.comparator(t.key,e.key)||ui(t.ls,e.ls)}static ns(t,e){return ui(t.ls,e.ls)||yi.comparator(t.key,e.key)}}
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
 */class ic{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Li(rc.ts)}checkEmpty(t){return ki.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ja(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.ds=this.ds.add(new rc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ki.resolve(s)}lookupMutationBatch(t,e){return ki.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),i=r<0?0:r;return ki.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ki.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return ki.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rc(e,0),r=new rc(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);i.push(e)})),ki.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Li(ui);return e.forEach((t=>{const e=new rc(t,0),r=new rc(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),ki.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;yi.isDocumentKey(i)||(i=i.child(""));const s=new rc(new yi(i),0);let o=new Li(ui);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),ki.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Jr(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return ki.forEach(e.mutations,(r=>{const i=new rc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new rc(e,0),r=this.ds.firstAfterOrEqual(n);return ki.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ki.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class sc{constructor(t){this.ps=t,this.docs=new Di(yi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ki.resolve(n?n.document.mutableCopy():ps.newInvalidDocument(e))}getEntries(t,e){let n=Fo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ps.newInvalidDocument(t))})),ki.resolve(n)}getAllFromCollection(t,e,n){let r=Fo();const i=new yi(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||_i(bi(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return ki.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Wr()}Is(t,e){return ki.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new oc(this)}getSize(t){return ki.resolve(this.size)}}class oc extends Qa{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),ki.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
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
 */class ac{constructor(t){this.persistence=t,this.Ts=new Mo((t=>ys(t)),ws),this.lastRemoteSnapshotVersion=fi.min(),this.highestTargetId=0,this.Es=0,this.As=new nc,this.targetCount=0,this.Rs=Xa.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),ki.resolve()}getLastRemoteSnapshotVersion(t){return ki.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ki.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ki.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),ki.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Xa(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,ki.resolve()}updateTargetData(t,e){return this.vn(e),ki.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,ki.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ki.waitFor(i).next((()=>r))}getTargetCount(t){return ki.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return ki.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ki.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),ki.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),ki.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ki.resolve(n)}containsKey(t,e){return ki.resolve(this.As.containsKey(e))}}
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
 */class cc{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Ai(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new ac(this),this.indexManager=new Ga,this.remoteDocumentCache=function(t){return new sc(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new za(e),this.Ds=new tc(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ec,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new ic(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){zr("MemoryPersistence","Starting transaction:",t);const r=new uc(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return ki.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class uc extends Ii{constructor(t){super(),this.currentSequenceNumber=t}}class lc{constructor(t){this.persistence=t,this.ks=new nc,this.Os=null}static Ms(t){return new lc(t)}get Fs(){if(this.Os)return this.Os;throw Wr()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),ki.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),ki.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),ki.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ki.forEach(this.Fs,(n=>{const r=yi.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,fi.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return ki.or([()=>ki.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
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
class hc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=Go(),r=Go();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hc(t,e.fromCache,n,r)}}
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
 */class fc{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((i=>i||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return ki.resolve(null)}xi(t,e,n,r){return Fs(e)||r.isEqual(fi.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const s=this.ki(e,i);return this.Oi(e,s,n,r)?this.Ni(t,e):(qr()<=o["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gs(e)),this.Mi(t,s,e,wi(r,-1)))}))}ki(t,e){let n=new Li(Xs(t));return e.forEach(((e,r)=>{Ws(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,e){return qr()<=o["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",Gs(e)),this.Di.getDocumentsMatchingQuery(t,e,Ei.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class dc{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new Di(ui),this.Bi=new Mo((t=>ys(t)),ws),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Za(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function pc(t,e,n,r){return new dc(t,e,n,r)}async function mc(t,e){const n=Xr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Go();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function gc(t,e){const n=Xr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=ki.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Jr(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Go();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function yc(t){const e=Xr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function vc(t,e){const n=Xr(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Fi.EMPTY_BYTE_STRING,fi.min()).withLastLimboFreeSnapshotVersion(fi.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Vs.updateTargetData(t,u))}));let a=Fo(),c=Go();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(wc(t,s,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(fi.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ki.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=i,t)))}function wc(t,e,n){let r=Go(),i=Go();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Fo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(fi.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:r,Qi:i}}))}function bc(t,e){const n=Xr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Ec(t,e){const n=Xr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((i=>i?(r=i,ki.resolve(r)):n.Vs.allocateTargetId(t).next((i=>(r=new qa(e,i,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function _c(t,e,n){const r=Xr(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ci(t))throw t;zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Tc(t,e,n){const r=Xr(t);let i=fi.min(),s=Go();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Xr(t),i=r.Bi.get(n);return void 0!==i?ki.resolve(r.$i.get(i)):r.Vs.getTargetData(e,n)}(r,t,qs(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?i:fi.min(),n?s:Go()))).next((t=>(Ic(r,Js(e),t),{documents:t,ji:s})))))}function Ic(t,e,n){let r=fi.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}class Sc{constructor(){this.activeTargetIds=Jo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class kc{constructor(){this.Fr=new Sc,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Sc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Cc{Br(t){}shutdown(){}}
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
 */class Ac{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Rc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Oc{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
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
 */class Nc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,i){const s=this.oo(t,e);zr("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(t,s,o,n).then((t=>(zr("RestConnection","Received: ",t),t)),(e=>{throw Kr("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ao(t,e,n,r,i){return this.ro(t,e,n,r,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Br,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Rc[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((i,s)=>{const o=new Fr;o.listenOnce(xr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Dr.NO_ERROR:const e=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Dr.TIMEOUT:zr("Connection",'RPC "'+t+'" timed out'),s(new Yr(Qr.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qr).indexOf(e)>=0?e:Qr.UNKNOWN}(t.status);s(new Yr(e,t.message))}else s(new Yr(Qr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Yr(Qr.UNAVAILABLE,"Connection failed."));break;default:Wr()}}finally{zr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Or(),s=Nr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mr({})),this.uo(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");zr("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let l=!1,h=!1;const f=new Oc({jr:t=>{h?zr("Connection","Not sending because WebChannel is closed:",t):(l||(zr("Connection","Opening WebChannel transport."),u.open(),l=!0),zr("Connection","WebChannel sending:",t),u.send(t))},Wr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,Ur.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),d(u,Ur.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),f.eo())})),d(u,Ur.EventType.ERROR,(t=>{h||(h=!0,Kr("Connection","WebChannel transport errored:",t),f.eo(new Yr(Qr.UNAVAILABLE,"The operation could not be completed")))})),d(u,Ur.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Jr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){zr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Do[t];if(void 0!==e)return Lo(e)}(t),n=i.message;void 0===e&&(e=Qr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.eo(new Yr(e,n)),u.close()}else zr("Connection","WebChannel received:",n),f.no(n)}})),d(s,Pr.STAT_EVENT,(t=>{t.stat===Lr.PROXY?zr("Connection","Detected buffering proxy"):t.stat===Lr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.Zr()}),0),f}}
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
 */function Dc(){return"undefined"!=typeof document?document:null}
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
 */function xc(t){return new aa(t,!0)}class Pc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
 */class Lc{constructor(t,e,n,r,i,s,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Pc(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Qr.RESOURCE_EXHAUSTED?(Hr(e.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Qr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Yr(Qr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Mc extends Lc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.wt=i}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=Ea(this.wt,t),n=function(t){if(!("targetChange"in t))return fi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?fi.min():e.readTime?ha(e.readTime):fi.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=va(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=bs(r)?{documents:Ia(t,r)}:{query:Sa(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ua(t,e.resumeToken):e.snapshotVersion.compareTo(fi.min())>0&&(n.readTime=ca(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=Ca(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=va(this.wt),e.removeTarget=t,this.Mo(e)}}class Uc extends Lc{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Jr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Ta(t.writeResults,t.commitTime),n=ha(t.commitTime);return this.listener.Jo(n,e)}return Jr(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=va(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>_a(this.wt,t)))};this.Mo(e)}}
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
 */class Fc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Yr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yr(Qr.UNKNOWN,t.toString())}))}ao(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ao(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yr(Qr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Vc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Hr(e),this.su=!1):zr("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
 */class jc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{Jc(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Xr(t);e.lu.add(4),await $c(e),e._u.set("Unknown"),e.lu.delete(4),await Bc(e)}(this))}))})),this._u=new Vc(n,r)}}async function Bc(t){if(Jc(t))for(const e of t.fu)await e(!0)}async function $c(t){for(const e of t.fu)await e(!1)}function qc(t,e){const n=Xr(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Wc(n)?Gc(n):du(n).Co()&&Hc(n,e))}function zc(t,e){const n=Xr(t),r=du(n);n.hu.delete(e),r.Co()&&Kc(n,e),0===n.hu.size&&(r.Co()?r.ko():Jc(n)&&n._u.set("Unknown"))}function Hc(t,e){t.wu.Nt(e.targetId),du(t).Qo(e)}function Kc(t,e){t.wu.Nt(e),du(t).jo(e)}function Gc(t){t.wu=new na({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),du(t).start(),t._u.iu()}function Wc(t){return Jc(t)&&!du(t).Do()&&t.hu.size>0}function Jc(t){return 0===Xr(t).lu.size}function Xc(t){t.wu=void 0}async function Qc(t){t.hu.forEach(((e,n)=>{Hc(t,e)}))}async function Yc(t,e){Xc(t),Wc(t)?(t._u.uu(e),Gc(t)):t._u.set("Unknown")}async function Zc(t,e,n){if(t._u.set("Online"),e instanceof ta&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await tu(t,n)}else if(e instanceof Yo?t.wu.Ut(e):e instanceof Zo?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(fi.min()))try{const e=await yc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(r);i&&t.hu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Fi.EMPTY_BYTE_STRING,n.snapshotVersion)),Kc(t,e);const r=new qa(n.target,e,1,n.sequenceNumber);Hc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){zr("RemoteStore","Failed to raise snapshot:",e),await tu(t,e)}}async function tu(t,e,n){if(!Ci(e))throw e;t.lu.add(1),await $c(t),t._u.set("Offline"),n||(n=()=>yc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Bc(t)}))}function eu(t,e){return e().catch((n=>tu(t,n,e)))}async function nu(t){const e=Xr(t),n=pu(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;ru(e);)try{const t=await bc(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,iu(e,t)}catch(t){await tu(e,t)}su(e)&&ou(e)}function ru(t){return Jc(t)&&t.au.length<10}function iu(t,e){t.au.push(e);const n=pu(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function su(t){return Jc(t)&&!pu(t).Do()&&t.au.length>0}function ou(t){pu(t).start()}async function au(t){pu(t).Xo()}async function cu(t){const e=pu(t);for(const n of t.au)e.Ho(n.mutations)}async function uu(t,e,n){const r=t.au.shift(),i=Ba.from(r,e,n);await eu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await nu(t)}async function lu(t,e){e&&pu(t).zo&&await async function(t,e){if(n=e.code,Po(n)&&n!==Qr.ABORTED){const n=t.au.shift();pu(t).No(),await eu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await nu(t)}var n}(t,e),su(t)&&ou(t)}async function hu(t,e){const n=Xr(t);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=Jc(n);n.lu.add(3),await $c(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Bc(n)}async function fu(t,e){const n=Xr(t);e?(n.lu.delete(2),await Bc(n)):e||(n.lu.add(2),await $c(n),n._u.set("Unknown"))}function du(t){return t.mu||(t.mu=function(t,e,n){const r=Xr(t);return r.tu(),new Mc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
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
 */}(t.datastore,t.asyncQueue,{zr:Qc.bind(null,t),Jr:Yc.bind(null,t),Go:Zc.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Wc(t)?Gc(t):t._u.set("Unknown")):(await t.mu.stop(),Xc(t))}))),t.mu}function pu(t){return t.gu||(t.gu=function(t,e,n){const r=Xr(t);return r.tu(),new Uc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:au.bind(null,t),Jr:lu.bind(null,t),Yo:cu.bind(null,t),Jo:uu.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await nu(t)):(await t.gu.stop(),t.au.length>0&&(zr("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
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
 */}class mu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new mu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Yr(Qr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(t,e){if(Hr("AsyncQueue",`${e}: ${t}`),Ci(t))return new Yr(Qr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class yu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||yi.comparator(e.key,n.key):(t,e)=>yi.comparator(t.key,e.key),this.keyedMap=jo(),this.sortedSet=new Di(this.comparator)}static emptySet(t){return new yu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new yu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class vu{constructor(){this.yu=new Di(yi.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Wr():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class wu{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new wu(t,e,yu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class bu{constructor(){this.Iu=void 0,this.listeners=[]}}class Eu{constructor(){this.queries=new Mo((t=>Ks(t)),Hs),this.onlineState="Unknown",this.Tu=new Set}}async function _u(t,e){const n=Xr(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new bu),i)try{s.Iu=await n.onListen(r)}catch(t){const n=gu(t,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&ku(n)}async function Tu(t,e){const n=Xr(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Iu(t,e){const n=Xr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(i)&&(r=!0);e.Iu=i}}r&&ku(n)}function Su(t,e,n){const r=Xr(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ku(t){t.Tu.forEach((t=>{t.next()}))}class Cu{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new wu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=wu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
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
class Au{constructor(t){this.key=t}}class Ru{constructor(t){this.key=t}}class Ou{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Go(),this.mutatedKeys=Go(),this.Lu=Xs(t),this.Uu=new yu(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new vu,r=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Ws(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:s,Gu:n,Oi:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Wr()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const s=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new wu(this.query,t.Uu,r,i,t.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new vu,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Go(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Ru(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Au(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=Go();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return wu.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Nu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Du{constructor(t){this.key=t,this.Xu=!1}}class xu{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new Mo((t=>Ks(t)),Hs),this.ec=new Map,this.nc=new Set,this.sc=new Di(yi.comparator),this.ic=new Map,this.rc=new nc,this.oc={},this.uc=new Map,this.cc=Xa.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Pu(t,e){const n=Zu(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const t=await Ec(n.localStore,qs(e));n.isPrimaryClient&&qc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Lu(n,e,r,"current"===s)}return i}async function Lu(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let i=e.view.Ku(n);i.Oi&&(i=await Tc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Gu(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const i=await Tc(t.localStore,e,!0),s=new Ou(e,i.ji),o=s.Ku(i.documents),a=Qo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Gu(t,n,c.zu);const u=new Nu(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Mu(t,e){const n=Xr(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter((t=>!Hs(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _c(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),zc(n.remoteStore,r.targetId),Hu(n,r.targetId)})).catch(Si)):(Hu(n,r.targetId),await _c(n.localStore,r.targetId,!0))}async function Uu(t,e,n){const r=tl(t);try{const t=await function(t,e){const n=Xr(t),r=hi.now(),i=e.reduce(((t,e)=>t.add(e.key)),Go());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Fo(),c=Go();return n.Ui.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=_o(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new So(t.key,e,ds(e.value.mapValue),go.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Bo(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new Di(ui)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Xu(r,t.changes),await nu(r.remoteStore)}catch(t){const e=gu(t,"Failed to persist write");n.reject(e)}}async function Fu(t,e){const n=Xr(t);try{const t=await vc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(Jr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?Jr(r.Xu):t.removedDocuments.size>0&&(Jr(r.Xu),r.Xu=!1))})),await Xu(n,t,e)}catch(t){await Si(t)}}function Vu(t,e,n){const r=Xr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Xr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Eu(e)&&(r=!0)})),r&&ku(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ju(t,e,n){const r=Xr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let t=new Di(yi.comparator);t=t.insert(s,ps.newNoDocument(s,fi.min()));const n=Go().add(s),i=new Xo(fi.min(),new Map,new Li(ui),t,n);await Fu(r,i),r.sc=r.sc.remove(s),r.ic.delete(e),Ju(r)}else await _c(r.localStore,e,!1).then((()=>Hu(r,e,n))).catch(Si)}async function Bu(t,e){const n=Xr(t),r=e.batch.batchId;try{const t=await gc(n.localStore,e);zu(n,r,null),qu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xu(n,t)}catch(t){await Si(t)}}async function $u(t,e,n){const r=Xr(t);try{const t=await function(t,e){const n=Xr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Jr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);zu(r,e,n),qu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xu(r,t)}catch(n){await Si(n)}}function qu(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function zu(t,e,n){const r=Xr(t);let i=r.oc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function Hu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||Ku(t,e)}))}function Ku(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(zc(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ju(t))}function Gu(t,e,n){for(const r of n)r instanceof Au?(t.rc.addReference(r.key,e),Wu(t,r)):r instanceof Ru?(zr("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Ku(t,r.key)):Wr()}function Wu(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(zr("SyncEngine","New document in limbo: "+n),t.nc.add(r),Ju(t))}function Ju(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new yi(pi.fromString(e)),r=t.cc.next();t.ic.set(r,new Du(n)),t.sc=t.sc.insert(n,r),qc(t.remoteStore,new qa(qs(Us(n.path)),r,2,Ai.ot))}}async function Xu(t,e,n){const r=Xr(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=hc.Vi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(t,e){const n=Xr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ki.forEach(e,(e=>ki.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ki.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ci(t))throw t;zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,i)}}}(r.localStore,s))}async function Qu(t,e){const n=Xr(t);if(!n.currentUser.isEqual(e)){zr("SyncEngine","User change. New user:",e.toKey());const t=await mc(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Yr(Qr.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Xu(n,t.Ki)}}function Yu(t,e){const n=Xr(t),r=n.ic.get(e);if(r&&r.Xu)return Go().add(r.key);{let t=Go();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}function Zu(t){const e=Xr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ju.bind(null,e),e.Zu.Go=Iu.bind(null,e.eventManager),e.Zu.lc=Su.bind(null,e.eventManager),e}function tl(t){const e=Xr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$u.bind(null,e),e}class el{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=xc(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return pc(this.persistence,new fc,t.initialUser,this.wt)}_c(t){return new cc(lc.Ms,this.wt)}dc(t){return new kc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Vu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qu.bind(null,this.syncEngine),await fu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Eu}createDatastore(t){const e=xc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Nc(r));var r;return function(t,e,n,r){return new Fc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Vu(this.syncEngine,t,0),s=Ac.V()?new Ac:new Cc,new jc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new xu(t,e,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Xr(t);zr("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await $c(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
class rl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class il{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=ci.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Yr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=gu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function sl(t,e){t.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await mc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function ol(t,e){t.asyncQueue.verifyOperationInProgress();const n=await al(t);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>hu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>hu(e.remoteStore,n))),t.onlineComponents=e}async function al(t){return t.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await sl(t,new el)),t.offlineComponents}async function cl(t){return t.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await ol(t,new nl)),t.onlineComponents}function ul(t){return cl(t).then((t=>t.syncEngine))}async function ll(t){const e=await cl(t),n=e.eventManager;return n.onListen=Pu.bind(null,e.syncEngine),n.onUnlisten=Mu.bind(null,e.syncEngine),n}function hl(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new rl({next:s=>{e.enqueueAndForget((()=>Tu(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Yr(Qr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Yr(Qr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Cu(Us(n.path),s,{includeMetadataChanges:!0,Du:!0});return _u(t,o)}(await ll(t),t.asyncQueue,e,n,r))),r.promise}const fl=new Map;
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
 */function dl(t,e,n){if(!n)throw new Yr(Qr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pl(t,e,n,r){if(!0===e&&!0===r)throw new Yr(Qr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ml(t){if(!yi.isDocumentKey(t))throw new Yr(Qr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Wr()}function yl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Yr(Qr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gl(t);throw new Yr(Qr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class vl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Yr(Qr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Yr(Qr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,pl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class wl{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vl({}),this._settingsFrozen=!1,t instanceof Gi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Yr(Qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(t.options.projectId)}(t))}get app(){if(!this._app)throw new Yr(Qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Yr(Qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ei;switch(t.type){case"gapi":const e=t.client;return Jr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ii(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Yr(Qr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=fl.get(t);e&&(zr("ComponentProvider","Removing Datastore"),fl.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class bl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _l(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bl(this.firestore,t,this._key)}}class El{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new El(this.firestore,t,this._query)}}class _l extends El{constructor(t,e,n){super(t,e,Us(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bl(this.firestore,null,new yi(t))}withConverter(t){return new _l(this.firestore,t,this._path)}}function Tl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=ci.I()),dl("doc","path",e),t instanceof wl){const r=pi.fromString(e,...n);return ml(r),new bl(t,null,new yi(r))}{if(!(t instanceof bl||t instanceof _l))throw new Yr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pi.fromString(e,...n));return ml(r),new bl(t.firestore,t instanceof _l?t.converter:null,new yi(r))}}
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
class Il{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Pc(this,"async_queue_retry"),this.Kc=()=>{const t=Dc();t&&zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Dc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Dc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Zr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(_){if(!Ci(_))throw _;zr("AsyncQueue","Operation failed with retryable error: "+_)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw Hr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=mu.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&Wr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Sl extends wl{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Il,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Al(this),this._firestoreClient.terminate()}}function kl(t=(0,i.Mq)()){return(0,i.qX)(t,"firestore").getImmediate()}function Cl(t){return t._firestoreClient||Al(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Al(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ki(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new il(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class Rl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Yr(Qr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Ol{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ol(Fi.fromBase64String(t))}catch(t){throw new Yr(Qr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ol(Fi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Nl{constructor(t){this._methodName=t}}
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
 */class Dl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Yr(Qr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Yr(Qr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ui(this._lat,t._lat)||ui(this._long,t._long)}}
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
 */const xl=/^__.*__$/;class Pl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new So(t,this.data,this.fieldMask,e,this.fieldTransforms):new Io(t,this.data,e,this.fieldTransforms)}}class Ll{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new So(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ml(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Wr()}}class Ul{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Ul(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Ql(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Ml(this.Zc)&&xl.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Fl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||xc(t)}aa(t,e,n,r=!1){return new Ul({Zc:t,methodName:e,ca:n,path:gi.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Vl(t){const e=t._freezeSettings(),n=xc(t._databaseId);return new Fl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jl(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);Gl("Data must be an object, but it was:",o,r);const a=Hl(r,o);let c,u;if(s.merge)c=new Ui(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Wl(e,r,n);if(!o.contains(i))throw new Yr(Qr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Yl(t,i)||t.push(i)}c=new Ui(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Pl(new fs(a),c,u)}class Bl extends Nl{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Bl}}function $l(t,e,n,r){const i=t.aa(1,e,n);Gl("Data must be an object, but it was:",i,r);const s=[],o=fs.empty();Oi(r,((t,r)=>{const c=Xl(e,t,n);r=(0,a.m9)(r);const u=i.ia(c);if(r instanceof Bl)s.push(c);else{const t=zl(r,u);null!=t&&(s.push(c),o.set(c,t))}}));const c=new Ui(s);return new Ll(o,c,i.fieldTransforms)}function ql(t,e,n,r,i,s){const o=t.aa(1,e,n),c=[Wl(e,r,n)],u=[i];if(s.length%2!=0)throw new Yr(Qr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Wl(e,s[a])),u.push(s[a+1]);const l=[],h=fs.empty();for(let d=c.length-1;d>=0;--d)if(!Yl(l,c[d])){const t=c[d];let e=u[d];e=(0,a.m9)(e);const n=o.ia(t);if(e instanceof Bl)l.push(t);else{const r=zl(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new Ui(l);return new Ll(h,f,o.fieldTransforms)}function zl(t,e){if(Kl(t=(0,a.m9)(t)))return Gl("Unsupported field value:",e,t),Hl(t,e);if(t instanceof Nl)return function(t,e){if(!Ml(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=zl(i,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return to(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=hi.fromDate(t);return{timestampValue:ca(e.wt,n)}}if(t instanceof hi){const n=new hi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ca(e.wt,n)}}if(t instanceof Dl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ol)return{bytesValue:ua(e.wt,t._byteString)};if(t instanceof bl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:fa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${gl(t)}`)}(t,e)}function Hl(t,e){const n={};return Ni(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oi(t,((t,r)=>{const i=zl(r,e.ea(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Kl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hi||t instanceof Dl||t instanceof Ol||t instanceof bl||t instanceof Nl)}function Gl(t,e,n){if(!Kl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=gl(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function Wl(t,e,n){if((e=(0,a.m9)(e))instanceof Rl)return e._internalPath;if("string"==typeof e)return Xl(t,e);throw Ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jl=new RegExp("[~\\*/\\[\\]]");function Xl(t,e,n){if(e.search(Jl)>=0)throw Ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rl(...e.split("."))._internalPath}catch(r){throw Ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ql(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Yr(Qr.INVALID_ARGUMENT,a+t+c)}function Yl(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Zl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new th(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(eh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class th extends Zl{data(){return super.data()}}function eh(t,e){return"string"==typeof e?Xl(t,e):e instanceof Rl?e._internalPath:e._delegate._internalPath}
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
 */class nh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class rh extends Zl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(eh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ih extends rh{data(t={}){return super.data(t)}}
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
class sh{convertValue(t,e="none"){switch(Yi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Bi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes($i(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Wr()}}convertObject(t,e){const n={};return Oi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Dl(Bi(t.latitude),Bi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=zi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Hi(t));default:return null}}convertTimestamp(t){const e=ji(t);return new hi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=pi.fromString(t);Jr(Ma(n));const r=new Gi(n.get(1),n.get(3)),i=new yi(n.popFirst(5));return r.isEqual(e)||Hr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function oh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
function ah(t){t=yl(t,bl);const e=yl(t.firestore,Sl);return hl(Cl(e),t._key).then((n=>fh(e,t,n)))}class ch extends sh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ol(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bl(this.firestore,null,e)}}function uh(t,e,n){t=yl(t,bl);const r=yl(t.firestore,Sl),i=oh(t.converter,e,n);return hh(r,[jl(Vl(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,go.none())])}function lh(t,e,n,...r){t=yl(t,bl);const i=yl(t.firestore,Sl),s=Vl(i);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Rl?ql(s,"updateDoc",t._key,e,n,r):$l(s,"updateDoc",t._key,e),hh(i,[o.toMutation(t._key,go.exists(!0))])}function hh(t,e){return function(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget((async()=>Uu(await ul(t),e,n))),n.promise}(Cl(t),e)}function fh(t,e,n){const r=n.docs.get(e._key),i=new ch(t);return new rh(t,i,e._key,r,new nh(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){!function(t){Br=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Sl(r,new ni(t.getProvider("auth-internal")),new oi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Vr,"3.4.10",t),(0,i.KN)(Vr,"3.4.10","esm2017")}()},3766:function(t,e,n){"use strict";n.d(e,{WB:function(){return I},Q_:function(){return M}});n(1703);var r=!1;function i(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}var s=n(4870),o=n(3396);
/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let a;const c=t=>a=t,u=Symbol();function l(t){return t&&"object"===typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!==typeof t.toJSON}var h;(function(t){t["direct"]="direct",t["patchObject"]="patch object",t["patchFunction"]="patch function"})(h||(h={}));const f="undefined"!==typeof window,d=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof n.g&&n.g.global===n.g?n.g:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function p(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function m(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){b(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function g(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(n){}return e.status>=200&&e.status<=299}function y(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const v="object"===typeof navigator?navigator:{userAgent:""},w=(()=>/Macintosh/.test(v.userAgent)&&/AppleWebKit/.test(v.userAgent)&&!/Safari/.test(v.userAgent))(),b=f?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!w?E:"msSaveOrOpenBlob"in v?_:T:()=>{};function E(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener","string"===typeof t?(r.href=t,r.origin!==location.origin?g(r.href)?m(t,e,n):(r.target="_blank",y(r)):y(r)):(r.href=URL.createObjectURL(t),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){y(r)}),0))}function _(t,e="download",n){if("string"===typeof t)if(g(t))m(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout((function(){y(e)}))}else navigator.msSaveOrOpenBlob(p(t,n),e)}function T(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof t)return m(t,e,n);const i="application/octet-stream"===t.type,s=/constructor/i.test(String(d.HTMLElement))||"safari"in d,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s||w)&&"undefined"!==typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!==typeof t)throw r=null,new Error("Wrong reader.result type");t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location.assign(t),r=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);r?r.location.assign(e):location.href=e,r=null,setTimeout((function(){URL.revokeObjectURL(e)}),4e4)}}function I(){const t=(0,s.B)(!0),e=t.run((()=>(0,s.iH)({})));let n=[],i=[];const o=(0,s.Xl)({install(t){c(o),r||(o._a=t,t.provide(u,o),t.config.globalProperties.$pinia=o,i.forEach((t=>n.push(t))),i=[])},use(t){return this._a||r?n.push(t):i.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return o}const S=()=>{};function k(t,e,n,r=S){t.push(e);const i=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),r())};return!n&&(0,o.FN)()&&(0,o.Ah)(i),i}function C(t,...e){t.slice().forEach((t=>{t(...e)}))}function A(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];l(i)&&l(r)&&t.hasOwnProperty(n)&&!(0,s.dq)(r)&&!(0,s.PG)(r)?t[n]=A(i,r):t[n]=r}return t}const R=Symbol(),O=new WeakMap;function N(t){return r?!O.has(t):!l(t)||!t.hasOwnProperty(R)}const{assign:D}=Object;function x(t){return!(!(0,s.dq)(t)||!t.effect)}function P(t,e,n,a){const{state:u,actions:l,getters:h}=e,f=n.state.value[t];let d;function p(){f||(r?i(n.state.value,t,u?u():{}):n.state.value[t]=u?u():{});const e=(0,s.BK)(n.state.value[t]);return D(e,l,Object.keys(h||{}).reduce(((e,i)=>(e[i]=(0,s.Xl)((0,o.Fl)((()=>{c(n);const e=n._s.get(t);if(!r||e._r)return h[i].call(e,e)}))),e)),{}))}return d=L(t,p,e,n,a),d.$reset=function(){const t=u?u():{};this.$patch((e=>{D(e,t)}))},d}function L(t,e,n={},a,u){let l;const f=n.state,d=D({actions:{}},n);const p={deep:!0};let m,g;let y,v=(0,s.Xl)([]),w=(0,s.Xl)([]);const b=a.state.value[t];f||b||(r?i(a.state.value,t,{}):a.state.value[t]={});(0,s.iH)({});function E(e){let n;m=g=!1,"function"===typeof e?(e(a.state.value[t]),n={type:h.patchFunction,storeId:t,events:y}):(A(a.state.value[t],e),n={type:h.patchObject,payload:e,storeId:t,events:y}),(0,o.Y3)().then((()=>{m=!0})),g=!0,C(v,n,a.state.value[t])}const _=S;function T(){l.stop(),v=[],w=[],a._s.delete(t)}function I(e,n){return function(){c(a);const r=Array.from(arguments),i=[],s=[];function o(t){i.push(t)}function u(t){s.push(t)}let l;C(w,{args:r,name:e,store:O,after:o,onError:u});try{l=n.apply(this&&this.$id===t?this:O,r)}catch(h){throw C(s,h),h}return l instanceof Promise?l.then((t=>(C(i,t),t))).catch((t=>(C(s,t),Promise.reject(t)))):(C(i,l),l)}}const R={_p:a,$id:t,$onAction:k.bind(null,w),$patch:E,$reset:_,$subscribe(e,n={}){const r=k(v,e,n.detached,(()=>i())),i=l.run((()=>(0,o.YP)((()=>a.state.value[t]),(r=>{("sync"===n.flush?g:m)&&e({storeId:t,type:h.direct,events:y},r)}),D({},p,n))));return r},$dispose:T};r&&(R._r=!1);const O=(0,s.qj)(D({},R));a._s.set(t,O);const P=a._e.run((()=>(l=(0,s.B)(),l.run((()=>e())))));for(const o in P){const e=P[o];if((0,s.dq)(e)&&!x(e)||(0,s.PG)(e))f||(b&&N(e)&&((0,s.dq)(e)?e.value=b[o]:A(e,b[o])),r?i(a.state.value[t],o,e):a.state.value[t][o]=e);else if("function"===typeof e){const t=I(o,e);r?i(P,o,t):P[o]=t,d.actions[o]=e}else 0}return r?Object.keys(P).forEach((t=>{i(O,t,P[t])})):(D(O,P),D((0,s.IU)(O),P)),Object.defineProperty(O,"$state",{get:()=>a.state.value[t],set:t=>{E((e=>{D(e,t)}))}}),r&&(O._r=!0),a._p.forEach((t=>{D(O,l.run((()=>t({store:O,app:a._a,pinia:a,options:d}))))})),b&&f&&n.hydrate&&n.hydrate(O.$state,b),m=!0,g=!0,O}function M(t,e,n){let r,i;const s="function"===typeof e;function l(t,n){const l=(0,o.FN)();t=t||l&&(0,o.f3)(u),t&&c(t),t=a,t._s.has(r)||(s?L(r,e,i,t):P(r,i,t));const h=t._s.get(r);return h}return"string"===typeof t?(r=t,i=s?n:e):(i=t,r=t.id),l.$id=r,l}},9907:function(t,e,n){"use strict";n.d(e,{z:function(){return s}});n(1703);var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var s=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)}))):(a(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)})))}))}function o(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return o(e,t)}))}function c(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(t,e,n)})).catch((function(t){return o(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return o(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},678:function(t,e,n){"use strict";n.d(e,{PO:function(){return H},p7:function(){return ee},tv:function(){return ie},yj:function(){return se}});n(1703);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>s?Symbol(t):"_vr_"+t,a=o("rvlm"),c=o("rvd"),u=o("r"),l=o("rl"),h=o("rvl"),f="undefined"!==typeof window;function d(t){return t.__esModule||s&&"Module"===t[Symbol.toStringTag]}const p=Object.assign;function m(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const g=()=>{};const y=/\/$/,v=t=>t.replace(y,"");function w(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=C(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function E(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function _(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&T(e.matched[r],n.matched[i])&&I(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function T(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function I(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!S(t[n],e[n]))return!1;return!0}function S(t,e){return Array.isArray(t)?k(t,e):Array.isArray(e)?k(e,t):t===e}function k(t,e){return Array.isArray(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function C(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var A,R;(function(t){t["pop"]="pop",t["push"]="push"})(A||(A={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(R||(R={}));function O(t){if(!t)if(f){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const N=/^[^#]+#/;function D(t,e){return t.replace(N,"#")+e}function x(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=x(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function M(t,e){const n=history.state?history.state.position-e:-1;return n+t}const U=new Map;function F(t,e){U.set(t,e)}function V(t){const e=U.get(t);return U.delete(t),e}let j=()=>location.protocol+"//"+location.host;function B(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),E(n,"")}const o=E(n,t);return o+r+i}function $(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=B(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:A.pop,direction:l?l>0?R.forward:R.back:R.unknown})}))};function c(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(p({},t.state,{scroll:P()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?P():null}}function z(t){const{history:e,location:n}=window,r={value:B(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:j()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=p({},e.state,q(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=p({},i.value,e.state,{forward:t,scroll:P()});s(o.current,o,!0);const a=p({},q(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function H(t){t=O(t);const e=z(t),n=$(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=p({location:"",base:t,go:r,createHref:D.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function K(t){return"string"===typeof t||t&&"object"===typeof t}function G(t){return"string"===typeof t||"symbol"===typeof t}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=o("nf");var X;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(X||(X={}));function Q(t,e){return p(new Error,{type:t,[J]:!0},e)}function Y(t,e){return t instanceof Error&&J in t&&(null==e||!!(t.type&e))}const Z="[^/]+?",tt={sensitive:!1,strict:!1,start:!0,end:!0},et=/[.+*?^${}()[\]/\\]/g;function nt(t,e){const n=p({},tt,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(et,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||Z;if(h!==Z){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function rt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function it(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=rt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const st={type:0,value:""},ot=/[a-zA-Z0-9_]/;function at(t){if(!t)return[[]];if("/"===t)return[[st]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ot.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ct(t,e,n){const r=nt(at(t.path),n);const i=p(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ut(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=ht(t);a.aliasOf=r&&r.record;const u=mt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(p({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=ct(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!dt(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{o(f)}:g}function o(t){if(G(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&it(t,n[e])>=0&&(t.record.path!==n[e].record.path||!gt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!dt(t)&&r.set(t.record.name,t)}function u(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw Q(1,{location:t});o=i.record.name,a=p(lt(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),s=i.stringify(a)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw Q(1,{location:t,currentLocation:e});o=i.record.name,a=p({},e.params,t.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:pt(c)}}return e=mt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function lt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ht(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ft(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ft(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function dt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pt(t){return t.reduce(((t,e)=>p(t,e.meta)),{})}function mt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gt(t,e){return e.children.some((e=>e===t||gt(t,e)))}const yt=/#/g,vt=/&/g,wt=/\//g,bt=/=/g,Et=/\?/g,_t=/\+/g,Tt=/%5B/g,It=/%5D/g,St=/%5E/g,kt=/%60/g,Ct=/%7B/g,At=/%7C/g,Rt=/%7D/g,Ot=/%20/g;function Nt(t){return encodeURI(""+t).replace(At,"|").replace(Tt,"[").replace(It,"]")}function Dt(t){return Nt(t).replace(Ct,"{").replace(Rt,"}").replace(St,"^")}function xt(t){return Nt(t).replace(_t,"%2B").replace(Ot,"+").replace(yt,"%23").replace(vt,"%26").replace(kt,"`").replace(Ct,"{").replace(Rt,"}").replace(St,"^")}function Pt(t){return xt(t).replace(bt,"%3D")}function Lt(t){return Nt(t).replace(yt,"%23").replace(Et,"%3F")}function Mt(t){return null==t?"":Lt(t).replace(wt,"%2F")}function Ut(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ft(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(_t," "),n=t.indexOf("="),s=Ut(n<0?t:t.slice(0,n)),o=n<0?null:Ut(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Vt(t){let e="";for(let n in t){const r=t[n];if(n=Pt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((t=>t&&xt(t))):[r&&xt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function jt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function $t(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(Q(4,{from:n,to:e})):t instanceof Error?a(t):K(t)?a(Q(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function qt(t,e,n,r){const i=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(zt(o)){const a=o.__vccOpts||o,c=a[e];c&&i.push($t(c,n,r,s,t))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=d(i)?i.default:i;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&$t(c,n,r,s,t)()}))))}}return i}function zt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=(0,r.f3)(u),n=(0,r.f3)(l),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(T.bind(null,r));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(r)===a&&i[i.length-1].path!==a?i.findIndex(T.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Jt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&I(n.params,s.value.params)));function h(n={}){return Wt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(g):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const Kt=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=(0,i.qj)(Ht(t)),{options:s}=(0,r.f3)(u),o=(0,r.Fl)((()=>({[Qt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Gt=Kt;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Yt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(h),o=(0,r.Fl)((()=>t.route||s.value)),u=(0,r.f3)(c,0),l=(0,r.Fl)((()=>o.value.matched[u]));(0,r.JJ)(c,u+1),(0,r.JJ)(a,l),(0,r.JJ)(h,o);const f=(0,i.iH)();return(0,r.YP)((()=>[f.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&T(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=l.value,a=s&&s.components[t.name],c=t.name;if(!a)return Zt(n.default,{Component:a,route:i});const u=s.props[t.name],h=u?!0===u?i.params:"function"===typeof u?u(i):u:null,d=t=>{t.component.isUnmounted&&(s.instances[c]=null)},m=(0,r.h)(a,p({},h,e,{onVnodeUnmounted:d,ref:f}));return Zt(n.default,{Component:m,route:i})||m}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Yt;function ee(t){const e=ut(t.routes,t),n=t.parseQuery||Ft,s=t.stringifyQuery||Vt,o=t.history;const a=Bt(),c=Bt(),d=Bt(),y=(0,i.XI)(W);let v=W;f&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=m.bind(null,(t=>""+t)),T=m.bind(null,Mt),I=m.bind(null,Ut);function S(t,n){let r,i;return G(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function k(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map((t=>t.record))}function R(t){return!!e.getRecordMatcher(t)}function O(t,r){if(r=p({},r||y.value),"string"===typeof t){const i=w(n,t,r.path),s=e.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:I(s.params),hash:Ut(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in t)i=p({},t,{path:w(n,t.path,r.path).path});else{const e=p({},t.params);for(const t in e)null==e[t]&&delete e[t];i=p({},t,{params:T(t.params)}),r.params=T(r.params)}const a=e.resolve(i,r),c=t.hash||"";a.params=E(I(a.params));const u=b(s,p({},t,{hash:Dt(c),path:a.path})),l=o.createHref(u);return p({fullPath:u,hash:c,query:s===Vt?jt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function N(t){return"string"===typeof t?w(n,t,y.value.path):p({},t)}function D(t,e){if(v!==t)return Q(8,{from:e,to:t})}function x(t){return B(t)}function U(t){return x(p(N(t),{replace:!0}))}function j(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=N(r):{path:r},r.params={}),p({query:t.query,hash:t.hash,params:t.params},r)}}function B(t,e){const n=v=O(t),r=y.value,i=t.state,o=t.force,a=!0===t.replace,c=j(n);if(c)return B(p(N(c),{state:i,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&_(s,r,n)&&(l=Q(16,{to:u,from:r}),it(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch((t=>Y(t)?Y(t,2)?t:rt(t):et(t,u,r))).then((t=>{if(t){if(Y(t,2))return B(p(N(t.to),{state:i,force:o,replace:a}),e||u)}else t=H(u,r,!0,a,i);return z(u,r,t),t}))}function $(t,e){const n=D(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,i,s]=re(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push($t(r,t,e))}));const o=$.bind(null,t,e);return n.push(o),ne(n).then((()=>{n=[];for(const r of a.list())n.push($t(r,t,e));return n.push(o),ne(n)})).then((()=>{n=qt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push($t(r,t,e))}));return n.push(o),ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push($t(i,t,e));else n.push($t(r.beforeEnter,t,e));return n.push(o),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=qt(s,"beforeRouteEnter",t,e),n.push(o),ne(n)))).then((()=>{n=[];for(const r of c.list())n.push($t(r,t,e));return n.push(o),ne(n)})).catch((t=>Y(t,8)?t:Promise.reject(t)))}function z(t,e,n){for(const r of d.list())r(t,e,n)}function H(t,e,n,r,i){const s=D(t,e);if(s)return s;const a=e===W,c=f?history.state:{};n&&(r||a?o.replace(t.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(t.fullPath,i)),y.value=t,it(t,e,n,a),rt()}let K;function J(){K=o.listen(((t,e,n)=>{const r=O(t),i=j(r);if(i)return void B(p(i,{replace:!0}),r).catch(g);v=r;const s=y.value;f&&F(M(s.fullPath,n.delta),P()),q(r,s).catch((t=>Y(t,12)?t:Y(t,2)?(B(t.to,r).then((t=>{Y(t,20)&&!n.delta&&n.type===A.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),et(t,r,s)))).then((t=>{t=t||H(r,s,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===A.pop&&Y(t,20)&&o.go(-1,!1)),z(r,s,t)})).catch(g)}))}let X,Z=Bt(),tt=Bt();function et(t,e,n){rt(t);const r=tt.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function nt(){return X&&y.value!==W?Promise.resolve():new Promise(((t,e)=>{Z.add([t,e])}))}function rt(t){return X||(X=!t,J(),Z.list().forEach((([e,n])=>t?n(t):e())),Z.reset()),t}function it(e,n,i,s){const{scrollBehavior:o}=t;if(!f||!o)return Promise.resolve();const a=!i&&V(M(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(e,n,a))).then((t=>t&&L(t))).catch((t=>et(t,e,n)))}const st=t=>o.go(t);let ot;const at=new Set,ct={currentRoute:y,addRoute:S,removeRoute:k,hasRoute:R,getRoutes:C,resolve:O,options:t,push:x,replace:U,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:a.add,beforeResolve:c.add,afterEach:d.add,onError:tt.add,isReady:nt,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),f&&!ot&&y.value===W&&(ot=!0,x(o.location).catch((t=>{0})));const n={};for(const i in W)n[i]=(0,r.Fl)((()=>y.value[i]));t.provide(u,e),t.provide(l,(0,i.qj)(n)),t.provide(h,y);const s=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(v=W,K&&K(),y.value=W,ot=!1,X=!1),s()}}};return ct}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>T(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>T(t,a)))||i.push(a))}return[n,r,i]}function ie(){return(0,r.f3)(u)}function se(){return(0,r.f3)(l)}},1804:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return gt},KN:function(){return vt}});var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(_(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),_(h.get(this))}:function(...e){return _(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),_(r)}}function E(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function _(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return C.set(e,s),s}w((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
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
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",D="0.7.26",x=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Q="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.8.3",st="[DEFAULT]",ot={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Q]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){x.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return x.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},dt=new s.LL("app","Firebase",ft);
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
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
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
 */const mt=it;function gt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw dt.create("bad-app-name",{appName:String(i)});const o=at.get(i);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw dt.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(i,c),c}function yt(t=st){const e=at.get(t);if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void x.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const wt="firebase-heartbeat-database",bt=1,Et="firebase-heartbeat-store";let _t=null;function Tt(){return _t||(_t=I(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch((t=>{throw dt.create("storage-open",{originalErrorMessage:t.message})}))),_t}async function It(t){var e;try{const e=await Tt();return e.transaction(Et).objectStore(Et).get(kt(t))}catch(n){throw dt.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function St(t,e){var n;try{const n=await Tt(),r=n.transaction(Et,"readwrite"),i=r.objectStore(Et);return await i.put(e,kt(t)),r.done}catch(r){throw dt.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function kt(t){return`${t.name}!${t.options.appId}`}
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
 */const Ct=1024,At=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ot(),{heartbeatsToSend:e,unsentEntries:n}=Nt(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=Ct){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),xt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function xt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function Pt(t){lt(new r.wA("platform-logger",(t=>new R(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Rt(t)),"PRIVATE")),vt(N,D,t),vt(N,D,"esm2017"),vt("fire-js","")}Pt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});n(1703);var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(1703);
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
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},1373:function(t,e,n){"use strict";function r(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map((function(t){t(n)})),(r=t.get("*"))&&r.slice().map((function(t){t(e,n)}))}}}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=chunk-vendors.87be308e.js.map