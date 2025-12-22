import {
  Avatar,
  HoverCard,
  HStack,
  Portal,
  Stack,
  Text,
} from '@fidely-ui/react'
import { LuChartLine } from 'react-icons/lu'

export const HoverCardBasics = () => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a href="#">@fidely_ui</a>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
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
                  <Text textStyle="sm" color="fg.muted">
                    Build modern apps with speed and flexibility
                  </Text>
                </Stack>
                <HStack color="fg.subtle">
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
