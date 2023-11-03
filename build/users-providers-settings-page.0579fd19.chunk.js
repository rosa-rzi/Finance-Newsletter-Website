"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2282],{1431:(C,v,a)=>{a.r(v),a.d(v,{ProvidersPage:()=>de,default:()=>je});var n=a(67294),r=a(45349),s=a(57713),l=a(79371),m=a(26789),e=a(51541),t=a(42403),g=a(6090),b=a(62351),E=a(78549),j=a(22996),u=a(94487),c=a(37527),o=a(81252),d=a(36670),i=a(11700),x=a.n(i),P=a(86896),Z=a(88767),N=a(60881),X=a(18189),K=a(48683),ge=a(75878),pe=a(9370),fe=a(61585),ve=a(45124),ne=a(19442),be=a(67276),ye=a(28971),xe=a(41054),$e=a(45697),h=a.n($e),Ee=a(58885),Pe=a(28469);const Q=({description:$,disabled:A,intlLabel:z,error:O,name:B,onChange:w,placeholder:y,providerToEditName:I,type:S,value:L})=>{const{formatMessage:T}=(0,P.Z)(),D=B==="noName"?`${window.strapi.backendURL}/api/connect/${I}/callback`:L,U=T({id:z.id,defaultMessage:z.defaultMessage},{provider:I,...z.values}),R=$?T({id:$.id,defaultMessage:$.defaultMessage},{provider:I,...$.values}):"";if(S==="bool")return n.createElement(Ee.s,{"aria-label":B,checked:L,disabled:A,hint:R,label:U,name:B,offLabel:T({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:T({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:F=>{w({target:{name:B,value:F.target.checked}})}});const q=y?T({id:y.id,defaultMessage:y.defaultMessage},{...y.values}):"",_=O?T({id:O,defaultMessage:O}):"";return n.createElement(Pe.o,{"aria-label":B,disabled:A,error:_,label:U,name:B,onChange:w,placeholder:q,type:S,value:D})};Q.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},Q.propTypes={description:h().shape({id:h().string.isRequired,defaultMessage:h().string.isRequired,values:h().object}),disabled:h().bool,error:h().string,intlLabel:h().shape({id:h().string.isRequired,defaultMessage:h().string.isRequired,values:h().object}).isRequired,name:h().string.isRequired,onChange:h().func.isRequired,placeholder:h().shape({id:h().string.isRequired,defaultMessage:h().string.isRequired,values:h().object}),providerToEditName:h().string.isRequired,type:h().string.isRequired,value:h().oneOfType([h().bool,h().string])};const Me=Q,V=({headerBreadcrumbs:$,initialData:A,isSubmiting:z,layout:O,isOpen:B,onSubmit:w,onToggle:y,providerToEditName:I})=>{const{formatMessage:S}=(0,P.Z)();return B?n.createElement(N.P,{onClose:y,labelledBy:"title"},n.createElement(X.x,null,n.createElement(be.O,{label:$.join(", ")},$.map((L,T,D)=>n.createElement(ye.$,{isCurrent:T===D.length-1,key:L},L)))),n.createElement(xe.J9,{onSubmit:L=>w(L),initialValues:A,validationSchema:O.schema,validateOnChange:!1},({errors:L,handleChange:T,values:D})=>n.createElement(o.l0,null,n.createElement(K.f,null,n.createElement(ge.k,{direction:"column",alignItems:"stretch",gap:1},n.createElement(pe.r,{gap:5},O.form.map(U=>U.map(R=>n.createElement(fe.P,{key:R.name,col:R.size,xs:12},n.createElement(Me,{...R,error:L[R.name],onChange:T,value:D[R.name],providerToEditName:I}))))))),n.createElement(ve.m,{startActions:n.createElement(ne.z,{variant:"tertiary",onClick:y,type:"button"},S({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:n.createElement(ne.z,{type:"submit",loading:z},S({id:"global.save",defaultMessage:"Save"}))})))):null};V.defaultProps={initialData:null,providerToEditName:null},V.propTypes={headerBreadcrumbs:h().arrayOf(h().string).isRequired,initialData:h().object,layout:h().shape({form:h().arrayOf(h().array),schema:h().object}).isRequired,isOpen:h().bool.isRequired,isSubmiting:h().bool.isRequired,onSubmit:h().func.isRequired,onToggle:h().func.isRequired,providerToEditName:h().string};const Te=V;var ae=a(84419),M=a(99688),p=a(87561);const se={id:(0,M.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ie={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},G={id:(0,M.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,M.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},re={id:(0,M.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,M.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},W={id:(0,M.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},le={id:(0,M.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6}]],schema:p.Ry().shape({enabled:p.Xg().required(o.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:W,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:W,size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:p.Ry().shape({enabled:p.Xg().required(o.I0.required),key:p.Z_().when("enabled",{is:!0,then:p.Z_().required(o.I0.required),otherwise:p.Z_()}),secret:p.Z_().when("enabled",{is:!0,then:p.Z_().required(o.I0.required),otherwise:p.Z_()}),callback:p.Z_().when("enabled",{is:!0,then:p.Z_().required(o.I0.required),otherwise:p.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:W,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:W,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,M.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:W,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,M.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,M.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:p.Ry().shape({enabled:p.Xg().required(o.I0.required),key:p.Z_().when("enabled",{is:!0,then:p.Z_().required(o.I0.required),otherwise:p.Z_()}),secret:p.Z_().when("enabled",{is:!0,then:p.Z_().required(o.I0.required),otherwise:p.Z_()}),subdomain:p.Z_().when("enabled",{is:!0,then:p.Z_().required(o.I0.required),otherwise:p.Z_()}),callback:p.Z_().when("enabled",{is:!0,then:p.Z_().required(o.I0.required),otherwise:p.Z_()})})}},de=()=>{const{formatMessage:$,locale:A}=(0,P.Z)(),z=(0,Z.useQueryClient)(),{trackUsage:O}=(0,o.rS)(),[B,w]=n.useState(!1),[y,I]=n.useState(null),S=(0,o.lm)(),{lockApp:L,unlockApp:T}=(0,o.o1)(),{get:D,put:U}=(0,o.kY)(),{formatAPIError:R}=(0,o.So)(),q=(0,o.Xe)(A,{sensitivity:"base"});(0,o.go)();const{isLoading:_,allowedActions:{canUpdate:F}}=(0,o.ss)({update:ae._.updateProviders}),{isLoading:Ce,data:ee}=(0,Z.useQuery)(["users-permissions","get-providers"],async()=>{const{data:f}=await D("/users-permissions/providers");return f},{initialData:{}}),ce=(0,Z.useMutation)(f=>U("/users-permissions/providers",f),{async onSuccess(){await z.invalidateQueries(["users-permissions","providers"]),S({type:"success",message:{id:(0,M.OB)("notification.success.submit")}}),O("didEditAuthenticationProvider"),te(),T()},onError(f){S({type:"warning",message:R(f)}),T()},refetchActive:!1}),k=Object.entries(ee).reduce((f,[H,Re])=>{const{icon:me,enabled:Ze,subdomain:Se}=Re;return f.push({name:H,icon:me==="envelope"?["fas","envelope"]:["fab",me],enabled:Ze,subdomain:Se}),f},[]).sort((f,H)=>q.compare(f.name,H.name)),Le=Ce||_,ue=n.useMemo(()=>y?!!k.find(H=>H.name===y)?.subdomain:!1,[k,y]),Be=n.useMemo(()=>y==="email"?Y.email:ue?Y.providersWithSubdomain:Y.providers,[y,ue]),te=()=>{w(f=>!f)},he=f=>{F&&(I(f.name),te())},Oe=async f=>{L(),O("willEditAuthenticationProvider"),ce.mutate({providers:{...ee,[y]:f}})};return n.createElement(r.A,null,n.createElement(o.SL,{name:$({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),n.createElement(s.o,null,n.createElement(l.T,{title:$({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Le?n.createElement(o.dO,null):n.createElement(m.D,null,n.createElement(e.i,{colCount:3,rowCount:k.length+1},n.createElement(t.h,null,n.createElement(g.Tr,null,n.createElement(b.Th,null,n.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},$({id:"global.name",defaultMessage:"Name"}))),n.createElement(b.Th,null,n.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},$({id:(0,M.OB)("Providers.status"),defaultMessage:"Status"}))),n.createElement(b.Th,null,n.createElement(E.Z,{variant:"sigma"},n.createElement(j.T,null,$({id:"global.settings",defaultMessage:"Settings"})))))),n.createElement(u.p,null,k.map(f=>n.createElement(g.Tr,{key:f.name,...(0,o.X7)({fn:()=>he(f),condition:F})},n.createElement(b.Td,{width:"45%"},n.createElement(E.Z,{fontWeight:"semiBold",textColor:"neutral800"},f.name)),n.createElement(b.Td,{width:"65%"},n.createElement(E.Z,{textColor:f.enabled?"success600":"danger600","data-testid":`enable-${f.name}`},f.enabled?$({id:"global.enabled",defaultMessage:"Enabled"}):$({id:"global.disabled",defaultMessage:"Disabled"}))),n.createElement(b.Td,{...o.UW},F&&n.createElement(c.h,{onClick:()=>he(f),noBorder:!0,icon:n.createElement(d.Z,null),label:"Edit"})))))))),n.createElement(Te,{initialData:ee[y],isOpen:B,isSubmiting:ce.isLoading,layout:Be,headerBreadcrumbs:[$({id:(0,M.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),x()(y)],onToggle:te,onSubmit:Oe,providerToEditName:y}))},je=()=>n.createElement(o.O4,{permissions:ae._.readProviders},n.createElement(de,null))},99688:(C,v,a)=>{a.d(v,{YX:()=>l,OB:()=>m.Z});var n=a(41609),r=a.n(n);const l=e=>Object.keys(e).reduce((t,g)=>{const b=e[g].controllers,E=Object.keys(b).reduce((j,u)=>(r()(b[u])||(j[u]=b[u]),j),{});return r()(E)||(t[g]={controllers:E}),t},{});var m=a(58655)},26789:(C,v,a)=>{a.d(v,{D:()=>s});var n=a(85893),r=a(50781);const s=({children:l})=>(0,n.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:l})},79371:(C,v,a)=>{a.d(v,{T:()=>E});var n=a(85893),r=a(67294),s=a(88972);const l=c=>{const o=(0,r.useRef)(null),[d,i]=(0,r.useState)(!0),x=([P])=>{i(P.isIntersecting)};return(0,r.useEffect)(()=>{const P=o.current,Z=new IntersectionObserver(x,c);return P&&Z.observe(o.current),()=>{P&&Z.disconnect()}},[o,c]),[o,d]};var m=a(79698);const e=(c,o)=>{const d=(0,m.W)(o);(0,r.useLayoutEffect)(()=>{const i=new ResizeObserver(d);return Array.isArray(c)?c.forEach(x=>{x.current&&i.observe(x.current)}):c.current&&i.observe(c.current),()=>{i.disconnect()}},[c,d])};var t=a(50781),g=a(75878),b=a(78549);const E=c=>{const o=(0,r.useRef)(null),[d,i]=(0,r.useState)(null),[x,P]=l({root:null,rootMargin:"0px",threshold:0});return e(x,()=>{x.current&&i(x.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{o.current&&i(o.current.getBoundingClientRect())},[o]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{height:d?.height},ref:x,children:P&&(0,n.jsx)(u,{ref:o,...c})}),!P&&(0,n.jsx)(u,{...c,sticky:!0,width:d?.width})]})};E.displayName="HeaderLayout";const j=(0,s.ZP)(t.x)`
  width: ${({width:c})=>c?`${c/16}rem`:void 0};
  z-index: ${({theme:c})=>c.zIndices[1]};
