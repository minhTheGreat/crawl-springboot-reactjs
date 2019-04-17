import * as Types from '../Config/managerConstant';

var initialState=[]

const itemEditing =(state=initialState,action)=>{
    switch(action.type){
        case Types.EDIT_USER:
            return action.user;
        case Types.EDIT_CATEGORY:
            return action.payload;
        default: return state;
    }
}
export default itemEditing;