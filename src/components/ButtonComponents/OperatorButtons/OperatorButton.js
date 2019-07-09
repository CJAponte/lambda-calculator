import React from "react";
import './operators.css'
const OperatorButton = (props) => {
  return (
    <div>

      {<button className="charBtns">{props.char}</button>}
    </div>
  );
};

export default OperatorButton;