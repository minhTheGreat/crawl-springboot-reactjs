
import * as Types from '../Config/managerConstant';
import API from '../utils/api';
import APIvn from '../utils/vnexpress'
import  history  from '../Config/history'


//fetch News
export const actFetchNewsRequest = (currentPage, size) => {
    return (dispatch) => {
        return API.get(`/news/getall/?page=${currentPage}&size=${size}`).then(res => {
            dispatch(actFetchNews(res.data.content, res.data.totalPages, res.data.totalElement))

        })
    }
}
export const actFetchNews = (news, totalPages, totalElement) => {
    return {
        type: Types.FETCH_NEWS,
        news, totalPages, totalElement
    }
}
//crawl news
export const actCrawlNewsRequest = (id) => async dispatch => {

    try {
        await API.get(`/news/crawl/${id}`)
        dispatch(actFetchNewsRequest(0,20))
        dispatch({ type: Types.CRAWLER })
        history.push('/manager')
    } catch (err) {

    }
}


{/* xoa data tren sever sau do tren stogre*/ }

export const deleteNewStore = (id) => {
    return {
        type: Types.DELETE_NEW,
        id: id
    }
}
export const deleteNewsRequest = (id) => {
    return (dispath) => {
        return API.delete(`new/${id}`).then(reps => {
            dispath(deleteNewStore(id))
        });
    };
}
export const addNewsRequest = (news) => {
    return (dispath) => {
        return API.post('new', news).then(reps => {
            console.log(reps);
            if (reps.status === 200) {
                alert('Them thanh cong');
            }
        });
    };
}