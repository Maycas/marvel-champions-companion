import Container from '../../components/Container/Container';
import Character from '../../components/Character/Character';


export default function GameTracker() {
  return (
    <Container direction='column'>
      <Character name='Rino' lives={14} />
      <Character name='Spiderman' lives={10}/>
    </Container>
  );
}
