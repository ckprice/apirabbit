var React = require("react");
var actions = require("../actions/ApiActions");
var InputError = require("./InputError.jsx");
var JSONLint = require('json-lint');

var AddApi = React.createClass({
    getInitialState:function(){
      return {
          name:"Untitled",
          text:"",
          errorMessage: "Input is invalid",
          errorVisible: false
      }  
    },
    addApi:function(e){
        e.preventDefault();
        this.setState({
          errorMessage: '',
          errorVisible: false
        });
        if (this.validateJSON()) {
          actions.addApi(this.state);
        }
    },
    validateJSON:function(){
      // Run the JSON string through the linter 
      console.log('linting + ' + this.state.text)
      var lint = JSONLint( this.state.text );
        
      // Do something with the error 
      if ( lint.error ) {
        // Error Message lint.error 
        // Line number in json file where error was found lint.line; 
        // Character of line in json file where error was found lint.character;
        console.log('[' + lint.line + ':' + lint.character +'] ' + lint.error);
        this.setState({
          errorMessage: '[' + lint.line + ':' + lint.character +'] ' + lint.error,
          errorVisible: true
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
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Untitled" />                    
                </div>
                <div className="form-group">
                    <textarea rows="10" type="text" className="form-control json-input" id="text" name="text" value={this.state.text} onChange={this.handleInputChange} placeholder="Paste JSON" />
                </div>
                <InputError 
                  visible={this.state.errorVisible} 
                  errorMessage={this.state.errorMessage} />
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        )
    }
})

module.exports = AddApi;