(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[7171],{78712:(e,t,i)=>{"use strict";i.d(t,{ym:()=>x,RF:()=>p,vY:()=>s,J9:()=>C,U1:()=>v,Ie:()=>M,G6:()=>b});var r=i(56885);const n=(e,t,i)=>[t,i],o=(e,t,i)=>[t,i,e[2]],a=(e,t,i)=>[t,i,e[2],e[3]];function s(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:e.extent?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function l({scale:e,translate:t},i){return Math.round((i-t[0])/e[0])}function c({scale:e,translate:t},i){return Math.round((t[1]-i)/e[1])}function f(e,t,i){const r=[];let n,o,a,s;for(let f=0;f<i.length;f++){const m=i[f];f>0?(a=l(e,m[0]),s=c(e,m[1]),a===n&&s===o||(r.push(t(m,a-n,s-o)),n=a,o=s)):(n=l(e,m[0]),o=c(e,m[1]),r.push(t(m,n,o)))}return r.length>0?r:null}function m({scale:e,translate:t},i){return i*e[0]+t[0]}function h({scale:e,translate:t},i){return t[1]-i*e[1]}function u(e,t,i){const r=new Array(i.length);if(!i.length)return r;const[n,o]=e.scale;let a=m(e,i[0][0]),s=h(e,i[0][1]);r[0]=t(i[0],a,s);for(let e=1;e<i.length;e++){const l=i[e];a+=l[0]*n,s-=l[1]*o,r[e]=t(l,a,s)}return r}function y(e,t,i){const r=new Array(i.length);for(let n=0;n<i.length;n++)r[n]=u(e,t,i[n]);return r}function g(e,t,i,r,s){return t.points=function(e,t,i,r){return f(e,i?r?a:o:r?o:n,t)}(e,i.points,r,s),t}function p(e,t,i,r,n){return t.x=l(e,i.x),t.y=c(e,i.y),t!==i&&(r&&(t.z=i.z),n&&(t.m=i.m)),t}function d(e,t,i,r,s){const l=function(e,t,i,r){const s=[],l=i?r?a:o:r?o:n;for(let i=0;i<t.length;i++){const r=f(e,l,t[i]);r&&r.length>=3&&s.push(r)}return s.length?s:null}(e,i.rings,r,s);return l?(t.rings=l,t):null}function S(e,t,i,r,s){const l=function(e,t,i,r){const s=[],l=i?r?a:o:r?o:n;for(let i=0;i<t.length;i++){const r=f(e,l,t[i]);r&&r.length>=2&&s.push(r)}return s.length?s:null}(e,i.paths,r,s);return l?(t.paths=l,t):null}function x(e,t){return e&&t?(0,r.wp)(t)?p(e,{},t,!1,!1):(0,r.l9)(t)?S(e,{},t,!1,!1):(0,r.oU)(t)?d(e,{},t,!1,!1):(0,r.aW)(t)?g(e,{},t,!1,!1):(0,r.YX)(t)?(!1,!1,(n={}).xmin=l(i=e,(o=t).xmin),n.ymin=c(i,o.ymin),n.xmax=l(i,o.xmax),n.ymax=c(i,o.ymax),n):null:null;var i,n,o}function C(e,t,i,r,s){return t.points=function(e,t,i,r){return u(e,i?r?a:o:r?o:n,t)}(e,i.points,r,s),t}function v(e,t,i,r,n){return t.x=m(e,i.x),t.y=h(e,i.y),t!==i&&(r&&(t.z=i.z),n&&(t.m=i.m)),t}function M(e,t,i,r,s){return t.rings=function(e,t,i,r){return y(e,i?r?a:o:r?o:n,t)}(e,i.rings,r,s),t}function b(e,t,i,r,s){return t.paths=function(e,t,i,r){return y(e,i?r?a:o:r?o:n,t)}(e,i.paths,r,s),t}},11426:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(19546),n=i(90169),o=i(36889),a=i(71108);const s=class{dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,i){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[i,r,n]=o.fN.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t);return{size:[r,n],image:new Uint32Array(i.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){const[t,i,r]=o.fN.rasterizeSimpleLine(e.style,e.cap);return{size:[i,r],image:new Uint32Array(t.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let r,s,l;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(r=o.B$.fromSimpleMarker(e),l=(0,a.Fp)(r)):"CIMHatchFill"===e.type?(r=o.B$.fromCIMHatchFill(e),s=new n.Z(r.frame.xmin,-r.frame.ymax,r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin)):e.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type?(r=o.B$.fromCIMInsidePolygon(e),s=new n.Z(r.frame.xmin,-r.frame.ymax,r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin)):(r=e,l=(0,a.Fp)(r)),l&&!i){const[e,t,i]=(0,a.RL)(l);return e?{size:[t,i],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[c,f,m,h,u]=o.B$.rasterize(this._rasterizationCanvas,r,s,!i);return c?{size:[f,m],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:h,anchorY:u}:null}rasterizeImageResource(e,t,i,n){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const o=this._rasterizationCanvas.getContext("2d");i instanceof ImageData?o.putImageData(i,0,0):(i.setAttribute("width",`${e}px`),i.setAttribute("height",`${t}px`),o.drawImage(i,0,0,e,t));const a=o.getImageData(0,0,e,t),s=new Uint8Array(a.data);if(n)for(const e of n)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[t,i,r,n]=e.oldColor,[o,a,l,c]=e.newColor;if(t===o&&i===a&&r===l&&n===c)continue;for(let e=0;e<s.length;e+=4)t===s[e]&&i===s[e+1]&&r===s[e+2]&&n===s[e+3]&&(s[e]=o,s[e+1]=a,s[e+2]=l,s[e+3]=c)}let l;for(let e=0;e<s.length;e+=4)l=s[e+3]/255,s[e]=s[e]*l,s[e+1]=s[e+1]*l,s[e+2]=s[e+2]*l;let c=s,f=e,m=t;const h=512;if(f>=h||m>=h){const i=f/m;i>1?(f=h,m=Math.round(h/i)):(m=h,f=Math.round(h*i)),c=new Uint8Array(4*f*m);const n=new Uint8ClampedArray(c.buffer);(0,r.TT)(s,e,t,n,f,m,!1)}return{size:[e,t],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},71108:(e,t,i)=>{"use strict";i.d(t,{RL:()=>f,bk:()=>l,Fp:()=>a,UV:()=>c});var r=i(56885),n=i(90169),o=i(69688);function a(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers;return t&&1===t.length?a(t[0]):null}case"CIMVectorMarker":{const t=e.markerGraphics;if(!t||1!==t.length)return null;const i=t[0];if(!i)return null;const r=i.geometry;if(!r)return null;const n=i.symbol;return!n||"CIMPolygonSymbol"!==n.type&&"CIMLineSymbol"!==n.type?null:{geom:r,asFill:"CIMPolygonSymbol"===n.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function s(e){let t=1/0,i=-1/0,r=1/0,n=-1/0;for(const o of e)for(const e of o)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<r&&(r=e[1]),e[1]>n&&(n=e[1]);return[t,r,i,n]}function l(e){return e?e.rings?s(e.rings):e.paths?s(e.paths):(0,r.YX)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function c(e,t,i,r,n){const[o,a,s,l]=e;if(s<o||l<a)return[0,0,0];const c=s-o,f=l-a,m=Math.floor(31.5),h=(128-2*(m+1))/Math.max(c,f),u=Math.round(c*h)+2*m,y=Math.round(f*h)+2*m;let g=1;t&&(g=y/h/(t.ymax-t.ymin));let p=0,d=0;if(r)if(n){if(t&&i&&t.ymax-t.ymin>0){const e=(t.xmax-t.xmin)/(t.ymax-t.ymin);p=r.x/(i*e),d=r.y/i}}else p=r.x,d=r.y;return p=.5*(t.xmax+t.xmin)+p*(t.xmax-t.xmin),d=.5*(t.ymax+t.ymin)+d*(t.ymax-t.ymin),p-=o,d-=a,p*=h,d*=h,p+=m,d+=m,[g,p/u-.5,-(d/y-.5)]}function f(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),i=function(e){let t=1/0,i=-1/0,r=1/0,o=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<r&&(r=e[1]),e[1]>o&&(o=e[1]);return new n.Z(t,r,i-t,o-r)}(t),r=Math.floor(31.5),o=(128-2*(r+1))/Math.max(i.width,i.height),a=Math.round(i.width*o)+2*r,s=Math.round(i.height*o)+2*r,l=[];for(const n of t)if(n&&n.length>1){const t=[];for(const e of n){let[n,a]=e;n-=i.x,a-=i.y,n*=o,a*=o,n+=r-.5,a+=r-.5,t.push([n,a])}if(e.asFill){const e=t.length-1;t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}l.push(t)}const c=function(e,t,i,r){const n=t*i,o=new Array(n),a=r*r+1;for(let e=0;e<n;++e)o[e]=a;for(const n of e){const e=n.length;for(let a=1;a<e;++a){const e=n[a-1],s=n[a];let l,c,f,m;e[0]<s[0]?(l=e[0],c=s[0]):(l=s[0],c=e[0]),e[1]<s[1]?(f=e[1],m=s[1]):(f=s[1],m=e[1]);let h=Math.floor(l)-r,u=Math.floor(c)+r,y=Math.floor(f)-r,g=Math.floor(m)+r;h<0&&(h=0),u>t&&(u=t),y<0&&(y=0),g>i&&(g=i);const p=s[0]-e[0],d=s[1]-e[1],S=p*p+d*d;for(let r=h;r<u;r++)for(let n=y;n<g;n++){let a,l,c=(r-e[0])*p+(n-e[1])*d;c<0?(a=e[0],l=e[1]):c>S?(a=s[0],l=s[1]):(c/=S,a=e[0]+c*p,l=e[1]+c*d);const f=(r-a)*(r-a)+(n-l)*(n-l),m=(i-n-1)*t+r;f<o[m]&&(o[m]=f)}}}for(let e=0;e<n;++e)o[e]=Math.sqrt(o[e]);return o}(l,a,s,r);return e.asFill&&function(e,t,i,r,n){for(const o of e){const e=o.length;for(let a=1;a<e;++a){const e=o[a-1],s=o[a];let l,c,f,m;e[0]<s[0]?(l=e[0],c=s[0]):(l=s[0],c=e[0]),e[1]<s[1]?(f=e[1],m=s[1]):(f=s[1],m=e[1]);let h=Math.floor(l),u=Math.floor(c)+1,y=Math.floor(f),g=Math.floor(m)+1;h<r&&(h=r),u>t-r&&(u=t-r),y<r&&(y=r),g>i-r&&(g=i-r);for(let o=y;o<g;++o){if(e[1]>o==s[1]>o)continue;const a=(i-o-1)*t;for(let t=h;t<u;++t)t<(s[0]-e[0])*(o-e[1])/(s[1]-e[1])+e[0]&&(n[a+t]=-n[a+t]);for(let e=r;e<h;++e)n[a+e]=-n[a+e]}}}}(l,a,s,r,c),[m(c,r),a,s]}function m(e,t){const i=2*t,r=e.length,n=new Uint8Array(4*r);for(let t=0;t<r;++t){const r=.5-e[t]/i;(0,o.I)(r,n,4*t)}return n}},93318:(e,t,i)=>{"use strict";i.d(t,{S:()=>A,c:()=>x});var r=i(88263),n=i(36544),o=i(30927),a=i(78745),s=i(96071),l=i(19546),c=i(49723),f=i(36889),m=i(71108);const h=n.Z.getLogger("esri.symbols.cim.cimAnalyzer");function u(e){switch(e){case"Butt":return 0;case"Square":return 2;case"Round":default:return 1}}function y(e){switch(e){case"Bevel":return 0;case"Miter":return 2;case"Round":default:return 1}}function g(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function p(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function d(e,t,i,r){let n;e[t]?n=e[t]:(n={},e[t]=n),n[i]=r}function S(e){const t=e.markerPlacement;return t&&t.angleToLine?1:0}async function x(e,t,i,r){const n=i||[];if(!e)return n;let a,s;const l={};if("CIMSymbolReference"!==e.type)return h.error("Expect cim type to be 'CIMSymbolReference'"),n;if(a=e.symbol,s=e.primitiveOverrides,s){const e=[];for(const i of s){const r=i.valueExpressionInfo;if(r&&t){const n=r.expression,a=(0,o.Yi)(n,t.spatialReference,t.fields).then((e=>{e&&d(l,i.primitiveName,i.propertyName,e)}));e.push(a)}else null!=i.value&&d(l,i.primitiveName,i.propertyName,i.value)}await Promise.all(e)}switch(a.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,i,r,n,o){if(!e)return;const a=e.symbolLayers;if(!a)return;let s;const l=f.B$.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(s=1);let c=a.length;for(;c--;){const m=a[c];if(!m||!1===m.enable)continue;const u=[];switch(f.E0.findApplicableOverrides(m,t,u),m.type){case"CIMSolidFill":C(m,i,u,r,n);break;case"CIMPictureFill":v(m,i,u,r,n);break;case"CIMHatchFill":M(m,i,u,r,n);break;case"CIMGradientFill":b(m,i,u,r,n);break;case"CIMSolidStroke":P(m,i,u,r,n,"CIMPolygonSymbol"===e.type,l);break;case"CIMPictureStroke":k(m,i,u,r,n,"CIMPolygonSymbol"===e.type,l);break;case"CIMGradientStroke":w(m,i,u,r,n,"CIMPolygonSymbol"===e.type,l);break;case"CIMCharacterMarker":if(z(m,i,u,r,n))break;break;case"CIMPictureMarker":if(z(m,i,u,r,n))break;"CIMLineSymbol"===e.type&&(s=S(m)),I(m,i,u,r,n,s,l);break;case"CIMVectorMarker":if(z(m,i,u,r,n))break;"CIMLineSymbol"===e.type&&(s=S(m)),N(m,i,u,r,n,s,l,o);break;default:h.error("Cannot analyze CIM layer",m.type)}}}(a,s,l,t,n,r)}return n}function C(e,t,i,n,o){const a=e.primitiveName,s=(0,l.NO)(e.color),c=(0,r.hP)(JSON.stringify(e)).toString();o.push({type:"fill",templateHash:c,materialHash:0===i.length?c:()=>c,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:X(a,t,"Color",n,s,_),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:e.effects})}function v(e,t,i,n,o){const a=e.primitiveName,s=e.tintColor?(0,l.NO)(e.tintColor):{r:255,g:255,b:255,a:1},c=(0,r.hP)(JSON.stringify(e)).toString(),f=(0,r.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();o.push({type:"fill",templateHash:c,materialHash:0===i.length?f:()=>f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:X(a,t,"TintColor",n,s,_),height:X(a,t,"Height",n,e.height),scaleX:X(a,t,"ScaleX",n,e.scaleX),angle:X(a,t,"Rotation",n,e.rotation),offsetX:X(a,t,"OffsetX",n,e.offsetX),offsetY:X(a,t,"OffsetY",n,e.offsetY)})}function M(e,t,i,n,o){const a=["Rotation","OffsetX","OffsetY"],s=i.filter((t=>t.primitiveName!==e.primitiveName&&-1===a.indexOf(t.propertyName))),l=e.primitiveName,c=(0,r.hP)(JSON.stringify(e)).toString(),f=(0,r.hP)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();o.push({type:"fill",templateHash:c,materialHash:0===i.length?f:H(f,t,s,n),cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:X(l,t,"Separation",n,e.separation),scaleX:1,angle:X(l,t,"Rotation",n,e.rotation),offsetX:X(l,t,"OffsetX",n,e.offsetX),offsetY:X(l,t,"OffsetY",n,e.offsetY)})}function b(e,t,i,n,o){const a=(0,r.hP)(JSON.stringify(e)).toString();o.push({type:"fill",templateHash:a,materialHash:0===i.length?a:H(a,t,i,n),cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function P(e,t,i,n,o,a,s){const c=(0,r.hP)(JSON.stringify(e)).toString(),f=e.primitiveName,m=(0,l.NO)(e.color),h=void 0!==e.width?e.width:4,g=u(e.capStyle),p=y(e.joinStyle),d=e.miterLimit;o.push({type:"line",templateHash:c,materialHash:0===i.length?c:()=>c,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:e.effects,color:X(f,t,"Color",n,m,_),width:X(f,t,"Width",n,h),cap:X(f,t,"CapStyle",n,g),join:X(f,t,"JoinStyle",n,p),miterLimit:X(f,t,"MiterLimit",n,d),referenceWidth:s,zOrder:R(e.name),isDashed:!1})}function k(e,t,i,n,o,a,s){const c=(0,r.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=(0,l.NO)(e.tintColor),h=void 0!==e.width?e.width:4,g=u(e.capStyle),p=y(e.joinStyle),d=e.miterLimit,S=(0,r.hP)(JSON.stringify(e)).toString();o.push({type:"line",templateHash:S,materialHash:0===i.length?c:()=>c,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:e.effects,color:X(f,t,"TintColor",n,m,_),width:X(f,t,"Width",n,h),cap:X(f,t,"CapStyle",n,g),join:X(f,t,"JoinStyle",n,p),miterLimit:X(f,t,"MiterLimit",n,d),referenceWidth:s,zOrder:R(e.name),isDashed:!1})}function w(e,t,i,n,o,a,s){const l=e.primitiveName,c=void 0!==e.width?e.width:4,f=u(e.capStyle),m=y(e.joinStyle),h=e.miterLimit,g=(0,r.hP)(JSON.stringify(e)).toString();o.push({type:"line",templateHash:g,materialHash:0===i.length?g:H(g,t,i,n),cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},width:X(l,t,"Width",n,c),cap:X(l,t,"CapStyle",n,f),join:X(l,t,"JoinStyle",n,m),miterLimit:X(l,t,"MiterLimit",n,h),referenceWidth:s,zOrder:R(e.name),isDashed:!1})}function z(e,t,i,n,o){const a=e.markerPlacement;if(!a||"CIMMarkerPlacementInsidePolygon"!==a.type)return!1;const s=a,l=["Rotation","OffsetX","OffsetY"],c=i.filter((t=>t.primitiveName!==e.primitiveName&&-1===l.indexOf(t.propertyName))),f=(0,r.hP)(JSON.stringify(e)).toString();return o.push({type:"fill",templateHash:f,materialHash:0===i.length?f:H(f,t,c,n),cim:e,materialOverrides:c,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:X(s.primitiveName,t,"StepY",n,s.stepY),scaleX:1,angle:X(s.primitiveName,t,"GridAngle",n,s.gridAngle),offsetX:X(s.primitiveName,t,"OffsetX",n,s.offsetX),offsetY:X(s.primitiveName,t,"OffsetY",n,s.offsetY)}),!0}function I(e,t,i,n,o,a,s){const c=e.primitiveName,f=e.size,m=e.scaleX,h=e.rotation,u=e.offsetX,y=e.offsetY,g=(0,l.NO)(e.tintColor),p=(0,r.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();let d=!1,S="";for(const e of i)e.primitiveName===c&&(void 0!==e.value?S+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(d=!0));o.push({type:"marker",templateHash:(0,r.hP)(JSON.stringify(e)+S).toString(),materialHash:d?()=>p:p,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:!1,alignment:a,size:X(c,t,"Size",n,f),scaleX:X(c,t,"ScaleX",n,m),rotation:X(c,t,"Rotation",n,h),offsetX:X(c,t,"OffsetX",n,u),offsetY:X(c,t,"OffsetY",n,y),color:X(c,t,"TintColor",n,g,_),anchorPoint:e.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:s,sizeRatio:1,markerPlacement:e.markerPlacement})}function N(e,t,i,r,n,o,a,s){const l=e.markerGraphics;if(!l)return;let c=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(c=t.ymax-t.ymin)}for(const f of l)if(f){const l=f.symbol;if(!l)continue;switch(l.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":L(e,f,i,t,r,n,o,a,c,s);break;case"CIMTextSymbol":O(e,f,t,i,r,n,o,a,c)}}}function O(e,t,i,n,o,a,s,c,m){f.E0.findApplicableOverrides(t,n,[]);const h=t.geometry;if(!("x"in h)||!("y"in h))return;const u=t.symbol,y=(S=u).underline?"underline":S.strikethrough?"line-through":"none",d=function(e){let t="normal",i="normal";if(e){const r=e.toLowerCase();-1!==r.indexOf("italic")?t="italic":-1!==r.indexOf("oblique")&&(t="oblique"),-1!==r.indexOf("bold")?i="bold":-1!==r.indexOf("light")&&(i="lighter")}return{style:t,weight:i}}(u.fontStyleName);var S;u.font={family:u.fontFamilyName,decoration:y,...d};const x=e.frame,C=h.x-.5*(x.xmin+x.xmax),v=h.y-.5*(x.ymin+x.ymax),M=e.size/m,b=e.primitiveName,P=(u.height||0)*M,k=u.angle||0,w=((u.offsetX||0)+C)*M,z=((u.offsetY||0)+v)*M,I=(0,l.NO)(f.B$.getFillColor(u));let N=(0,l.NO)(f.B$.getStrokeColor(u)),O=f.B$.getStrokeWidth(u);O||(N=(0,l.NO)(f.B$.getFillColor(u.haloSymbol)),O=u.haloSize*M);let L="";for(const e of n)e.primitiveName===b&&void 0!==e.value&&(L+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const F=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),R=(0,r.hP)(JSON.stringify(t)+F+L).toString();a.push({type:"text",templateHash:R,materialHash:()=>(0,r.hP)(JSON.stringify(u.font)).toString(),cim:u,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,alignment:s,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:u.fontFamilyName,decoration:"none",weight:"normal",style:"normal",size:X(b,i,"Size",o,P),angle:X(b,i,"Rotation",o,k),offsetX:X(b,i,"OffsetX",o,w),offsetY:X(b,i,"OffsetY",o,z),horizontalAlignment:g(u.horizontalAlignment),verticalAlignment:p(u.verticalAlignment),text:X(t.primitiveName,i,"TextString",o,t.textString,l.X3,u.textCase),color:I,outlineColor:N,outlineSize:O,referenceSize:c,sizeRatio:1,markerPlacement:e.markerPlacement})}function L(e,t,i,n,o,a,s,c,h,u){const y=t.symbol,g=t.geometry;if(!g)return;const p=y.symbolLayers;if(!p)return;if(u)return void F(e,t,n,i,o,a,s,c,h);let d=p.length;for(;d--;){const u=p[d];if(u&&!1!==u.enable)switch(u.type){case"CIMSolidFill":case"CIMSolidStroke":{const y=(0,m.bk)(g);if(!y)continue;const[p,d,S]=(0,m.UV)(y,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),x="CIMSolidFill"===u.type,C={type:"sdf",geom:g,asFill:x},v=e.primitiveName,M=e.size,b=e.rotation||0,P=e.offsetX,k=e.offsetY,w=u.primitiveName,z=(0,l.NO)(x?f.B$.getFillColor(u):f.B$.getStrokeColor(u)),I=x?{r:0,g:0,b:0,a:0}:(0,l.NO)(f.B$.getStrokeColor(u)),N=f.B$.getStrokeWidth(u);if(!x&&!N)break;let O=!1,L="";for(const e of i)e.primitiveName!==w&&e.primitiveName!==v||(void 0!==e.value?L+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(O=!0));const F=JSON.stringify({...e,markerGraphics:null}),R=(0,r.hP)(JSON.stringify(C)).toString(),H={type:"marker",templateHash:(0,r.hP)(JSON.stringify(t)+JSON.stringify(u)+F+L).toString(),materialHash:O?()=>R:R,cim:C,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:s,anchorPoint:{x:d,y:S},isAbsoluteAnchorPoint:!1,size:X(e.primitiveName,n,"Size",o,M),rotation:X(e.primitiveName,n,"Rotation",o,b),offsetX:X(e.primitiveName,n,"OffsetX",o,P),offsetY:X(e.primitiveName,n,"OffsetY",o,k),scaleX:1,frameHeight:h,rotateClockwise:e.rotateClockwise,referenceSize:c,sizeRatio:p,color:X(w,n,"Color",o,z,_),outlineColor:X(w,n,"Color",o,I,_),outlineWidth:X(w,n,"Width",o,N),markerPlacement:e.markerPlacement};a.push(H);break}default:F(e,t,n,i,o,a,s,c,h)}}}function F(e,t,i,n,o,a,l,c,m){const h=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath,effects:e.effects}}(e,t);let u=[];const y=["Rotation","OffsetX","OffsetY"];u=n.filter((t=>t.primitiveName!==e.primitiveName||-1===y.indexOf(t.propertyName)));let g="";for(const e of n)void 0!==e.value&&(g+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const[p,d,S]=f.B$.getTextureAnchor(h),x=e.primitiveName,C=e.rotation||0,v=e.offsetX||0,M=e.offsetY||0,b=(0,r.hP)(JSON.stringify(h)+g).toString(),P={type:"marker",templateHash:b,materialHash:0===u.length?b:H(b,i,u,o),cim:h,materialOverrides:u,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:l,anchorPoint:{x:p,y:d},isAbsoluteAnchorPoint:!1,size:e.size,rotation:X(x,i,"Rotation",o,C),offsetX:X(x,i,"OffsetX",o,v),offsetY:X(x,i,"OffsetY",o,M),color:{r:0,g:0,b:0,a:0},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:m,rotateClockwise:e.rotateClockwise,referenceSize:c,sizeRatio:S/(0,s.F2)(e.size),markerPlacement:e.markerPlacement};a.push(P)}function R(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function _(e){if(!e||0===e.length)return null;const t=new a.Z(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function X(e,t,i,r,n,a,s){const l=t[e];if(l){const e=l[i];if("string"==typeof e||"number"==typeof e||e instanceof Array)return a?a.call(null,e,s):e;if(null!=e&&e instanceof o.mz)return(t,i,o)=>{let l=(0,c.Z)(e,t,{$view:o},r.geometryType,i);return null!==l&&a&&(l=a.call(null,l,s)),null!==l?l:n}}return n}function H(e,t,i,n){for(const e of i)if(e.valueExpressionInfo){const i=t[e.primitiveName]&&t[e.primitiveName][e.propertyName];i instanceof o.mz&&(e.fn=(e,t,r)=>(0,c.Z)(i,e,{$view:r},n.geometryType,t))}return(t,n,o)=>{for(const e of i)e.fn&&(e.value=e.fn(t,n,o));return(0,r.hP)(e+f.E0.buildOverrideKey(i)).toString()}}function A(e,t){if(!t||0===t.length)return e;const i=JSON.parse(JSON.stringify(e));return f.E0.applyOverrides(i,t),i}},47171:(e,t,i)=>{"use strict";i.r(t),i.d(t,{previewCIMSymbol:()=>v});var r=i(96071),n=i(14020),o=i(88263),a=i(39105),s=i(56885),l=i(99178),c=i(36654),f=i(19546),m=i(93318),h=i(11426);class u{constructor(){}rasterizeText(e,t){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));const i=this._textRasterizationCanvas,r=i.getContext("2d");this.setFontProperties(r,t),this.parameters=t,this.textLines=e.split(/\r?\n/),this.lineHeight=this.computeLineHeight();const n=this.computeTextWidth(r,t),o=this.lineHeight*this.textLines.length;i.width=n,i.height=o,this.renderedLineHeight=Math.round(this.lineHeight*t.pixelRatio),this.renderedHaloSize=t.halo.size*t.pixelRatio,this.renderedWidth=n*t.pixelRatio,this.renderedHeight=o*t.pixelRatio,this.fillStyle=function(e){return`rgba(${e.slice(0,3).toString()},${e[3]})`}(t.color),this.haloStyle=function(e){return`rgb(${e.slice(0,3).toString()})`}(t.halo.color);const a=this.renderedLineHeight,s=this.renderedHaloSize;this.setFontProperties(r,t);const l=function(e,t){return"center"===e?.5*t:"right"===e?t:0}(r.textAlign,this.renderedWidth)+s,c=s;let f=0,m=0;s>0&&this.renderHalo(r,l,c,f,m,t),m+=c,f+=l;for(const e of this.textLines)r.globalCompositeOperation="destination-out",r.fillStyle="rgb(0, 0, 0)",r.fillText(e,f,m),r.globalCompositeOperation="source-over",r.fillStyle=this.fillStyle,r.fillText(e,f,m),m+=a;const h=r.getImageData(0,0,this.renderedWidth,this.renderedHeight),u=new Uint8Array(h.data);if(t.premultiplyColors){let e;for(let t=0;t<u.length;t+=4)e=u[t+3]/255,u[t]=u[t]*e,u[t+1]=u[t+1]*e,u[t+2]=u[t+2]*e}return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(u.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}renderHalo(e,t,i,r,n,o){const a=this.renderedWidth,s=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=a,this._haloRasterizationCanvas.height=s;const l=this._haloRasterizationCanvas,c=l.getContext("2d");c.clearRect(0,0,a,s),this.setFontProperties(c,o),c.fillStyle=this.haloStyle,c.strokeStyle=this.haloStyle;const f=this.renderedHaloSize<3;c.lineJoin=f?"miter":"round",f?this.renderHaloEmulated(c,t,i):this.renderHaloNative(c,t,i),e.globalAlpha=this.parameters.halo.color[3],e.drawImage(l,0,0,a,s,r,n,a,s),e.globalAlpha=1}renderHaloEmulated(e,t,i){const r=this.renderedLineHeight,n=this.renderedHaloSize;for(const o of this.textLines){for(const[r,a]of y)e.fillText(o,t+n*r,i+n*a);i+=r}}renderHaloNative(e,t,i){const r=this.renderedLineHeight,n=this.renderedHaloSize;for(const o of this.textLines){const a=2*n,s=5,l=.1;for(let r=0;r<s;r++){const n=1-(s-1)*l+r*l;e.lineWidth=n*a,e.strokeText(o,t,i)}i+=r}}setFontProperties(e,t){const i=t.font,n=`${i.style} ${i.weight} ${(0,r.F2)(t.size*t.pixelRatio)}px ${i.family}, sans-serif`;let o;switch(e.font=n,e.textBaseline="top",t.horizontalAlignment){case"left":o="left";break;case"right":o="right";break;case"center":o="center";break;default:o="left"}e.textAlign=o}computeTextWidth(e,t){let i=0;for(const t of this.textLines)i=Math.max(i,e.measureText(t).width);const r=t.font;return("italic"===r.style||"oblique"===r.style||"string"==typeof r.weight&&("bold"===r.weight||"bolder"===r.weight)||"number"==typeof r.weight&&r.weight>600)&&(i+=.3*e.measureText("A").width),i+=2*this.parameters.halo.size,Math.round(i)}computeLineHeight(){const e=1.275*this.parameters.size;return Math.round(e+2*this.parameters.halo.size)}}const y=[];{const e=16;for(let t=0;t<360;t+=360/e)y.push([Math.cos(Math.PI*t/180),Math.sin(Math.PI*t/180)])}var g,p;(p=g||(g={})).Legend="legend",p.Preview="preview";const d=(e,t,i)=>{if(e&&e.targetSize){let n;if(i){const t=Math.max(i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin);n=e.targetSize/(0,r.F2)(t)}else n=e.targetSize/t.referenceSize;return n}return e&&e.scaleFactor?e.scaleFactor:1},S={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};function x(e,t,i,r){let n,o;return"function"==typeof e.materialHash?(n=(0,e.materialHash)(t,i,r),o=(0,m.S)(e.cim,e.materialOverrides)):(n=e.materialHash,o=e.cim),{analyzedCIM:o,hash:n}}const C=new class{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._rasterizer=new h.Z,this._textRasterizer=new u,this._pictureMarkerCache=new Map}async rasterizeCIMSymbolAsync(e,t,i,r,n,o,a,l){r=r||(t?null!=t.centroid?"esriGeometryPolygon":(0,s.Ji)(t.geometry):null)||function(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}(e);const c=await this.analyzeCIMSymbol(e,t?function(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}(t.attributes):null,i,r,l);return this.rasterizeCIMSymbol(c,t,r,n,o,a)}async analyzeCIMSymbol(e,t,i,r,n){const o=[],s=t?{geometryType:r,spatialReference:this._spatialReference,fields:t}:null;let l;await(0,m.c)(e.data,s,o,this._avoidSDF),(0,a.k_)(n);for(const e of o)"CIMPictureMarker"!==e.cim.type&&"CIMPictureFill"!==e.cim.type&&"CIMPictureStroke"!==e.cim.type||(l||(l=[]),l.push(this.fetchPictureMarkerResource(e,n))),i&&"text"===e.type&&"string"==typeof e.text&&e.text.indexOf("[")>-1&&(e.text=(0,f.Qs)(i,e.text,e.cim.textCase));return l&&await Promise.all(l),o}async fetchPictureMarkerResource(e,t){const i=e.materialHash;if(!this._pictureMarkerCache.get(i)){const r=(await(0,c.default)(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(i,r)}}rasterizeCIMSymbol(e,t,i,r,n,o){const a=[];for(const s of e){r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,n,o));const e=this._getRasterizedResource(s,t,i,r,n,o);if(!e)continue;let l=0,c=e.anchorX||0,m=e.anchorY||0,h=!1,u=0,y=0;if("esriGeometryPoint"===i){const e=d(r,s,null);if(u=(0,f.hf)(s.offsetX,t,n,o)*e||0,y=(0,f.hf)(s.offsetY,t,n,o)*e||0,"marker"===s.type)l=(0,f.hf)(s.rotation,t,n,o)||0,h=!!s.rotateClockwise&&s.rotateClockwise;else if("text"===s.type){if(l=(0,f.hf)(s.angle,t,n,o)||0,void 0!==s.horizontalAlignment)switch(s.horizontalAlignment){case"left":c=-.5;break;case"right":c=.5;break;default:c=0}if(void 0!==s.verticalAlignment)switch(s.verticalAlignment){case"top":m=.5;break;case"bottom":m=-.5;break;case"baseline":m=-.25;break;default:m=0}}}null!=e&&a.push({angle:l,rotateClockWise:h,anchorX:c,anchorY:m,offsetX:u,offsetY:y,rasterizedResource:e})}return this.getSymbolImage(a)}getSymbolImage(e){const t=document.createElement("canvas"),i=t.getContext("2d");let n=0,o=0,a=0,s=0;const c=[];for(let t=0;t<e.length;t++){const l=e[t],f=l.rasterizedResource;if(!f)continue;const m=f.size,h=l.offsetX,u=l.offsetY,y=l.anchorX,g=l.anchorY,p=l.rotateClockWise||!1;let d=l.angle,S=(0,r.F2)(h)-m[0]*(.5+y),x=(0,r.F2)(u)-m[1]*(.5+g),C=S+m[0],v=x+m[1];if(d){p&&(d=-d);const e=Math.sin(d*Math.PI/180),t=Math.cos(d*Math.PI/180),i=S*t-x*e,r=S*e+x*t,n=S*t-v*e,o=S*e+v*t,a=C*t-v*e,s=C*e+v*t,l=C*t-x*e,c=C*e+x*t;S=Math.min(i,n,a,l),x=Math.min(r,o,s,c),C=Math.max(i,n,a,l),v=Math.max(r,o,s,c)}n=S<n?S:n,o=x<o?x:o,a=C>a?C:a,s=v>s?v:s;const M=i.createImageData(f.size[0],f.size[1]);M.data.set(new Uint8ClampedArray(f.image.buffer));const b={offsetX:h,offsetY:u,rotateClockwise:p,angle:d,rasterizedImage:M,anchorX:y,anchorY:g};c.push(b)}t.width=a-n,t.height=s-o;const f=-n,m=s;for(let e=0;e<c.length;e++){const t=c[e],n=this._imageDataToCanvas(t.rasterizedImage),o=t.rasterizedImage.width,a=t.rasterizedImage.height,s=f-o*(.5+t.anchorX),l=m-a*(.5-t.anchorY);if(t.angle){const e=(360-t.angle)*Math.PI/180;i.save(),i.translate((0,r.F2)(t.offsetX),-(0,r.F2)(t.offsetY)),i.translate(f,m),i.rotate(e),i.translate(-f,-m),i.drawImage(n,s,l),i.restore()}else i.drawImage(n,s+(0,r.F2)(t.offsetX),l-(0,r.F2)(t.offsetY))}const h=new l.Z({x:f/t.width-.5,y:m/t.height-.5});return{imageData:0!==t.width&&0!==t.height?i.getImageData(0,0,t.width,t.height):i.createImageData(1,1),anchorPosition:h}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,i=t.getContext("2d");return t.width=e.width,t.height=e.height,i.putImageData(e,0,0),t}_imageTo32Array(e,t,i){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const r=this._imageDataCanvas,n=r.getContext("2d");return r.width=t,r.height=i,n.drawImage(e,0,0,t,i),new Uint32Array(n.getImageData(0,0,t,i).data.buffer)}_getRasterizedResource(e,t,i,r,a,s){let l,c,m,h;if("esriGeometryPolyline"===i||"esriGeometryPolygon"===i){const n=r&&r.style?r.style:g.Legend,h="esriGeometryPolyline"===i?S.stroke[n]:S.fill[n];if("line"===e.type){if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){const i=(0,f.hf)(e.width,t,a,s),{image:r,width:n,height:o}=this._getPictureResource(e,i);return this._rasterizePictureResource(e,r,n,o,h,i)}return null}({analyzedCIM:l,hash:m}=x(e,t,a,s)),c=this._embedCIMLayerInVectorMarker(l,h)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type)return null;if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,f.hf)(e.offsetX,t,a,s),e.cim.offsetY=(0,f.hf)(e.offsetY,t,a,s),e.cim.rotation=(0,f.hf)(e.rotation,t,a,s),e.cim.markerPlacement=e.markerPlacement,({analyzedCIM:l}=x(e,t,a,s)),m=(0,o.hP)(JSON.stringify(l)).toString(),c=this._embedCIMLayerInVectorMarker(l,h)}else{if("text"===e.type)return null;if("fill"===e.type){if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){const i=e.cim.size||e.cim.height;let r,n,o;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type)({image:r,width:n,height:o}=this._getPictureResource(e,i));else{({analyzedCIM:l,hash:m}=x(e,t,a,s));const i=this._rasterizer.rasterizeJSONResource(l,1,this._avoidSDF);r=i.image,n=i.size[0],o=i.size[1]}return this._rasterizePictureResource(e,r,n,o,h,null)}if("CIMSolidFill"!==e.cim.type)return null;({analyzedCIM:l,hash:m}=x(e,t,a,s)),c=this._embedCIMLayerInVectorMarker(l,h)}}}else{if("text"===e.type)return h=this._rasterizeTextResource(e,t,r,a,s),h;({analyzedCIM:l,hash:m}=x(e,t,a,s));const i=d(r,e,null);if("CIMPictureMarker"===e.cim.type){const r=(0,f.hf)(e.size,t,a,s)*i,{image:n,width:o,height:l}=this._getPictureResource(e,r);return h={image:n,size:[o,l],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},h}(0,n.FW)(l,i,{preserveOutlineWidth:!1}),c=l}m+=i,r&&(m+=JSON.stringify(r));const u=this._resourceCache;return u.has(m)?u.get(m):(h=this._rasterizer.rasterizeJSONResource(c,window.devicePixelRatio||1,this._avoidSDF),u.set(m,h),h)}_rasterizeTextResource(e,t,i,r,n){const o=d(i,e,null),a=(0,f.hf)(e.text,t,r,n);if(!a||0===a.length)return null;const s=(0,f.hf)(e.fontName,t,r,n),l=(0,f.hf)(e.style,t,r,n),c=(0,f.hf)(e.weight,t,r,n),m=(0,f.hf)(e.decoration,t,r,n),h=(0,f.hf)(e.size,t,r,n)*o,u=(0,f.hf)(e.horizontalAlignment,t,r,n),y=(0,f.hf)(e.verticalAlignment,t,r,n),g=(0,f.nn)((0,f.hf)(e.color,t,r,n)),p=(0,f.nn)((0,f.hf)(e.outlineColor,t,r,n)),S={color:g,size:h,horizontalAlignment:u,verticalAlignment:y,font:{family:s,style:l,weight:c,decoration:m},halo:{size:(0,f.hf)(e.outlineSize,t,r,n)||0,color:p,style:l},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(a,S)}_rasterizePictureResource(e,t,i,n,o,a){const l=document.createElement("canvas"),c=l.getContext("2d");l.height=(0,r.F2)(Math.max(Math.abs(o.frame.ymax-o.frame.ymin),a)),l.width=(0,r.F2)(Math.abs(o.frame.xmax-o.frame.xmin));const f=c.createImageData(i,n);f.data.set(new Uint8ClampedArray(t.buffer));const m=this._imageDataToCanvas(f),h=c.createPattern(m,"repeat"),u=Math.cos((-e.cim.rotation||0)*Math.PI/180),y=Math.sin((-e.cim.rotation||0)*Math.PI/180);h.setTransform({m11:u,m12:y,m21:-y,m22:u,m41:(0,r.F2)(e.cim.offsetX)||0,m42:(0,r.F2)(e.cim.offsetY)||0});const g=o.canvasPaths;let p,d,S;(0,s.oU)(g)?(p=g.rings,c.fillStyle=h,d=c.fill,S=["evenodd"]):(0,s.l9)(g)&&(p=g.paths,c.strokeStyle=h,c.lineWidth=a,d=c.stroke,p[0][0][1]=l.height/2,p[0][1][1]=l.height/2),c.beginPath();for(const e of p){const t=e?e.length:0;if(t>1){let i=e[0];c.moveTo((0,r.F2)(i[0]),(0,r.F2)(i[1]));for(let n=1;n<t;++n)i=e[n],c.lineTo((0,r.F2)(i[0]),(0,r.F2)(i[1]));c.closePath()}}d.apply(c,S);const x=c.getImageData(0,0,l.width,l.height),C=new Uint8Array(x.data);return{size:[l.width,l.height],image:new Uint32Array(C.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,t){const i=this._pictureMarkerCache.get(e.materialHash);if(!i)return null;const n=i.height/i.width,o=t?n>1?(0,r.F2)(t):(0,r.F2)(t)/n:i.width,a=t?n>1?(0,r.F2)(t)*n:(0,r.F2)(t):i.height;return{image:this._imageTo32Array(i,o,a),width:o,height:a}}_embedCIMLayerInVectorMarker(e,t){const i=(0,s.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol";return{type:"CIMVectorMarker",frame:t.frame,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:i,symbolLayers:[e]}}]}}}(null,!0);async function v(e,t={}){const{size:i,maxSize:o,node:a,opacity:s}=t,l=t.cimOptions||t,{feature:c,fieldMap:f,geometryType:m,style:h}=l,u=(0,n.kW)(e),y=Math.min(null!=i?i:u,null!=o?o:(0,r.Wz)(120));y!==u&&(e=e.clone(),(0,n.PI)(e,y,{preserveOutlineWidth:!0}));let g=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(g=1);const p=await C.rasterizeCIMSymbolAsync(e,c,f,m,{scaleFactor:g,style:h}),d=document.createElement("canvas");d.width=p.imageData.width,d.height=p.imageData.height,d.getContext("2d").putImageData(p.imageData,0,0);let S=d.width/g,x=d.height/g;if(null!=i&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale))){const e=S/x;S=e<=1?Math.ceil(y*e):y,x=e<=1?y:Math.ceil(y/e)}const v=new Image(S,x);return v.src=d.toDataURL(),null!=s&&(v.style.opacity=`${s}`),a&&a.appendChild(v),v}},49723:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r=i(36544),n=i(32656),o=i(78712);const a=new Map;function s(e,t,i){const{transform:s,hasZ:l,hasM:c}=i;a.has(t)||a.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,i,r,n)=>(0,o.U1)(i,t,e,r,n);case"esriGeometryPolygon":return(e,i,r,n)=>(0,o.Ie)(i,t,e,r,n);case"esriGeometryPolyline":return(e,i,r,n)=>(0,o.G6)(i,t,e,r,n);case"esriGeometryMultipoint":return(e,i,r,n)=>(0,o.J9)(i,t,e,r,n);default:return r.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new n.Z("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const f=a.get(t)(e.geometry,s,l,c);return{...e,geometry:f}}const l=function(e,t,i,n,o){const a=e.referencesGeometry()&&o?s(t,n,o):t,l=e.repurposeFeature(a);try{return e.evaluate({...i,$feature:l})}catch(e){return r.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}}}]);