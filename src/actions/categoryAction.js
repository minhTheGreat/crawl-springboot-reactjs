
import * as Types from '../Config/managerConstant';
import API from '../utils/api';
{/* luu data tu sever ve stogre*/ }

export const actFetchCategory = (currentPage, size) => async dispatch => {
    try {
        const { data } = await API.get(`/category/getall/?page=${currentPage}&size=${size}`)
        dispatch({type:Types.FETCH_CATEGORY,content:data.content,totalPages:data.totalPages})
    } catch (err) {

    }


}

//delete
export const deleteCategoryStore = (id) => {
    return {
        type: Types.DELETE_CATEGORY,
        id
    }
}
export const deleteCategoryRequest = (id) => {
    return (dispath) => {
        return API.delete(`/category/${id}`).then(res => {
            dispath(deleteCategoryStore(id))
        });
    };
}
//get new category
export const actAddCate=(cate)=> async dispatch=>{
  const {data}= await API.post(`/category/addcategories`,cate)
  dispatch({type:Types.ADD_CATEGORY,payload:data.cates})
  dispatch(actFetchCategory(0,5))
}
//update
export const actUpdateCate=(id,cate)=>async dispatch=>{
const {data}= await API.put(`/category/${id}`,cate)
dispatch ({type:Types.UPDATE_CATEGORY,payload:data.cates})
}
//get a category to edit
export const actEditCate= id=> async dispatch=>{
    const {data} = await API.get(`/category/${id}`)
    dispatch({type:Types.EDIT_CATEGORY,payload:data})
}
