import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Katalog from './pages/katalog/Katalog'
import Page3 from './pages/page3/Page3'
import Header from './components/header/Header'
import Page4 from './pages/page4/Page4'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <div className='whole'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='katalog' element={<Katalog />} />
          <Route path='page3' element={<Page3 />} />
          <Route path='page4' element={<Page4 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App