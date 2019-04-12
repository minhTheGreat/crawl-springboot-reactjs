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
    switch (action.type) {
        case types.FETCH_CATEGORY:
           return{
               ...state,
               category: action.content,
               totalPages: action.totalPages
           }
        case types.DELETE_CATEGORY:
            var { id } = action;
            var index = findIndex(state, id);
            state.splice(index, 1);
            return [...state]

        default:
            return state;

    }

};
export default category;