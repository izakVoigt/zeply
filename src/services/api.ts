import axios from 'axios';
import { toast } from 'react-toastify';
import { IAddress, ITransaction } from './types';

const api = axios.create({ baseURL: 'https://blockchain.info' });

export const getAddress = async (address: string) => {
  try {
    const response = await api.get<IAddress>(`/rawaddr/${address}`);

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
    const response = await api.get<ITransaction>(`/rawtx/${transaction}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      toast.error(error.response.data.message);
    } else {
      toast.error('Unexpected error');
    }
  }
};
