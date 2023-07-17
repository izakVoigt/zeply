import { render, screen } from '@testing-library/react';
import { DataDisplay } from '..';
import { ThemeContext } from '@contexts';
import { themeContextMock } from '@tests/contexts/themeContextMock';
import { faker } from '@faker-js/faker';

describe('DataDisplay', () => {
  const mockIndex = faker.number.int();
  const mockHash = faker.string.uuid();

  it('should render the index and hash correctly', () => {
    render(
      <ThemeContext.Provider value={themeContextMock}>
        <DataDisplay index={mockIndex} hash={mockHash} />
      </ThemeContext.Provider>
    );

    const indexElement = screen.getByText(`${mockIndex}º`);
    const hashElement = screen.getByText(mockHash);

    expect(indexElement).toBeInTheDocument();
    expect(hashElement).toBeInTheDocument();
  });
});
