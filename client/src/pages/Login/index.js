import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import MainLayout from '../../layout/mainLayout';

import * as loginActions from '../../redux/actions/login';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      username: '',
      password: '',
      isLoading: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { login } = this.props;
    login(username, password);
    this.setState({
      username: '',
      password: '',
    });
  };



  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.isLogged !== false && !nextProps.error) {
      this.props.history.push('/news');
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    const { error } = this.props;
    const { username, password, isLoading } = this.state;
    const responseGoogle = (response) => {
      console.log(response);
    };
    return (
      <MainLayout>
        <div className="thead-light">
          <div className="LinkGoBack">
            <Link to="/news">Новости</Link>
          </div>

          <div className="formAuth mx-auto">
            <div className="card-title">
              LOGIN
            </div>
            {error && <div className="alert-danger mb-2">{error}</div>}
            <div className="auth">

              <GoogleLogin
                clientId="932534981003-thcpid6t7bcarjhhbadhh2ctf0tqu93b.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />

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
                    placeholder="Username"
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
                <div className="btn-group">
                  <button
                    className="btn-primary"
                    onClick={this.onSubmit}
                    disabled={isLoading}
                  >
                    Login
                  </button>
                  <Link to="/signUp">Sign Up</Link>
                </div>
              </form>
              {/*{isLogged ? 'Успешно' : 'Неверно введены данные!'}*/}
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.loginReducer.error,
  isLogged: state.loginReducer.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(loginActions.loginRequest(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);