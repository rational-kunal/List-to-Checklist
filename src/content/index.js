import { convert } from '../core/converter'
import settings from '../core/settings'

// Convert List to Checklist
// TODO: Execute this once per refresh
const isExtensionEnable = await settings.isExtensionEnable()

if (isExtensionEnable) {
  convert()
}

export {}
