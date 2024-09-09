import React from 'react'
import { IconSearch,IconTrashFilled,IconStarFilled,IconStar,IconDots} from '@tabler/icons-react';
import { invoicelistdata } from './Datainvoice';
import profile from '../../../../assets/images/user_profile.jpg'
import Navbarinvoice from './Navbarinvoice';
function Invoicelist() {
  return (
  <div className="w-[100%] h-full p-6  flex flex-col gap-3 ">
      <Navbarinvoice/>      
            <div className='w-full flex-grow flex flex-col gap-3 h-full'>
                 <div className='flex px-5 py-3 rounded-lg'>  
                        <div className='flex-1 flex  gap-3'>
                            <label className='flex'><input type='checkbox'  className='size-5 accent-indigo-500'></input></label>
                            <p className='text-gray-500 text-sm '>Invoice Id</p>
                            <label className='flex'>
                                <select className='size-5 text-gray-500 bg-zinc-200'>
                                    <option>Invoice Id</option>
                                </select>
                            </label>
                        </div>
                        <div className='flex-1 flex  gap-3'>
                            <p className=' text-gray-500 text-sm'>Name</p>
                            <label className='flex'>
                                <select  className='size-5 text-gray-500 bg-zinc-200'>
                                 <option>Name</option>
                                </select>
                            </label>
                        </div>
                        <div className='flex-1 flex  gap-3'>
                            <p className=' text-gray-500 text-sm'>Email</p>
                            <label className='flex '>
                                <select  className='size-5 text-gray-500 bg-zinc-200'>
                                  <option>Email</option>
                                </select>
                            </label>
                        </div>
                        <div className='flex-1 flex  gap-3'>
                            <p className='text-gray-500 text-sm'>Date</p>
                            <label className='flex'>
                                <select  className='size-5 text-gray-500 bg-zinc-200'>
                                 <option>Date</option>
                                </select>
                            </label>
                        </div>
                        <div className='flex-1 flex  gap-3'>
                            <p className=' text-gray-500 text-sm'>Status</p>
                            <label className='flex items-center'>
                                <select  className='size-5 text-gray-500 bg-zinc-200'>
                                  <option>Status</option>
                                </select>
                            </label>
                        </div>
                        <div className='flex-intial flex  gap-3 items-center px-5 justify-end'>
                            <IconTrashFilled className='text-gray-500'></IconTrashFilled>
                        </div>
                    </div>    
                </div>
                {invoicelistdata.map((items)=>{
                   return(
                <div className='w-full flex-grow flex flex-col gap-3 h-full'>
                     <div className='flex px-5 py-3 rounded-lg bg-white'>  
                        <div className='flex-1 flex  gap-3 items-center'>
                            <label className='flex'><input type='checkbox' className='size-5 accent-indigo-500 border-gray-200 '></input></label>
                            <p>{items.id}</p>   
                        </div>
                        <div className='flex-1 flex  gap-3 items-center'>
                                <img src={profile} className='size-8  rounded-full'></img>
                                <p>{items.name}</p>
                        </div>
                        <div className='flex-1 flex  gap-3 items-center '>
                            
                                {items.emailicon}
                                <p>{items.email}</p>
                            
                        </div>
                        <div className='flex-1 flex  gap-3 items-center pl-14'>
                            
                               {items.dateicon}
                                <p>{items.date}</p>
                            
                        </div>
                        <div className='flex-1 flex  gap-3'>
                        {items.complete?
                           <div className='flex gap-3  items-center'>
                                <button style={{background:'rgb(0,128,0,0.1)',color:'rgb(0,128,0)',borderRadius:'20px'}} className='w-32 h-10 rounded-md'>{items.button}</button>
                            </div>:(items.pending?<div className='flex gap-3'>
                                <button style={{background:' rgb(255,255,0,0.1)',color:'rgb(255,245,80)',borderRadius:'20px' }} className='w-32 h-10 rounded-md'>{items.button}</button>
                            </div>:(items.cancel?<div className='flex gap-3'>
                                <button style={{background:'rgb(255,0,0,0.1)',color:'rgb(255,0,0)',borderRadius:'20px'}} className='w-32 h-10 rounded-md'>{items.button}</button>
                            </div>:null))}
                        </div>
                        <div className='flex-initial flex  gap-3  items-center px-5 gap-8 justify-end'>
                             {items.stared?<IconStarFilled className='text-yellow-300'/>:<IconStarFilled className='text-gray-300'/>}
                             <IconDots className='text-gray-500 '/>
                        </div> 
                      </div>   
                </div>)})}
</div>
  )
}

export default Invoicelist