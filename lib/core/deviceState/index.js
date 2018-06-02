
module.exports = function(client) {
    return {
        create: function(params){
            client.emit('gladys/master/devicestate/create', JSON.stringify(params));
        }
    };
};