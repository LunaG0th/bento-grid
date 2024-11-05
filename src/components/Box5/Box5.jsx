import styles from './Box5.module.css';
import instagramLogo from '../../../public/instagram.svg'

function Box5() {
  return (
    <div className={styles.app5}>
      <div className={styles.app5__buttons}>
        <button className={styles.app5__button}>
          <div className={styles.app5__btn_icon}>
            <img src={instagramLogo} alt="" width={'32px'}/>
          </div>
          <div className={styles.app5__btn_text}>
            <p>@YourCo</p>
            <em>12k Followers</em>
          </div>
        </button>
        <button className={styles.app5__button}>
          <div className={styles.app5__btn_icon}>
            <img src={instagramLogo} alt="" width={'32px'}/>
          </div>
          <div className={styles.app5__btn_text}>
            <p>@YourCo</p>
            <em>12k Followers</em>
          </div>
        </button>
      </div>
      <h2>Manage multiple accounts and platforms.</h2>
    </div>
  );
}

export default Box5;
