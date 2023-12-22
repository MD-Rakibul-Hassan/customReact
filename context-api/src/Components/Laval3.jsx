import Four from "./Laval4";
import UserContext from "./context/UserContext";
const Three  = ({color,changeBgColor}) => {
    const hadlineColor = color === "dark" ? {backgroundColor : "yellow"} : {backgroundColor : "red"}
    return (
        <div>
            <h1 style={hadlineColor}>I am Three component</h1>
            <button onClick={changeBgColor}> changeBg</button>
            <UserContext.Consumer >
                {
                    ({color,changeColor}) => {
                        return <Four  color = {color} changeColor = {changeColor}/>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
export default Three;
