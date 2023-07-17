import { useTheme } from '@hooks';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField } from '@mui/material';
import { ISearch } from './types';

export const Search = ({ value, onChange, onClick }: ISearch) => {
  const themeContext = useTheme();

  return (
    <Box sx={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <TextField
        variant="standard"
        type="text"
        label="Search"
        value={value}
        onChange={onChange}
        sx={{
          margin: '1rem',
          width: '80%',
          transition: '0.2s ease',
          '& label': {
            color: themeContext.theme.colors.fontDefault,
          },
          '& input': {
            color: themeContext.theme.colors.fontDefault,
            transition: '0.2s ease',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: themeContext.theme.colors.fontDefault,
          },
          '&:hover .MuiInput-underline:before': {
            borderBottomColor: themeContext.theme.colors.detail,
            transition: '0.2s ease',
          },
        }}
      />
      <IconButton onClick={onClick}>
        <SearchIcon sx={{ color: themeContext.theme.colors.fontDefault, transition: '0.2s ease' }} />
      </IconButton>
    </Box>
  );
};
