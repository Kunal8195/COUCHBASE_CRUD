'use strict';

const UniversalFunctions = require('../Utils/UniversalFunctions')
const Joi = require('joi');
const CONFIG = require('../config');
const Controller = require('../Controllers');
const routes = [];

routes.push(
    {
    	path:'/api/getDocument',
    	method:'GET',
    	handler: function(request,reply){
    		console.log("You are here in routes");
            Controller.ClientController.getInfo(request.query.nameOfDocument, function(err, data){
                if(err){
                    console.log('error',err);
                } else {
                    console.log('data',data);
                    reply(data);
                }
            });
    	},
    	config:{
    		tags:['api'],
    		description:'demo client api',
    		validate:{
    			query:{
    				nameOfDocument:Joi.string().required()
    			},
    			failAction: UniversalFunctions.failActionFunction,
    		},
    		plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
    	}

    },
    {
        path:'/api/replace',
        method:'PUT',
        handler: function(request,reply){
            console.log("You are here in routes",request.query);
            Controller.ClientController.replaceDocument(request.query, function(err, data){
                if(err){
                    console.log('error',err);
                    reply(err);
                } else {
                    console.log('data',data);
                    reply(data);
                }
            });
        },
        config:{
            tags:['api'],
            description:'demo client api',
            validate:{
                query:{
                    documentId:Joi.string().required(),
                    fieldName:Joi.string().required(),
                    value:Joi.string().required()
                },
                failAction: UniversalFunctions.failActionFunction,
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }

    },
    {
        path:'/api/upsert',
        method:'POST',
        handler: function(request,reply){
            console.log("You are here in routes",request.payload);
            Controller.ClientController.upsertDocument(request.payload, function(err, data){
                if(err){
                    console.log('error',err);
                    reply(UniversalFunctions.sendError(err));
                } else {
                    console.log('data',data);
                    reply(UniversalFunctions.sendSuccess(null, data));
                }
            });
        },
        config:{
            tags:['api'],
            description:'demo client api for update',
            validate:{
                payload:{
                    bucketName:Joi.string().required(),
                    dataToUpdate:Joi.string().required()
                    /*dataToUpdate:{
                        username:Joi.string().required(),
                        designation:Joi.string().required(),
                        job:Joi.string().optional()
                    }*/
                },
                failAction: UniversalFunctions.failActionFunction,
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }

    },
    {
        path:'/api/insert',
        method:'PUT',
        handler: function(request,reply){
            console.log("You are here in routes",request.payload);
            Controller.ClientController.upsertDocument(request.payload, function(err, data){
                if(err){
                    console.log('error',err);
                } else {
                    console.log('data',data);
                    reply(data);
                }
            });
        },
        config:{
            tags:['api'],
            description:'demo client api for upsert',
            validate:{
                payload:{
                    documentId:Joi.string().required(),
                    userName:Joi.string().required(),
                    email:Joi.string().required(),
                    phoneNo:Joi.number().required(),
                    nickName:Joi.string().optional()
                },
                failAction:UniversalFunctions.failActionFunction,
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }

    },
    {
        path:'/api/deleteWholedocumentById',
        method:'DELETE',
        handler: function(request,reply){
            console.log("You are here in routes",request.query);
            Controller.ClientController.deleteDocument(request.query.documentId, function(err, data){
                if(err){
                    console.log('error',err);
                    reply(UniversalFunctions.sendError(err));
                } else {
                    console.log('data',data);
                    reply(UniversalFunctions.sendSuccess(null, data));
                }
            });
        },
        config:{
            tags:['api'],
            description:'demo client api for Delete',
            validate:{
                query:{
                    documentId:Joi.string().required()
                },
                failAction: UniversalFunctions.failActionFunction,
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    },
    {
        path:'/api/deleteOnlyParticularField',
        method:'DELETE',
        handler: function(request,reply){
            console.log("You are here in routes",request.query);
            Controller.ClientController.deleteDocumentField(request.query, function(err, data){
                if(err){
                    console.log('error',err);
                    reply(UniversalFunctions.sendError(err));
                } else {
                    console.log('data',data);
                    reply(UniversalFunctions.sendSuccess(null, data));
                }
            });
        },
        config:{
            tags:['api'],
            description:'demo client api for Deleting Field',
            validate:{
                query:{
                    documentId:Joi.string().required(),
                    fieldName: Joi.string().required()
                },
                failAction: UniversalFunctions.failActionFunction,
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    },
    {
        path: '/api/saveNewDocument',
        method:'POST',
        handler: function(request, reply){
            Controller.ClientController.saveDocument(request.payload, function(err, data){
                if(err){
                    console.log('err',err);
                    reply(UniversalFunctions.sendError(err));
                } else {
                    console.log('data',data);
                    reply(UniversalFunctions.sendSuccess(null, data));
                }
            })
        },
        config:{
            tags:['api'],
            description: 'save new information',
            validate: {
                payload:{
                    fisrtName: Joi.string().required(),
                    lastName: Joi.string().required(),
                    email: Joi.string().required(),
                    phoneNo:Joi.string().required(),
                    address:Joi.string(),
                    identityProof: Joi.string().required(),
                    picture: Joi.string()
                },
                failAction: UniversalFunctions.failActionFunction,
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    },
    {
        path:'/api/retrieveSavedDocuments',
        method:'GET',
        handler: function(request, reply){
            Controller.ClientController.retrieveDocument(request.query, function(err, data){
                if(err){
                    console.log(err)
                    reply(UniversalFunctions.sendError(err))
                } else  {
                    console.log('data',data)
                    reply(UniversalFunctions.sendSuccess(null, data))
                }
            })
        },
        config: {
            tags: ['api'],
            description:'retrieve new information',
            validate:{
                query:{
                    lastName: Joi.string().required()
                },
                failAction: UniversalFunctions.failActionFunction
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    }
)

module.exports = routes