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

"use strict";var WjTransposedMultiRow_1,__decorate=this&&this.__decorate||function(e,o,t,r){var i,n=arguments.length,a=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,t,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(o,t,a):i(o,t))||a);return n>3&&a&&Object.defineProperty(o,t,a),a},__param=this&&this.__param||function(e,o){return function(t,r){o(t,r,e)}};Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcGridTransposedmultirow=require("wijmo/wijmo.grid.transposedmultirow");var wjTransposedMultiRowMeta={selector:"wj-transposed-multi-row",template:"",inputs:["wjModelProperty","isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","layoutDefinition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","pinningColumnNg: pinningColumn","pinnedColumnNg: pinnedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangingNg: groupCollapsedChanging","groupCollapsedChangedNg: groupCollapsedChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjTransposedMultiRowMeta=wjTransposedMultiRowMeta;let WjTransposedMultiRow=WjTransposedMultiRow_1=class WjTransposedMultiRow extends wjcGridTransposedmultirow.TransposedMultiRow{constructor(e,o,t){super(wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(e,o));this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,o,t);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,o,t,r=!1){let i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,n=i.ngZone;n&&i.outsideZoneEvents[o]?n.runOutsideAngular(()=>{super.addEventListener(e,o,t,r)}):super.addEventListener(e,o,t,r)}};WjTransposedMultiRow.meta={outputs:wjTransposedMultiRowMeta.outputs};WjTransposedMultiRow=WjTransposedMultiRow_1=__decorate([core_1.Component({selector:wjTransposedMultiRowMeta.selector,template:wjTransposedMultiRowMeta.template,inputs:wjTransposedMultiRowMeta.inputs,outputs:wjTransposedMultiRowMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjTransposedMultiRow_1)},...wjTransposedMultiRowMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTransposedMultiRow);exports.WjTransposedMultiRow=WjTransposedMultiRow;let moduleExports=[WjTransposedMultiRow],WjGridTransposedmultirowModule=class WjGridTransposedmultirowModule{};WjGridTransposedmultirowModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjGridTransposedmultirowModule);exports.WjGridTransposedmultirowModule=WjGridTransposedmultirowModule;