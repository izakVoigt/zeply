import axios from 'axios';
import { toast } from 'react-toastify';
import { IAddress, ITransaction } from './types';
import { CurrencyEnum } from '@utils/enums/currencyEnum';

const apiBlockchain = axios.create({ baseURL: 'https://blockchain.info' });

const apiCoinMarket = axios.create({ baseURL: 'https://api.coingecko.com/api/v3' });

export const getAddress = async (address: string) => {
  try {
    const response = await apiBlockchain.get<IAddress>(`/rawaddr/${address}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      toast.error(error.response.data.message);
    } else {
      toast.error('Unexpected error');
    }
  }
};

export const getTransaction = async (transaction: string) => {
  try {
    const response = await apiBlockchain.get<ITransaction>(`/rawtx/${transaction}`);

    return { data: response.data, time: new Date() };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      toast.error(error.response.data.message);
    } else {
      toast.error('Unexpected error');
    }
  }
};

export const getBTCtoEUR = async () => {
  try {
    const response = await apiCoinMarket.get('/simple/price', {
      params: { ids: 'bitcoin', vs_currencies: 'eur' },
    });

    const eurValue: number = response.data.bitcoin.eur;

    return eurValue;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      toast.error(error.response.data.message);
    } else {
      toast.error('Unexpected error');
    }
  }
};

export const getBTCtoUSD = async () => {
  try {
    const response = await apiCoinMarket.get('/simple/price', {
      params: { ids: 'bitcoin', vs_currencies: 'usd' },
    });

    const usdValue: number = response.data.bitcoin.usd;

    return usdValue;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      toast.error(error.response.data.message);
    } else {
      toast.error('Unexpected error');
    }
  }
};
