'use client'

import { useState } from 'react'
import { Box, Button, HoverCard, Portal, Text, VStack } from '@fidely-ui/react'

export const HoverCardControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <VStack>
      <HoverCard.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <HoverCard.Trigger asChild>
          <Button colorPalette="orange">Hover to reveal the card</Button>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content>
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              <Box>
                <Text>
                  Hover card is revealed when user hovers over target element,
                  it will be hidden once mouse is not over both target and
                  dropdown elements
                </Text>
              </Box>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </VStack>
  )
}
