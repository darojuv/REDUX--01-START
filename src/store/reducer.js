const initialStore = {
    counter:0,
    results:[]
};

const reducer = (state = initialStore, action) =>{
    if(action.type === 'INCREMENT'){
        return{
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'DECREMENT'){
        return{
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD'){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === 'STORE_RESULTS'){
        return{
            ...state,
            results: state.results.concat({id:new Date(), value:state.counter })
        }
    }
    if(action.type === 'REMOVE_RESULTS'){
        return{
            ...state,
            results: state.counter - action.value
        }
    }
    return state;
};

export default reducer;