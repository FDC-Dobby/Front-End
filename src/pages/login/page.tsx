import { Link } from 'react-router-dom'
import styles from './login.module.css'
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [user, setUser] = useState({
    id: '',
    password: ''
  })

  const submit = () => {
    if (user.id !== '' && user.password !== '') {
      axios.post('http://localhost:3000/api/auth/by-pass', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resp => {
        if (resp.data.success) window.location.href = '/main'
      })
    }
  }

  return (
    <div className={styles.main}>
      <img src={logo} alt="" className={styles.animation} />

      <div className={styles.form}>
        <img src={logo} alt="" className={styles.logo} />
        <input type='text' className={styles.input} placeholder={'아이디'} value={user.id} onChange={(e) => setUser({...user, id: e.target.value})} />
        <input type='password' className={styles.input} placeholder={'비밀번호'} value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
        <button className={styles.button} onClick={submit}>로그인</button>
        <Link to={'/signup'} className={styles.signup}>회원가입</Link>
      </div>
    </div>
  )
}