import { useCallback, useEffect, useRef, useState } from "react";



const Password = () => {
    const [password,setPassword] = useState("");
    const [number,setNumber] = useState(false);
    const [charector,setCharector] = useState(false);
    const [length,setLength] = useState(8);
    const passwordRef = useRef();
    const copyPassword = () => {
        passwordRef.current ?.select()
        window.navigator.clipboard.writeText(password)
    }

    const passwordGenerator = useCallback (function () {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (number) str += "0123456789";
        if (charector) str += "!~@#$%^&*()_+=[]{}`";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)


    },[length,charector,number,setPassword])

    useEffect(() => {
        passwordGenerator()
    },[number,charector,passwordGenerator])

    return (
        <div className="w-3/4 h-5/6 px-20 py-10 bg-slate-500">
            <div>
                <input 
                className="w-1/4 h-1/2 px-15 py-10 "
                type="text"
                value={password}
                ref={passwordRef}
                />
                <button
                onClick={copyPassword}
                >Copy</button>
            </div>
            <div>
                <input type="range" 
                min={5}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                />
                <label>Length {length}</label>
            </div>
            <div>
                <input 
                type="checkbox"
                value={number}
                onChange={() => {
                    setNumber((prev) => !prev)
                }}
                />
                isNumber
            </div>
            <div>
                <input 
                type="checkbox"
                value={charector}
                onChange={() => {
                    setCharector((prev) => !prev)
                }}
                />
                isCharactor
            </div>
        </div>
    )
}
export default Password;