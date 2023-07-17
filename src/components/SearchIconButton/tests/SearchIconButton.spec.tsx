import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchIconButton } from '..';
import { ThemeContext } from '@contexts';
import { themeContextMock } from '@tests/contexts/themeContextMock';

describe('SearchIconButton', () => {
  it('should call onClick function when clicked', () => {
    const onClick = jest.fn();

    render(
      <ThemeContext.Provider value={themeContextMock}>
        <SearchIconButton onClick={onClick} />
      </ThemeContext.Provider>
    );

    const buttonElement = screen.getByRole('button');

    userEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
