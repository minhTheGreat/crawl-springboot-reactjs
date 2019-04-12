import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tick from "../../../styles/style/img/core-img/checked.png"
import Moment from 'moment'
import "moment/locale/vi"
class TableRowCate extends Component {
  Delete=(id)=>
  {
      //console.log(id);
      if(confirm('Ban chac muon xoa')){//eslint-disable-line
          this.props.Delete(id);
      }
      
  }
  render() {
    var { category, index } = this.props;

    return (

      <tr>
        <td>{index+1}</td>
        <td>{category.id}</td>
        <td>{category.categoryName}</td>
        <td>{category.categoryLink}</td>
        <td>{Moment(category.categoryAt).format('MMM Do YY')}</td>
        { category.categoryEnable ? <td><img src={tick} alt=""/></td> :<td></td> }
        <td>
          <Link
            className="btn btn-primary"
            to={`/manager/category/edit`}
          >
            Sửa </Link>
            <button type="button" 
                                className="btn  btn-warning"
                                onClick={()=>this.Delete()} 
                        >Xoa</button>

        </td>
      </tr>
    );
  }
}

export default TableRowCate;