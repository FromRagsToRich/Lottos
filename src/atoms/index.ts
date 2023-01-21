import { atom } from 'recoil';
import { v1 } from 'uuid';

type Lotto = number[];
type Lottos = Lotto[];

/**
 * https://velog.io/@sj_dev_js/Recoil-Duplicate-atom-key
 * Next.js 개발 중 파일이 변경되면 다시 빌드되는 과정에서 atom으로 만든 state가 재선언.
 * key는 항상 고유값을 가져야하는데 재선언되는 과정에서 이미 key로 선언된 값을 key로 사용해서 문제가 발생.
 */

const LOTTO_KEYS = {
  LOTTOS: `lottos/${v1()}`,
  PURCHASE_COUNT: `purchase-count/${v1()}`,
};

const lottosState = atom<Lottos>({
  key: LOTTO_KEYS.LOTTOS,
  default: [],
});

const purchaseState = atom<number>({
  key: LOTTO_KEYS.PURCHASE_COUNT,
  default: 0,
});

export { lottosState, purchaseState };
