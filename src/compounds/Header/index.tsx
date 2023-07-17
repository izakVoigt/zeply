import { AvatarComponent } from '@components/AvatarComponent';
import { Logo } from '@components/Logo';
import { Notification } from '@components/Notification';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { useNotifications } from '@hooks/useNotifications';
import { useTheme } from '@hooks/useTheme';
import { AppBar, Box, Container } from '@mui/material';

export const Header = (): JSX.Element => {
  const notificationsContext = useNotifications();
  const themeContext = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: themeContext.theme.colors.secundary, transition: '0.2s ease' }}>
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo />
        <Box sx={{ margin: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ThemeSwitcher />
          <Notification content={notificationsContext.notifications.length} />
          <AvatarComponent />
        </Box>
      </Container>
    </AppBar>
  );
};
