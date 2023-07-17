import { IAddress } from '../address';
import { ITransaction } from '../transaction';
import { IBtcAddress, IBtcTransaction } from '../btc';

export interface BtcContextData {
  searches: string[];
  address?: IBtcAddress;
  transaction?: IBtcTransaction;
  updateAddress: (address: IAddress, hash: string) => void;
  updateTransaction: (transaction: ITransaction, time: Date, hash: string) => void;
}
