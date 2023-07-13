import { useTheme } from '@hooks/useTheme';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { INotificationComponent } from './types';

export const NotificationComponent = ({ content }: INotificationComponent): JSX.Element => {
  const themeContext = useTheme();

  return (
    <Badge role="alert" color="primary" badgeContent={content} max={999}>
      <NotificationsIcon sx={{ color: themeContext.theme.colors.detail }} />
    </Badge>
  );
};
