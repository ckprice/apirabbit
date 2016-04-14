var dispatcher = require("../dispatcher");

module.exports = {
    addApi:function(api){
        dispatcher.dispatch({
           api:api,
           type:"api:addApi" 
        });
    },
    deleteApi:function(api){
        dispatcher.dispatch({
           api:api,
           type:"api:deleteApi" 
        });
    }
}