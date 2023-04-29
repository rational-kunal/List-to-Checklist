/**
 * Returns true if the two URL paths are similar, false otherwise.
 * Note that this function only compares the paths of the URLs, and does not take into account the protocol, hostname, or query string.
 * @param {String} aURLString
 * @param {String} bURLString
 * @returns
 */
function isURLPathSimilar(aURLString, bURLString) {
  let aURL = new URL(aURLString)
  let bURL = new URL(bURLString)

  return (
    aURL.hostname === bURL.hostname &&
    aURL.pathname.replace(/\/$/, '') === bURL.pathname.replace(/\/$/, '')
  )
}

export { isURLPathSimilar }
