import { Box, HoverCard, Portal, Text } from '@fidely-ui/react'

export const HoverCardPositioning = () => {
  return (
    <HoverCard.Root positioning={{ placement: 'right', gutter: 12 }}>
      <HoverCard.Trigger asChild>
        <a href="#">@fidely_ui</a>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content maxWidth="260px">
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <Box>
              <Text>
                <Text as="strong">Fidely UI</Text> is a modern, accessible
                design system built for scalable React applications, focused on
                clarity, consistency, and developer experience.
              </Text>
            </Box>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}
