import selector from '../selector'
import confetti from '../confetti'
import { makeAnimatedCheckbox } from '../../checkboxes'

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
  const originalElementTextContent = element.textContent
  const checked = selector.isChecked(originalElementTextContent)
  const checkboxElement = makeAnimatedCheckbox(checked)
  checkboxElement.style.marginRight = '0.5rem'

  element.insertBefore(checkboxElement, element.firstChild)

  if (checked) {
    element.style.textDecoration = 'line-through'
  }
  element.style.textDecorationColor = '#a3e583'

  checkboxElement.addEventListener('change', (event) => {
    const isChecked = event.target.checked
    if (isChecked) {
      confetti.trigger()
    }

    isChecked
      ? selector.check(originalElementTextContent)
      : selector.uncheck(originalElementTextContent)

    element.style.textDecoration = isChecked ? 'line-through' : ''
    element.style.textDecorationColor = '#a3e583'
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
