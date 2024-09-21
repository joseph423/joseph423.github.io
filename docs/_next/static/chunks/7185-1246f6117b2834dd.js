"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7185],{87185:function(e,t,n){var r,i;let s,a;n.d(t,{Uw:function(){return m},dV:function(){return c},fo:function(){return u}});let o=(s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:{}).CapacitorPlatforms=(e=>{let t=new Map;t.set("web",{name:"web"});let n=e.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:t};return n.addPlatform=(e,t)=>{n.platforms.set(e,t)},n.setPlatform=e=>{n.platforms.has(e)&&(n.currentPlatform=n.platforms.get(e))},n})(s);o.addPlatform,o.setPlatform,(i=r||(r={})).Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE";class l extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}let d=e=>{var t,n;return(null==e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null==e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"},c=(a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:{}).Capacitor=(e=>{var t,n,i,s,a;let o=e.CapacitorCustomPlatform||null,c=e.Capacitor||{},u=c.Plugins=c.Plugins||{},m=e.CapacitorPlatforms,f=(null===(t=null==m?void 0:m.currentPlatform)||void 0===t?void 0:t.getPlatform)||(()=>null!==o?o.name:d(e)),p=(null===(n=null==m?void 0:m.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==f()),h=(null===(i=null==m?void 0:m.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(e=>{let t=g.get(e);return!!((null==t?void 0:t.platforms.has(f()))||w(e))}),w=(null===(s=null==m?void 0:m.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(e=>{var t;return null===(t=c.PluginHeaders)||void 0===t?void 0:t.find(t=>t.name===e)}),g=new Map,v=(null===(a=null==m?void 0:m.currentPlatform)||void 0===a?void 0:a.registerPlugin)||((e,t={})=>{let n;let i=g.get(e);if(i)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),i.proxy;let s=f(),a=w(e),d=async()=>(!n&&s in t?n=n="function"==typeof t[s]?await t[s]():t[s]:null!==o&&!n&&"web"in t&&(n=n="function"==typeof t.web?await t.web():t.web),n),m=(t,n)=>{var i,o;if(a){let r=null==a?void 0:a.methods.find(e=>n===e.name);if(r)return"promise"===r.rtype?t=>c.nativePromise(e,n.toString(),t):(t,r)=>c.nativeCallback(e,n.toString(),t,r);if(t)return null===(i=t[n])||void 0===i?void 0:i.bind(t)}else if(t)return null===(o=t[n])||void 0===o?void 0:o.bind(t);else throw new l(`"${e}" plugin is not implemented on ${s}`,r.Unimplemented)},p=t=>{let n;let i=(...i)=>{let a=d().then(a=>{let o=m(a,t);if(o){let e=o(...i);return n=null==e?void 0:e.remove,e}throw new l(`"${e}.${t}()" is not implemented on ${s}`,r.Unimplemented)});return"addListener"===t&&(a.remove=async()=>n()),a};return i.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(i,"name",{value:t,writable:!1,configurable:!1}),i},h=p("addListener"),v=p("removeListener"),b=(e,t)=>{let n=h({eventName:e},t),r=async()=>{v({eventName:e,callbackId:await n},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await r()},i},y=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return a?b:h;case"removeListener":return v;default:return p(t)}}});return u[e]=y,g.set(e,{name:e,proxy:y,platforms:new Set([...Object.keys(t),...a?[s]:[]])}),y});return c.convertFileSrc||(c.convertFileSrc=e=>e),c.getPlatform=f,c.handleError=t=>e.console.error(t),c.isNativePlatform=p,c.isPluginAvailable=h,c.pluginMethodNoop=(e,t,n)=>Promise.reject(`${n} does not have an implementation of "${t}".`),c.registerPlugin=v,c.Exception=l,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c})(a),u=c.registerPlugin;c.Plugins;class m{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){for(let e in this.listeners={},this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(!r){if(n){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}return}r.forEach(e=>e(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new c.Exception(e,r.Unimplemented)}unavailable(e="not available"){return new c.Exception(e,r.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}}let f=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),p=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class h extends m{async getCookies(){let e=document.cookie,t={};return e.split(";").forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=p(n).trim(),r=p(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=f(e.key),n=f(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),s=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${r}; path=${i}; ${s};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{for(let e of document.cookie.split(";")||[])document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}u("CapacitorCookies",{web:()=>new h});let w=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),g=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},v=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let r,i;let[s,a]=n;return Array.isArray(a)?(i="",a.forEach(e=>{r=t?encodeURIComponent(e):e,i+=`${s}=${r}&`}),i.slice(0,-1)):(r=t?encodeURIComponent(a):a,i=`${s}=${r}`),`${e}&${i}`},"").substr(1):null,b=(e,t={})=>{let n=Object.assign({method:e.method||"GET",headers:e.headers},t),r=g(e.headers)["content-type"]||"";if("string"==typeof e.data)n.body=e.data;else if(r.includes("application/x-www-form-urlencoded")){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes("multipart/form-data")||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete("content-type"),n.headers=r}else(r.includes("application/json")||"object"==typeof e.data)&&(n.body=JSON.stringify(e.data));return n};class y extends m{async request(e){let t,n;let r=b(e,e.webFetchExtra),i=v(e.params,e.shouldEncodeUrlParams),s=i?`${e.url}?${i}`:e.url,a=await fetch(s,r),o=a.headers.get("content-type")||"",{responseType:l="text"}=a.ok?e:{};switch(o.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":n=await a.blob(),t=await w(n);break;case"json":t=await a.json();break;default:t=await a.text()}let d={};return a.headers.forEach((e,t)=>{d[t]=e}),{data:t,headers:d,status:a.status,url:a.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}u("CapacitorHttp",{web:()=>new y})}}]);