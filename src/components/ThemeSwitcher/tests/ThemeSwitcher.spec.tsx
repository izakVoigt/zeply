import { ThemeContext } from '@contexts/theme';
import { fireEvent, render, screen } from '@testing-library/react';
import { themeContextMock } from '@tests/contexts/themeContextMock';
import { ThemeProvider } from 'styled-components';
import { ThemeSwitcher } from '../index';

describe('ThemeSwitcher', () => {
  it('renders theme switcher component', () => {
    render(
      <ThemeContext.Provider value={themeContextMock}>
        <ThemeProvider theme={themeContextMock.theme}>
          <ThemeSwitcher />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    const themeSwitcherElement = screen.getByRole('checkbox');

    expect(themeSwitcherElement).toBeInTheDocument();
  });

  it('render theme switch component and fire a click', () => {
    render(
      <ThemeContext.Provider value={themeContextMock}>
        <ThemeProvider theme={themeContextMock.theme}>
          <ThemeSwitcher />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    const themeSwitcherElement = screen.getByRole('checkbox');

    fireEvent.click(themeSwitcherElement);

    expect(themeContextMock.toggleTheme).toHaveBeenCalled();
  });
});
