import React from "react";

class CF extends React.Component {
    state = {
        name : '',
        email : '',
        password : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        
    }
    render () {
        const {name,email,password} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" 
                    onChange={this.handleChange}
                    placeholder="Enter your name" /><br /><br />
                    <input type="email" name="email" 
                    onChange={this.handleChange}
                    placeholder="Enter your email" /><br /><br />
                    <input type="password"
                    onChange={this.handleChange}
                     name="password" placeholder="*****" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default CF;
