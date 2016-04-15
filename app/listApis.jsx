var React = require("react");
var ReactDOM = require("react-dom");
var ApiList = require("./components/ApiList.jsx");
var apiStore = require("./stores/apiStore");
var _apis = [];
var getApisCallback = function(apis){
    _apis = apis;
    render();
};
apiStore.onChange(getApisCallback);

function render(){
    ReactDOM.render(<ApiList apis={_apis} />, document.getElementById("component-container"));    
}