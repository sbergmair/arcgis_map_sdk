(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[9880],{59880:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Y});var i=r(56140),o=(r(95830),r(59472)),s=(r(36544),r(68055),r(79881)),n=r(30590),a=r(87566),p=r(32656),l=r(37704),c=r(53175),y=r(96054),d=r(10923),u=r(57002),h=r(9678),f=r(86035);function m(e){const t=(0,o.pC)(e)&&e.origins?e.origins:[void 0];return(r,i)=>{const n=function(e,t,r){if((0,o.pC)(e)&&"resource"===e.type)return function(e,t,r){const i=(0,c.VZ)(t,r);return{type:String,read:(e,t,r)=>{const o=(0,l.r)(e,t,r);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(t,s,n,a){if(!a||!a.resources)return"string"==typeof t?void(s[n]=(0,l.t)(t,a)):void(s[n]=t.write({},a));const p=function(e){return(0,o.Wi)(e)?null:"string"==typeof e?e:e.url}(t),c=p?(0,l.t)(p,{...a,verifyItemRelativeUrls:a&&a.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,u=i.type!==String&&(!(0,y.l)(this)||a&&a.origin&&this.originIdOf(r)>(0,h.M9)(a.origin));a&&a.portalItem&&(0,o.pC)(c)&&!(0,d.YP)(c)?u?function(e,t,r,i,o,s,n,a){const p=n.portalItem.resourceFromPath(i),l=w(r,i,n);(0,f.B)(l)===(0,d.Ml)(p.path)?(v(e,t,p,l,n.resources.toUpdate),o[s]=i):g(e,t,r,i,o,s,n,a)}(this,r,t,c,s,n,a,e):function(e,t,r,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(e)}),t[r]=e}(c,s,n,a):a&&a.portalItem&&((0,o.Wi)(c)||(0,o.pC)((0,l.i)(c))||(0,d.jc)(c)||u)?g(this,r,t,c,s,n,a,e):s[n]=c}}}}(e,t,r);switch((0,o.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=l.p;return{read:e,write:t}}}}(e,r,i);for(const e of t){const t=(0,s.CJ)(r,e,i);for(const e in n)t[e]=n[e]}}}function g(e,t,i,s,n,a,p,l){const c=(0,u.D)(),y=w(i,s,p),h=(0,d.v_)((0,o.U2)(l,"prefix"),c),m=`${h}.${(0,f.B)(y)}`,g=p.portalItem.resourceFromPath(m);(0,d.jc)(s)&&p.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,36654))).default,{data:i}=await t(e,{responseType:"blob"});return i}(s).then((e=>{g.path=`${h}.${(0,f.B)(e)}`,n[a]=g.itemRelativeUrl})).catch((()=>{}))),v(e,t,g,y,p.resources.toAdd),n[a]=g.itemRelativeUrl}function v(e,t,r,i,o){o.push({resource:r,content:i,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function w(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}var _,S=r(39105),b=r(59691),C=r(56700),I=r(43072),O=r(80621),T=r(18152),R=r(78910),U=r(48899),M=r(33716),N=r(10113),x=r(54209),L=r(61393),P=r(58385),j=r(28293),J=r(36654),Z=r(82550),k=r(15307),D=r(60538),V=r(53817),A=(r(36348),r(55162));let K=_=class extends P.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,i){if(i.layer&&i.layer.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,A.Up)(e.spatialReference,i.layer.spatialReference))return void(i&&i.messages&&i.messages.push(new k.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));const o=new V.Z;(0,A.Wt)(e,o,i.layer.spatialReference),t[r]=o.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference}clone(){return new _({geometry:(0,Z.d9)(this.geometry),type:this.type})}};(0,i._)([(0,s.Cb)({type:V.Z}),m()],K.prototype,"geometry",void 0),(0,i._)([(0,D.c)(["web-scene","portal-item"],"geometry")],K.prototype,"writeGeometry",null),(0,i._)([(0,s.Cb)({type:["clip","mask","replace"],nonNullable:!0}),m()],K.prototype,"type",void 0),K=_=(0,i._)([(0,a.j)("esri.layers.support.SceneModification")],K);const B=K;var F;let W=F=class extends((0,P.eC)(j.Z.ofType(B))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new F({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const r of e)this.add(B.fromJSON(r,t))}static fromJSON(e,t){const r=new F;return r._readModifications(e,t),r}static async fromUrl(e,t,r){const i={url:(0,d.mN)(e),origin:"service"},s=await(0,J.default)(e,{responseType:"json",signal:(0,o.U2)(r,"signal")}),n=t.toJSON(),a=[];for(const e of s.data)a.push(B.fromJSON({...e,geometry:{...e.geometry,spatialReference:n}},i));return new F({url:e,items:a})}};(0,i._)([(0,s.Cb)({type:String})],W.prototype,"url",void 0),W=F=(0,i._)([(0,a.j)("esri.layers.support.SceneModifications")],W);const $=W;let q=class extends((0,L.V)((0,U.Y)((0,R.q)((0,M.I)((0,N.M)((0,I.R)(C.Z))))))){constructor(...e){super(...e),this.handles=new b.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add((0,O.on)(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,l.f)(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,o.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){(0,S.r9)(e)}if(await this._fetchService(t),(0,o.pC)(this._modificationsSource)){const t=await $.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,o.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new p.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new p.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,i._)([(0,s.Cb)({type:String,readOnly:!0})],q.prototype,"geometryType",void 0),(0,i._)([(0,s.Cb)({type:["show","hide"]})],q.prototype,"listMode",void 0),(0,i._)([(0,s.Cb)({type:["IntegratedMeshLayer"]})],q.prototype,"operationalLayerType",void 0),(0,i._)([(0,s.Cb)({json:{read:!1},readOnly:!0})],q.prototype,"type",void 0),(0,i._)([(0,s.Cb)({type:x.U4,readOnly:!0})],q.prototype,"nodePages",void 0),(0,i._)([(0,s.Cb)({type:[x.QI],readOnly:!0})],q.prototype,"materialDefinitions",void 0),(0,i._)([(0,s.Cb)({type:[x.Yh],readOnly:!0})],q.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,s.Cb)({type:[x.H3],readOnly:!0})],q.prototype,"geometryDefinitions",void 0),(0,i._)([(0,s.Cb)({readOnly:!0})],q.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,s.Cb)({type:$}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],q.prototype,"modifications",void 0),(0,i._)([(0,n.r)(["web-scene","portal-item"],"modifications")],q.prototype,"readModifications",null),(0,i._)([(0,s.Cb)(T.PV)],q.prototype,"elevationInfo",void 0),(0,i._)([(0,s.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],q.prototype,"path",void 0),q=(0,i._)([(0,a.j)("esri.layers.IntegratedMeshLayer")],q);const Y=q}}]);