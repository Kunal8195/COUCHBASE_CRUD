
//Register Swagger
const Pack = require('../package');
const options = {
    info: {
        'title': 'Test API Documentation',
        'version': Pack.version,
    }
};
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

exports.register = function(server, options, next){

    server.register([
            Inert,
            Vision,
            {
                'register': HapiSwagger,
                'options': options    
            }
        ], 
        (err) => {
            if (err){
                console.log('Error Loading Swagger : ' + err)
            }
        }
    );
    next();
};

exports.register.attributes = {
    name: 'swagger-plugin'
};