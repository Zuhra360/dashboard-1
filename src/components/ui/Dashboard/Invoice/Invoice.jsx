import React from 'react'
import image from '../../../../assets/images/image.png'
import { Table } from '@mantine/core';
import { tabledata } from '../Home/Data';
export const Invoice = () => {
        const rows = tabledata.map((tabledata) => (
          <Table.Tr key={tabledata.name}>
            <Table.Td className='text-blue-600'>{tabledata.name}</Table.Td>
            <Table.Td>{tabledata.rate}</Table.Td>
            <Table.Td>{tabledata.qty}</Table.Td>
            <Table.Td className='text-green-500'>{tabledata.amount}</Table.Td>
          </Table.Tr>
        ));
  return (
    <div className=' w-[100%] flex flex-row  h-screen bg-slate-100'>

        <div className='flex-1 flex flex-col gap-2 border rounded-lg  w-[100%] m-8 mt-4 pb-24 bg-white  '>
           <h1 className='text-3xl font-bold p-2'>Create New Invoice</h1>
           <img src={image}  className='ml-56 my-4 w-28 ' />
           <div className='flex flex-row w-10/12 gap-8 mb-4 justify-between'>
           <box className='flex flex-col  w-56 h-20 ml-12'>
                <label className='font-bold mb-2'>Invoice id</label>
                <input 
                    id="date" 
                    type="date"
                    className='bg-slate-100 rounded h-10'
                    required
                     />
                
            </box>
            <box className='flex flex-col  w-56 h-20'>
                <label className='font-bold mb-2'>Date</label>
                <input 
                    id="date" 
                    type="date"
                    className='bg-slate-100 rounded h-10'
                    required
                     />
                
            </box>
           </div>

           <box className='flex flex-col w-10/12 h-20 ml-12'>
           <label className='font-bold'>Name</label>
           <input 
               type="text"
               className='bg-slate-100 rounded h-10' required/>

            </box>

            <box className='flex flex-row w-10/12 h-20  ml-12 gap-8'>
            <box className='flex flex-col w-60 h-20   '>
                <h3 className='font-bold '>Email</h3>
                <input
                type="email"
                className='bg-slate-100 rounded h-10'
                placeholder='Example@gmail.com' required/>
             </box>
             <box className='flex flex-col w-60 h-20   '>
                <h3 className='font-bold'>Address</h3>
                <input
                type="email"
                className='bg-slate-100 rounded h-10'
                placeholder='Street' required/>
             </box>

            </box>

            <box className='flex flex-col h-56 w-10/12 ml-12 '>
            <div className='flex flex-row justify-between'>
            <h3 className='text-xl font-bold'>Product Description</h3>
            <button className='bg-blue-500 text-white px-2 text-2xl rounded-lg m-2'>+</button>
            </div>
            
            <Table>
            <Table.Thead>
                <Table.Tr>
                <Table.Th>Product Name</Table.Th>
                <Table.Th>Rate</Table.Th>
                <Table.Th>QTY</Table.Th>
                <Table.Th>Amount </Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
            </Table>
            </box>
            <box className='flex flex-row h-56 w-10/12 ml-12  gap-8'>
            <button className=' ml-14 w-44 h-8 bg-white border-blue-500 bg-white border text-blue-500 rounded'>Send Invoice</button>
            <button className='w-44 h-8 bg-blue-500 text white rounded'>Create Invoice</button>

            </box>

        </div>








        <div className='flex-1  border rounded-lg  w-[100%] m-8  bg-white px-8'>
            hlo

        </div>

    </div>
  )
}
