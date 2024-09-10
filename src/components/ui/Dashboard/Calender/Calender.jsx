import { Box, Flex } from '@mantine/core'
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import calimg1 from '../../../../assets/images/calimg1.png'




export const Calender = () => {
    const [date,setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
    
  return (
    <Flex className='w-[100%] flex flex-col h-screen bg-slate-100 '>
        <div className='flex flex-row h-20 p-4 justify-between'>
            <h3 className='text-3xl font-bold'>Calender</h3>
            <div className='flex flex-row gap-4 '>
            <button className=' bg-blue-100 hover:bg-blue-500 hover:text-white px-4 rounded-lg'>Day</button>
            <button className=' bg-blue-100 hover:bg-blue-500 hover:text-white px-4 rounded-lg'>Week</button>
            <button className=' bg-blue-100 hover:bg-blue-500 hover:text-white px-4 rounded-lg'>Month</button>
            <button className=' bg-blue-100 hover:bg-blue-500 hover:text-white px-4 rounded-lg'>Year</button>
            </div>
            
        </div>
        <div className='flex flex-row'>
        <Box className='w-72 m-4 bg-white flex flex-col items-center gap-8' h={700}>
            <button className='bg-blue-500 text-white p-2 w-56 m-6  rounded-lg'>+ Create Schedule</button>
            <div className='flex flex-col justify-center items-center'>
            <Calendar onChange={onChange} value={date} style={{width: "150px"}} />
            </div> 
            <div className='w-56 h-68  p-2 gap-4'>
                <h1 className='text-2xl font-semibold'>People</h1>
                <input className='bg-gray-100 items-center w-52 rounded p-2 my-4'
                type='text'
                placeholder='search for people'/>
                
                <div className='text-gray-700'>
                    <p>Eddie Lobanovskiy</p>
                    <p>laboanovskiy@gmail.com</p>
                </div>
                 
                <div className='text-gray-700'>
                    <p>Eddie Lobanovskiy</p>
                    <p>laboanovskiy@gmail.com</p>
                </div>
                <div className='text-gray-700'>
                    <p>Eddie Lobanovskiy</p>
                    <p>laboanovskiy@gmail.com</p>
                </div>
            </div>    
            <div>
                <button className='bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg'>My Schedule</button>
            </div>
                

        </Box>

        <Box className='flex-1 w-8/12 bg-gray-200 mt-4' h={700}>
       

        </Box>
        </div>








    </Flex>
  )
}
