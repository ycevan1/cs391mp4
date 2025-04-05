"use client";
import { MuseumProps } from "@/types";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const ArtWorkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 60vw;
    margin: 2vw auto;
    padding: 1vw;
    align-items: center;
    font: italic small-caps bold calc(2px + 1.5vw) Times New Roman, Serif;
    text-align: center;
    border: 3px solid #8296c1;
    border-radius: 0.5vw;
    box-shadow: 0 0 0.35vw black;
    color: white;
    background-color: #4e5363;
`;

const StyledTitle = styled.h2`
    margin: 1.5vw auto;
`;

const StyledImage = styled.img`
    width: 20vw;
    height: 20vw;
    margin-bottom: 1.5vw;
`;

const ArtworkFactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    border-top: 2px solid #8296c1;
`;

const ArtworkFacts = styled.p`
    margin: 0.75vw;
`;

export default function MuseumPreview({ museum }: {museum: MuseumProps}) {
    return (
        <StyledDiv>
            <ArtWorkWrapper>
                <StyledTitle>{museum.title}</StyledTitle>
                <StyledImage src={museum.primaryimageurl} alt={museum.title}  />
                <ArtworkFactsWrapper>
                    <ArtworkFacts>Dimensions: {museum.dimensions}</ArtworkFacts>
                    <ArtworkFacts>Artwork Number: {museum.objectnumber}</ArtworkFacts>
                    <ArtworkFacts>Artwork Classification: {museum.classification}</ArtworkFacts>
                    <ArtworkFacts>Thanks to: {museum.creditline}</ArtworkFacts>
                </ArtworkFactsWrapper>
            </ArtWorkWrapper>
        </StyledDiv>
    );
}