import styles from './Box8.module.css';

function Box8() {
  return (
    <div className={styles.app8}>
      <div className={styles.follower_growth}>
        <div>
          <p>Follower Growth</p>
          <h3>20,642</h3>
          <em>+490%</em>
        </div>
        <div>
          <ul>
            <li>bar</li>
            <li>bar</li>
            <li>bar</li>
            <li>bar</li>
            <li>bar</li>
          </ul>
        </div>
      </div>
      <button className={styles.app8__button}>
        <span class='material-symbols-outlined'>arrow_upward</span>
        <div>
          <p>Follower</p>
          <h3>89,532</h3>
        </div>
        <em>120%</em>
      </button>
      <div className={styles.app8__title}>
        <h2>Growing followers with non-stop content.</h2>
      </div>
    </div>
  );
}

export default Box8;
