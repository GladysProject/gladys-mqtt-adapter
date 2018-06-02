
module.exports = function(eventEmitter, client, topic, message){
    try {
        switch(topic) {
            case 'devicetype/exec':
                eventEmitter.emit('devicetype-exec', JSON.parse(message));
            break;

            case 'notify':
                eventEmitter.emit('message-notify', JSON.parse(message));
            break;

            case 'param/getvalues': 
                eventEmitter.emit('param-getvalues', JSON.parse(message));
            break;

            default:
                throw new Error('This topic is not handled by this module');
            break;
        }
    } catch(err) {
        console.log('Unable to handle message from topic : ' + topic);
        console.log(err);
    }
};