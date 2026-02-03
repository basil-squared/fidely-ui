import {
  Avatar,
  Button,
  HStack,
  Popover,
  Portal,
  Stack,
  Text,
} from '@fidely-ui/react'
import { LuChartLine } from 'react-icons/lu'

export const PopoverWithBg = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Click me</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content
            css={{
              '--popover-bg': 'red',
            }}
          >
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
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
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
