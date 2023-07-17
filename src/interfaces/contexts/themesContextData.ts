import { IThemes } from '..';

export interface ThemesContextData {
  toggleTheme: () => void;
  theme: IThemes;
}
