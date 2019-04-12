import React, { Component } from 'react'
import TableRow from './table/TableRowUser'
import { connect } from 'react-redux'
import '../../styles/style/main.css';
import { Link, Router } from 'react-router-dom';
import Pagination from '../../pagination/Pagination'
import { actFetchUsersRequest, actDeleteUsersRequest,actFindUserRequest } from '../../actions/managerAction';
export class ManagerUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 1,
      keyword:''
    }
  }
  componentDidMount () {
   this.props.fetchAllUsers(this.state.currentPage-1,5)
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log("nextProps--->", nextProps)
  // }

  onDelete = (id) => {
    this.props.onDeleteUsers(id);
  }
  changeCurrentPage = async (numPage) => {
    await this.setState({ currentPage: numPage });
    await this.props.fetchAllUsers(numPage-1,5);
  }
  onHandleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  onFindUser = (e) => {
    console.log(this.state.keyword)
    e.preventDefault();
    this.props.onFindUser(this.state.keyword);

  }
  render() {
    const {userid}= this.props
    console.log(userid)
    return (
      <div>
        <div className="app-title">
          <div>
            <h1><i className="fa fa-user"></i>&nbsp; Quản lí người dùng</h1>
            <p></p>
          </div>
          <ul className="app-breadcrumb breadcrumb">
            <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
            <li className="breadcrumb-item"><a href="#">User</a></li>
          </ul>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <p className="bs-component ">
              <a href="adduser.html">
                <Link className="btn btn-primary btn-right" to="/manager/user/add">+ Thêm</Link>
              </a>
            </p>
          </div>
          <div className="col-md-12">
            <div className="tile">
            <div className="" style={{ marginBottom: '1.5em' }}>
            <form className="" onSubmit={this.onFindUser}>
              <input
                className="app-search__input"
                type="text"
                placeholder="Search topics or keywords"
                value={this.state.keyword}
                onChange={this.onHandleChange}
                style={{ background: '#ddd' }}
              />
              <button className="app-search__input" type="submit" style={{ background: '#ddd', width: '1em' }}><i className="fa fa-search" /></button>
            </form>
          </div>
          <div style={{ clear: 'both' }}>
          </div>
              <div className="tile-body">
                <table className="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Email</th>
                      <th>Avatar</th>
                      <th>Tên đầy đủ</th>
                      <th>Ngày sinh</th>
                      <th>Địa chỉ</th>
                      <th>ID</th>
                      <th>Thực hiện</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.tabRow(this.props.users,this.state.currentPage,userid)}
                  </tbody>
               
                </table>
                <Pagination
                currentPage={this.state.currentPage}
                totalPages={this.props.totalPages}
                changeCurrentPage={this.changeCurrentPage}
                theme="default"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  tabRow(users,currentPage,userid) {
    return users.map((object, i) => {
      return <TableRow obj={object} key={i} index={i+(currentPage-1)*5} onDelete={this.onDelete} userid={userid} />
    })
  }
}

const mapStateToProps = state => {

  return {
    users: state.users.users,
    totalPages: state.users.totalPages,
    userid:state.authentication.id
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: (currentPage, size) => {
      dispatch(actFetchUsersRequest(currentPage, size))
    },
    onDeleteUsers: (id) => {
      dispatch(actDeleteUsersRequest(id))
    },
    onFindUser: (keyword)=>{
      dispatch(actFindUserRequest(keyword))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerUser)
