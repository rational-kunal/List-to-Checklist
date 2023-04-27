import storage from '../storage'

/** @type {Set<String>} */
let checkedLists = new Set()

/** Populates the checked list. */
async function populateCheckedList() {
  checkedLists = await storage.getCheckedList()
  console.debug('[list-to-checklist] Checked list has been populated:', checkedLists)
}

/**
 * Returns whether the list item with given content is checked.
 * @param {String} content
 * @returns {Boolean}
 */
function isChecked(content) {
  console.log(checkedLists, content)
  return checkedLists.has(content)
}

/**
 * Checks the list item with given content.
 * @param {String} content
 */
function check(content) {
  checkedLists.add(content)
  storage.updateCheckedList(checkedLists)
}

/**
 * Unchecks the list item with given content.
 * @param {String} content
 */
function uncheck(content) {
  checkedLists.delete(content)
  storage.updateCheckedList(checkedLists)
}

export default {
  populateCheckedList,
  isChecked,
  check,
  uncheck,
}
