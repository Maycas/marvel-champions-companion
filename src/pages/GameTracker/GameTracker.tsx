import Container from '../../components/Container/Container';
import CharacterCounter from '../../components/Counter/CharacterCounter';


export default function GameTracker() {
  return (
    <Container direction='column'>
      <CharacterCounter lives={20} />
      <CharacterCounter lives={25}/>
    </Container>
  );
}
