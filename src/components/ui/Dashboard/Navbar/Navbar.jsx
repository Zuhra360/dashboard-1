import { Flex, Select, Group, Image, Title, Divider } from "@mantine/core";
import logo from "../../../../assets/images/Subtract.svg";

export const Navbar = () => {
  return (
    <div className="bg-white" >
      <Flex justify={"space-between"} p={20} w={"100%"}>
        <div className="flex flex-row gap-3">
        <Image src={logo} w={80} />
          <Title>Demo</Title>
        </div>

        <Group gap={20}>
          <Select
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
          <Select
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </Group>
      </Flex>
      <Divider />
    </div>
  );
};
