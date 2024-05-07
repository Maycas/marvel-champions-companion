import Container from '../../components/Container/Container';
import Character from '../../components/Character/Character';


export default function GameTracker() {
  return (
    <Container direction='column'>
      <Character name='Rino' lives={14} colors={[
        '#727070'
      ]}/>
      <Character name='Spiderman' lives={10} colors={[
        "#982828",
        "#2b3681",
      ]}/>
    </Container>
  );
}
