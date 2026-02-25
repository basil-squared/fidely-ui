'use client'

import { Switch } from '@fidely-ui/react/switch'

import { useToggleTheme } from '~/hooks/useToggleTheme'

export const HeroSwitch = () => {
  const { toggleTheme } = useToggleTheme()

  return (
    <Switch.Root
      colorPalette="orange"
      defaultChecked
      onCheckedChange={toggleTheme}
      size="lg"
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
    </Switch.Root>
  )
}
