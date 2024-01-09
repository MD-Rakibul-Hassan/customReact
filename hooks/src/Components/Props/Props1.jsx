import React from "react";
import Props2 from "./Props2";
class Props1 extends React.Component {
    state = {
        count : 0,
    }

    rendomNumber = () => {
        const rendom = Math.floor(Math.random() * 1000 + 1);
        this.setState({
            count : this.state.count = rendom
        });
        
    }

    render () {
        
        return (
            <div>
                <h1>Parent Props</h1>
                <Props2 rendomNumber = {this.rendomNumber} rendom = {this.state.count}> 
                    <p className="text-5xl text-red-500 p-5">hello world, i am form props 1</p>
                </ Props2 >
            </div>
        )
    }
}
export default Props1;