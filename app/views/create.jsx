var React = require("react");
var AddAPI = require("../components/AddAPI.jsx");
var Layout = require('./layouts/default.jsx');

var CreateAPI = React.createClass({
  render: function() {
    return (
      <Layout title={this.props.title}>
        <div>Hello {this.props.name}</div>
        <div>
			<AddAPI />
        </div>
      </Layout>
    );
  }
});

module.exports = CreateAPI;