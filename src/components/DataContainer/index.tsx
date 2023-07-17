import { Box } from '@mui/material';
import { IChildren } from '@interfaces/children';

export const DataContainer = ({ children }: IChildren) => {
  return (
    <Box
      sx={{
        width: '60%',
        height: '250px',
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
