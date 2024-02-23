// App.jsx
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import './App.css';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Serve from './components/Serve/Serve';
import Training from './components/Training/Training';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
<BrowserRouter>
      <Navbar />
      <Intro />
  
      <Experience/>
      <Training/>
      <Serve/>
      <Works />
      <Portfolio />
      <Routes>
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Services" element={<Services />} />
       <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Testimonial />
      <Contact />
      <Footer />
      </BrowserRouter>
  );
}

export default App;
