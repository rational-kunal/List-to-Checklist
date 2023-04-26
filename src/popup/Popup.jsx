import './Popup.css'

function App() {
  const goToOptions = () => {
    chrome.runtime.openOptionsPage()
  }
  return (
    <main>
      <button onClick={goToOptions}>options</button>
      <sub>v 0.0.0</sub>
    </main>
  )
}

export default App
