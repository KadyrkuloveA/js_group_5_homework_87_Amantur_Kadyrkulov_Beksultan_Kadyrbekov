import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Main from "./containers/Main/Main";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import AddPost from "./containers/AddPost/AddPost";
import PostPage from "./containers/PostPage/PostPage";

function App() {
    return (
        <>
            <Toolbar/>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/add-post' exact component={AddPost}/>
                <Route path='/post-page/:postId' exact component={PostPage}/>
            </Switch>
        </>
    );
}

export default App;
