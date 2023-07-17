import { NotificationsContext } from '@contexts';
import { useContext } from 'react';

export const useNotifications = () => useContext(NotificationsContext);
