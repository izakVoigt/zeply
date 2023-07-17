import { IInput } from './input';
import { IOutput } from './output';

export interface ITransaction {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  lock_time: string;
  size: number;
  relayed_by: string;
  block_height: number;
  tx_index: string;
  inputs: IInput[];
  out: IOutput[];
}
