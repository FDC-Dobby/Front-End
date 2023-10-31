import styles from './profile.module.css'
import Default from '../../assets/default.png'

export default function Profile () {
  return (
    <div className={styles.main}>
      <img src={Default} alt="" className={styles.avatar} />
      <div>프로필</div>

      <div>
        <div>이름</div>
        <input type="text" />
      </div>
    </div>
  )
}