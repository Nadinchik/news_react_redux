import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        console.log('handleEmailChange', this);
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form submitted and email value is', this.state.email);
    }

    render() {
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
                                <input type="text" className="form-control username" id="formGroupExampleInput" placeholder="First name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Last name</label>
                                <input type="text" className="form-control username" id="formGroupExampleInput" placeholder="Last name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Username</label>
                                <input type="text" className="form-control username" id="formGroupExampleInput" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Password</label>
                                <input type="password" className="form-control password" id="formGroupExampleInput2" placeholder="Password" />
                            </div>
                            <div className='btn-group'>
                                <input type="submit" className='btn btn-primary' value="Register"/>
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