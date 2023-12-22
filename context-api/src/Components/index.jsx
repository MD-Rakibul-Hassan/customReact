import React from "react";
import One from "./Laval1";
import UserContext from "./context/UserContext";

class Index extends React.Component {
    state = {
        color : "dark"
    }
    changeColor = () => {
        this.setState ( ({color}) => {
            if(color === "dark") {
                return {
                    color : "light"
                }
            }else {
                return {
                    color : "dark"
                }
            }
        })
    }
    changeBgColor = () => {
        console.log("hello world")
        this.setState ( ({color}) => {
            if(color === "light") {
                return {
                    color : "dark"
                }
            }else {
                return {
                    color : "light"
                }
            }
        })
    }
    render () {
        const {color} = this.state;
        return (
            <div>
                <h1>This is components index</h1>
                <UserContext.Provider  value={{color,changeColor : this.changeColor,changeBgColor :this.changeBgColor }}>
                    <One/>
                </UserContext.Provider>
            </div>
        )
    }
}
export default Index;