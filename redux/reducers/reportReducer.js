import { FETCHING_REPORT_REQUEST,FETCHING_REPORT_SUCCESS,FETCHING_REPORT_FAILURE } 
from "../actions/types";
const initialState ={
    isFetching:false,
    errorMessage:'',
    data:[]
}

const reportReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCHING_REPORT_REQUEST:
            return  {...state,  isFetching:true};
        case FETCHING_REPORT_FAILURE:
            return {...state,isFetching:false, errorMessage:action.payload};
        case FETCHING_REPORT_SUCCESS:
            return {...state,isFetching:false,data:action.payload};
        default:
            return state;
    }
}

export default reportReducer;





