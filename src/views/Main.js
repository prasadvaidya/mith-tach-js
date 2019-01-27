var m = require("mithril");
var ShowingRowsOf = require("./ShowingRowsOf.js");
var Table = require("./Table.js");

var Main = {
    view: function() {
        return m("body", [
                            m("label", "Showing: "),
                            m(ShowingRowsOf.Showing),
                            m("label", "rows out of: "),
                            m(ShowingRowsOf.RowsOutOf),
                            m("label", "Starting at: "),
                            m(ShowingRowsOf.StartingAt),
                            m(Table, "Test")
        ]);
    }
};

module.exports = Main;