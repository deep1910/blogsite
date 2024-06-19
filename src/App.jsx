import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import BlogHead from './BlogHead'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <BlogHead style={{margin: 60}}/>
       </div>
    </>
  )
}

export default App
