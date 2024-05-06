import { useState } from 'react';
import Button from '../Button/Button';

import styles from './Character.module.css';

type CharacterProps = {
  name: string;
  lives: number;
};

export default function Character({ name, lives }: CharacterProps) {
  const [livesCount, setLivesCount] = useState(lives);

  const incrementLives = () => {
    setLivesCount((prevLives) => prevLives + 1);
  };

  const decrementLives = () => {
    if (livesCount > 0) setLivesCount((prevLives) => prevLives - 1);
  };

  return (
    <div className={styles.characterContainer}>
      <div className={styles.characterInfo}>
        <p className={styles.characterName}>{name}</p>
      </div>
      <div className={styles.controls}>
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
    </div>
  );
}
