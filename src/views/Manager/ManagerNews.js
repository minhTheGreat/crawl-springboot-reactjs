import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import * as NewsAction from '../../actions/newsAction'
import TableRowNews from './table/TableRowNews'
import Pagination from '../../pagination/Pagination'
import pacman from '../../styles/style/img/core-img/pacman.gif'

export class ManagerNews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 1,
      keyword: '',
      cate: '',
      source: '',
      loading: false
    }
  }
  componentDidMount() {
   
    this.props.actions.actFetchNewsRequest(this.state.currentPage - 1, 20)
    
  }
  componentWillReceiveProps(nextProps){
    if(nextProps){
      this.setState({loading:false})
    }
  }

  onDelete = (id) => {
    this.props.actions.actDeleteNews(id);
  }
  changeCurrentPage = async (numPage) => {
    await this.setState({ currentPage: numPage });
    await this.props.actions.actFetchNewsRequest(numPage - 1, 20);
  }
  onHandleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  onCrawl =async () => {
    await this.setState({loading:true})
    if(this.state.source==="1"){
    this.props.actions.actCrawlNewsVnexpress(this.state.cate);
    }else{
      this.props.actions.actCrawlNewsDantri(this.state.cate);
    }
   
   
  }
  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
    this.props.actions.actFetchCategory(value);
  }
  onChangeCate= e=>{
    var target = e.target
    this.setState({
      cate: target.value
    })
  }

  onFindUser = (e) => {
    console.log(this.state.keyword)
    e.preventDefault();
    //   this.props.onFindUser(this.state.keyword);

  }
  tabRow = (news, currentPage) => {
    return news.map((object, i) => {
      return <TableRowNews news={object} key={i} index={i + (currentPage - 1) * 20} onDelete={this.onDelete} />
    })
  }
  onSelect = (categories) => {
    return categories.map((category, i) => {
      return <Select category={category} key={i} />
    })
  }


  render() {
    const { source, cate,loading } = this.state
    
    console.log(this.props)
    return (
      <div>
        <div className="app-title">
          <div>
            <h1><i className="fa fa-user"></i>&nbsp; Quản lí tin tức</h1>
            <p></p>
          </div>
          <ul className="app-breadcrumb breadcrumb">
            <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
            <li className="breadcrumb-item"><a>Tin tuc</a></li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <p className="bs-component ">
              <ul style={{ display: 'flex' }}>
                <li> <input className="btn btn-primary btn-right" type="button" value="+ Thêm" onClick={this.onCrawl} style={{ marginTop: '1em' }} /></li>
                <li><select onChange={this.onChange} name="source" value={source} style={{ borderRadius: '3px', borderWidth: '2px', width: '10em', padding: '7px 12px', margin: '1em', lineHeight: '21px' }}>
                  <option value="0">Nguồn</option>
                  <option value="1">Vnexpress</option>
                  <option value="2">Dân trí</option>

                </select></li>
                <li>
                  <select className="" id="" style={{ borderRadius: '3px', borderWidth: '2px', width: '20em', padding: '7px 12px', margin: '1em 0.5em', lineHeight: '21px' }}
                    name="cate" value={cate} onChange={this.onChangeCate} >
                    <option value="0">Chọn chuyên mục cần lấy</option>
                    {this.onSelect(this.props.category)}
                  </select>
                </li>

              </ul>
              
            </p>
          </div>
          <div className="col-md-12">
            <div className="tile">
          {loading ? <p>loading <img src={pacman} alt="loading..." style={{margin:'auto'}}/></p> : null}
              <div className="tile-body">
                <table className="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>ID</th>
                      <th>Tiêu đề</th>
                      <th>Link</th>
                      <th>Chuyên mục</th>
                      <th>Hình ảnh</th>
                      <th>Ngày đăng</th>
                      <th>Cho phép</th>
                      <th>Thực hiện</th>
                    </tr>
                  </thead>
                  <tbody>

                    {this.tabRow(this.props.news, this.state.currentPage)}
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
const Select = ({ category }) => (
  <option value={category.id}>{category.categoryName}</option>
)


const mapStateToProps = (state) => ({

  news: state.news.news,
  totalPages: state.news.totalPages,
  category: state.category.category,
  loading: state.news.loading

})

const mapDispatchToProps = dispatch => ({

  // fetchAllNews: (currentPage, size) => {
  //   dispatchEvent(actFetchNewsRequest(currentPage, size))
  // },
  // onDeleteNews: id => {
  //   dispatchEvent(actDeleteNewsRequest(id))
  // },

  actions: bindActionCreators(NewsAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManagerNews)
