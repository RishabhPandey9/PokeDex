import React from "react";
import loading from "./img/loading.gif";
import {AiOutlineArrowDown} from 'react-icons/ai'

const Spinner = () => {
  return (
    <div className="text-center mt-5">
      {/* <img className="my-3" src={loading} alt="loading" /> */}
      <div className="text-white flex justify-center">
       <div className="animate-bounce ">
        <div className="bg-white w-6 h-6 rounded-full mr-5 text-black flex justify-center pt-1">
        <AiOutlineArrowDown/>
        </div>
      
       </div>
<div>
Scrole down to load more !!
</div>
   
      </div>
    </div>
  );
};

export default Spinner;
