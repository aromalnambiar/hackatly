import React from 'react'
import styled from 'styled-components'
import PartnerLogo from '../assets/images/PartnerLogo.svg'
import AnncounceBar1 from '../assets/images/AnnounceBar1.svg'
import Themes from '../assets/images/Themes.svg'
import MobileThemes from '../assets/images/MobileThemes.svg'

const Partners = () => {
  return (
    <>
        <MainDiv>
          <HeadingPartner>
            <MainHead><HeadSpan><HeadStart>O</HeadStart>ur</HeadSpan> <HeadStart>P</HeadStart>ARTNERS</MainHead>
          </HeadingPartner>
          <LogoAndTxt>
            <PartnersLogo src={PartnerLogo} alt='Partner Logo' />
            <TxtUnderLg>Event Collaborator</TxtUnderLg>
            <OtherPartnr>Other Major Partners</OtherPartnr>
          </LogoAndTxt>
          <AnnounceSection>
            <AnnounceImg src={AnncounceBar1} alt='Announce soon bar' />
          </AnnounceSection>
          {/* Problem Theme section */}
          <ProblemThemes>
            <ProblemHead>Problem Themes</ProblemHead>
            <ForImg>
              <ProblemImg src={Themes} alt='Problems Theme' />
              <MobileThemeImg src={MobileThemes} alt='Moblie screen Theme' />
            </ForImg>
          </ProblemThemes>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    color: #FFFFFF;
`

// headings section
const HeadingPartner = styled.div`
  font-family: 'Montserrat';
  word-spacing: 1rem;
  padding-left: 2rem;

  @media (max-width: 550px) {
    margin-top: 2.5rem;
  }
`

const MainHead = styled.h2`
  font-size: 35px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 700px) {
    text-align: center;
    font-size: 28px;
  }

  @media (max-width: 550px) {
    font-size: 22px;
    font-weight: 600;
    word-spacing: 6px;
  }
`

const HeadSpan = styled.span`
  color: #A7D9C4;
`

const HeadStart = styled.span`
  font-size: 50px;
  font-weight: 800;

  @media (max-width: 700px) {
    font-size: 43px;
  }

  @media (max-width: 550px) {
    font-size: 38px;
  }
`

// Logo and txt section
const LogoAndTxt = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';

  @media (max-width: 700px) {
    margin-top: 4rem;
  }

  @media (max-width: 550px) {
    margin-top: 3rem;
  }
`

const PartnersLogo = styled.img`
  @media (max-width: 550px) {
    width: 200px;
    height: 130px;
  }
`

const TxtUnderLg = styled.h3`
  font-weight: 600;
  font-size: 31px;

  @media (max-width: 700px) {
    font-size: 27px;
  }

  @media (max-width: 550px) {
    font-size: 25px;
  }
`

const OtherPartnr = styled.h3`
  font-weight: 600;
  font-size: 29px;

  @media (max-width: 700px) {
    font-size: 25px;
  }

  @media (max-width: 550px) {
    font-size: 20px;
    margin-top: 4px;
    margin-bottom: 2rem;
  }
`

// Announce soon bar
const AnnounceSection = styled.div`

`

const AnnounceImg = styled.img`
  max-inline-size: 100%;
  block-size: auto;
  // aspect-ratio: 2/1;
  object-fit: contain;
`

// Problem themes container 
const ProblemThemes = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 0 3rem;
  font-family: 'Montserrat';

  @media (max-width: 700px) {
    margin-top: 0;
    padding: 0 1rem;
  }
`

const ProblemHead = styled.h3`
  padding-top: 8rem;
  font-size: 40px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 30px;
    padding-top: 4.5rem;
  }

  @media (max-width: 550px) {
    padding-top: 2rem;
    font-size: 21px;
  }
`

const ForImg = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
  text-align: center;
`

const ProblemImg = styled.img`
  max-inline-size: 100%;
  block-size: auto;

  @media (max-width: 600px) {
    display: none;
  }
`

// This section for mobile screen - theme responsive img
const MobileThemeImg = styled.img`
    display: none;
    max-inline-size: 100%;
    block-size: auto;
    object-fit: contain;

    @media (max-width: 600px) {
      display: inline;
    }
`

export default Partners