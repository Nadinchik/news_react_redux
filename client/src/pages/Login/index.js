import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {GoogleLogin} from 'react-google-login';

import * as loginActions from "../../redux/actions/login";
// import {PostData} from "../../components/services/PostData";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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

  componentDidMount() {
    localStorage.getItem('idUser');
    console.log(' mount-->', localStorage.getItem('idUser'));
    fetch('/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(result => {
        return result.data});
    // this.setState({ });
  };

  // signup = (res, type) => {
  //   let postData;
  //   if (type === 'google' && res.w3.username) {
  //     postData = { fullName: res.w3.ig, provider: type, username: res.w3.u3, provider_id: res.EL}
  //   }
  //   PostData('signUp', postData).then((result) => {
  //     let responseJson = result;
  //     if (responseJson.data) {
  //       sessionStorage.setItem('users', JSON.stringify(responseJson));
  //       this.setState({redirect: true});
  //     }
  //   })
  // };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };


  render() {
    // console.log('isLoggedLogin -==> ', this.props.isLogged);
    // const { isLogged } = this.props;
    const {username, password, isLoading} = this.state;
    const responseGoogle = (response) => {
      console.log(response);
    };

    return (
      <div className='thead-light'>
        <div className="LinkGoBack">
          <Link to="/news">Назад</Link>
        </div>
        <div className='formAuth mx-auto'>
          <div className='card-title'>
            LOGIN
          </div>
          <div className='auth'>

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
            {/*{isLogged ? 'Успешно' : 'Неверно введены данные!'}*/}
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