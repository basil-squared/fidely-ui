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
      animationStyle="float"
      animationDelay="0.6s"
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
    </Switch.Root>
  )
}
