# gladys-mqtt-adapter

This is a NPM module that allows you to easily create Gladys module that connects to Gladys threw MQTT.

## Usage

To use this module, add this module as a dependency of your gladys module : 

```
npm install gladys-mqtt-adapter --save
```

Then, your module should have a `index-mqtt.js` file, with for example the following content: 

```javascript
if(process.argv.length < 5) {
    throw new Error(`
        Error. You should provide required arguments to start this module.
        - Example: node index-mqtt.js $YOUR_GLADYS_MACHINE_ID $YOUR_MQTT_URL $YOUR_MQTT_USERNAME $YOUR_MQTT_PASSWORD
    `);
}

var gladysMqttAdapter = require('gladys-mqtt-adapter')({
    MACHINE_ID: process.argv[2],
    MQTT_URL: process.argv[3],
    MQTT_USERNAME: process.argv[4],
    MQTT_PASSWORD: process.argv[5] 
});

gladysMqttAdapter.on('devicetype-exec', function(data) {
    /** 
    * data = {
    *  deviceType
    *  state: param
    * };
    */
});

```


