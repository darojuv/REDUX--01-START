import * as actionTypes from '../actions/actionTypes';

const initialStore = {
    results:[]
};

const reducer = (state = initialStore, action) =>{

    if(action.type === actionTypes.STORE_RESULTS){
        return{
            ...state,
            results: state.results.concat({id:new Date(), value:action.ctr * 2})
        }
    }
    if(action.type === actionTypes.REMOVE_RESULTS){
        const updatedArr = state.results.filter(res => res.id !== action.id);
        return{
            ...state,
            results: updatedArr
        }
    }
    return state;
};

export default reducer;