"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5895],{39223:(V,I,t)=>{t.r(I),t.d(I,{SettingsPage:()=>Le});var e=t(67294),R=t(45349),m=t(81252),F=t(64593),f=t(86896),T=t(16550),C=t(92807),U=t(80902),W=t(95187),j=t(14155),Q=t(66712),y=t(5330),x=t(61499),K=t(21660),Z=t(36636),H=t(45697),a=t.n(H),J=t(73727);const $=({menu:o})=>{const{formatMessage:n}=(0,f.Z)(),{trackUsage:l}=(0,m.rS)(),{pathname:s}=(0,T.TH)(),g=o.filter(r=>!r.links.every(i=>i.isDisplayed===!1)).map(r=>({...r,title:r.intlLabel,links:r.links.map(i=>({...i,title:i.intlLabel,name:i.id}))})),u=n({id:"global.settings",defaultMessage:"Settings"}),c=(r=null)=>{l("willNavigate",{from:s,to:r})};return e.createElement(Q.m,{ariaLabel:u},e.createElement(y.p,{label:u}),e.createElement(x.Z,null,g.map(r=>e.createElement(K.D,{key:r.id,label:n(r.intlLabel)},r.links.map(i=>e.createElement(Z.E,{as:J.OL,withBullet:i.hasNotification,to:i.to,onClick:()=>c(i.to),key:i.id},n(i.intlLabel)))))))};$.propTypes={menu:a().array.isRequired};const Ct=$,yt=[{async Component(){return await t.e(3455).then(t.bind(t,7513))},to:"/settings/roles",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/new",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(2544)]).then(t.bind(t,63727))},to:"/settings/roles/:id",exact:!0},{async Component(){return await t.e(5199).then(t.bind(t,87901))},to:"/settings/users",exact:!0},{async Component(){return await t.e(4263).then(t.bind(t,93552))},to:"/settings/users/:id",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,71589))},to:"/settings/webhooks/create",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,10372))},to:"/settings/webhooks/:id",exact:!0},{async Component(){return await t.e(4121).then(t.bind(t,10998))},to:"/settings/webhooks",exact:!0},{async Component(){return await t.e(8056).then(t.bind(t,71362))},to:"/settings/api-tokens",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(5477),t.e(2458),t.e(4299)]).then(t.bind(t,1880))},to:"/settings/api-tokens/create",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(5477),t.e(2458),t.e(92)]).then(t.bind(t,50955))},to:"/settings/api-tokens/:id",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(5477),t.e(3467),t.e(4816)]).then(t.bind(t,81524))},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){return await t.e(9600).then(t.bind(t,68446))},to:"/settings/transfer-tokens",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(5477),t.e(3467),t.e(2492)]).then(t.bind(t,63252))},to:"/settings/transfer-tokens/:id",exact:!0}];var St=t(57713),xt=t(28809),Rt=t(79371),P=t(19442),Tt=t(26789),A=t(75878),v=t(78549),st=t(9370),N=t(61585),lt=t(51503),zt=t(8675),it=t(91393),rt=t(88767),Ot=t(86706),It=t(36364),z=t(50781);const B=750,G=100,dt=["image/jpeg","image/png","image/svg+xml"];var Pt=t(2578),At=t(58488),ct=t(37527),Dt=t(21345),Ft=t(12978),Ut=t(61378),Zt=t(60881),Bt=t(18189),Y=t(18172);const mt={localImage:void 0},jt=(o=mt,n)=>(0,Y.ZP)(o,l=>{switch(n.type){case"SET_LOCAL_IMAGE":{l.localImage=n.value;break}default:return l}}),X=({onChangeLogo:o,customLogo:n,goTo:l,Component:s,modalTitle:d,next:g,prev:u,currentStep:c})=>{const[{localImage:r},i]=(0,e.useReducer)(jt,mt),{formatMessage:E}=(0,f.Z)(),p=M=>{i({type:"SET_LOCAL_IMAGE",value:M})},L=()=>{l(null)};return c?e.createElement(Zt.P,{labelledBy:"modal",onClose:L},e.createElement(Bt.x,null,e.createElement(v.Z,{fontWeight:"bold",as:"h2",id:"modal"},E(d))),e.createElement(s,{setLocalImage:p,goTo:l,next:g,prev:u,onClose:L,asset:r||n,onChangeLogo:o})):null};X.defaultProps={Component:void 0,currentStep:void 0,customLogo:void 0,modalTitle:void 0,next:null,prev:null},X.propTypes={Component:a().elementType,currentStep:a().string,customLogo:a().shape({name:a().string,url:a().string,width:a().number,height:a().number,ext:a().string}),goTo:a().func.isRequired,modalTitle:a().shape({id:a().string,defaultMessage:a().string}),next:a().string,onChangeLogo:a().func.isRequired,prev:a().string};const Nt=X,gt={currentStep:void 0},Gt=(o=gt,n)=>(0,Y.ZP)(o,l=>{switch(n.type){case"GO_TO":{l.currentStep=n.to;break}default:return l}});var Wt=t(20107),b=t(61738),Kt=t(81984),w=t(54375),Ht=t(65093),$t=t(32156),Vt=t(80907),Qt=t(8595),k=t(45124),Jt=t(38828),Yt=t(88972);const Xt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},ut={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},bt=o=>new Promise(n=>{const l=new FileReader;l.onload=()=>{const s=new Image;s.onload=function(){n({width:s.width,height:s.height})},s.src=l.result},l.readAsDataURL(o)}),wt=(o,n)=>({ext:o.name.split(".").pop(),size:o.size/1e3,name:o.name,url:URL.createObjectURL(o),rawFile:o,width:n.width,height:n.height}),pt=async o=>{let n;if(!dt.includes(o.type))throw n=new Error("File format"),n.displayMessage=Xt,n;const s=await bt(o);if(!(s.width<=B&&s.height<=B))throw n=new Error("File sizing"),n.displayMessage=ut,n;const g=wt(o,s);if(!(g.size<=G))throw n=new Error("File sizing"),n.displayMessage=ut,n;return g},kt=(0,Yt.ZP)(Ht._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,q=({setLocalImage:o,goTo:n,next:l,onClose:s})=>{const{formatMessage:d}=(0,f.Z)(),[g,u]=(0,e.useState)(!1),[c,r]=(0,e.useState)(void 0),i=(0,e.useRef)(null),E=()=>u(!0),p=()=>u(!1),L=O=>{O.preventDefault(),i.current.click()},M=async()=>{p();const O=i.current.files[0];if(O)try{const D=await pt(O);o(D),n(l)}catch(D){if(D.displayMessage)r(d(D.displayMessage,{size:G,dimension:B})),i.current.focus();else throw D}},S=()=>g?"primary500":c?"danger600":"neutral300";return e.createElement(e.Fragment,null,e.createElement("form",null,e.createElement(z.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement($t.g,{name:"logo-upload",error:c},e.createElement("label",{htmlFor:"logo-upload"},e.createElement(A.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(A.k,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:g?"primary100":"neutral100",borderColor:S(),borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:E,onDragLeave:p},e.createElement(Vt.J,{color:"primary600",width:`${60/16}rem`,height:`${60/16}rem`,as:Jt.Z,"aria-hidden":!0}),e.createElement(z.x,{paddingTop:3,paddingBottom:5},e.createElement(v.Z,{variant:"delta",as:"span"},d({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"}))),e.createElement(kt,{accept:dt,cursor:"pointer",as:"input",type:"file",name:"files",tabIndex:-1,zIndex:1,onChange:M,ref:i,id:"logo-upload"}),e.createElement(P.z,{type:"button",onClick:L},d({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})),e.createElement(z.x,{paddingTop:6},e.createElement(v.Z,{variant:"pi",textColor:"neutral600"},d({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:G,dimension:B})))),e.createElement(Qt.c,null)))))),e.createElement(k.m,{startActions:e.createElement(P.z,{onClick:s,variant:"tertiary"},d({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"}))}))};q.defaultProps={next:null},q.propTypes={goTo:a().func.isRequired,next:a().string,onClose:a().func.isRequired,setLocalImage:a().func.isRequired};const qt=q;var _t=t(28469);const te=async o=>{try{const{get:n}=(0,m.tg)(),l=await n(o,{responseType:"blob",timeout:8e3});return new File([l.data],l.config.url,{type:l.headers["content-type"]})}catch(n){throw n.displayMessage={id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"},n}},_=({goTo:o,next:n,onClose:l,setLocalImage:s})=>{const{formatMessage:d}=(0,f.Z)(),[g,u]=(0,e.useState)(""),[c,r]=(0,e.useState)(null),i=p=>{u(p.target.value)},E=async()=>{try{const p=await te(g),L=await pt(p);s(L),o(n)}catch(p){if(p.displayMessage)r(d(p.displayMessage,{size:G,dimension:B}));else throw p}};return e.createElement("form",{onSubmit:p=>{p.preventDefault(),E()}},e.createElement(z.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(_t.o,{label:d({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:c,onChange:i,value:g,name:"logo-url"})),e.createElement(k.m,{startActions:e.createElement(P.z,{onClick:l,variant:"tertiary"},d({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(P.z,{type:"submit"},d({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"}))}))};_.defaultProps={next:null},_.propTypes={goTo:a().func.isRequired,next:a().string,onClose:a().func.isRequired,setLocalImage:a().func.isRequired};const ee=_,tt=({setLocalImage:o,goTo:n,next:l,onClose:s})=>{const{formatMessage:d}=(0,f.Z)();return e.createElement(Wt.v,{label:d({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple"},e.createElement(z.x,{paddingLeft:8,paddingRight:8},e.createElement(b.m,null,e.createElement(b.O,null,d({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})),e.createElement(b.O,null,d({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"}))),e.createElement(Kt.i,null)),e.createElement(w.n,null,e.createElement(w.x,null,e.createElement(qt,{onClose:s,setLocalImage:o,goTo:n,next:l})),e.createElement(w.x,null,e.createElement(ee,{onClose:s,setLocalImage:o,goTo:n,next:l}))))};tt.defaultProps={next:null},tt.propTypes={goTo:a().func.isRequired,next:a().string,onClose:a().func.isRequired,setLocalImage:a().func.isRequired};const ne=tt;var oe=t(46038),ae=t(5390),se=t(11255),le=t(71029),ie=t(91457),ht=t(81896),re=t(50192);const Et=({asset:o})=>{const{formatMessage:n}=(0,f.Z)();return e.createElement(oe.Z,null,e.createElement(ae.O,null,e.createElement(se.H,{size:"S",src:o.url})),e.createElement(le.e,null,e.createElement(ie.a,null,e.createElement(ht.l,null,o.name),e.createElement(ht._,null,`${o.ext.toUpperCase()} - ${o.width}\u2715${o.height}`)),e.createElement(re.E,null,n({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"}))))};Et.propTypes={asset:a().shape({name:a().string,url:a().string,width:a().number,height:a().number,ext:a().string}).isRequired};const de=Et,et=({onClose:o,asset:n,prev:l,next:s,goTo:d,setLocalImage:g,onChangeLogo:u})=>{const{formatMessage:c}=(0,f.Z)(),r=()=>{g(void 0),d(l)},i=()=>{u(n),d(s)};return e.createElement(e.Fragment,null,e.createElement(z.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(A.k,{justifyContent:"space-between",paddingBottom:6},e.createElement(A.k,{direction:"column",alignItems:"flex-start"},e.createElement(v.Z,{variant:"pi",fontWeight:"bold"},c({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})),e.createElement(v.Z,{variant:"pi",textColor:"neutral500"},c({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"}))),e.createElement(P.z,{onClick:r,variant:"secondary"},c({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"}))),e.createElement(z.x,{maxWidth:(0,m.Q1)(180)},n.url?e.createElement(de,{asset:n}):null)),e.createElement(k.m,{startActions:e.createElement(P.z,{onClick:o,variant:"tertiary"},c({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(P.z,{onClick:i},c({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"}))}))};et.defaultProps={next:null,prev:null},et.propTypes={goTo:a().func.isRequired,asset:a().shape({name:a().string,url:a().string,width:a().number,height:a().number,ext:a().string}).isRequired,next:a().string,onClose:a().func.isRequired,onChangeLogo:a().func.isRequired,prev:a().string,setLocalImage:a().func.isRequired};const ce={upload:{Component:ne,modalTitle:{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"},next:"pending",prev:null},pending:{Component:et,modalTitle:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"},next:null,prev:"upload"}},nt=({canUpdate:o,customLogo:n,defaultLogo:l,hint:s,label:d,onChangeLogo:g,onResetLogo:u})=>{const[{currentStep:c},r]=(0,e.useReducer)(Gt,gt),{Component:i,next:E,prev:p,modalTitle:L}=ce[c]||{},{formatMessage:M}=(0,f.Z)(),S=O=>{r({type:"GO_TO",to:O})};return e.createElement(e.Fragment,null,e.createElement(Pt.F,{label:d,selectedSlide:0,hint:s,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:n?.name||"logo.png",actions:e.createElement(At.b,null,e.createElement(ct.h,{disabled:!o,onClick:()=>S(n?"pending":"upload"),label:M({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:e.createElement(Ft.Z,null)}),n&&e.createElement(ct.h,{disabled:!o,onClick:u,label:M({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:e.createElement(Ut.Z,null)}))},e.createElement(Dt.q,{label:M({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"})},e.createElement(z.x,{maxHeight:"40%",maxWidth:"40%",as:"img",src:n?.url||l,alt:M({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})}))),e.createElement(Nt,{Component:i,currentStep:c,onChangeLogo:g,customLogo:n,goTo:S,next:E,prev:p,modalTitle:L}))};nt.defaultProps={canUpdate:!1,customLogo:null,hint:null},nt.propTypes={canUpdate:a().bool,customLogo:a().shape({url:a().string,name:a().string}),label:a().string.isRequired,hint:a().string,defaultLogo:a().string.isRequired,onChangeLogo:a().func.isRequired,onResetLogo:a().func.isRequired};const ft=nt;var me=t(82492),ge=t.n(me);const ue=(o,n)=>ge()(o,{menuLogo:{display:n.menuLogo},authLogo:{display:n.authLogo}}),ot={menuLogo:{display:null,submit:{rawFile:null,isReset:!1}},authLogo:{display:null,submit:{rawFile:null,isReset:!1}}},pe=(o=ot,n)=>(0,Y.ZP)(o,l=>{switch(n.type){case"SET_CUSTOM_MENU_LOGO":{l.menuLogo.display=n.value,l.menuLogo.submit.rawFile=n.value.rawFile;break}case"SET_CUSTOM_AUTH_LOGO":{l.authLogo.display=n.value,l.authLogo.submit.rawFile=n.value.rawFile;break}case"RESET_CUSTOM_MENU_LOGO":{l.menuLogo.display=null,l.menuLogo.submit={rawFile:null,isReset:!0};break}case"RESET_CUSTOM_AUTH_LOGO":{l.authLogo.display=null,l.authLogo.submit={rawFile:null,isReset:!0};break}default:return l}}),at=(0,e.forwardRef)(({canUpdate:o,projectSettingsStored:n},l)=>{const{formatMessage:s}=(0,f.Z)(),{trackUsage:d}=(0,m.rS)(),{logos:{menu:g,auth:u}}=(0,C.um)(),[{menuLogo:c,authLogo:r},i]=(0,e.useReducer)(pe,ot,()=>ue(ot,n)),E=S=>{i({type:"SET_CUSTOM_MENU_LOGO",value:S})},p=()=>{d("didClickResetLogo",{logo:"menu"}),i({type:"RESET_CUSTOM_MENU_LOGO"})},L=S=>{i({type:"SET_CUSTOM_AUTH_LOGO",value:S})},M=()=>{d("didClickResetLogo",{logo:"auth"}),i({type:"RESET_CUSTOM_AUTH_LOGO"})};return(0,e.useImperativeHandle)(l,()=>({getValues:()=>({menuLogo:c.submit,authLogo:r.submit})})),e.createElement(z.x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(v.Z,{variant:"delta",as:"h3"},s({id:"Settings.application.customization",defaultMessage:"Customization"})),e.createElement(v.Z,{variant:"pi",textColor:"neutral600"},s({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:B,size:G})),e.createElement(st.r,{paddingTop:4,gap:4},e.createElement(N.P,{col:6,s:12},e.createElement(ft,{canUpdate:o,customLogo:c.display,defaultLogo:g.default,hint:s({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:s({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:E,onResetLogo:p})),e.createElement(N.P,{col:6,s:12},e.createElement(ft,{canUpdate:o,customLogo:r.display,defaultLogo:u.default,hint:s({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:s({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:L,onResetLogo:M}))))});at.defaultProps={canUpdate:!1,projectSettingsStored:null},at.propTypes={canUpdate:a().bool,projectSettingsStored:a().shape({menuLogo:a().shape({url:a().string,name:a().string})})};const he=at,Ee=o=>{const n=new FormData;return Object.entries(o).forEach(([l,s])=>{s&&s.rawFile instanceof File&&n.append(l,s.rawFile),s&&s.isReset&&n.append(l,null)}),n},fe=()=>null,ve=()=>{const o=e.useRef(),n=(0,m.lm)(),{trackUsage:l}=(0,m.rS)(),{formatMessage:s}=(0,f.Z)(),{get:d,post:g}=(0,m.kY)(),{updateProjectSettings:u}=(0,C.um)(),c=(0,Ot.v9)(It._),{formatAPIError:r}=(0,m.So)(),{communityEdition:i,latestStrapiReleaseTag:E,nodeVersion:p,shouldUpdateStrapi:L,strapiVersion:M}=(0,m.L7)(),S=(0,U.c)(fe,async()=>(await t.e(5013).then(t.bind(t,65013))).AdminSeatInfoEE),{allowedActions:{canRead:O,canUpdate:D}}=(0,m.ss)(c.settings["project-settings"]);(0,m.go)();const{data:vt,isLoading:Me}=(0,rt.useQuery)(["project-settings"],async()=>{const{data:h}=await d("/admin/project-settings");return h},{cacheTime:0,enabled:O,select(h){return{...h,authLogo:h.authLogo?{...h.authLogo,url:(0,m.CR)(h.authLogo.url)}:h.authLogo,menuLogo:h.menuLogo?{...h.menuLogo,url:(0,m.CR)(h.menuLogo.url)}:h.menuLogo}}}),Ce=(0,rt.useMutation)(h=>g("/admin/project-settings",h,{headers:{"Content-Type":"multipart/form-data"}}),{onError(h){n({type:"warning",message:r(h)})},async onSuccess(h){const{menuLogo:Lt,authLogo:Mt}=h;u({menuLogo:Lt?.url,authLogo:Mt?.url}),Lt?.rawFile&&l("didChangeLogo",{logo:"menu"}),Mt?.rawFile&&l("didChangeLogo",{logo:"auth"}),n({type:"success",message:s({id:"app",defaultMessage:"Saved"})})}}),ye=h=>{h.preventDefault(),Ce.mutate(Ee(o.current.getValues()))};return S?e.createElement(R.A,null,e.createElement(m.SL,{name:"Application"}),e.createElement(St.o,null,Me?e.createElement(xt.a,null,s({id:"Settings.application.isLoading",defaultMessage:"Loading"})):e.createElement("form",{onSubmit:ye},e.createElement(Rt.T,{title:s({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:s({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:D&&e.createElement(P.z,{type:"submit",startIcon:e.createElement(zt.Z,null)},s({id:"global.save",defaultMessage:"Save"}))}),e.createElement(Tt.D,null,e.createElement(A.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(A.k,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(v.Z,{variant:"delta",as:"h3"},s({id:"global.details",defaultMessage:"Details"})),e.createElement(st.r,{gap:5,as:"dl"},e.createElement(N.P,{col:6,s:12},e.createElement(v.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},s({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})),e.createElement(A.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(v.Z,null,"v",M),L&&e.createElement(lt.r,{href:`https://github.com/strapi/strapi/releases/tag/${E}`,isExternal:!0,endIcon:e.createElement(it.Z,null)},s({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})))),e.createElement(N.P,{col:6,s:12},e.createElement(v.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},s({id:"Settings.application.edition-title",defaultMessage:"current plan"})),e.createElement(A.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(v.Z,null,s({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:i})),e.createElement(lt.r,{href:"https://strapi.io/pricing-self-hosted",isExternal:!0,endIcon:e.createElement(it.Z,null)},s({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})))),e.createElement(N.P,{col:6,s:12},e.createElement(v.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},s({id:"Settings.application.node-version",defaultMessage:"node version"})),e.createElement(v.Z,{as:"dd"},p)),e.createElement(S,null))),O&&vt&&e.createElement(he,{canUpdate:D,ref:o,projectSettingsStored:vt})))))):null};function Le(){const{settingId:o}=(0,T.UO)(),{settings:n}=(0,m.j1)(),{formatMessage:l}=(0,f.Z)(),{isLoading:s,menu:d}=(0,C.Te)(),g=(0,U.c)(yt,async()=>(await t.e(1470).then(t.bind(t,51470))).ROUTES_EE,{combine(r,i){return[...r,...i]},defaultValue:[]}),u=e.useMemo(()=>(0,j.Z)(g.map(({to:r,Component:i,exact:E})=>(0,W.Z)(i,r,E))),[g]),c=Object.values(n).flatMap(r=>{const{links:i}=r;return i.map(E=>(0,W.Z)(E.Component,E.to,E.exact||!1))});return s?e.createElement(m.dO,null):o?e.createElement(R.A,{sideNav:e.createElement(Ct,{menu:d})},e.createElement(F.q,{title:l({id:"global.settings",defaultMessage:"Settings"})}),e.createElement(T.rs,null,e.createElement(T.AW,{path:"/settings/application-infos",component:ve,exact:!0}),u,c)):e.createElement(T.l_,{to:"/settings/application-infos"})}},45349:(V,I,t)=>{t.d(I,{A:()=>T});var e=t(85893),R=t(88972),m=t(50781);const F=(0,R.ZP)(m.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:C})=>C?"auto 1fr":"1fr"};
`,f=(0,R.ZP)(m.x)`
  overflow-x: hidden;
`,T=({sideNav:C,children:U})=>(0,e.jsxs)(F,{hasSideNav:!!C,children:[C,(0,e.jsx)(f,{paddingBottom:10,children:U})]})},51503:(V,I,t)=>{t.d(I,{r:()=>Q});var e=t(85893),R=t(67294),m=t(91393),F=t(73727),f=t(88972),T=t(27882),C=t(78549),U=t(50781);const W=f.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:y})=>y?"none":void 0};
  color: ${({disabled:y,theme:x})=>y?x.colors.neutral600:x.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${C.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:y})=>y.colors.primary500};
  }

  &:active {
    color: ${({theme:y})=>y.colors.primary700};
  }

  ${T.BF};
`,j=(0,f.ZP)(U.x)`
  display: flex;
`,Q=R.forwardRef(({children:y,href:x,to:K,disabled:Z=!1,startIcon:H,endIcon:a,...J},$)=>(0,e.jsxs)(W,{as:K&&!Z?F.OL:"a",target:x?"_blank":void 0,rel:x?"noreferrer noopener":void 0,to:Z?void 0:K,href:Z?"#":x,disabled:Z,ref:$,...J,children:[H&&(0,e.jsx)(j,{as:"span","aria-hidden":!0,paddingRight:2,children:H}),(0,e.jsx)(C.Z,{children:y}),a&&!x&&(0,e.jsx)(j,{as:"span","aria-hidden":!0,paddingLeft:2,children:a}),x&&(0,e.jsx)(j,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(m.Z,{})})]}))},22534:(V,I,t)=>{t.d(I,{Z:()=>m});var e=t(85893);const R=F=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 4 4",...F,children:(0,e.jsx)("rect",{width:4,height:4,fill:"#A5A5BA",rx:2})}),m=R}}]);