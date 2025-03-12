import React, { useState, useEffect } from 'react'


const Form = () => {


// const isActive = [isActive, setIsActive] = useState(false);

// if (isActive)
// {
//   border-2 border-neutral-very-dark-cyan 
// }

  return (
    <div className="pe-3 font-spaceMono">
      <div class="flex items-center appearance-none bg-neutral-very-light-grayish-cyan rounded-md px-3 py-2 w-full">
        <span class="text-neutral-grayish-cyan">$</span>
        <input type="number" 
        value=""
        className="w-full text-right font-bold text-neutral-very-dark-cyan bg-neutral-very-light-grayish-cyan outline-none border-none bg-transparent appearance-none" />
      </div>
    </div>
  )
}

export default Form

// props. 
// Use props for my cards (check typescript lecture)