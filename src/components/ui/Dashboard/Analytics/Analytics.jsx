import React from 'react'
import { invoice } from '../Home/Data';
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import img from "../../../../assets/images/img.png";
import piechart1 from "../../../../assets/images/pie chart 1.png";
import piechart2 from "../../../../assets/images/pie chart 2.png"
import { BarChart } from '@mantine/charts';
import { report } from '../Home/Data';
import { HiOutlineDotsHorizontal } from "react-icons/hi";


export const Analytics = () => {
  return (
    <div className=' w-[100%] flex flex-row  h-screen'>
       
       <div className='flex-1  border rounded-lg  w-[100%]  bg-slate-100 px-8'>
            <div className='flex flex-row justify-between'>
              <h1 className='text-3xl font-bold'>Customer List</h1>
            <button className='bg-blue-500 text-white p-2 rounded-lg mt-1'>+ Add Customer</button>
            </div>
            
            <div className='flex flex-row ml-12 mt-8 gap-44'>
            <label htmlFor="">Name </label>
            <label htmlFor="">Email</label>
            <label htmlFor="" >Phone Number</label>
            <label htmlFor="">Gender</label>
            </div>

            <div className='flex flex-col w-[100%] h-8 gap-2'>
                  {invoice.map((invoice, name) => (
              <div
                key={name}
                className=" border rounded-lg ml-4 flex py-2 flex-row bg-white space-x-4 gap-8  ">
              
                  <p className=" w-40 ml-8">{invoice.name}</p>
                  <p className=' w-56 '>{invoice.mail}</p>
                  <p className="  w-44 ">{invoice.phno}</p>
                  <p className="  w-44 text-center text-blue-400 bg-sky-100 rounded-lg ml-20">{invoice.gender}</p>
                  <button className=" w-12 items-end " >{invoice.symbol}</button>
              </div>
                
                
              ))}
              </div>


       </div>
       

       <div className='flex-1 border rounded-lg  flex flex-col w-96 p-4 bg-white content-center'>
          <div className=' w-60 h-40 ml-8 bg-white rounded'>
          <img className='ml-20' src={img} w={50} />
            <h2 className=' text-center'>John Deo</h2>
            <p className=' text-center'>UI/UX Designer</p>

          </div>
          <div>
          <hr id="my-line" class="border-t border-gray-300" />
          </div>

          <div className='w-56 h-52 mx-8 my-4 bg-white rounded'>
          <h2 className='mb-6 text-xl font-semibold'>Contact Info</h2>
            <div className='flex flex-row p-2 gap-1  '>
            <IoMail />
            <p >kajope5182@ummoh.com</p>
            </div>
            <div className='flex flex-row p-2 border drop-shadow-lg gap-1'>
            <IoIosCall />
            <p >33757005467</p>
            </div>
            <div className='flex flex-row p-2 gap-1'>
            <FaLocationDot />
            <p>2239 Hog Camp Road Schaumburg</p>
            </div>
          
          </div>

          <div className='w-64 h-56 bg-white mx-8 mb-2 rounded '>
            <div className='flex flex-row justify-between'>
            <h2 className='text-xl font-semibold'>Performance</h2>
            <HiOutlineDotsHorizontal className='m-2' />
            </div>
           
            <BarChart
              className='my-8'
              h={150}
              data={report}
              dataKey="month"
              series={[{ name: 'Smartphones', color: 'orange' }]}
            />
          </div>

          <div className='w-64 h-28 bg-white mx-8 rounded'>
            <div className='flex flex-row'>
            <img src={piechart1} w={50} />
            <img src={piechart2}  w={50} />

            </div>
          </div>






       </div>



    </div>
  )
}
