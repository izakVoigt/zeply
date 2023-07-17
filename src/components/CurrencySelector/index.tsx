import { useBtc, useTheme } from '@hooks';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { CurrencyEnum } from '@utils/enums/currencyEnum';

export const CurrencySelector = () => {
  const btcContext = useBtc();
  const themeContext = useTheme();

  const handleChange = (e: SelectChangeEvent<CurrencyEnum>) => {
    btcContext.updateCurrency(e.target.value);
  };

  return (
    <Select
      variant="standard"
      value={btcContext.currency}
      onChange={handleChange}
      sx={{
        color: themeContext.theme.colors.fontDefault,
        border: 'none',
        '& .MuiSelect-icon': {
          color: themeContext.theme.colors.fontDefault,
        },
      }}
    >
      <MenuItem value={CurrencyEnum.BTC}>BTC</MenuItem>
      <MenuItem value={CurrencyEnum.USD}>USD</MenuItem>
      <MenuItem value={CurrencyEnum.EUR}>EUR</MenuItem>
    </Select>
  );
};
