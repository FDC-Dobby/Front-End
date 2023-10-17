import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './loading.module.css'
import logo from '../../assets/logo.svg'

export default function MainPage() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => navigate('/login'), 2000)
  }, [])

  return (
    <div className={styles.main}>
      <img src={logo} alt="" />
      <div className={styles.flex}>
        <div className={styles.titlel}>이즈</div>
        <div className={styles.titler}>프리</div>
      </div>
    </div>
  )
}