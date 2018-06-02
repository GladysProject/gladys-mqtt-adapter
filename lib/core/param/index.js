
module.exports = function(client) {
    return {
        getValues: function(params) {
            client.publish('gladys/master/param/getvalues', JSON.stringify(params));
        }
    };
};