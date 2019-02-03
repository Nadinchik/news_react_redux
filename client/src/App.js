import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import News from './pages/News';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Registration from './pages/Registration';


class App extends Component {
  render() {
    const { isLogged } = this.props;
    if (isLogged) {
      return (
        <Switch>
          <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={Registration} />
          <Redirect to="/news" />
        </Switch>
      );
    }
    return (
      <Switch>
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={Registration} />
        <Redirect to="/news" />
      </Switch>
    );

  }
}

const mapStateToProps = (state) => ({ isLogged: state.loginReducer.isLogged });

export default withRouter(connect(mapStateToProps)(App));
