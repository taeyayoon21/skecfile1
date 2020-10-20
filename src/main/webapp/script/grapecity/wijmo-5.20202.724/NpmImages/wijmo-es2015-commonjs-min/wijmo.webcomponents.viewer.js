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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base");require("wijmo/wijmo.webcomponents.input");const wjcViewer=require("wijmo/wijmo.viewer");let _wj_ns_exists_20=!0;class WjcReportViewer extends wjcViewer.ReportViewer{constructor(){super(document.createElement("div"));this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,o,i){this._wjBehaviour.lhAttributeChanged(e,o,i)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcReportViewer=WjcReportViewer;if(_wj_ns_exists_20){wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._MouseTool);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._Magnifier);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._PageSetupDialog);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._Rubberband);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ParametersEditor);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ReportHamburgerMenu);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerMenuBase);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._HamburgerMenu);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._SearchOptionsMenu);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewMenu);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._SearchBar);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._Toolbar);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerMiniToolbar);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerMobileToolbar);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerMobileToolbarBase);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerToolbar);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerToolbarBase);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ViewerZoomBar);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._SideTabs);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._CompositePageView);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ContinuousPageView);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._PageViewBase);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._Scroller);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._SinglePageView);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._VScroller);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._PageSetupEditor);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcViewer._ExportOptionEditor);wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-report-viewer",WjcReportViewer)}class WjcPdfViewer extends wjcViewer.PdfViewer{constructor(){super(document.createElement("div"));this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,o,i){this._wjBehaviour.lhAttributeChanged(e,o,i)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcPdfViewer=WjcPdfViewer;_wj_ns_exists_20&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-pdf-viewer",WjcPdfViewer);