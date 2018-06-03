const gladysMqttAdapter = require('./index')({
    MACHINE_ID: 'bb4f6bb8-a826-4039-8e7c-445240bc8809',
    MQTT_URL: 'mqtt://localhost',
    MQTT_USERNAME: 'root',
    MQTT_PASSWORD: 'root',
    MODULE_SLUG: 'new-module'
});

gladysMqttAdapter.on('devicetype-exec', function(data){
    console.log(data);
});

gladysMqttAdapter.on('connect', function(){
    
});