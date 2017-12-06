import React from 'react';
import SiteListElement from './sites.listelement.component.jsx';

export default class SiteList extends React.Component {

    constructor(){
        super();
        this.setDefaultStates();
    }

    setDefaultStates(){
        this.state = {sites:[{id:1, name:'hello', site_url:'google'}]};
    }

    addChild(child){
        this.setState((prevState) => ({
            sites: prevState.sites.concat([child])
        }));
    }

    // function updateState(obj){
    //     if(obj.sites){
    //
    //     }
    // }

    render() {
        return (
            <section class="site-list">
                <ul>
                {
                    this.state.sites.map((item) => (
                        <SiteListElement key={item.id} url={item.id} name={item.name}>Hi :D</SiteListElement>
                    ))
                }
                </ul>
            </section>
        );
    }
}