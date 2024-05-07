import { useState } from 'react';

import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

import generateBackground from '../../utils/colorTransform';

import styles from './Character.module.css';

type CharacterProps = {
  name: string;
  lives: number;
  colors: string[];
};

export default function Character({ name, lives, colors }: CharacterProps) {
  const [livesCount, setLivesCount] = useState(lives);

  const incrementLives = () => {
    setLivesCount((prevLives) => prevLives + 1);
  };

  const decrementLives = () => {
    if (livesCount > 0) setLivesCount((prevLives) => prevLives - 1);
  };

  const backgroundColor = generateBackground(colors, 1);

  return (
    <section
      className={styles.characterContainer}
      style={{ background: backgroundColor }}
    >
      <div className={styles.characterInfo}>
        <p>{name}</p>
      </div>
      <div className={styles.controls}>
        <div className={styles.buttonIcon} onClick={decrementLives}>
          <FaMinusSquare />
        </div>
        <input
          className={styles.livesInput}
          value={livesCount}
          onChange={(e) => setLivesCount(Number(e.target.value))}
        />
        <div className={styles.buttonIcon} onClick={incrementLives}>
          <FaPlusSquare />
        </div>
      </div>
    </section>
  );
}
