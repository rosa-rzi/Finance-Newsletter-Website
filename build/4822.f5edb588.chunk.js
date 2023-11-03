(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4822],{79194:(T,g,e)=>{"use strict";e.d(g,{v:()=>r});var t=e(67294),s=e(86706);function r(i,u){const l=(0,s.oR)();(0,t.useEffect)(()=>{l.injectReducer(i,u)},[l,i,u])}},75021:(T,g,e)=>{"use strict";e.d(g,{q:()=>i});var t=e(67294),s=e(81252),r=e(88767);function i({enabled:u}={enabled:!0}){const{get:l}=(0,s.kY)(),{data:p,isError:a,isLoading:o}=(0,r.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:f}}=await l("/admin/license-limit-information");return f},{enabled:u}),n=t.useMemo(()=>p??{},[p]),m=t.useCallback(f=>(n?.features??[]).find(c=>c.name===f)?.options??{},[n?.features]);return{license:n,getFeature:m,isError:a,isLoading:o}}},11984:(T,g,e)=>{"use strict";e.d(g,{CI:()=>i,FP:()=>l,Js:()=>a,_V:()=>r,fC:()=>s,rI:()=>p,xn:()=>u});var t=e(86978);function s({status:o,data:n}){return{type:t.qZ,payload:{status:o,workflow:n}}}function r(o){return{type:t.x4,payload:{stageId:o}}}function i(o={}){return{type:t.Ot,payload:o}}function u(o,n){return{type:t.Nj,payload:{stageId:o,...n}}}function l(o,n){return{type:t.$k,payload:{newIndex:n,oldIndex:o}}}function p(o){return{type:t.VS,payload:o}}function a(){return{type:t.gu}}},43390:(T,g,e)=>{"use strict";e.d(g,{eJ:()=>S,lx:()=>R,h4:()=>w,fC:()=>D});var t=e(67294),s=e(45349),r=e(57713),i=e(26789),u=e(79371),l=e(81252),p=e(60793),a=e(86896),o=e(52713),n=e(86978),m=e(75878),f=e(78549),d=e(21514),c=e(45697),v=e.n(c),M=e(88972);const x=(0,M.ZP)(m.k)`
  svg path {
    fill: ${({theme:E})=>E.colors.neutral600};
  }
`;function C({name:E}){return t.createElement(m.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,l.Q1)(300)},t.createElement(x,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(d.Z,{width:`${8/16}rem`})),t.createElement(f.Z,{fontWeight:"bold"},E))}C.propTypes={name:v().string.isRequired};function P({type:E,item:$}){switch(E){case n.uL.STAGE:return t.createElement(C,{...$});default:return null}}function R(){return t.createElement(o.r,{renderItem:P})}function D({children:E}){return t.createElement(s.A,null,t.createElement(r.o,{tabIndex:-1},t.createElement(i.D,null,E)))}function S({href:E}){const{formatMessage:$}=(0,a.Z)();return t.createElement(l.rU,{startIcon:t.createElement(p.Z,null),to:E},$({id:"global.back",defaultMessage:"Back"}))}function w({title:E,subtitle:$,navigationAction:A,primaryAction:L}){return t.createElement(t.Fragment,null,t.createElement(l.SL,{name:E}),t.createElement(u.T,{navigationAction:A,primaryAction:L,title:E,subtitle:$}))}},38705:(T,g,e)=>{"use strict";e.d(g,{uT:()=>P,fC:()=>S,Dx:()=>C});var t=e(67294),s=e(78549),r=e(75878),i=e(60881),u=e(48683),l=e(50781),p=e(37527),a=e(94101),o=e(15800),n=e(45697),m=e.n(n),f=e(86896),d=e(88972);const c=e.p+"0cd5f8915b265d5b1856.png",v="limits-title",M="https://strapi.io/pricing-cloud",x="https://strapi.io/contact-sales";function C({children:w}){return t.createElement(s.Z,{variant:"alpha",id:v},w)}C.propTypes={children:m().node.isRequired};function P({children:w}){return t.createElement(s.Z,{variant:"omega"},w)}P.propTypes={children:m().node.isRequired};function R(){const{formatMessage:w}=(0,f.Z)();return t.createElement(r.k,{gap:2,paddingTop:4},t.createElement(a.Q,{variant:"default",isExternal:!0,href:M},w({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(a.Q,{variant:"tertiary",isExternal:!0,href:x},w({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const D=d.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:w})=>`-${w.spaces[7]}`};
  margin-top: ${({theme:w})=>`-${w.spaces[7]}`};
  width: 360px;
`;function S({children:w,isOpen:E,onClose:$}){const{formatMessage:A}=(0,f.Z)();return E?t.createElement(i.P,{labelledBy:v},t.createElement(u.f,null,t.createElement(r.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(r.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},w,t.createElement(R,null)),t.createElement(r.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(D,{src:c,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(l.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(p.h,{icon:t.createElement(o.Z,null),"aria-label":A({id:"global.close",defaultMessage:"Close"}),onClick:$})))))):null}S.defaultProps={isOpen:!1},S.propTypes={children:m().node.isRequired,isOpen:m().bool,onClose:m().func.isRequired}},68997:(T,g,e)=>{"use strict";e.d(g,{U:()=>b});var t=e(67294),s=e(50781),r=e(75878),i=e(81252),u=e(45697),l=e.n(u),p=e(86896),a=e(86706),o=e(88972),n=e(11984),m=e(78549),f=e(59533);const d=(0,o.ZP)(f.Z)`
  > circle {
    fill: ${({theme:h})=>h.colors.neutral150};
  }
  > path {
    fill: ${({theme:h})=>h.colors.neutral600};
  }
`,c=(0,o.ZP)(s.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:h})=>h.spaces[6]};
    width: ${({theme:h})=>h.spaces[6]};

    > path {
      fill: ${({theme:h})=>h.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:h})=>h.colors.primary600} !important;
    ${m.Z} {
      color: ${({theme:h})=>h.colors.primary600} !important;
    }

    ${d} {
      > circle {
        fill: ${({theme:h})=>h.colors.primary600};
      }
      > path {
        fill: ${({theme:h})=>h.colors.neutral100};
      }
    }
  }

  &:active {
    ${m.Z} {
      color: ${({theme:h})=>h.colors.primary600};
    }

    ${d} {
      > circle {
        fill: ${({theme:h})=>h.colors.primary600};
      }
      > path {
        fill: ${({theme:h})=>h.colors.neutral100};
      }
    }
  }
`;function v({children:h,...k}){return t.createElement(c,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...k},t.createElement(r.k,{gap:2},t.createElement(d,{"aria-hidden":!0}),t.createElement(m.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},h)))}v.propTypes={children:l().node.isRequired};var M=e(22996),x=e(97104),C=e(27375),P=e(37527),R=e(37362),D=e(9370),S=e(61585),w=e(28469),E=e(47338),$=e(34263),A=e(5660),L=e(41054),K=e(61080),V=e(21440),I=e(21892),N=e(86978),Z=e(5318);const H=(0,Z.s)();function y(){return t.createElement(s.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function W({id:h,index:k,canDelete:U,canReorder:ee,canUpdate:F,isOpen:te=!1,stagesCount:_}){const z=O=>`${O+1} of ${_}`,Q=O=>{X(B({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:j.value,position:z(O)}))},ie=O=>{X(B({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:j.value,position:z(O)}))},de=()=>{X(B({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:j.value}))},ce=(O,Y)=>{X(B({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:j.value,position:z(O)})),J((0,n.FP)(Y,O))},[re,X]=t.useState(null),{formatMessage:B}=(0,p.Z)(),{trackUsage:ue}=(0,i.rS)(),J=(0,a.I0)(),[ae,ge]=t.useState(te),[j,oe,pe]=(0,L.U$)(`stages.${k}.name`),[q,ne,me]=(0,L.U$)(`stages.${k}.color`),[{handlerId:fe,isDragging:Ee,handleKeyDown:ve},he,ye,Te,se]=(0,V.Y9)(ee,{index:k,item:{name:j.value},onGrabItem:Q,onDropItem:ie,onMoveItem:ce,onCancel:de,type:N.uL.STAGE}),Me=(0,I.FE)(he,ye),Se=H.map(({hex:O,name:Y})=>({value:O,label:B({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:Y}),color:O}));t.useEffect(()=>{se((0,K.rX)(),{captureDraggingState:!1})},[se,k]);const{themeColorName:xe}=(0,Z.k)(q.value)??{};return t.createElement(s.x,{ref:Me},re&&t.createElement(M.T,{"aria-live":"assertive"},re),Ee?t.createElement(y,null):t.createElement(x.U,{size:"S",variant:"primary",onToggle:()=>{ge(!ae),ae||ue("willEditStage")},expanded:ae,shadow:"tableShadow",error:oe.error??ne?.error??!1,hasErrorMessage:!1},t.createElement(C.B,{title:j.value,togglePosition:"left",action:(U||F)&&t.createElement(r.k,null,U&&t.createElement(P.h,{background:"transparent",icon:t.createElement($.Z,null),label:B({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>J((0,n._V)(h))}),F&&t.createElement(P.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":fe,ref:Te,label:B({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:O=>O.stopPropagation(),onKeyDown:ve},t.createElement(A.Z,null)))}),t.createElement(R.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(D.r,{gap:4},t.createElement(S.P,{col:6},t.createElement(w.o,{...j,id:j.name,disabled:!F,label:B({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:oe.error??!1,onChange:O=>{pe.setValue(O.target.value),J((0,n.xn)(h,{name:O.target.value}))},required:!0})),t.createElement(S.P,{col:6},t.createElement(E.q4,{disabled:!F,error:ne?.error??!1,id:q.name,required:!0,label:B({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:O=>{me.setValue(O),J((0,n.xn)(h,{color:O}))},value:q.value.toUpperCase(),startIcon:t.createElement(r.k,{as:"span",height:2,background:q.value,borderColor:xe==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},Se.map(({value:O,label:Y,color:le})=>{const{themeColorName:we}=(0,Z.k)(le);return t.createElement(E.ag,{value:O,key:O,startIcon:t.createElement(r.k,{as:"span",height:2,background:le,borderColor:we==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},Y)})))))))}W.propTypes=l().shape({id:l().number.isRequired,color:l().string.isRequired,canDelete:l().bool.isRequired,canReorder:l().bool.isRequired,canUpdate:l().bool.isRequired,stagesCount:l().number.isRequired}).isRequired;const G=(0,o.ZP)(s.x)`
  transform: translateX(-50%);
`;function b({canDelete:h,canUpdate:k,stages:U}){const{formatMessage:ee}=(0,p.Z)(),F=(0,a.I0)(),{trackUsage:te}=(0,i.rS)();return t.createElement(r.k,{direction:"column",gap:6,width:"100%"},t.createElement(s.x,{position:"relative",spacing:4,width:"100%"},t.createElement(G,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},U.map((_,z)=>{const Q=_?.id??_.__temp_key__;return t.createElement(s.x,{key:`stage-${Q}`,as:"li"},t.createElement(W,{id:Q,index:z,isOpen:!_.id,canDelete:U.length>1&&h,canReorder:U.length>1,canUpdate:k,stagesCount:U.length}))}))),k&&t.createElement(v,{type:"button",onClick:()=>{F((0,n.CI)({name:""})),te("willCreateStage")}},ee({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}b.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},b.propTypes={canDelete:l().bool,canUpdate:l().bool,stages:l().arrayOf(l().shape({id:l().number,__temp_key__:l().number,name:l().string.isRequired}))}},85230:(T,g,e)=>{"use strict";e.d(g,{Y:()=>x});var t=e(67294),s=e(55482),r=e(78549),i=e(9370),u=e(61585),l=e(28469),p=e(81252),a=e(41054),o=e(45697),n=e.n(o),m=e(86896),f=e(86706),d=e(88972),c=e(11984);const v=(0,d.ZP)(s.ML)`
  padding-left: ${({theme:P})=>P.spaces[7]};
`,M=(0,d.ZP)(r.Z)`
  font-style: italic;
`;function x({canUpdate:P,contentTypes:{collectionTypes:R,singleTypes:D},currentWorkflow:S,workflows:w}){const{formatMessage:E,locale:$}=(0,m.Z)(),A=(0,f.I0)(),[L,K,V]=(0,a.U$)("name"),[I,N,Z]=(0,a.U$)("contentTypes"),H=(0,p.Xe)($,{sensitivity:"base"});return t.createElement(i.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(u.P,{col:6},t.createElement(l.o,{...L,id:L.name,disabled:!P,label:E({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:K.error??!1,onChange:y=>{A((0,c.rI)({name:y.target.value})),V.setValue(y.target.value)},required:!0})),t.createElement(u.P,{col:6},t.createElement(s.NU,{...I,customizeContent:y=>E({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:y.length}),disabled:!P,error:N.error??!1,id:I.name,label:E({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:y=>{A((0,c.rI)({contentTypes:y})),Z.setValue(y)},placeholder:E({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...R.length>0?[{label:E({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:R.sort((y,W)=>H.compare(y.info.displayName,W.info.displayName)).map(y=>({label:y.info.displayName,value:y.uid}))}]:[],...D.length>0?[{label:E({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:D.map(y=>({label:y.info.displayName,value:y.uid}))}]:[]].map(y=>"children"in y?t.createElement(s.Ab,{key:y.label,label:y.label,values:y.children.map(W=>W.value.toString())},y.children.map(W=>{const{name:G}=w.find(b=>(S&&b.id!==S.id||!S)&&b.contentTypes.includes(W.value))??{};return t.createElement(v,{key:W.value,value:W.value},E({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:W.label,name:G,em:(...b)=>t.createElement(r.Z,{as:"em",fontWeight:"bold"},b),i:(...b)=>t.createElement(M,null,b)}))})):t.createElement(s.ML,{key:y.value,value:y.value},y.label)))))}const C=n().shape({uid:n().string.isRequired,info:n().shape({displayName:n().string.isRequired}).isRequired});x.defaultProps={canUpdate:!0,currentWorkflow:void 0},x.propTypes={canUpdate:n().bool,contentTypes:n().shape({collectionTypes:n().arrayOf(C).isRequired,singleTypes:n().arrayOf(C).isRequired}).isRequired,currentWorkflow:n().object,workflows:n().array.isRequired}},86978:(T,g,e)=>{"use strict";e.d(g,{$k:()=>a,Ef:()=>d,FT:()=>m,Nj:()=>p,Ot:()=>l,VS:()=>o,_X:()=>c,gu:()=>r,lv:()=>n,qZ:()=>i,sN:()=>s,uL:()=>f,x4:()=>u});var t=e(20468);const s="settings_review-workflows",r="Settings/Review_Workflows/RESET_WORKFLOW",i="Settings/Review_Workflows/SET_WORKFLOW",u="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",l="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",p="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",a="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",o="Settings/Review_Workflows/WORKFLOW_UPDATE",n={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},m=t.W.colors.primary600,f={STAGE:"stage"},d="numberOfWorkflows",c="stagesPerWorkflow"},52258:(T,g,e)=>{"use strict";e.d(g,{n:()=>r});var t=e(81252),s=e(88767);function r(i={}){const{get:u}=(0,t.kY)(),{id:l="",...p}=i,a={populate:"stages"},{data:o,isLoading:n,status:m,refetch:f}=(0,s.useQuery)(["review-workflows","workflows",l],async()=>(await u(`/admin/review-workflows/workflows/${l}`,{params:{...a,...p}})).data);let d=[];return l&&o?.data?d=[o.data]:Array.isArray(o?.data)&&(d=o.data),{meta:o?.meta??{},workflows:d,isLoading:n,status:m,refetch:f}}},3848:(T,g,e)=>{"use strict";e.d(g,{E:()=>u,I:()=>l});var t=e(18172),s=e(18446),r=e.n(s),i=e(86978);const u={status:"loading",serverState:{workflow:null},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[]},isDirty:!1,hasDeletedServerStages:!1}}};function l(a=u,o){return(0,t.Uy)(a,n=>{const{payload:m}=o;switch(o.type){case i.qZ:{const{status:f,workflow:d}=m;n.status=f,d&&(n.serverState.workflow=d,n.clientState.currentWorkflow.data={...d,stages:d.stages.map(c=>({...c,color:c?.color??i.FT}))}),n.clientState.currentWorkflow.hasDeletedServerStages=!1;break}case i.gu:{n.clientState.currentWorkflow.data=u.clientState.currentWorkflow.data,n.serverState=u.serverState;break}case i.x4:{const{stageId:f}=m,{currentWorkflow:d}=a.clientState;n.clientState.currentWorkflow.data.stages=d.data.stages.filter(c=>(c?.id??c.__temp_key__)!==f),d.hasDeletedServerStages||(n.clientState.currentWorkflow.hasDeletedServerStages=!!(a.serverState.workflow?.stages??[]).find(c=>c.id===f));break}case i.Ot:{const{currentWorkflow:f}=a.clientState;f.data||(n.clientState.currentWorkflow.data={stages:[]});const d=p(n.clientState.currentWorkflow.data.stages);n.clientState.currentWorkflow.data.stages.push({...m,color:m?.color??i.FT,__temp_key__:d});break}case i.Nj:{const{currentWorkflow:f}=a.clientState,{stageId:d,...c}=m;n.clientState.currentWorkflow.data.stages=f.data.stages.map(v=>(v.id??v.__temp_key__)===d?{...v,...c}:v);break}case i.$k:{const{currentWorkflow:{data:{stages:f}}}=a.clientState,{newIndex:d,oldIndex:c}=m;if(d>=0&&d<f.length){const v=f[c];let M=[...f];M.splice(c,1),M.splice(d,0,v),n.clientState.currentWorkflow.data.stages=M}break}case i.VS:{n.clientState.currentWorkflow.data={...n.clientState.currentWorkflow.data,...m};break}default:break}a.clientState.currentWorkflow.data&&n.serverState.workflow?n.clientState.currentWorkflow.isDirty=!r()((0,t.Vk)(n.clientState.currentWorkflow).data,n.serverState.workflow):n.clientState.currentWorkflow.isDirty=!0})}const p=(a=[])=>{const o=a.map(n=>n.id??n.__temp_key__);return Math.max(...o,-1)+1}},5318:(T,g,e)=>{"use strict";e.d(g,{k:()=>r,s:()=>i});var t=e(20468),s=e(86978);function r(u){if(!u)return null;const p=Object.entries(t.W.colors).filter(([,a])=>a.toUpperCase()===u.toUpperCase()).reduce((a,[o])=>(s.lv?.[o]&&(a=o),a),null);return p?{themeColorName:p,name:s.lv[p]}:null}function i(){return Object.entries(s.lv).map(([u,l])=>({hex:t.W.colors[u].toUpperCase(),name:l}))}},66578:(T,g,e)=>{"use strict";e.d(g,{V:()=>i});var t=e(36968),s=e.n(t),r=e(87561);async function i({values:u,formatMessage:l}){const p=r.Ry({contentTypes:r.IX().of(r.Z_()),name:r.Z_().max(255,l({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:r.IX().of(r.Ry().shape({name:r.Z_().required(l({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,l({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",l({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(a){const{options:{context:o}}=this;return o.stages.filter(n=>n.name===a).length===1}),color:r.Z_().required(l({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)})).min(1)});try{return await p.validate(u,{abortEarly:!1,context:u}),!0}catch(a){let o={};return a instanceof r.p8&&a.inner.forEach(n=>{s()(o,n.path,n.message)}),o}}},51584:(T,g,e)=>{var t=e(44239),s=e(37005),r="[object Boolean]";function i(u){return u===!0||u===!1||s(u)&&t(u)==r}T.exports=i},7654:(T,g,e)=>{var t=e(81763);function s(r){return t(r)&&r!=+r}T.exports=s},81763:(T,g,e)=>{var t=e(44239),s=e(37005),r="[object Number]";function i(u){return typeof u=="number"||s(u)&&t(u)==r}T.exports=i},97104:(T,g,e)=>{"use strict";e.d(g,{U:()=>f,y:()=>n});var t=e(85893),s=e(67294),r=e(88972),i=e(7535),u=e(73879),l=e(78549),p=e(75878),a=e(50781);const o=({theme:d,expanded:c,variant:v,disabled:M,error:x})=>x?`1px solid ${d.colors.danger600} !important`:M?`1px solid ${d.colors.neutral150}`:c?`1px solid ${d.colors.primary600}`:v==="primary"?`1px solid ${d.colors.neutral0}`:`1px solid ${d.colors.neutral100}`,n=(0,r.ZP)(l.Z)``,m=(0,r.ZP)(a.x)`
  border: ${o};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:d})=>d.colors.primary600};

    ${n} {
      color: ${({theme:d,expanded:c})=>c?void 0:d.colors.primary700};
    }

    ${l.Z} {
      color: ${({theme:d,expanded:c})=>c?void 0:d.colors.primary600};
    }

    & > ${p.k} {
      background: ${({theme:d})=>d.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:d})=>d.colors.primary200};
    }
  }
`,f=({children:d,disabled:c=!1,error:v,expanded:M=!1,hasErrorMessage:x=!0,id:C,onToggle:P,toggle:R,size:D="M",variant:S="primary",shadow:w})=>{const E=(0,u.M)(C),$=s.useMemo(()=>({expanded:M,onToggle:P,toggle:R,id:E,size:D,variant:S,disabled:c}),[c,M,E,P,D,R,S]);return(0,t.jsxs)(i.S.Provider,{value:$,children:[(0,t.jsx)(m,{"data-strapi-expanded":M,disabled:c,"aria-disabled":c,expanded:M,hasRadius:!0,variant:S,error:v,shadow:w,children:d}),v&&x&&(0,t.jsx)(a.x,{paddingTop:1,children:(0,t.jsx)(l.Z,{variant:"pi",textColor:"danger600",children:v})})]})}},37362:(T,g,e)=>{"use strict";e.d(g,{v:()=>i});var t=e(85893),s=e(7535),r=e(50781);const i=({children:u,...l})=>{const{expanded:p,id:a}=(0,s.A)();if(!p)return null;const o=`accordion-content-${a}`,n=`accordion-label-${a}`,m=`accordion-desc-${a}`;return(0,t.jsx)(r.x,{role:"region",id:o,"aria-labelledby":n,"aria-describedby":m,...l,children:u})}},7535:(T,g,e)=>{"use strict";e.d(g,{A:()=>r,S:()=>s});var t=e(67294);const s=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),r=()=>(0,t.useContext)(s)},27375:(T,g,e)=>{"use strict";e.d(g,{B:()=>d});var t=e(85893),s=e(21514),r=e(88972),i=e(97104),u=e(7535);const l=({expanded:c,disabled:v,variant:M})=>{let x="neutral100";return c?x="primary100":v?x="neutral150":M==="primary"&&(x="neutral0"),x};var p=e(90139),a=e(80907),o=e(75878),n=e(78549);const m=(0,r.ZP)(p.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:c,expanded:v})=>v?c.colors.primary600:c.colors.neutral500};
    }
  }
`,f=(0,r.ZP)(o.k)`
  min-height: ${({theme:c,size:v})=>c.sizes.accordions[v]};
  border-radius: ${({theme:c,expanded:v})=>v?`${c.borderRadius} ${c.borderRadius} 0 0`:c.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:c})=>c.colors.primary600};
      }
    }
  }
`,d=({title:c,description:v,as:M="span",togglePosition:x="right",action:C,...P})=>{const{onToggle:R,toggle:D,expanded:S,id:w,size:E,variant:$,disabled:A}=(0,u.A)(),L=`accordion-content-${w}`,K=`accordion-label-${w}`,V=`accordion-desc-${w}`,I=E==="M"?6:4,N=E==="M"?I:I-2,Z=l({expanded:S,disabled:A,variant:$}),H={as:M,fontWeight:E==="S"?"bold":void 0,id:K,textColor:S?"primary600":"neutral700",ellipsis:!0,variant:E==="M"?"delta":void 0},y=S?"primary600":"neutral600",W=S?"primary200":"neutral200",G=E==="M"?`${32/16}rem`:`${24/16}rem`,b=()=>{A||(D&&!R?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),D()):R&&R())},h=(0,t.jsx)(o.k,{justifyContent:"center",borderRadius:"50%",height:G,width:G,transform:S?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:W,cursor:A?"not-allowed":"pointer",onClick:b,shrink:0,children:(0,t.jsx)(a.J,{as:s.Z,width:E==="M"?`${11/16}rem`:`${8/16}rem`,color:S?"primary600":"neutral600"})});return(0,t.jsx)(f,{paddingBottom:N,paddingLeft:I,paddingRight:I,paddingTop:N,background:Z,expanded:S,size:E,justifyContent:"space-between",cursor:A?"not-allowed":"",children:(0,t.jsxs)(o.k,{gap:3,flex:1,maxWidth:"100%",children:[x==="left"&&h,(0,t.jsx)(m,{onClick:b,"aria-disabled":A,"aria-expanded":S,"aria-controls":L,"aria-labelledby":K,"data-strapi-accordion-toggle":!0,expanded:S,type:"button",flex:1,minWidth:0,...P,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.y,{...H,children:c}),v&&(0,t.jsx)(n.Z,{as:"p",id:V,textColor:y,children:v})]})}),x==="right"&&(0,t.jsxs)(o.k,{gap:3,children:[h,C]}),x==="left"&&C]})})}},60793:(T,g,e)=>{"use strict";e.d(g,{Z:()=>r});var t=e(85893);const s=i=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),r=s},5660:(T,g,e)=>{"use strict";e.d(g,{Z:()=>r});var t=e(85893);const s=i=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),r=s},59533:(T,g,e)=>{"use strict";e.d(g,{Z:()=>r});var t=e(85893);const s=i=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),r=s},4071:(T,g,e)=>{"use strict";e.d(g,{G$:()=>s,Gt:()=>m,MG:()=>t,MR:()=>p,T:()=>l,TP:()=>r,Vb:()=>u,Vv:()=>o,ZC:()=>n,gK:()=>i,wG:()=>a});const t="success-light",s="danger-light",r="default",i="tertiary",u="secondary",l="danger",p="success",a="ghost",o=[t,s],n=[r,i,u,l,p,a,...o],m=["S","M","L"]},62485:(T,g,e)=>{"use strict";e.d(g,{PD:()=>p,sg:()=>i,tB:()=>l,yP:()=>u});var t=e(4071),s=e(10574);const r=a=>a===t.MG||a===t.G$?`${a.substring(0,a.lastIndexOf("-"))}`:a===t.gK?"neutral":a===t.TP||a===t.Vb||t.ZC.every(o=>o!==a)?"primary":`${a}`,i=({theme:a})=>`
    border: 1px solid ${a.colors.neutral200};
    background: ${a.colors.neutral150};
    ${s.Z} {
      color: ${a.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${a.colors.neutral600};
      }
    }
  `,u=({theme:a,variant:o})=>[...t.Vv,t.Vb].includes(o)?`
      background-color: ${a.colors.neutral0};
    `:o===t.gK?`
      background-color: ${a.colors.neutral100};
    `:o===t.wG?`
      background-color: ${a.colors.neutral100};
    `:o===t.TP?`
      border: 1px solid ${a.colors.buttonPrimary500};
      background: ${a.colors.buttonPrimary500};
    `:`
    border: 1px solid ${a.colors[`${r(o)}500`]};
    background: ${a.colors[`${r(o)}500`]};
  `,l=({theme:a,variant:o})=>[...t.Vv,t.Vb].includes(o)?`
      background-color: ${a.colors.neutral0};
      border: 1px solid ${a.colors[`${r(o)}600`]};
      ${s.Z} {
        color: ${a.colors[`${r(o)}600`]};
      }
      svg {
        > g, path {
          fill: ${a.colors[`${r(o)}600`]};
        }
      }
    `:o===t.gK?`
      background-color: ${a.colors.neutral150};
    `:`
    border: 1px solid ${a.colors[`${r(o)}600`]};
    background: ${a.colors[`${r(o)}600`]};
  `,p=({theme:a,variant:o})=>{switch(o){case t.G$:case t.MG:case t.Vb:return`
          border: 1px solid ${a.colors[`${r(o)}200`]};
          background: ${a.colors[`${r(o)}100`]};
          ${s.Z} {
            color: ${a.colors[`${r(o)}700`]};
          }
          svg {
            > g, path {
              fill: ${a.colors[`${r(o)}700`]};
            }
          }
        `;case t.gK:return`
          border: 1px solid ${a.colors.neutral200};
          background: ${a.colors.neutral0};
          ${s.Z} {
            color: ${a.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${a.colors.neutral800};
            }
          }
        `;case t.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${s.Z} {
          color: ${a.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${a.colors.neutral500};
          }
        }
      `;case t.MR:case t.T:return`
          border: 1px solid ${a.colors[`${r(o)}600`]};
          background: ${a.colors[`${r(o)}600`]};
          ${s.Z} {
            color: ${a.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${a.colors.buttonNeutral0};
            }
          }
        `}}},94101:(T,g,e)=>{"use strict";e.d(g,{Q:()=>n});var t=e(85893),s=e(67294),r=e(88972),i=e(62485),u=e(20501),l=e(53342),p=e(96987),a=e(10574);const o=(0,r.ZP)(u.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${i.sg}
    &:active {
      ${i.sg}
    }
  }

  &:hover {
    ${i.yP}
  }

  &:active {
    ${i.tB}
  }

  ${i.PD}
`,n=s.forwardRef(({variant:m="default",startIcon:f,endIcon:d,disabled:c=!1,children:v,size:M="S",as:x=l.f,...C},P)=>{const R=M==="S"?2:"10px",D=4;return(0,t.jsxs)(o,{ref:P,"aria-disabled":c,size:M,variant:m,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:R,paddingLeft:D,paddingRight:D,paddingTop:R,pointerEvents:c?"none":void 0,...C,as:x||l.f,children:[f&&(0,t.jsx)(p.k,{"aria-hidden":!0,children:f}),(0,t.jsx)(a.Z,{variant:M==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:v}),d&&(0,t.jsx)(p.k,{"aria-hidden":!0,children:d})]})});n.displayName="LinkButton"}}]);
