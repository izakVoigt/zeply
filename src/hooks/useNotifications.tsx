import { NotificationsContext } from '@contexts/notifications';
import { useContext } from 'react';

export const useNotifications = () => useContext(NotificationsContext);
