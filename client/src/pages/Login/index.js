import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            isLoading: false
        };
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = (e) =>{
        e.preventDefault();
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

export default Login;