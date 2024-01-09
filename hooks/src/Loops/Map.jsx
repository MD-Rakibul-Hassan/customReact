import { Fa5 } from "react-icons/fa6";
const users = [
    {
        name : "Rakibul hassan shehab",
        age : 20,
        city : "Satkhira",
        favgame : ["Cricket","Football","Batminton"]
    },
    {
        name : "Rifat Hossin",
        age : 18,
        city : "Dhaka",
        favgame : ["Hokey","Volybol","Batminton"]
    },
    {
        name : "Afroz Jiba",
        age : 17,
        city : "Khulna",
        favgame : ["Freefire","Cricket","Batminton"]
    }
];

const Info = () => {
    return (
        <div>
            <h1 className="text-4xl">User Informations</h1>
            {users.map((user,index) => {
                const {name,age,city,favgame} = user
                return (
                    <div key={index}>
                        <h3 className="text-2xl">{name} </h3>
                        <p>{name} is <Fa5 /> {age} years old and {name} live in {city} {favgame.map((item,index) => {
                            return (
                                <div key={index}>
                                    <h1>{item}</h1>
                                </div>
                            )
                        })}</p>

                    </div>
                )
            })}
        </div>
    )
}
export default Info;