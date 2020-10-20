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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcGridTransposed=require("wijmo/wijmo.grid.transposed");class TransposedGrid extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGridTransposed.TransposedGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})}}exports.TransposedGrid=TransposedGrid;class TransposedGridRow extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGridTransposed.TransposedGridRow,{objectProps:["dataMap","cellTemplate","editor"]});this._parentProp="_rowInfo"}_initParent(){var e=this.parent.control;if(e.autoGenerateRows){e.autoGenerateRows=!1;e._rowInfo.clear()}super._initParent()}}exports.TransposedGridRow=TransposedGridRow;