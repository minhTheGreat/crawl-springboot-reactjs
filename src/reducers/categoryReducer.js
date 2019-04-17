import * as types from '../Config/managerConstant';
var findIndex = (category, id) => {
    var result = -1;
    category.forEach((category, index) => {

        if (category.categoryId === id) {
            result = index;
        }
    });
    return result
}

var initalState = {
    category:[],
    totalPages:1
};

const category = (state = initalState, action) => {
    var index=-1;
    const{id}=action
    switch (action.type) {
        case types.FETCH_CATEGORY:
           return{
               ...state,
               category: action.content,
               totalPages: action.totalPages
           }
        case types.ADD_CATEGORY:
           return{
               ...state,
               category: [action.payload,...state.category]
           }
        case types.UPDATE_CATEGORY:
        index=findIndex(state.category,action.payload.id)
        state.category[index]=action.cates
           return{
               ...state,
               category:[...state.category]
           }
        case types.DELETE_CATEGORY:
            index= findIndex(state.category,id)
            state.category.splice(index, 1);
            return {
                ...state,
                category:[...state.category]
            }
        

        default:
            return state;

    }

};
export default category;