var React = require("react");
var actions = require("../actions/ApiActions");
var ta = require('time-ago')();

var ApiInfo =  React.createClass({
    deleteApi: function(e){
        e.preventDefault();
        actions.deleteApi(this.props.info);
    },
    render:function(){
        var timeago = ta.ago(this.props.info.created_date);
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <a href={'/api/' + this.props.info._id}>{this.props.info.name}</a>, {timeago}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteApi}>&times;</span>
                </div>
            </div>
        )
    }
})

module.exports = ApiInfo;