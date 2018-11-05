
module.exports = function(client) {
    return {
        send: function(topic, message) {
            client.publish(topic, JSON.stringify(message));
        }
    };
};