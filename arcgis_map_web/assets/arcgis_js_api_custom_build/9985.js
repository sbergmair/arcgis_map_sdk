(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[9985,6194],{39597:(e,t,o)=>{"use strict";o.d(t,{p:()=>r});var n=o(98863);function r(e,t,o){if(!o||!o.features||!o.hasZ)return;const r=(0,n.k)(o.geometryType,t,e.outSpatialReference);if(r)for(const e of o.features)r(e.geometry)}},98863:(e,t,o)=>{"use strict";o.d(t,{k:()=>s,P:()=>a});var n=o(59472),r=o(27780),i=o(93533);function s(e,t,o){if((0,n.Wi)(t)||(0,n.Wi)(o)||o.vcsWkid||(0,r.fS)(t,o))return null;const s=(0,i._R)(t)/(0,i._R)(o);if(1===s)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,s);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const o of e.paths)for(const e of o)e.length>2&&(e[2]*=t)}(e,s);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const o of e.rings)for(const e of o)e.length>2&&(e[2]*=t)}(e,s);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const o of e.points)o.length>2&&(o[2]*=t)}(e,s);default:return null}}function l(e,t,o){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=o)}function a(e,t,o){if(!e&&!t||!o)return;const n=(0,i._R)(o);p(e,o,n),p(t,o,n)}function p(e,t,o){if(e)for(const n of e)f(n.geometry,t,o)}function f(e,t,o){if(!e||!e.spatialReference||(0,r.fS)(e.spatialReference,t))return;const n=(0,i._R)(e.spatialReference)/o;if(1!==n)if("x"in e)null!=e.z&&(e.z*=n);else if("rings"in e)l(e,e.rings,n);else if("paths"in e)l(e,e.paths,n);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=n)}},76194:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});var n=o(56140),r=(o(95830),o(59472)),i=(o(36544),o(68055),o(79881)),s=o(56274),l=o(30590),a=o(87566),p=o(60538),f=(o(10923),o(57002),o(86035),o(58385)),u=o(73032),c=o(56885),y=o(36348),h=o(15988),m=o(70834);const g=new s.Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let d=class extends f.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=u.Z.fromJSON(t.spatialReference),n=[];for(let t=0;t<e.length;t++){const i=e[t],s=h.Z.fromJSON(i),l=i.geometry&&i.geometry.spatialReference;(0,r.pC)(s.geometry)&&!l&&(s.geometry.spatialReference=o),n.push(s)}return n}writeGeometryType(e,t,o,n){if(e)return void g.write(e,t,o,n);const{features:i}=this;if(i)for(const e of i)if(e&&(0,r.pC)(e.geometry))return void g.write(e.geometry.type,t,o,n)}readQueryGeometry(e,t){if(!e)return null;const o=!!e.spatialReference,n=(0,c.im)(e);return!o&&t.spatialReference&&(n.spatialReference=u.Z.fromJSON(t.spatialReference)),n}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:o}=this;if(o)for(const e of o)if(e&&(0,r.pC)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let o=0;o<t.features.length;o++){const n=t.features[o];if(n.geometry){const t=e&&e[o];n.geometry=t&&t.toJSON()||n.geometry}}return t}quantize(e){const{scale:[t,o],translate:[n,i]}=e,s=this.features,l=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-n)/t)),(e=>Math.round((i-e)/o)));for(let e=0,t=s.length;e<t;e++)l((0,r.Wg)(s[e].geometry))||(s.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:o}=this;if(!o)return this;const{translate:[n,i],scale:[s,l]}=o,a=this._getHydrationFunction(e,(e=>e*s+n),(e=>i-e*l));for(const{geometry:e}of t)(0,r.pC)(e)&&a(e);return this.transform=null,this}_quantizePoints(e,t,o){let n,r;const i=[];for(let s=0,l=e.length;s<l;s++){const l=e[s];if(s>0){const e=t(l[0]),s=o(l[1]);e===n&&s===r||(i.push([e-n,s-r]),n=e,r=s)}else n=t(l[0]),r=o(l[1]),i.push([n,r])}return i.length>0?i:null}_getQuantizationFunction(e,t,o){return"point"===e?e=>(e.x=t(e.x),e.y=o(e.y),e):"polyline"===e||"polygon"===e?e=>{const n=(0,c.oU)(e)?e.rings:e.paths,r=[];for(let e=0,i=n.length;e<i;e++){const i=n[e],s=this._quantizePoints(i,t,o);s&&r.push(s)}return r.length>0?((0,c.oU)(e)?e.rings=r:e.paths=r,e):null}:"multipoint"===e?e=>{const n=this._quantizePoints(e.points,t,o);return n.length>0?(e.points=n,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,o){return"point"===e?e=>{e.x=t(e.x),e.y=o(e.y)}:"polyline"===e||"polygon"===e?e=>{const n=(0,c.oU)(e)?e.rings:e.paths;let r,i;for(let e=0,s=n.length;e<s;e++){const s=n[e];for(let e=0,n=s.length;e<n;e++){const n=s[e];e>0?(r+=n[0],i+=n[1]):(r=n[0],i=n[1]),n[0]=t(r),n[1]=o(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=o(e.ymin),e.xmax=t(e.xmax),e.ymax=o(e.ymax)}:"multipoint"===e?e=>{const n=e.points;let r,i;for(let e=0,s=n.length;e<s;e++){const s=n[e];e>0?(r+=s[0],i+=s[1]):(r=s[0],i=s[1]),s[0]=t(r),s[1]=o(i)}}:void 0}};(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],d.prototype,"displayFieldName",void 0),(0,n._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"exceededTransferLimit",void 0),(0,n._)([(0,i.Cb)({type:[h.Z],json:{write:!0}})],d.prototype,"features",void 0),(0,n._)([(0,l.r)("features")],d.prototype,"readFeatures",null),(0,n._)([(0,i.Cb)({type:[m.Z],json:{write:!0}})],d.prototype,"fields",void 0),(0,n._)([(0,i.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],d.prototype,"geometryType",void 0),(0,n._)([(0,p.c)("geometryType")],d.prototype,"writeGeometryType",null),(0,n._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasM",void 0),(0,n._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasZ",void 0),(0,n._)([(0,i.Cb)({types:y.qM,json:{write:!0}})],d.prototype,"queryGeometry",void 0),(0,n._)([(0,l.r)("queryGeometry")],d.prototype,"readQueryGeometry",null),(0,n._)([(0,i.Cb)({type:u.Z,json:{write:!0}})],d.prototype,"spatialReference",void 0),(0,n._)([(0,p.c)("spatialReference")],d.prototype,"writeSpatialReference",null),(0,n._)([(0,i.Cb)({json:{write:!0}})],d.prototype,"transform",void 0),d=(0,n._)([(0,a.j)("esri.tasks.support.FeatureSet")],d),d.prototype.toJSON.isDefaultToJSON=!0,d||(d={});const _=d}}]);