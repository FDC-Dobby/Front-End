import { useState } from 'react';
import styles from './signup.module.css';
import Button from '../../components/button/component';
import SInput from '../../components/sinput/component';
import classNames from 'classnames';


export default function Signup() {
  const [n, setN] = useState<number>(1);
  const [user, setUser] = useState({
    name: String,
    birth: String,
    gender: String,
    contact: String,
    email: String,
    userid: String,
    password: String
  })

  const nextLevel = () => {
    setN(n + 1)
    if (n + 1 > 4) window.location.href = '/'
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>회원가입</div>

      <div className={styles.progress}>
        <div className={styles.border}></div>
        <div className={n == 1 ? styles.now : styles.circle}>1</div>
        <div className={n == 2 ? styles.now : styles.circle}>2</div>
        <div className={n == 3 ? styles.now : styles.circle}>3</div>
        <div className={n == 4 ? styles.now : styles.circle}>4</div>
      </div>

      <div>
        {n == 1 ?
          <div className={styles.contain}>
            <div className={styles.el}>
              <div className={styles.tag}>이름</div>
              <SInput placeholder={''} type={'text'} />
            </div>
            <div className={styles.el}>
              <div className={styles.tag}>생년월일</div>
              <SInput placeholder={''} type={'text'} />
            </div>
            <div className={styles.el}>
              <div className={styles.tag}>성별</div>
              <SInput placeholder={''} type={'text'} />
            </div>
            <div className={styles.el}>
              <div className={styles.tag}>전화번호</div>
              <SInput placeholder={''} type={'text'} />
            </div>
          </div>
          : (n == 2 ?
            <div className={styles.contain}>
              <div className={styles.el}>
                <div className={styles.tag}>이메일</div>
                <SInput placeholder={''} type={'text'} />
              </div>
              <div className={styles.el}>
                <div className={styles.tag}>아이디</div>
                <SInput placeholder={''} type={'text'} />
              </div>
            </div>
            : (n == 3 ? <div className={styles.contain}>
              <div className={styles.el}>
                <div className={styles.tag}>비밀번호</div>
                <SInput placeholder={''} type={'password'} />
              </div>
              <div className={styles.el}>
                <div className={styles.tag}>비밀번호 확인</div>
                <SInput placeholder={''} type={'password'} />
              </div>

              <div className={classNames([styles.check, styles.empty])}>
                <label className={styles.checkbox}>
                  <input type="checkbox" />
                  <span className={styles.checkbox_icon}></span>
                  <span className={styles.checkbox_text}></span>
                </label>
                <div>이즈프리의 이용약관에 동의합니다. (필수)</div>
              </div>
              <div className={styles.check}>
                <label className={styles.checkbox}>
                  <input type="checkbox" />
                  <span className={styles.checkbox_icon}></span>
                  <span className={styles.checkbox_text}></span>
                </label>
                <div>이즈프리의 알람에 동의합니다. (선택)</div>
              </div>
            </div>
            : <div className={styles.contain}>회원가입이<br/>완료되었습니다.</div> )
          )}
      </div>

      <div className={styles.btn} onClick={nextLevel}><Button>{ n == 4 ? '완료' : '다음' }</Button></div>
    </div>
  )
}
