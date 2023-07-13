import { ThemesContextData } from '@interfaces/themesContextData';

export const themeContextMock: ThemesContextData = {
  toggleTheme: jest.fn(),
  theme: {
    name: 'light',
    colors: {
      primary: 'blue',
      secundary: 'white',
      tertiary: 'yellow',
      detail: 'black',
      fontDefault: 'red',
      fontText: 'green',
    },
  },
};
