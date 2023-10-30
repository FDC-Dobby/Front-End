import { Route, Routes } from 'react-router-dom'
import Loading from './pages/loading/page'
import Login from './pages/login/page'
import Signup from './pages/signup/page'
import MainPage from './pages/mainpage/page'
import Map from './pages/map/page'
import Lent from './pages/lent/page'
import Taxi from './pages/taxi/page'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Loading />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/map' element={<Map />} />
      <Route path='/lent' element={<Lent />} />
      <Route path='/taxi' element={<Taxi />} />
    </Routes>
  )
}