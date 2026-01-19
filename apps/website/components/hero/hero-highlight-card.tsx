import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Card } from '@fidely-ui/react/card'
import { Flex } from '@fidely-ui/react/flex'
import { Stack } from '@fidely-ui/react/stack'
import { Persona } from '@fidely-ui/react/persona'
import { Text } from '@fidely-ui/react/text'

export const HeroHighlightCard = () => {
  return (
    <Card.Root
      maxWidth="420px"
      boxShadow="xl"
      animationStyle="floatSlow"
      animationDelay="1.4s"
    >
      <Card.Body>
        <Stack gap="4">
          <Box px="3" py="1">
            <Text fontSize="xs" fontWeight="medium">
              Built with Fidely UI
            </Text>
          </Box>

          <Text fontSize="md" fontWeight="medium">
            “Fidely helped us ship faster with clean, composable components. The
            DX is unmatched.”
          </Text>

          <Flex justify="space-between" align="center">
            <Persona
              name="Sofia Cornoy"
              title="Frontend Engineer"
              img="http://bit.ly/47jPX1D"
              size="md"
            />

            <Button
              size="xs"
              rounded="full"
              variant="subtle"
              colorPalette="orange"
            >
              View profile
            </Button>
          </Flex>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}
