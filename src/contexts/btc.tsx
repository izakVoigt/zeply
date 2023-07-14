import { IBtcAddress, IBtcTransaction } from '@interfaces/btc';
import { BtcContextData } from '@interfaces/btcContextData';
import { getBTCtoEUR, getBTCtoUSD } from '@services/api';
import { IAddress, ITransaction } from '@services/types';
import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';

export const BtcContext = createContext<BtcContextData>({} as BtcContextData);

export const BtcContextProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<IBtcAddress>();
  const [transaction, setTransaction] = useState<IBtcTransaction>();
  const [BTCtoUSD, setBTCtoUSD] = useState<number>();
  const [BTCtoEUR, setBTCtoEUR] = useState<number>();

  const updateAddress = useCallback((address: IAddress) => {
    setAddress({
      btcReceived: address.total_received,
      btcSpent: address.total_sent,
      btcUnspent: address.total_received - address.total_sent,
      finalBalance: address.final_balance,
      numberTransactions: address.n_tx,
    });
  }, []);

  const updateTransaction = useCallback((transaction: ITransaction, time: Date) => {
    setTransaction({
      confirmations: transaction.block_height !== null ? transaction.block_height : 0,
      hash: transaction.hash,
      inputs: transaction.inputs.reduce((total: number, input: any) => total + parseInt(input.prev_out.value), 0),
      outputs: transaction.out.reduce((total: number, output: any) => total + parseInt(output.value), 0),
      size: transaction.size,
      status: transaction.block_height !== null ? 'Confirmed' : 'Unconfirmed',
      fees: transaction.inputs.reduce((total: number, input: any) => total - parseInt(input.prev_out.value), 0),
      receivedTime: time,
    });
  }, []);

  useEffect(() => {
    const fetchBTCValues = async () => {
      try {
        const usdValue = await getBTCtoUSD();
        const eurValue = await getBTCtoEUR();

        setBTCtoUSD(usdValue);
        setBTCtoEUR(eurValue);
      } catch (error) {
        console.error('Error fetching BTC values:', error);
      }
    };

    fetchBTCValues();
  }, []);

  return (
    <BtcContext.Provider value={{ address, transaction, BTCtoEUR, BTCtoUSD, updateAddress, updateTransaction }}>
      {children}
    </BtcContext.Provider>
  );
};
