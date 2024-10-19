import { useState } from "react"

export default function(){
    const [count, setCount] = useState(0);

    const handelAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handelReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{border:'1px solid tomato', marginBottom:'20px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}