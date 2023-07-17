import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabsContainer } from '..';
import { ThemeContext } from '@contexts';
import { themeContextMock } from '@tests/contexts/themeContextMock';

describe('TabsContainer', () => {
  it('should switch tabs when clicked', () => {
    const labels = ['Tab 1', 'Tab 2'];
    const content1 = 'Content 1';
    const content2 = 'Content 2';

    render(
      <ThemeContext.Provider value={themeContextMock}>
        <TabsContainer labels={labels}>
          <div>{content1}</div>
          <div>{content2}</div>
        </TabsContainer>
      </ThemeContext.Provider>
    );

    const tab1 = screen.getByText(labels[0]);
    const tab2 = screen.getByText(labels[1]);

    const contentElement1 = screen.getByText(content1);
    const contentElement2 = screen.getByText(content2);

    expect(contentElement1).toBeInTheDocument();

    userEvent.click(tab2);

    expect(contentElement2).toBeInTheDocument();

    userEvent.click(tab1);

    expect(contentElement1).toBeInTheDocument();
  });
});
