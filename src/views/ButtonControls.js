var m = require("mithril");
var WebsiteVisitor = require("../models/WebsiteVisitor.js");


var NextRow = {
    view: function() {
            return m("button", {
                onclick: function(){
                    var tmpVal = WebsiteVisitor.tableState['row_offset']+1;
                    WebsiteVisitor.updateOffset(tmpVal>WebsiteVisitor.tableState['total_rows']-1?WebsiteVisitor.tableState['row_offset']:tmpVal);
                }
            }, ">")
    }
}


var PrevRow = {
    view: function() {
            return m("button", {
                onclick: function(){
                    WebsiteVisitor.updateOffset(WebsiteVisitor.tableState['row_offset']-1<0?0:WebsiteVisitor.tableState['row_offset']-1);
                }
            }, "<")
        }
}


var NextPage = {
    view: function() {
            return m("button", {
                onclick: function(){
                    var div = parseInt(WebsiteVisitor.tableState['total_rows'])/parseInt(WebsiteVisitor.tableState['rows_per_page']);
                    WebsiteVisitor.updateOffset(parseInt(WebsiteVisitor.tableState['row_offset'])+parseInt(WebsiteVisitor.tableState['rows_per_page'])>=parseInt(WebsiteVisitor.tableState['total_rows'])?WebsiteVisitor.tableState['row_offset']: parseInt(WebsiteVisitor.tableState['row_offset'])+parseInt(WebsiteVisitor.tableState['rows_per_page']));
                }
            }, ">>")
        }
}

var PrevPage = {
    view: function() {
            return m("button", {
                onclick: function(){
                    WebsiteVisitor.updateOffset(WebsiteVisitor.tableState['row_offset']-WebsiteVisitor.tableState['rows_per_page']<0?0:WebsiteVisitor.tableState['row_offset']-WebsiteVisitor.tableState['rows_per_page']);
                }
            }, "<<")
        }
}


var FirstPage = {
    view: function() {
        return m("button", {
            onclick: function(){
                WebsiteVisitor.updateOffset(0)
            }
        }, "|<")
    }
}

var LastPage = {
    view: function() {
            return m("button", {
                onclick: function(){
                    var mod = parseInt(WebsiteVisitor.tableState['total_rows'])%parseInt(WebsiteVisitor.tableState['rows_per_page']);
                    WebsiteVisitor.updateOffset(mod==0?parseInt(WebsiteVisitor.tableState['total_rows'])-(parseInt(WebsiteVisitor.tableState['rows_per_page'])):parseInt(WebsiteVisitor.tableState['total_rows'])-mod);
                }
            }, ">|")
        }
}

module.exports = {NextRow, PrevRow, NextPage, PrevPage, FirstPage, LastPage};
