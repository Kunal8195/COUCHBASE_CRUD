'use strict';

//External Dependencies
var Hapi = require('hapi');

//Internal Dependencies
var Routes = require('./Routes');
var Plugins = require('./Plugins');
const BootStrap = require('./Utils/BootStrap');
//var config = require('./config/dbConfig');
//Create Server
var server = new Hapi.Server();

server.connection({
    port: 3000,
    routes: { cors: true }
});

//Register All Plugins
const registerPlugins = async () => {
    try {
        await server.register(Plugins);
    } catch (error) {
        console.log(error, 'Failed to register hapi plugins');
        throw error
    }
}

registerPlugins()

//Default Routes
server.route(
    {
        method: 'GET',
        path: '/',
        handler: function (req, res) {
            //TODO Change for production server
            res.view('index')
        }
    }
);

// attach routes here
server.route(Routes)

//Adding Views
server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './Views'
});

module.exports = server
