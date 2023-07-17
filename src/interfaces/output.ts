export interface IOutput {
  value: string;
  hash: string;
  script: string;
}

export interface IOutputWebsocket {
  spent: boolean;
  tx_index: number;
  type: number;
  addr: string;
  value: number;
  n: number;
  script: string;
}
