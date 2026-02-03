import { Card } from '@fidely-ui/react/card'
import { Center } from '@fidely-ui/react/center'
import { Spinner } from '@fidely-ui/react/spinner'

export const HeroSpinner = () => {
  return (
    <Card.Root
      width="100%"
      maxWidth="130px"
      height="min-content"
      animationStyle="float"
      animationDelay="1.2s"
    >
      <Card.Body height="100px">
        <Center height="200px">
          <Spinner size="xl" colorPalette="orange" />
        </Center>
      </Card.Body>
    </Card.Root>
  )
}
