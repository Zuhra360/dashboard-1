import { Flex, Select, Group, Image, Title, Divider } from "@mantine/core";
import logo from "../../../../assets/images/Subtract.svg";

import { useState } from "react";
export const Navbar = () => {
  const [dashboard,setDashboard]=useState(0)
  return (
    <>
    <div>
      <Flex justify={"space-between"} p={20} w={"100%"} className="bg-green-50">
        <div className="flex flex-row gap-3">
           <Title>Dashboard</Title>
        </div>

        <Group gap={20}>
          <Select w={120}
            placeholder="mm/dd/yyyy"
            data={["React", "Angular", "Vue", "Svelte"]} 
            
          />
          <Select w={120}
            placeholder="mm/dd/yyyy"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </Group>
      </Flex>
      {/* <Divider /> */}
    </div>
    </>
  );
};
