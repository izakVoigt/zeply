import { ITransaction } from '@interfaces/transaction';
import { IAddress } from '@interfaces/address';
import { errorHandler } from '@utils/errorHandler';
import axios from 'axios';

const apiBlockchain = axios.create({ baseURL: process.env.NEXT_APP_BLOCKCHAIN_API });

const apiCoinMarket = axios.create({ baseURL: process.env.NEXT_APP_COINMARKET_API });

export const getAddress = async (address: string) => {
  try {
    const response = await apiBlockchain.get<IAddress>(`/rawaddr/${address}`);

    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const getTransaction = async (transaction: string) => {
  try {
    const response = await apiBlockchain.get<ITransaction>(`/rawtx/${transaction}`);

    return { data: response.data, time: new Date() };
  } catch (error) {
    errorHandler(error);
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
    errorHandler(error);
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
    errorHandler(error);
  }
};
