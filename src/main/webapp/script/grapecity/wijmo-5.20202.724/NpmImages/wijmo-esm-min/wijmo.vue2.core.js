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

import{VueApi}from"wijmo/wijmo.vue2.base";import*as wjcCore from"wijmo/wijmo";var tooltip,WjIncludeDefinition={render:function(i){return VueApi.isV3Plus?VueApi.h("div"):i("div")},props:["src"],mounted:function(){var i=this;wjcCore.httpRequest(this.src,{success:function(e){i.$el.innerHTML=e.response}})}},WjIncludeTag="wj-include";export var WjInclude=VueApi.isV3Plus?WjIncludeDefinition:VueApi.component(WjIncludeTag,WjIncludeDefinition);function registerV3WjInclude(i){i.component(WjIncludeTag,WjInclude)}export var wjFormat=function(i,e){return wjcCore.Globalize.format(i,e)};export var WjFormat=VueApi.isV3Plus?null:VueApi.filter("wj-format",(function(i,e){return wjFormat(i,e)}));function registerV3WjFormat(i){}var tooltipDirectiveDefinition=function(i,e){tooltip||(tooltip=new wjcCore.Tooltip);e.oldValue!==e.value&&tooltip.setTooltip(i,e.value)},WjTooltipTag="wjTooltip";export var WjTooltip=VueApi.isV3Plus?tooltipDirectiveDefinition:VueApi.directive(WjTooltipTag,tooltipDirectiveDefinition);function registerV3WjTooltip(i){i.directive(WjTooltipTag,WjTooltip)}export function registerCore(i){if(VueApi.isV3Plus){registerV3WjInclude(i);registerV3WjFormat(i);registerV3WjTooltip(i)}}