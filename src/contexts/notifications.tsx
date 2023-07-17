import { NotificationsContextData } from '@interfaces/contexts/notificationsContextData';
import { ReactNode, createContext, useCallback, useState } from 'react';

export const NotificationsContext = createContext<NotificationsContextData>({} as NotificationsContextData);

export const NotificationsContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<{ addresses: string[]; notifications: string[] }>({
    addresses: [],
    notifications: [],
  });
  const { addresses, notifications } = state;

  const removeNotification = useCallback((hash: string) => {
    setState((prevState) => ({
      ...prevState,
      notifications: prevState.notifications.filter((notification) => notification !== hash),
    }));
  }, []);

  const subscribeAddress = useCallback((hash: string) => {}, []);

  const unsubscribeAddress = useCallback((hash: string) => {}, []);

  return (
    <NotificationsContext.Provider
      value={{ addresses, notifications, removeNotification, subscribeAddress, unsubscribeAddress }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
