var m = require("mithril");
var ShowingRowsOf = require("./ShowingRowsOf.js");
var Table = require("./Table.js");
var ButtonControls = require("./ButtonControls.js");

var Main = {
    view: function() {

            return m("div",
                m("center",
                    [   m("br"),
                        m(ButtonControls.FirstPage),
                        m(ButtonControls.PrevPage),
                        m(ButtonControls.PrevRow),
                        m("label", "Showing: "),
                        m(ShowingRowsOf.Showing),
                        m("label", "rows out of: "),
                        m(ShowingRowsOf.RowsOutOf),
                        m("label", "Starting at: "),
                        m(ShowingRowsOf.StartingAt),
                        m("p", {class: "dib v-top"}),
                        m(ButtonControls.NextRow),
                        m(ButtonControls.NextPage),
                        m(ButtonControls.LastPage),
                        m("hr"),
                        m(Table, {class:"center"}),
                        m("hr")
                    ]
                )
            );
    }
};

module.exports = Main;