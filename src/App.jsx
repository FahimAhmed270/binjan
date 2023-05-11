import React from 'react'
import Experties from './Component/Experties/Experties'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import Portfolio from './Component/Portfolio/Portfolio'
import Testiminial from './Component/Testiminial/Testiminial'
import Work from './Component/Work/Work'
import './styles/App.scss'

const App = () => {
  return (
    <div className='bg-primary container'>
      <Header/>
      <Hero/>
      <Experties/>
      <Work/>
      <Portfolio/>
      <Testiminial/>
      <Footer/>
    </div>
  )
}

export default App
