import { FormControl as ChakraFormControl, FormControlProps } from "@chakra-ui/form-control";

const FormControl = ({ children, ...rest}: FormControlProps) => (
  <ChakraFormControl
    className="form-control"
    position="relative"
    {...rest}
  >
    {children}
  </ChakraFormControl>
);

export default FormControl;