import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tick from "../../../styles/style/img/core-img/checked.png"
import Moment from 'moment'
import "moment/locale/vi"
class TableRowCate extends Component {
  Delete=(id)=>
  {
      //console.log(id);
      if(confirm('Bạn có chắc chắn muốn xóa ?')){//eslint-disable-line
          this.props.onDelete(id);
      }
      
  }
  render() {
    var { source, index } = this.props;

    return (

      <tr>
        <td>{index+1}</td>
        <td>{source.id}</td>
        <td>{source.sourceName}</td>
        <td>{source.sourceLink}</td>
        { source.sourceEnable ? <td><img src={tick} alt=""/></td> :<td></td> }
        <td>
          <Link
            className="btn btn-primary"
            to={`/manager/source/${source.id}/edit`}
          >
            Sửa </Link>
          &nbsp;
           

        </td>
      </tr>
    );
  }
}

export default TableRowCate;