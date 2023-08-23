export function Calculate() {
  return (
    <>
      <ButtonGroup />
    </>

  );
}

function UserInput() {
  return (
    <div className="result">
      0
    </div>
  );
}

export function ButtonGroup() {
  return (
    <>
      <form>
        <UserInput />
        <div className="buttons">
          <button type="button">Ac</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="b-orange">&divide;</button>

          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="b-orange">&times;</button>

          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="b-orange">-</button>

          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="b-orange">+</button>
        </div>
        <div className="last">
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button" className="b-orange">=</button>
        </div>
      </form>
    </>
  );
}
