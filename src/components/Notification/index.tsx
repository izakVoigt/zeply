import { useTheme } from '@hooks/useTheme';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { INotificationComponent } from './types';

export const Notification = ({ content }: INotificationComponent): JSX.Element => {
  const themeContext = useTheme();

  return (
    <Badge role="alert" color="primary" badgeContent={content} max={999} sx={{ margin: '0 10px' }}>
      <NotificationsIcon sx={{ color: themeContext.theme.colors.detail }} />
    </Badge>
  );
};
