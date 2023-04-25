import storage from '../storage'

/**
 * Returns whether extension is enabled.
 * @returns {Promise<Boolean>}
 */
async function isExtensionEnable() {
  return await storage.isExtensionEnable()
}

/**
 * Updates the extension enabled state.
 * @param {Boolean} enable
 */
async function setIsExtensionEnable(enable) {
  storage.setIsExtensionEnable(enable)

  // Refresh all pages
  // TODO: No low level login in high level class
  // TODO: Execute only for opted-in tabs/URL
  const allTabs = await chrome.tabs.query({})
  allTabs.forEach((tab) => {
    chrome.tabs.reload(tab.id)
  })
}

export default {
  isExtensionEnable,
  setIsExtensionEnable,
}
