import { Box, Button, Popover, Portal, Text } from '@fidely-ui/react'

export const PopoverPositioning = () => {
  return (
    <Popover.Root positioning={{ placement: 'right', gutter: 12 }}>
      <Popover.Trigger asChild>
        <Button variant="outline">Click me</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content maxWidth="260px">
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Box>
              <Text>
                <Text as="strong">Fidely UI</Text> is a modern, accessible
                design system built for scalable React applications, focused on
                clarity, consistency, and developer experience.
              </Text>
            </Box>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
