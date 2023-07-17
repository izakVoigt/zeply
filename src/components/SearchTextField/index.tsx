import { useTheme } from '@hooks';
import { TextField } from '@mui/material';
import { ISearchTextField } from './types';

export const SearchTextField = ({ value, onChange }: ISearchTextField) => {
  const themeContext = useTheme();

  return (
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
  );
};
