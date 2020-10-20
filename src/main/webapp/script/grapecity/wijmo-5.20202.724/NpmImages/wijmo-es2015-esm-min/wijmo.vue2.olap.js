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

import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcOlap from"wijmo/wijmo.olap";class WjPivotGridBehavior extends WjComponentBehavior{}WjPivotGridBehavior.tag="wj-pivot-grid";WjPivotGridBehavior.props=["isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","showDetailOnDoubleClick","customContextMenu","collapsibleSubtotals","centerHeadersVertically","showColumnFieldHeaders","showRowFieldHeaders","showValueFieldHeaders","outlineMode"];WjPivotGridBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","beginningEdit","cellEditEnded","cellEditEnding","prepareCellForEdit","formatItem","resizingColumn","resizedColumn","autoSizingColumn","autoSizedColumn","draggingColumn","draggingColumnOver","draggedColumn","sortingColumn","sortedColumn","pinningColumn","pinnedColumn","resizingRow","resizedRow","autoSizingRow","autoSizedRow","draggingRow","draggingRowOver","draggedRow","deletingRow","deletedRow","loadingRows","loadedRows","rowEditStarting","rowEditStarted","rowEditEnding","rowEditEnded","rowAdded","groupCollapsedChanging","groupCollapsedChanged","itemsSourceChanging","itemsSourceChanged","selectionChanging","selectionChanged","scrollPositionChanged","updatingView","updatedView","updatingLayout","updatedLayout","pasting","pasted","pastingCell","pastedCell","copying","copied"];WjPivotGridBehavior.classCtor=function(){return wjcOlap.PivotGrid};export var WjPivotGrid=WjPivotGridBehavior.register();function registerV3WjPivotGrid(e){e.component(WjPivotGridBehavior.tag,WjPivotGrid)}class WjPivotChartBehavior extends WjComponentBehavior{}WjPivotChartBehavior.tag="wj-pivot-chart";WjPivotChartBehavior.props=["isDisabled","chartType","showHierarchicalAxes","showTotals","showTitle","showLegend","legendPosition","stacking","maxSeries","maxPoints","itemsSource","header","footer","headerStyle","footerStyle"];WjPivotChartBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjPivotChartBehavior.classCtor=function(){return wjcOlap.PivotChart};export var WjPivotChart=WjPivotChartBehavior.register();function registerV3WjPivotChart(e){e.component(WjPivotChartBehavior.tag,WjPivotChart)}class WjPivotPanelBehavior extends WjComponentBehavior{}WjPivotPanelBehavior.tag="wj-pivot-panel";WjPivotPanelBehavior.props=["isDisabled","autoGenerateFields","viewDefinition","engine","itemsSource","showFieldIcons","restrictDragging"];WjPivotPanelBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","itemsSourceChanged","viewDefinitionChanged","updatingView","updatedView"];WjPivotPanelBehavior.classCtor=function(){return wjcOlap.PivotPanel};export var WjPivotPanel=WjPivotPanelBehavior.register();function registerV3WjPivotPanel(e){e.component(WjPivotPanelBehavior.tag,WjPivotPanel)}class WjSlicerBehavior extends WjComponentBehavior{}WjSlicerBehavior.tag="wj-slicer";WjSlicerBehavior.props=["isDisabled","field","showHeader","header","showCheckboxes","multiSelect"];WjSlicerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjSlicerBehavior.classCtor=function(){return wjcOlap.Slicer};export var WjSlicer=WjSlicerBehavior.register();function registerV3WjSlicer(e){e.component(WjSlicerBehavior.tag,WjSlicer)}export function registerOlap(e){if(VueApi.isV3Plus){registerV3WjPivotGrid(e);registerV3WjPivotChart(e);registerV3WjPivotPanel(e);registerV3WjSlicer(e)}}