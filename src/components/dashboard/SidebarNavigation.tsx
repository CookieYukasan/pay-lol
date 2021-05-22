import { Flex, VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import Button from "../form/Button";
import { NextChakraLink } from "../NextChakraLink";

const NavButton = ({ children, active = false }) => (
  <Button
    backgroundColor={active ? "#1F1340" : "transparent"}
    border={active ? '' : "3px solid #3D2581"}
  >
    {children}
  </Button>
)

const navs = [
  {
    label: 'Home',
    href: '/dashboard'
  },
  {
    label: 'Gift Sender',
    href: '/dashboard/gift-sender'
  },
  {
    label: 'Account Info',
    href: '/dashboard/account-info'
  },
  {
    label: 'Nickname Recovery',
    href: '/dashboard/nickname-recovery'
  }
]

const SidebarNavigation = () => {
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    function getURL(){
      setCurrentURL(window.location.pathname)
    }

    getURL()
  }, [window.location.pathname])

  return (
    <Flex flexDir="column" mt="4" align="stretch">
      {navs.map(nav => (
        <NextChakraLink
          key={nav.href}
          href={nav.href}
          textDecor="none !important"
          mb="4"
        >
          <NavButton active={currentURL === nav.href}>
            {nav.label}
          </NavButton>
        </NextChakraLink>
      ))}
    </Flex>
  );
}

export default SidebarNavigation;