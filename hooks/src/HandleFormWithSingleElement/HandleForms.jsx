import { useState } from "react";

const HandleForms = () => {
    const [user,setUser] = useState({
        name : "",
        email : "",
        password : "",
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    };
    const handleChange = (e) => {
        setUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name : 
                    <input 
                    type="text" 
                    name="name" 
                    value={user.name}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    Email : 
                    <input 
                    type="email" 
                    name="email" 
                    value={user.email}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    Password : 
                    <input 
                    type="password" 
                    name="password" 
                    value={user.password}
                    onChange={handleChange}
                    />
                </div>
                <button className="bg-yellow-400">Submit</button>
            </form>
        </div>
    )
}
export default HandleForms;