import { useTheme } from '@hooks';
import { ThemeSwitchStyled } from '@styles/material-ui/ThemeSwitch';

export const ThemeSwitcher = (): JSX.Element => {
  const themeContext = useTheme();

  return <ThemeSwitchStyled onChange={() => themeContext.toggleTheme()} />;
};
