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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{Control,Event,isArray,addClass,setCss,isFunction,isPrimitive,isObject,DateTime,isUndefined}from"wijmo/wijmo";import*as React from"react";var ComponentBase=function(t){__extends(ComponentBase,t);function ComponentBase(e,n,o){var i=t.call(this,e)||this;i._objPropHash={};i._isMounted=!1;i._mountedCBs=[];i._hostRef=React.createRef();i._beforeRender=new Event;i._afterRender=new Event;i._beforeWillUnmount=new Event;i._afterWillUnmount=new Event;i._beforeDidUpdate=new Event;i._afterDidUpdate=new Event;i.props=e;i.controlType=n;for(var r=0,s=o&&o.objectProps||[];r<s.length;r++){var p=s[r];i._objPropHash[p]=!0}return i}ComponentBase.prototype.render=function(){this._onBeforeRender();var t=this._renderImpl();this._onAfterRender();return t};ComponentBase.prototype.componentDidMount=function(){var t=this;if(this._isChild()){var e=this.props[ComponentBase._propsParent];e&&e._mountedCB((function(){t._setParent(e)}))}else this._prepareControl();return this.control};ComponentBase.prototype.componentWillUnmount=function(){this._onBeforeWillUnmount();this._siblingInsertedEH&&this._getElement().removeEventListener("DOMNodeInserted",this._siblingInsertedEH);var t=this.control;if(t)if(this._isChild()){var e=this._getParentProp();if(e){var n=this.parent.control[e];if(isArray(n)){var o=n.indexOf(t);o>-1&&n.splice(o,1)}}}else t instanceof Control&&setTimeout((function(){t.hostElement&&t.dispose()}));this._onAfterWillUnmount()};ComponentBase.prototype.shouldComponentUpdate=function(t){return!0};ComponentBase.prototype.componentDidUpdate=function(t){this._onBeforeDidUpdate();var e=this.control;this._copy(e,this.props,t);this._onAfterDidUpdate()};ComponentBase.prototype._mountedCB=function(t){this._isMounted?t():this._mountedCBs.push(t)};ComponentBase.prototype._renderImpl=function(){var t={};t[ComponentBase._propsParent]=this;var e=React.Children.map(this.props.children,(function(e){return e&&React.cloneElement(e,t)})),n={ref:this._hostRef};this._isChild()&&(n.style={display:"none"});return React.createElement("div",n,e)};ComponentBase.prototype._onBeforeRender=function(t){this._beforeRender.raise(this,t)};ComponentBase.prototype._onAfterRender=function(t){this._afterRender.raise(this,t)};ComponentBase.prototype._onBeforeWillUnmount=function(t){this._beforeWillUnmount.raise(this,t)};ComponentBase.prototype._onAfterWillUnmount=function(t){this._afterWillUnmount.raise(this,t)};ComponentBase.prototype._onBeforeDidUpdate=function(t){this._beforeDidUpdate.raise(this,t)};ComponentBase.prototype._onAfterDidUpdate=function(t){this._afterDidUpdate.raise(this,t)};ComponentBase.prototype._createControl=function(){var t=this._isChild()?this._isParentInCtor()?this.parent.control:void 0:this._getElement();return new this.controlType(t)};ComponentBase.prototype._prepareControl=function(){var t=this._getElement(),e=this.props;t&&!this._isChild()&&ComponentBase._copyAttrs(t,e,Control._rxInputAtts);var n=this.control=this._createControl(),o=n instanceof Control,i=ComponentBase;if(!this._siblingId){null==this.constructor[i._typeSiblingIdProp]&&(this.constructor[i._typeSiblingIdProp]=++i._siblingDirId+"");this._siblingId=this.constructor[i._typeSiblingIdProp]}t.setAttribute(i._typeSiblingIdProp,this._siblingId);var r={};for(var s in e){var p=e[s];this._ignoreProp(s)||isUndefined(p)||(s in n?r[s]=p:this._setHostAttribute(t,s,p))}o?n.initialize(r):this._copy(n,r,null,!0);this._isMounted=!0;var a=this._mountedCBs;this._mountedCBs=[];for(var l=0,h=a;l<h.length;l++){(0,h[l])()}isFunction(e.initialized)&&e.initialized(n)};ComponentBase.prototype._initParent=function(){var t=this._getParentProp();if(t){var e=this.parent.control,n=e[t];if(isArray(n)){var o=this._getSiblingIndex();(o<0||o>=n.length)&&(o=n.length);n.splice(o,0,this.control);this._siblingInsertedEH=this._siblingInserted.bind(this);this._getElement().addEventListener("DOMNodeInserted",this._siblingInsertedEH)}else e[t]=this.control}};ComponentBase.prototype._setParent=function(t){if(t!==this.parent){if(this.parent)throw"Wijmo child component is already attached to a different parent.";this.parent=t;this._prepareControl();this._initParent()}};ComponentBase.prototype._isChild=function(){return null!=this._parentProp||null!=this._parentInCtor};ComponentBase.prototype._isParentInCtor=function(){return!0===this._parentInCtor};ComponentBase.prototype._getParentProp=function(){return this.props.wjProperty||this._parentProp};ComponentBase.prototype._getSiblingIndex=function(){var t=this._getElement(),e=t.parentElement;if(!e)return-1;for(var n=e.childNodes,o=-1,i=this._siblingId,r=0;r<n.length;r++){var s=n[r];if(1==s.nodeType&&s.getAttribute(ComponentBase._typeSiblingIdProp)==i){++o;if(s===t)return o}}return-1};ComponentBase.prototype._siblingInserted=function(t){if(t.target===this._getElement()){var e=this._getSiblingIndex(),n=this.control,o=this.parent.control[this._getParentProp()],i=o.indexOf(n);if(e>=0&&i>=0&&e!==i){o.splice(i,1);e=Math.min(e,o.length);o.splice(e,0,n)}}};ComponentBase.prototype._copy=function(t,e,n,o){void 0===o&&(o=!1);if(t&&e){var i,r=t===this.control;for(var s in e)if(!this._ignoreProp(s)||!r){var p=e[s];if(s in t){if(this._isEvent(t,s))o&&isFunction(p)&&t[s].addHandler(p);else if(!n||!this._sameValue(n[s],p))if(null==p)t[s]=p;else if(isPrimitive(p)||isFunction(p)||this._objPropHash[s]&&t===(i||(i=this.control)))t[s]=p;else if(isArray(p)&&isArray(t[s])){var a=t[s],l=p;if(l.length==a.length)for(var h=0;h<l.length;h++)this._copy(a[h],l[h])}else isObject(p)&&this._copy(t[s],e[s])}else this._setHostAttribute(t.hostElement,s,e[s])}}};ComponentBase.prototype._setHostAttribute=function(t,e,n){if(t)switch(e){case"className":addClass(t,n);break;case"style":setCss(t,n);break;default:null!=t[e]?t[e]=n:"string"==typeof n&&"$"!==e[0]&&t.setAttribute(e,n)}};ComponentBase.prototype._sameValue=function(t,e){return t==e||DateTime.equals(t,e)};ComponentBase.prototype._isEvent=function(t,e){var n=t&&t[e];return null!=n&&n instanceof Event};ComponentBase.prototype._getElement=function(){return this._hostRef&&this._hostRef.current};ComponentBase.prototype._ignoreProp=function(t){return"children"===t};ComponentBase._copyAttrs=function(t,e,n){if(t)for(var o in e)o.match(n)&&t.setAttribute(o,e[o])};ComponentBase.isInStrictMode=function(t){return!!(t.hasOwnProperty("_reactInternalFiber")&&1&t._reactInternalFiber.mode)};ComponentBase._propsParent="$parent";ComponentBase._typeSiblingIdProp="_wjSiblingIdProp";ComponentBase._siblingDirId=0;return ComponentBase}(React.Component);export{ComponentBase};