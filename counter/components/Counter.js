import React, {Component, PropTypes} from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.incrementAsync = this.incrementAsync.bind(this)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
    }

    incrementIfOdd() {
        console.log('incrementIfOdd');
        if (this.props.value % 2 != 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props
        return (
            <p>
                Clicked : {value} times
                {' '}
                <button onclick={onIncrement}>
                    +
                </button>
                {' '}
                <button onclick={onDecrement}>
                    -
                </button>
                {' '}
                <button onclick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onclick={this.incrementAsync}>
                    Increment Async
                </button>
            </p>
        )
    }
}

Counter.propsTypes = {
    value : PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired
}