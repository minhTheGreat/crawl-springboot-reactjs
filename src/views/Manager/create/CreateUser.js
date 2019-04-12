import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import { actAddUserRequest, actGetUserRequest, actUpdateUserRequest } from '../../../actions/managerAction';
import DropzoneImg from '../../elements/DropzoneImg';
import { isCollection } from 'immutable';
class CreateUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      txtUsername: '',
      txtPassword: '',
      txtAddress: '',
      sex: "1",
      txtEmail: '',
      fileInput: '',
      txtPhone: '',
      txtBirthday: '',
      txtAvatar: '',
      txtName: '',
      role: 'ROLE_USER',
      isEmailCorrect: true,
      isUsernameCorrect: true,
      isPhoneCorrect: true,
      isAddressCorrect: true,
      isPasswordCorrect: true
    }
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditUser(id);
    }

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      const { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtEmail: itemEditing.email,
        txtAvatar: itemEditing.avatar,
        role: itemEditing.role,
        txtSkill: itemEditing.skill,
        txtUsername: itemEditing.username,
        txtName: itemEditing.name,
        txtAddress: itemEditing.address,
        txtBirthday: itemEditing.birthday,
        txtPhone: itemEditing.mobile
      })
    }
  }
  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })

  }
  onHandleImage = (url) => {
    this.setState({
      txtAvatar: url
    })
    console.log(url)
  }


  onValiations = async (id, user, txtUsername, txtAddress, txtPassword, txtEmail, txtPhone) => {
    const { history } = this.props
    const emailPatt = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const userPatt = /^[\w+.@#$]{4,20}$/;
    const phonePatt = /^[\d+-]{13}$/g;
    const addressPatt = /^[\w+-]{50}$/g;
    const isUserCorrect = userPatt.test(txtUsername);
    console.log(isUserCorrect)
    const isPhoneCorrect = phonePatt.test(txtPhone);
     const isAddressCorrect = addressPatt.test(txtAddress);
    if (isUserCorrect && txtPassword.length >= 6) {
    

      
      await this.setState({ isUsernameCorrect: true, isPasswordCorrect: true,isPhoneCorrect:true,isAddressCorrect:true })
      if (id) {
        this.props.onUpdateUser(id, user);
      } else {
        this.props.onAddUser(user);
      }
      history.goBack()
   
    } else {
      await this.setState({ isUsernameCorrect: false, isPasswordCorrect: false })
    }
    console.log()
  }

  onSave = async (e) => {
    e.preventDefault();
    const { history } = this.props
    const { id, txtEmail, txtPassword, txtAddress, txtName,
      txtUsername, txtPhone, role, txtBirthday, txtSkill, sex, txtAvatar
    } = this.state;
    const user = {
      name: txtName,
      username: txtUsername,
      fullname: txtName,
      email: txtEmail,
      password: txtPassword,
      avatar: txtAvatar,
      mobile: txtPhone,
      address: txtAddress,
      skill: txtSkill,
      roles: role,
      sex: sex,
      birthday: txtBirthday
    }
    await this.onValiations(id, user, txtUsername, txtAddress, txtPassword, txtEmail, txtPhone);




  }

  render() {
    const { id, txtUsername, txtPassword, txtEmail, txtSkill, txtPhone, txtBirthday,
      txtAddress, role, txtName, txtAvatar,
      isAddressCorrect, isEmailCorrect, isPasswordCorrect, isPhoneCorrect, isUsernameCorrect
    } = this.state;
    return (

      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.onSave}>
            <div className="card-header">
              <strong></strong>
            </div>
            <div className="tile">

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <p value={id}></p>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      className="form-control"
                      id="exampleInputEmail1"
                      type="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="txtEmail"
                      value={txtEmail}
                      onChange={this.onChange}
                      required
                    />
                    {isEmailCorrect ? <span></span> : <span>Email is invalid</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      className="form-control"
                      id="exampleInputPassword1"
                      type="password"
                      placeholder="Password"
                      name="txtPassword"
                      value={txtPassword}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  {isPasswordCorrect ? <span></span> : <span>Password at least 6 characters</span>}
                  <div className="form-group">
                    <label htmlFor="exampleSelect1">Quyền</label>
                    <select className="form-control" id="exampleSelect1"
                      onChange={this.onChange} value={role} name="role"
                    >
                      <option selected="selected"></option>
                      <option name="User">ROLE_USER</option>
                      <option name="Admin">ROLE_ADMIN</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea">Kỹ năng</label>
                    <textarea
                      className="form-control"
                      id="exampleTextarea"
                      rows={3}
                      name="txtSkill"
                      value={txtSkill}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputFile">File input</label>
                    
                    <DropzoneImg onHandleAvatar={this.onHandleImage} txtAvatar={txtAvatar} id={id}/>
                  </div>

                </div>
                <div className="col-lg-4 offset-lg-1">
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Username</label>
                    <input
                      className="form-control"
                      id="inputDefault"
                      type="text"
                      name="txtUsername"
                      value={txtUsername}
                      onChange={this.onChange}
                    />
                    {isUsernameCorrect ? null : <span>Username must 4-20 characters</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputName">Họ tên</label>
                    <input
                      className="form-control"
                      id="exampleInputPassword1"
                      type="text"
                      placeholder="Name"
                      name="txtName"
                      value={txtName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Địa chỉ</label>
                    <input
                      className="form-control"
                      id="inputDefault"
                      type="text"
                      name="txtAddress"
                      value={txtAddress}
                      onChange={this.onChange}
                    />
                    {isAddressCorrect ? <span></span> : <span>Address at least 4 characters</span>}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Số điện thoại</label>
                    <input
                      className="form-control"
                      id="inputDefault"
                      type="text"
                      name="txtPhone"
                      value={txtPhone}
                      onChange={this.onChange}
                    />
                    {isPhoneCorrect ? <span></span> : <span>Phone maximum 13 characters</span>}
                  </div>

                  <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Ngày sinh</label>
                    <input
                      type="date"
                      id="actor-input"
                      name="txtBirthday"
                      className="form-control"
                      value={txtBirthday}
                      onChange={this.onChange}

                    />
                  </div>
                </div>
              </div>
              <div className="tile-footer">

                <button
                  type="submit"
                  className="btn btn-success btn-sm"
                >
                  Save
            </button>
                &nbsp;

              &nbsp;
              <Link to="/manager/user">
                  <button className="btn btn-danger btn-sm" type="button">Back</button>
                </Link>
              </div>

            </div>
          </form>
        </div>

      </div>

    )
  }
}
const mapStateToProps = state => ({
  itemEditing: state.itemEditing

})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (user) => {
      dispatch(actAddUserRequest(user));
    },
    onEditUser: (id) => {
      dispatch(actGetUserRequest(id));
    },
    onUpdateUser: (id, user) => {
      dispatch(actUpdateUserRequest(id, user));
    }

  }
}
const CreateUserWithRouter = withRouter(CreateUser);
export default connect(mapStateToProps, mapDispatchToProps)(CreateUserWithRouter)
