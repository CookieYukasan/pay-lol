import { SelectProps, Select as ChakraSelect } from "@chakra-ui/select";

const Select: React.FC<SelectProps> = ({ children, ...rest }) => (
  <ChakraSelect
    height="14"
    border="2px solid #674D88 !important"
    {...rest}
  >
    {children}
  </ChakraSelect>
)

export default Select;