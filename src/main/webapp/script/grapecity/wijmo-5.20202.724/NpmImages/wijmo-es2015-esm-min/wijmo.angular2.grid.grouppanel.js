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

var WjGroupPanel_1,__decorate=this&&this.__decorate||function(e,r,o,t){var n,a=arguments.length,i=a<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,o,t);else for(var p=e.length-1;p>=0;p--)(n=e[p])&&(i=(a<3?n(i):a>3?n(r,o,i):n(r,o))||i);return a>3&&i&&Object.defineProperty(r,o,i),i},__param=this&&this.__param||function(e,r){return function(o,t){r(o,t,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"wijmo/wijmo.angular2.directiveBase";import*as wjcGridGrouppanel from"wijmo/wijmo.grid.grouppanel";var wjGroupPanelMeta={selector:"wj-group-panel",template:"",inputs:["wjModelProperty","isDisabled","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","grid"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjGroupPanelMeta};let WjGroupPanel=WjGroupPanel_1=class WjGroupPanel extends wjcGridGrouppanel.GroupPanel{constructor(e,r,o){super(WjDirectiveBehavior.getHostElement(e,r));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,r,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,r,o,t=!1){let n=WjDirectiveBehavior,a=n.ngZone;a&&n.outsideZoneEvents[r]?a.runOutsideAngular(()=>{super.addEventListener(e,r,o,t)}):super.addEventListener(e,r,o,t)}};WjGroupPanel.meta={outputs:wjGroupPanelMeta.outputs};WjGroupPanel=WjGroupPanel_1=__decorate([Component({selector:wjGroupPanelMeta.selector,template:wjGroupPanelMeta.template,inputs:wjGroupPanelMeta.inputs,outputs:wjGroupPanelMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjGroupPanel_1)},...wjGroupPanelMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjGroupPanel);export{WjGroupPanel};let moduleExports=[WjGroupPanel],WjGridGrouppanelModule=class WjGridGrouppanelModule{};WjGridGrouppanelModule=__decorate([NgModule({imports:[CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjGridGrouppanelModule);export{WjGridGrouppanelModule};