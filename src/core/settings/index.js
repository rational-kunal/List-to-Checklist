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

/**
 * Returns whether current tab is opted-in.
 * @returns {Promise<Boolean>}
 */
async function isCurrentTabOptedIn() {
  const currentURL = location.href
  const optedInURLs = await storage.getOptedInURLs()
  return optedInURLs.find((inURL) => currentURL.startsWith(inURL)) !== undefined
}

/**
 * Returns all opted-in URLs.
 * @returns {Promise<Array<String>>}
 */
async function optedInURLs() {
  const optedInURLs = await storage.getOptedInURLs()
  return optedInURLs
}

/**
 * Updates the opted-in URLs.
 * @param {Array<String>} URLs
 */
async function updateOptedInURL(URLs) {
  await storage.updateOptedInURL(URLs)
}

export default {
  isExtensionEnable,
  setIsExtensionEnable,
  isCurrentTabOptedIn,
  optedInURLs,
  updateOptedInURL,
}
