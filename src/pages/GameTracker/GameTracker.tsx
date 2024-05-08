import Container from '../../components/Container/Container';
import Character from '../../components/Character/Character';

import styles from './GameTracker.module.css';

export default function GameTracker() {
  return (
    <Container direction='column'>
      <div className={styles.villains}>
        <Character name='Rino' lives={14} colors={['#727070']} />
      </div>
      <div className={styles.heroes}>
        <Character
          name='Spiderman'
          lives={10}
          colors={['#982828', '#2b3681']}
        />
      </div>
    </Container>
  );
}
