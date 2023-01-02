import { MAX_NUMBER, MAX_LENGTH_PER_LOTTO } from 'src/constants';

const lottoServices = () => {
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

  const createLottoNumbers = (count: number) => {
    Array.from({ length: count }).map((_) => {
      return createLottoNumber();
    });
  };

  return { createRandomNumber, createLottoNumber, createLottoNumbers };
};

export default lottoServices;
