import React from 'react'
import  "./Backbtn.css"
import { FaLongArrowAltLeft } from "react-icons/fa";
import NodeDetails from './NodeDetails';

const onClick = () => {
    return (
        <NodeDetails node={node} />
    );
}
const Backbtn = () => {
  return (
    <div className='back-btn-container'>
       <div><button type="button" aria-label="close" className='back-btn' data-state="closed" >
       <FaLongArrowAltLeft />
       </button>

       </div>
    </div>
  )
}

export default Backbtn