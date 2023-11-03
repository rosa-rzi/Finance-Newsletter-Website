"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5013],{75021:(u,o,t)=>{t.d(o,{q:()=>r});var s=t(67294),c=t(81252),i=t(88767);function r({enabled:m}={enabled:!0}){const{get:M}=(0,c.kY)(),{data:l,isError:_,isLoading:E}=(0,i.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:a}}=await M("/admin/license-limit-information");return a},{enabled:m}),e=s.useMemo(()=>l??{},[l]),n=s.useCallback(a=>(e?.features??[]).find(d=>d.name===a)?.options??{},[e?.features]);return{license:e,getFeature:n,isError:_,isLoading:E}}},65013:(u,o,t)=>{t.r(o),t.d(o,{AdminSeatInfoEE:()=>g});var s=t(67294),c=t(61585),i=t(78549),r=t(75878),m=t(74273),M=t(80907),l=t(29430),_=t(81252),E=t(91330),e=t(91393),n=t(86896),a=t(86706),O=t(36364),d=t(75021);const D="https://cloud.strapi.io/profile/billing",P="https://strapi.io/billing/request-seats",g=()=>{const{formatMessage:L}=(0,n.Z)(),f=(0,a.v9)(O._),{isLoading:C,allowedActions:{canRead:v,canCreate:B,canUpdate:R,canDelete:U}}=(0,_.ss)(f.settings.users),{license:{licenseLimitStatus:T,enforcementUserCount:A,permittedSeats:p,isHostedOnStrapiCloud:I},isError:W,isLoading:K}=(0,d.q)({enabled:!C&&v&&B&&R&&U});return W||(C||K)||!p?null:s.createElement(c.P,{col:6,s:12},s.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},L({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),s.createElement(r.k,{gap:2},s.createElement(r.k,null,s.createElement(i.Z,{as:"p"},L({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:p,enforcementUserCount:A,text:h=>s.createElement(i.Z,{fontWeight:"semiBold",textColor:A>p?"danger500":null},h)}))),T==="OVER_LIMIT"&&s.createElement(m.u,{description:L({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},s.createElement(M.J,{width:`${(0,_.Q1)(14)}rem`,height:`${(0,_.Q1)(14)}rem`,color:"danger500",as:E.Z}))),s.createElement(l.r,{href:I?D:P,isExternal:!0,endIcon:s.createElement(e.Z,null)},L({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:I})))}},29430:(u,o,t)=>{t.d(o,{r:()=>E});var s=t(85893),c=t(67294),i=t(91393),r=t(88972),m=t(66362),M=t(53342),l=t(10574);const _=(0,r.ZP)(M.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:n})=>e?n.colors.neutral600:n.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${m.BF};
`,E=c.forwardRef(({children:e,href:n,disabled:a=!1,startIcon:O,endIcon:d,isExternal:D=!0,...P},g)=>(0,s.jsxs)(_,{ref:g,href:n,disabled:a,isExternal:D,...P,children:[O,(0,s.jsx)(l.Z,{textColor:a?"neutral600":"primary600",children:e}),d,n&&!d&&D&&(0,s.jsx)(i.Z,{})]}));E.displayName="Link"}}]);
