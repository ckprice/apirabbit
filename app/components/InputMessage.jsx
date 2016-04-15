var React = require("react");
var classNames = require("classnames");

var InputMessage = React.createClass({
  getInitialState: function() {
    return {
      message: 'Input is invalid!'
    };
  },
  render: function(){ 
    var messageClass;
    if (this.props.messageType=='error') {
      messageClass = classNames(this.props.className, {
        'alert alert-danger':   true,
        'visible':           this.props.visible,
        'invisible':         !this.props.visible
      });
    } else if (this.props.messageType=='success'){
      messageClass = classNames(this.props.className, {
        'alert alert-success':   true,
        'visible':           this.props.visible,
        'invisible':         !this.props.visible
      });
    }
 
    return (
      <div className={messageClass} role="alert">{this.props.message}</div>
    )
  }
 
});

module.exports = InputMessage;