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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)};return function(e,n){extendStatics(e,n);function __(){this.constructor=e}e.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),mKo=require("knockout"),wjcGauge=require("wijmo/wijmo.gauge"),wjKo=mKo,WjGaugeBinding=function(e){__extends(WjGaugeBinding,e);function WjGaugeBinding(){return null!==e&&e.apply(this,arguments)||this}WjGaugeBinding.prototype._getControlConstructor=function(){return wjcGauge.Gauge};return WjGaugeBinding}(wijmo_knockout_base_1.WjBinding);exports.WjGaugeBinding=WjGaugeBinding;var wjLinearGauge=function(e){__extends(wjLinearGauge,e);function wjLinearGauge(){return null!==e&&e.apply(this,arguments)||this}wjLinearGauge.prototype._getControlConstructor=function(){return wjcGauge.LinearGauge};return wjLinearGauge}(WjGaugeBinding);exports.wjLinearGauge=wjLinearGauge;var wjBulletGraph=function(e){__extends(wjBulletGraph,e);function wjBulletGraph(){return null!==e&&e.apply(this,arguments)||this}wjBulletGraph.prototype._getControlConstructor=function(){return wjcGauge.BulletGraph};return wjBulletGraph}(wjLinearGauge);exports.wjBulletGraph=wjBulletGraph;var wjRadialGauge=function(e){__extends(wjRadialGauge,e);function wjRadialGauge(){return null!==e&&e.apply(this,arguments)||this}wjRadialGauge.prototype._getControlConstructor=function(){return wjcGauge.RadialGauge};return wjRadialGauge}(WjGaugeBinding);exports.wjRadialGauge=wjRadialGauge;var wjRange=function(e){__extends(wjRange,e);function wjRange(){return null!==e&&e.apply(this,arguments)||this}wjRange.prototype._getControlConstructor=function(){return wjcGauge.Range};wjRange.prototype._createControl=function(e){return new wjcGauge.Range};return wjRange}(wijmo_knockout_base_1.WjBinding);exports.wjRange=wjRange;wjKo.bindingHandlers.wjLinearGauge=new wjLinearGauge;wjKo.bindingHandlers.wjBulletGraph=new wjBulletGraph;wjKo.bindingHandlers.wjRadialGauge=new wjRadialGauge;wjKo.bindingHandlers.wjRange=new wjRange;