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

"use strict";var WjFlexGrid_1,WjFlexGridColumn_1,WjFlexGridCellTemplate_1,__decorate=this&&this.__decorate||function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l},__param=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wijmo_interop_grid_1=require("wijmo/wijmo.interop.grid"),wjcCore=require("wijmo/wijmo"),wjcGrid=require("wijmo/wijmo.grid"),wjcInteropGrid=require("wijmo/wijmo.interop.grid");exports.CellTemplateType=wjcInteropGrid.GridCellTemplateType;var wjFlexGridMeta={selector:"wj-flex-grid",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","pinningColumnNg: pinningColumn","pinnedColumnNg: pinnedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangingNg: groupCollapsedChanging","groupCollapsedChangedNg: groupCollapsedChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjFlexGridMeta=wjFlexGridMeta;let WjFlexGrid=WjFlexGrid_1=class WjFlexGrid extends wjcGrid.FlexGrid{constructor(e,t,i,r){super(wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(e,t));this.cdRef=r;this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);new DirectiveCellFactory(this,r);this.deferUpdate(()=>{if(this.rows.defaultSize<10){let e=this.hostElement,t=getComputedStyle(e),i=getComputedStyle(document.body),r=2*parseInt(t.fontSize&&wjcCore.contains(document.body,e)?t.fontSize:i.fontSize);this.rows.defaultSize=r;this.columns.defaultSize=4*r;this.columnHeaders.rows.defaultSize=r;this.rowHeaders.columns.defaultSize=Math.round(1.25*r)}});this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,i,r=!1){let o=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,n=o.ngZone;n&&o.outsideZoneEvents[t]?n.runOutsideAngular(()=>{super.addEventListener(e,t,i,r)}):super.addEventListener(e,t,i,r)}startEditing(e=!0,t,i,r,o){this._edtFocus=null;let n=super.startEditing(e,t,i,r,o);n&&(this._edtFocus=r||null==r);return n}onCellEditEnding(e){this._edtFocus=null;return super.onCellEditEnding(e)}};WjFlexGrid.meta={outputs:wjFlexGridMeta.outputs};WjFlexGrid=WjFlexGrid_1=__decorate([core_1.Component({selector:wjFlexGridMeta.selector,template:wjFlexGridMeta.template,inputs:wjFlexGridMeta.inputs,outputs:wjFlexGridMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexGrid_1)},...wjFlexGridMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional()),__param(3,core_1.Inject(core_1.ChangeDetectorRef))],WjFlexGrid);exports.WjFlexGrid=WjFlexGrid;var wjFlexGridColumnMeta={selector:"wj-flex-grid-column",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","name","dataMap","dataType","binding","sortMemberPath","format","cellTemplate","header","width","maxLength","minWidth","maxWidth","align","allowDragging","allowSorting","allowResizing","allowMerging","aggregate","isReadOnly","cssClass","isContentHtml","isSelected","visible","wordWrap","multiLine","mask","inputType","isRequired","showDropDown","dataMapEditor","dropDownCssClass","quickAutoSize","editor"],outputs:["initialized","isSelectedChangePC: isSelectedChange"],providers:[]};exports.wjFlexGridColumnMeta=wjFlexGridColumnMeta;let WjFlexGridColumn=WjFlexGridColumn_1=class WjFlexGridColumn extends wjcGrid.Column{constructor(e,t,i,r){super();this.cdRef=r;this.isInitialized=!1;this.wjProperty="columns";let o=(this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i)).parentBehavior.directive;if(o.autoGenerateColumns){o.autoGenerateColumns=!1;o.columns.clear()}this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexGridColumn.meta={outputs:wjFlexGridColumnMeta.outputs,changeEvents:{"grid.selectionChanged":["isSelected"]}};WjFlexGridColumn=WjFlexGridColumn_1=__decorate([core_1.Component({selector:wjFlexGridColumnMeta.selector,template:wjFlexGridColumnMeta.template,inputs:wjFlexGridColumnMeta.inputs,outputs:wjFlexGridColumnMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexGridColumn_1)},...wjFlexGridColumnMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional()),__param(3,core_1.Inject(core_1.ChangeDetectorRef))],WjFlexGridColumn);exports.WjFlexGridColumn=WjFlexGridColumn;let WjFlexGridCellTemplate=WjFlexGridCellTemplate_1=class WjFlexGridCellTemplate{constructor(e,t,i,r,o,n){this.viewContainerRef=e;this.templateRef=t;this.elRef=i;this.cdRef=n;this.autoSizeRows=!0;this.forceFullEdit=!0;if(r instanceof WjFlexGrid)this.grid=r;else if(r instanceof WjFlexGridColumn){this.column=r;this.grid=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getBehavior(r).parentBehavior.directive}}ngOnInit(){this.ownerControl=this.column&&this.column.grid===this.grid?this.column:this.grid;this._attachToControl()}ngOnDestroy(){if(this.cellTypeStr){this.viewContainerRef.clear();this.ownerControl[DirectiveCellFactory.getTemplContextProp(this.cellType)]=null;this.grid.invalidate()}}_instantiateTemplate(e,t){return wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(e,this.viewContainerRef,this.templateRef,!1,t)}_attachToControl(){if(!this.cellTypeStr)return;let e=this.cellType=wjcCore.asEnum(this.cellTypeStr,exports.CellTemplateType),t=this.ownerControl;t[DirectiveCellFactory.getTemplContextProp(e)]=this;t instanceof wjcGrid.Column&&(e===exports.CellTemplateType.Cell||e===exports.CellTemplateType.ColumnHeader||e===exports.CellTemplateType.ColumnFooter)&&t._setFlag(wjcGrid.RowColFlags.HasTemplate,!0);this.grid.invalidate()}};WjFlexGridCellTemplate=WjFlexGridCellTemplate_1=__decorate([core_1.Directive({selector:"[wjFlexGridCellTemplate]",inputs:["wjFlexGridCellTemplate","cellTypeStr: cellType","cellOverflow","valuePaths","autoSizeRows","forceFullEdit"],exportAs:"wjFlexGridCellTemplate",providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexGridCellTemplate_1)}]}),__param(0,core_1.Inject(core_1.ViewContainerRef)),__param(1,core_1.Inject(core_1.TemplateRef)),__param(1,core_1.Optional()),__param(2,core_1.Inject(core_1.ElementRef)),__param(3,core_1.Inject("WjComponent")),__param(3,core_1.SkipSelf()),__param(3,core_1.Optional()),__param(4,core_1.Inject(core_1.Injector)),__param(5,core_1.Inject(core_1.ChangeDetectorRef))],WjFlexGridCellTemplate);exports.WjFlexGridCellTemplate=WjFlexGridCellTemplate;class DirectiveCellFactory extends wijmo_interop_grid_1.DirectiveCellFactoryBase{constructor(e,t){super(e);this._needsCdCheck=!1;this._gridCdRef=t;e.updatedView.addHandler(()=>{if(this._needsCdCheck){this._needsCdCheck=!1;this._gridCdRef.markForCheck()}},this)}shouldInstantiate(e){let t=e.templateCache;return null==t||t.column!==e.column||!t.viewRef||t.templateContextProperty!==e.templateContextProperty||e.cell.firstChild!=t.rootElement}renderTemplate(e,t){let i=e.row,r=t?{}:e.templateCache.viewRef.context,o=e.templateContext;e.cellBindingsData=this.setBindingsData(r,i,e.column,i.dataItem,e.cellValue,o.valuePaths);if(t){let t=e.cell,i=o._instantiateTemplate(t,r),n=e.templateCache={column:e.column,viewRef:i.viewRef,rootElement:i.rootElement,templateContextProperty:e.templateContextProperty};t[e.templateContextProperty]=n}}setBindingsData(e,t,i,r,o,n){this._needsCdCheck=!0;return super.setBindingsData(e,t,i,r,o,n)}disposeTemplate(e,t,i){if(t&&t.viewRef){if(i){let e=i.viewContainerRef.indexOf(t.viewRef);e>-1&&i.viewContainerRef.remove(e)}t.viewRef=null;super.disposeTemplate(e,t,i)}}clearCell(e){e.textContent=""}applyImmediately(e){e.templateContext.cdRef.detectChanges()}flushPendingEvents(e){if(e){let t=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getBehavior(e);t&&t.flushPendingEvents()}}getEditorFocusFlag(){return this.grid._edtFocus}setEditorFocusFlag(e){this.grid._edtFocus=e}checkHeight(e){wijmo_angular2_directiveBase_1.WjDirectiveBehavior.ngZone.runOutsideAngular(()=>{super.checkHeight(e)})}}let moduleExports=[WjFlexGrid,WjFlexGridColumn,WjFlexGridCellTemplate],WjGridModule=class WjGridModule{};WjGridModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjGridModule);exports.WjGridModule=WjGridModule;