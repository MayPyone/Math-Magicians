import './index.css';
import { Calculates } from './compnents/Calculator';
import { Quote, Footer } from './Quotes/Quote';

function App() {
  return (
    <>
      <div className="main">
        <Calculates />
        <Quote />
        <Footer />
      </div>
    </>

  );
}

export default App;
