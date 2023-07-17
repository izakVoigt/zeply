import { IAddress, IBtcAddress, IBtcTransaction, ITransaction } from '..';

export interface BtcContextData {
  searches: string[];
  address?: IBtcAddress;
  transaction?: IBtcTransaction;
  updateAddress: (address: IAddress, hash: string) => void;
  updateTransaction: (transaction: ITransaction, time: Date, hash: string) => void;
}
