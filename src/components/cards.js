import React, { Component } from 'react';
import '../css/home.css';
import data from './data.json';
import Popup from "reactjs-popup";
import NestedReply from "./nestedReply.js"

class CardsForMissingChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            child: null,
        }

    }
    openModal = (child) => {
        this.setState({ open: true, child: child })
    }
    closeModal = () => {
        this.setState({ open: false, child: null })
    }

    render() {
        return (

            <div id="desBox" style={{ display: this.props.displaycard }}>
                <div className="row">
                    {
                        data.map((child, i) => {
                            return (<div className="col-md-3">
                                <div className="card" key={i} onClick={() => this.openModal(child)}>
                                    <div className="box">
                                        <div className="img">
                                            <img src={child.childImage} />
                                        </div>
                                        <h2>{child.childName}<br /><span>Missing Child</span></h2>
                                        <p>{child.childDescrip}</p>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    {
                        () => {
                            return <div>
                                <a onClick={this.closeModal}>
                                    &times;
                                </a>
                                <FullcardWithDetail child={this.state.child} />
                            </div>
                        }
                    }
                </Popup>
            </div>
        );
    }
}

class FullcardWithDetail extends Component {
    state = {
        comments:[],
        comInput: '',
        displayNestedReply:"none",
    }

    commentField = (e) => {
        this.setState({ comInput: e.target.value })
    }
    addComment=()=>{
        let comments = this.state.comments;
        comments.push(this.state.comInput)
        console.log(comments)
        this.setState({comInput:''})
        this.forceUpdate()
    }
   

    nestedReply=()=>{
        this.setState({displayNestedReply:"block"})
    }

    render() {
        return (
            <div className="row fullCards">
                <div className="col-md-12">
                    <div className="card">
                        <div className="box">
                            <div className="img">
                                <img src={this.props.child.childImage} />
                            </div>
                            <h2>{this.props.child.childName}</h2>
                            <p>{this.props.child.childDescrip}</p>       
                        </div>
                        <div className="position-fixed">
                        <ul>
                            {this.state.comments.map((comment, i)=>
                                    <li key={i}><b>{comment}</b><br></br><li className="text-sm-left" onClick={this.nestedReply}>reply<br></br><NestedReply displayNestedReply={this.state.displayNestedReply}/></li></li>
                                    )
                                }
                            </ul>
                            <div class="input-group input-margin">
                                <input class="form-control" type="text" placeholder="Write a comment" value={this.state.comInput}  onChange={this.commentField}/>
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-default " onClick={this.addComment}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default CardsForMissingChild;
