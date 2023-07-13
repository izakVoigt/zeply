import { DataContainer } from '@components/DataContainer';
import { Search } from '@components/Search';
import { TabsContainer } from '@components/TabsContainer';
import { Header } from '@compounds/Header';
import { Box, Container, Typography } from '@mui/material';
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
              <Box>
                <Typography>
                  <strong>Confirmed Transactions:</strong>
                </Typography>
                <Typography>
                  <strong>Total BTC Received:</strong>
                </Typography>
                <Typography>
                  <strong>Total BTC Spent:</strong>
                </Typography>
                <Typography>
                  <strong>Total BTC Unspent:</strong>
                </Typography>
                <Typography>
                  <strong>Current address balance:</strong>
                </Typography>
              </Box>
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
              <Box>
                <Typography>
                  <strong>Transactions Hash:</strong>
                </Typography>
                <Typography>
                  <strong>Received Time:</strong>
                </Typography>
                <Typography>
                  <strong>Status:</strong>
                </Typography>
                <Typography>
                  <strong>Size (in bytes):</strong>
                </Typography>
                <Typography>
                  <strong>Number of Confirmations:</strong>
                </Typography>
                <Typography>
                  <strong>Total BTC Input:</strong>
                </Typography>
                <Typography>
                  <strong>Total BTC Output:</strong>
                </Typography>
                <Typography>
                  <strong>Total Fees:</strong>
                </Typography>
              </Box>
            </DataContainer>
          </>
        </TabsContainer>
      </Container>
    </>
  );
};

export default HomePage;
