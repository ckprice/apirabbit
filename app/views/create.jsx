var React = require('react');

var CreateAPI = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

module.exports = CreateAPI;