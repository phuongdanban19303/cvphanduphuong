import { useState } from 'react'
import './App.css'
import ProfilePage from './components/ProfilePage'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<ProfilePage/>} />
    </Routes>

  )
}

export default App
