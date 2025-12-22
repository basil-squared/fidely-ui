import { Button, Menu, Portal } from '@fidely-ui/react'
import { LuChevronRight } from 'react-icons/lu'

export const MenuSubmenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">Open menu</Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="edit">Edit</Menu.Item>

            {/* First Submenu */}
            <Menu.Root positioning={{ placement: 'right-start' }}>
              <Menu.TriggerItem>
                View <LuChevronRight />
              </Menu.TriggerItem>

              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="revenue">Revenue</Menu.Item>
                    <Menu.Item value="transactions">Transactions</Menu.Item>
                    <Menu.Item value="sales">Sales</Menu.Item>

                    {/* Second Submenu */}
                    <Menu.Root
                      positioning={{ placement: 'right-start', gutter: 9 }}
                    >
                      <Menu.TriggerItem>
                        Analytics <LuChevronRight />
                      </Menu.TriggerItem>

                      <Portal>
                        <Menu.Positioner>
                          <Menu.Content>
                            <Menu.Item value="daily">Daily</Menu.Item>
                            <Menu.Item value="weekly">Weekly</Menu.Item>
                            <Menu.Item value="monthly">Monthly</Menu.Item>
                          </Menu.Content>
                        </Menu.Positioner>
                      </Portal>
                    </Menu.Root>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            <Menu.Separator />

            <Menu.Item
              value="delete"
              color="fg.error"
              _hover={{ bg: 'red.2', color: 'fg.error' }}
            >
              Delete…
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
