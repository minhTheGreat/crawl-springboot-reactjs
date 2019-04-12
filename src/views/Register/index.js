import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as AuthAction from '../../actions/userActions';
import RegisterForm from './RegisterForm';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      username: '',
      email: '',
      password: '',
      isUsernameCorrect: true,
      isPasswordCorrect: true
    }

  }
  handleChange = (name, value) => {

    this.setState({ [name]: value })
  }
  
  onValidation = (name,username,email, password) => {
    let usernamePatt = /^[\w+-@.]{4,30}$/;
    if (password.length >= 6 && usernamePatt.test(username)) {
      this.setState({
        isPasswordCorrect: true,
        isUsernameCorrect: true,
      })

      this.props.actions.register(name,username,email,password)

    }
    if (password.length < 6) {
      console.log('NOT CORRECT')
      this.setState({ isPasswordCorrect: false })
    } else {
      this.setState({ isPasswordCorrect: true })
    }
    if (!usernamePatt.test(username)) {
      this.setState({ isUsernameCorrect: false })
    } else {
      this.setState({ isUsernameCorrect: true })
    }
  }
  handleSubmit = async (values) => {
    const { name, username, password, email } = values;
    await this.onValidation(name, username, email, password)
  }
  render() {
    const { registerFailed,err } = this.props;
    const { isPasswordCorrect, isUsernameCorrect } = this.state
    return (
      <div>


        <RegisterForm
          isPasswordCorrect={isPasswordCorrect}
          isUsernameCorrect={isUsernameCorrect}
          isRegisterFailed={registerFailed}
          err={err}
          onSubmit={(values) => {
            this.handleSubmit(values)
          }}

        />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  registerFailed: state.authentication.registerFailed,
  err: state.authentication.err
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AuthAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
