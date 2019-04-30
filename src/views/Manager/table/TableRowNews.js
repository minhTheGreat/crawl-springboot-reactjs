import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "moment/locale/vi"
import Moment from 'moment';


class TableRowNews extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      check:false
   }
 }
 
    onGetID=async (newsId)=>{
       
       await this.setState(prevState=>({
            check: !prevState.check
        }))
        console.log(this.state.check)
       if(this.state.check){
           this.props.onGetID(newsId)
       }else{
        this.props.onRemoveID(newsId)
       }
    }

    Delete = (id) => {
        //console.log(id);
        if (confirm('Ban chac muon xoa')) {//eslint-disable-line
            this.props.onDelete(id);
        }

    }
  
    render() {
        Moment.locale('vi');
        const { news, index } = this.props;
        return (

            <tr>
                <th>{index+1}</th>
                <td>{news.id}</td>
                <td><div dangerouslySetInnerHTML={{__html:news.title}}/></td>
                <td><Link to={news.link}/></td>
                <td>{news.categories.categoryName}</td>
                <td><img src={news.image}/></td>
                <td>{Moment(news.createdAt).format('MMM Do YY')}</td>
                <td><input type="checkbox" 
                checked={this.state.check}
                onChange={()=>this.onGetID(news.id)}
                /></td>
                <td>
                    
                    <button type="button"
                        className="btn  btn-warning"
                        onClick={() => this.Delete(news.id)}
                    >Xoá</button>

                </td>
            </tr>
        );
    }
}

export default TableRowNews;