import { Button, Card, Flex, Image, Text } from '@fidely-ui/react'

export const CardWithLargeImage = () => {
  return (
    <Card.Root width={{ base: 'full', md: '340px' }}>
      <Image src="https://picsum.photos/200/300" height="200px" />
      <Card.Header>
        <Card.Title>Vintage Jacket</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Description>
          Vintage washed, ruggedly built, and designed for the daily grind. Your
          new streetwear staple.
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Flex width="full" justify="space-between" align="center">
          <Text as="strong" size="lg">
            $13.00
          </Text>
          <Button>Add to cart</Button>
        </Flex>
      </Card.Footer>
    </Card.Root>
  )
}
