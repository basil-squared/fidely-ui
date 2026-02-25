import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Card } from '@fidely-ui/react/card'
import { Flex } from '@fidely-ui/react/flex'
import { HStack, Stack } from '@fidely-ui/react/stack'
import { Persona } from '@fidely-ui/react/persona'
import { Span } from '@fidely-ui/react/span'
import { Text } from '@fidely-ui/react/text'

export const HeroCard = () => {
  return (
    <Card.Root width="100%" maxWidth="320px" height="min-content">
      <Card.Body>
        <Stack gap="3">
          <Flex justify="space-between" width="full">
            <Persona
              name="Bret Noel"
              title="@bret_noel__2"
              img="https://rb.gy/39f8mx"
              size="xl"
            />

            <Box>
              <Button colorPalette="orange" rounded="full" size="xs">
                follow
              </Button>
            </Box>
          </Flex>

          <Text fontSize="sm" color="fg.muted">
            Loving <Span as="strong">@FidelyUi</Span>
          </Text>

          <HStack>
            <Text fontSize="xs" color="fg.muted">
              35 following
            </Text>
            <Text fontSize="xs" color="fg.muted">
              1.2k followers
            </Text>
          </HStack>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}
