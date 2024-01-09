import { useState } from "react";

const UseStateHook = () => {
    let [counter,setCounter] = useState(0);
    const incriseCounter = () => {
        if (counter < 20) {
            setCounter (counter + 1)
        }
    }
    const decriseCounter = () => {
        if (counter) {
            setCounter(counter - 1)
        }
    }
    return (
        <div className="bg-amber-500 p-8">
            <h3>Counter value : {counter}</h3>
            <button className="bg-green-500 px-5 py-2 rounded-sm"  onClick={incriseCounter}>Incrise</button>
            <button className="bg-gray-500 px-5 py-2 rounded-sm ml-2" onClick={decriseCounter}>Decrise</button>
        </div>
    )
}
export default UseStateHook;