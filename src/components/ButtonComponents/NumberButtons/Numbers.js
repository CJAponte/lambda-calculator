import React, { useState } from "react";

import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

import './numbers.css'

const Numbers = (props) => {
  const [numbersList, setNumber] = useState(numbers);

  return (
    <div className="numberBtnsLayout">
      {numbersList.map(number => (
        <NumberButton numbers={number} key={number} handleInput={props.handleInput}/>
        
      ))}
      {console.log(props.handleInput)}
    </div>
  );
};

export default Numbers;