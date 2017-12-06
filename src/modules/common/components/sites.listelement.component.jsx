require('../scss/sites.scss');
import React from 'react';

export default class SiteListElement extends React.Component {

    constructor(props){
        super();
        this.setDefaultStates(props);
    }

    setDefaultStates(props){
        this.state = {name:props.name || 'Site Name', site_url:props.url || 'www.google.com'};
    }

    render() {
        return (
            <li class="site-element">
                <span className="name">{ this.state.name }</span>
                <span className="url">{ this.state.site_url }</span>
                <div className="healthbar">
                    <div className="downtime">

                    </div>
                </div>
            </li>
        );
    }
}