import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Main from "./containers/Main/Main";
import Toolbar from "./components/UI/Toolbar/Toolbar";

function App() {
    return (
        <>
            <Toolbar/>
            <Switch>
                <Route path='/' component={Main}/>
            </Switch>
        </>
    );
}

export default App;
