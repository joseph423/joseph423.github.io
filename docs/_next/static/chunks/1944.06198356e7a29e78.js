"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1944],{81944:function(e,t,i){i.r(t),i.d(t,{PreferencesWeb:function(){return s}});var r=i(87185);class s extends r.Uw{constructor(){super(...arguments),this.group="CapacitorStorage"}async configure({group:e}){"string"==typeof e&&(this.group=e)}async get(e){return{value:this.impl.getItem(this.applyPrefix(e.key))}}async set(e){this.impl.setItem(this.applyPrefix(e.key),e.value)}async remove(e){this.impl.removeItem(this.applyPrefix(e.key))}async keys(){return{keys:this.rawKeys().map(e=>e.substring(this.prefix.length))}}async clear(){for(let e of this.rawKeys())this.impl.removeItem(e)}async migrate(){var e;let t=[],i=[],r="_cap_";for(let s of Object.keys(this.impl).filter(e=>0===e.indexOf(r))){let a=s.substring(r.length),p=null!==(e=this.impl.getItem(s))&&void 0!==e?e:"",{value:n}=await this.get({key:a});"string"==typeof n?i.push(a):(await this.set({key:a,value:p}),t.push(a))}return{migrated:t,existing:i}}async removeOld(){for(let e of Object.keys(this.impl).filter(e=>0===e.indexOf("_cap_")))this.impl.removeItem(e)}get impl(){return window.localStorage}get prefix(){return"NativeStorage"===this.group?"":`${this.group}.`}rawKeys(){return Object.keys(this.impl).filter(e=>0===e.indexOf(this.prefix))}applyPrefix(e){return this.prefix+e}}}}]);