export interface IBtcAddress {
  btcReceived: number;
  btcSpent: number;
  btcUnspent: number;
  finalBalance: number;
  numberTransactions: number;
}

export interface IBtcTransaction {
  confirmations: number;
  fees: number;
  hash: string;
  inputs: number;
  outputs: number;
  receivedTime: Date;
  status: string;
  size: number;
}
