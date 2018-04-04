var Service = require('../Services')
var async = require('async');

var getInfo = function(username, callback){
	//let criteria = 'user:' + username
	Service.ClientService.get(username,function(err, data){
		console.log("you are in controller");
		callback(null,data);
	})
}

var upsertDocument = function(payload, callback){
	dataToSend = {
		username: payload.dataToUpdate
	}
	Service.ClientService.upsert(payload.bucketName, dataToSend, function(err, data){
		console.log("You are in update controller")
		callback(null, data);
	})
}

var insertDocument = function(payload, callback){

	Service.ClientService.insert(payload, function(err, data){
		console.log("You are in insert Controller")
		callback(null, data);
	})
}

var replaceDocument = function(payload, callback){
	let dataToSend = {};
	async.series([
		function(cb){
			Service.ClientService.get(payload.documentId, function(err, data){
				console.log('you are in replace controller', data);
				if(err){
					console.log(err);
				} else {
					dataToSend = data;
				    cb();
				}
			})
		},
		function(cb){
			let field = payload.fieldName
			for(var key in dataToSend){
				if(key == field){
					dataToSend[key] = payload.value
				}
			}
			Service.ClientService.replace(payload.documentId, dataToSend, function(err, data){
				if(err){
					console.log(err);
				} else {
					console.log('data',data);
					dataToSend = data;
				}
				cb();
			})
		}
	],
	function(err, data){
		if(err){
			console.log(err)
		} else {
			console.log(data);
			callback(null, dataToSend);
		}
	});
}

var deleteDocument = function(payload, callback){
	Service.ClientService.remove(payload, function(err, data){
		console.log('You are in Delete controller',payload)
		callback(null, data);
	})
}

var deleteDocumentField = function(payload, callback){
	let dataToSend = {};
	async.series([
		function(cb){
			Service.ClientService.get(payload.documentId, function(err, data){
				if(err){
					console.log('err',err);
				} else {
					console.log('data',data);
					dataToSend = data
				}
				cb();
		    })
		},
		function(cb){
			let field = payload.fieldName
			for(var key in dataToSend){
				if(key == field){
					dataToSend[key] = ' '
				}
			}
			Service.ClientService.upsert(payload.documentId, dataToSend, function(err, data){
		        console.log('You are in Delete controller',payload);
		        dataToSend = data;
		        cb();
	        })
		}
	],
	function(err, data){
		if(err){
			console.log(err);
			callback(err);
		} else {
			callback(null, dataToSend);
		}
	});
}

var saveDocument = function(payload, callback){
	var objToSave = {
		firstName: payload.firstName,
		lastName: payload.lastName,
		email: payload.email,
		phoneNo: payload.phoneNo,
		address: payload.address,
		identityProof: payload.identityProof,
		picture: payload.picture
	}
	Service.ClientService.save(objToSave, function(err, data){
		if(err){
			console.log('err', err);
			callback(err);
		} else {
			console.log('data',data);
			callback(null, data);
		}
	})
}

var retrieveDocument = function(payload, callback){
	let criteria = {
		"lastName" : payload.firstName
	}
	Service.ClientService.retrieve(criteria, function(err, data){
		if(err){
			console.log('err',err);
			callback(err);
		} else {
			console.log('data', data);
			callback(null, data);
		}
	})
}

module.exports = {
	getInfo, upsertDocument, insertDocument, replaceDocument, deleteDocument, deleteDocumentField, saveDocument, replaceDocument, retrieveDocument
}