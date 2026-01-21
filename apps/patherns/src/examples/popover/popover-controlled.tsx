'use client'

import { useState } from 'react'
import { Box, Button, Popover, Portal, Text } from '@fidely-ui/react'

export const PopoverControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Popover.Trigger asChild>
        <Button variant="outline">Click me</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Box>
              <Text>This is a Popover with Controlled state</Text>
            </Box>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
