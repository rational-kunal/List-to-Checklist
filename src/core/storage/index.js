const EXTENSION_ENABLE_KEY = 'EXTENSION_ENABLE_KEY'
const OPTED_IN_URL_LIST_KEY = 'OPTED_IN_URL_LIST_KEY'
const CHECKED_LIST_KEY = 'CHECKED_LIST_KEY'

/**
 * Returns whether extension is enabled.
 * @returns {Promise<Boolean>}
 */
async function isExtensionEnable() {
  const result = await chrome.storage.local.get([EXTENSION_ENABLE_KEY])
  return result[EXTENSION_ENABLE_KEY]
}

/**
 * Updates the extension enabled state.
 * @param {Boolean} enable
 */
function setIsExtensionEnable(enable) {
  chrome.storage.local.set({ EXTENSION_ENABLE_KEY: enable })
}

/**
 * Returns all opted-in URLs.
 * @returns {Promise<Array<String>>}
 */
async function getOptedInURLs() {
  const optedInURLsResult = await chrome.storage.local.get([OPTED_IN_URL_LIST_KEY])
  return optedInURLsResult[OPTED_IN_URL_LIST_KEY] || []
}

/**
 * Updates the opted-in URLs.
 * @param {Array<String>} URLs
 */
async function updateOptedInURL(URLs) {
  await chrome.storage.local.set({ OPTED_IN_URL_LIST_KEY: URLs })
}

/**
 * Returns the content of the checked list.
 * @returns {Promise<Set<String>>}
 */
async function getCheckedList() {
  const checkedList = await chrome.storage.local.get([CHECKED_LIST_KEY])
  return new Set(checkedList[CHECKED_LIST_KEY] || [])
}

/**
 * Updates hhe checked list contents.
 * @param {Set<String>} list
 */
async function updateCheckedList(list) {
  const arrayList = Array.from(list)
  await chrome.storage.local.set({ CHECKED_LIST_KEY: arrayList })
}

export default {
  isExtensionEnable,
  setIsExtensionEnable,
  getOptedInURLs,
  updateOptedInURL,
  getCheckedList,
  updateCheckedList,
}
