(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[4264],{35548:(t,e,n)=>{"use strict";n.d(e,{QB:()=>a});var i=n(59472),s=n(19677),r=n(62698),o=n(87040);class a{constructor(t=9,e){this.compareMinX=u,this.compareMinY=d,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),B.prune(),I.prune(),b.prune(),M.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const i=this.toBBox;if(y(t,n))for(B.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;y(t,o)&&(n.leaf?e(r):x(t,o)?this._all(r,e):B.push(r))}n=B.pop()}}collides(t){let e=this.data;const n=this.toBBox;if(!y(t,e))return!1;for(B.clear();e;){for(let i=0,s=e.children.length;i<s;i++){const s=e.children[i],r=e.leaf?n(s):s;if(y(t,r)){if(e.leaf||x(t,r))return!0;B.push(s)}}e=B.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new X([]),this}remove(t){if(!t)return this;let e,n=this.data,r=null,o=0,a=!1;const h=this.toBBox(t);for(b.clear(),M.clear();n||b.length>0;){var l;if(n||(n=(0,i.j0)(b.pop()),r=b.data[b.length-1],o=null!=(l=M.pop())?l:0,a=!0),n.leaf&&(e=(0,s.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),b.push(n),this._condense(b),this;a||n.leaf||!x(n,h)?r?(o++,n=r.children[o],a=!1):n=null:(b.push(n),M.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(I.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else I.pushArray(n.children);n=null!=(i=I.pop())?i:null}}_build(t,e,n,i){const s=n-e+1;let r=this._maxEntries;if(s<=r){const i=new X(t.slice(e,n+1));return h(i,this.toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new v([]);o.height=i;const a=Math.ceil(s/r),l=a*Math.ceil(Math.sqrt(r));_(t,e,n,l,this.compareMinX);for(let s=e;s<=n;s+=l){const e=Math.min(s+l-1,n);_(t,s,e,a,this.compareMinY);for(let n=s;n<=e;n+=a){const s=Math.min(n+a-1,e);o.children.push(this._build(t,n,s,i-1))}}return h(o,this.toBBox),o}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],a=f(o),h=p(t,o)-a;h<s?(s=h,i=a<i?a:i,n=o):h===s&&a<i&&(i=a,n=o)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this.toBBox,s=n?t:i(t);b.clear();const r=this._chooseSubtree(s,this.data,e,b);for(r.children.push(t),c(r,s);e>=0&&b.data[e].children.length>this._maxEntries;)this._split(b,e),e--;this._adjustParentBBoxes(s,b,e)}_split(t,e){const n=t.data[e],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),a=n.leaf?new X(o):new v(o);a.height=n.height,h(n,this.toBBox),h(a,this.toBBox),e?t.data[e-1].children.push(a):this._splitRoot(n,a)}_splitRoot(t,e){this.data=new v([t,e]),this.data.height=t.height+1,h(this.data,this.toBBox)}_chooseSplitIndex(t,e,n){let i,s,r;i=s=1/0;for(let o=e;o<=n-e;o++){const e=l(t,0,o,this.toBBox),a=l(t,o,n,this.toBBox),h=g(e,a),c=f(e)+f(a);h<i?(i=h,r=o,s=c<s?c:s):h===i&&c<s&&(s=c,r=o)}return r}_chooseSplitAxis(t,e,n){const i=t.leaf?this.compareMinX:u,s=t.leaf?this.compareMinY:d;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,s)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const s=this.toBBox,r=l(t,0,e,s),o=l(t,n-e,n,s);let a=m(r)+m(o);for(let i=e;i<n-e;i++){const e=t.children[i];c(r,t.leaf?s(e):e),a+=m(r)}for(let i=n-e-1;i>=e;i--){const e=t.children[i];c(o,t.leaf?s(e):e),a+=m(o)}return a}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)c(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const i=t.data[e-1],r=i.children;r.splice((0,s.cq)(r,n,r.length,i.indexHint),1)}else this.clear();else h(n,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,i,s){s||(s=new X([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],c(s,t.leaf?i(r):r);return s}function c(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function u(t,e){return t.minX-e.minX}function d(t,e){return t.minY-e.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function x(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function y(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function _(t,e,n,s,r){const a=[e,n];for(;a.length;){const e=(0,i.j0)(a.pop()),n=(0,i.j0)(a.pop());if(e-n<=s)continue;const h=n+Math.ceil((e-n)/s/2)*s;(0,o.q)(t,h,n,e,r),a.push(n,h,h,e)}}const B=new r.Z,I=new r.Z,b=new r.Z,M=new r.Z({deallocator:void 0});class w extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new s.SO}}class X extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class v extends w{constructor(t){super(),this.children=t,this.leaf=!1}}},91535:(t,e,n)=>{"use strict";n.d(e,{aX:()=>b});var i=n(34926),s=n(59472),r=n(36544),o=n(32656),a=n(27780),h=n(41241),l=n(11720),c=n(93833),u=n(49573),d=n(10923),f=n(56885),m=(n(36348),n(36654));async function p(t,e,n){const i="string"==typeof t?(0,d.mN)(t):t,s=e[0].spatialReference,r=(0,f.Ji)(e[0]),o={...n,query:{...i.query,f:"json",sr:s.wkid?s.wkid:JSON.stringify(s),geometries:JSON.stringify((a=e,{geometryType:(0,f.Ji)(a[0]),geometries:a.map((t=>t.toJSON()))}))}};var a;return function(t,e,n){const i=(0,f.q9)(e);return t.map((t=>{const e=i.fromJSON(t);return e.spatialReference=n,e}))}((await(0,m.default)(i.path+"/simplify",o)).data,r,s)}const g=r.Z.getLogger("esri.geometry.support.normalizeUtils");function x(t){return"polygon"===t[0].type}function y(t){return"polyline"===t[0].type}function _(t,e,n){if(e){const e=function(t,e){if(!(t instanceof c.Z||t instanceof l.Z)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw g.error(t),new o.Z(t)}const n=(0,u.x3)(t),i=[];for(const t of n){const n=[];i.push(n),n.push([t[0][0],t[0][1]]);for(let i=0;i<t.length-1;i++){const s=t[i][0],r=t[i][1],o=t[i+1][0],a=t[i+1][1],h=Math.sqrt((o-s)*(o-s)+(a-r)*(a-r)),l=(a-r)/h,c=(o-s)/h,u=h/e;if(u>1){for(let t=1;t<=u-1;t++){const i=t*e,o=c*i+s,a=l*i+r;n.push([o,a])}const t=(h+Math.floor(u-1)*e)/2,i=c*t+s,o=l*t+r;n.push([i,o])}n.push([o,a])}}return function(t){return"polygon"===t.type}(t)?new l.Z({rings:i,spatialReference:t.spatialReference}):new c.Z({paths:i,spatialReference:t.spatialReference})}(t,1e6);t=(0,h.Sx)(e,!0)}return n&&(t=(0,u.Sy)(t,n)),t}function B(t,e,n){if(Array.isArray(t)){const i=t[0];if(i>e){const n=(0,u.XZ)(i,e);t[0]=i+n*(-2*e)}else if(i<n){const e=(0,u.XZ)(i,n);t[0]=i+e*(-2*n)}}else{const i=t.x;if(i>e){const n=(0,u.XZ)(i,e);t=t.clone().offset(n*(-2*e),0)}else if(i<n){const e=(0,u.XZ)(i,n);t=t.clone().offset(e*(-2*n),0)}}return t}function I(t,e){let n=-1;for(let i=0;i<e.cutIndexes.length;i++){const s=e.cutIndexes[i],r=e.geometries[i],o=(0,u.x3)(r);for(let t=0;t<o.length;t++){const e=o[t];e.some((n=>{if(n[0]<180)return!0;{let n=0;for(let t=0;t<e.length;t++){const i=e[t][0];n=i>n?i:n}n=Number(n.toFixed(9));const i=-360*(0,u.XZ)(n,180);for(let n=0;n<e.length;n++){const e=r.getPoint(t,n);r.setPoint(t,n,e.clone().offset(i,0))}return!0}}))}if(s===n){if(x(t))for(const e of(0,u.x3)(r))t[s]=t[s].addRing(e);else if(y(t))for(const e of(0,u.x3)(r))t[s]=t[s].addPath(e)}else n=s,t[s]=r}return t}async function b(t,e,n){if(!Array.isArray(t))return b([t],e);const r=e?e.url:i.Z.geometryServiceUrl;let o,g,x,y,M,w,X,v,Y=0;const Z=[],S=[];for(const e of t)if((0,s.Wi)(e))S.push(e);else if(o||(o=e.spatialReference,g=(0,a.C5)(o),x=o.isWebMercator,w=x?102100:4326,y=u.UZ[w].maxX,M=u.UZ[w].minX,X=u.UZ[w].plus180Line,v=u.UZ[w].minus180Line),g)if("mesh"===e.type)S.push(e);else if("point"===e.type)S.push(B(e.clone(),y,M));else if("multipoint"===e.type){const t=e.clone();t.points=t.points.map((t=>B(t,y,M))),S.push(t)}else if("extent"===e.type){const t=e.clone()._normalize(!1,!1,g);S.push(t.rings?new l.Z(t):t)}else if(e.extent){const t=e.extent,n=(0,u.XZ)(t.xmin,M)*(2*y);let i=0===n?e.clone():(0,u.Sy)(e.clone(),n);t.offset(n,0),t.intersects(X)&&t.xmax!==y?(Y=t.xmax>Y?t.xmax:Y,i=_(i,x),Z.push(i),S.push("cut")):t.intersects(v)&&t.xmin!==M?(Y=t.xmax*(2*y)>Y?t.xmax*(2*y):Y,i=_(i,x,360),Z.push(i),S.push("cut")):S.push(i)}else S.push(e.clone());else S.push(e);let R=(0,u.XZ)(Y,y),j=-90;const E=R,F=new c.Z;for(;R>0;){const t=360*R-180;F.addPath([[t,j],[t,-1*j]]),j*=-1,R--}if(Z.length>0&&E>0){const e=I(Z,await async function(t,e,n,i){const s="string"==typeof t?(0,d.mN)(t):t,r=e[0].spatialReference,o={...i,query:{...s.query,f:"json",sr:JSON.stringify(r),target:JSON.stringify({geometryType:(0,f.Ji)(e[0]),geometries:e}),cutter:JSON.stringify(n)}},a=await(0,m.default)(s.path+"/cut",o),{cutIndexes:h,geometries:l=[]}=a.data;return{cutIndexes:h,geometries:l.map((t=>{const e=(0,f.im)(t);return e.spatialReference=r,e}))}}(r,Z,F,n)),i=[],o=[];for(let n=0;n<S.length;n++){const r=S[n];if("cut"!==r)o.push(r);else{const r=e.shift(),a=t[n];(0,s.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&r.rings.length>=a.rings.length?(i.push(r),o.push("simplify")):o.push(x?(0,h.$)(r):r)}}if(!i.length)return o;const a=await p(r,i,n),l=[];for(let t=0;t<o.length;t++){const e=o[t];"simplify"!==e?l.push(e):l.push(x?(0,h.$)(a.shift()):a.shift())}return l}const L=[];for(let t=0;t<S.length;t++){const e=S[t];if("cut"!==e)L.push(e);else{const t=Z.shift();L.push(!0===x?(0,h.$)(t):t)}}return Promise.resolve(L)}},49573:(t,e,n)=>{"use strict";n.d(e,{UZ:()=>o,x3:()=>l,XZ:()=>a,Sy:()=>h});var i=n(73032),s=n(93833),r=n(56885);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new s.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:i.Z.WebMercator}),minus180Line:new s.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:i.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new s.Z({paths:[[[180,-180],[180,180]]],spatialReference:i.Z.WGS84}),minus180Line:new s.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:i.Z.WGS84})}};function a(t,e){return Math.ceil((t-e)/(2*e))}function h(t,e){const n=l(t);for(const t of n)for(const n of t)n[0]+=e;return t}function l(t){return(0,r.oU)(t)?t.rings:t.paths}},79085:(t,e,n)=>{"use strict";n.d(e,{H:()=>o});var i=n(95830),s=n(35548);const r={minX:0,minY:0,maxX:0,maxY:0};class o{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.QB(9,(0,i.Z)("csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,i)=>{t[e++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),function(t,e,n){r.minX=e[0],r.minY=e[1],r.maxX=e[2],r.maxY=e[3],t.search(r,n)}(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},70650:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var i=n(59472),s=n(36544),r=n(32656),o=n(35470),a=n(50897),h=n(31036),l=n(69996),c=n(79085),u=n(44195),d=n(73127),f=n(24179);const m={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new u.Z(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid||(t.centroid=(0,f.Y)(new d.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)},p=class{constructor(t){this.geometryInfo=t,this._boundsStore=new c.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new o.Z,this.featureAdapter=m}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const t=(0,a.Ue)(a.Gv);return this._featuresById.forEach((e=>{const n=this._boundsStore.get(e.objectId);n&&(t[0]=Math.min(n[0],t[0]),t[1]=Math.min(n[1],t[1]),t[2]=Math.max(n[2],t[2]),t[3]=Math.max(n[3],t[3]))})),t}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,n){for(const i of t){const t=this._boundsStore.get(i.objectId);t&&e((0,l.JR)(n,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,n)=>{this._markedIds.has(n)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void s.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const n=this._featuresById.get(e);let o;if(this._markedIds.add(e),n?(t.displayId=n.displayId,o=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,i.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),!t.geometry||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);o=(0,h.$)(o||(0,a.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(e,o),this._featuresById.set(e,t)}_remove(t){return(0,i.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},56471:(t,e,n)=>{"use strict";n.d(e,{Dm:()=>a,Hq:()=>h,bU:()=>o});var i=n(95830),s=n(82550),r=n(7767);function o(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?r.I4:"esriGeometryPolyline"===t?r.ET:r.lF}}}function a(t,e){if((0,i.Z)("csp-restrictions"))return()=>({[e]:null,...t});try{let n=`this.${e} = null;`;for(const e in t)n+=`this${e.indexOf(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(t[e])};`;const i=new Function(n);return()=>new i}catch(n){return()=>({[e]:null,...t})}}function h(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(t)}}]}},73456:(t,e,n)=>{"use strict";n.d(e,{av:()=>a,d1:()=>l,b:()=>p,O0:()=>u,og:()=>m});var i=n(27780),s=n(4665);class r{constructor(){this.code=null,this.description=null}}class o{constructor(t){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function a(t){return new o(t)}class h{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function l(t){return new h(t)}const c=new Set;function u(t,e,n,i,r=!1,o){c.clear();for(const e in i){const h=t.get(e);if(!h)continue;const l=i[e],u=d(h,l);if(u!==l&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:h,originalValue:l,sanitizedValue:u}}),c.add(h.name),h&&(r||h.editable)){const t=(0,s.Qc)(h,u);if(t)return a((0,s.vP)(t,h,u));n[h.name]=u}}for(const t of e)if(!c.has(t.name))return a(`missing required field "${t.name}"`);return null}function d(t,e){let n=e;return"string"==typeof e&&(0,s.H7)(t)?n=parseFloat(e):null!=e&&(0,s.qN)(t)&&"string"!=typeof e&&(n=String(e)),(0,s.Pz)(n)}let f;function m(t,e){if(!t||!(0,i.JY)(e))return t;if("rings"in t||"paths"in t){if(!f)throw new TypeError("geometry engine not loaded");return f.simplify(e,t)}return t}async function p(t,e){!(0,i.JY)(t)||"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e||await async function(){return f||(f=await Promise.all([n.e(5798),n.e(3134)]).then(n.bind(n,93134)),f)}()}}}]);