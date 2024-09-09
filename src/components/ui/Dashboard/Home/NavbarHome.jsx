import React from 'react'
import { Flex, Select, Group, Image, Title, Divider } from "@mantine/core";
function NavbarHome() {
  return (
    <Flex justify={"space-between"} pb={6} w={"100%"} className="bg-zinc-200">
        <div className="flex flex-row gap-3">
        <h1 className='font-bold  text-lg'>Dashboard</h1>
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
        
  )
}

export default NavbarHome