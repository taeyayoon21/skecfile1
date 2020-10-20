/*!
    *
    * Wijmo Library 5.20202.724
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{WjComponentBehavior}from"wijmo/wijmo.webcomponents.base";import*as wjcGridMultirow from"wijmo/wijmo.grid.multirow";var _wj_ns_exists_13=!0,WjcMultiRow=function(t){__extends(WjcMultiRow,t);function WjcMultiRow(){var o=t.call(this,document.createElement("div"))||this;o._wjBehaviour=WjComponentBehavior._attach(o);return o}Object.defineProperty(WjcMultiRow,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcMultiRow.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcMultiRow.prototype.attributeChangedCallback=function(t,o,e){this._wjBehaviour.lhAttributeChanged(t,o,e)};WjcMultiRow.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcMultiRow.prototype.addEventListener=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];"string"==typeof o[0]?HTMLElement.prototype.addEventListener.apply(this,o):t.prototype.addEventListener.apply(this,o)};return WjcMultiRow}(wjcGridMultirow.MultiRow);export{WjcMultiRow};_wj_ns_exists_13&&WjComponentBehavior.register("wjc-multi-row",WjcMultiRow);