import React from "react";

class Props2 extends React.Component {
    render () {
        const {rendomNumber,rendom} = this.props;
        return (
            <div>
                <h1>Show Reandom Number {rendom}</h1>
                <button onClick={rendomNumber}>Random</button>
                {this.props.children}
            </div>
        )
    }
}
export default Props2;