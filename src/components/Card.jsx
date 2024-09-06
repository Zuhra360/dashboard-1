import React from 'react'
import { IoHeartCircleOutline,IoStopSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { RiHandbagFill } from "react-icons/ri";
export const Card = ({icon,title,value}) => {
    const cards=[
        {
            icon:<IoHeartCircleOutline />,
            title:'178+',
            value:'Save Products',
        },
        {
            icon:<IoStopSharp />,
            title:'20+',
            value:'Stock Products',
        },
        {
            icon:<FaLock />,
            title:'190+',
            value:'Sales Products',
        },
        {
            icon:<RiHandbagFill />,
            title:'12+',
            value:'Job Application',
        },
    ];
    return (
        <div className="flex flex-row gap-10 w-10/12 mx-8 mb-8 ml-56 bg-zinc-50">
        {cards.map((card, index) => (
          <div key={index} className="p-8 border rounded shadow-md flex items-center bg-white space-x-4 w-1/4 h-24 gap-8">
            <div className="text-3xl text-blue-500">{card.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
//   export const Card = ({icon,title,value}) => {
//     return (
//       <div className="bg-white text-dark p-4 rounded-lg shadow-md flex items-center space-x-6">
//           <div className="text-2xl text-gray-500">{icon}</div>
//           <div>
//               <h2 className="text-lgfont-semibold">{title}</h2>
//               <p>{value}</p>
//           </div>
//       </div>
//     )
//   }