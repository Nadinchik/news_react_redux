import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";

import News from "./pages/News";
import User from "./pages/User";
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import store from "./store"


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Switch>
                    <Route path='/' exact component={News}/>
                    <Route path = '/User' component = {User} />
                    <Route path='/login' component={Login}/>
                    <Route path='/signIn' component={Registration}/>
                </Switch>
            </Provider>
        );
    }
}

export default withRouter(App);
