import { useState } from 'react';
import Button from '../Button/Button';

import styles from './CharacterCounter.module.css';

type CharacterProps = {
  characterName?: string;
  lives: number;
};

export default function Counter({ characterName, lives }: CharacterProps) {
  const [livesCount, setLivesCount] = useState(lives);

  const incrementLives = () => {
    setLivesCount((prevLives) => prevLives + 1);
  };

  const decrementLives = () => {
    if (livesCount > 0) setLivesCount((prevLives) => prevLives - 1);
  };

  return (
    <div className={styles.counterContainer}>
      <Button className='action' onClick={decrementLives}>
        -
      </Button>
      <input
        className={styles.input}
        value={livesCount}
        onChange={(e) => setLivesCount(Number(e.target.value))}
      />
      <Button className='action' onClick={incrementLives}>
        +
      </Button>
    </div>
  );
}
