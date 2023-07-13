import { useTheme } from '@hooks/useTheme';
import { Typography } from '@mui/material';

export const Logo = (): JSX.Element => {
  const themeContext = useTheme();

  return (
    <Typography role="banner" sx={{ color: themeContext.theme.colors.detail, fontSize: 26, fontWeight: 700 }}>
      ZEPLY
    </Typography>
  );
};
