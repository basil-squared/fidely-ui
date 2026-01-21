import {
  Button,
  CloseButton,
  Field,
  Flex,
  HStack,
  Input,
  Popover,
  Portal,
  Stack,
  Text,
} from '@fidely-ui/react'

export const PopoverCloseWithForm = () => {
  return (
    <HStack>
      {/* one with close button using form */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant="subtle">Click first</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Stack>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid enim qui dignissimos harum in excepturi consectetur
                  corporis eveniet maxime cupiditate. Facere rerum nisi magni
                  repellendus ullam natus in similique repudiandae.
                </Text>
                <Field.Root>
                  <Field.Label>Email</Field.Label>
                  <Input placeholder="Enter email Address" />
                </Field.Root>

                <Flex justify="flex-end">
                  <Popover.CloseTrigger asChild>
                    <Button>Close</Button>
                  </Popover.CloseTrigger>
                </Flex>
              </Stack>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>

      {/* one with close button with X icon float top-left */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant="subtle">Click second</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.CloseTrigger
                asChild
                position="absolute"
                top="2"
                right="2"
              >
                <CloseButton size="sm" />
              </Popover.CloseTrigger>
              <Stack>
                <Popover.Title textStyle="lg">Hello world</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid enim qui dignissimos harum in excepturi consectetur
                  corporis eveniet maxime cupiditate. Facere rerum nisi magni
                  repellendus ullam natus in similique repudiandae.
                </Popover.Description>
              </Stack>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
    </HStack>
  )
}
