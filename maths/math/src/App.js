import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <form>
      <div><input type="text" /></div>
      <div className='buttons'>
        <button>Ac</button>
        <button>+/-</button>
        <button>%</button>
        <button>&divide;</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>&times;</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        </div>
        <div className='last'>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        </div>
    </form>
  </>
  );
}

export default App;
