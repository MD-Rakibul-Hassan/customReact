import { useState } from "react";

function Todo () {
    const [list,setList] = useState([]);
    const [item,setItem] = useState ("");
    const addToList = () => {
        list.push(item);
        setList([...list])
    }
    const removeItem = (index) => {
        list.splice(index,1);
        setList([...list]);
    }
    return (
        <div>
            <h1>Todo app</h1>
            <input type="text" 
            onChange={(event) => setItem(event.target.value)}
            placeholder="Add Item" />
            <button onClick={addToList}>Add</button>
            <div>
                {
                    list ? (
                        list.map ((value,index) => {
                            return (
                                <ul>
                                    <li>{value}</li>
                                    <li><button onClick={() => {
                                        removeItem(index)
                                    }}>Remove</button></li>
                                </ul>
                            ) 
                        })
                    ) : ("List is blank")
                }
            </div>
        </div>
    )
}
export default Todo;
