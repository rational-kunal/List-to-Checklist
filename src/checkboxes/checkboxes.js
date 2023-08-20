const makeUUID = () => 'id' + Math.random().toString(16).slice(2)

const makeAnimatedCheckboxString = (checked = false) => {
  const id = makeUUID()
  const checkedAttribute = checked ? 'checked' : ''
  return `<div style="display: inline-block"><style scoped> .check { cursor: pointer; position: relative; margin: auto; width: 18px; height: 18px; -webkit-tap-highlight-color: transparent; transform: translate3d(0, 0, 0); } .check:before { position: absolute; top: -15px; left: -15px; width: 48px; height: 48px; border-radius: 50%; background: rgba(34, 50, 84, 0.03); opacity: 0; transition: opacity 0.2s ease; } .check svg { position: relative; z-index: 1; fill: none; stroke-linecap: round; stroke-linejoin: round; stroke: #c8ccd4; transform: translate3d(0, 0, 0); transition: all 0.2s ease; } .check svg path { stroke-dasharray: 60; stroke-dashoffset: 0; } .check svg polyline { stroke-dasharray: 22; stroke-dashoffset: 66; } .check:hover:before { opacity: 1; } .check:hover svg { stroke: var(--accent-color, #a3e583); } #${id}:checked+.check svg { stroke: var(--accent-color, #a3e583); } #${id}:checked+.check svg path { stroke-dashoffset: 60; transition: all 0.3s linear; } #${id}:checked+.check svg polyline { stroke-dashoffset: 42; transition: all 0.2s linear; transition-delay: 0.15s; }</style><input type="checkbox" id="${id}" style="display: none;" ${checkedAttribute}><label for="${id}" class="check"> <svg width="18px" height="18px" viewBox="0 0 18 18"> <path stroke-width="2" d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"> </path> <polyline stroke-width="2" points="1 9 7 14 15 4"></polyline> </svg></label></div>`
}

function createHTMLElementFromString(htmlString) {
  const div = document.createElement('div')
  div.innerHTML = htmlString.trim()
  return div.firstChild
}

function makeAnimatedCheckbox(checked = false) {
  const htmlString = makeAnimatedCheckboxString(checked)
  return createHTMLElementFromString(htmlString)
}

export default makeAnimatedCheckbox
