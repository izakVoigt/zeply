import { AvatarComponent } from '@components/AvatarComponent';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div>
      Hello World
      <AvatarComponent />
    </div>
  );
};

export default HomePage;
