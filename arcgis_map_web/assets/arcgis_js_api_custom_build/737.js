(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[737],{11555:(e,t,r)=>{"use strict";r.d(t,{R:()=>u});var a=r(56140),s=(r(95830),r(36544),r(68055),r(79881)),i=r(87566),n=(r(10923),r(57002),r(86035),r(79152)),l=r(18152),o=r(77204),h=r(24681);const p={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let u=class extends((0,o.p)(n.Z)){constructor(e){super(e),this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>e.toExportImageJSON()));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,h.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(p[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter((e=>null!=e.definitionExpression));return e.length?JSON.stringify(e.reduce(((e,t)=>(e[t.id]=t.definitionExpression,e)),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const a=this.scale,s=0===a,i=0===t.minScale||a<=t.minScale,n=0===t.maxScale||a>=t.maxScale;t.visible&&(s||i&&n)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const a=this._get("visibleSublayers");return!a||a.length!==e.length||a.some(((t,r)=>e[r]!==t))?e:a}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,a._)([(0,s.Cb)({readOnly:!0})],u.prototype,"dynamicLayers",null),(0,a._)([(0,s.Cb)({readOnly:!0})],u.prototype,"hasDynamicLayers",null),(0,a._)([(0,s.Cb)()],u.prototype,"layer",null),(0,a._)([(0,s.Cb)({readOnly:!0})],u.prototype,"layers",null),(0,a._)([(0,s.Cb)({readOnly:!0})],u.prototype,"layerDefs",null),(0,a._)([(0,s.Cb)({type:Number})],u.prototype,"scale",void 0),(0,a._)([(0,s.Cb)(l.qG)],u.prototype,"timeExtent",void 0),(0,a._)([(0,s.Cb)({readOnly:!0})],u.prototype,"version",null),(0,a._)([(0,s.Cb)({readOnly:!0})],u.prototype,"visibleSublayers",null),u=(0,a._)([(0,i.j)("esri.layers.mixins.ExportImageParameters")],u)},83873:(e,t,r)=>{"use strict";function a(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function s(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,r=0;for(let a=0;a<e.length;a++){const s=e[a].size;"number"==typeof s&&(t+=s,r++)}return t/r}(e.stops):t}function i(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:a}=t;return(s(r,e)+s(a,e))/2}));let a=0;const i=r.length;if(0===i)return e;for(let e=0;e<i;e++)a+=r[e];const n=Math.floor(a/i);return Math.max(n,e)}function n(e){const t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;const s="visualVariables"in t?i(r,t.visualVariables):r;if("simple"===t.type)return a(s,t.symbol);if("unique-value"===t.type){let e=s;return t.uniqueValueInfos.forEach((t=>{e=a(e,t.symbol)})),e}if("class-breaks"===t.type){let e=s;return t.classBreakInfos.forEach((t=>{e=a(e,t.symbol)})),e}return t.type,s}r.d(t,{k:()=>n})},60737:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>T});var a=r(56140),s=(r(95830),r(36544)),i=(r(68055),r(79881)),n=r(87566),l=(r(10923),r(57002),r(86035),r(39105)),o=r(99322),h=r(12421),p=r(48164),u=r(37694),c=r(28301),y=r(59472),m=r(32656),d=r(30927),f=r(18152),g=r(11555),b=r(83873),v=r(21707);const x=e=>{let t=class extends e{initialize(){this.exportImageParameters=new g.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)return Promise.reject(new m.Z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const a=this.get("view.scale"),s=[],i=async e=>{const r=0===e.minScale||a<=e.minScale,n=0===e.maxScale||a>=e.maxScale;if(e.visible&&r&&n)if(e.sublayers)e.sublayers.forEach(i);else if(e.popupEnabled){const r=(0,v.V)(e,{...t,defaultPopupTemplateEnabled:!1});(0,y.pC)(r)&&s.unshift({sublayer:e,popupTemplate:r})}},n=r.sublayers.toArray().reverse().map(i);await Promise.all(n);const o=s.map((async({sublayer:r,popupTemplate:a})=>{await r.load().catch((()=>{}));const s=r.createQuery(),i=(0,y.pC)(t)?t.event:null,n=(0,b.k)({renderer:r.renderer,event:i}),l=this.createFetchPopupFeaturesQueryGeometry(e,n);s.geometry=l,s.outFields=await(0,v.e)(r,a);const o=await this._loadArcadeModules(a);return o&&o.arcadeUtils.hasGeometryOperations(a)||(s.maxAllowableOffset=l.width/n),(await r.queryFeatures(s)).features}));return(await(0,l.as)(o)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return(0,d.LC)()}};return(0,a._)([(0,i.Cb)()],t.prototype,"exportImageParameters",void 0),(0,a._)([(0,i.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,a._)([(0,i.Cb)()],t.prototype,"layer",void 0),(0,a._)([(0,i.Cb)()],t.prototype,"suspended",void 0),(0,a._)([(0,i.Cb)(f.qG)],t.prototype,"timeExtent",void 0),t=(0,a._)([(0,n.j)("esri.views.layers.MapImageLayerView")],t),t};var w=r(28511),C=r(81558),_=r(81186),S=r(31514),I=r(61343);let P=class extends I.Z{renderChildren(e){if(e.drawPhase!==S.jx.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};P=(0,a._)([(0,n.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],P);const E=P,L=s.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D");let M=class extends(x((0,h.yc)((0,C.y)(p.Z)))){constructor(){super(...arguments),this._highlightGraphics=new o.ZP}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{(0,l.D_)(e)||L.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,a=r>=10.3,s=r>=10;this._bitmapContainer=new w.c,this.container.addChild(this._bitmapContainer);const i=new c.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new E(this.view.featuresTilingScheme)});this.container.addChild(i.container),this.strategy=new _.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:a,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return(0,u.K)(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...a})}};(0,a._)([(0,i.Cb)()],M.prototype,"strategy",void 0),(0,a._)([(0,i.Cb)()],M.prototype,"updating",void 0),M=(0,a._)([(0,n.j)("esri.views.2d.layers.MapImageLayerView2D")],M);const T=M},21707:(e,t,r)=>{"use strict";r.d(t,{V:()=>n,e:()=>i});var a=r(59472),s=r(4665);async function i(e,t=e.popupTemplate){if(!(0,a.pC)(t))return[];const r=await t.getRequiredFields(e.fields),{lastEditInfoEnabled:i}=t,{objectIdField:n,typeIdField:l,globalIdField:o,relationships:h}=e;if(r.includes("*"))return["*"];const p=i?await(0,s.CH)(e):[],u=(0,s.Q0)(e.fields,[...r,...p]);return l&&u.push(l),u&&n&&(0,s.cT)(e.fields,n)&&-1===u.indexOf(n)&&u.push(n),u&&o&&(0,s.cT)(e.fields,o)&&-1===u.indexOf(o)&&u.push(o),h&&h.forEach((t=>{const{keyField:r}=t;u&&r&&(0,s.cT)(e.fields,r)&&-1===u.indexOf(r)&&u.push(r)})),u}function n(e,t){return e.popupTemplate?e.popupTemplate:(0,a.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,a.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},37694:(e,t,r)=>{"use strict";r.d(t,{K:()=>n});var a=r(59472),s=r(52937),i=(r(36348),r(93533));function n(e,t,r,n=new s.Z){let l;if("2d"===r.type)l=t*r.resolution;else if("3d"===r.type){const s=r.overlayPixelSizeInMapUnits(e),n=r.basemapSpatialReference;l=(0,a.pC)(n)&&!n.equals(r.spatialReference)?(0,i.c9)(n)/(0,i.c9)(r.spatialReference):t*s}const o=e.x-l,h=e.y-l,p=e.x+l,u=e.y+l,{spatialReference:c}=r;return n.xmin=Math.min(o,p),n.ymin=Math.min(h,u),n.xmax=Math.max(o,p),n.ymax=Math.max(h,u),n.spatialReference=c,n}new s.Z}}]);