
module.exports = function(client) {
    return {
        create: function(params){
            client.publish('gladys/master/devicestate/create', JSON.stringify(params));
        }
    };
};