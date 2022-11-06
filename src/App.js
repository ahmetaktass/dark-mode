import { useEffect, useState } from 'react'
import './App.css'
import SunIcon from './assets/sun.svg'
import MoonIcon from './assets/moon.svg'

function App() {
  const [theme, setTheme] = useState('light')

  const handleClick = () => {
    console.log('theme')
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  useEffect(() => {
    console.log('theme', theme)
    document.body.className = theme
  })

  return (
    <div className={`app ${theme} `}>
      <span className="span" onClick={handleClick}>
        {theme === 'light' ? (
          <img className="icon" src={SunIcon} alt="" />
        ) : (
          <img className="icon" src={MoonIcon} alt="" />
        )}
      </span>
      <div>
        {' '}
        {theme === 'light' ? <h1>Light Mode </h1> : <h1>Dark Mode </h1>}
      </div>
    </div>
  )
}

export default App
