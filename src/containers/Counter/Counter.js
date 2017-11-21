import React, { Component } from 'react'

import { connect } from 'react-redux'

import counterActions from '../../store/counter/actions'

class Counter extends Component {
  render() {
    const { counter, handlerInc, handlerDec } = this.props

    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={handlerInc}>+</button>
        <button onClick={handlerDec}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  handlerInc: () => dispatch(counterActions.inc()),
  handlerDec: () => dispatch(counterActions.dec())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
