import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Link } from 'react-router-dom';

import validate from './RegisterFormValidation';
import TextField from '../elements/TextField';
import Label from '../elements/Label';

const RegisterForm = ({ handleSubmit, isRegisterFailed, isUsernameCorrect, isPasswordCorrect, err }) => (
  <form onSubmit={(e) => handleSubmit(e)}>
    <div className="col-12 col-md-6 col-lg-4" style={{ margin: '10em auto' }}>
      <div className="newsletter-widget" style={{ padding: '2em', borderRadius: '1em' }}>

        <h2 className="panel-title"  style={{ textAlign: 'center',color:'white',padding:'1em 0' }}>
          Sign Up
            </h2>

        <fieldset>
          <div className="form-group">
            <div className="input-group input-group-lg">
              <Field component={TextField}

                name="name" type="text"
                className="form-control"
                placeholder="NAME"
                style={{width:'26em'}}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group input-group-lg">
              <Field component={TextField}

                name="username" type="text"
                className="form-control"
                placeholder="USERNAME"
                style={{width:'26em'}}
              />
              {isUsernameCorrect ? (<span></span>) : (<span>Username is invalid (must be 4-30 characters)</span>)}
            </div>
          </div>
          <div className="form-group">
            <div className="input-group input-group-lg">
              <Field
                component={TextField}

                name="email"
                type="email"
                className="form-control"
                placeholder="EMAIL"
                style={{width:'26em'}}
              />

            </div>
          </div>
          <div className="form-group">
            <div className="input-group input-group-lg">
              <Field
                component={TextField}

                name="password"
                type="password"
                className="form-control"
                placeholder="PASSWORD"
                style={{width:'26em'}}
              />
              {isPasswordCorrect ? (<span></span>) : (<span>Password must be at least 6 characters</span>)}
            </div>
          </div>


          <input
            className="btn w-100"
            type="submit"
            value="Sign Me Up"
            style={{background:'#228B22',color:'white',padding:'0.6em'}} />
          {isRegisterFailed ? <span style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Register fail (Change your email or username )</span> : <span></span>}
        </fieldset>

        <p className="m-b-0 m-t" style={{color:'#76EE00'}}>Already signed up? <Link to="/login" style={{color:'white'}}>Login here</Link>.</p>


      </div>
    </div>
  </form>
)
export default reduxForm({
  form: 'register',
  validate

})(RegisterForm)