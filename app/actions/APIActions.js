var dispatcher = require("../dispatcher");

module.exports = {
    addAPI:function(api){
        dispatcher.dispatch({
           api:api,
           type:"api:addSchool" 
        });
    }
}