import React from 'react'
import styled from 'styled-components'
import Manorama from '../assets/images/Manorama.svg'
import IndianExpress from '../assets/images/IndianExpress.svg'
import Dshabhimani from '../assets/images/Deshabhimani.svg'
import KannurVision from '../assets/images/KnanurVision.svg'
import Mathrubhoomi from '../assets/images/Mathrubhumi.svg'

const Featured = () => {
  return (
    <>
        <MainDiv>
            <FeateuredHead>Featured in</FeateuredHead>
            <ImasgesContainer>
                <ForThreeBox>
                    <FeaturedImg src={Manorama} alt='Manorama Img' /> 
                    <FeaturedImg src={IndianExpress} alt='IndianExpress Img' /> 
                    <FeaturedImg src={Dshabhimani} alt='Deshabhimani Img' /> 
                </ForThreeBox>
                <ForTwoBox>
                    <FeaturedImg src={KannurVision} alt='KannurVision Img' />
                    <FeaturedImg src={Mathrubhoomi} alt='KannurVision Img' />
                </ForTwoBox>
            </ImasgesContainer>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    color: #FFFFFF;
    font-family: 'Montserrat';
`

// Heading
const FeateuredHead = styled.h3`
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    margin-top: -2rem;

    @media (max-width: 700px) {
        font-size: 30px;
    }

    @media (max-width: 550px) {
        font-size: 22px;
        margin-top: -1rem;
        margin-bottom: 1rem;
    }
`

// images section
const ImasgesContainer = styled.div`
    padding: 0 3rem;
`

const ForThreeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 3rem;

    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: space-evenly;
        margin-bottom: 0;
    }
`

const ForTwoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 3rem;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`

// const RoundedBox = styled.div`
//     background-color: #01DC82;
//     border-raidus: 10px;
// `

const FeaturedImg = styled.img`
    max-inline-size: 100%;
    block-size: auto;

    @media (max-width: 1270px) {
        width: 300px;
    }

    @media (max-width: 1000px) {
        width: 250px;
    }

    @media (max-width: 850px) {
        margin-bottom: 2.5rem;
    }
`

export default Featured