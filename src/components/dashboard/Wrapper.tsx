import * as yup from 'yup';
import { Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMediaQuery } from '@chakra-ui/media-query';
import Head from 'next/head';

import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const DashboardWrapper: React.FC = ({ children }) => {
  const [isLargerThen1280] = useMediaQuery("(min-width: 1080px)")

  return (
    <Grid
      as="main"
      height="100vh"
      backgroundColor="#0F0726"
      gridGap={isLargerThen1280 ? '4' : ''}
      templateColumns={isLargerThen1280 ? "1fr 300px 1fr 3fr 2fr" : ''}
      templateRows={isLargerThen1280 ? "4rem 1fr 30px" : ''}
      templateAreas={isLargerThen1280 ? '"logo logo logo logo logo" ". sidebar . content ." ".    .    .    .    ."' : ''}
    >
      <Header gridArea="logo" gridColumnStart="2" gridColumnEnd="3" display={isLargerThen1280 ? 'flex' : 'none'} />
      <Sidebar gridArea="sidebar" display={isLargerThen1280 ? 'flex' : 'none'} />
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gridArea="content"
        px={!isLargerThen1280 ? '4' : ''}
      >
        {children}
      </Flex>
    </Grid>
  );
}

export default DashboardWrapper;