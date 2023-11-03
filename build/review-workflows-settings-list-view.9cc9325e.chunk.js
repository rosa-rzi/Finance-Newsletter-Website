"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[349],{52713:(O,g,t)=>{t.d(g,{r:()=>u});var e=t(67294),s=t(50781),r=t(45697),i=t.n(r),f=t(99168);function c(n,o,a){if(!n||!o)return{display:"none"};const{x:l,y:d}=a;return{transform:`translate(${l}px, ${d}px)`}}function u({renderItem:n}){const{itemType:o,isDragging:a,item:l,initialOffset:d,currentOffset:v,mouseOffset:y}=(0,f.useDragLayer)(w=>({item:w.getItem(),itemType:w.getItemType(),initialOffset:w.getInitialSourceClientOffset(),currentOffset:w.getSourceClientOffset(),isDragging:w.isDragging(),mouseOffset:w.getClientOffset()}));return a?e.createElement(s.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},e.createElement(s.x,{style:c(d,v,y)},n({type:o,item:l}))):null}u.propTypes={renderItem:i().func.isRequired}},75021:(O,g,t)=>{t.d(g,{q:()=>i});var e=t(67294),s=t(81252),r=t(88767);function i({enabled:f}={enabled:!0}){const{get:c}=(0,s.kY)(),{data:u,isError:n,isLoading:o}=(0,r.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:d}}=await c("/admin/license-limit-information");return d},{enabled:f}),a=e.useMemo(()=>u??{},[u]),l=e.useCallback(d=>(a?.features??[]).find(y=>y.name===d)?.options??{},[a?.features]);return{license:a,getFeature:l,isError:n,isLoading:o}}},43390:(O,g,t)=>{t.d(g,{eJ:()=>A,lx:()=>M,h4:()=>T,fC:()=>$});var e=t(67294),s=t(45349),r=t(57713),i=t(26789),f=t(79371),c=t(81252),u=t(60793),n=t(86896),o=t(52713),a=t(86978),l=t(75878),d=t(78549),v=t(21514),y=t(45697),w=t.n(y),h=t(88972);const S=(0,h.ZP)(l.k)`
  svg path {
    fill: ${({theme:p})=>p.colors.neutral600};
  }
