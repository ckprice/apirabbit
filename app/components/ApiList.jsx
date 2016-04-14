var React = require("react");
var ApiInfo = require("./ApiInfo.jsx")
var AddApi = require("./AddApi.jsx");

var ApiList = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddApi />
                </div>
                <div className="col-md-6">
                    {
                        this.props.apis.map(function(s,index){
                            return(
                                <ApiInfo info={s} key={"api"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});

module.exports = ApiList;