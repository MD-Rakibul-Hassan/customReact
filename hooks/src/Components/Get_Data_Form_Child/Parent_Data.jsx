import Child_data from "./Child_Data";

const Parent_data = () => {
    const getDataFormChild = (data) => {
        console.log(data)
    }
    return (
        <div>
            <Child_data getData = {getDataFormChild}/>
        </div>
    )
}
export default Parent_data;