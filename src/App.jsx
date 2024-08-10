import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Headre } from './componetns/Headre'
import Appsecond from './redux/Appsecond'
import { Cart } from './componetns/Cart'

function App() {
  return (
    <>
      <Headre />
      <Routes>
        <Route path="/" element={<Appsecond />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </>
  )
}

export default App
