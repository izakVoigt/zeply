import { ThemeContext } from '@contexts/theme';
import { render, screen } from '@testing-library/react';
import { themeContextMock } from '@tests/contexts/themeContextMock';
import { ThemeProvider } from 'styled-components';
import { NotificationComponent } from '../index';

describe('NotificationComponent', () => {
  it('renders notification component with correct badge content and styles', () => {
    const notificationContent = 5;

    render(
      <ThemeContext.Provider value={themeContextMock}>
        <ThemeProvider theme={themeContextMock.theme}>
          <NotificationComponent content={notificationContent} />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    const badgeElement = screen.getByRole('alert');
    const badgeContentElement = screen.getByText(notificationContent.toString());

    expect(badgeElement).toBeInTheDocument();
    expect(badgeContentElement).toBeInTheDocument();
    expect(badgeContentElement).toHaveTextContent(notificationContent.toString());
  });
});
