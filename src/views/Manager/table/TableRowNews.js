import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "moment/locale/vi"
import Moment from 'moment';
import { StringDecoder } from 'string_decoder';
class TableRowNews extends Component {
    Delete = (id) => {
        //console.log(id);
        if (confirm('Ban chac muon xoa')) {//eslint-disable-line
            this.props.Delete(id);
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
                <td><input type="checkbox" className="checkz" value=""/></td>
                <td>
                    <Link
                        className="btn btn-primary"
                        to={`/manager/news/${news.id}/edit`}
                    >
                        Sửa </Link>
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