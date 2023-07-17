import { useTheme } from '@hooks';
import { Avatar } from '@mui/material';

export const AvatarComponent = (): JSX.Element => {
  const themeContext = useTheme();

  return (
    <Avatar
      alt="Avatar"
      role="img"
      sx={{
        marginLeft: '10px',
        color: themeContext.theme.colors.detail,
        backgroundColor: themeContext.theme.colors.primary,
        transition: '0.2s ease',
      }}
    >
      Z
    </Avatar>
  );
};
