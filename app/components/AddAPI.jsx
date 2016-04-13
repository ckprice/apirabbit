var React = require("react");
var actions = require("../actions/APIActions");

var AddAPI =  React.createClass({
    getInitialState:function(){
      return {
          title: "Untitled",
          text: ""
      }  
    },
    addAPI:function(e){
        e.preventDefault();
        actions.addAPI(this.state);
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
            <form onSubmit={this.addAPI}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="text">JSON</label>
                    <input type="text" className="form-control" id="text" name="text" placeholder="Paste your JSON" value={this.state.text} onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
})


module.exports = AddAPI;