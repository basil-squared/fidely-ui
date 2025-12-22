import { Card, Flex, Marquee, Persona, VStack } from '@fidely-ui/react'

export const MarqueeVertical = () => {
  return (
    <VStack>
      <Flex gap="2">
        {/* Bottom scrolling marquee */}
        <Marquee.Root side="bottom" height="320px">
          <Marquee.Viewport>
            <Marquee.Content
              role="region"
              aria-roledescription="marquee"
              aria-label="Team members"
            >
              {items.map(({ name, role }) => (
                <Marquee.Item key={name}>
                  <Card.Root
                    bg="bg.emphasized"
                    _hover={{ bg: 'bg.emphasized/70' }}
                    width="250px"
                  >
                    <Card.Body gap="2">
                      <Card.Header>
                        <Flex justify="space-between" align="flex-start">
                          <Persona name={name} title={role} size="lg" />
                        </Flex>
                      </Card.Header>
                      <Card.Description>{`${role} at ${name}`}</Card.Description>
                    </Card.Body>
                  </Card.Root>
                </Marquee.Item>
              ))}
            </Marquee.Content>
          </Marquee.Viewport>
        </Marquee.Root>

        {/* Top scrolling marquee */}
        <Marquee.Root side="top" height="320px">
          <Marquee.Viewport>
            <Marquee.Content
              role="region"
              aria-roledescription="marquee"
              aria-label="Team members"
            >
              {items.map(({ name, role }) => (
                <Marquee.Item key={name}>
                  <Card.Root
                    bg="bg.emphasized"
                    _hover={{ bg: 'bg.emphasized/70' }}
                    width="250px"
                  >
                    <Card.Body gap="2">
                      <Card.Header>
                        <Flex justify="space-between" align="flex-start">
                          <Persona name={name} title={role} size="lg" />
                        </Flex>
                      </Card.Header>
                      <Card.Description>{`${role} at ${name}`}</Card.Description>
                    </Card.Body>
                  </Card.Root>
                </Marquee.Item>
              ))}
            </Marquee.Content>
          </Marquee.Viewport>
        </Marquee.Root>
      </Flex>
    </VStack>
  )
}

const items = [
  { name: 'Alice', role: 'Designer' },
  { name: 'Bob', role: 'Developer' },
  { name: 'Clara', role: 'Product Lead' },
  { name: 'David', role: 'Engineer' },
  { name: 'Ella', role: 'Manager' },
]
