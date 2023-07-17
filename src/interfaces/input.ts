export interface IInput {
  prev_out: {
    hash: string;
    value: string;
    tx_index: string;
    n: string;
  };
  script: string;
}

export interface IInputWebsocket {
  sequence: number;
  prev_out: {
    spent: boolean;
    tx_index: number;
    type: number;
    addr: string;
    value: number;
    n: number;
    script: string;
  };
  script: string;
}
