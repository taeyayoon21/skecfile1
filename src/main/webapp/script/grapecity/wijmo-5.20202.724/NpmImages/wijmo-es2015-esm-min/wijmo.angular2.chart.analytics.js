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

var WjFlexChartTrendLine_1,WjFlexChartMovingAverage_1,WjFlexChartYFunctionSeries_1,WjFlexChartParametricFunctionSeries_1,WjFlexChartWaterfall_1,WjFlexChartBoxWhisker_1,WjFlexChartErrorBar_1,WjFlexChartBreakEven_1,__decorate=this&&this.__decorate||function(e,t,r,i){var a,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(n<3?a(s):n>3?a(t,r,s):a(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"wijmo/wijmo.angular2.directiveBase";import*as wjcChartAnalytics from"wijmo/wijmo.chart.analytics";var wjFlexChartTrendLineMeta={selector:"wj-flex-chart-trend-line",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","order","fitType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartTrendLineMeta};let WjFlexChartTrendLine=WjFlexChartTrendLine_1=class WjFlexChartTrendLine extends wjcChartAnalytics.TrendLine{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartTrendLine.meta={outputs:wjFlexChartTrendLineMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartTrendLine=WjFlexChartTrendLine_1=__decorate([Component({selector:wjFlexChartTrendLineMeta.selector,template:wjFlexChartTrendLineMeta.template,inputs:wjFlexChartTrendLineMeta.inputs,outputs:wjFlexChartTrendLineMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartTrendLine_1)},...wjFlexChartTrendLineMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartTrendLine);export{WjFlexChartTrendLine};var wjFlexChartMovingAverageMeta={selector:"wj-flex-chart-moving-average",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","period","type"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartMovingAverageMeta};let WjFlexChartMovingAverage=WjFlexChartMovingAverage_1=class WjFlexChartMovingAverage extends wjcChartAnalytics.MovingAverage{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartMovingAverage.meta={outputs:wjFlexChartMovingAverageMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartMovingAverage=WjFlexChartMovingAverage_1=__decorate([Component({selector:wjFlexChartMovingAverageMeta.selector,template:wjFlexChartMovingAverageMeta.template,inputs:wjFlexChartMovingAverageMeta.inputs,outputs:wjFlexChartMovingAverageMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartMovingAverage_1)},...wjFlexChartMovingAverageMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartMovingAverage);export{WjFlexChartMovingAverage};var wjFlexChartYFunctionSeriesMeta={selector:"wj-flex-chart-y-function-series",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartYFunctionSeriesMeta};let WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeries_1=class WjFlexChartYFunctionSeries extends wjcChartAnalytics.YFunctionSeries{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartYFunctionSeries.meta={outputs:wjFlexChartYFunctionSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeries_1=__decorate([Component({selector:wjFlexChartYFunctionSeriesMeta.selector,template:wjFlexChartYFunctionSeriesMeta.template,inputs:wjFlexChartYFunctionSeriesMeta.inputs,outputs:wjFlexChartYFunctionSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartYFunctionSeries_1)},...wjFlexChartYFunctionSeriesMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartYFunctionSeries);export{WjFlexChartYFunctionSeries};var wjFlexChartParametricFunctionSeriesMeta={selector:"wj-flex-chart-parametric-function-series",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func","xFunc","yFunc"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartParametricFunctionSeriesMeta};let WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeries_1=class WjFlexChartParametricFunctionSeries extends wjcChartAnalytics.ParametricFunctionSeries{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartParametricFunctionSeries.meta={outputs:wjFlexChartParametricFunctionSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeries_1=__decorate([Component({selector:wjFlexChartParametricFunctionSeriesMeta.selector,template:wjFlexChartParametricFunctionSeriesMeta.template,inputs:wjFlexChartParametricFunctionSeriesMeta.inputs,outputs:wjFlexChartParametricFunctionSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartParametricFunctionSeries_1)},...wjFlexChartParametricFunctionSeriesMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartParametricFunctionSeries);export{WjFlexChartParametricFunctionSeries};var wjFlexChartWaterfallMeta={selector:"wj-flex-chart-waterfall",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","relativeData","start","startLabel","showTotal","totalLabel","showIntermediateTotal","intermediateTotalPositions","intermediateTotalLabels","connectorLines","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartWaterfallMeta};let WjFlexChartWaterfall=WjFlexChartWaterfall_1=class WjFlexChartWaterfall extends wjcChartAnalytics.Waterfall{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartWaterfall.meta={outputs:wjFlexChartWaterfallMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartWaterfall=WjFlexChartWaterfall_1=__decorate([Component({selector:wjFlexChartWaterfallMeta.selector,template:wjFlexChartWaterfallMeta.template,inputs:wjFlexChartWaterfallMeta.inputs,outputs:wjFlexChartWaterfallMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartWaterfall_1)},...wjFlexChartWaterfallMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartWaterfall);export{WjFlexChartWaterfall};var wjFlexChartBoxWhiskerMeta={selector:"wj-flex-chart-box-whisker",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","quartileCalculation","groupWidth","gapWidth","showMeanLine","meanLineStyle","showMeanMarker","meanMarkerStyle","showInnerPoints","showOutliers"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartBoxWhiskerMeta};let WjFlexChartBoxWhisker=WjFlexChartBoxWhisker_1=class WjFlexChartBoxWhisker extends wjcChartAnalytics.BoxWhisker{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartBoxWhisker.meta={outputs:wjFlexChartBoxWhiskerMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartBoxWhisker=WjFlexChartBoxWhisker_1=__decorate([Component({selector:wjFlexChartBoxWhiskerMeta.selector,template:wjFlexChartBoxWhiskerMeta.template,inputs:wjFlexChartBoxWhiskerMeta.inputs,outputs:wjFlexChartBoxWhiskerMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartBoxWhisker_1)},...wjFlexChartBoxWhiskerMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartBoxWhisker);export{WjFlexChartBoxWhisker};var wjFlexChartErrorBarMeta={selector:"wj-flex-chart-error-bar",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType","errorBarStyle","value","errorAmount","endStyle","direction"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartErrorBarMeta};let WjFlexChartErrorBar=WjFlexChartErrorBar_1=class WjFlexChartErrorBar extends wjcChartAnalytics.ErrorBar{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartErrorBar.meta={outputs:wjFlexChartErrorBarMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartErrorBar=WjFlexChartErrorBar_1=__decorate([Component({selector:wjFlexChartErrorBarMeta.selector,template:wjFlexChartErrorBarMeta.template,inputs:wjFlexChartErrorBarMeta.inputs,outputs:wjFlexChartErrorBarMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartErrorBar_1)},...wjFlexChartErrorBarMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartErrorBar);export{WjFlexChartErrorBar};var wjFlexChartBreakEvenMeta={selector:"wj-flex-chart-break-even",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fixedCost","variableCost","salesPrice","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartBreakEvenMeta};let WjFlexChartBreakEven=WjFlexChartBreakEven_1=class WjFlexChartBreakEven extends wjcChartAnalytics.BreakEven{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartBreakEven.meta={outputs:wjFlexChartBreakEvenMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartBreakEven=WjFlexChartBreakEven_1=__decorate([Component({selector:wjFlexChartBreakEvenMeta.selector,template:wjFlexChartBreakEvenMeta.template,inputs:wjFlexChartBreakEvenMeta.inputs,outputs:wjFlexChartBreakEvenMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartBreakEven_1)},...wjFlexChartBreakEvenMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartBreakEven);export{WjFlexChartBreakEven};let moduleExports=[WjFlexChartTrendLine,WjFlexChartMovingAverage,WjFlexChartYFunctionSeries,WjFlexChartParametricFunctionSeries,WjFlexChartWaterfall,WjFlexChartBoxWhisker,WjFlexChartErrorBar,WjFlexChartBreakEven],WjChartAnalyticsModule=class WjChartAnalyticsModule{};WjChartAnalyticsModule=__decorate([NgModule({imports:[CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjChartAnalyticsModule);export{WjChartAnalyticsModule};