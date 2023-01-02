import { describe, test, expect } from 'vitest';
import { lottoServices } from '..';
import { MAX_LENGTH_PER_LOTTO, MAX_NUMBER } from 'src/constants';

describe('lotto services를 테스트 합니다.', () => {
  const { createRandomNumber, createLottoNumber, createLottoNumbers } =
    lottoServices();

  test(`${MAX_NUMBER}개 이하의 숫자가, 랜덤으로 생성되어야 합니다.`, () => {
    expect(createRandomNumber()).lessThan(MAX_NUMBER);
  });

  test(`1개의 로또 세트는${MAX_LENGTH_PER_LOTTO}개로 이루어져 있어야 한다.`, () => {
    expect(createLottoNumber()).length(MAX_LENGTH_PER_LOTTO);
  });

  test(`각 로또 세트에는 중복된 값이 없어야 한다.`, () => {
    const set = new Set(createLottoNumber());
    expect(set).length(MAX_LENGTH_PER_LOTTO);
  });

  test(`주어진 개수만큼 로또를 생성해야 한다.`, () => {
    const BUY = 5;
    const lottoNumbers = createLottoNumbers(BUY);

    expect(lottoNumbers).length(BUY);
  });
});
