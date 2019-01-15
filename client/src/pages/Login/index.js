import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {authorize} from "../../redux/actions/auth";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  onSubmit = () => {
    const {username, password} = this.state;
    this.props.authorize(username, password);
  };

  render() {
    const {username, password, isLoading} = this.state;
    console.log('this.state -->', this.state);

    return (
      <div className='thead-light'>
        <div className="LinkGoBack">
          <Link to="/">Назад</Link>
        </div>
        <div className='formAuth mx-auto'>
          <div className='card-title'>
            LOGIN
          </div>
          <div className='auth'>
            <form action="/login" method="post">
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
                  name="password"
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
                  Login
                </button>
                <Link to="/signUp">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  error: state.authReducer.error
});

const mapDispatchToProps = {
  authorize,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);