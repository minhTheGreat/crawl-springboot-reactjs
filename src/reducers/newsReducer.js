import * as Types from '../Config/managerConstant';


var initalState = {
    news: [],
    totalPages: 1,
};
var findIndex = (state, id) => {
    var result = -1;
    state.forEach((state, index) => {
        if (state.id.newsId === id) {
            result = index;
        }
    });
    console.log(result);
    return result;
}
const news = (state = initalState, action) => {
    console.log("------news", action)
    switch (action.type) {
        case Types.FETCH_NEWS:
            return {
                ...state,
                news: action.news,
                totalPages: action.totalPages,
             
            }
        case Types.CRAWLER:
            return {
                ...state,
                news: [...state],
               
            }
        case Types.DELETE_NEW:
            var id = action.id;
            var index = findIndex(state, id);
            console.log(state)
            state.splice(index, 1);
            return [...state]
        case Types.CRAWLER:
            return [...state]
        case Types.HOME:
            return {
                ...state,
                news: action.news
            }
        default:
            return state;

    }

};
export default news;