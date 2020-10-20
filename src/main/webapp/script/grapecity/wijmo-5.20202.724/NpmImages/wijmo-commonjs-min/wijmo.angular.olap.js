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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),wijmo_angular_grid_1=require("wijmo/wijmo.angular.grid"),mNg=require("angular"),wjcOlap=require("wijmo/wijmo.olap"),wjNg=mNg,wijmoOlapName="wj.olap";exports.ngModuleName=wijmoOlapName;var wijmoOlap=wijmo_angular_base_1._registerNgModule(wijmoOlapName);if(wijmo_angular_base_1.softRefOlap()&&wijmo_angular_base_1.softRefOlap().PivotGrid){wijmoOlap.directive("wjPivotGrid",["$compile","$interpolate",function(t,e){return new WjPivotGrid(t,e)}]);wijmoOlap.directive("wjPivotChart",[function(){return new WjPivotChart}]);wijmoOlap.directive("wjPivotPanel",[function(){return new WjPivotPanel}]);wijmoOlap.directive("wjSlicer",[function(){return new WjSlicer}])}var WjPivotGrid=function(t){__extends(WjPivotGrid,t);function WjPivotGrid(e,r){return t.call(this,e,r)||this}Object.defineProperty(WjPivotGrid.prototype,"_controlConstructor",{get:function(){return wjcOlap.PivotGrid},enumerable:!0,configurable:!0});return WjPivotGrid}(wijmo_angular_grid_1.WjFlexGrid);exports.WjPivotGrid=WjPivotGrid;var WjPivotChart=function(t){__extends(WjPivotChart,t);function WjPivotChart(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjPivotChart.prototype,"_controlConstructor",{get:function(){return wjcOlap.PivotChart},enumerable:!0,configurable:!0});return WjPivotChart}(wijmo_angular_base_1.WjDirective);exports.WjPivotChart=WjPivotChart;var WjPivotPanel=function(t){__extends(WjPivotPanel,t);function WjPivotPanel(){var e=t.call(this)||this;e.transclude=!0;e.template="<div ng-transclude />";return e}Object.defineProperty(WjPivotPanel.prototype,"_controlConstructor",{get:function(){return wjcOlap.PivotPanel},enumerable:!0,configurable:!0});return WjPivotPanel}(wijmo_angular_base_1.WjDirective);exports.WjPivotPanel=WjPivotPanel;var WjSlicer=function(t){__extends(WjSlicer,t);function WjSlicer(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(WjSlicer.prototype,"_controlConstructor",{get:function(){return wjcOlap.Slicer},enumerable:!0,configurable:!0});return WjSlicer}(wijmo_angular_base_1.WjDirective);exports.WjSlicer=WjSlicer;