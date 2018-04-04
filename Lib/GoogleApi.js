'use strict';

var Config = require('../config');
var GOOGLE_API_KEY = Config.APP_CONSTANTS.SERVER.GOOGLE_API_KEY
var request = require('request');

function getNearbyFromSearch(query, callback) {
    var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
    
    var query = {
      key: GOOGLE_API_KEY,
      query: query.term
    }
    
    request.get({uri: url, qs: query}, function (error, data, response) {
        // console.log('Data :', data);
        // console.log('Response:', response);
        if(error){
            callback(error);
        }else{
            response = JSON.parse(response);
            var resultset = {data:[]};
            response.results.forEach(function(item){
                console.log("Item :", item);
                var newItem = {};
                newItem.latitude = item.geometry.location.lat;
                newItem.longitude = item.geometry.location.lng;
                newItem.name = item.name;
                newItem.id = item.place_id;
                newItem.icon = item.icon;
                resultset.data.push(newItem);
            });
            callback(null, resultset);
        }
    });
}

module.exports = {
    getNearbyFromSearch: getNearbyFromSearch
};