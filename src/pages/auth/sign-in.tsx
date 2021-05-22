import * as yup from 'yup';
import Head from 'next/head'
import { Box, Text } from '@chakra-ui/layout'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { FaDiscord } from 'react-icons/fa'
import { useToast } from '@chakra-ui/toast';
import Router from 'next/router';

import { NextChakraLink } from '@/components/NextChakraLink'
import FormControl from '@/components/form/FormControl'
import FormLabel from '@/components/form/FormLabel'
import HeadingLogo from '@/components/HeadingLogo'
import Button from '@/components/form/Button'
import Input from '@/components/form/Input'
import Divider from '@/components/Divider';
import Wrapper from '@/components/Wrapper';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SignIn = () => {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = ({ username, password }) => {
    if(username == 'cookie' && password == 'cookie'){
      setTimeout(() => {
        toast({
          title: "Welcome, cookie",
          description: `You will be redirected in 3 seconds.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
        setTimeout(() => Router.push('/dashboard'), 3000)
      }, 1000)
    }else{
      toast({
        title: "Invalid credentials",
        description: `If you think this is an error contact us.`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom"
      })
    }
  }

  return (
    <Wrapper flexDir="column" justify="center" px={{ sm: 8 }}>
      <Head>
        <title>League Tools | Sign In</title>
      </Head>
      <Box as="main" width={{ lg: "470px" }} mx="auto">
        <HeadingLogo
          mb="8"
          textAlign="center"
          fontSize={{ base: "7xl", lg: "8xl" }}
        >
          League Tools
        </HeadingLogo>

        <Button backgroundColor="#7289DA" isDisabled={true} _hover={{}}>
          <FaDiscord size="35" />
          <Text ml="4">Sign in with Discord</Text>
        </Button>

        <Divider />

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.username ? true : false} mb="6">
            <FormLabel onTop={watch("username") !== ''}>
              Username
            </FormLabel>
            <Input id="username" type="text" {...register("username")} />
          </FormControl>
          <FormControl isInvalid={errors.password ? true : false} mb="6">
            <FormLabel onTop={watch("password") !== ''}>
              Password
            </FormLabel>
            <Input id="password" type="password" {...register("password")} />
          </FormControl>
          <Button
            mb="4"
            type="submit"
            isLoading={isSubmitting}
          >
            Sign in
          </Button>
          <Text display="inline-block">Don't have an account?</Text>
          <NextChakraLink href="/auth/signup">
            <Text
              display="inline-block"
              ml="2"
              color="#DABD6D"
              fontWeight="700"
              _hover={{
                textDecoration: "underline"
              }}
            >
              Sign up here
            </Text>
          </NextChakraLink>
        </form>
      </Box>
    </Wrapper>
  )
}

export default SignIn