`,u=r.forwardRef(({navigationAction:c,primaryAction:o,secondaryAction:d,subtitle:i,title:x,sticky:P,width:Z,...N},X)=>{const K=typeof i=="string";return P?(0,n.jsx)(j,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:(0,n.jsxs)(g.k,{justifyContent:"space-between",children:[(0,n.jsxs)(g.k,{children:[c&&(0,n.jsx)(t.x,{paddingRight:3,children:c}),(0,n.jsxs)(t.x,{children:[(0,n.jsx)(b.Z,{variant:"beta",as:"h1",...N,children:x}),K?(0,n.jsx)(b.Z,{variant:"pi",textColor:"neutral600",children:i}):i]}),d?(0,n.jsx)(t.x,{paddingLeft:4,children:d}):null]}),(0,n.jsx)(g.k,{children:o?(0,n.jsx)(t.x,{paddingLeft:2,children:o}):void 0})]})}):(0,n.jsxs)(t.x,{ref:X,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,n.jsx)(t.x,{paddingBottom:2,children:c}):null,(0,n.jsxs)(g.k,{justifyContent:"space-between",children:[(0,n.jsxs)(g.k,{minWidth:0,children:[(0,n.jsx)(b.Z,{as:"h1",variant:"alpha",...N,children:x}),d?(0,n.jsx)(t.x,{paddingLeft:4,children:d}):null]}),o]}),K?(0,n.jsx)(b.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:i}):i]})})},45349:(C,v,a)=>{a.d(v,{A:()=>e});var n=a(85893),r=a(88972),s=a(50781);const l=(0,r.ZP)(s.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:t})=>t?"auto 1fr":"1fr"};
`,m=(0,r.ZP)(s.x)`
  overflow-x: hidden;
`,e=({sideNav:t,children:g})=>(0,n.jsxs)(l,{hasSideNav:!!t,children:[t,(0,n.jsx)(m,{paddingBottom:10,children:g})]})},57713:(C,v,a)=>{a.d(v,{o:()=>m});var n=a(85893),r=a(88972),s=a(50781);const l=(0,r.ZP)(s.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,m=({labelledBy:e="main-content-title",...t})=>(0,n.jsx)(l,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...t})},29385:(C,v,a)=>{a.d(v,{x:()=>m});var n=a(88972),r=a(76067),s=a(86822);const l={color:!0,cursor:!0,height:!0,width:!0},m=n.ZP.div.withConfig({shouldForwardProp:(e,t)=>!l[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>(0,s.$)(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>(0,s.$)(e.colors,t,t)};
  color: ${({theme:e,color:t})=>(0,s.$)(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>(0,r.Z)("padding",t,e)}
  ${({theme:e,paddingTop:t})=>(0,r.Z)("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>(0,r.Z)("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>(0,r.Z)("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>(0,r.Z)("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>(0,r.Z)("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>(0,r.Z)("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>(0,r.Z)("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>(0,r.Z)("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:g})=>t?e.borderRadius:g};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>(0,s.$)(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:g,borderWidth:b})=>{if(t&&!g&&typeof b>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>(0,s.$)(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>(0,s.$)(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>(0,s.$)(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},3122:(C,v,a)=>{a.d(v,{Z:()=>o});var n=a(88972);const r="alpha",s="beta",l="delta",m="epsilon",e="omega",t="pi",g="sigma",b=[r,s,l,m,e,t,g],E=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,j=({variant:d=e,theme:i})=>{switch(d){case r:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[5]};
        line-height: ${i.lineHeights[2]};
      `;case s:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[4]};
        line-height: ${i.lineHeights[1]};
      `;case l:return`
        font-weight: ${i.fontWeights.semiBold};
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[2]};
      `;case m:return`
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[6]};
      `;case e:return`
        font-size: ${i.fontSizes[2]};
        line-height: ${i.lineHeights[4]};
      `;case t:return`
        font-size: ${i.fontSizes[1]};
        line-height: ${i.lineHeights[3]};
      `;case g:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[0]};
        line-height: ${i.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${i.fontSizes[2]};
      `}};var u=a(86822);const c={fontSize:!0,fontWeight:!0},o=n.ZP.span.withConfig({shouldForwardProp:(d,i)=>!c[d]&&i(d)})`
  ${j}
  ${E}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:i})=>(0,u.$)(d.fontWeights,i,void 0)};
  font-size: ${({theme:d,fontSize:i})=>(0,u.$)(d.fontSizes,i,void 0)};
  line-height: ${({theme:d,lineHeight:i})=>(0,u.$)(d.lineHeights,i,i)};
  color: ${({theme:d,textColor:i})=>d.colors[i||"neutral800"]};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},76067:(C,v,a)=>{a.d(v,{Z:()=>n});const n=(r,s,l)=>{if(!s)return;let m=Array.isArray(s)?s:[];if(!Array.isArray(s)&&typeof s=="object"&&(m=[s?.desktop,s?.tablet,s?.mobile]),m.length>0)return m.reduce((t,g,b)=>{if(g)switch(b){case 0:return`${t}${r}: ${l.spaces[g]};`;case 1:return`${t}${l.mediaQueries.tablet}{${r}: ${l.spaces[g]};}`;case 2:return`${t}${l.mediaQueries.mobile}{${r}: ${l.spaces[g]};}`;default:return t}return t},"");const e=l.spaces[s]||s;return`${r}: ${e};`}},86822:(C,v,a)=>{a.d(v,{$:()=>s});function n(l,m){return typeof l=="string"?!1:m in l}function r(l){return l&&typeof l=="object"&&!Array.isArray(l)}function s(l,m,e){return m&&n(l,m)?l[m]:e}},67276:(C,v,a)=>{a.d(v,{O:()=>j});var n=a(85893),r=a(67294),s=a(88972),l=a(29385),m=a(3122);const e=()=>(0,n.jsx)(l.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,n.jsx)(m.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var t=a(76067);const g={direction:!0},b=(0,s.ZP)(l.x).withConfig({shouldForwardProp:(u,c)=>!g[u]&&c(u)})`
  align-items: ${({alignItems:u="center"})=>u};
  display: ${({display:u="flex",inline:c})=>c?"inline-flex":u};
  flex-direction: ${({direction:u="row"})=>u};
  flex-shrink: ${({shrink:u})=>u};
  flex-wrap: ${({wrap:u})=>u};
  ${({gap:u,theme:c})=>(0,t.Z)("gap",u,c)};
  justify-content: ${({justifyContent:u})=>u};
`,E=(0,s.ZP)(b)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:u})=>`calc(-1*${u.spaces[2]})`};
  }
`,j=({label:u,children:c,...o})=>{const d=r.Children.toArray(c);return(0,n.jsx)(l.x,{"aria-label":u,...o,children:(0,n.jsx)(E,{as:"ol",children:r.Children.map(d,(i,x)=>{const P=d.length>1&&x+1<d.length;return(0,n.jsxs)(b,{inline:!0,as:"li",children:[i,P&&(0,n.jsx)(e,{})]})})})})};j.displayName="Breadcrumbs"},28971:(C,v,a)=>{a.d(v,{$:()=>l});var n=a(85893),r=a(29385),s=a(3122);const l=({children:m,isCurrent:e=!1,...t})=>(0,n.jsx)(r.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,n.jsx)(s.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...t,children:m})});l.displayName="Crumb"}}]);
