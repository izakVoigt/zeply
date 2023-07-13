import { TabsContainer } from '@components/TabsContainer';
import { Header } from '@compounds/Header';
import { Container } from '@mui/material';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <Container sx={{ padding: '10px' }}>
        <TabsContainer labels={['address', 'transaction']}>
          <>teste 1</>
          <>Teste 2</>
        </TabsContainer>
      </Container>
    </>
  );
};

export default HomePage;
