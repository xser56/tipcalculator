import React from 'react'
import { Card } from 'flowbite-react'

const SelectTip = ({ price }) => {
  return (
    <Card className="bg-neutral-very-dark-cyan text-[24px] font-bold grid grid-cols-3 grid-rows-3 gap-4">
      <div className='text-neutral-very-light-grayish-cyan'>
        Selected Tip: ${price}
      </div>
      
      <div className='text-neutral-very-light-grayish-cyan'>
        1
      </div>

      <div className='text-neutral-very-light-grayish-cyan'>
        1
      </div>
      
    </Card>
  )
}

export default SelectTip
