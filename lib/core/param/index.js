
module.exports = function(client) {
    return {
        getValues: function(params){
            client.emit('gladys/master/param/getvalues', JSON.stringify(params));
        }
    };
};