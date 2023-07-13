import { AvatarComponent } from '@components/AvatarComponent';
import { Logo } from '@components/Logo';
import { Notification } from '@components/Notification';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div>
      Hello World
      <AvatarComponent />
      <Notification content={999} />
      <Logo />
    </div>
  );
};

export default HomePage;
