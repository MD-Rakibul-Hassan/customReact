import { useEffect, useRef, useState } from "react";

const Pass = () => {
    // All Variabls and Refarences 
    const [length,setLength] = useState(6);
    const [isNum,setIsNum] = useState(false);
    const [isChar,setIsChar] = useState(false);
    const [pass,setPass] = useState("");
    const passwordRef = useRef()
    // Password Generator Method of Function 
    const passwordGenerator = () => {
        let password = "";
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (isNum) string += "0123456789";
        if (isChar) string += "!~@#$%^&*()_+=[]{}`";

        for (let i = 1; i <= length; i++) {
            const random = Math.floor(Math.random() * string.length + 1);
            console.log(random)
            password += string.charAt(random)
        }
        setPass(password)
    }
    // Password Copy Functionalitys Method
    const copyPassword = () => {
        passwordRef.current ?.select()
        window.navigator.clipboard.writeText(pass)
    }

    // Call Password Generator Function Using useEffect Hook
    useEffect( () => {
        passwordGenerator()
    },[setPass,length,isNum,isChar])
    // This is View Layer 
    return (
        <div className="flex flex-col align-middle justify-center w-fit h-fit px-5 py-5 bg-red-300 shadow-xl">
            <div className="flex gap-2">
                <input 
                type="text" 
                placeholder="Password"
                value={pass}
                className="px-5 py-3 rounded-lg lg:w-[500px]"
                readOnly
                ref={passwordRef}
                />
                <button 
                onClick={copyPassword}
                className="px-5 py-3 bg-green-400 rounded-lg">Copy</button>
            </div>
            <div className="mt-2 flex flex-col gap-1 ">
                <input 
                type="range"
                min={6}
                max={20}
                className="cursor-pointer"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                />
                <label className="text-bold">Length {length} </label>
            </div>
            <div className="mt-2">
                <div className="flex gap-2">
                    <input 
                    type="checkbox"
                    className="text-3xl"
                    onChange={() => {
                        setIsNum((prev) => !prev)
                    }}
                    />
                    <label>Add Number</label>
                </div>
                <div className="flex gap-2">
                    <input 
                    type="checkbox"
                    onChange={() => {
                        setIsChar((prev) => !prev)
                    }}
                    />
                    <label>Add Spacel Charactor</label>
                </div>
            </div>
        </div>
    )
}
export default Pass;