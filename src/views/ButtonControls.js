var m = require("mithril");
var WebsiteVisitor = require("../models/WebsiteVisitor.js");
var ShowingRowsOf = require("../views/ShowingRowsOf");

var NextRow = {
    view: function() {
            return m("button", {
                onclick: function(){
                    var tmpVal = WebsiteVisitor.tableState['row_offset']+1;
                    var currentOffset = tmpVal>WebsiteVisitor.tableState['total_rows']-1?WebsiteVisitor.tableState['row_offset']:tmpVal;
                    ShowingRowsOf.StartingAt.state.value=currentOffset+1;
                    WebsiteVisitor.updateOffset(currentOffset);
                }
            }, ">")
    }
}


var PrevRow = {
    view: function() {
            return m("button", {
                onclick: function(){

                    var currentOffset = WebsiteVisitor.tableState['row_offset']-1<0?0:WebsiteVisitor.tableState['row_offset']-1;
                    ShowingRowsOf.StartingAt.state.value=currentOffset+1;
                    WebsiteVisitor.updateOffset(currentOffset);
                }
            }, "<")
        }
}


var NextPage = {
    view: function() {
            return m("button", {
                onclick: function(){
                    var div = parseInt(WebsiteVisitor.tableState['total_rows'])/parseInt(WebsiteVisitor.tableState['rows_per_page']);

                    var currentOffset = parseInt(WebsiteVisitor.tableState['row_offset'])+parseInt(WebsiteVisitor.tableState['rows_per_page'])>=parseInt(WebsiteVisitor.tableState['total_rows'])?WebsiteVisitor.tableState['row_offset']: parseInt(WebsiteVisitor.tableState['row_offset'])+parseInt(WebsiteVisitor.tableState['rows_per_page']);
                    ShowingRowsOf.StartingAt.state.value=currentOffset+1;
                    WebsiteVisitor.updateOffset(currentOffset);
                }
            }, ">>")
        }
}

var PrevPage = {
    view: function() {
            return m("button", {
                onclick: function(){

                    var currentOffset = WebsiteVisitor.tableState['row_offset']-WebsiteVisitor.tableState['rows_per_page']<0?0:WebsiteVisitor.tableState['row_offset']-WebsiteVisitor.tableState['rows_per_page'];
                    ShowingRowsOf.StartingAt.state.value = currentOffset+1;
                    WebsiteVisitor.updateOffset(currentOffset);
                }
            }, "<<")
        }
}


var FirstPage = {
    view: function() {
        return m("button", {
            onclick: function(){

                var currentOffset = 0
                ShowingRowsOf.StartingAt.state.value = currentOffset+1;
                WebsiteVisitor.updateOffset(currentOffset);
            }
        }, "|<")
    }
}

var LastPage = {
    view: function() {
            return m("button", {
                onclick: function(){
                    var mod = parseInt(WebsiteVisitor.tableState['total_rows'])%parseInt(WebsiteVisitor.tableState['rows_per_page']);

                    var currentOffset = mod==0?parseInt(WebsiteVisitor.tableState['total_rows'])-(parseInt(WebsiteVisitor.tableState['rows_per_page'])):parseInt(WebsiteVisitor.tableState['total_rows'])-mod;
                    ShowingRowsOf.StartingAt.state.value = currentOffset+1;
                    WebsiteVisitor.updateOffset(currentOffset);
                }
            }, ">|")
        }
}

module.exports = {NextRow, PrevRow, NextPage, PrevPage, FirstPage, LastPage};
