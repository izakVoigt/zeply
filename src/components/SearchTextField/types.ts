import { ChangeEvent } from 'react';

export interface ISearchTextField {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
