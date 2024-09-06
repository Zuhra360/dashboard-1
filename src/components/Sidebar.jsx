import React from 'react'
import { useState,useEffect} from "react";
import { FaFileInvoice  } from 'react-icons/fa'
import { MdAnalytics } from "react-icons/md";
import { TbAlignBoxLeftMiddleFilled } from "react-icons/tb";
import { PiCalendarDotsFill } from "react-icons/pi";
import { RiMessageFill,RiNotification2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    
    const handleIconClick = () => {
      setIsExpanded(!isExpanded);
    };
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "Backspace") {
            setIsExpanded(false);
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, []);
  
  return (
    <div className={`bg-white text-gray-900 h-screen pl-4 fixed ${
        isExpanded ? "w-56" : "w-18"
      } transition-all duration-300 border-r border-gray-300`}>
        <h2 className="font-bold text-2xl  mt-4 text-left">Demo</h2>
        <ul className="flex flex-col mt-5 text-xl">
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300"
            onClick={handleIconClick}>
            <AiFillAppstore  className='text-gray-400 hover:text-blue-500'/>
            <Link to="/dashboard">
                <span className={`${isExpanded ? "inline" : "hidden"}`}>Dashboard</span>
                </Link>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300   "
            onClick={handleIconClick}>
            <MdAnalytics className='text-gray-400 hover:text-blue-500' />
                <span className={`${isExpanded ? "inline" : "hidden"}`}>Analytics</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300"
            onClick={handleIconClick}>
            <FaFileInvoice className='text-gray-400 hover:text-blue-500' />
                <span className={`${isExpanded ? "inline" : "hidden"}`}>Invoice</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300"
            onClick={handleIconClick}>
            <TbAlignBoxLeftMiddleFilled className='text-gray-400 hover:text-blue-500' />
                <span className={`${isExpanded ? "inline" : "hidden"}`}>Schedule</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300 "
            onClick={handleIconClick}>
            <PiCalendarDotsFill className='text-gray-400 hover:text-blue-500'/>
                <span className={`${isExpanded ? "inline" : "hidden"}`}>Calender</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300 "
            onClick={handleIconClick}>
            <RiMessageFill className='text-gray-400 hover:text-blue-500'/>
                <span className={`${isExpanded ? "inline" : "hidden"}`}>Messages</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300 "
            onClick={handleIconClick}>
            <RiNotification2Fill className='text-gray-400 hover:text-blue-500'/>
                <span className={`${isExpanded ? "inline" : "hidden"}`}>Notification</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300 rounded-md ">
            <IoMdSettings className='text-gray-400 hover:text-blue-500'/>
                <span className={`${isExpanded ? "inline" : "hidden"}`}>Settings</span>
            </li>
        </ul>
    </div>
  )
}
// hidden hover:block md:inline