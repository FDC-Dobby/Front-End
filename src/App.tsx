import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/loading/page'
import Login from './pages/login/page'
import Signup from './pages/signup/Signup'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}