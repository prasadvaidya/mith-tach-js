'use strict';
var m = require("mithril");
var ShowingRowsOf = require("../views/ShowingRowsOf");
var TableState = require("../models/TableState.js");

function random_ip_generator() {
    var listOfNumbers = [172, 198, 112, 224, 181];
    return listOfNumbers[Math.floor(Math.random() * listOfNumbers.length)]+"."+
            listOfNumbers[Math.floor(Math.random() * listOfNumbers.length)]+"."+
            listOfNumbers[Math.floor(Math.random() * listOfNumbers.length)]+"."+
            listOfNumbers[Math.floor(Math.random() * listOfNumbers.length)];

}


function random_timestamp_generator() {
    var min = 1548069215;
    var max = 1548587615;
    return Math.floor(Math.random() * (max - min) + min);

}

function random_gender_generator() {
    var gender = ["m", "f", "-"];
    return gender[Math.floor(Math.random() * gender.length)];
}

var data_rows;
var tableState;

var WebsiteVisitor = {

    list: [],
    tableState: {},
    initializeState: function(){
        WebsiteVisitor.tableState = new TableState(0, 15, 30);
    },
    generateList: function(value) {

        data_rows = [];
        for (var i = 0; i < value; i++){
            data_rows.push({
                index: (i+1),
                src_ip: random_ip_generator(),
                timestamp: random_timestamp_generator(),
                destination_ip: random_ip_generator(),
                gender: random_gender_generator()
            });
        }
        WebsiteVisitor.tableState["total_rows"] = value;
        WebsiteVisitor.list = data_rows.slice(WebsiteVisitor.tableState['row_offset'],  (parseInt(WebsiteVisitor.tableState['row_offset'])+parseInt(WebsiteVisitor.tableState['rows_per_page'])));
    },

    updateOffset: function(offset){
        WebsiteVisitor.tableState['row_offset'] = offset;
        if(data_rows && data_rows.length>0){
            WebsiteVisitor.list = data_rows.slice(WebsiteVisitor.tableState['row_offset'],  (parseInt(WebsiteVisitor.tableState['row_offset'])+parseInt(WebsiteVisitor.tableState['rows_per_page'])));
        }
    },

    updateRowsPerPage: function(rows_per_page){
        WebsiteVisitor.tableState['rows_per_page'] = rows_per_page;
        WebsiteVisitor.list = data_rows.slice(WebsiteVisitor.tableState['row_offset'],  (parseInt(WebsiteVisitor.tableState['row_offset'])+parseInt(WebsiteVisitor.tableState['rows_per_page'])));
    }

}

module.exports = WebsiteVisitor;