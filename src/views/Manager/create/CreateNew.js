import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewsRequest,crawlerNews } from './../../../actions/newsAction'
import API from './../../../utils/api'

export class createNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      categoryId: 0,
      userEmail: '',
      newsAvatar: '',
      newsTitle: '',
      newsPostDay: '',
      newsContent:'',
      
    };
  }
  componentDidMount() {
    this.props.getCategory();
    this.props.crawlerNews();
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      console.log(id)
      API.get(`new/${id}`).then(reps => {
        var data = reps.data;
        console.log(data)
        this.setState({
          id: data.id.newsId,
          newsAvatar: data.newsAvatar,
          newsPostDay: data.newsPostDay,
          newsContent: data.newsContent,
          categoryId: data.id.tblCategoriesId,
          newsTitle: data.newsContent,
          userEmail:data.tblUser.userEmail

        });
      

      });

    }

  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
   
    var value = target.type === 'checkbox' ? target.checked : target.value;
    if(name==='categoryId')
    {
      console.log(value)
    }
    this.setState({
      [name]: value
    });
    console.log(this.state)

  }
  onSubmit = (event) => {
    event.preventDefault();
    const userID=localStorage.getItem('authentication',id)
    console.log(this.state);
    var { id, categoryId, newsAvatar, newsTitle, newsPostDay, newsContent } = this.state;
    if (id) {
      var newupdate = {
        id: {
          tblCategoriesId: categoryId
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
      API.put(`new/${id}`, newupdate).then(reps => {
        if (reps.status === 200) {
          alert('Them thanh cong');
        }
      });
    } else {
      var news = {
        id: {
          tblCategoriesId: categoryId
        },
        tblCategory: {
          categoryId: categoryId
        },
        tblUser: {
          userId: 1
        },
        newsAvatar: newsAvatar,
        newsTitle: newsTitle,
        newsPostDay: newsPostDay,
        newsContent: newsContent
      }
      this.props.addNews(news);    
      
    }
  }
  onClear = () => {
    this.setState({
      id: '',
      categoryId: null,
      userId: "",
      newsAvatar: "",
      newsTitle: '',
      newsPostDay:'',
      newsContent: '',
      slt: 0

    });
  }
  onGetUrl=(url)=>
  {
    console.log(url)
    this.setState({
      newsAvatar:url
    });
    console.log(this.state.newsAvatar)
  }
  render() {
    var { category } = this.props
    
    var elem = category.map((n, index) => {
      return (<option 
        key={index}
        value={n.categoryId}>{n.categoryTitle}</option>
      )
    });
    var { userEmail, categoryId, newsAvatar, newsPostDay, newsContent, newsTitle, slt } = this.state;
    return (
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
                      <input type="text" 
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
                        value={categoryId}
                      >
                        {elem}
                      </select>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-10">
                      <label htmlFor="file-input" className=" form-control-label">File ảnh</label>
                    </div>
                    <div className="col-12 col-md-9">
                   
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
                        value={userEmail} />
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
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.onClear}>
                      <i className="fa fa-ban" /> Reset
              </button>
                  </div>
                </form>
             
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
    category: state.category
  }

}

const mapDispatchToProps = (dispath, props) => {
  return {
 
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(createNew)