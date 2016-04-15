var React = require("react");
var classNames = require("classnames");

var InputError = React.createClass({
  getInitialState: function() {
    return {
      message: 'Input is invalid!'
    };
  },
  render: function(){ 
    var errorClass = classNames(this.props.className, {
      'alert alert-danger':   true,
      'visible':           this.props.visible,
      'invisible':         !this.props.visible
    });
 
    return (
      <div className={errorClass} role="alert">{this.props.errorMessage}</div>
    )
  }
 
});

module.exports = InputError;