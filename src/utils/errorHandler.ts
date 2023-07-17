import axios from 'axios';
import { toast } from 'react-toastify';

export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error) && error.response?.data) {
    toast.error(error.response.data.message);
  } else {
    toast.error('Unexpected error');
  }

  if (error instanceof Error) {
    toast.error(error.message);
  }
};
