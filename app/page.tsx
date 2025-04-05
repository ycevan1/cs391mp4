"use client";
import styled from 'styled-components';

const HomeMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 10vw;
    font-size: calc(2px + 2vw)
`;

export default  function Home() {
    return (
        <HomeMessage>
            <h1>Welcome!</h1>
            <h2>Check Out Our Museum Gallery!</h2>
        </HomeMessage>
    );
}