import React from "react";
import Counter from './Counter';

class CounterState extends React.Component {
    state = {
        count : 0
    }
    incrimentCount = () => {
        this.setState ({
            count : this.state.count + 1
        })
    }
    decrimentCount = () => {
        if (this.state.count) {
            this.setState ({
                count : this.state.count - 1
            })
        }
    }
    render () {
        const {count} = this.state;
        return (
            <div>
                <Counter count = {count} incrimentCount = {this.incrimentCount} decrimentCount = {this.decrimentCount} />
            </div>
        )
    }
}
export default CounterState;