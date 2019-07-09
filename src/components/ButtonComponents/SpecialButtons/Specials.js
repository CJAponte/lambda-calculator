import React, { useState} from "react";
import './special.css'

//import any components needed
import SpecialButton from './SpecialButton'
import { specials } from "../../../data"

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsList, setSpecial] = useState(specials)
  return (
    <div>
       {specialsList.map(special => (
         <SpecialButton specials={special} key={special} />
        ))}
    </div>
  );
};

export default Specials