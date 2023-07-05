import{_ as oe}from"./index-293e4a0d.js";const se=Symbol(),Pt=Object.getPrototypeOf,Ft=new WeakMap,ce=i=>i&&(Ft.has(i)?Ft.get(i):Pt(i)===Object.prototype||Pt(i)===Array.prototype),ue=i=>ce(i)&&i[se]||null,Nt=(i,u=!0)=>{Ft.set(i,u)},At=i=>typeof i=="object"&&i!==null,J=new WeakMap,pt=new WeakSet,ae=(i=Object.is,u=(y,I)=>new Proxy(y,I),l=y=>At(y)&&!pt.has(y)&&(Array.isArray(y)||!(Symbol.iterator in y))&&!(y instanceof WeakMap)&&!(y instanceof WeakSet)&&!(y instanceof Error)&&!(y instanceof Number)&&!(y instanceof Date)&&!(y instanceof String)&&!(y instanceof RegExp)&&!(y instanceof ArrayBuffer),h=y=>{switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:throw y}},p=new WeakMap,d=(y,I,B=h)=>{const L=p.get(y);if((L==null?void 0:L[0])===I)return L[1];const U=Array.isArray(y)?[]:Object.create(Object.getPrototypeOf(y));return Nt(U,!0),p.set(y,[I,U]),Reflect.ownKeys(y).forEach(P=>{if(Object.getOwnPropertyDescriptor(U,P))return;const T=Reflect.get(y,P),G={value:T,enumerable:!0,configurable:!0};if(pt.has(T))Nt(T,!1);else if(T instanceof Promise)delete G.value,G.get=()=>B(T);else if(J.has(T)){const[O,ut]=J.get(T);G.value=d(O,ut(),B)}Object.defineProperty(U,P,G)}),U},f=new WeakMap,s=[1,1],E=y=>{if(!At(y))throw new Error("object required");const I=f.get(y);if(I)return I;let B=s[0];const L=new Set,U=(x,m=++s[0])=>{B!==m&&(B=m,L.forEach(w=>w(x,m)))};let P=s[1];const T=(x=++s[1])=>(P!==x&&!L.size&&(P=x,O.forEach(([m])=>{const w=m[1](x);w>B&&(B=w)})),B),G=x=>(m,w)=>{const D=[...m];D[1]=[x,...D[1]],U(D,w)},O=new Map,ut=(x,m)=>{if(L.size){const w=m[3](G(x));O.set(x,[m,w])}else O.set(x,[m])},at=x=>{var m;const w=O.get(x);w&&(O.delete(x),(m=w[1])==null||m.call(w))},gt=x=>(L.add(x),L.size===1&&O.forEach(([w,D],H)=>{const Y=w[3](G(H));O.set(H,[w,Y])}),()=>{L.delete(x),L.size===0&&O.forEach(([w,D],H)=>{D&&(D(),O.set(H,[w]))})}),k=Array.isArray(y)?[]:Object.create(Object.getPrototypeOf(y)),Q=u(k,{deleteProperty(x,m){const w=Reflect.get(x,m);at(m);const D=Reflect.deleteProperty(x,m);return D&&U(["delete",[m],w]),D},set(x,m,w,D){const H=Reflect.has(x,m),Y=Reflect.get(x,m,D);if(H&&(i(Y,w)||f.has(w)&&i(Y,f.get(w))))return!0;at(m),At(w)&&(w=ue(w)||w);let Z=w;if(w instanceof Promise)w.then($=>{w.status="fulfilled",w.value=$,U(["resolve",[m],$])}).catch($=>{w.status="rejected",w.reason=$,U(["reject",[m],$])});else{!J.has(w)&&l(w)&&(Z=E(w));const $=!pt.has(Z)&&J.get(Z);$&&ut(m,$)}return Reflect.set(x,m,Z,D),U(["set",[m],w,Y]),!0}});f.set(y,Q);const Et=[k,T,d,gt];return J.set(Q,Et),Reflect.ownKeys(y).forEach(x=>{const m=Object.getOwnPropertyDescriptor(y,x);"value"in m&&(Q[x]=y[x],delete m.value,delete m.writable),Object.defineProperty(k,x,m)}),Q})=>[E,J,pt,i,u,l,h,p,d,f,s],[le]=ae();function X(i={}){return le(i)}function rt(i,u,l){const h=J.get(i);let p;const d=[],f=h[3];let s=!1;const y=f(I=>{if(d.push(I),l){u(d.splice(0));return}p||(p=Promise.resolve().then(()=>{p=void 0,s&&u(d.splice(0))}))});return s=!0,()=>{s=!1,y()}}function fe(i,u){const l=J.get(i),[h,p,d]=l;return d(h,p(),u)}var zt={},wt={};wt.byteLength=de;wt.toByteArray=we;wt.fromByteArray=Ee;var z=[],N=[],he=typeof Uint8Array<"u"?Uint8Array:Array,Ut="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var ot=0,pe=Ut.length;ot<pe;++ot)z[ot]=Ut[ot],N[Ut.charCodeAt(ot)]=ot;N["-".charCodeAt(0)]=62;N["_".charCodeAt(0)]=63;function Gt(i){var u=i.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=i.indexOf("=");l===-1&&(l=u);var h=l===u?0:4-l%4;return[l,h]}function de(i){var u=Gt(i),l=u[0],h=u[1];return(l+h)*3/4-h}function ye(i,u,l){return(u+l)*3/4-l}function we(i){var u,l=Gt(i),h=l[0],p=l[1],d=new he(ye(i,h,p)),f=0,s=p>0?h-4:h,E;for(E=0;E<s;E+=4)u=N[i.charCodeAt(E)]<<18|N[i.charCodeAt(E+1)]<<12|N[i.charCodeAt(E+2)]<<6|N[i.charCodeAt(E+3)],d[f++]=u>>16&255,d[f++]=u>>8&255,d[f++]=u&255;return p===2&&(u=N[i.charCodeAt(E)]<<2|N[i.charCodeAt(E+1)]>>4,d[f++]=u&255),p===1&&(u=N[i.charCodeAt(E)]<<10|N[i.charCodeAt(E+1)]<<4|N[i.charCodeAt(E+2)]>>2,d[f++]=u>>8&255,d[f++]=u&255),d}function ge(i){return z[i>>18&63]+z[i>>12&63]+z[i>>6&63]+z[i&63]}function me(i,u,l){for(var h,p=[],d=u;d<l;d+=3)h=(i[d]<<16&16711680)+(i[d+1]<<8&65280)+(i[d+2]&255),p.push(ge(h));return p.join("")}function Ee(i){for(var u,l=i.length,h=l%3,p=[],d=16383,f=0,s=l-h;f<s;f+=d)p.push(me(i,f,f+d>s?s:f+d));return h===1?(u=i[l-1],p.push(z[u>>2]+z[u<<4&63]+"==")):h===2&&(u=(i[l-2]<<8)+i[l-1],p.push(z[u>>10]+z[u>>4&63]+z[u<<2&63]+"=")),p.join("")}var Lt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Lt.read=function(i,u,l,h,p){var d,f,s=p*8-h-1,E=(1<<s)-1,y=E>>1,I=-7,B=l?p-1:0,L=l?-1:1,U=i[u+B];for(B+=L,d=U&(1<<-I)-1,U>>=-I,I+=s;I>0;d=d*256+i[u+B],B+=L,I-=8);for(f=d&(1<<-I)-1,d>>=-I,I+=h;I>0;f=f*256+i[u+B],B+=L,I-=8);if(d===0)d=1-y;else{if(d===E)return f?NaN:(U?-1:1)*(1/0);f=f+Math.pow(2,h),d=d-y}return(U?-1:1)*f*Math.pow(2,d-h)};Lt.write=function(i,u,l,h,p,d){var f,s,E,y=d*8-p-1,I=(1<<y)-1,B=I>>1,L=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,U=h?0:d-1,P=h?1:-1,T=u<0||u===0&&1/u<0?1:0;for(u=Math.abs(u),isNaN(u)||u===1/0?(s=isNaN(u)?1:0,f=I):(f=Math.floor(Math.log(u)/Math.LN2),u*(E=Math.pow(2,-f))<1&&(f--,E*=2),f+B>=1?u+=L/E:u+=L*Math.pow(2,1-B),u*E>=2&&(f++,E/=2),f+B>=I?(s=0,f=I):f+B>=1?(s=(u*E-1)*Math.pow(2,p),f=f+B):(s=u*Math.pow(2,B-1)*Math.pow(2,p),f=0));p>=8;i[l+U]=s&255,U+=P,s/=256,p-=8);for(f=f<<p|s,y+=p;y>0;i[l+U]=f&255,U+=P,f/=256,y-=8);i[l+U-P]|=T*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const u=wt,l=Lt,h=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=s,i.SlowBuffer=ut,i.INSPECT_MAX_BYTES=50;const p=2147483647;i.kMaxLength=p,s.TYPED_ARRAY_SUPPORT=d(),!s.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function d(){try{const r=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(r,t),r.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function f(r){if(r>p)throw new RangeError('The value "'+r+'" is invalid for option "size"');const t=new Uint8Array(r);return Object.setPrototypeOf(t,s.prototype),t}function s(r,t,e){if(typeof r=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return B(r)}return E(r,t,e)}s.poolSize=8192;function E(r,t,e){if(typeof r=="string")return L(r,t);if(ArrayBuffer.isView(r))return P(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(v(r,ArrayBuffer)||r&&v(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(v(r,SharedArrayBuffer)||r&&v(r.buffer,SharedArrayBuffer)))return T(r,t,e);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return s.from(n,t,e);const o=G(r);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return s.from(r[Symbol.toPrimitive]("string"),t,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}s.from=function(r,t,e){return E(r,t,e)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function y(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function I(r,t,e){return y(r),r<=0?f(r):t!==void 0?typeof e=="string"?f(r).fill(t,e):f(r).fill(t):f(r)}s.alloc=function(r,t,e){return I(r,t,e)};function B(r){return y(r),f(r<0?0:O(r)|0)}s.allocUnsafe=function(r){return B(r)},s.allocUnsafeSlow=function(r){return B(r)};function L(r,t){if((typeof t!="string"||t==="")&&(t="utf8"),!s.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const e=at(r,t)|0;let n=f(e);const o=n.write(r,t);return o!==e&&(n=n.slice(0,o)),n}function U(r){const t=r.length<0?0:O(r.length)|0,e=f(t);for(let n=0;n<t;n+=1)e[n]=r[n]&255;return e}function P(r){if(v(r,Uint8Array)){const t=new Uint8Array(r);return T(t.buffer,t.byteOffset,t.byteLength)}return U(r)}function T(r,t,e){if(t<0||r.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<t+(e||0))throw new RangeError('"length" is outside of buffer bounds');let n;return t===void 0&&e===void 0?n=new Uint8Array(r):e===void 0?n=new Uint8Array(r,t):n=new Uint8Array(r,t,e),Object.setPrototypeOf(n,s.prototype),n}function G(r){if(s.isBuffer(r)){const t=O(r.length)|0,e=f(t);return e.length===0||r.copy(e,0,0,t),e}if(r.length!==void 0)return typeof r.length!="number"||Bt(r.length)?f(0):U(r);if(r.type==="Buffer"&&Array.isArray(r.data))return U(r.data)}function O(r){if(r>=p)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+p.toString(16)+" bytes");return r|0}function ut(r){return+r!=r&&(r=0),s.alloc(+r)}s.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==s.prototype},s.compare=function(t,e){if(v(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),v(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,o=e.length;for(let c=0,a=Math.min(n,o);c<a;++c)if(t[c]!==e[c]){n=t[c],o=e[c];break}return n<o?-1:o<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return s.alloc(0);let n;if(e===void 0)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const o=s.allocUnsafe(e);let c=0;for(n=0;n<t.length;++n){let a=t[n];if(v(a,Uint8Array))c+a.length>o.length?(s.isBuffer(a)||(a=s.from(a)),a.copy(o,c)):Uint8Array.prototype.set.call(o,a,c);else if(s.isBuffer(a))a.copy(o,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=a.length}return o};function at(r,t){if(s.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||v(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);const e=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return It(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return Wt(r).length;default:if(o)return n?-1:It(r).length;t=(""+t).toLowerCase(),o=!0}}s.byteLength=at;function gt(r,t,e){let n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,t>>>=0,e<=t))return"";for(r||(r="utf8");;)switch(r){case"hex":return Jt(this,t,e);case"utf8":case"utf-8":return Y(this,t,e);case"ascii":return Yt(this,t,e);case"latin1":case"binary":return qt(this,t,e);case"base64":return H(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Xt(this,t,e);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}s.prototype._isBuffer=!0;function k(r,t,e){const n=r[t];r[t]=r[e],r[e]=n}s.prototype.swap16=function(){const t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)k(this,e,e+1);return this},s.prototype.swap32=function(){const t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)k(this,e,e+3),k(this,e+1,e+2);return this},s.prototype.swap64=function(){const t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)k(this,e,e+7),k(this,e+1,e+6),k(this,e+2,e+5),k(this,e+3,e+4);return this},s.prototype.toString=function(){const t=this.length;return t===0?"":arguments.length===0?Y(this,0,t):gt.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:s.compare(this,t)===0},s.prototype.inspect=function(){let t="";const e=i.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},h&&(s.prototype[h]=s.prototype.inspect),s.prototype.compare=function(t,e,n,o,c){if(v(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),n===void 0&&(n=t?t.length:0),o===void 0&&(o=0),c===void 0&&(c=this.length),e<0||n>t.length||o<0||c>this.length)throw new RangeError("out of range index");if(o>=c&&e>=n)return 0;if(o>=c)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,o>>>=0,c>>>=0,this===t)return 0;let a=c-o,g=n-e;const F=Math.min(a,g),b=this.slice(o,c),C=t.slice(e,n);for(let A=0;A<F;++A)if(b[A]!==C[A]){a=b[A],g=C[A];break}return a<g?-1:g<a?1:0};function mt(r,t,e,n,o){if(r.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,Bt(e)&&(e=o?0:r.length-1),e<0&&(e=r.length+e),e>=r.length){if(o)return-1;e=r.length-1}else if(e<0)if(o)e=0;else return-1;if(typeof t=="string"&&(t=s.from(t,n)),s.isBuffer(t))return t.length===0?-1:Q(r,t,e,n,o);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(r,t,e):Uint8Array.prototype.lastIndexOf.call(r,t,e):Q(r,[t],e,n,o);throw new TypeError("val must be string, number or Buffer")}function Q(r,t,e,n,o){let c=1,a=r.length,g=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||t.length<2)return-1;c=2,a/=2,g/=2,e/=2}function F(C,A){return c===1?C[A]:C.readUInt16BE(A*c)}let b;if(o){let C=-1;for(b=e;b<a;b++)if(F(r,b)===F(t,C===-1?0:b-C)){if(C===-1&&(C=b),b-C+1===g)return C*c}else C!==-1&&(b-=b-C),C=-1}else for(e+g>a&&(e=a-g),b=e;b>=0;b--){let C=!0;for(let A=0;A<g;A++)if(F(r,b+A)!==F(t,A)){C=!1;break}if(C)return b}return-1}s.prototype.includes=function(t,e,n){return this.indexOf(t,e,n)!==-1},s.prototype.indexOf=function(t,e,n){return mt(this,t,e,n,!0)},s.prototype.lastIndexOf=function(t,e,n){return mt(this,t,e,n,!1)};function Et(r,t,e,n){e=Number(e)||0;const o=r.length-e;n?(n=Number(n),n>o&&(n=o)):n=o;const c=t.length;n>c/2&&(n=c/2);let a;for(a=0;a<n;++a){const g=parseInt(t.substr(a*2,2),16);if(Bt(g))return a;r[e+a]=g}return a}function x(r,t,e,n){return ht(It(t,r.length-e),r,e,n)}function m(r,t,e,n){return ht(ee(t),r,e,n)}function w(r,t,e,n){return ht(Wt(t),r,e,n)}function D(r,t,e,n){return ht(re(t,r.length-e),r,e,n)}s.prototype.write=function(t,e,n,o){if(e===void 0)o="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")o=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const c=this.length-e;if((n===void 0||n>c)&&(n=c),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let a=!1;for(;;)switch(o){case"hex":return Et(this,t,e,n);case"utf8":case"utf-8":return x(this,t,e,n);case"ascii":case"latin1":case"binary":return m(this,t,e,n);case"base64":return w(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,t,e,n);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(r,t,e){return t===0&&e===r.length?u.fromByteArray(r):u.fromByteArray(r.slice(t,e))}function Y(r,t,e){e=Math.min(r.length,e);const n=[];let o=t;for(;o<e;){const c=r[o];let a=null,g=c>239?4:c>223?3:c>191?2:1;if(o+g<=e){let F,b,C,A;switch(g){case 1:c<128&&(a=c);break;case 2:F=r[o+1],(F&192)===128&&(A=(c&31)<<6|F&63,A>127&&(a=A));break;case 3:F=r[o+1],b=r[o+2],(F&192)===128&&(b&192)===128&&(A=(c&15)<<12|(F&63)<<6|b&63,A>2047&&(A<55296||A>57343)&&(a=A));break;case 4:F=r[o+1],b=r[o+2],C=r[o+3],(F&192)===128&&(b&192)===128&&(C&192)===128&&(A=(c&15)<<18|(F&63)<<12|(b&63)<<6|C&63,A>65535&&A<1114112&&(a=A))}}a===null?(a=65533,g=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),o+=g}return $(n)}const Z=4096;function $(r){const t=r.length;if(t<=Z)return String.fromCharCode.apply(String,r);let e="",n=0;for(;n<t;)e+=String.fromCharCode.apply(String,r.slice(n,n+=Z));return e}function Yt(r,t,e){let n="";e=Math.min(r.length,e);for(let o=t;o<e;++o)n+=String.fromCharCode(r[o]&127);return n}function qt(r,t,e){let n="";e=Math.min(r.length,e);for(let o=t;o<e;++o)n+=String.fromCharCode(r[o]);return n}function Jt(r,t,e){const n=r.length;(!t||t<0)&&(t=0),(!e||e<0||e>n)&&(e=n);let o="";for(let c=t;c<e;++c)o+=ne[r[c]];return o}function Xt(r,t,e){const n=r.slice(t,e);let o="";for(let c=0;c<n.length-1;c+=2)o+=String.fromCharCode(n[c]+n[c+1]*256);return o}s.prototype.slice=function(t,e){const n=this.length;t=~~t,e=e===void 0?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t);const o=this.subarray(t,e);return Object.setPrototypeOf(o,s.prototype),o};function R(r,t,e){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+t>e)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(t,e,n){t=t>>>0,e=e>>>0,n||R(t,e,this.length);let o=this[t],c=1,a=0;for(;++a<e&&(c*=256);)o+=this[t+a]*c;return o},s.prototype.readUintBE=s.prototype.readUIntBE=function(t,e,n){t=t>>>0,e=e>>>0,n||R(t,e,this.length);let o=this[t+--e],c=1;for(;e>0&&(c*=256);)o+=this[t+--e]*c;return o},s.prototype.readUint8=s.prototype.readUInt8=function(t,e){return t=t>>>0,e||R(t,1,this.length),this[t]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||R(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||R(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||R(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||R(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readBigUInt64LE=q(function(t){t=t>>>0,it(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&lt(t,this.length-8);const o=e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,c=this[++t]+this[++t]*2**8+this[++t]*2**16+n*2**24;return BigInt(o)+(BigInt(c)<<BigInt(32))}),s.prototype.readBigUInt64BE=q(function(t){t=t>>>0,it(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&lt(t,this.length-8);const o=e*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],c=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n;return(BigInt(o)<<BigInt(32))+BigInt(c)}),s.prototype.readIntLE=function(t,e,n){t=t>>>0,e=e>>>0,n||R(t,e,this.length);let o=this[t],c=1,a=0;for(;++a<e&&(c*=256);)o+=this[t+a]*c;return c*=128,o>=c&&(o-=Math.pow(2,8*e)),o},s.prototype.readIntBE=function(t,e,n){t=t>>>0,e=e>>>0,n||R(t,e,this.length);let o=e,c=1,a=this[t+--o];for(;o>0&&(c*=256);)a+=this[t+--o]*c;return c*=128,a>=c&&(a-=Math.pow(2,8*e)),a},s.prototype.readInt8=function(t,e){return t=t>>>0,e||R(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},s.prototype.readInt16LE=function(t,e){t=t>>>0,e||R(t,2,this.length);const n=this[t]|this[t+1]<<8;return n&32768?n|4294901760:n},s.prototype.readInt16BE=function(t,e){t=t>>>0,e||R(t,2,this.length);const n=this[t+1]|this[t]<<8;return n&32768?n|4294901760:n},s.prototype.readInt32LE=function(t,e){return t=t>>>0,e||R(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return t=t>>>0,e||R(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readBigInt64LE=q(function(t){t=t>>>0,it(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&lt(t,this.length-8);const o=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(n<<24);return(BigInt(o)<<BigInt(32))+BigInt(e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)}),s.prototype.readBigInt64BE=q(function(t){t=t>>>0,it(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&lt(t,this.length-8);const o=(e<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(o)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n)}),s.prototype.readFloatLE=function(t,e){return t=t>>>0,e||R(t,4,this.length),l.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return t=t>>>0,e||R(t,4,this.length),l.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||R(t,8,this.length),l.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||R(t,8,this.length),l.read(this,t,!1,52,8)};function W(r,t,e,n,o,c){if(!s.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<c)throw new RangeError('"value" argument is out of bounds');if(e+n>r.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(t,e,n,o){if(t=+t,e=e>>>0,n=n>>>0,!o){const g=Math.pow(2,8*n)-1;W(this,t,e,n,g,0)}let c=1,a=0;for(this[e]=t&255;++a<n&&(c*=256);)this[e+a]=t/c&255;return e+n},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(t,e,n,o){if(t=+t,e=e>>>0,n=n>>>0,!o){const g=Math.pow(2,8*n)-1;W(this,t,e,n,g,0)}let c=n-1,a=1;for(this[e+c]=t&255;--c>=0&&(a*=256);)this[e+c]=t/a&255;return e+n},s.prototype.writeUint8=s.prototype.writeUInt8=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,1,255,0),this[e]=t&255,e+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function Rt(r,t,e,n,o){_t(t,n,o,r,e,7);let c=Number(t&BigInt(4294967295));r[e++]=c,c=c>>8,r[e++]=c,c=c>>8,r[e++]=c,c=c>>8,r[e++]=c;let a=Number(t>>BigInt(32)&BigInt(4294967295));return r[e++]=a,a=a>>8,r[e++]=a,a=a>>8,r[e++]=a,a=a>>8,r[e++]=a,e}function St(r,t,e,n,o){_t(t,n,o,r,e,7);let c=Number(t&BigInt(4294967295));r[e+7]=c,c=c>>8,r[e+6]=c,c=c>>8,r[e+5]=c,c=c>>8,r[e+4]=c;let a=Number(t>>BigInt(32)&BigInt(4294967295));return r[e+3]=a,a=a>>8,r[e+2]=a,a=a>>8,r[e+1]=a,a=a>>8,r[e]=a,e+8}s.prototype.writeBigUInt64LE=q(function(t,e=0){return Rt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=q(function(t,e=0){return St(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(t,e,n,o){if(t=+t,e=e>>>0,!o){const F=Math.pow(2,8*n-1);W(this,t,e,n,F-1,-F)}let c=0,a=1,g=0;for(this[e]=t&255;++c<n&&(a*=256);)t<0&&g===0&&this[e+c-1]!==0&&(g=1),this[e+c]=(t/a>>0)-g&255;return e+n},s.prototype.writeIntBE=function(t,e,n,o){if(t=+t,e=e>>>0,!o){const F=Math.pow(2,8*n-1);W(this,t,e,n,F-1,-F)}let c=n-1,a=1,g=0;for(this[e+c]=t&255;--c>=0&&(a*=256);)t<0&&g===0&&this[e+c+1]!==0&&(g=1),this[e+c]=(t/a>>0)-g&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e=e>>>0,n||W(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},s.prototype.writeBigInt64LE=q(function(t,e=0){return Rt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=q(function(t,e=0){return St(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Mt(r,t,e,n,o,c){if(e+n>r.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Tt(r,t,e,n,o){return t=+t,e=e>>>0,o||Mt(r,t,e,4),l.write(r,t,e,n,23,4),e+4}s.prototype.writeFloatLE=function(t,e,n){return Tt(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return Tt(this,t,e,!1,n)};function Ot(r,t,e,n,o){return t=+t,e=e>>>0,o||Mt(r,t,e,8),l.write(r,t,e,n,52,8),e+8}s.prototype.writeDoubleLE=function(t,e,n){return Ot(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return Ot(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,o){if(!s.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),e>=t.length&&(e=t.length),e||(e=0),o>0&&o<n&&(o=n),o===n||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-e<o-n&&(o=t.length-e+n);const c=o-n;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,o):Uint8Array.prototype.set.call(t,this.subarray(n,o),e),c},s.prototype.fill=function(t,e,n,o){if(typeof t=="string"){if(typeof e=="string"?(o=e,e=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!s.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(t.length===1){const a=t.charCodeAt(0);(o==="utf8"&&a<128||o==="latin1")&&(t=a)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,t||(t=0);let c;if(typeof t=="number")for(c=e;c<n;++c)this[c]=t;else{const a=s.isBuffer(t)?t:s.from(t,o),g=a.length;if(g===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(c=0;c<n-e;++c)this[c+e]=a[c%g]}return this};const nt={};function xt(r,t,e){nt[r]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}xt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),xt("ERR_INVALID_ARG_TYPE",function(r,t){return`The "${r}" argument must be of type number. Received type ${typeof t}`},TypeError),xt("ERR_OUT_OF_RANGE",function(r,t,e){let n=`The value of "${r}" is out of range.`,o=e;return Number.isInteger(e)&&Math.abs(e)>2**32?o=Dt(String(e)):typeof e=="bigint"&&(o=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(o=Dt(o)),o+="n"),n+=` It must be ${t}. Received ${o}`,n},RangeError);function Dt(r){let t="",e=r.length;const n=r[0]==="-"?1:0;for(;e>=n+4;e-=3)t=`_${r.slice(e-3,e)}${t}`;return`${r.slice(0,e)}${t}`}function Qt(r,t,e){it(t,"offset"),(r[t]===void 0||r[t+e]===void 0)&&lt(t,r.length-(e+1))}function _t(r,t,e,n,o,c){if(r>e||r<t){const a=typeof t=="bigint"?"n":"";let g;throw c>3?t===0||t===BigInt(0)?g=`>= 0${a} and < 2${a} ** ${(c+1)*8}${a}`:g=`>= -(2${a} ** ${(c+1)*8-1}${a}) and < 2 ** ${(c+1)*8-1}${a}`:g=`>= ${t}${a} and <= ${e}${a}`,new nt.ERR_OUT_OF_RANGE("value",g,r)}Qt(n,o,c)}function it(r,t){if(typeof r!="number")throw new nt.ERR_INVALID_ARG_TYPE(t,"number",r)}function lt(r,t,e){throw Math.floor(r)!==r?(it(r,e),new nt.ERR_OUT_OF_RANGE(e||"offset","an integer",r)):t<0?new nt.ERR_BUFFER_OUT_OF_BOUNDS:new nt.ERR_OUT_OF_RANGE(e||"offset",`>= ${e?1:0} and <= ${t}`,r)}const Zt=/[^+/0-9A-Za-z-_]/g;function te(r){if(r=r.split("=")[0],r=r.trim().replace(Zt,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function It(r,t){t=t||1/0;let e;const n=r.length;let o=null;const c=[];for(let a=0;a<n;++a){if(e=r.charCodeAt(a),e>55295&&e<57344){if(!o){if(e>56319){(t-=3)>-1&&c.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&c.push(239,191,189);continue}o=e;continue}if(e<56320){(t-=3)>-1&&c.push(239,191,189),o=e;continue}e=(o-55296<<10|e-56320)+65536}else o&&(t-=3)>-1&&c.push(239,191,189);if(o=null,e<128){if((t-=1)<0)break;c.push(e)}else if(e<2048){if((t-=2)<0)break;c.push(e>>6|192,e&63|128)}else if(e<65536){if((t-=3)<0)break;c.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((t-=4)<0)break;c.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return c}function ee(r){const t=[];for(let e=0;e<r.length;++e)t.push(r.charCodeAt(e)&255);return t}function re(r,t){let e,n,o;const c=[];for(let a=0;a<r.length&&!((t-=2)<0);++a)e=r.charCodeAt(a),n=e>>8,o=e%256,c.push(o),c.push(n);return c}function Wt(r){return u.toByteArray(te(r))}function ht(r,t,e,n){let o;for(o=0;o<n&&!(o+e>=t.length||o>=r.length);++o)t[o+e]=r[o];return o}function v(r,t){return r instanceof t||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===t.name}function Bt(r){return r!==r}const ne=function(){const r="0123456789abcdef",t=new Array(256);for(let e=0;e<16;++e){const n=e*16;for(let o=0;o<16;++o)t[n+o]=r[e]+r[o]}return t}();function q(r){return typeof BigInt>"u"?ie:r}function ie(){throw new Error("BigInt not supported")}})(zt);const S=X({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),Ht={state:S,subscribe(i){return rt(S,()=>i(S))},push(i,u){i!==S.view&&(S.view=i,u&&(S.data=u),S.history.push(i))},reset(i){S.view=i,S.history=[i]},replace(i){S.history.length>1&&(S.history[S.history.length-1]=i,S.view=i)},goBack(){if(S.history.length>1){S.history.pop();const[i]=S.history.slice(-1);S.view=i}},setData(i){S.data=i}},_={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return _.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const i=navigator.userAgent.toLowerCase();return _.isMobile()&&(i.includes("iphone")||i.includes("ipad"))},isHttpUrl(i){return i.startsWith("http://")||i.startsWith("https://")},isArray(i){return Array.isArray(i)&&i.length>0},formatNativeUrl(i,u,l){if(_.isHttpUrl(i))return this.formatUniversalUrl(i,u,l);let h=i;h.includes("://")||(h=i.replaceAll("/","").replaceAll(":",""),h=`${h}://`),h.endsWith("/")||(h=`${h}/`),this.setWalletConnectDeepLink(h,l);const p=encodeURIComponent(u);return`${h}wc?uri=${p}`},formatUniversalUrl(i,u,l){if(!_.isHttpUrl(i))return this.formatNativeUrl(i,u,l);let h=i;h.endsWith("/")||(h=`${h}/`),this.setWalletConnectDeepLink(h,l);const p=encodeURIComponent(u);return`${h}wc?uri=${p}`},async wait(i){return new Promise(u=>{setTimeout(u,i)})},openHref(i,u){window.open(i,u,"noreferrer noopener")},setWalletConnectDeepLink(i,u){try{localStorage.setItem(_.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:i,name:u}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(i){try{const[u]=i.split("?");localStorage.setItem(_.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:u,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(_.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(_.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var i;const u=(i=Ht.state.data)==null?void 0:i.Wallet;if(!u)throw new Error('Missing "Wallet" view data');return u}},xe=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),M=X({enabled:xe,userSessionId:"",events:[],connectedWalletId:void 0}),Ie={state:M,subscribe(i){return rt(M.events,()=>i(fe(M.events[M.events.length-1])))},initialize(){M.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(M.userSessionId=crypto.randomUUID())},setConnectedWalletId(i){M.connectedWalletId=i},click(i){if(M.enabled){const u={type:"CLICK",name:i.name,userSessionId:M.userSessionId,timestamp:Date.now(),data:i};M.events.push(u)}},track(i){if(M.enabled){const u={type:"TRACK",name:i.name,userSessionId:M.userSessionId,timestamp:Date.now(),data:i};M.events.push(u)}},view(i){if(M.enabled){const u={type:"VIEW",name:i.name,userSessionId:M.userSessionId,timestamp:Date.now(),data:i};M.events.push(u)}}},V=X({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),j={state:V,subscribe(i){return rt(V,()=>i(V))},setChains(i){V.chains=i},setWalletConnectUri(i){V.walletConnectUri=i},setIsCustomDesktop(i){V.isCustomDesktop=i},setIsCustomMobile(i){V.isCustomMobile=i},setIsDataLoaded(i){V.isDataLoaded=i},setIsUiLoaded(i){V.isUiLoaded=i},setIsAuth(i){V.isAuth=i}},dt=X({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),ct={state:dt,subscribe(i){return rt(dt,()=>i(dt))},setConfig(i){var u,l;Ie.initialize(),j.setChains(i.chains),j.setIsAuth(!!i.enableAuthMode),j.setIsCustomMobile(!!((u=i.mobileWallets)!=null&&u.length)),j.setIsCustomDesktop(!!((l=i.desktopWallets)!=null&&l.length)),_.setModalVersionInStorage(),Object.assign(dt,i)}},Ct="https://explorer-api.walletconnect.com";async function yt(i,u){const l=new URL(i,Ct);return l.searchParams.append("projectId",ct.state.projectId),Object.entries(u).forEach(([h,p])=>{p&&l.searchParams.append(h,String(p))}),(await fetch(l)).json()}const tt={async getDesktopListings(i){return yt("/w3m/v1/getDesktopListings",i)},async getMobileListings(i){return yt("/w3m/v1/getMobileListings",i)},async getInjectedListings(i){return yt("/w3m/v1/getInjectedListings",i)},async getAllListings(i){return yt("/w3m/v1/getAllListings",i)},getWalletImageUrl(i){return`${Ct}/w3m/v1/getWalletImage/${i}?projectId=${ct.state.projectId}`},getAssetImageUrl(i){return`${Ct}/w3m/v1/getAssetImage/${i}?projectId=${ct.state.projectId}`}};var Be=Object.defineProperty,kt=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,jt=(i,u,l)=>u in i?Be(i,u,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[u]=l,be=(i,u)=>{for(var l in u||(u={}))Ae.call(u,l)&&jt(i,l,u[l]);if(kt)for(var l of kt(u))Ue.call(u,l)&&jt(i,l,u[l]);return i};const $t=_.isMobile(),K=X({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),De={state:K,async getRecomendedWallets(){const{explorerRecommendedWalletIds:i,explorerExcludedWalletIds:u}=ct.state;if(i==="NONE"||u==="ALL"&&!i)return K.recomendedWallets;if(_.isArray(i)){const l={recommendedIds:i.join(",")},{listings:h}=await tt.getAllListings(l),p=Object.values(h);p.sort((d,f)=>{const s=i.indexOf(d.id),E=i.indexOf(f.id);return s-E}),K.recomendedWallets=p}else{const{chains:l,isAuth:h}=j.state,p=l==null?void 0:l.join(","),d=_.isArray(u),f={page:1,sdks:h?"auth_v1":void 0,entries:_.RECOMMENDED_WALLET_AMOUNT,chains:p,version:2,excludedIds:d?u.join(","):void 0},{listings:s}=$t?await tt.getMobileListings(f):await tt.getDesktopListings(f);K.recomendedWallets=Object.values(s)}return K.recomendedWallets},async getWallets(i){const u=be({},i),{explorerRecommendedWalletIds:l,explorerExcludedWalletIds:h}=ct.state,{recomendedWallets:p}=K;if(h==="ALL")return K.wallets;p.length?u.excludedIds=p.map(B=>B.id).join(","):_.isArray(l)&&(u.excludedIds=l.join(",")),_.isArray(h)&&(u.excludedIds=[u.excludedIds,h].filter(Boolean).join(",")),j.state.isAuth&&(u.sdks="auth_v1");const{page:d,search:f}=i,{listings:s,total:E}=$t?await tt.getMobileListings(u):await tt.getDesktopListings(u),y=Object.values(s),I=f?"search":"wallets";return K[I]={listings:[...K[I].listings,...y],total:E,page:d??1},{listings:y,total:E}},getWalletImageUrl(i){return tt.getWalletImageUrl(i)},getAssetImageUrl(i){return tt.getAssetImageUrl(i)},resetSearch(){K.search={listings:[],total:0,page:1}}},st=X({open:!1}),bt={state:st,subscribe(i){return rt(st,()=>i(st))},async open(i){return new Promise(u=>{const{isUiLoaded:l,isDataLoaded:h}=j.state;if(j.setWalletConnectUri(i==null?void 0:i.uri),j.setChains(i==null?void 0:i.chains),Ht.reset("ConnectWallet"),l&&h)st.open=!0,u();else{const p=setInterval(()=>{const d=j.state;d.isUiLoaded&&d.isDataLoaded&&(clearInterval(p),st.open=!0,u())},200)}})},close(){st.open=!1}};var Fe=Object.defineProperty,vt=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Vt=(i,u,l)=>u in i?Fe(i,u,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[u]=l,Re=(i,u)=>{for(var l in u||(u={}))Ce.call(u,l)&&Vt(i,l,u[l]);if(vt)for(var l of vt(u))Le.call(u,l)&&Vt(i,l,u[l]);return i};function Se(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const ft=X({themeMode:Se()?"dark":"light"}),Kt={state:ft,subscribe(i){return rt(ft,()=>i(ft))},setThemeConfig(i){const{themeMode:u,themeVariables:l}=i;u&&(ft.themeMode=u),l&&(ft.themeVariables=Re({},l))}},et=X({open:!1,message:"",variant:"success"}),_e={state:et,subscribe(i){return rt(et,()=>i(et))},openToast(i,u){et.open=!0,et.message=i,et.variant=u},closeToast(){et.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=zt.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window));class Me{constructor(u){this.openModal=bt.open,this.closeModal=bt.close,this.subscribeModal=bt.subscribe,this.setTheme=Kt.setThemeConfig,Kt.setThemeConfig(u),ct.setConfig(u),this.initUi()}async initUi(){if(typeof window<"u"){await oe(()=>import("./index-5c4caedb.js"),["assets/index-5c4caedb.js","assets/index-293e4a0d.js","assets/index-e51b063b.css"]);const u=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",u),j.setIsUiLoaded(!0)}}}const We=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Me},Symbol.toStringTag,{value:"Module"}));export{Ie as $,ct as C,De as G,Ht as N,bt as Q,Kt as X,_e as Y,We as a,j as c,_ as i};