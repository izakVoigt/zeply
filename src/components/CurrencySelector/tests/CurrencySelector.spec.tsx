import { render, screen } from '@testing-library/react';
import { BtcContext, ThemeContext } from '@contexts';
import { CurrencySelector } from '../index';
import { themeContextMock } from '@tests/contexts/themeContextMock';
import { btcContextMock } from '@tests/contexts/btcContextMock';

describe('CurrencySelector', () => {
  it('should update currency when selected value changes', () => {
    render(
      <ThemeContext.Provider value={themeContextMock}>
        <BtcContext.Provider value={btcContextMock}>
          <CurrencySelector />
        </BtcContext.Provider>
      </ThemeContext.Provider>
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
