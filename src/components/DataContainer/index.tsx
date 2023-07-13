import { Box } from '@mui/material';
import { IDataContainer } from './types';

export const DataContainer = ({ children }: IDataContainer) => {
  return (
    <Box
      sx={{
        width: '60%',
        height: '200px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </Box>
  );
};
