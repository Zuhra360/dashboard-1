import React, { useState } from "react";
import { Box, Text, Group, Image, Divider, Flex } from "@mantine/core";
import { Sidebardata } from "./Sidebarlinks";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/Subtract.svg";
import { IconLogout} from "@tabler/icons-react";
import profile from '../../../../assets/images/user_profile.jpg'

export const Sidebar = () => {
  const [hover, sethover] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path)=>{
    navigate(path);
  }

  return (
    <>
<div onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} className="flex flex-col justify-between ">
    <div className="flex flex-col gap-6 items-center  py-5 ">
      
       <div className={`flex flex-row items-center p-5 ${hover?'':'flex flex-col  items-center  p-5'}`} >
         <Image src={logo} w={hover?50:40} h={hover?50:40}  className=""/>
         <Text fw={500} size="lg" pl={hover?10:''} style={{color:'#030229'}}>Base</Text>
       </div>
       <Flex h={"100%"} w={"10%"} direction={"row"} justify={'center'}>
              <div className="flex  flex-col">
                    {Sidebardata.map((item) => {
                      return (
                        <Group
                          key={item.name}
                          gap={10}
                          py={10}
                          px={30}
                          h={50}
                          w={hover ? 200 : ""}
                          className="text-gray-500  hover:bg-gradient-to-l from-white to-indigo-200 hover:text-indigo-500"
                          align="center"
                          onClick={()=>handleNavigation(item.link)}
                        >
                          <div>{item.icon}</div>
                          {hover && <Text>{item.name}</Text>}
                        </Group>
                      );
                    })}
              </div>

         
       </Flex>
    
    </div>
    <div className={`py-6 flex justify-center  items-center gap-3${hover?'':'py-6  flex flex-col justify-center  items-center gap-3'}`}>
        <div className='flex gap-2'>
          <img src={profile} className='size-8 w-10 rounded'></img>
          <div className={`block flex flex-col ${hover?'':'hidden'}`}>
            <h10 className='m-0 p-0 text-sm'>Username</h10>
            <p className='m-0 p-0 text-xs text-gray-400'>Free account</p>
          </div>
        </div>
        <IconLogout className='text-gray-500 hover:text-indigo-500'/>
        
    </div> 
    </div>
    </>
  );
};
