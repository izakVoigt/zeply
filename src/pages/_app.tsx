import { BtcContextProvider } from '@contexts/btc';
import { MainContextProvider } from '@contexts/main';
import { NotificationsContextProvider } from '@contexts/notifications';
import { CustomThemeProvider } from '@contexts/theme';
import GlobalStyles from '@styles/GlobalStyles';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '.';

const App = (): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
      </Head>
      <CustomThemeProvider>
        <ToastContainer />
        <GlobalStyles />
        <MainContextProvider>
          <BtcContextProvider>
            <NotificationsContextProvider>
              <HomePage />
            </NotificationsContextProvider>
          </BtcContextProvider>
        </MainContextProvider>
      </CustomThemeProvider>
    </>
  );
};

export default App;
