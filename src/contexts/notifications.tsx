import { useMain } from '@hooks';
import { IAddressWebsocket, IChildren } from '@interfaces/index';
import { NotificationsContextData } from '@interfaces/contexts/index';
import { createContext, useCallback, useEffect, useState } from 'react';

export const NotificationsContext = createContext<NotificationsContextData>({} as NotificationsContextData);

export const NotificationsContextProvider = ({ children }: IChildren) => {
  const [state, setState] = useState<{ addresses: string[]; notifications: string[] }>({
    addresses: [],
    notifications: [],
  });
  const { addresses, notifications } = state;

  const mainContext = useMain();

  const handleMessage = useCallback((event: MessageEvent<any>) => {
    const parsedMessage: IAddressWebsocket = JSON.parse(event.data);
    const hash = parsedMessage.x.hash;

    setState((prevState) => ({
      ...prevState,
      notifications: [...prevState.notifications, hash],
    }));
  }, []);

  const removeNotification = useCallback((hash: string) => {
    setState((prevState) => ({
      ...prevState,
      notifications: prevState.notifications.filter((notification) => notification !== hash),
    }));
  }, []);

  const subscribeAddress = useCallback(
    (hash: string) => {
      if (mainContext.connection) {
        mainContext.connection.send(JSON.stringify({ op: 'addr_sub', addr: hash }));
        setState((prevState) => ({ ...prevState, addresses: [...prevState.addresses, hash] }));
      }
    },
    [mainContext.connection]
  );

  const unsubscribeAddress = useCallback(
    (hash: string) => {
      if (mainContext.connection) {
        mainContext.connection.send(JSON.stringify({ op: 'addr_unsub', addr: hash }));
        setState((prevState) => ({
          ...prevState,
          addresses: prevState.addresses.filter((address) => address !== hash),
        }));
      }
    },
    [mainContext.connection]
  );

  useEffect(() => {
    if (mainContext.connection) {
      mainContext.connection.addEventListener('message', handleMessage);
    }

    return () => {
      if (mainContext.connection) {
        mainContext.connection.removeEventListener('message', handleMessage);
      }
    };
  }, [mainContext.connection, handleMessage]);

  return (
    <NotificationsContext.Provider
      value={{ addresses, notifications, removeNotification, subscribeAddress, unsubscribeAddress }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
