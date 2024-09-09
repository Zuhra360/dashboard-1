import React from 'react'
import { IconSearch } from '@tabler/icons-react'
function Navbarinvoice() {
  return (
    <div className='flex justify-between  h-fit'>
        <h1 className='font-bold  text-lg'>Invoice List</h1>
        <div className=' flex gap-4'>
            <div className='flex  items-center px-4 bg-white rounded-lg'>
                <input type='text' placeholder='Search'></input><IconSearch  size={14}/></div>
            <button className='bg-indigo-500 text-white w-28 h-10 rounded-md'>
                <div className='flex px-8 justify-between'><span>+</span>Add</div>
            </button>
        </div>
    </div>

  )
}

export default Navbarinvoice
