import React from "react";
import './special.css'
const SpecialButton = (props) => {
  return (
    <>
      {<button className="specialBtn">{props.specials}</button>}
    </>
  );
};

export default SpecialButton