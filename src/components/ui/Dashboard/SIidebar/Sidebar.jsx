import React, { useState } from "react";
import { Box, Text, Group, Image, Divider, Flex } from "@mantine/core";
import { Sidebardata } from "./Sidebarlinks";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [hover, sethover] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path)=>{
    navigate(path);
  }

  return (
    <Flex h={"100%"} direction={"row"}>
      <div
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        className="flex p-2 flex-col "
      >
        {Sidebardata.map((item) => {
          return (
            <Group
              key={item.name}
              gap={10}
              p={10}
              h={50}
              w={hover ? 200 : ""}
              className="text-gray-400 rounded-xl hover:bg-blue-100 hover:text-blue-500"
              align="center"
              onClick={()=>handleNavigation(item.link)}
            >
              <div>{item.icon}</div>
              {hover && <Text>{item.name}</Text>}
            </Group>
          );
        })}
      </div>

      <Divider orientation="vertical" />
    </Flex>
  );
};
