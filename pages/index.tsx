import { purchaseState } from '@atoms/index';
import { Button } from '@components/Common';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

const HomePage = () => {
  const [count, setCount] = useRecoilState(purchaseState);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };

  return (
    <div>
      <input onChange={onChange} value={count} />
      <Button onClick={() => console.log('hello')} text="button1" />
      <div>{count}</div>
    </div>
  );
};

export default HomePage;
