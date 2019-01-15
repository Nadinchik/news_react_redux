import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as signUpActions from "../../redux/actions/signUp";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      username: '',
      password: '',
      isLoading: false
    };
  }

  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = () =>{
    const user = {
      fullName: this.state.fullName,
      username: this.state.username,
      password: this.state.password,
    };
    this.props.signUpRequest({ user });
  };

  render() {
    const {fullName, username, password, isLoading} = this.state;
    return (
      <div className='thead-light'>
        <div className="LinkGoBack">
          <Link to="/">Назад</Link>
        </div>
        <div className='formAuth mx-auto'>
          <div className='card-title'>
            REGISTER
          </div>
          <div className='auth'>
            <form method="post">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control username"
                  id="formGroupExampleInput"
                  placeholder="Full name"
                  value={fullName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control username"
                  id="formGroupExampleInput"
                  value={username}
                  onChange={this.handleChange}
                  placeholder="Username/email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Password</label>
                <input
                  type="password"
                  name='password'
                  className="form-control password"
                  id="formGroupExampleInput2"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </div>
              <div className='btn-group'>
                <button
                  className='btn-primary'
                  onClick={this.onSubmit}
                  disabled={isLoading}
                >
                  Sign In
                </button>
                <button className='btn btn-outline-secondary'>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: (fullName, username, password) => dispatch(signUpActions.signUpRequest(fullname, username, password))
});

export default connect(null, mapDispatchToProps)(Registration);