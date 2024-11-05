import { useState } from 'react';
import styles from './Box2.module.css';

function Box2() {
  const [stars, setStars] = useState(0);

  const handleClick = (index) => {
    setStars(index + 1);
  };

  return (
    <div className={styles.app2}>
      <h2>
        Social Media <span>10x</span> Faster with AI
      </h2>
      <ul>
        {/* increase stats on evry click  */}
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            {index < stars ? '★' : '☆'}
          </li>
        ))}
      </ul>
      <p>
        Over 4,000 {stars}-star{stars >= 2 ? 's' : ''} reviews
      </p>
    </div>
  );
}

export default Box2;
