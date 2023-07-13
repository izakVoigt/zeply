export interface IInput {
  prev_out: {
    hash: string;
    value: string;
    tx_index: string;
    n: string;
  };
  script: string;
}

export interface IOutput {
  value: string;
  hash: string;
  script: string;
}

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

export interface IAddress {
  hash58?: string;
  hash160?: string;
  n_tx: number;
  n_unredeemed: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
}
