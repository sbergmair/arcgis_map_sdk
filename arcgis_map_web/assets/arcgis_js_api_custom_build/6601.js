(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[6601],{16601:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>j});var r=l(56140),s=(l(95830),l(88263)),i=(l(36544),l(68055),l(79881)),o=l(30590),n=l(87566),a=l(60538),p=l(32656),u=l(10923),c=(l(57002),l(86035),l(73032)),y=l(61106),h=l(52937),d=(l(36348),l(36654)),m=l(56700),v=l(43072),f=l(78910),w=l(57407),b=l(33716),g=l(2194),Z=l(10113),T=l(18897),_=l(40920),C=l(33611);let R=class extends((0,w.h)((0,g.Q)((0,Z.M)((0,f.q)((0,b.I)((0,v.R)(m.Z))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new h.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,c.Z.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=c.Z.WebMercator,this.subDomains=null,this.tileInfo=new _.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new y.Z({x:-20037508.342787,y:20037508.342787,spatialReference:c.Z.WebMercator}),spatialReference:c.Z.WebMercator,lods:[new T.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new T.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new T.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new T.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new T.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new T.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new T.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new T.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new T.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new T.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new T.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new T.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new T.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new T.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new T.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new T.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new T.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new T.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new T.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new T.Z({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new u.R9(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new p.Z("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&c.Z.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,r=new u.R9(t),s=r.scheme?r.scheme+"://":"//",i=s+r.authority+"/";if(-1===r.authority.indexOf("{subDomain}"))e.push(i);else if(l&&l.length>0&&r.authority.split(".").length>1)for(const t of l)e.push(s+r.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new u.R9(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&(0,u.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,u.Fv)(e)),t.templateUrl=e}fetchTile(e,t,l,r={}){const{signal:s,timestamp:i}=r,o=this.getTileUrl(e,t,l),n={responseType:"image",signal:s};return null!=i&&(n.query={_ts:r.timestamp}),(0,d.default)(o,n).then((e=>e.data))}getTileUrl(e,t,l){const r=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+(0,s.gx)(this.urlPath,{level:r,z:r,col:l,x:l,row:t,y:t})}};(0,r._)([(0,i.Cb)({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),(0,r._)([(0,i.Cb)({type:h.Z,json:{write:!0}})],R.prototype,"fullExtent",void 0),(0,r._)([(0,i.Cb)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),(0,r._)([(0,i.Cb)({type:["show","hide"]})],R.prototype,"listMode",void 0),(0,r._)([(0,i.Cb)()],R.prototype,"levelValues",null),(0,r._)([(0,i.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),(0,r._)([(0,i.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),(0,r._)([(0,i.Cb)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),(0,r._)([(0,i.Cb)({type:c.Z})],R.prototype,"spatialReference",void 0),(0,r._)([(0,o.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),(0,r._)([(0,i.Cb)({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),(0,r._)([(0,i.Cb)({type:_.Z,json:{write:!0}})],R.prototype,"tileInfo",void 0),(0,r._)([(0,i.Cb)({readOnly:!0})],R.prototype,"tileServers",null),(0,r._)([(0,i.Cb)({json:{read:!1}})],R.prototype,"type",void 0),(0,r._)([(0,i.Cb)()],R.prototype,"urlPath",null),(0,r._)([(0,i.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),(0,r._)([(0,o.r)("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),(0,r._)([(0,a.c)("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),(0,r._)([(0,i.Cb)({type:C.Z,json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=(0,r._)([(0,n.j)("esri.layers.WebTileLayer")],R);const j=R},33611:(e,t,l)=>{"use strict";l.d(t,{Z:()=>u});var r,s=l(56140),i=(l(95830),l(82550)),o=(l(36544),l(68055),l(79881)),n=l(87566),a=(l(10923),l(57002),l(86035),l(58385));let p=r=class extends a.wq{constructor(e){super(e)}clone(){return new r({customLayerParameters:(0,i.d9)(this.customLayerParameters),customParameters:(0,i.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,s._)([(0,o.Cb)({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),(0,s._)([(0,o.Cb)({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=r=(0,s._)([(0,n.j)("esri.layer.support.WMTSLayerInfo")],p);const u=p}}]);