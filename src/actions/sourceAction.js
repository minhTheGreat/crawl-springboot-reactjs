import * as Types from '../Config/managerConstant';
import API from '../utils/api';

//fetch source
export const actFetchSource=(currentPage,size)=> async dispatch=>{
    try{
        const {data} = await API.get(`source/getall/?page=${currentPage}&size=${size}`)
        dispatch({type:Types.FETCH_SOURCE,sources:data.content,totalPages:data.totalPages})
    }catch(err){

    }
}