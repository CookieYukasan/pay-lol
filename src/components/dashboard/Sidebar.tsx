import { Flex, BoxProps, Heading } from "@chakra-ui/layout"
import { Avatar } from '@chakra-ui/react'
import SidebarNavigation from "./SidebarNavigation";

const Sidebar = (props: BoxProps) => {
  return (
    <Flex
      as="aside"
      borderRadius="5"
      border="3px solid #3D2581"
      p="4"
      flexDir="column"
      alignItems="center"
      {...props}
    >
      <Avatar
        src="https://cdn.discordapp.com/avatars/276092587327356929/7c8e9295249292e681d45e1385a47663.png"
        alt="cookie avatar"
        width="36"
        height="36"
      />
      <Heading my="4" fontFamily="2xl">Hi, cookie</Heading>

      <SidebarNavigation />
    </Flex>
  );
}

export default Sidebar;