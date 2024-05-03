import { useState } from 'react';
import Button from '../Button/Button';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <Button>+</Button>
      <p>{count}</p>
      <Button>-</Button>
    </div>
  );
}
