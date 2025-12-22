import { Button, Menu, Portal } from '@fidely-ui/react'

export const MenuGroup = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">Options</Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Appearance</Menu.ItemGroupLabel>
              <Menu.Item value="light">Light mode</Menu.Item>
              <Menu.Item value="dark">Dark mode</Menu.Item>
            </Menu.ItemGroup>

            <Menu.Separator />

            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Layout</Menu.ItemGroupLabel>
              <Menu.Item value="compact">Compact</Menu.Item>
              <Menu.Item value="comfortable">Comfortable</Menu.Item>
              <Menu.Item value="spacious">Spacious</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
