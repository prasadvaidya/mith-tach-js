var m = require("mithril");
var WebsiteVisitor = require("../models/WebsiteVisitor.js");

var ShowingRowsOf = {
    state: {
        value: 10,
        setValue: function(v) {
            ShowingRowsOf.state.value = v;
            WebsiteVisitor.generateList(ShowingRowsOf.state.value);
        }
    },
    setValue: function(v) {
        ShowingRowsOf.state.value = v;
    },
    view: function() {
        return m("input", {
            oninput: m.withAttr("value", ShowingRowsOf.state.setValue),
            value: ShowingRowsOf.state.value,
        })
    }
}

module.exports = ShowingRowsOf;
