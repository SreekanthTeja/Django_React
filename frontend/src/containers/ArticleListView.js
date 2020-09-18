import React from 'react';
import Articles from '../components/Article';
import axios from 'axios';
import CustomForm from '../components/Form';


class ArticleList extends React.Component{
    state={
        posts:[]
    };
    componentDidMount(){

        axios.get('http://127.0.0.1:9000/api/')
            .then(res => {
                this.setState({
                    posts: res.data
                });
                

            })  
    }
    render() {
        return(
            <div>
                <Articles data={this.state.posts} />
                <br/>
                <h2>Create Posts</h2>
                <CustomForm
                    requestType="post"
                    articleID={null}
                    btnText="Create"/>
            </div>

        );
    }
}
export default ArticleList;
