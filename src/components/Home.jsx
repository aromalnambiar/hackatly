import React from 'react'
import styled from 'styled-components'
import Featured from './Featured'
import Footer from './Footer'
import Legacy from './Legacy'
import Navbar from './Navbar'
import Partners from './Partners'
import TopSection from './TopSection'

const Home = () => {
  return (
    <>
        <MainDiv>
            <Navbar />
            <TopSection />
            <Legacy />
            <Partners />
            <Featured />
            <Footer />
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    background-color: #000000;
`

export default Home