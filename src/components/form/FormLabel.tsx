import { FormLabel as ChakraFormLabel, FormLabelProps as ChakraFormLabelProps } from '@chakra-ui/react'
import { useRef } from 'react';

type FormLabelProps = ChakraFormLabelProps & {
  children: React.ReactNode;
  onTop?: boolean;
}

const FormLabel = ({ children, onTop = false, ...rest }: FormLabelProps) => {
  const ref = useRef<HTMLLabelElement>(null)
  const hasInvalid = ref.current?.getAttribute("data-invalid") === '';
  
  return (
    <ChakraFormLabel
      ref={ref}
      position="absolute"
      top={onTop ? "-3" : "27%"}
      left="4"
      backgroundColor={onTop && '#0F0726'}
      px={onTop && '1'}
      zIndex={onTop && 2}
      color={hasInvalid ? '#FC8181' : ''}
      {...rest}
    >
      {children}
    </ChakraFormLabel>
  );
}

export default FormLabel;