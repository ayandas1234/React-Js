// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>

      <main>
        Welcome to my website
      </main>

      <div className="cards">
      <Card title="card 1" description="card 1 desc" />
        <Card title="card 2" description="card 2 desc" />
        <Card title="card 3" description="card 3 desc" />
        <Card title="card 4" description="card 4 desc" />
      </div>

      <Footer/>
    </>
  )
}

export default App
