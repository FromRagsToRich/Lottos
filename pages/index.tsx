import { Button } from '@components/Common';

const HomePage = () => {
  return (
    <div>
      <Button onClick={() => console.log('hello')} text="button1" />
    </div>
  );
};

export default HomePage;
