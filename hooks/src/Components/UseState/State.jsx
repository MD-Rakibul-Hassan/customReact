import React from "react";

class State extends React.Component {
    state = {
        count : 0
    }
    incriseCounter = () => {
        if (this.state.count < 30) {
            this.setState({
                count : this.state.count + 1
            })
        }
    }
    decriseCounter = () => {
        if (this.state.count) {
            this.setState ({
                count : this.state.count - 1
            })
        }
    }
    render () {
        const {count} = this.state;
        return (
            <div className="bg-amber-500 p-8">
                <h3>Count value : {count}</h3>
                <button className="bg-gray-500 px-5 py-2 rounded-sm mr-2"  onClick={this.incriseCounter}>incrise</button>
                <button className="bg-green-500 px-5 py-2 rounded-sm"  onClick={this.decriseCounter}>decirse</button>
            </div>
        )
    }
}
export default State;