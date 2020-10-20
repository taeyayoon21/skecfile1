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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_1=require("wijmo/wijmo"),wijmo_chart_1=require("wijmo/wijmo.chart"),selfModule=require("wijmo/wijmo.chart.hierarchical");class HierarchicalUtil{static parseDataToHierarchical(t,e,i,r){var a,s=[];if(t instanceof wijmo_1.CollectionView&&t.groups.length>0)s=HierarchicalUtil.parseGroupCV(t,e);else if(t.length>0){wijmo_1.isString(i)&&i.indexOf(",")>-1&&(i=i.split(","));if(r)s=HierarchicalUtil.parseItems(t,e,i,r);else{a=HierarchicalUtil.convertFlatData(t,e,i);s=HierarchicalUtil.parseItems(a,"value",i,"items")}}return s}static parseGroupCV(t,e){for(var i=[],r=0,a=t.groups.length;r<a;r++){var s=this.parseGroups(t.groups[r],e);i.push(s)}return i}static parseGroups(t,e){var i={};i.name=t.name;i.nameField=t.groupDescription.propertyName;i.item=t.items;if(t.groups&&t.groups.length){i.items=[];for(var r=0,a=t.groups.length;r<a;r++){var s=this.parseGroups(t.groups[r],e);i.items.push(s)}}else t.isBottomLevel&&(i.value=t.getAggregate(wijmo_1.Aggregate.Sum,e));return i}static parseItems(t,e,i,r){var a,s=[],l=t.length;for(a=0;a<l;a++)s.push(HierarchicalUtil.parseItem(t[a],e,i,r));return s}static isFlatItem(t,e){return!wijmo_1.isArray(t[e])}static convertFlatData(t,e,i){var r,a,s=[],l={},h=t.length;for(r=0;r<h;r++){a=t[r];HierarchicalUtil.convertFlatItem(l,a,e,wijmo_1.isArray(i)?i:[i])}HierarchicalUtil.convertFlatToHierarchical(s,l);return s}static convertFlatToHierarchical(t,e){var i=e.flatDataOrder;i&&i.forEach(i=>{var r,a={},s=e[i];a[e.field]=i;if(s.flatDataOrder){r=[];HierarchicalUtil.convertFlatToHierarchical(r,s);a.items=r}else a.value=s;t.push(a)})}static convertFlatItem(t,e,i,r){var a,s,l,h;s=(a=r.slice()).shift();if(null==(l=null==(s=wijmo_1.isString(s)?s.trim():s)?i:e[s]))return!1;if(0===a.length){t[l]=e[i]||0;t.flatDataOrder?t.flatDataOrder.push(l):t.flatDataOrder=[l];t.field=s}else{if(null==t[l]){t[l]={};t.flatDataOrder?t.flatDataOrder.push(l):t.flatDataOrder=[l];t.field=s}h=t[l];HierarchicalUtil.convertFlatItem(h,e,i,a)||(t[l]=e[i])}return!0}static parseItem(t,e,i,r){var a,s,l,h,o,n={};if(wijmo_1.isArray(r))h=(o=r.slice()).length?o.shift().trim():"";else{o=r;h=r}if(wijmo_1.isArray(i)){s=null==(s=(a=i.slice()).shift())?s:s.trim();n.nameField=null==s?e:s;n.name=null==s?t[e]:t[s];l=t[h];0===a.length?n.value=t[e]:l&&wijmo_1.isArray(l)&&l.length>0?n.items=HierarchicalUtil.parseItems(l,e,a,o):n.value=t[e]||0}else{n.nameField=null==i?e:i;n.name=null==i?t[e]:t[i];null!=(l=t[h])&&wijmo_1.isArray(l)&&l.length>0?n.items=HierarchicalUtil.parseItems(l,e,i,o):n.value=t[e]}n.item=t;return n}static parseFlatItem(t,e,i,r){t.items||(t.items=[])}}exports.HierarchicalUtil=HierarchicalUtil;var TreeMapType;!function(t){t[t.Squarified=0]="Squarified";t[t.Horizontal=1]="Horizontal";t[t.Vertical=2]="Vertical"}(TreeMapType=exports.TreeMapType||(exports.TreeMapType={}));class TreeMap extends wijmo_chart_1.FlexChartBase{constructor(t,e){super(t,null,!0);this._values=[];this._labels=[];this._areas=[];this._sum=0;this._keywords=new wijmo_chart_1._KeyWords;this._processedData=[];this._depth=1;this._itemIndex=0;this._processedItem=[];this._maxDepth=-1;this._tmItems=[];this._colRowLens=[];this._defPalette=[{titleColor:"#033884",maxColor:"#1450a7",minColor:"#83b3f9"},{titleColor:"#a83100",maxColor:"#dc4a0d",minColor:"#ffb190"},{titleColor:"#006658",maxColor:"#008d7a",minColor:"#7deddf"},{titleColor:"#a10046",maxColor:"#df0061",minColor:"#ff8cbe"},{titleColor:"#784d08",maxColor:"#99681a",minColor:"#efc989"},{titleColor:"#54156f",maxColor:"#722a90",minColor:"#cf95e7"},{titleColor:"#998605",maxColor:"#c2ac19",minColor:"#ffef8b"},{titleColor:"#9a0005",maxColor:"#c80c14",minColor:"#ff888d"}];this.applyTemplate("wj-control wj-flexchart wj-treemap",null,null);this._currentRenderEngine=new wijmo_chart_1._SvgRenderEngine(this.hostElement);this._legend=new wijmo_chart_1.Legend(this);this._legend.position=wijmo_chart_1.Position.None;this._tooltip=new wijmo_chart_1.ChartTooltip;this._tooltip.content="<b>{name}</b><br/>{value}";this._tooltip.showDelay=0;this._lbl=new wijmo_chart_1.DataLabel;this._lbl.position=wijmo_chart_1.LabelPosition.Center;this._lbl._chart=this;this.hostElement.addEventListener("mousemove",t=>{this.isTouching||this._toogleTooltip(t)});this.hostElement.addEventListener("click",t=>{var e=!0;if(this.maxDepth>0){var i=this.hitTest(t),r=wijmo_chart_1.FlexChart._SELECTION_THRESHOLD;this.tooltip&&this.tooltip.threshold&&(r=this.tooltip.threshold);if(i.distance<=r&&i.pointIndex>=-1&&i.pointIndex<this._areas.length){var a=this._areas[i.pointIndex];if(this._currentItem!=a.item){this._currentItem=a.item;this._refreshChart();e=!1}}}e&&this.isTouching&&this._toogleTooltip(t)});this.hostElement.addEventListener("contextmenu",t=>{if(this.maxDepth>0){var e=this.hitTest(t),i=wijmo_chart_1.FlexChart._SELECTION_THRESHOLD;this.tooltip&&this.tooltip.threshold&&(i=this.tooltip.threshold);e.distance<=i&&this._rollUp()}t.preventDefault();return!1});this.hostElement.addEventListener("mouseleave",()=>{this._hideToolTip()});this.initialize(e);this.refresh()}_rollUp(){this._currentItem=this._currentItem&&this._currentItem.parent?this._currentItem.parent:null;this._refreshChart()}_toogleTooltip(t){var e=this._tooltip;if(e.content){var i=this.hitTest(t);if(i.distance<=e.threshold){var r=this._getLabelContent(i,this.tooltip.content);this._showToolTip(r,new wijmo_1.Rect(t.clientX,t.clientY,5,5))}else this._hideToolTip()}}get selectionMode(){return wijmo_chart_1.SelectionMode.None}set selectionMode(t){}get _treeMapItems(){return this._tmItems}get tooltip(){return this._tooltip}get binding(){return this._binding}set binding(t){if(t!=this._binding){this._binding=wijmo_1.asString(t,!0);this._bindChart()}}get type(){return null==this._type?TreeMapType.Squarified:this._type}set type(t){if((t=wijmo_1.asEnum(t,TreeMapType))!=this._type){this._type=t;this.invalidate()}}get bindingName(){return this._bindingName}set bindingName(t){if(t!=this._bindingName){wijmo_1.assert(null==t||wijmo_1.isArray(t)||wijmo_1.isString(t),"bindingName should be an array or a string.");this._bindingName=t;this._bindChart()}}get dataLabel(){return this._lbl}set dataLabel(t){if(t!=this._lbl){this._lbl=t;this._lbl&&(this._lbl._chart=this)}}get childItemsPath(){return this._childItemsPath}set childItemsPath(t){if(t!=this._childItemsPath){wijmo_1.assert(null==t||wijmo_1.isArray(t)||wijmo_1.isString(t),"childItemsPath should be an array or a string.");this._childItemsPath=t;this._bindChart()}}get maxDepth(){return this._maxDepth}set maxDepth(t){if(t!=this._maxDepth){this._maxDepth=wijmo_1.asNumber(t,!0);this.invalidate()}}get palette(){return this._palette}set palette(t){if(t!=this._palette){this._palette=wijmo_1.asArray(t);this._tmItems&&this._tmItems.length>0&&this._calculateColorForItems(this._tmItems);this.invalidate()}}_initData(){this._sum=0;this._tmItems=[];this._currentItem=null;this._values=[];this._labels=[];this._processedData=[];this._depth=1;this._processedItem=[]}_performBind(){var t;this._initData();if(this._cv){t=this._cv.items;this._cv.groups&&this._cv.groups.length?this._processedData=HierarchicalUtil.parseDataToHierarchical(this._cv,this.binding,this.bindingName,this.childItemsPath):t&&(this._processedData=HierarchicalUtil.parseDataToHierarchical(t,this.binding,this.bindingName,this.childItemsPath));if(this._processedData&&this._processedData.length){this._sum=this._calculateValueAndDepth(this._processedData,1);this._sortData(this._processedData);this._values=[];this._getTMItemsAndLabelsAndValues(this._processedData,this._tmItems,1,null);this._calculateColorForItems(this._tmItems)}}}_sortData(t){t.forEach(t=>{t.items&&this._sortData(t.items)});t.sort((t,e)=>e.value-t.value)}_getTMItemsAndLabelsAndValues(t,e,i,r,a){t&&t.length>0&&t.forEach((t,a)=>{var s,l=new _TreeMapItem;l.items=[];l.parent=r;l.depth=i;t.items&&this._getTMItemsAndLabelsAndValues(t.items,l.items,i+1,l);s=t.name?t.name:t.value.toString();l.label=s;l.value=t.value;if(null!=r){t.value>r.maxValue&&(r.maxValue=t.value);t.value<r.minValue&&(r.minValue=t.value)}e.push(l);this._labels.push(s);this._values.push(t.value)})}_calculateColorForItems(t,e,i){var r=i;t.forEach((t,i)=>{var a=e;1===t.depth&&(a=this._getColor(i));t.palette=a;var s=t.palette;if(wijmo_1.isString(s)){var l=s,h=this._getLightColor(l);t.titleFill=l;t.titleStroke=l;t.fill=h;t.stroke=l}else if(s.maxColor&&s.minColor&&s.titleColor){t.titleFill=s.titleColor;t.titleStroke=s.titleColor;if(null==t.parent){t.fill=s.maxColor;t.stroke=s.maxColor}else{null==r&&(r=new _ColorConverter(s.minColor,t.minValue,s.maxColor,t.maxValue));let e=r._calculateColorByVal(t.value,!0).toString();t.fill=e;t.stroke=e}}if(t.items&&t.items.length>0){var o=new _ColorConverter(s.minColor,t.minValue,s.maxColor,t.maxValue);this._calculateColorForItems(t.items,a,o)}})}_getBindData(t,e,i){var r,a=0;i&&(r=t[i]);a=0;wijmo_1.isNumber(r)?a=wijmo_1.asNumber(r):r&&(a=parseFloat(r.toString()));if(!isNaN(a)&&isFinite(a))e.push(a);else{a=0;e.push(a)}return a}_calculateValueAndDepth(t,e){var i=0,r=this._values;this._depth<e&&(this._depth=e);t.forEach(t=>{var a;if(t.items){a=this._calculateValueAndDepth(t.items,e+1);t.value=a;r.push(a)}else{a=this._getBindData(t,r,"value");t.value=a}i+=a});return i}_prepareRender(){this._areas=[]}_renderChart(t,e,i){var r,a,s,l=this._rectChart.clone();new wijmo_1.Size(l.width,l.height);this.onRendering(new wijmo_chart_1.RenderEventArgs(t));var h=e.width,o=e.height;this._tmGroup=t.startGroup(null,null,!0);var n=this._parseMargin(this.plotMargin);this.dataLabel;isNaN(n.left)&&(n.left=TreeMap._MARGIN);isNaN(n.right)&&(n.right=TreeMap._MARGIN);isNaN(n.top)&&(n.top=TreeMap._MARGIN);isNaN(n.bottom)&&(n.bottom=TreeMap._MARGIN);e.top+=n.top;o=e.height-(n.top+n.bottom);e.height=o>0?o:24;e.left+=n.left;h=e.width-(n.left+n.right);e.width=h>0?h:24;this._plotRect=e;r=this._currentItem?[this._currentItem]:this._tmItems;a=null==this._currentItem||this.maxDepth<1?this.maxDepth:this._currentItem&&this._currentItem.items&&this._currentItem.items.length&&this.maxDepth>1?this.maxDepth:this.maxDepth+1;s=this._currentItem?this._currentItem.value:this._sum;this._renderTreeMap(t,e,this._tmGroup,r,s,a);t.endGroup();this.dataLabel.content&&this.dataLabel.position!=wijmo_chart_1.LabelPosition.None&&this._renderLabels(t);this.onRendered(new wijmo_chart_1.RenderEventArgs(t))}_renderTreeMap(t,e,i,r,a,s){if(a>0){this._itemIndex=0;this._resetItemRects(this._tmItems);this._calculateItemRects(e,r,a,1,s);this._renderHierarchicalTreeMapItems(t,i,e,this._tmItems,a,1,s)}}_resetItemRects(t){t.forEach(t=>{t.rect=new wijmo_1.Rect(0,0,0,0);t.isTitle=!1;t.type=this.type;t.items&&t.items.length&&this._resetItemRects(t.items)})}_calculateItemRects(t,e,i,r,a){switch(this.type){case TreeMapType.Horizontal:_TreeMapUtils.horizontal(e,t,i);break;case TreeMapType.Vertical:_TreeMapUtils.vertical(e,t,i);break;case TreeMapType.Squarified:_TreeMapUtils.squarified(e,t,i)}e.forEach((t,e)=>{t.rect.clone();if(t.items&&t.items.length)if(r===a);else if(r>a&&a>=1);else{t.isTitle=!0;this._calculateItemRects(t.itemsRect,t.items,t.value,r+1,a)}})}_renderHierarchicalTreeMapItems(t,e,i,r,a,s,l){var h,o,n,_,m,c=r.length;this.type;if(0!==c)for(var d=0;d<c;d++){h=t.startGroup(TreeMap._CSS_ITEMDEPTH+s);o=r[d];n=Math.abs(o.value);_=o.rect;o.draw(t);m=new wijmo_chart_1._RectArea(_);o.items&&this._renderHierarchicalTreeMapItems(t,h,o.itemsRect,o.items,n,s+1,l);m.tag=this._itemIndex;m.name=o.label;m.value=n;m.item=o;this._areas.push(m);this._itemIndex++;t.endGroup()}}_renderLabels(t){var e,i=this._areas.length,r=this.dataLabel,a=r.position,s=r.connectingLine,l=r.border,h=r.offset||0;t.stroke="null";t.fill="transparent";t.strokeWidth=1;t.startGroup("wj-data-labels");for(var o=0;o<i;o++){var n=this._areas[o];if(n){var _=n.rect,m=new wijmo_chart_1.HitTestInfo(this,e);m._setData(null,o);var c=this._getLabelContent(m,r.content);e=new wijmo_1.Point(_.left+_.width/2,_.top+_.height/2);if(c&&_.width>0&&_.height>0){var d=new wijmo_chart_1.DataLabelRenderEventArgs(t,m,e,c);if(r.onRendering(d)){c=d.text;e=d.point;this._renderLabelAndBorder(t,n,_,c,a,h,e,s,2,l)}}}}t.endGroup()}_renderLabelAndBorder(t,e,i,r,a,s,l,h,o,n){var _,m="wj-data-label",c="wj-data-label-line";switch(a){case wijmo_chart_1.LabelPosition.Top:h&&t.drawLine(l.x,l.y,l.x,l.y-s,c);l.y-=o+s;_=this._renderText(t,e,i,r,l,1,2,m);break;case wijmo_chart_1.LabelPosition.Bottom:h&&t.drawLine(l.x,l.y,l.x,l.y+s,c);l.y+=o+s;_=this._renderText(t,e,i,r,l,1,0,m);break;case wijmo_chart_1.LabelPosition.Left:h&&t.drawLine(l.x,l.y,l.x-s,l.y,c);l.x-=o+s;_=this._renderText(t,e,i,r,l,2,1,m);break;case wijmo_chart_1.LabelPosition.Right:h&&t.drawLine(l.x,l.y,l.x+s,l.y,c);l.x+=o+s;_=this._renderText(t,e,i,r,l,0,1,m);break;case wijmo_chart_1.LabelPosition.Center:_=this._renderText(t,e,i,r,l,1,1,m)}n&&_&&t.drawRect(_.left-o,_.top-o,_.width+2*o,_.height+2*o,"wj-data-label-border");return _}_renderText(t,e,i,r,a,s,l,h){var o,n=r,_=e.item;o=t.measureString(r,h);if(this.type===TreeMapType.Horizontal&&_.isTitle){o.width>i.height&&(n=this._cutText(r,o.width,i.height));wijmo_chart_1.FlexChart._renderRotatedText(t,n,a,s,l,a,-90,h);return null}o.width>i.width&&(n=this._cutText(r,o.width,i.width));return wijmo_chart_1.FlexChart._renderText(t,n,a,s,l,h)}_cutText(t,e,i){var r="",a=t.length,s=Math.floor((1-(e-i)/e)*a);t.length>0&&(r=t[0]+(s>1?t.substring(1,s-1)+"..":""));return r}_measureLegendItem(t,e){var i=new wijmo_1.Size;i.width=wijmo_chart_1.Series._LEGEND_ITEM_WIDTH;i.height=wijmo_chart_1.Series._LEGEND_ITEM_HEIGHT;if(e){var r=t.measureString(e,wijmo_chart_1.FlexChart._CSS_LABEL,wijmo_chart_1.FlexChart._CSS_LEGEND);i.width+=r.width;i.height<r.height&&(i.height=r.height)}i.width+=3*wijmo_chart_1.Series._LEGEND_ITEM_MARGIN;i.height+=2*wijmo_chart_1.Series._LEGEND_ITEM_MARGIN;return i}_getDesiredLegendSize(t,e,i,r){var a=new wijmo_1.Size,s=(new wijmo_1.Size(i,r),this._tmItems.length),l=0,h=0;this._colRowLens=[];for(var o=0;o<s;o++){var n=this._measureLegendItem(t,this._tmItems[o].label);if(e){if(h+n.height>r){a.height=r;this._colRowLens.push(l);l=0;h=0}l<n.width&&(l=n.width);h+=n.height}else{if(l+n.width>i){a.width=i;this._colRowLens.push(h);h=0;l=0}h<n.height&&(h=n.height);l+=n.width}}if(e){a.height<h&&(a.height=h);this._colRowLens.push(l);a.width=this._colRowLens.reduce((t,e)=>t+e,0);a.width=this._getLegendSize(i,a.width)}else{a.width<l&&(a.width=l);this._colRowLens.push(h);a.height=this._colRowLens.reduce((t,e)=>t+e,0);a.height=this._getLegendSize(r,a.height)}return a}_renderLegend(t,e,i,r,a,s){for(var l,h=this._rectLegend,o=this._tmItems.length,n=0,_=e.clone(),m=0;m<o;m++){l=this._tmItems[m].label;var c=this._measureLegendItem(t,l);if(r){if(_.y+c.height>h.top+h.height+1){_.x+=this._colRowLens[n];n++;_.y=e.y}}else if(_.x+c.width>h.left+h.width+1){_.y+=this._colRowLens[n];n++;_.x=e.x}var d=new wijmo_1.Rect(_.x,_.y,c.width,c.height);this._drawLegendItem(t,d,m,l);i.push(d);r?_.y+=c.height:_.x+=c.width}}_drawLegendItem(t,e,i,r){t.strokeWidth=1;var a=wijmo_chart_1.Series._LEGEND_ITEM_MARGIN,s=this._getColor(i),l=s&&s.maxColor?s.maxColor:s,h=this._getLightColor(l);t.fill=l;t.stroke=h;var o=e.top+.5*e.height,n=wijmo_chart_1.Series._LEGEND_ITEM_WIDTH,_=wijmo_chart_1.Series._LEGEND_ITEM_HEIGHT;t.drawRect(e.left+a,o-.5*_,n,_,null);r&&wijmo_chart_1.FlexChart._renderText(t,r,new wijmo_1.Point(e.left+_+2*a,o),0,1,wijmo_chart_1.FlexChart._CSS_LABEL)}_getLabelContent(t,e){return wijmo_1.isString(e)?this._keywords.replace(e,t):wijmo_1.isFunction(e)?e(t):null}hitTest(t,e){var i=this._toControl(t,e),r=new wijmo_chart_1.HitTestInfo(this,i),a=null;if(wijmo_chart_1.FlexChart._contains(this._rectHeader,i))r._chartElement=wijmo_chart_1.ChartElement.Header;else if(wijmo_chart_1.FlexChart._contains(this._rectFooter,i))r._chartElement=wijmo_chart_1.ChartElement.Footer;else if(wijmo_chart_1.FlexChart._contains(this._rectLegend,i)){r._chartElement=wijmo_chart_1.ChartElement.Legend;null!==(a=this.legend._hitTest(i))&&a>=0&&a<this._areas.length&&r._setData(null,a)}else if(wijmo_chart_1.FlexChart._contains(this._rectChart,i)){for(var s,l=this._areas.length,h=NaN,o=0;o<l;o++){var n=i.clone(),_=this._areas[o];if(_.contains(n)){r._setData(null,_.tag);r._dist=0}var m=_.distance(n);if(void 0!==m&&(isNaN(h)||m<h)){h=m;s=_}}if(0!==r._dist&&null!=s){r._setData(null,s.tag);r._dist=h}r._chartElement=wijmo_chart_1.ChartElement.ChartArea}else r._chartElement=wijmo_chart_1.ChartElement.None;return r}_getHitTestItem(t){var e=null,i=null;(e=null!=this._cv?this._cv.items:this.itemsSource)&&t<e.length&&(i=e[t]);return i}_getHitTestValue(t){return this._values[t]}_getHitTestLabel(t){return this._labels[t]}}TreeMap._CSS_ITEMDEPTH="wj-treemap-item-depth";TreeMap._MARGIN=0;exports.TreeMap=TreeMap;class _TreeMapItem{constructor(){this.items=[];this.maxValue=Number.MIN_VALUE;this.minValue=Number.MAX_VALUE}draw(t){var e=this.rect;t.strokeWidth=0;if(this.isTitle){t.fill=this.titleFill;t.stroke=this.titleStroke}else{t.fill=this.fill;t.stroke=this.stroke}t.drawRect(e.left,e.top,e.width,e.height,_TreeMapItem._CLASSNAME)}get itemsRect(){var t=this.rect,e=this._rect,i=1===this.depth?2:.5;return this.isTitle?this.type===TreeMapType.Horizontal?new wijmo_1.Rect(t.left+t.width+1,t.top,e.width-t.width-2*i,t.height+1):new wijmo_1.Rect(t.left,t.top+t.height+1,t.width+1,e.height-t.height-2*i):new wijmo_1.Rect(0,0,0,0)}get rect(){var t=this._rect,e=1===this.depth?2:.5,i=t.width,r=t.height,a=t.left,s=t.top;if(this.isTitle){if(this.type===TreeMapType.Horizontal){i=t.width>20?20:i;i=Math.max(20,i-2*e);r=r>2*e?r-2*e:0}else{r=t.height>20?20:r;r=Math.max(20,r-2*e);i=i>2*e?i-2*e:0}a+=e;s+=e}else{i=i>2*e?i-2*e:0;r=r>2*e?r-2*e:0}return new wijmo_1.Rect(a,s,i,r)}set rect(t){t!=this._rect&&(this._rect=t)}get isTitle(){return this._isTitle}set isTitle(t){var e=wijmo_1.asBoolean(t,!0);e!==this._isTitle&&(this._isTitle=e)}}_TreeMapItem._CLASSNAME="wj-treemap-item";class _ColorConverter{constructor(t,e,i,r,a,s){this.minColor=new wijmo_1.Color(t);this.minColorValue=e;this.maxColor=new wijmo_1.Color(i);this.maxColorValue=r;this.midColorValue=this.originalMidColorValue=s;this._calculateMidColorValue();this.midColor=this.originalMidColor=new wijmo_1.Color(a);this._calculateMidColor()}_resetminColor(t){this.minColor=new wijmo_1.Color(t);this._calculateMidColor()}_resetmidColor(t){this.midColor=this.originalMidColor=new wijmo_1.Color(t);this._calculateMidColor()}_resetmaxColor(t){this.maxColor=new wijmo_1.Color(t);this._calculateMidColor()}_resetminColorValue(t){this.minColorValue=t;this._calculateMidColorValue()}_resetmidColorValue(t){this.midColorValue=this.originalMidColorValue=t;this._calculateMidColorValue()}_resetmaxColorValue(t){this.maxColorValue=t;this._calculateMidColorValue()}_calculateMidColorValue(){null==this.originalMidColorValue&&(this.midColorValue=(this.maxColorValue+this.minColorValue)/2)}_calculateMidColor(){null==this.originalMidColor&&(this.midColor=this._calculateColorByVal(this.midColorValue,!0))}_calculateColorByVal(t,e=!1){var i=this.maxColor,r=this.minColor,a=this.maxColorValue,s=this.minColorValue;if(t>=this.maxColorValue)return new wijmo_1.Color(i.toString());if(t<=this.minColorValue)return new wijmo_1.Color(r.toString());if(!e){if(t===this.midColorValue)return new wijmo_1.Color(this.midColor.toString());if(t<this.midColorValue){i=this.midColor;a=this.midColorValue}else{r=this.midColor;s=this.midColorValue}}return this._getColor(t,i,a,r,s)}_getColor(t,e,i,r,a){return wijmo_1.Color.fromRgba(this._getValueByRatio(t,e.r,i,r.r,a),this._getValueByRatio(t,e.g,i,r.g,a),this._getValueByRatio(t,e.b,i,r.b,a),this._getValueByRatio(t,e.a,i,r.a,a))}_getValueByRatio(t,e,i,r,a){return Math.abs(r+Math.round((t-a)*(e-r)/(i-a)))}}class _TreeMapUtils{static squarified(t,e,i){var r=t.slice(),a=e.clone(),s=a.width*a.height/i;do{var l=_TreeMapUtils.getRowedItems(r,a,s);_TreeMapUtils.layoutRowedItems(e,l,a,a.width>a.height)}while(r.length)}static horizontal(t,e,i){var r=e.clone();t.forEach(t=>{var a=[{item:t,val:t.value*e.width*e.height/i}];_TreeMapUtils.layoutRowedItems(e,a,r,!1)})}static vertical(t,e,i){var r=e.clone();t.forEach(t=>{var a=[{item:t,val:t.value*e.width*e.height/i}];_TreeMapUtils.layoutRowedItems(e,a,r,!0)})}static getNarrowLen(t){return Math.min(t.width,t.height)}static getRowedItem(t,e,i){return{item:t,val:i*t.value}}static getRowedItems(t,e,i){var r=t.shift(),a=[],s=[],l=_TreeMapUtils.getNarrowLen(e),h=_TreeMapUtils.getRowedItem(r,e,i);a.push(h);s.push(h);if(t.length>0)do{s.push(_TreeMapUtils.getRowedItem(t[0],e,i));if(!(_TreeMapUtils.worst(a,l)>_TreeMapUtils.worst(s,l)))break;a=s.slice();t.shift()}while(t.length);return a}static layoutRowedItems(t,e,i,r){var a,s=i.left,l=i.top,h=s+i.width,o=l+i.height,n=_TreeMapUtils.sumRowedArray(e);if(r){a=0===i.height?0:n/i.height;s+a>=h&&(a=h-s);e.forEach((t,i)=>{var r=0===a?0:t.val/a;(l+r>o||i===e.length-1)&&(r=o-l);var h=new wijmo_1.Rect(s,l,a,r);t.item.rect=h;l+=r});i.left+=a;i.width-=a}else{a=0===i.width?0:n/i.width;l+a>=o&&(a=o-l);e.forEach((t,i)=>{var r=0===a?0:t.val/a;(s+r>h||i===e.length-1)&&(r=h-s);var o=new wijmo_1.Rect(s,l,r,a);t.item.rect=o;s+=r});i.top+=a;i.height-=a}}static sumRowedArray(t){for(var e=0,i=t.length,r=0;r<i;r++)e+=t[r].val;return e}static worst(t,e){var i,r,a=_TreeMapUtils.sumRowedArray(t),s=a*a,l=e*e;i=r=t[0].val;t.forEach((t,e)=>{t.val>i?i=t.val:t.val<r&&(r=t.val)});return Math.max(l*i/s,s/(l*r))}}class Sunburst extends wijmo_chart_1.FlexPie{constructor(t,e){super(t,e);this._selectionIndex=0;this.applyTemplate("wj-sunburst",null,null);this.initialize(e);this.refresh()}get bindingName(){return this._bindName}set bindingName(t){if(t!=this._bindName){wijmo_1.assert(null==t||wijmo_1.isArray(t)||wijmo_1.isString(t),"bindingName should be an array or a string.");this._bindName=t;this._bindChart()}}get childItemsPath(){return this._childItemsPath}set childItemsPath(t){if(t!=this._childItemsPath){wijmo_1.assert(null==t||wijmo_1.isArray(t)||wijmo_1.isString(t),"childItemsPath should be an array or a string.");this._childItemsPath=t;this._bindChart()}}_initData(){super._initData();this._processedData=[];this._level=1;this._legendLabels=[];this._processedItem=[];this._values[0]=[]}_performBind(){var t;this._initData();if(this._cv){t=this._cv.items;this._cv.groups&&this._cv.groups.length?this._processedData=HierarchicalUtil.parseDataToHierarchical(this._cv,this.binding,this.bindingName,this.childItemsPath):t&&(this._processedData=HierarchicalUtil.parseDataToHierarchical(t,this.binding,this.bindingName,this.childItemsPath));if(this._processedData&&this._processedData.length){this._sums[0]=this._sum=this._calculateValueAndLevel(this._processedData,1);this._processedData.forEach(t=>{this._legendLabels.push(t.name)})}}}_calculateValueAndLevel(t,e){var i=0,r=this._values[0],a=this._labels;this._level<e&&(this._level=e);t.forEach(t=>{var s;if(t.items){s=this._calculateValueAndLevel(t.items,e+1);t.value=s;r.push(s);a.push(t.name)}else{s=this._getBindData(t,r,a,"value","name");t.value=s}i+=s});return i}_renderPie(t,e,i,r,a,s){var l=this._getCenter();this._sliceIndex=0;this._parentRef={};this._renderHierarchicalSlices(t,l.x,l.y,this._processedData,this._sum,i,r,a,2*Math.PI,s,1)}_renderHierarchicalSlices(t,e,i,r,a,s,l,h,o,n,_){var m,c,d,u,p,g,w,f,v,C,I=r.length,T=h,j=1==this.reversed;d=(s-l)/this._level;m=s-(this._level-_)*d;c=l+(_-1)*d;for(var x=0;x<I;x++){f=e;v=i;w=t.startGroup("wj-slice slice-level"+_);if(1===_){t.fill=this._getColorLight(x);t.stroke=this._getColor(x)}p=r[x];g=Math.abs(p.value);u=Math.abs(g-a)<1e-10?o:o*g/a;C=j?T-.5*u:T+.5*u;if(n>0&&u<o){f+=n*Math.cos(C);v+=n*Math.sin(C)}if(p.items){let e=this._sliceIndex;this._renderHierarchicalSlices(t,f,v,p.items,g,s,l,T,u,0,_+1);for(;e<this._sliceIndex;e++)null==this._parentRef[e]&&(this._parentRef[e]=this._sliceIndex)}this._renderSlice(t,f,v,C,0,this._sliceIndex,m,c,T,u,o);this._processedItem.push(p.item);this._sliceIndex++;j?T-=u:T+=u;t.endGroup();this._pels.push(w)}}_getLabelsForLegend(){return this._legendLabels||[]}_highlightCurrent(){this.selectionMode!=wijmo_chart_1.SelectionMode.None&&this._highlight(!0,this._selectionIndex)}hitTest(t,e){var i=super.hitTest(t,e),r=this._toControl(t,e);if(wijmo_chart_1.FlexChartBase._contains(this._rectChart,r)){var a=i.pointIndex,s=this._processedItem[a],l=new wijmo_chart_1._DataPoint(null,a,null,null);l.item=s;i._setDataPoint(l)}return i}_getSelectedItemOffset(t,e){var i=0,r=0,a=0;if(this.selectedItemOffset>0)if(t==this.selectedIndex)a=this.selectedItemOffset;else{let i=this._getSelectedParentIndex(t);if(null!=i){let t=this._areas[i];this.dataLabel.position;a=this.selectedItemOffset;e=((e=t.langle+this._rotationAngles[0])%360+360)%360;e*=Math.PI/180}}if(a>0){i=Math.cos(e)*a*this._radius;r=Math.sin(e)*a*this._radius}return{x:i,y:r}}_getSelectedParentIndex(t){let e=this._parentRef[t];return null!=e?e===this.selectedIndex?e:this._getSelectedParentIndex(e):null}}exports.Sunburst=Sunburst;wijmo_1._registerModule("wijmo.chart.hierarchical",selfModule);