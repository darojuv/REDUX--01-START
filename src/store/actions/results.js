import * as actionTypes from './actionTypes';

//const saveResult = (ctrValue, getState) => {
    const saveResult = (ctrValue) => {
return{
        type: actionTypes.STORE_RESULTS,
        ctr:ctrValue
    }
    /* const newState = getState().ctr.counter;
    console.log('new counter: ', newState); */
}
export const store_results = (ctrValue) =>{
    return (disptch, getState) => {
        //to get current state
        const currentState = getState().ctr.counter;
        console.log('current counter: ', currentState);
        setTimeout( () => {
            disptch(saveResult(ctrValue, getState));
            const oldState = getState().ctr.counter;
            console.log('old counter: ', oldState);
        } ,2000);
    }
}

export const remove_results = (key) =>{
    return{
        type: actionTypes.REMOVE_RESULTS,
        id:key
    }
}