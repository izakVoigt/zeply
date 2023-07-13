import { AvatarComponent } from '@components/AvatarComponent';
import { Logo } from '@components/Logo';
import { Notification } from '@components/Notification';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div>
      Hello World
      <AvatarComponent />
      <Notification content={999} />
      <Logo />
      <ThemeSwitcher />
    </div>
  );
};

export default HomePage;
