var Config = require('../config')
var Personalinfo = require('../Models/Personalinfo').Personalinfo;
//console.log('Personalinfo',Personalinfo);

var get = function(criteria, callback){
	Config.dbConfig.bucket.get(criteria, function (err, result) {
      console.log('Got result: %j', result.value);
      //result.production = 'marvels'
      callback(null,result.value);
      //1522315391086297088
    });
    /*Config.dbConfig.bucket.replace('demo',{'actor':'tony stark'},function(err, result){
    	if(err){
    		console.log('Error',err);
    		callback(null,result);
    	} else {
    		console.log('successfull', result);
    		callback(null,result);
    	}
    })*/
    //var cas = 1522315391086297088;
    /*Config.dbConfig.bucket.replace('demo',{'actor':'kidman'},function(err, result){
    	if(err){
    		console.log('Error',err);
    		callback(null,result);
    	} else {
    		console.log('successfull', result);
    		callback(null,result);
    	}
    })*/
    
}

var replace = function(payload,documentId, callback){
	Config.dbConfig.bucket.replace(payload, documentId, function(err, result){
    	if(err){
    		console.log('Error',err);
    		callback(null,result.value);
    	} else {
    		console.log('successfull', result);
    		callback(null,result);
    	}
    })
}

var upsert = function(payload, dataToUpdate, callback){
	Config.dbConfig.bucket.upsert(payload, dataToUpdate, function(err, result){
    	if(err){
    		console.log('Error',err);
    		callback(null,result.value);
    	} else {
    		console.log('successfull', result);
    		callback(null,result);
    	}
    })
}

var insert = function(payload, callback){
	Config.dbConfig.bucket.insert(payload.bucketName, dataToInsert, function(err, result){
    	if(err){
    		console.log('Error',err);
    		callback(null,result.value);
    	} else {
    		console.log('successfull', result);
    		callback(null,result.value);
    	}
    })
}

var remove = function(payload, callback){
	Config.dbConfig.bucket.remove(payload, function(err, result){
    	if(err){
    		console.log('Error',err);
    		callback(null,result);
    	} else {
    		console.log('successfull', result);
    		callback(null,result);
    	}
    })
}

var removeField = function(payload, callback){
	Config.dbConfig.bucket.remove(payload.documentId, payload.fieldName, function(err, result){
    	if(err){
    		console.log('Error',err);
    		callback(null,result);
    	} else {
    		console.log('successfull', result);
    		callback(null,result);
    	}
    })
}

var save = function(objToSave, callback){
    var personalInfo = new Personalinfo({

        "fullName" : objToSave.firstName,
        "lastName" : objToSave.lastName,
        "phoneNo":objToSave.phoneNo,
        "email":objToSave.email,
        "identityProof":objToSave.identityProof,
        "address":objToSave.address,
        "picture":objToSave.picture
    });
    personalInfo.save(function(err, result){
      if(err){
        console.log(err);
        callback(err);
      } else {
        console.log('result', result);
        callback(null, result);
      }
    })
}

var retrieve = function(criteria, callback){
    Personalinfo.find(criteria,{}, function(err, results){
        if(err){
            console.log('err', err);
            callback(err);
        } else {
            console.log('results', results);
            callback(null, results);
        }
    })
}

module.exports = {
	get, replace, insert, upsert, remove, removeField, save, retrieve
}


// replace
// upsert
// insert
//lookupin
//getAndTouch
//get