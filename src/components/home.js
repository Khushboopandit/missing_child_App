import React, {Component} from "react";

class HomePage extends Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <h3>{this.props.location.state.firstname} {this.props.location.state.lastname}</h3>
            </div>
        )
    }
};

export default HomePage;