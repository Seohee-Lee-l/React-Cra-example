import {useState} from "react";

function Samp2() {
    const [count, setCount]=useState(0);

    const onIncrease=()=> {
        setCount(count+1);
    }

    const onDecrease=()=> {
        setCount(count-1);
    }

    return (
        <>
            <p>{count}</p>
            
            <button onClick={onIncrease}>CLICK1</button>
            <button onClick={onDecrease}>CLICK2</button>
        </>
    );
}

export default Samp2;