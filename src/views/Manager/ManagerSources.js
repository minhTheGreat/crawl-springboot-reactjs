import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pagination from '../../pagination/Pagination'
import TableRowSource from './table/TableRowSource'
import * as SourceAct from '../../actions/sourceAction'
import { bindActionCreators } from 'redux';
export class ManagerSources extends Component {
    constructor(props) {
        super(props)

        this.state = {
          currentPage:1
        }
    }
    componentDidMount(){
      this.props.actions.actFetchSource(this.state.currentPage-1,5);
    }
    onDelete= id =>{
 //     this.props.actions.onDeleteSource(id)
    }
    changeCurrentPage= async (numPage)=>{
      await this.state({currentPage:numPage});
      await this.props.actions.actFetchSource(numPage-1,5);
    }
    tabRow(sources,currentPage){
      return sources.map((source,i)=>{
        return <TableRowSource source={source} key={i} index={i+(currentPage-1)*5} onDelete={this.onDelete}/>
      })
    }


    render() {
      
        return (
            <div>
            <div class="app-title">
            <div>
              <h1><i class="fa fa-address-card-o"></i>&nbsp; Quản lí nguồn tin</h1>
              <p></p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
              <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
              <li class="breadcrumb-item"><a href="#">Hồ sơ</a></li>
            </ul>
          </div>
    
          <div class="row">
            <div class="col-lg-7">
                <p class="bs-component ">
                  <a href="addjob.html">
                  
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
                        <th>Cho phép</th>
                        <th>Thực hiện</th>
                      </tr>
                    </thead>
                    <tbody>
                     {this.tabRow(this.props.source,this.state.currentPage)}
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

const mapStateToProps = (state) => ({
 source :state.sources.sources,
 totalPages: state.sources.totalPages
})

const mapDispatchToProps = dispatch=>({
  actions: bindActionCreators(SourceAct,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManagerSources)
