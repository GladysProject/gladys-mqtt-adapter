
module.exports = function(client) {
    return {
        message: function(topic, message) {
            client.publish(topic, JSON.stringify(message));
        }
    };
};