import React from "react";

class Counter extends React.Component {
    render () {
        const {count,incrimentCount,decrimentCount} = this.props;
        return (
            <div>
                <h1 className="text-4xl m-5">Counter : {count}</h1>
                <button 
                onClick={incrimentCount}
                className="bg-lime-500 px-5 py-2 m-3"
                >Inc + </button>
                <button
                onClick={decrimentCount}
                className="bg-red-500 px-5 py-2 m-3"
                >Dec - </button>
            </div>
        )
    }
}
export default Counter;