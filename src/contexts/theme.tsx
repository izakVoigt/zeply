import { IChildren, IThemes } from '@interfaces/index';
import { ThemesContextData } from '@interfaces/contexts/index';
import { darkTheme, lightTheme } from '@styles/Themes';
import { createContext, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext<ThemesContextData>({} as ThemesContextData);

export const CustomThemeProvider = ({ children }: IChildren) => {
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
