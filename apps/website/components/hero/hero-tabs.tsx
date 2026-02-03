import { Stack } from '@fidely-ui/react/stack'
import { Tabs } from '@fidely-ui/react/tabs'

export const HeroTabs = () => {
  return (
    <Stack animationStyle="float" animationDelay="2.4s">
      <Tabs.Root
        defaultValue="fidely-ui"
        variant="outline"
        colorPalette="orange"
      >
        <Tabs.List>
          <Tabs.Trigger value="fidely-ui">Fidely UI</Tabs.Trigger>
          <Tabs.Trigger value="panda-css">Panda CSS</Tabs.Trigger>
          <Tabs.Trigger value="ark-ui">Ark UI</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </Stack>
  )
}
