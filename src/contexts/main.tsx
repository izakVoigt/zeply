import { IChildren } from '@interfaces/index';
import { MainContextData } from '@interfaces/contexts/index';
import { connectWebsocket, getBTCtoEUR, getBTCtoUSD } from '@services';
import { createContext, useEffect, useState } from 'react';

export const MainContext = createContext<MainContextData>({} as MainContextData);

export const MainContextProvider = ({ children }: IChildren) => {
  const [values, setValues] = useState<{ BTCtoEUR?: number; BTCtoUSD?: number }>({});
  const [connection, setConnection] = useState<WebSocket | null>(null);

  useEffect(() => {
    const fetchBTCValues = async () => {
      const usdValue = await getBTCtoUSD();
      const eurValue = await getBTCtoEUR();

      setValues({ BTCtoUSD: usdValue, BTCtoEUR: eurValue });
    };

    const handleConnect = (connection: WebSocket) => {
      setConnection(connection);
    };

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
