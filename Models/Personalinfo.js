var Config = require('../config');
var ottoman = require('ottoman')

//var ottoman = Config.dbConfig.ottoman
var Personalinfo = ottoman.model('Personalinfo',{
	fullName : {type:"string"},
	lastName : {type:"string"},
	email    : {type:"string"},
	phoneNo  : {type:"string"},
    address  : {type:"string"},
    identityProof : {type:"string"},
    picture : {type:"string"}
});

module.exports.Personalinfo = Personalinfo