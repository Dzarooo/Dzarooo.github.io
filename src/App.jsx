import { useState } from 'react'
import './App.css'

import { Header } from './components/Header'

import { Home } from './components/Home'
import { AboutUs } from './components/AboutUs'

function App() {

  const [activeSite, setActiveSite] = useState('home');

  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col">
      <Header setActiveSite={setActiveSite} />
      <div className="flex-1 mt-[30px]">
        {
          activeSite === 'home' ? <Home /> :
            activeSite === 'about' ? <AboutUs /> :
              <Home />
        }
      </div>
    </div>
  )
}

export default App
