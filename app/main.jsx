//main.jsx
var React = require("react");
var ReactDOM = require("react-dom");
var SchoolList = require("./components/SchoolList.jsx");
var schoolsStore = require("./stores/schoolsStore");
var _schools = schoolsStore.getSchools();
schoolsStore.onChange(function(schools){
    _schools = schools;
    render();
});

function render(){
    ReactDOM.render(<SchoolList schools={_schools} />, document.getElementById("container"));    
}

render();