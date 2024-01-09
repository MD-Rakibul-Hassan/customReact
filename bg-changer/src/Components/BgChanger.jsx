import { useState } from "react"
const BgChanger = () => {
    const [color,setColor] = useState("#212121");
    return (
        <div className="flex w-full h-screen " style={{backgroundColor : color}}>
            <div className="flex  flex-wrap gap-5 p-10 fixed bottom-10 bg-slate-50">
                <button 
                style={{backgroundColor : "red"}}
                className="bg-red-500 rounded-xl py-3 px-5"
                onClick={ () => setColor("red")}
                >Red</button>

                <button 
                style={{backgroundColor : "yellow"}}
                className="rounded-xl py-3 px-5"
                onClick={ () => setColor("yellow")}
                >Yellow</button>

                <button 
                style={{backgroundColor : "green"}}
                className=" rounded-xl py-3 px-5"
                onClick={ () => setColor("green")}
                >Green</button>

                <button 
                style={{backgroundColor : "blue"}}
                className=" rounded-xl py-3 px-5"
                onClick={ () => setColor("blue")}
                >Blue</button>
                <button 
                style={{backgroundColor : "Aqua"}}
                className=" rounded-xl py-3 px-5"
                onClick={ () => setColor("aqua")}
                >Aqua</button>
            </div>
        </div>
    )
}
export default BgChanger;