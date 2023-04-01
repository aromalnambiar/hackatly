import React from 'react'
import styled from 'styled-components';
import '../App.css'

const Legacy = () => {
  return (
    <>
        <MainDiv>
            <ForMiddleContainer>
                <ForLegacy>
                    <LegacyTxt><LegacySpan>Our</LegacySpan> <br /> Legacy</LegacyTxt>
                </ForLegacy>
                <ForDesc>
                    <ParaText>HACKTLY-23 is a 2 day hackathon conducted by IEDC College of Engineering Thalassery as part of our tech fest Agnitus.
In this event we'll provide certain problem statements and each team has to bring the most useful and economical solutions that can be worked out in the proper manner. The time limit will be 48 hours. The event is scheduled for 4 and 5 May 2023.We aim to invite 25+ teams all over the state to solve the problem statements identified.</ParaText>
                    <HeadingsTop>
                        <MainHead>HACK<SpanHead>A</SpanHead>TLY<HifenSpan>-</HifenSpan><SpanHead>22</SpanHead></MainHead>
                    </HeadingsTop>
                    <BtnDiv>
                        <ReadMoreBtn>Read More !</ReadMoreBtn>
                    </BtnDiv>
                </ForDesc>
            </ForMiddleContainer>
        </MainDiv>    
    </>
  )
}

const MainDiv = styled.div` 
    color: #FFFFFF;
    margin-top: -5rem;

    @media (max-width: 920px) {
        margin-top: -3rem;;
    }

    @media (max-width: 600px) {
        margin-top: -1rem;
    }
`

const ForMiddleContainer = styled.div`
    display: flex;
    // align-items: center;
    justify-content: center;
    border: 2px solid #FFFFFF;
    border-left: none;
    border-right: none;
    padding: 0 2rem;
    padding-top: 4rem;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 0;
    }
`

// left section
const ForLegacy = styled.div`
    flex-grow: 1;
    font-family: 'Vermin Vibes';
`

const LegacyTxt = styled.h3`
    font-family: 'Vermin Vibes';
    writing-mode: vertical-rl;
    font-weight: 400;
    font-size: 70px;
    letter-spacing: 0.7rem;
    text-transform: uppercase;
    margin-left: 0;
    line-height: 80px;

    @media (max-width: 700px) {
        writing-mode: rl;
        font-size: 55px;
        line-height: 60px;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    @media (max-width: 550px) {
        font-size: 47px;
        margin-top: -8px;
        line-height: 45px;
    }
`

const LegacySpan = styled.span`
    color: #A7D9C4;
    // opacity: .9;

    @media (max-width: 550px) {
        font-size: 21px;
    }
`

// right section
const ForDesc = styled.div`
    flex-grow: 10;
`

const ParaText = styled.p`
    font-weight: 600;
    font-size: 21px;
    margin-top: 0;
    font-family: 'Exo', sans-serif;

    @media (max-width: 700px) {
        font-size: 17px;
        line-height: 35px;
        text-align: center;
        padding: 0 1rem;
    }

    @media (max-width: 550px) {
        font-size: 13px;
        line-height: 40px;
    }
`

// copyed from TopSection
const HeadingsTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MainHead = styled.h1`
    font-family: 'Keania One', cursive;
    font-size: 100px;
    font-weight: 400;
    letter-spacing: 0.1rem;
    margin-top: 0;
    margin-bottom: 0;

    @media (max-width: 950px) {
        font-size: 75px;
    }

    @media (max-width: 790px) {
        font-size: 60px;
    }

    @media (max-width: 550px) {
        font-size: 50px;   
    }

    @media (max-width: 350px) {
        font-size: 43px;
    }
`

const SpanHead = styled.span`
    color: #01DC82;
`

const HifenSpan = styled.span`
    color: #003C3C;
`

const ReadMoreBtn = styled.button`
    background-color: #01DC82;
    color: #003C3C;
    width: 190px;
    line-height: 35px; 
    letter-spacing: 0.1em;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Exo', sans-serif;
    border-radius: 15px;  
    border: none;
    cursor: pointer;
    opacity: 0.6;

    &:hover {
        filter: drop-shadow(2px 4px 17px #01DC82);
        opacity: 1;
        width: 210px;
        line-height: 43px;
    }

    @media (max-width: 550px) {
        font-size: 15px;
        width: 137px;
        border-radius: 8px;

        &:hover {
            width: 160px;
            
        }
    }
`

const BtnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 700px) {
        justify-content: center;
    }
`


export default Legacy