import React from 'react'
import "./App.css"
import { BrowserRouter, Route ,Router, Routes} from 'react-router-dom'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Projects from './components/projectes/Projects'
import Skills from './components/skills/Skills'
import Trying from './components/trying/Trying'
import First from './components/projectes/first/First'
import Second from './components/projectes/second/Second'
import Third from './components/projectes/third/Third'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Skills />
      <Routes>
        <Route path="/portifolio" element={<Projects />}>
          <Route path="" element={<First />} />
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
        </Route>
      </Routes>
      <Contact />
      <Footer /> 
    </BrowserRouter>
  );
    
    
}
