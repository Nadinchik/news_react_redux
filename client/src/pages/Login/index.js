import React,  { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../redux/actions/auth";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            isLoading: false
        };
    }

    handleChange = (input, value) =>{
        this.setState({ [input]: value });
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({isLoading: true});
    };

    render() {
        const {identifier, password, isLoading} = this.state;
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
                        <form action="/login" method="post" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Username</label>
                                <input
                                    type="text"
                                    name="identifier"
                                    className="form-control username"
                                    id="formGroupExampleInput"
                                    value={identifier}
                                    onChange={this.handleChange(identifier)}
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
                                    onChange={this.handleChange(password)}
                                    placeholder="Password"
                                />
                            </div>
                            <div className='btn-group'>
                                <button
                                    className='btn-primary'
                                    disabled={isLoading}
                                >
                                    Login
                                </button>
                                <Link to="/registration">Sign In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, {login: auth})(Login);