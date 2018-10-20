import React, {Component} from "react";
import '../css/home.css'
import axios from 'axios'

class AddChilsDetails extends Component{
    constructor() {
        super()
            this.state={
                missingChildName: '',
                Description:'',
                file: [],
            }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value       
         })
    }

    postData=(e)=>{
        const missingChildName = this.state.missingChildName	
        const Description = this.state.Description
        const file = this.state.file

        const data = {
            missingChildName,
            Description,
            file
        }
        console.log(data);
        
        axios.post('https://missingchild.herokuapp.com/create/missingChildren/details', data)
        .then(res=>{
            console.log(res);
            this.setState({
                message:res.data,
            });
        })
        .catch(err=>{
            console.log(err);
        });
    }

    render(){
        return(
            <div id="addchildDetails" style={{visibility:this.props.visible}}>
                <div className="imagePost">
                    <input type="file" value={this.state.file} name="file" className="postImageBtn"/>
                </div>
                <label className="missingChildLabel">
                    missingChildName
                </label>
                <input type="text" placeholder="enter name" name="missingChildName" className="child-name" value={this.state.missingChildName} onChange={this.inputHandler} /> 
                <label className="missingChildLabel">
                    Description
                </label>
                <textarea type="text" placeholder="enter description" name="Description" className="child-des" value={this.state.Description} onChange={this.inputHandler} />
                <div>
                <button className="submitDetails" onClick={this.postData} onClick={this.props.afterDesSubmit}>Submit</button>
                </div>
            </div>
        )
    }
};     

export default AddChilsDetails;