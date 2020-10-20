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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var r in o)o.hasOwnProperty(r)&&(e[r]=o[r])})(e,o)};return function(e,o){extendStatics(e,o);function __(){this.constructor=e}e.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=require("wijmo/wijmo"),wijmo_grid_1=require("wijmo/wijmo.grid"),selfModule=require("wijmo/wijmo.grid.transposed"),TransposedGrid=function(e){__extends(TransposedGrid,e);function TransposedGrid(o,r){var i=e.call(this,o,null)||this;i._keyPrefix="item";i._autoGenRows=!0;wijmo_1.addClass(i.hostElement,"wj-transposed-grid");i.allowSorting=wijmo_grid_1.AllowSorting.None;i.headersVisibility=wijmo_grid_1.HeadersVisibility.Row;i._rowInfo=new wijmo_grid_1.ColumnCollection(i,i.columns.defaultSize);i.initialize(r);i._rowInfo.collectionChanged.addHandler(i._rowInfoChanged,i);i.deferUpdate((function(){var e=i.rowHeaders.columns;if(e.length){e[e.length-1].width=i.columns.defaultSize}}));return i}Object.defineProperty(TransposedGrid.prototype,"autoGenerateRows",{get:function(){return this._autoGenRows},set:function(e){this._autoGenRows=wijmo_1.asBoolean(e)},enumerable:!0,configurable:!0});TransposedGrid.prototype.refresh=function(o){var r=this._rowInfo;if(r._dirty){r._dirty=!1;this._rowInfoChanged()}else e.prototype.refresh.call(this,o)};Object.defineProperty(TransposedGrid.prototype,"allowAddNew",{get:function(){return!1},set:function(e){},enumerable:!0,configurable:!0});Object.defineProperty(TransposedGrid.prototype,"allowDelete",{get:function(){return!1},set:function(e){},enumerable:!0,configurable:!0});TransposedGrid.prototype.onRowEditEnded=function(o){if(null!=this._view){var r=new wijmo_1.NotifyCollectionChangedEventArgs(wijmo_1.NotifyCollectionChangedAction.Change);this._view.collectionChanged.raise(this._view,r)}e.prototype.onRowEditEnded.call(this,o)};TransposedGrid.prototype._getCollectionView=function(o){var r=this,i=null;null!=this._view&&this._view.collectionChanged.removeHandler(this._sourceViewChanged);if(wijmo_1.isArray(o))o=this._transposeItemsSource(o);else if(o){this._view&&this._view.collectionChanged.removeHandler(this._sourceViewChanged);this._view=wijmo_1.tryCast(o,"ICollectionView");if(this._view){this._view.collectionChanged.addHandler(this._sourceViewChanged,this);o instanceof wijmo_1.CollectionView&&(i=o.getError);o=this._transposeItemsSource(this._view.items)}}this.autoGenerateColumns=!0;var n=e.prototype._getCollectionView.call(this,o);i&&n instanceof wijmo_1.CollectionView&&(this._supportsProxies()?n.getError=function(e,o){var r=e._keys.indexOf(o);return i(e._arr[r],e._bnd.path)}:n.getError=function(e,o){var n=parseInt(o.substr(r._keyPrefix.length));return i(e._arr[n],e._rowInfo.binding)});return n};TransposedGrid.prototype._getColumnTypes=function(e){var o=this;if(this._view){var r=this._view.items;if(wijmo_1.isArray(r))return r.map((function(e,r){return{binding:o._keyPrefix+r,dataType:wijmo_1.DataType.Object}}))}return wijmo_1.getTypes(e)};TransposedGrid.prototype._copy=function(o,r){var i=this;if(/rows|columns/.test(o)){wijmo_1.assert(wijmo_1.isArray(r),"Array Expected.");this._rowInfo.deferUpdate((function(){i.autoGenerateRows=!1;i._rowInfo.clear();r.forEach((function(e){var o=new wijmo_grid_1.Column(e);i._rowInfo.push(o)}))}));return!0}return e.prototype._copy.call(this,o,r)};TransposedGrid.prototype.onLoadedRows=function(o){for(var r=this,i=this.rowHeaders.columns,n=0;n<i.length;n++)i[n].align="left";var t=this.columns;for(n=0;n<t.length;n++){var s=t[n];s.align=null;s.dataType=0}var a=wijmo_grid_1.FlexGrid._getSerializableProperties(wijmo_grid_1.Row);this.rows.forEach((function(e){var o=e.dataItem._rowInfo;if(o){r._copyProps(o,e,a,"showDropDown");if(i.length){var n=o.header||wijmo_1.toHeaderCase(o.binding);r.rowHeaders.setCellData(e.index,i.length-1,n)}}}));e.prototype.onLoadedRows.call(this,o)};TransposedGrid.prototype._getBindingColumn=function(e,o,r){var i=r;if(e!=this.cells)return i;var n=e.rows[o].dataItem._rowInfo;if(wijmo_1.isUndefined(n))return i;i=new wijmo_grid_1.Column;var t=wijmo_grid_1.FlexGrid._getSerializableProperties(wijmo_grid_1.Column);this._copyProps(n,i,t);i.binding=r.binding;i.header=n.header||wijmo_1.toHeaderCase(n.binding);return i};TransposedGrid.prototype._copyProps=function(e,o,r,i){void 0===i&&(i="");for(var n in e)if(r.indexOf(n)>-1&&n!=i){var t=e[n];if(!wijmo_1.isUndefined(t))try{o[n]=t}catch(e){}}};TransposedGrid.prototype._rowInfoChanged=function(){var e=this;this._toRowInfo&&clearTimeout(this._toRowInfo);this._toRowInfo=setTimeout((function(){var o=e.selection,r=e.itemsSource;e.itemsSource=null;e.itemsSource=r;e.selection=o}),wijmo_1.Control._REFRESH_INTERVAL)};TransposedGrid.prototype._sourceViewChanged=function(e,o){this.activeEditor||this.invalidate()};TransposedGrid.prototype._transposeItemsSource=function(e){var o=this,r=new wijmo_1.ObservableArray,i=wijmo_1.getTypes(e),n=e.map((function(e,r){return o._keyPrefix+r}));(this.autoGenerateRows?this._getRowInfo(e):this._rowInfo).forEach((function(t,s){var a=new wijmo_1.Binding(t.binding);if(null==t.dataType){var d=a.getValue(e[0]);t.dataType=null!=d?wijmo_1.getType(d):i[s].dataType}if(o._supportsProxies()){var l=o._createProxy(e,t,n);r.push(l)}else{var _=o._createTransposedObject(e,t,o._keyPrefix);r.push(_)}}));e instanceof wijmo_1.ObservableArray&&e.collectionChanged.addHandler((function(){var e=new wijmo_1.NotifyCollectionChangedEventArgs(wijmo_1.NotifyCollectionChangedAction.Reset);r.onCollectionChanged(e);o._rowInfoChanged()}));return r};TransposedGrid.prototype._supportsProxies=function(){return null!=window.Proxy};TransposedGrid.prototype._createProxy=function(e,o,r){var i={_arr:e,_rowInfo:o,_bnd:new wijmo_1.Binding(o.binding),_keys:r};return new Proxy(i,{ownKeys:function(e){return e._keys},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0,writable:!0}},get:function(e,o){var r=e._keys.indexOf(o);return r>-1?e._bnd.getValue(e._arr[r]):e[o]},set:function(e,o,r){var i=e._keys.indexOf(o);if(i>-1){var n=e._arr,t=n[i];e._bnd.setValue(t,r);if(n instanceof wijmo_1.ObservableArray){var s=new wijmo_1.NotifyCollectionChangedEventArgs(wijmo_1.NotifyCollectionChangedAction.Change,t,i);n.onCollectionChanged(s)}return!0}return!1}})};TransposedGrid.prototype._createTransposedObject=function(e,o,r){for(var i={_arr:e,_rowInfo:o},n=new wijmo_1.Binding(o.binding),_loop_1=function(o){var t=e[o];Object.defineProperty(i,r+o,{enumerable:!0,get:function(){return n.getValue(t)},set:function(r){n.setValue(t,r);if(e instanceof wijmo_1.ObservableArray){var i=new wijmo_1.NotifyCollectionChangedEventArgs(wijmo_1.NotifyCollectionChangedAction.Change,t,o);e.onCollectionChanged(i)}return!0}})},t=0;t<e.length;t++)_loop_1(t);return i};TransposedGrid.prototype._getRowInfo=function(e){var o=this,r=[];wijmo_1.getTypes(e).forEach((function(e){var i=e.binding,n=e.dataType;if(n!=wijmo_1.DataType.Object&&n!=wijmo_1.DataType.Array){var t={binding:i,header:wijmo_1.toHeaderCase(i),dataType:n},s=wijmo_grid_1.FlexGrid._defTypeWidth[n];if(null!=s){if(wijmo_1.isString(s)){var a=Math.round(parseFloat(s));s=s.indexOf("*")<0?a:a*o.columns.defaultSize}wijmo_1.isNumber(s)&&s>0&&(t.width=s)}r.push(t)}}));return r};return TransposedGrid}(wijmo_grid_1.FlexGrid);exports.TransposedGrid=TransposedGrid;var TransposedGridRow=function(e){__extends(TransposedGridRow,e);function TransposedGridRow(){return null!==e&&e.apply(this,arguments)||this}return TransposedGridRow}(wijmo_grid_1.Column);exports.TransposedGridRow=TransposedGridRow;wijmo_1._registerModule("wijmo.grid.transposed",selfModule);