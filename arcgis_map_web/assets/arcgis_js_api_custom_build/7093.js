(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[7093],{47977:(e,t,r)=>{"use strict";r.d(t,{E:()=>o});class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,a="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=a&&(r[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else r[e]=t[e]}),this),r}}function o(e){return new s(e)}},97274:(e,t,r)=>{"use strict";r.d(t,{et:()=>w,ef:()=>_,bI:()=>N,mT:()=>C,Wf:()=>B});var s=r(10103),o=r(59472),a=r(32656),n=r(36654),i=r(66849),l=r(56140),u=(r(95830),r(36544),r(68055),r(79881)),p=r(30590),d=r(87566),c=(r(10923),r(57002),r(86035),r(58385)),f=r(15988),y=r(76194),v=r(36405),h=r(69489);let m=class extends c.wq{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};(0,l._)([(0,u.Cb)({type:h.Z,json:{write:!0}})],m.prototype,"directions",void 0),(0,l._)([(0,u.Cb)({type:f.Z,json:{write:!0}})],m.prototype,"route",void 0),(0,l._)([(0,u.Cb)({type:String,json:{write:!0}})],m.prototype,"routeName",void 0),(0,l._)([(0,u.Cb)({type:[f.Z],json:{write:!0}})],m.prototype,"stops",void 0),m=(0,l._)([(0,d.j)("esri.tasks.support.RouteResult")],m);const g=m;function T(e){return e&&y.default.fromJSON(e).features.map((e=>e))}let b=class extends c.wq{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return T(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return T(e)}readPolygonBarriers(e){return T(e)}};(0,l._)([(0,u.Cb)({aliasOf:"pointBarriers"})],b.prototype,"barriers",void 0),(0,l._)([(0,u.Cb)({type:[v.Z]})],b.prototype,"messages",void 0),(0,l._)([(0,u.Cb)({type:[f.Z]})],b.prototype,"pointBarriers",void 0),(0,l._)([(0,p.r)("pointBarriers",["barriers","pointBarriers"])],b.prototype,"readPointBarriers",null),(0,l._)([(0,u.Cb)({type:[f.Z]})],b.prototype,"polylineBarriers",void 0),(0,l._)([(0,p.r)("polylineBarriers")],b.prototype,"readPolylineBarriers",null),(0,l._)([(0,u.Cb)({type:[f.Z]})],b.prototype,"polygonBarriers",void 0),(0,l._)([(0,p.r)("polygonBarriers")],b.prototype,"readPolygonBarriers",null),(0,l._)([(0,u.Cb)({type:[g]})],b.prototype,"routeResults",void 0),b=(0,l._)([(0,d.j)("esri.tasks.support.RouteResultsContainer")],b);const M=b;function w(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}function _(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function C(e){const t=[],r=[],{directions:s=[],routes:{features:o=[],spatialReference:a=null}={},stops:{features:n=[],spatialReference:i=null}={},barriers:l,polygonBarriers:u,polylineBarriers:p,messages:d}=e.data,c="esri.tasks.RouteTask.NULL_ROUTE_NAME";let f,y,v=!0;const h=o&&a||n&&i||l&&l.spatialReference||u&&u.spatialReference||p&&p.spatialReference;s.forEach((e=>{t.push(f=e.routeName),r[f]={directions:e}})),o.forEach((e=>{-1===t.indexOf(f=e.attributes.Name)&&(t.push(f),r[f]={}),e.geometry&&(e.geometry.spatialReference=h),r[f].route=e})),n.forEach((e=>{y=e.attributes,-1===t.indexOf(f=y.RouteName||c)&&(t.push(f),r[f]={}),f!==c&&(v=!1),e.geometry&&(e.geometry.spatialReference=h),null==r[f].stops&&(r[f].stops=[]),r[f].stops.push(e)})),n.length>0&&!0===v&&(r[t[0]].stops=r[c].stops,delete r[c],t.splice(t.indexOf(c),1));const m=t.map((e=>(r[e].routeName=e===c?null:e,r[e])));return M.fromJSON({routeResults:m,pointBarriers:l,polygonBarriers:u,polylineBarriers:p,messages:d})}function B(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if((0,o.pC)(e)&&e.hasZ)return!0}return!1}async function N(e){if(!e)throw new a.Z("network-service:missing-url","Url to Network service is missing");const{data:t}=await(0,n.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await(0,n.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new a.Z("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await(0,n.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await(0,n.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),o=(0,s.hS)("helperServices.routingUtilities.url",r);if(!o)return{supportedTravelModes:[],defaultTravelMode:null};const a=(0,i.en)(e),l=/\/solve$/.test(a.path)?"Route":/\/solveClosestFacility$/.test(a.path)?"ClosestFacility":"ServiceAreas",u=await(0,n.default)(o+("/"===o[o.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:l}}),p=[];let d=null;if(u&&u.data&&u.data.results&&u.data.results.length){const e=u.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);p.push(t)}}else"defaultTravelMode"===t.paramName&&(d=t.value)}return{supportedTravelModes:p,defaultTravelMode:d}}(e),{defaultTravelMode:o,supportedTravelModes:l}=await r;return t.defaultTravelMode=o,t.supportedTravelModes=l,t}},57093:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var s=r(56140),o=(r(95830),r(36544),r(68055),r(79881),r(87566)),a=(r(10923),r(57002),r(86035),r(95986)),n=r(36654),i=r(91535),l=r(66849),u=r(47977),p=r(97274);const d=(0,u.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});var c=r(10532);let f=class extends((0,c.Y)(a.Z)){constructor(e){super(e)}solve(e,t){return async function(e,t,r){const s=[],o=[],a={},u={},c=(0,l.en)(e);return t.stops&&t.stops.features&&(0,p.et)(t.stops.features,o,"stops.features",a),t.pointBarriers&&t.pointBarriers.features&&(0,p.et)(t.pointBarriers.features,o,"pointBarriers.features",a),t.polylineBarriers&&t.polylineBarriers.features&&(0,p.et)(t.polylineBarriers.features,o,"polylineBarriers.features",a),t.polygonBarriers&&t.polygonBarriers.features&&(0,p.et)(t.polygonBarriers.features,o,"polygonBarriers.features",a),(0,i.aX)(o).then((e=>{for(const t in a){const r=a[t];s.push(t),u[t]=e.slice(r[0],r[1])}return(0,p.Wf)(u,s)?(0,p.bI)(c.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||(0,p.ef)(u,s);for(const e in u)u[e].forEach(((r,s)=>{t.get(e)[s].geometry=r}));const o={...r,query:{...c.query,...d.toQueryParams(t),f:"json"}},{path:a}=c,i="/solve",l=a.endsWith(i)?a:a+i;return(0,n.default)(l,o)})).then((e=>(0,p.mT)(e)))}(this.url,e,t)}};f=(0,s._)([(0,o.j)("esri.tasks.RouteTask")],f);const y=f},10532:(e,t,r)=>{"use strict";r.d(t,{Y:()=>d});var s=r(56140),o=(r(95830),r(10103)),a=r(59472),n=(r(36544),r(68055),r(79881),r(87566)),i=r(32656),l=r(10923),u=(r(57002),r(86035),r(36654)),p=r(95986);const d=e=>{let t=class extends e{async getServiceDescription(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription(e)),this._serviceDescriptionPromise}async _fetchServiceDescription(e){if(!this.url||!this.parsedUrl)throw new i.Z("network-service:missing-url","Url to Network service is missing");const t=this.url,{data:r}=await(0,u.default)(t,{query:{f:"json",token:e}});r.supportedTravelModes||(r.supportedTravelModes=[]);for(let e=0;e<r.supportedTravelModes.length;e++)r.supportedTravelModes[e].id||(r.supportedTravelModes[e].id=r.supportedTravelModes[e].itemId);const s=r.currentVersion>=10.4?async function(e,t){try{const{data:{supportedTravelModes:r,defaultTravelMode:s}}=await(0,u.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json",token:t}});return{supportedTravelModes:r,defaultTravelMode:s}}catch(e){throw new i.Z("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(t,e):async function(e,t){const{data:r}=await(0,u.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json",token:t}});if(!r||!r.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=r.owningSystemUrl;const{data:s}=await(0,u.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json",token:t}}),a=(0,o.hS)("helperServices.routingUtilities.url",s);if(!a)return{supportedTravelModes:[],defaultTravelMode:null};const n=(0,l.mN)(e),i=/\/solveClosestFacility$/.test(n.path)?"Route":/\/solveClosestFacility$/.test(n.path)?"ClosestFacility":"ServiceAreas",p=await(0,u.default)(a+("/"===a[a.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i,token:t}}),d=[];let c=null;if(p&&p.data&&p.data.results&&p.data.results.length){const e=p.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);d.push(t)}}else"defaultTravelMode"===t.paramName&&(c=t.value)}return{supportedTravelModes:d,defaultTravelMode:c}}(t,e),{defaultTravelMode:a,supportedTravelModes:n}=await s;return r.defaultTravelMode=a,r.supportedTravelModes=n,r}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if((0,a.pC)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=(0,s._)([(0,n.j)("esri.tasks.mixins.NAServiceDescription")],t),t};let c=class extends(d(p.Z)){};c=(0,s._)([(0,n.j)("esri.tasks.mixins.NAServiceDescription")],c)},69489:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var s=r(56140),o=(r(95830),r(59472)),a=(r(36544),r(68055),r(79881)),n=r(30590),i=r(87566),l=(r(10923),r(57002),r(86035),r(73032)),u=r(61106),p=r(52937),d=r(93833),c=(r(36348),r(15988)),f=r(76194);let y=class extends f.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));const r=l.Z.fromJSON(t.spatialReference);return e.map((e=>{const t=c.Z.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&((0,o.Wg)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map((t=>{const r=new c.Z({geometry:new u.Z({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>(0,o.Wg)(e))),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,o=0,a=0;const n=[];let i,l,u,p,d,c,f,y,v=0,h=0,m=0;if(d=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),d||(d=[]),0===parseInt(d[v],32)){v=2;const e=parseInt(d[v],32);v++,c=parseInt(d[v],32),v++,1&e&&(h=d.indexOf("|")+1,f=parseInt(d[h],32),h++),2&e&&(m=d.indexOf("|",h)+1,y=parseInt(d[m],32),m++)}else c=parseInt(d[v],32),v++;for(;v<d.length&&"|"!==d[v];){i=parseInt(d[v],32)+r,v++,r=i,l=parseInt(d[v],32)+s,v++,s=l;const e=[i/c,l/c];h&&(p=parseInt(d[h],32)+o,h++,o=p,e.push(p/f)),m&&(u=parseInt(d[m],32)+a,m++,a=u,e.push(u/y)),n.push(e)}return{paths:[n],hasZ:h>0,hasM:m>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e)}))}));const s=[];let o=[0,0];return r.forEach((e=>{e[0]===o[0]&&e[1]===o[1]||(s.push(e),o=e)})),new d.Z({paths:[s]},t)}};(0,s._)([(0,a.Cb)({type:p.Z,json:{read:{source:"summary.envelope"}}})],y.prototype,"extent",void 0),(0,s._)([(0,a.Cb)()],y.prototype,"features",void 0),(0,s._)([(0,n.r)("features")],y.prototype,"readFeatures",null),(0,s._)([(0,a.Cb)()],y.prototype,"geometryType",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],y.prototype,"mergedGeometry",null),(0,s._)([(0,a.Cb)()],y.prototype,"routeId",void 0),(0,s._)([(0,a.Cb)()],y.prototype,"routeName",void 0),(0,s._)([(0,a.Cb)({value:null,readOnly:!0})],y.prototype,"strings",null),(0,s._)([(0,a.Cb)({json:{read:{source:"summary.totalDriveTime"}}})],y.prototype,"totalDriveTime",void 0),(0,s._)([(0,a.Cb)({json:{read:{source:"summary.totalLength"}}})],y.prototype,"totalLength",void 0),(0,s._)([(0,a.Cb)({json:{read:{source:"summary.totalTime"}}})],y.prototype,"totalTime",void 0),y=(0,s._)([(0,i.j)("esri.tasks.support.DirectionsFeatureSet")],y);const v=y},21544:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var s=r(56140),o=(r(95830),r(36544),r(68055),r(79881)),a=r(56274),n=r(87566),i=(r(10923),r(57002),r(86035),r(58385));const l=new a.Xn({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let u=class extends i.wq{constructor(e){super(e),this.description=null,this.type=null}};(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],u.prototype,"description",void 0),(0,s._)([(0,o.Cb)({type:String,json:{read:l.read,write:l.write}})],u.prototype,"type",void 0),u=(0,s._)([(0,n.j)("esri.tasks.support.GPMessage")],u);const p=u},36405:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var s=r(56140),o=(r(95830),r(36544),r(68055),r(79881)),a=r(56274),n=r(87566),i=(r(10923),r(57002),r(86035),r(21544));const l=new a.Xn({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let u=class extends i.Z{constructor(e){super(e),this.type=null}};(0,s._)([(0,o.Cb)({type:String,json:{read:l.read,write:l.write}})],u.prototype,"type",void 0),u=(0,s._)([(0,n.j)("esri.tasks.support.NAMessage")],u);const p=u}}]);