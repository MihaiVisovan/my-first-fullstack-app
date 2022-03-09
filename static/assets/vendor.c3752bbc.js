function Qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const js="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ds=Qr(js);function Gi(e){return!!e||e===""}function Jr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ce(r)?Us(r):Jr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ce(e))return e;if(fe(e))return e}}const $s=/;(?![^(]*\))/g,Hs=/:(.+)/;function Us(e){const t={};return e.split($s).forEach(n=>{if(n){const r=n.split(Hs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Zr(e){let t="";if(ce(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Zr(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const em=e=>ce(e)?e:e==null?"":H(e)||fe(e)&&(e.toString===eo||!B(e.toString))?JSON.stringify(e,Qi,2):String(e),Qi=(e,t)=>t&&t.__v_isRef?Qi(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ji(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!H(t)&&!to(t)?String(t):t,Z={},It=[],Oe=()=>{},Bs=()=>!1,Ws=/^on[^a-z]/,Kn=e=>Ws.test(e),ea=e=>e.startsWith("onUpdate:"),pe=Object.assign,ta=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ys=Object.prototype.hasOwnProperty,q=(e,t)=>Ys.call(e,t),H=Array.isArray,Nt=e=>qn(e)==="[object Map]",Ji=e=>qn(e)==="[object Set]",B=e=>typeof e=="function",ce=e=>typeof e=="string",na=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Zi=e=>fe(e)&&B(e.then)&&B(e.catch),eo=Object.prototype.toString,qn=e=>eo.call(e),Ks=e=>qn(e).slice(8,-1),to=e=>qn(e)==="[object Object]",ra=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cn=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},qs=/-(\w)/g,Le=Vn(e=>e.replace(qs,(t,n)=>n?n.toUpperCase():"")),Vs=/\B([A-Z])/g,Dt=Vn(e=>e.replace(Vs,"-$1").toLowerCase()),Xn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),fr=Vn(e=>e?`on${Xn(e)}`:""),ln=(e,t)=>!Object.is(e,t),Pn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},wr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let za;const Xs=()=>za||(za=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $e;class Gs{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&$e&&(this.parent=$e,this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active)try{return $e=this,t()}finally{$e=this.parent}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Qs(e,t=$e){t&&t.active&&t.effects.push(e)}const aa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},no=e=>(e.w&ot)>0,ro=e=>(e.n&ot)>0,Js=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ot},Zs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];no(a)&&!ro(a)?a.delete(e):t[n++]=a,a.w&=~ot,a.n&=~ot}t.length=n}},xr=new WeakMap;let qt=0,ot=1;const _r=30;let Me;const pt=Symbol(""),Ar=Symbol("");class ia{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qs(this,r)}run(){if(!this.active)return this.fn();let t=Me,n=rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Me,Me=this,rt=!0,ot=1<<++qt,qt<=_r?Js(this):ja(this),this.fn()}finally{qt<=_r&&Zs(this),ot=1<<--qt,Me=this.parent,rt=n,this.parent=void 0}}stop(){this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rt=!0;const ao=[];function $t(){ao.push(rt),rt=!1}function Ht(){const e=ao.pop();rt=e===void 0?!0:e}function we(e,t,n){if(rt&&Me){let r=xr.get(e);r||xr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=aa()),io(a)}}function io(e,t){let n=!1;qt<=_r?ro(e)||(e.n|=ot,n=!no(e)):n=!e.has(Me),n&&(e.add(Me),Me.deps.push(e))}function Be(e,t,n,r,a,i){const o=xr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?ra(n)&&s.push(o.get("length")):(s.push(o.get(pt)),Nt(e)&&s.push(o.get(Ar)));break;case"delete":H(e)||(s.push(o.get(pt)),Nt(e)&&s.push(o.get(Ar)));break;case"set":Nt(e)&&s.push(o.get(pt));break}if(s.length===1)s[0]&&kr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);kr(aa(l))}}function kr(e,t){for(const n of H(e)?e:[...e])(n!==Me||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const el=Qr("__proto__,__v_isRef,__isVue"),oo=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(na)),tl=oa(),nl=oa(!1,!0),rl=oa(!0),Da=al();function al(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){$t();const r=V(this)[t].apply(this,n);return Ht(),r}}),e}function oa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?wl:uo:t?co:fo).get(r))return r;const o=H(r);if(!e&&o&&q(Da,a))return Reflect.get(Da,a,i);const s=Reflect.get(r,a,i);return(na(a)?oo.has(a):el(a))||(e||we(r,"get",a),t)?s:me(s)?!o||!ra(a)?s.value:s:fe(s)?e?mo(s):vn(s):s}}const il=so(),ol=so(!0);function so(e=!1){return function(n,r,a,i){let o=n[r];if(fn(o)&&me(o)&&!me(a))return!1;if(!e&&!fn(a)&&(ho(a)||(a=V(a),o=V(o)),!H(n)&&me(o)&&!me(a)))return o.value=a,!0;const s=H(n)&&ra(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?ln(a,o)&&Be(n,"set",r,a):Be(n,"add",r,a)),l}}function sl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Be(e,"delete",t,void 0),r}function ll(e,t){const n=Reflect.has(e,t);return(!na(t)||!oo.has(t))&&we(e,"has",t),n}function fl(e){return we(e,"iterate",H(e)?"length":pt),Reflect.ownKeys(e)}const lo={get:tl,set:il,deleteProperty:sl,has:ll,ownKeys:fl},cl={get:rl,set(e,t){return!0},deleteProperty(e,t){return!0}},ul=pe({},lo,{get:nl,set:ol}),sa=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function wn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);t!==i&&!n&&we(a,"get",t),!n&&we(a,"get",i);const{has:o}=Gn(a),s=r?sa:n?ca:cn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function xn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return e!==a&&!t&&we(r,"has",e),!t&&we(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function _n(e,t=!1){return e=e.__v_raw,!t&&we(V(e),"iterate",pt),Reflect.get(e,"size",e)}function $a(e){e=V(e);const t=V(this);return Gn(t).has.call(t,e)||(t.add(e),Be(t,"add",e,e)),this}function Ha(e,t){t=V(t);const n=V(this),{has:r,get:a}=Gn(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&Be(n,"set",e,t):Be(n,"add",e,t),this}function Ua(e){const t=V(this),{has:n,get:r}=Gn(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Be(t,"delete",e,void 0),i}function Ba(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Be(e,"clear",void 0,void 0),n}function An(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?sa:e?ca:cn;return!e&&we(s,"iterate",pt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function kn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Nt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?sa:t?ca:cn;return!t&&we(i,"iterate",l?Ar:pt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...t){return e==="delete"?!1:this}}function dl(){const e={get(i){return wn(this,i)},get size(){return _n(this)},has:xn,add:$a,set:Ha,delete:Ua,clear:Ba,forEach:An(!1,!1)},t={get(i){return wn(this,i,!1,!0)},get size(){return _n(this)},has:xn,add:$a,set:Ha,delete:Ua,clear:Ba,forEach:An(!1,!0)},n={get(i){return wn(this,i,!0)},get size(){return _n(this,!0)},has(i){return xn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:An(!0,!1)},r={get(i){return wn(this,i,!0,!0)},get size(){return _n(this,!0)},has(i){return xn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:An(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=kn(i,!1,!1),n[i]=kn(i,!0,!1),t[i]=kn(i,!1,!0),r[i]=kn(i,!0,!0)}),[e,n,t,r]}const[ml,hl,pl,gl]=dl();function la(e,t){const n=t?e?gl:pl:e?hl:ml;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const vl={get:la(!1,!1)},bl={get:la(!1,!0)},yl={get:la(!0,!1)},fo=new WeakMap,co=new WeakMap,uo=new WeakMap,wl=new WeakMap;function xl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _l(e){return e.__v_skip||!Object.isExtensible(e)?0:xl(Ks(e))}function vn(e){return fn(e)?e:fa(e,!1,lo,vl,fo)}function Al(e){return fa(e,!1,ul,bl,co)}function mo(e){return fa(e,!0,cl,yl,uo)}function fa(e,t,n,r,a){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=_l(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Mt(e){return fn(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function fn(e){return!!(e&&e.__v_isReadonly)}function ho(e){return!!(e&&e.__v_isShallow)}function po(e){return Mt(e)||fn(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function go(e){return Nn(e,"__v_skip",!0),e}const cn=e=>fe(e)?vn(e):e,ca=e=>fe(e)?mo(e):e;function vo(e){rt&&Me&&(e=V(e),io(e.dep||(e.dep=aa())))}function bo(e,t){e=V(e),e.dep&&kr(e.dep)}function me(e){return!!(e&&e.__v_isRef===!0)}function kl(e){return yo(e,!1)}function El(e){return yo(e,!0)}function yo(e,t){return me(e)?e:new Cl(e,t)}class Cl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:cn(t)}get value(){return vo(this),this._value}set value(t){t=this.__v_isShallow?t:V(t),ln(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:cn(t),bo(this))}}function Qt(e){return me(e)?e.value:e}const Pl={get:(e,t,n)=>Qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return me(a)&&!me(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function wo(e){return Mt(e)?e:new Proxy(e,Pl)}class Ol{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ia(t,()=>{this._dirty||(this._dirty=!0,bo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return vo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Sl(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Ol(r,a,i||!a,n)}Promise.resolve();function at(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Qn(i,t,n)}return a}function Se(e,t,n,r){if(B(e)){const i=at(e,t,n,r);return i&&Zi(i)&&i.catch(o=>{Qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Se(e[i],t,n,r));return a}function Qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){at(l,null,10,[e,o,s]);return}}Rl(e,n,a,r)}function Rl(e,t,n,r=!0){console.error(e)}let Mn=!1,Er=!1;const ye=[];let Ue=0;const Jt=[];let Vt=null,Ct=0;const Zt=[];let et=null,Pt=0;const xo=Promise.resolve();let ua=null,Cr=null;function _o(e){const t=ua||xo;return e?t.then(this?e.bind(this):e):t}function Tl(e){let t=Ue+1,n=ye.length;for(;t<n;){const r=t+n>>>1;un(ye[r])<e?t=r+1:n=r}return t}function Ao(e){(!ye.length||!ye.includes(e,Mn&&e.allowRecurse?Ue+1:Ue))&&e!==Cr&&(e.id==null?ye.push(e):ye.splice(Tl(e.id),0,e),ko())}function ko(){!Mn&&!Er&&(Er=!0,ua=xo.then(Po))}function Il(e){const t=ye.indexOf(e);t>Ue&&ye.splice(t,1)}function Eo(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),ko()}function Nl(e){Eo(e,Vt,Jt,Ct)}function Ml(e){Eo(e,et,Zt,Pt)}function da(e,t=null){if(Jt.length){for(Cr=t,Vt=[...new Set(Jt)],Jt.length=0,Ct=0;Ct<Vt.length;Ct++)Vt[Ct]();Vt=null,Ct=0,Cr=null,da(e,t)}}function Co(e){if(Zt.length){const t=[...new Set(Zt)];if(Zt.length=0,et){et.push(...t);return}for(et=t,et.sort((n,r)=>un(n)-un(r)),Pt=0;Pt<et.length;Pt++)et[Pt]();et=null,Pt=0}}const un=e=>e.id==null?1/0:e.id;function Po(e){Er=!1,Mn=!0,da(e),ye.sort((n,r)=>un(n)-un(r));const t=Oe;try{for(Ue=0;Ue<ye.length;Ue++){const n=ye[Ue];n&&n.active!==!1&&at(n,null,14)}}finally{Ue=0,ye.length=0,Co(),Mn=!1,ua=null,(ye.length||Jt.length||Zt.length)&&Po(e)}}function Fl(e,t,...n){const r=e.vnode.props||Z;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||Z;h?a=n.map(v=>v.trim()):d&&(a=n.map(wr))}let s,l=r[s=fr(t)]||r[s=fr(Le(t))];!l&&i&&(l=r[s=fr(Dt(t))]),l&&Se(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Se(c,e,6,a)}}function Oo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=c=>{const f=Oo(c,t,!0);f&&(s=!0,pe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):pe(o,i),r.set(e,o),o)}function ma(e,t){return!e||!Kn(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Dt(t))||q(e,t))}let Ee=null,Jn=null;function Fn(e){const t=Ee;return Ee=e,Jn=e&&e.type.__scopeId||null,t}function tm(e){Jn=e}function nm(){Jn=null}function Ll(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Za(-1);const i=Fn(t),o=e(...a);return Fn(i),r._d&&Za(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function cr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:v,ctx:E,inheritAttrs:M}=e;let O,g;const _=Fn(e);try{if(n.shapeFlag&4){const D=a||r;O=Ne(f.call(D,D,d,i,v,h,E)),g=l}else{const D=t;O=Ne(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),g=t.props?l:zl(l)}}catch(D){tn.length=0,Qn(D,e,1),O=Ce(dn)}let N=O;if(g&&M!==!1){const D=Object.keys(g),{shapeFlag:Y}=N;D.length&&Y&7&&(o&&D.some(ea)&&(g=jl(g,o)),N=mn(N,g))}return n.dirs&&(N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),O=N,Fn(_),O}const zl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Kn(n))&&((t||(t={}))[n]=e[n]);return t},jl=(e,t)=>{const n={};for(const r in e)(!ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Dl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Wa(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!ma(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Wa(r,o,c):!0:!!o;return!1}function Wa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ma(n,i))return!0}return!1}function $l({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Hl=e=>e.__isSuspense;function Ul(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Ml(e)}function On(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function it(e,t,n=!1){const r=de||Ee;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const Ya={};function en(e,t,n){return So(e,t,n)}function So(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Z){const s=de;let l,c=!1,f=!1;if(me(e)?(l=()=>e.value,c=ho(e)):Mt(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(Mt),l=()=>e.map(g=>{if(me(g))return g.value;if(Mt(g))return mt(g);if(B(g))return at(g,s,2)})):B(e)?t?l=()=>at(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Se(e,s,3,[h])}:l=Oe,t&&r){const g=l;l=()=>mt(g())}let d,h=g=>{d=O.onStop=()=>{at(g,s,4)}};if(hn)return h=Oe,t?n&&Se(t,s,3,[l(),f?[]:void 0,h]):l(),Oe;let v=f?[]:Ya;const E=()=>{if(!!O.active)if(t){const g=O.run();(r||c||(f?g.some((_,N)=>ln(_,v[N])):ln(g,v)))&&(d&&d(),Se(t,s,3,[g,v===Ya?void 0:v,h]),v=g)}else O.run()};E.allowRecurse=!!t;let M;a==="sync"?M=E:a==="post"?M=()=>ge(E,s&&s.suspense):M=()=>{!s||s.isMounted?Nl(E):E()};const O=new ia(l,M);return t?n?E():v=O.run():a==="post"?ge(O.run.bind(O),s&&s.suspense):O.run(),()=>{O.stop(),s&&s.scope&&ta(s.scope.effects,O)}}function Bl(e,t,n){const r=this.proxy,a=ce(e)?e.includes(".")?Ro(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=de;Lt(this);const s=So(a,i.bind(r),n);return o?Lt(o):vt(),s}function Ro(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function mt(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),me(e))mt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)mt(e[n],t);else if(Ji(e)||Nt(e))e.forEach(n=>{mt(n,t)});else if(to(e))for(const n in e)mt(e[n],t);return e}function bn(e){return B(e)?{setup:e,name:e.name}:e}const Pr=e=>!!e.type.__asyncLoader,To=e=>e.type.__isKeepAlive;function Wl(e,t){Io(e,"a",t)}function Yl(e,t){Io(e,"da",t)}function Io(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Zn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)To(a.parent.vnode)&&Kl(r,t,n,a),a=a.parent}}function Kl(e,t,n,r){const a=Zn(t,e,r,!0);No(()=>{ta(r[t],a)},n)}function Zn(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;$t(),Lt(n);const s=Se(t,n,e,o);return vt(),Ht(),s});return r?a.unshift(i):a.push(i),i}}const qe=e=>(t,n=de)=>(!hn||e==="sp")&&Zn(e,t,n),ql=qe("bm"),Vl=qe("m"),Xl=qe("bu"),Gl=qe("u"),Ql=qe("bum"),No=qe("um"),Jl=qe("sp"),Zl=qe("rtg"),ef=qe("rtc");function tf(e,t=de){Zn("ec",e,t)}let Or=!0;function nf(e){const t=Fo(e),n=e.proxy,r=e.ctx;Or=!1,t.beforeCreate&&Ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:v,updated:E,activated:M,deactivated:O,beforeDestroy:g,beforeUnmount:_,destroyed:N,unmounted:D,render:Y,renderTracked:ne,renderTriggered:se,errorCaptured:_e,serverPrefetch:ue,expose:Xe,inheritAttrs:ze,components:je,directives:wt,filters:xt}=t;if(c&&rf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ee in o){const X=o[ee];B(X)&&(r[ee]=X.bind(n))}if(a){const ee=a.call(n,n);fe(ee)&&(e.data=vn(ee))}if(Or=!0,i)for(const ee in i){const X=i[ee],ve=B(X)?X.bind(n,n):B(X.get)?X.get.bind(n,n):Oe,At=!B(X)&&B(X.set)?X.set.bind(n):Oe,De=oe({get:ve,set:At});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>De.value,set:Re=>De.value=Re})}if(s)for(const ee in s)Mo(s[ee],r,n,ee);if(l){const ee=B(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(X=>{On(X,ee[X])})}f&&Ka(f,e,"c");function le(ee,X){H(X)?X.forEach(ve=>ee(ve.bind(n))):X&&ee(X.bind(n))}if(le(ql,d),le(Vl,h),le(Xl,v),le(Gl,E),le(Wl,M),le(Yl,O),le(tf,_e),le(ef,ne),le(Zl,se),le(Ql,_),le(No,D),le(Jl,ue),H(Xe))if(Xe.length){const ee=e.exposed||(e.exposed={});Xe.forEach(X=>{Object.defineProperty(ee,X,{get:()=>n[X],set:ve=>n[X]=ve})})}else e.exposed||(e.exposed={});Y&&e.render===Oe&&(e.render=Y),ze!=null&&(e.inheritAttrs=ze),je&&(e.components=je),wt&&(e.directives=wt)}function rf(e,t,n=Oe,r=!1){H(e)&&(e=Sr(e));for(const a in e){const i=e[a];let o;fe(i)?"default"in i?o=it(i.from||a,i.default,!0):o=it(i.from||a):o=it(i),me(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ka(e,t,n){Se(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mo(e,t,n,r){const a=r.includes(".")?Ro(n,r):()=>n[r];if(ce(e)){const i=t[e];B(i)&&en(a,i)}else if(B(e))en(a,e.bind(n));else if(fe(e))if(H(e))e.forEach(i=>Mo(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&en(a,i,e)}}function Fo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Ln(l,c,o,!0)),Ln(l,t,o)),i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(o=>Ln(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=af[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const af={data:qa,props:ut,emits:ut,methods:ut,computed:ut,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:ut,directives:ut,watch:sf,provide:qa,inject:of};function qa(e,t){return t?e?function(){return pe(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function of(e,t){return ut(Sr(e),Sr(t))}function Sr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function ut(e,t){return e?pe(pe(Object.create(null),e),t):t}function sf(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function lf(e,t,n,r=!1){const a={},i={};Nn(i,er,1),e.propsDefaults=Object.create(null),Lo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Al(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ff(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];const v=t[h];if(l)if(q(i,h))v!==i[h]&&(i[h]=v,c=!0);else{const E=Le(h);a[E]=Rr(l,s,E,v,e,!1)}else v!==i[h]&&(i[h]=v,c=!0)}}}else{Lo(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!q(t,d)&&((f=Dt(d))===d||!q(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Rr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d)&&!0)&&(delete i[d],c=!0)}c&&Be(e,"set","$attrs")}function Lo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Cn(l))continue;const c=t[l];let f;a&&q(a,f=Le(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:ma(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||Z;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Rr(a,l,d,c[d],e,!q(c,d))}}return o}function Rr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Lt(a),r=c[n]=l.call(null,t),vt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Dt(n))&&(r=!0))}return r}function zo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const f=d=>{l=!0;const[h,v]=zo(d,t,!0);pe(o,h),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,It),It;if(H(i))for(let f=0;f<i.length;f++){const d=Le(i[f]);Va(d)&&(o[d]=Z)}else if(i)for(const f in i){const d=Le(f);if(Va(d)){const h=i[f],v=o[d]=H(h)||B(h)?{type:h}:h;if(v){const E=Qa(Boolean,v.type),M=Qa(String,v.type);v[0]=E>-1,v[1]=M<0||E<M,(E>-1||q(v,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function Va(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ga(e,t){return Xa(e)===Xa(t)}function Qa(e,t){return H(t)?t.findIndex(n=>Ga(n,e)):B(t)&&Ga(t,e)?0:-1}const jo=e=>e[0]==="_"||e==="$stable",ha=e=>H(e)?e.map(Ne):[Ne(e)],cf=(e,t,n)=>{const r=Ll((...a)=>ha(t(...a)),n);return r._c=!1,r},Do=(e,t,n)=>{const r=e._ctx;for(const a in e){if(jo(a))continue;const i=e[a];if(B(i))t[a]=cf(a,i,r);else if(i!=null){const o=ha(i);t[a]=()=>o}}},$o=(e,t)=>{const n=ha(t);e.slots.default=()=>n},uf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),Nn(t,"_",n)):Do(t,e.slots={})}else e.slots={},t&&$o(e,t);Nn(e.slots,er,1)},df=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Z;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Do(t,a)),o=t}else t&&($o(e,t),o={default:1});if(i)for(const s in a)!jo(s)&&!(s in o)&&delete a[s]};function rm(e,t){const n=Ee;if(n===null)return e;const r=n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=Z]=t[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&mt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function ft(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&($t(),Se(l,n,8,[e.el,s,e,t]),Ht())}}function Ho(){return{app:null,config:{isNativeTag:Bs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mf=0;function hf(e,t){return function(r,a=null){a!=null&&!fe(a)&&(a=null);const i=Ho(),o=new Set;let s=!1;const l=i.app={_uid:mf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:zf,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...f)):B(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=Ce(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,va(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Tr(e,t,n,r,a=!1){if(H(e)){e.forEach((h,v)=>Tr(h,t&&(H(t)?t[v]:t),n,r,a));return}if(Pr(r)&&!a)return;const i=r.shapeFlag&4?va(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===Z?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(ce(c)?(f[c]=null,q(d,c)&&(d[c]=null)):me(c)&&(c.value=null)),B(l))at(l,s,12,[o,f]);else{const h=ce(l),v=me(l);if(h||v){const E=()=>{if(e.f){const M=h?f[l]:l.value;a?H(M)&&ta(M,i):H(M)?M.includes(i)||M.push(i):h?f[l]=[i]:(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,q(d,l)&&(d[l]=o)):me(l)&&(l.value=o,e.k&&(f[e.k]=o))};o?(E.id=-1,ge(E,n)):E()}}}const ge=Ul;function pf(e){return gf(e)}function gf(e,t){const n=Xs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:v=Oe,cloneNode:E,insertStaticContent:M}=e,O=(u,m,p,w=null,y=null,k=null,S=!1,A=null,C=!!m.dynamicChildren)=>{if(u===m)return;u&&!Yt(u,m)&&(w=F(u),Ae(u,y,k,!0),u=null),m.patchFlag===-2&&(C=!1,m.dynamicChildren=null);const{type:x,ref:L,shapeFlag:T}=m;switch(x){case pa:g(u,m,p,w);break;case dn:_(u,m,p,w);break;case ur:u==null&&N(m,p,w,S);break;case He:wt(u,m,p,w,y,k,S,A,C);break;default:T&1?ne(u,m,p,w,y,k,S,A,C):T&6?xt(u,m,p,w,y,k,S,A,C):(T&64||T&128)&&x.process(u,m,p,w,y,k,S,A,C,te)}L!=null&&y&&Tr(L,u&&u.ref,k,m||u,!m)},g=(u,m,p,w)=>{if(u==null)r(m.el=s(m.children),p,w);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},_=(u,m,p,w)=>{u==null?r(m.el=l(m.children||""),p,w):m.el=u.el},N=(u,m,p,w)=>{[u.el,u.anchor]=M(u.children,m,p,w,u.el,u.anchor)},D=({el:u,anchor:m},p,w)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,w),u=y;r(m,p,w)},Y=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},ne=(u,m,p,w,y,k,S,A,C)=>{S=S||m.type==="svg",u==null?se(m,p,w,y,k,S,A,C):Xe(u,m,y,k,S,A,C)},se=(u,m,p,w,y,k,S,A)=>{let C,x;const{type:L,props:T,shapeFlag:z,transition:$,patchFlag:K,dirs:ie}=u;if(u.el&&E!==void 0&&K===-1)C=u.el=E(u.el);else{if(C=u.el=o(u.type,k,T&&T.is,T),z&8?f(C,u.children):z&16&&ue(u.children,C,null,w,y,k&&L!=="foreignObject",S,A),ie&&ft(u,null,w,"created"),T){for(const re in T)re!=="value"&&!Cn(re)&&i(C,re,null,T[re],k,u.children,w,y,P);"value"in T&&i(C,"value",null,T.value),(x=T.onVnodeBeforeMount)&&Ie(x,w,u)}_e(C,u,u.scopeId,S,w)}ie&&ft(u,null,w,"beforeMount");const Q=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;Q&&$.beforeEnter(C),r(C,m,p),((x=T&&T.onVnodeMounted)||Q||ie)&&ge(()=>{x&&Ie(x,w,u),Q&&$.enter(C),ie&&ft(u,null,w,"mounted")},y)},_e=(u,m,p,w,y)=>{if(p&&v(u,p),w)for(let k=0;k<w.length;k++)v(u,w[k]);if(y){let k=y.subTree;if(m===k){const S=y.vnode;_e(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},ue=(u,m,p,w,y,k,S,A,C=0)=>{for(let x=C;x<u.length;x++){const L=u[x]=A?tt(u[x]):Ne(u[x]);O(null,L,m,p,w,y,k,S,A)}},Xe=(u,m,p,w,y,k,S)=>{const A=m.el=u.el;let{patchFlag:C,dynamicChildren:x,dirs:L}=m;C|=u.patchFlag&16;const T=u.props||Z,z=m.props||Z;let $;p&&ct(p,!1),($=z.onVnodeBeforeUpdate)&&Ie($,p,m,u),L&&ft(m,u,p,"beforeUpdate"),p&&ct(p,!0);const K=y&&m.type!=="foreignObject";if(x?ze(u.dynamicChildren,x,A,p,w,K,k):S||ve(u,m,A,null,p,w,K,k,!1),C>0){if(C&16)je(A,m,T,z,p,w,y);else if(C&2&&T.class!==z.class&&i(A,"class",null,z.class,y),C&4&&i(A,"style",T.style,z.style,y),C&8){const ie=m.dynamicProps;for(let Q=0;Q<ie.length;Q++){const re=ie[Q],ke=T[re],kt=z[re];(kt!==ke||re==="value")&&i(A,re,ke,kt,y,u.children,p,w,P)}}C&1&&u.children!==m.children&&f(A,m.children)}else!S&&x==null&&je(A,m,T,z,p,w,y);(($=z.onVnodeUpdated)||L)&&ge(()=>{$&&Ie($,p,m,u),L&&ft(m,u,p,"updated")},w)},ze=(u,m,p,w,y,k,S)=>{for(let A=0;A<m.length;A++){const C=u[A],x=m[A],L=C.el&&(C.type===He||!Yt(C,x)||C.shapeFlag&70)?d(C.el):p;O(C,x,L,null,w,y,k,S,!0)}},je=(u,m,p,w,y,k,S)=>{if(p!==w){for(const A in w){if(Cn(A))continue;const C=w[A],x=p[A];C!==x&&A!=="value"&&i(u,A,x,C,S,m.children,y,k,P)}if(p!==Z)for(const A in p)!Cn(A)&&!(A in w)&&i(u,A,p[A],null,S,m.children,y,k,P);"value"in w&&i(u,"value",p.value,w.value)}},wt=(u,m,p,w,y,k,S,A,C)=>{const x=m.el=u?u.el:s(""),L=m.anchor=u?u.anchor:s("");let{patchFlag:T,dynamicChildren:z,slotScopeIds:$}=m;$&&(A=A?A.concat($):$),u==null?(r(x,p,w),r(L,p,w),ue(m.children,p,L,y,k,S,A,C)):T>0&&T&64&&z&&u.dynamicChildren?(ze(u.dynamicChildren,z,p,y,k,S,A),(m.key!=null||y&&m===y.subTree)&&Uo(u,m,!0)):ve(u,m,p,L,y,k,S,A,C)},xt=(u,m,p,w,y,k,S,A,C)=>{m.slotScopeIds=A,u==null?m.shapeFlag&512?y.ctx.activate(m,p,w,S,C):_t(m,p,w,y,k,S,C):le(u,m,C)},_t=(u,m,p,w,y,k,S)=>{const A=u.component=Rf(u,w,y);if(To(u)&&(A.ctx.renderer=te),Tf(A),A.asyncDep){if(y&&y.registerDep(A,ee),!u.el){const C=A.subTree=Ce(dn);_(null,C,m,p)}return}ee(A,u,m,p,y,k,S)},le=(u,m,p)=>{const w=m.component=u.component;if(Dl(u,m,p))if(w.asyncDep&&!w.asyncResolved){X(w,m,p);return}else w.next=m,Il(w.update),w.update();else m.component=u.component,m.el=u.el,w.vnode=m},ee=(u,m,p,w,y,k,S)=>{const A=()=>{if(u.isMounted){let{next:L,bu:T,u:z,parent:$,vnode:K}=u,ie=L,Q;ct(u,!1),L?(L.el=K.el,X(u,L,S)):L=K,T&&Pn(T),(Q=L.props&&L.props.onVnodeBeforeUpdate)&&Ie(Q,$,L,K),ct(u,!0);const re=cr(u),ke=u.subTree;u.subTree=re,O(ke,re,d(ke.el),F(ke),u,y,k),L.el=re.el,ie===null&&$l(u,re.el),z&&ge(z,y),(Q=L.props&&L.props.onVnodeUpdated)&&ge(()=>Ie(Q,$,L,K),y)}else{let L;const{el:T,props:z}=m,{bm:$,m:K,parent:ie}=u,Q=Pr(m);if(ct(u,!1),$&&Pn($),!Q&&(L=z&&z.onVnodeBeforeMount)&&Ie(L,ie,m),ct(u,!0),T&&U){const re=()=>{u.subTree=cr(u),U(T,u.subTree,u,y,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=cr(u);O(null,re,p,w,u,y,k),m.el=re.el}if(K&&ge(K,y),!Q&&(L=z&&z.onVnodeMounted)){const re=m;ge(()=>Ie(L,ie,re),y)}m.shapeFlag&256&&u.a&&ge(u.a,y),u.isMounted=!0,m=p=w=null}},C=u.effect=new ia(A,()=>Ao(u.update),u.scope),x=u.update=C.run.bind(C);x.id=u.uid,ct(u,!0),x()},X=(u,m,p)=>{m.component=u;const w=u.vnode.props;u.vnode=m,u.next=null,ff(u,m.props,w,p),df(u,m.children,p),$t(),da(void 0,u.update),Ht()},ve=(u,m,p,w,y,k,S,A,C=!1)=>{const x=u&&u.children,L=u?u.shapeFlag:0,T=m.children,{patchFlag:z,shapeFlag:$}=m;if(z>0){if(z&128){De(x,T,p,w,y,k,S,A,C);return}else if(z&256){At(x,T,p,w,y,k,S,A,C);return}}$&8?(L&16&&P(x,y,k),T!==x&&f(p,T)):L&16?$&16?De(x,T,p,w,y,k,S,A,C):P(x,y,k,!0):(L&8&&f(p,""),$&16&&ue(T,p,w,y,k,S,A,C))},At=(u,m,p,w,y,k,S,A,C)=>{u=u||It,m=m||It;const x=u.length,L=m.length,T=Math.min(x,L);let z;for(z=0;z<T;z++){const $=m[z]=C?tt(m[z]):Ne(m[z]);O(u[z],$,p,null,y,k,S,A,C)}x>L?P(u,y,k,!0,!1,T):ue(m,p,w,y,k,S,A,C,T)},De=(u,m,p,w,y,k,S,A,C)=>{let x=0;const L=m.length;let T=u.length-1,z=L-1;for(;x<=T&&x<=z;){const $=u[x],K=m[x]=C?tt(m[x]):Ne(m[x]);if(Yt($,K))O($,K,p,null,y,k,S,A,C);else break;x++}for(;x<=T&&x<=z;){const $=u[T],K=m[z]=C?tt(m[z]):Ne(m[z]);if(Yt($,K))O($,K,p,null,y,k,S,A,C);else break;T--,z--}if(x>T){if(x<=z){const $=z+1,K=$<L?m[$].el:w;for(;x<=z;)O(null,m[x]=C?tt(m[x]):Ne(m[x]),p,K,y,k,S,A,C),x++}}else if(x>z)for(;x<=T;)Ae(u[x],y,k,!0),x++;else{const $=x,K=x,ie=new Map;for(x=K;x<=z;x++){const be=m[x]=C?tt(m[x]):Ne(m[x]);be.key!=null&&ie.set(be.key,x)}let Q,re=0;const ke=z-K+1;let kt=!1,Ma=0;const Wt=new Array(ke);for(x=0;x<ke;x++)Wt[x]=0;for(x=$;x<=T;x++){const be=u[x];if(re>=ke){Ae(be,y,k,!0);continue}let Te;if(be.key!=null)Te=ie.get(be.key);else for(Q=K;Q<=z;Q++)if(Wt[Q-K]===0&&Yt(be,m[Q])){Te=Q;break}Te===void 0?Ae(be,y,k,!0):(Wt[Te-K]=x+1,Te>=Ma?Ma=Te:kt=!0,O(be,m[Te],p,null,y,k,S,A,C),re++)}const Fa=kt?vf(Wt):It;for(Q=Fa.length-1,x=ke-1;x>=0;x--){const be=K+x,Te=m[be],La=be+1<L?m[be+1].el:w;Wt[x]===0?O(null,Te,p,La,y,k,S,A,C):kt&&(Q<0||x!==Fa[Q]?Re(Te,p,La,2):Q--)}}},Re=(u,m,p,w,y=null)=>{const{el:k,type:S,transition:A,children:C,shapeFlag:x}=u;if(x&6){Re(u.component.subTree,m,p,w);return}if(x&128){u.suspense.move(m,p,w);return}if(x&64){S.move(u,m,p,te);return}if(S===He){r(k,m,p);for(let T=0;T<C.length;T++)Re(C[T],m,p,w);r(u.anchor,m,p);return}if(S===ur){D(u,m,p);return}if(w!==2&&x&1&&A)if(w===0)A.beforeEnter(k),r(k,m,p),ge(()=>A.enter(k),y);else{const{leave:T,delayLeave:z,afterLeave:$}=A,K=()=>r(k,m,p),ie=()=>{T(k,()=>{K(),$&&$()})};z?z(k,K,ie):ie()}else r(k,m,p)},Ae=(u,m,p,w=!1,y=!1)=>{const{type:k,props:S,ref:A,children:C,dynamicChildren:x,shapeFlag:L,patchFlag:T,dirs:z}=u;if(A!=null&&Tr(A,null,p,u,!0),L&256){m.ctx.deactivate(u);return}const $=L&1&&z,K=!Pr(u);let ie;if(K&&(ie=S&&S.onVnodeBeforeUnmount)&&Ie(ie,m,u),L&6)I(u.component,p,w);else{if(L&128){u.suspense.unmount(p,w);return}$&&ft(u,null,m,"beforeUnmount"),L&64?u.type.remove(u,m,p,y,te,w):x&&(k!==He||T>0&&T&64)?P(x,m,p,!1,!0):(k===He&&T&384||!y&&L&16)&&P(C,m,p),w&&lr(u)}(K&&(ie=S&&S.onVnodeUnmounted)||$)&&ge(()=>{ie&&Ie(ie,m,u),$&&ft(u,null,m,"unmounted")},p)},lr=u=>{const{type:m,el:p,anchor:w,transition:y}=u;if(m===He){b(p,w);return}if(m===ur){Y(u);return}const k=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:A}=y,C=()=>S(p,k);A?A(u.el,k,C):C()}else k()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},I=(u,m,p)=>{const{bum:w,scope:y,update:k,subTree:S,um:A}=u;w&&Pn(w),y.stop(),k&&(k.active=!1,Ae(S,u,m,p)),A&&ge(A,m),ge(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(u,m,p,w=!1,y=!1,k=0)=>{for(let S=k;S<u.length;S++)Ae(u[S],m,p,w,y)},F=u=>u.shapeFlag&6?F(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),G=(u,m,p)=>{u==null?m._vnode&&Ae(m._vnode,null,null,!0):O(m._vnode||null,u,m,null,null,null,p),Co(),m._vnode=u},te={p:O,um:Ae,m:Re,r:lr,mt:_t,mc:ue,pc:ve,pbc:ze,n:F,o:e};let W,U;return t&&([W,U]=t(te)),{render:G,hydrate:W,createApp:hf(G,W)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Uo(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=tt(a[i]),s.el=o.el),n||Uo(o,s))}}function vf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const bf=e=>e.__isTeleport,Bo="components";function am(e,t){return wf(Bo,e,!0,t)||e}const yf=Symbol();function wf(e,t,n=!0,r=!1){const a=Ee||de;if(a){const i=a.type;if(e===Bo){const s=Ff(i);if(s&&(s===t||s===Le(t)||s===Xn(Le(t))))return i}const o=Ja(a[e]||i[e],t)||Ja(a.appContext[e],t);return!o&&r?i:o}}function Ja(e,t){return e&&(e[t]||e[Le(t)]||e[Xn(Le(t))])}const He=Symbol(void 0),pa=Symbol(void 0),dn=Symbol(void 0),ur=Symbol(void 0),tn=[];let gt=null;function im(e=!1){tn.push(gt=e?null:[])}function xf(){tn.pop(),gt=tn[tn.length-1]||null}let zn=1;function Za(e){zn+=e}function _f(e){return e.dynamicChildren=zn>0?gt||It:null,xf(),zn>0&&gt&&gt.push(e),e}function om(e,t,n,r,a,i){return _f(Yo(e,t,n,r,a,i,!0))}function Ir(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const er="__vInternal",Wo=({key:e})=>e!=null?e:null,Sn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||me(e)||B(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function Yo(e,t=null,n=null,r=0,a=null,i=e===He?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wo(t),ref:t&&Sn(t),scopeId:Jn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ga(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),zn>0&&!o&&gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&gt.push(l),l}const Ce=Af;function Af(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===yf)&&(e=dn),Ir(e)){const s=mn(e,t,!0);return n&&ga(s,n),s}if(Lf(e)&&(e=e.__vccOpts),t){t=kf(t);let{class:s,style:l}=t;s&&!ce(s)&&(t.class=Zr(s)),fe(l)&&(po(l)&&!H(l)&&(l=pe({},l)),t.style=Jr(l))}const o=ce(e)?1:Hl(e)?128:bf(e)?64:fe(e)?4:B(e)?2:0;return Yo(e,t,n,r,a,o,i,!0)}function kf(e){return e?po(e)||er in e?pe({},e):e:null}function mn(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Cf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Wo(s),ref:t&&t.ref?n&&a?H(a)?a.concat(Sn(t)):[a,Sn(t)]:Sn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==He?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mn(e.ssContent),ssFallback:e.ssFallback&&mn(e.ssFallback),el:e.el,anchor:e.anchor}}function Ef(e=" ",t=0){return Ce(pa,null,e,t)}function Ne(e){return e==null||typeof e=="boolean"?Ce(dn):H(e)?Ce(He,null,e.slice()):typeof e=="object"?tt(e):Ce(pa,null,String(e))}function tt(e){return e.el===null||e.memo?e:mn(e)}function ga(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ga(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(er in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[Ef(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Zr([t.class,r.class]));else if(a==="style")t.style=Jr([t.style,r.style]);else if(Kn(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Se(e,t,7,[n,r])}function sm(e,t,n,r){let a;const i=n&&n[r];if(H(e)||ce(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(fe(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Nr=e=>e?Ko(e)?va(e)||e.proxy:Nr(e.parent):null,jn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nr(e.parent),$root:e=>Nr(e.root),$emit:e=>e.emit,$options:e=>Fo(e),$forceUpdate:e=>()=>Ao(e.update),$nextTick:e=>_o.bind(e.proxy),$watch:e=>Bl.bind(e)}),Pf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Z&&q(r,t))return o[t]=1,r[t];if(a!==Z&&q(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&q(c,t))return o[t]=3,i[t];if(n!==Z&&q(n,t))return o[t]=4,n[t];Or&&(o[t]=0)}}const f=jn[t];let d,h;if(f)return t==="$attrs"&&we(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==Z&&q(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Z&&q(a,t)?(a[t]=n,!0):r!==Z&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Z&&q(e,o)||t!==Z&&q(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(jn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Of=Ho();let Sf=0;function Rf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Of,i={uid:Sf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zo(r,a),emitsOptions:Oo(r,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Fl.bind(null,i),e.ce&&e.ce(i),i}let de=null;const Lt=e=>{de=e,e.scope.on()},vt=()=>{de&&de.scope.off(),de=null};function Ko(e){return e.vnode.shapeFlag&4}let hn=!1;function Tf(e,t=!1){hn=t;const{props:n,children:r}=e.vnode,a=Ko(e);lf(e,n,a,t),uf(e,r);const i=a?If(e,t):void 0;return hn=!1,i}function If(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=go(new Proxy(e.ctx,Pf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Mf(e):null;Lt(e),$t();const i=at(r,e,0,[e.props,a]);if(Ht(),vt(),Zi(i)){if(i.then(vt,vt),t)return i.then(o=>{ei(e,o,t)}).catch(o=>{Qn(o,e,0)});e.asyncDep=i}else ei(e,i,t)}else qo(e,t)}function ei(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=wo(t)),qo(e,n)}let ti;function qo(e,t,n){const r=e.type;if(!e.render){if(!t&&ti&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=ti(a,c)}}e.render=r.render||Oe}Lt(e),$t(),nf(e),Ht(),vt()}function Nf(e){return new Proxy(e.attrs,{get(t,n){return we(e,"get","$attrs"),t[n]}})}function Mf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Nf(e))},slots:e.slots,emit:e.emit,expose:t}}function va(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(wo(go(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in jn)return jn[n](e)}}))}function Ff(e){return B(e)&&e.displayName||e.name}function Lf(e){return B(e)&&"__vccOpts"in e}const oe=(e,t)=>Sl(e,t,hn);function tr(e,t,n){const r=arguments.length;return r===2?fe(t)&&!H(t)?Ir(t)?Ce(e,null,[t]):Ce(e,t):Ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),Ce(e,t,n))}const zf="3.2.31",jf="http://www.w3.org/2000/svg",dt=typeof document!="undefined"?document:null,ni=dt&&dt.createElement("template"),Df={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?dt.createElementNS(jf,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ni.innerHTML=r?`<svg>${e}</svg>`:e;const s=ni.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function $f(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Hf(e,t,n){const r=e.style,a=ce(n);if(n&&!a){for(const i in n)Mr(r,i,n[i]);if(t&&!ce(t))for(const i in t)n[i]==null&&Mr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ri=/\s*!important$/;function Mr(e,t,n){if(H(n))n.forEach(r=>Mr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Uf(e,t);ri.test(n)?e.setProperty(Dt(r),n.replace(ri,""),"important"):e[r]=n}}const ai=["Webkit","Moz","ms"],dr={};function Uf(e,t){const n=dr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return dr[t]=r;r=Xn(r);for(let a=0;a<ai.length;a++){const i=ai[a]+r;if(i in e)return dr[t]=i}return t}const ii="http://www.w3.org/1999/xlink";function Bf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ii,t.slice(6,t.length)):e.setAttributeNS(ii,t,n);else{const i=Ds(t);n==null||i&&!Gi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Wf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=Gi(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Dn=Date.now,Vo=!1;if(typeof window!="undefined"){Dn()>document.createEvent("Event").timeStamp&&(Dn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Vo=!!(e&&Number(e[1])<=53)}let Fr=0;const Yf=Promise.resolve(),Kf=()=>{Fr=0},qf=()=>Fr||(Yf.then(Kf),Fr=Dn());function Ot(e,t,n,r){e.addEventListener(t,n,r)}function Vf(e,t,n,r){e.removeEventListener(t,n,r)}function Xf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Gf(t);if(r){const c=i[t]=Qf(r,a);Ot(e,s,c,l)}else o&&(Vf(e,s,o,l),i[t]=void 0)}}const oi=/(?:Once|Passive|Capture)$/;function Gf(e){let t;if(oi.test(e)){t={};let n;for(;n=e.match(oi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Dt(e.slice(2)),t]}function Qf(e,t){const n=r=>{const a=r.timeStamp||Dn();(Vo||a>=n.attached-1)&&Se(Jf(r,n.value),t,5,[r])};return n.value=e,n.attached=qf(),n}function Jf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const si=/^on[a-z]/,Zf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?$f(e,r,a):t==="style"?Hf(e,n,r):Kn(t)?ea(t)||Xf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ec(e,t,r,a))?Wf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Bf(e,t,r,a))};function ec(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&si.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||si.test(t)&&ce(n)?!1:t in e}const li=e=>{const t=e.props["onUpdate:modelValue"];return H(t)?n=>Pn(t,n):t};function tc(e){e.target.composing=!0}function fi(e){const t=e.target;t.composing&&(t.composing=!1,nc(t,"input"))}function nc(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const lm={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=li(a);const i=r||a.props&&a.props.type==="number";Ot(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n?s=s.trim():i&&(s=wr(s)),e._assign(s)}),n&&Ot(e,"change",()=>{e.value=e.value.trim()}),t||(Ot(e,"compositionstart",tc),Ot(e,"compositionend",fi),Ot(e,"change",fi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=li(i),e.composing||document.activeElement===e&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&wr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},rc=pe({patchProp:Zf},Df);let ci;function ac(){return ci||(ci=pf(rc))}const fm=(...e)=>{const t=ac().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=ic(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function ic(e){return ce(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xo=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ut=e=>Xo?Symbol(e):"_vr_"+e,oc=Ut("rvlm"),ui=Ut("rvd"),ba=Ut("r"),Go=Ut("rl"),Lr=Ut("rvl"),St=typeof window!="undefined";function sc(e){return e.__esModule||Xo&&e[Symbol.toStringTag]==="Module"}const J=Object.assign;function mr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const nn=()=>{},lc=/\/$/,fc=e=>e.replace(lc,"");function hr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=mc(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function cc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function di(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function uc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&zt(t.matched[r],n.matched[a])&&Qo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function zt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!dc(e[n],t[n]))return!1;return!0}function dc(e,t){return Array.isArray(e)?mi(e,t):Array.isArray(t)?mi(t,e):e===t}function mi(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function mc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var pn;(function(e){e.pop="pop",e.push="push"})(pn||(pn={}));var rn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(rn||(rn={}));function hc(e){if(!e)if(St){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),fc(e)}const pc=/^[^#]+#/;function gc(e,t){return e.replace(pc,"#")+t}function vc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const nr=()=>({left:window.pageXOffset,top:window.pageYOffset});function bc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=vc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function hi(e,t){return(history.state?history.state.position-t:-1)+e}const zr=new Map;function yc(e,t){zr.set(e,t)}function wc(e){const t=zr.get(e);return zr.delete(e),t}let xc=()=>location.protocol+"//"+location.host;function Jo(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),di(l,"")}return di(n,e)+r+a}function _c(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const v=Jo(e,location),E=n.value,M=t.value;let O=0;if(h){if(n.value=v,t.value=h,o&&o===E){o=null;return}O=M?h.position-M.position:0}else r(v);a.forEach(g=>{g(n.value,E,{delta:O,type:pn.pop,direction:O?O>0?rn.forward:rn.back:rn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const v=()=>{const E=a.indexOf(h);E>-1&&a.splice(E,1)};return i.push(v),v}function f(){const{history:h}=window;!h.state||h.replaceState(J({},h.state,{scroll:nr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function pi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?nr():null}}function Ac(e){const{history:t,location:n}=window,r={value:Jo(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:xc()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(v){console.error(v),n[f?"replace":"assign"](h)}}function o(l,c){const f=J({},t.state,pi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=J({},a.value,t.state,{forward:l,scroll:nr()});i(f.current,f,!0);const d=J({},pi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function cm(e){e=hc(e);const t=Ac(e),n=_c(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=J({location:"",base:e,go:r,createHref:gc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function kc(e){return typeof e=="string"||e&&typeof e=="object"}function Zo(e){return typeof e=="string"||typeof e=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},es=Ut("nf");var gi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(gi||(gi={}));function jt(e,t){return J(new Error,{type:e,[es]:!0},t)}function Je(e,t){return e instanceof Error&&es in e&&(t==null||!!(e.type&t))}const vi="[^/]+?",Ec={sensitive:!1,strict:!1,start:!0,end:!0},Cc=/[.+*?^${}()[\]/\\]/g;function Pc(e,t){const n=J({},Ec,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Cc,"\\$&"),v+=40;else if(h.type===1){const{value:E,repeatable:M,optional:O,regexp:g}=h;i.push({name:E,repeatable:M,optional:O});const _=g||vi;if(_!==vi){v+=10;try{new RegExp(`(${_})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${E}" (${_}): `+D.message)}}let N=M?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(N=O&&c.length<2?`(?:/${N})`:"/"+N),O&&(N+="?"),a+=N,v+=20,O&&(v+=-8),M&&(v+=-20),_===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",E=i[h-1];d[E.name]=v&&E.repeatable?v.split("/"):v}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:E,repeatable:M,optional:O}=v,g=E in c?c[E]:"";if(Array.isArray(g)&&!M)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(g)?g.join("/"):g;if(!_)if(O)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);f+=_}}return f}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Oc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Sc(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Oc(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const Rc={type:0,value:""},Tc=/[a-zA-Z0-9_]/;function Ic(e){if(!e)return[[]];if(e==="/")return[[Rc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${c}": ${v}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Tc.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function Nc(e,t,n){const r=Pc(Ic(e.path),n),a=J(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Mc(e,t){const n=[],r=new Map;t=yi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const v=!h,E=Lc(f);E.aliasOf=h&&h.record;const M=yi(t,f),O=[E];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of N)O.push(J({},E,{components:h?h.record.components:E.components,path:D,aliasOf:h?h.record:E}))}let g,_;for(const N of O){const{path:D}=N;if(d&&D[0]!=="/"){const Y=d.record.path,ne=Y[Y.length-1]==="/"?"":"/";N.path=d.record.path+(D&&ne+D)}if(g=Nc(N,d,M),h?h.alias.push(g):(_=_||g,_!==g&&_.alias.push(g),v&&f.name&&!bi(g)&&o(f.name)),"children"in E){const Y=E.children;for(let ne=0;ne<Y.length;ne++)i(Y[ne],g,h&&h.children[ne])}h=h||g,l(g)}return _?()=>{o(_)}:nn}function o(f){if(Zo(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Sc(f,n[d])>=0&&(f.record.path!==n[d].record.path||!ts(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!bi(f)&&r.set(f.record.name,f)}function c(f,d){let h,v={},E,M;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw jt(1,{location:f});M=h.record.name,v=J(Fc(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),E=h.stringify(v)}else if("path"in f)E=f.path,h=n.find(_=>_.re.test(E)),h&&(v=h.parse(E),M=h.record.name);else{if(h=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!h)throw jt(1,{location:f,currentLocation:d});M=h.record.name,v=J({},d.params,f.params),E=h.stringify(v)}const O=[];let g=h;for(;g;)O.unshift(g.record),g=g.parent;return{name:M,path:E,params:v,matched:O,meta:jc(O)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Fc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Lc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:zc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function zc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function bi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function jc(e){return e.reduce((t,n)=>J(t,n.meta),{})}function yi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ts(e,t){return t.children.some(n=>n===e||ts(e,n))}const ns=/#/g,Dc=/&/g,$c=/\//g,Hc=/=/g,Uc=/\?/g,rs=/\+/g,Bc=/%5B/g,Wc=/%5D/g,as=/%5E/g,Yc=/%60/g,is=/%7B/g,Kc=/%7C/g,os=/%7D/g,qc=/%20/g;function ya(e){return encodeURI(""+e).replace(Kc,"|").replace(Bc,"[").replace(Wc,"]")}function Vc(e){return ya(e).replace(is,"{").replace(os,"}").replace(as,"^")}function jr(e){return ya(e).replace(rs,"%2B").replace(qc,"+").replace(ns,"%23").replace(Dc,"%26").replace(Yc,"`").replace(is,"{").replace(os,"}").replace(as,"^")}function Xc(e){return jr(e).replace(Hc,"%3D")}function Gc(e){return ya(e).replace(ns,"%23").replace(Uc,"%3F")}function Qc(e){return e==null?"":Gc(e).replace($c,"%2F")}function $n(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Jc(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(rs," "),o=i.indexOf("="),s=$n(o<0?i:i.slice(0,o)),l=o<0?null:$n(i.slice(o+1));if(s in t){let c=t[s];Array.isArray(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function wi(e){let t="";for(let n in e){const r=e[n];if(n=Xc(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&jr(i)):[r&&jr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Zc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function Kt(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function nt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(jt(4,{from:n,to:t})):d instanceof Error?s(d):kc(d)?s(jt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function pr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(eu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(nt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=sc(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&nt(h,n,r,i,o)()}))}}return a}function eu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function xi(e){const t=it(ba),n=it(Go),r=oe(()=>t.resolve(Qt(e.to))),a=oe(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(zt.bind(null,f));if(h>-1)return h;const v=_i(l[c-2]);return c>1&&_i(f)===v&&d[d.length-1].path!==v?d.findIndex(zt.bind(null,l[c-2])):h}),i=oe(()=>a.value>-1&&au(n.params,r.value.params)),o=oe(()=>a.value>-1&&a.value===n.matched.length-1&&Qo(n.params,r.value.params));function s(l={}){return ru(l)?t[Qt(e.replace)?"replace":"push"](Qt(e.to)).catch(nn):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const tu=bn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xi,setup(e,{slots:t}){const n=vn(xi(e)),{options:r}=it(ba),a=oe(()=>({[Ai(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ai(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:tr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),nu=tu;function ru(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function au(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function _i(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ai=(e,t,n)=>e!=null?e:t!=null?t:n,iu=bn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=it(Lr),a=oe(()=>e.route||r.value),i=it(ui,0),o=oe(()=>a.value.matched[i]);On(ui,i+1),On(oc,o),On(Lr,a);const s=kl();return en(()=>[s.value,o.value,e.name],([l,c,f],[d,h,v])=>{c&&(c.instances[f]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!zt(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=a.value,c=o.value,f=c&&c.components[e.name],d=e.name;if(!f)return ki(n.default,{Component:f,route:l});const h=c.props[e.name],v=h?h===!0?l.params:typeof h=="function"?h(l):h:null,M=tr(f,J({},v,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(c.instances[d]=null)},ref:s}));return ki(n.default,{Component:M,route:l})||M}}});function ki(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ou=iu;function um(e){const t=Mc(e.routes,e),n=e.parseQuery||Jc,r=e.stringifyQuery||wi,a=e.history,i=Kt(),o=Kt(),s=Kt(),l=El(Qe);let c=Qe;St&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=mr.bind(null,b=>""+b),d=mr.bind(null,Qc),h=mr.bind(null,$n);function v(b,I){let P,F;return Zo(b)?(P=t.getRecordMatcher(b),F=I):F=b,t.addRoute(F,P)}function E(b){const I=t.getRecordMatcher(b);I&&t.removeRoute(I)}function M(){return t.getRoutes().map(b=>b.record)}function O(b){return!!t.getRecordMatcher(b)}function g(b,I){if(I=J({},I||l.value),typeof b=="string"){const U=hr(n,b,I.path),u=t.resolve({path:U.path},I),m=a.createHref(U.fullPath);return J(U,u,{params:h(u.params),hash:$n(U.hash),redirectedFrom:void 0,href:m})}let P;if("path"in b)P=J({},b,{path:hr(n,b.path,I.path).path});else{const U=J({},b.params);for(const u in U)U[u]==null&&delete U[u];P=J({},b,{params:d(b.params)}),I.params=d(I.params)}const F=t.resolve(P,I),G=b.hash||"";F.params=f(h(F.params));const te=cc(r,J({},b,{hash:Vc(G),path:F.path})),W=a.createHref(te);return J({fullPath:te,hash:G,query:r===wi?Zc(b.query):b.query||{}},F,{redirectedFrom:void 0,href:W})}function _(b){return typeof b=="string"?hr(n,b,l.value.path):J({},b)}function N(b,I){if(c!==b)return jt(8,{from:I,to:b})}function D(b){return se(b)}function Y(b){return D(J(_(b),{replace:!0}))}function ne(b){const I=b.matched[b.matched.length-1];if(I&&I.redirect){const{redirect:P}=I;let F=typeof P=="function"?P(b):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=_(F):{path:F},F.params={}),J({query:b.query,hash:b.hash,params:b.params},F)}}function se(b,I){const P=c=g(b),F=l.value,G=b.state,te=b.force,W=b.replace===!0,U=ne(P);if(U)return se(J(_(U),{state:G,force:te,replace:W}),I||P);const u=P;u.redirectedFrom=I;let m;return!te&&uc(r,F,P)&&(m=jt(16,{to:u,from:F}),At(F,F,!0,!1)),(m?Promise.resolve(m):ue(u,F)).catch(p=>Je(p)?Je(p,2)?p:ve(p):ee(p,u,F)).then(p=>{if(p){if(Je(p,2))return se(J(_(p.to),{state:G,force:te,replace:W}),I||u)}else p=ze(u,F,!0,W,G);return Xe(u,F,p),p})}function _e(b,I){const P=N(b,I);return P?Promise.reject(P):Promise.resolve()}function ue(b,I){let P;const[F,G,te]=su(b,I);P=pr(F.reverse(),"beforeRouteLeave",b,I);for(const U of F)U.leaveGuards.forEach(u=>{P.push(nt(u,b,I))});const W=_e.bind(null,b,I);return P.push(W),Et(P).then(()=>{P=[];for(const U of i.list())P.push(nt(U,b,I));return P.push(W),Et(P)}).then(()=>{P=pr(G,"beforeRouteUpdate",b,I);for(const U of G)U.updateGuards.forEach(u=>{P.push(nt(u,b,I))});return P.push(W),Et(P)}).then(()=>{P=[];for(const U of b.matched)if(U.beforeEnter&&!I.matched.includes(U))if(Array.isArray(U.beforeEnter))for(const u of U.beforeEnter)P.push(nt(u,b,I));else P.push(nt(U.beforeEnter,b,I));return P.push(W),Et(P)}).then(()=>(b.matched.forEach(U=>U.enterCallbacks={}),P=pr(te,"beforeRouteEnter",b,I),P.push(W),Et(P))).then(()=>{P=[];for(const U of o.list())P.push(nt(U,b,I));return P.push(W),Et(P)}).catch(U=>Je(U,8)?U:Promise.reject(U))}function Xe(b,I,P){for(const F of s.list())F(b,I,P)}function ze(b,I,P,F,G){const te=N(b,I);if(te)return te;const W=I===Qe,U=St?history.state:{};P&&(F||W?a.replace(b.fullPath,J({scroll:W&&U&&U.scroll},G)):a.push(b.fullPath,G)),l.value=b,At(b,I,P,W),ve()}let je;function wt(){je=a.listen((b,I,P)=>{const F=g(b),G=ne(F);if(G){se(J(G,{replace:!0}),F).catch(nn);return}c=F;const te=l.value;St&&yc(hi(te.fullPath,P.delta),nr()),ue(F,te).catch(W=>Je(W,12)?W:Je(W,2)?(se(W.to,F).then(U=>{Je(U,20)&&!P.delta&&P.type===pn.pop&&a.go(-1,!1)}).catch(nn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),ee(W,F,te))).then(W=>{W=W||ze(F,te,!1),W&&(P.delta?a.go(-P.delta,!1):P.type===pn.pop&&Je(W,20)&&a.go(-1,!1)),Xe(F,te,W)}).catch(nn)})}let xt=Kt(),_t=Kt(),le;function ee(b,I,P){ve(b);const F=_t.list();return F.length?F.forEach(G=>G(b,I,P)):console.error(b),Promise.reject(b)}function X(){return le&&l.value!==Qe?Promise.resolve():new Promise((b,I)=>{xt.add([b,I])})}function ve(b){return le||(le=!b,wt(),xt.list().forEach(([I,P])=>b?P(b):I()),xt.reset()),b}function At(b,I,P,F){const{scrollBehavior:G}=e;if(!St||!G)return Promise.resolve();const te=!P&&wc(hi(b.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return _o().then(()=>G(b,I,te)).then(W=>W&&bc(W)).catch(W=>ee(W,b,I))}const De=b=>a.go(b);let Re;const Ae=new Set;return{currentRoute:l,addRoute:v,removeRoute:E,hasRoute:O,getRoutes:M,resolve:g,options:e,push:D,replace:Y,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:_t.add,isReady:X,install(b){const I=this;b.component("RouterLink",nu),b.component("RouterView",ou),b.config.globalProperties.$router=I,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(l)}),St&&!Re&&l.value===Qe&&(Re=!0,D(a.location).catch(G=>{}));const P={};for(const G in Qe)P[G]=oe(()=>l.value[G]);b.provide(ba,I),b.provide(Go,vn(P)),b.provide(Lr,l);const F=b.unmount;Ae.add(b),b.unmount=function(){Ae.delete(b),Ae.size<1&&(c=Qe,je&&je(),l.value=Qe,Re=!1,le=!1),F()}}}}function Et(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function su(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>zt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>zt(c,l))||a.push(l))}return[n,r,a]}/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ei(Object(n),!0).forEach(function(r){cu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ei(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function lu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ci(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fu(e,t,n){return t&&Ci(e.prototype,t),n&&Ci(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function cu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wa(e,t){return du(e)||hu(e,t)||ss(e,t)||gu()}function rr(e){return uu(e)||mu(e)||ss(e)||pu()}function uu(e){if(Array.isArray(e))return Dr(e)}function du(e){if(Array.isArray(e))return e}function mu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hu(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ss(e,t){if(!!e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Pi=function(){},xa={},ls={},fs=null,cs={mark:Pi,measure:Pi};try{typeof window!="undefined"&&(xa=window),typeof document!="undefined"&&(ls=document),typeof MutationObserver!="undefined"&&(fs=MutationObserver),typeof performance!="undefined"&&(cs=performance)}catch{}var vu=xa.navigator||{},Oi=vu.userAgent,Si=Oi===void 0?"":Oi,st=xa,ae=ls,Ri=fs,En=cs;st.document;var Ve=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",us=~Si.indexOf("MSIE")||~Si.indexOf("Trident/"),We="___FONT_AWESOME___",$r=16,ds="fa",ms="svg-inline--fa",bt="data-fa-i2svg",Hr="data-fa-pseudo-element",bu="data-fa-pseudo-element-pending",_a="data-prefix",Aa="data-icon",Ti="fontawesome-i2svg",yu="async",wu=["HTML","HEAD","STYLE","SCRIPT"],hs=function(){try{return!0}catch{return!1}}(),ka={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Un={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ps={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},xu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},_u=/fa[srltdbk\-\ ]/,gs="fa-layers-text",Au=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ku={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},vs=[1,2,3,4,5,6,7,8,9,10],Eu=vs.concat([11,12,13,14,15,16,17,18,19,20]),Cu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pu=[].concat(rr(Object.keys(Un)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ht.GROUP,ht.SWAP_OPACITY,ht.PRIMARY,ht.SECONDARY]).concat(vs.map(function(e){return"".concat(e,"x")})).concat(Eu.map(function(e){return"w-".concat(e)})),bs=st.FontAwesomeConfig||{};function Ou(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Su(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var Ru=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ru.forEach(function(e){var t=wa(e,2),n=t[0],r=t[1],a=Su(Ou(n));a!=null&&(bs[r]=a)})}var Tu={familyPrefix:ds,styleDefault:"solid",replacementClass:ms,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},an=R(R({},Tu),bs);an.autoReplaceSvg||(an.observeMutations=!1);var j={};Object.keys(an).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){an[e]=n,Rn.forEach(function(r){return r(j)})},get:function(){return an[e]}})});st.FontAwesomeConfig=j;var Rn=[];function Iu(e){return Rn.push(e),function(){Rn.splice(Rn.indexOf(e),1)}}var Ze=$r,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nu(e){if(!(!e||!Ve)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ae.head.insertBefore(t,r),e}}var Mu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){for(var e=12,t="";e-- >0;)t+=Mu[Math.random()*62|0];return t}function Bt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ea(e){return e.classList?Bt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ys(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ys(e[n]),'" ')},"").trim()}function ar(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ca(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function Lu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function zu(e){var t=e.transform,n=e.width,r=n===void 0?$r:n,a=e.height,i=a===void 0?$r:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&us?l+="translate(".concat(t.x/Ze-r/2,"em, ").concat(t.y/Ze-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):l+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),l+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ju=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ws(){var e=ds,t=ms,n=j.familyPrefix,r=j.replacementClass,a=ju;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ii=!1;function gr(){j.autoAddCss&&!Ii&&(Nu(ws()),Ii=!0)}var Du={mixout:function(){return{dom:{css:ws,insertCss:gr}}},hooks:function(){return{beforeDOMElementCreation:function(){gr()},beforeI2svg:function(){gr()}}}},Ye=st||{};Ye[We]||(Ye[We]={});Ye[We].styles||(Ye[We].styles={});Ye[We].hooks||(Ye[We].hooks={});Ye[We].shims||(Ye[We].shims=[]);var Pe=Ye[We],xs=[],$u=function e(){ae.removeEventListener("DOMContentLoaded",e),Bn=1,xs.map(function(t){return t()})},Bn=!1;Ve&&(Bn=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),Bn||ae.addEventListener("DOMContentLoaded",$u));function Hu(e){!Ve||(Bn?setTimeout(e,0):xs.push(e))}function yn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ys(e):"<".concat(t," ").concat(Fu(r),">").concat(i.map(yn).join(""),"</").concat(t,">")}function Ni(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Uu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},vr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Uu(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Bu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ur(e){var t=Bu(e);return t.length===1?t[0].toString(16):null}function Wu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Mi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Br(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Mi(t);typeof Pe.hooks.addPack=="function"&&!a?Pe.hooks.addPack(e,Mi(t)):Pe.styles[e]=R(R({},Pe.styles[e]||{}),i),e==="fas"&&Br("fa",t)}var on=Pe.styles,Yu=Pe.shims,Ku=Object.values(ps),Pa=null,_s={},As={},ks={},Es={},Cs={},qu=Object.keys(ka);function Vu(e){return~Pu.indexOf(e)}function Xu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Vu(a)?a:null}var Ps=function(){var t=function(i){return vr(on,function(o,s,l){return o[l]=vr(s,i,{}),o},{})};_s=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),As=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Cs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in on||j.autoFetchSvg,r=vr(Yu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ks=r.names,Es=r.unicodes,Pa=ir(j.styleDefault)};Iu(function(e){Pa=ir(e.styleDefault)});Ps();function Oa(e,t){return(_s[e]||{})[t]}function Gu(e,t){return(As[e]||{})[t]}function Rt(e,t){return(Cs[e]||{})[t]}function Os(e){return ks[e]||{prefix:null,iconName:null}}function Qu(e){var t=Es[e],n=Oa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function lt(){return Pa}var Sa=function(){return{prefix:null,iconName:null,rest:[]}};function ir(e){var t=ka[e],n=Un[e]||Un[t],r=e in Pe.styles?e:null;return n||r||null}function or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Xu(j.familyPrefix,s);if(on[s]?(s=Ku.includes(s)?xu[s]:s,a=s,o.prefix=s):qu.indexOf(s)>-1?(a=s,o.prefix=ir(s)):l?o.iconName=l:s!==j.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?Os(o.iconName):{},f=Rt(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||f||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!on.far&&on.fas&&!j.autoFetchSvg&&(o.prefix="fas")}return o},Sa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=lt()||"fas"),i}var Ju=function(){function e(){lu(this,e),this.definitions={}}return fu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),Br(s,o[s]);var l=ps[s];l&&Br(l,o[s]),Ps()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),Fi=[],Tt={},Ft={},Zu=Object.keys(Ft);function ed(e,t){var n=t.mixoutsTo;return Fi=e,Tt={},Object.keys(Ft).forEach(function(r){Zu.indexOf(r)===-1&&delete Ft[r]}),Fi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Hn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Tt[o]||(Tt[o]=[]),Tt[o].push(i[o])})}r.provides&&r.provides(Ft)}),n}function Wr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Tt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Tt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[e]?Ft[e].apply(null,t):void 0}function Yr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||lt();if(!!t)return t=Rt(n,t)||t,Ni(Ss.definitions,n,t)||Ni(Pe.styles,n,t)}var Ss=new Ju,td=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,yt("noAuto")},nd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ve?(yt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,Hu(function(){ad({autoReplaceSvgRoot:n}),yt("watch",t)})}},rd={icon:function(t){if(t===null)return null;if(Hn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Rt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ir(t[0]);return{prefix:r,iconName:Rt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.familyPrefix,"-"))>-1||t.match(_u))){var a=or(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||lt(),iconName:Rt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=lt();return{prefix:i,iconName:Rt(i,t)||t}}}},xe={noAuto:td,config:j,dom:nd,parse:rd,library:Ss,findIconDefinition:Yr,toHtml:yn},ad=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(Pe.styles).length>0||j.autoFetchSvg)&&Ve&&j.autoReplaceSvg&&xe.dom.i2svg({node:r})};function sr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return yn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ve){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function id(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ca(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ar(R(R({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function od(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(j.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function Ra(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,v=h===void 0?!1:h,E=r.found?r:n,M=E.width,O=E.height,g=a==="fak",_=[j.replacementClass,i?"".concat(j.familyPrefix,"-").concat(i):""].filter(function(ue){return d.classes.indexOf(ue)===-1}).filter(function(ue){return ue!==""||!!ue}).concat(d.classes).join(" "),N={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(O)})},D=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(M/O*16*.0625,"em")}:{};v&&(N.attributes[bt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(f||gn())},children:[l]}),delete N.attributes.title);var Y=R(R({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R(R({},D),d.styles)}),ne=r.found&&n.found?Ke("generateAbstractMask",Y)||{children:[],attributes:{}}:Ke("generateAbstractIcon",Y)||{children:[],attributes:{}},se=ne.children,_e=ne.attributes;return Y.children=se,Y.attributes=_e,s?od(Y):id(Y)}function Li(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[bt]="");var f=R({},o.styles);Ca(a)&&(f.transform=zu({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=ar(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function sd(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ar(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var br=Pe.styles;function Kr(e){var t=e[0],n=e[1],r=e.slice(4),a=wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(ht.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(ht.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ld={found:!1,width:512,height:512};function fd(e,t){!hs&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qr(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=lt()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=Os(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&br[t]&&br[t][e]){var o=br[t][e];return r(Kr(o))}fd(e,t),r(R(R({},ld),{},{icon:j.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var zi=function(){},Vr=j.measurePerformance&&En&&En.mark&&En.measure?En:{mark:zi,measure:zi},Xt='FA "6.0.0"',cd=function(t){return Vr.mark("".concat(Xt," ").concat(t," begins")),function(){return Rs(t)}},Rs=function(t){Vr.mark("".concat(Xt," ").concat(t," ends")),Vr.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},Ta={begin:cd,end:Rs},Tn=function(){};function ji(e){var t=e.getAttribute?e.getAttribute(bt):null;return typeof t=="string"}function ud(e){var t=e.getAttribute?e.getAttribute(_a):null,n=e.getAttribute?e.getAttribute(Aa):null;return t&&n}function dd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function md(){if(j.autoReplaceSvg===!0)return In.replace;var e=In[j.autoReplaceSvg];return e||In.replace}function hd(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function pd(e){return ae.createElement(e)}function Ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?hd:pd:n;if(typeof e=="string")return ae.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ts(o,{ceFn:r}))}),a}function gd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var In={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ts(a),n)}),n.getAttribute(bt)===null&&j.keepOriginalSource){var r=ae.createComment(gd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ea(n).indexOf(j.replacementClass))return In.replace(t);var a=new RegExp("".concat(j.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===j.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return yn(s)}).join(`
`);n.setAttribute(bt,""),n.innerHTML=o}};function Di(e){e()}function Is(e,t){var n=typeof t=="function"?t:Tn;if(e.length===0)n();else{var r=Di;j.mutateApproach===yu&&(r=st.requestAnimationFrame||Di),r(function(){var a=md(),i=Ta.begin("mutate");e.map(a),i(),n()})}}var Ia=!1;function Ns(){Ia=!0}function Xr(){Ia=!1}var Wn=null;function $i(e){if(!!Ri&&!!j.observeMutations){var t=e.treeCallback,n=t===void 0?Tn:t,r=e.nodeCallback,a=r===void 0?Tn:r,i=e.pseudoElementsCallback,o=i===void 0?Tn:i,s=e.observeMutationsRoot,l=s===void 0?ae:s;Wn=new Ri(function(c){if(!Ia){var f=lt();Bt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ji(d.addedNodes[0])&&(j.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&j.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ji(d.target)&&~Cu.indexOf(d.attributeName))if(d.attributeName==="class"&&ud(d.target)){var h=or(Ea(d.target)),v=h.prefix,E=h.iconName;d.target.setAttribute(_a,v||f),E&&d.target.setAttribute(Aa,E)}else dd(d.target)&&a(d.target)})}}),Ve&&Wn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vd(){!Wn||Wn.disconnect()}function bd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function yd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=or(Ea(e));return a.prefix||(a.prefix=lt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Gu(a.prefix,e.innerText)||Oa(a.prefix,Ur(e.innerText))),a}function wd(e){var t=Bt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||gn()):(t["aria-hidden"]="true",t.focusable="false")),t}function xd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yd(e),r=n.iconName,a=n.prefix,i=n.rest,o=wd(e),s=Wr("parseNodeAttributes",{},e),l=t.styleParser?bd(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var _d=Pe.styles;function Ms(e){var t=j.autoReplaceSvg==="nest"?Hi(e,{styleParser:!1}):Hi(e);return~t.extra.classes.indexOf(gs)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}function Ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ve)return Promise.resolve();var n=ae.documentElement.classList,r=function(d){return n.add("".concat(Ti,"-").concat(d))},a=function(d){return n.remove("".concat(Ti,"-").concat(d))},i=j.autoFetchSvg?Object.keys(ka):Object.keys(_d),o=[".".concat(gs,":not([").concat(bt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(bt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Bt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ta.begin("onTree"),c=s.reduce(function(f,d){try{var h=Ms(d);h&&f.push(h)}catch(v){hs||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){Is(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function Ad(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ms(e).then(function(n){n&&Is([n],t)})}function kd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Yr(a||{})),e(r,R(R({},n),{},{mask:a}))}}var Ed=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,v=n.titleId,E=v===void 0?null:v,M=n.classes,O=M===void 0?[]:M,g=n.attributes,_=g===void 0?{}:g,N=n.styles,D=N===void 0?{}:N;if(!!t){var Y=t.prefix,ne=t.iconName,se=t.icon;return sr(R({type:"icon"},t),function(){return yt("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(h?_["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(E||gn()):(_["aria-hidden"]="true",_.focusable="false")),Ra({icons:{main:Kr(se),mask:l?Kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ne,transform:R(R({},Fe),a),symbol:o,title:h,maskId:f,titleId:E,extra:{attributes:_,styles:D,classes:O}})})}},Cd={mixout:function(){return{icon:kd(Ed)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ui,n.nodeCallback=Ad,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ae:r,i=n.callback,o=i===void 0?function(){}:i;return Ui(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(v,E){Promise.all([qr(a,s),f.iconName?qr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var O=wa(M,2),g=O[0],_=O[1];v([n,Ra({icons:{main:g,mask:_},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ar(s);l.length>0&&(a.style=l);var c;return Ca(o)&&(c=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Pd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return sr({type:"layer"},function(){yt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(j.familyPrefix,"-layers")].concat(rr(i)).join(" ")},children:o}]})}}}},Od={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return sr({type:"counter",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),sd({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(j.familyPrefix,"-layers-counter")].concat(rr(s))}})})}}}},Sd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,v=h===void 0?{}:h;return sr({type:"text",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),Li({content:n,transform:R(R({},Fe),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(j.familyPrefix,"-layers-text")].concat(rr(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(us){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return j.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Li({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Rd=new RegExp('"',"ug"),Bi=[1105920,1112319];function Td(e){var t=e.replace(Rd,""),n=Wu(t,0),r=n>=Bi[0]&&n<=Bi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ur(a?t[0]:t),isSecondary:r||a}}function Wi(e,t){var n="".concat(bu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Bt(e.children),o=i.filter(function(ne){return ne.getAttribute(Hr)===t})[0],s=st.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Au),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Un[l[2].toLowerCase()]:ku[c],v=Td(d),E=v.value,M=v.isSecondary,O=l[0].startsWith("FontAwesome"),g=Oa(h,E),_=g;if(O){var N=Qu(E);N.iconName&&N.prefix&&(g=N.iconName,h=N.prefix)}if(g&&!M&&(!o||o.getAttribute(_a)!==h||o.getAttribute(Aa)!==_)){e.setAttribute(n,_),o&&e.removeChild(o);var D=xd(),Y=D.extra;Y.attributes[Hr]=t,qr(g,h).then(function(ne){var se=Ra(R(R({},D),{},{icons:{main:ne,mask:Sa()},prefix:h,iconName:_,extra:Y,watchable:!0})),_e=ae.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=se.map(function(ue){return yn(ue)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Id(e){return Promise.all([Wi(e,"::before"),Wi(e,"::after")])}function Nd(e){return e.parentNode!==document.head&&!~wu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yi(e){if(!!Ve)return new Promise(function(t,n){var r=Bt(e.querySelectorAll("*")).filter(Nd).map(Id),a=Ta.begin("searchPseudoElements");Ns(),Promise.all(r).then(function(){a(),Xr(),t()}).catch(function(){a(),Xr(),n()})})}var Md={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ae:r;j.searchPseudoElements&&Yi(a)}}},Ki=!1,Fd={mixout:function(){return{dom:{unwatch:function(){Ns(),Ki=!0}}}},hooks:function(){return{bootstrap:function(){$i(Wr("mutationObserverCallbacks",{}))},noAuto:function(){vd()},watch:function(n){var r=n.observeMutationsRoot;Ki?Xr():$i(Wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},qi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Ld={mixout:function(){return{parse:{transform:function(n){return qi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=qi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:h};return{tag:"g",attributes:R({},v.outer),children:[{tag:"g",attributes:R({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),v.path)}]}]}}}},yr={x:0,y:0,width:"100%",height:"100%"};function Vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function zd(e){return e.tag==="g"?e.children:[e]}var jd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?or(a.split(" ").map(function(o){return o.trim()})):Sa();return i.prefix||(i.prefix=lt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,v=Lu({transform:l,containerWidth:d,iconWidth:c}),E={tag:"rect",attributes:R(R({},yr),{},{fill:"white"})},M=f.children?{children:f.children.map(Vi)}:{},O={tag:"g",attributes:R({},v.inner),children:[Vi(R({tag:f.tag,attributes:R(R({},f.attributes),v.path)},M))]},g={tag:"g",attributes:R({},v.outer),children:[O]},_="mask-".concat(s||gn()),N="clip-".concat(s||gn()),D={tag:"mask",attributes:R(R({},yr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,g]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:zd(h)},D]};return r.push(Y,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(_,")")},yr)}),{children:r,attributes:a}}}},Dd={provides:function(t){var n=!1;st.matchMedia&&(n=st.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$d={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Hd=[Du,Cd,Pd,Od,Sd,Md,Fd,Ld,jd,Dd,$d];ed(Hd,{mixoutsTo:xe});xe.noAuto;var Fs=xe.config,dm=xe.library;xe.dom;var Ls=xe.parse;xe.findIconDefinition;xe.toHtml;var Ud=xe.icon;xe.layer;var Bd=xe.text;xe.counter;/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Wd={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"]},mm=Wd,Yd=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Kd(e,t){return t={exports:{}},e(t,t.exports),t.exports}var qd=Kd(function(e){(function(t){var n=function(g,_,N){if(!c(_)||d(_)||h(_)||v(_)||l(_))return _;var D,Y=0,ne=0;if(f(_))for(D=[],ne=_.length;Y<ne;Y++)D.push(n(g,_[Y],N));else{D={};for(var se in _)Object.prototype.hasOwnProperty.call(_,se)&&(D[g(se,N)]=n(g,_[se],N))}return D},r=function(g,_){_=_||{};var N=_.separator||"_",D=_.split||/(?=[A-Z])/;return g.split(D).join(N)},a=function(g){return E(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(_,N){return N?N.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var _=a(g);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(g,_){return r(g,_).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},f=function(g){return s.call(g)=="[object Array]"},d=function(g){return s.call(g)=="[object Date]"},h=function(g){return s.call(g)=="[object RegExp]"},v=function(g){return s.call(g)=="[object Boolean]"},E=function(g){return g=g-0,g===g},M=function(g,_){var N=_&&"process"in _?_.process:_;return typeof N!="function"?g:function(D,Y){return N(D,g,Y)}},O={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,_){return n(M(a,_),g)},decamelizeKeys:function(g,_){return n(M(o,_),g,_)},pascalizeKeys:function(g,_){return n(M(i,_),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=O:t.humps=O})(Yd)}),Vd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xd=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Gr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Gd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=qd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Qd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Na(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Na(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=Qd(f);break;case"style":l.style=Gd(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Xd(n,["class","style"]);return tr(e.tag,Yn({},t,{class:a.class,style:Yn({},a.style,o)},a.attrs,s),r)}var zs=!1;try{zs=!0}catch{}function Jd(){if(!zs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function sn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Gt({},e,t):{}}function Zd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Gt(t,"fa-"+e.size,e.size!==null),Gt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Gt(t,"fa-pull-"+e.pull,e.pull!==null),Gt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Xi(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Vd(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var hm=bn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=oe(function(){return Xi(t.icon)}),i=oe(function(){return sn("classes",Zd(t))}),o=oe(function(){return sn("transform",typeof t.transform=="string"?Ls.transform(t.transform):t.transform)}),s=oe(function(){return sn("mask",Xi(t.mask))}),l=oe(function(){return Ud(a.value,Yn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});en(l,function(f){if(!f)return Jd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=oe(function(){return l.value?Na(l.value.abstract[0],{},r):null});return function(){return c.value}}});bn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Fs.familyPrefix,i=oe(function(){return[a+"-layers"].concat(Gr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return tr("div",{class:i.value},r.default?r.default():[])}}});bn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Fs.familyPrefix,i=oe(function(){return sn("classes",[].concat(Gr(t.counter?[a+"-layers-counter"]:[]),Gr(t.position?[a+"-layers-"+t.position]:[])))}),o=oe(function(){return sn("transform",typeof t.transform=="string"?Ls.transform(t.transform):t.transform)}),s=oe(function(){var c=Bd(t.value.toString(),Yn({},o.value,i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=oe(function(){return Na(s.value,{},r)});return function(){return l.value}}});export{He as F,Yo as a,Ce as b,om as c,nm as d,sm as e,um as f,cm as g,mm as h,fm as i,hm as j,dm as l,Zr as n,im as o,tm as p,am as r,em as t,lm as v,rm as w};
