'use strict'

// require new relic at the top only in production environment
if (process.env.NODE_ENV === 'production') {
  require('newrelic')
}

const config = require('config')

const server = require('./server')

const gracefulStopServer = function () {
    // Wait 10 secs for existing connection to close and then exit.
    server.stop({timeout: 10 * 1000}, () => {
        process.exit(0)
    })
}

process.on('uncaughtException', err => {
    console.log(err);
    process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
    console.log(reason);
    process.exit(1)
})

process.on('SIGINT', gracefulStopServer)
process.on('SIGTERM', gracefulStopServer)

/**
 * Starts the server
 * @returns {Promise.<void>}
 */
const startServer = async function () {
    try {
        // add things here before the app starts, like database connection check etc
        console.log("Hello, establishing connection with the server !!");
        await server.start((err) => {
            if (err) {
                console.log("error server connect", err)
            }
            console.log('Server running at:', server.info.uri);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

startServer();
