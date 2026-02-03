import { Button, Popover, Portal, Text } from '@fidely-ui/react'

export const PopoverModal = () => {
  return (
    <Popover.Root modal>
      <Popover.Trigger asChild>
        <Button variant="outline">Click me</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              repellat ipsam totam iste, quaerat sapiente.
            </Text>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
