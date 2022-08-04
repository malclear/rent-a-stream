import React, {Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;
    
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        window.$authenticated = false;
        window.$authenticated = '';
        return (<div>Hello Login!</div>);
    }
    
    componentDidMount() { }
}
