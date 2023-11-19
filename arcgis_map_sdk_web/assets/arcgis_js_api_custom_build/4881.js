"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[4881],{49999:(e,t,r)=>{r.d(t,{j:()=>h});var a=r(36663),s=r(53443),i=r(53280),n=r(81977),o=(r(7283),r(7753),r(40266));const p={visible:"visibleSublayers"};let h=class extends((0,i.p)(s.Z)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(p[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((({name:e})=>e)).map((({name:e})=>e)).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e?.sublayers,a=[],s=e=>{const{minScale:r,maxScale:i,sublayers:n,visible:o}=e;o&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(n?n.forEach(s):a.push(e))};return r?.forEach(s),a}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:a,version:s}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:a?"TRUE":"FALSE",version:s,layers:t}}};(0,a._)([(0,n.Cb)()],h.prototype,"layer",null),(0,a._)([(0,n.Cb)({readOnly:!0})],h.prototype,"layers",null),(0,a._)([(0,n.Cb)({type:Number})],h.prototype,"scale",void 0),(0,a._)([(0,n.Cb)({readOnly:!0})],h.prototype,"version",null),(0,a._)([(0,n.Cb)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,a._)([(0,o.j)("esri.layers.support.ExportWMSImageParameters")],h)},44881:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var a=r(36663),s=r(13802),i=r(61681),n=r(78668),o=r(76868),p=r(81977),h=(r(7283),r(7753),r(40266)),l=r(91772),u=r(12688),y=r(80347),c=r(23134),m=r(26216),d=r(55068),g=r(45312);let b=class extends((0,g.Z)((0,d.Z)((0,y.y)(m.Z)))){constructor(){super(...arguments),this.bitmapContainer=new u.c}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,n.D_)(e)||s.Z.getLogger(this.declaredClass).error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new u.c,this.container.addChild(this.bitmapContainer),this.strategy=new c.Z({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles((0,o.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate())))}detach(){this.strategy=(0,i.SC)(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:a,y:s}=e,{spatialReference:i}=t;let n,o=0,p=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:u,y}=e,c=u+h*t,m=y-h*r;return a>=u&&a<=c&&s<=y&&s>=m&&(n=new l.Z({xmin:u,ymin:m,xmax:c,ymax:y,spatialReference:i}),o=t,p=r,!0)})),!n)return null;const h=n.width/o,u=Math.round((a-n.xmin)/h),y=Math.round((n.ymax-s)/h);return{extent:n,width:o,height:p,x:u,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...a})}};(0,a._)([(0,p.Cb)()],b.prototype,"strategy",void 0),(0,a._)([(0,p.Cb)()],b.prototype,"updating",void 0),b=(0,a._)([(0,h.j)("esri.views.2d.layers.WMSLayerView2D")],b);const x=b},45312:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(36663),s=r(70375),i=r(61681),n=r(81977),o=(r(7283),r(7753),r(40266)),p=r(51599),h=r(49999);const l=e=>{let t=class extends e{initialize(){this.exportImageParameters=new h.j({layer:this.layer})}destroy(){this.exportImageParameters=(0,i.SC)(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new s.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const a=this.createFetchPopupFeaturesQuery(e);if(!a)return Promise.resolve([]);const{extent:i,width:n,height:o,x:p,y:h}=a;if(!(i&&n&&o))throw new s.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:n,height:o});return t.fetchFeatureInfo(i,n,o,p,h)}};return(0,a._)([(0,n.Cb)()],t.prototype,"exportImageParameters",void 0),(0,a._)([(0,n.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,a._)([(0,n.Cb)()],t.prototype,"layer",void 0),(0,a._)([(0,n.Cb)(p.qG)],t.prototype,"timeExtent",void 0),t=(0,a._)([(0,o.j)("esri.layers.mixins.WMSLayerView")],t),t}}}]);