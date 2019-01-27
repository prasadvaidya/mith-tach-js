var m = require("mithril");
var ShowingRowsOf = require("./ShowingRowsOf.js");
var Table = require("./Table.js");

var offset;
var rows_per_page;
var total_rows;
var current_offset;

var Main = {
    view: function() {
        return m("body", [m(ShowingRowsOf, "Hello"),
                          m(Table, "Test")
        ]);
    }
};

module.exports = Main;