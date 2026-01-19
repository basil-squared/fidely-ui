export function parseShortcut(shortcut: string) {
  const parts = shortcut
    .toLowerCase()
    .split('+')
    .map((p) => p.trim())

  const key = parts.find(
    (p) =>
      !['cmd', '⌘', 'ctrl', 'control', 'shift', 'alt', 'option'].includes(p)
  )

  if (!key) {
    throw new Error(`[CommandInput] Invalid shortcut: "${shortcut}"`)
  }

  return {
    meta: parts.includes('cmd') || parts.includes('⌘'),
    ctrl: parts.includes('ctrl') || parts.includes('control'),
    shift: parts.includes('shift'),
    alt: parts.includes('alt') || parts.includes('option'),
    key,
    label: shortcut,
  }
}
