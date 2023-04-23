/**
 * Returns list of all undered list elements.
 * @returns {HTMLUListElement[]}
 */
function getAllUnorderedListElements() {
  return Array.from(document.getElementsByTagName('ul'))
}

/**
 * Returns list of all list item elements in the passed node.
 * @param {HTMLElement} node
 * @returns {HTMLLIElement[]}
 */
function getAllListItemElements(node) {
  return Array.from(node.getElementsByTagName('li'))
}

/**
 * Converts the passed element to the checkbox.
 * @param {HTMLElement} element
 */
function addCheckboxTo(element) {
  const checkboxElement = document.createElement('input')
  checkboxElement.style.marginRight = '8px'
  checkboxElement.type = 'checkbox'

  element.insertBefore(checkboxElement, element.firstChild)
}

/**
 * Converts List to Checklist.
 *
 * Adds a checkbox (`<input type="checkbox" />`) into list elements (`<li>...</li>`).
 */
function convert() {
  getAllUnorderedListElements().forEach((unorderedListElement) => {
    // Set list type to none.
    // This will disable the bullet points.
    unorderedListElement.style.listStyle = 'none'

    getAllListItemElements(unorderedListElement).forEach((listItemElement) => {
      addCheckboxTo(listItemElement)
    })
  })
}

export { convert }
