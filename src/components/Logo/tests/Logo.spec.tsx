import { ThemeContext } from '@contexts';
import { render, screen } from '@testing-library/react';
import { themeContextMock } from '@tests/contexts/themeContextMock';
import { ThemeProvider } from 'styled-components';
import { Logo } from '../index';

describe('Logo', () => {
  it('renders logo component with correct styles', () => {
    render(
      <ThemeContext.Provider value={themeContextMock}>
        <ThemeProvider theme={themeContextMock.theme}>
          <Logo />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    const logoElement = screen.getByRole('banner');

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveStyle({
      color: themeContextMock.theme.colors.detail,
      fontSize: '26px',
      fontWeight: '700',
    });
  });
});
