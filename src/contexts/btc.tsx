import { IAddress, IBtcAddress, IBtcTransaction, IChildren, ITransaction } from '@interfaces/index';
import { BtcContextData } from '@interfaces/contexts/index';
import { createContext, useCallback, useState } from 'react';

export const BtcContext = createContext<BtcContextData>({} as BtcContextData);

export const BtcContextProvider = ({ children }: IChildren) => {
  const [searches, setSearches] = useState<string[]>([]);
  const [address, setAddress] = useState<IBtcAddress | undefined>();
  const [transaction, setTransaction] = useState<IBtcTransaction | undefined>();

  const updateAddress = useCallback((address: IAddress, hash: string) => {
    setAddress({
      btcReceived: address.total_received,
      btcSpent: address.total_sent,
      btcUnspent: address.total_received - address.total_sent,
      finalBalance: address.final_balance,
      numberTransactions: address.n_tx,
    });
    setSearches((prevSearches) => [...prevSearches, hash]);
  }, []);

  const updateTransaction = useCallback((transaction: ITransaction, time: Date, hash: string) => {
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
    setSearches((prevSearches) => [...prevSearches, hash]);
  }, []);

  return (
    <BtcContext.Provider value={{ searches, address, transaction, updateAddress, updateTransaction }}>
      {children}
    </BtcContext.Provider>
  );
};
