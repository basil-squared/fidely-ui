import { Center, Menu, Portal } from '@fidely-ui/react'

export const MenuContext = () => {
  return (
    <Menu.Root>
      <Menu.ContextTrigger width="full">
        <Center
          height="40"
          userSelect="none"
          borderWidth="2px"
          borderStyle="dashed"
          rounded="lg"
          padding="4"
        >
          Right-click to open menu
        </Center>
      </Menu.ContextTrigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="refresh">Refresh</Menu.Item>
            <Menu.Item value="duplicate">Duplicate</Menu.Item>
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Separator />
            <Menu.Item value="share">Share</Menu.Item>
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
