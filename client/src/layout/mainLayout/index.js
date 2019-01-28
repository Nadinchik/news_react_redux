import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../redux/actions/login';
import { Link } from 'react-router-dom';

class MainLayout extends Component {

  onLogOut = () => {
    const { logout } = this.props;
    logout();
  };

  componentDidMount() {
    const id = localStorage.getItem('idUser');
    const { onGetUser } = this.props;
    onGetUser(id);
  }


  render() {
    const { isLogged, children } = this.props;
    console.log('isLogged -==> ', isLogged);
    return (
      <div className="page">
        <div className="header d-flex">

          <ul className="d-flex mr-5">
            {
              !isLogged && <li className="mr-3"><Link to="/login">Login</Link></li>
            }
            {
              isLogged && <li className="mr-3"><Link to="/profile">Profile</Link></li>
            }
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
          {
            isLogged &&
            <div className="btn-group">
              <button
                className="btn-primary"
                onClick={this.onLogOut}
              >
                LogOut
              </button>
            </div>
          }

        </div>
        <div className="content">
          {children}
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }

}

export default connect(state => ({
  authUser: state.loginReducer.userData,
  isLogged: state.loginReducer.isLogged,
}), dispatch => ({
  logout: () => dispatch(loginActions.logOut()),
  onGetUser: (id) => dispatch(loginActions.getUserByIdRequest(id)),
}))(MainLayout);
