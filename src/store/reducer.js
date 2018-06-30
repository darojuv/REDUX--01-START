import * as actionTypes from './actions';

const initialStore = {
    counter:0,
    results:[]
};

const reducer = (state = initialStore, action) =>{
    if(action.type === actionTypes.INCREMENT){
        return{
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === actionTypes.DECREMENT){
        return{
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === actionTypes.ADD){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === actionTypes.SUBTRACT){
        return{
            ...state,
            counter: state.counter - action.value
        }
    }
    if(action.type === actionTypes.STORE_RESULTS){
        return{
            ...state,
            results: state.results.concat({id:new Date(), value:state.counter })
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