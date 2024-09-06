import React from 'react'
import { FiChevronDown } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className=" p-4 ml-56 w-10/12">
        <div className='flex flex-row text-black justify-between '>
        <h2 className='text-3xl mb-4 font-bold'>Dashboard</h2>
        <div>

        <label className='text-lg bg-white rounded mr-4 border-slate-400 text-slate-400 border-2'>10-06-2021
        <button className=''>
        <FiChevronDown />
        </button>
        </label>
        <label className='text-lg bg-white rounded mr-4  border-slate-400 text-slate-400 border-2'>10-10-2021
        <button className=''>
        <FiChevronDown />
        </button>
        </label>
        

        
        </div>
        </div>
    </div>
  )
}
