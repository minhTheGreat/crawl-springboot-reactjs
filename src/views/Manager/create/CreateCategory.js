import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategoryRequest } from './../../../actions/categoryAction'
import API from './../../../utils/api'

export class editUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            categoryTitle:''
        }
    }
    componentDidMount() {
      //  this.props.getCategory();
        var { macth } = this.props;
        if (macth) {
          var id = macth.params.id;
          console.log(id)
          API.get(`category/${id}`).then(reps => {
            var data = reps.data;
            this.setState({
              id: data.categoryId,
              categoryTitle:data.categoryTitle
            });
    
          });
    
        }
      }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value =  target.value;
        this.setState({
          [name]: value
        });
    
      }
      onSubmit = (event) => {
        event.preventDefault();
//console.log(this.state)
        var { categoryTitle ,id} = this.state;
        if(id){
            var categoryupdate={
                categoryTitle:categoryTitle
            }
            API.put(`category/${id}`, categoryupdate).then(reps => {
            });
         
        }else{
            var category={
                categoryTitle:categoryTitle
            }
            this.props.addCategory(category); 
        }
       
      }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <label className="col-form-label">Sửa chuyên mục</label>
                            </div>
                            <div className="card-body card-block">
                                <form action onSubmit={this.onSubmit}  className="form-horizontal">
                                    <div className="row form-group">
                                        <div className="col col-md-3">
                                            <label htmlFor="text-input" className=" form-control-label">Tên chuyên mục</label>
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <input type="text"
                                             name="categoryTitle" 
                                             placeholder="Tên chuyên mục" 
                                             className="form-control" 
                                             onChange={this.onChange}
                                             value={this.state.categoryTitle}/>
                                        </div>
                                    </div>
                                    
                                   
                             
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary btn-sm">
                                    <i className="fa fa-dot-circle-o" /> Sửa
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
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispath, props) => {
    return {
      addCategory: (category) => {
  
        dispath(addCategoryRequest(category));
      }
  
    }
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(editUser)
