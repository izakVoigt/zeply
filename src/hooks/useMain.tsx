import { MainContext } from '@contexts';
import { useContext } from 'react';

export const useMain = () => useContext(MainContext);
