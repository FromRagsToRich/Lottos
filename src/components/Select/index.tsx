import { lottosState, purchaseState } from '@atoms/index';
import { Button } from '@components/Common';
import Dropdown from '@components/Common/Dropdown';
import { getLottoNumbers } from '@controllers/lotto.controllers';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

function Select() {
  const [purchaseCount, setPurchaseState] = useRecoilState(purchaseState);
  const setLottosState = useSetRecoilState(lottosState);

  const onClick = () => {
    const lottoNumbers = getLottoNumbers(purchaseCount);
    setLottosState(lottoNumbers);
  };

  const onSelect = (value: number) => {
    setPurchaseState(value);
  };

  return (
    <div className="flex gap-2 h-14 py-2">
      <Dropdown
        placeholder="개수를 선택해주세요"
        items={10}
        onSelect={onSelect}
        selectedValue={purchaseCount}
      />
      <Button onClick={onClick} text="뽑기" disabled={purchaseCount < 1} />
    </div>
  );
}

export default Select;
