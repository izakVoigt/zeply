import { IThemes } from '@interfaces/index';

export const darkTheme: IThemes = {
  name: 'dark',
  colors: {
    primary: '#050505',
    secundary: '#282828',
    tertiary: '#3c3c3c',
    detail: '#0000be',
    fontDefault: '#f5f5f5',
    fontText: '#dcdcdc',
  },
};

export const lightTheme: IThemes = {
  name: 'light',
  colors: {
    primary: '#fafafa',
    secundary: '#d7d7d7',
    tertiary: '#c3c3c3',
    detail: '#0000be',
    fontDefault: '#0a0a0a',
    fontText: '#232323',
  },
};
