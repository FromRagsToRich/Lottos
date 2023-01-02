import { lottoServices } from '@services/index';

export const getLottoNumbers = (count: number) => {
  return lottoServices().createLottoNumbers(count);
};
