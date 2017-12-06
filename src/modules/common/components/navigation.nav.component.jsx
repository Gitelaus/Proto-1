require('../scss/navigation.scss');
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Navigation extends React.Component {

    constructor(props){
        super();
        this.setDefaultStates(props);
    }

    setDefaultStates(props){

    }

    render() {
        return (
            <section id="navigation">
                <ul>
                    <li>
                        <Link to="hello">Jellos</Link>
                    </li>
                    <li>
                        <Link to="llo">Jellos</Link>
                    </li>
                    <li>
                        <Link to="hel">Jellos</Link>
                    </li>
                </ul>
            </section>
        );
    }
}