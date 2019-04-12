import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TableRow extends Component {
    onDelete=(id)=>{
        if(window.confirm('Bạn chắc chắn muốn xóa ?')){
            this.props.onDelete(id);
        }
    }
    render() {
        const {obj,index,userid}= this.props
        return (
            <tr>
                <td>{index+1}</td>
                <td>{obj.email}</td>
               
                <td style={{width:'10em'}}>
                <img src={obj.avatar} style={{height:'10em',width:'10em',radios:'max',gravity:"face",crop:"fill"}}/></td>
                <td>{obj.name}</td>
                <td>{obj.birthday}</td>
                <td>{obj.address}</td>
                <td>{obj.id}</td>
              
                <td>
                    <Link 
                        className="btn btn-success"
                        to={`/manager/user/${obj.id}/edit`}
                    >
                    Sửa
                    </Link>
                &nbsp;
                
                    {
                        userid===obj.id ? <span></span> :
                    <button className="btn btn-danger"
                    type="button"
                    onClick={()=>this.onDelete(obj.id)}
                    >Xóa</button>
                }
                </td>
            </tr>
        );
    }
}

export default TableRow;