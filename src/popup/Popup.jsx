import { useState } from 'react'
import settings from '../core/settings'
import './Popup.css'

function App() {
  const [isExtensionEnable, setIsExtensionEnable] = useState(false)

  // TODO: Fire only when needed
  settings.isExtensionEnable().then((enable) => {
    setIsExtensionEnable(enable)
  })

  const enableTapHandler = () => {
    settings.setIsExtensionEnable(!isExtensionEnable)
    setIsExtensionEnable(!isExtensionEnable)
  }

  return (
    <main>
      <button onClick={enableTapHandler}> {isExtensionEnable ? 'Disable' : 'Enable'} </button>
      <sub>v 0.0.0</sub>
    </main>
  )
}

export default App
