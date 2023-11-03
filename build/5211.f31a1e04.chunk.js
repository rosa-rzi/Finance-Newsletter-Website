"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5211],{20501:(Z,E,e)=>{e.d(E,{G:()=>i,Y:()=>p});var n=e(85893),t=e(67294),x=e(88972),s=e(66362),d=e(96987);const i=(0,x.ZP)(d.k)`
  > svg {
    height: ${({theme:c})=>c.spaces[3]};
    width: ${({theme:c})=>c.spaces[3]};

    > g,
    path {
      fill: ${({theme:c})=>c.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${s.BF}
`,p=t.forwardRef(({disabled:c,children:h,background:l="neutral0",...g},B)=>(0,n.jsx)(i,{ref:B,"aria-disabled":c,as:"button",type:"button",disabled:c,padding:2,hasRadius:!0,background:l,borderColor:"neutral200",cursor:"pointer",...g,children:h}));p.displayName="BaseButton"},66362:(Z,E,e)=>{e.d(E,{BF:()=>s,k3:()=>x});var n=e(88972);const t=d=>({theme:i,size:p})=>i.sizes[d][p],x=(d="&")=>({theme:i,hasError:p=!1})=>(0,n.iv)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${d}:focus-within {
      border: 1px solid ${p?i.colors.danger600:i.colors.primary600};
      box-shadow: ${p?i.colors.danger600:i.colors.primary600} 0px 0px 0px 2px;
    }
  `,s=({theme:d})=>(0,n.iv)`
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
      border: 2px solid ${d.colors.primary600};
    }
  }
`},66712:(Z,E,e)=>{e.d(E,{m:()=>h});var n=e(85893),t=e(88972),x=e(33368),s=e(16607);const d=(0,t.ZP)(s.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:l})=>l}, 1fr);
  ${({theme:l,gap:g})=>(0,x.Z)("gap",g,l)}
`,i=l=>{const{gap:g="0",gridCols:B=12,...u}=l;return(0,n.jsx)(d,{gap:g,gridCols:B,...u})},p=`${232/16}rem`,c=(0,t.ZP)(i)`
  width: ${p};
  background: ${({theme:l})=>l.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:l})=>l.colors.neutral200};
  z-index: 1;
