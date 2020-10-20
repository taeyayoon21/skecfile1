/**
 * 
 * SKEC Common Object
 * 
 * 
 */


var skec = new Object();





skec.alert = function(txt, cb) {

    dhtmlx.alert({
        title:"Message", 
        text : txt||'',
        callback: function(result) {
            if(typeof(cb) == "function") cb(result);
        }
    });

}

skec.check = function(txt) {

    dhtmlx.alert({
        title:"Check Message",
        type:"alert-warning",
        text : txt||''
    });

}

skec.message = function(txt) {

    dhtmlx.message({text : txt||''});

}

skec.confirm = function(txt, cb) {

    dhtmlx.confirm({
        title:"Confirm Message", 
        text : txt||'', 
        callback: function(result) {
            if(typeof(cb) == "function") cb(result);
        }
    });

}

skec.error = function(txt, cb) {

    dhtmlx.alert({
        type : "alert-error",
        text : txt||'',
        title : "Error Message",
        callback: function(result) {
            if(typeof(cb) == "function") cb(result);
        }        
    });

}


/**
 * 화면상단 메뉴명 및 메뉴패스 Display
 * 
 * breadcrumb(pram)
 *  param : dhtmlxCellObject|mainLayout 
 *  return : mainToolb
 */

skec.breadcrumb = function(mainLayout, a, b) {

    
    var mainToolb = mainLayout.attachToolbar();

    mainToolb.loadStruct([{ id: "breadcrumb", type: "text", title: "", text:""}]);
    mainToolb.setAlign("left");
    mainToolb.addSpacer("breadcrumb");
    mainToolb.setItemText("breadcrumb","<img src='/ext/image/icon/ico_Org1h.gif'>&nbsp;&nbsp;<b style='font-size: 14px; vertical-align: middle;'>"+a+"<span style='color: #BDBDBD;font-size: 12px;font-weight: normal;'> ( "+b+" ) </span></b>");

    mainToolb.setIconsPath(_iconPath);
    
    return mainToolb;

}

/*
 * wijmo fgGrid
 *
 *  wijmo.dataType  
 *    0: "Object"
 *    1: "String"
 *    2: "Number"
 *    3: "Boolean"
 *    4: "Date"
 *    5: "Array"
 * 
 */

