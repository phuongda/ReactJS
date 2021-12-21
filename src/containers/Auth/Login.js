import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-container'>
                <div className='box-login'>
                    <h3 className='col-12 text-title-login'>Login</h3>
                    <div className="col-12 form-group">
                        <label for="username">Email:</label>
                        <input type="text" className="form-control" placeholder="Enter your username" name="username" />
                    </div>
                    <div className="col-12 form-group">
                        <label for="password">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter your password" name="password" />
                    </div>
                    <div className="col-12 form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <div className="col-12 form-group text-center">
                        <a href='#'>Forgot your password!</a>
                    </div>
                    <div className="col-12 form-group">
                        <div className='divider'><span>Or login with</span></div>
                    </div>
                    <div className="col-12 form-group d-flex justify-content-center">
                        <a className="btn-social-login facebook"><i class="fab fa-facebook-f"></i></a>
                        <a className="btn-social-login twitter"><i class="fab fa-twitter"></i></a>
                        <a className="btn-social-login google"><i class="fab fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
