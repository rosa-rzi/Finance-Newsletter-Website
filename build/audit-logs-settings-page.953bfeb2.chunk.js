"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2812],{54920:(R,p,t)=>{t.d(p,{R:()=>L});var e=t(81252),s=t(88767);function L(g={},h={}){const{id:f="",...d}=g,{get:P}=(0,e.kY)(),{data:E,isError:D,isLoading:v,refetch:C}=(0,s.useQuery)(["users",f,d],async()=>{const{data:{data:O}}=await P(`/admin/users/${f}`,{params:d});return O},h);let M=[];return f&&E?M=[E]:Array.isArray(E?.results)&&(M=E.results),{users:M,pagination:E?.pagination??null,isLoading:v,isError:D,refetch:C}}},71359:(R,p,t)=>{t.d(p,{Z:()=>D});var e=t(67294),s=t(50781),L=t(19442),g=t(81252),h=t(36002),f=t(45697),d=t.n(f),P=t(86896);const E=({displayedFilters:v})=>{const[C,M]=(0,e.useState)(!1),{formatMessage:O}=(0,P.Z)(),x=(0,e.useRef)(),b=()=>{M(Z=>!Z)};return e.createElement(e.Fragment,null,e.createElement(s.x,{paddingTop:1,paddingBottom:1},e.createElement(L.z,{variant:"tertiary",ref:x,startIcon:e.createElement(h.Z,null),onClick:b,size:"S"},O({id:"app.utils.filters",defaultMessage:"Filters"})),C&&e.createElement(g.J5,{displayedFilters:v,isVisible:C,onToggle:b,source:x})),e.createElement(g.W$,{filtersSchema:v}))};E.propTypes={displayedFilters:d().arrayOf(d().shape({name:d().string.isRequired,metadatas:d().shape({label:d().string}),fieldSchema:d().shape({type:d().string})})).isRequired};const D=E},67220:(R,p,t)=>{t.r(p),t.d(p,{default:()=>he});var e=t(67294),s=t(81252),L=t(86706),g=t(36364),h=t(45349),f=t(26789),d=t(50781),P=t(57713),E=t(79371),D=t(15483),v=t(86896),C=t(71359),M=t(88767),O=t(16550),x=t(54920);const Z=({canReadAuditLogs:a,canReadUsers:m})=>{const{get:c}=(0,s.kY)(),{search:i}=(0,O.TH)(),u=(0,s.lm)(),[{query:l}]=(0,s.Kx)(),n={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:T=>u({type:"warning",message:T.message})},{users:r,isError:y,isLoading:A}=(0,x.R)({},{...n,enabled:m,staleTime:2*(1e3*60)}),{data:S,isLoading:F,isError:j}=(0,M.useQuery)(["auditLogs",i],async()=>{const{data:T}=await c("/admin/audit-logs",{params:l});return T},{...n,enabled:a});return{auditLogs:S,users:r,isLoading:A||F,hasError:j||y}};var w=t(60881),k=t(18189),q=t(48683),_=t(82392),ee=t(75071),te=t(45697),o=t.n(te),ae=t(23855);const H=()=>{const{formatDate:a}=(0,v.Z)();return c=>{const i=(0,ae.Z)(c),u=a(i,{dateStyle:"long"}),l=a(i,{timeStyle:"medium",hourCycle:"h24"});return`${u}, ${l}`}};var U=t(75878),se=t(28809),B=t(78549),ne=t(9370),oe=t(85428);const z={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},W=a=>z[a]||a,Q=({actionLabel:a,actionName:m})=>e.createElement(U.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(B.Z,{textColor:"neutral600",variant:"sigma"},a),e.createElement(B.Z,{textColor:"neutral600"},m));Q.propTypes={actionLabel:o().string.isRequired,actionName:o().string.isRequired};const I=Q,K=({status:a,data:m,formattedDate:c})=>{const{formatMessage:i}=(0,v.Z)();if(a==="loading")return e.createElement(U.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(se.a,null,"Loading content..."));const{action:u,user:l,payload:n}=m;return e.createElement(e.Fragment,null,e.createElement(d.x,{marginBottom:3},e.createElement(B.Z,{variant:"delta",id:"title"},i({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(ne.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(I,{actionLabel:i({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:i({id:`Settings.permissions.auditLogs.${u}`,defaultMessage:W(u)},{model:n?.model})}),e.createElement(I,{actionLabel:i({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:c}),e.createElement(I,{actionLabel:i({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:l?.displayName||"-"}),e.createElement(I,{actionLabel:i({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:l?.id.toString()||"-"})),e.createElement(oe.V,{value:JSON.stringify(n,null,2),disabled:!0,label:i({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};K.defaultProps={data:{}},K.propTypes={status:o().oneOf(["idle","loading","error","success"]).isRequired,data:o().shape({action:o().string,date:o().string,payload:o().object,user:o().object}),formattedDate:o().string.isRequired};const ie=K,Y=({handleClose:a,logId:m})=>{const{get:c}=(0,s.kY)(),i=(0,s.lm)(),u=async A=>{const{data:S}=await c(`/admin/audit-logs/${A}`);if(!S)throw new Error("Audit log not found");return S},{data:l,status:n}=(0,M.useQuery)(["audit-log",m],()=>u(m),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),r=H(),y=l?r(l.date):"";return e.createElement(w.P,{onClose:a,labelledBy:"title"},e.createElement(k.x,null,e.createElement(_.O,{label:y,id:"title"},e.createElement(ee.$,{isCurrent:!0},y))),e.createElement(q.f,null,e.createElement(ie,{status:n,data:l,formattedDate:y})))};Y.propTypes={handleClose:o().func.isRequired,logId:o().string.isRequired};const re=Y,$=({pagination:a})=>e.createElement(d.x,{paddingTop:4},e.createElement(U.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(s.v4,null),e.createElement(s.tU,{pagination:a})));$.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},$.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};const le=$;var de=t(94487),me=t(6090),J=t(62351),ue=t(37527),ce=t(2953);const N=({headers:a,rows:m,onOpenModal:c})=>{const{formatMessage:i}=(0,v.Z)(),u=H(),l=({type:n,value:r,model:y})=>n==="date"?u(r):n==="action"?i({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:W(r)},{model:y}):r||"-";return e.createElement(de.p,null,m.map(n=>e.createElement(me.Tr,{key:n.id,...(0,s.X7)({fn:()=>c(n.id)})},a.map(({key:r,name:y,cellFormatter:A})=>e.createElement(J.Td,{key:r},e.createElement(B.Z,{textColor:"neutral800"},l({type:r,value:A?A(n[y]):n[y],model:n.payload?.model})))),e.createElement(J.Td,{...s.UW},e.createElement(U.k,{justifyContent:"end"},e.createElement(ue.h,{onClick:()=>c(n.id),"aria-label":i({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${n.action} action`}),noBorder:!0,icon:e.createElement(ce.Z,null)}))))))};N.defaultProps={rows:[]},N.propTypes={headers:o().array.isRequired,rows:o().array,onOpenModal:o().func.isRequired};const ge=N;var pe=t(63122),fe=t(85612);const V=({value:a,options:m,onChange:c})=>{const{formatMessage:i}=(0,v.Z)(),u=i({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(pe.hQ,{"aria-label":u,value:a,onChange:c},m.map(({label:l,customValue:n})=>e.createElement(fe.O,{key:n,value:n},l)))};V.defaultProps={value:null},V.propTypes={value:o().string,options:o().arrayOf(o().shape({label:o().string.isRequired,customValue:o().string.isRequired}).isRequired).isRequired,onChange:o().func.isRequired};const X=V,G=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],Ee=({formatMessage:a,users:m,canReadUsers:c})=>{const i=Object.keys(z).map(l=>({label:a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:W(l)},{model:void 0}),customValue:l})),u=[{name:"action",metadatas:{customOperators:G,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:i,customInput:X},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(c&&m){const l=r=>r.username?r.username:r.firstname&&r.lastname?a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:r.firstname,lastname:r.lastname}):r.email,n=m.map(r=>({label:l(r),customValue:r.id.toString()}));return[...u,{name:"user",metadatas:{customOperators:G,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:n,customInput:X},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return u},ye=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.displayName:""}],Le=()=>{const{formatMessage:a}=(0,v.Z)(),m=(0,L.v9)(g._),{allowedActions:{canRead:c,canReadUsers:i}}=(0,s.ss)({...m.settings.auditLogs,readUsers:m.settings.users.read}),[{query:u},l]=(0,s.Kx)(),{auditLogs:n,users:r,isLoading:y,hasError:A}=Z({canReadAuditLogs:c,canReadUsers:i});(0,s.go)();const S=Ee({formatMessage:a,users:r,canReadUsers:i}),F=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),j=ye.map(T=>({...T,metadatas:{...T.metadatas,label:a(T.metadatas.label)}}));return A?e.createElement(h.A,null,e.createElement(f.D,null,e.createElement(d.x,{paddingTop:8},e.createElement(s.Hn,null)))):e.createElement(P.o,{"aria-busy":y},e.createElement(s.SL,{name:F}),e.createElement(E.T,{title:F,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(D.Z,{startActions:e.createElement(C.Z,{displayedFilters:S})}),e.createElement(f.D,{canRead:c},e.createElement(s.tM,{contentType:"Audit logs",headers:j,rows:n?.results||[],withBulkActions:!0,isLoading:y},e.createElement(ge,{headers:j,rows:n?.results||[],onOpenModal:T=>l({id:T})})),e.createElement(le,{pagination:n?.pagination})),u?.id&&e.createElement(re,{handleClose:()=>l({id:null},"remove"),logId:u.id}))},he=()=>{const a=(0,L.v9)(g._);return e.createElement(s.O4,{permissions:a.settings.auditLogs.main},e.createElement(Le,null))}},85612:(R,p,t)=>{t.d(p,{O:()=>s});var e=t(63122);const s=e.Wx},15483:(R,p,t)=>{t.d(p,{Z:()=>L});var e=t(85893),s=t(75878);const L=({startActions:g,endActions:h})=>!g&&!h?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:g}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:h})]})},82392:(R,p,t)=>{t.d(p,{O:()=>E});var e=t(85893),s=t(67294),L=t(88972),g=t(16607),h=t(10574);const f=()=>(0,e.jsx)(g.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(h.Z,{variant:"pi",textColor:"neutral500",children:"/"})});f.displayName="Divider";var d=t(96987);const P=(0,L.ZP)(d.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:D})=>`calc(-1*${D.spaces[2]})`};
  }
`,E=({label:D,children:v,...C})=>{const M=s.Children.toArray(v);return(0,e.jsx)(g.x,{"aria-label":D,...C,children:(0,e.jsx)(P,{as:"ol",children:s.Children.map(M,(O,x)=>{const b=M.length>1&&x+1<M.length;return(0,e.jsxs)(d.k,{inline:!0,as:"li",children:[O,b&&(0,e.jsx)(f,{})]})})})})};E.displayName="Breadcrumbs"},75071:(R,p,t)=>{t.d(p,{$:()=>g});var e=t(85893),s=t(16607),L=t(10574);const g=({children:h,isCurrent:f=!1,...d})=>(0,e.jsx)(s.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)(L.Z,{variant:"pi",textColor:"neutral800",fontWeight:f?"bold":"normal","aria-current":f,...d,children:h})});g.displayName="Crumb"}}]);