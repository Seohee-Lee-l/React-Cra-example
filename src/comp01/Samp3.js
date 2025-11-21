import {useState} from "react";

function Samp3() {
    const [text, setText]=useState("");

    const handleOnChange=(e)=> {
        setText(e.target.value);
    }

    return (
        <>
            <input value={text} onChange={handleOnChange}/>
            <div>{text}</div>
        </>
    );
}

export default Samp3;