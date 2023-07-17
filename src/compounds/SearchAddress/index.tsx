import { CurrencySelector } from '@components/CurrencySelector';
import { SearchIconButton } from '@components/SearchIconButton';
import { SearchTextField } from '@components/SearchTextField';
import { useBtc } from '@hooks';
import { Box } from '@mui/material';
import { getAddress } from '@services';
import { useState } from 'react';

export const SearchAddress = () => {
  const [address, setAddress] = useState('');

  const btcContext = useBtc();

  const handleOnClick = async () => {
    try {
      const data = await getAddress(address);

      btcContext.updateAddress(data!, address);
    } catch (error) {}
  };

  return (
    <Box sx={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <SearchTextField value={address} onChange={(e) => setAddress(e.target.value)} />
      <SearchIconButton onClick={handleOnClick} />
      <CurrencySelector />
    </Box>
  );
};
