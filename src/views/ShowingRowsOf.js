var m = require("mithril");
var WebsiteVisitor = require("../models/WebsiteVisitor.js");

WebsiteVisitor.initializeState();

var Showing = {
    state: {
        value: WebsiteVisitor.tableState['rows_per_page'],
        setValue: function(v) {
            Showing.state.value = v;
            WebsiteVisitor.updateRowsPerPage(v);
        }
    },
    view: function(vnode) {
        return m("input", {
            oninput: m.withAttr("value", Showing.state.setValue),
            value: Showing.state.value,
        })
    }
}



var RowsOutOf = {
    state: {
        value: WebsiteVisitor.tableState['total_rows'],
        setValue: function(v) {
            RowsOutOf.state.value = v;
            WebsiteVisitor.generateList(RowsOutOf.state.value);
        }
    },

    oninit: function(vnode){
            WebsiteVisitor.generateList(RowsOutOf.state.value);
    },

    view: function(vnode) {
        return m("input", {
            oninput: m.withAttr("value", RowsOutOf.state.setValue),
            value: RowsOutOf.state.value,
        })
    }
}

var StartingAt = {
    state: {
        value: WebsiteVisitor.tableState['row_offset'],
        setValue: function(v) {
            StartingAt.state.value = v;
            WebsiteVisitor.updateOffset(v);
        }
    },

    view: function(vnode) {
        return m("input", {
            oninput: m.withAttr("value", StartingAt.state.setValue),
            value: StartingAt.state.value,
        })
    }
}

module.exports = {Showing, RowsOutOf, StartingAt};
