import React, {Component} from "react";
import '../css/home.css'
import AddChilsDetails from './details.js'
import CardsForMissingChild from './cards.js'
import {Link} from 'react-router-dom';
import axios from 'axios'


class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={
            visibility:"none",
            file: null,
            missingChildName: '',
            Description:'',
            displaycard:"block",
        }
    }

     addChildDisplay=()=>{
        this.setState({
            visibility:"block", displaycard:"none"
        })
    }
    
   
    fileChangedHandler = (event) => {
        this.setState({
            file: event.target.file,
            [event.target.name]:event.target.value,

        })
        console.log(event.target.value);
      }
      
    postData=()=>{
        this.setState({
            visibility:"none",
            displaycard:"block"
        })
  
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('missingChildName', this.state.missingChildName);
        formData.append('Description', this.state.Description);

        axios.post('https://missingchild.herokuapp.com/create/missingChildren/details', formData)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        });
    }

    render(){
        return(
            <div>
               <nav className ="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="">MissingChild</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="">Home</a></li> 
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <li className="active"><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li className="active"><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
                </nav>         
                <h1 className="missingChildHeading">Missing Child</h1>
                <AddChilsDetails {...this.state} {...this.props} postData={this.postData} fileChangedHandler={this.fileChangedHandler}/>
                <CardsForMissingChild displaycard={this.state.displaycard}/>
                <AddButton addChildDisplay={this.addChildDisplay}/>
            </div>
        )
    }
};     


class AddButton extends Component{
    render(){
        return(
            <div id="addChild">
                <button type="button" class="btn btn-warning btn-circle btn-xl"  onClick={this.props.addChildDisplay}>+</button>
            </div>
        )
    }
}

export default HomePage;