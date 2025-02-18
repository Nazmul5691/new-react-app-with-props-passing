import { useState } from "react"

export default function State(){

    const [count, setCount] = useState(0);


    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }


    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}