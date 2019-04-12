
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
{/* xoa data tren sever sau do tren stogre*/ }

export const deleteCategoryStore = (id) => {
    return {
        type: Types.DELETE_CATEGORY,
        id: id
    }
}
export const deleteCategoryRequest = (id) => {
    return (dispath) => {
        return API.delete(`category/${id}`).then(reps => {
            dispath(deleteCategoryStore(id))
        });
    };
}
export const addCategoryRequest = (category) => {
    return (dispath) => {
        return API.post('category', category).then(reps => {
            console.log(reps);
            if (reps.status === 201) {
                alert('Them thanh cong');
            }
            //console.log(user) 
        });
    };
}
