import { IInputWebsocket, IOutputWebsocket } from '.';

export interface IAddress {
  hash58?: string;
  hash160?: string;
  n_tx: number;
  n_unredeemed: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
}

export interface IAddressWebsocket {
  op: string;
  x: {
    lock_time: number;
    ver: number;
    size: number;
    inputs: IInputWebsocket[];
    time: number;
    tx_index: number;
    vin_sz: number;
    hash: string;
    vout_sz: number;
    relayed_by: string;
    out: IOutputWebsocket[];
  };
}
