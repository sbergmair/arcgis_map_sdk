"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[1180],{81936:(e,t,r)=>{r.d(t,{ly:()=>y,oS:()=>B,o7:()=>Y,Jj:()=>X,Hz:()=>C,gK:()=>T,ey:()=>E,bj:()=>m,O1:()=>b,av:()=>I,Nu:()=>P,D_:()=>S,Eu:()=>d,q6:()=>g,or:()=>G,wA:()=>z,Vs:()=>x,TS:()=>R,qt:()=>M,xA:()=>N,ct:()=>h,fP:()=>A,n1:()=>k,PP:()=>W,P_:()=>D,mw:()=>_,G5:()=>v,ne:()=>L,ek:()=>p,Cd:()=>O,zO:()=>H,TN:()=>q,ir:()=>V,v6:()=>F,hu:()=>U,mc:()=>w});class s{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===s&&(s=9*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,f):new i(t,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;for(let e=0;e<9;++e)s[i++]=n[f++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=9;class n{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===s&&(s=16*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,f):new i(t,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;for(let e=0;e<16;++e)s[i++]=n[f++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=16;class i{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===s&&(s=i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,f):new i(t,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=1;var f=r(55709);class u{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===s&&(s=2*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,f):new i(t,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,f.a)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;s[i++]=n[f++],s[i]=n[f]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var o=r(6766);class c{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===s&&(s=3*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,f):new i(t,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,o.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=s}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;s[i++]=n[f++],s[i++]=n[f++],s[i]=n[f]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;var a=r(88589);class l{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===s&&(s=4*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,f):new i(t,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,a.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=s,this.typedBuffer[e]=n}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;s[i++]=n[f++],s[i++]=n[f++],s[i++]=n[f++],s[i]=n[f]}get buffer(){return this.typedBuffer.buffer}}l.ElementCount=4;class y extends i{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f32";class d extends u{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class h extends c{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class p extends l{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class T extends s{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class E extends s{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class m extends n{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f32";class b extends n{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class B extends i{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f64";class g extends u{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class A extends c{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends l{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class S extends i{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class N extends u{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u8";class L extends c{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class w extends l{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class I extends i{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u16";class R extends u{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u16";class _ extends c{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u16";class F extends l{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u16";class P extends i{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u32";class M extends u{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u32";class v extends c{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class U extends l{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="u32";class C extends i{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="i8";class x extends u{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="i8";class D extends c{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i8";class V extends l{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class Y extends i{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i16";class G extends u{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i16";class k extends c{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class H extends l{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i16";class X extends i{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(X,e,t)}static fromTypedArray(e,t){return new X(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}X.ElementType="i32";class z extends u{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i32";class W extends c{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class q extends l{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i32"},90331:(e,t,r)=>{function s(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function n(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function i(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function f(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}r.d(t,{B3:()=>n,Op:()=>f,U:()=>i,n1:()=>s}),r(39994)},67262:(e,t,r)=>{r.d(t,{d:()=>n});var s=r(19431);function n(e,t,r){const n=e.byteLength/(4*t),c=new Uint32Array(e,0,n*t);let a=new Uint32Array(n);const l=r?.minReduction??0,y=r?.originalIndices||null,d=y?y.length:0,h=r?.componentOffsets||null;let p=0;if(h)for(let e=0;e<h.length-1;e++){const t=h[e+1]-h[e];t>p&&(p=t)}else p=n;const T=Math.floor(1.1*p)+1;(null==o||o.length<2*T)&&(o=new Uint32Array((0,s.Sf)(2*T)));for(let e=0;e<2*T;e++)o[e]=0;let E=0;const m=!!h&&!!y,b=m?d:n,B=m?new Uint32Array(d):null,g=1.96;let A=0!==l?Math.ceil(4*g*g/(l*l)*l*(1-l)):b,O=1,S=h?h[1]:b;for(let e=0;e<b;e++){if(e===A){const t=1-E/e;if(t+g*Math.sqrt(t*(1-t)/e)<l)return null;A*=2}if(e===S){for(let e=0;e<2*T;e++)o[e]=0;if(y)for(let e=h[O-1];e<h[O];e++)B[e]=a[y[e]];S=h[++O]}const r=m?y[e]:e,s=r*t,n=u(c,s,t);let f=n%T,d=E;for(;0!==o[2*f+1];){if(o[2*f]===n){const e=o[2*f+1]-1;if(i(c,s,e*t,t)){d=a[e];break}}f++,f>=T&&(f-=T)}d===E&&(o[2*f]=n,o[2*f+1]=r+1,E++),a[r]=d}if(0!==l&&1-E/n<l)return null;if(m){for(let e=h[O-1];e<B.length;e++)B[e]=a[y[e]];a=B}const N=new Uint32Array(t*E);E=0;for(let e=0;e<b;e++)a[e]===E&&(f(c,(m?y[e]:e)*t,N,E*t,t),E++);if(y&&!m){const e=new Uint32Array(d);for(let t=0;t<e.length;t++)e[t]=a[y[t]];a=e}return{buffer:N.buffer,indices:a,uniqueCount:E}}function i(e,t,r,s){for(let n=0;n<s;n++)if(e[t+n]!==e[r+n])return!1;return!0}function f(e,t,r,s,n){for(let i=0;i<n;i++)r[s+i]=e[t+i]}function u(e,t,r){let s=0;for(let n=0;n<r;n++)s=e[t+n]+s|0,s=s+(s<<11)+(s>>>2)|0;return s>>>0}let o=null},44685:(e,t,r)=>{r.d(t,{U$:()=>u});var s=r(81936),n=r(90331);class i{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new i(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,s){const n=this.stride;if(n%4==0){const i=new Uint32Array(e.buffer,t*n,s*n/4);new Uint32Array(this.buffer,r*n,s*n/4).set(i)}else{const i=new Uint8Array(e.buffer,t*n,s*n);new Uint8Array(this.buffer,r*n,s*n).set(i)}}}class f{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,s.Eu,t),this}vec2f64(e,t){return this._appendField(e,s.q6,t),this}vec3f(e,t){return this._appendField(e,s.ct,t),this}vec3f64(e,t){return this._appendField(e,s.fP,t),this}vec4f(e,t){return this._appendField(e,s.ek,t),this}vec4f64(e,t){return this._appendField(e,s.Cd,t),this}mat3f(e,t){return this._appendField(e,s.gK,t),this}mat3f64(e,t){return this._appendField(e,s.ey,t),this}mat4f(e,t){return this._appendField(e,s.bj,t),this}mat4f64(e,t){return this._appendField(e,s.O1,t),this}vec4u8(e,t){return this._appendField(e,s.mc,t),this}f32(e,t){return this._appendField(e,s.ly,t),this}f64(e,t){return this._appendField(e,s.oS,t),this}u8(e,t){return this._appendField(e,s.D_,t),this}u16(e,t){return this._appendField(e,s.av,t),this}i8(e,t){return this._appendField(e,s.Hz,t),this}vec2i8(e,t){return this._appendField(e,s.Vs,t),this}vec2i16(e,t){return this._appendField(e,s.or,t),this}vec2u8(e,t){return this._appendField(e,s.xA,t),this}vec4u16(e,t){return this._appendField(e,s.v6,t),this}u32(e,t){return this._appendField(e,s.Nu,t),this}_appendField(e,t,r){const s=t.ElementCount*(0,n.n1)(t.ElementType),i=this.stride;this.fields.set(e,{size:s,constructor:t,offset:i,optional:r}),this.stride+=s,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new i(this,e)}createView(e){return new i(this,e)}clone(){const e=new f;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function u(){return new f}},21414:(e,t,r)=>{var s;r.d(t,{T:()=>s}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(s||(s={}))},1180:(e,t,r)=>{r.r(t),r.d(t,{EdgeProcessingWorker:()=>j,default:()=>oe,extract:()=>Z,extractComponentsEdgeLocationsLayout:()=>ue,extractEdgeLocationsLayout:()=>fe});var s=r(67262);function n(e,t,r){const s=t/3,n=new Uint32Array(r+1),i=new Uint32Array(r+1),f=(e,t)=>{e<t?n[e+1]++:i[t+1]++};for(let t=0;t<s;t++){const r=e[3*t],s=e[3*t+1],n=e[3*t+2];f(r,s),f(s,n),f(n,r)}let u=0,o=0;for(let e=0;e<r;e++){const t=n[e+1],r=i[e+1];n[e+1]=u,i[e+1]=o,u+=t,o+=r}const c=new Uint32Array(6*s),a=n[r],l=(e,t,r)=>{if(e<t){const s=n[e+1]++;c[2*s]=t,c[2*s+1]=r}else{const s=i[t+1]++;c[2*a+2*s]=e,c[2*a+2*s+1]=r}};for(let t=0;t<s;t++){const r=e[3*t],s=e[3*t+1],n=e[3*t+2];l(r,s,t),l(s,n,t),l(n,r,t)}const y=(e,t)=>{const r=2*e,s=t-e;for(let e=1;e<s;e++){const t=c[r+2*e],s=c[r+2*e+1];let n=e-1;for(;n>=0&&c[r+2*n]>t;n--)c[r+2*n+2]=c[r+2*n],c[r+2*n+3]=c[r+2*n+1];c[r+2*n+2]=t,c[r+2*n+3]=s}};for(let e=0;e<r;e++)y(n[e],n[e+1]),y(a+i[e],a+i[e+1]);const d=new Int32Array(3*s),h=(t,r)=>t===e[3*r]?0:t===e[3*r+1]?1:t===e[3*r+2]?2:-1,p=(e,t)=>{const r=h(e,t);d[3*t+r]=-1},T=(e,t,r,s)=>{const n=h(e,t);d[3*t+n]=s;const i=h(r,s);d[3*s+i]=t};for(let e=0;e<r;e++){let t=n[e];const r=n[e+1];let s=i[e];const f=i[e+1];for(;t<r&&s<f;){const r=c[2*t],n=c[2*a+2*s];r===n?(T(e,c[2*t+1],n,c[2*a+2*s+1]),t++,s++):r<n?(p(e,c[2*t+1]),t++):(p(n,c[2*a+2*s+1]),s++)}for(;t<r;)p(e,c[2*t+1]),t++;for(;s<f;)p(c[2*a+2*s],c[2*a+2*s+1]),s++}return d}var i=r(44685),f=r(81936);function u(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:o(e.layout)}}function o(e){const t=new Array;return e.fields.forEach(((e,r)=>{const s={...e,constructor:a(e.constructor)};t.push([r,s])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const c=[f.ly,f.Eu,f.ct,f.ek,f.gK,f.bj,f.oS,f.q6,f.fP,f.Cd,f.ey,f.O1,f.D_,f.xA,f.ne,f.mc,f.av,f.TS,f.mw,f.v6,f.Nu,f.qt,f.G5,f.hu,f.Hz,f.Vs,f.P_,f.ir,f.o7,f.or,f.n1,f.zO,f.Jj,f.wA,f.PP,f.TN];function a(e){return`${e.ElementType}_${e.ElementCount}`}const l=new Map;c.forEach((e=>l.set(a(e),e)));var y=r(21414),d=r(91907),h=r(41163);function p(e,t=0){const r=e.stride;return e.fieldNames.filter((t=>{const r=e.fields.get(t).optional;return!(r&&r.glPadding)})).map((s=>{const n=e.fields.get(s),i=n.constructor.ElementCount,f=T(n.constructor.ElementType),u=n.offset,o=!(!n.optional||!n.optional.glNormalized);return new h.G(s,i,f,u,r,o,t)}))}function T(e){const t=E[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const E={u8:d.g.UNSIGNED_BYTE,u16:d.g.UNSIGNED_SHORT,u32:d.g.UNSIGNED_INT,i8:d.g.BYTE,i16:d.g.SHORT,i32:d.g.INT,f32:d.g.FLOAT},m=(0,i.U$)().vec3f(y.T.POSITION).u16(y.T.COMPONENTINDEX).u16(y.T.U16PADDING),b=(p((0,i.U$)().vec2u8(y.T.SIDENESS)),(0,i.U$)().vec3f(y.T.POSITION0).vec3f(y.T.POSITION1).u16(y.T.COMPONENTINDEX).u8(y.T.VARIANTOFFSET,{glNormalized:!0}).u8(y.T.VARIANTSTROKE).u8(y.T.VARIANTEXTENSION,{glNormalized:!0}).u8(y.T.U8PADDING,{glPadding:!0}).u16(y.T.U16PADDING,{glPadding:!0})),B=b.clone().vec3f(y.T.NORMAL),g=b.clone().vec3f(y.T.NORMALA).vec3f(y.T.NORMALB);new Map([[y.T.POSITION0,0],[y.T.POSITION1,1],[y.T.COMPONENTINDEX,2],[y.T.VARIANTOFFSET,3],[y.T.VARIANTSTROKE,4],[y.T.VARIANTEXTENSION,5],[y.T.NORMAL,6],[y.T.NORMALA,6],[y.T.NORMALB,7],[y.T.SIDENESS,8]]);var A=r(4157),O=r(6766),S=r(8909);class N{updateSettings(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?_:R}write(e,t,r){const s=this.edgeHashFunction(r);U.seed=s;const n=U.getIntRange(0,255),i=U.getIntRange(0,this.settings.variants-1),f=U.getFloat(),u=255*(.5*function(e,t){const r=e<0?-1:1;return Math.abs(e)**1.2*r}(-(1-Math.min(f/.7,1))+Math.max(0,f-.7)/(1-.7))+.5);e.position0.setVec(t,r.position0),e.position1.setVec(t,r.position1),e.componentIndex.set(t,r.componentIndex),e.variantOffset.set(t,n),e.variantStroke.set(t,i),e.variantExtension.set(t,u)}trim(e,t){return e.slice(0,t)}}const L=new Float32Array(6),w=new Uint32Array(L.buffer),I=new Uint32Array(1);function R(e){const t=L;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],I[0]=5381;for(let e=0;e<w.length;e++)I[0]=31*I[0]+w[e];return I[0]}function _(e){const t=L;t[0]=F(e.position0[0]),t[1]=F(e.position0[1]),t[2]=F(e.position0[2]),t[3]=F(e.position1[0]),t[4]=F(e.position1[1]),t[5]=F(e.position1[2]),I[0]=5381;for(let e=0;e<w.length;e++)I[0]=31*I[0]+w[e];return I[0]}function F(e){return Math.round(1e4*e)/1e4}class P{constructor(){this.commonWriter=new N}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return B.createBuffer(e)}write(e,t,r){this.commonWriter.write(e,t,r),(0,O.a)(v,r.faceNormal0,r.faceNormal1),(0,O.n)(v,v),e.normal.setVec(t,v)}trim(e,t){return this.commonWriter.trim(e,t)}}P.Layout=B,P.glLayout=p(B,1);class M{constructor(){this.commonWriter=new N}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return g.createBuffer(e)}write(e,t,r){this.commonWriter.write(e,t,r),e.normalA.setVec(t,r.faceNormal0),e.normalB.setVec(t,r.faceNormal1)}trim(e,t){return this.commonWriter.trim(e,t)}}M.Layout=g,M.glLayout=p(g,1);const v=(0,S.c)(),U=new A.Z;var C=r(7753),x=r(19431),D=r(86098);const V=-1;var Y,G;function k(e,t,r,s=$){const n=e.vertices.position,i=e.vertices.componentIndex,f=(0,x.Vl)(s.anglePlanar),u=(0,x.Vl)(s.angleSignificantEdge),o=Math.cos(u),c=Math.cos(f),a=q.edge,l=a.position0,y=a.position1,d=a.faceNormal0,h=a.faceNormal1,p=W(e),T=function(e){const t=e.faces.length/3,r=e.faces,s=e.neighbors;let n=0;for(let e=0;e<t;e++){const t=s[3*e+0],i=s[3*e+1],f=s[3*e+2],u=r[3*e+0],o=r[3*e+1],c=r[3*e+2];n+=t===V||u<o?1:0,n+=i===V||o<c?1:0,n+=f===V||c<u?1:0}const i=new Int32Array(4*n);let f=0;for(let e=0;e<t;e++){const t=s[3*e+0],n=s[3*e+1],u=s[3*e+2],o=r[3*e+0],c=r[3*e+1],a=r[3*e+2];(t===V||o<c)&&(i[f++]=o,i[f++]=c,i[f++]=e,i[f++]=t),(n===V||c<a)&&(i[f++]=c,i[f++]=a,i[f++]=e,i[f++]=n),(u===V||a<o)&&(i[f++]=a,i[f++]=o,i[f++]=e,i[f++]=u)}return i}(e),E=T.length/4,m=t.allocate(E);let b=0;const B=E,g=r.allocate(B);let A=0,S=0,N=0;const L=(0,C.w6)(0,E),w=new Float32Array(E);(0,D.Ed)(w,((e,t,r)=>{n.getVec(T[4*t+0],l),n.getVec(T[4*t+1],y),r[t]=(0,O.i)(l,y)})),L.sort(((e,t)=>w[t]-w[e]));const I=new Array,R=new Array;for(let e=0;e<E;e++){const s=L[e],u=w[s],E=T[4*s+0],B=T[4*s+1],_=T[4*s+2],F=T[4*s+3],P=F===V;if(n.getVec(E,l),n.getVec(B,y),P)(0,O.s)(d,p[3*_+0],p[3*_+1],p[3*_+2]),(0,O.c)(h,d),a.componentIndex=i.get(E),a.cosAngle=(0,O.e)(d,h);else{if((0,O.s)(d,p[3*_+0],p[3*_+1],p[3*_+2]),(0,O.s)(h,p[3*F+0],p[3*F+1],p[3*F+2]),a.componentIndex=i.get(E),a.cosAngle=(0,O.e)(d,h),X(a,c))continue;a.cosAngle<-.9999&&(0,O.c)(h,d)}S+=u,N++,P||H(a,o)?(t.write(m,b++,a),I.push(u)):z(a,f)&&(r.write(g,A++,a),R.push(u))}const _=new Float32Array(I.reverse()),F=new Float32Array(R.reverse());return{regular:{instancesData:t.trim(m,b),lodInfo:{lengths:_}},silhouette:{instancesData:r.trim(g,A),lodInfo:{lengths:F}},averageEdgeLength:S/N}}function H(e,t){return e.cosAngle<t}function X(e,t){return e.cosAngle>t}function z(e,t){const r=(0,x.ZF)(e.cosAngle),s=q.fwd,n=q.ortho;return(0,O.r)(s,e.position1,e.position0),r*((0,O.e)((0,O.f)(n,e.faceNormal0,e.faceNormal1),s)>0?-1:1)>t}function W(e){const t=e.faces.length/3,r=e.vertices.position,s=e.faces,n=K.v0,i=K.v1,f=K.v2,u=new Float32Array(3*t);for(let e=0;e<t;e++){const t=s[3*e+0],o=s[3*e+1],c=s[3*e+2];r.getVec(t,n),r.getVec(o,i),r.getVec(c,f),(0,O.b)(i,i,n),(0,O.b)(f,f,n),(0,O.f)(n,i,f),(0,O.n)(n,n),u[3*e+0]=n[0],u[3*e+1]=n[1],u[3*e+2]=n[2]}return u}(G=Y||(Y={}))[G.SOLID=0]="SOLID",G[G.SKETCH=1]="SKETCH";const q={edge:{position0:(0,S.c)(),position1:(0,S.c)(),faceNormal0:(0,S.c)(),faceNormal1:(0,S.c)(),componentIndex:0,cosAngle:0},ortho:(0,S.c)(),fwd:(0,S.c)()},K={v0:(0,S.c)(),v1:(0,S.c)(),v2:(0,S.c)()},$={anglePlanar:4,angleSignificantEdge:35};class j{async extract(e){const t=J(e),r=Z(t),s=[t.data.buffer];return{result:Q(r,s),transferList:s}}async extractComponentsEdgeLocations(e){const t=J(e),r=[];return{result:u(k(ee(t.data,t.skipDeduplicate,t.indices,t.indicesLength),ne,ie).regular.instancesData,r),transferList:r}}async extractEdgeLocations(e){const t=J(e),r=[];return{result:u(k(ee(t.data,t.skipDeduplicate,t.indices,t.indicesLength),se,ie).regular.instancesData,r),transferList:r}}}function Z(e){const t=ee(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return te.updateSettings(e.writerSettings),re.updateSettings(e.writerSettings),k(t,te,re)}function J(e){return{data:m.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function Q(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:u(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:u(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function ee(e,t,r,i){if(t)return{faces:r,facesLength:i,neighbors:n(r,i,e.count),vertices:e};const f=(0,s.d)(e.buffer,e.stride/4,{originalIndices:r,originalIndicesLength:i}),u=n(f.indices,i,f.uniqueCount);return{faces:f.indices,facesLength:f.indices.length,neighbors:u,vertices:m.createView(f.buffer)}}const te=new P,re=new M,se=new class{allocate(e){return fe.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,r){e.position0.setVec(t,r.position0),e.position1.setVec(t,r.position1)}},ne=new class{allocate(e){return ue.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,r){e.position0.setVec(t,r.position0),e.position1.setVec(t,r.position1),e.componentIndex.set(t,r.componentIndex)}},ie={allocate:()=>null,write:()=>{},trim:()=>null},fe=(0,i.U$)().vec3f(y.T.POSITION0).vec3f(y.T.POSITION1),ue=(0,i.U$)().vec3f(y.T.POSITION0).vec3f(y.T.POSITION1).u16(y.T.COMPONENTINDEX).u16(y.T.U16PADDING,{glPadding:!0});function oe(){return new j}}}]);