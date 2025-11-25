import {useState} from "react";

function Samp4() {
    const [date, setDate]=useState("");

    const handleOnChange=(e)=> {
        console.log("변경된 값 :", e.target.value);
        setDate(e.target.value);
    }

    return (
        <>
            <input type='date' value={date} onChange={handleOnChange}/>
        </>
    );
}

export default Samp4;