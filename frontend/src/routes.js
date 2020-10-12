import React from 'react'
import {Route} from 'react-router-dom';
import ArticleList from './containers/ArticleListview';
import ArticleDetail from './containers/PostDetailview';
const BaseRouter =() =>(
    <div>
        <Route exact path='/' component={ArticleList}></Route>
        <Route exact path='/:articleID' component={ArticleDetail}></Route>
    </div>

);


export default BaseRouter;