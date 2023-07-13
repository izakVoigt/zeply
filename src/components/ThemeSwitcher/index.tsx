import { useTheme } from '@hooks/useTheme';
import { ThemeSwitchStyled } from './styles';

export const ThemeSwitcher = (): JSX.Element => {
  const themeContext = useTheme();

  return <ThemeSwitchStyled onChange={() => themeContext.toggleTheme()} />;
};
