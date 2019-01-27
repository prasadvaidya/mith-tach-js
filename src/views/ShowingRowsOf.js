var m = require("mithril");
var WebsiteVisitor = require("../models/WebsiteVisitor.js");

WebsiteVisitor.initializeState();

var Showing = {
    state: {
        value: WebsiteVisitor.tableState['rows_per_page'],
        setValue: function(v) {
            Showing.state.value = parseInt(v);
            WebsiteVisitor.updateRowsPerPage(Showing.state.value);
        }
    },
    view: function(vnode) {
        return m("input.input[type=number]", {
            oninput: m.withAttr("value", Showing.state.setValue),
            value: Showing.state.value,
        })
    }
}



var RowsOutOf = {
    state: {
        value: WebsiteVisitor.tableState['total_rows'],
        setValue: function(v) {
            RowsOutOf.state.value = parseInt(v);
            WebsiteVisitor.generateList(RowsOutOf.state.value);
        }
    },

    oninit: function(vnode){
            WebsiteVisitor.generateList(RowsOutOf.state.value);
    },

    view: function(vnode) {
        return m("input.input[type=number]", {
            oninput: m.withAttr("value", RowsOutOf.state.setValue),
            value: RowsOutOf.state.value,
        })
    }
}

var StartingAt = {
    state: {
        value: WebsiteVisitor.tableState['row_offset'],
        setValue: function(v) {
            StartingAt.state.value = parseInt(v);
            WebsiteVisitor.updateOffset(StartingAt.state.value);
        }
    },
    oninit: function(vnode){
        StartingAt.state.value = parseInt(WebsiteVisitor.tableState['row_offset'])+1;
    },

    view: function(vnode) {
        return m("input.input[type=number]", {
            oninput: m.withAttr("value", StartingAt.state.setValue),
            value: parseInt(StartingAt.state.value),
        })
    },
}

module.exports = {Showing, RowsOutOf, StartingAt};
