import { DataContainer } from '@components/DataContainer';
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
            <DataContainer>
              <div>
                <p>Confirmed Transactions: 10</p>
                <p>Total BTC Received: 155</p>
                <p>Total BTC Spent: 150</p>
                <p>Total BTC Unspent: 5</p>
                <p>Current address balance: 10</p>
              </div>
              <div>Subscribe</div>
            </DataContainer>
          </>
          <>
            <Search
              value={transactionSearch}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTransactionSearch(e.target.value)}
              onClick={handleTransactionSearchClick}
            />
            <DataContainer>
              <div>
                <p>Transactions Hash: 10</p>
                <p>Received Time: 155</p>
                <p>Status: 150</p>
                <p>Size (in bytes): 5</p>
                <p>Number of Confirmations: 10</p>
                <p>Total BTC Input: 10</p>
                <p>Total BTC Output: 10</p>
                <p>Total Fees: 10</p>
              </div>
            </DataContainer>
          </>
        </TabsContainer>
      </Container>
    </>
  );
};

export default HomePage;
