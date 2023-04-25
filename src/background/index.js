import settings from '../core/settings'

console.info('chrome-ext template-react-js background script')

// TODO: Low level call in high level function
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason == chrome.runtime.OnInstalledReason.INSTALL) {
    console.info('[list-to-checklist] Extension installed first time')
    setUpFirstInstall()
  }
})

function setUpFirstInstall() {
  settings.setIsExtensionEnable(true)
}

export {}
