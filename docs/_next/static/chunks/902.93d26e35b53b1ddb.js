"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{3902:function(t,e,n){n.r(e),n.d(e,{pwa_action_sheet:function(){return o}});var i=n(9130),o=function(){function t(t){(0,i.r)(this,t),this.onSelection=(0,i.c)(this,"onSelection",7),this.header=void 0,this.cancelable=!0,this.options=[],this.open=!1}return t.prototype.componentDidLoad=function(){var t=this;requestAnimationFrame(function(){t.open=!0})},t.prototype.dismiss=function(){this.cancelable&&this.close()},t.prototype.close=function(){var t=this;this.open=!1,setTimeout(function(){t.el.parentNode.removeChild(t.el)},500)},t.prototype.handleOptionClick=function(t,e){t.stopPropagation(),this.onSelection.emit(e),this.close()},t.prototype.render=function(){var t=this;return(0,i.h)("div",{class:"wrapper".concat(this.open?" open":""),onClick:function(){return t.dismiss()}},(0,i.h)("div",{class:"content"},(0,i.h)("div",{class:"title"},this.header),this.options.map(function(e,n){return(0,i.h)("div",{class:"action-sheet-option",onClick:function(e){return t.handleOptionClick(e,n)}},(0,i.h)("div",{class:"action-sheet-button"},e.title))})))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.g)(this)},enumerable:!1,configurable:!0}),t}();o.style=':host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0);-webkit-transition:400ms background-color cubic-bezier(.36,.66,.04,1);transition:400ms background-color cubic-bezier(.36,.66,.04,1)}.wrapper.open{background-color:rgba(0, 0, 0, 0.32)}.title{color:#999;height:23px;line-height:23px;padding-bottom:17px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:20px}.content{width:568px;-ms-flex-item-align:end;align-self:flex-end;background-color:#fff;-webkit-transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1), 400ms -webkit-transform cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(100%);transform:translateY(100%)}.wrapper.open .content{-webkit-transform:translateY(0%);transform:translateY(0%)}@media only screen and (max-width: 568px){.content{width:100%}}.action-sheet-option{cursor:pointer;height:52px;line-height:52px}.action-sheet-button{color:rgb(38, 38, 38);font-size:16px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:0px}.action-sheet-button:hover{background-color:#F6F6F6}'}}]);