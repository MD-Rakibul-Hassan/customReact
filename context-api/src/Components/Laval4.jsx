const Four  = ({color,changeColor}) => {
    console.log(color)
    const hadingStyle = color === "dark" ? {color : "red"} : {color : "blue"} 
    return (
        <div>
            <h1 style={hadingStyle}>I am Four component</h1>
            <button type="button" onClick={changeColor}>change color</button>
        </div>
    )
}
export default Four;