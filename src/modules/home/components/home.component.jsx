require('../scss/home.scss');
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
            <section className="section-home">
                <ul className="list-updates">
                    <li>
                        <div className="title alert">
                            <span>%site.name% is reported to be operational once again</span>
                            <div className="hamburger">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="content">

                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}