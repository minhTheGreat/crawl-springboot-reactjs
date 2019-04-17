import * as Types from '../Config/managerConstant';

var initialState = {
    users: [],
    totalPages:1
};

const findIndex=(users,id)=>{
    var result=-1;
    users.forEach((user,index) => {
        if(user.id===id){
            result=index
        }
        
    });
    return result;
}

const users = (state = initialState, action) => {
    var index=-1;
    const {id,user}=action

    switch (action.type) {
        case Types.FETCH_USERS:
        return {
            ...state,
            users: action.users,
            totalPages: action.totalPages
        }
        case Types.DELETE_USER:
            index= findIndex(state.users,id)
            state.users.splice(index,1)
            // return [...state].filter(state => state.id !== id)
            return {
                ...state,
                users:[...state.users]
            }
        case Types.ADD_USER:
         
            return {
                ...state,
                users: [ action.data,...state.users],
                
            }
        case Types.UPDATE_USER:
            index=findIndex(state.users,action.user.id)
            state.users[index]=action.user;
           
            return {
                ...state,
                users:[...state.users],
            }
        case Types.FIND_USER:
            return {
                ...state,
                users:[...action.user]
            }
        default: return state;
    }
}
export default users;