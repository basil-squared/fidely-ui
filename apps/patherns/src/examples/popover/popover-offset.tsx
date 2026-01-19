import { Box, Button, Popover, Portal } from '@fidely-ui/react'

export const PopoverOffset = () => {
  return (
    <Popover.Root positioning={{ offset: { crossAxis: 0, mainAxis: 0 } }}>
      <Popover.Trigger asChild>
        <Button variant="outline">Click show offset</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content maxWidth="260px">
            <Box>Custom offset when open/or trigger</Box>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
