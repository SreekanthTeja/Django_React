import React from 'react';
import axios from 'axios';
// import { Form, Input, Button } from "antd";
// const FormItem = Form.Item;
class CustomForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            content:'',
        }
    }
    changeHandler= (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit= (event,requestType,articleID) =>{
        event.preventDefault()
        console.log(this.state)
        const title =event.target.elements.title.value;
        const content =event.target.elements.content.value;
        switch(requestType) {
            case 'post' :
                return axios.post('http://127.0.0.1:9000/api/',{
                    title:title,
                    content:content,
                })
                .then(res => console.log(res))
                .catch(error=> console.error(error));
                
            case 'put' :
                return axios.put(`http://127.0.0.1:9000/api/${articleID}/`,{
                    title:title,
                    content:content,
                })
                .then(res => console.log(res))
                .catch(error=> console.error(error));
                
        }
    }
    

    

    render(){
        const {title,content}=this.state
        return(
            <div>
                
                <form onSubmit={(event) => this.handleSubmit(event,
                    this.props.requestType,
                    this.props.articleID)}>
                    <div>
                        <label>Title:</label>

                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Content:</label>
                        <input type="text" name="content" value={content} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <button type="submit" >{this.props.btnText}</button>
                    </div>
                </form>



            </div>


                
                


        );
    }
}
export default CustomForm;