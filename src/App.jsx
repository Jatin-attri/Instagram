import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'





import {BrowserRouter, Routes, Route } from "react-router"
import HeroSection from './Components/FeedSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <HeroSection/>
      <Routes>
        <Route>

        </Route>
      </Routes>
     <Footer></Footer>
    </BrowserRouter>
     
    </>
  )
}

export default App
