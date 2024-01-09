
const UCF = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;
        const info = {
            name,
            email,
            pass
        }
        console.log(info)
        
        
    }
    return (
        <div className="text-black">
            <h1>Uncontrol form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" /><br /><br />
                <input type="email" name="email" placeholder="Enter your email" /><br /><br />
                <input type="password" name="password" placeholder="*****" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default UCF;