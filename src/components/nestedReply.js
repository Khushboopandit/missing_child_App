import React, { Component } from 'react';
import '../css/home.css';

class NestedReply extends Component {
    state = {
        comments:[],
        comInput: '',
    }

    commentField = (e) => {
        this.setState({ comInput: e.target.value })
    }

    addComment=(e)=>{
        if (e.charCode == 13) {
        let comments = this.state.comments;
        comments.push(this.state.comInput)
        console.log(comments)
       }
    }
   
  render() {
    return (
      <div className="nestedReply" style={{ display: this.props.displayNestedReply}}>
        <ul>
            {this.state.comments.map((comment, i)=>
                    <li Key={i}>{comment}<br></br></li>
                    )
                }
            </ul>
            <input className="form-control" type="text" placeholder="Write a comment" value={this.state.comInput} onChange={this.commentField} onKeyPress={this.addComment}/>
            {/* <button onClick={this.addComment}>send</button> */}
      </div>
    );
  }
}

export default NestedReply;
