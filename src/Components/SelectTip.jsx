import React from 'react'

const SelectTip = ({tip}) => {

  
  return (
    <div className=" text-[24px] font-bold font-spaceMono">
    
      <div className='text-neutral-very-light-grayish-cyan bg-neutral-very-dark-cyan w-[8rem] h-12 flex items-center justify-center rounded-md hover:bg-neutral-light-grayish-cyan'>
        {tip}%
      </div>
       </div>
   
  )
}

export default SelectTip
