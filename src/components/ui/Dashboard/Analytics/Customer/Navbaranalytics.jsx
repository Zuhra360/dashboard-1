import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Navbaranalytics() {
  const navigate = useNavigate();

  const handleNavigation = (path)=>{
    navigate(path);
  }
  
  return (
    <div className='flex justify-between  h-fit'>
        <h1 className='font-bold  text-lg'>Customer List</h1>
       
            
            <button className='bg-indigo-500 text-white  h-10 rounded-md w-fit px-5' onClick={()=>handleNavigation('addcustomer')}>
                <div className='flex gap-3'><span>+</span><p>Add customer</p></div>
            </button>
    
    </div>
  )
}

export default Navbaranalytics