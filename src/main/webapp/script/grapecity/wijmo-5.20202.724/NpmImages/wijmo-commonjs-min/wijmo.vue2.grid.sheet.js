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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])})(e,o)};return function(e,o){extendStatics(e,o);function __(){this.constructor=e}e.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcGridSheet=require("wijmo/wijmo.grid.sheet"),WjFlexSheetBehavior=function(e){__extends(WjFlexSheetBehavior,e);function WjFlexSheetBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexSheetBehavior.tag="wj-flex-sheet";WjFlexSheetBehavior.props=["isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","allowAutoFill","isTabHolderVisible","showFilterIcons","enableDragDrop","enableFormulas","selectedSheetIndex"];WjFlexSheetBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","beginningEdit","cellEditEnded","cellEditEnding","prepareCellForEdit","formatItem","resizingColumn","resizedColumn","autoSizingColumn","autoSizedColumn","draggingColumn","draggingColumnOver","draggedColumn","sortingColumn","sortedColumn","pinningColumn","pinnedColumn","resizingRow","resizedRow","autoSizingRow","autoSizedRow","draggingRow","draggingRowOver","draggedRow","deletingRow","deletedRow","loadingRows","loadedRows","rowEditStarting","rowEditStarted","rowEditEnding","rowEditEnded","rowAdded","groupCollapsedChanging","groupCollapsedChanged","itemsSourceChanging","itemsSourceChanged","selectionChanging","selectionChanged","scrollPositionChanged","updatingView","updatedView","updatingLayout","updatedLayout","pasting","pasted","pastingCell","pastedCell","copying","copied","draggingRowColumn","droppingRowColumn","beginDroppingRowColumn","endDroppingRowColumn","loaded","unknownFunction","sheetCleared","prepareChangingRow","prepareChangingColumn","rowChanged","columnChanged"];WjFlexSheetBehavior.changeEvents={selectedSheetChanged:["selectedSheetIndex"]};WjFlexSheetBehavior.classCtor=function(){return wjcGridSheet.FlexSheet};return WjFlexSheetBehavior}(wijmo_vue2_base_1.WjComponentBehavior);exports.WjFlexSheet=WjFlexSheetBehavior.register();function registerV3WjFlexSheet(e){e.component(WjFlexSheetBehavior.tag,exports.WjFlexSheet)}var WjSheetBehavior=function(e){__extends(WjSheetBehavior,e);function WjSheetBehavior(){return null!==e&&e.apply(this,arguments)||this}WjSheetBehavior.tag="wj-sheet";WjSheetBehavior.parentProp="sheets";WjSheetBehavior.parentInCtor=!0;WjSheetBehavior.props=["wjProperty","name","itemsSource","visible","rowCount","columnCount"];WjSheetBehavior.events=["initialized","nameChanged"];WjSheetBehavior.classCtor=function(){return wjcGridSheet.Sheet};return WjSheetBehavior}(wijmo_vue2_base_1.WjComponentBehavior);exports.WjSheet=WjSheetBehavior.register();function registerV3WjSheet(e){e.component(WjSheetBehavior.tag,exports.WjSheet)}function registerGridSheet(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjFlexSheet(e);registerV3WjSheet(e)}}exports.registerGridSheet=registerGridSheet;