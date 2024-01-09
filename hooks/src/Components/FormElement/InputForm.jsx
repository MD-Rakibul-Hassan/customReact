import React from "react";

class InputForm extends React.Component {
    state = {
        name : "",
        email : "",
        password : "",
        country : "",
        message : "",
        gender : "",
        isAggry : false,
    }
    handleForm = (event) => {
        this.setState ({
            [event.target.name] : event.target.value,
            isAggry : event.target.checked
        })
    }
    submitBtn = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render () {
        return (
            <div className="mt-5">
                <h1 className="text-4xl">Form Elements</h1>
                <form className="flex flex-col text-black gap-5"> 
                    <input 
                    onChange={this.handleForm}
                    className="w-72 h-10"
                    type="text" 
                    name="name" 
                    />

                    <input 
                    onChange={this.handleForm}
                    className="w-72 h-10"
                    type="email" 
                    name="email" 
                    />

                    <input 
                    onChange={this.handleForm}
                    className="w-72 h-10"
                    type="password" 
                    name="password"  
                    />

                    <select name="country" 
                    onChange={this.handleForm}
                    className="w-72 h-10">
                        <option >Select your country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India </option>
                        <option value="UAE">UAE</option>
                    </select>

                    <textarea name="message" 
                    onChange={this.handleForm}className="w-72 h-10"></textarea>

                    <div className="m-10">
                        <input type="radio" name="gender" value="male" onChange={this.handleForm} />
                        Male
                        <input type="radio" name="gender" value="female" onChange={this.handleForm} />
                        Female
                        <input type="radio" name="gender" value="other" onChange={this.handleForm} />
                        Other
                    </div>

                    <div className="m-10">
                        <input type="checkbox" name="isAggry" checked = {this.state.isAggry} onChange={this.handleForm} />
                        I aggry with all tarms and conditions
                    </div>

                    <button
                     className="bg-amber-600 px-5 text-white py-3 w-72 h-10"
                     onClick={this.submitBtn}>
                     Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default InputForm;
