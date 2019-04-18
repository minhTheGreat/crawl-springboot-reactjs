import * as Types from '../Config/managerConstant';

var initialState={
    sources:[],
    totalPages:1
}
const findIndex=(sources,id)=>{
    var result=-1;
    sources.forEach((source,index) => {
        if(source.id===id){
            result=index
        }
        
    });
    return result;
}
const sources=(state=initialState,action)=>{
    var index=-1;
    const {id}=action
    switch(action.type){
        case Types.FETCH_SOURCE:
            return{
                ...state,
                sources: action.sources,
                totalPages:action.totalPages
            }

        default:
            return state

    }
}
export default sources