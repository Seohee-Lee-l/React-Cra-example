import styled from "styled-components";
// npm install styled-components 설치

// Wrapper, BoxOne, BoxTwo를 div로 변경
const Wrapper=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
`;

const BoxOne=styled.div`
    background-color: #cf6a87;
    width: 100px;
    height: 100px;
`;

const BoxTow=styled.div`
    background-color: #574b90;
    width: 100px;
    height: 100px;
`;

function Samp11() {
    return (
        <Wrapper>
            <BoxOne/>
            <BoxTow/>
        </Wrapper>
    );
}

export default Samp11;