"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5516],{63109:(D,k,t)=>{t.d(k,{Z:()=>d});var e=t(67294);const d=(P,b)=>{const[c,E]=(0,e.useState)(P);return(0,e.useEffect)(()=>{const a=setTimeout(()=>{E(P)},b);return()=>{clearTimeout(a)}},[P,b]),c}},79612:(D,k,t)=>{t.r(k),t.d(k,{MarketPlacePage:()=>ke,default:()=>bt});var e=t(67294),h=t(45349),d=t(57713),P=t(26789),b=t(20107),c=t(75878),E=t(61738),a=t(50781),g=t(96073),T=t(54375),p=t(81252),w=t(64593),R=t(86896),N=t(86706),H=t(63109);const Q=()=>{const s=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[r,l]=(0,e.useState)(s),i=()=>l(!0),o=()=>l(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",i),window.addEventListener("offline",o),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",o)}),[]),r};var Y=t(36364),O=t(80907),B=t(85893);const V=s=>(0,B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...s,children:[(0,B.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,B.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),Se=V;var oe=t(91393);const Te=()=>{const{formatMessage:s}=(0,R.Z)(),{trackUsage:r}=(0,p.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>r("didMissMarketplacePlugin")},e.createElement(p.Y_,{title:s({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:s({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(Se,null),iconBackground:"alternative100",endAction:e.createElement(O.J,{as:oe.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var $e=t(14020),J=t(19442),De=t(15800),Oe=t(36002),Be=t(45697),n=t.n(Be),A=t(88972),Le=t(92545),le=t(50614),ie=t(473);const ce=({message:s,value:r,onChange:l,possibleFilters:i,onClear:o,customizeContent:f})=>{const u=(m,M)=>`${m} (${M})`;return e.createElement(le.P,{"data-testid":`${s}-button`,label:s,placeholder:s,size:"M",onChange:l,onClear:o,value:r,customizeContent:f,multi:!0},Object.entries(i).map(([m,M])=>e.createElement(ie.W,{"data-testid":`${m}-${M}`,key:m,value:m},u(m,M))))};ce.propTypes={message:n().string.isRequired,value:n().array.isRequired,onChange:n().func.isRequired,possibleFilters:n().object.isRequired,onClear:n().func.isRequired,customizeContent:n().func.isRequired};const de=ce,ue=({source:s,onToggle:r,query:l,npmPackageType:i,possibleCategories:o,possibleCollections:f,handleSelectChange:u,handleSelectClear:m})=>{const{formatMessage:M}=(0,R.Z)();return e.createElement(Le.J2,{source:s,onDismiss:r,padding:3,spacing:4},e.createElement(Ie,{direction:"column",alignItems:"stretch",gap:1},e.createElement(de,{message:M({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:l?.collections||[],onChange:y=>{u({collections:y})},onClear:()=>m("collections"),possibleFilters:f,customizeContent:y=>M({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:y.length})}),i==="plugin"&&e.createElement(de,{message:M({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:l?.categories||[],onChange:y=>{u({categories:y})},onClear:()=>m("categories"),possibleFilters:o,customizeContent:y=>M({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:y.length}),name:"categories"})))};ue.propTypes={onToggle:n().func.isRequired,source:n().shape({current:n().instanceOf(Element)}).isRequired,query:n().object.isRequired,npmPackageType:n().oneOf(["plugin","provider"]).isRequired,possibleCollections:n().object.isRequired,possibleCategories:n().object.isRequired,handleSelectChange:n().func.isRequired,handleSelectClear:n().func.isRequired};const Ze=ue,Ie=(0,A.ZP)(c.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,X=({name:s,handleRemove:r})=>e.createElement(a.x,{padding:1},e.createElement($e.V,{icon:e.createElement(De.Z,null),onClick:r},s)),Ae=(0,A.ZP)(J.z)`
  height: ${({theme:s})=>s.sizes.input.S};
