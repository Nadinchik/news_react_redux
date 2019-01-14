import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {authorize} from "../../redux/actions/auth";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      identifier: '',
      password: '',
      isLoading: false
    };
  }

  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = () =>{
    const {identifier, password} = this.state;
    this.props.dispatch(authorize(identifier, password));
  };

  render() {
    const {firstName, lastName, identifier, password, isLoading} = this.state;
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
            <form action="/registration" method="post">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">First name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control username"
                  id="formGroupExampleInput"
                  placeholder="First name"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control username"
                  id="formGroupExampleInput"
                  placeholder="Last name"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Username</label>
                <input
                  type="text"
                  name="identifier"
                  className="form-control username"
                  id="formGroupExampleInput"
                  value={identifier}
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

export default Registration;