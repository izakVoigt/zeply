import { ThemeContext } from '@contexts/theme';
import { render, screen } from '@testing-library/react';
import { themeContextMock } from '@tests/contexts/themeContextMock';
import { ThemeProvider } from 'styled-components';
import { AvatarComponent } from '../index';

describe('AvatarComponent', () => {
  it('renders avatar component with correct styles', () => {
    render(
      <ThemeContext.Provider value={themeContextMock}>
        <ThemeProvider theme={themeContextMock.theme}>
          <AvatarComponent />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    const avatarElement = screen.getByRole('img');

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveStyle({ color: 'black', backgroundColor: 'blue' });
  });
});
