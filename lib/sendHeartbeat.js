
module.exports = function sendHeartbeat(client, machineId, moduleSlug){
    var params = {
        machine_id: machineId, 
        module_slug: moduleSlug
    };
    client.publish('gladys/master/module/heartbeat', JSON.stringify(params));
};