import { DataContainer } from '@components/DataContainer';
import { useBtc, useMain, useNotifications } from '@hooks';
import { Box, Button, Typography } from '@mui/material';
import { CurrencyEnum } from '@utils/enums/currencyEnum';

export const DataAddress = () => {
  const btcContext = useBtc();
  const mainContext = useMain();
  const notificationsContext = useNotifications();

  return (
    <DataContainer>
      {btcContext.address && mainContext.BTCtoEUR && mainContext.BTCtoUSD ? (
        <>
          <Box>
            <Typography>
              <strong>Confirmed Transactions: </strong>
              {btcContext.address?.numberTransactions}
            </Typography>
            <Typography>
              <strong>Total BTC Received: </strong>
              {btcContext.currency === CurrencyEnum.BTC && `BTC ${btcContext.address?.btcReceived}`}
              {btcContext.currency === CurrencyEnum.USD &&
                `$ ${btcContext.address?.btcReceived * mainContext.BTCtoUSD}`}
              {btcContext.currency === CurrencyEnum.EUR &&
                `£ ${btcContext.address?.btcReceived * mainContext.BTCtoEUR}`}
            </Typography>
            <Typography>
              <strong>Total BTC Spent: </strong>
              {btcContext.currency === CurrencyEnum.BTC && `BTC ${btcContext.address?.btcSpent}`}
              {btcContext.currency === CurrencyEnum.USD && `$ ${btcContext.address?.btcSpent * mainContext.BTCtoUSD}`}
              {btcContext.currency === CurrencyEnum.EUR && `£ ${btcContext.address?.btcSpent * mainContext.BTCtoEUR}`}
            </Typography>
            <Typography>
              <strong>Total BTC Unspent: </strong>
              {btcContext.currency === CurrencyEnum.BTC && `BTC ${btcContext.address?.btcUnspent}`}
              {btcContext.currency === CurrencyEnum.USD && `$ ${btcContext.address?.btcUnspent * mainContext.BTCtoUSD}`}
              {btcContext.currency === CurrencyEnum.EUR && `£ ${btcContext.address?.btcUnspent * mainContext.BTCtoEUR}`}
            </Typography>
            <Typography>
              <strong>Current address balance: </strong>
              {btcContext.currency === CurrencyEnum.BTC && `BTC ${btcContext.address?.finalBalance}`}
              {btcContext.currency === CurrencyEnum.USD &&
                `$ ${btcContext.address?.finalBalance * mainContext.BTCtoUSD}`}
              {btcContext.currency === CurrencyEnum.EUR &&
                `£ ${btcContext.address?.finalBalance * mainContext.BTCtoEUR}`}
            </Typography>
          </Box>
          <Button variant="contained" onClick={() => notificationsContext.subscribeAddress(btcContext.address?.hash!)}>
            Subscribe
          </Button>
        </>
      ) : (
        <></>
      )}
    </DataContainer>
  );
};
