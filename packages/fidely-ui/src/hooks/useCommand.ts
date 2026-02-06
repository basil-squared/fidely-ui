'use client'

import * as React from 'react'

import { isMobileDevice } from '../utils/is-mobile-device'
import { parseShortcut } from '../utils/parseShortcut'

interface UseCommandProps {
  shortcut?: string
  onTrigger?: () => void
}

export const useCommand = ({ shortcut, onTrigger }: UseCommandProps) => {
  const [isMobile] = React.useState(() =>
    typeof window !== 'undefined' ? isMobileDevice() : false
  )

  const resolvedShortcut = React.useMemo(() => {
    if (isMobile) return null

    const isMac =
      typeof navigator !== 'undefined' &&
      /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)

    // If no shortcut is passed, provide a string default BEFORE parsing
    const shortcutToParse = shortcut || (isMac ? '⌘+K' : 'Ctrl+K')

    return parseShortcut(shortcutToParse)
  }, [shortcut, isMobile])

  const triggerRef = React.useRef(onTrigger)
  React.useEffect(() => {
    triggerRef.current = onTrigger
  }, [onTrigger])

  React.useEffect(() => {
    if (isMobile && !resolvedShortcut) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      )
        return

      const metaMatch =
        resolvedShortcut?.meta === undefined ||
        e.metaKey === resolvedShortcut?.meta

      const ctrlMatch =
        resolvedShortcut?.ctrl === undefined ||
        e.ctrlKey === resolvedShortcut?.ctrl

      const shiftMatch =
        resolvedShortcut?.shift === undefined ||
        e.shiftKey === resolvedShortcut?.shift

      const altMatch =
        resolvedShortcut?.alt === undefined ||
        e.altKey === resolvedShortcut?.alt

      const keyMatch = e.key.toLowerCase() === resolvedShortcut?.key

      if (metaMatch && ctrlMatch && shiftMatch && altMatch && keyMatch) {
        e.preventDefault()
        triggerRef.current?.()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [resolvedShortcut, isMobile])

  return {
    isMobile,
    shortcutLabel: resolvedShortcut?.label ?? '',
  }
}
