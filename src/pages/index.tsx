import { AvatarComponent } from '@components/AvatarComponent';
import { NotificationComponent } from '@components/NotificationComponent';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div>
      Hello World
      <AvatarComponent />
      <NotificationComponent content={999} />
    </div>
  );
};

export default HomePage;
