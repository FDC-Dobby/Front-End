import { Link } from 'react-router-dom'
import styles from './login.module.css'
import logo from '../../assets/logo.svg'
import Input from '../../components/input/component'

export default function Login() {
  return (
    <div className={styles.main}>
      <img src={logo} alt="" className={styles.animation} />

      <div className={styles.form}>
        <img src={logo} alt="" className={styles.logo} />
        <Input placeholder={'아이디'} type={'text'} />
        <Input placeholder={'비밀번호'} type={'text'} />
        <Link className={styles.button} to={'/main'}>로그인</Link>
        <Link to={'/signup'} className={styles.signup}>회원가입</Link>
      </div>
    </div>
  )
}