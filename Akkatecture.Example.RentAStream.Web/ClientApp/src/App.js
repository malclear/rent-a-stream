import React, { Component } from 'react';
import {Route, Redirect } from 'react-router-dom';
import { Layout } from './components/Layout';
import { UserMovies } from './components/UserMovies';
import { Account } from './components/Account';
import { Login } from './components/Login';
// import { Admin } from './components/Admin';
// import { FetchData2 } from './components/FetchData2';
import './custom.css'

window.$userId = '';
window.$authenticated = false;

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
          <Route exact path="/" render={() => (<UserMovies />)}/>
          <Route path='/account' render={() => (
              isLoggedIn() ? (
                  <Redirect to="/login"/>
              ) : (
                  <Account />
              )
          )}/>
          <Route path='/login' render={() => (
              <Login/>
          )}/>
        {/*<Route path='/fetch-data' component={FetchData2} />*/}
        {/*<Route path='/admin' component={Admin} onEnter={requireAuth} />*/}
      </Layout>
    );
  }
}

function isLoggedIn() {
    debugger;
    return window.$authenticated;
}
