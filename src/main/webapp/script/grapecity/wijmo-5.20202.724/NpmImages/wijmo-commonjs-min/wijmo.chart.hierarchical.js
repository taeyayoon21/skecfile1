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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var TreeMapType,wijmo_1=require("wijmo/wijmo"),wijmo_chart_1=require("wijmo/wijmo.chart"),selfModule=require("wijmo/wijmo.chart.hierarchical"),HierarchicalUtil=function(){function HierarchicalUtil(){}HierarchicalUtil.parseDataToHierarchical=function(e,t,i,r){var a,o=[];if(e instanceof wijmo_1.CollectionView&&e.groups.length>0)o=HierarchicalUtil.parseGroupCV(e,t);else if(e.length>0){wijmo_1.isString(i)&&i.indexOf(",")>-1&&(i=i.split(","));if(r)o=HierarchicalUtil.parseItems(e,t,i,r);else{a=HierarchicalUtil.convertFlatData(e,t,i);o=HierarchicalUtil.parseItems(a,"value",i,"items")}}return o};HierarchicalUtil.parseGroupCV=function(e,t){for(var i=[],r=0,a=e.groups.length;r<a;r++){var o=this.parseGroups(e.groups[r],t);i.push(o)}return i};HierarchicalUtil.parseGroups=function(e,t){var i={};i.name=e.name;i.nameField=e.groupDescription.propertyName;i.item=e.items;if(e.groups&&e.groups.length){i.items=[];for(var r=0,a=e.groups.length;r<a;r++){var o=this.parseGroups(e.groups[r],t);i.items.push(o)}}else e.isBottomLevel&&(i.value=e.getAggregate(wijmo_1.Aggregate.Sum,t));return i};HierarchicalUtil.parseItems=function(e,t,i,r){var a,o=[],n=e.length;for(a=0;a<n;a++)o.push(HierarchicalUtil.parseItem(e[a],t,i,r));return o};HierarchicalUtil.isFlatItem=function(e,t){return!wijmo_1.isArray(e[t])};HierarchicalUtil.convertFlatData=function(e,t,i){var r,a,o=[],n={},l=e.length;for(r=0;r<l;r++){a=e[r];HierarchicalUtil.convertFlatItem(n,a,t,wijmo_1.isArray(i)?i:[i])}HierarchicalUtil.convertFlatToHierarchical(o,n);return o};HierarchicalUtil.convertFlatToHierarchical=function(e,t){var i=t.flatDataOrder;i&&i.forEach((function(i){var r,a={},o=t[i];a[t.field]=i;if(o.flatDataOrder){r=[];HierarchicalUtil.convertFlatToHierarchical(r,o);a.items=r}else a.value=o;e.push(a)}))};HierarchicalUtil.convertFlatItem=function(e,t,i,r){var a,o,n,l;o=(a=r.slice()).shift();if(null==(n=null==(o=wijmo_1.isString(o)?o.trim():o)?i:t[o]))return!1;if(0===a.length){e[n]=t[i]||0;e.flatDataOrder?e.flatDataOrder.push(n):e.flatDataOrder=[n];e.field=o}else{if(null==e[n]){e[n]={};e.flatDataOrder?e.flatDataOrder.push(n):e.flatDataOrder=[n];e.field=o}l=e[n];HierarchicalUtil.convertFlatItem(l,t,i,a)||(e[n]=t[i])}return!0};HierarchicalUtil.parseItem=function(e,t,i,r){var a,o,n,l,s,h={};if(wijmo_1.isArray(r))l=(s=r.slice()).length?s.shift().trim():"";else{s=r;l=r}if(wijmo_1.isArray(i)){o=null==(o=(a=i.slice()).shift())?o:o.trim();h.nameField=null==o?t:o;h.name=null==o?e[t]:e[o];n=e[l];0===a.length?h.value=e[t]:n&&wijmo_1.isArray(n)&&n.length>0?h.items=HierarchicalUtil.parseItems(n,t,a,s):h.value=e[t]||0}else{h.nameField=null==i?t:i;h.name=null==i?e[t]:e[i];null!=(n=e[l])&&wijmo_1.isArray(n)&&n.length>0?h.items=HierarchicalUtil.parseItems(n,t,i,s):h.value=e[t]}h.item=e;return h};HierarchicalUtil.parseFlatItem=function(e,t,i,r){e.items||(e.items=[])};return HierarchicalUtil}();exports.HierarchicalUtil=HierarchicalUtil;!function(e){e[e.Squarified=0]="Squarified";e[e.Horizontal=1]="Horizontal";e[e.Vertical=2]="Vertical"}(TreeMapType=exports.TreeMapType||(exports.TreeMapType={}));var TreeMap=function(e){__extends(TreeMap,e);function TreeMap(t,i){var r=e.call(this,t,null,!0)||this;r._values=[];r._labels=[];r._areas=[];r._sum=0;r._keywords=new wijmo_chart_1._KeyWords;r._processedData=[];r._depth=1;r._itemIndex=0;r._processedItem=[];r._maxDepth=-1;r._tmItems=[];r._colRowLens=[];r._defPalette=[{titleColor:"#033884",maxColor:"#1450a7",minColor:"#83b3f9"},{titleColor:"#a83100",maxColor:"#dc4a0d",minColor:"#ffb190"},{titleColor:"#006658",maxColor:"#008d7a",minColor:"#7deddf"},{titleColor:"#a10046",maxColor:"#df0061",minColor:"#ff8cbe"},{titleColor:"#784d08",maxColor:"#99681a",minColor:"#efc989"},{titleColor:"#54156f",maxColor:"#722a90",minColor:"#cf95e7"},{titleColor:"#998605",maxColor:"#c2ac19",minColor:"#ffef8b"},{titleColor:"#9a0005",maxColor:"#c80c14",minColor:"#ff888d"}];r.applyTemplate("wj-control wj-flexchart wj-treemap",null,null);r._currentRenderEngine=new wijmo_chart_1._SvgRenderEngine(r.hostElement);r._legend=new wijmo_chart_1.Legend(r);r._legend.position=wijmo_chart_1.Position.None;r._tooltip=new wijmo_chart_1.ChartTooltip;r._tooltip.content="<b>{name}</b><br/>{value}";r._tooltip.showDelay=0;r._lbl=new wijmo_chart_1.DataLabel;r._lbl.position=wijmo_chart_1.LabelPosition.Center;r._lbl._chart=r;r.hostElement.addEventListener("mousemove",(function(e){r.isTouching||r._toogleTooltip(e)}));r.hostElement.addEventListener("click",(function(e){var t=!0;if(r.maxDepth>0){var i=r.hitTest(e),a=wijmo_chart_1.FlexChart._SELECTION_THRESHOLD;r.tooltip&&r.tooltip.threshold&&(a=r.tooltip.threshold);if(i.distance<=a&&i.pointIndex>=-1&&i.pointIndex<r._areas.length){var o=r._areas[i.pointIndex];if(r._currentItem!=o.item){r._currentItem=o.item;r._refreshChart();t=!1}}}t&&r.isTouching&&r._toogleTooltip(e)}));r.hostElement.addEventListener("contextmenu",(function(e){if(r.maxDepth>0){var t=r.hitTest(e),i=wijmo_chart_1.FlexChart._SELECTION_THRESHOLD;r.tooltip&&r.tooltip.threshold&&(i=r.tooltip.threshold);t.distance<=i&&r._rollUp()}e.preventDefault();return!1}));r.hostElement.addEventListener("mouseleave",(function(){r._hideToolTip()}));r.initialize(i);r.refresh();return r}TreeMap.prototype._rollUp=function(){this._currentItem=this._currentItem&&this._currentItem.parent?this._currentItem.parent:null;this._refreshChart()};TreeMap.prototype._toogleTooltip=function(e){var t=this._tooltip;if(t.content){var i=this.hitTest(e);if(i.distance<=t.threshold){var r=this._getLabelContent(i,this.tooltip.content);this._showToolTip(r,new wijmo_1.Rect(e.clientX,e.clientY,5,5))}else this._hideToolTip()}};Object.defineProperty(TreeMap.prototype,"selectionMode",{get:function(){return wijmo_chart_1.SelectionMode.None},set:function(e){},enumerable:!0,configurable:!0});Object.defineProperty(TreeMap.prototype,"_treeMapItems",{get:function(){return this._tmItems},enumerable:!0,configurable:!0});Object.defineProperty(TreeMap.prototype,"tooltip",{get:function(){return this._tooltip},enumerable:!0,configurable:!0});Object.defineProperty(TreeMap.prototype,"binding",{get:function(){return this._binding},set:function(e){if(e!=this._binding){this._binding=wijmo_1.asString(e,!0);this._bindChart()}},enumerable:!0,configurable:!0});Object.defineProperty(TreeMap.prototype,"type",{get:function(){return null==this._type?TreeMapType.Squarified:this._type},set:function(e){if((e=wijmo_1.asEnum(e,TreeMapType))!=this._type){this._type=e;this.invalidate()}},enumerable:!0,configurable:!0});Object.defineProperty(TreeMap.prototype,"bindingName",{get:function(){return this._bindingName},set:function(e){if(e!=this._bindingName){wijmo_1.assert(null==e||wijmo_1.isArray(e)||wijmo_1.isString(e),"bindingName should be an array or a string.");this._bindingName=e;this._bindChart()}},enumerable:!0,configurable:!0});Object.defineProperty(TreeMap.prototype,"dataLabel",{get:function(){return this._lbl},set:function(e){if(e!=this._lbl){this._lbl=e;this._lbl&&(this._lbl._chart=this)}},enumerable:!0,configurable:!0});Object.defineProperty(TreeMap.prototype,"childItemsPath",{get:function(){return this._childItemsPath},set:function(e){if(e!=this._childItemsPath){wijmo_1.assert(null==e||wijmo_1.isArray(e)||wijmo_1.isString(e),"childItemsPath should be an array or a string.");this._childItemsPath=e;this._bindChart()}},enumerable:!0,configurable:!0});Object.defineProperty(TreeMap.prototype,"maxDepth",{get:function(){return this._maxDepth},set:function(e){if(e!=this._maxDepth){this._maxDepth=wijmo_1.asNumber(e,!0);this.invalidate()}},enumerable:!0,configurable:!0});Object.defineProperty(TreeMap.prototype,"palette",{get:function(){return this._palette},set:function(e){if(e!=this._palette){this._palette=wijmo_1.asArray(e);this._tmItems&&this._tmItems.length>0&&this._calculateColorForItems(this._tmItems);this.invalidate()}},enumerable:!0,configurable:!0});TreeMap.prototype._initData=function(){this._sum=0;this._tmItems=[];this._currentItem=null;this._values=[];this._labels=[];this._processedData=[];this._depth=1;this._processedItem=[]};TreeMap.prototype._performBind=function(){var e;this._initData();if(this._cv){e=this._cv.items;this._cv.groups&&this._cv.groups.length?this._processedData=HierarchicalUtil.parseDataToHierarchical(this._cv,this.binding,this.bindingName,this.childItemsPath):e&&(this._processedData=HierarchicalUtil.parseDataToHierarchical(e,this.binding,this.bindingName,this.childItemsPath));if(this._processedData&&this._processedData.length){this._sum=this._calculateValueAndDepth(this._processedData,1);this._sortData(this._processedData);this._values=[];this._getTMItemsAndLabelsAndValues(this._processedData,this._tmItems,1,null);this._calculateColorForItems(this._tmItems)}}};TreeMap.prototype._sortData=function(e){var t=this;e.forEach((function(e){e.items&&t._sortData(e.items)}));e.sort((function(e,t){return t.value-e.value}))};TreeMap.prototype._getTMItemsAndLabelsAndValues=function(e,t,i,r,a){var o=this;e&&e.length>0&&e.forEach((function(e,a){var n,l=new _TreeMapItem;l.items=[];l.parent=r;l.depth=i;e.items&&o._getTMItemsAndLabelsAndValues(e.items,l.items,i+1,l);n=e.name?e.name:e.value.toString();l.label=n;l.value=e.value;if(null!=r){e.value>r.maxValue&&(r.maxValue=e.value);e.value<r.minValue&&(r.minValue=e.value)}t.push(l);o._labels.push(n);o._values.push(e.value)}))};TreeMap.prototype._calculateColorForItems=function(e,t,i){var r=this,a=i;e.forEach((function(e,i){var o=t;1===e.depth&&(o=r._getColor(i));e.palette=o;var n=e.palette;if(wijmo_1.isString(n)){var l=n,s=r._getLightColor(l);e.titleFill=l;e.titleStroke=l;e.fill=s;e.stroke=l}else if(n.maxColor&&n.minColor&&n.titleColor){e.titleFill=n.titleColor;e.titleStroke=n.titleColor;if(null==e.parent){e.fill=n.maxColor;e.stroke=n.maxColor}else{null==a&&(a=new _ColorConverter(n.minColor,e.minValue,n.maxColor,e.maxValue));var h=a._calculateColorByVal(e.value,!0).toString();e.fill=h;e.stroke=h}}if(e.items&&e.items.length>0){var _=new _ColorConverter(n.minColor,e.minValue,n.maxColor,e.maxValue);r._calculateColorForItems(e.items,o,_)}}))};TreeMap.prototype._getBindData=function(e,t,i){var r,a=0;i&&(r=e[i]);a=0;wijmo_1.isNumber(r)?a=wijmo_1.asNumber(r):r&&(a=parseFloat(r.toString()));if(!isNaN(a)&&isFinite(a))t.push(a);else{a=0;t.push(a)}return a};TreeMap.prototype._calculateValueAndDepth=function(e,t){var i=this,r=0,a=this._values;this._depth<t&&(this._depth=t);e.forEach((function(e){var o;if(e.items){o=i._calculateValueAndDepth(e.items,t+1);e.value=o;a.push(o)}else{o=i._getBindData(e,a,"value");e.value=o}r+=o}));return r};TreeMap.prototype._prepareRender=function(){this._areas=[]};TreeMap.prototype._renderChart=function(e,t,i){var r,a,o,n=this._rectChart.clone();new wijmo_1.Size(n.width,n.height);this.onRendering(new wijmo_chart_1.RenderEventArgs(e));var l=t.width,s=t.height;this._tmGroup=e.startGroup(null,null,!0);var h=this._parseMargin(this.plotMargin);this.dataLabel;isNaN(h.left)&&(h.left=TreeMap._MARGIN);isNaN(h.right)&&(h.right=TreeMap._MARGIN);isNaN(h.top)&&(h.top=TreeMap._MARGIN);isNaN(h.bottom)&&(h.bottom=TreeMap._MARGIN);t.top+=h.top;s=t.height-(h.top+h.bottom);t.height=s>0?s:24;t.left+=h.left;l=t.width-(h.left+h.right);t.width=l>0?l:24;this._plotRect=t;r=this._currentItem?[this._currentItem]:this._tmItems;a=null==this._currentItem||this.maxDepth<1?this.maxDepth:this._currentItem&&this._currentItem.items&&this._currentItem.items.length&&this.maxDepth>1?this.maxDepth:this.maxDepth+1;o=this._currentItem?this._currentItem.value:this._sum;this._renderTreeMap(e,t,this._tmGroup,r,o,a);e.endGroup();this.dataLabel.content&&this.dataLabel.position!=wijmo_chart_1.LabelPosition.None&&this._renderLabels(e);this.onRendered(new wijmo_chart_1.RenderEventArgs(e))};TreeMap.prototype._renderTreeMap=function(e,t,i,r,a,o){if(a>0){this._itemIndex=0;this._resetItemRects(this._tmItems);this._calculateItemRects(t,r,a,1,o);this._renderHierarchicalTreeMapItems(e,i,t,this._tmItems,a,1,o)}};TreeMap.prototype._resetItemRects=function(e){var t=this;e.forEach((function(e){e.rect=new wijmo_1.Rect(0,0,0,0);e.isTitle=!1;e.type=t.type;e.items&&e.items.length&&t._resetItemRects(e.items)}))};TreeMap.prototype._calculateItemRects=function(e,t,i,r,a){var o=this;switch(this.type){case TreeMapType.Horizontal:_TreeMapUtils.horizontal(t,e,i);break;case TreeMapType.Vertical:_TreeMapUtils.vertical(t,e,i);break;case TreeMapType.Squarified:_TreeMapUtils.squarified(t,e,i)}t.forEach((function(e,t){e.rect.clone();if(e.items&&e.items.length)if(r===a);else if(r>a&&a>=1);else{e.isTitle=!0;o._calculateItemRects(e.itemsRect,e.items,e.value,r+1,a)}}))};TreeMap.prototype._renderHierarchicalTreeMapItems=function(e,t,i,r,a,o,n){var l,s,h,_,c,u=r.length;this.type;if(0!==u)for(var p=0;p<u;p++){l=e.startGroup(TreeMap._CSS_ITEMDEPTH+o);s=r[p];h=Math.abs(s.value);_=s.rect;s.draw(e);c=new wijmo_chart_1._RectArea(_);s.items&&this._renderHierarchicalTreeMapItems(e,l,s.itemsRect,s.items,h,o+1,n);c.tag=this._itemIndex;c.name=s.label;c.value=h;c.item=s;this._areas.push(c);this._itemIndex++;e.endGroup()}};TreeMap.prototype._renderLabels=function(e){var t,i=this._areas.length,r=this.dataLabel,a=r.position,o=r.connectingLine,n=r.border,l=r.offset||0;e.stroke="null";e.fill="transparent";e.strokeWidth=1;e.startGroup("wj-data-labels");for(var s=0;s<i;s++){var h=this._areas[s];if(h){var _=h.rect,c=new wijmo_chart_1.HitTestInfo(this,t);c._setData(null,s);var u=this._getLabelContent(c,r.content);t=new wijmo_1.Point(_.left+_.width/2,_.top+_.height/2);if(u&&_.width>0&&_.height>0){var p=new wijmo_chart_1.DataLabelRenderEventArgs(e,c,t,u);if(r.onRendering(p)){u=p.text;t=p.point;this._renderLabelAndBorder(e,h,_,u,a,l,t,o,2,n)}}}}e.endGroup()};TreeMap.prototype._renderLabelAndBorder=function(e,t,i,r,a,o,n,l,s,h){var _,c="wj-data-label",u="wj-data-label-line";switch(a){case wijmo_chart_1.LabelPosition.Top:l&&e.drawLine(n.x,n.y,n.x,n.y-o,u);n.y-=s+o;_=this._renderText(e,t,i,r,n,1,2,c);break;case wijmo_chart_1.LabelPosition.Bottom:l&&e.drawLine(n.x,n.y,n.x,n.y+o,u);n.y+=s+o;_=this._renderText(e,t,i,r,n,1,0,c);break;case wijmo_chart_1.LabelPosition.Left:l&&e.drawLine(n.x,n.y,n.x-o,n.y,u);n.x-=s+o;_=this._renderText(e,t,i,r,n,2,1,c);break;case wijmo_chart_1.LabelPosition.Right:l&&e.drawLine(n.x,n.y,n.x+o,n.y,u);n.x+=s+o;_=this._renderText(e,t,i,r,n,0,1,c);break;case wijmo_chart_1.LabelPosition.Center:_=this._renderText(e,t,i,r,n,1,1,c)}h&&_&&e.drawRect(_.left-s,_.top-s,_.width+2*s,_.height+2*s,"wj-data-label-border");return _};TreeMap.prototype._renderText=function(e,t,i,r,a,o,n,l){var s,h=r,_=t.item;s=e.measureString(r,l);if(this.type===TreeMapType.Horizontal&&_.isTitle){s.width>i.height&&(h=this._cutText(r,s.width,i.height));wijmo_chart_1.FlexChart._renderRotatedText(e,h,a,o,n,a,-90,l);return null}s.width>i.width&&(h=this._cutText(r,s.width,i.width));return wijmo_chart_1.FlexChart._renderText(e,h,a,o,n,l)};TreeMap.prototype._cutText=function(e,t,i){var r="",a=e.length,o=Math.floor((1-(t-i)/t)*a);e.length>0&&(r=e[0]+(o>1?e.substring(1,o-1)+"..":""));return r};TreeMap.prototype._measureLegendItem=function(e,t){var i=new wijmo_1.Size;i.width=wijmo_chart_1.Series._LEGEND_ITEM_WIDTH;i.height=wijmo_chart_1.Series._LEGEND_ITEM_HEIGHT;if(t){var r=e.measureString(t,wijmo_chart_1.FlexChart._CSS_LABEL,wijmo_chart_1.FlexChart._CSS_LEGEND);i.width+=r.width;i.height<r.height&&(i.height=r.height)}i.width+=3*wijmo_chart_1.Series._LEGEND_ITEM_MARGIN;i.height+=2*wijmo_chart_1.Series._LEGEND_ITEM_MARGIN;return i};TreeMap.prototype._getDesiredLegendSize=function(e,t,i,r){var a=new wijmo_1.Size,o=(new wijmo_1.Size(i,r),this._tmItems.length),n=0,l=0;this._colRowLens=[];for(var s=0;s<o;s++){var h=this._measureLegendItem(e,this._tmItems[s].label);if(t){if(l+h.height>r){a.height=r;this._colRowLens.push(n);n=0;l=0}n<h.width&&(n=h.width);l+=h.height}else{if(n+h.width>i){a.width=i;this._colRowLens.push(l);l=0;n=0}l<h.height&&(l=h.height);n+=h.width}}if(t){a.height<l&&(a.height=l);this._colRowLens.push(n);a.width=this._colRowLens.reduce((function(e,t){return e+t}),0);a.width=this._getLegendSize(i,a.width)}else{a.width<n&&(a.width=n);this._colRowLens.push(l);a.height=this._colRowLens.reduce((function(e,t){return e+t}),0);a.height=this._getLegendSize(r,a.height)}return a};TreeMap.prototype._renderLegend=function(e,t,i,r,a,o){for(var n,l=this._rectLegend,s=this._tmItems.length,h=0,_=t.clone(),c=0;c<s;c++){n=this._tmItems[c].label;var u=this._measureLegendItem(e,n);if(r){if(_.y+u.height>l.top+l.height+1){_.x+=this._colRowLens[h];h++;_.y=t.y}}else if(_.x+u.width>l.left+l.width+1){_.y+=this._colRowLens[h];h++;_.x=t.x}var p=new wijmo_1.Rect(_.x,_.y,u.width,u.height);this._drawLegendItem(e,p,c,n);i.push(p);r?_.y+=u.height:_.x+=u.width}};TreeMap.prototype._drawLegendItem=function(e,t,i,r){e.strokeWidth=1;var a=wijmo_chart_1.Series._LEGEND_ITEM_MARGIN,o=this._getColor(i),n=o&&o.maxColor?o.maxColor:o,l=this._getLightColor(n);e.fill=n;e.stroke=l;var s=t.top+.5*t.height,h=wijmo_chart_1.Series._LEGEND_ITEM_WIDTH,_=wijmo_chart_1.Series._LEGEND_ITEM_HEIGHT;e.drawRect(t.left+a,s-.5*_,h,_,null);r&&wijmo_chart_1.FlexChart._renderText(e,r,new wijmo_1.Point(t.left+_+2*a,s),0,1,wijmo_chart_1.FlexChart._CSS_LABEL)};TreeMap.prototype._getLabelContent=function(e,t){return wijmo_1.isString(t)?this._keywords.replace(t,e):wijmo_1.isFunction(t)?t(e):null};TreeMap.prototype.hitTest=function(e,t){var i=this._toControl(e,t),r=new wijmo_chart_1.HitTestInfo(this,i),a=null;if(wijmo_chart_1.FlexChart._contains(this._rectHeader,i))r._chartElement=wijmo_chart_1.ChartElement.Header;else if(wijmo_chart_1.FlexChart._contains(this._rectFooter,i))r._chartElement=wijmo_chart_1.ChartElement.Footer;else if(wijmo_chart_1.FlexChart._contains(this._rectLegend,i)){r._chartElement=wijmo_chart_1.ChartElement.Legend;null!==(a=this.legend._hitTest(i))&&a>=0&&a<this._areas.length&&r._setData(null,a)}else if(wijmo_chart_1.FlexChart._contains(this._rectChart,i)){for(var o,n=this._areas.length,l=NaN,s=0;s<n;s++){var h=i.clone(),_=this._areas[s];if(_.contains(h)){r._setData(null,_.tag);r._dist=0}var c=_.distance(h);if(void 0!==c&&(isNaN(l)||c<l)){l=c;o=_}}if(0!==r._dist&&null!=o){r._setData(null,o.tag);r._dist=l}r._chartElement=wijmo_chart_1.ChartElement.ChartArea}else r._chartElement=wijmo_chart_1.ChartElement.None;return r};TreeMap.prototype._getHitTestItem=function(e){var t=null,i=null;(t=null!=this._cv?this._cv.items:this.itemsSource)&&e<t.length&&(i=t[e]);return i};TreeMap.prototype._getHitTestValue=function(e){return this._values[e]};TreeMap.prototype._getHitTestLabel=function(e){return this._labels[e]};TreeMap._CSS_ITEMDEPTH="wj-treemap-item-depth";TreeMap._MARGIN=0;return TreeMap}(wijmo_chart_1.FlexChartBase);exports.TreeMap=TreeMap;var _TreeMapItem=function(){function _TreeMapItem(){this.items=[];this.maxValue=Number.MIN_VALUE;this.minValue=Number.MAX_VALUE}_TreeMapItem.prototype.draw=function(e){var t=this.rect;e.strokeWidth=0;if(this.isTitle){e.fill=this.titleFill;e.stroke=this.titleStroke}else{e.fill=this.fill;e.stroke=this.stroke}e.drawRect(t.left,t.top,t.width,t.height,_TreeMapItem._CLASSNAME)};Object.defineProperty(_TreeMapItem.prototype,"itemsRect",{get:function(){var e=this.rect,t=this._rect,i=1===this.depth?2:.5;return this.isTitle?this.type===TreeMapType.Horizontal?new wijmo_1.Rect(e.left+e.width+1,e.top,t.width-e.width-2*i,e.height+1):new wijmo_1.Rect(e.left,e.top+e.height+1,e.width+1,t.height-e.height-2*i):new wijmo_1.Rect(0,0,0,0)},enumerable:!0,configurable:!0});Object.defineProperty(_TreeMapItem.prototype,"rect",{get:function(){var e=this._rect,t=1===this.depth?2:.5,i=e.width,r=e.height,a=e.left,o=e.top;if(this.isTitle){if(this.type===TreeMapType.Horizontal){i=e.width>20?20:i;i=Math.max(20,i-2*t);r=r>2*t?r-2*t:0}else{r=e.height>20?20:r;r=Math.max(20,r-2*t);i=i>2*t?i-2*t:0}a+=t;o+=t}else{i=i>2*t?i-2*t:0;r=r>2*t?r-2*t:0}return new wijmo_1.Rect(a,o,i,r)},set:function(e){e!=this._rect&&(this._rect=e)},enumerable:!0,configurable:!0});Object.defineProperty(_TreeMapItem.prototype,"isTitle",{get:function(){return this._isTitle},set:function(e){var t=wijmo_1.asBoolean(e,!0);t!==this._isTitle&&(this._isTitle=t)},enumerable:!0,configurable:!0});_TreeMapItem._CLASSNAME="wj-treemap-item";return _TreeMapItem}(),_ColorConverter=function(){function _ColorConverter(e,t,i,r,a,o){this.minColor=new wijmo_1.Color(e);this.minColorValue=t;this.maxColor=new wijmo_1.Color(i);this.maxColorValue=r;this.midColorValue=this.originalMidColorValue=o;this._calculateMidColorValue();this.midColor=this.originalMidColor=new wijmo_1.Color(a);this._calculateMidColor()}_ColorConverter.prototype._resetminColor=function(e){this.minColor=new wijmo_1.Color(e);this._calculateMidColor()};_ColorConverter.prototype._resetmidColor=function(e){this.midColor=this.originalMidColor=new wijmo_1.Color(e);this._calculateMidColor()};_ColorConverter.prototype._resetmaxColor=function(e){this.maxColor=new wijmo_1.Color(e);this._calculateMidColor()};_ColorConverter.prototype._resetminColorValue=function(e){this.minColorValue=e;this._calculateMidColorValue()};_ColorConverter.prototype._resetmidColorValue=function(e){this.midColorValue=this.originalMidColorValue=e;this._calculateMidColorValue()};_ColorConverter.prototype._resetmaxColorValue=function(e){this.maxColorValue=e;this._calculateMidColorValue()};_ColorConverter.prototype._calculateMidColorValue=function(){null==this.originalMidColorValue&&(this.midColorValue=(this.maxColorValue+this.minColorValue)/2)};_ColorConverter.prototype._calculateMidColor=function(){null==this.originalMidColor&&(this.midColor=this._calculateColorByVal(this.midColorValue,!0))};_ColorConverter.prototype._calculateColorByVal=function(e,t){void 0===t&&(t=!1);var i=this.maxColor,r=this.minColor,a=this.maxColorValue,o=this.minColorValue;if(e>=this.maxColorValue)return new wijmo_1.Color(i.toString());if(e<=this.minColorValue)return new wijmo_1.Color(r.toString());if(!t){if(e===this.midColorValue)return new wijmo_1.Color(this.midColor.toString());if(e<this.midColorValue){i=this.midColor;a=this.midColorValue}else{r=this.midColor;o=this.midColorValue}}return this._getColor(e,i,a,r,o)};_ColorConverter.prototype._getColor=function(e,t,i,r,a){return wijmo_1.Color.fromRgba(this._getValueByRatio(e,t.r,i,r.r,a),this._getValueByRatio(e,t.g,i,r.g,a),this._getValueByRatio(e,t.b,i,r.b,a),this._getValueByRatio(e,t.a,i,r.a,a))};_ColorConverter.prototype._getValueByRatio=function(e,t,i,r,a){return Math.abs(r+Math.round((e-a)*(t-r)/(i-a)))};return _ColorConverter}(),_TreeMapUtils=function(){function _TreeMapUtils(){}_TreeMapUtils.squarified=function(e,t,i){var r=e.slice(),a=t.clone(),o=a.width*a.height/i;do{var n=_TreeMapUtils.getRowedItems(r,a,o);_TreeMapUtils.layoutRowedItems(t,n,a,a.width>a.height)}while(r.length)};_TreeMapUtils.horizontal=function(e,t,i){var r=t.clone();e.forEach((function(e){var a=[{item:e,val:e.value*t.width*t.height/i}];_TreeMapUtils.layoutRowedItems(t,a,r,!1)}))};_TreeMapUtils.vertical=function(e,t,i){var r=t.clone();e.forEach((function(e){var a=[{item:e,val:e.value*t.width*t.height/i}];_TreeMapUtils.layoutRowedItems(t,a,r,!0)}))};_TreeMapUtils.getNarrowLen=function(e){return Math.min(e.width,e.height)};_TreeMapUtils.getRowedItem=function(e,t,i){return{item:e,val:i*e.value}};_TreeMapUtils.getRowedItems=function(e,t,i){var r=e.shift(),a=[],o=[],n=_TreeMapUtils.getNarrowLen(t),l=_TreeMapUtils.getRowedItem(r,t,i);a.push(l);o.push(l);if(e.length>0)do{o.push(_TreeMapUtils.getRowedItem(e[0],t,i));if(!(_TreeMapUtils.worst(a,n)>_TreeMapUtils.worst(o,n)))break;a=o.slice();e.shift()}while(e.length);return a};_TreeMapUtils.layoutRowedItems=function(e,t,i,r){var a,o=i.left,n=i.top,l=o+i.width,s=n+i.height,h=_TreeMapUtils.sumRowedArray(t);if(r){a=0===i.height?0:h/i.height;o+a>=l&&(a=l-o);t.forEach((function(e,i){var r=0===a?0:e.val/a;(n+r>s||i===t.length-1)&&(r=s-n);var l=new wijmo_1.Rect(o,n,a,r);e.item.rect=l;n+=r}));i.left+=a;i.width-=a}else{a=0===i.width?0:h/i.width;n+a>=s&&(a=s-n);t.forEach((function(e,i){var r=0===a?0:e.val/a;(o+r>l||i===t.length-1)&&(r=l-o);var s=new wijmo_1.Rect(o,n,r,a);e.item.rect=s;o+=r}));i.top+=a;i.height-=a}};_TreeMapUtils.sumRowedArray=function(e){for(var t=0,i=e.length,r=0;r<i;r++)t+=e[r].val;return t};_TreeMapUtils.worst=function(e,t){var i,r,a=_TreeMapUtils.sumRowedArray(e),o=a*a,n=t*t;i=r=e[0].val;e.forEach((function(e,t){e.val>i?i=e.val:e.val<r&&(r=e.val)}));return Math.max(n*i/o,o/(n*r))};return _TreeMapUtils}(),Sunburst=function(e){__extends(Sunburst,e);function Sunburst(t,i){var r=e.call(this,t,i)||this;r._selectionIndex=0;r.applyTemplate("wj-sunburst",null,null);r.initialize(i);r.refresh();return r}Object.defineProperty(Sunburst.prototype,"bindingName",{get:function(){return this._bindName},set:function(e){if(e!=this._bindName){wijmo_1.assert(null==e||wijmo_1.isArray(e)||wijmo_1.isString(e),"bindingName should be an array or a string.");this._bindName=e;this._bindChart()}},enumerable:!0,configurable:!0});Object.defineProperty(Sunburst.prototype,"childItemsPath",{get:function(){return this._childItemsPath},set:function(e){if(e!=this._childItemsPath){wijmo_1.assert(null==e||wijmo_1.isArray(e)||wijmo_1.isString(e),"childItemsPath should be an array or a string.");this._childItemsPath=e;this._bindChart()}},enumerable:!0,configurable:!0});Sunburst.prototype._initData=function(){e.prototype._initData.call(this);this._processedData=[];this._level=1;this._legendLabels=[];this._processedItem=[];this._values[0]=[]};Sunburst.prototype._performBind=function(){var e,t=this;this._initData();if(this._cv){e=this._cv.items;this._cv.groups&&this._cv.groups.length?this._processedData=HierarchicalUtil.parseDataToHierarchical(this._cv,this.binding,this.bindingName,this.childItemsPath):e&&(this._processedData=HierarchicalUtil.parseDataToHierarchical(e,this.binding,this.bindingName,this.childItemsPath));if(this._processedData&&this._processedData.length){this._sums[0]=this._sum=this._calculateValueAndLevel(this._processedData,1);this._processedData.forEach((function(e){t._legendLabels.push(e.name)}))}}};Sunburst.prototype._calculateValueAndLevel=function(e,t){var i=this,r=0,a=this._values[0],o=this._labels;this._level<t&&(this._level=t);e.forEach((function(e){var n;if(e.items){n=i._calculateValueAndLevel(e.items,t+1);e.value=n;a.push(n);o.push(e.name)}else{n=i._getBindData(e,a,o,"value","name");e.value=n}r+=n}));return r};Sunburst.prototype._renderPie=function(e,t,i,r,a,o){var n=this._getCenter();this._sliceIndex=0;this._parentRef={};this._renderHierarchicalSlices(e,n.x,n.y,this._processedData,this._sum,i,r,a,2*Math.PI,o,1)};Sunburst.prototype._renderHierarchicalSlices=function(e,t,i,r,a,o,n,l,s,h,_){var c,u,p,m,d,f,g,w,v,C,T=r.length,b=l,M=1==this.reversed;p=(o-n)/this._level;c=o-(this._level-_)*p;u=n+(_-1)*p;for(var y=0;y<T;y++){w=t;v=i;g=e.startGroup("wj-slice slice-level"+_);if(1===_){e.fill=this._getColorLight(y);e.stroke=this._getColor(y)}d=r[y];f=Math.abs(d.value);m=Math.abs(f-a)<1e-10?s:s*f/a;C=M?b-.5*m:b+.5*m;if(h>0&&m<s){w+=h*Math.cos(C);v+=h*Math.sin(C)}if(d.items){var I=this._sliceIndex;this._renderHierarchicalSlices(e,w,v,d.items,f,o,n,b,m,0,_+1);for(;I<this._sliceIndex;I++)null==this._parentRef[I]&&(this._parentRef[I]=this._sliceIndex)}this._renderSlice(e,w,v,C,0,this._sliceIndex,c,u,b,m,s);this._processedItem.push(d.item);this._sliceIndex++;M?b-=m:b+=m;e.endGroup();this._pels.push(g)}};Sunburst.prototype._getLabelsForLegend=function(){return this._legendLabels||[]};Sunburst.prototype._highlightCurrent=function(){this.selectionMode!=wijmo_chart_1.SelectionMode.None&&this._highlight(!0,this._selectionIndex)};Sunburst.prototype.hitTest=function(t,i){var r=e.prototype.hitTest.call(this,t,i),a=this._toControl(t,i);if(wijmo_chart_1.FlexChartBase._contains(this._rectChart,a)){var o=r.pointIndex,n=this._processedItem[o],l=new wijmo_chart_1._DataPoint(null,o,null,null);l.item=n;r._setDataPoint(l)}return r};Sunburst.prototype._getSelectedItemOffset=function(e,t){var i=0,r=0,a=0;if(this.selectedItemOffset>0)if(e==this.selectedIndex)a=this.selectedItemOffset;else{var o=this._getSelectedParentIndex(e);if(null!=o){var n=this._areas[o];this.dataLabel.position;a=this.selectedItemOffset;t=((t=n.langle+this._rotationAngles[0])%360+360)%360;t*=Math.PI/180}}if(a>0){i=Math.cos(t)*a*this._radius;r=Math.sin(t)*a*this._radius}return{x:i,y:r}};Sunburst.prototype._getSelectedParentIndex=function(e){var t=this._parentRef[e];return null!=t?t===this.selectedIndex?t:this._getSelectedParentIndex(t):null};return Sunburst}(wijmo_chart_1.FlexPie);exports.Sunburst=Sunburst;wijmo_1._registerModule("wijmo.chart.hierarchical",selfModule);