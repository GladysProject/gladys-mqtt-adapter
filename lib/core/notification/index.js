
module.exports = function(client) {
    return {
        install: function(params){
            client.publish('gladys/master/notification/install', JSON.stringify(params));
        }
    };
};