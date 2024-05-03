import Container from '../../components/Container/Container';
import Counter from '../../components/Counter/Counter';


export default function GameTracker() {
  return (
    <Container direction='column'>
      <Counter />
      <Counter />
    </Container>
  );
}
