import React from 'react';

export default class Home extends React.Component {

    constructor(props){
        super();
        this.setDefaultStates(props);
    }

    setDefaultStates(props){

    }

    render() {
        console.log(this.props.match.params);
        console.log(this.props.match.params.id);
        var id = this.props.match.params.id || 'unknown';
        return (
            <section>
                <h1>Hello { id } :D</h1>
            </section>
        );
    }
}