`,ge=({possibleCollections:s,possibleCategories:r,npmPackageType:l,query:i,handleSelectClear:o,handleSelectChange:f})=>{const[u,m]=(0,e.useState)(!1),M=(0,e.useRef)(),{formatMessage:y}=(0,R.Z)(),x=()=>m(v=>!v),C=(v,S)=>{const Z={[S]:i[S].filter(j=>j!==v)};f(Z)};return e.createElement(e.Fragment,null,e.createElement(a.x,{paddingTop:1,paddingBottom:1},e.createElement(Ae,{variant:"tertiary",ref:M,"data-testid":"filters-button",startIcon:e.createElement(Oe.Z,null),onClick:x,size:"S"},y({id:"app.utils.filters",defaultMessage:"Filters"})),u&&e.createElement(Ze,{onToggle:x,source:M,query:i,handleSelectClear:o,handleSelectChange:f,possibleCollections:s,possibleCategories:r,npmPackageType:l})),i.collections?.map(v=>e.createElement(X,{name:v,key:v,handleRemove:()=>C(v,"collections")})),l==="plugin"&&i.categories?.map(v=>e.createElement(X,{name:v,key:v,handleRemove:()=>C(v,"categories")})))};X.propTypes={name:n().string.isRequired,handleRemove:n().func.isRequired},ge.propTypes={npmPackageType:n().oneOf(["plugin","provider"]).isRequired,possibleCollections:n().object.isRequired,possibleCategories:n().object.isRequired,query:n().object.isRequired,handleSelectChange:n().func.isRequired,handleSelectClear:n().func.isRequired};const we=ge;var je=t(28809),Ne=t(9370),Ue=t(61585),L=t(78549),Ve=t(58252);const Fe=A.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:s})=>s.spaces[4]};
`,Ge=(0,A.ZP)(a.x)`
  background: ${({theme:s})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${s.colors.neutral150} 100%)`};
  opacity: 0.33;
`,We=()=>e.createElement(Fe,null,Array(12).fill(null).map((s,r)=>e.createElement(Ge,{key:`empty-plugin-card-${r}`,height:"234px",hasRadius:!0}))),pe=({content:s})=>e.createElement(a.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(We,null),e.createElement(a.x,{position:"absolute",top:11,width:"100%"},e.createElement(c.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(O.J,{as:Ve.Z,color:"",width:"160px",height:"88px"}),e.createElement(a.x,{paddingTop:6},e.createElement(L.Z,{variant:"delta",as:"p",textColor:"neutral600"},s)))));pe.propTypes={content:n().string.isRequired};const Ke=pe;var q=t(74273),me=t(94101),ze=t(60324),He=t(23450),Qe=t.n(He),Ye=t(61473),Je=t(8675),fe=t(70780),Xe=t(81249),Pe=t.n(Xe);const F=({description:s,installMessage:r,disabled:l,handleCopy:i,pluginName:o})=>e.createElement(q.u,{"data-testid":`tooltip-${o}`,description:s},e.createElement(a.x,null,e.createElement(J.z,{size:"S",startIcon:e.createElement(fe.Z,null),variant:"secondary",disabled:l,onClick:i},r))),_=({strapiPeerDepVersion:s,strapiAppVersion:r,handleCopy:l,pluginName:i})=>{const{formatMessage:o}=(0,R.Z)(),f=Pe().validRange(s),u=Pe().satisfies(r,f),m=o({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(r){if(!f)return e.createElement(F,{installMessage:m,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:r}),handleCopy:l});if(!u)return e.createElement(F,{installMessage:m,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:r,versionRange:f}),disabled:!0})}return e.createElement(J.z,{size:"S",startIcon:e.createElement(fe.Z,null),variant:"secondary",onClick:l},m)};F.defaultProps={disabled:!1,handleCopy:null},F.propTypes={description:n().string.isRequired,installMessage:n().string.isRequired,disabled:n().bool,handleCopy:n().func,pluginName:n().string.isRequired},_.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},_.propTypes={strapiAppVersion:n().string,strapiPeerDepVersion:n().string,handleCopy:n().func.isRequired,pluginName:n().string.isRequired};const qe=_,ee=({isInstalled:s,isInDevelopmentMode:r,commandToCopy:l,strapiAppVersion:i,strapiPeerDepVersion:o,pluginName:f})=>{const u=(0,p.lm)(),{formatMessage:m}=(0,R.Z)(),{trackUsage:M}=(0,p.rS)(),{copy:y}=(0,p.VP)(),x=async()=>{await y(l)&&(M("willInstallPlugin"),u({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return s?e.createElement(a.x,{paddingLeft:4},e.createElement(O.J,{as:Je.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(L.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},m({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):r?e.createElement(qe,{strapiAppVersion:i,strapiPeerDepVersion:o,handleCopy:x,pluginName:f}):null};ee.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},ee.propTypes={isInstalled:n().bool.isRequired,isInDevelopmentMode:n().bool.isRequired,commandToCopy:n().string.isRequired,strapiAppVersion:n().string,strapiPeerDepVersion:n().string,pluginName:n().string.isRequired};const _e=ee;var et=t(81984),tt=t(86820),at=t(71125),nt=t(52794);const st=(0,A.ZP)(et.i)`
  width: ${(0,p.Q1)(12)};
  transform: rotate(90deg);
