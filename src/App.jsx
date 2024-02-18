import { useState } from 'react'
import './App.css'
import { StickyNavbar } from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <StickyNavbar />
    </div>
  )
}

export default App
