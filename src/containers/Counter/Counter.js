import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

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
                <button onClick={() => this.props.onStoreResults(this.props.ctr)} >Add Result</button>
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
        ctr: reduxStore.ctr.counter,
        rstls: reduxStore.res.results
    };
};
const mapDispatchToProps = dispatch => {
    return{
        //onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (number) => dispatch(actionCreators.add(number)),
        onSubtractCounter: (number) => dispatch(actionCreators.subtract(number)),      
        onStoreResults: (ctrValue) => dispatch(actionCreators.store_results(ctrValue)),
        onDeleteResults: (key) => dispatch(actionCreators.remove_results(key))                  
    };
}
export default connect(mapStoreToProps, mapDispatchToProps)(Counter);