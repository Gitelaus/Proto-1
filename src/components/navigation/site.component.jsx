import React from 'react';

export default class Site extends React.Component {

    render(props) {
        console.log(props);
        return (
            <b>{ Math.random() }</b>
        );
    }
}