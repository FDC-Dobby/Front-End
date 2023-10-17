import { useState } from 'react'
import styles from './signup.module.css'
import Button from '../../components/button/component'
import SInput from '../../components/sinput/component'

export default function Signup() {
  const [n, setN] = useState<number>(1)

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

      <div className={n > 1 ? styles.act : ''}>
        {n == 1 ?
          <div className={styles.contain}>
            <div className={styles.el}>
              <div className={styles.tag}>이름</div>
              <SInput placeholder='' />
            </div>
            <div className={styles.el}>
              <div className={styles.tag}>생년월일</div>
              <SInput placeholder='' />
            </div>
            <div className={styles.el}>
              <div className={styles.tag}>성별</div>
              <SInput placeholder='' />
            </div>
            <div className={styles.el}>
              <div className={styles.tag}>전화번호</div>
              <SInput placeholder='' />
            </div>
          </div>
          : (
            <div className={styles.contain}>
              <div className={styles.el}>
                <div className={styles.tag}>이메일</div>
                <SInput placeholder='' />
              </div>
              <div className={styles.el}>
                <div className={styles.tag}>아이디</div>
                <SInput placeholder='' />
              </div>
            </div>
          )}
      </div>

      <div className={styles.btn} onClick={() => setN(n + 1)}><Button>다음</Button></div>
    </div>
  )
}