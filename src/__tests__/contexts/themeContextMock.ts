import { faker } from '@faker-js/faker';
import { ThemesContextData } from '@interfaces/contexts/themesContextData';

export const themeContextMock: ThemesContextData = {
  toggleTheme: jest.fn(),
  theme: {
    name: faker.word.adjective(),
    colors: {
      primary: faker.color.rgb(),
      secundary: faker.color.rgb(),
      tertiary: faker.color.rgb(),
      detail: faker.color.rgb(),
      fontDefault: faker.color.rgb(),
      fontText: faker.color.rgb(),
    },
  },
};
