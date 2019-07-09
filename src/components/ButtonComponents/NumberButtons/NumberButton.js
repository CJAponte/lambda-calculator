import React from "react";
import './numbers.css'

const NumberButton = (props) => {
  return (
    <>

      {<button className={`numbersBtn btn-${props.numbers}`} onClick={() => props.handleInput(props.numbers)}>{props.numbers}</button>}
    </>
  );
};

export default NumberButton