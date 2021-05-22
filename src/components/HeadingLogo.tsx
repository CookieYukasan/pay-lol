import { Heading, HeadingProps } from "@chakra-ui/layout";

const HeadingLogo = ({children, ...rest}: HeadingProps) => {
  return (
    <Heading
      fontWeight="bold"
      textTransform="uppercase"
      fontFamily="Staatliches, cursive"
      {...rest}
    >
      {children}
    </Heading>
  )
}

export default HeadingLogo;