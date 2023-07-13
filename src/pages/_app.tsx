import GlobalStyles from '@/styles/GlobalStyles';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import HomePage from '.';

const App = (): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
      </Head>
      <GlobalStyles />
      <ToastContainer position="top-center" hideProgressBar={true} limit={1} />
      <HomePage />
    </>
  );
};

export default App;
