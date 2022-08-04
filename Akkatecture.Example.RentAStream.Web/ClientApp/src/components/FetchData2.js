import React, { Component } from 'react';

export class FetchData2 extends Component {
  static displayName = FetchData2.name;

  constructor(props) {
    console.log('... in ctor(props)!!!');
    super(props);
    this.state = { user: {}, loading: true };
  }

  componentDidMount() {
    this.getUser(); 
  }

  static renderUsersTable(user) {
      console.log(user);
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>User</th>
            <th>Balance</th>
         </tr>
        </thead>
        <tbody>
            <tr key={user.userid}>
              <td>{user.username}</td>
              <td>{user.totalDue}</td>
           </tr>
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData2.renderUsersTable(this.state.user);
      
    return (
      <div>
        <h1 id="tabelLabel" >User list</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async getUser() {
    const response = await fetch('user');
    const data = await response.json();
    this.setState({ user: data, loading: false });
  }
}
