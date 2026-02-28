import {
  Avatar,
  Button,
  Card,
  Flex,
  HStack,
  Stack,
  Text,
} from '@fidely-ui/react'
import { LuCheck, LuX } from 'react-icons/lu'

export const CardWithAvatar = () => {
  return (
    <Card.Root width={{ base: 'full', md: '340px' }}>
      <Card.Header>
        <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
          <HStack gap="3">
            <Avatar.Root>
              <Avatar.Fallback name="Nelson Chinedu" />
              <Avatar.Image src="/nelson.jpeg" />
            </Avatar.Root>

            <Stack gap="0">
              <Card.Title>Nelson Chinedu</Card.Title>
              <Text textStyle={'sm'}>Frontend Engineer</Text>
            </Stack>
          </HStack>
        </Flex>
      </Card.Header>
      <Card.Body>
        <Card.Description>
          Fidely UI completely changed how I build apps. Everything is
          composable and the design system is consistent out of the box
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button variant="subtle" colorPalette={'orange'} flex="1">
          <LuX />
          Decline
        </Button>
        <Button colorPalette={'orange'} flex="1">
          <LuCheck />
          Follow
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}
