import React from 'react'
import {orderdetailsdata,sellingproductdata} from './Data'
import { IconDots,IconStarFilled} from '@tabler/icons-react'

function OrdersProducts() {
  return (
    <div className='flex flex-row w-[100%] gap-5'>
    <div className='basis-8/12 w-full h-full bg-white rounded flex flex-col p-4'>
          <div className=' bg-white'>
             <div className='flex justify-between items-center'>
               <h4 className='text-lg text-gray-500 font-bold'>Recent Orders</h4>
               <IconDots className='pt-2'/>
             </div>
          </div >
          <div className=' flex-grow rounded  bg-gray-50'>
           <table className=' rounded p-2 w-full h-full gap-3'>
                <thead>
                  <tr className=''>
                     <td><p className=' text-sm text-gray-700 pl-3 py-3'>Tracking no</p></td>
                     <td><p className='text-sm text-gray-700'>Product Name</p></td>
                     <td><p className='text-sm text-gray-700'>Price</p></td>
                     <td><p className='text-sm text-gray-700'>Total Order</p></td>
                     <td><p className='text-sm text-gray-700'>Total Amount</p></td>
                    </tr>   
                  </thead>
                  {/* <hr></hr> */}
                  <tbody>
                  {orderdetailsdata.map((items)=>{
                    return(
                    
                  <tr className=' hover:bg-gray-100 p-2' key={items.trackingno}>
                     <td><p className=' text-sm text-gray-600 pl-3'>{items.trackingno}</p></td>
                      <td className=' text-sm text-gray-600'>
                        <div className='flex items-center gap-2 '>
                          <img src={items.img}></img>
                          <p>{items.product}</p>
                        </div>
                        
                     </td>
                     <td className='text-sm text-gray-600'>{items.price}</td>
                     
                     <td>
                      <div className='w-16 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-500 font-bold'>{items.totalorders}</div>
                      </td>

                     <td className='text-sm text-gray-600'>{items.totalamount}</td>
                  </tr>
                 
                  )}) } </tbody>
            </table></div>
             

    </div>
    <div className='basis-4/12 w-full h-full bg-white rounded flex flex-col p-4'>
       <div className='flex-1 w-full h-full bg-white'>
          <div className='flex justify-between items-center'>
            <h4 className='text-lg text-gray-500 font-bold'>Top Selling Products</h4>
            <IconDots className='pt-2'/>
          </div>  
       </div>
       <div className='flex-grow w-full h-full bg-gray-50 flex flex-col p-4 rounded-lg gap-3'>
        {sellingproductdata.map((item)=>{
          return(
         <div className='flex md:flex-row sm:flex-col gap-4'>
             <img src={item.img} className='rounded size-20'></img>
             <div className='flex flex-col gap-1'>
                    <p className='text-gray-700'>{item.productname}</p>
                    <div className='flex flex-row'>
                    <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                    <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                    <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                    <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                    <IconStarFilled className='text-yellow-400 text-xs size-4'/>
                    </div>
                    <p className='text-xs font-bold'>{item.price}</p>

             </div>    
         </div>)})}
          
       </div>
    </div>
</div>  
  )
}

export default OrdersProducts