
module.exports = function(client) {
    return {
        create: function(params){
            client.emit('gladys/master/event/create', JSON.stringify(params));
        }
    };
};