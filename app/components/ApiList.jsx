var React = require("react");
var ApiInfo = require("./ApiInfo.jsx")
var AddApi = require("./AddApi.jsx");

var ApiList = React.createClass({
   render:function(){
       return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <AddApi />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.props.apis.map(function(s,index){
                                return(
                                    <ApiInfo info={s} key={"api"+index} />
                                )         
                            })
                        }
                    </div>
                </div>
            </div>
       )
   } 
});

module.exports = ApiList;