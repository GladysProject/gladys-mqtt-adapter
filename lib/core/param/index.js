
module.exports = function(client, config) {
    return {
        getValues: function(keys) {
            var params = {
                machine_id: config.MACHINE_ID,
                module_slug: config.MODULE_SLUG,
                keys
            };
            client.publish('gladys/master/param/getvalues', JSON.stringify(params));
        }
    };
};