import { forwardRef, Input as ChakraInput, InputProps } from "@chakra-ui/react"

const Input = forwardRef<InputProps, "input">((props, ref) => (
  <ChakraInput
    borderRadius="5"
    background="transparent"
    border="2px solid #674D88"
    borderColor="#674D88"
    color="#D1D3E1"
    height="14"
    autoComplete="off"
    autoCorrect="off"
    _focus={{
      border: "2px solid #DABD6D !important",
      boxShadow: '0 0 0 0'
    }}
    ref={ref}
    {...props}
  />
));

export default Input;