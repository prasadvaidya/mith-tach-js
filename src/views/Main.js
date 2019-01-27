var m = require("mithril");
var ShowingRowsOf = require("./ShowingRowsOf.js");
var Table = require("./Table.js");

var Main = {
    view: function() {
        return m("body", [m("label", "Showing: "),
                          m(ShowingRowsOf.Showing, {value: 3}),
                          m("label", "rows out of: "),
                          m(ShowingRowsOf.RowsOutOf, {value:7}),
                         m("label", "Starting at: "),
                          m(ShowingRowsOf.StartingAt, {value: 1}),
                          m(Table, "Test")
        ]);
    }
};

module.exports = Main;