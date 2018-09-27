
module.exports = function(client) {
    return {
        command: function(topic, message) {
            client.publish(topic, JSON.stringify(message));
        }
    };
};