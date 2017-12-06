import React from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

require('./common/common.js');

import Navigation from "./common/components/navigation.nav.component.jsx";
import Home from "./home/components/home.component.jsx";


export default class App extends React.Component {

    constructor(){
        super();
        this.hello = "HelloWorld";
        this.state = {sites:[]};
    }

    render() {
        return (
            <HashRouter>
                <main>
                    <Navigation/>
                    <Route exact path='/' component={Home}/>
                </main>
            </HashRouter>
        );
    }
}