import { useNotifications, useTheme } from '@hooks';
import { Badge, Menu, MenuItem, ListItemText, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useRef, useState } from 'react';
import { INotificationComponent } from './types';

export const Notification = ({ content }: INotificationComponent): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const themeContext = useTheme();
  const notificationsContext = useNotifications();

  const menuAnchor = useRef<HTMLElement | null>(null);

  const handleMenuOpen = () => {
    if (notificationsContext.notifications.length > 0) {
      setMenuOpen(true);
    }
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Badge role="alert" color="primary" badgeContent={content} max={999} sx={{ margin: '0 10px' }} ref={menuAnchor}>
        <IconButton onClick={handleMenuOpen}>
          <NotificationsIcon sx={{ color: themeContext.theme.colors.detail, width: '30px', height: '30px' }} />
        </IconButton>
      </Badge>

      <Menu anchorEl={menuAnchor.current} open={menuOpen} onClose={handleMenuClose}>
        {notificationsContext.notifications.map((notification, index) => (
          <MenuItem key={index}>
            <ListItemText primary={`New transaction at hash ${notification}`} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
