function Samp10() {
    const test={
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '25px',
        textAlign: 'center',
        marginTop: '100px'
    }

    return (
        <>
            <h1 style={{
                color: 'green',
                fontSize: '30px',
                backgroundColor: 'gray',
                width: '200px',
                height: '50px',
                textAlign: 'center',
                marginTop: '50px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                리액트 실습
            </h1>

            <p style={test}>스타일 연습</p>
        </>

        // style={{css속성 : 값, css속성: 값, ···}} >> 인라인 스타일
    );
}

export default Samp10;