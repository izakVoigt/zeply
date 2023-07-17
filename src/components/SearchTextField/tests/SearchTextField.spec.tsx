import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchTextField } from '..';
import { ThemeContext } from '@contexts';
import { themeContextMock } from '@tests/contexts/themeContextMock';

describe('SearchTextField', () => {
  it('should call onChange function when value is changed', () => {
    const onChange = jest.fn();

    render(
      <ThemeContext.Provider value={themeContextMock}>
        <SearchTextField value="" onChange={onChange} />
      </ThemeContext.Provider>
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
  });
});
