import { useTheme } from '@hooks';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ISearchIconButton } from './types';

export const SearchIconButton = ({ onClick }: ISearchIconButton) => {
  const themeContext = useTheme();

  return (
    <IconButton onClick={onClick}>
      <SearchIcon sx={{ color: themeContext.theme.colors.fontDefault, transition: '0.2s ease' }} />
    </IconButton>
  );
};
