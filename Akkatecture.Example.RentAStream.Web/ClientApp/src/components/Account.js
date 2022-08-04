import React, { Component } from 'react';

export class Account extends Component {
    static displayName = Account.name;

    constructor(props) {
        super(props);
        debugger;
        this.state = { username: '', balance: 0, amountDue: 0, loading: true};
    }
    
    componentDidMount() {
        this.loadAccount();
    }

    async loadAccount(){
        this.setState( {username: 'malcolm', balance: 0, amountDue: 0, loading: false});
    }
    
    render() {
        return (
            <div>
                <h1>Account</h1>
                <p>This is a simple example of a React component.</p>
                {/*<p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>*/}
                {/*<button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>*/}
            </div>
        );
    }
}
