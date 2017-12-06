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
                            <span>Something happened, this is a short summary</span>
                            <i>
                                |||||||||
                            </i>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}