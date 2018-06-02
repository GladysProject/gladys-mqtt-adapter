
module.exports = function(client) {
    return {
        create: function(params){
            client.publish('gladys/master/event/create', JSON.stringify(params));
        }
    };
};