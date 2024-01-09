import './index.css';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Calculates from './compnents/Calculator';
import Quote from './Quotes/Quote';
import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Math Magicians</h1>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">Calculator</NavLink>
            <NavLink to="quote">Quotes</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<Calculates />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
