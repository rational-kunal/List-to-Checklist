import storage from '../storage'
import { isURLPathSimilar } from '../utils/URLUtils'

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
  await reloadTabs()
}

/**
 * Returns whether current tab is opted-in.
 * @returns {Promise<Boolean>}
 */
async function isCurrentTabOptedIn() {
  const currentURL = location.href
  const optedInURLs = await storage.getOptedInURLs()
  return optedInURLs.find((inURL) => isURLPathSimilar(currentURL, inURL)) !== undefined
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
  const oldOptedInURLs = await storage.getOptedInURLs()

  await storage.updateOptedInURL(URLs)

  const URLsToReload = URLs.concat(oldOptedInURLs)
  reloadTabs(URLsToReload)
}

/**
 * Reload all tabs with passed URLS OR opted in URL.
 * @param {Array<String>} withURLs
 */
async function reloadTabs(withURLs = null) {
  // TODO: No low level login in high level class
  const URLsToReload = withURLs || (await storage.getOptedInURLs())
  const allTabs = await chrome.tabs.query({ url: URLsToReload })
  allTabs.forEach((tab) => {
    chrome.tabs.reload(tab.id)
  })
}

export default {
  isExtensionEnable,
  setIsExtensionEnable,
  isCurrentTabOptedIn,
  optedInURLs,
  updateOptedInURL,
}
