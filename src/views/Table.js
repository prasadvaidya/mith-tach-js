var m = require("mithril");
var WebsiteVisitor = require("../models/WebsiteVisitor.js");

var Table = {
    view: function(vnode) {
        return m("table",
                [ m("th", [
                m("td",{class:"pa3 white bg-blue tl"}, ""),
                m("td",{class:"pa3 white bg-blue tl"}, "SRC_IP"),
                m("td",{class:"pa3 white bg-blue tl"}, "TIMESTAMP"),
                m("td",{class:"pa3 white bg-blue tl"}, "DEST_IP"),
                m("td",{class:"pa3 white bg-blue tl"}, "GENDER"),
                WebsiteVisitor.list.map(function(visitor) {
                    return m("tr", {class: "lh-copy stripe-dark"}, [
                        m("td",{class:"pa1"}, visitor.index),
                        m("td",{class:"pa1"}, visitor.src_ip),
                        m("td",{class:"pa1"}, visitor.timestamp),
                        m("td",{class:"pa1"}, visitor.destination_ip),
                        m("td",{class:"pa1"}, visitor.gender)
                    ]);
                })
            ])
        ]);

    }
};


module.exports = Table;