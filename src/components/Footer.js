import React from 'react'
import styled from 'styled-components'
import IEDClogo from '../assets/images/IEDClogo.svg'
import FB from '../assets/images/FB.svg'
import Insta from '../assets/images/Insta.svg'
import Linkedin from '../assets/images/Linkedin.svg'
import Github from '../assets/images/Github.svg'
import Discord from '../assets/images/Discord.svg'

const Footer = () => {
  return (
    <>
        <MainDiv>
            <FooterMain>
                <LeftSection>
                    <ForLogo>
                        <IEDCLogo src={IEDClogo} alt='IEDC Logo' />
                    </ForLogo>
                    <ParaLogo>IEDC College of Engineering is the Tech Game <br /> Changer of the Institution, can change the total <br /> Environment of Innovation & Entrepreneurship.</ParaLogo>
                    <ForSocialMedia>
                        <SocialIcons src={FB} alt='Facebook' />
                        <SocialIcons src={Insta} alt='Instagram' />
                        <SocialIcons src={Linkedin} alt='Linkedin' />
                        <SocialIcons src={Github} alt='GitHub' />
                        <SocialIcons src={Discord} alt='Discord' />
                    </ForSocialMedia>
                </LeftSection>
                <CenterSection>
                    <FooterHeading>About us</FooterHeading>
                    <OtherLinks href='#'>IEDC CE-Thalassery</OtherLinks>
                    <OtherLinks href='#'>College of Engineering Thalassery</OtherLinks>
                    <OtherLinks href='#'>Agnitus-23</OtherLinks>
                    <OtherLinks href='#'>HACKATLY-22</OtherLinks>
                    <OtherLinks href='#'>Kerala Start Up Mission</OtherLinks>
                </CenterSection>
                <RightSection>
                    <FooterHeading>Quick Links</FooterHeading>
                    <OtherLinks href='#'>For Registration</OtherLinks>
                    <OtherLinks href='#'>Other Event Registration</OtherLinks>
                    <OtherLinks href='#'>Our Collaborations</OtherLinks>
                    <ForRegBtn>
                        <RegBtn>Register Now !</RegBtn>
                    </ForRegBtn>
                </RightSection>
            </FooterMain>
            <FooterEnd>
                <ForEndTxts>
                    <CopyrightSection>© 2023 IEDC CE-Thalassery.  All Rights Reserved</CopyrightSection>
                    <PoweredTxt>Powered by <PowerSpan>Imiot</PowerSpan></PoweredTxt>
                    <PoweredTxt1>Powered by <PowerSpan>Imiot</PowerSpan> Made with <MobileSpan>IEDC CE-TLY</MobileSpan></PoweredTxt1>
                </ForEndTxts>
            </FooterEnd>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    color: #FFFFFF;
`

// Main sections of footer
const FooterMain = styled.div`
    background-color: #003C3C;
    padding-top: 3.5rem;
    display: flex;
    font-family: 'Montserrat';
    padding-bottom: 2rem;

    @media (max-width: 850px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`

// left side of main footer
const LeftSection = styled.div`
    flex-grow: 1;
    padding-left: 3rem;

    @media (max-width: 950px) {
        padding-left: 1.5rem;
    }

    @media (max-width: 850px) {
        padding-left: 2rem;
    }

    @media (max-width: 550px) {
        padding-left: 1rem;
    }
`

// img iedc
const ForLogo = styled.div`

`

const IEDCLogo = styled.img`
    @media (max-width: 550px) {
        width: 150px;
    }
`

// pargaraph below logo
const ParaLogo = styled.p`
    font-weight: 500;
    font-size: 12px;
    display: inline-block;
    line-height: 20px;

    @media (max-width: 550px) {
        font-size: 10px;
        line-height: 16px;
    }
`

// social media icons 
const ForSocialMedia = styled.div`
    display: flex;
    width: 287px;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    @media (max-width: 550px) {
        justify-content: normal;
        gap: 10px;
    }
`

const SocialIcons = styled.img`
    
`


// center of main footer
const CenterSection = styled.div`
    flex-grow: 1;
    padding-left: 3rem;

    @media (max-width: 950px) {
        padding-left: 2rem;
    }

    @media (max-width: 550px) {
        padding-left: 1rem;
    }
`

const FooterHeading = styled.h3`
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    margin-top: 5px;

    @media (max-width: 550px) {
        font-size: 15px;
    }
`


const OtherLinks = styled.a`
    text-decoration: none;
    display: block;
    width: fit-content;
    color: #FFFFFF;
    line-height: 33px;
    font-weight: 500;
    font-size: 15px;

    @media (max-width: 768px) {
        margin-left: 10px;
    }

    @media (max-width: 550px) {
        font-size: 12px;
    }
`

// right of main footer
const RightSection = styled.div`
    flex-grow: 1;
    padding-left: 3rem;

    @media (max-width: 950px) {
        padding-left: 1rem;
    }

    @media (max-width: 850px) {
        padding-left: 2rem;
    }

    @media (max-width: 550px) {
        padding-left: 1rem;
    }
`

// right register button
const ForRegBtn = styled.div`
    margin-top: 1rem;

    @media (max-width: 950px) {
        padding-right: 12px;
    }

    @media (max-width: 550px) {
        padding-right: 0;
    }
`

const RegBtn = styled.button`
    color: #FFFFFF;
    font-weight: 700;
    font-size: 17px;
    font-family: 'Montserrat';
    line-height: 40px;
    background-color: #08814F;
    width: 220px;
    cursor: pointer;
    border: double 1px transparent;
    border-radius: 30px;
    background-image: linear-gradient(#08814F, #08814F), radial-gradient(circle at top left, #ECEAFC, #01DC82);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    box-shadow: 2px 4px 17px rgba(1, 220, 130, 0.3);

    @media (max-width: 550px) {
        font-size: 15px;
        line-height: 30px;
        width: 190px;
        border-radius: 10px;
    }
`

// bottom changed color bar in footer
const FooterEnd = styled.div`
    background-color: #01DC82;
    padding: 0 1rem;
    color: #003C3C;
`

const ForEndTxts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Montserrat';

    @media (max-width: 550px) {
        justify-content: center;
    }
`

const CopyrightSection = styled.h3`
    margin: 0;
    font-weight: 600;
    font-size: 16px;

    @media (max-width: 550px) {
        display: none;
    }
`

const PoweredTxt = styled.h3`
    color: #003C3C;
    font-weight: 400;
    font-size: 14px;

    @media (max-width: 550px) {
        display: none;
    }
`

const PowerSpan = styled.span`
    color: #6100FF;
    font-weight: 700;
    font-size: 15px;
`

// This section is doing End footer bar Contents- hiding current content and displaying mobie size content
const PoweredTxt1 = styled.h3`
    display: none;
    color: #003C3C;
    font-weight: 400;
    font-size: 14px;

    @media (max-width: 550px) {
        display: inline;
        font-size: 12px;
        word-spacing: 1px;
    }
`
const MobileSpan = styled.span`
    color: #003C3C;
    font-weight: 700;
    font-size: 14px;
`

export default Footer