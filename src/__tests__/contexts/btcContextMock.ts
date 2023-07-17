import { faker } from '@faker-js/faker';
import { CurrencyEnum } from '@utils/enums/currencyEnum';

export const btcContextMock = {
  searches: [],
  addess: {
    hash58: faker.string.uuid(),
    hash160: faker.string.uuid(),
    n_tx: faker.number.int(),
    n_unredeemed: faker.number.int(),
    total_received: faker.number.int(),
    total_sent: faker.number.int(),
    final_balance: faker.number.int(),
  },
  transation: {
    hash: faker.string.uuid(),
    ver: faker.number.int(),
    vin_sz: faker.number.int(),
    vout_sz: faker.number.int(),
    lock_time: faker.string.alpha(),
    size: faker.number.int(),
    relayed_by: faker.internet.ip(),
    block_height: faker.number.int(),
    tx_index: faker.number.int(),
    inputs: [],
    out: [],
  },
  currency: CurrencyEnum.BTC,
  updateAddress: jest.fn(),
  updateTransaction: jest.fn(),
  updateCurrency: jest.fn(),
};
