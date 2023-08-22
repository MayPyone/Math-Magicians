import './index.css';

function App() {
  return (
    <>
      <form>
        <div><input type="text" /></div>
        <div className="buttons">
          <button type="button">Ac</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button">&divide;</button>

          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">&times;</button>

          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">-</button>

          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">+</button>
        </div>
        <div className="last">
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button">=</button>
        </div>
      </form>
    </>
  );
}

export default App;