import { CurrencySelector } from '@components/CurrencySelector';
import { SearchIconButton } from '@components/SearchIconButton';
import { SearchTextField } from '@components/SearchTextField';
import { useBtc } from '@hooks';
import { Box } from '@mui/material';
import { getTransaction } from '@services';
import { useState } from 'react';

export const SearchTransaction = () => {
  const [transaction, setTransaction] = useState('');

  const btcContext = useBtc();

  const handleOnClick = async () => {
    try {
      const data = await getTransaction(transaction);

      btcContext.updateTransaction(data!.data, data!.time, transaction);
    } catch (error) {}
  };

  return (
    <Box sx={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <SearchTextField value={transaction} onChange={(e) => setTransaction(e.target.value)} />
      <SearchIconButton onClick={handleOnClick} />
      <CurrencySelector />
    </Box>
  );
};
