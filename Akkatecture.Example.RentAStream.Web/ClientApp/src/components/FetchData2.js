import React, { Component } from 'react';

export class FetchData2 extends Component {
  static displayName = FetchData2.name;

  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    this.getUser(); 
  }

  static renderUsersTable(users) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>User</th>
            <th>Balance</th>
         </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.total_due}</td>
           </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData2.renderUsersTable(this.state.users);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async getUser() {
    const response = await fetch('user/3ccd9aa0-8a83-41dd-a0c4-955e6f32f4cd');
    const data = await response.json();
    this.setState({ users: data, loading: false });
  }
}
