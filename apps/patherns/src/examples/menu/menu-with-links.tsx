import { Button, Flex, Menu, Portal } from '@fidely-ui/react'
import { GoLinkExternal } from 'react-icons/go'

export const MenuWithLinks = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">Select UI libraries</Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="fidely-ui" asChild>
              <a href="https://fidely-ui.vercel.app/" target="_blank">
                <Flex justify="space-between" align="center" width="full">
                  Fidely UI
                  <GoLinkExternal />
                </Flex>
              </a>
            </Menu.Item>
            <Menu.Item value="chakra-ui" asChild>
              <a href="https://chakra-ui.com/" target="_blank">
                <Flex justify="space-between" align="center" width="full">
                  Chakra UI
                  <GoLinkExternal />
                </Flex>
              </a>
            </Menu.Item>
            <Menu.Item value="mui" asChild>
              <a href="https://mui.com/material-ui/" target="_blank">
                <Flex justify="space-between" align="center" width="full">
                  MUI
                  <GoLinkExternal />
                </Flex>
              </a>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
