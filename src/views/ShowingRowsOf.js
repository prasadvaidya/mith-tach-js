var m = require("mithril");
var WebsiteVisitor = require("../models/WebsiteVisitor.js");

var Showing = {
    state: {
        value: 10,
        setValue: function(v) {
            Showing.state.value = v;
        }
    },

    oninit: function(vnode){
            Showing.state.value = vnode.attrs.value;
    },

    view: function() {
        return m("input", {
            oninput: m.withAttr("value", Showing.state.setValue),
            value: Showing.state.value,
        })
    }
}



var RowsOutOf = {
    state: {
        value: 10,
        setValue: function(v) {
            RowsOutOf.state.value = v;
            WebsiteVisitor.generateList(RowsOutOf.state.value);
        }
    },

    oninit: function(vnode){
            RowsOutOf.state.value = vnode.attrs.value;
            WebsiteVisitor.generateList(vnode.attrs.value);
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
        value: 10,
        setValue: function(v) {
            StartingAt.state.value = v;
        }
    },

    oninit: function(vnode){
            StartingAt.state.value = vnode.attrs.value;
    },


    view: function() {
        return m("input", {
            oninput: m.withAttr("value", StartingAt.state.setValue),
            value: StartingAt.state.value,
        })
    }
}

module.exports = {Showing, RowsOutOf, StartingAt};
