import { purchaseState } from '@atoms/index';
import Machine from '@components/Machine';
import Select from '@components/Select';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

const HomePage = () => {
  const [count, setCount] = useRecoilState(purchaseState);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };

  return (
    <div>
      <Select />
      <Machine />
    </div>
  );
};

export default HomePage;
