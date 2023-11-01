import { Fragment, useState } from "react"
import styles from './taxi.module.css'
import Calltaxi from '../../assets/calltaxi.png'
import Marker from '../../assets/Marker.png'
import Logo from '../../assets/logo.svg'
import axios from "axios"

export default function Taxi() {
  const [step, setStep] = useState(0)
  const [isCalled, setIsCalled] = useState(false)
  const [arriveTimes, setArriveTimes] = useState({
    one: 0,
    two: 0
  })

  const getCall = async () => {
    axios.get('http://localhost:3000/api/taxi/call', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${sessionStorage.getItem('TOKEN')}` 
      }
    }).then(resp => {
      setArriveTimes({ 
        one: resp.data.one,
        two: resp.data.two
      })
    })
    setIsCalled(true)
  }

  return (
    <Fragment>
      <div className={isCalled ? styles.container : styles.none}>
        <div className={isCalled ? styles.backdrop : ''} onClick={() => setIsCalled(false)}></div>
        <div className={isCalled ? styles.window : ''}>
          <img src={Logo} alt="" className={styles.logo} />
          <div className={styles.menu}>
            <div className={styles.m2}></div>
            {step == 2 ?
              <Fragment>
                <div className={styles.contain}>
                  <div className={styles.text}>택시  예약 시간</div>
                  <div className={styles.colored}>5시 30분</div>
                </div>
                <div className={styles.m2}></div>
              </Fragment>
              :
              <Fragment>
                <div className={styles.contain}>
                  <div className={styles.text}>택시 도착 예상 시간</div>
                  <div className={styles.colored}>23분</div>
                </div>
                <div className={styles.contain}>
                  <div className={styles.text}>도착지 도착 예상 시간</div>
                  <div className={styles.colored}>45분</div>
                </div>
              </Fragment>}
            <button className={styles.btn} onClick={() => window.location.href = '/'}>확인</button>
            <button className={styles.btn} onClick={() => window.location.href = '/'}>취소</button>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.m}></div>
        {step === 0 ?
          <Fragment>
            <div className={styles.title}>콜택시 호출 및 예약</div>
            <img src={Calltaxi} alt="" className={styles.taxi} />
            <button className={styles.btn} onClick={() => setStep(1)}>호출</button>
            <button className={styles.btn} onClick={() => setStep(2)}>예약</button>
          </Fragment>
          : (step === 1 ?
            <Fragment>
              <div className={styles.title2}>
                <img src={Marker} alt="" className={styles.marker} />
                출발지
              </div>
              <input type="text" className={styles.start} />
              <div className={styles.title2}>
                <img src={Marker} alt="" className={styles.marker} />
                도착지
              </div>
              <input type="text" className={styles.start} />

              <div className={styles.m}></div>
              <button className={styles.btn} onClick={getCall}>호출</button>
            </Fragment>
            : (step === 2 ?
              <Fragment>
                <div className={styles.title2}>
                  <img src={Marker} alt="" className={styles.marker} />
                  출발지
                </div>
                <input type="text" className={styles.start} />

                <div className={styles.title2}>
                  <img src={Marker} alt="" className={styles.marker} />
                  도착지
                </div>
                <input type="text" className={styles.start} />

                <div className={styles.title2}>
                  <img src={Marker} alt="" className={styles.marker} />
                  예약시간
                </div>
                <input type="text" className={styles.start} />
                <div className={styles.red}>* 콜택시 예약은 당일 예약만 가능합니다.</div>

                <div className={styles.m}></div>
                <button className={styles.btn} onClick={getCall}>예약</button>
              </Fragment>
              : null))}
      </div>
    </Fragment>
  )
}