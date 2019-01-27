'use strict';
var m = require("mithril");
var ShowingRowsOf = require("../views/ShowingRowsOf");

var total_rows = 0;

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


var WebsiteVisitor = {
    list: [],
    generateList: function(total_rows) {

        var data_rows = [];
        for (var i = 0; i < total_rows; i++){
            data_rows.push({
                src_ip: random_ip_generator(),
                timestamp: random_timestamp_generator(),
                destination_ip: random_ip_generator(),
                gender: random_gender_generator()
            });
        }
        console.log(data_rows);
        WebsiteVisitor.list = data_rows;
        return data_rows;
    },

    retrievePage: function(page_num, row_count){

    },


    retrievePageWithOffset: function(offset, row_count){

    }

}

module.exports = WebsiteVisitor;