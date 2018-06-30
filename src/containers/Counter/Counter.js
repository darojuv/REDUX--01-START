import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr  } />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr/>
                <button onClick={this.props.onStoreResults} >Add Result</button>
            <ul>
                {this.props.rstls.map(rslt =>
                    <li onClick={() => this.props.onDeleteResults(rslt.id)} key={rslt.id} >{rslt.value}</li>
                )}
            </ul>
            </div>
        );
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        ctr: reduxStore.counter,
        rstls: reduxStore.results
    };
};
const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: (number) => dispatch({ type: actionTypes.ADD, value: number }),
        onSubtractCounter: (number) => dispatch({ type: actionTypes.SUBTRACT, value: number }),      
        onStoreResults: () => dispatch({type:actionTypes.STORE_RESULTS}),
        onDeleteResults: (key) => dispatch({type:actionTypes.REMOVE_RESULTS, id:key})                  
    };
}
export default connect(mapStoreToProps, mapDispatchToProps)(Counter);