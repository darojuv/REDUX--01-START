const initialStore = {
    counter:0,
    results:[]
};

const reducer = (state = initialStore, action) =>{
    if(action.type === 'INCREMENT'){
        return{
            counter: state.counter + 1
        }
    }
    if(action.type === 'DECREMENT'){
        let result = 0;
        if(state.counter > 0){
                result = state.counter - 1;
        }
        return{
            counter: result
        }
    }
    if(action.type === 'ADD'){
        return{
            counter: state.counter + action.value
        }
    }
    if(action.type === 'SUBTRACT'){
        let result = 0;
        if(state.counter >= 5){
            result = state.counter - action.value
        }
        return{
            counter: result
        }
    }
    return state;
};

export default reducer;