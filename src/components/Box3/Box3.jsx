import { useState } from 'react';
import styles from './Box3.module.css';

function Box3() {
  const [barMon, setBarMon] = useState('');
  const [barTue, setBarTue] = useState('');
  const [barWed, setBarWed] = useState('');
  const [barThu, setBarThu] = useState('');
  const [barFri, setBarFri] = useState('');
  const [barSat, setBarSat] = useState('');
  const [barSun, setBarSun] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.app3}>
      <h2>Schedule to social media.</h2>
      <div className={styles.post_time}>
        <h3>Best Time to Post</h3>
        <hr align='center' />
        <div className={styles.days}>
          <div>
            <h5>Mon</h5>
            <h5>Tue</h5>
            <h5>Wed</h5>
            <h5>Thu</h5>
            <h5>Fri</h5>
            <h5>Sat</h5>
            <h5>Sun</h5>
          </div>
          <div>
            <span style={{ height: barMon ? `${ barMon }px` : '40px'}} >bar</span>
            <span style={{ height: barTue ? `${ barTue }px` : '60px'}} >bar</span>
            <span style={{ height: barWed ? `${ barWed }px` : '90px'}} >bar</span>
            <span style={{ height: barThu ? `${ barThu }px` : '80px'}} >bar</span>
            <span style={{ height: barFri ? `${ barFri }px` : '60px'}} >bar</span>
            <span style={{ height: barSat ? `${ barSat }px` : '80px'}} >bar</span>
            <span style={{ height: barSun ? `${ barSun }px` : '50px'}} >bar</span>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type='text'
                  placeholder='40'
                  value={barMon}
                  onChange={(e) => {
                    setBarMon(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='60'
                  value={barTue}
                  onChange={(e) => {
                    setBarTue(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='90'
                  value={barWed}
                  onChange={(e) => {
                    setBarWed(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='80'
                  value={barThu}
                  onChange={(e) => {
                    setBarThu(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='60'
                  value={barFri}
                  onChange={(e) => {
                    setBarFri(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='80'
                  value={barSat}
                  onChange={(e) => {
                    setBarSat(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='50'
                  value={barSun}
                  onChange={(e) => {
                    setBarSun(e.target.value);
                  }}
                />
              </div>
            </form>
          </div>

          {/* <div>
            <h4>Mon</h4>
            <span>bar</span>
            <input type="text" />
            <p>12a</p>
          </div>
          <div>
            <h4>Tue</h4>
            <span>bar</span>
            <p>3a</p>
          </div>
          <div>
            <h4>Wed</h4>
            <span>bar</span>
            <p>6a</p>
          </div>
          <div>
            <h4>Thu</h4>
            <span>bar</span>
            <p>12p</p>
          </div> */}
        </div>
      </div>
      <p>
        Optimize post timings to publish content at perfect time for your
        audience
      </p>
    </div>

    //   <div className={styles.app3}>
    //   <h2>Schedule to social media.</h2>
    //   <div className={styles.post_time}>
    //     <h3>Best Time to Post</h3>
    //     <hr align='center' />
    //     <div className={styles.days}>
    //       <div>
    //         <h4>Mon</h4>
    //         <span>bar</span>
    //         <p>12a</p>
    //       </div>
    //       <div>
    //         <h4>Tue</h4>
    //         <span>bar</span>
    //         <p>3a</p>
    //       </div>
    //       <div>
    //         <h4>Wed</h4>
    //         <span>bar</span>
    //         <p>6a</p>
    //       </div>
    //       <div>
    //         <h4>Thu</h4>
    //         <span>bar</span>
    //         <p>12p</p>
    //       </div>
    //     </div>
    //   </div>
    //   <p>
    //     Optimize post timings to publish content at perfect time for your
    //     audience
    //   </p>
    // </div>
  );
}

export default Box3;
