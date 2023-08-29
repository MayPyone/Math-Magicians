import { useState } from 'react';
import calculate from '../logic/calculate';

export function Calculates() {
  return (
    <>
      <div className="calculator">
        <h2>Let`s do some math!</h2>
        <ButtonGroup className="group" />
      </div>
    </>

  );
}

export function ButtonGroup() {
  const [cdata, Updatedata] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const AddEvent = (e) => {
    const answer = calculate(cdata, e.target.value);
    Updatedata(answer);
  };

  const showData = () => (
    <>
      {cdata.total}
      {cdata.operation}
      {cdata.next}
    </>
  );

  return (
    <>
      <form>
        <div className="result">
          { showData() }
        </div>
        <div className="buttons">
          <button type="button" value="AC" onClick={AddEvent}>AC</button>
          <button type="button" value="+/-" onClick={AddEvent}>+/-</button>
          <button type="button" value="%" onClick={AddEvent}>%</button>
          <button type="button" className="b-orange" value="÷" onClick={AddEvent}>÷</button>

          <button type="button" value="7" onClick={AddEvent}>7</button>
          <button type="button" value="8" onClick={AddEvent}>8</button>
          <button type="button" value="9" onClick={AddEvent}>9</button>
          <button type="button" className="b-orange" value="x" onClick={AddEvent}>x</button>

          <button type="button" value="4" onClick={AddEvent}>4</button>
          <button type="button" value="5" onClick={AddEvent}>5</button>
          <button type="button" value="6" onClick={AddEvent}>6</button>
          <button type="button" className="b-orange" value="-" onClick={AddEvent}>-</button>

          <button type="button" value="1" onClick={AddEvent}>1</button>
          <button type="button" value="2" onClick={AddEvent}>2</button>
          <button type="button" value="3" onClick={AddEvent}>3</button>
          <button type="button" className="b-orange" value="+" onClick={AddEvent}>+</button>
        </div>
        <div className="last">
          <button type="button" value="0" onClick={AddEvent}>0</button>
          <button type="button" value="." onClick={AddEvent}>.</button>
          <button type="button" className="b-orange" value="=" onClick={AddEvent}>=</button>
        </div>
      </form>
    </>
  );
}
