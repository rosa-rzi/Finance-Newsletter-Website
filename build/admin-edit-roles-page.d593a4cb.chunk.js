(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2544],{4644:(W,$,n)=>{"use strict";n.d($,{V:()=>R});var e=n(81252),h=n(88767);const R=(f={},M={})=>{const{id:b,...C}=f,{get:E}=(0,e.kY)();if(!b&&(M?.enabled===void 0||M?.enabled))throw new Error('"id" is a required argument');const{data:T,error:N,isError:a,isLoading:j,refetch:m}=(0,h.useQuery)(["roles",b,"permissions",C],async()=>{const{data:{data:S}}=await E(`/admin/roles/${b}/permissions`,{params:C});return S},M);return{permissions:T,error:N,isError:a,isLoading:j,refetch:m}}},51754:(W,$,n)=>{"use strict";n.d($,{F:()=>f});var e=n(81252),h=n(86896),R=n(88767);const f=(M={},b={})=>{const{id:C="",...E}=M,{get:T}=(0,e.kY)(),{locale:N}=(0,h.Z)(),a=(0,e.Xe)(N,{sensitivity:"base"}),{data:j,error:m,isError:S,isLoading:F,refetch:g}=(0,R.useQuery)(["roles",C,E],async()=>{const{data:K}=await T(`/admin/roles/${C??""}`,{params:E});return K},b);let x=[];return C&&j?x=[j.data]:Array.isArray(j?.data)&&(x=j.data),{roles:x.sort((K,oe)=>a.compare(K.name,oe.name)),error:m,isError:S,isLoading:F,refetch:g}}},25545:(W,$,n)=>{"use strict";n.r($),n.d($,{CreatePage:()=>Pe,default:()=>Se});var e=n(67294),h=n(57713),R=n(79371),f=n(75878),M=n(19442),b=n(26789),C=n(50781),E=n(78549),T=n(9370),N=n(61585),a=n(28469),j=n(20603),m=n(81252),S=n(60793),F=n(66115),g=n(41054),x=n(41609),K=n.n(x),oe=n(86896),de=n(86706),re=n(16550),P=n(88972),me=n(4644),w=n(36364),G=n(442),_=n(90065),Ce=n(87561);const xe=Ce.Ry().shape({name:Ce.Z_().required(m.I0.required),description:Ce.Z_().required(m.I0.required)}),ae=P.ZP.div`
  border: 1px solid ${({theme:z})=>z.colors.primary200};
  background: ${({theme:z})=>z.colors.primary100};
  padding: ${({theme:z})=>`${z.spaces[2]} ${z.spaces[4]}`};
  color: ${({theme:z})=>z.colors.primary600};
  border-radius: ${({theme:z})=>z.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Pe=()=>{const z=(0,re.$B)("/settings/roles/duplicate/:id"),X=(0,m.lm)(),{lockApp:ne,unlockApp:Y}=(0,m.o1)(),{formatMessage:I}=(0,oe.Z)(),[Q,fe]=(0,e.useState)(!1),{replace:pe}=(0,re.k6)(),J=(0,e.useRef)(),{trackUsage:ce}=(0,m.rS)(),{post:ke,put:Be}=(0,m.kY)(),{params:Ee}=z??{},{isLoading:Ze,data:Le}=(0,_.d)(Ee?.id,{cacheTime:0}),{permissions:ye,isLoading:Me}=(0,me.V)({id:Ee?.id},{cacheTime:0,enabled:!!Ee?.id}),Fe=Re=>{ne(),fe(!0),Ee?.id?ce("willDuplicateRole"):ce("willCreateNewRole"),Promise.resolve(ke("/admin/roles",Re)).then(async({data:ee})=>{const{permissionsToSend:ie}=J.current.getPermissions();return Ee?.id?ce("didDuplicateRole"):ce("didCreateNewRole"),ee.data.id&&!K()(ie)&&await Be(`/admin/roles/${ee.data.id}/permissions`,{permissions:ie}),ee}).then(ee=>{fe(!1),X({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),pe(`/settings/roles/${ee.data.id}`)}).catch(ee=>{console.error(ee),fe(!1),X({type:"warning",message:{id:"notification.error"}})}).finally(()=>{Y()})},Ue=`${I({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,F.Z)(new Date,"PPP")}`;return e.createElement(h.o,null,e.createElement(m.SL,{name:"Roles"}),e.createElement(g.J9,{initialValues:{name:"",description:Ue},onSubmit:Fe,validationSchema:xe,validateOnChange:!1},({handleSubmit:Re,values:ee,errors:ie,handleReset:le,handleChange:ue})=>e.createElement(m.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(R.T,{primaryAction:e.createElement(f.k,{gap:2},e.createElement(M.z,{variant:"secondary",onClick:()=>{le(),J.current.resetForm()},size:"L"},I({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(M.z,{onClick:Re,loading:Q,size:"L"},I({id:"global.save",defaultMessage:"Save"}))),title:I({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:I({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(m.rU,{startIcon:e.createElement(S.Z,null),to:"/settings/roles"},I({id:"global.back",defaultMessage:"Back"}))}),e.createElement(b.D,null,e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(C.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(f.k,{justifyContent:"space-between"},e.createElement(C.x,null,e.createElement(C.x,null,e.createElement(E.Z,{fontWeight:"bold"},I({id:"global.details",defaultMessage:"Details"}))),e.createElement(C.x,null,e.createElement(E.Z,{variant:"pi",textColor:"neutral600"},I({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ae,null,I({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(T.r,{gap:4},e.createElement(N.P,{col:6},e.createElement(a.o,{name:"name",error:ie.name&&I({id:ie.name}),label:I({id:"global.name",defaultMessage:"Name"}),onChange:ue,required:!0,value:ee.name})),e.createElement(N.P,{col:6},e.createElement(j.g,{label:I({id:"global.description",defaultMessage:"Description"}),id:"description",error:ie.description&&I({id:ie.description}),onChange:ue},ee.description))))),!Ze&&!Me?e.createElement(C.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(G.Z,{isFormDisabled:!1,ref:J,permissions:ye,layout:Le})):e.createElement(C.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(m.dO,null))))))))};function Se(){const z=(0,de.v9)(w._);return e.createElement(m.O4,{permissions:z.settings.roles.create},e.createElement(Pe,null))}},442:(W,$,n)=>{"use strict";n.d($,{Z:()=>ts});var e=n(67294),h=n(20107),R=n(61738),f=n(54375),M=n(81252),b=n(18721),C=n.n(b),E=n(41609),T=n.n(E),N=n(45697),a=n.n(N),j=n(86896),m=n(50781),S=n(89734),F=n.n(S),g=n(88972),x=n(75878),K=n(62779),oe=n(84189),de=n(3340),re=n(27361),P=n.n(re),me=n(57557),w=n.n(me),G=n(92807),_=n(19442),Ce=n(80606);const be=g.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:s,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${s?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,xe=({onClick:t,className:s,hasConditions:r,variant:o})=>{const{formatMessage:i}=(0,j.Z)();return e.createElement(be,{hasConditions:r,className:s},e.createElement(_.z,{variant:o,startIcon:e.createElement(Ce.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};xe.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},xe.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const ae=(0,g.ZP)(xe)``;var Pe=n(60881),Se=n(18189),z=n(48683),X=n(78549),ne=n(45124),Y=n(82392),I=n(75071),Q=n(18172),fe=n(7739),pe=n.n(fe),J=n(11700),ce=n.n(J),ke=n(31439);const Be=t=>Object.values(t).map(s=>Object.entries(s).filter(([,r])=>r).map(([r])=>r)).flat(),Ee=t=>t.reduce((s,[r,o])=>(s.push({label:ce()(r),children:o.map(i=>({label:i.displayName,value:i.id}))}),s),[]),Ze=(t,s)=>t.map(([,r])=>r).flat().reduce((r,o)=>({[o.id]:s.includes(o.id),...r}),{}),Le=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:s,isGrey:r,label:o,name:i,onChange:l,value:d})=>{const{formatMessage:c}=(0,j.Z)(),p=u=>{l(i,Ze(t,u))};return e.createElement(x.k,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(x.k,{paddingLeft:6,style:{width:180}},e.createElement(X.Z,{variant:"sigma",textColor:"neutral600"},c({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(X.Z,{variant:"sigma",title:o,textColor:"primary600",ellipsis:!0},c({id:`Settings.roles.form.permissions.${o.toLowerCase()}`,defaultMessage:o})),e.createElement(X.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",c({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(m.x,{style:{maxWidth:430,width:"100%"}},e.createElement(ke.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:p,value:Be(d),options:Ee(t),disabled:s})))};Le.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const ye=Le,Me=(t,s)=>t.reduce((r,o)=>(r[o.id]=P()(s,o.id,!1),r),{}),Fe=(t,s)=>t.reduce((r,o)=>{const[i,l]=o,d=Me(l,s);return r[i]=d,r},{}),Re=(t,s,r)=>t.reduce((o,i)=>{const l=P()(s,[...i.pathToConditionsObject,"conditions"],{}),d=Fe(r,l);return o[i.pathToConditionsObject.join("..")]=d,o},{}),ee=({actions:t,headerBreadCrumbs:s,isFormDisabled:r,onClosed:o,onToggle:i})=>{const{formatMessage:l}=(0,j.Z)(),{availableConditions:d,modifiedData:c,onChangeConditions:p}=(0,G.$_)(),u=(0,e.useMemo)(()=>Object.entries(pe()(d,"category")),[d]),y=t.filter(({isDisplayed:v,hasSomeActionsSelected:B,hasAllActionsSelected:L})=>v&&(B||L)),A=(0,e.useMemo)(()=>Re(y,c,u),[y,c,u]),[D,V]=(0,e.useState)(A),k=(v,B)=>{V((0,Q.ZP)(L=>{L[v]||(L[v]={}),L[v].default||(L[v].default={}),L[v].default=B}))},O=()=>{const v=Object.entries(D).reduce((B,L)=>{const[Z,te]=L,H=Object.values(te).reduce((q,U)=>({...q,...U}),{});return B[Z]=H,B},{});p(v),i()};return e.createElement(Pe.P,{labelledBy:"condition-modal-breadcrumbs",onClose:o},e.createElement(Se.x,null,e.createElement(Y.O,{id:"condition-modal-breadcrumbs",label:s.join(", ")},s.map((v,B,L)=>e.createElement(I.$,{isCurrent:B===L.length-1,key:v},ce()(l({id:v,defaultMessage:v})))))),e.createElement(z.f,null,y.length===0&&e.createElement(X.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,y.map(({actionId:v,label:B,pathToConditionsObject:L},Z)=>{const te=L.join("..");return e.createElement(ye,{key:v,arrayOfOptionsGroupedByCategory:u,label:B,isFormDisabled:r,isGrey:Z%2===0,name:te,onChange:k,value:P()(D,te,{})})}))),e.createElement(ne.m,{startActions:e.createElement(_.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(_.z,{onClick:O},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};ee.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const ie=ee,le=`${120/16}rem`,ue=`${200/16}rem`,Ae=`${53/16}rem`,Ne=g.ZP.div`
  width: ${le};
`,rt=(0,g.ZP)(x.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ge=({children:t,isCollapsable:s,isActive:r,isFormDisabled:o,label:i,onChange:l,onClick:d,checkboxName:c,someChecked:p,value:u})=>{const{formatMessage:y}=(0,j.Z)();return e.createElement(x.k,{alignItems:"center",paddingLeft:6,style:{width:ue,flexShrink:0}},e.createElement(m.x,{paddingRight:2},e.createElement(K.C,{name:c,"aria-label":y({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:o,onValueChange:A=>l({target:{name:c,value:A}}),indeterminate:p,value:u})),e.createElement(rt,{title:i,alignItems:"center",isCollapsable:s,...s&&{onClick:d,"aria-expanded":r,onKeyDown:({key:A})=>(A==="Enter"||A===" ")&&d(),tabIndex:0,role:"button"}},e.createElement(X.Z,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},ce()(i)),t))};Ge.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ge.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const at=(0,e.memo)(Ge);var Nt=n(42348),Wt=n.n(Nt),Vt=n(13218),Te=n.n(Vt);const it=t=>Te()(t)?Wt()(Object.values(t).map(s=>Te()(s)?it(s):s)):[],je=it,ze=t=>t?Object.keys(t).reduce((s,r)=>(r!=="conditions"&&(s[r]=t[r]),s),{}):null,Oe=t=>{const s=ze(t),r=je(s);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const o=r.every(l=>l),i=r.some(l=>l)&&!o;return{hasAllActionsSelected:o,hasSomeActionsSelected:i}};var Kt=n(21514);const We=(0,g.ZP)(Kt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ve=t=>`
  ${X.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${We} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ut=(t,s,r)=>t.map(({actionId:o,isDisplayed:i,applyToProperties:l,label:d})=>{if(!i)return{actionId:o,hasSomeActionsSelected:!1,isDisplayed:i};const c=[...r.split(".."),o],p=T()(l)?[...c,"properties","enabled"]:c,u=p.join(".."),y=P()(s,[...c,"conditions"],null),A=je(y).some(O=>O);if(T()(l)){const O=P()(s,p,!1);return{actionId:o,checkboxName:u,hasAllActionsSelected:O,hasConditions:A,hasSomeActionsSelected:O,isDisplayed:i,isParentCheckbox:!1,label:d,pathToConditionsObject:c}}const D=P()(s,p,null),{hasAllActionsSelected:V,hasSomeActionsSelected:k}=Oe(D);return{actionId:o,checkboxName:u,hasAllActionsSelected:V,hasConditions:A,hasSomeActionsSelected:k,isDisplayed:i,isParentCheckbox:!0,label:d,pathToConditionsObject:c}}),Ye=(t,s)=>`
  ${lt} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
  }
  ${ct} {
    display: flex;
  }
  ${ae} {
    display: block;
  }
  &:hover {
   ${Ve(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:o})=>Ye(r,o)}
  }
  
`,lt=g.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ae};
  background-color: ${({isGrey:t,theme:s})=>t?s.colors.neutral100:s.colors.neutral0};
  border: 1px solid transparent;
`,Ht=g.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${ae} {
    display: none;
  }
  ${({isActive:t,theme:s})=>t&&Ye(s,t)}
  &:hover {
    ${({theme:t,isActive:s})=>Ye(t,s)}
  }
`,dt=(0,g.ZP)(x.k)`
  width: ${le};
  position: relative;
`,ct=(0,g.ZP)(m.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ut=g.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Gt=(0,g.ZP)(m.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,mt=({availableActions:t,isActive:s,isGrey:r,isFormDisabled:o,label:i,onClickToggle:l,pathToData:d})=>{const[c,p]=(0,e.useState)(!1),{formatMessage:u}=(0,j.Z)(),{modifiedData:y,onChangeParentCheckbox:A,onChangeSimpleCheckbox:D}=(0,G.$_)(),V=()=>{p(H=>!H)},k=()=>{p(!1)},O=P()(y,d.split(".."),{}),v=(0,e.useMemo)(()=>Object.keys(O).reduce((H,q)=>(H[q]=w()(O[q],"conditions"),H),{}),[O]),{hasAllActionsSelected:B,hasSomeActionsSelected:L}=Oe(v),Z=(0,e.useMemo)(()=>Ut(t,y,d),[t,y,d]),te=Z.some(({hasConditions:H})=>H);return e.createElement(Ht,{isActive:s},e.createElement(lt,{isGrey:r},e.createElement(at,{isCollapsable:!0,isFormDisabled:o,label:i,checkboxName:d,onChange:A,onClick:l,someChecked:L,value:B,isActive:s},e.createElement(ct,{paddingLeft:2},s?e.createElement(oe.Z,null):e.createElement(de.Z,null))),e.createElement(x.k,{style:{flex:1}},Z.map(({actionId:H,hasConditions:q,hasAllActionsSelected:U,hasSomeActionsSelected:he,isDisplayed:Ie,isParentCheckbox:se,checkboxName:ve,label:Ke})=>Ie?se?e.createElement(dt,{key:H,justifyContent:"center",alignItems:"center"},q&&e.createElement(ut,null),e.createElement(K.C,{disabled:o,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ke} ${i}`}),onValueChange:$e=>{A({target:{name:ve,value:$e}})},indeterminate:he,value:U})):e.createElement(dt,{key:H,justifyContent:"center",alignItems:"center"},q&&e.createElement(ut,null),e.createElement(K.C,{disabled:o,indeterminate:q,name:ve,onValueChange:$e=>{D({target:{name:ve,value:$e}})},value:U})):e.createElement(Ne,{key:H}))),c&&e.createElement(ie,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:Z,isFormDisabled:o,onClosed:k,onToggle:V})),e.createElement(Gt,null,e.createElement(ae,{onClick:V,hasConditions:te})))};mt.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const zt=mt,Yt=g.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,pt=()=>e.createElement(Yt,null,"*"),Xt=(t,s)=>t.map(r=>{const o=Array.isArray(r.subjects)&&r.subjects.indexOf(s)!==-1;return{...r,isDisplayed:o}}),wt=(0,g.ZP)(m.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Qt=g.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:s})=>t.colors[s]};
  }
`,Xe=t=>e.createElement(wt,null,e.createElement(Qt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Xe.defaultProps={fill:"primary200"},Xe.propTypes={fill:a().string};const Jt=(0,e.memo)(Xe),gt=(0,g.ZP)(x.k)`
  width: ${le};
  position: relative;
`,qt=(0,g.ZP)(x.k)`
  height: ${Ae};
`,_t=(0,g.ZP)(m.x)`
  padding-left: ${31/16}rem;
`,en=(0,g.ZP)(m.x)`
  border-left: ${({isVisible:t,theme:s})=>t?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,tn=(0,g.ZP)(x.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:s})=>t&&`
      ${We} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${Ve(s)}
      }
  `}
  ${({isActive:t,theme:s})=>t&&Ve(s)};
`,nn=g.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,we=({childrenForm:t,isFormDisabled:s,recursiveLevel:r,pathToDataFromActionRow:o,propertyActions:i,parentName:l,propertyName:d})=>{const{formatMessage:c}=(0,j.Z)(),{modifiedData:p,onChangeParentCheckbox:u,onChangeSimpleCheckbox:y}=(0,G.$_)(),[A,D]=(0,e.useState)(null),V=O=>{D(v=>v===O?null:O)},k=(0,e.useMemo)(()=>A?t.find(({value:O})=>O===A):null,[A,t]);return e.createElement(_t,null,e.createElement(nn,null),t.map(({label:O,value:v,required:B,children:L},Z)=>{const te=Z+1<t.length,H=Array.isArray(L),q=A===v;return e.createElement(en,{key:v,isVisible:te},e.createElement(qt,null,e.createElement(Jt,{color:"primary200"}),e.createElement(x.k,{style:{flex:1}},e.createElement(tn,{level:r,isActive:q,isCollapsable:H},e.createElement(rt,{alignItems:"center",isCollapsable:H,...H&&{onClick:()=>V(v),"aria-expanded":q,onKeyDown:({key:U})=>(U==="Enter"||U===" ")&&V(v),tabIndex:0,role:"button"},title:O},e.createElement(X.Z,{ellipsis:!0},ce()(O)),B&&e.createElement(pt,null),e.createElement(We,{$isActive:q}))),e.createElement(x.k,{style:{flex:1}},i.map(({actionId:U,label:he,isActionRelatedToCurrentProperty:Ie})=>{if(!Ie)return e.createElement(Ne,{key:U});const se=[...o.split(".."),U,"properties",d,...l.split(".."),v],ve=P()(p,se,!1);if(!L)return e.createElement(gt,{key:he,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:s,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${O} ${he}`}),onValueChange:De=>{y({target:{name:se.join(".."),value:De}})},value:ve}));const{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(gt,{key:he,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{key:he,disabled:s,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${O} ${he}`}),onValueChange:De=>{u({target:{name:se.join(".."),value:De}})},value:Ke,indeterminate:$e}))})))),k&&q&&e.createElement(m.x,{paddingBottom:2},e.createElement(we,{isFormDisabled:s,parentName:`${l}..${v}`,pathToDataFromActionRow:o,propertyActions:i,propertyName:d,recursiveLevel:r+1,childrenForm:k.children})))}))};we.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const sn=(0,e.memo)(we),on=t=>t.reduce((r,o)=>(o.isActionRelatedToCurrentProperty&&r.push(o.actionId),r),[]),rn=(t,s,r,o,i)=>{const d=on(t).reduce((c,p)=>{const u=[...r.split(".."),p,"properties",o,i],y=P()(s,u,!1);return c[p]=y,c},{});return Oe(d)},ht=(0,g.ZP)(x.k)`
  width: ${le};
  position: relative;
`,an=(0,g.ZP)(x.k)`
  height: ${Ae};
  flex: 1;

  ${({isCollapsable:t,theme:s})=>t&&`
      ${We} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${Ve(s)}
      }
  `}
  ${({isActive:t,theme:s})=>t&&Ve(s)};
`,Qe=({childrenForm:t,label:s,isFormDisabled:r,name:o,required:i,pathToData:l,propertyActions:d,propertyName:c,isOdd:p})=>{const{formatMessage:u}=(0,j.Z)(),[y,A]=(0,e.useState)(null),{modifiedData:D,onChangeCollectionTypeLeftActionRowCheckbox:V,onChangeParentCheckbox:k,onChangeSimpleCheckbox:O}=(0,G.$_)(),v=y===o,B=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),L=B.length>0,Z=(0,e.useCallback)(()=>{L&&A(U=>U===o?null:o)},[L,o]),te=({target:{value:U}})=>{V(l,c,o,U)},{hasAllActionsSelected:H,hasSomeActionsSelected:q}=(0,e.useMemo)(()=>rn(d,D,l,c,o),[d,D,l,c,o]);return e.createElement(e.Fragment,null,e.createElement(an,{alignItems:"center",isCollapsable:L,isActive:v,background:p?"neutral100":"neutral0"},e.createElement(x.k,null,e.createElement(at,{onChange:te,onClick:Z,isCollapsable:L,isFormDisabled:r,label:s,someChecked:q,value:H,isActive:v},i&&e.createElement(pt,null),e.createElement(We,{$isActive:v})),e.createElement(x.k,null,d.map(({label:U,isActionRelatedToCurrentProperty:he,actionId:Ie})=>{if(!he)return e.createElement(Ne,{key:U});const se=[...l.split(".."),Ie,"properties",c,o];if(!L){const De=P()(D,se,!1);return e.createElement(ht,{key:Ie,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:r,name:se.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${U}`}),onValueChange:ns=>{O({target:{name:se.join(".."),value:ns}})},value:De}))}const ve=P()(D,se,{}),{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(ht,{key:U,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:r,name:se.join(".."),onValueChange:De=>{k({target:{name:se.join(".."),value:De}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${U}`}),value:Ke,indeterminate:$e}))})))),v&&e.createElement(sn,{childrenForm:B,isFormDisabled:r,parentName:o,pathToDataFromActionRow:l,propertyName:c,propertyActions:d,recursiveLevel:0}))};Qe.defaultProps={childrenForm:[],required:!1},Qe.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const ln=(0,e.memo)(Qe),ft=(0,g.ZP)(x.k)`
  width: ${le};
  flex-shrink: 0;
`,dn=(0,g.ZP)(x.k)`
  width: ${ue};
  height: ${Ae};
  flex-shrink: 0;
`,yt=({headers:t,label:s})=>{const{formatMessage:r}=(0,j.Z)(),o=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s});return e.createElement(x.k,null,e.createElement(dn,{alignItems:"center",paddingLeft:6},e.createElement(X.Z,{variant:"sigma",textColor:"neutral500"},o)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ft,{justifyContent:"center",key:i.label},e.createElement(X.Z,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ft,{key:i.label})))};yt.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const cn=yt,un=(t,s)=>t.map(r=>{const o=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(s)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:o}}),mn=g.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Ct=({availableActions:t,childrenForm:s,isFormDisabled:r,label:o,pathToData:i,propertyName:l})=>{const d=(0,e.useMemo)(()=>un(t,l),[t,l]);return e.createElement(mn,null,e.createElement(cn,{label:o,headers:d}),e.createElement(m.x,null,s.map(({children:c,label:p,value:u,required:y},A)=>e.createElement(ln,{childrenForm:c,key:u,label:p,isFormDisabled:r,name:u,required:y,propertyActions:d,pathToData:i,propertyName:l,isOdd:A%2===0}))))};Ct.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const pn=Ct,gn=g.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:s})=>s&&`border: 1px solid ${t.colors.primary600};`}
`,Et=({allActions:t,contentTypeName:s,label:r,index:o,isActive:i,isFormDisabled:l,onClickToggleCollapse:d,pathToData:c,properties:p})=>{const u=(0,e.useCallback)(()=>{d(s)},[s,d]),y=(0,e.useMemo)(()=>Xt(t,s),[t,s]);return e.createElement(gn,{isActive:i},e.createElement(zt,{availableActions:y,isActive:i,isGrey:o%2===0,isFormDisabled:l,label:r,onClickToggle:u,pathToData:c}),i&&p.map(({label:A,value:D,children:V})=>e.createElement(pn,{availableActions:y,childrenForm:V,isFormDisabled:l,label:A,pathToData:c,propertyName:D,key:D})))};Et.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const hn=Et,Je=({actions:t,isFormDisabled:s,pathToData:r,subjects:o})=>{const[i,l]=(0,e.useState)(null),d=c=>{l(i===c?null:c)};return o.map(({uid:c,label:p,properties:u},y)=>e.createElement(hn,{allActions:t,key:c,contentTypeName:c,label:p,isActive:i===c,isFormDisabled:s,index:y,onClickToggleCollapse:d,pathToData:`${r}..${c}`,properties:u}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const fn=(0,e.memo)(Je),yn=t=>t.filter(({subjects:s})=>s&&s.length),Cn=t=>t.map(({actionId:s})=>s),En=(t,s)=>t.reduce((r,o)=>(Object.keys(s).forEach(i=>{const l=P()(s,[i,o],{}),d={[i]:ze(l)};r[o]?r[o]={...r[o],...d}:r[o]=d}),r),{}),vn=(t,s)=>{const r=Cn(t),o=En(r,s);return Object.keys(o).reduce((l,d)=>(l[d]=Oe(o[d]),l),{})},bn=(0,g.ZP)(x.k)`
  width: ${le};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:s,kind:r})=>{const{formatMessage:o}=(0,j.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,G.$_)(),d=(0,e.useMemo)(()=>yn(t),[t]),c=(0,e.useMemo)(()=>vn(d,i[r]),[i,d,r]);return e.createElement(m.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ue}},e.createElement(x.k,{gap:0},d.map(({label:p,actionId:u})=>e.createElement(bn,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement(X.Z,{variant:"sigma",textColor:"neutral500"},o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(K.C,{disabled:s,onValueChange:y=>{l(r,u,y)},name:u,"aria-label":o({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:P()(c,[u,"hasAllActionsSelected"],!1),indeterminate:P()(c,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const xn=(0,e.memo)(qe),Pn=(0,g.ZP)(m.x)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:s,layout:{actions:r,subjects:o}})=>{const i=F()([...o],"label");return e.createElement(Pn,{background:"neutral0"},e.createElement(xn,{actions:r,kind:s,isFormDisabled:t}),e.createElement(fn,{actions:r,isFormDisabled:t,pathToData:s,subjects:i}))};vt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const bt=(0,e.memo)(vt);var Rn=n(18542);const xt=({children:t,value:s})=>e.createElement(Rn.$l.Provider,{value:s},t);xt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const An=xt;var Tn=n(97104),Sn=n(27375),Mn=n(37362),Pt=n(13539),On=n(9370),$n=n(61585);const Dn=(t,s,r)=>t.map(o=>{const i=[...r,o.action,"properties","enabled"],l=P()(s,i,!1),d=P()(s,[...r,o.action,"conditions"],{}),c=je(d).some(p=>p);return{...o,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:c,label:o.displayName,actionId:o.action,pathToConditionsObject:[...r,o.action]}}),Ln=t=>{const s=Object.entries(t).reduce((o,i)=>{const[l,{conditions:d}]=i;return o[l]=d,o},{});return je(s).some(o=>o)},jn=g.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,In=g.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:s,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${s?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Rt=({categoryName:t,isFormDisabled:s,subCategoryName:r,actions:o,pathToData:i})=>{const[l,d]=(0,e.useState)(!1),{modifiedData:c,onChangeParentCheckbox:p,onChangeSimpleCheckbox:u}=(0,G.$_)(),{formatMessage:y}=(0,j.Z)(),A=P()(c,i,{}),D=(0,e.useMemo)(()=>Object.keys(A).reduce((Z,te)=>(Z[te]=ze(A[te]),Z),{}),[A]),{hasAllActionsSelected:V,hasSomeActionsSelected:k}=Oe(D),O=()=>{d(Z=>!Z)},v=()=>{d(!1)},B=Dn(o,c,i),L=Ln(P()(c,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(m.x,null,e.createElement(x.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(m.x,{paddingRight:4},e.createElement(X.Z,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(jn,null),e.createElement(m.x,{paddingLeft:4},e.createElement(Pt.X,{name:i.join(".."),disabled:s,onValueChange:Z=>{p({target:{name:i.join(".."),value:Z}})},indeterminate:k,value:V},y({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(x.k,{paddingTop:6,paddingBottom:6},e.createElement(On.r,{gap:2,style:{flex:1}},B.map(({checkboxName:Z,value:te,action:H,displayName:q,hasConditions:U})=>e.createElement($n.P,{col:3,key:H},e.createElement(In,{disabled:s,hasConditions:U},e.createElement(Pt.X,{name:Z,disabled:s,onValueChange:he=>{u({target:{name:Z,value:he}})},value:te},q))))),e.createElement(ae,{hasConditions:L,onClick:O}))),l&&e.createElement(ie,{headerBreadCrumbs:[t,r],actions:B,isFormDisabled:s,onClosed:v,onToggle:O}))};Rt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const kn=Rt,_e=({childrenForm:t,kind:s,name:r,isOpen:o,isFormDisabled:i,isWhite:l,onOpenCategory:d,pathToData:c})=>{const{formatMessage:p}=(0,j.Z)(),u=()=>{d(r)},y=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Tn.U,{expanded:o,onToggle:u,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Sn.B,{title:ce()(y),description:`${p({id:"Settings.permissions.category"},{category:y})} ${s==="plugins"?"plugin":s}`}),e.createElement(Mn.v,null,e.createElement(m.x,{padding:6},t.map(({actions:A,subCategoryName:D,subCategoryId:V})=>e.createElement(kn,{key:D,actions:A,categoryName:y,isFormDisabled:i,subCategoryName:D,pathToData:[...c,V]})))))};_e.defaultProps={},_e.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const Bn=_e,At=({isFormDisabled:t,kind:s,layout:r})=>{const[o,i]=(0,e.useState)(null),l=d=>{i(d===o?null:d)};return e.createElement(m.x,{padding:6,background:"neutral0"},r.map(({category:d,categoryId:c,childrenForm:p},u)=>e.createElement(Bn,{key:d,childrenForm:p,kind:s,isFormDisabled:t,isOpen:o===d,isWhite:u%2===1,name:d,onOpenCategory:l,pathToData:[s,c]})))};At.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const Tt=At;var Zn=n(82492),Fn=n.n(Zn),Nn=n(36968),ge=n.n(Nn);const St=(t,s,r)=>t.find(o=>o.action===s&&o.subject===r),Mt=(t,s=[])=>t.reduce((r,o)=>(r[o.id]=s.indexOf(o.id)!==-1,r),{}),Ot=({children:t},s,r="")=>t.reduce((o,i)=>{if(i.children)return{...o,[i.value]:Ot(i,s,`${r}${i.value}.`)};const l=s.indexOf(`${r}${i.value}`)!==-1;return o[i.value]=l,o},{}),Wn=(t,s,r)=>t.reduce((o,i)=>{const l=s.properties.find(({value:d})=>d===i);if(l){const d=P()(r,["properties",l.value],[]),c=Ot(l,d);o.properties[i]=c}return o},{properties:{}}),Vn=(t,s)=>s.reduce((r,o)=>{const i=t.find(({uid:l})=>l===o)||null;return i&&(r[o]=i),r},{}),$t=({subjects:t},s,r,o=[])=>s.reduce((i,l)=>{const d=l.subjects,c=Vn(t,d);if(T()(c))return i;const p=Object.keys(c).reduce((u,y)=>{const{actionId:A,applyToProperties:D}=l,O=c[y].properties.map(({value:Z})=>Z).every(Z=>(D||[]).indexOf(Z)===-1),v=St(o,A,y),B=Mt(r,P()(v,"conditions",[]));if(T()(D)||O)return ge()(u,[y,A],{properties:{enabled:v!==void 0},conditions:B}),u;const L=Wn(D,c[y],v);return ge()(u,[y,A],{...L,conditions:B}),u},{});return Fn()(i,p)},{}),Kn=(t,s,r)=>t.reduce((o,i)=>{const l=St(r,i.action,null);return o[i.action]={properties:{enabled:l!==void 0},conditions:Mt(s,l?.conditions??[])},o},{}),Un=(t,s,r)=>t.reduce((o,i)=>(o[i.subCategoryId]=Kn(i.actions,s,r),o),{}),Dt=(t,s,r=[])=>t.reduce((o,{categoryId:i,childrenForm:l})=>{const d=Un(l,s,r);return o[i]=d,o},{}),Lt=t=>t.split(" ").join("-"),jt=(t,s)=>Object.entries(pe()(t,s)).map(([r,o])=>({category:r,categoryId:Lt(r),childrenForm:Object.entries(pe()(o,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Lt(i),actions:l}))})),Hn=(t,s)=>{const{conditions:r,sections:{collectionTypes:o,singleTypes:i,plugins:l,settings:d}}=t,c={collectionTypes:o,singleTypes:i,plugins:jt(l,"plugin"),settings:jt(d,"category")},p={collectionTypes:$t(o,o.actions||[],r,s),singleTypes:$t(i,i.actions||[],r,s),plugins:Dt(c.plugins,r,s),settings:Dt(c.settings,r,s)};return{initialData:p,modifiedData:p,layouts:c}};var Gn=n(50361),et=n.n(Gn);const It=t=>Object.keys(t).reduce((s,r)=>{const o=t[r];if(Te()(o)&&!C()(o,"conditions"))return{...s,[r]:It(o)};if(Te()(o)&&C()(o,"conditions")&&!je(w()(o,"conditions")).some(l=>l)){const l=Object.keys(o.conditions).reduce((d,c)=>(d[c]=!1,d),{});return{...s,[r]:{...o,conditions:l}}}return s[r]=o,s},{}),tt=It,kt=(t,s,r=!1)=>Object.keys(t).reduce((o,i)=>{const l=t[i];return i==="conditions"&&!r?(o[i]=l,o):Te()(l)?{...o,[i]:kt(l,s,i==="fields")}:(o[i]=s,o)},{}),He=kt,zn={initialData:{},modifiedData:{},layouts:{}},Yn=(t,s)=>(0,Q.ZP)(t,r=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:o,actionId:i,value:l}=s,d=["modifiedData",o];Object.keys(P()(t,d)).forEach(c=>{const p=P()(t,[...d,c,i],void 0);if(p){let u=He(p,l);if(!l&&u.conditions){const y=He(u.conditions,!1);u={...u,conditions:y}}ge()(r,[...d,c,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:o,propertyName:i,rowName:l,value:d}=s;let c=et()(t.modifiedData);const p=o.split(".."),u=P()(c,p,{});Object.keys(u).forEach(y=>{if(C()(u[y],`properties.${i}`)){const A=P()(u,[y,"properties",i,l]),D=[...p,y,"properties",i,l];if(!Te()(A))ge()(c,D,d);else{const V=He(A,d);ge()(c,D,V)}}}),d||(c=tt(c)),ge()(r,"modifiedData",c);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(o=>{const[i,l]=o;ge()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let o=et()(t.modifiedData);ge()(o,[...s.keys.split("..")],s.value),s.value||(o=tt(o)),ge()(r,"modifiedData",o);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:o,value:i}=s,l=[...o.split("..")];let d=et()(t.modifiedData);const c=P()(d,l,{}),p=He(c,i);ge()(d,l,p),i||(d=tt(d)),ge()(r,["modifiedData"],d);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),nt=t=>Object.entries(t).filter(([,s])=>s).map(([s])=>s),Xn=t=>{const[s,{conditions:r}]=t;return{action:s,subject:null,conditions:nt(r),properties:{}}},wn=t=>Object.values(t).reduce((s,r)=>{const o=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:d}}]=l;if(!d)return i;const c=Xn(l);return i.push(c),i},[]);return[...s,...o]},[]),Bt=t=>Object.values(t).reduce((s,r)=>{const o=wn(r);return[...s,...o]},[]),Zt=(t,s="")=>Object.entries(t).reduce((r,o)=>{const[i,l]=o;return Te()(l)?[...r,...Zt(l,`${s}${i}.`)]:(l&&!Te()(l)&&r.push(`${s}${i}`),r)},[]),Qn=(t,s,{conditions:r,properties:o})=>Object.entries(o).reduce((i,l)=>{const[d,c]=l;return i.properties[d]=Zt(c),i},{action:t,subject:s,conditions:nt(r),properties:{}}),Jn=(t,s,{conditions:r})=>({action:t,subject:s,properties:{},conditions:nt(r)}),qn=(t,s)=>Object.entries(s).reduce((o,i)=>{const[l,d]=i;if(!je(d).some(u=>u))return o;if(!d?.properties?.enabled){const u=Qn(l,t,d);return[...o,u]}if(!d.properties.enabled)return o;const p=Jn(l,t,d);return o.push(p),o},[]),Ft=t=>Object.entries(t).reduce((r,o)=>{const[i,l]=o,d=qn(i,l);return[...r,...d]},[]),_n=t=>{const s=Bt(t.plugins),r=Bt(t.settings),o=Ft(t.collectionTypes),i=Ft(t.singleTypes);return[...s,...r,...o,...i]},es=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:s,permissions:r},o)=>{const[{initialData:i,layouts:l,modifiedData:d},c]=(0,e.useReducer)(Yn,zn,()=>Hn(t,r)),{formatMessage:p}=(0,j.Z)();(0,e.useImperativeHandle)(o,()=>({getPermissions(){const k=(0,M.e5)(i.collectionTypes,d.collectionTypes),O=(0,M.e5)(i.singleTypes,d.singleTypes),v={...k,...O};let B;return T()(v)?B=!1:B=Object.values(v).some(L=>Object.values(L).some(Z=>C()(Z,"conditions"))),{permissionsToSend:_n(d),didUpdateConditions:B}},resetForm(){c({type:"RESET_FORM"})},setFormAfterSubmit(){c({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(k,O,v,B)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:k,propertyName:O,rowName:v,value:B})},y=(k,O,v)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:k,actionId:O,value:v})},A=k=>{c({type:"ON_CHANGE_CONDITIONS",conditions:k})},D=(0,e.useCallback)(({target:{name:k,value:O}})=>{c({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:k,value:O})},[]),V=(0,e.useCallback)(({target:{name:k,value:O}})=>{c({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:k,value:O})},[]);return e.createElement(An,{value:{availableConditions:t.conditions,modifiedData:d,onChangeConditions:A,onChangeSimpleCheckbox:D,onChangeParentCheckbox:V,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:y}},e.createElement(h.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(R.m,null,es.map(k=>e.createElement(R.O,{key:k.id},p({id:k.labelId,defaultMessage:k.defaultMessage})))),e.createElement(f.n,{style:{position:"relative"}},e.createElement(f.x,null,e.createElement(bt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:s})),e.createElement(f.x,null,e.createElement(bt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:s})),e.createElement(f.x,null,e.createElement(Tt,{layout:l.plugins,kind:"plugins",isFormDisabled:s})),e.createElement(f.x,null,e.createElement(Tt,{layout:l.settings,kind:"settings",isFormDisabled:s})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const ts=(0,e.memo)(st)},63727:(W,$,n)=>{"use strict";n.r($),n.d($,{default:()=>X});var e=n(67294),h=n(81252),R=n(86706),f=n(16550),M=n(36364),b=n(57713),C=n(79371),E=n(75878),T=n(19442),N=n(26789),a=n(50781),j=n(60793),m=n(41054),S=n(86896),F=n(4644),g=n(51754),x=n(90065),K=n(442),oe=n(78549),de=n(9370),re=n(61585),P=n(28469),me=n(20603),w=n(45697),G=n.n(w);const _=({disabled:ne,role:Y,values:I,errors:Q,onChange:fe,onBlur:pe})=>{const{formatMessage:J}=(0,S.Z)();return e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.k,{justifyContent:"space-between"},e.createElement(a.x,null,e.createElement(a.x,null,e.createElement(oe.Z,{fontWeight:"bold"},Y?Y.name:J({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.x,null,e.createElement(oe.Z,{textColor:"neutral500",variant:"pi"},Y?Y.description:J({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(T.z,{disabled:!0,variant:"secondary"},J({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:Y.usersCount}))),e.createElement(de.r,{gap:4},e.createElement(re.P,{col:6},e.createElement(P.o,{disabled:ne,name:"name",error:Q.name&&J({id:Q.name}),label:J({id:"global.name",defaultMessage:"Name"}),onChange:fe,onBlur:pe,required:!0,value:I.name||""})),e.createElement(re.P,{col:6},e.createElement(me.g,{disabled:ne,label:J({id:"global.description",defaultMessage:"Description"}),id:"description",error:Q.name&&J({id:Q.name}),onChange:fe,onBlur:pe},I.description||"")))))};_.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},_.propTypes={disabled:G().bool,errors:G().object.isRequired,onBlur:G().func.isRequired,onChange:G().func.isRequired,role:G().object,values:G().object};const Ce=_;var be=n(87561);const ae=be.Ry().shape({name:be.Z_().required(h.I0.required)}),Se=()=>{const ne=(0,h.lm)(),{formatMessage:Y}=(0,S.Z)(),{params:{id:I}}=(0,f.$B)("/settings/roles/:id"),{put:Q}=(0,h.kY)(),[fe,pe]=(0,e.useState)(!1),J=(0,e.useRef)(),{lockApp:ce,unlockApp:ke}=(0,h.o1)(),{trackUsage:Be}=(0,h.rS)(),{formatAPIError:Ee}=(0,h.So)(),{isLoading:Ze,data:Le}=(0,x.d)(I,{cacheTime:0}),{roles:[ye={}],isLoading:Me,refetch:Fe}=(0,g.F)({id:I},{cacheTime:0}),{permissions:Ue,isLoading:Re}=(0,F.V)({id:I},{cacheTime:0}),ee=async le=>{try{ce(),pe(!0);const{permissionsToSend:ue,didUpdateConditions:Ae}=J.current.getPermissions();await Q(`/admin/roles/${I}`,le),ye.code!=="strapi-super-admin"&&(await Q(`/admin/roles/${I}/permissions`,{permissions:ue}),Ae&&Be("didUpdateConditions")),J.current.setFormAfterSubmit(),await Fe(),ne({type:"success",message:{id:"notification.success.saved"}})}catch(ue){ne({type:"warning",message:Ee(ue)})}finally{pe(!1),ke()}},ie=!Me&&ye.code==="strapi-super-admin";return e.createElement(b.o,null,e.createElement(h.SL,{name:"Roles"}),e.createElement(m.J9,{enableReinitialize:!0,initialValues:{name:ye.name,description:ye.description},onSubmit:ee,validationSchema:ae,validateOnChange:!1},({handleSubmit:le,values:ue,errors:Ae,handleChange:ot,handleBlur:Ne})=>e.createElement("form",{onSubmit:le},e.createElement(C.T,{primaryAction:e.createElement(E.k,{gap:2},e.createElement(T.z,{disabled:ye.code==="strapi-super-admin",onClick:le,loading:fe,size:"L"},Y({id:"global.save",defaultMessage:"Save"}))),title:Y({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:Y({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(h.rU,{startIcon:e.createElement(j.Z,null),to:"/settings/roles"},Y({id:"global.back",defaultMessage:"Back"}))}),e.createElement(N.D,null,e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(Ce,{isLoading:Me||Re,disabled:ie,errors:Ae,values:ue,onChange:ot,onBlur:Ne,role:ye}),!Ze&&!Me&&!Re?e.createElement(a.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(K.Z,{isFormDisabled:ie,permissions:Ue,ref:J,layout:Le})):e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(h.dO,null)))))))},X=()=>{const ne=(0,R.v9)(M._),{isLoading:Y,allowedActions:{canRead:I,canUpdate:Q}}=(0,h.ss)({read:ne.settings.roles.read,update:ne.settings.roles.update});return Y?e.createElement(h.dO,null):!I&&!Q?e.createElement(f.l_,{to:"/"}):e.createElement(Se,null)}},90065:(W,$,n)=>{"use strict";n.d($,{d:()=>R});var e=n(81252),h=n(88767);const R=(f,M={})=>{const{get:b}=(0,e.kY)(),{data:C,error:E,isError:T,isLoading:N}=(0,h.useQuery)(["permissions",f],async()=>{const{data:{data:a}}=await b("/admin/permissions",{params:{role:f}});return a},M);return{data:C,error:E,isError:T,isLoading:N}}},44174:W=>{function $(n,e,h,R){for(var f=-1,M=n==null?0:n.length;++f<M;){var b=n[f];e(R,b,h(b),n)}return R}W.exports=$},81119:(W,$,n)=>{var e=n(89881);function h(R,f,M,b){return e(R,function(C,E,T){f(b,C,M(C),T)}),b}W.exports=h},55189:(W,$,n)=>{var e=n(44174),h=n(81119),R=n(67206),f=n(1469);function M(b,C){return function(E,T){var N=f(E)?e:h,a=C?C():{};return N(E,b,R(T,2),a)}}W.exports=M},42348:(W,$,n)=>{var e=n(21078),h=1/0;function R(f){var M=f==null?0:f.length;return M?e(f,h):[]}W.exports=R},7739:(W,$,n)=>{var e=n(89465),h=n(55189),R=Object.prototype,f=R.hasOwnProperty,M=h(function(b,C,E){f.call(b,E)?b[E].push(C):e(b,E,[C])});W.exports=M},97104:(W,$,n)=>{"use strict";n.d($,{U:()=>j,y:()=>N});var e=n(85893),h=n(67294),R=n(88972),f=n(7535),M=n(73879),b=n(78549),C=n(75878),E=n(50781);const T=({theme:m,expanded:S,variant:F,disabled:g,error:x})=>x?`1px solid ${m.colors.danger600} !important`:g?`1px solid ${m.colors.neutral150}`:S?`1px solid ${m.colors.primary600}`:F==="primary"?`1px solid ${m.colors.neutral0}`:`1px solid ${m.colors.neutral100}`,N=(0,R.ZP)(b.Z)``,a=(0,R.ZP)(E.x)`
  border: ${T};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:m})=>m.colors.primary600};

    ${N} {
      color: ${({theme:m,expanded:S})=>S?void 0:m.colors.primary700};
    }

    ${b.Z} {
      color: ${({theme:m,expanded:S})=>S?void 0:m.colors.primary600};
    }

    & > ${C.k} {
      background: ${({theme:m})=>m.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:m})=>m.colors.primary200};
    }
  }
`,j=({children:m,disabled:S=!1,error:F,expanded:g=!1,hasErrorMessage:x=!0,id:K,onToggle:oe,toggle:de,size:re="M",variant:P="primary",shadow:me})=>{const w=(0,M.M)(K),G=h.useMemo(()=>({expanded:g,onToggle:oe,toggle:de,id:w,size:re,variant:P,disabled:S}),[S,g,w,oe,re,de,P]);return(0,e.jsxs)(f.S.Provider,{value:G,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:S,"aria-disabled":S,expanded:g,hasRadius:!0,variant:P,error:F,shadow:me,children:m}),F&&x&&(0,e.jsx)(E.x,{paddingTop:1,children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"danger600",children:F})})]})}},37362:(W,$,n)=>{"use strict";n.d($,{v:()=>f});var e=n(85893),h=n(7535),R=n(50781);const f=({children:M,...b})=>{const{expanded:C,id:E}=(0,h.A)();if(!C)return null;const T=`accordion-content-${E}`,N=`accordion-label-${E}`,a=`accordion-desc-${E}`;return(0,e.jsx)(R.x,{role:"region",id:T,"aria-labelledby":N,"aria-describedby":a,...b,children:M})}},7535:(W,$,n)=>{"use strict";n.d($,{A:()=>R,S:()=>h});var e=n(67294);const h=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),R=()=>(0,e.useContext)(h)},27375:(W,$,n)=>{"use strict";n.d($,{B:()=>m});var e=n(85893),h=n(21514),R=n(88972),f=n(97104),M=n(7535);const b=({expanded:S,disabled:F,variant:g})=>{let x="neutral100";return S?x="primary100":F?x="neutral150":g==="primary"&&(x="neutral0"),x};var C=n(90139),E=n(80907),T=n(75878),N=n(78549);const a=(0,R.ZP)(C.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:S,expanded:F})=>F?S.colors.primary600:S.colors.neutral500};
    }
  }
`,j=(0,R.ZP)(T.k)`
  min-height: ${({theme:S,size:F})=>S.sizes.accordions[F]};
  border-radius: ${({theme:S,expanded:F})=>F?`${S.borderRadius} ${S.borderRadius} 0 0`:S.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:S})=>S.colors.primary600};
      }
    }
  }
`,m=({title:S,description:F,as:g="span",togglePosition:x="right",action:K,...oe})=>{const{onToggle:de,toggle:re,expanded:P,id:me,size:w,variant:G,disabled:_}=(0,M.A)(),Ce=`accordion-content-${me}`,be=`accordion-label-${me}`,xe=`accordion-desc-${me}`,ae=w==="M"?6:4,Pe=w==="M"?ae:ae-2,Se=b({expanded:P,disabled:_,variant:G}),z={as:g,fontWeight:w==="S"?"bold":void 0,id:be,textColor:P?"primary600":"neutral700",ellipsis:!0,variant:w==="M"?"delta":void 0},X=P?"primary600":"neutral600",ne=P?"primary200":"neutral200",Y=w==="M"?`${32/16}rem`:`${24/16}rem`,I=()=>{_||(re&&!de?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),re()):de&&de())},Q=(0,e.jsx)(T.k,{justifyContent:"center",borderRadius:"50%",height:Y,width:Y,transform:P?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ne,cursor:_?"not-allowed":"pointer",onClick:I,shrink:0,children:(0,e.jsx)(E.J,{as:h.Z,width:w==="M"?`${11/16}rem`:`${8/16}rem`,color:P?"primary600":"neutral600"})});return(0,e.jsx)(j,{paddingBottom:Pe,paddingLeft:ae,paddingRight:ae,paddingTop:Pe,background:Se,expanded:P,size:w,justifyContent:"space-between",cursor:_?"not-allowed":"",children:(0,e.jsxs)(T.k,{gap:3,flex:1,maxWidth:"100%",children:[x==="left"&&Q,(0,e.jsx)(a,{onClick:I,"aria-disabled":_,"aria-expanded":P,"aria-controls":Ce,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:P,type:"button",flex:1,minWidth:0,...oe,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f.y,{...z,children:S}),F&&(0,e.jsx)(N.Z,{as:"p",id:xe,textColor:X,children:F})]})}),x==="right"&&(0,e.jsxs)(T.k,{gap:3,children:[Q,K]}),x==="left"&&K]})})}},31439:(W,$,n)=>{"use strict";n.d($,{Q:()=>f});var e=n(85893),h=n(88972),R=n(55482);const f=({options:b,...C})=>(0,e.jsx)(R.NU,{...C,children:b.map(E=>"children"in E?(0,e.jsx)(R.Ab,{label:E.label,values:E.children.map(T=>T.value.toString()),children:E.children.map(T=>(0,e.jsx)(M,{value:T.value,children:T.label},T.value))},E.label):(0,e.jsx)(R.ML,{value:E.value,children:E.label},E.value))}),M=(0,h.ZP)(R.ML)`
  padding-left: ${({theme:b})=>b.spaces[7]};
`},82392:(W,$,n)=>{"use strict";n.d($,{O:()=>T});var e=n(85893),h=n(67294),R=n(88972),f=n(16607),M=n(10574);const b=()=>(0,e.jsx)(f.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(M.Z,{variant:"pi",textColor:"neutral500",children:"/"})});b.displayName="Divider";var C=n(96987);const E=(0,R.ZP)(C.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:N})=>`calc(-1*${N.spaces[2]})`};
  }
`,T=({label:N,children:a,...j})=>{const m=h.Children.toArray(a);return(0,e.jsx)(f.x,{"aria-label":N,...j,children:(0,e.jsx)(E,{as:"ol",children:h.Children.map(m,(S,F)=>{const g=m.length>1&&F+1<m.length;return(0,e.jsxs)(C.k,{inline:!0,as:"li",children:[S,g&&(0,e.jsx)(b,{})]})})})})};T.displayName="Breadcrumbs"},75071:(W,$,n)=>{"use strict";n.d($,{$:()=>f});var e=n(85893),h=n(16607),R=n(10574);const f=({children:M,isCurrent:b=!1,...C})=>(0,e.jsx)(h.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)(R.Z,{variant:"pi",textColor:"neutral800",fontWeight:b?"bold":"normal","aria-current":b,...C,children:M})});f.displayName="Crumb"}}]);
