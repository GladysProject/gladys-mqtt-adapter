
module.exports = function(client) {
    return {
        create: function(params) {
            client.emit('gladys/master/device/create', JSON.stringify(params));
        }
    };
};