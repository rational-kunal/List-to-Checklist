import { useEffect, useState } from 'react'
import settings from '../core/settings'
import './Options.css'

function App() {
  const [isExtensionEnable, setIsExtensionEnable] = useState(false)
  const [inputURLs, setInputURLs] = useState([])

  useEffect(() => {
    settings.optedInURLs().then((URLs) => {
      setInputURLs(URLs.join(','))
    })

    settings.isExtensionEnable().then((enable) => {
      setIsExtensionEnable(enable)
    })
  }, [])

  const enableTapHandler = () => {
    settings.setIsExtensionEnable(!isExtensionEnable)
    setIsExtensionEnable(!isExtensionEnable)
  }

  const updateTapHandler = () => {
    settings.updateOptedInURL(inputURLs.split(','))
  }

  return (
    <main>
      <button onClick={enableTapHandler}> {isExtensionEnable ? 'Disable' : 'Enable'} </button>

      <div>
        <textarea value={inputURLs} onChange={(e) => setInputURLs(e.target.value)}></textarea>
        <button onClick={updateTapHandler}> Update </button>
      </div>

      <sub>v 0.0.0</sub>
    </main>
  )
}

export default App
