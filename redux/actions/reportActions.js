import { FETCHING_REPORT_REQUEST,FETCHING_REPORT_SUCCESS,FETCHING_REPORT_FAILURE } 
from "./types";

export const fetchingReportRequest=()=>({type:FETCHING_REPORT_REQUEST});

export const fetchingReportSuccess=json=>({
    type:FETCHING_REPORT_SUCCESS,
    payload:json
});

export const fetchingReportFailure=error=>({
    type:FETCHING_REPORT_FAILURE,
    payload:error
});

export const fetchReport=()=>{
    return async dispatch=>{
        dispatch(fetchingReportRequest());
        try{
                let response=await fetch('http://205.134.254.135/~mobile/interview/public/api/restaurants_list');
                const data = await response.json();
                // console.log('redux json=',data)
                dispatch(fetchingReportSuccess(data));
        }catch(error){
            dispatch(fetchingReportFailure(error))            
        }
    };
};
