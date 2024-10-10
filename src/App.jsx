import { React, useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Nav from './components/navbar.jsx';
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx';
import About from './pages/about.jsx'
import Team from './pages/team.jsx'
import Contact from './pages/contact.jsx'
function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />

      </div>

    </>
  )
}

export default App