`;function D({name:p}){return e.createElement(l.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,c.Q1)(300)},e.createElement(S,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(v.Z,{width:`${8/16}rem`})),e.createElement(d.Z,{fontWeight:"bold"},p))}D.propTypes={name:w().string.isRequired};function C({type:p,item:L}){switch(p){case a.uL.STAGE:return e.createElement(D,{...L});default:return null}}function M(){return e.createElement(o.r,{renderItem:C})}function $({children:p}){return e.createElement(s.A,null,e.createElement(r.o,{tabIndex:-1},e.createElement(i.D,null,p)))}function A({href:p}){const{formatMessage:L}=(0,n.Z)();return e.createElement(c.rU,{startIcon:e.createElement(u.Z,null),to:p},L({id:"global.back",defaultMessage:"Back"}))}function T({title:p,subtitle:L,navigationAction:R,primaryAction:P}){return e.createElement(e.Fragment,null,e.createElement(c.SL,{name:p}),e.createElement(f.T,{navigationAction:R,primaryAction:P,title:p,subtitle:L}))}},38705:(O,g,t)=>{t.d(g,{uT:()=>C,fC:()=>A,Dx:()=>D});var e=t(67294),s=t(78549),r=t(75878),i=t(60881),f=t(48683),c=t(50781),u=t(37527),n=t(94101),o=t(15800),a=t(45697),l=t.n(a),d=t(86896),v=t(88972);const y=t.p+"0cd5f8915b265d5b1856.png",w="limits-title",h="https://strapi.io/pricing-cloud",S="https://strapi.io/contact-sales";function D({children:T}){return e.createElement(s.Z,{variant:"alpha",id:w},T)}D.propTypes={children:l().node.isRequired};function C({children:T}){return e.createElement(s.Z,{variant:"omega"},T)}C.propTypes={children:l().node.isRequired};function M(){const{formatMessage:T}=(0,d.Z)();return e.createElement(r.k,{gap:2,paddingTop:4},e.createElement(n.Q,{variant:"default",isExternal:!0,href:h},T({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(n.Q,{variant:"tertiary",isExternal:!0,href:S},T({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const $=v.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:T})=>`-${T.spaces[7]}`};
  margin-top: ${({theme:T})=>`-${T.spaces[7]}`};
  width: 360px;
`;function A({children:T,isOpen:p,onClose:L}){const{formatMessage:R}=(0,d.Z)();return p?e.createElement(i.P,{labelledBy:w},e.createElement(f.f,null,e.createElement(r.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(r.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},T,e.createElement(M,null)),e.createElement(r.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement($,{src:y,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(c.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(u.h,{icon:e.createElement(o.Z,null),"aria-label":R({id:"global.close",defaultMessage:"Close"}),onClick:L})))))):null}A.defaultProps={isOpen:!1},A.propTypes={children:l().node.isRequired,isOpen:l().bool,onClose:l().func.isRequired}},86978:(O,g,t)=>{t.d(g,{$k:()=>n,Ef:()=>v,FT:()=>l,Nj:()=>u,Ot:()=>c,VS:()=>o,_X:()=>y,gu:()=>r,lv:()=>a,qZ:()=>i,sN:()=>s,uL:()=>d,x4:()=>f});var e=t(20468);const s="settings_review-workflows",r="Settings/Review_Workflows/RESET_WORKFLOW",i="Settings/Review_Workflows/SET_WORKFLOW",f="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",c="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",u="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",n="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",o="Settings/Review_Workflows/WORKFLOW_UPDATE",a={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},l=e.W.colors.primary600,d={STAGE:"stage"},v="numberOfWorkflows",y="stagesPerWorkflow"},52258:(O,g,t)=>{t.d(g,{n:()=>r});var e=t(81252),s=t(88767);function r(i={}){const{get:f}=(0,e.kY)(),{id:c="",...u}=i,n={populate:"stages"},{data:o,isLoading:a,status:l,refetch:d}=(0,s.useQuery)(["review-workflows","workflows",c],async()=>(await f(`/admin/review-workflows/workflows/${c}`,{params:{...n,...u}})).data);let v=[];return c&&o?.data?v=[o.data]:Array.isArray(o?.data)&&(v=o.data),{meta:o?.meta??{},workflows:v,isLoading:a,status:l,refetch:d}}},26259:(O,g,t)=>{t.r(g),t.d(g,{default:()=>X});var e=t(67294),s=t(81252),r=t(86706),i=t(36364),f=t(75878),c=t(28809),u=t(51541),n=t(62009),o=t(42403),a=t(6090),l=t(62351),d=t(78549),v=t(22996),y=t(94487),w=t(37527),h=t(12978),S=t(36670),D=t(34263),C=t(86896),M=t(88767),$=t(16550),A=t(88972),T=t(92686),p=t(75021),L=t(43390),R=t(38705),P=t(86978),H=t(52258);const Q=(0,A.ZP)(s.rU)`
  align-items: center;
  height: ${(0,s.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:E})=>`${E.spaces[2]}}`};
  width: ${(0,s.Q1)(32)};

  svg {
    height: ${(0,s.Q1)(12)};
    width: ${(0,s.Q1)(12)};

    path {
      fill: ${({theme:E})=>E.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:E})=>E.colors.neutral800};
      }
    }
  }
`;function Y(){const{formatMessage:E}=(0,C.Z)(),{push:U}=(0,$.k6)(),{collectionTypes:z,singleTypes:J,isLoading:_}=(0,T.G)(),{meta:x,workflows:j,isLoading:k,refetch:q}=(0,H.n)(),[G,K]=e.useState(null),[ee,I]=e.useState(!1),{del:te}=(0,s.kY)(),{formatAPIError:ne}=(0,s.So)(),N=(0,s.lm)(),{getFeature:oe,isLoading:F}=(0,p.q)(),{trackUsage:b}=(0,s.rS)(),se=(0,r.v9)(i._),{allowedActions:{canCreate:V,canDelete:re}}=(0,s.ss)(se.settings["review-workflows"]),W=oe("review-workflows"),{mutateAsync:le,isLoading:ae}=(0,M.useMutation)(async({workflowId:m,stages:B})=>{const{data:{data:Z}}=await te(`/admin/review-workflows/workflows/${m}`,{data:B});return Z},{onSuccess(){N({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),ie=m=>[...z,...J].find(Z=>Z.uid===m).info.displayName,de=m=>{K(m)},ce=()=>{K(null)},ue=async()=>{try{const m=await le({workflowId:G});return await q(),K(null),m}catch(m){return N({type:"warning",message:ne(m)}),null}};return e.useEffect(()=>{!k&&!F&&W?.[P.Ef]&&x?.workflowCount>parseInt(W[P.Ef],10)&&I(!0)},[F,k,W,x?.workflowCount,x.workflowsTotal]),e.createElement(e.Fragment,null,e.createElement(L.h4,{primaryAction:V&&e.createElement(s.Qj,{startIcon:e.createElement(h.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:m=>{W?.[P.Ef]&&x?.workflowCount>=parseInt(W[P.Ef],10)?(m.preventDefault(),I(!0)):b("willCreateWorkflow")}},E({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:E({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:E({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.createElement(L.fC,null,k||_?e.createElement(f.k,{justifyContent:"center"},e.createElement(c.a,null,E({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):e.createElement(u.i,{colCount:3,footer:V&&e.createElement(n.c,{icon:e.createElement(h.Z,null),onClick:()=>{W?.[P.Ef]&&x?.workflowCount>=parseInt(W[P.Ef],10)?I(!0):(U("/settings/review-workflows/create"),b("willCreateWorkflow"))}},E({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},e.createElement(o.h,null,e.createElement(a.Tr,null,e.createElement(l.Th,null,e.createElement(d.Z,{variant:"sigma"},E({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),e.createElement(l.Th,null,e.createElement(d.Z,{variant:"sigma"},E({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),e.createElement(l.Th,null,e.createElement(d.Z,{variant:"sigma"},E({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),e.createElement(l.Th,null,e.createElement(v.T,null,E({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),e.createElement(y.p,null,j.map(m=>e.createElement(a.Tr,{...(0,s.X7)({fn(B){B.target.nodeName!=="BUTTON"&&U(`/settings/review-workflows/${m.id}`)}}),key:`workflow-${m.id}`},e.createElement(l.Td,{width:(0,s.Q1)(250)},e.createElement(d.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},m.name)),e.createElement(l.Td,null,e.createElement(d.Z,{textColor:"neutral800"},m.stages.length)),e.createElement(l.Td,null,e.createElement(d.Z,{textColor:"neutral800"},(m?.contentTypes??[]).map(ie).join(", "))),e.createElement(l.Td,null,e.createElement(f.k,{alignItems:"center",justifyContent:"end"},e.createElement(Q,{to:`/settings/review-workflows/${m.id}`,"aria-label":E({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:m.name})},e.createElement(S.Z,null)),j.length>1&&re&&e.createElement(w.h,{"aria-label":E({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:e.createElement(D.Z,null),noBorder:!0,onClick:()=>{de(m.id)}}))))))),e.createElement(s.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ae,isOpen:!!G,onToggleDialog:ce,onConfirm:ue}),e.createElement(R.fC,{isOpen:ee,onClose:()=>I(!1)},e.createElement(R.Dx,null,E({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(R.uT,null,E({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function X(){const E=(0,r.v9)(i._);return e.createElement(s.O4,{permissions:E.settings["review-workflows"].main},e.createElement(Y,null))}},62009:(O,g,t)=>{t.d(g,{c:()=>o});var e=t(85893),s=t(88972),r=t(50781),i=t(81984),f=t(75878),c=t(78549);const u=(0,s.ZP)(r.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.primary600};
  }
`,n=(0,s.ZP)(r.x)`
  border-radius: 0 0 ${({theme:a})=>a.borderRadius} ${({theme:a})=>a.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,o=({children:a,icon:l,...d})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(i.i,{}),(0,e.jsx)(n,{as:"button",background:"primary100",padding:5,...d,children:(0,e.jsxs)(f.k,{children:[(0,e.jsx)(u,{"aria-hidden":!0,background:"primary200",children:l}),(0,e.jsx)(r.x,{paddingLeft:3,children:(0,e.jsx)(c.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:a})})]})})]})},60793:(O,g,t)=>{t.d(g,{Z:()=>r});var e=t(85893);const s=i=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),r=s},4071:(O,g,t)=>{t.d(g,{G$:()=>s,Gt:()=>l,MG:()=>e,MR:()=>u,T:()=>c,TP:()=>r,Vb:()=>f,Vv:()=>o,ZC:()=>a,gK:()=>i,wG:()=>n});const e="success-light",s="danger-light",r="default",i="tertiary",f="secondary",c="danger",u="success",n="ghost",o=[e,s],a=[r,i,f,c,u,n,...o],l=["S","M","L"]},62485:(O,g,t)=>{t.d(g,{PD:()=>u,sg:()=>i,tB:()=>c,yP:()=>f});var e=t(4071),s=t(10574);const r=n=>n===e.MG||n===e.G$?`${n.substring(0,n.lastIndexOf("-"))}`:n===e.gK?"neutral":n===e.TP||n===e.Vb||e.ZC.every(o=>o!==n)?"primary":`${n}`,i=({theme:n})=>`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    ${s.Z} {
      color: ${n.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${n.colors.neutral600};
      }
    }
  `,f=({theme:n,variant:o})=>[...e.Vv,e.Vb].includes(o)?`
      background-color: ${n.colors.neutral0};
    `:o===e.gK?`
      background-color: ${n.colors.neutral100};
    `:o===e.wG?`
      background-color: ${n.colors.neutral100};
    `:o===e.TP?`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:`
    border: 1px solid ${n.colors[`${r(o)}500`]};
    background: ${n.colors[`${r(o)}500`]};
  `,c=({theme:n,variant:o})=>[...e.Vv,e.Vb].includes(o)?`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${r(o)}600`]};
      ${s.Z} {
        color: ${n.colors[`${r(o)}600`]};
      }
      svg {
        > g, path {
          fill: ${n.colors[`${r(o)}600`]};
        }
      }
    `:o===e.gK?`
      background-color: ${n.colors.neutral150};
    `:`
    border: 1px solid ${n.colors[`${r(o)}600`]};
    background: ${n.colors[`${r(o)}600`]};
  `,u=({theme:n,variant:o})=>{switch(o){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${n.colors[`${r(o)}200`]};
          background: ${n.colors[`${r(o)}100`]};
          ${s.Z} {
            color: ${n.colors[`${r(o)}700`]};
          }
          svg {
            > g, path {
              fill: ${n.colors[`${r(o)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${n.colors.neutral200};
          background: ${n.colors.neutral0};
          ${s.Z} {
            color: ${n.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${n.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${s.Z} {
          color: ${n.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${n.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${n.colors[`${r(o)}600`]};
          background: ${n.colors[`${r(o)}600`]};
          ${s.Z} {
            color: ${n.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${n.colors.buttonNeutral0};
            }
          }
        `}}},94101:(O,g,t)=>{t.d(g,{Q:()=>a});var e=t(85893),s=t(67294),r=t(88972),i=t(62485),f=t(20501),c=t(53342),u=t(96987),n=t(10574);const o=(0,r.ZP)(f.G)`
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
`,a=s.forwardRef(({variant:l="default",startIcon:d,endIcon:v,disabled:y=!1,children:w,size:h="S",as:S=c.f,...D},C)=>{const M=h==="S"?2:"10px",$=4;return(0,e.jsxs)(o,{ref:C,"aria-disabled":y,size:h,variant:l,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:M,paddingLeft:$,paddingRight:$,paddingTop:M,pointerEvents:y?"none":void 0,...D,as:S||c.f,children:[d&&(0,e.jsx)(u.k,{"aria-hidden":!0,children:d}),(0,e.jsx)(n.Z,{variant:h==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:w}),v&&(0,e.jsx)(u.k,{"aria-hidden":!0,children:v})]})});a.displayName="LinkButton"}}]);
