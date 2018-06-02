const assert = require('assert');
const gladysMqttAdapterConstructor = require('../index');

describe('index.js', function(){
    describe('When we initialized the main index.js function', function(){
        it('should throw an error, parameters are not good', function() {
            assert.throws(function() { gladysMqttAdapterConstructor(); }, Error);
        });
    });
});