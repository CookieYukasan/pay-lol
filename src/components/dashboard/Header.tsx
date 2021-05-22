import { Flex, FlexProps } from "@chakra-ui/layout";
import HeadingLogo from "../HeadingLogo";
import { NextChakraLink } from "../NextChakraLink";

const Header = (props: FlexProps) => {
  return (
    <Flex
      as="header"
      position="relative"
      width="100%"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <NextChakraLink href="/dashboard">
        <HeadingLogo>LEAGUE TOOLS</HeadingLogo>
      </NextChakraLink>
    </Flex>
  );
}

export default Header;