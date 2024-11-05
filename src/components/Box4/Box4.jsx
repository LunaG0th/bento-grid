import styles from './Box4.module.css';

function Box4() {
  return (
    <div className={styles.app4}>
      <h2>Write content using AI.</h2>
      <div className={styles.chat_box}>
        <div>
          <p>Give me a 5 tips to growth my follower on instant</p>
          <img src='./chat.png' alt='/' />
        </div>
        <div>
          <img src='./chat star.png' alt='/' />
          <p>Certainly! Here are five tips to help you grow your Instgram...</p>
        </div>
        <div>
          <span class='material-symbols-outlined'>arrow_upward</span>
        </div>
      </div>
    </div>
  );
}

export default Box4;
