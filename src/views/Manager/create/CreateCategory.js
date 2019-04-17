import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import { bindActionCreators } from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import * as CreateAct from '../../../actions/categoryAction'
export class editUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            txtName:'',
            ckEnable:true,
            slcSource:'',
            txtLink:'',

        }
    }
    componentDidMount() {
      //  this.props.getCategory();
        var { match } = this.props;
        if (match) {
          var id = match.params.id;
          this.props.actions.actEditCate(id);
        }
      }
    componentWillReceiveProps(nextProps){
      if(nextProps && nextProps.itemEditing){
        const {itemEditing} = nextProps;
        this.setState({
          id: itemEditing.id,
          txtName:itemEditing.categoryName,
          ckEnable:itemEditing.categoryEnable,
          slcSource:itemEditing.categorySourceId,
          txtLink:itemEditing.categoryLink
        })
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
    onSave=  async (e)=>{
      e.preventDefault();
      const {history}= this.props
      const {id, txtName , ckEnable,slcSource,txtLink}= this.state;
      const category={
        categoryName:txtName,
        categoryEnable:ckEnable,
        categorySourceId:slcSource,
        categoryLink:txtLink
      }
      if(id){
      this.props.actions.actUpdateCate(id,category)
      }else{
        this.props.actions.actAddCate(category)
      }
      history.goBack();
    }
    render() {
      const {id,txtName,txtLink,ckEnable,slcSource}=this.state
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
                      <label htmlFor="exampleInputEmail1">Tên chuyên mục</label>
                      <input
                        className="form-control"
                        id="exampleInputEmail"
                        type="text"
                        aria-describedby="emailHelp"
                        placeholder="Chuyên mục"
                        name="txtName"
                        value={txtName}
                        onChange={this.onChange}
                        required
                      />
                     
                    </div>
                   
                 
                    <div className="form-group">
                      <label htmlFor="exampleSelect1">Nguồn</label>
                      <select className="form-control" id="exampleSelect"
                        onChange={this.onChange} 
                        style={{padding:'4px 12px'}} value={slcSource} name="slcSource"
                      >
                        <option selected="selected"></option>
                        <option value="1">VNexpress</option>
                        <option value="2">Dân trí</option>
                      </select>
                    </div>
                
                  
  
                  </div>
                  <br/>
                  <div className="col-lg-4 offset-lg-1">
                
                    <div className="form-group" style={{padding:'15px'}}>
                      <label htmlFor="exampleInputName">Link</label>
                      <input
                        className="form-control"
                        id="exampleInputPassword1"
                        type="text"
                        placeholder="Ghi đường dẫn chính xác"
                        name="txtLink"
                        value={txtLink}
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
                <Link to="/manager/category">
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

const mapStateToProps = (state) => ({
 itemEditing: state.itemEditing
})

const mapDispatchToProps = (dispatch) =>( {
  actions: bindActionCreators(CreateAct,dispatch)
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(editUser)
