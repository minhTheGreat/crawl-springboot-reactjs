import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as AuthAction from '../../actions/userActions';
import LoginForm from './LoginForm';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isEmailCorrect:true,
      isPasswordCorrect:true
    }
  }

  onValidation= (username,password)=>{
    let usernamePatt= /^[\w@.+-]{4,20}$/;
    if(password.length >= 6 && usernamePatt.test(username)){
       this.setState({isPasswordCorrect:true})
       this.setState({isEmailCorrect:true})
      
        this.props.actions.login(username, password)
      
    }
    if(password.length<6){
      console.log('NOT CORRECT')
      this.setState({isPasswordCorrect:false})
    }else {
      this.setState({isPasswordCorrect:true})
    }
    if(!usernamePatt.test(username)){
      this.setState({isEmailCorrect:false})
    }else{
      this.setState({isEmailCorrect:true})
    }
  }
  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  handleSubmit = async values => {
    const { username, password } = values
    
  await  this.onValidation(username,password)
  
  }

  render() {
    const {  loginFailed } = this.props
    const {isEmailCorrect,isPasswordCorrect}=this.state;
    return (
      <div className="form">

          <LoginForm
            isEmailCorrect={isEmailCorrect}
            isPasswordCorrect={isPasswordCorrect}
            isLoginFailed={loginFailed}
            onSubmit={(values) => {
              this.handleSubmit(values)
            }}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loginFailed: state.authentication.loginFailed,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AuthAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
