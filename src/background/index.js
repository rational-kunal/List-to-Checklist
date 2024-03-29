import settings from '../core/settings'

// TODO: Low level call in high level function
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason == chrome.runtime.OnInstalledReason.INSTALL) {
    setUpFirstInstall()
  }
})

function setUpFirstInstall() {
  settings.setIsExtensionEnable(true)
}

// TODO: Low level call in high level function
// Debugging purpose
chrome.storage.local.onChanged.addListener((changes) => {
  console.debug('[list-to-checklist] storage changed:', changes)
})

// Open options page when clicked on the extension icon
// TODO: Low level call in high level function
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'options.html' })
})

export {}
