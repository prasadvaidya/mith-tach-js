var m = require("mithril");
var WebsiteVisitor = require("../models/WebsiteVisitor.js");

var Table = {
    view: function() {
        return m("table",
                [ m("th", {class: "lh-copy"}, [
                m("td",{class:"pa3"}, "SRC_IP"),
                m("td",{class:"pa3"}, "SRC_IP"),
                m("td",{class:"pa3"}, "SRC_IP"),
                m("td",{class:"pa3"}, "SRC_IP"),
                WebsiteVisitor.list.map(function(visitor) {
                    return m("tr", {class: "lh-copy"}, [
                        m("td",{class:"pa3"}, visitor.src_ip),
                        m("td",{class:"pa3"}, visitor.timestamp),
                        m("td",{class:"pa3"}, visitor.destination_ip),
                        m("td",{class:"pa3"}, visitor.gender)
                    ]);
                })
            ])
        ]);

    }
};


module.exports = Table;