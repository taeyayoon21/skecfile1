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

import{Control,ObservableArray,addClass,getElement,closest}from"wijmo/wijmo";import{WjDirective,WjLink,MetaFactory,_registerNgModule,softRefInput}from"wijmo/wijmo.angular.base";import*as mNg from"angular";import*as wjcInput from"wijmo/wijmo.input";var wjNg=mNg;const wijmoInputName="wj.input";export const ngModuleName="wj.input";var wijmoInput=_registerNgModule("wj.input");if(softRefInput()){wijmoInput.directive("wjAutoComplete",["$compile",function(t){return new WjAutoComplete(t)}]);wijmoInput.directive("wjCalendar",[function(){return new WjCalendar}]);wijmoInput.directive("wjColorPicker",[function(){return new WjColorPicker}]);wijmoInput.directive("wjComboBox",["$compile",function(t){return new WjComboBox(t)}]);wijmoInput.directive("wjInputDate",[function(){return new WjInputDate}]);wijmoInput.directive("wjInputDateTime",[function(){return new WjInputDateTime}]);wijmoInput.directive("wjInputNumber",[function(){return new WjInputNumber}]);wijmoInput.directive("wjInputMask",[function(){return new WjInputMask}]);wijmoInput.directive("wjInputTime",["$compile",function(t){return new WjInputTime(t)}]);wijmoInput.directive("wjInputColor",[function(){return new WjInputColor}]);wijmoInput.directive("wjListBox",[function(){return new WjListBox}]);wijmoInput.directive("wjItemTemplate",["$compile",function(t){return new WjItemTemplate(t)}]);wijmoInput.directive("wjMenu",["$compile",function(t){return new WjMenu(t)}]);wijmoInput.directive("wjMenuItem",[function(t){return new WjMenuItem}]);wijmoInput.directive("wjMenuSeparator",[function(){return new WjMenuSeparator}]);wijmoInput.directive("wjContextMenu",[function(){return new WjContextMenu}]);wijmoInput.directive("wjCollectionViewNavigator",[function(){return new WjCollectionViewNavigator}]);wijmoInput.directive("wjCollectionViewPager",[function(){return new WjCollectionViewPager}]);wijmoInput.directive("wjPopup",[function(){return new WjPopup}]);wijmoInput.directive("wjMultiSelect",["$compile",function(t){return new WjMultiSelect(t)}]);wijmoInput.directive("wjMultiAutoComplete",["$compile",function(t){return new WjMultiAutoComplete(t)}])}export class WjDropDown extends WjDirective{get _controlConstructor(){return wjcInput.DropDown}}export class WjComboBox extends WjDropDown{constructor(t){super();this._$compile=t;this.template="<div ng-transclude />";this.transclude=!0}get _controlConstructor(){return wjcInput.ComboBox}}export class WjAutoComplete extends WjComboBox{constructor(t){super(t)}get _controlConstructor(){return wjcInput.AutoComplete}}export class WjCalendar extends WjDirective{get _controlConstructor(){return wjcInput.Calendar}}export class WjColorPicker extends WjDirective{get _controlConstructor(){return wjcInput.ColorPicker}}export class WjListBox extends WjDirective{constructor(){super();this.transclude=!0;this.template="<div ng-transclude />"}get _controlConstructor(){return wjcInput.ListBox}}export class WjItemTemplate extends WjDirective{constructor(t){super();this._$compile=t;this.require=["?^wjListBox","?^wjMenu"];this.terminal=!0;if(WjDirective._dynaTemplates){this.transclude=!1;this.priority=100;this.template=function(t,e){e[WjItemTemplate._itemTemplateProp]=t[0].innerHTML;return"<div />"}}else{this.transclude=!0;this.template="<div ng-transclude/>"}}_initControl(t){return{}}_createLink(){return new WjItemTemplateLink}_getMetaDataId(){return"ItemTemplate"}}WjItemTemplate._itemTemplateProp="$__wjItemTemplate";WjItemTemplate._itemScopeProp="$_itemScope";class WjItemTemplateLink extends WjLink{_initParent(){super._initParent();var t=this.tAttrs[WjItemTemplate._itemTemplateProp],e=this.parent.control,n=this._getListBox();this.itemTemplate=null!=t?t:WjDirective._removeTransclude(this.tElement[0].innerHTML);n.formatItem.addHandler(this._fmtItem,this);n.loadingItems.addHandler(this._loadingItems,this);this.parent._isInitialized&&e.invalidate()}_destroy(){var t=this.parent&&this.parent.control,e=this._getListBox();if(e){e.formatItem.removeHandler(this._fmtItem,this);e.loadingItems.removeHandler(this._loadingItems,this)}super._destroy();this._tmplLink=null;t&&t.invalidate()}_loadingItems(t){for(var e=t.hostElement.getElementsByClassName("wj-listbox-item"),n=e.length-1;n>=0;n--){var r=e[n],i=r[WjItemTemplate._itemScopeProp];if(i){r[WjItemTemplate._itemScopeProp]=null;i.$destroy()}}}_fmtItem(t,e){this._tmplLink||(this._tmplLink=this.directive._$compile("<div>"+this.itemTemplate+"</div>"));var n=e.item,r=this.scope.$parent.$new();n[WjItemTemplate._itemScopeProp]=r;r.$control=t;r.$item=e.data;r.$itemIndex=e.index;var i=this._tmplLink(r,(function(t,e){}))[0];if(1===n.childNodes.length)n.replaceChild(i,n.firstChild);else{n.textContent="";n.appendChild(i)}clearTimeout(this._closingApplyTimeOut);this._closingApplyTimeOut=setTimeout((function(){r.$root.$$phase||r.$apply()}),40)}static _invalidateControl(t){t&&t.invalidate()}_getListBox(){var t=this.parent&&this.parent.control;return t?t instanceof wjcInput.ListBox?t:t.listBox:null}}export class WjMenu extends WjComboBox{constructor(t){super(t)}get _controlConstructor(){return wjcInput.Menu}_createLink(){return new WjMenuLink}_initProps(){super._initProps();var t=this;MetaFactory.findProp("value",this._props).customHandler=function(e,n,r,i,o){t.updateControlValue(e,n,o)}}updateControlValue(t,e,n){if(null!=t.value){e.selectedValue=t.value;n.directive.updateHeader(t,e,n)}}updateHeader(t,e,n){e.header=t.header||"";var r=e.selectedItem;if(void 0!==t.value&&r&&e.displayMemberPath){var i=r[WjMenuItem._itemLinkProp],o=i?i.linkedContent.innerHTML:r[e.displayMemberPath];null!=o&&(e.header+=": <b>"+o+"</b>")}}}class WjMenuLink extends WjLink{_initControl(){var t=this,e=new wjcInput.Menu(this.directiveTemplateElement[0],{itemsSource:new ObservableArray,selectedIndex:0,itemClicked:function(){t._safeApply(t.scope,"value",e.selectedValue)||t.scope.$root.$$phase||t.scope.$apply();t.directive.updateHeader(t.scope,e,t)}.bind(t)});e.listBox.formatItem.addHandler(t._fmtItem,this);e.listBox.loadingItems.addHandler(this._loadingItems,this);return e}_initialized(){this.directive.updateControlValue(this.scope,this.control,this)}_fmtItem(t,e){var n=e.data[WjMenuItem._itemLinkProp];if(n){n.contentLink||(n.contentLink=this.directive._$compile("<div>"+n.itemTemplate+"</div>"));var r=this,i=e.item,o=n.scope.$parent.$new();i[WjMenuItem._itemScopeProp]=o;o.$control=this.control;o.$item=e.data;o.$itemIndex=e.index;var s=n.linkedContent=n.contentLink(o,(function(t,e){}))[0];n.isSeparator&&addClass(i,"wj-state-disabled");if(1===i.childNodes.length)i.replaceChild(s,i.firstChild);else{i.textContent="";i.appendChild(s)}clearTimeout(this._closingApplyTimeOut);this._closingApplyTimeOut=setTimeout((function(){o.$root.$$phase||o.$apply();r.control.selectedItem&&r.directive.updateHeader(r.scope,r.control,r)}),40)}}_loadingItems(t){for(var e=t.hostElement.getElementsByClassName("wj-listbox-item"),n=e.length-1;n>=0;n--){var r=e[n],i=r[WjMenuItem._itemScopeProp];if(i){r[WjItemTemplate._itemScopeProp]=null;i.$destroy()}}}}export class WjMenuItem extends WjDirective{constructor(){super();this.require="^wjMenu";this.terminal=!0;if(WjDirective._dynaTemplates){this.transclude=!1;this.priority=100;this.template=function(t,e){e[WjItemTemplate._itemTemplateProp]=t[0].innerHTML;return"<div />"}}else{this.transclude=!0;this.template="<div ng-transclude/>"}}_createLink(){return new WjMenuItemLink(!1)}_getMetaDataId(){return"MenuItem"}_getId(){return WjMenuItem._directiveId}}WjMenuItem._itemTemplateProp="$__wjMenuItemTemplate";WjMenuItem._itemScopeProp="$_menuItemScope";WjMenuItem._itemLinkProp="$_menuItemLink";WjMenuItem._directiveId="menuItemDir";class WjMenuItemLink extends WjLink{constructor(t){super();this.isSeparator=t}_initControl(){var t=this.tAttrs[WjItemTemplate._itemTemplateProp];this.itemTemplate=this.isSeparator?'<div class="wj-state-disabled" style="width:100%;height:1px;background-color:lightgray"></div>':null!=t?t:WjDirective._removeTransclude(this.tElement[0].innerHTML);var e={value:null,cmd:null,cmdParam:null,header:this.itemTemplate};e[WjMenuItem._itemLinkProp]=this;return e}_initParent(){super._initParent();var t=this.parent.control;1==t.itemsSource.length&&t.selectedIndex<0&&(t.selectedIndex=0);t.displayMemberPath||(t.displayMemberPath="header");t.selectedValuePath||(t.selectedValuePath="value");t.commandPath||(t.commandPath="cmd");t.commandParameterPath||(t.commandParameterPath="cmdParam")}_destroy(){var t=this.parent&&this.parent.control;super._destroy();t&&t.invalidate()}}export class WjMenuSeparator extends WjDirective{constructor(){super();this.template="<span />";this.require="^wjMenu"}_getMetaDataId(){return"MenuSeparator"}_createLink(){return new WjMenuItemLink(!0)}_getId(){return WjMenuItem._directiveId}}export class WjContextMenu extends WjDirective{constructor(){super();this.template=void 0;this.restrict="A";this.scope=!1}_getMetaDataId(){return"WjContextMenu"}_postLinkFn(){return function(t,e,n){var r=getElement(n.wjContextMenu);e[0].addEventListener("contextmenu",(function(t){var n=Control.getControl(r),i=n.dropDown;if(n&&i&&!closest(t.target,"[disabled]")){t.preventDefault();n.owner=e[0];n.show(t)}}))}}}export class WjInputDate extends WjDropDown{get _controlConstructor(){return wjcInput.InputDate}}export class WjInputDateTime extends WjInputDate{get _controlConstructor(){return wjcInput.InputDateTime}}export class WjInputNumber extends WjDirective{get _controlConstructor(){return wjcInput.InputNumber}}export class WjInputMask extends WjDirective{get _controlConstructor(){return wjcInput.InputMask}}export class WjInputTime extends WjComboBox{constructor(t){super(t)}get _controlConstructor(){return wjcInput.InputTime}}export class WjInputColor extends WjDropDown{get _controlConstructor(){return wjcInput.InputColor}}export class WjPopup extends WjDirective{constructor(){super();this.transclude=!0;this.template="<div ng-transclude/>"}get _controlConstructor(){return wjcInput.Popup}_initProps(){super._initProps();MetaFactory.findProp("owner",this._props).customHandler=function(t,e,n,r,i){null==t.modal&&(e.modal=!n)}}}export class WjMultiSelect extends WjComboBox{constructor(t){super(t)}get _controlConstructor(){return wjcInput.MultiSelect}}export class WjMultiAutoComplete extends WjAutoComplete{constructor(t){super(t)}get _controlConstructor(){return wjcInput.MultiAutoComplete}}export class WjCollectionViewNavigator extends WjDirective{constructor(){super();this.template='<div class="wj-control wj-content wj-pager"><div class="wj-input-group"><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button" ng-click="cv.moveCurrentToFirst()" ng-disabled="cv.currentPosition <= 0"><span class="wj-glyph-left" style="margin-right:-4px"></span><span class="wj-glyph-left"></span> </button></span><span class="wj-input-group-btn"> <button class="wj-btn wj-btn-default" type="button" ng-click="cv.moveCurrentToPrevious()" ng-disabled="cv.currentPosition <= 0"><span class="wj-glyph-left"></span> </button></span><input type="text" class="wj-form-control" value=" {{cv.currentPosition + 1 | number}} / {{cv.itemCount | number}} " disabled /><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button" ng-click="cv.moveCurrentToNext()" ng-disabled="cv.currentPosition >= cv.itemCount - 1"><span class="wj-glyph-right"></span></button></span><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button" ng-click="cv.moveCurrentToLast()" ng-disabled="cv.currentPosition >= cv.itemCount - 1"><span class="wj-glyph-right"></span><span class="wj-glyph-right" style="margin-left:-4px"></span></button></span></div></div>'}_getMetaDataId(){return"CollectionViewNavigator"}_postLinkFn(){return function(t,e,n,r){}}}export class WjCollectionViewPager extends WjDirective{constructor(){super();this.template='<div class="wj-control wj-content wj-pager"><div class="wj-input-group"><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button"ng-click="cv.moveToFirstPage()"ng-disabled="cv.pageIndex <= 0"><span class="wj-glyph-left" style="margin-right:-4px"></span><span class="wj-glyph-left"></span></button></span><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button"ng-click="cv.moveToPreviousPage()"ng-disabled="cv.pageIndex <= 0"><span class="wj-glyph-left"></span></button></span><input type="text" class="wj-form-control" value="{{cv.pageIndex + 1 | number}} / {{cv.pageCount | number}}" disabled /><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button"ng-click="cv.moveToNextPage()"ng-disabled="cv.pageIndex >= cv.pageCount - 1"><span class="wj-glyph-right"></span></button></span><span class="wj-input-group-btn"><button class="wj-btn wj-btn-default" type="button"ng-click="cv.moveToLastPage()"ng-disabled="cv.pageIndex >= cv.pageCount - 1"><span class="wj-glyph-right"></span><span class="wj-glyph-right" style="margin-left:-4px"></span></button></span></div></div>'}_getMetaDataId(){return"CollectionViewPager"}_postLinkFn(){return function(t,e,n,r){}}}