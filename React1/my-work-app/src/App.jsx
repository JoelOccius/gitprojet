import { useState } from 'react'
import reactLogo from './assets/joel 01.jpg'
import viteLogo from '/joel0.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState('🧑‍🎓')

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>JOEL 🧑‍🎓 OCCIUS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + '')}>
          JOEL OCCIUS is a technology Ingineer {count}
        </button>
        <p>
          GOD can help us succed in life. <code>Without him we can't do anything</code>
        </p>
      </div>
      <p className="read-the-docs">
        With GOD all things are possible.
      </p>
    </>
  )
}

export default App
