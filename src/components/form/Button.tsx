import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"

const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <ChakraButton
      borderRadius="5"
      background="#592581"
      width="100%"
      height="14"
      _hover={{
        opacity: 0.6
      }}
      _active={{}}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}

export default Button;