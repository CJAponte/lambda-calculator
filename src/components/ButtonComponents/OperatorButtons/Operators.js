import React, { useState } from "react";
import './operators.css'

//import any components needed
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsList, setOperators] = useState(operators);
  return (
    <div>
       {operatorsList.map(operator => (
        <OperatorButton key={operator.char} char={operator.char} />
      ))}
    </div>
  );
};

export default Operators