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

var __decorate=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,p=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(p=(i<3?n(p):i>3?n(e,o,p):n(e,o))||p);return i>3&&p&&Object.defineProperty(e,o,p),p},__param=this&&this.__param||function(t,e){return function(o,r){e(o,r,t)}};import{Component,EventEmitter,NgModule,ViewChild,ComponentFactoryResolver,ElementRef,Injector,Directive,ViewContainerRef,Optional,forwardRef,Input,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"wijmo/wijmo.angular2.directiveBase";import*as ngCore from"@angular/core";import*as wjcCore from"wijmo/wijmo";var wjTooltipMeta={selector:"[wjTooltip]",inputs:[],outputs:["initialized"],exportAs:"wjTooltip",providers:[]};export{wjTooltipMeta};var WjTooltip=function(){function WjTooltip(e,o,r){this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,o,r);this._elRef=e;t._toolTip||(t._toolTip=new wjcCore.Tooltip);this.created()}t=WjTooltip;WjTooltip.prototype.created=function(){};WjTooltip.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTooltip.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTooltip.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy();this.wjTooltip=null};Object.defineProperty(WjTooltip.prototype,"wjTooltip",{get:function(){return this._toolTipText},set:function(e){if(this._toolTipText!=e){this._toolTipText=e;t._toolTip.setTooltip(this._elRef.nativeElement,e)}},enumerable:!0,configurable:!0});var t;WjTooltip.meta={outputs:wjTooltipMeta.outputs};__decorate([Input()],WjTooltip.prototype,"wjTooltip",null);return WjTooltip=t=__decorate([Directive({selector:wjTooltipMeta.selector,inputs:wjTooltipMeta.inputs,outputs:wjTooltipMeta.outputs,exportAs:wjTooltipMeta.exportAs,providers:[{provide:"WjComponent",useExisting:forwardRef((function(){return t}))}].concat(wjTooltipMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTooltip)}();export{WjTooltip};var WjComponentLoader=function(){function WjComponentLoader(t,e){this._cmpResolver=t;this._elementRef=e;this._isInit=!1;this.propertiesChange=new ngCore.EventEmitter}Object.defineProperty(WjComponentLoader.prototype,"component",{get:function(){return this._component},set:function(t){if(this._component!==t){this._component=t;this._createComponent()}},enumerable:!0,configurable:!0});Object.defineProperty(WjComponentLoader.prototype,"properties",{get:function(){return this._properties},set:function(t){this._properties=t;this._updateProperties()},enumerable:!0,configurable:!0});WjComponentLoader.prototype.ngOnInit=function(){this._isInit=!0;this._createComponent()};WjComponentLoader.prototype._createComponent=function(){if(this._isInit){if(this._cmpRef){this._cmpRef.destroy();this._cmpRef=null}var t=this._component;if(t&&this._anchor){this._cmpRef=this._anchor.createComponent(this._cmpResolver.resolveComponentFactory(t));this._updateProperties()}}};WjComponentLoader.prototype._updateProperties=function(){var t=this._cmpRef&&this._cmpRef.instance,e=this.properties;if(t&&e)for(var o=0,r=Object.getOwnPropertyNames(e);o<r.length;o++){var n=r[o];t[n]=e[n];var i=t[n+"Change"];i instanceof EventEmitter&&this._addPropListener(t,n,i)}};WjComponentLoader.prototype._addPropListener=function(t,e,o){var r=this;o.subscribe((function(o){r.properties[e]=r.properties[e]=t[e];r.propertiesChange.next(r.properties)}))};__decorate([ViewChild("anchor",{read:ViewContainerRef,static:!0})],WjComponentLoader.prototype,"_anchor",void 0);return WjComponentLoader=__decorate([Component({selector:"wj-component-loader",template:"<div #anchor></div>",inputs:["component","properties"],outputs:["propertiesChange"]}),__param(0,Inject(ComponentFactoryResolver)),__param(1,Inject(ElementRef))],WjComponentLoader)}();export{WjComponentLoader};var moduleExports=[WjTooltip,WjComponentLoader],WjCoreModule=function(){function WjCoreModule(){}return WjCoreModule=__decorate([NgModule({imports:[CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjCoreModule)}();export{WjCoreModule};