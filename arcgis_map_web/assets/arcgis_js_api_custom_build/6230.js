(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[6230],{66002:(e,t,r)=>{"use strict";r.d(t,{yZ:()=>s});var n=r(93533);function s(e,t){const r=t||e.extent,s=e.width,i=(0,n.c9)(r&&r.spatialReference);return r&&s?r.width/s*i*n.hd*96:0}},96230:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>fe});var n=r(56140),s=(r(95830),r(82550)),i=r(34926),a=r(59472),l=(r(36544),r(68055)),o=r(79881),u=r(56274),p=r(30590),d=r(87566),c=r(60538),y=r(10923),m=(r(57002),r(86035),r(65131)),h=r(27780),f=r(73032),b=r(52937),g=r(28293),x=r(58484),w=r(36654),v=r(15988),_=r(78452),E=r(56700),S=r(43072),N=r(97849),C=r(18152),I=r(78910),O=r(57407),R=r(33716),U=r(2194),F=r(10113),L=r(2584),A=r(77204),P=r(66002),M=r(32656);const j=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],q={84:4326,83:4269,27:4267};function T(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new M.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const n=k("Capability",r),s=k("Service",r),i=k("Request",n);if(!n||!s||!i)return null;const a=k("Layer",n);if(!a)return null;const l="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",o=D("Title",s,"")||D("Name",s,""),u=D("AccessConstraints",s,""),p=D("Abstract",s,""),d=parseInt(D("MaxWidth",s,"5000"),10),c=parseInt(D("MaxHeight",s,"5000"),10),y=$(i,"GetMap"),m=H(i,"GetMap"),h=J(a,l,t);let f,g,x,w,v=0;if(Array.prototype.slice.call(n.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===v?f=e:1===v?(h.name&&(h.name="",h.sublayers.push(J(f,l,t))),h.sublayers.push(J(e,l,t))):h.sublayers.push(J(e,l,t)),v++)})),!h)return null;const _=h.fullExtents;if(g=h.sublayers,g||(g=[]),0===g.length&&g.push(h),x=h.extent,!x){const e=new b.Z(g[0].extent);h.extent=e.toJSON(),x=h.extent}if(w=h.spatialReferences,!w.length&&g.length>0){const e=t=>{let r=[];return t.sublayers.forEach((t=>{!r.length&&t.spatialReferences.length&&(r=t.spatialReferences||e(t))})),r};g.forEach((t=>{w.length||(w=t.spatialReferences||e(t))}))}const E=H(i,"GetFeatureInfo");let S;if(E){const e=$(i,"GetFeatureInfo");e.indexOf("text/html")>-1?S="text/html":e.indexOf("text/plain")>-1&&(S="text/plain")}if(!S){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(h)}const N=W(g),C=h.minScale||0,I=h.maxScale||0,O=h.dimensions,R=N.reduce(((e,t)=>e.concat(t.dimensions)),[]),U=O.concat(R).filter(z);let F=null;if(U.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;U.forEach((r=>{const{extent:n}=r;!function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(n)?n.forEach((r=>{e=Math.min(e,r.min.getTime()),t=Math.max(t,r.max.getTime())})):n.forEach((r=>{e=Math.min(e,r.getTime()),t=Math.max(t,r.getTime())}))})),F={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:u,description:p,dimensions:O,extent:x,fullExtents:_,featureInfoFormat:S,featureInfoUrl:E,mapUrl:m,maxWidth:d,maxHeight:c,maxScale:I,minScale:C,layers:N,spatialReferences:w,supportedImageFormatTypes:y,timeInfo:F,title:o,version:l}}function Z(e){return j.some((([t,r])=>e>=t&&e<=r))}function W(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(W(e.sublayers)),delete e.sublayers)})),t}function V(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function k(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(Q(n)&&n.nodeName===e)return n}return null}function B(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];Q(s)&&s.nodeName===e&&r.push(s)}return r}function D(e,t,r){const n=k(e,t);return n?n.textContent:r}function G(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),i=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let l,o,u,p;r?(l=isNaN(s)?-Number.MAX_VALUE:s,o=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(a)?Number.MAX_VALUE:a,p=isNaN(i)?Number.MAX_VALUE:i):(l=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(s)?-Number.MAX_VALUE:s,u=isNaN(i)?Number.MAX_VALUE:i,p=isNaN(a)?Number.MAX_VALUE:a);const d=new f.Z({wkid:t});return new b.Z({xmin:l,ymin:o,xmax:u,ymax:p,spatialReference:d})}function H(e,t){const r=k(t,e);if(r){const e=k("DCPType",r);if(e){const t=k("HTTP",e);if(t){const e=k("Get",t);if(e){let t=function(e,t,r,n){const s=k("OnlineResource",r);return s?V("xlink:href",s,null):null}(0,0,e);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],n=(0,y.mN)(e);for(const e in n.query)n.query.hasOwnProperty(e)&&-1===t.indexOf(e.toLowerCase())&&r.push(e+"="+n.query[e]);return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function $(e,t){const r=B("Operation",e);if(0===r.length)return B("Format",k(t,e)).map((e=>e.textContent));const n=[];return r.forEach((e=>{e.getAttribute("name")===t&&B("Format",e).forEach((e=>{n.push(e.textContent)}))})),n}function X(e,t,r){const n=k(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const i=Number(s);return isNaN(i)?r:i}function J(e,t,r){var n;if(!e)return null;const s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},i=k("LatLonBoundingBox",e),a=k("EX_GeographicBoundingBox",e);let l=null;i&&(l=G(i,4326)),a&&(l=new b.Z(0,0,0,0,new f.Z({wkid:4326})),l.xmin=parseFloat(D("westBoundLongitude",a,"0")),l.ymin=parseFloat(D("southBoundLatitude",a,"0")),l.xmax=parseFloat(D("eastBoundLongitude",a,"0")),l.ymax=parseFloat(D("northBoundLatitude",a,"0"))),i||a||(l=new b.Z(-180,-90,180,90,new f.Z({wkid:4326}))),s.minScale=X(e,"MaxScaleDenominator",0),s.maxScale=X(e,"MinScaleDenominator",0);const o=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)s.name=e.textContent||"";else if("Title"===e.nodeName)s.title=e.textContent||"";else if("Abstract"===e.nodeName)s.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(o);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||l||(l="1.3.0"===t?G(e,n,Z(n)):G(e,n))}const n=r&&r.indexOf(":");if(n&&n>-1){let i=parseInt(r.substring(n+1,r.length),10);0===i||isNaN(i)||(i=q[i]?q[i]:i);const a="1.3.0"===t?G(e,i,Z(i)):G(e,i);s.fullExtents.push(a)}}else if(e.nodeName===o)e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(q[e]&&(e=q[e]),-1===s.spatialReferences.indexOf(e)&&s.spatialReferences.push(e))}));else if("Style"!==e.nodeName||s.legendURL){if("Layer"===e.nodeName){const n=J(e,t,r);n&&(n.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(n))}}else{const t=k("LegendURL",e);if(t){const e=k("OnlineResource",t);e&&(s.legendURL=e.getAttribute("xlink:href"))}}})),s.extent=null==(n=l)?void 0:n.toJSON(),s.dimensions=B("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,s=e.getAttribute("unitSymbol"),i=e.getAttribute("default"),a="0"!==V("default",e,"0"),l="0"!==V("nearestValue",e,"0"),o="0"!==V("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(r)?{name:"time",units:"ISO8601",extent:ee(n),default:ee(i),multipleValues:a,nearestValue:l,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:r,extent:Y(n),unitSymbol:s,default:Y(i),multipleValues:a,nearestValue:l}:{name:t,units:r,extent:K(n),unitSymbol:s,default:K(i),multipleValues:a,nearestValue:l}})),s}function Q(e){return e.nodeType===Node.ELEMENT_NODE}function z(e){return"time"===e.name}function Y(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):r.map((e=>parseFloat(e)))}function K(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):r}function ee(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?te(t[2]):void 0}})).filter((e=>e)):r.map((e=>new Date(e)))}function te(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:re(t[1]),months:re(t[2]),days:re(t[3]),hours:re(t[4]),minutes:re(t[5]),seconds:re(t[6])}:null}function re(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function ne(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const se=new Set([102100,3857,102113,900913]),ie=new Set([3395,54004]);var ae,le=r(58807),oe=r(60263),ue=r(59691);let pe=0,de=ae=class extends S.w{constructor(e){super(e),this._sublayersHandles=new ue.Z,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?b.Z.fromJSON(e):null}get id(){const e=this._get("id");return null==e?pe++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))])),this._set("sublayers",e)}castSublayers(e){return(0,l.se)(g.Z.ofType(ae),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new ae;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((e=>e.clone()))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,n._)([(0,o.Cb)()],de.prototype,"description",null),(0,n._)([(0,o.Cb)({readOnly:!0})],de.prototype,"dimensions",void 0),(0,n._)([(0,o.Cb)({value:null})],de.prototype,"fullExtent",null),(0,n._)([(0,p.r)("fullExtent",["extent"])],de.prototype,"readExtent",null),(0,n._)([(0,o.Cb)()],de.prototype,"fullExtents",void 0),(0,n._)([(0,o.Cb)()],de.prototype,"featureInfoFormat",void 0),(0,n._)([(0,o.Cb)()],de.prototype,"featureInfoUrl",void 0),(0,n._)([(0,o.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],de.prototype,"id",null),(0,n._)([(0,o.Cb)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],de.prototype,"legendUrl",void 0),(0,n._)([(0,p.r)(["web-document"],"legendUrl")],de.prototype,"readLegendUrl",null),(0,n._)([(0,o.Cb)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],de.prototype,"legendEnabled",void 0),(0,n._)([(0,o.Cb)({value:null})],de.prototype,"layer",null),(0,n._)([(0,o.Cb)()],de.prototype,"maxScale",void 0),(0,n._)([(0,o.Cb)()],de.prototype,"minScale",void 0),(0,n._)([(0,o.Cb)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],de.prototype,"name",null),(0,n._)([(0,o.Cb)()],de.prototype,"parent",void 0),(0,n._)([(0,o.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],de.prototype,"popupEnabled",void 0),(0,n._)([(0,o.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],de.prototype,"queryable",void 0),(0,n._)([(0,o.Cb)()],de.prototype,"sublayers",null),(0,n._)([(0,oe.p)("sublayers")],de.prototype,"castSublayers",null),(0,n._)([(0,o.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],de.prototype,"spatialReferences",void 0),(0,n._)([(0,o.Cb)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],de.prototype,"title",null),(0,n._)([(0,o.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],de.prototype,"visible",null),de=ae=(0,n._)([(0,d.j)("esri.layers.support.WMSSublayer")],de);const ce=de,ye=new u.Xn({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let me=class extends((0,A.p)((0,O.h)((0,L.n)((0,U.Q)((0,F.M)((0,I.q)((0,R.I)((0,S.R)(E.Z))))))))){constructor(...e){super(...e),this.allSublayers=new _.Z({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",((e,t)=>{if(t){for(const e of t)e.layer=null;this.handles.remove("wms-sublayer")}if(e){for(const t of e)t.parent=this,t.layer=this;this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"wms-sublayer")}}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,a.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new b.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new f.Z(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return he(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return he(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,i=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();i.forEach((e=>{"number"==typeof e.parent.id&&(s.has(e.parent.id)?s.get(e.parent.id).push(e.id):s.set(e.parent.id,[e.id]))})),i.forEach((e=>{const r={sublayer:e,...n},i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(s.has(e.id)&&(i.sublayerIds=s.get(e.id)),!e.sublayers&&e.name){const n=e.write({},r);delete n.id,t.layers.push(n)}})),t.visibleLayers=i.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name))}createExportImageParameters(e,t,r,n){const s=n&&n.pixelRatio||1,i=(0,P.yZ)({extent:e,width:t})*s,l=new le.j({layer:this,scale:i}),{xmin:o,ymin:u,xmax:p,ymax:d,spatialReference:c}=e,y=function(e,t){let r=e.wkid;return(0,a.Wi)(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),se.has(r)?t.find((e=>se.has(e)))||t.find((e=>ie.has(e)))||102100:r)}(c,this.spatialReferences),m="1.3.0"===this.version&&Z(y)?`${u},${o},${d},${p}`:`${o},${u},${p},${d}`,h=l.toJSON();return{bbox:m,["1.3.0"===this.version?"crs":"srs"]:isNaN(y)?void 0:"EPSG:"+y,...h}}async fetchImage(e,t,r,n){var s,i;const a=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const o=null==n||null==(s=n.timeExtent)?void 0:s.start,u=null==n||null==(i=n.timeExtent)?void 0:i.end,p=o&&u?o.getTime()===u.getTime()?ne(o):`${ne(o)}/${ne(u)}`:void 0,d={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:p}),signal:null==n?void 0:n.signal};return null!=n&&n.timestamp&&(d.query={_ts:n.timestamp,...d.query}),(0,w.default)(a,d).then((e=>e.data))}fetchFeatureInfo(e,t,r,n,s){const i=(0,P.yZ)({extent:e,width:t}),a=function(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}(new le.j({layer:this,scale:i}).visibleSublayers);if(!this.featureInfoUrl||!a)return null;const l="1.3.0"===this.version?{I:n,J:s}:{x:n,y:s},o={query_layers:a,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...l},u={...this.createExportImageParameters(e,t,r),...o},p=this._mixCustomParameters(u),d=(0,y.fl)(this.featureInfoUrl,p),c=document.createElement("iframe");c.src=d,c.frameBorder="0",c.marginHeight="0",c.marginWidth="0",c.style.width="100%",c.setAttribute("sandbox","");const m=new x.Z({title:this.title,content:c});return new v.Z({sourceLayer:this,popupTemplate:m})}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}supportsSpatialReference(e){return(0,N.G)(this.url)||this.spatialReferences.some((t=>{const r=900913===t?f.Z.WebMercator:new f.Z({wkid:t});return(0,h.fS)(r,e)}))}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await(0,w.default)(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=T(t.data)}if(this.parsedUrl){const e=new y.R9(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==i.Z.request.httpsDomains.indexOf(e.host)||i.Z.request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function he(e,t,r){const n=new Map;e.every((e=>null==e.id))&&(e=(0,s.d9)(e)).forEach(((e,t)=>e.id=t));for(const s of e){const e=new ce;e.read(s,t),-1===(null==r?void 0:r.indexOf(e.name))&&(e.visible=!1),n.set(e.id,e)}const i=[];for(const t of e){const e=n.get(t.id);if(null!=t.parentLayerId&&t.parentLayerId>=0){const r=n.get(t.parentLayerId);r.sublayers||(r.sublayers=new g.Z),r.sublayers.unshift(e)}else i.unshift(e)}return i}(0,n._)([(0,o.Cb)({readOnly:!0})],me.prototype,"allSublayers",void 0),(0,n._)([(0,o.Cb)({json:{type:Object,write:!0}})],me.prototype,"customParameters",void 0),(0,n._)([(0,o.Cb)({json:{type:Object,write:!0}})],me.prototype,"customLayerParameters",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],me.prototype,"copyright",void 0),(0,n._)([(0,o.Cb)()],me.prototype,"description",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],me.prototype,"dimensions",void 0),(0,n._)([(0,o.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],me.prototype,"fullExtent",void 0),(0,n._)([(0,p.r)(["web-document","portal-item"],"fullExtent",["extent"])],me.prototype,"readFullExtentFromItemOrMap",null),(0,n._)([(0,c.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],me.prototype,"writeFullExtent",null),(0,n._)([(0,o.Cb)()],me.prototype,"fullExtents",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],me.prototype,"featureInfoFormat",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],me.prototype,"featureInfoUrl",void 0),(0,n._)([(0,o.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:ye.jsonValues,read:{reader:ye.read,source:"format"},write:{writer:ye.write,target:"format"}}}}})],me.prototype,"imageFormat",void 0),(0,n._)([(0,p.r)("imageFormat",["supportedImageFormatTypes"])],me.prototype,"readImageFormat",null),(0,n._)([(0,o.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],me.prototype,"imageMaxHeight",void 0),(0,n._)([(0,o.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],me.prototype,"imageMaxWidth",void 0),(0,n._)([(0,o.Cb)()],me.prototype,"imageTransparency",void 0),(0,n._)([(0,o.Cb)(C.rn)],me.prototype,"legendEnabled",void 0),(0,n._)([(0,o.Cb)({type:["show","hide","hide-children"]})],me.prototype,"listMode",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],me.prototype,"mapUrl",void 0),(0,n._)([(0,o.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],me.prototype,"isReference",void 0),(0,n._)([(0,o.Cb)({type:["WMS"]})],me.prototype,"operationalLayerType",void 0),(0,n._)([(0,o.Cb)({type:f.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],me.prototype,"spatialReference",void 0),(0,n._)([(0,p.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],me.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,n._)([(0,o.Cb)({type:[l.z8],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],me.prototype,"spatialReferences",void 0),(0,n._)([(0,c.c)(["web-document","portal-item"],"spatialReferences")],me.prototype,"writeSpatialReferences",null),(0,n._)([(0,o.Cb)({type:g.Z.ofType(ce),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if((0,m.df)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],me.prototype,"sublayers",void 0),(0,n._)([(0,p.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],me.prototype,"readSublayersFromItemOrMap",null),(0,n._)([(0,p.r)("service","sublayers",["layers"])],me.prototype,"readSublayers",null),(0,n._)([(0,c.c)("sublayers",{layers:{type:[ce]},visibleLayers:{type:[String]}})],me.prototype,"writeSublayers",null),(0,n._)([(0,o.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],me.prototype,"type",void 0),(0,n._)([(0,o.Cb)(C.HQ)],me.prototype,"url",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],me.prototype,"version",void 0),me=(0,n._)([(0,d.j)("esri.layers.WMSLayer")],me);const fe=me},58807:(e,t,r)=>{"use strict";r.d(t,{j:()=>u});var n=r(56140),s=(r(95830),r(36544),r(68055),r(79881)),i=r(87566),a=(r(10923),r(57002),r(86035),r(79152)),l=r(77204);const o={visible:"visibleSublayers"};let u=class extends((0,l.p)(a.Z)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(o[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=null==e?void 0:e.sublayers,n=[],s=e=>{const{minScale:r,maxScale:i,sublayers:a,visible:l}=e;l&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(a?a.forEach(s):n.unshift(e))};return null==r||r.forEach(s),n}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:n,version:s}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:n,version:s,layers:t}}};(0,n._)([(0,s.Cb)()],u.prototype,"layer",null),(0,n._)([(0,s.Cb)({readOnly:!0})],u.prototype,"layers",null),(0,n._)([(0,s.Cb)({type:Number})],u.prototype,"scale",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],u.prototype,"version",null),(0,n._)([(0,s.Cb)({readOnly:!0})],u.prototype,"visibleSublayers",null),u=(0,n._)([(0,i.j)("esri.layers.support.ExportWMSImageParameters")],u)}}]);