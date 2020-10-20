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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},__param=this&&this.__param||function(e,t){return function(r,n){t(r,n,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"wijmo/wijmo.angular2.directiveBase";import*as wjcChartHierarchical from"wijmo/wijmo.chart.hierarchical";var wjSunburstMeta={selector:"wj-sunburst",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","childItemsPath"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjSunburstMeta};var WjSunburst=function(e){__extends(WjSunburst,e);function WjSunburst(t,r,n){var o=e.call(this,WjDirectiveBehavior.getHostElement(t,r))||this;o.isInitialized=!1;o._wjBehaviour=WjDirectiveBehavior.attach(o,t,r,n);o.created();return o}t=WjSunburst;WjSunburst.prototype.created=function(){};WjSunburst.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjSunburst.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjSunburst.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjSunburst.prototype.addEventListener=function(t,r,n,o){var i=this;void 0===o&&(o=!1);var a=WjDirectiveBehavior,u=a.ngZone;u&&a.outsideZoneEvents[r]?u.runOutsideAngular((function(){e.prototype.addEventListener.call(i,t,r,n,o)})):e.prototype.addEventListener.call(this,t,r,n,o)};Object.defineProperty(WjSunburst.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjSunburst.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjSunburst.meta={outputs:wjSunburstMeta.outputs};return WjSunburst=t=__decorate([Component({selector:wjSunburstMeta.selector,template:wjSunburstMeta.template,inputs:wjSunburstMeta.inputs,outputs:wjSunburstMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef((function(){return t}))}].concat(wjSunburstMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjSunburst)}(wjcChartHierarchical.Sunburst);export{WjSunburst};var wjTreeMapMeta={selector:"wj-tree-map",template:"",inputs:["wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","maxDepth","type","labelContent","childItemsPath"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjTreeMapMeta};var WjTreeMap=function(e){__extends(WjTreeMap,e);function WjTreeMap(t,r,n){var o=e.call(this,WjDirectiveBehavior.getHostElement(t,r))||this;o.isInitialized=!1;o._wjBehaviour=WjDirectiveBehavior.attach(o,t,r,n);o.created();return o}t=WjTreeMap;WjTreeMap.prototype.created=function(){};WjTreeMap.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTreeMap.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTreeMap.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjTreeMap.prototype.addEventListener=function(t,r,n,o){var i=this;void 0===o&&(o=!1);var a=WjDirectiveBehavior,u=a.ngZone;u&&a.outsideZoneEvents[r]?u.runOutsideAngular((function(){e.prototype.addEventListener.call(i,t,r,n,o)})):e.prototype.addEventListener.call(this,t,r,n,o)};Object.defineProperty(WjTreeMap.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjTreeMap.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjTreeMap.meta={outputs:wjTreeMapMeta.outputs};return WjTreeMap=t=__decorate([Component({selector:wjTreeMapMeta.selector,template:wjTreeMapMeta.template,inputs:wjTreeMapMeta.inputs,outputs:wjTreeMapMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef((function(){return t}))}].concat(wjTreeMapMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTreeMap)}(wjcChartHierarchical.TreeMap);export{WjTreeMap};var moduleExports=[WjSunburst,WjTreeMap],WjChartHierarchicalModule=function(){function WjChartHierarchicalModule(){}return WjChartHierarchicalModule=__decorate([NgModule({imports:[CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjChartHierarchicalModule)}();export{WjChartHierarchicalModule};