`,h=({ariaLabel:l,...g})=>(0,n.jsx)(c,{"aria-label":l,as:"nav",...g})},5330:(Z,E,e)=>{e.d(E,{p:()=>fr});var n=e(85893),t=e(67294),x=e(34759),s=e(88972);const d={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};var i=e(92058);const p=r=>{const o=(0,t.useRef)();return(0,t.useEffect)(()=>{o.current=r}),o.current};var c=e(26910),h=e(16607);const l=r=>(0,n.jsx)("form",{...r,role:"search"});var g=e(15800);function B(r,o){typeof r=="function"?r(o):r!=null&&(r.current=o)}function u(...r){return o=>r.forEach(a=>B(a,o))}function M(...r){return React.useCallback(u(...r),r)}var v=e(66362);const D=(0,t.createContext)({id:"",required:!1}),R=()=>(0,t.useContext)(D);var j=e(96987);const I={S:6.5,M:10.5},N=(0,t.forwardRef)(({endAction:r,startAction:o,disabled:a=!1,onChange:f,size:y="M",...P},$)=>{const{id:m,error:C,hint:b,name:T,required:S}=R();let O;C?O=`${m}-error`:b&&(O=`${m}-hint`);const A=Boolean(C),L=k=>{!a&&f&&f(k)};return(0,n.jsxs)(F,{justifyContent:"space-between",hasError:A,disabled:a,children:[o?(0,n.jsx)(h.x,{paddingLeft:3,paddingRight:2,children:o}):null,(0,n.jsx)(_,{id:m,name:T,ref:$,"aria-describedby":O,"aria-invalid":A,"aria-disabled":a,disabled:a,"data-disabled":a?"":void 0,hasLeftAction:Boolean(o),hasRightAction:Boolean(r),onChange:L,"aria-required":S,$size:y,...P}),r?(0,n.jsx)(h.x,{paddingLeft:2,paddingRight:3,children:r}):null]})}),_=s.ZP.input`
  border: none;
  border-radius: ${({theme:r})=>r.borderRadius};
  padding-bottom: ${({$size:r})=>`${I[r]/16}rem`};
  padding-left: ${({theme:r,hasLeftAction:o})=>o?0:r.spaces[4]};
  padding-right: ${({theme:r,hasRightAction:o})=>o?0:r.spaces[4]};
  padding-top: ${({$size:r})=>`${I[r]/16}rem`};
  cursor: ${r=>r["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:r})=>r.colors.neutral800};
  font-weight: 400;
  font-size: ${r=>r.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:r})=>r.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,F=(0,s.ZP)(j.k)`
  border: 1px solid ${({theme:r,hasError:o})=>o?r.colors.danger600:r.colors.neutral200};
  border-radius: ${({theme:r})=>r.borderRadius};
  background: ${({theme:r})=>r.colors.neutral0};
  ${(0,v.k3)()}

  ${({theme:r,disabled:o})=>o?(0,s.iv)`
          color: ${r.colors.neutral600};
          background: ${r.colors.neutral150};
        `:void 0}
`;var U=e(22304);const K=(0,s.ZP)(j.k)`
  font-size: 1.6rem;
  padding: 0;
`,z=(0,t.forwardRef)(({label:r,children:o,...a},f)=>(0,n.jsxs)(K,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...a,as:"button",ref:f,children:[(0,n.jsx)(U.T,{as:"span",children:r}),(0,t.cloneElement)(o,{"aria-hidden":!0,focusable:!1})]})),X=(0,t.forwardRef)(({children:r,name:o,error:a,hint:f,id:y,required:P=!1,...$},m)=>{const C=(0,i.M)(y),b=(0,t.useMemo)(()=>({name:o,id:C,error:a,hint:f,required:P}),[a,C,f,o,P]);return(0,n.jsx)(h.x,{ref:m,...$,children:(0,n.jsx)(D.Provider,{value:b,children:r})})}),J="[@strapi/design-system]:",Q=r=>{const o=r;let a=!1;if(typeof o!="function")throw new TypeError(`${J} once requires a function parameter`);return(...f)=>{a||(o(...f),a=!0)}};var G=e(10574);const q=Q(console.warn),rr=(0,t.forwardRef)(({children:r,action:o,required:a,...f},y)=>{const{id:P,required:$}=R(),m=$||a;return a!==void 0&&q('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,n.jsxs)(nr,{ref:y,variant:"pi",textColor:"neutral800",htmlFor:P,fontWeight:"bold",as:"label",...f,children:[r,m&&(0,n.jsx)(er,{textColor:"danger600",children:"*"}),o&&(0,n.jsx)(or,{marginLeft:1,children:o})]})}),nr=(0,s.ZP)(G.Z)`
  display: flex;
  align-items: center;
`,er=(0,s.ZP)(G.Z)`
  line-height: 0;
`,or=(0,s.ZP)(j.k)`
  line-height: 0;

  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,tr=(0,s.ZP)(g.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral400};
  }
`,V=(0,s.ZP)(x.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral800};
  }
`,sr=s.ZP.div`
  border-radius: ${({theme:r})=>r.borderRadius};
  box-shadow: ${({theme:r})=>r.shadows.filterShadow};

  &:focus-within {
    ${V} {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }

  ${F} {
    border: 1px solid transparent;
  }

  ${(0,v.k3)(F)}
`,ar=(0,t.forwardRef)(({name:r,size:o="M",children:a,value:f="",onClear:y,clearLabel:P,...$},m)=>{const C=(0,t.useRef)(null),b=f.length>0,T=O=>{y(O),C.current.focus()},S=u(m,C);return(0,n.jsx)(sr,{children:(0,n.jsxs)(X,{name:r,children:[(0,n.jsx)(U.T,{children:(0,n.jsx)(rr,{children:a})}),(0,n.jsx)(N,{ref:S,value:f,startAction:(0,n.jsx)(V,{"aria-hidden":!0}),size:o,endAction:b?(0,n.jsx)(z,{label:P,onClick:T,children:(0,n.jsx)(tr,{})}):void 0,...$})]})})});var ir=e(79838),lr=e(20501);const dr="tertiary",w="secondary",cr=["S","M","L"],ur=[dr,w],pr=t.forwardRef(({label:r,background:o,borderWidth:a,noBorder:f=!1,children:y,icon:P,disabled:$=!1,onClick:m,size:C=cr[0],"aria-label":b,variant:T=ur[0],...S},O)=>{const A=k=>{!$&&m&&m(k)},L=(0,n.jsxs)(H,{"aria-disabled":$,background:$?"neutral150":o,borderWidth:f?0:a,justifyContent:"center",...S,ref:O,size:C,onClick:A,variant:T,children:[(0,n.jsx)(U.T,{as:"span",children:r??b}),t.cloneElement(P||y,{"aria-hidden":!0,focusable:!1})]});return r?(0,n.jsx)(ir.u,{label:r,children:L}):L}),H=(0,s.ZP)(lr.Y)`
  background-color: ${({theme:r,variant:o})=>{if(o===w)return r.colors.primary100}};
  border-color: ${({theme:r,variant:o})=>o===w?r.colors.primary200:r.colors.neutral200};
  height: ${({theme:r,size:o})=>r.sizes.button[o]};
  width: ${({theme:r,size:o})=>r.sizes.button[o]};

  svg {
    g,
    path {
      fill: ${({theme:r,variant:o})=>o===w?r.colors.primary500:r.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:r,variant:o})=>o===w?r.colors.primary600:r.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral600};
      }
    }
  }
`,vr=(0,s.ZP)(j.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-radius: ${({theme:r})=>`${r.borderRadius} 0 0 ${r.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:r})=>`0 ${r.borderRadius} ${r.borderRadius} 0`};
  }

  & ${H} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:r})=>r.colors.neutral100};

      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:r})=>r.colors.neutral150};
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral600};
        }
      }
    }
  }
`,Y=(0,s.ZP)(c.i)`
  width: ${24/16}rem;
  background-color: ${({theme:r})=>r.colors.neutral200};
`,fr=({as:r="h2",label:o,searchLabel:a="",searchable:f=!1,onChange:y=()=>{},value:P="",onClear:$=()=>{},onSubmit:m=()=>{},id:C})=>{const[b,T]=(0,t.useState)(!1),S=p(b),O=(0,i.M)(C),A=(0,t.useRef)(void 0),L=(0,t.useRef)(void 0);(0,t.useEffect)(()=>{b&&A.current&&A.current.focus(),S&&!b&&L.current&&L.current.focus()},[b,S]);const k=()=>{T(W=>!W)},hr=W=>{$(W),A.current.focus()},xr=W=>{W.relatedTarget?.id!==O&&T(!1)},gr=W=>{W.key===d.ESCAPE&&T(!1)};return b?(0,n.jsxs)(h.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,n.jsx)(l,{children:(0,n.jsx)(ar,{name:"searchbar",value:P,onChange:y,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:gr,ref:A,onBlur:xr,onClear:hr,onSubmit:m,clearLabel:"Clear",size:"S",children:a})}),(0,n.jsx)(h.x,{paddingLeft:2,paddingTop:4,children:(0,n.jsx)(Y,{})})]}):(0,n.jsxs)(h.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,n.jsxs)(j.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,n.jsx)(G.Z,{variant:"beta",as:r,children:o}),f&&(0,n.jsx)(pr,{ref:L,onClick:k,label:a,icon:(0,n.jsx)(x.Z,{})})]}),(0,n.jsx)(h.x,{paddingTop:4,children:(0,n.jsx)(Y,{})})]})}},36636:(Z,E,e)=>{e.d(E,{E:()=>B});var n=e(85893),t=e(67294),x=e(22534),s=e(88972),d=e(16607),i=e(10574),p=e(96987),c=e(53342);const h=(0,s.ZP)(d.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:u})=>u.colors.neutral800};
  svg > * {
    fill: ${({theme:u})=>u.colors.neutral600};
  }

  &.active {
    ${({theme:u})=>`
      background-color: ${u.colors.primary100};
      border-right: 2px solid ${u.colors.primary600};
      svg > * {
        fill: ${u.colors.primary700};
      }
      ${i.Z} {
        color: ${u.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,l=(0,s.ZP)(x.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:u,$active:M})=>M?u.colors.primary600:u.colors.neutral600};
  }
`,g=s.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,B=t.forwardRef(({children:u,icon:M=null,withBullet:v=!1,as:D=c.f,isSubSectionChild:R=!1,...j},I)=>(0,n.jsxs)(h,{as:D,icon:M,background:"neutral100",paddingLeft:R?9:7,paddingBottom:2,paddingTop:2,ref:I,...j,children:[(0,n.jsxs)(p.k,{children:[M?(0,n.jsx)(g,{children:M}):(0,n.jsx)(l,{}),(0,n.jsx)(d.x,{paddingLeft:2,children:(0,n.jsx)(i.Z,{as:"span",children:u})})]}),v&&(0,n.jsx)(d.x,{as:p.k,paddingRight:4,children:(0,n.jsx)(l,{$active:!0})})]}))},21660:(Z,E,e)=>{e.d(E,{D:()=>M});var n=e(85893),t=e(67294),x=e(88972),s=e(21514),d=e(96987),i=e(16607),p=e(10574);const c=(0,x.ZP)(d.k)`
  border: none;
  padding: 0;
  background: transparent;
`,h=x.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:v})=>v?"0deg":"180deg"});
`,l=({collapsable:v=!1,label:D,onClick:R=()=>{},ariaExpanded:j,ariaControls:I})=>v?(0,n.jsxs)(c,{as:"button",onClick:R,"aria-expanded":j,"aria-controls":I,textAlign:"left",children:[(0,n.jsx)(i.x,{paddingRight:1,children:(0,n.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:D})}),v&&(0,n.jsx)(h,{rotated:j,children:(0,n.jsx)(s.Z,{"aria-hidden":!0})})]}):(0,n.jsx)(c,{children:(0,n.jsx)(i.x,{paddingRight:1,children:(0,n.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:D})})});var g=e(92058),B=e(18787);const u=(0,x.ZP)(i.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:v})=>v.colors.neutral500};
    }
  }
`,M=({collapsable:v=!1,label:D,badgeLabel:R,children:j,id:I})=>{const[N,_]=(0,t.useState)(!0),F=(0,g.M)(I),U=()=>{_(K=>!K)};return(0,n.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(u,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsxs)(i.x,{position:"relative",paddingRight:R?6:0,children:[(0,n.jsx)(l,{onClick:U,ariaExpanded:N,ariaControls:F,collapsable:v,label:D}),R&&(0,n.jsx)(B.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:R})]})}),(!v||N)&&(0,n.jsx)("ol",{id:F,children:t.Children.map(j,(K,z)=>(0,n.jsx)("li",{children:K},z))})]})}},61499:(Z,E,e)=>{e.d(E,{Z:()=>d});var n=e(85893),t=e(67294),x=e(16607),s=e(96987);const d=({children:i,spacing:p=2,horizontal:c=!1,...h})=>(0,n.jsx)(x.x,{paddingTop:2,paddingBottom:4,children:(0,n.jsx)(s.k,{as:"ol",gap:p,direction:c?"row":"column",alignItems:c?"center":"stretch",...h,children:t.Children.map(i,(l,g)=>(0,n.jsx)("li",{children:l},g))})})}}]);
