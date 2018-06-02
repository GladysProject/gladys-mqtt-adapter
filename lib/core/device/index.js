
module.exports = function(client) {
    return {
        create: function(params) {
            client.publish('gladys/master/device/create', JSON.stringify(params));
        }
    };
};