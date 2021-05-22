import * as yup from 'yup';
import { Grid, Heading, Text } from '@chakra-ui/layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';

import FormControl from '@/components/form/FormControl';
import FormLabel from '@/components/form/FormLabel';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import Button from '@/components/form/Button';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const DashboardGiftSender: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      userAndPass: '',
      to: '',
      type: ''
    }
  });

  const onSubmit = data => console.log(data)

  return (
    <>
      <Head>
        <title>League Tools | Gift Sender</title>
      </Head>
      <Heading borderBottom="3px solid #DABD6D">How it works?</Heading>
      <Text align="center" mt="4" mb="12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, neque at sodales fringilla, enim libero varius tellus, sed rhoncus eros enim vitae quam. Ut vel sapien tellus. Donec lacinia, ante eu interdum cursus, est metus viverra ante, at consectetur</Text>
      
      <Grid
        as="form"
        templateColumns="1fr 1fr"
        gridGap="2"
        templateRows="1fr 1fr 1fr 1fr"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl
          gridColumn="1 / 3"
          isInvalid={errors.userAndPass ? true : false}
        >
          <FormLabel onTop={watch("userAndPass") !== ''} top="23%">
            Username & Password
          </FormLabel>
          <Input id="userAndPass" type="text" {...register("userAndPass")} />
        </FormControl>
        <FormControl isInvalid={errors.to ? true : false}>
          <FormLabel onTop={watch("to") !== ''} top="23%">
            Gift to
          </FormLabel>
          <Input id="giftTo" type="text" {...register("to")} />
        </FormControl>
        <Select placeholder="Gift type">
          <option value="option1">Seila</option>
          <option value="option2">Q se foda</option>
          <option value="option3">Nn sei</option>
        </Select>
        <Button
          gridColumn="1 / 3"
          mb="4"
          type="submit"
          isLoading={isSubmitting}
        >
          Send gift
        </Button>
      </Grid>
    </>
  )
}

export default DashboardGiftSender;