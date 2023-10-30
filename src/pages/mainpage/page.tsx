import styles from './mainpage.module.css'
import Logo from '../../assets/logo.svg'
import Location from '../../assets/location.svg'
import Chair from '../../assets/chair.svg'
import Pie from '../../assets/pie.svg'
import Taxi from '../../assets/taxi.svg'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div className={styles.main}>
      <img src={Logo} alt="" className={styles.logo} />
      <div className={styles.contain}>
        <Link className={styles.btn1} to={'/map'}>
          <img src={Location} alt="" className={styles.icon} />
          <div className={styles.text}>편의시설 지도</div>
        </Link>
        <Link className={styles.btn2} to={'/lent'}>
          <img src={Chair} alt="" className={styles.icon} />
          <div className={styles.text}>의료기기 대여</div>
        </Link>
      </div>
      <div className={styles.contain}>
        <Link className={styles.btn2} to={'/taxi'}>
          <img src={Taxi} alt="" className={styles.icon} />
          <div className={styles.text}>콜택시 호출 및 예약</div>
        </Link>
        <div className={styles.btn1}>
          <img src={Pie} alt="" className={styles.icon} />
          <div className={styles.text}>내 설정</div>
        </div>
      </div>
    </div>
  )
}