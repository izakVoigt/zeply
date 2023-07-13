import { useTheme } from '@hooks/useTheme';
import { Avatar } from '@mui/material';

export const AvatarComponent = () => {
  const themeContext = useTheme();

  return (
    <Avatar
      alt="Avatar"
      role="img"
      sx={{ color: themeContext.theme.colors.detail, backgroundColor: themeContext.theme.colors.primary }}
    >
      Z
    </Avatar>
  );
};