import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import * as NewsAction from '../../actions/newsAction'
import TableRowNews from './table/TableRowNews'
import Pagination from '../../pagination/Pagination'
import pacman from '../../styles/style/img/core-img/pacman.gif'
import Modal from 'react-responsive-modal';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class ManagerNews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 1,
      keyword: '',
      cate: '',
      source: '',
      loading: false,
      id: '',
      open: '',
      news: [],
      selectAll: 0,
      check:{},
    
    }
    this.onCheckAll = this.onCheckAll.bind(this);
    this.onCheck = this.onCheck.bind(this);

  }
  componentDidMount() {

    this.props.actions.actFetchNewsRequest(this.state.currentPage - 1, 20)

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ loading: false })
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
  onCrawl = async () => {
    await this.setState({ open: !this.state.open })
    await this.setState({ loading: true })

    if (this.state.source === "1") {
      this.props.actions.actCrawlNewsVnexpress(this.state.cate);
    } else {
      this.props.actions.actCrawlNewsDantri(this.state.cate);
    }


  }
  onSave= ()=>{
    this.props.actions.actSaveCrawlNews(this.state.news)
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
  onClosePopup = () => {
    this.setState({ open: false })
  }
  onChangeCate = e => {
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
  onGetID = (childId) => {
    this.setState({
      id: [...this.state.id, childId]
    })
    console.log(this.state.id)
  }
  onRemoveID = (childId) => {
    this.setState({ id: [...this.state.id].filter(id => id !== childId) })

  }
  tabRow = (news, currentPage) => {
    return news.map((object, i) => {
      return <TableRowNews news={object} key={i} index={i + (currentPage - 1) * 20}
        onDelete={this.onDelete}
        onGetID={this.onGetID}
        onRemoveID={this.onRemoveID}
      />
    })
  }
  onSelect = (categories) => {
    return categories.map((category, i) => {
      return <Select category={category} key={i} />
    })
  }
  //checkbox
  async onCheckAll() {
    await this.setState({selectAll:1})
    if (this.state.selectAll===1) {
      await this.setState({ news: this.props.modalNews })
    } else {
      await this.setState({ news: [] })
    }
    console.log("modalnews-----", this.state)
  }

  async onCheck(original) {
    const newSelect = Object.assign({},this.state.check);
    newSelect[original.title] = !this.state.check[original.title]

  await  this.setState({
     check: newSelect,
   })
   if(newSelect[original.title]){
     this.setState({news:[...this.state.news,original]})
   }else{
   this.setState({news:[...this.state.news].filter(news=> news.title !== original.title)})
   console.log("check----")
   }
   console.log("select",this.state)
  }

  columns = [{
    Header: 'Tiêu đề',
    accessor: 'title',
    Cell: props => <span><div dangerouslySetInnerHTML={{ __html: props.value }} /></span>
  }, {
    Header: 'Link',
    accessor: 'link',

  }, {

    Header: 'image',
    accessor: 'image',
    Cell: props => <img src={props.value} />
  }, {
    id: "checkbox",
    accessor:"",
    Header: (
      <input type="checkbox" className="checkbox" onChange={_ => this.onCheckAll()}
      ref={input => {
        if (input) {
          input.indeterminate = this.state.selectAll === 2;
        }
      }}
      />
    ),

    Cell:({original}) => {
      return(
      <div style={{ alignItems: 'center', textAlign: 'center' }}>
      <input type="checkbox" className="checkbox" 
      checked={this.state.check[original.title]===true}
      onChange={ _ => this.onCheck(original)} /></div>
      )},
 
    width: 60,
    sortable:false
  }]


  render() {
    const { source, cate, loading } = this.state


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

              <div className="" style={{ marginBottom: '1.5em', display: 'flex', WebkitJustifyContent: 'space-between', justifyContent: 'space-between' }}>
                <div>
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
                <div ><input className="btn btn-danger btn-left" type="button" value="Xóa nhiều" /></div>
              </div>
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
                      <th><input type="checkbox" /></th>
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
        <Modal open={this.state.open} onClose={this.onClosePopup} styles={modals} >

          <div style={{ marginTop: '20px', display: "flex", WebkitJustifyContent: 'space-between', justifyContent: 'space-between' }}>
            <div>{loading ? <p>loading <img src={pacman} alt="loading..." style={{ margin: 'auto' }} /></p> : null}</div>
            <div><input type="button" className="btn btn-success btn-right" value="Lưu" onClick={this.onSave} /></div>
          </div>
          <ReactTable
            columns={this.columns}
            data={this.props.modalNews}
            defaultPageSize={20}
          />
        </Modal>
      </div>
    )
  }

}
const modals = {
  modal: {
    top: '40px',
    borderRadius: '9px',
    width: '900px',
  }

}



const Select = ({ category }) => (
  <option value={category.id}>{category.categoryName}</option>
)


const mapStateToProps = (state) => ({

  news: state.news.news,
  totalPages: state.news.totalPages,
  category: state.category.category,
  loading: state.news.loading,
  modalNews: state.news.modalNews

})

const mapDispatchToProps = dispatch => ({

  actions: bindActionCreators(NewsAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManagerNews)
