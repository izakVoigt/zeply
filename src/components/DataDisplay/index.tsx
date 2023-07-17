import { Box, Typography } from '@mui/material';
import { IDataDisplay } from './types';
import { useTheme } from '@hooks/useTheme';

export const DataDisplay = ({ index, hash }: IDataDisplay) => {
  const themeContext = useTheme();

  return (
    <Box
      sx={{
        padding: '5px',
        height: '140px',
        width: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: themeContext.theme.colors.primary,
        border: `1px solid ${themeContext.theme.colors.detail}`,
        borderRadius: '5px',
        transition: '0.2s ease',
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>{index}º</Typography>
      <Typography sx={{ wordBreak: 'break-all' }}>{hash}</Typography>
    </Box>
  );
};
