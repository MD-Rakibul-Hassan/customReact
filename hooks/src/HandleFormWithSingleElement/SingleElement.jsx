import { useState } from "react"

const SingleElement = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState();

    const hadleNameChange = (e) => setName(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        const useInfo = {
            name,email,password
        }
        console.log(useInfo)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                Name : 
                <input 
                type="text" 
                name="name" 
                value={name}
                onChange={hadleNameChange}
                />
                Email :
                <input 
                type="email" 
                name="email"  
                value={email}
                onChange={handleEmailChange}
                />
                Password :
                <input 
                type="password" 
                name="password"  
                value={password}
                onChange={handlePasswordChange}
                />
                <button
                className="bg-red-400 p-5"
                >
                    Register
                </button>
           </form>
        </div>
    )
}
export default SingleElement;