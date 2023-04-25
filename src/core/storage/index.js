const EXTENSION_ENABLE_KEY = 'EXTENSION_ENABLE_KEY'

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

export default {
  isExtensionEnable,
  setIsExtensionEnable,
}
