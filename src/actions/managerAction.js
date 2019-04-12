import * as Types from '../Config/managerConstant';
import API from '../utils/api';


//fetch User
export const actFetchUsersRequest=(currentPage,size)=>{
    return (dispatch)=>{
        return API.get(`/userany/all/?page=${currentPage}&size=${size}`).then(res=>{
            dispatch(actFetchUsers(res.data.content,res.data.totalPages,res.data.totalElement))
          
        })
    }
}

export const actFetchUsers= (users,totalPages,totalElement)=>{
    return{
        type:Types.FETCH_USERS,
        users,totalPages,totalElement
    }
}
//Delete user
export const actDeleteUsersRequest=(id)=>{
    return (dispatch)=>{
        return API.delete(`/userany/${id}`).then(res=>{
            dispatch(actDeleteUsers(id))
        })
    }
}
export const actDeleteUsers=(id)=>{
    return{
        type:Types.DELETE_USER,
        id
    }
}
//Add new user
// export const actAddUserRequest= (currentPage,size,user)=>{
//     return dispatch=>{
//         return API.post('/auth/signupbyadmin',user).then(res=>{
//             dispatch(actAddUser(res.data.users)
//            )
           
//         }
        
//         )
//     }
// }
export const actAddUserRequest=(user)=> async dispatch=>{
    
        const  {data} =await API.post('/auth/signupbyadmin',user)
        dispatch({type: Types.ADD_USER,data})
        dispatch(actFetchUsersRequest(0,5))



}
export const actAddUser=(user)=>{
    return {
        type: Types.ADD_USER,
        user
    }
}
//get user in create table
export const actGetUserRequest=(id)=>{
    return dispatch=>{
        return API.get(`/userany/${id}`).then(res=>{
            dispatch(actGetUser(res.data))
        })
    }
}

export const actGetUser=(user)=>{
    return {
        type: Types.EDIT_USER,
        user
    }
}
//update user
export const actUpdateUserRequest=(id,user)=>{
    return dispatch=>{
        return API.put(`/userany/${id}`,user).then(res=>{
            dispatch(actUpdateUser(res.data.users))
         
        })

    }
}
export const actUpdateUser=(user)=>{
    return {
        type:Types.UPDATE_USER,
        user
    }
}
//find user
export const actFindUserToStore = (user) => {
    return {
        type: Types.FIND_USER,
        user
        
    }
}
export const actFindUserRequest = (keyword) => {
    return (dispatch) => {
        return API.get(`/userany/find/${keyword}`).then(reps => {
            dispatch(actFindUserToStore(reps.data));
            console.log(reps)
        });
    };
}