(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[905],{12608:(e,t,r)=>{"use strict";r.d(t,{ly:()=>c,oS:()=>m,o7:()=>k,Jj:()=>D,Hz:()=>Y,gK:()=>T,ey:()=>b,bj:()=>B,O1:()=>E,av:()=>F,Nu:()=>N,D_:()=>O,Eu:()=>a,q6:()=>A,or:()=>z,wA:()=>H,Vs:()=>U,TS:()=>x,qt:()=>P,xA:()=>w,ct:()=>o,fP:()=>S,n1:()=>j,PP:()=>K,P_:()=>I,mw:()=>C,G5:()=>v,ne:()=>L,ek:()=>l,Cd:()=>g,zO:()=>q,TN:()=>G,ir:()=>V,v6:()=>M,hu:()=>R,mc:()=>_});class s{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=9;const n=this.TypedArrayConstructor;void 0===s&&(s=9*n.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,i):new n(t,i,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(e,t){const r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r+e];return t}setMat(e,t){const r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r+e]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer,n=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<9;++e)s[n+e]=f[i+e]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=9;class f{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=16;const n=this.TypedArrayConstructor;void 0===s&&(s=16*n.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,i):new n(t,i,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(e,t){const r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r+e];return t}setMat(e,t){const r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r+e]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer,n=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<16;++e)s[n+e]=f[i+e]}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=16;class n{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=1;const n=this.TypedArrayConstructor;void 0===s&&(s=n.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,i):new n(t,i,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=1;var i=r(14286);class u{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=2;const n=this.TypedArrayConstructor;void 0===s&&(s=2*n.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,i):new n(t,i,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,t){return(0,i.s)(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1])}setVec(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer,n=e*this.typedBufferStride,i=r*t.typedBufferStride;s[n]=f[i],s[n+1]=f[i+1]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var y=r(17387);class d{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=3;const n=this.TypedArrayConstructor;void 0===s&&(s=3*n.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,i):new n(t,i,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,t){return(0,y.s)(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2])}setVec(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=s}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer,n=e*this.typedBufferStride,i=r*t.typedBufferStride;s[n]=f[i],s[n+1]=f[i+1],s[n+2]=f[i+2]}get buffer(){return this.typedBuffer.buffer}}d.ElementCount=3;var p=r(34353);class h{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=4;const n=this.TypedArrayConstructor;void 0===s&&(s=4*n.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,i):new n(t,i,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,t){return(0,p.s)(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])}setVec(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2],this.typedBuffer[e*this.typedBufferStride+3]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s,f){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=s,this.typedBuffer[e*this.typedBufferStride+3]=f}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer,n=e*this.typedBufferStride,i=r*t.typedBufferStride;s[n]=f[i],s[n+1]=f[i+1],s[n+2]=f[i+2],s[n+3]=f[i+3]}get buffer(){return this.typedBuffer.buffer}}h.ElementCount=4;class c extends n{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new c(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}c.ElementType="f32";class a extends u{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class o extends d{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f32";class l extends h{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class T extends s{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class b extends s{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class B extends f{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class E extends f{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class m extends n{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class A extends u{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class S extends d{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="f64";class g extends h{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class O extends n{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class w extends u{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class L extends d{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class _ extends h{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u8";class F extends n{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u16";class x extends u{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class C extends d{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class M extends h{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class N extends n{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class P extends u{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u32";class v extends d{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class R extends h{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class Y extends n{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class U extends u{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class I extends d{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class V extends h{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class k extends n{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class z extends u{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class j extends d{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i16";class q extends h{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class D extends n{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class H extends u{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";class K extends d{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}static fromTypedArray(e,t){return new K(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}K.ElementType="i32";class G extends h{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32"},80905:(e,t,r)=>{"use strict";r.d(t,{U$:()=>u});var s=r(12608),f=r(45072);class n{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new n(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,s){const f=this.stride;if(f%4==0){const n=new Uint32Array(e.buffer,t*f,s*f/4);new Uint32Array(this.buffer,r*f,s*f/4).set(n)}else{const n=new Uint8Array(e.buffer,t*f,s*f);new Uint8Array(this.buffer,r*f,s*f).set(n)}}}class i{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,s.Eu,t),this}vec2f64(e,t){return this.appendField(e,s.q6,t),this}vec3f(e,t){return this.appendField(e,s.ct,t),this}vec3f64(e,t){return this.appendField(e,s.fP,t),this}vec4f(e,t){return this.appendField(e,s.ek,t),this}vec4f64(e,t){return this.appendField(e,s.Cd,t),this}mat3f(e,t){return this.appendField(e,s.gK,t),this}mat3f64(e,t){return this.appendField(e,s.ey,t),this}mat4f(e,t){return this.appendField(e,s.bj,t),this}mat4f64(e,t){return this.appendField(e,s.O1,t),this}vec4u8(e,t){return this.appendField(e,s.mc,t),this}f32(e,t){return this.appendField(e,s.ly,t),this}f64(e,t){return this.appendField(e,s.oS,t),this}u8(e,t){return this.appendField(e,s.D_,t),this}u16(e,t){return this.appendField(e,s.av,t),this}i8(e,t){return this.appendField(e,s.Hz,t),this}vec2i8(e,t){return this.appendField(e,s.Vs,t),this}vec2i16(e,t){return this.appendField(e,s.or,t),this}vec2u8(e,t){return this.appendField(e,s.xA,t),this}vec4u16(e,t){return this.appendField(e,s.v6,t),this}u32(e,t){return this.appendField(e,s.Nu,t),this}appendField(e,t,r){const s=t.ElementCount*(0,f.n1)(t.ElementType),n=this.stride;this.fields.set(e,{size:s,constructor:t,offset:n,optional:r}),this.stride+=s,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new n(this,e)}createView(e){return new n(this,e)}clone(){const e=new i;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function u(){return new i}},45072:(e,t,r)=>{"use strict";function s(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function f(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function n(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}r.d(t,{n1:()=>s,U:()=>n,B3:()=>f,Op:()=>i}),r(95830)}}]);