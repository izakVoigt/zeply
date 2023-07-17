import { DataContainer } from '@components/DataContainer';
import { useBtc, useMain } from '@hooks';
import { Box, Typography } from '@mui/material';
import { CurrencyEnum } from '@utils/enums/currencyEnum';

export const DataTransaction = () => {
  const btcContext = useBtc();
  const mainContext = useMain();

  return (
    <DataContainer>
      {btcContext.transaction && mainContext.BTCtoEUR && mainContext.BTCtoUSD ? (
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
            {btcContext.currency === CurrencyEnum.BTC && `BTC ${btcContext.transaction.inputs}`}
            {btcContext.currency === CurrencyEnum.USD && `$ ${btcContext.transaction.inputs * mainContext.BTCtoUSD}`}
            {btcContext.currency === CurrencyEnum.EUR && `£ ${btcContext.transaction.inputs * mainContext.BTCtoEUR}`}
          </Typography>
          <Typography>
            <strong>Total BTC Output: </strong>
            {btcContext.currency === CurrencyEnum.BTC && `BTC ${btcContext.transaction.outputs}`}
            {btcContext.currency === CurrencyEnum.USD && `$ ${btcContext.transaction.outputs * mainContext.BTCtoUSD}`}
            {btcContext.currency === CurrencyEnum.EUR && `£ ${btcContext.transaction.outputs * mainContext.BTCtoEUR}`}
          </Typography>
          <Typography>
            <strong>Total Fees: </strong>
            {btcContext.currency === CurrencyEnum.BTC && `BTC ${btcContext.transaction.fees}`}
            {btcContext.currency === CurrencyEnum.USD && `$ ${btcContext.transaction.fees * mainContext.BTCtoUSD}`}
            {btcContext.currency === CurrencyEnum.EUR && `£ ${btcContext.transaction.fees * mainContext.BTCtoEUR}`}
          </Typography>
        </Box>
      ) : (
        <></>
      )}
    </DataContainer>
  );
};
