var React = require("react");
var actions = require("../actions/ApiActions");
var InputMessage = require("./InputMessage.jsx");
var JSONLint = require('json-lint');

var AddApi = React.createClass({
    getInitialState:function(){
      return {
          name:"Untitled",
          text:"",
          message: '',
          messageType: '',
          messageVisible: false
      }  
    },
    addApi:function(e){
        e.preventDefault();
        this.setState({
          message: '',
          messageType: '',
          messageVisible: false
        });
        if (this.validateJSON()) {
          this.setState({
            name:'',
            text:'',
            message: 'Your API has been successfully created!',
            messageType: 'success',
            messageVisible: true
          });
          actions.addApi(this.state);
        }
    },
    validateJSON:function(){
      var lint = JSONLint( this.state.text );

      if ( lint.error ) {
        this.setState({
          message: '[' + lint.line + ':' + lint.character +'] ' + lint.error,
          messageType: 'error',
          messageVisible: true
        });
        return false;
      } else {
        return true;
      }
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addApi}>
                <div className="form-group">
                  <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default active">Paste JSON</button>
                    <button type="button" className="btn btn-default disabled" title="the future">Import from file</button>
                    <button type="button" className="btn btn-default disabled" title="the future">Build via tool</button>
                  </div>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Untitled" />                    
                </div>
                <div className="form-group">
                    <textarea rows="10" type="text" className="form-control json-input" id="text" name="text" value={this.state.text} onChange={this.handleInputChange} placeholder="Paste JSON" />
                </div>
                <InputMessage
                  visible={this.state.messageVisible}
                  messageType={this.state.messageType}
                  message={this.state.message} />
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Create your API</button>
                </div>
            </form>
        )
    }
})

module.exports = AddApi;