`,te=({githubStars:s,npmDownloads:r,npmPackageType:l})=>{const{formatMessage:i}=(0,R.Z)();return e.createElement(c.k,{gap:1},!!s&&e.createElement(e.Fragment,null,e.createElement(O.J,{as:tt.Z,height:(0,p.Q1)(12),width:(0,p.Q1)(12),"aria-hidden":!0}),e.createElement(O.J,{as:at.Z,height:(0,p.Q1)(12),width:(0,p.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${l}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:s,package:l})},e.createElement(L.Z,{variant:"pi",textColor:"neutral800"},s)),e.createElement(st,{unsetMargin:!1,background:"neutral200"})),e.createElement(O.J,{as:nt.Z,height:(0,p.Q1)(12),width:(0,p.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${l}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:r,package:l})},e.createElement(L.Z,{variant:"pi",textColor:"neutral800"},r)))};te.defaultProps={githubStars:0,npmDownloads:0},te.propTypes={githubStars:n().number,npmDownloads:n().number,npmPackageType:n().string.isRequired};const rt=te,ot=(0,A.ZP)(L.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,ae=({npmPackage:s,isInstalled:r,useYarn:l,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:f})=>{const{attributes:u}=s,{formatMessage:m}=(0,R.Z)(),{trackUsage:M}=(0,p.rS)(),y=l?`yarn add ${u.npmPackageName}`:`npm install ${u.npmPackageName}`,x=m({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),C=`https://market.strapi.io/${Qe().plural(o)}/${u.slug}`;return e.createElement(c.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(a.x,null,e.createElement(c.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(a.x,{as:"img",src:u.logo.url,alt:`${u.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(rt,{githubStars:u.githubStars,npmDownloads:u.npmDownloads,npmPackageType:o})),e.createElement(a.x,{paddingTop:4},e.createElement(L.Z,{as:"h3",variant:"delta"},e.createElement(c.k,{alignItems:"center"},u.name,u.validated&&!u.madeByStrapi&&e.createElement(q.u,{description:m({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(c.k,null,e.createElement(O.J,{as:ze.Z,marginLeft:2,color:"success600"}))),u.madeByStrapi&&e.createElement(q.u,{description:x},e.createElement(c.k,null,e.createElement(a.x,{as:"img",src:Ye,alt:x,marginLeft:1,width:6,height:"auto"})))))),e.createElement(a.x,{paddingTop:2},e.createElement(ot,{as:"p",variant:"omega",textColor:"neutral600"},u.description))),e.createElement(c.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(me.Q,{size:"S",href:C,isExternal:!0,endIcon:e.createElement(oe.Z,null),"aria-label":m({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:u.name}),variant:"tertiary",onClick:()=>M("didPluginLearnMore")},m({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(_e,{isInstalled:r,isInDevelopmentMode:i,commandToCopy:y,strapiAppVersion:f,strapiPeerDepVersion:u.strapiVersion,pluginName:u.name})))};ae.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},ae.propTypes={npmPackage:n().shape({id:n().string.isRequired,attributes:n().shape({name:n().string.isRequired,description:n().string.isRequired,slug:n().string.isRequired,npmPackageName:n().string.isRequired,npmPackageUrl:n().string.isRequired,repositoryUrl:n().string.isRequired,logo:n().object.isRequired,developerName:n().string.isRequired,validated:n().bool.isRequired,madeByStrapi:n().bool.isRequired,strapiCompatibility:n().oneOf(["v3","v4"]),strapiVersion:n().string,githubStars:n().number,npmDownloads:n().number}).isRequired}).isRequired,isInstalled:n().bool.isRequired,useYarn:n().bool.isRequired,isInDevelopmentMode:n().bool,npmPackageType:n().string.isRequired,strapiAppVersion:n().string};const lt=ae,ne=({status:s,npmPackages:r,installedPackageNames:l,useYarn:i,isInDevelopmentMode:o,npmPackageType:f,strapiAppVersion:u,debouncedSearch:m})=>{const{formatMessage:M}=(0,R.Z)();if(s==="error")return e.createElement(c.k,{paddingTop:8},e.createElement(p.Hn,null));if(s==="loading")return e.createElement(c.k,{justifyContent:"center",paddingTop:8},e.createElement(je.a,null,"Loading content..."));const y=M({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:m});return r.length===0?e.createElement(Ke,{content:y}):e.createElement(Ne.r,{gap:4,"data-testid":"marketplace-results"},r.map(x=>e.createElement(Ue.P,{col:4,s:6,xs:12,style:{height:"100%"},key:x.id},e.createElement(lt,{npmPackage:x,isInstalled:l.includes(x.attributes.npmPackageName),useYarn:i,isInDevelopmentMode:o,npmPackageType:f,strapiAppVersion:u}))))};ne.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},ne.propTypes={status:n().string.isRequired,npmPackages:n().array,installedPackageNames:n().arrayOf(n().string),useYarn:n().bool.isRequired,isInDevelopmentMode:n().bool.isRequired,npmPackageType:n().string.isRequired,strapiAppVersion:n().string,debouncedSearch:n().string};const Ee=ne,he=({pagination:s})=>e.createElement(a.x,{paddingTop:4},e.createElement(c.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(p.v4,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(p.tU,{pagination:s})));he.propTypes={pagination:n().shape({page:n().number.isRequired,pageCount:n().number.isRequired,pageSize:n().number.isRequired,total:n().number.isRequired}).isRequired};const it=he,ct=t.p+"9d5d788027e86620c234.svg";var dt=t(79371);const ut=s=>(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...s,children:(0,B.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),gt=ut,se=({isOnline:s,npmPackageType:r})=>{const{formatMessage:l}=(0,R.Z)(),{trackUsage:i}=(0,p.rS)(),o=r==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(dt.T,{title:l({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:l({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:s&&e.createElement(me.Q,{startIcon:e.createElement(gt,null),variant:"tertiary",href:`https://market.strapi.io/submit-${r}`,onClick:()=>i(o),isExternal:!0},l({id:`admin.pages.MarketPlacePage.submit.${r}.link`,defaultMessage:`Submit ${r}`}))})},ve=se;se.defaultProps={npmPackageType:"plugin"},se.propTypes={isOnline:n().bool.isRequired,npmPackageType:n().string};const pt=()=>{const{formatMessage:s}=(0,R.Z)();return e.createElement(h.A,null,e.createElement(d.o,null,e.createElement(ve,{isOnline:!1}),e.createElement(c.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,p.Q1)(120)},e.createElement(a.x,{paddingBottom:2},e.createElement(L.Z,{textColor:"neutral700",variant:"alpha"},s({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(a.x,{paddingBottom:6},e.createElement(L.Z,{textColor:"neutral700",variant:"epsilon"},s({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:ct,alt:"offline",style:{width:"88px",height:"88px"}}))))},mt=(0,A.ZP)(a.x)`
  font-weight: ${({theme:s})=>s.fontWeights.semiBold};

  span {
    font-size: ${({theme:s})=>s.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,Me=({sortQuery:s,handleSelectChange:r})=>{const{formatMessage:l}=(0,R.Z)(),i={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(mt,null,e.createElement(le.P,{size:"S",id:"sort-by-select",value:s,customizeContent:()=>l(i[s].selected),onChange:o=>{r({sort:o})},label:l({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(i).map(([o,f])=>e.createElement(ie.W,{key:o,value:o},l(f.option)))))};Me.propTypes={sortQuery:n().string.isRequired,handleSelectChange:n().func.isRequired};const ft=Me;var Pt=t(46683),Et=t(80129),G=t.n(Et),ye=t(88767);const be="https://market-api.strapi.io",ht=(s,r={})=>{const l=(0,p.lm)();return(0,ye.useQuery)(["marketplace","plugins",r],async()=>{try{const i=G().stringify(G().parse(r)),o=await fetch(`${be}/plugins?${i}`);if(!o.ok)throw new Error("Failed to fetch marketplace plugins.");return await o.json()}catch{}return null},{onSuccess(){s&&s()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},vt=(s,r={})=>{const l=(0,p.lm)();return(0,ye.useQuery)(["marketplace","providers",r],async()=>{try{const i=G().stringify(G().parse(r)),o=await fetch(`${be}/providers?${i}`);if(!o.ok)throw new Error("Failed to fetch marketplace providers.");return await o.json()}catch{}return null},{onSuccess(){s&&s()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Mt({npmPackageType:s,debouncedSearch:r,query:l,tabQuery:i}){const{notifyStatus:o}=(0,Pt.G)(),{formatMessage:f}=(0,R.Z)(),u=f({id:"global.marketplace",defaultMessage:"Marketplace"}),m=()=>{o(f({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:u}))},M={page:l?.page||1,pageSize:l?.pageSize||24},{data:y,status:x}=ht(m,{...i.plugin,pagination:M,search:r}),{data:C,status:v}=vt(m,{...i.provider,pagination:M,search:r}),S=s==="plugin"?y:C,Z=s==="plugin"?x:v,[j,W]=(0,e.useState)({}),[K,z]=(0,e.useState)({});(0,e.useEffect)(()=>{Z==="success"&&W(S.meta.collections),x==="success"&&z(y.meta.categories)},[y?.meta.categories,x,S?.meta.collections,Z]);const{pagination:re}=Z==="success"?S.meta:{};return{pluginsResponse:y,providersResponse:C,pluginsStatus:x,providersStatus:v,possibleCollections:j,possibleCategories:K,pagination:re}}const yt=Mt,ke=()=>{const{formatMessage:s}=(0,R.Z)(),{trackUsage:r}=(0,p.rS)(),l=(0,e.useRef)(r),i=(0,p.lm)(),[{query:o},f]=(0,p.Kx)(),u=(0,H.Z)(o?.search,500)||"",{autoReload:m,dependencies:M,useYarn:y,strapiVersion:x}=(0,p.L7)(),C=Q(),v=o?.npmPackageType||"plugin",[S,Z]=(0,e.useState)({plugin:v==="plugin"?{...o}:{},provider:v==="provider"?{...o}:{}});(0,p.go)(),(0,e.useEffect)(()=>{l.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{m||i({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"}})},[i,m]);const{pluginsResponse:j,providersResponse:W,pluginsStatus:K,providersStatus:z,possibleCollections:re,possibleCategories:kt,pagination:xe}=yt({npmPackageType:v,debouncedSearch:u,query:o,tabQuery:S});if(!C)return e.createElement(pt,null);const xt=I=>{const $=I===0?"plugin":"provider",Ct=S[$]&&Object.keys(S[$]).length;f(Ct?{...S[$],search:o?.search||"",npmPackageType:$,page:1}:{npmPackageType:$,collections:[],categories:[],sort:"name:asc",page:1,search:o?.search||""})},Re=I=>{f({...I,page:1}),Z($=>({...$,[v]:{...$[v],...I}}))},Rt=I=>{f({[I]:[],page:null},"remove"),Z($=>({...$,[v]:{}}))},Ce=Object.keys(M);return e.createElement(h.A,null,e.createElement(d.o,null,e.createElement(w.q,{title:s({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(ve,{isOnline:C,npmPackageType:v}),e.createElement(P.D,null,e.createElement(b.v,{label:s({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(v),onTabChange:xt},e.createElement(c.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(E.m,null,e.createElement(E.O,null,s({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",K==="success"?`(${j.meta.pagination.total})`:"..."),e.createElement(E.O,null,s({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",z==="success"?`(${W.meta.pagination.total})`:"...")),e.createElement(a.x,{width:"25%"},e.createElement(g.w,{name:"searchbar",onClear:()=>f({search:"",page:1}),value:o?.search,onChange:I=>f({search:I.target.value,page:1}),clearLabel:s({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(c.k,{paddingBottom:4,gap:2},e.createElement(ft,{sortQuery:o?.sort||"name:asc",handleSelectChange:Re}),e.createElement(we,{npmPackageType:v,possibleCollections:re,possibleCategories:kt,query:o||{},handleSelectChange:Re,handleSelectClear:Rt})),e.createElement(T.n,null,e.createElement(T.x,null,e.createElement(Ee,{npmPackages:j?.data,status:K,installedPackageNames:Ce,useYarn:y,isInDevelopmentMode:m,npmPackageType:"plugin",strapiAppVersion:x,debouncedSearch:u})),e.createElement(T.x,null,e.createElement(Ee,{npmPackages:W?.data,status:z,installedPackageNames:Ce,useYarn:y,isInDevelopmentMode:m,npmPackageType:"provider",debouncedSearch:u})))),xe&&e.createElement(it,{pagination:xe}),e.createElement(a.x,{paddingTop:8},e.createElement(Te,null)))))},bt=()=>{const s=(0,N.v9)(Y._);return e.createElement(p.O4,{permissions:s.marketplace.main},e.createElement(ke,null))}},45349:(D,k,t)=>{t.d(k,{A:()=>c});var e=t(85893),h=t(88972),d=t(50781);const P=(0,h.ZP)(d.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:E})=>E?"auto 1fr":"1fr"};
`,b=(0,h.ZP)(d.x)`
  overflow-x: hidden;
`,c=({sideNav:E,children:a})=>(0,e.jsxs)(P,{hasSideNav:!!E,children:[E,(0,e.jsx)(b,{paddingBottom:10,children:a})]})},86820:(D,k,t)=>{t.d(k,{Z:()=>d});var e=t(85893);const h=P=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...P,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),d=h},71125:(D,k,t)=>{t.d(k,{Z:()=>d});var e=t(85893);const h=P=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...P,children:(0,e.jsx)("path",{fill:"#212134",d:"m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z"})}),d=h},20501:(D,k,t)=>{t.d(k,{G:()=>c,Y:()=>E});var e=t(85893),h=t(67294),d=t(88972),P=t(66362),b=t(96987);const c=(0,d.ZP)(b.k)`
  > svg {
    height: ${({theme:a})=>a.spaces[3]};
    width: ${({theme:a})=>a.spaces[3]};

    > g,
    path {
      fill: ${({theme:a})=>a.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${P.BF}
`,E=h.forwardRef(({disabled:a,children:g,background:T="neutral0",...p},w)=>(0,e.jsx)(c,{ref:w,"aria-disabled":a,as:"button",type:"button",disabled:a,padding:2,hasRadius:!0,background:T,borderColor:"neutral200",cursor:"pointer",...p,children:g}));E.displayName="BaseButton"},4071:(D,k,t)=>{t.d(k,{G$:()=>h,Gt:()=>p,MG:()=>e,MR:()=>E,T:()=>c,TP:()=>d,Vb:()=>b,Vv:()=>g,ZC:()=>T,gK:()=>P,wG:()=>a});const e="success-light",h="danger-light",d="default",P="tertiary",b="secondary",c="danger",E="success",a="ghost",g=[e,h],T=[d,P,b,c,E,a,...g],p=["S","M","L"]},62485:(D,k,t)=>{t.d(k,{PD:()=>E,sg:()=>P,tB:()=>c,yP:()=>b});var e=t(4071),h=t(10574);const d=a=>a===e.MG||a===e.G$?`${a.substring(0,a.lastIndexOf("-"))}`:a===e.gK?"neutral":a===e.TP||a===e.Vb||e.ZC.every(g=>g!==a)?"primary":`${a}`,P=({theme:a})=>`
    border: 1px solid ${a.colors.neutral200};
    background: ${a.colors.neutral150};
    ${h.Z} {
      color: ${a.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${a.colors.neutral600};
      }
    }
  `,b=({theme:a,variant:g})=>[...e.Vv,e.Vb].includes(g)?`
      background-color: ${a.colors.neutral0};
    `:g===e.gK?`
      background-color: ${a.colors.neutral100};
    `:g===e.wG?`
      background-color: ${a.colors.neutral100};
    `:g===e.TP?`
      border: 1px solid ${a.colors.buttonPrimary500};
      background: ${a.colors.buttonPrimary500};
    `:`
    border: 1px solid ${a.colors[`${d(g)}500`]};
    background: ${a.colors[`${d(g)}500`]};
  `,c=({theme:a,variant:g})=>[...e.Vv,e.Vb].includes(g)?`
      background-color: ${a.colors.neutral0};
      border: 1px solid ${a.colors[`${d(g)}600`]};
      ${h.Z} {
        color: ${a.colors[`${d(g)}600`]};
      }
      svg {
        > g, path {
          fill: ${a.colors[`${d(g)}600`]};
        }
      }
    `:g===e.gK?`
      background-color: ${a.colors.neutral150};
    `:`
    border: 1px solid ${a.colors[`${d(g)}600`]};
    background: ${a.colors[`${d(g)}600`]};
  `,E=({theme:a,variant:g})=>{switch(g){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${a.colors[`${d(g)}200`]};
          background: ${a.colors[`${d(g)}100`]};
          ${h.Z} {
            color: ${a.colors[`${d(g)}700`]};
          }
          svg {
            > g, path {
              fill: ${a.colors[`${d(g)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${a.colors.neutral200};
          background: ${a.colors.neutral0};
          ${h.Z} {
            color: ${a.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${a.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${h.Z} {
          color: ${a.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${a.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${a.colors[`${d(g)}600`]};
          background: ${a.colors[`${d(g)}600`]};
          ${h.Z} {
            color: ${a.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${a.colors.buttonNeutral0};
            }
          }
        `}}},66362:(D,k,t)=>{t.d(k,{BF:()=>P,k3:()=>d});var e=t(88972);const h=b=>({theme:c,size:E})=>c.sizes[b][E],d=(b="&")=>({theme:c,hasError:E=!1})=>(0,e.iv)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${b}:focus-within {
      border: 1px solid ${E?c.colors.danger600:c.colors.primary600};
      box-shadow: ${E?c.colors.danger600:c.colors.primary600} 0px 0px 0px 2px;
    }
  `,P=({theme:b})=>(0,e.iv)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${b.colors.primary600};
    }
  }
`},94101:(D,k,t)=>{t.d(k,{Q:()=>T});var e=t(85893),h=t(67294),d=t(88972),P=t(62485),b=t(20501),c=t(53342),E=t(96987),a=t(10574);const g=(0,d.ZP)(b.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${P.sg}
    &:active {
      ${P.sg}
    }
  }

  &:hover {
    ${P.yP}
  }

  &:active {
    ${P.tB}
  }

  ${P.PD}
`,T=h.forwardRef(({variant:p="default",startIcon:w,endIcon:R,disabled:N=!1,children:H,size:U="S",as:Q=c.f,...Y},O)=>{const B=U==="S"?2:"10px",V=4;return(0,e.jsxs)(g,{ref:O,"aria-disabled":N,size:U,variant:p,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:B,paddingLeft:V,paddingRight:V,paddingTop:B,pointerEvents:N?"none":void 0,...Y,as:Q||c.f,children:[w&&(0,e.jsx)(E.k,{"aria-hidden":!0,children:w}),(0,e.jsx)(a.Z,{variant:U==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:H}),R&&(0,e.jsx)(E.k,{"aria-hidden":!0,children:R})]})});T.displayName="LinkButton"}}]);
