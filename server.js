const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const ws = require('websocket-stream');

// MQTT Port
const port = 1883;

// Running MQTT Broker
server.listen(port, () => {
    console.log(`MQTT Broker running on port: ${port}`);
});

// WebSocket Port
const wssPort = 1234 // example

// localhost
const host = '0.0.0.0'

// Create WebSocket Server
const wsSslServer = require('http').createServer({})
ws.createServer({ server: wsSslServer}, aedes.handle)

// Running WebSocket Server on Port 1234
wsSslServer.listen(wssPort, host, () => {
    console.log('WSS server listening on port', wssPort)
})