skec.flexGrid = {


    /**
     * FlexGrid 생성
     * @param {hostElement} id 
     * @param {JSON} columns 
     */


     

    
    init : function(id, columns) {


        var fg;

        if (columns) {

            fg = new wijmo.grid.FlexGrid(id, columns);

        } else {

            fg = new wijmo.grid.FlexGrid(id);
        }
                
        /* fgGrid Common Properties */
        fg.showSort = true;
        fg.autoGenerateColumns = false;
        fg.deferResizing = true;
        fg.allowMerging = 'ColumnHeaders';
        //fg.allowDelete = true;
        fg.showMarquee = true;
        fg.selectionMode = "MultiRange";


        fg.rows.defaultSize = 28;
        fg.columnHeaders.rows.defaultSize = 30;        
     
        fg.readOnlyNewEdit = [];


        // update the select all checkbox state
        var updateSelectAllBox = function(fg) {

            var cb = fg.hostElement.querySelector('#CHK_SEL');
            
            if (cb instanceof HTMLInputElement) {
                
                var items = fg.collectionView.items, last = null, indeterminate = false;
                
                for (var i = 0; i < items.length; i++) {
                    
                    if (last != null && items[i].C != last) {
                    
                        indeterminate = true;
                        break;
                    }
                    last = items[i].C;

                }

                if (indeterminate) {

                    cb.checked = true;
                    cb.indeterminate = true;

                } else {

                    cb.checked = last;

                }

            }
        
        }

               
        /*  wijmo.CellType (e.panel.cellType)
         *    0: "None"
         *    1: "Cell"
         *    2: "ColumnHeader"
         *    3: "RowHeader"
         *    4: "TopLeft"
         *    5: "ColumnFooter"
         *    6: "BottomLeft"
         */

        fg.formatItem.addHandler(function (fg, e) {            
            
            if (e.panel.cellType == 1) {

                if (fg.getColumn(e.col).binding == "C") {                    

                    wijmo.setAttribute(e.cell.parentElement, 'CHK_SEL', fg.rows[e.row].dataItem.C);
               
                }

                /**
                 * Date Type Cell Attach Calendar
                 *  
                 * 646 -> 664
                 * if (fg.getColumn(e.col).dataType == 4 && fg._edtHdl._allowEditing(e.row, e.col)) {
                 */
                
                if (fg.getColumn(e.col).dataType == 4 && fg._edtHdl._allowEdit(e.row, e.col)) {    

                    if (e.cell.firstElementChild) {
    
                        new dhtmlXCalendarObject({input:e.cell.firstElementChild});

                    }

                }

           
            } else if (e.panel.cellType == 2) {


                if (fg.getColumn(e.col).binding == "C") {

                    e.cell.innerHTML = '<input type="checkbox" id="CHK_SEL"/>';                   
                    updateSelectAllBox(fg);                    
                    
                }


            } else if (e.panel.cellType == 3) {




            }
            
            
          
            
        });


        /*  wijmo.CellType (panel.cellType)
         *    0: "None"
         *    1: "Cell"
         *    2: "ColumnHeader"
         *    3: "RowHeader"
         *    4: "TopLeft"
         *    5: "ColumnFooter"
         *    6: "BottomLeft"
         */
        fg.itemFormatter = function(panel, row, col, cell) {            

            if (panel.cellType == 1) {

                if (fg.canEditCell(row, col)) {

                    

                        wijmo.toggleClass(cell, 'editCellBg',  true);

                    
                    

                }
                if (col == 0) {
                    
                    
                    if ($.inArray(fg.rows[row].dataItem, fg._cv.itemsAdded) > -1 || $.inArray(fg.rows[row].dataItem, fg._cv.itemsEdited) >-1) {

                        wijmo.toggleClass(cell.parentElement, 'changedItem',  true);
                          
                    } else {

                        wijmo.toggleClass(cell.parentElement, 'changedItem',  false);
                    
                    }

                }                

            } 
            
        };

        fg.beginningEdit.addHandler(function(fg, e) {

            
            


            /* Control CheckBox는 itemsEdit List에서 제외 */
            if (fg.getColumn(e.col).binding == "C") {
                
                if (fg._cv.trackChanges)  fg._cv.trackChanges = false;                
                
            } else {

                if (!fg._cv.trackChanges)  fg._cv.trackChanges = true;

            }



        });

        fg.cellEditEnded.addHandler(function(fg, e) {

            if (!fg._cv.trackChanges)  fg._cv.trackChanges = true;

            console.log("cellEditEnded");
 
        });

        fg.rowEditEnded.addHandler(function(fg, e) {
            
            if (!fg._cv.trackChanges)  fg._cv.trackChanges = true;
            
            console.log("rowEditEnded");

        });
     

        fg.itemsSourceChanged.addHandler(function (fg, e) {

            console.log("itemsSourceChanged");            

        });


        fg.rowAdded.addHandler(function (fg, e) {

            console.log("rowAdded");            
            
        });


        fg.loadedRows.addHandler(function (fg, e) {

            skec.flexGrid.updateStatubar(fg);

            console.log("loadedRows");            
            
            
        });


        fg.deletingRow.addHandler(function (fg, e) {

            console.log("deletingRow");                        
            
        });


        fg.deletedRow.addHandler(function (fg, e) {

            console.log("deletedRow");                        
            
        });


        fg.pastingCell.addHandler(function (fg, e) {

            

        });





        /* Collection View */
        fg.itemsSource = new wijmo.collections.CollectionView([]);
        fg.collectionView.trackChanges = true;

        
        
        function setSubItemRowid(items) {

            items.forEach(function(item) {

                item.rowId = dhx.newId();
                
                if (item[fg.childItemsPath]) {

                    setSubItemRowid(item[fg.childItemsPath]);
                }

            });

        }

        
        fg._cv.sourceCollectionChanged.addHandler(function (cv, e) {
            

            fg.deferUpdate(function() {

                $(fg._cv.items).each(function(i, item) {

                    item.rowId = dhx.newId();                    
                    
                    if (item[fg.childItemsPath]) {
                        
                        setSubItemRowid(item[fg.childItemsPath]);
                    
                    }
                    
                    if (fg.getColumn("C")) item.C = false;

                });

            });

            
            if (fg.filter) fg.filter.clear();
            

            console.log("sourceCollectionChanged");
            
            
        });


        fg._cv.collectionChanged.addHandler(function (cv, e) {

            /* Add Row 초기값  */
            if (cv.currentAddItem) {
                
                e.item.newItem = true;
                e.item.rowId = dhx.newId();
                if (fg.getColumn("C")) e.item.C = false;


            }
            
        });

        



        /* Header Checkbox Event */
        fg.hostElement.addEventListener('change', function(e) {
            
            if (e.target.id == "CHK_SEL") {

                

                fg.deferUpdate(function() {
                    
                    fg._cv.items.forEach(function(item) {

                        item.C = e.target.checked;
                    
                    });

                });
            
            }
        
        });


        fg.findRow = function (key, value) {

            for (var t = 0; t < this.rows.length; t++)
                if (this.rows[t].dataItem[key] == value) return t;
            return -1
            
        };


        //if (_menuAuth != "W" ) fg.isReadOnly = true;

       
          
        return fg;


    }
    
    /**
     * Grid Header Filter
     */
    ,filter : function(fg) {


        /* Grid Filter */
        fg.filter = new wijmo.grid.filter.FlexGridFilter(fg);
        fg.filter.showFilterIcons = true;
        fg.filter.showSortButtons = true;

        var arr = [];
        fg.columns.forEach(function(c) { 
            
            if(c.binding != "C") arr.push(c.binding); 
        
        });        
        
        fg.filter.filterColumns = arr;


    }
    ,toggleFilter : function(fg) {

        if (fg.filter instanceof wijmo.grid.filter.FlexGridFilter) {

            fg.filter.showFilterIcons = !fg.filter.showFilterIcons;

        }
       
    }

    /**
     * Grid Header Column Picker
     */
    ,columPicker : function (fg) {

        $(fg.hostElement).before("<div id='columnPicker' style='display:none;'></div>");

        fg.columnPicker = new wijmo.input.ListBox('#columnPicker', {

            itemsSource: fg.columns,
            checkedMemberPath: 'visible',
            displayMemberPath: 'header',
            lostFocus: function() {

                wijmo.hidePopup(fg.columnPicker.hostElement);

            }

        });


    }
    ,toggleColumnPicker : function(fg, toolbar, id) {


        if (fg.columnPicker instanceof wijmo.input.ListBox) {
                
            var btn  = eval("toolbar.objPull." + c2.toolbar.idPrefix + id);
    
            if (btn.obj) {
    
                wijmo.showPopup(fg.columnPicker.hostElement, btn.obj, false, true, false);
                fg.columnPicker.focus();
    
            }

        }

    }


    /**
     * Context Menu
     */
    ,ctxMenu : function(fg) {

        /* Context Menu */ 
        fg.ctxMenu = new wijmo.input.Menu(document.createElement('ctxMenu'));
        fg.ctxMenu.itemsSource = [
            "Row Selection Mode",
            "Column Selection Mode",
            "Frozen Column",
            "Frozen Row",
            "Frozen Release",
            "Go To Top",
            "Go To Last"
        ];


        fg.ctxMenu.selectedIndexChanged.addHandler(function(e) {
            
            if (fg.ctxMenu.selectedIndex > -1) {

                switch (fg.ctxMenu.selectedIndex) { 
                    case 0:
                        fg.selectionMode = "ListBox";
                        fg.showMarquee = false;
                        break;				
                    case 1:
                        fg.selectionMode = "MultiRange";
                        fg.showMarquee = true;
                        break;				
                    case 2:
                        fg.frozenColumns = hitTest.col + 1;
                        break;				
                    case 3:
                        fg.frozenRows = ((fg.cells.viewRange.row2 - fg.cells.viewRange.row) > hitTest.row + 1) ? hitTest.row + 1 : 0;
                        break;				
                    case 4:
                        fg.frozenColumns = 0;
                        fg.frozenRows = 0;
                        break;
                    case 5:
                        fg._cv.moveCurrentToFirst();
                        break;
                    case 6:                        
                        fg._cv.moveCurrentToLast();
                        break;                   
                    default:
                        break;
                }
            
            }

        });

        var hitTest;
        fg.hostElement.addEventListener('contextmenu', function(e) {
            
            if (fg.hitTest(e).panel == fg.cells) {

                hitTest = fg.hitTest(e);

                e.preventDefault();
                fg.ctxMenu.selectedIndex = -1;
                wijmo.showPopup(fg.ctxMenu.dropDown, e);
                fg.ctxMenu.dropDown.focus();
                
            }

        }); 


    }
    ,deleteRow : function(fg) {


        

        if (fg.getColumn("C")) {
    
            if (!fg._cv.trackChanges)  fg._cv.trackChanges = true;

            for (var i = (fg.rows.length-1); i > -1 ; i--) {

                if (fg.rows[i].dataItem.C == true) {
                
                    fg._cv.remove(fg.rows[i].dataItem);
    
                }
            
            }

            skec.flexGrid.updateStatubar(fg); 
 
        } else {

            skec.flexGrid.deleteRow2(fg);

        }        


    }
    ,deleteRow2 : function(fg) {

        

        var s = fg.selectedRows;  
        var t = fg.selection;

        if (s.length > 0) {

            fg.deferUpdate(function() {

                fg._cv && fg._cv.beginUpdate();

                for (var i = s.length - 1; i >= 0; i--) {

                    var r = s[i];
                    var g = new wijmo.grid.CellRange();
                    g.setRange(r.index, -1);
        
                    var c = new wijmo.grid.CellRangeEventArgs(fg.cells, g);
                    if (fg.onDeletingRow(c)) {
        
                        fg._cv && r.dataItem ? fg._cv.remove(r.dataItem) : fg.rows.removeAt(r.index);
                        fg.onDeletedRow(c);
        
                    }            
        
                }

                fg._cv && fg._cv.endUpdate(!1);

            });

            t.row = t.row2 = t.topRow;

            fg.selection = t;

        }        

        skec.flexGrid.updateStatubar(fg);        

    }
    ,addRow : function(fg) {

        

        fg._cv.addNew();
        fg.onRowAdded(new wijmo.grid.CellRangeEventArgs(fg.cells, fg.selection));
        fg._cv.commitNew();

    }
    ,addRow2 : function(fg) {    

        
            
        var newItem = {newItem:true};
        fg._cv.sourceCollection.splice(fg.selection.row + 1, 0, newItem);
        fg._cv.itemsAdded.push(newItem);
        fg._cv.refresh();
        fg._cv.moveCurrentToPosition(fg.selection.row + 1);

        //fg._cv.commitNew();
    
    }

    ,rowMoveUp : function(fg) {

        var s = fg.selection;

        if (s.row > 0 && s.row == s.row2) {

            var src = s.row;
            var dst = s.row-1;
            
            s.row = dst;
            s.row2 = dst;
            fg.selection = s;

             /**BUG FIX */
            if (fg.selection.row == -1) fg.selection = s;
            
            fg.rows.moveElement(src, dst);

        }


    }

    ,rowMoveDown : function(fg) {

        var s = fg.selection;

        if (s.row < fg.rows.length-1 && s.row == s.row2) {

            var src = s.row;
            var dst = s.row + 1;
            
            s.row = s.row2 = dst;
            fg.selection = s;

            /**BUG FIX */
            if (fg.selection.row == -1) fg.selection = s;
            
            fg.rows.moveElement(src, dst);

        }

        
    }    
    ,changedItemsCount : function(fg) {

        if (!fg._cv) {

            return 0;       

        } else {

            return fg._cv.itemsEdited.length + fg._cv.itemsAdded.length + fg._cv.itemsRemoved.length;

        }

    }

    ,checkChangedItem : function(fg) {


        return new Promise(function(resolve, reject) {

            if (skec.flexGrid.changedItemsCount(fg) > 0) {

                skec.confirm(skec.msg.fg.changedItem, function(result) { 

                    resolve(result);    
    
                });
    
            } else {

                resolve(true);
    
            }

        });


    }
    ,updateStatubar : function(fg) {

        if (fg.statusbar)  {

            fg.statusbar.setText("Result : "+wijmo.Globalize.format(fg.rows.length ,'n'));

        }    
    
    }

    ,getChangedItems : function(fg) {

        return {

            itemsAdded : fg._cv.itemsAdded.map(function(arr){ return arr}),
            itemsEdited: fg._cv.itemsEdited.map(function(arr){ return arr}),
            itemsRemoved : fg._cv.itemsRemoved.map(function(arr){ return arr})

        } 


    }

    ,getChangedItemsJson : function(fg) {

        return JSON.stringify(skec.flexGrid.getChangedItems(fg))

    }


    /**
     * 
     * Check Grid Duplicated Row
     * 
     * Return Duplicated Rows Number Arrary
     */

    ,checkDupData : function(fg, dupCheckCol) {

        return new Promise(function(resolve, reject) {

            if (!fg._cv) resolve(false);
            if (!dupCheckCol instanceof Array) resolve(false);
            
            fg.dupList = [];
    
            fg._cv.items.forEach(function(a, i) {
    
                var f = false;
                fg._cv.items.forEach(function(b, j) {
                    
                    if (i < j) {
    
                        var colEqCnt = dupCheckCol.reduce(function(i, col) {
    
                            if (a[col] == b[col]) return i+1;
    
                        }, 0);
    
                        if (dupCheckCol.length == colEqCnt) {
                        
                            f=true;
                            if (fg.dupList.indexOf(j) == -1) fg.dupList.push(j);
    
                        }
    
                    }
    
                });
    
                if(f) {
                    
                    if (fg.dupList.indexOf(i) == -1) fg.dupList.push(i);
                    
                }
    
    
                fg.rows[i].isSelected = false;            
            
            
            });
    
            fg.dupList.forEach(function(row) {    
                
                if (fg instanceof wijmo.grid.sheet.FlexSheet) {
                    
                    fg.rows[row+1].isSelected = true;
                    
                } else  {
                    
                    fg.rows[row].isSelected = true;
                    
                }

    
            });            


            if (fg.dupList.length > 0) {

                skec.error(skec.msg.fg.checkDupData, function() {

                    resolve(fg.dupList.length > 0);
        
                });


            } else {

                resolve(false);
            
            }



        });        



    }   
   

    ,excelExport : function(fg, fileNm, header) {

        var fn = fileNm||'ExcelExport';
            fn = fn + "_"+ Date.now().toString() + ".xlsx" 

        wijmo.grid.xlsx.FlexGridXlsxConverter.saveAsync(
            fg
           ,{ includeColumnHeaders: header||true }
           ,fn
        );

    }



    
    /**
     * @Deprecated
     * 
     * wijmo-5-20191-615 -> wijmo-5.20193.646
     * 
     */
    ,columnGroup : function(fg, columnGroupJson) {

     
        /* Column Settting */
        if (columnGroupJson) {
            
            /**
             * Create Header with Multi-Row(columnGroup) 
             * 
             * recursive call
             * @param {object} columnGroups 
             * @param {int} rowCnt 
             */            
            var createColumnGroups = function(columnsData, rowCnt){

                if (rowCnt >= fg.columnHeaders.rows.length) {

                    var hRow = new wijmo.grid.Row();
                    hRow.allowMerging = true;

                    fg.columnHeaders.rows.splice(0, 0, hRow);

                }               
            
                for (var i = 0; i < columnsData.length; i++) {
                    
                    var group = columnsData[i];
                    
                    if (!group.columns) {
                        
                        var col = new wijmo.grid.Column();            
                        
                        for (var prop in group) {

                            col[prop] = group[prop];

                        }
                        
                        fg.columns.push(col);                        
                        
                    } else {                        
                        
                        var colIndex = fg.columnHeaders.columns.length;
                        
                        createColumnGroups(group.columns, rowCnt+1);

                        for (var j = colIndex; j < fg.columnHeaders.columns.length; j++) {
                            
                            fg.columnHeaders.setCellData(rowCnt, j, group.header);

                        }

                    }
                
                }                
                
            }                
            
            createColumnGroups(columnGroupJson, 0);

            

            /**
             * Merged Column Header
             */
            if (fg.columnHeaders.viewRange.rowSpan > 1) {

                var colh = fg.columnHeaders;
                var bRow = fg.columnHeaders.viewRange.bottomRow; 
    
                for (var c=0; c < colh.columns.length; c++) {
    
                    colh.columns[c].allowMerging = true;
    
                    for (var r = 0; r <= bRow -1 ; r++) {
                        
                        if(!colh.getCellData(r, c)) {
                            colh.setCellData(r, c, colh.getCellData(bRow, c));
                        }
                    }
    
                }

                for (var c = 0; c < fg.topLeftCells.columns.length; c++) {
                
                    fg.topLeftCells.columns[c].allowMerging = true
    
                }

            }        
            

        } //enf  if ColumnGroup

    }

 



}





