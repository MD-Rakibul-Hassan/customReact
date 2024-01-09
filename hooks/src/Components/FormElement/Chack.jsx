import React from "react";

class Chack extends React.Component {
    state = {
        skills : []
    }
    handleSkills = (event) => {
        if (event.target.checked) {
            this.setState({
                skills : [...this.state.skills,event.target.value]
            })
        }else {
            const skills = this.state.skills.filter((skill) => skill !== event.target.value)
            this.setState({skills})
        }
        
    }
    render () {
        return (
            <div className="mt-10">
                <h1>Chack box events</h1>
                <div>
                    <input type="checkbox" name="skills" value= "JS" checked = {this.state.skills.includes("JS")} onChange={this.handleSkills}  />
                    JavaScript

                    <input type="checkbox" name="skills" value= "PY" checked = {this.state.skills.includes("PY")} onChange={this.handleSkills}  />
                    Python

                    <input type="checkbox" name="skills" value= "C" checked = {this.state.skills.includes("C")} onChange={this.handleSkills}  />
                    C

                    <input type="checkbox" name="skills" value= "C++" checked = {this.state.skills.includes("C++")} onChange={this.handleSkills}  />
                    C++
                </div>
                <button onClick={()=>console.log(this.state)}>Submit</button>
            </div>
        )
    }
}
export default Chack;