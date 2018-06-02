const should = require('should');
const gladysMqttAdapterConstructor = require('../index');

describe('index.js', function(){
    describe('When we initialized the main index.js function with wrong paremeters', function(){
        it('should throw an error, parameters are not good', function() {
            should.throws(function() { gladysMqttAdapterConstructor(); }, Error);
        });
    });

    describe('When we initialized the main index.js function with correct parameters', function(){
        var options = {
            MACHINE_ID: process.env.MACHINE_ID,
            MQTT_URL: process.env.MQTT_URL,
            MQTT_USERNAME: process.env.MQTT_USERNAME,
            MQTT_PASSWORD: process.env.MQTT_PASSWORD,
            MODULE_SLUG: process.env.MODULE_SLUG
        };
        var gladysMqttAdapter = gladysMqttAdapterConstructor(options);
        
        it('should return an eventEmitter', function() {
            gladysMqttAdapter.should.have.property('on');
            should.equal(typeof gladysMqttAdapter, 'object');
            should.equal(typeof gladysMqttAdapter.on, 'function');
        });

        it('should return a set of fonction', function() {
            gladysMqttAdapter.should.have.property('device');
            gladysMqttAdapter.should.have.property('deviceState');
            gladysMqttAdapter.should.have.property('event');
            should.equal(typeof gladysMqttAdapter.device.create, 'function');
            should.equal(typeof gladysMqttAdapter.deviceState.create, 'function');
            should.equal(typeof gladysMqttAdapter.event.create, 'function');
        });
    });
});