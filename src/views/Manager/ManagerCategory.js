import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CategoryAction from '../../actions/categoryAction'
import Pagination from '../../pagination/Pagination'
import TableRowCate from './table/TableRowCate'
export class ManagerCategory extends Component {
  constructor(props) {
    super(props)
    this.state={
      currentPage:1,
      keyword:'',
    }
  }
  componentDidMount(){
    this.props.actions.actFetchCategory(0,10)

  }
  changeCurrentPage = async (numPage) => {
    await this.setState({ currentPage: numPage });
    await this.props.actions.actFetchCategory(numPage - 1, 10);
  }
  onDelete = (id) => {
    this.props.deleteCategory(id);

  }
  tabRow(categories,currentPage){
    return categories.map((category,i)=>{
      return <TableRowCate category={category} key={i} index={i+(currentPage-1)*10} onDelete={this.onDelete}/>
    })
  }
  

  render() {
    return (
      <div>
      <div class="app-title">
      <div>
        <h1><i class="fa fa-book"></i>&nbsp; Quản lí chuyên mục</h1>
        <p></p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
        <li class="breadcrumb-item"><a href="#">Chuyên mục</a></li>
      </ul>
    </div>

    <div class="row">
      <div class="col-lg-7">
          <p class="bs-component ">
            <a href="addcategory.html">
            <Link class="btn btn-primary btn-right" to="/manager/category/add">+ Thêm</Link>            
            </a>
          </p>
      </div>
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <table class="table table-hover table-bordered" id="sampleTable">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Tên chuyên mục</th>
                  <th>Link</th>
                  <th>Ngày đăng</th>
                  <th>Cho phép</th>
                  <th>Thực hiện</th>
                </tr>
              </thead>
              <tbody>
                {this.tabRow(this.props.category,this.state.currentPage)}
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
}

const mapStateToProps = (state) => {
  return {
    category: state.category.category,
    totalPages: state.category.totalPages
  }
}
const mapDispatchToProps = dispatch=>({
  actions: bindActionCreators(CategoryAction,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManagerCategory)
