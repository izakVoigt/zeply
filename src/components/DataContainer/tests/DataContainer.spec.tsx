import { render, screen } from '@testing-library/react';
import { DataContainer } from '..';

describe('DataContainer', () => {
  it('should render children correctly', () => {
    const mockChild = 'Child Component';

    render(<DataContainer>{mockChild}</DataContainer>);

    const childElement = screen.getByText(mockChild);

    expect(childElement).toBeInTheDocument();
  });

  it('should have the correct styles', () => {
    render(<DataContainer />);

    const containerElement = screen.getByTestId('data-container');

    expect(containerElement).toHaveStyle({
      width: '60%',
      height: '250px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    });
  });
});
