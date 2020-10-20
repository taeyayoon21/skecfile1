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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=require("wijmo/wijmo"),wijmo_grid_1=require("wijmo/wijmo.grid"),selfModule=require("wijmo/wijmo.grid.grouppanel");function softGridFilter(){return wijmo_1._getModule("wijmo.grid.filter")}exports.softGridFilter=softGridFilter;wijmo_1._addCultureInfo("GroupPanel",{dragDrop:"Drag and Drop columns here to create Groups."});var GroupPanel=function(e){__extends(GroupPanel,e);function GroupPanel(t,r){var i=e.call(this,t)||this;i._hideGroupedCols=!0;i._showDragGlyphs=!0;i._maxGroups=6;i._hiddenCols=[];var o=i.getTemplate();i.applyTemplate("wj-grouppanel wj-control",o,{_divMarkers:"div-markers",_divPH:"div-ph"});wijmo_1.setCss(i._divMarkers.parentElement,{width:"100%",height:"100%",minHeight:"1em",overflow:"hidden",cursor:"default"});var n=i.hostElement,l=i.addEventListener.bind(i);l(n,"dragstart",i._dragStart.bind(i));l(n,"dragover",i._dragOver.bind(i));l(n,"drop",i._drop.bind(i));l(n,"dragend",i._dragEnd.bind(i));l(n,"click",i._click.bind(i));i.placeholder=wijmo_1.culture.GroupPanel.dragdrop;i.initialize(r);return i}Object.defineProperty(GroupPanel.prototype,"hideGroupedColumns",{get:function(){return this._hideGroupedCols},set:function(e){e!=this._hideGroupedCols&&(this._hideGroupedCols=wijmo_1.asBoolean(e))},enumerable:!0,configurable:!0});Object.defineProperty(GroupPanel.prototype,"showDragGlyphs",{get:function(){return this._showDragGlyphs},set:function(e){if(e!=this._showDragGlyphs){this._showDragGlyphs=wijmo_1.asBoolean(e);this.refresh()}},enumerable:!0,configurable:!0});Object.defineProperty(GroupPanel.prototype,"maxGroups",{get:function(){return this._maxGroups},set:function(e){if(e!=this._maxGroups){this._maxGroups=wijmo_1.asNumber(e);var t=this._gds,r=this._maxGroups;t&&r>-1&&r<t.length&&t.splice(r,t.length-r)}},enumerable:!0,configurable:!0});Object.defineProperty(GroupPanel.prototype,"placeholder",{get:function(){return this._divPH.textContent},set:function(e){this._divPH.textContent=null!=e?e:wijmo_1.culture.GroupPanel.dragDrop},enumerable:!0,configurable:!0});Object.defineProperty(GroupPanel.prototype,"grid",{get:function(){return this._g},set:function(e){if((e=wijmo_1.asType(e,wijmo_grid_1.FlexGrid,!0))!=this._g){var t=this._g;if(t){t.draggingColumn.removeHandler(this._draggingColumn);t.itemsSourceChanging.removeHandler(this._itemsSourceChanging);t.itemsSourceChanged.removeHandler(this._itemsSourceChanged);t.columns.collectionChanged.removeHandler(this._itemsSourceChanged)}t=this._g=e;this._hiddenCols=[];if(t){t.draggingColumn.addHandler(this._draggingColumn,this);t.itemsSourceChanging.addHandler(this._itemsSourceChanging,this);t.itemsSourceChanged.addHandler(this._itemsSourceChanged,this);t.columns.collectionChanged.addHandler(this._itemsSourceChanged,this)}this._itemsSourceChanged(t,null)}},enumerable:!0,configurable:!0});Object.defineProperty(GroupPanel.prototype,"filter",{get:function(){return this._filter},set:function(e){if((e=wijmo_1.asType(e,softGridFilter().FlexGridFilter,!0))!=this._filter){var t=this._filter;if(t){t.filterApplied.removeHandler(this.refresh,this);t.filterChanged.removeHandler(this._filterChanged,this)}if(t=this._filter=e){t.filterApplied.addHandler(this.refresh,this);t.filterChanged.addHandler(this._filterChanged,this)}this.refresh()}},enumerable:!0,configurable:!0});Object.defineProperty(GroupPanel.prototype,"groupDescriptionCreator",{get:function(){return this._gdc},set:function(e){this._gdc=e},enumerable:!0,configurable:!0});GroupPanel.prototype.refresh=function(){e.prototype.refresh.call(this);this._divMarkers.innerHTML="";this._dragMarker=this._dragCol=null;if(this._gds){for(var t=this._g,r=t.columnHeaders,i=0;i<this._gds.length;i++){var o=this._gds[i],n=-1,l=-1;if(o instanceof wijmo_1.PropertyGroupDescription)for(var s=r.rows.length-1;s>=0&&l<0;s--)for(var a=0;a<r.columns.length&&l<0;a++){if((p=t._getBindingColumn(r,s,r.columns[a]))&&p.binding==o.propertyName){l=a;n=s;break}}if(l>-1&&n>-1){var d=document.createElement("div");t.cellFactory.updateCell(this._g.columnHeaders,n,l,d);d.setAttribute("class","wj-cell wj-header wj-groupmarker");wijmo_1.setCss(d,{position:"static",display:"inline-block",verticalAlign:"top",left:"",right:"",top:"",width:"",height:"",paddingLeft:"",paddingRight:""});wijmo_1.removeChild(d.querySelector(".wj-elem-filter"));wijmo_1.removeChild(d.querySelector(".wj-column-selector"));if(this.showDragGlyphs){var u=wijmo_1.createElement('<span class="wj-glyph-drag"></span>');d.insertBefore(u,d.firstChild)}var p=t._getBindingColumn(r,n,r.columns[l]),h=this._getColumnFilter(p);if(h){var g=wijmo_1.createElement('<span class="wj-filter wj-glyph-filter"></span>',d);wijmo_1.toggleClass(g,"wj-filter-on",h.isActive);wijmo_1.toggleClass(g,"wj-filter-off",!h.isActive)}wijmo_1.createElement('<span class="wj-remove">&times;</span>',d);this._divMarkers.appendChild(d)}}var _=this._divMarkers.children.length>0;this._divPH.style.display=_?"none":"";this._divMarkers.style.display=_?"":"none"}};GroupPanel.prototype._filterChanged=function(){this._filterMarker=null};GroupPanel.prototype._getColumnFilter=function(e){var t=this._filter,r=null;t&&(r=t.filterColumns&&t.filterColumns.indexOf(e.binding)<0?null:t.getColumnFilter(e));return r};GroupPanel.prototype._editFilter=function(e){var t=this._gds,r=this._getElementIndex(e),i=t&&r>-1?t[r]:null,o=i instanceof wijmo_1.PropertyGroupDescription?i.propertyName:null,n=o?this._g.getColumn(o):null;n&&this._filter.editColumnFilter(n,null,e)};GroupPanel.prototype._addGroup=function(e,t){for(var r=this._getIndex(t),i=this._gds,o=this._maxGroups,n=0;n<i.length;n++){var l=i[n];if(l instanceof wijmo_1.PropertyGroupDescription&&l.propertyName==e.binding){i.removeAt(n);n<r&&r--;break}}if(o>-1)for(n=o-1;n<i.length;n++){this._removeGroup(n,i);n<r&&r--}if(o<0||i.length<o){var s=this._gdc?this._gdc(e.binding):null;s||(s=new wijmo_1.PropertyGroupDescription(e.binding));i.insert(r,s);if(e&&this.hideGroupedColumns){e.visible=!1;this._hiddenCols.push(e)}}};GroupPanel.prototype._moveGroup=function(e,t){var r=this._gds,i=this._getElementIndex(this._dragMarker),o=this._getIndex(t);o>i&&o--;o>=this._gds.length&&(o=this._gds.length);i!=o&&r.deferUpdate((function(){var e=r[i];r.removeAt(i);r.insert(o,e)}))};GroupPanel.prototype._removeGroup=function(e,t){void 0===t&&(t=this._gds);var r=t&&e>-1?t[e]:null,i=r instanceof wijmo_1.PropertyGroupDescription?r.propertyName:null,o=i?this._g.columns.getColumn(i):null;if(o){o.visible=!0;var n=this._hiddenCols,l=n.indexOf(o);l>-1&&n.splice(l,1)}r&&t.removeAt(e)};GroupPanel.prototype._getIndex=function(e){for(var t=e.clientX,r=this._divMarkers.children,i=0;i<r.length;i++){var o=r[i].getBoundingClientRect();if((t-o.left)*(t-o.right)<0)return i}return r.length};GroupPanel.prototype._getElementIndex=function(e){if(e&&e.parentElement)for(var t=e.parentElement.children,r=0;r<t.length;r++)if(t[r]==e)return r;return-1};GroupPanel.prototype._draggingColumn=function(e,t){var r=this._g,i=r._getBindingColumn(t.panel,t.row,r.columns[t.col]);this._dragCol=i.binding?i:null};GroupPanel.prototype._itemsSourceChanging=function(e,t){this._hiddenCols.forEach((function(e){e.visible=!0}));this._hiddenCols=[]};GroupPanel.prototype._itemsSourceChanged=function(e,t){this._view&&this._view.collectionChanged.removeHandler(this._collectionChanged);this._view=this._g?this._g.collectionView:null;this._gds=this._view?this._view.groupDescriptions:null;this._view&&this._view.collectionChanged.addHandler(this._collectionChanged,this);this.invalidate()};GroupPanel.prototype._collectionChanged=function(e,t){t.action==wijmo_1.NotifyCollectionChangedAction.Reset&&this.invalidate()};GroupPanel.prototype._dragStart=function(e){wijmo_1._startDrag(e.dataTransfer,"move");this._dragMarker=e.target;this._dragCol=null};GroupPanel.prototype._dragOver=function(e){if(this._dragCol||this._dragMarker){e.dataTransfer.dropEffect="move";e.preventDefault();e.stopPropagation()}};GroupPanel.prototype._drop=function(e){this._dragMarker?this._moveGroup(this._dragMarker,e):this._dragCol&&this._addGroup(this._dragCol,e)};GroupPanel.prototype._dragEnd=function(e){this._dragMarker=this._dragCol=null};GroupPanel.prototype._click=function(e){var t=e.target,r=wijmo_1.closest(t,".wj-cell");if(wijmo_1.hasClass(r,"wj-cell"))if(wijmo_1.hasClass(t,"wj-filter")){if(r!=this._filterMarker){this._editFilter(r);this._filterMarker=r;return}}else if(wijmo_1.hasClass(t,"wj-remove")){var i=this._getElementIndex(r);this._removeGroup(i)}else this._updateSort(e,r);this._filterMarker=null;this.hostElement.focus()};GroupPanel.prototype._updateSort=function(e,t){var r=this,i=this._g,o=i.collectionView;if(o&&o.canSort&&i.allowSorting!=wijmo_grid_1.AllowSorting.None){var n=this._getElementIndex(t),l=this._gds[n],s=l instanceof wijmo_1.PropertyGroupDescription?l.propertyName:null,a=s?i.getColumn(s):null;if(a&&a.allowSorting){for(var d=a.sortMemberPath||a.binding,u=-1,p=o.sortDescriptions,h=0;h<p.length;h++)if(p[h].property==d){u=h;break}var g=new wijmo_grid_1.CellRangeEventArgs(i.columnHeaders,new wijmo_grid_1.CellRange(0,a.index),e);if(i.onSortingColumn(g)){var _=e.ctrlKey||e.metaKey,c=e.shiftKey;p.deferUpdate((function(){if(_&&c)p.clear();else if(u<0){r._g.allowSorting!=wijmo_grid_1.AllowSorting.MultiColumn&&p.clear();var e=new wijmo_1.SortDescription(d,!0);p.push(e)}else if(_)p.splice(u,1);else{e=new wijmo_1.SortDescription(d,!p[u].ascending);p.splice(u,1,e)}}));i.onSortedColumn(g)}}}};GroupPanel.controlTemplate='<div><div wj-part="div-ph"></div><div wj-part="div-markers"></div></div>';return GroupPanel}(wijmo_1.Control);exports.GroupPanel=GroupPanel;wijmo_1._registerModule("wijmo.grid.grouppanel",selfModule);