import React from 'react'
import Features from '../screens/Features'
import Footer from '../screens/Footer'
import Login from '../screens/Login'
import Products from '../screens/Products'
import Spotlight from '../screens/Spotlight'

function LandingPage() {
  return (
    <>
    <Spotlight />
    <Products />
    {/* <Features /> */}
    <Footer />
    </>
  )
}

export default LandingPage