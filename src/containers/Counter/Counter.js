import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

import './Counter.css';
class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr/>
                <button className="button" onClick={()=>this.props.onStoreResult(this.props.counter)}>Store Counter Result</button>
                   <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} >
                        <div className="chip">
                            {strResult.value}
                            <span className="closebtn" onClick={() => this.props.onDeleteResult(strResult.id)}>&times;</span>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        counter: state.ctr.counter,
        storedResults: state.rst.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: ()=> dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: ()=> dispatch({type:actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubCounter: () => dispatch({type:actionTypes.SUB, value: 5}),
        onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, resultValue:result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);