'use client'

import {
  Box,
  Button,
  Flex,
  HoverCard,
  Portal,
  Text,
  useHoverCard,
} from '@fidely-ui/react'

export const HoverCardWithRoot = () => {
  const hoverCard = useHoverCard()
  return (
    <Flex gap="2" align="center">
      <Button onClick={() => hoverCard.setOpen(true)}>Open</Button>

      <HoverCard.RootProvider value={hoverCard}>
        <HoverCard.Trigger>Hover me</HoverCard.Trigger>
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
      </HoverCard.RootProvider>
    </Flex>
  )
}
