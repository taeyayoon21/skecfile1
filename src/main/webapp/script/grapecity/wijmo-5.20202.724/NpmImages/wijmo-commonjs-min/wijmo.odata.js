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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=require("wijmo/wijmo"),selfModule=require("wijmo/wijmo.odata");function softGrid(){return wijmo_1._getModule("wijmo.grid")}exports.softGrid=softGrid;function softFilter(){return wijmo_1._getModule("wijmo.grid.filter")}exports.softFilter=softFilter;var ODataCollectionView=function(t){__extends(ODataCollectionView,t);function ODataCollectionView(e,i,o){var n=t.call(this)||this;n._count=0;n._sortOnServer=!0;n._pageOnServer=!0;n._filterOnServer=!0;n._deferCommits=!1;n._hasPendingChanges=!1;n._showDatesAsGmt=!1;n._inferDataTypes=!0;n._reviverBnd=n._reviver.bind(n);n.loading=new wijmo_1.Event;n.loaded=new wijmo_1.Event;n.error=new wijmo_1.Event;n.hasPendingChangesChanged=new wijmo_1.Event;n._url=wijmo_1.asString(e,!1);n._tbl=wijmo_1.asString(i);wijmo_1.copy(n,o);n.sortDescriptions.collectionChanged.addHandler((function(){n.sortOnServer&&!n.hasPendingChanges&&n._getData()}));n.itemsEdited.collectionChanged.addHandler(n._updateHasChanges,n);n.itemsAdded.collectionChanged.addHandler(n._updateHasChanges,n);n.itemsRemoved.collectionChanged.addHandler(n._updateHasChanges,n);n._getData();return n}Object.defineProperty(ODataCollectionView.prototype,"tableName",{get:function(){return this._tbl},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"entityType",{get:function(){return this._entityType},set:function(t){this._entityType=wijmo_1.asString(t)},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"fields",{get:function(){return this._fields},set:function(t){if(this._fields!=t){this._fields=wijmo_1.asArray(t);this._getData()}},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"requestHeaders",{get:function(){return this._requestHeaders},set:function(t){this._requestHeaders=t},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"keys",{get:function(){return this._keys},set:function(t){this._keys=wijmo_1.asArray(t)},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"expand",{get:function(){return this._expand},set:function(t){this._expand=wijmo_1.asString(t)},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"jsonReviver",{get:function(){return this._jsonReviver},set:function(t){this._jsonReviver=wijmo_1.asFunction(t)},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"dataTypes",{get:function(){return this._dataTypes},set:function(t){this._dataTypes=t},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"inferDataTypes",{get:function(){return this._inferDataTypes},set:function(t){if(t!=this.inferDataTypes){this._inferDataTypes=wijmo_1.asBoolean(t);this._getData()}},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"showDatesAsGmt",{get:function(){return this._showDatesAsGmt},set:function(t){if(t!=this.showDatesAsGmt){this._showDatesAsGmt=wijmo_1.asBoolean(t);this._getData()}},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"sortOnServer",{get:function(){return this._sortOnServer},set:function(t){if(t!=this._sortOnServer){this._sortOnServer=wijmo_1.asBoolean(t);this._getData()}},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"pageOnServer",{get:function(){return this._pageOnServer},set:function(t){if(t!=this._pageOnServer){this._pageOnServer=wijmo_1.asBoolean(t);this.pageSize&&this._getData()}},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"filterOnServer",{get:function(){return this._filterOnServer},set:function(t){if(t!=this._filterOnServer){this._filterOnServer=wijmo_1.asBoolean(t);this._getData()}},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"filterDefinition",{get:function(){return this._filterDef},set:function(t){if(t!=this._filterDef){this._filterDef=wijmo_1.asString(t);this._getData()}},enumerable:!0,configurable:!0});ODataCollectionView.prototype.updateFilterDefinition=function(t){this.filterOnServer&&softGrid()&&softFilter()&&t instanceof softFilter().FlexGridFilter&&(this.filterDefinition=this._asODataFilter(t))};Object.defineProperty(ODataCollectionView.prototype,"oDataVersion",{get:function(){return this._odv},set:function(t){this._odv=wijmo_1.asNumber(t)},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"isLoading",{get:function(){return this._loading},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"deferCommits",{get:function(){return this._deferCommits},set:function(t){this._deferCommits=wijmo_1.asBoolean(t);this.deferCommits&&(this.trackChanges=!0)},enumerable:!0,configurable:!0});ODataCollectionView.prototype.onLoading=function(t){this.loading.raise(this,t)};ODataCollectionView.prototype.onLoaded=function(t){this.loaded.raise(this,t)};ODataCollectionView.prototype.load=function(){this._getData()};ODataCollectionView.prototype.onError=function(t){this.error.raise(this,t);return!t.cancel};ODataCollectionView.prototype.onHasPendingChangesChanged=function(t){this.hasPendingChangesChanged.raise(this,t)};ODataCollectionView.prototype.implementsInterface=function(e){return"IEditableCollectionView"==e?null!=this.keys&&this.keys.length>0:t.prototype.implementsInterface.call(this,e)};ODataCollectionView.prototype.commitNew=function(){var e=this;if(!this.deferCommits){var i={Accept:"application/json"};if(this.requestHeaders)for(var o in this.requestHeaders)i[o]=this.requestHeaders[o];var n=this.currentAddItem;if(n){var r=this._getWriteUrl();wijmo_1.httpRequest(r,{method:"POST",requestHeaders:i,data:this._convertToDbFormat(n),success:function(t){var i=JSON.parse(t.responseText,e._reviverBnd);e.keys.forEach((function(t){n[t]=i[t]}));e.refresh()},error:this._error.bind(this)})}}t.prototype.commitNew.call(this)};ODataCollectionView.prototype.commitEdit=function(){if(!this.deferCommits){var e=this.currentEditItem;if(e&&!this.currentAddItem&&this._getChangedFields(e,this._edtClone)){var i=this._getWriteUrl(this._edtClone);wijmo_1.httpRequest(i,{method:"PATCH",requestHeaders:this.requestHeaders,data:this._convertToDbFormat(e),error:this._error.bind(this)})}}t.prototype.commitEdit.call(this)};ODataCollectionView.prototype.remove=function(e){if(!this.deferCommits&&e&&e!=this.currentAddItem&&this.items.indexOf(e)>-1){var i=this._getWriteUrl(e);wijmo_1.httpRequest(i,{method:"DELETE",requestHeaders:this.requestHeaders,error:this._error.bind(this)})}t.prototype.remove.call(this,e)};ODataCollectionView.prototype.commitChanges=function(t){var e=this;if(this.deferCommits){var i=[];this.itemsEdited.forEach((function(t){i.push({method:"PATCH",url:e._getWriteUrl(t),data:e._convertToDbFormat(t)})}));this.itemsAdded.forEach((function(t){i.push({method:"POST",url:e._getWriteUrl(),data:e._convertToDbFormat(t)})}));this.itemsRemoved.forEach((function(t){i.push({method:"DELETE",url:e._getWriteUrl(t)})}));if(i.length){var o=(new Date).getTime().toString();wijmo_1.httpRequest(this._getServiceUrl()+"$batch",{method:"POST",requestHeaders:{"Content-Type":'multipart/mixed; boundary="'+o+'"'},data:this._encodeBatch(i,o),success:function(t){e.clearChanges();e.load()},error:function(t){if(e.onError(new wijmo_1.RequestErrorEventArgs(t)))throw"HttpRequest Error: "+t.status+" "+t.statusText},complete:function(e){wijmo_1.isFunction(t)&&t(e)}})}}};ODataCollectionView.prototype.cancelChanges=function(){if(this.deferCommits){this.clearChanges();this.load()}};Object.defineProperty(ODataCollectionView.prototype,"hasPendingChanges",{get:function(){return!!this.deferCommits&&(this.itemsAdded.length>0||this.itemsEdited.length>0||this.itemsRemoved.length>0)},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"totalItemCount",{get:function(){return this._count},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"pageCount",{get:function(){return this.pageSize?Math.ceil(this.totalItemCount/this.pageSize):1},enumerable:!0,configurable:!0});Object.defineProperty(ODataCollectionView.prototype,"pageSize",{get:function(){return this._pgSz},set:function(t){if(t!=this._pgSz){this._pgSz=wijmo_1.asInt(t);if(this.pageOnServer){this._pgIdx=wijmo_1.clamp(this._pgIdx,0,this.pageCount-1);this._getData()}else this.refresh()}},enumerable:!0,configurable:!0});ODataCollectionView.prototype.onPageChanging=function(e){t.prototype.onPageChanging.call(this,e);!e.cancel&&this.pageOnServer&&this._getData();return!e.cancel};ODataCollectionView.prototype._getPageView=function(){return this.pageOnServer?this._view:t.prototype._getPageView.call(this)};ODataCollectionView.prototype._performRefresh=function(){var e=this._canFilter,i=this._canSort;this._canFilter=!this._filterOnServer;this._canSort=!this._sortOnServer;t.prototype._performRefresh.call(this);this._canFilter=e;this._canSort=i};ODataCollectionView.prototype._updateHasChanges=function(){var t=this.hasPendingChanges;if(t!=this._hasPendingChanges){this._hasPendingChanges=t;this.onHasPendingChangesChanged()}};ODataCollectionView.prototype._storeItems=function(t,e){e?Array.prototype.push.apply(this.sourceCollection,t):this.sourceCollection=t};ODataCollectionView.prototype._getReadUrl=function(t){var e=this._getServiceUrl();t?e=0==t.indexOf("http")?t:e+t:this._tbl&&(e+=this._tbl);return e};ODataCollectionView.prototype._getReadParams=function(t){var e={};(!t||t.indexOf("$format")<0&&t.indexOf("%24format")<0)&&(e.$format="json");if(!t&&this._tbl){this._odv<4?e.$inlinecount="allpages":e.$count=!0;this.fields&&(e.$select=this.fields.join(","));this.expand&&(e.$expand=this.expand);if(this.sortOnServer&&this.sortDescriptions.length){var i="";this.sortDescriptions.forEach((function(t){i&&(i+=",");i+=t.property;t.ascending||(i+=" desc")}));e.$orderby=i}if(this.pageOnServer&&this.pageSize>0){e.$skip=this.pageIndex*this.pageSize;e.$top=this.pageSize}this.filterDefinition&&(e.$filter=this._encodeFilterDefinition())}return e};ODataCollectionView.prototype._encodeFilterDefinition=function(){return this.filterDefinition.replace(/%/g,"%25").replace(/\+/g,"%2B").replace(/\//g,"%2F").replace(/\?/g,"%3F").replace(/#/g,"%23").replace(/&/g,"%26")};ODataCollectionView.prototype._getData=function(t,e){var i=this;this._toGetData&&clearTimeout(this._toGetData);this._toGetData=setTimeout((function(){if(null!=i._odv){i._loading=!0;i.onLoading();var o=wijmo_1.httpRequest(i._getReadUrl(t),{requestHeaders:i.requestHeaders,data:i._getReadParams(t),success:function(e){var o=JSON.parse(e.responseText,i._reviverBnd),n=o.d?o.d.results:o.value,r=o.d?o.d.__count:o["odata.count"]||o["@odata.count"];null!=r&&(i._count=parseInt(r));if(i.pageIndex>0&&i.pageIndex>=i.pageCount){var a=i.pageIndex;i.moveToLastPage();if(i.pageIndex!=a)return}t||i.inferDataTypes&&!i._dataTypesInferred&&(i._dataTypesInferred=i._getInferredDataTypes(n));var s=i.dataTypes?i.dataTypes:i._dataTypesInferred;s&&n.forEach((function(t){i._convertItem(s,t)}));i._storeItems(n,null!=t);i.refresh();if(t=o.d?o.d.__next:o["odata.nextLink"]||o["@odata.nextLink"])i._getData(t);else{i._loading=!1;i.onLoaded()}},error:function(t){i._loading=!1;i.onLoaded();if(i.onError(new wijmo_1.RequestErrorEventArgs(t)))throw"HttpRequest Error: "+t.status+" "+t.statusText}});wijmo_1.isFunction(e)&&e(o)}else i._getSchema()}),100)};ODataCollectionView.prototype._convertToDbFormat=function(t){var e={};for(var i in t){var o=t[i];wijmo_1.isDate(o)&&this._showDatesAsGmt?o=new Date(o.getTime()-6e4*o.getTimezoneOffset()):wijmo_1.isNumber(o)&&this._odv<4&&(o=o.toString());e[i]=o}this.entityType&&(e["odata.type"]=this.entityType);return e};ODataCollectionView.prototype._reviver=function(t,e){if("string"==typeof e&&ODataCollectionView._rxDate.test(e)){e=0==e.indexOf("/Date(")?new Date(parseInt(e.substr(6))):new Date(e);wijmo_1.isDate(e)&&this._showDatesAsGmt&&(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()))}return this._jsonReviver?this._jsonReviver(t,e):e};ODataCollectionView.prototype._convertItem=function(t,e){for(var i in t){var o=t[i],n=e[i];if(null!=n){n=o==wijmo_1.DataType.Date&&wijmo_1.isString(n)&&0==n.indexOf("/Date(")?new Date(parseInt(n.substr(6))):wijmo_1.changeType(n,o,null);wijmo_1.isDate(n)&&this._showDatesAsGmt&&(n=new Date(n.getTime()+6e4*n.getTimezoneOffset()));e[i]=n}}};ODataCollectionView.prototype._getInferredDataTypes=function(t){var e=this,i=null;if(t.length>0){var o={};t.forEach((function(t){e._extend(o,t)}));for(var n in o){var r=o[n];if(wijmo_1.isString(r)&&ODataCollectionView._rxDate.test(r)){i||(i={});i[n]=wijmo_1.DataType.Date}}}return i};ODataCollectionView.prototype._getServiceUrl=function(){var t=this._url;"/"!=t[t.length-1]&&(t+="/");return t};ODataCollectionView.prototype._getSchema=function(){var t=this,e=this._getServiceUrl()+"$metadata",i=ODataCollectionView._odvCache;this._odv=i[e];this._odv?this._getData():wijmo_1.httpRequest(e,{requestHeaders:this.requestHeaders,success:function(o){var n=o.responseText.match(/<.*Version\s*=\s*"([0-9.]+)"/),r=n?parseFloat(n[1]):4;i[e]=t._odv=r},error:function(o){i[e]=t._odv=4},complete:function(e){t._getData()}})};ODataCollectionView.prototype._getWriteUrl=function(t){var e=this,i=this._getServiceUrl()+this._tbl;if(t){wijmo_1.assert(this.keys&&this.keys.length>0,"write operations require keys.");var o=[];this.keys.forEach((function(i){var n=t[i];null==n&&(n="");wijmo_1.isString(n)&&(n="'"+n+"'");o.push(1==e.keys.length?n:i+"="+n)}));o.length&&(i+="("+o.join(",")+")")}return i};ODataCollectionView.prototype._asODataFilter=function(t){for(var e="",i=0;i<t.grid.columns.length;i++){var o=t.grid.columns[i],n=t.getColumnFilter(o,!1);if(n&&n.isActive){e&&(e+=" and ");n.conditionFilter&&n.conditionFilter.isActive?e+=this._asODataConditionFilter(n.conditionFilter):n.valueFilter&&n.valueFilter.isActive&&(e+=this._asODataValueFilter(n.valueFilter))}}return e};ODataCollectionView.prototype._asODataValueFilter=function(t){var e=t.column,i=e.binding,o=e.dataMap,n="";for(var r in t.showValues){var a=wijmo_1.changeType(r,e.dataType,e.format);o&&wijmo_1.isString(a)&&(a=o.getKeyValue(a));n&&(n+=" or ");n+=this._asEquals(i,a,e.dataType)}n.length&&(n="("+n+")");return n};ODataCollectionView.prototype._asEquals=function(t,e,i){return i==wijmo_1.DataType.Date?"("+t+" ge "+this._asODataValue(e,i)+" and "+t+" lt "+this._asODataValue(wijmo_1.DateTime.addDays(e,1),i)+")":""===e||null==e?"("+t+" eq null or "+t+" eq '')":"("+t+" eq "+this._asODataValue(e,i)+")"};ODataCollectionView.prototype._asODataConditionFilter=function(t){var e=this._asODataCondition(t,t.condition1),i=this._asODataCondition(t,t.condition2);return e&&i?"("+e+(t.and?" and ":" or ")+i+")":e?"("+e+")":i?"("+i+")":null};ODataCollectionView.prototype._asODataCondition=function(t,e){var i=t.column,o=i.binding,n=i.dataMap,r=e.value;n&&wijmo_1.isString(r)&&(r=n.getKeyValue(r));r=this._asODataValue(r,t.column.dataType);switch(e.operator){case 0:return o+" eq "+r;case 1:return o+" ne "+r;case 2:return o+" gt "+r;case 3:return o+" ge "+r;case 4:return o+" lt "+r;case 5:return o+" le "+r;case 6:return"startswith("+o+","+r+")";case 7:return"endswith("+o+","+r+")";case 8:return this._odv>=4?"contains("+o+","+r+")":"substringof("+r.toLowerCase()+", tolower("+o+"))";case 9:return this._odv>=4?"not contains("+o+","+r+")":"not substringof("+r.toLowerCase()+", tolower("+o+"))"}};ODataCollectionView.prototype._asODataValue=function(t,e){if(wijmo_1.isDate(t)){this._showDatesAsGmt&&(t=new Date(t.getTime()-6e4*t.getTimezoneOffset()));t=t.toJSON();this._odv<4&&(t="datetime'"+t.substr(0,10)+"'");return t}return wijmo_1.isString(t)?"'"+t.replace(/'/g,"''")+"'":null!=t?t.toString():e==wijmo_1.DataType.String?"''":null};ODataCollectionView.prototype._error=function(t){if(this.onError(new wijmo_1.RequestErrorEventArgs(t))){this._getData();throw"HttpRequest Error: "+t.status+" "+t.statusText}};ODataCollectionView.prototype._encodeBatch=function(t,e){var i=[],o="changeset-"+e;i.push("--"+e,"Content-Type: multipart/mixed; boundary="+o,"");t.forEach((function(t,e){i.push("--"+o,"Content-Type: application/http","Content-Transfer-Encoding: binary","Content-ID: "+e,"",t.method.toUpperCase()+" "+t.url+" HTTP/1.1","Host: "+location.host);t.data&&i.push("Content-Type: application/json","",JSON.stringify(t.data));i.push("")}));i.push("--"+o+"--","");i.push("--"+e+"--","");return i.join("\r\n")};ODataCollectionView._odvCache={};ODataCollectionView._rxDate=/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}|\/Date\([\d\-]*?\)/;return ODataCollectionView}(wijmo_1.CollectionView);exports.ODataCollectionView=ODataCollectionView;var _MIN_DATA_WINDOW=100,ODataVirtualCollectionView=function(t){__extends(ODataVirtualCollectionView,t);function ODataVirtualCollectionView(e,i,o){var n=t.call(this,e,i,{pageOnServer:!0,sortOnServer:!0,canGroup:!1})||this;n._start=0;n._end=100;n._refresh=!1;wijmo_1.copy(n,o);n._data=[];n.sourceCollection=n._data;n._firstLoad=!0;n.setWindow(0,_MIN_DATA_WINDOW);return n}ODataVirtualCollectionView.prototype.setWindow=function(t,e){var i=this;this._toSetWindow&&clearTimeout(this._toSetWindow);this._toSetWindow=setTimeout((function(){i._toSetWindow=null;i._performSetWindow(t,e)}),50)};Object.defineProperty(ODataVirtualCollectionView.prototype,"requestCanceled",{get:function(){this._requestCanceled||(this._requestCanceled=new wijmo_1.Event);return this._requestCanceled},enumerable:!0,configurable:!0});ODataVirtualCollectionView.prototype.onRequestCanceled=function(t){this.requestCanceled.raise(this,t)};Object.defineProperty(ODataVirtualCollectionView.prototype,"pageOnServer",{get:function(){return!0},set:function(t){if(!t)throw"ODataVirtualCollectionView requires pageOnServer = true."},enumerable:!0,configurable:!0});Object.defineProperty(ODataVirtualCollectionView.prototype,"sortOnServer",{get:function(){return!0},set:function(t){if(!wijmo_1.asBoolean(t))throw"ODataVirtualCollectionView requires sortOnServer = true."},enumerable:!0,configurable:!0});Object.defineProperty(ODataVirtualCollectionView.prototype,"filterOnServer",{get:function(){return!0},set:function(t){if(!wijmo_1.asBoolean(t))throw"ODataVirtualCollectionView requires filterOnServer = true."},enumerable:!0,configurable:!0});Object.defineProperty(ODataVirtualCollectionView.prototype,"canGroup",{get:function(){return this._canGroup},set:function(t){if(wijmo_1.asBoolean(t))throw"ODataVirtualCollectionView does not support grouping."},enumerable:!0,configurable:!0});ODataVirtualCollectionView.prototype._performRefresh=function(){this.isLoading||(this._refresh=!0);t.prototype._performRefresh.call(this)};ODataVirtualCollectionView.prototype._getReadParams=function(e){var i=t.prototype._getReadParams.call(this,e);if(!e){i.$skip=this._start||0;i.$top=Math.max(this._end-this._start+1,this.pageSize,_MIN_DATA_WINDOW)}return i};ODataVirtualCollectionView.prototype._storeItems=function(t,e){var i=this;if(this._refresh||this._data.length!=this.totalItemCount){this._data.length=this.totalItemCount;for(var o=0;o<this._data.length;o++)this._data[o]=new _NullValue(o);this._refresh=!1}e||(this._loadOffset=0);var n=this._loadOffset+(this._start||0);for(o=0;o<t.length;o++)this._data[o+n]=t[o];this._loadOffset+=t.length;setTimeout((function(){i._firstLoad&&i.currentPosition<0&&t.length&&i.moveCurrentToFirst();i._firstLoad=!1}))};ODataVirtualCollectionView.prototype._performSetWindow=function(t,e){var i=this;if(this._pendingRequest){this._pendingRequest.abort();this._pendingRequest=null;this.onRequestCanceled()}t=wijmo_1.asInt(t);e=wijmo_1.asInt(e);wijmo_1.assert(t<=e,"start must be <= end.");var o=this._data;this._start=this._end=t;for(var n=t;n<=e&&n<o.length;n++)if(o[n]instanceof _NullValue){this._start=n;break}for(n=e;n>=this._start&&n<o.length;n--)if(o[n]instanceof _NullValue){this._end=n;break}(this._start!=this._end||o[this._start]instanceof _NullValue)&&this._getData(null,(function(t){i._pendingRequest=t}))};return ODataVirtualCollectionView}(ODataCollectionView);exports.ODataVirtualCollectionView=ODataVirtualCollectionView;var _NullValue=function _NullValue(t){this._id=t};wijmo_1._registerModule("wijmo.odata",selfModule);