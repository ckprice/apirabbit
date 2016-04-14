var React = require("react");
var actions = require("../actions/ApiActions");

var AddApi = React.createClass({
    getInitialState:function(){
      return {
          name:"Untitled",
          text:""
      }  
    },
    addApi:function(e){
        e.preventDefault();
        actions.addApi(this.state);
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
                    <input type="text" className="form-control" id="text" name="text" value={this.state.address} onChange={this.handleInputChange} placeholder="Paste JSON" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add API</button>
                </div>
            </form>
        )
    }
})

module.exports = AddApi;