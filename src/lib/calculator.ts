import { MAX_NUMBER, MAX_LENGTH_PER_LOTTO } from 'src/constants';

const createRandomNumber = (max: number = MAX_NUMBER) => {
  return Math.floor(Math.random() * max) + 1;
};

const createLottoNumber = (lotto: number[] = []): number[] => {
  if (lotto.length === MAX_LENGTH_PER_LOTTO) {
    return lotto;
  }

  const randomNumber = createRandomNumber();
  if (!lotto.includes(randomNumber)) {
    lotto.push(randomNumber);
  }

  return createLottoNumber(lotto);
};

const createLottoNumberSet = (set: number) => {
  Array.from({ length: set }).map((_) => {
    return createLottoNumber();
  });
};

export { createRandomNumber, createLottoNumber, createLottoNumberSet };
