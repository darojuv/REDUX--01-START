import * as actionTypes from '../actions/actionTypes';

const initialStore = {
    counter:0
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
 
    return state;
};

export default reducer;