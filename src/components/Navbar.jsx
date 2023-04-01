import React, { useState } from 'react'
import styled from 'styled-components'
import Home from '../assets/images/Home.svg'
import Legacy from '../assets/images/Legacy.svg'
import Partners from '../assets/images/Partners.svg'
import Topics from '../assets/images/Topics.svg'
import Press from '../assets/images/Press.svg'
import Contact from '../assets/images/Contact.svg'

const Navbar = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

  return (
    <>
        <MainDiv>
            <ForToggleBar>
                <ToggleBarBtn href='#' onClick={toggleModal}>
                    <ForToggleSpan style={{width: '39'}}></ForToggleSpan>
                    <ForToggleSpan style={{width: '37.5'}}></ForToggleSpan>
                    <ForToggleSpan></ForToggleSpan>
                </ToggleBarBtn>
                {modal && (
                    <ModalContainer>
                    <ModelContent>
                        <ForUl>
                            <Link href='#'><ForLi><IconImg src={Home} alt='Home Icon' />Home</ForLi></Link>
                            <Link href='#'><ForLi><IconImg src={Legacy} alt='Legacy Icon' />Our Legacy</ForLi></Link>
                            <Link href='#'><ForLi><IconImg src={Partners} alt='Partners Icon' />Our Partners</ForLi></Link>
                            <Link href='#'><ForLi><IconImg src={Topics} alt='Topic Icon' />Problem Topics</ForLi></Link>
                            <Link href='#'><ForLi><IconImg src={Press} alt='Press Icon' />Press Release</ForLi></Link>
                            <Link href='#'><ForLi><IconImg src={Contact} alt='Contact Icon' />Contact us</ForLi></Link>
                            <RegBtn>Register Now</RegBtn>
                        </ForUl>
                    </ModelContent>
                    </ModalContainer>
                )}
            </ForToggleBar>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    color: #FFFFFF;
`

const ForToggleBar = styled.div`
    // position: absolute;
    // top: 4rem;
    // left: 4rem;

    // @media (max-width: 600px) {
    //     border-top: 0.2px solid #01DC82;
    // }
`

const ToggleBarBtn = styled.a`
    // text-decoration: none;
    // color: #01DC82;
    // padding: 0.2rem;
    // display: block;

    position: absolute;
    top: 3rem;
    left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 36px;
    height: 20px;

    @media (max-width: 550px) {
        top: 1.5rem;
        left: 1.5rem;
    }
`

const ForToggleSpan = styled.span`
    height: 4px;
    width: 100%;
    background-color: #01DC82;
    border-radius: 6px;
`

// Modal Box Section
const ModalContainer = styled.div`
    top: 3.5rem;
    left: 6.5rem;
    position: absolute;
    z-index: 1;

    @media (max-width: 550px) {
        top: 2rem;
        left: 5rem;
    }
`

const ModelContent = styled.div`
    color: #FFFFFF;
    background: rgba(0, 0, 0, 0.95);
    border: 1px solid #01DC82;
    border-radius: 15px;
    padding: 0 2rem;
    padding-top: 1rem;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 550px) {
        padding: 0 0.8rem;
    }
`

const ForUl = styled.ul`
    list-style-type: none;
    padding-left: 0;

    @media (max-width: 550px) {
        margin-top: 2.5rem;
    }
`


const ForLi = styled.li`
    text-align: start;
    line-height: 40px;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.1rem;

    @media (max-width: 550px) {
        font-size: 13px;
        line-height: 34px;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #FFFFFF;
`

const RegBtn = styled.button`
    color: #000000;
    font-size: 17px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0.1rem;
    background-color: #4D9B7B;
    box-shadow: 2px 4px 17px #01DC82;
    border-radius: 10px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    margin-top: 1rem;
    margin-bottom: 5px;
    cursor: pointer;

    &:hover {
        width: 155px;
        line-height: 40px;
    }

    @media (max-width: 550px) {
        font-size: 13px;
        line-height: 28px;
        margin-top: 0.6rem;

        &:hover {
            width: 140px;
            line-height: 33px;
        }
    }
`

const IconImg = styled.img`
    vertical-align: middle;
    padding-right: 12px;
`

export default Navbar