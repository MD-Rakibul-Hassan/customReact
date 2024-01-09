import React from "react";

class Input extends React.Component {
    state = {
        text : ""
    }
    handleInput = event => {
        this.setState({
            text : event.target.value
        })
    }
    render () {
        const {text} = this.state;
        return (
            <div>
                <input type="text" value={text}
                className="text-black p-5"
                onChange={this.handleInput}
                />
                {text ? <p>Hello {text}</p> : text}
            </div>
        )
    }
}
export default Input;