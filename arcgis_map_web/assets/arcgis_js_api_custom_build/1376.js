(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[1376],{41376:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Blur:()=>o}),s(95830),s(33655),s(5627),s(23660);var r=s(84570),i=s(23244);const a=[1,0],n=[0,1];class o{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,s){const{context:r}=e,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(e),this._quad||(this._quad=new i.Z(r,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(e,t,n):this._radialBlur(e,t),o.unbind()}_gaussianBlur(e,t,s){const{context:r,state:i,painter:o,pixelRatio:u}=e,{size:l}=i,{materialManager:d}=o,c=this._programDesc,b=this._quad,h=[Math.round(u*l[0]),Math.round(u*l[1])],p=this._blurFBO,_=d.getProgram(e,c.gaussianBlur,[{name:"radius",value:Math.ceil(s)}]);r.bindProgram(_),r.setBlendingEnabled(!1),r.bindFramebuffer(p),r.bindTexture(t.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",h),_.setUniform2fv("u_direction",a),_.setUniform1f("u_sigma",s),b.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(p.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",n),b.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(1,771),r.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:s,painter:r}=e,{materialManager:i}=r,a=this._programDesc,n=this._quad,o=this._blurFBO;s.bindFramebuffer(o);const u=i.getProgram(e,a.radialBlur);s.bindProgram(u),s.setBlendingEnabled(!1),s.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),n.draw(),s.bindFramebuffer(t),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.setBlendingEnabled(!0);const l=i.getProgram(e,a.blit);s.bindProgram(l),s.bindTexture(o.colorTexture,5),l.setUniform1i("u_texture",5),s.setBlendFunction(1,771),n.draw()}_createOrResizeResources(e){const{context:t,state:s,pixelRatio:i}=e,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new r.Z(t,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))}}}}]);