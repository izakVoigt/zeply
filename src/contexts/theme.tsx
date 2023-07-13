import { ThemesContextData } from '@interfaces/themesContextData';
import { IThemes } from '@interfaces/themes';
import { darkTheme, lightTheme } from '@styles/Themes';
import { ReactNode, createContext, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext<ThemesContextData>({} as ThemesContextData);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<IThemes>(lightTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
