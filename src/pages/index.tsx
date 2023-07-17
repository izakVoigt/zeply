import { TabsContainer } from '@components/TabsContainer';
import { DataAddress } from '@compounds/DataAddress';
import { DataTransaction } from '@compounds/DataTransaction';
import { Header } from '@compounds/Header';
import { SearchAddress } from '@compounds/SearchAddress';
import { SearchTransaction } from '@compounds/SearchTransaction';
import { TopSearches } from '@compounds/TopSearches';
import { Container } from '@mui/material';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <TopSearches />
        <TabsContainer labels={['address', 'transaction']}>
          <>
            <SearchAddress />
            <DataAddress />
          </>
          <>
            <SearchTransaction />
            <DataTransaction />
          </>
        </TabsContainer>
      </Container>
    </>
  );
};

export default HomePage;
