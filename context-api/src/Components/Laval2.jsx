import Three from "./Laval3";
import UserContext from "./context/UserContext";
const Two  = () => {
    return (
        <div>
            <h1>I am Two component</h1>
            <UserContext.Consumer >
                {
                    ({color,changeBgColor}) => <Three color = {color} changeBgColor = {changeBgColor} />
                }
            </UserContext.Consumer>
        </div>
    )
}
export default Two;