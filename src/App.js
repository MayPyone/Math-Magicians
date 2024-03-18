import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './compnents/Navbar';
import Calculates from './compnents/Calculator';
import Quote from './Quotes/Quote';
import Home from './Home/Home';

const App = () => {
 return (
   <Router>
    <nav>
     <Navbar />
     </nav>
     <main>
        <Routes>  
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculates />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </main>
   </Router>
 );
};

export default App;