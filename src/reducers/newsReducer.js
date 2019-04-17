import * as Types from '../Config/managerConstant';


var initalState = {
    news: [],
    totalPages: 1,
};
var findIndex = (news, id) => {
    var result = -1;
    news.forEach((newz, index) => {
        if (newz.id === id) {
            result = index;
        }
    });
  
    return result;
}
const news = (state = initalState, action) => {
   var index=-1
   console.log("-------news",action)
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
        case Types.DELETE_NEWS:       
            index = findIndex(state.news,action.payload);
            state.news.splice(index,1);
            return {
                ...state,
                news:[...state.news]
            }
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