import { IThemes } from '../themes';

export interface ThemesContextData {
  toggleTheme: () => void;
  theme: IThemes;
}
