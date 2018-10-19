import React, {Component} from "react";
import '../css/home.css'
import AddChilsDetails from './details.js'
class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={
            visibility:"hidden",
        }
    }

    addChildDisplay=()=>{
        this.setState({
            visibility:"visible"
        })
    }
    render(){
        return(
            <div>
                
                <h1>Welcome</h1>
                <h3>{this.props.location.state.firstname} {this.props.location.state.lastname}</h3>
                <AddChilsDetails visible = {this.state.visibility} />
                <AddButton addChildDisplay={this.addChildDisplay}/>
            </div>
        )
    }
};     


class AddButton extends Component{
    render(){
        return(
            <div id="addChild">
                <button id="adddiscript" onClick={this.props.addChildDisplay}>+</button>
            </div>
        )
    }
}

export default HomePage;