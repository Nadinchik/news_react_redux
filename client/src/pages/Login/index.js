import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import * as loginActions from "../../redux/actions/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    const {login} = this.props;
    login(username, password);
    this.setState({
      username:'',
      password:''
    })
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
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
            <form method="post">
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
  error: state.loginReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(loginActions.loginRequest(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);