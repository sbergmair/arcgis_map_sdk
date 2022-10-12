(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[365],{20365:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var s=a(56140),r=a(95830),n=a(82550),u=a(10103),l=a(59472),i=(a(36544),a(68055),a(79881)),o=a(87566),d=a(32656),c=a(10923),h=(a(57002),a(86035),a(52937)),y=a(36654),p=a(809),m=a(87864),b=a(98863),f=a(75051),g=a(45834),F=a(56471);const R=new Set(["Feature Layer","Table"]);let I=class extends p.Z{constructor(){super(...arguments),this.type="feature-layer"}load(e){const t=(0,l.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:a,gdbVersion:s,spatialReference:n,fieldsIndex:u}=this.layer,l=(0,r.Z)("featurelayer-pbf")&&e?"pbf":"json";return new g.Z({url:t.path,format:l,fieldsIndex:u,dynamicDataSource:a,gdbVersion:s,sourceSpatialReference:n})}async addAttachment(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/addAttachment",r=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,r.query);try{const e=await(0,y.default)(s,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}async updateAttachment(e,t,a){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(a,n.query);try{const e=await(0,y.default)(r,{body:u});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){await this.load();const a=e.addFeatures.map(this._serializeFeature,this),s=e.updateFeatures.map(this._serializeFeature,this),r=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);(0,b.P)(a,s,this.layer.spatialReference);const n=[],u=[],l=[...e.deleteAttachments];for(const t of e.addAttachments)n.push(await this._serializeAttachment(t));for(const t of e.updateAttachments)u.push(await this._serializeAttachment(t));const i=n.length||u.length||l.length?{adds:n,updates:u,deletes:l}:null,o=this._getLayerRequestOptions({method:"post",query:{adds:a.length?JSON.stringify(a):null,updates:s.length?JSON.stringify(s):null,deletes:r.length?null!=t&&t.globalIdUsed?JSON.stringify(r):r.join(","):null,gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,attachments:i&&JSON.stringify(i)}}),d=await(0,y.default)(this.layer.parsedUrl.path+"/applyEdits",o);return this._createEditsResult(d)}async deleteAttachments(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await(0,y.default)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:s}=this.layer,{data:r}=await(0,y.default)(`${s}/${a}`,t),{id:n,extent:u,fullExtent:l,timeExtent:i}=r,o=u||l;return{id:n,fullExtent:o&&h.Z.fromJSON(o),timeExtent:i&&m.Z.fromJSON({start:i[0],end:i[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:a}=this.layer,s=a.path;await this.load();const r=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,a=[];for(const e of t){const t=s+"/"+e+"/attachments";a.push((0,y.default)(t,r))}return Promise.all(a).then((e=>t.map(((t,a)=>({parentObjectId:t,attachmentInfos:e[a].data.attachmentInfos}))))).then((e=>(0,f.O)(e,s)))}return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async _fetchService(e){let t=this.layer.sourceJSON;if(!t){const{data:a}=await(0,y.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,r.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=a}this.sourceJSON=this._patchServiceJSON(t);const a=t.type;if(!R.has(a))throw new d.Z("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=(0,F.bU)(e.geometryType).renderer;(0,u.RB)("drawingInfo.renderer",t,e)}return e}_serializeFeature(e){const{geometry:t,attributes:a}=e;return(0,l.Wi)(t)?{attributes:a}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:a}}async _serializeAttachment(e){const{feature:t,attachment:a}=e,{globalId:s,name:r,contentType:n,data:u,uploadId:l}=a,i={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(i.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),l)i.uploadId=l;else if(u){const e=await async function(e){return"string"==typeof e?(0,c.sJ)(e)||{data:e}:new Promise(((t,a)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t((0,c.sJ)(s.result)),s.onerror=e=>a(e)}))}(u);i.contentType=e.mediaType,i.data=e.data,u instanceof File&&(i.name=u.name)}return r&&(i.name=r),n&&(i.contentType=n),i}_getFeatureIds(e,t){const a=e[0];return a?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in a?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){const t=e.data,a=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:a&&a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:a&&a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:a&&a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new d.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const a=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new d.Z("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const e in t){const s=t[e];null!=s&&(a.set?a.set(e,s):a.append(e,s))}return a}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...e,query:(0,n.yd)({gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this.layer.customParameters,...null==e?void 0:e.query}),responseType:"json"}}};(0,s._)([(0,i.Cb)()],I.prototype,"type",void 0),(0,s._)([(0,i.Cb)({constructOnly:!0})],I.prototype,"layer",void 0),(0,s._)([(0,i.Cb)({readOnly:!0})],I.prototype,"queryTask",null),I=(0,s._)([(0,o.j)("esri.layers.graphics.sources.FeatureLayerSource")],I);const _=I},56471:(e,t,a)=>{"use strict";a.d(t,{Dm:()=>l,Hq:()=>i,bU:()=>u});var s=a(95830),r=a(82550),n=a(7767);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}function l(e,t){if((0,s.Z)("csp-restrictions"))return()=>({[t]:null,...e});try{let a=`this.${t} = null;`;for(const t in e)a+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const s=new Function(a);return()=>new s}catch(a){return()=>({[t]:null,...e})}}function i(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,r.d9)(e)}}]}}}]);