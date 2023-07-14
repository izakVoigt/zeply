import { IAddress, ITransaction } from '@services/types';
import { IBtcAddress, IBtcTransaction } from './btc';

export interface BtcContextData {
  updateAddress: (address: IAddress) => void;
  updateTransaction: (transaction: ITransaction, time: Date) => void;
  address?: IBtcAddress;
  transaction?: IBtcTransaction;
  BTCtoUSD?: number;
  BTCtoEUR?: number;
}
