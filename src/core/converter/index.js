import selector from '../selector'

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

  if (selector.isChecked(element.textContent)) {
    element.style.textDecoration = 'line-through'
    checkboxElement.checked = selector.isChecked(element.textContent)
  }
  element.insertBefore(checkboxElement, element.firstChild)

  checkboxElement.addEventListener('change', (event) => {
    event.target.checked
      ? selector.check(element.textContent)
      : selector.uncheck(element.textContent)

    element.style.textDecoration = event.target.checked ? 'line-through' : ''
  })
}

/**
 * Converts List to Checklist.
 *
 * Adds a checkbox (`<input type="checkbox" />`) into list elements (`<li>...</li>`).
 */
function convert() {
  getAllUnorderedListElements().forEach((unorderedListElement) => {
    // Only convert the simple list tags.
    // TODO: Check out for more generic fix.
    // This works for my case (i.e. https://www.hackingwithswift.com/100) but there is no guarantee that this will work at other places as well.
    // We need to fine tune the code on per case basis.
    if (unorderedListElement.classList.length > 0) {
      return
    }

    // Set list type to none.
    // This will disable the bullet points.
    unorderedListElement.style.listStyle = 'none'

    getAllListItemElements(unorderedListElement).forEach((listItemElement) => {
      addCheckboxTo(listItemElement)
    })
  })
}

export { convert }
