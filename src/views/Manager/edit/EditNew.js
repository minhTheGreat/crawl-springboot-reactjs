import React, { Component } from 'react'
import { connect } from 'react-redux'

export class editUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          newId:null,
          categoryId: null,
          userId: "",
          newsAvatar: "",
          newsTitle: null,
          newsPostDay: null,
          newsContent: null,
          slt:0
        };
      }
      componentDidMount() {
       
      }
      onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value)
        this.setState({
          [name]: value
        });
    
      }
      onSubmit = (event) => {
        event.preventDefault();
        const userID = localStorage.getItem('authentication',id);
        console.log('hihi')
        console.log(this.state);
        var { categoryId, newsAvatar, newsTitle, newsPostDay, newsContent,newId } = this.state;
        var news = {
          id: {
            tblNewId:newId,
            tblCategoriesId:categoryId
          },
          tblCategory: {
          categoryId: categoryId
    
          },
          tblUser: {
            userId: userID
    
          },
          newsAvatar: newsAvatar,
          newsTitle: newsTitle,
          newsPostDay: newsPostDay,
          newsContent: newsContent
        }
        
        this.props.addNews(news);
        var { history } = this.props;
        setTimeout(function () { history.push("/manager/news"); }, 2000);
    
    
      }
  
  render() {
    var { category } = this.props
    var elem = category.map((n, index) => {
      return (<option value={n.categoryId}>{n.categoryTitle}</option>
      )
    });
    var { userId, categoryId, newsAvatar, newsAvatar, newsPostDay, newsContent, newsTitle,slt } = this.state;
    return (
      <div>
        <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <label className="col-form-label">Sửa tin tức</label>
              </div>
              <div className="card-body card-block">
                <form onSubmit={this.onSubmit} className="form-horizontal">
                  <div className="row form-group">
                    <div className="col col-md-3">
                      <label htmlFor="text-input" className=" form-control-label">Tiêu đề bài viết</label>
                    </div>
                    <div className="col-12 col-md-9">
                      <input type="title" id="title-input"
                        name="newsTitle"
                        placeholder="Tên tiêu đề"
                        className="form-control"
                        onChange={this.onChange}
                        value={newsTitle} />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-3">
                      <label htmlFor="text-input" className=" form-control-label">Chuyên mục</label>
                    </div>
                    <div className="col-12 col-md-9">
                      <select name="categoryId"
                        className="form-control"
                        onChange={this.onChange}
                        value={slt}
                      >
                        <option value={0}>tjkjk</option>
                        {elem}
                      </select>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-3">
                      <label htmlFor="file-input" className=" form-control-label">File ảnh</label>
                    </div>
                    <div className="col-12 col-md-9">
                      <input type="file" id="file-input" name="newsAvatar" className="form-control-file" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-3">
                      <label htmlFor="file-input" className=" form-control-label">Nội dung</label>
                    </div>
                    <div className="col-12 col-md-9">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-12">
                            <textarea className="ckeditor"
                              name="newsContent"
                              onChange={this.onChange}
                              value={newsContent}
                              rows="5" cols="70" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row form-group">
                    <div className="col col-md-3">
                      <label htmlFor="file-input" className=" form-control-label">Người đăng</label>
                    </div>
                    <div className="col-12 col-md-9">
                      <input type="text"
                        name="userId"
                        placeholder=" người tạo"
                        className="form-control"
                        onChange={this.onChange}
                        value={userId} />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-3">
                      <label htmlFor="file-input" className=" form-control-label">Ngày tạo</label>
                    </div>
                    <div className="col-12 col-md-9">
                      <input type="date"
                        name="newsPostDay"
                        className="form-control"
                        onChange={this.onChange}
                        value={newsPostDay} />
                    </div>
                  </div>
              
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-sm">
                  <i className="fa fa-dot-circle-o" /> Luu
              </button>
                <button type="reset" className="btn btn-danger btn-sm">
                  <i className="fa fa-ban" /> Reset
              </button>
              </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(editUser)
