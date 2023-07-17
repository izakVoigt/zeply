import { useNotifications } from '@hooks/useNotifications';
import { useTheme } from '@hooks/useTheme';
import { Badge, Menu, MenuItem, ListItemText, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useRef, useState } from 'react';
import { INotificationComponent } from './types';

export const Notification = ({ content }: INotificationComponent): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const themeContext = useTheme();

  const notificationsContext = useNotifications();

  const menuAnchor = useRef<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Badge role="alert" color="primary" badgeContent={content} max={999} sx={{ margin: '0 10px' }}>
        <IconButton onClick={handleMenuOpen}>
          <NotificationsIcon sx={{ color: themeContext.theme.colors.detail, width: '30px', height: '30px' }} />
        </IconButton>
      </Badge>

      <Menu anchorEl={menuAnchor.current} open={menuOpen} onClose={handleMenuClose}>
        {notificationsContext.notifications.map((notification, index) => (
          <MenuItem key={index}>
            <ListItemText primary={notification} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
