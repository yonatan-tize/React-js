import React from 'react'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import MainBody from './components/MainBody'
import NavBar from './components/NavBar'
import './App.css'


function App() {

  return (
    <div className="App">
      <Header />
      <NavBar />
      <MainBody />
      <Aside />
      <Footer />
    </div>
  )
}

export default App
