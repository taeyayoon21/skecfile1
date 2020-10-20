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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("wijmo/wijmo.react.base"),React=require("react"),wjcCore=require("wijmo/wijmo"),wjcNav=require("wijmo/wijmo.nav");class TreeView extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcNav.TreeView,{objectProps:["childItemsPath","displayMemberPath","imageMemberPath","checkedMemberPath","itemsSource","selectedItem","selectedNode","checkedItems"]})}}exports.TreeView=TreeView;class TabPanel extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcNav.TabPanel,{objectProps:["selectedTab"]})}_createControl(){const e=new wjcNav.TabPanel(this._getElement(),null,!0);e.tabs.beginUpdate();return e}componentDidMount(){super.componentDidMount();let e=this.control,t=e.selectedIndex,n=e.tabs;if(t>-1&&t<n.length){wjcCore.addClass(n[t].header,"wj-state-active");e.onSelectedIndexChanged()}n.endUpdate()}}exports.TabPanel=TabPanel;class Tab extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcNav.Tab);this._parentProp="tabs"}_createControl(){const e=this._getElement().children;return new wjcNav.Tab(e[0],e[1])}_renderImpl(){return React.createElement("div",{ref:this._hostRef},this.props.children)}}exports.Tab=Tab;class Accordion extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcNav.Accordion,{objectProps:["selectedPane"]})}_createControl(){const e=new wjcNav.Accordion(this._getElement(),null,!0);e.panes.beginUpdate();return e}componentDidMount(){super.componentDidMount();const e=this.control,t=e.panes;e.selectedIndex<0&&t.length&&(e.selectedIndex=0);t.endUpdate()}}exports.Accordion=Accordion;class AccordionPane extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcNav.AccordionPane);this._parentProp="panes"}_createControl(){const e=this._getElement().children;return new wjcNav.AccordionPane(e[0],e[1])}_renderImpl(){return React.createElement("div",{ref:this._hostRef},this.props.children)}}exports.AccordionPane=AccordionPane;