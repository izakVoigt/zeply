import { MainContext } from '@contexts/main';
import { useContext } from 'react';

export const useMain = () => useContext(MainContext);
