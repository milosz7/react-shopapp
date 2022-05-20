import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

const App: React.FC = () => {

  return (
    <Container>
      <Header />
      <Products />
    </Container>
  );
}

export default App;
