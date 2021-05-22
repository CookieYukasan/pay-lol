import { Flex, FlexProps } from "@chakra-ui/layout";

const AuthContainer = ({children, ...rest}: FlexProps) => {
  return (
    <Flex
      position="relative"
      height="100vh"
      backgroundColor="#0F0726"
      flexDir="column"
      {...rest}
    >
      {children}
    </Flex>
  );
}

export default AuthContainer;