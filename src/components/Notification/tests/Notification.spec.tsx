import { NotificationsContext, ThemeContext } from '@contexts';
import { render, screen } from '@testing-library/react';
import { themeContextMock } from '@tests/contexts/themeContextMock';
import { notificationsContextMock } from '@tests/contexts/notificationsContextMock';
import { Notification } from '../index';
import { faker } from '@faker-js/faker';

describe('Notification', () => {
  it('should render notification component with correct badge content and styles', () => {
    const notificationContent = faker.number.int({ max: 998 });

    render(
      <ThemeContext.Provider value={themeContextMock}>
        <NotificationsContext.Provider value={notificationsContextMock}>
          <Notification content={notificationContent} />
        </NotificationsContext.Provider>
      </ThemeContext.Provider>
    );

    const badgeElement = screen.getByRole('alert');
    const badgeContentElement = screen.getByText(notificationContent.toString());

    expect(badgeElement).toBeInTheDocument();
    expect(badgeContentElement).toBeInTheDocument();
    expect(badgeContentElement).toHaveTextContent(notificationContent.toString());
  });
});
