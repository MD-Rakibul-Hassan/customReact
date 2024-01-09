import { useEffect, useState } from "react";

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [isTrue,setIsTrue] = useState(false)
    useEffect( () => {
        console.log("I am side effect of your code")
    },[isTrue])
    return (
        <div>
            {console.log("The browser is rendering on change the count button")}
            <h1>Understanding UseEffect Hook</h1>
            <h2>count : {count}</h2>
            <button
            onClick={() => setCount(count + 1)}
            >Add count</button>
            <div>
                <input type="checkbox" 
                value={isTrue}
                onChange={() => setIsTrue((prev) => !prev)}
                />
                <label htmlFor="">Is true</label>
            </div>
        </div>
    )
}
export default UseEffect;