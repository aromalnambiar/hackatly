import React from 'react'
import styled from 'styled-components'
import BoxVector1 from '../assets/images/BoxVector1.svg'
import RoundedTop1 from '../assets/images/RoundedTop1.svg'
import MobileVector from '../assets/images/MobileVector.svg'

const TopSection = () => {
  return (
    <>  
        <MainDiv>
            <HeadingsTop>
                {/* <FirstHead>KERALA START UP MISSION</FirstHead> */}
                <ForHeadAndItalic>
                    <MainHead>HACK<SpanHead>A</SpanHead>TLY 2.0</MainHead>
                    <ForItalicTxt>#The Ultimate Hackathon!</ForItalicTxt>
                </ForHeadAndItalic>
                <ThirdHead>Organizing by IEDC CE-Thalassery</ThirdHead>
                <DateBox>MAY 04 & 05</DateBox>
            </HeadingsTop>
            <ForCurvedDiv>
                <CurvedImg src={RoundedTop1} alt='Curved Section' />
            </ForCurvedDiv>
            <ForBoxVector>
                <BoxVectorImg src={BoxVector1} alt='Roadmap Img' />
                <MobileVectorImg src={MobileVector} alt='Moblie Size Roadmap' />
                {/* <ImgInnerTxt1>
                    <ImgTxt>Hours</ImgTxt>
                    <ImgNumber>48+</ImgNumber>
                </ImgInnerTxt1>
                <ImgInnerTxt2>
                    <ImgTxt>Teams</ImgTxt>
                    <ImgNumber>20+</ImgNumber>
                </ImgInnerTxt2>
                <ImgInnerTxt3>
                    <ImgTxt>Prize Pool</ImgTxt>
                    <ImgNumber>1,000,00+</ImgNumber>
                </ImgInnerTxt3> */}
            </ForBoxVector>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    color: #FFFFFF;
`

// headings div 
const HeadingsTop = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
`

// const FirstHead = styled.h3`
//     font-weight: 600;
//     font-size: 25px;
//     margin-top: 3rem;
// `

const MainHead = styled.h1`
    font-family: 'Keania One', cursive;
    font-size: 100px;
    font-weight: 400;
    letter-spacing: 0.1rem;

    @media (max-width: 920px) {
        font-size: 80px;
    }

    @media (max-width: 768px) {
        font-size: 65px;
        // margin-top: 5rem
    }

    @media (max-width: 550px) {
        font-size: 50px;
        font-weight: 400;

    }

    @media (max-width: 350px) {
        font-size: 43px;
    }
`

const SpanHead = styled.span`
    color: #01DC82;
`

const ForHeadAndItalic = styled.div`
    position: relative;

    @media (max-width: 800px) {
        margin-top: 1rem;
    }

    @media (max-width: 550px) {
        // margin-top: 5rem;
    }
`

const ForItalicTxt = styled.h5`
    font-style: italic;
    font-weight: 400;
    font-size: 17px;
    position: absolute;
    top: 58%;
    right: 0%;

    @media (max-width: 768px) {
        // margin-top: 1;
        top: 55%;
        font-size: 15px;
    }

    @media (max-width: 550px) {
        font-size: 13px;
    }

    @media (max-width: 350px) {
        top: 50%
    }
`

const ThirdHead = styled.h3`
    font-weight: 600;
    font-size: 22px;
    margin-top: -2rem;

    @media (max-width: 920px) {
        margin-top: -1rem;
    }

    @media (max-width: 800px) {
        font-size: 18px;
    }

    @media (max-width: 550px) {
        font-size: 13px;
        margin-top: -0.6rem;
    }

    @media (max-width: 350px) {
        margin-top: -0.2rem;
    }
`

// Date div 
const DateBox = styled.div`
    width: 225px;
    height: 65px;
    background-color: #003C3C;
    font-size: 23px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 20px;
    box-shadow: 5px 5px #01DC82;

    @media (max-width: 800px) {
        font-size: 18px;
        width: 175px;
        height: 52px;
    }

    @media (max-width: 550px) {
        font-size: 13px;
        font-weight: 500;
        width: 135px;
        height: 46px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`

const ForCurvedDiv = styled.div`
    // background-color: #01DC82;
    // height: 130px;
    margin-top: 2rem;
`

const CurvedImg = styled.img`
    max-inline-size: 100%;
    block-size: auto;
`

// image Box vector 
const ForBoxVector = styled.div`
    position: relative;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
    }
`

const BoxVectorImg = styled.img`
    max-inline-size: 100%;
    block-size: auto;
    aspect-ratio: 2/1;
    object-fit: contain;
    margin-top: -3rem;

    @media (max-width: 600px) {
        display: none;
    }
`

// const ImgInnerTxt1 = styled.div`
//     display: inline;
//     font-size: 18px;
//     font-weight: 700;
//     position: absolute;
//     left: 10.4%;
//     top: 42%;
// `

// const ImgInnerTxt2 = styled.div`
//     display: inline;
//     font-size: 18px;
//     font-weight: 700;
//     position: absolute;
//     left: 48%;
//     top: 52%;
// `

// const ImgInnerTxt3 = styled.div`
//     display: inline;
//     font-size: 18px;
//     font-weight: 700;
//     position: absolute;
//     right: 9%;
//     top: 40.7%;

//     // display: flex;
//     // flex-direction: column;
//     // align-items: center;
// `

// const ImgTxt = styled.h3`
//     margin-bottom: 0;
// `

// const ImgNumber = styled.h3`
//     color: #01DC82;
//     margin-top: 0;
// `


// This section for mobile screen - responsie vector img
const MobileVectorImg = styled.img`
    display: none;
    max-inline-size: 100%;
    block-size: auto;
    object-fit: contain;

    @media (max-width: 600px) {
        display: inline;
        margin: 3rem 0;
    }
`

export default TopSection