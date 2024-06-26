"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{3423:function(t,e,n){var i=n(9018),s=n(7437);e.Z=(0,i.Z)((0,s.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},9666:function(t,e,n){var i=n(9018),s=n(7437);e.Z=(0,i.Z)((0,s.jsx)("path",{d:"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74m9.84 4.63-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-.76-3.54-.75-3.67-.75-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38"}),"TouchApp")},1246:function(t,e,n){n.d(e,{Z:function(){return h}});var i=n(2988);n(2265);var s=n(6003),r=n(4874),o=n(7437),u=function(t){let{styles:e,themeId:n,defaultTheme:i={}}=t,u=(0,r.Z)(i),c="function"==typeof e?e(n&&u[n]||u):e;return(0,o.jsx)(s.Z,{styles:c})},c=n(7547),a=n(2737),h=function(t){return(0,o.jsx)(u,(0,i.Z)({},t,{defaultTheme:c.Z,themeId:a.Z}))}},4939:function(t,e,n){n.d(e,{j:function(){return r}});var i=n(9010),s=n(6298),r=new class extends i.l{#t;#e;#n;constructor(){super(),this.#n=t=>{if(!s.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#n=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},2812:function(t,e,n){n.d(e,{R:function(){return u},m:function(){return o}});var i=n(9948),s=n(3494),r=n(924),o=class extends s.F{#i;#s;#r;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.mutationCache,this.#i=[],this.state=t.state||u(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#i.includes(t)||(this.#i.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#i=this.#i.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#i.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(t){this.#r=(0,r.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#o({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});let e="pending"===this.state.status,n=!this.#r.canStart();try{if(!e){this.#o({type:"pending",variables:t,isPaused:n}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#o({type:"pending",context:e,variables:t,isPaused:n})}let i=await this.#r.start();return await this.#s.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#s.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#o({type:"success",data:i}),i}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#o({type:"error",error:e})}}finally{this.#s.runNext(this)}}#o(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),i.V.batch(()=>{this.#i.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}};function u(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},9948:function(t,e,n){n.d(e,{V:function(){return i}});var i=function(){let t=[],e=0,n=t=>{t()},i=t=>{t()},s=t=>setTimeout(t,0),r=i=>{e?t.push(i):s(()=>{n(i)})},o=()=>{let e=t;t=[],e.length&&s(()=>{i(()=>{e.forEach(t=>{n(t)})})})};return{batch:t=>{let n;e++;try{n=t()}finally{--e||o()}return n},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{n=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{s=t}}}()},9937:function(t,e,n){n.d(e,{N:function(){return r}});var i=n(9010),s=n(6298),r=new class extends i.l{#u=!0;#e;#n;constructor(){super(),this.#n=t=>{if(!s.sk&&window.addEventListener){let e=()=>t(!0),n=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#n=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#u!==t&&(this.#u=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#u}}},3494:function(t,e,n){n.d(e,{F:function(){return s}});var i=n(6298),s=class{#c;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.gcTime)&&(this.#c=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i.sk?1/0:3e5))}clearGcTimeout(){this.#c&&(clearTimeout(this.#c),this.#c=void 0)}}},924:function(t,e,n){n.d(e,{DV:function(){return a},Kw:function(){return u},Mz:function(){return h}});var i=n(4939),s=n(9937),r=n(6298);function o(t){return Math.min(1e3*2**t,3e4)}function u(t){return(t??"online")!=="online"||s.N.isOnline()}var c=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function a(t){return t instanceof c}function h(t){let e,n,a,h=!1,l=0,f=!1,d=new Promise((t,e)=>{n=t,a=e}),p=()=>i.j.isFocused()&&("always"===t.networkMode||s.N.isOnline())&&t.canRun(),y=()=>u(t.networkMode)&&t.canRun(),v=i=>{f||(f=!0,t.onSuccess?.(i),e?.(),n(i))},m=n=>{f||(f=!0,t.onError?.(n),e?.(),a(n))},b=()=>new Promise(n=>{e=t=>{(f||p())&&n(t)},t.onPause?.()}).then(()=>{e=void 0,f||t.onContinue?.()}),w=()=>{let e;if(f)return;let n=0===l?t.initialPromise:void 0;try{e=n??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(v).catch(e=>{if(f)return;let n=t.retry??(r.sk?0:3),i=t.retryDelay??o,s="function"==typeof i?i(l,e):i,u=!0===n||"number"==typeof n&&l<n||"function"==typeof n&&n(l,e);if(h||!u){m(e);return}l++,t.onFail?.(l,e),(0,r._v)(s).then(()=>p()?void 0:b()).then(()=>{h?m(e):w()})})};return{promise:d,cancel:e=>{f||(m(new c(e)),t.abort?.())},continue:()=>(e?.(),d),cancelRetry:()=>{h=!0},continueRetry:()=>{h=!1},canStart:y,start:()=>(y()?w():b().then(w),d)}}},9010:function(t,e,n){n.d(e,{l:function(){return i}});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},6298:function(t,e,n){n.d(e,{CN:function(){return x},Ht:function(){return S},KC:function(){return c},Kp:function(){return u},Nc:function(){return a},PN:function(){return o},Rm:function(){return f},SE:function(){return r},VS:function(){return y},VX:function(){return C},X7:function(){return l},Ym:function(){return d},ZT:function(){return s},_v:function(){return w},_x:function(){return h},cG:function(){return E},oE:function(){return g},sk:function(){return i},to:function(){return p}});var i="undefined"==typeof window||"Deno"in globalThis;function s(){}function r(t,e){return"function"==typeof t?t(e):t}function o(t){return"number"==typeof t&&t>=0&&t!==1/0}function u(t,e){return Math.max(t+(e||0)-Date.now(),0)}function c(t,e){return"function"==typeof t?t(e):t}function a(t,e){return"function"==typeof t?t(e):t}function h(t,e){let{type:n="all",exact:i,fetchStatus:s,predicate:r,queryKey:o,stale:u}=t;if(o){if(i){if(e.queryHash!==f(o,e.options))return!1}else if(!p(e.queryKey,o))return!1}if("all"!==n){let t=e.isActive();if("active"===n&&!t||"inactive"===n&&t)return!1}return("boolean"!=typeof u||e.isStale()===u)&&(!s||s===e.state.fetchStatus)&&(!r||!!r(e))}function l(t,e){let{exact:n,status:i,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(n){if(d(e.options.mutationKey)!==d(r))return!1}else if(!p(e.options.mutationKey,r))return!1}return(!i||e.state.status===i)&&(!s||!!s(e))}function f(t,e){return(e?.queryKeyHashFn||d)(t)}function d(t){return JSON.stringify(t,(t,e)=>m(e)?Object.keys(e).sort().reduce((t,n)=>(t[n]=e[n],t),{}):e)}function p(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(n=>!p(t[n],e[n]))}function y(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let n in t)if(t[n]!==e[n])return!1;return!0}function v(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function m(t){if(!b(t))return!1;let e=t.constructor;if(void 0===e)return!0;let n=e.prototype;return!!(b(n)&&n.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function b(t){return"[object Object]"===Object.prototype.toString.call(t)}function w(t){return new Promise(e=>{setTimeout(e,t)})}function g(t,e,n){return"function"==typeof n.structuralSharing?n.structuralSharing(t,e):!1!==n.structuralSharing?function t(e,n){if(e===n)return e;let i=v(e)&&v(n);if(i||m(e)&&m(n)){let s=i?e:Object.keys(e),r=s.length,o=i?n:Object.keys(n),u=o.length,c=i?[]:{},a=0;for(let r=0;r<u;r++){let u=i?r:o[r];(!i&&s.includes(u)||i)&&void 0===e[u]&&void 0===n[u]?(c[u]=void 0,a++):(c[u]=t(e[u],n[u]),c[u]===e[u]&&void 0!==e[u]&&a++)}return r===u&&a===r?e:c}return n}(t,e):e}function C(t,e,n=0){let i=[...t,e];return n&&i.length>n?i.slice(1):i}function S(t,e,n=0){let i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var x=Symbol(),E=(t,e)=>!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==x?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))},3191:function(t,e,n){n.d(e,{NL:function(){return o},aH:function(){return u}});var i=n(2265),s=n(7437),r=i.createContext(void 0),o=t=>{let e=i.useContext(r);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},u=t=>{let{client:e,children:n}=t;return i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,s.jsx)(r.Provider,{value:e,children:n})}}}]);