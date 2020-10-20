﻿/*!
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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{WjComponentBehavior}from"wijmo/wijmo.webcomponents.base";import*as wjcGauge from"wijmo/wijmo.gauge";var _wj_ns_exists_9=!0,WjcLinearGauge=function(e){__extends(WjcLinearGauge,e);function WjcLinearGauge(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcLinearGauge,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcLinearGauge.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcLinearGauge.prototype.attributeChangedCallback=function(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)};WjcLinearGauge.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcLinearGauge.prototype.addEventListener=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcLinearGauge}(wjcGauge.LinearGauge);export{WjcLinearGauge};_wj_ns_exists_9&&WjComponentBehavior.register("wjc-linear-gauge",WjcLinearGauge);var WjcBulletGraph=function(e){__extends(WjcBulletGraph,e);function WjcBulletGraph(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcBulletGraph,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcBulletGraph.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcBulletGraph.prototype.attributeChangedCallback=function(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)};WjcBulletGraph.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcBulletGraph.prototype.addEventListener=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcBulletGraph}(wjcGauge.BulletGraph);export{WjcBulletGraph};_wj_ns_exists_9&&WjComponentBehavior.register("wjc-bullet-graph",WjcBulletGraph);var WjcRadialGauge=function(e){__extends(WjcRadialGauge,e);function WjcRadialGauge(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcRadialGauge,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcRadialGauge.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcRadialGauge.prototype.attributeChangedCallback=function(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)};WjcRadialGauge.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcRadialGauge.prototype.addEventListener=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcRadialGauge}(wjcGauge.RadialGauge);export{WjcRadialGauge};_wj_ns_exists_9&&WjComponentBehavior.register("wjc-radial-gauge",WjcRadialGauge);var WjcRange=function(e){__extends(WjcRange,e);function WjcRange(){var t=e.call(this)||this;t._wjBehaviour=WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcRange,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcRange.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcRange.prototype.attributeChangedCallback=function(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)};WjcRange.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcRange.wrappedClass=function(){return wjcGauge.Range};WjcRange.parentProp="ranges";return WjcRange}(HTMLElement);export{WjcRange};_wj_ns_exists_9&&WjComponentBehavior.register("wjc-range",WjcRange);