import { Search } from '@components/Search';
import { TabsContainer } from '@components/TabsContainer';
import { Header } from '@compounds/Header';
import { Container } from '@mui/material';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const HomePage: NextPage = () => {
  const [addressSearch, setAddressSearch] = useState('');
  const [transactionSearch, setTransactionSearch] = useState('');

  const handleAddressSearchClick = () => {
    console.log(addressSearch);
  };

  const handleTransactionSearchClick = () => {
    console.log(transactionSearch);
  };

  return (
    <>
      <Header />
      <Container sx={{ padding: '10px' }}>
        <TabsContainer labels={['address', 'transaction']}>
          <>
            <Search
              value={addressSearch}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setAddressSearch(e.target.value)}
              onClick={handleAddressSearchClick}
            />
          </>
          <>
            <Search
              value={transactionSearch}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTransactionSearch(e.target.value)}
              onClick={handleTransactionSearchClick}
            />
          </>
        </TabsContainer>
      </Container>
    </>
  );
};

export default HomePage;
