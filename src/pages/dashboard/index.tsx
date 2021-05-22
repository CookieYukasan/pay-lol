import { Heading, Text } from '@chakra-ui/layout';
import Head from 'next/head';

const DashboardHome: React.FC = () => {
  return (
    <>
      <Head>
        <title>League Tools | Home</title>
      </Head>
      <Heading borderBottom="3px solid #DABD6D">eh o cookie!</Heading>
      <Text align="center" mt="4" mb="12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, neque at sodales fringilla, enim libero varius tellus, sed rhoncus eros enim vitae quam. Ut vel sapien tellus. Donec lacinia, ante eu interdum cursus, est metus viverra ante, at consectetur</Text>
    </>
  )
}

export default DashboardHome;