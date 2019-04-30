
import * as Types from '../Config/managerConstant';
import API from '../utils/api';
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
export const actCrawlNewsVnexpress = (id) => async dispatch => {

    try {
       const {data}= await API.get(`/news/crawl/${id}`)
        dispatch(actFetchNewsRequest(0,20))
        dispatch({ type: Types.CRAWLER,data:data })
      
    } catch (err) {

    }
}
export const actCrawlNewsDantri=(id)=> async dispatch=>{
    try{
        const {data}= await API.get(`/news/crawl/dantri/${id}`)
        dispatch(actFetchNewsRequest(0,20))
        dispatch({ type: Types.CRAWLER,data:data })
        
    }catch(err){

    }
}
//save news
export const actSaveCrawlNews=(news)=> async dispatch=>{
    try{
        await API.post(`/news/addnews`,news)
        dispatch(actFetchNewsRequest(0,20))
    }catch(err){

    }
}


//delete news
export const actDeleteNews= id => async dispatch =>{
    try{
        await API.delete(`/news/${id}`)
        dispatch({type:Types.DELETE_NEWS,payload:id})
    }catch(err){

    }
}

//find category by source id
export const actFetchCategory=id=> async dispatch=>{
    try{
        const {data}= await API.get(`/news/getcategory/${id}`)
        dispatch({type:Types.FIND_CATEGORY_BYSOURCEID,categories:data})
    }catch{

    }
}
//---------------HOME------------------
//get news in homepage
export const actGetHomeNews=()=> async dispatch=>{
    try{
       const {data}= await API.get(`/home/getall`)
        dispatch({type:Types.HOME,news:data})
    }catch(err){

    }
}
//slice right
export const actGetSlice=()=> async dispatch=>{
    try{
        const {data}= await API.get(`/home/slice`)
        dispatch({type:Types.SLICE,slice:data})
    }catch(err){

    }
}
//slice center
export const actGetSliceCenter=()=> async dispatch=>{
    try{
        const {data}= await API.get(`/home/slicecenter`)
        dispatch({type:Types.SLICE_CENTER,slicec:data})
    }catch(err){

    }
}