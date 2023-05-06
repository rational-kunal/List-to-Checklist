import { convert } from '../core/converter'
import selector from '../core/selector'
import settings from '../core/settings'
import confetti from '../core/confetti'

// Convert List to Checklist
// TODO: Execute this once per refresh
const isExtensionEnable = await settings.isExtensionEnable()
const isCurrentTabOptedIn = await settings.isCurrentTabOptedIn()

if (isExtensionEnable && isCurrentTabOptedIn) {
  confetti.initialize()

  // Populate the checked list
  await selector.populateCheckedList()

  convert()
}

export {}
