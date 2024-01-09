

const Bubling = () => {
    const handleDivClick = (event) => {
        console.log("Prent div clicked" + "=>" , event)
    }
    const handleBtnClick = (event) => {
        event.stopPropagation()
        console.log("Child button clicked"+ "=>" , event)
    }
    
    return (
        <div>
            <h1>Event Bubling</h1>
            <br />
            <div 
            onClick={handleDivClick}
            className="bg-orange-400 w-96 h-80">
                <button 
                onClick={handleBtnClick}
                className="bg-lime-600 p-5">
                    Bubling
                </button>
            </div>
        </div>
    )
}
export default Bubling;