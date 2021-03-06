const redux = require('redux');

const initialState = {counter:0};
//Reducer
const rootReducer = function(state = initialState, action){
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    };
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    };
    return state;
}
//Store
const store = redux.createStore(rootReducer );
console.log(store.getState());
// Dispatcher
store.dispatch({
    type:"INC_COUNTER"
});
console.log(store.getState());
store.dispatch({
    type:"ADD_COUNTER",
    value: 10
});
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('[subscription]', store.getState());
});
store.dispatch({
    type:"ADD_COUNTER",
    value: 10
});
store.dispatch({
    type:"ADD_COUNTER",
    value: 3
});