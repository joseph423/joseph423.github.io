(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{5420:function(e,t,n){Promise.resolve().then(n.bind(n,90222))},90222:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(57437),o=n(2265),i=n(26461),u=n(17156),l=n(83719),s=n(96598),a=n(66858),c=n(60091),d=n(68969);function f(){let[e]=(0,d.T)(),t=(0,i.t8)(),[n,f]=(0,o.useState)(!1),[v,x]=(0,o.useState)("");return(0,r.jsxs)(u.Z,{className:"m-4 flex max-h-none min-h-full w-full flex-col lg:mx-6 lg:my-4",sx:{maxHeight:{lg:e}},children:[(0,r.jsx)(l.Z,{variant:"h1",className:"mb-2 mt-0 flex-none text-2xl",children:"Bulk Open URL"}),(0,r.jsx)(s.Z,{direction:{xs:"column",lg:"row"},spacing:2,className:"mt-4",children:(0,r.jsx)(a.Z,{multiline:!0,size:"small",fullWidth:!0,minRows:15,maxRows:20,label:"URLs",value:v,onChange:e=>x(e.target.value),placeholder:"https://example.com\nhttps://example2.com\n...",className:"h-full"})}),(0,r.jsx)("div",{className:"mt-5 flex justify-start",children:(0,r.jsx)(c.Z,{variant:"contained",onClick:()=>{f(!0),v.split("\n").map(e=>e.trim()).filter(e=>e).forEach(e=>{window.open(e,"_blank")}),f(!1),t("Urls have been opened in new tabs.")},disabled:n||""===v.trim(),children:"Open Urls"})})]})}},61198:function(e,t,n){"use strict";n.d(t,{AdMobProvider:function(){return l},Fc:function(){return a},dG:function(){return s}});var r=n(57437),o=n(2265);let i=(0,o.createContext)(void 0),u=(0,o.createContext)(()=>{}),l=e=>{let{children:t}=e,[n,l]=(0,o.useState)(void 0);return(0,o.useEffect)(()=>{console.log("AdMobProvider.useEffect.[bannerSize]",{bannerSize:n})},[n]),(0,r.jsx)(i.Provider,{value:n,children:(0,r.jsx)(u.Provider,{value:l,children:t})})},s=()=>(0,o.useContext)(i),a=()=>(0,o.useContext)(u)},94426:function(e,t,n){"use strict";n.d(t,{hB:function(){return s},jp:function(){return a},t9:function(){return l}});var r=n(57437),o=n(2265);let i=(0,o.createContext)(void 0),u=(0,o.createContext)(()=>{}),l=e=>{let{children:t}=e,[n,l]=(0,o.useState)(void 0);return(0,r.jsx)(i.Provider,{value:n,children:(0,r.jsx)(u.Provider,{value:l,children:t})})},s=()=>(0,o.useContext)(i),a=()=>(0,o.useContext)(u)},26461:function(e,t,n){"use strict";n.d(t,{T1:function(){return l},t8:function(){return s}});var r=n(57437),o=n(2265);let i=(0,o.createContext)(null),u=(0,o.createContext)(null),l=e=>{let{children:t,isOpened:n,showNotificationMessage:o}=e;return(0,r.jsx)(i.Provider,{value:n,children:(0,r.jsx)(u.Provider,{value:o,children:t})})},s=()=>(0,o.useContext)(u)},45213:function(e,t,n){"use strict";n.d(t,{$o:function(){return f},dt:function(){return d},s$:function(){return a},tG:function(){return c},w:function(){return v}});var r=n(57437),o=n(2265);let i=(0,o.createContext)(void 0),u=(0,o.createContext)(()=>{}),l=(0,o.createContext)(void 0),s=(0,o.createContext)(()=>{}),a=e=>{let{children:t}=e,[n,a]=(0,o.useState)(!1),[c,d]=(0,o.useState)(void 0);return(0,o.useEffect)(()=>{},[c]),(0,r.jsx)(i.Provider,{value:n,children:(0,r.jsx)(u.Provider,{value:a,children:(0,r.jsx)(l.Provider,{value:c,children:(0,r.jsx)(s.Provider,{value:d,children:t})})})})},c=()=>(0,o.useContext)(i),d=()=>(0,o.useContext)(u),f=()=>(0,o.useContext)(l),v=()=>(0,o.useContext)(s)},68969:function(e,t,n){"use strict";n.d(t,{T:function(){return c}});var r=n(61198),o=n(94426),i=n(45213),u=n(43061),l=n(22599),s=n.n(l),a=n(2265);let c=()=>{let e=(0,r.dG)(),t=(0,u.iP)(),n=(0,i.$o)(),l=(0,o.hB)(),[c,d]=(0,a.useState)(0);return(0,a.useEffect)(()=>{d(s().defaultTo(null==t?void 0:t.height,0)-s().defaultTo(null==e?void 0:e.height,0)-s().defaultTo(null==n?void 0:n.offsetHeight,0)-s().defaultTo(null==l?void 0:l.offsetHeight,0))},[t,e,n,l]),[c]}},17156:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(2265),o=n(44839),i=n(73992),u=n(65263),l=n(9325),s=n(41661),a=n(57437),c=n(89424),d=n(90632),f=n(52737);let v=(0,n(72296).Z)("MuiBox",["root"]),x=(0,d.Z)();var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:t,defaultTheme:n,defaultClassName:c="MuiBox-root",generateClassName:d}=e,f=(0,i.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(u.Z);return r.forwardRef(function(e,r){let i=(0,s.Z)(n),{className:u,component:v="div",...x}=(0,l.Z)(e);return(0,a.jsx)(f,{as:v,ref:r,className:(0,o.Z)(u,d?d(c):c),theme:t&&i[t]||i,...x})})}({themeId:f.Z,defaultTheme:x,defaultClassName:v.root,generateClassName:c.Z.generate})},96598:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(2265),o=n(44839),i=n(72491),u=n(70587),l=n(76990),s=n(49134),a=n(13820),c=n(9325),d=n(7173),f=n(53877),v=n(91572),x=n(57437);let h=(0,d.Z)(),m=(0,s.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function p(e){return(0,a.Z)({props:e,name:"MuiStack",defaultTheme:h})}let Z=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],C=({ownerState:e,theme:t})=>{let n={display:"flex",flexDirection:"column",...(0,f.k9)({theme:t},(0,f.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let r=(0,v.hB)(t),o=Object.keys(t.breakpoints.values).reduce((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t),{}),u=(0,f.P$)({values:e.direction,base:o}),l=(0,f.P$)({values:e.spacing,base:o});"object"==typeof u&&Object.keys(u).forEach((e,t,n)=>{if(!u[e]){let r=t>0?u[n[t-1]]:"column";u[e]=r}}),n=(0,i.Z)(n,(0,f.k9)({theme:t},l,(t,n)=>e.useFlexGap?{gap:(0,v.NA)(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Z(n?u[n]:e.direction)}`]:(0,v.NA)(r,t)}}))}return(0,f.dt)(t.breakpoints,n)};var g=n(48024),j=n(69281),P=function(e={}){let{createStyledComponent:t=m,useThemeProps:n=p,componentName:i="MuiStack"}=e,s=()=>(0,l.Z)({root:["root"]},e=>(0,u.ZP)(i,e),{}),a=t(C);return r.forwardRef(function(e,t){let i=n(e),{component:u="div",direction:l="column",spacing:d=0,divider:f,children:v,className:h,useFlexGap:m=!1,...p}=(0,c.Z)(i),Z=s();return(0,x.jsx)(a,{as:u,ownerState:{direction:l,spacing:d,useFlexGap:m},ref:t,className:(0,o.Z)(Z.root,h),...p,children:f?function(e,t){let n=r.Children.toArray(e).filter(Boolean);return n.reduce((e,o,i)=>(e.push(o),i<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${i}`})),e),[])}(v,f):v})})}({createStyledComponent:(0,g.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,j.Z)({props:e,name:"MuiStack"})})},49134:function(e,t,n){"use strict";let r=(0,n(52902).ZP)();t.Z=r}},function(e){e.O(0,[1866,365,2776,3061,346,6858,2971,7023,1744],function(){return e(e.s=5420)}),_N_E=e.O()}]);