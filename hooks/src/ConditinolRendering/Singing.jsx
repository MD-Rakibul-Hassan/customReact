import React from "react";
import Home from "./Home";
class Siging extends React.Component {
    state = {
        isLoging : true,
    }
    render () {
        return (
            <div>
                {this.state.isLoging ? <Home /> : <h1 className="text-4xl">Please Loging</h1>}
            </div>
        )
    }
}
export default Siging;