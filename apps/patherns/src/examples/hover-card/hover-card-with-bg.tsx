import {
  Avatar,
  HoverCard,
  HStack,
  Portal,
  Stack,
  Text,
} from '@fidely-ui/react'
import { LuChartLine } from 'react-icons/lu'

export const HoverCardWithBg = () => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a href="#">@fidely_ui</a>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content
            css={{
              '--hovercard-bg': 'green',
            }}
          >
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <Stack gap="4" direction="row">
              <Avatar.Root>
                <Avatar.Image alt="fidely ui logo" />
                <Avatar.Fallback name="Fidely UI" />
              </Avatar.Root>
              <Stack gap="3">
                <Stack gap="1">
                  <Text textStyle="sm" fontWeight="semibold">
                    Fidely UI
                  </Text>
                  <Text textStyle="sm">
                    Build modern apps with speed and flexibility
                  </Text>
                </Stack>
                <HStack>
                  <LuChartLine />
                  <Text textStyle="xs">1.2k Downloads</Text>
                </HStack>
              </Stack>
            </Stack>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}
