import { Fragment, useState } from "react";
import styles from './taxi.module.css'
import Calltaxi from '../../assets/calltaxi.png'

export default function Taxi() {
  const [step, setStep] = useState(0)

  return (
    <div className={styles.main}>
      {step === 0 ?
        <Fragment>
          <div className={styles.title}>콜택시 호출 및 예약</div>
          <img src={Calltaxi} alt="" className={styles.taxi} />
          <button className={styles.btn}>호출</button>
          <button className={styles.btn}>예약</button>
        </Fragment>
        : null}
    </div>
  )
}