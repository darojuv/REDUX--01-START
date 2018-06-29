import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractResults(5)}  />
                <hr/>
                <button onClick={this.props.onStoreResults} >Add Result</button>
            <ul>
                {this.props.rstls.map(rslt =>
                    <li onClick={this.props.onDeleteCounter} key={rslt.id} >{rslt.value}</li>
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
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: (number) => dispatch({ type: 'ADD', value: number }),
        onSubtractCounter: (number) => dispatch({ type: 'SUBTRACT', value: number }),      
        onStoreResults: () => dispatch({type:'STORE_RESULTS'}),
        onDeleteResults: () => dispatch({type:'REMOVE_RESULTS'})                  
    };
}
export default connect(mapStoreToProps, mapDispatchToProps)(Counter);