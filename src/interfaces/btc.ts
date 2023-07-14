export interface IBtcAddress {
  numberTransactions: number;
  btcReceived: number;
  btcSpent: number;
  btcUnspent: number;
  finalBalance: number;
}

export interface IBtcTransaction {
  hash: string;
  receivedTime: Date;
  status: string;
  size: number;
  confirmations: number;
  inputs: number;
  outputs: number;
  fees: number;
}
