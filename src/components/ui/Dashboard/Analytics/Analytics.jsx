import React from 'react'
import Customerlist from './Customerlist'
import Customerinformation from './Customer/Customerinformation'
import { Navbar } from '../Navbar/Navbar'
import Navbaranalytics from './Customer/Navbaranalytics'
import NavbarAddcustomer from './AddCustomer/NavbarAddcustomer'
import AddcustomerForm from './AddCustomer/AddcustomerForm'
import { Outlet } from 'react-router-dom'

export const Analytics = () => {
  return (
  <div className='flex flex-row w-full h-full'>
     <div className='w-full flex flex-col p-6 gap-5'>
          <Navbaranalytics/>
         <Customerlist/>
      
     </div>
      
       
        
        <Customerinformation/>
        <Outlet/>
       
  </div>
  )
}
