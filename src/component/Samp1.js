function Samp1() {
    function handleOnClick(e) {
        console.log(e.target.name);
    }

    return (
        <>
            <button name="A버튼" onClick={handleOnClick}>A버튼</button>
            <button name="B버튼" onClick={handleOnClick}>B버튼</button>
        </>
    );
}

export default Samp1;