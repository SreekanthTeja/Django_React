import React from 'react';
import axios from 'axios';

import { Card } from 'antd';
import CustomForm from "../components/Form";


class ArticleDetail extends React.Component {
    state={
        post:{}
    };
    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:9000/api/${articleID}`)
            .then(res => {
                this.setState({
                    post: res.data
                });
                // console.log(res.data);

            })  
    }
    render() {
        return(
            <Card title={this.state.post.title}>
                <p>{this.state.post.content}</p>
                <br/>
                <CustomForm
                    requestType="put"
                    articleID={this.props.match.params.articleID}
                    btnText="Update"/>
            </Card>
        );
    }

}
export default ArticleDetail;