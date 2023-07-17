import { MainContextData } from '@interfaces/contexts/mainContextData';
import { getBTCtoEUR, getBTCtoUSD } from '@services/api';
import connectWebsocket from '@services/websocket';
import { ReactNode, createContext, useEffect, useState } from 'react';

export const MainContext = createContext<MainContextData>({} as MainContextData);

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState<{ BTCtoEUR?: number; BTCtoUSD?: number }>({});
  const [connection, setConnection] = useState<WebSocket | null>(null);

  const fetchBTCValues = async () => {
    const usdValue = await getBTCtoUSD();
    const eurValue = await getBTCtoEUR();

    setValues({ BTCtoUSD: usdValue, BTCtoEUR: eurValue });
  };

  const handleConnect = (connection: WebSocket) => {
    setConnection(connection);
  };

  useEffect(() => {
    fetchBTCValues();

    const client = connectWebsocket(handleConnect);

    return () => {
      client.close();
    };
  }, []);

  return (
    <MainContext.Provider value={{ BTCtoEUR: values.BTCtoEUR, BTCtoUSD: values.BTCtoUSD, connection }}>
      {children}
    </MainContext.Provider>
  );
};
