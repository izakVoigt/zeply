import { DataContainer } from '@components/DataContainer';
import { Search } from '@components/Search';
import { TabsContainer } from '@components/TabsContainer';
import { Header } from '@compounds/Header';
import { useBtc } from '@hooks/useBtc';
import { Box, Container, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { getAddress, getTransaction } from '@services/api';
import { CurrencyEnum } from '@utils/enums/currencyEnum';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const HomePage: NextPage = () => {
  const [addressSearch, setAddressSearch] = useState('');
  const [transactionSearch, setTransactionSearch] = useState('');
  const [currency, setCurrency] = useState(CurrencyEnum.BTC);

  const btcContext = useBtc();

  const handleAddressSearchClick = async () => {
    try {
      const data = await getAddress(addressSearch);

      btcContext.updateAddress(data!);
    } catch (error) {}
  };

  const handleTransactionSearchClick = async () => {
    try {
      const data = await getTransaction(transactionSearch);

      btcContext.updateTransaction(data!.data, data!.time);
    } catch (error) {}
  };

  const handleCurrencyChange = (event: SelectChangeEvent<CurrencyEnum>) => {
    setCurrency(event.target.value);
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
            <FormControl>
              <Select
                labelId="currency-selector-label"
                id="currency-selector"
                value={currency}
                onChange={handleCurrencyChange}
              >
                <MenuItem value={CurrencyEnum.BTC}>BTC</MenuItem>
                <MenuItem value={CurrencyEnum.USD}>USD</MenuItem>
                <MenuItem value={CurrencyEnum.EUR}>EUR</MenuItem>
              </Select>
            </FormControl>
            <DataContainer>
              {btcContext.address && btcContext.BTCtoEUR && btcContext.BTCtoUSD ? (
                <>
                  <Box>
                    <Typography>
                      <strong>Confirmed Transactions: </strong>
                      {btcContext.address?.numberTransactions}
                    </Typography>
                    <Typography>
                      <strong>Total BTC Received: </strong>
                      {currency === CurrencyEnum.BTC && `BTC ${btcContext.address?.btcReceived}`}
                      {currency === CurrencyEnum.USD && `$ ${btcContext.address?.btcReceived * btcContext.BTCtoUSD}`}
                      {currency === CurrencyEnum.EUR && `£ ${btcContext.address?.btcReceived * btcContext.BTCtoEUR}`}
                    </Typography>
                    <Typography>
                      <strong>Total BTC Spent: </strong>
                      {currency === CurrencyEnum.BTC && `BTC ${btcContext.address?.btcSpent}`}
                      {currency === CurrencyEnum.USD && `$ ${btcContext.address?.btcSpent * btcContext.BTCtoUSD}`}
                      {currency === CurrencyEnum.EUR && `£ ${btcContext.address?.btcSpent * btcContext.BTCtoEUR}`}
                    </Typography>
                    <Typography>
                      <strong>Total BTC Unspent: </strong>
                      {currency === CurrencyEnum.BTC && `BTC ${btcContext.address?.btcUnspent}`}
                      {currency === CurrencyEnum.USD && `$ ${btcContext.address?.btcUnspent * btcContext.BTCtoUSD}`}
                      {currency === CurrencyEnum.EUR && `£ ${btcContext.address?.btcUnspent * btcContext.BTCtoEUR}`}
                    </Typography>
                    <Typography>
                      <strong>Current address balance: </strong>
                      {currency === CurrencyEnum.BTC && `BTC ${btcContext.address?.finalBalance}`}
                      {currency === CurrencyEnum.USD && `$ ${btcContext.address?.finalBalance * btcContext.BTCtoUSD}`}
                      {currency === CurrencyEnum.EUR && `£ ${btcContext.address?.finalBalance * btcContext.BTCtoEUR}`}
                    </Typography>
                  </Box>
                  <div>Subscribe</div>
                </>
              ) : (
                <></>
              )}
            </DataContainer>
          </>
          <>
            <Search
              value={transactionSearch}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTransactionSearch(e.target.value)}
              onClick={handleTransactionSearchClick}
            />
            <FormControl>
              <Select
                labelId="currency-selector-label"
                id="currency-selector"
                value={currency}
                onChange={handleCurrencyChange}
              >
                <MenuItem value={CurrencyEnum.BTC}>BTC</MenuItem>
                <MenuItem value={CurrencyEnum.USD}>USD</MenuItem>
                <MenuItem value={CurrencyEnum.EUR}>EUR</MenuItem>
              </Select>
            </FormControl>
            <DataContainer>
              {btcContext.transaction && btcContext.BTCtoEUR && btcContext.BTCtoUSD ? (
                <Box>
                  <Typography>
                    <strong>Transactions Hash: </strong>
                    {btcContext.transaction?.hash}
                  </Typography>
                  <Typography>
                    <strong>Received Time: </strong>
                    {String(btcContext.transaction?.receivedTime)}
                  </Typography>
                  <Typography>
                    <strong>Status: </strong>
                    {btcContext.transaction.status}
                  </Typography>
                  <Typography>
                    <strong>Size (in bytes): </strong>
                    {btcContext.transaction.size}
                  </Typography>
                  <Typography>
                    <strong>Number of Confirmations: </strong>
                    {btcContext.transaction.confirmations}
                  </Typography>
                  <Typography>
                    <strong>Total BTC Input: </strong>
                    {currency === CurrencyEnum.BTC && `BTC ${btcContext.transaction.inputs}`}
                    {currency === CurrencyEnum.USD && `$ ${btcContext.transaction.inputs * btcContext.BTCtoUSD}`}
                    {currency === CurrencyEnum.EUR && `£ ${btcContext.transaction.inputs * btcContext.BTCtoEUR}`}
                  </Typography>
                  <Typography>
                    <strong>Total BTC Output: </strong>
                    {currency === CurrencyEnum.BTC && `BTC ${btcContext.transaction.outputs}`}
                    {currency === CurrencyEnum.USD && `$ ${btcContext.transaction.outputs * btcContext.BTCtoUSD}`}
                    {currency === CurrencyEnum.EUR && `£ ${btcContext.transaction.outputs * btcContext.BTCtoEUR}`}
                  </Typography>
                  <Typography>
                    <strong>Total Fees: </strong>
                    {currency === CurrencyEnum.BTC && `BTC ${btcContext.transaction.fees}`}
                    {currency === CurrencyEnum.USD && `$ ${btcContext.transaction.fees * btcContext.BTCtoUSD}`}
                    {currency === CurrencyEnum.EUR && `£ ${btcContext.transaction.fees * btcContext.BTCtoEUR}`}
                  </Typography>
                </Box>
              ) : (
                <></>
              )}
            </DataContainer>
          </>
        </TabsContainer>
      </Container>
    </>
  );
};

export default HomePage;
