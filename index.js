const mqtt = require('mqtt');
const events = require('events');
const handler = require('./lib/handler');
const device = require('./lib/core/device/index');
const deviceState = require('./lib/core/deviceState/index');
const event = require('./lib/core/event/index');
const param = require('./lib/core/param/index');

module.exports = function(params) {

    // validate parameters sent to this module, and crash if they are not present
    if(!params.MACHINE_ID || !params.MQTT_URL || !params.MQTT_USERNAME || !params.MQTT_PASSWORD || !params.MODULE_SLUG) {
        return new Error('Invalid parameters. You need to provide: MACHINE_ID, MQTT_URL, MQTT_USERNAME, MQTT_PASSWORD and MODULE_SLUG');
    }

    // create the eventEmitter object we are going to use on the module side to retrieve events
    const eventEmitter = new events.EventEmitter();
    
    // initialize MQTT client
    const client = mqtt.connect(params.MQTT_URL, {
        username: params.MQTT_USERNAME,
        password: params.MQTT_PASSWORD
    });

    var prefixOfTopicToListen = `gladys/machine/${params.MACHINE_ID}/module/${params.MODULE_SLUG}/`;
    
    // when the client is connected to MQTT
    client.on('connect', function () {

        // subscribe to all messages for this module in this machine
        client.subscribe(`${prefixOfTopicToListen}#`);

        console.log(`Connected, subscribed to ${prefixOfTopicToListen}#`);
        eventEmitter.emit('connect');
    });

    // On error while connecting to MQTT broker
    client.on('error', function(err) {
        console.log(`Fail to connect to MQTT : ${params.MQTT_URL}`);
    });

    // when a message is received on any topic we subscribed too
    client.on('message', function (topic, message) {
        console.log(`MQTT : New message received in topic ${topic}`);
        var endOfTopicString = topic.substring(prefixOfTopicToListen.length);
        handler(eventEmitter, client, endOfTopicString, message.toString());
    });

    // add function of the API of the module
    eventEmitter.device = device(client)
    eventEmitter.deviceState = deviceState(client);
    eventEmitter.event = event(client);
    eventEmitter.param = param(client);

    return eventEmitter;
};