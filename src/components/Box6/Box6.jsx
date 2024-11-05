import styles from './Box6.module.css';

function Box6() {
  return (
    <div className={styles.app6}>
      <div>
        <h2>Maintain a consistent posting schedule.</h2>
      </div>
      <div className={styles.calendar}>
        <div>
          <p>August 2024</p>
          <em>Week 1</em>
        </div>
        <form>
          <div className={styles.circle}>
            <input type='checkbox' />
            <input type='checkbox' />
            <input type='checkbox' />
            <input type='checkbox' />
          </div>
          <div className={styles.box}>
            <input type='checkbox' />
            <input type='checkbox' />
            <input type='checkbox' />
            <input type='checkbox' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Box6;
