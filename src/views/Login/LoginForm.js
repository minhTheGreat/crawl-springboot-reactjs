import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import validate from './LoginFormValidation';
import TextField from '../elements/TextField';
import Label from '../elements/Label';
import Button from '../elements/Button';
import '../../styles/style/style.css';

const LoginForm = ({ handleSubmit, isLoginFailed, isEmailCorrect, isPasswordCorrect }) => (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="col-12 col-md-6 col-lg-4" style={{margin:'10em auto'}}>
            <div className="newsletter-widget" style={{padding:'2em',borderRadius:'1em'}}>
                <h2 className="panel-title" style={{ textAlign: 'center',color:'white',padding:'1em 0' }}>Login</h2>
                <fieldset>
                    <div className="form-group">
                        <div className="input-group input-group-lg" >
                           
                            <Field component={TextField}
                                isError={isLoginFailed}
                                name="username"
                                type="text"
                                className="form-control"
                                placeholder="USERNAME"
                                style={{width:'26.5em'}}
                            />
                            {isEmailCorrect ? (<span></span>) : (<span>Email is invalid</span>)}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group input-group-lg">
                          
                            <Field component={TextField}
                                isError={isLoginFailed}
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="PASSWORD"
                                style={{width:'26.5em'}}
                            />
                            {isPasswordCorrect ? (<span></span>) : (<span>Password must be at least 6 characters</span>)}
                        </div>
                    </div>

                    <input
                        className="btn w-100"
                        style={{background:'#228B22',color:'white',padding:'0.6em'}}
                        type="submit"
                        value="LOGIN"
                    />
                    {isLoginFailed ? <span style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>login fail</span> : <span></span>}
                </fieldset>

                <p className="m-b-0 m-t" style={{color:'#76EE00'}}>
                    Not signed up ? <Link to="/register" style={{color:'white'}}>Sign up here</Link>.
                            </p>
            </div>
        </div>

    </form>


)
export default reduxForm({
    form: 'login',
    validate,

})(LoginForm)