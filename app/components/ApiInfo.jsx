var React = require("react");
var actions = require("../actions/ApiActions");

var ApiInfo =  React.createClass({
    deleteApi: function(e){
        e.preventDefault();
        actions.deleteApi(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteApi}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.text}</div>
            </div>
        )
    }
})

module.exports = ApiInfo;