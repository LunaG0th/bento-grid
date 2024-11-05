import Box1 from '../Box1/Box1';
import Box2 from '../Box2/Box2';
import Box3 from '../Box3/Box3';
import Box4 from '../Box4/Box4';
import Box5 from '../Box5/Box5';
import Box6 from '../Box6/Box6';
import Box7 from '../Box7/Box7';
import Box8 from '../Box8/Box8';
import styles from './Bento.module.css';

function Bento() {
  return (
    <section>
      <div className={styles.title}>
        <h1>Beto Grid</h1>
      </div>
      <div className={`${styles.bento} container`}>
        <div className={styles.bento__row}>
          <div className={styles.box1}>
            <Box1 />
          </div>
          <div className={styles.box2}>
            <Box2 />
          </div>
          <div className={styles.box3}>
            <Box3 />
          </div>
          <div className={styles.box4}>
            <Box4 />
          </div>
          <div className={styles.box5}>
            <Box5 />
          </div>
          <div className={styles.box6}>
            <Box6 />
          </div>
          <div className={styles.box7}>
            <Box7 />
          </div>
          <div className={styles.box8}>
            <Box8 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bento;
