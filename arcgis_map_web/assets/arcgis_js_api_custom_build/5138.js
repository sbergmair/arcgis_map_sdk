(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[5138],{75138:(e,r,t)=>{"use strict";t.r(r),t.d(r,{create:()=>s,projectGeometry:()=>l});var i=t(34926),o=t(32656),n=t(32797),a=t(52411);async function s(e=null,r){if(i.Z.geometryServiceUrl)return new(0,(await t.e(5019).then(t.bind(t,91626))).default)({url:i.Z.geometryServiceUrl});if(!e)throw new o.Z("internal:geometry-service-url-not-configured");let a;if(a="portal"in e?e.portal||n.Z.getDefault():e,await a.load({signal:r}),a.helperServices&&a.helperServices.geometry&&a.helperServices.geometry.url)return new(0,(await t.e(5019).then(t.bind(t,91626))).default)({url:a.helperServices.geometry.url});throw new o.Z("internal:geometry-service-url-not-configured")}async function l(e,r,t=null,i){const n=await s(t,i),l=new a.Z;l.geometries=[e],l.outSpatialReference=r;const c=await n.project(l,{signal:i});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new o.Z("internal:geometry-service-projection-failed")}},52411:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var i=t(56140),o=(t(95830),t(36544),t(68055),t(79881)),n=t(87566),a=(t(10923),t(57002),t(86035),t(58385)),s=t(56885);let l=class extends a.wq{constructor(e){super(e),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map((function(e){return e.toJSON()})),r=this.geometries[0],t={};return t.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),t.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference.toJSON()),t.geometries=JSON.stringify({geometryType:(0,s.Ji)(r),geometries:e}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(t.transformForward=this.transformForward),t}};(0,i._)([(0,o.Cb)()],l.prototype,"geometries",void 0),(0,i._)([(0,o.Cb)({json:{read:{source:"outSR"}}})],l.prototype,"outSpatialReference",void 0),(0,i._)([(0,o.Cb)()],l.prototype,"transformation",void 0),(0,i._)([(0,o.Cb)()],l.prototype,"transformForward",void 0),l=(0,i._)([(0,n.j)("esri.tasks.support.ProjectParameters")],l);const c=l}}]);