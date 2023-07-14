import { useContext } from 'react';
import { BtcContext } from '@contexts/btc';

export const useBtc = () => useContext(BtcContext);
