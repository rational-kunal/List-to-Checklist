import { convert } from '../core/converter'
import settings from '../core/settings'

// Convert List to Checklist
// TODO: Execute this once per refresh
const isExtensionEnable = await settings.isExtensionEnable()
const isCurrentTabOptedIn = await settings.isCurrentTabOptedIn()

if (isExtensionEnable && isCurrentTabOptedIn) {
  convert()
}

export {}
