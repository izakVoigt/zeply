import { MainContextData } from '@interfaces/contexts/mainContextData';
import { getBTCtoEUR, getBTCtoUSD } from '@services/api';
import { ReactNode, createContext, useEffect, useState } from 'react';

export const MainContext = createContext<MainContextData>({} as MainContextData);

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState<{ BTCtoEUR?: number; BTCtoUSD?: number }>({});

  const fetchBTCValues = async () => {
    const usdValue = await getBTCtoUSD();
    const eurValue = await getBTCtoEUR();

    setValues({ BTCtoUSD: usdValue, BTCtoEUR: eurValue });
  };

  useEffect(() => {
    fetchBTCValues();
  }, []);

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
