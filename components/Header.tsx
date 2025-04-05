"use client";
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(2px + 2.5vw);
    background-color: #0e1111;
    padding: 1.5vw;
`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 40vw;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    color: black;
    background-color: whitesmoke;
    padding: 0 1.5vw;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledNav>
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/gallery">Gallery</StyledLink>
            </StyledNav>
        </StyledHeader>
    );
}