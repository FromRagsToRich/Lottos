import { atom } from 'recoil';

type Lotto = number[];
type Lottos = Lotto[];

const LOTTO_KEYS = {
  LOTTOS: 'lottos',
  PURCHASE_COUNT: 'purchase-count',
};

const lottosState = atom<Lottos>({
  key: LOTTO_KEYS.LOTTOS,
  default: [],
});

const purchaseState = atom<number>({
  key: LOTTO_KEYS.PURCHASE_COUNT,
  default: 1,
});

export { lottosState, purchaseState };
