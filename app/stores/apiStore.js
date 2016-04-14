var dispatcher = require("../dispatcher");
var apiService = require("../services/apiService");

function ApiStore() {
    var listeners = [];

    function onChange(listener) {
        getApis(listener);
        listeners.push(listener);
    }
    
    function getApis(cb){
        apiService.getApis().then(function (res) {
            cb(res);
        });
    }

    function addApi(api) {
        apiService.addApi(api).then(function () {
            triggerListeners();
        });
    }

    function deleteApi(api) {
        apiService.deleteApi(api).then(function () {
            triggerListeners();
        });
    }

    function triggerListeners() {
        getApis(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "api") {
            switch (split[1]) {
                case "addApi":
                    addApi(payload.api);
                    break;
                case "deleteApi":
                    deleteApi(payload.api);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = ApiStore();