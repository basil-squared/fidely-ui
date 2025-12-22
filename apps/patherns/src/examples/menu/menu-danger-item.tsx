import { Button, Menu, Portal } from '@fidely-ui/react'

export const MenuDangerItem = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Menu
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
            <Menu.Item
              value="delete"
              color="fg.error"
              _hover={{ bg: 'red.2', color: 'fg.error' }}
            >
              Delete...
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
